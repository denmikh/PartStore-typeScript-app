import {ModalStore} from '.'
import {MODAL_STORE} from '../const'


const modalStore = new ModalStore()

export function createStores() {
 
 return {
   [MODAL_STORE]: modalStore,
 }
}