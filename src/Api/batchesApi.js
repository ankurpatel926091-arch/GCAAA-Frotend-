import axiosInstance from './axiosInstance';

export const fetchBatches = async (params = {}) => {
  const response = await axiosInstance.get('/batches', { params });
  return response.data;
};

export const fetchBatchFilterOptions = async () => {
  const response = await axiosInstance.get('/batches/filter-options');
  return response.data;
};
