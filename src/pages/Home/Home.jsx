import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchHeroes } from '../../api';
//eslint-disable-next-line
import {
  LogoImg,
  MainWrapp,
  SearchInputWrapp,
  SearchInput,
  SearchBtn,
  IconSearch,
  List,
  CharacterCard,
  HeroImage,
  CardLink,
  HeroCardTextBlock,
  HeroName,
  Herospecies,
} from './Home.styled';
import logo from '../../images/logo.png';

const Home = () => {
  const [heroes, setHeroes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const location = useLocation();

  useEffect(() => {
    const fetchCharacterInfo = async () => {
      setHeroes(await fetchHeroes());
    };
    fetchCharacterInfo().catch(console.error);
  }, []);

  const filteredCharacters = heroes.filter(character => {
    return character.name.toLowerCase().includes(searchQuery);
  });

  return (
    <MainWrapp>
      <LogoImg src={logo} alt="" width={600} height={200} />
      <SearchInputWrapp>
        <SearchBtn type="button">
          <IconSearch />
        </SearchBtn>
        <label for="searchQuery"></label>
        <SearchInput
          type="text"
          value={searchQuery}
          placeholder="Filter by name..."
          name="searchQuery"
          id="searchQuery"
          onChange={event => setSearchQuery(event.target.value)}
        />
      </SearchInputWrapp>
      <List>
        {filteredCharacters.map(character => (
          <CharacterCard key={character.id}>
            <CardLink
              to={`character/${character.id}`}
              state={{ from: location }}
            >
              <div>
                <HeroImage src={character.image} alt={character.name} />
                <HeroCardTextBlock>
                  <HeroName>{character.name}</HeroName>
                  <Herospecies>{character.species}</Herospecies>
                </HeroCardTextBlock>
              </div>
            </CardLink>
          </CharacterCard>
        ))}
      </List>
    </MainWrapp>
  );
};

export default Home;
