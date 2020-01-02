import { stringIsFilled } from '../helpers/tools'

const API_ROOT = 'https://api.sketchfab.com/v3';
const AUTHORIZATION = 'Token 345e7ba8e00146f4882abe3af6a9f5e8';

export async function allModels() {
    return await fetchAPI(
        '/models ',
        ''
    );
};

export async function myModels() {
    return await fetchAPI(
        '/me/models',
        ''
    );
};

export async function myFavoriteModels() {
    return await fetchAPI(
        '/me/likes ',
        ''
    );
};

export async function searchOnAllModels(query) {
    if (stringIsFilled(query)) {
        return await fetchAPI(
            '/search?type=models&',
            `q=${query}`
        );
    } else {
        return await fetchAPI(
            '/search?type=models&',
            ''
        );
    }
};

export async function searchOnMyModels(query) {
    if (stringIsFilled(query)) {
        return await fetchAPI(
            '/me/search?type=models&',
            `q=${query}`
        );
    } else {
        return await fetchAPI(
            '/me/search?type=models&',
            ''
        );
    }
};

export async function fetchNewPage(url) {
    try {
        return await fetch(
            url,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': AUTHORIZATION
                }
            }
        ).then(res => res.json());
    } catch (e) {
        console.log(e);
    }
}

async function fetchAPI(api, params) {
    try {
       return await fetch(
            API_ROOT + api + params,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': AUTHORIZATION
                }
            }
       ).then(res => res.json());
    } catch (e) {
        console.log(e);
    }

};
