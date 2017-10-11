import { Injectable } from '@angular/core'
import { Apollo } from 'apollo-angular'
import gql from 'graphql-tag'

@Injectable()
export class TchatService {

    constructor(public apollo: Apollo) {}

    getMessages() {
        return this.apollo.watchQuery({
            query: getRequest
        })
    }
}

const getRequest = 
gql`{
    getMessages {
        sender {
            pseudo
            firstName
            lastName
        }
        content
        localisation
        date
        status
    }
}`