import axios from "axios";
import { COMMON_BACKEND_KEYS } from "../constants";

const {ID, STARRED} = COMMON_BACKEND_KEYS;

const instance = axios.create({
    baseURL: process.env.REACT_APP_ENDPOINT_URL,
    headers: { 'Content-Type': 'application/json' },
});

export const searchService = async (searchValue, successCallback, failCallback, setLoading) => {
    const params = `q=${searchValue}`
    setLoading(true);
    await instance.get(`/search?${params}&_page=0&_limit=10`)
        .then(res => successCallback(res.data))
        .catch(e => failCallback(e.message))
        .finally(() => setLoading(false));
}

export const markItem = async (item, successCallback, failCallback, setStarredLoading) => {
    setStarredLoading(item[ID]);
    await instance.put(`/search/${item[ID]}`, { ...item, [STARRED]: !item[STARRED]})
        .then(res => successCallback(res.data))
        .catch(e => failCallback(e.message))
        .finally(() => setStarredLoading(null));

}

export const fetchStarredResults = async (successCallback, failCallback, setLoading) => {
    setLoading(true);
    await instance.get('search?starred=true')
        .then(res => successCallback(res.data))
        .catch(e => failCallback(e.message))
        .finally(() => setLoading(false));
}
