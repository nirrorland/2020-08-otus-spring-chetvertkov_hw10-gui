import axios from 'axios';


const BASE_API_URL = '/api';
const BOOK_URL = BASE_API_URL + '/book/';
const AUTHOR_URL = BASE_API_URL + '/author/';
const GENRE_URL = BASE_API_URL + '/genre/';
const LOGIN_URL = BASE_API_URL + '/login';

const instance = axios.create()

//on successful response
instance.interceptors.response.use(
	response=>{
		if (response.status === 302) {
			window.location.href = "http://localhost:8082/login"; 
		}
		
		//console.log(response)
		return response;
	},
	error=>{
		if (error.response.status === 401) {
			console.error('Error Message: 1234');
			window.location.href = "http://localhost:9000/login"; 
		}
		return Promise.reject(error);
	}
);

export default new class ApiRouter {
	
	//fetchAllBooks() {
		
//		return axios.get(BOOK_URL);   
		
  //  }

    fetchAllBooks() {
        return fetch(BOOK_URL).then((response) => {
			 console.log('error: ' + response.status);
    if(response.status === 401) window.location.href = "http://localhost:9000/login"; 
    else return response;
  })
		
  }

    fetchBook(id) {
        return instance.get(BOOK_URL + window.localStorage.getItem(id))
    }

    saveBook(book) {
        return instance.put(BOOK_URL, book);
    }

    createBook(data) {
        return instance.post(BOOK_URL, data)
    }

    deleteBook(id) {
        return instance.delete(BOOK_URL + id)
    }

    fetchCommentsByBook(id) {
        return instance.get(BOOK_URL + window.localStorage.getItem(id) + '/comments/')
    }

    fetchAllAuthors() {
        return fetch(AUTHOR_URL).then((response) => {
			 console.log('error: ' + response.status);
    if(response.status === 401) window.location.href = "http://localhost:9000/login"; 
    else return response;
  })
    }

    fetchAllGenres() {
        return fetch(GENRE_URL).then((response) => {
			 console.log('error: ' + response.status);
    if(response.status === 401) window.location.href = "http://localhost:9000/login"; 
    else return response;
  })
    }

}