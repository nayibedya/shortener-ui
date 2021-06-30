import Config from './Config';

export const createUrl = (endpoint) => {
    const dataUrl = Config.getHostName();
    if(endpoint === "") {
        return `${dataUrl}`;
    }
    return `${dataUrl}/${endpoint}`;
}