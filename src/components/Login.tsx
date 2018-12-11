import * as React from 'react';
import { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/Login.css';

import {Header} from './Header';

export namespace Login{
  export interface Props{
    history?: any;
  }
  export interface State {
    username: string;
    password: string;
    message: string;
  }
}

export class Login extends Component<Login.Props, Login.State> {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      message: ''
    }
  }
  
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    axios.post('http://localhost:1337/api/signin', { username, password })
        .then((result) => {
            localStorage.setItem('jwtToken', result.data.token);
            // this.setState({ message: '' });
            this.props.history.push('/')
            this.setState({ message: 'Login ok' });
            window.location.reload();
        })
        .catch((error) => {
          if(error.response.status === 401) {
              this.setState({ message: 'Login failed. Username or password not match' });
          }
      });
    }

  render() {
    const { username, password, message } = this.state;
    return (
      <div className="container">
        <form className="form-signin" onSubmit={this.onSubmit}>
          {message !== '' &&
            <div className="alert alert-warning alert-dismissible" role="alert">
              { message }
            </div>
          }
          <h2 className="form-signin-heading">Please sign in</h2>
          <input type="email" className="form-control" placeholder="Email address" name="username" value={username} onChange={this.onChange} required/>
          <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>

          <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
        </form>
      </div>
    );
  }
}