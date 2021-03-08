import {
  getCharactersFilterSearch,
  getFilterCharactersByOptions,
  orderCharacters,
} from "../src/data.js";

//FILTRADO POR BUSQUEDA
describe("Filtrado por busqueda", () => {
  it("debería ser una función", () => {
    expect(typeof getCharactersFilterSearch).toBe("function");
  });

  it("Debería devolver `Rick`", () => {
    const dataPrueba = [{ name: "Rick" }, { name: "Morty" }];
    expect(getCharactersFilterSearch(`Rick`, dataPrueba)).toStrictEqual([
      { name: "Rick" },
    ]);
  });
});

//FILTRADO POR OPCIONES
describe("Filtrado por opciones", () => {
  const data = [
    {
      name: "Rick",
      origin: { name: "Earth (C-137)" },
    },
    { name: "Morty", origin: { name: "unknown" } },
  ];
  const result = [
    {
      name: "Rick",
      origin: { name: "Earth (C-137)" },
    },
  ];

  const optionValue = "Earth (C-137)";
  const option = "origen";

  it("Debería ser una función", () => {
    expect(typeof getFilterCharactersByOptions).toBe("function");
  });

  it("returns results characters by option", () => {
    expect(
      getFilterCharactersByOptions(option, optionValue, data)
    ).toStrictEqual(result);
  });
});
