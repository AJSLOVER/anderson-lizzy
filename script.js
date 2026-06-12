const inicioNamoro = new Date("2026-04-11T03:00:00");

function atualizarContador() {

    const agora = new Date();

    let diferenca = agora - inicioNamoro;

    const segundos = Math.floor(diferenca / 1000) % 60;
    const minutos = Math.floor(diferenca / (1000 * 60)) % 60;
    const horas = Math.floor(diferenca / (1000 * 60 * 60)) % 24;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    document.getElementById("tempo").innerHTML =
        `${dias} dias<br>
        ${horas} horas<br>
        ${minutos} minutos<br>
        ${segundos} segundos`;
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