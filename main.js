import {
  getCharactersFilterSearch,
  getFilterCharactersByOptions,
  orderCharacters,
} from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";

const getAllData = data.results;
const orderBtn = document.getElementById("A-Z");
const disorderBtn = document.getElementById("Z-A");
const allBtn = document.getElementById("allCharacterBtn");
let search = document.getElementById("inputSearch");
const allCharacters = document.querySelector(".list");
let optionFiltered = [];
/Guarda los datos filtrados/;
let currentPage = 0; // pagina en la que estoy
let charactersByPage = 12;
//Guarda los datos que se mostraran por página
let charactersPagination = [];
let categoriesToFilter = [];

//VISIBILIDAD DE PANTALLA
document.getElementById("header").style.display = "none";
document.querySelector(".container-screen-two").style.display = "none";
document.querySelector(".container-screen-resumen").style.display = "none";
document.querySelector(".container-screen-curiosity").style.display = "none";

//ACCESO A PANTALLAS
const btnStart = document.querySelectorAll(".opc-character");
for (let i = 0; i < btnStart.length; i++) {
  let element = btnStart[i];
  element.addEventListener("click", () => {
    document.querySelector(".screen-one").style.display = "none";
    document.getElementById("header").style.display = "block";
    document.querySelector(".container-screen-two").style.display = "block";
    document.querySelector(".container-screen-resumen").style.display = "none";
    document.querySelector(".container-screen-curiosity").style.display =
      "none";
    //MOSTRAR TODOS LOS PERSONAJES
    categoriesToFilter = [];
    optionFiltered = getAllData;
    init(optionFiltered);
  });
}

const opcCuriosity = document.getElementById("opc-curisidades");
opcCuriosity.addEventListener("click", () => {
  document.querySelector(".container-screen-curiosity").style.display = "block";
  document.querySelector(".container-screen-two").style.display = "none";
  document.querySelector(".container-screen-resumen").style.display = "none";
});

const opcResumen = document.getElementById("opc-resumen");
opcResumen.addEventListener("click", () => {
  document.querySelector(".container-screen-resumen").style.display = "block";
  document.querySelector(".container-screen-curiosity").style.display = "none";
  document.querySelector(".container-screen-two").style.display = "none";
});

//TARJETA DE PESONAJES
const renderCharacterData = (data) => {
  allCharacters.innerHTML = "";

  data.forEach((character) => {
    return (allCharacters.innerHTML += `<div class="characterCard"> 
        <img width = "200px"src = "${character.image}"> 
        <div>
        <p>${character.name}</p> 
        <p>Especie: ${character.species}</p>
        <p>Género:  ${character.gender}</p>
        <p>Origen: ${character.origin.name}</p>
        <p>Estado: ${character.status}</p>
        </div>
        </div>`);
  });
};

// MOSTRAR PERSONAJES MEDIANTE BUSQUEDA
search.addEventListener("input", function () {
  resetRadioBtn("origen");
  resetRadioBtn("species");
  resetRadioBtn("gender");
  resetRadioBtn("status");
  allCharacters.innerHTML = "";
  /*limpio el contenedor de personajes*/
  let textToSearch = search.value;
  if (textToSearch.length > 0) {
    let charactersFiltered = getCharactersFilterSearch(
      textToSearch,
      getAllData
    );
    init(charactersFiltered);
    if (charactersFiltered == false) {
      allCharacters.innerHTML = "no hay personaje";
    } else if (textToSearch.length == 0) {
      return; // con el return hago que el método acabe aqui y ya no haga lo demas
    }
  } else {
    init(getAllData);
  }
});

//RESETEAR RADIO BUTTON
const resetRadioBtn = (grupeRadioBtn) => {
  const optionRadioBtn = document.getElementsByName(grupeRadioBtn);
  for (let i = 0; i < optionRadioBtn.length; i++) {
    let options = optionRadioBtn[i];
    options.checked = false;
  }
};
resetRadioBtn("origen");
resetRadioBtn("species");
resetRadioBtn("gender");
resetRadioBtn("status");

