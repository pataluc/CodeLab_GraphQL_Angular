import * as messageService from './message.service'

export const MessageField = `
    content: String!
    localisation: String!
    date: Float!
    status: String!
`

export const SenderField = `
    pseudo: String!
    firstName: String!
    lastName: String!
`

export const MessageTypes = `
    type Message {
        sender: Sender!
        ${MessageField}
    }

    input MessageInput {
        sender: SenderInput!
        ${MessageField}
    }
`

export const SenderTypes = `
    type Sender {
        ${SenderField}
    }

    input SenderInput {
        ${SenderField}
    }
`

export const MessageQueries = `
    getMessages : [Message]
`

export const MessageMutations = `
    saveMessage(message: MessageInput): Message
`

export const MessageResolvers = {
    getMessages: () => {
        return messageService.getMessages()
    },
    saveMessage: ({message}) => {
        return messageService.addMessage(message)
    }
}