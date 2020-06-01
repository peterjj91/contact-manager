import queryString from 'query-string';

export const API_URL = 'https://reqres.in/api';

export const fetchApi = (url, options = {}) => {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then((response) => {
        if (response.status < 400) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((data) => {
        resolve(data);
      })
      .catch((response) => {
        response.json().then((error) => {
          reject(error);
        });
      });
  });
};

export default class CallApi {
  static get(url, options = {}) {
    const { params = {} } = options;
    let queryForLink = queryString.stringify(
      { ...params },
      { arrayFormat: 'comma' }
    );

    return fetchApi(`${API_URL}${url}?${queryForLink}`, {
      mode: 'cors',
      headers: {
        'Content-type': 'application/json',
      },
    });
  }

  static post(url, options = {}) {
    const { params = {}, body = {} } = options;

    let queryForLink = queryString.stringify(
      { ...params },
      { arrayFormat: 'comma' }
    );

    return fetchApi(`${API_URL}${url}?${queryForLink}`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  }

  static delete(url, options = {}) {
    const { params = {}, body = {} } = options;

    let queryForLink = queryString.stringify(
      { ...params },
      { arrayFormat: 'comma' }
    );

    return fetchApi(`${API_URL}${url}?${queryForLink}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  }
}
