import * as React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// import { LoginModalBody } from './LoginModalBody';
import {Login} from './Login'
import {Register} from './Register'
import {AddPart} from './AddPart'
import { BrowserRouter, Route, Router } from 'react-router-dom'



export namespace Header {
  export interface Props {
      //empty
  }
  export interface State {
    modal_1: boolean;
    modal_2: boolean;
    modal_3: boolean;
  }
}
export class Header extends React.Component<Header.Props, Header.State > {
    constructor(props) {
        super(props);
        this.state = {
            modal_1: false,
            modal_2: false,
            modal_3: false,

        }
        this.toggle_1 = this.toggle_1.bind(this);
        this.toggle_2 = this.toggle_2.bind(this);
        this.toggle_3 = this.toggle_3.bind(this);
    }

    toggle_1() {
        this.setState({
          modal_1: !this.state.modal_1
        });
    }
    toggle_2() {
        this.setState({
          modal_2: !this.state.modal_2
        });
    }
    toggle_3() {
        this.setState({
          modal_3: !this.state.modal_3
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
                        <NavLink href="/components/">Главная</NavLink>
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
                    <Button color="danger" className="btn" onClick={this.toggle_1}>Login</Button>
                    <Button color="danger" className="btn" onClick={this.toggle_2}>Register</Button>
                    {localStorage.getItem('jwtToken') &&
                        <Button color="danger" className="btn" onClick={this.logout}>Logout</Button>
                    }
                    {localStorage.getItem('jwtToken') &&
                        <Button color="danger" className="btn" onClick={this.toggle_3}>Add Part</Button>
                    }
                </div>
            </Navbar>

            <Modal isOpen={this.state.modal_1} toggle={this.toggle_1} className="LoginModalBody">
                <ModalHeader toggle={this.toggle_1}>Autorization</ModalHeader>
                <ModalBody>
                    <BrowserRouter>
                        <div>
                            <Route path="/" component={Login} />
                        </div>
                    </BrowserRouter>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={this.toggle_1}>Cancel</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={this.state.modal_2} toggle={this.toggle_2} className="RegisterModalBody">
                <ModalHeader toggle={this.toggle_2}>Registration</ModalHeader>
                <ModalBody>
                    <BrowserRouter>
                        <div>
                            <Route path="/" component={Register} />
                        </div>
                    </BrowserRouter>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={this.toggle_2}>Cancel</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={this.state.modal_3} toggle={this.toggle_3} className="Add part">
                <ModalHeader toggle={this.toggle_3}>AddPart</ModalHeader>
                <ModalBody>
                    <BrowserRouter>
                        <div>
                            <Route path="/" component={AddPart} />
                        </div>
                    </BrowserRouter>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={this.toggle_3}>Cancel</Button>
                </ModalFooter>
            </Modal>
          

        </header>
      );
    }
  };