const apiUrl = 'https://opentdb.com/';

const checkStatus = (response: any) => {
    if (response.ok) {
        return response.text().then(function(text: any) {
          return text ? JSON.parse(text) : {}
        })
    } else if (response.status === 404) {
        return {
          notFound: true
        }
    }
    return response.json();
};

const headers = {
    //'Content-Type': 'application/json',
}

const setSettings = (method: string, body?: object) => {
    const settings = {
        RequestMode: 'no-cors',
        method,
        headers,
        body: body && body instanceof FormData ? body : JSON.stringify(body)
    }
    return settings
}

export const api = {
    GET: (query: string) => {
        return fetch(apiUrl + query, setSettings('GET')).then(checkStatus)
    }
};