export * from './IConfiguration'
import { ConfigList } from './IConfiguration'

export const config: ConfigList = {
    dev: {
        portal: 'https://partstore-nodeapi.herokuapp.com'
    },
    prod: {
        portal: ''
    }
}
