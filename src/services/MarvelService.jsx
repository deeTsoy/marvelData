

class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=f853eb8f8a61bb96ed6bcc367c35000b';

    getResource = async (url) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

    getAllChar = async () => {
       const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=300&${this._apiKey}`);
       return res.data.results.map(this._transformChar)
    }

    getChar = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return this._transformChar(res.data.results[0])
    }

    _transformChar = (char) => {
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
}

export default MarvelService;