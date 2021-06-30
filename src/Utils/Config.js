export default class Config {

    static getHostName() {
        return process.env.REACT_APP_API_HOST_NAME;
    }
}