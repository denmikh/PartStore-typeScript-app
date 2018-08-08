import * as React from 'react'
import {Header, PartList} from './components'
import './css/App.css';
import { Provider } from 'mobx-react'
import { createStores } from './stores'
import { createAction } from 'mobx/lib/internal';
import { createSecureContext } from 'tls';


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
        <Header />
        <div className="wrapper">
          <Provider {...rootStore}>
            <PartList/>
          </Provider>
        </div>
      </div>
    );
  }
}

