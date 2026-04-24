const workModules = import.meta.glob('../content/work/*.md', {
  eager: true,
  import: 'default',
  query: '?raw',
});

const FRONTMATTER_PATTERN = /^---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/;

const parseValue = (value) => {
  if (value === 'null') return null;
  if (value === 'true') return true;
  if (value === 'false') return false;

  if (
    (value.startsWith('[') && value.endsWith(']')) ||
    (value.startsWith('{') && value.endsWith('}'))
  ) {
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  }

  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }

  return value;
};

const parseFrontmatter = (rawContent) => {
  const match = rawContent.match(FRONTMATTER_PATTERN);
  if (!match) {
    return { metadata: {}, content: rawContent.trim() };
  }

  const [, frontmatterBlock, markdownBody] = match;
  const metadata = frontmatterBlock
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .reduce((accumulator, line) => {
      const [key, ...valueParts] = line.split(':');
      if (!key || valueParts.length === 0) {
        return accumulator;
      }

      accumulator[key.trim()] = parseValue(valueParts.join(':').trim());
      return accumulator;
    }, {});

  return { metadata, content: markdownBody.trim() };
};

const resolveIdFromPath = (path) => path.split('/').pop().replace('.md', '');

export const workProjects = Object.entries(workModules)
  .map(([path, rawContent]) => {
    const { metadata, content } = parseFrontmatter(rawContent);
    const id = metadata.id || resolveIdFromPath(path);

    return {
      id,
      title: metadata.title || id,
      description: metadata.description || '',
      fullDescription: content || metadata.description || '',
      image: metadata.image || null,
      categories: metadata.categories || [],
      role: metadata.role || [],
      videoUrl: metadata.videoUrl || null,
      videoUrls: metadata.videoUrls || null,
      websiteUrl: metadata.websiteUrl || null,
      gallery: metadata.gallery || null,
      sortOrder: Number(metadata.sortOrder || 9999),
    };
  })
  .sort((a, b) => a.sortOrder - b.sortOrder)
  .map(({ sortOrder, ...project }) => project);

export const getWorkProjectById = (id) => workProjects.find((project) => project.id === id);
