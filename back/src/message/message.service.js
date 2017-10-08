import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/switchMap'

let messages = []
let source = new Subject()
let coincoinSubscription

addCoinCoin()
source.subscribe(message => messages.push(message))
 
export function addMessage(message) {
    if(!coincoinSubscription || coincoinSubscription.closed) {
        coincoinSubscription = source.switchMap(() => Observable.interval(1000)).first().subscribe(() => addCoinCoin())
    }
    source.next(message)
    return messages[messages.length - 1]
}

export function getMessages() {
    return messages
}

export function resetMessages() {
    messages = []
}

function addCoinCoin() {
    messages.push({
        sender : {
            pseudo: 'Canard Man',
            firstName: 'Frédéric',
            lastName: 'Molas',
        },
        content: 'Coin Coin',
        localisation: 'Duckpound',
        date: Date.now(),
        status: "OK"
    })
}
