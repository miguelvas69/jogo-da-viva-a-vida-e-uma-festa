// DICIONÁRIO DE TRADUÇÃO DA INTERFACE (UI)
const i18n = {
    pt: {
        title: "Viva: A Vida é uma Festa",
        subtitle: "Atravesse a ponte de pétalas de cempasúchil para a Terra dos Mortos. Teste seus conhecimentos!",
        btnStart: "Iniciar Quiz",
        btnNext: "Próxima Pergunta",
        btnRestart: "Jogar Novamente",
        questionPrefix: "Pergunta",
        resultTitle: "Resultado Final",
        scoreBefore: "Você acertou",
        scoreMiddle: "de",
        scoreAfter: "perguntas!",
        msgMax: "¡Increíble! Sua memória é inesquecível! Você conhece cada detalhe da jornada de Miguel!",
        msgMid: "Muito bem! Você atravessou a ponte com sucesso, mas alguns detalhes ficaram na Terra dos Mortos.",
        msgMin: "Parece que você precisa ouvir 'Lembre de Mim' e assistir ao filme novamente com a família!"
    },
    en: {
        title: "Coco: The Journey",
        subtitle: "Cross the marigold flower bridge to the Land of the Dead. Test your knowledge!",
        btnStart: "Start Quiz",
        btnNext: "Next Question",
        btnRestart: "Play Again",
        questionPrefix: "Question",
        resultTitle: "Final Result",
        scoreBefore: "You got",
        scoreMiddle: "out of",
        scoreAfter: "questions right!",
        msgMax: "¡Increíble! Your memory is unforgettable! You know every detail of Miguel's journey!",
        msgMid: "Well done! You crossed the marigold bridge, but some details stayed behind.",
        msgMin: "It looks like you need to listen to 'Remember Me' and watch the movie again!"
    },
    es: {
        title: "Coco: El Camino",
        subtitle: "¡Cruza el puente de cempasúchil a la Tierra de los Muertos. Pon a prueba tus conocimientos!",
        btnStart: "Iniciar Quiz",
        btnNext: "Siguiente Pregunta",
        btnRestart: "Jugar de Nuevo",
        questionPrefix: "Pregunta",
        resultTitle: "Resultado Final",
        scoreBefore: "Acertaste",
        scoreMiddle: "de",
        scoreAfter: "preguntas!",
        msgMax: "¡Increíble! ¡Tu memoria es inolvidable! Conoces cada detalle del viaje de Miguel.",
        msgMid: "¡Muy bien! Cruzaste el puente con éxito, pero algunos detalles se quedaron atrás.",
        msgMin: "¡Parece que necesitas escuchar 'Recuérdame' y ver la película de nuevo con la familia!"
    }
};

// IDIOMA ATUAL
let currentLang = 'pt';

