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
                    <h3>{articles.name}</h3>
                    <div>
                        <img src={`${articles.image}`} className="min_image" alt="img"/>
                        <p>{articles.description}</p>
                        <p>{articles.applicability}</p>
                        <h3>{articles.price}</h3>
                    </div>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
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
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </article>
        );
    }
  }