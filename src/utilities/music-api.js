import sendRequest from './send-request';
const BASE_URL = '/api/features';

export function getTracks(query) {
  return sendRequest(BASE_URL, 'POST', {query});
}