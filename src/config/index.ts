export * from './IConfiguration'
import { ConfigList } from './IConfiguration'

export const config: ConfigList = {
    dev: {
        portal: 'http://localhost:1337'
    },
    prod: {
        portal: ''
    }
}
