import axiosInstance from './axiosInstance';

export const submitContactMessage = async (message) => {
  const response = await axiosInstance.post('/contact-page/messages', message);
  return response.data;
};