// ESTRUTURA DE PERGUNTAS MULTILÍNGUE
const allQuestions = [
    {
        pt: {
            pergunta: "Qual é a profissão tradicional exercida pela família Rivera há gerações?",
            alternativas: ["Sapateiros", "Músicos de Mariachi", "Padeiros", "Escultores de Alebrijes"]
        },
        en: {
            pergunta: "What is the traditional profession practiced by the Rivera family for generations?",
            alternativas: ["Shoemakers", "Mariachi musicians", "Bakers", "Alebrije sculptors"]
        },
        es: {
            pergunta: "¿Cuál es el oficio tradicional ejercido por la familia Rivera durante generaciones?",
            alternativas: ["Zapateros", "Músicos de Mariachi", "Panaderos", "Escultores de Alebrijes"]
        },
        respostaCorreta: 0
    },
    {
        pt: {
            pergunta: "Por que a música foi banida da casa da família Rivera por gerações?",
            alternativas: ["Porque o trisavô abandonou a família para seguir a carreira musical.", "Porque dava azar nas finanças.", "Porque o prefeito proibiu.", "Porque Coco tinha alergia a violões."]
        },
        en: {
            pergunta: "Why was music banned from the Rivera family household for generations?",
            alternativas: ["Because the great-great-grandfather abandoned the family for music.", "Because it brought bad luck.", "Because the mayor prohibited it.", "Because Coco was allergic to guitars."]
        },
        es: {
            pergunta: "¿Por qué la música fue prohibida en la casa de la familia Rivera durante generaciones?",
            alternativas: ["Porque el tatarabuelo abandonó a la familia por la música.", "Porque traía mala suerte.", "Porque el alcalde la prohibió.", "Porque Coco era alérgica a las guitarras."]
        },
        respostaCorreta: 0
    },
    {
        pt: {
            pergunta: "Qual é o nome do cão sem raça da raça Xoloitzcuintle que acompanha Miguel?",
            alternativas: ["Dante", "Hector", "Pepita", "Chicharrón"]
        },
        en: {
            pergunta: "What is the name of the Xoloitzcuintle hairless dog that accompanies Miguel?",
            alternativas: ["Dante", "Hector", "Pepita", "Chicharrón"]
        },
        es: {
            pergunta: "¿Cómo se llama el perro sin pelo de la raza Xoloitzcuintle que acompaña a Miguel?",
            alternativas: ["Dante", "Hector", "Pepita", "Chicharrón"]
        },
        respostaCorreta: 0
    },
    {
        pt: {
            pergunta: "O que Miguel faz para acidentalmente ser transportado para a Terra dos Mortos?",
            alternativas: ["Toca o violão famoso de Ernesto de la Cruz no mausoléu.", "Come uma oferenda do altar.", "Atravessa a ponte sem sapatos.", "Faz um pacto com uma estátua."]
        },
        en: {
            pergunta: "What does Miguel do to accidentally get transported to the Land of the Dead?",
            alternativas: ["He plays Ernesto de la Cruz's famous guitar in the mausoleum.", "He eats an altar offering.", "He crosses the bridge without shoes.", "He makes a pact with a statue."]
        },
        es: {
            pergunta: "¿Qué hace Miguel para ser transportado accidentalmente a la Tierra de los Muertos?",
            alternativas: ["Toca la famosa guitarra de Ernesto de la Cruz en el mausoleo.", "Se come una ofrenda del altar.", "Cruza el puente sin zapatos.", "Hace un pacto con una estatua."]
        },
        respostaCorreta: 0
    },
    {
        pt: {
            pergunta: "Quem Miguel acredita ser seu trisavô famoso no início da história?",
            alternativas: ["Ernesto de la Cruz", "Héctor Rivera", "Chicharrón", "Gustavo"]
        },
        en: {
            pergunta: "Who does Miguel believe is his famous great-great-grandfather at the start of the story?",
            alternativas: ["Ernesto de la Cruz", "Héctor Rivera", "Chicharrón", "Gustavo"]
        },
        es: {
            pergunta: "¿Quién cree Miguel que es su famoso tatarabuelo al comienzo de la historia?",
            alternativas: ["Ernesto de la Cruz", "Héctor Rivera", "Chicharrón", "Gustavo"]
        },
        respostaCorreta: 0
    },
    {
        pt: {
            pergunta: "O que acontece com as almas se ninguém no mundo dos vivos se lembrar delas?",
            alternativas: ["Elas desaparecem para sempre no 'Último Desaparecimento'.", "Elas viram estátuas de pedra.", "Elas se transformam em Alebrijes.", "Elas voltam a viver como humanos."]
        },
        en: {
            pergunta: "What happens to souls if no one in the living world remembers them?",
            alternativas: ["They disappear forever in the 'Final Death'.", "They turn into stone statues.", "They transform into Alebrijes.", "They come back as humans."]
        },
        es: {
            pergunta: "¿Qué les pasa a las almas si nadie en el mundo de los vivos las recuerda?",
            alternativas: ["Desaparecen para siempre en la 'Última Muerte'.", "Se convierten en estatuas de piedra.", "Se transforman en Alebrijes.", "Vuelven a vivir como humanos."]
        },
        respostaCorreta: 0
    },
    {
        pt: {
            pergunta: "Qual é o nome da música mais famosa composta por Héctor para sua filha Coco?",
            alternativas: ["Lembre de Mim (Remember Me)", "Un Poco Loco", "Llorona", "El Mundo Es Mi Familia"]
        },
        en: {
            pergunta: "What is the name of the famous song composed by Héctor for his daughter Coco?",
            alternativas: ["Remember Me", "Un Poco Loco", "Llorona", "El Mundo Es Mi Familia"]
        },
        es: {
            pergunta: "¿Cuál es el nombre de la famosa canción compuesta por Héctor para su hija Coco?",
            alternativas: ["Recuérdame", "Un Poco Loco", "Llorona", "El Mundo Es Mi Familia"]
        },
        respostaCorreta: 0
    },
    {
        pt: {
            pergunta: "Como Héctor realmente morreu na noite em que decidiu voltar para sua família?",
            alternativas: ["Foi envenenado por Ernesto de la Cruz, que roubou suas músicas.", "Sofreu um acidente de carruagem.", "Passou mal após comer comida estragada.", "Perdeu-se na floresta."]
        },
        en: {
            pergunta: "How did Héctor actually die on the night he decided to return to his family?",
            alternativas: ["He was poisoned by Ernesto de la Cruz, who stole his songs.", "He suffered a carriage accident.", "He got sick from bad food.", "He got lost in the woods."]
        },
        es: {
            pergunta: "¿Cómo murió realmente Héctor la noche que decidió volver con su familia?",
            alternativas: ["Fue envenenado por Ernesto de la Cruz, quien le robó sus canciones.", "Sufrió un accidente de carruaje.", "Se enfermó por comida en mal estado.", "Se perdió en el bosque."]
        },
        respostaCorreta: 0
    },
    {
        pt: {
            pergunta: "Qual flor amarela é usada para construir a ponte mística para a Terra dos Mortos?",
            alternativas: ["Cempasúchil (Calêndula mexicana)", "Girassol", "Orquídea", "Rosa vermelha"]
        },
        en: {
            pergunta: "What yellow flower is used to build the mystic bridge to the Land of the Dead?",
            alternativas: ["Marigold (Cempasúchil)", "Sunflower", "Orchid", "Red rose"]
        },
        es: {
            pergunta: "¿Qué flor amarilla se utiliza para construir el puente místico a la Tierra de los Muertos?",
            alternativas: ["Cempasúchil (Calêndula)", "Girasol", "Orquídea", "Rosa roja"]
        },
        respostaCorreta: 0
    },
    {
        pt: {
            pergunta: "O que Miguel usa para reavivar as memórias da vovó Coco no final do filme?",
            alternativas: ["Toca e canta a música 'Lembre de Mim' no violão.", "Mostra uma foto antiga.", "Prepara tamales.", "Lê uma carta."]
        },
        en: {
            pergunta: "What does Miguel use to revive Coco's memories at the end of the movie?",
            alternativas: ["He plays and sings 'Remember Me' on the guitar.", "He shows an old photo.", "He makes tamales.", "He reads a letter."]
        },
        es: {
            pergunta: "¿Qué usa Miguel para revivir los recuerdos de Coco al final de la película?",
            alternativas: ["Toca y canta la canción 'Recuérdame' con la guitarra.", "Muestra una foto vieja.", "Prepara tamales.", "Lee una carta."]
        },
        respostaCorreta: 0
    }
];

