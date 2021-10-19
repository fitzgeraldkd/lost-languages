// import { ImageObj } from '../shared/types'

export function randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function sendRequest<T>(url: string, callback: Function=() => {}, options: object={}) {
    fetch(url, options)
        .then(resp => resp.json())
        .catch(error => {
            console.error(error);
            console.error('URL:', url);
            console.error('Callback:', callback);
            console.error('Options:', options);
        })
        .then(results => callback(results as T));
}