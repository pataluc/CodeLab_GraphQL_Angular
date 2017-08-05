import messageService from './message.service'

export const MessageField = `
        pseudo: String!
        firstName: String!
        lastName: String!
        message: String!
        localisation: String!
        date: Float!
        status: String!
`

export const MessageTypes = `
    type Message {
        ${MessageField}
    }

    input MessageInput {
        ${MessageField}
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