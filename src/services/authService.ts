
import * as rp from 'request-promise'
import { config } from '../config'
import * as request from 'request';
import { RequestAPI } from 'request';

export class AuthService {
    private readonly client: RequestAPI<rp.RequestPromise, rp.RequestPromiseOptions, request.RequiredUriUrl>;

    constructor () {
    this.client = rp.defaults({
        json: true
    });
    }

    signin(): Promise<any> {
        return this.client.post(`${config.dev.portal}/api/signin`) as any
    }

    signup(): Promise<any> {
        return this.client.post(`${config.dev.portal}/api/signup`) as any
    }
}
