import React from 'react'
import {Helmet} from "react-helmet/es/Helmet";
import {Header} from "../modules/Header";
import ApiRouter from "../api/ApiRouter";


export default class BookAdd extends React.Component {

    constructor(){
        super();

        this.state = {
            title: "",
            author: "",
            genre: "",
        }
    }


    handleChange(event) {
        this.setState({
            [event.target.name]:event.target.value
        })
    }


    saveBook(event) {
        event.preventDefault()

        const name = this.state.title;
        const author = this.state.author;
        const genre = this.state.genre;

        this.setState({
            loading: true
        });

        const book = {
            name,
            author,
            genre
        };

        ApiRouter.createBook(book)
            .then(response => {
                this.props.history.push('/Book');
            });
    }


    render() {

        return (
            <React.Fragment>
                <div>
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>Add new book</title>
                    </Helmet>
                </div>
                <Header history={this.props.history}/>

                <div className="container mt-2 ml-2">
                    <h2>Add new book</h2>
                </div>
                <div className="container">
                    <form onSubmit={this.saveBook.bind(this)}>
                        <div className="form-group">
                            <input className="form-control" type="text" name="title" aria-describedby="titleHelp"
                                   value={this.props.title} onChange={this.handleChange.bind(this)} required />
                                <small className="form-text text-muted" id="titleHelp">Enter book name</small>
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text" name="author" aria-describedby="authorHelp"
                                   value={this.props.author} onChange={this.handleChange.bind(this)} required />
                                <small className="form-text text-muted" id="authorHelp">Enter author name</small>
                        </div>
                        <div className="form-group">
                        <input className="form-control" type="text" name="genre" aria-describedby="genreHelp"
                               value={this.props.genre} onChange={this.handleChange.bind(this)} required />
                                <small className="form-text text-muted" id="genreHelp">Enter genre name</small>
                        </div>
                        <div className="float-right my-sm 1">
                            <button className="btn btn-primary" type="submit">Add new book</button>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}