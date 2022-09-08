import sendRequest from './send-request';
const BASE_URL = '/api/features';

export function getTracks() {
  return sendRequest(BASE_URL);
}