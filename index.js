function writeCards(names, events) {
    let cards = []
for (let i = 0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
    }
    return cards;
}

function countDown() {
    let countDown = 10;
    while ( countDown > -1) {
        console.log(countDown--);
    }
} 
