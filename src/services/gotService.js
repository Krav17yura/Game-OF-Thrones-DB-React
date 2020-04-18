
export default class GotService {
    constructor() {
        this._apiBase = "https://www.anapioficeandfire.com/api";
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url} , received ${res.status}`);
        }
        return await res.json();
    }

    getAllCharacters = async () => {
        const res = await this.getResource(`/characters?page=5&pageSize=10`)
        return res.map(this._transformCharacter)
    }
    getCharacter = async (id) => {
        const res = await this.getResource(`/characters/${id}`)
        return this._transformCharacter(res);
    }

    getAllHouses = async () => {
        const res = await this.getResource(`/houses?page=2`)
        return res.map(this._transformHouse)
    }

    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}/`);
        return this._transformHouse(house);
    }

    getAllBooks = async () => {
        const res = await this.getResource(`/books/`);
        return res.map(this._transformBook);
    }

    getBook = async (id) => {
        const book = await this.getResource(`/books/${id}/`);
        return this._transformBook(book);
    }

    _transformCharacter = (char) => {
        return {
            name: char.name,
            gender: char.gender,
            culture: char.culture,
            born: char.born,
            died: char.died
        }
    }
    _transformHouse = (house) => {
        return {
            id: house,
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            ancestralWeapons: house.ancestralWeapons
        };
    }

    _transformBook = (book) => {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            released: book.released
        };
    }
}
