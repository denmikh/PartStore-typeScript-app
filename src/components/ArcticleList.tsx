import * as React from 'react';
import { Component } from 'react';
import { Article } from './Article';


export namespace ArcticleList{
  export interface Props{
    articles: any[]
  }

  export interface State {
    //empty
  }
}

export class ArcticleList extends Component<ArcticleList.Props, ArcticleList.State> {
    constructor(props) {
      super(props);
    }

    render () {
        const articleElements = this.props.articles.map((articles) =>
        <div key = {articles.id} className="article-list__li">
            <Article articles = {articles} />
        </div>)
        return (
            <div className="parts">
                {articleElements}
            </div>
        )
    }
  }