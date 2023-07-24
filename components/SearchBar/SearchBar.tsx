'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { SearchManufacturer } from '../SearchManufacturer/SearchManufacturer';
import { useRouter} from 'next/navigation';
import './SearchBar.css';
import { SearchBarProps } from './SearchBar.props';


const SearchButton = ({styles}: {styles?: string}) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${styles ? styles : ''}`}>
        <Image 
          src="/magnifying-glass.svg"
          alt="magnifying glass"
          width={40}
          height={40}
        /> 
    </button>
  );
};

export const SearchBar = ({manufacturer, setManufacturer, model, setModel}: SearchBarProps) => {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(manufacturer === '' && model === ''){
      return alert('Please fill in the search bar');
    };

    setManufacturer(manufacturer);
    setModel(model);
  };



  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
        <SearchButton styles="sm:hidden" />
      </div>

      <div className="searchbar__item">
        <Image 
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="Car model"
        />
         
        <input 
          type="text" 
          name="model" 
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Car Model"
          className="searchbar__input"  
        />

        <SearchButton styles="sm:hidden"/>
      </div>

      <SearchButton styles="max-sm:hidden"/>
    </form>
  );
};
