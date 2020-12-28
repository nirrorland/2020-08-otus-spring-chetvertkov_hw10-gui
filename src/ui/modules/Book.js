import React from 'react'
import {Helmet} from "react-helmet/es/Helmet";
import {Header} from "../modules/Header";
import {Link} from "react-router-dom";
import ApiRouter from "../api/ApiRouter";

export default class Book extends React.Component {

    constructor(props) {
        super(props);
        this.state = {books: [], authors: [], genres: []};

        this.editBook = this.editBook.bind(this);
        this.reloadBooksList = this.reloadBooksList.bind(this);
    }


    componentDidMount() {
        this.reloadBooksList();
    }


    reloadBooksList() {
        ApiRouter.fetchAllBooks()
            .then(response => response.json())
            .then(books => this.setState({books}));
    }


    editBook(id) {
        window.localStorage.setItem("id", id);
        this.props.history.push('/Book/BookUpdate');
    }

    render() {

        return (
            <React.Fragment>
                <div className="component book">
                    <Helmet>
                        <meta charSet="utf-8"/>
                        <title>Books</title>
                    </Helmet>
                </div>
                <Header history={this.props.history}/>

                <div className="container mt-2 ml-2">
                    <h2>Books</h2>
                </div>


                <div className="container float-left my-sm-3">
                    <Link to={"/Book/Add"}>
                        <button className="btn btn-outline-secondary btn-sm">New book</button>
                    </Link>
                </div>

                <div className="container mt-3 ml-3">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Book name</th>
                            <th>Author</th>
                            <th>Genre</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.books.map(book =>
                                <tr key={book.id}>
                                    <td>{book.name}</td>
                                    <td>{book.author}</td>
                                    <td>{book.genre}</td>
                                    <td>
                                        <button className="btn btn-outline-success"
                                                onClick={() => this.editBook(book.id)}> Change
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>

            </React.Fragment>
        )
    }
}