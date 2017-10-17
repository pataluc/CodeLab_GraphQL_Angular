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
            update: (store, {data: { saveMessage }}) => {
                const data : any = store.readQuery({ query : getRequest})
                data.getMessages.push(saveMessage)
                store.writeQuery({ query: getRequest, data})
            },
            optimisticResponse: {
                __typename: 'Mutation',
                saveMessage : {
                    __typename: "Message",
                    ...message,
                    sender : {
                        __typename: "Sender",
                        ...message.sender
                    },
                    status: "PENDING",
                    date: Date.now
                }
            }
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
