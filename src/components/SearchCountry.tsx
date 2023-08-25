import { useState } from "react";
import './SearchCountry.css';

export default function SearchCountry(props:{onSearch: (searchWord: string) => void}) {
  const [searchWord, setSearchWord] = useState("");

  const typeCountry = (e: { target: HTMLInputElement }) => {
    setSearchWord(e.target.value);
    props.onSearch(e.target.value);
  }

  return ( 
    <input value={searchWord} onChange={typeCountry} placeholder='Search for a country...' />
  )
}

