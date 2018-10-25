    import * as React from 'react';
    import { Component } from 'react';
    import axios from 'axios';
    import { Link } from 'react-router-dom';
    import '../css/Login.css';
    
    export namespace AddPart{
        export interface Props{
          history?: any;
        }
        export interface State {
          name: string,
          origArticle: string,
          description: string,
          fullDescription?: string,
          applicability: string,
          price: string,
          image: string,
          message: string
        }
    }
    
    export class AddPart extends Component<AddPart.Props, AddPart.State> {
      constructor(props) {
        super(props);
        this.state = {
          name: '',
          origArticle: '',
          description: '',
          fullDescription: '',
          applicability: '',
          price: '',
          image: '',
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

        const { name, origArticle, description, fullDescription, applicability, price, image, message } = this.state;
        
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.post('http://localhost:1337/api/parts', { name, origArticle, description, fullDescription, applicability, price, image, message })
          .then((result) => {
              this.setState({ message: '' });
              this.props.history.push("/")
              this.setState({ message: 'Part successfully added ' });
          })
          .catch((error) => {
            if(error.response.status === 401) {
              this.setState({ message: 'Unauthorized, Please log in !' });
            }
          });
        }
    
      render() {

        const { name, origArticle, description, fullDescription, applicability, price, image, message } = this.state;
        return (
          <div className="container">
            <form className="form-signin" onSubmit={this.onSubmit}>

                {message !== '' &&
                    <div className="alert alert-warning alert-dismissible" role="alert">
                        { message }
                    </div>
                }

              <input type="text" className="form-control" placeholder="Name" name="name" value={name} onChange={this.onChange} required/>
              <input type="text" className="form-control" placeholder="origArticle" name="origArticle" value={origArticle} onChange={this.onChange} required/>
              <input type="text" className="form-control" placeholder="description" name="description" value={description} onChange={this.onChange} required/>
              <input type="text" className="form-control" placeholder="fullDescription" name="fullDescription" value={fullDescription} onChange={this.onChange} required/>
              <input type="text" className="form-control" placeholder="applicability" name="applicability" value={applicability} onChange={this.onChange} required/>
              <input type="text" className="form-control" placeholder="price" name="price" value={price} onChange={this.onChange} required/>
              <input type="text" className="form-control" placeholder="image" name="image" value={image} onChange={this.onChange} required/>
              <button className="btn btn-lg btn-primary btn-block" type="submit">Add</button>
            </form>
          </div>
        );
      }
    }