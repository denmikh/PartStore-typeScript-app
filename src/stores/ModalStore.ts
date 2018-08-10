import { observable, action } from 'mobx'
import { PartService } from '../services'
import { PartModel } from '../models'

export class PartDetailsModalStore {
 constructor() {
   this.isShown = false
 }

 @observable public isShown: boolean
 @observable public part: PartModel

 private partService = new PartService()

 @action
 show = (_id: string): void => {
    this.isShown = true
    this.partService.getById(_id)
    .then(
      result =>{
        this.part = result.part
      },
      error => {
        console.error(error.message)
      }
    )
 }

 @action
 hide = (): void => {
   this.isShown = false
 }


 
}