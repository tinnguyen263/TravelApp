/* eslint-disable import/prefer-default-export */
export const authenticate = (email, password) => {
    const url = `http://travel-app.speedup.world/api/login?email=${email}&password=${password}`;
    console.log(url);
    return fetch(url, { method: 'POST' }).then(resp => resp.json());
};