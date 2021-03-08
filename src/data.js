export const getCharactersFilterSearch = (characterSearchValue, allData) => {
  return allData.filter((character) =>
    character.name.toUpperCase().startsWith(characterSearchValue.toUpperCase())
  );
};
//obtiene los personajes filtrados por nombre de opcion y por el valor de esa opcion
export const getFilterCharactersByOptions = (optionName, optionValue, data) => {
  let filteredData;

  switch (optionName) {
    case "origen":
      filteredData = data.filter((data) => data.origin.name === optionValue);
      break;
    case "species":
      filteredData = data.filter((data) => data.species === optionValue);
      break;
    case "gender":
      filteredData = data.filter((data) => data.gender === optionValue);
      break;
    case "status":
      filteredData = data.filter((data) => data.status === optionValue);
      break;
    default:
      filteredData = [];
  }

  return filteredData;
};
// Función para ordenar los personajes
export const orderCharacters = (allData,desc) => {
  return allData.sort(function (a, b) {
     if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) return desc?1:-1;
     if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) return desc?-1:1;
     return 0;
   });
 };
 