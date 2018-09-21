import * as React from 'react'
import {Header, PartList} from './components'
import './css/App.css';
import { Provider } from 'mobx-react'
import { createStores } from './stores'
import { createAction } from 'mobx/lib/internal';
import { createSecureContext } from 'tls';
import { BrowserRouter, Route, Router } from 'react-router-dom'
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
    const rootStore = createStores()
    return (
      <div className="App">
          <BrowserRouter>
            <div>
              <Route path="/" component={Header} />
            </div>
          </BrowserRouter>
        {/* <Header/> */}
        <div className="wrapper">

          <Provider {...rootStore}>
            <PartList/>
          </Provider>
        </div>
      </div>
    );
  }
}

