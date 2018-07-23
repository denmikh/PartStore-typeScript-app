import * as React from 'react';
import { Component } from 'react';
import { Part } from './Part';
import { PartService } from '../services'
import { PartModalBody } from './PartModalBody';
import { PartModel } from '../models'
import { inject, observer } from 'mobx-react'
import { observable } from 'mobx'
import {MODAL_STORE} from '../const'
import {PartDetailsModalStore} from '../stores'

export namespace PartList{
  export interface Props{
    [MODAL_STORE]?: PartDetailsModalStore
    
  }

  export interface State {
  }
}

@inject(MODAL_STORE)
@observer
export class PartList extends Component<PartList.Props, PartList.State> {
  
  @observable private parts: PartModel[] = []
  private partService = new PartService()
  

  componentDidMount(){
    this.partService.getAll()
    .then(
      result =>{
        this.parts = result
      },
      error => {
        console.error(error.message)
      }
    )
  }

    render () {
      const partElements = this.parts.map((part) =>
      <div key = {part._id} className="part-list__li" onClick={() => { this.props.MODAL_STORE.show(part._id) }}>
          <Part part = {part}/>
      </div>)
    
      return (
          <div className="parts">
              {partElements}
              <PartModalBody/>
          </div>
      )
    }
  }