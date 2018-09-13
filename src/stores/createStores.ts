import {PartDetailsModalStore} from '.'
import {MODAL_STORE} from '../const'

const modalStore = new PartDetailsModalStore()

export function createStores() {
 
 return {
   [MODAL_STORE]: modalStore,
 }
}