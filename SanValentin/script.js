let noButton = document.getElementById('noButton');
let yesButton = document.getElementById('yesButton');
let message = document.getElementById('message');
let finalMessage = document.getElementById('finalMessage');
let gif1 = document.getElementById('gif1');
let gif2 = document.getElementById('gif2');
let noClicks = 0;

const texts = [
    "Te confundiste amor, es en donde dice si, acepto",
    "Amor, es el otro botón",
    "¿Segura?",
    "Q como q no",
    "¿De verdad vas a decir que no?",
    "¿En serio? Pensé que me amabas:(",
    "Malosa, ya di que si",
    "No te hagas mi amor sé que quieres chiquita hermosa",
    "Te voy a funar en ig",
    "Me partes el corason de poio q tengo",
    "Me odias, ¿verdad? 💔",
    "Ándaleeeeeeee, di que siii",
    "YAAAAA DIII Q SIII"
];

noButton.addEventListener('click', function() {
    noClicks++;

    // Increase the size of the Yes button with each click on "No"
    yesButton.style.transform = `scale(${1 + noClicks * 0.1})`;

    // Change the message after each "No" click
    if (noClicks <= texts.length) {
        message.textContent = texts[noClicks - 1];
        message.style.display = 'block';
    }

    // Show the final message and GIFs after a few "No"s
    if (noClicks === 14) { // "Te voy a funar en ig" es el mensaje 14
        finalMessage.textContent = "Ya no te queda de otra que aceptar, mi amor";
        finalMessage.style.display = 'block';
    }
});

yesButton.addEventListener('click', function() {
    // Cambiar el mensaje de abajo por el mensaje de la alerta
    finalMessage.textContent = "Nos vemos el viernes en videollamada, no olvides comprar tu ramen para ser unas rameras";
    finalMessage.style.color = '#f44336';  // Cambiar color del texto (rojo)
    finalMessage.style.display = 'block';  // Mostrar el mensaje

    gif1.style.display = 'block';  // Mostrar GIF1
    gif2.style.display = 'block';  // Mostrar GIF2
});
