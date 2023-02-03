const preguntas = [
  {
    id: 1,
    pregunta: "¿Qué prefieres?",
    respuesta1: "Cumplir con las leyes y ser correcto",
    valorRespuesta1: 2,
    respuesta2: "¿Qué es la ley? No hay nada que me detenga",
    valorRespuesta2: 1,
  },
  {
    id: 2,
    pregunta: "En situaciones de peligro...",
    respuesta1: "Pienso razonablemente antes de actuar",
    valorRespuesta1: 2,
    respuesta2: "Actúo sin pensar y sigo mi instinto",
    valorRespuesta2: 1,
  },
  {
    id: 3,
    pregunta: "¿Mentir o Decir la verdad?",
    respuesta1: "Decir la verdad",
    valorRespuesta1: 2,
    respuesta2: "Mentir no está tan mal",
    valorRespuesta2: 1,
  },
  {
    id: 4,
    pregunta: "Si se trata de tomar la iniciativa...",
    respuesta1: "Soy un lider nato",
    valorRespuesta1: 2,
    respuesta2: "Prefiero esperar a que otros tomen la iniciativa",
    valorRespuesta2: 1,
  },
  {
    id: 5,
    pregunta: "¿Lobo solitario? o ¿O amigos por siempre?",
    respuesta1: "Necesito mi espacio",
    valorRespuesta1: 2,
    respuesta2: "Prefiero estar rodeado de amigos",
    valorRespuesta2: 1,
  },
];
const calcular = () => {
  const selectedRadios = document.querySelectorAll(
    `input[type="radio"]:checked`
  );
  let sum = 0;
  selectedRadios.forEach(function (radio) {
    sum += parseInt(radio.value);
  });

  const innerHTML = `
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;
document.querySelector("#card").innerHTML = innerHTML;
  console.log(sum);
};
const preguntasContainer = () => {
  let innerHTML = " ";
  preguntas.forEach((pregunta) => {
    console.log(pregunta);
    innerHTML += `
    <div>    
        <div class="form-check">
            <h3>${pregunta.pregunta}</h3>
            <input class="form-check-input" value="${pregunta.valorRespuesta1}"type="radio" name="${pregunta.id}" id="${pregunta.id}-${pregunta.valorRespuesta1}">
            <label class="form-check-label" for="flexRadioDefault1">
                ${pregunta.respuesta1}
            </label>
        </div>
        <div class="form-check">
        <input class="form-check-input" value="${pregunta.valorRespuesta2}" type="radio" name="${pregunta.id}" id="${pregunta.id}-${pregunta.valorRespuesta2}" checked>
        <label class="form-check-label" for="flexRadioDefault2">
            ${pregunta.respuesta2}
        </label>
      </div>
    </div> 
    `;
  });
  innerHTML += `<button type="button" id="send" class="btn btn-primary" onClick="calcular()">Enviar</button>`;
  document.querySelector("#container").innerHTML = innerHTML;
};
preguntasContainer();
