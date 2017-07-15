let messages = []

export function addMessage(message) {
    return messages[messages.push(message) - 1]
}

export function getMessages() {
    return messages
}

function addCoinCoin() {
    this.addMessage({
        pseudo: 'Canard Man',
        firstName: 'Frédéric',
        lastName: 'Molas',
        message: 'Coin Coin',
        localisation: 'Duckpound',
        date: Date.now(),
        status: "OK"
    })
}