import * as React from 'react';
import { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { PartDetailsModalStore } from '../stores'
import { inject, observer } from 'mobx-react'
import {MODAL_STORE} from '../const'




export namespace PartModalBody{
    export interface Props{
        [MODAL_STORE]?: PartDetailsModalStore
        
    }
    export interface State {
            //empty
    }
}

@inject(MODAL_STORE)
@observer
export class PartModalBody extends  Component<PartModalBody.Props, PartModalBody.State> {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

     
    toggle = () => {
        this.props.MODAL_STORE.hide()
    };

    render() {
        const {part} = this.props.MODAL_STORE
        console.log(this.props)
        return (
            <Modal isOpen={this.props.MODAL_STORE.isShown} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>Описание товара</ModalHeader>
                <ModalBody>
                    <h3>{part && part.name}</h3>
                    <img src={`${part && part.image}`} className="min_image" alt="img"/>
                    <h4>Артикул: {part && part.origArticle}</h4>
                    <p>Описание: {part && part.fullDescription}</p>
                    <p>Применяемость: {part && part.applicability}</p>
                    <h4>Цена: {part && part.price}</h4>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>BUY</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}