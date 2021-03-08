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
  let optionFiltered = []; /Guarda los datos filtrados/
  let currentPage = 0;// pagina en la que estoy
  let charactersByPage = 12;
  //Guarda los datos que se mostraran por página
  let charactersPagination = [];
  let categoriesToFilter = [];
  
  //VISIBILIDAD DE PANTALLA
  document.getElementById("header").style.display = "none";
  document.querySelector(".container-screen-two").style.display = "none";
  document.querySelector(".container-screen-resumen").style.display = "none";
  document.querySelector(".container-screen-curiosity").style.display = "none";
  
  