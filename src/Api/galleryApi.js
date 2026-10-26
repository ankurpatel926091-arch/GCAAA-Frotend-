import axiosInstance from './axiosInstance';

export const getPublishedGalleryPhotos = async () => {
  const response = await axiosInstance.get('/gallery');
  return response.data.data;
};