// ELEMENTOS DO DOM
const screenWelcome = document.getElementById('screen-welcome');
const screenQuiz = document.getElementById('screen-quiz');
const screenResult = document.getElementById('screen-result');

const btnStart = document.getElementById('btn-start');
const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const questionNumber = document.getElementById('question-number');
const progressBar = document.getElementById('progress-bar');

const finalScore = document.getElementById('final-score');
const totalQuestions = document.getElementById('total-questions');
const resultMessage = document.getElementById('result-message');

const uiTitle = document.getElementById('ui-title');
const uiSubtitle = document.getElementById('ui-subtitle');
const uiResultTitle = document.getElementById('ui-result-title');
const scoreTextBefore = document.getElementById('score-text-before');
const scoreTextMiddle = document.getElementById('score-text-middle');
const scoreTextAfter = document.getElementById('score-text-after');

// ESTADO DO JOGO
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
const QUESTIONS_PER_GAME = 5; // Quantidade de perguntas por partida

// EVENTOS
btnStart.addEventListener('click', startQuiz);
btnNext.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});
btnRestart.addEventListener('click', startQuiz);

// FUNÇÃO DE TROCA DE IDIOMA
function changeLanguage(lang) {
    currentLang = lang;
    
    uiTitle.textContent = i18n[lang].title;
    uiSubtitle.textContent = i18n[lang].subtitle;
    btnStart.textContent = i18n[lang].btnStart;
    btnNext.textContent = i18n[lang].btnNext;
    btnRestart.textContent = i18n[lang].btnRestart;
    uiResultTitle.textContent = i18n[lang].resultTitle;
    scoreTextBefore.textContent = i18n[lang].scoreBefore;
    scoreTextMiddle.textContent = i18n[lang].scoreMiddle;
    scoreTextAfter.textContent = i18n[lang].scoreAfter;

    if (screenQuiz.classList.contains('active')) {
        loadQuestion();
    } else if (screenResult.classList.contains('active')) {
        showResultMessage();
    }
}

