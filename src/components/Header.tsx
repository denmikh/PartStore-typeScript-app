import * as React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// import { LoginModalBody } from './LoginModalBody';
import {Login} from './Login'
import {Register} from './Register'
import {AddPart} from './AddPart'

import {BrowserRouter, Route, Link} from 'react-router-dom'


export namespace Header {
  export interface Props {
      //empty
  }
  export interface State {
    modal_login: boolean;
    modal_addPart: boolean;
  }
}
export class Header extends React.Component<Header.Props, Header.State > {
    constructor(props) {
        super(props);
        this.state = {
            modal_login: false,
            modal_addPart: false,

        }
        this.login = this.login.bind(this);
        this.addPart = this.addPart.bind(this);
    }

    login() {
        this.setState({
          modal_login: !this.state.modal_login
        });
    }
    addPart() {
        this.setState({
          modal_addPart: !this.state.modal_addPart
        });
    }
  
    logout = () => {
        localStorage.removeItem('jwtToken');
        window.location.reload();
    }

    render () {
      return (
        <header>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">AutoParts61</NavbarBrand>
                <Nav className="menu ml-auto " navbar>
                    <NavItem>
                        <NavLink><Link to="/">Главная</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/components/">Каталог</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/components/">О нас</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/components/">Обратная связь</NavLink>
                    </NavItem>
                </Nav>
                <div className="btn-authorization">
                    <Button color="danger" className="btn login" onClick={this.login}>Login</Button>
                    <Link to='/reg'><Button color="danger" className="btn reg">Register</Button></Link>
                    {localStorage.getItem('jwtToken') &&
                        <Button color="danger" className="btn" onClick={this.logout}>Logout</Button>
                    }
                    {localStorage.getItem('jwtToken') &&
                        <Button color="danger" className="btn" onClick={this.addPart}>Add Part</Button>
                    }
                </div>
            </Navbar>

            <Modal isOpen={this.state.modal_login} toggle={this.login} className="LoginModalBody">
                <ModalHeader toggle={this.login}>Autorization</ModalHeader>
                <ModalBody>
                    <Login/>
                    <p>
                         Not a member? <Link to='/reg' onClick={this.login}><span className="glyphicon glyphicon-plus-sign" aria-hidden="true" ></span> Register here</Link>
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