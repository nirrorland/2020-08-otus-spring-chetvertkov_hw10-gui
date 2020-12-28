import React from 'react';
import {Helmet} from "react-helmet/es/Helmet";
import {Header} from "../modules/Header";


export default class App extends React.Component {

    render() {

        return (
            <React.Fragment>
                <div className="app component">
                    <Helmet>
                        <meta charSet="utf-8"/>
                        <title>Start page</title>
                    </Helmet>
                </div>
                <Header history={this.props.history}/>

                <div className="container-mt-2-ml-2">
                    <span><b>Start page</b></span>
                </div>
            </React.Fragment>
        )
    }
}