// Função das curiosidades

document.addEventListener("DOMContentLoaded", function () {
    const curiosidades = [
        "Em 1996, na cidade de Varginha, Minas Gerais, um dos casos mais intrigantes da ufologia brasileira tomou conta das manchetes. Testemunhas relataram ter visto uma criatura de pele marrom, olhos vermelhos e corpo frágil vagando pela cidade. O Exército Brasileiro foi acusado de capturar e esconder a entidade, enquanto relatos indicavam movimentações militares suspeitas na região. Até hoje, muitas perguntas permanecem sem resposta. O governo nega qualquer envolvimento, mas ufólogos e pesquisadores continuam investigando, reunindo relatos de civis e ex-militares que alegam saber mais do que foi divulgado.",
        "Em julho de 1947, algo caiu em uma fazenda nos arredores de Roswell, Novo México. A princípio, a Força Aérea dos Estados Unidos afirmou ter encontrado os destroços de um disco voador. Pouco depois, mudaram a versão, alegando que era apenas um balão meteorológico. Essa mudança repentina gerou inúmeras teorias da conspiração, levando muitos a acreditarem que o governo ocultou provas da queda de uma nave alienígena. Testemunhas afirmam que corpos de seres não humanos foram recuperados e estudados secretamente. O caso Roswell continua sendo um dos eventos mais discutidos da ufologia mundial, inspirando filmes, documentários e livros sobre o tema.",
        "Na década de 1970, moradores da região amazônica começaram a relatar encontros assustadores com luzes brilhantes que sobrevoavam suas casas e até os atacavam, deixando marcas em suas peles. Assustados, os moradores chamavam esses fenômenos de Chupa-chupa, pois afirmavam que as luzes sugavam seu sangue. O caso chamou a atenção do governo brasileiro, que enviou a Força Aérea para investigar. Assim nasceu a Operação Prato, que registrou centenas de fotos, vídeos e depoimentos sobre os fenômenos. O mistério cresceu ainda mais quando, anos depois, o comandante da operação, coronel Uyrangê Hollanda, revelou que os militares haviam testemunhado os eventos de perto. Pouco tempo depois, ele foi encontrado morto em circunstâncias suspeitas, alimentando ainda mais as teorias sobre uma conspiração.",
        "Desde a antiguidade, muitas culturas acreditam que os sonhos vão além da imaginação e podem ser janelas para outras realidades. Algumas tradições xamânicas, por exemplo, ensinam que é possível viajar espiritualmente durante o sono, acessando informações ocultas ou até se comunicando com entidades de outras dimensões. A ciência moderna ainda não conseguiu explicar completamente os sonhos, e há casos misteriosos de pessoas que sonham com lugares ou eventos desconhecidos e depois os encontram no mundo real. Será que os sonhos são apenas manifestações do nosso subconsciente ou realmente um portal para algo maior?",
        "O Projeto Blue Book foi um programa da Força Aérea dos EUA criado em 1952 para investigar avistamentos de OVNIs. Durante quase duas décadas, analisou mais de 12.000 casos, dos quais 701 permaneceram sem explicação. Oficialmente, o governo concluiu que os OVNIs não representavam uma ameaça, mas documentos desclassificados indicam que as investigações continuaram secretamente. Muitos acreditam que o projeto foi uma fachada para esconder evidências sobre vida extraterrestre.",
        "Segundo pesquisadores independentes, uma espécie reptiliana altamente avançada estaria infiltrada nas elites políticas e econômicas, manipulando a humanidade em segredo. Relatos históricos e evidências visuais sugerem que esses seres podem assumir forma humana e influenciar decisões globais sem serem detectados.",
        "Há indícios de que o pouso lunar de 1969 pode ter sido encenado para vencer a Corrida Espacial. Anomalias nas imagens da NASA, como sombras inconsistentes, bandeira tremulando e ausência de estrelas, levantam dúvidas sobre a autenticidade do evento. O fato de a humanidade nunca mais ter retornado à Lua reforça a suspeita de um grande encobrimento.",
        "Diversas culturas antigas mencionam a existência de um mundo subterrâneo habitado por seres avançados. Relatos do almirante Richard Byrd e estudos sobre cavernas inexploradas indicam que a Terra pode não ser sólida como nos ensinam. Governos e cientistas convencionais evitam o tema, o que gera ainda mais suspeitas sobre o que pode estar sendo escondido.",
        "Os Homens de Preto são figuras misteriosas que supostamente aparecem para silenciar testemunhas de avistamentos de OVNIs. Descritos como homens pálidos, sem expressão e vestidos de preto, eles fazem perguntas enigmáticas e até ameaçam aqueles que tentam divulgar informações. Alguns acreditam que são agentes do governo, enquanto outros sugerem que podem ser seres não humanos disfarçados. Apesar da falta de provas concretas, os relatos persistem, aumentando o mistério em torno dessas entidades.",
        "Localizada no deserto de Nevada, a Área 51 é uma base militar altamente secreta dos Estados Unidos. Durante décadas, teóricos da conspiração afirmaram que o local abriga tecnologia extraterrestre e até corpos de alienígenas recuperados de acidentes com OVNIs. O governo norte-americano negou a existência da base por muitos anos, mas documentos desclassificados confirmaram sua operação, alegando que lá são feitos testes de aeronaves experimentais. Em 2019, um evento chamado Storm Area 51 ganhou fama na internet, incentivando pessoas a invadir a base para ver os alienígenas. Embora nada tenha sido revelado, a Área 51 continua cercada de mistérios, sendo um dos lugares mais vigiados e especulados do mundo."
    ];

    function escreverCuriosidade(texto, elemento, velocidade = 50, callback) {
        let i = 0;
        elemento.innerHTML = "";

        function escrever() {
            if (i < texto.length) {
                elemento.innerHTML += texto.charAt(i);
                i++;
                setTimeout(escrever, velocidade);
            } else if (callback) {
                setTimeout(callback, 15000); // Espera 10s depois que a frase termina pra colocar uma nova
            }
        }
        escrever();
    }

    function atualizarCuriosidade() {
        const curiosidadeElemento = document.getElementById("curiosidade");
        if (curiosidadeElemento) {
            const curiosidadeAleatoria = curiosidades[Math.floor(Math.random() * curiosidades.length)];
            escreverCuriosidade(curiosidadeAleatoria, curiosidadeElemento, 50, atualizarCuriosidade);
        }
    }

    atualizarCuriosidade();
});

