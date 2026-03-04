const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const parte = params.get("parte");
const cover = document.getElementById("cover");

if (parte) {
    cover.style.display = "none";
}
const lessons = {
    11: {
        titulo: "Like I want you",
        capitulo: "Giveon",
        imagem: "images/likeiwantyou.jpg",
        intro:`
        <p><strong>Like I Want You</strong> é uma música lançada em 2020 pelo cantor Giveon.</p>

        <p>A música fala sobre sentimentos, desejo e frustração em um relacionamento, usando uma linguagem simples e direta.</p>

        <p>O ritmo é lento e a voz do cantor é bem clara, o que ajuda iniciantes a entender melhor as palavras.</p>

        <p>Essa música é indicada para praticar <strong>listening</strong>, especialmente para identificar palavras e emoções no inglês falado.</p>`
    },
    12: {
        titulo: "Imagine",
        capitulo: "John Lennon",
        imagem: "images/imagine.jpg",
        intro:`
        <p><strong>Imagine</strong> é uma música lançada em 1971 por John Lennon.</p>

        <p>Ela fala sobre paz, união e a ideia de um mundo melhor, usando frases curtas e vocabulário simples.</p>

        <p>A música tem um ritmo calmo e uma pronúncia lenta, sendo ideal para quem está começando a aprender inglês.</p>

    <p>É uma ótima escolha para praticar <strong>vocabulário básico</strong> e compreensão geral do texto.</p>
`
    },
    13: {
        titulo: "Count on me",
        capitulo: "Bruno Mars",
        imagem: "images/countonme.jpg",
        intro: `
        <p><strong>Count On Me</strong> é uma música lançada em 2010 por Bruno Mars.</p>

        <p>Ela fala sobre amizade, confiança e apoio, usando palavras simples e fáceis de entender.</p>

        <p>A música tem um ritmo calmo e uma pronúncia clara, sendo ideal para iniciantes no inglês.</p>

        <p>A expressão <em>"count on me"</em> significa <strong>"pode contar comigo"</strong>.</p>
        `
    },
    21: {
        titulo: "White Ferrari",
        capitulo: "Frank Ocean",
        imagem: "images/whiteferrari.jpg",
        intro: `
        <p><strong>White Ferrari</strong> é uma música lançada em 2016 pelo cantor Frank Ocean.</p>

        <p>A música fala sobre memórias, sentimentos e reflexões sobre um relacionamento passado.</p>

        <p>O ritmo é calmo e a música tem muitas pausas, o que ajuda o aluno a ouvir as palavras com mais atenção.</p>

        <p>É indicada para praticar <strong>listening</strong> e interpretação, focando mais no significado do que na velocidade da fala.</p>
        `
    },
    22: {
        titulo: "Me & U",
        capitulo: "Tems",
        imagem: "images/meandu.jpg",
        intro: `
        <p><strong>Me & U</strong> é uma música lançada em 2022 pela cantora Tems.</p>

        <p>Ela fala sobre sentimentos pessoais e conexões emocionais, usando frases simples e repetitivas.</p>

        <p>A pronúncia é clara em muitos trechos, o que ajuda iniciantes a reconhecer palavras e expressões.</p>

        <p>Essa música é boa para praticar <strong>listening</strong> e identificação de frases curtas em inglês.</p>
        `
    },
    23: {
        titulo: "Come and See",
        capitulo: "PARTYNEXTDOOR",
        imagem: "images/comeandsee.jpg",
        intro: `
        <p><strong>Come and See</strong> é uma música lançada pelo artista PARTYNEXTDOOR.</p>

        <p>A música fala sobre relacionamentos e emoções, com um tom calmo e reflexivo.</p>

        <p>O ritmo lento permite que o aluno acompanhe melhor a fala e o som das palavras.</p>

        <p>É indicada para praticar <strong>listening</strong> e ampliar o vocabulário relacionado a sentimentos.</p>
        `
    }
};

if (lessons[id]) {
    document.getElementById("titulo").innerText = lessons[id].titulo;
    document.getElementById("musica").innerText = lessons[id].capitulo;

    document.getElementById("image").innerHTML = `
        <img src="${lessons[id].imagem}" class="lesson-image">
    `;
    document.getElementById("image-intro").innerHTML = `
        <img src="${lessons[id].imagemintro}" class="lesson-image">
    `;
}
if (parte === "intro" && lessons[id].intro) {
    document.getElementById("intro-text").innerHTML = lessons[id].intro;
}
if (parte === "intro") {
    document.getElementById("image-intro").innerHTML = `
        <img src="${lessons[id].imagem}" class="intro-cover">
    `;
}
document.querySelectorAll(".lesson-section")
    .forEach(sec => sec.classList.remove("active"));

const section = document.getElementById(parte);

if (section) {
    section.classList.add("active");
}
function irPara(novaParte) {
    window.location.href = `licao.html?id=${id}&parte=${novaParte}`;
}