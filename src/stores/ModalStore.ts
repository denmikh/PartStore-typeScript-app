import { observable, action } from 'mobx'

export class ModalStore {
 constructor() {
   this.isShown = false
 }

 @observable public isShown: boolean

 @action
 show = (): void => {
   this.isShown = true
 }

 @action
 hide = (): void => {
   this.isShown = false
 }
}