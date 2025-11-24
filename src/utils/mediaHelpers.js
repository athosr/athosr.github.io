/**
 * Extract YouTube video ID from various YouTube URL formats
 * @param {string} url - YouTube URL (embed, watch, short, etc.)
 * @returns {string|null} - Video ID or null if invalid
 */
export const getYouTubeVideoId = (url) => {
  if (!url) return null;
  
  // Handle embed URLs: https://www.youtube.com/embed/VIDEO_ID
  const embedMatch = url.match(/youtube\.com\/embed\/([^/?]+)/);
  if (embedMatch) return embedMatch[1];
  
  // Handle watch URLs: https://www.youtube.com/watch?v=VIDEO_ID
  const watchMatch = url.match(/youtube\.com\/watch\?v=([^&]+)/);
  if (watchMatch) return watchMatch[1];
  
  // Handle short URLs: https://youtu.be/VIDEO_ID
  const shortMatch = url.match(/youtu\.be\/([^/?]+)/);
  if (shortMatch) return shortMatch[1];
  
  // Handle youtu.be URLs: https://youtu.be/VIDEO_ID
  const youtuBeMatch = url.match(/youtu\.be\/([^/?]+)/);
  if (youtuBeMatch) return youtuBeMatch[1];
  
  return null;
};

/**
 * Generate YouTube thumbnail URL from video ID
 * @param {string} videoId - YouTube video ID
 * @returns {string} - Thumbnail URL
 */
export const getYouTubeThumbnail = (videoId) => {
  if (!videoId) return null;
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};

/**
 * Get display image for a project
 * Priority: image > videoUrl thumbnail > videoUrls[0] thumbnail > placeholder
 * @param {Object} project - Project object
 * @returns {string} - Image URL or placeholder
 */
export const getProjectDisplayImage = (project) => {
  // If project has an image, use it
  if (project.image) {
    return project.image;
  }
  
  // If project has a single video, use its thumbnail
  if (project.videoUrl) {
    const videoId = getYouTubeVideoId(project.videoUrl);
    if (videoId) {
      return getYouTubeThumbnail(videoId);
    }
  }
  
  // If project has multiple videos, use first video's thumbnail
  if (project.videoUrls && project.videoUrls.length > 0) {
    const videoId = getYouTubeVideoId(project.videoUrls[0]);
    if (videoId) {
      return getYouTubeThumbnail(videoId);
    }
  }
  
  // Return a placeholder or null
  return null;
};

/**
 * Check if project has any media (images or videos)
 * @param {Object} project - Project object
 * @returns {boolean}
 */
export const hasMedia = (project) => {
  return !!(
    project.image ||
    project.videoUrl ||
    (project.videoUrls && project.videoUrls.length > 0) ||
    (project.gallery && project.gallery.length > 0)
  );
};

/**
 * Get all videos from a project (single or multiple)
 * @param {Object} project - Project object
 * @returns {string[]} - Array of video URLs
 */
export const getAllVideos = (project) => {
  const videos = [];
  
  if (project.videoUrl) {
    videos.push(project.videoUrl);
  }
  
  if (project.videoUrls && project.videoUrls.length > 0) {
    videos.push(...project.videoUrls);
  }
  
  return videos;
};

