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

    const dias = Math.floor((agora - aniversarioMes) / (1000 * 60 * 60 * 24));

    document.getElementById("meses").textContent = meses;
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

setInterval(atualizarContador, 1000);
atualizarContador();

// Botão Secreto
const botaoSecreto = document.getElementById("botaoSecreto");
const mensagemSecreta = document.getElementById("mensagemSecreta");
botaoSecreto.addEventListener("click", () => {
    if(mensagemSecreta.style.display === "block") {
        mensagemSecreta.style.display = "none";
        botaoSecreto.textContent = "❤️ Clique aqui, nenê ❤️";
    } else {
        mensagemSecreta.style.display = "block";
        botaoSecreto.textContent = "❤️ Fechar mensagem ❤️";
    }
});

// Lightbox Zoom
const lightbox = document.getElementById("lightbox");
const imagemExpandida = document.getElementById("imagemExpandida");
const fechar = document.getElementById("fechar");

document.querySelectorAll(".post img").forEach(img => {
    img.addEventListener("click", () => {
        imagemExpandida.src = img.src;
        lightbox.style.display = "flex";
    });
});

lightbox.addEventListener("click", (e) => {
    if(e.target === lightbox || e.target === fechar) {
        lightbox.style.display = "none";
    }
});

// Mecânica do Player Card Spotify
const telaInicial = document.getElementById("telaInicial");
const entrar = document.getElementById("entrar");
const musica = document.getElementById("musica");
const btnMusica = document.getElementById("btnMusica");
const barraProgresso = document.getElementById("barraProgresso");
const progressoContainer = document.getElementById("progressoContainer");
const tempoAtual = document.getElementById("tempoAtual");
const tempoTotal = document.getElementById("tempoTotal");

function formatarTempo(segundos) {
    if (isNaN(segundos)) return "0:00";
    const min = Math.floor(segundos / 60);
    const seg = Math.floor(segundos % 60);
    return `${min}:${seg < 10 ? '0' : ''}${seg}`;
}

musica.addEventListener("timeupdate", () => {
    const porcentagem = (musica.currentTime / musica.duration) * 100;
    barraProgresso.style.width = `${porcentagem}%`;
    tempoAtual.textContent = formatarTempo(musica.currentTime);
});

musica.addEventListener("loadedmetadata", () => {
    tempoTotal.textContent = formatarTempo(musica.duration);
});

if (musica.readyState >= 1) {
    tempoTotal.textContent = formatarTempo(musica.duration);
}

progressoContainer.addEventListener("click", (e) => {
    const larguraTotal = progressoContainer.clientWidth;
    const cliqueX = e.offsetX;
    musica.currentTime = (cliqueX / larguraTotal) * musica.duration;
});

function alternarMusica() {
    if (musica.paused) {
        musica.play();
        btnMusica.textContent = "⏸️";
    } else {
        musica.pause();
        btnMusica.textContent = "▶️";
    }
}

btnMusica.addEventListener("click", alternarMusica);

entrar.addEventListener("click", () => {
    telaInicial.style.opacity = "0";
    
    musica.play().then(() => {
        btnMusica.textContent = "⏸️";
    }).catch(err => console.log("Autoplay evitado com sucesso."));

    setTimeout(() => {
        telaInicial.style.display = "none";
        document.querySelector(".container").classList.add("mostrar");
    }, 800);
});

// Efeito mouse de corações limpo
document.addEventListener("mousemove", (e) => {
    criarCoracao(e.clientX, e.clientY);
});

document.addEventListener("touchstart", (e) => {
    const toque = e.touches[0];
    criarCoracao(toque.clientX, toque.clientY);
});

function criarCoracao(x, y) {
    if (Math.random() > 0.15) return; 
    const coracao = document.createElement("div");
    coracao.className = "coracaoMouse";
    coracao.innerHTML = "❤️";
    coracao.style.left = x + "px";
    coracao.style.top = y + "px";
    document.body.appendChild(coracao);

    setTimeout(() => {
        coracao.remove();
    }, 800);
}