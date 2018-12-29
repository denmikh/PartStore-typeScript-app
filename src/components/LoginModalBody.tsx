import * as React from 'react';
import { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { HeaderStore } from '../stores'
import { inject, observer } from 'mobx-react'
import {HEADER_STORE} from '../const'

import {BrowserRouter, Route, Link} from 'react-router-dom'

import {Login} from './Login'

export namespace LoginModalBody{
    export interface Props{
        [HEADER_STORE]?: HeaderStore
    }
}

@inject(HEADER_STORE)
@observer
export class LoginModalBody extends  Component<LoginModalBody.Props> {

    toggle = () => {
        this.props.HEADER_STORE.hide()
    };

    render() {
        return (
            <Modal isOpen={this.props.HEADER_STORE.modalLoginShow} toggle={this.toggle} className="LoginModalBody">
            <ModalHeader toggle={this.toggle}>Autorization</ModalHeader>
            <ModalBody>
                <BrowserRouter>
                    <div>
                        <Route path="/" component={Login}/>
                    </div>
                </BrowserRouter>
                <p className="reg-link">
                     Not a member? <Link to='/reg' onClick={this.toggle}>Register here</Link>
                </p>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
        )
    }
}