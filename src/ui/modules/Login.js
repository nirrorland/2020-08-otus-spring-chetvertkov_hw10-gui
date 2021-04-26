import React from 'react'
import {Helmet} from "react-helmet/es/Helmet";
import {Header} from "../modules/Header";
import ApiRouter from "../api/ApiRouter";


export default class Login extends React.Component {

    constructor() {
        super();
		
		this.state = {
            username: "",
            password: ""
            
        }
    }

    componentDidMount() {
		//window.location.replace('https://www.google.com')
    }
	
	    handleChange(event) {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

saveBook(event) {
        event.preventDefault()

        const username = this.state.username;
        const password = this.state.password;
        

        this.setState({
            loading: true
        });

        const usr = {
            username,
            password
           
        };

        ApiRouter.doLogin(usr)
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
                        <title>Login</title>
                    </Helmet>
                </div>

                <div className="container mt-2 ml-2">
                    <h2>Please log in</h2>
                </div>
               <div className="container">
        <form className="form-signin" method="post" action="/api/login">
          <h2 className="form-signin-heading">Please sign in</h2>
          <p>
            <label htmlFor="username" className="sr-only">Username</label>
            <input type="text" id="username" name="username" className="form-control" placeholder="Username" required autofocus />
          </p>
          <p>
            <label htmlFor="password" className="sr-only">Password</label>
            <input type="password" id="password" name="password" className="form-control" placeholder="Password" required />
          </p>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
      </div>
            </React.Fragment>
        )
    }
}