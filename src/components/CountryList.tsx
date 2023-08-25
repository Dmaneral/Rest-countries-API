import { useState, useEffect } from 'react';
import Data from '../../data.json'
import './CountryList.css'
import { CountryTypes } from "../utils/types";
import SearchCountry from './SearchCountry';
import FilterCountry from './FilterCountry';
import { Link } from 'react-router-dom';


export default function CountryList() {
    const [countries, setCountries] = useState<CountryTypes[]>([]);

    useEffect(() => {
        setCountries(Data as CountryTypes[]);
    }, [])

    const searchByName = (searchWord: string) => {
        const filteredByName = Data.filter(country => {
            return country.name.toLowerCase().includes(searchWord.toLowerCase());
        })
        setCountries(filteredByName as CountryTypes[]);

        if (searchWord.length == 0) {
            setCountries(Data as CountryTypes[]);
        }
    }

    const filterByRegion = (region: string) => {
        const filteredDataByRegion = Data.filter(country => {
            return country.region === region
        });
        if (region === "" || region === "default") {
            setCountries(Data as CountryTypes[]);
        } else {
            setCountries(filteredDataByRegion as CountryTypes[]);
        }
        console.log(region);
    }


    return (
        <>
            <div className="filters_container">
                <SearchCountry onSearch={searchByName} />
                <div className="filtered_country_wrapper">
                    <FilterCountry onSelect={filterByRegion} />
                </div>
            </div>
            <div className='country_list_wrapper'>
                {
                    countries.map(country => (
                        <Link to={`/${country.name}`} className='country-item'>
                            <div className="country_wrapper">
                                <div className="img_wrapper">
                                    <img src={country.flags.png} />
                                </div>
                                <div className="info_container">
                                    <div className="country_name">
                                        <h2>{country.name}</h2>
                                    </div>
                                    <div className="country-description">
                                        <h3>Population: <span className='info-text'>{country.population}</span></h3>
                                        <h3>Region: <span className='info-text'>{country.region}</span></h3>
                                        <h3>Capital: <span className='info-text'>{country.capital}</span></h3>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}
