import axios from "axios";

const ServerRoot: string = "http://10.10.129.20:8000/";
const APIRoot: string = `${ ServerRoot }api/`;

axios.defaults.baseURL = APIRoot;
axios.interceptors.request.use(
    config => {
        config.headers.Authorization = `Bearer ${ localStorage.getItem('authToken')}`;
        return config;
    },
    error => {
        Promise.reject(error);
    }
)


class ResponseError extends Error {
    status: number
    
    constructor(message: string, status: number) {
        super(message);
        this.name = "ResponseError";
        this.status = status;
    }

    toString(): string {
        return `${this.name}: ${this.message} (${this.status})`;
    }
}


const ResponseStatuses = {
    OK: 200,
    USED_EMAIL: 400,
    NOT_AUTHORIZED: 401,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,
}


/**
 * Generates real servers source for the fetched image.
 * 
 * @param { string } image Fetched path for the image.
 * @returns { string } Real source for the fetched image.
 */
function getServersImageSource(image: string): string {
    return ServerRoot.slice(0, -1) + image;
}


async function fetchUser() {
    return await axios.get("user/");
}


export {
    ServerRoot,
    APIRoot,
    ResponseStatuses,
    
    ResponseError,
    
    getServersImageSource,
    fetchUser,
};
