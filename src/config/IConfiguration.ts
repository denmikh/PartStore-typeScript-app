export interface IConfiguration {
    portal: string
}

export interface ConfigList {
    dev: IConfiguration
    prod: IConfiguration
}