// LÓGICA DO QUIZ
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    
    // Clona e embaralha as perguntas do jogo
    quizQuestions = [...allQuestions]
        .sort(() => Math.random() - 0.5)
        .slice(0, QUESTIONS_PER_GAME);
    
    screenWelcome.classList.remove('active');
    screenResult.classList.remove('active');
    screenQuiz.classList.add('active');
    
    loadQuestion();
}

function loadQuestion() {
    resetState();
    
    const currentQ = quizQuestions[currentQuestionIndex];
    const langData = currentQ[currentLang];
    
    questionText.textContent = langData.pergunta;
    questionNumber.textContent = `${i18n[currentLang].questionPrefix} ${currentQuestionIndex + 1}/${quizQuestions.length}`;
    const progressPercent = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // PEGANDO O TEXTO DA RESPOSTA CORRETA ANTES DE EMBARALHAR
    const correctText = langData.alternativas[currentQ.respostaCorreta];

    // CRIANDO UMA CÓPIA DAS ALTERNATIVAS E EMBARALHANDO ELAS
    let shuffledAlternatives = [...langData.alternativas].sort(() => Math.random() - 0.5);

    // DESCOBRINDO O NOVO ÍNDICE DA RESPOSTA CORRETA APÓS O EMBARALHAMENTO
    let newCorrectIndex = shuffledAlternatives.indexOf(correctText);

    // RENDERIZANDO OS BOTÕES COM AS ALTERNATIVAS EMBARALHADAS
    shuffledAlternatives.forEach((optionText, index) => {
        const button = document.createElement('button');
        button.textContent = optionText;
        button.classList.add('option-btn');
        // Compara com o newCorrectIndex para saber se é a certa
        button.addEventListener('click', () => selectOption(index, newCorrectIndex, button));
        optionsContainer.appendChild(button);
    });
}

function resetState() {
    btnNext.classList.add('hidden');
    btnNext.disabled = true;
    optionsContainer.innerHTML = '';
}

function selectOption(selectedIndex, correctIndex, selectedButton) {
    const allButtons = optionsContainer.querySelectorAll('.option-btn');

    allButtons.forEach(btn => btn.disabled = true);

    if (selectedIndex === correctIndex) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('incorrect');
        allButtons[correctIndex].classList.add('correct');
    }

    btnNext.classList.remove('hidden');
    btnNext.disabled = false;
}

function showResult() {
    screenQuiz.classList.remove('active');
    screenResult.classList.add('active');

    finalScore.textContent = score;
    totalQuestions.textContent = quizQuestions.length;
    showResultMessage();
}

function showResultMessage() {
    if (score === quizQuestions.length) {
        resultMessage.textContent = i18n[currentLang].msgMax;
    } else if (score >= quizQuestions.length / 2) {
        resultMessage.textContent = i18n[currentLang].msgMid;
    } else {
        resultMessage.textContent = i18n[currentLang].msgMin;
    }
}