import * as React from 'react';
import { Navbar, Nav, NavItem} from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {BrowserRouter, Route, Link} from 'react-router-dom'

import { inject, observer } from 'mobx-react'

import {HeaderStore} from '../stores/HeaderStore'
import {HEADER_STORE} from '../const'

import {LoginModalBody} from './LoginModalBody'
import {AddPartModalBody} from './AddPartModalBody'
import '../css/Header.css';

export namespace Header {
    export interface Props {
        [HEADER_STORE]?: HeaderStore
    }
}

@inject(HEADER_STORE)
@observer

export class Header extends React.Component<Header.Props> {

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
                        <React.Fragment>
                            <Button color="danger" className="btn login" onClick={() => { this.props[HEADER_STORE].ModalLoginShow() }}>Login</Button>
                            <Link to='/reg'><Button color="danger" className="btn reg">Register</Button></Link>
                        </React.Fragment>
                    }
                    {localStorage.getItem('jwtToken') &&
                        <React.Fragment>
                            <Button color="danger" className="btn" onClick={() => { this.props[HEADER_STORE].AddPartModalBodyShow() }}>Add Part</Button>
                            <Button color="danger" className="btn" onClick={this.logout}>Logout</Button>
                        </React.Fragment>
                    }
                </div>
            </Navbar>

            <LoginModalBody/>
            <AddPartModalBody/>

        </header>
      );
    }
};
