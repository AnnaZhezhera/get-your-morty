import { Route, Routes } from 'react-router-dom';
import React, { lazy } from 'react';
import { Layout } from './Layout/Layout';
import { AppWrapp } from './App.styled';

const Home = lazy(() => import('pages/Home/Home'));
const HeroDetails = lazy(() => import('pages/HeroDetails'));

export const App = () => {
  return (
    <AppWrapp>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="character/:id" element={<HeroDetails />} />
          <Route path="*" element={<Home />} /> setSearchQuery(movieName);
        </Route>
      </Routes>
    </AppWrapp>
  );
};