//Função do Botão de tema

document.addEventListener("DOMContentLoaded", function () {
    const botaoTema = document.querySelector(".botao-tema");
    const body = document.body;

    // Seleciona as imagens para mudar pelas versões invertidas
    const logo = document.getElementById("logo-img");
    const botaoTemaImg = document.getElementById("botao-tema-img");
    const sobreImg = document.getElementById("sobre-pag-inicio-img");

    // Verifica se tem tema salvo no localStorage e aplica
    if (localStorage.getItem("tema") === "claro") {
        body.classList.add("modo-claro");
        mudarImagens("claro");
    } else {
        mudarImagens("escuro");
    }

    botaoTema.addEventListener("click", function () {
        body.classList.toggle("modo-claro");

        if (body.classList.contains("modo-claro")) {
            localStorage.setItem("tema", "claro");
            mudarImagens("claro");
        } else {
            localStorage.setItem("tema", "escuro");
            mudarImagens("escuro");
        }
    });

// A função que muda as imagens para a versão invertida

    function mudarImagens(modo) {
        if (modo === "claro") {
            if (logo) logo.src = "imagens-gerais/logo_final_1_inverted.png";
            if (botaoTemaImg) botaoTemaImg.src = "imagens-gerais/lampada_inverted.png";
            if (sobreImg) sobreImg.src = "Imagens-pag-principal/TV_Varminho_Logo_inverted.webp";
            if (body) body.style.backgroundImage = "url('imagens-gerais/Background_inverted.jpg')";
        } else {
            if (logo) logo.src = "imagens-gerais/logo final 1.png";
            if (botaoTemaImg) botaoTemaImg.src = "imagens-gerais/lampada.png";
            if (sobreImg) sobreImg.src = "Imagens-pag-principal/TV_Varminho_Logo.webp";
            if (body) body.style.backgroundImage = "url('imagens-gerais/Background.jpg')";
        }
    }
});

// Função do menu
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const barraNavegacao = document.getElementById("barra-de-navegacao");

    menuToggle.addEventListener("click", function () {
        barraNavegacao.classList.toggle("ativo");
    });
});