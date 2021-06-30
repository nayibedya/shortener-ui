import axios from 'axios';
const CONTENT_TYPE_JSON = 'Content-Type: application/json';

export async function getRequest(url) {
    const headers = {
        CONTENT_TYPE_JSON
    }
    
    try {
        return await axios.get(url, { headers })
    }
    catch(e) {
        throw e.response.data;
    }
}