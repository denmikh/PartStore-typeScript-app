import * as React from 'react';
import { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { HeaderStore } from '../stores'
import { inject, observer } from 'mobx-react'
import {HEADER_STORE} from '../const'

import {BrowserRouter, Route, Link} from 'react-router-dom'

import {AddPart} from './AddPart'

export namespace AddPartModalBody{
    export interface Props{
        [HEADER_STORE]?: HeaderStore
    }
}

@inject(HEADER_STORE)
@observer
export class AddPartModalBody extends  Component<AddPartModalBody.Props> {

    toggle = () => {
        this.props.HEADER_STORE.hide()
    };

    render() {
        return (
            <Modal isOpen={this.props.HEADER_STORE.modalAddPartShow} toggle={this.toggle} className="Add part">
                <ModalHeader toggle={this.toggle}>AddPart</ModalHeader>
                <ModalBody>
                    <BrowserRouter>
                        <div>
                            <Route path="/" component={AddPart} />
                        </div>
                    </BrowserRouter>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}