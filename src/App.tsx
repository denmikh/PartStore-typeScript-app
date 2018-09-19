import * as React from 'react'
import {Header, PartList, Login, Register} from './components'
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
        <Header/>
        <div className="wrapper">
          <BrowserRouter>
            <div>
              <Route path="/" component={Login} />
            </div>
          </BrowserRouter>
          <BrowserRouter>
            <div>
              <Route path="/" component={Register} />
            </div>
          </BrowserRouter>
          <Provider {...rootStore}>
            <PartList/>
          </Provider>
        </div>
      </div>
    );
  }
}

