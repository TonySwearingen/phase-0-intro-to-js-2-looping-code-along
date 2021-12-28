const names = ["Guadalupe", "Ollie", "Aki"];
const events = ["surprise"]

function writeCards(names, events) {
for (let i = 0; i < names.length; i++) {
    console.log(`Thank you,${names[i]}, for the wonderful ${events} gift!`);
    }

}
writeCards(names, events);


function countDown() {
    let countDown = 10;
    while ( countDown > -1) {
        console.log(countDown--);
    }
} 
