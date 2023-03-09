import axios from 'axios';

export const imageBaseUrl = 'https://rickandmortyapi.com/api';

export const fetchHeroes = async () => {
  const response = await axios.get('https://rickandmortyapi.com/api/character');
  console.log(response);
  return response.data.results;
};

export const getHero = async heroId => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character/${heroId}`
  );
  return response.data;
};

// export const getSearchedHero = async searchWord => {
//   const response = await axios.get(
//     `///`
//   );

//   return response.data;
// };
