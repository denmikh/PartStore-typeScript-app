import * as React from 'react'
import {Header, PartList, Register} from './components'
import './css/App.css';
import { Provider } from 'mobx-react'
import { createStores } from './stores'
import { createAction } from 'mobx/lib/internal';
import { createSecureContext } from 'tls';

import { BrowserRouter, Route, Router, Link, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
export const history = createBrowserHistory();

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
        <Router history={history}>
          <div>
            <Provider {...rootStore}>
              <Header/>
            </Provider>
            <div className="wrapper">
              <Provider {...rootStore}>
                <Route path="/" exact component={PartList}/>
              </Provider>
              <Route path="/reg" component={Register}/>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;