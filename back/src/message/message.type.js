import messageService from './message.service'

const MessageField = `
        pseudo: String!
        firstName: String!
        lastName: String!
        message: String!
        localisation: String!
        date: Float!
        status: String!
`

const MessageTypes = `
    type Message {
        ${MessageField}
    }

    input MessageInput {
        ${MessageField}
    }
`

const MessageQueries = `
    getMessages : [Message]
`

const MessageMutations = `
    saveMessage(message: MessageInput): Message
`

const MessageResolvers = {
    getMessages: () => {
        return messageService.getMessages()
    },
    saveMessage: ({message}) => {
        return messageService.addMessage(message)
    }
}

module.exports = {MessageTypes, MessageQueries, MessageMutations, MessageResolvers}
