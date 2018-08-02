export * from './IConfiguration'
import { ConfigList } from './IConfiguration'

export const config: ConfigList = {
    dev: {
        portal: 'http://54.159.156.31:1337'
    },
    prod: {
        portal: ''
    }
}
