import axios from 'axios';


const BASE_API_URL = '/api';
const BOOK_URL = BASE_API_URL + '/book/';
const AUTHOR_URL = BASE_API_URL + '/author/';
const GENRE_URL = BASE_API_URL + '/genre/';

export default new class ApiRouter {


    fetchAllBooks() {
        return fetch(BOOK_URL);
    }

    fetchBook(id) {
        return axios.get(BOOK_URL + window.localStorage.getItem(id))
    }

    saveBook(book) {
        return axios.put(BOOK_URL, book);
    }

    createBook(data) {
        return axios.post(BOOK_URL, data)
    }

    deleteBook(id) {
        return axios.delete(BOOK_URL + id)
    }

    fetchCommentsByBook(id) {
        return axios.get(BOOK_URL + window.localStorage.getItem(id) + '/comments/')
    }

    fetchAllAuthors() {
        return fetch(AUTHOR_URL);
    }

    fetchAllGenres() {
        return fetch(GENRE_URL);
    }

}