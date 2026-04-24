const devlogModules = import.meta.glob('../content/devlog/*.md', {
  eager: true,
  import: 'default',
  query: '?raw',
});

const FRONTMATTER_PATTERN = /^---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/;

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

      accumulator[key.trim()] = valueParts.join(':').trim();
      return accumulator;
    }, {});

  return { metadata, content: markdownBody.trim() };
};

const parseTags = (value = '') =>
  value
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean);

const sortByDateDesc = (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime();

const resolveSlugFromPath = (path) => path.split('/').pop().replace('.md', '');

export const devlogEntries = Object.entries(devlogModules)
  .map(([path, rawContent]) => {
    const { metadata, content } = parseFrontmatter(rawContent);
    const slug = metadata.slug || resolveSlugFromPath(path);

    return {
      id: slug,
      slug,
      title: metadata.title || slug,
      date: metadata.date || '1970-01-01',
      summary: metadata.summary || '',
      tags: parseTags(metadata.tags),
      content,
    };
  })
  .sort(sortByDateDesc);

export const getDevlogEntryBySlug = (slug) =>
  devlogEntries.find((entry) => entry.slug === slug);

export const getRecentDevlogEntries = (limit = 3) => devlogEntries.slice(0, limit);
