import { observable, action } from 'mobx'

export class HeaderStore {
 constructor() {
   this.modalLoginShow = false
   this.modalAddPartShow = false
 }

@observable public modalLoginShow: boolean
@observable public modalAddPartShow: boolean

@action
    ModalLoginShow = () => {
        this.modalLoginShow = true
    }
    AddPartModalBodyShow = () => {
        this.modalAddPartShow = true
    }
@action
    hide = (): void => {
        this.modalLoginShow = false
        this.modalAddPartShow = false
    }
}