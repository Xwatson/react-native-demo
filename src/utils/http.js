import axios from 'axios';

const request = (url, method = 'GET', data = {}, options = {}) => {
    return new Promise((resolve, reject) => {
        axios.request({
            url,
            method,
            data,
            headers: { 'sign': 'xxx', 'Cache-Control': 'no-cache', token: 'xxx' },
            validateStatus: function (status) {
                return status < 500;
            },
            ...options
        })
        .then(function(res) {
            resolve(res);
        })
        .catch(function(err) {
            reject(err);
        })
    });
}

export { request }