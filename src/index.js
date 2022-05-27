const messages  = [
    "Hola",
    "Hello",
    "Hi",
    "Ciao",
    "Bonjour",
    "Howday",
    "Pura vida"
];

const pikdo = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];

    console.log(message);
}

module.exports = {pikdo};