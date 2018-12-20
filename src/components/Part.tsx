import * as React from 'react';
import { Component } from 'react';
import {PartModel} from '../models'


export namespace Part{
  export interface Props{
    part: PartModel,
  }
}

export class Part extends Component<Part.Props> {
    render() {
        const {part} = this.props
        return (
            <article>
                <div>
                    <h3>{part.name}</h3>
                    <div>
                        <img src={`${part.image}`} className="min_image" alt="img"/>
                        <p>{part.description}</p>
                        <p>{part.applicability}</p>
                        <h3>{part.price}</h3>
                    </div>
                </div>
            </article>
        );
    }
}