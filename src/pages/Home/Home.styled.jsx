import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as SearchIcon } from 'images/svg/SearchIcon.svg';

export const MainWrapp = styled.main`
  width: 1020px;
  margin: 0 auto;
`;

export const LogoImg = styled.img`
  margin: 86px auto 16px;
`;

export const SearchInputWrapp = styled.form`
  margin-bottom: 51px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  &:focus,
  &:focus-visible,
  &:focus-within {
    outline: 1px solid rgba(0, 0, 0, 0.5);
  }
`;

export const SearchInput = styled.input`
  width: 967px;
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 1.5;
  padding: 16px 16px 16px 0;
  border: 1px solid transparent;
  border-radius: 8px;
  float: right;

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
  &:focus {
    outline: none;
  }
`;

export const SearchBtn = styled.button`
  background-color: transparent;
  padding: 16px 8px 16px 16px;
  border: none;
  background-repeat: no-repeat;
  background-position: center center;
  fill: rgba(0, 0, 0, 0.54);
  cursor: pointer;

  &:hover {
    fill: #111111;
  }

  &:focus,
  &:focus-visible,
  &:focus-within {
    height: 61px;
    outline: 1px solid rgba(0, 0, 0, 0.5);
  }
`;

export const IconSearch = styled(SearchIcon)`
  color: rgba(0, 0, 0, 0.54);
`;

export const CardLink = styled(NavLink)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
  &:hover,
  &:focus {
    outline: none;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 24px;
  grid-column-gap: 20px;
  margin-bottom: 168px;
`;

export const CharacterCard = styled.li`
  min-height: 244px;
  border: none;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.14),
    0px 3px 4px 0 rgba(0, 0, 0, 0.12), 0px 1px 5px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover,
  &:focus-within,
  &:focus {
    scale: 1.05;
  }
`;

export const HeroCardTextBlock = styled.div`
  padding: 12px 16px;
`;

export const HeroName = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.15px;
`;

export const Herospecies = styled.span`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.6);
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 168px;
  object-fit: cover;
  object-position: 0 -30px;
`;
