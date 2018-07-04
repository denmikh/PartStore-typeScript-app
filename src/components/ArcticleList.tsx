import * as React from 'react';
import { Component } from 'react';
import { Article } from './Article';
import { ArticleService } from '../services'


export namespace ArcticleList{
  export interface Props{
  }

  export interface State {
    articles: any[]
  }
}

export class ArcticleList extends Component<ArcticleList.Props, ArcticleList.State> {
  
  private _articleService = new ArticleService()
  
  constructor(props) {
      super(props);
      this.state = { articles: [] }
  }

  componentDidMount(){
    this._articleService.getAll()
    .then(
      result =>{
        this.setState( {articles: result})
      },
      error => {
        console.error(error.message)
      }
    )
  }

    render () {
        const articleElements = this.state.articles.map((articles) =>
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