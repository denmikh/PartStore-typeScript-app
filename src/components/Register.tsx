import * as React from 'react';
import { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/Login.css';

export namespace Register{
    export interface Props{
      history?: any;
    }
    export interface State {
      username: string;
      password: string;
      message: string;
    }
}

export class Register extends Component<Register.Props, Register.State> {
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

    axios.post('http://localhost:1337/api/signup', { username, password })
        .then((result) => {
            this.setState({ message: '' });
            this.props.history.push("/login")
            this.setState({ message: 'User "'+username+'" successfully register ' });
        })
      //   .catch((error) => {
      //     if(error.response.status === 401) {
      //         this.setState({ message: 'Login failed. Username or password not match' });
      //     }
      // });
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
          <h2 className="form-signin-heading">Register</h2>
          <input type="email" className="form-control" placeholder="Email address" name="username" value={username} onChange={this.onChange} required/>
          <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
        </form>
      </div>
    );
  }
}