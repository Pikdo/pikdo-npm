const messages  = [
    "Hola", // Spanish
    "Hello", //English    
    "Ciao", // Ialian
    "Bonjour",  // French
    "Pura vida", // Tico
    "Hallo", // German
    "Olá", // Portuguiese
    "Hej", // Sueco
    "Namaste", // Hindú
    "Merhaba", // Turkey
    "Salam", // Árabe,
    "Sveiki",  // Lituan
    "Привіт"  // Ucranian
];

const pikdo = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];

    console.log(message);
}

module.exports = {pikdo};