// MOSTRAR PERSONAJES MEDIANTE OPCIONES
/*Origin*/
let inputOrigen = document.querySelectorAll('input[name="origen"]');
if (inputOrigen) {
  for (let i = 0; i < inputOrigen.length; i++) {
    inputOrigen[i].addEventListener("click", function () {
      let item = inputOrigen[i].value;

      let indexOp = categoriesToFilter.findIndex(
        (op) => op.category === "origen"
      );

      let optionSelected = {
        category: "origen",
        value: item,
      };

      if (indexOp == -1) {
        categoriesToFilter.push(optionSelected);
      } else {
        categoriesToFilter[indexOp] = optionSelected;
      }
      /*Para filtrar en serie o toda la data*/
      categoriesToFilter.forEach((optionSelected, index) => {
        optionFiltered = getFilterCharactersByOptions(
          optionSelected.category,
          optionSelected.value,
          index == 0 ? getAllData : optionFiltered
        );
      });
      init(optionFiltered);
    });
  }
}
/*Species*/
let inputSpecies = document.querySelectorAll('input[name="species"]');
if (inputSpecies) {
  for (let i = 0; i < inputSpecies.length; i++) {
    inputSpecies[i].addEventListener("click", function () {
      let item = inputSpecies[i].value;

      let indexOp = categoriesToFilter.findIndex(
        (op) => op.category === "species"
      );

      let optionSelected = {
        category: "species",
        value: item,
      };

      if (indexOp == -1) {
        categoriesToFilter.push(optionSelected);
      } else {
        categoriesToFilter[indexOp] = optionSelected;
      }

      /*Para filtrar en serie o toda la data*/
      categoriesToFilter.forEach((optionSelected, index) => {
        optionFiltered = getFilterCharactersByOptions(
          optionSelected.category,
          optionSelected.value,
          index == 0 ? getAllData : optionFiltered
        );
      });
      init(optionFiltered);
    });
  }
}
/*Gender*/
let inputGender = document.querySelectorAll('input[name="gender"]');
if (inputGender) {
  for (let i = 0; i < inputGender.length; i++) {
    inputGender[i].addEventListener("click", function () {
      let item = inputGender[i].value;

      let indexOp = categoriesToFilter.findIndex(
        (op) => op.category === "gender"
      );

      let optionSelected = {
        category: "gender",
        value: item,
      };

      if (indexOp == -1) {
        categoriesToFilter.push(optionSelected);
      } else {
        categoriesToFilter[indexOp] = optionSelected;
      }

      /*Para filtrar en serie o toda la data*/
      categoriesToFilter.forEach((optionSelected, index) => {
        optionFiltered = getFilterCharactersByOptions(
          optionSelected.category,
          optionSelected.value,
          index == 0 ? getAllData : optionFiltered
        );
      });
      init(optionFiltered);
    });
  }
}
/*Status*/
let inputStatus = document.querySelectorAll('input[name="status"]');
if (inputStatus) {
  for (let i = 0; i < inputStatus.length; i++) {
    inputStatus[i].addEventListener("click", function () {
      let item = inputStatus[i].value;

      let indexOp = categoriesToFilter.findIndex(
        (op) => op.category === "status"
      );

      let optionSelected = {
        category: "status",
        value: item,
      };

      if (indexOp == -1) {
        categoriesToFilter.push(optionSelected);
      } else {
        categoriesToFilter[indexOp] = optionSelected;
      }

      /*Para filtrar en serie o toda la data*/
      categoriesToFilter.forEach((optionSelected, index) => {
        optionFiltered = getFilterCharactersByOptions(
          optionSelected.category,
          optionSelected.value,
          index == 0 ? getAllData : optionFiltered
        );
      });
      init(optionFiltered);
    });
  }
}

//BOTON ORDENAR A-Z PERSONAJES
orderBtn.addEventListener("click", (event) => {
  event.preventDefault();
  optionFiltered = orderCharacters(
    optionFiltered.length == 0 ? getAllData : optionFiltered,
    false
  );
  init(optionFiltered);
});

//BOTON ORDENAR Z-A PERSONAJES
disorderBtn.addEventListener("click", (event) => {
  event.preventDefault();
  optionFiltered = orderCharacters(
    optionFiltered.length == 0 ? getAllData : optionFiltered,
    true
  );
  init(optionFiltered);
});

//BOTON TRAER TODOS LOS PERSONAJES
allBtn.addEventListener("click", function () {
  optionFiltered = getAllData;
  categoriesToFilter = [];
  init(optionFiltered);
  resetRadioBtn("origen");
  resetRadioBtn("species");
  resetRadioBtn("gender");
  resetRadioBtn("status");
});

//PANTALLA CURIOSIDADES
const totalCharacter = getAllData.length;

