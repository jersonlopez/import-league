import axios from 'axios';
import { config } from '../config';
import { ApiClientParams } from '../types';

export const apiClient = async <T>({
  endpoint,
  data = {},
  method = 'get'
}: ApiClientParams) => {
  const requestOptions = {
    url: endpoint,
    method,
    baseURL: `${config.baseApiUrl}/`,
    data,
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': config.apiToken,
    },
  };

  return axios<T>(requestOptions);
};
