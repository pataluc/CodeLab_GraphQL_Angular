import { addMessage, getMessages, resetMessages } from './message.service'

beforeEach(() => {
    resetMessages()
})

describe('Messages in service', () => {

    test('should be empty at the beginning', () => {
        expect(getMessages()).toHaveLength(0)
    })

    test('should contain message added right after operation', () => {
        addMessage({
            sender: {
                pseudo: 'pseudoTest',
                firstName: 'firstNameTest',
                lastName: 'lastNameTest'
            },
            date: 123,
            content: 'messageTest',
            localisation: 'localisationTest',
            status: "TEST"
        })
        expect(getMessages()).toHaveLength(1)
        expect(getMessages()[0]).toEqual({
            sender: {
                pseudo: 'pseudoTest',
                firstName: 'firstNameTest',
                lastName: 'lastNameTest'
            },
            date: 123,
            content: 'messageTest',
            localisation: 'localisationTest',
            status: "TEST"
        })
    })
})