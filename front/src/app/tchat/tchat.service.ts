import { Injectable } from '@angular/core'
import { Apollo } from 'apollo-angular'
import gql from 'graphql-tag'

@Injectable()
export class TchatService {

    constructor(public apollo: Apollo){ }

    getMessageQuery = gql`{
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

    saveMessageQuery = gql`mutation saveMessageWithVariable($message: MessageInput) {
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

    getMessages() {
        return this.apollo.watchQuery({
            query: this.getMessageQuery
        })
    }

    saveMessage(message) {
        return this.apollo.mutate({
            mutation: this.saveMessageQuery,
            update: (store, { data: { saveMessage } }) => {
                // Read the data from our cache for this query.
                const data: any = store.readQuery({ query: this.getMessageQuery });
        
                // Add our todo from the mutation to the end.
                data.getMessages.push(saveMessage);
        
                // Write our data back to the cache.
                store.writeQuery({ query: this.getMessageQuery, data });
            },
            optimisticResponse: {
                __typename: 'Mutation',
                saveMessage: {
                    __typename: 'Message',
                    ...message,
                    sender : {
                        __typename: 'Sender',
                        ...message.sender
                    },
                    date: Date.now,
                    status: 'PENDING'
                }
            },
            variables: {message}        
        })
    }
}