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

//FILTRADO POR ORDEN
describe("Ordenar personajes de la A-Z Z-A", () => {
  it("is a function", () => {
    expect(typeof orderCharacters).toBe("function");
  });

  const data = [{ name: "Morty" }, { name: "Zarbadar" }, { name: "Abadango" }];

  it("returns characters order of A-Z", () => {
    const resultOrder = [
      { name: "Abadango" },
      { name: "Morty" },
      { name: "Zarbadar" },
    ];
    expect(orderCharacters(data, false)).toStrictEqual(resultOrder);
  });

  it("returns characters order of Z-A", () => {
    const resultDesort = [
      { name: "Zarbadar" },
      { name: "Morty" },
      { name: "Abadango" },
    ];
    expect(orderCharacters(data, true)).toStrictEqual(resultDesort);
  });
});
