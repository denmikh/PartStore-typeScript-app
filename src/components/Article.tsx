import * as React from 'react';
import { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export namespace Article{
  export interface Props{
    articles: any
  }

  export interface State {
    modal: boolean
  }
}

export class Article extends Component<Article.Props, Article.State> {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal });
    };

    render() {
        const {articles} = this.props
        return (
            <article >
                <div onClick={this.toggle}>
                    <h2>{articles.name}</h2>
                    <div>
                        <img src={`${articles.img}`} className="min_image" alt="img"/>
                        <p>{articles.description}</p>
                        <p>{articles.applicability}</p>
                        <h3>{articles.price}</h3>
                    </div>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}><h2>{articles.name}</h2></ModalHeader>
                    <ModalBody>
                        <img src={`${articles.img}`} className="min_image" alt="img"/>
                        <h3>Артикул: {articles.orig_article}</h3>
                        <p>Описание: {articles.full_description}</p>
                        <p>Применяемость: {articles.applicability}</p>
                        <h3>Цена: {articles.price}</h3>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>BUY</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </article>
        );
    }
  }