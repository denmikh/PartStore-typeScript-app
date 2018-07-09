import * as React from 'react';
import { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { observable } from "mobx"
import { inject, observer } from 'mobx-react'
import {MODAL_STORE} from '../const'
import {ModalStore} from '../stores'




export namespace Article{
  export interface Props{
    articles: any,
    [MODAL_STORE]?: ModalStore
  }

  export interface State {
    modal: boolean
  }
}

@inject(MODAL_STORE)
@observer
export class Article extends Component<Article.Props, Article.State> {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
    }

    toggle = () => {
        this.props.MODAL_STORE.show()
    };

    render() {
        const {articles} = this.props
        return (
            <article >
                <div onClick={this.toggle}>
                    <h3>{articles.name}</h3>
                    <div>
                        <img src={`${articles.image}`} className="min_image" alt="img"/>
                        <p>{articles.description}</p>
                        <p>{articles.applicability}</p>
                        <h3>{articles.price}</h3>
                    </div>
                </div>
                <Modal isOpen={this.props.MODAL_STORE.isShown} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}><h3>{articles.name}</h3></ModalHeader>
                    <ModalBody>
                        <img src={`${articles.image}`} className="min_image" alt="img"/>
                        <h4>Артикул: {articles.origArticle}</h4>
                        <p>Описание: {articles.fullDescription}</p>
                        <p>Применяемость: {articles.applicability}</p>
                        <h4>Цена: {articles.price}</h4>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>BUY</Button>{' '}
                        <Button color="secondary" onClick={this.props.MODAL_STORE.hide}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </article>
        );
    }
  }