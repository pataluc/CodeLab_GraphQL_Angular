let messages = []

module.exports.addMessage = function(message) {
    return messages[messages.push(message) - 1]
}

module.exports.getMessages = function() {
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