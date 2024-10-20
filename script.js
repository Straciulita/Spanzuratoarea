document.addEventListener("DOMContentLoaded", function() {
   
    const spanzuratoarea = document.querySelector(".spanzuratoarea-cadru img");
    const cuvantAfisare = document.querySelector(".cuvant-afisare");
    const incercariText = document.querySelector(".guesses-text b");
    const gameModal = document.querySelector(".game-modal");
    const playAgainBtn = document.querySelector(".play-again");
    const tastaturaDiv = document.querySelector(".tastatura");

    let cuvantAnterior = null; // Variabilă pentru a stoca cuvântul anterior
    let cuvantActual = ""; // Cuvântul ales pentru rundă
    let numarIncercari;
    let litereCorecte;
    const max = 6;

    const resetGame = () => {
        litereCorecte = [];
        numarIncercari = 0;
        cuvantAfisare.innerHTML = cuvantActual.split("").map(() => '<li class="letter"></li>').join("");
        gameModal.classList.remove("show");
        tastaturaDiv.querySelectorAll("button").forEach(btn => {
            btn.disabled = false;
            btn.classList.remove("button-disabled");
        });
        spanzuratoarea.src = `poze/1.jpeg`; // Resetăm la prima imagine
        incercariText.innerText = `${numarIncercari}/${max}`;
    };

    const cuvantRandom = () => {
        const listaCuvinte = [
            "calculator", "programare", "masina", "telefon", "biblioteca", "soare", "carte", "creion",
            "minge", "fruct", "papagal", "cafea", "univers", "fluture", "fereastra", "pisica", "pinguin",
            "morcov", "padure", "elefant", "vulcan", "calatorie", "racheta", "astronaut", "dinozaur",
            "tigru", "vampir", "sarpe", "cerb", "fantoma", "casuta", "lampa", "fericire", "prosop",
            "ceas", "umbrela", "pian", "tastatura", "gandac", "galaxie"
        ];

        // Generam un cuvant nou diferit de cel anterior
        let cuvantNou = listaCuvinte[Math.floor(Math.random() * listaCuvinte.length)];
        while (cuvantNou === cuvantAnterior) {
            cuvantNou = listaCuvinte[Math.floor(Math.random() * listaCuvinte.length)];
        }
        cuvantAnterior = cuvantNou;
        cuvantActual = cuvantNou; // Actualizăm cuvântul actual
        console.log(cuvantNou); // Afișăm cuvântul ales

        // Resetăm jocul după alegerea unui nou cuvânt
        resetGame();
    };

    const gameOver = (status) => {
        setTimeout(() => {
            const text = status ? `Ai găsit cuvântul! :3` : `Cuvântul corect era: `;
            gameModal.querySelector("img").src = `poze/${status ? `win` : `lose`}.gif`;
            gameModal.querySelector("h4").innerText = `${status ? `Felicitări!` : `Game Over!`}`;
            gameModal.querySelector("p").innerHTML = `${text} <b>${cuvantActual}</b>`;
            gameModal.classList.add("show");
        }, 300);
    };

    // Verificăm dacă litera se află în cuvântul dat
    const initGame = (button, clickedLetter) => {
        if (cuvantActual.includes(clickedLetter)) {
            [...cuvantActual].forEach((letter, index) => {
                if (letter === clickedLetter) {
                    litereCorecte.push(letter);
                    cuvantAfisare.querySelectorAll("li")[index].innerText = letter;
                    cuvantAfisare.querySelectorAll("li")[index].classList.add("guessed");
                }
            });
        } else {
            numarIncercari++;
            spanzuratoarea.src = `poze/${numarIncercari + 1}.jpeg`;
        }

        incercariText.innerText = `${numarIncercari}/${max}`;
        button.classList.add("button-disabled");
        button.disabled = true;

        if (numarIncercari === max) {
            return gameOver(false);
        }

        if (litereCorecte.length === cuvantActual.length) {
            return gameOver(true);
        }
    };

    // Creez butoanele cu litere + evenimente
    for (let i = 97; i <= 122; i++) {
        const button = document.createElement("button");
        button.innerText = String.fromCharCode(i);
        tastaturaDiv.appendChild(button);
        button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)));
    }

    cuvantRandom(); // Generăm un cuvânt pentru prima rundă
    playAgainBtn.addEventListener("click", cuvantRandom);
});