const calOne = document.getElementById("calOne");
const calculateOne = (data) => {
  const arrayStatus = data.map(({ status }) => status);
  const searchAlive = arrayStatus.filter((alive) => {
    return alive === "Alive";
  }).length;
  const searchDead = arrayStatus.filter((dead) => {
    return dead === "Dead";
  }).length;
  const searchUnknown = arrayStatus.filter((unknown) => {
    return unknown === "unknown";
  }).length;

  const porcientoAlive = Math.round((searchAlive * 100) / totalCharacter);
  const porcientoDead = Math.round((searchDead * 100) / totalCharacter);
  const porcientoUnknown = Math.round((searchUnknown * 100) / totalCharacter);

  calOne.innerHTML = `<p> Sabías que hay ${totalCharacter} personajes de los cuales, 
  ${porcientoAlive}% estan con vida, ${porcientoDead}% se encuentran muerto y ${porcientoUnknown}%
  se desconoce su estado.
  </p>`;
};
calculateOne(getAllData);

const calTwo = document.getElementById("calTwo");
const calculateTwo = (data) => {
  const arrayGender = data.map(({ gender }) => gender);
  const searchFemale = arrayGender.filter((female) => {
    return female === "Female";
  }).length;
  const searchMale = arrayGender.filter((male) => {
    return male === "Male";
  }).length;
  const searchUnknown = arrayGender.filter((unknown) => {
    return unknown === "unknown";
  }).length;

  const porcientoAlive = Math.round((searchFemale * 100) / totalCharacter);
  const porcientoDead = Math.round((searchMale * 100) / totalCharacter);
  const porcientoUnknown = Math.round((searchUnknown * 100) / totalCharacter);

  calTwo.innerHTML = `<p> Sabías que hay ${porcientoAlive}%  de mujeres, 
  ${porcientoDead}% de hombres y ${porcientoUnknown}% de personajes aún no se le conoce su género 
  </p>`;
};
calculateTwo(getAllData);

/*calculando con array de especie*/
const arraySpecies = getAllData.map(({ species }) => species);

const calThree = document.getElementById("calThree");
const calculateThree = () => {
  const searchCrone = arraySpecies.filter((cronenberg) => {
    return cronenberg === "Cronenberg";
  }).length;
  const porcientoCrone = Math.round((searchCrone * 100) / totalCharacter);

  calThree.innerHTML = `<p> Sabías que hay ${porcientoCrone}% de Cronenberg, especie que antes
  fueron humanos pero se tranformaron por una posima de Rick entregado a Morty </p>`;
};
calculateThree();

const calFour = document.getElementById("calFour");
const calculateFour = () => {
  const searchHuman = arraySpecies.filter((human) => {
    return human === "Human";
  }).length;

  const porcientoHuman = Math.round((searchHuman * 100) / totalCharacter);

  calFour.innerHTML = `<p> Sabías que solo el ${porcientoHuman}% de personajes en la serie son
  de la especie humana</p>`;
};
calculateFour();

const calFive = document.getElementById("calFive");
const calculateFive = (data) => {
  const arrayName = data.map(({ name }) => name).join();
  let patron = /rick/gi;
  let searchRick = arrayName.match(patron).length;
  let patronTwo = /morty/gi;
  let searchMorty = arrayName.match(patronTwo).length;

  calFive.innerHTML = `<p> Sabías que hay ${searchRick} Rick y ${searchMorty} Morty en la serie pero se encuentran
  en diferentes locaciones y son de diferente origen </p>`;
};
calculateFive(getAllData);

//PAGINACIÓN

const paginate = (data) => {
  let numberItems = data.length;
  let numberPages = Math.ceil(numberItems / charactersByPage);

  currentPage = numberPages > 0 ? 1 : currentPage;
  document.getElementById("pagination").innerHTML = "";
  for (let i = 1; i <= numberPages; i++) {
    let page = document.createElement("a");
    page.setAttribute("href", "#");
    page.innerHTML = `${i}`;

    page.addEventListener("click", () => {
      charactersPagination = filterCharactersByPage(data, i, charactersByPage);
      renderCharacterData(charactersPagination);
    });

    document.getElementById("pagination").appendChild(page);
  }
};

const init = (data) => {
  paginate(data);

  if (currentPage > 0) {
    charactersPagination = filterCharactersByPage(
      data,
      currentPage,
      charactersByPage
    );
    renderCharacterData(charactersPagination);
  }
};
// Cantidad de carácteres mostrados por página
const filterCharactersByPage = (data, page, numberItemsByPage) => {
  return data.filter(
    (val, i) =>
      i < page * numberItemsByPage &&
      i >= page * numberItemsByPage - numberItemsByPage
  );
};
