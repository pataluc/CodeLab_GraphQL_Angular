import { Injectable } from '@angular/core'

@Injectable()
export class TchatService {

    public messages = [
        {
        sender: {
            pseudo: 'Antoine',
            avatar: 'http://lorempixel.com/50/50/people'
        },
        content: 'Hello :)'
        },
        {
        sender: {
            pseudo: 'Canard Man',
            avatar: 'http://lorempixel.com/50/50/people'
        },
        content: 'Coin Coin'
        },
        {
        sender: {
            pseudo: 'Antoine',
            avatar: 'http://lorempixel.com/50/50/people'
        },
        content: 'Ca va?'
        },
        {
        sender: {
            pseudo: 'Canard Man',
            avatar: 'http://lorempixel.com/50/50/people'
        },
        content: 'Coin Coin'
        }
    ]

    getMessages() {
        return this.messages
    }

}