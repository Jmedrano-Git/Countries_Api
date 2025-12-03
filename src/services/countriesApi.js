export const countriesApi = {
  getCharacters: async () => {
    const res = await fetch("https://restcountries.com/v3.1/independent?status=true");
    const data = await res.json();
    console.log('Object =>', data);

    const countries = data.map((country) => ({
      name: country.name.common,
      capital: country.capital ? country.capital[0] : "No capital",
      population: country.population,
      image: country.flags?.png || country.flags?.svg || "",
    }));

    return countries;
  },
};
