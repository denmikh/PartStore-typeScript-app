import * as React from 'react';
import { Navbar, Nav, NavItem} from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {BrowserRouter, Route, Link} from 'react-router-dom'

import {Login} from './Login'
import {AddPart} from './AddPart'
import '../css/Header.css';


export namespace Header {
    export interface Props {
        //empty
    }

    export interface State {
        modal_login: boolean;
        modal_addPart: boolean;
    }
}

// перевести компонент на mobx
export class Header extends React.Component<Header.Props, Header.State > {
    constructor(props) {
        super(props);
        this.state = {
            modal_login: false,
            modal_addPart: false,
        }
    }

    login = () => {
        this.setState({
          modal_login: !this.state.modal_login
        });
    }
    addPart = () => {
        this.setState({
          modal_addPart: !this.state.modal_addPart
        });
    }
  
    logout = () => {
        localStorage.removeItem('jwtToken');
        window.location.href= '/';
    }

    render () {
      return (
        <header>
            <Navbar color="light" light expand="md">
                <Link to="/" className="brand-link">AutoParts61</Link>
                <Nav className="menu ml-auto " navbar>
                    <NavItem>
                        <Link className="nav-link" to="/">Главная</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to="/catalog">Каталог</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to="/about">О нас</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to="/">Обратная связь</Link>
                    </NavItem>
                </Nav>
                
                <div className="btn-authorization">
                    {!localStorage.getItem('jwtToken') &&
                        <Button color="danger" className="btn login" onClick={this.login}>Login</Button>
                    }
                    {!localStorage.getItem('jwtToken') &&
                    <Link to='/reg'><Button color="danger" className="btn reg">Register</Button></Link>
                    }
                    {localStorage.getItem('jwtToken') &&
                        <Button color="danger" className="btn" onClick={this.addPart}>Add Part</Button>
                    }
                    {localStorage.getItem('jwtToken') &&
                        <Button color="danger" className="btn" onClick={this.logout}>Logout</Button>
                    }
                </div>
            </Navbar>

            <Modal isOpen={this.state.modal_login} toggle={this.login} className="LoginModalBody">
                <ModalHeader toggle={this.login}>Autorization</ModalHeader>
                <ModalBody>
                    <BrowserRouter>
                        <div>
                            <Route path="/" component={Login} />
                        </div>
                    </BrowserRouter>
                    <p className="reg-link">
                         Not a member? <Link to='/reg' onClick={this.login}>Register here</Link>
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={this.login}>Cancel</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={this.state.modal_addPart} toggle={this.addPart} className="Add part">
                <ModalHeader toggle={this.addPart}>AddPart</ModalHeader>
                <ModalBody>
                    <BrowserRouter>
                        <div>
                            <Route path="/" component={AddPart} />
                        </div>
                    </BrowserRouter>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={this.addPart}>Cancel</Button>
                </ModalFooter>
            </Modal>
          

        </header>
      );
    }
  };