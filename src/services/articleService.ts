import {Article} from '../models'
import * as rp from 'request-promise'
import { config } from '../config'
import * as request from 'request';
import { RequestAPI } from 'request';

export class ArticleService {
    private readonly client: RequestAPI<rp.RequestPromise, rp.RequestPromiseOptions, request.RequiredUriUrl>;

    constructor () {
    this.client = rp.defaults({
        json: true
    });
    }

    getAll(): Promise<Article[]> {
        return this.client.get(`${config.dev.portal}/api/articles`) as any
    }
}