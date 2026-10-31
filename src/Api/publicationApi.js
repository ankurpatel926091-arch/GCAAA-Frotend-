import axiosInstance from './axiosInstance';

/**
 * Fetch published publications for website with optional backend filter
 * @param {object} params - e.g. { year: '2025' } or { edition: '2025 Edition' }
 */
export const getPublishedPublications = async (params = {}) => {
  const response = await axiosInstance.get('/publications', { params });
  return response.data;
};

export default {
  getPublishedPublications,
};
