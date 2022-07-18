import {useHttp} from '../hooks/http.hooks';


const useMarvelService = () => {
    const {loading, request, error, clearError} = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=f853eb8f8a61bb96ed6bcc367c35000b';
    const _baseOffset = 210


    const getAllChar = async (offset = _baseOffset) => {
       const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
       return res.data.results.map(_transformChar)
    }

    const getChar = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformChar(res.data.results[0])
    }

    const _transformChar = (char) => {
        return{ 
            id: char.id, 
            name: char.name,
            description: char.description ? `${char.description.substring(0, 350)}...` : "'There is no description for this character'",
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }

    return {loading, error, getAllChar, getChar, clearError}
}

export default useMarvelService;