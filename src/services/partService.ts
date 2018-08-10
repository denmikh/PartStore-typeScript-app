import {PartModel} from '../models'
import * as rp from 'request-promise'
import { config } from '../config'
import * as request from 'request';
import { RequestAPI } from 'request';

export class PartService {
    private readonly client: RequestAPI<rp.RequestPromise, rp.RequestPromiseOptions, request.RequiredUriUrl>;

    constructor () {
    this.client = rp.defaults({
        json: true
    });
    }

    getAll(): Promise<PartModel[]> {
        return this.client.get(`${config.dev.portal}/api/parts`) as any
    }

    getById(_id:string): Promise<any> {
        return this.client.get(`${config.dev.portal}/api/parts/${_id}`) as any
    }
}