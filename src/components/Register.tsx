import * as React from 'react';
import { Component } from 'react';
import axios from 'axios';
import '../css/Login.css';


export namespace Register{
  export interface Props{
    history?: any;
  }
  
  export interface State {
    username: string;
    tel: string;
    city: string;
    password: string;
    message: string;
  }
}

export class Register extends Component<Register.Props, Register.State> {
  constructor(props) {
    super(props);
    this.state = {
        username: '',
        tel: '',
        city: '',
        password: '',
        message: ''
      }
  }

  reloadTimer = (e) => {
    this.props.history.push("/")
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, tel, city, password } = this.state;

    axios.post('http://localhost:1337/api/signup', { username, tel, city, password })
        .then((result) => {
            this.setState({ message: 'User "'+username+'" successfully register ' });
            setTimeout(this.reloadTimer, 1500);
            
        })
        .catch((error) => {
          if(error.response.status === 401) {
              this.setState({ message: 'Login failed. Username or password not match' });
          }
      });
    }

  render() {
    const { username, tel, city, password, message } = this.state;
    return (
      <div className="register">
        <div className="container">
          <form className="form-signin" onSubmit={this.onSubmit}>
            {message !== '' &&
              <div className="alert alert-warning alert-dismissible" role="alert">
                  { message }
              </div>
            }
            <h2 className="form-signin-heading">Register</h2>
            <input type="email" className="form-control" placeholder="Email address" name="username" value={username} onChange={this.onChange} required/>
            <input type="tel" className="form-control" placeholder="Your phone number" name="tel" value={tel} onChange={this.onChange} />
            <input type="text" className="form-control" placeholder="Your city" name="city" value={city} onChange={this.onChange} />
            <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
          </form>
        </div>
      </div>
    );
  }
}