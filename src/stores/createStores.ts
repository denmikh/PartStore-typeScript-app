import {PartDetailsModalStore} from '.'
import {HeaderStore} from './HeaderStore'
import {MODAL_STORE} from '../const'
import {HEADER_STORE} from '../const'

const modalStore = new PartDetailsModalStore()
const headerStore = new HeaderStore()

export function createStores() {
 
 return {
   [MODAL_STORE]: modalStore,
   [HEADER_STORE]: headerStore,
 }
}