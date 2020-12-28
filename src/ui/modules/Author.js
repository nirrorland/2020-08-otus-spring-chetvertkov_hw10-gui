import React from 'react'
import {Helmet} from "react-helmet/es/Helmet";
import {Header} from "../modules/Header";
import ApiRouter from "../api/ApiRouter";


export default class Author extends React.Component {

    constructor() {
        super();
        this.state = {authors: []};
    }

    componentDidMount() {
        ApiRouter.fetchAllAuthors()
            .then(response => response.json())
            .then(authors => this.setState({authors}));
    }


    render() {

        return (
            <React.Fragment>
                <div className="component author">
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>React Spring Library - Авторы</title>
                    </Helmet>
                </div>
                <Header history={this.props.history}/>

                <div className="container mt-2 ml-2">
                    <h2>Авторы</h2>
                </div>
                <div className="container mt-3 ml-3">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Имя автора</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.authors.map((author, i) => (
                                <tr key={i}>
                                    <td>{author.id}</td>
                                    <td>{author.authorName}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}