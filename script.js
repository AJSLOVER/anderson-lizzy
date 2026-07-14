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

document.getElementById("meses").textContent = meses;
document.getElementById("dias").textContent = dias;
document.getElementById("horas").textContent = horas;
document.getElementById("minutos").textContent = minutos;
document.getElementById("segundos").textContent = segundos;
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

for(let i = 0; i < 180; i++){

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

const lightbox = document.getElementById("lightbox");
const imagemExpandida = document.getElementById("imagemExpandida");
const fechar = document.getElementById("fechar");

document.querySelectorAll(".post img").forEach((foto)=>{

    foto.addEventListener("click",()=>{

        imagemExpandida.src = foto.src;

        lightbox.style.display = "flex";

    });

});

fechar.addEventListener("click",()=>{

    lightbox.style.display = "none";

});

lightbox.addEventListener("click",(e)=>{

    if(e.target === lightbox){

        lightbox.style.display = "none";

    }

});

console.log(document.querySelectorAll(".post img").length);
console.log(lightbox);
console.log(imagemExpandida);
console.log(fechar);

const telaInicial = document.getElementById("telaInicial");
const entrar = document.getElementById("entrar");

entrar.addEventListener("click",()=>{

    telaInicial.style.opacity="0";

  setTimeout(()=>{

    telaInicial.style.display="none";

    document.querySelector(".container").classList.add("mostrar");

},1000);
});

document.addEventListener("mousemove",(e)=>{

    criarCoracao(e.clientX,e.clientY);

});

document.addEventListener("touchstart",(e)=>{

    const toque = e.touches[0];

    criarCoracao(toque.clientX,toque.clientY);

});

function criarCoracao(x,y){

    const coracao = document.createElement("div");

    coracao.className="coracaoMouse";

    coracao.innerHTML="❤️";

    coracao.style.left=x+"px";
    coracao.style.top=y+"px";

    document.body.appendChild(coracao);

    setTimeout(()=>{

        coracao.remove();

    },1200);

}

const musica = document.getElementById("musica");
const btnMusica = document.getElementById("btnMusica");

btnMusica.addEventListener("click",()=>{

    if(musica.paused){

        musica.play();

        btnMusica.innerHTML="⏸️ Pausar música";

    }else{

        musica.pause();

        btnMusica.innerHTML="▶️ Tocar nossa música";

    }

});