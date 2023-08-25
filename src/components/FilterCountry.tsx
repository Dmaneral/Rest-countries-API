import {useState} from 'react';
import './FilterCountry.css';

export default function FilterCountry(props:{onSelect: (region: string) => void}) {
    const [region, setRegion] = useState("");

    const changeRegion = (e: { target: HTMLSelectElement }) => {
        setRegion(e.target.value);
        props.onSelect(e.target.value);
    }

  return (
    <select onChange={changeRegion} defaultValue={"default"}>
        <option value="default" disabled >Filter by region</option>
        <option value="">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
    </select>
  )
}
