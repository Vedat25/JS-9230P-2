const characters = [
    {
        "id": 1,
        "name": "Luke Skywalker",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
        "homeworld": "tatooine"
    },
    {
        "id": 2,
        "name": "C-3PO",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
        "homeworld": "tatooine"
    },
    {
        "id": 3,
        "name": "R2-D2",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
        "homeworld": "naboo"
    },
    {
        "id": 4,
        "name": "Darth Vader",
        "pic": "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
        "homeworld": "tatooine"
    },
    {
        "id": 5,
        "name": "Leia Organa",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
        "homeworld": "alderaan"
    },
    {
        "id": 6,
        "name": "Owen Lars",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
        "homeworld": "tatooine"
    },
    {
        "id": 7,
        "name": "Beru Whitesun lars",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
        "homeworld": "tatooine"
    },
    {
        "id": 8,
        "name": "R5-D4",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
        "homeworld": "tatooine"
    },
    {
        "id": 9,
        "name": "Biggs Darklighter",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
        "homeworld": "tatooine"
    },
    {
        "id": 10,
        "name": "Obi-Wan Kenobi",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
        "homeworld": "stewjon"
    },
    {
        "id": 11,
        "name": "Anakin Skywalker",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
        "homeworld": "tatooine"
    },
    {
        "id": 12,
        "name": "Wilhuff Tarkin",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
        "homeworld": "eriadu"
    },
    {
        "id": 13,
        "name": "Chewbacca",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
        "homeworld": "kashyyyk"
    },
    {
        "id": 14,
        "name": "Han Solo",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
        "homeworld": "corellia"
    },
    {
        "id": 15,
        "name": "Greedo",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
        "homeworld": "Rodia"
    },
    {
        "id": 16,
        "name": "Jabba Desilijic Tiure",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
        "homeworld": "tatooine"
    },
    {
        "id": 18,
        "name": "Wedge Antilles",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
        "homeworld": "corellia"
    },
    {
        "id": 19,
        "name": "Jek Tono Porkins",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
        "homeworld": "bestine"
    },
    {
        "id": 20,
        "name": "Yoda",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png"
    },
    {
        "id": 21,
        "name": "Palpatine",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
        "homeworld": "naboo"
    }
];

const homeworldsRaw = characters.map(homeFc => homeFc.homeworld || "other");
console.log(homeworldsRaw);

const homeworldsUnique = [...new Set(homeworldsRaw)];
console.log(homeworldsUnique);

const homeworldsLowercase = homeworldsUnique.map(homeworld => homeworld.toLowerCase());
console.log(homeworldsLowercase);

const homeworlds = homeworldsLowercase;
console.log(homeworlds);

const showCharactersButton = document.getElementById("showCharacters");

showCharactersButton.style.backgroundColor = "#a9e984";

let renderStatus = true;

function renderCharacters() {
    const showInfo = document.getElementById("showInfo")
    if (renderStatus) {
        showInfo.innerHTML = characters.map(function (character) {
            return (
                `
            <div class = "col-lg-3 col-md-6 col-sm-12 card">
            <img src="${character.pic}">
            <h2>${character.name}</h2>
            <p>Homeworld: ${character.homeworld || "Bilinmiyor"}</p>
            </div>
            `)
        }).join("")
        showCharactersButton.textContent = "Karakterleri Gizle"
        showCharactersButton.style.backgroundColor = "#e293ab"
    } else {
        showInfo.innerHTML = ""
        showCharactersButton.textContent = "Karakterleri Göster"
        showCharactersButton.style.backgroundColor = "#a9e984"
    }
    renderStatus = !renderStatus
}

let buttonStatus = true;

function radioInput() {
    const radioBtn = document.getElementById("radioBtn")

    if (buttonStatus) {
        radioBtn.innerHTML = homeworlds.map(function (homeworlds) {
            return (
                `
                     <div class="form-check">
                     <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                     <label class="form-check-label" for="flexRadioDefault1">
                     ${homeworlds || "other"}
                     </label>
                     </div>
                     `
            )
        }).join("")
        rdBtn.textContent = "Filtrelemeyi Gizle";
    } else {
        radioBtn.innerHTML = "";
        rdBtn.textContent = "Filtrele";
    }
    buttonStatus = !buttonStatus
}


// homeworlds.forEach((vatan, index) => {
//     const lowercaseVatan = vatan.toLowerCase();
//     const input = document.createElement("input");
//     input.type = "radio";
//     input.classList.add("className");
//     input.name = "homeworld";
//     input.id = `homeworld${index}`;
//     input.value = lowercaseVatan;


// });


// const filterBtn = document.getElementById("radioBtn")

// filterBtn.addEventListener("click", function () {
//     if (filterHomeworld !== null) {
//         const filterCharacter = characters.filter((character) =>
//             character.homeworld && character.homeworld.toLowerCase() === filterHomeworld
//         )
//         showInfo.innerHTML = "";

//         for (const character of filterCharacter) {
//             showInfo.innerHTML += `
//             <div class = "col-lg-3 col-md-6 col-sm-12 card">
//             <img src="${character.pic}">
//             <h2>${character.name}</h2>
//             <p>Homeworld: ${character.homeworld || "Bilinmiyor"}</p>
//             </div>
//             `
//         }
//     }
// })