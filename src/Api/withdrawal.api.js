import axiosInstance from './axiosInstance';

/**
 * Create a new withdrawal request
 * Signature is sent as base64 string in JSON body
 * @param {object} data - { candidateName, postNominated, proposerName, seconderName, candidateAddress, signature }
 */
export const createWithdrawal = async (data) => {
  const response = await axiosInstance.post('/withdrawals', data);
  return response.data;
};
export const withdrawalApiClient = axiosInstance;
export default axiosInstance;