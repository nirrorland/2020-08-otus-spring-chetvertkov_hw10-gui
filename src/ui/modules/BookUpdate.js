import Formsy from 'formsy-react';
import React from 'react';
import {Helmet} from "react-helmet/es/Helmet";
import {Header} from "../modules/Header";
import ApiRouter from "../api/ApiRouter";


export default class BookUpdate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            author: '',
            genre: '',
            showComments: false,
            commentsList:[]
        };
        this.getBook = this.getBook.bind(this);
        this.loadComments = this.loadComments.bind(this);
    }


    componentDidMount() {
        this.getBook();
        this.loadComments();
    }

    getBook() {
        ApiRouter.fetchBook("id")
            .then((res) => {
                let book = res.data;
                this.setState({
                    id: book.id,
                    title: book.name,
                    author : book.author,
                    genre : book.genre,
                })
            });
    }

    saveBook() {
        let book = {
            id: this.state.id,
            name: this.state.title,
            author: this.state.author,
            genre: this.state.genre
        };
        ApiRouter.saveBook(book)
            .then(response =>{
                this.props.history.push('/Book');
            });
    }

    loadComments() {
        ApiRouter.fetchCommentsByBook("id")
            .then((res) => {
                this.setState({
                    commentsList : res.data
                })
            });
    }

    showNoCommentsMessage() {
        return this.state.commentsList.length === 0;
    }

    handleTitleChange(e) {
        e.preventDefault();
        this.setState({title : e.target.value });
    }

    handleAuthorChange(e) {
		e.preventDefault();
        this.setState({author : e.target.value });
    }

    handleGenreChange(e) {
		e.preventDefault();
        this.setState({genre : e.target.value });
    }

    handleBookDelete(id) {

        ApiRouter.deleteBook(id)
            .then(response => {
                this.props.history.push('/Book');
            });
    }

    render() {

        return (
            <React.Fragment>
                <div className="book-update component">
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>React Spring Library - Book edit</title>
                    </Helmet>
                </div>
                <Header history={this.props.history}/>

                <div className="container mt-3 ml-3">
                    <h2>Book editing</h2>
                </div>
                <div className="container mt-3 ml-3">
                    <Formsy onValidSubmit={this.saveBook.bind(this)}>
                        <div className="form-group input-group mt-3">
                            <label className="col-sm-2 col-form-label" id="id">ID</label>
                            <div className="col-sm-10">
                                <input className="form-control-plaintext" type="text" id="id" name="id" readOnly defaultValue={this.state.id} />
                            </div>
                        </div>

                        <div className="form-group input-group mt-3">
                            <label className="col-sm-2 col-form-label" id="title">Book title</label>
                            <input className="form-control" type="text" id="title" name="title" defaultValue={this.state.title} onChange={this.handleTitleChange.bind(this)} required />
                        </div>
                        {
                                <div key="key1" className="input-group-append mt-3 mb-3">
                                    <label className="col-sm-2 col-form-label">Author</label>
                                    <input className="form-control" id={this.state.author} name={this.state.author}
                                           defaultValue={this.state.author} onChange={this.handleAuthorChange.bind(this)}  required />
                                </div>
                        }
                        {
                            
                            <div key="key2" className="input-group-append mt-3 mb-3">
                                <label className="col-sm-2 col-form-label">Genre</label>

                                <input className="form-control" id={this.state.genre} name={this.state.genre}
                                       defaultValue={this.state.genre} onChange={this.handleGenreChange.bind(this)} required />
                            </div>
                            
                        }

                        <hr/>

                        <button id="btnSubmit" className="btn btn-success mb-2" type="submit">Save changes</button>
                        <button className="btn btn-outline-danger ml-3 mb-3" type="button" onClick={this.handleBookDelete.bind(this, this.state.id)}>Delete book</button>
                    </Formsy>
                    <hr/>
                </div>
            </React.Fragment>
        )
    }
}