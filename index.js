//const myArray = ['Guadalupe','Ollie','Aki', 'Suprise'];

function writeCards(names, event) {
    console.log(names);
    const cards = []
    for (let i = 0; i < names.length; i++)  {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    console.log(cards);
    return cards;
}

function countDown(count) {
    let number = count;
    while (number >= 0) {
        console.log(number--);
    }
    return number;
}