const inicioNamoro = new Date("2026-04-11T03:00:00");

function atualizarContador() {

    const agora = new Date();

    let diferenca = agora - inicioNamoro;

   const segundos = Math.floor(diferenca / 1000) % 60;
const minutos = Math.floor(diferenca / (1000 * 60)) % 60;
const horas = Math.floor(diferenca / (1000 * 60 * 60)) % 24;

let meses = (agora.getFullYear() - inicioNamoro.getFullYear()) * 12;
meses += agora.getMonth() - inicioNamoro.getMonth();

let aniversarioMes = new Date(inicioNamoro);
aniversarioMes.setMonth(inicioNamoro.getMonth() + meses);

if (agora < aniversarioMes) {
    meses--;

    aniversarioMes = new Date(inicioNamoro);
    aniversarioMes.setMonth(inicioNamoro.getMonth() + meses);
}

const dias = Math.floor(
    (agora - aniversarioMes) /
    (1000 * 60 * 60 * 24)
);

document.getElementById("tempo").innerHTML =
`
❤️ ${meses} meses ❤️<br>
📅 ${dias} dias<br>
⏰ ${horas} horas<br>
🕒 ${minutos} minutos<br>
⚡ ${segundos} segundos
`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

function criarCoracao() {

    const coracao = document.createElement("div");

    coracao.classList.add("heart");
    coracao.innerHTML = "❤️";

    coracao.style.left = Math.random() * window.innerWidth + "px";

    coracao.style.animationDuration =
        (Math.random() * 5 + 3) + "s";

    document.body.appendChild(coracao);

    setTimeout(() => {
        coracao.remove();
    }, 8000);
}

setInterval(criarCoracao, 300);

const stars = document.querySelector(".stars");

for(let i = 0; i < 100; i++){

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay =
        Math.random() * 2 + "s";

    stars.appendChild(star);
}

const botao = document.getElementById("botaoSecreto");
const mensagem = document.getElementById("mensagemSecreta");

botao.addEventListener("click", () => {

    if(mensagem.style.display === "block"){
        mensagem.style.display = "none";
    }else{
        mensagem.style.display = "block";
    }

});

const posts = document.querySelectorAll(".post");

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if(entrada.isIntersecting){
            entrada.target.classList.add("aparecer");
        }

    });

});

posts.forEach((post) => {
    observador.observe(post);
});