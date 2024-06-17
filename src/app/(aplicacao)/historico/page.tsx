'use client';
import React, { useState } from 'react';
import SearchBar from '@/components/search/Searchbar';
import FilterButton from '@/components/buttonFilter/FilterButton';
import './styles.css';
import SideMenu from '@/components/sideMenu/SideMenu';
import { Header } from '@/components/header/header';

export default function HomePage() {
  const [text, setText] = useState<string>('');
  console.log(text);

  return (
    <div className="main">
      <header />
      <main>
        <SearchBar />
        <div className="full-screen-container">
          <div className="filter-buttons">
            <FilterButton variante="ordenar" />
            <FilterButton variante="filtrar" />
          </div>
        </div>
      </main>
    </div>
  );
}
