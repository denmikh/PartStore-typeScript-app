import * as React from 'react'
import {Header, ArcticleList} from './components'
import articles from './fixtures'
import './css/App.css';


namespace App {
  export interface Props {
    //empty
  }

  export interface State {
    //empty
  }
}

export class App extends React.Component<App.Props, App.State> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="wrapper">
          <ArcticleList  articles= {articles} />
        </div>
      </div>
    );
  }
}

