import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/switchMap'
import * as config from '../../config'

let messages = []
let source = new Subject()
let coincoinSubscription
let id = 0


init()
 
export function addMessage(message) {
    if(config.enableLatency) {
        pause(config.latency)
    }
    message.id = id++
    message.date = Date.now()
    if((!coincoinSubscription || coincoinSubscription.closed) && config.enableCoin) {
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

function init() {
    addCoinCoin()
    source.subscribe(message => messages.push(message))
}

function addCoinCoin() {
    messages.push({
        id: id++,
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

function pause(time) {
    let dt = new Date()
    while ((new Date()) - dt <= time) {}
}
