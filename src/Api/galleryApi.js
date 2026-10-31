import axiosInstance from './axiosInstance';

/**
 * Fetch published gallery photos with backend filtering and pagination
 * @param {Object} params - { category, page, limit, search }
 * @returns {Promise<{ success: boolean, data: Array, pagination: Object, categories: Array }>}
 */
export const getPublishedGalleryPhotos = async (params = {}) => {
  const response = await axiosInstance.get('/gallery', { params });
  return response.data;
};

export default {
  getPublishedGalleryPhotos,
};
