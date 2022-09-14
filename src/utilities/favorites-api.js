import sendRequest from './send-request';

const BASE_URL = '/api/favorites';

// Retrieve favorites for the logged in user
export function getFavorites() {
  return sendRequest(`${BASE_URL}`, 'GET');
}
// Add a favorite to the list
export function addFavorite(data) {
  // Just send data for best security
  return sendRequest(`${BASE_URL}/${data.trackId}`, 'POST', {data});
}

// Delete a favorite from the list
export function deleteFavorite(data) {
  // Just send data for best security
  return sendRequest(`${BASE_URL}/${data.trackId}`, 'DELETE', {data});
}