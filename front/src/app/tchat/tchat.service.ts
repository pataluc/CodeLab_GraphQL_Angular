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

    saveMessage(message) {
        return this.apollo.mutate({
            mutation: saveRequest,
            variables: { message },
            refetchQueries: [{ 
                query: getRequest
            }]
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

const saveRequest = 
gql`mutation saveMessage($message: MessageInput!) {
    saveMessage(message: $message) {
        date
        sender {
            pseudo
            firstName
            lastName
        }
        content
        localisation
        status
    }
}`
