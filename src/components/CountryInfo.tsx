import './CountryInfo.css'
import { Link, useParams } from 'react-router-dom'
import Data from '../../data.json';
import { CountryTypes } from '../utils/types';
import { useEffect, useState } from 'react';

export default function CountryInfo() {
    const countryName = useParams<{ countryName: string }>();

    const currentCountry = Data.find(country => {
        return country.name === countryName.countryName;
    })

    return (
        <div className='CountryInfo'>
            <button className='back-button'><Link to="/"><span className='arrow'>&#8678;</span> Back</Link></button>
            <div className="info-content-container">
                <img src={currentCountry?.flags.png} alt="country flag" className='flag' />
                <div className="info-container">
                    <h1 className='country-name'>{currentCountry?.name}</h1>
                    <div className="info-wrapper">
                        <div className="main-info">
                            <h2 className='detail-info'>Native name: <span className='info-text'>{currentCountry?.nativeName}</span></h2>
                            <h2 className='detail-info'>Population: <span className='info-text'>{currentCountry?.population}</span></h2>
                            <h2 className='detail-info'>Region: <span className='info-text'>{currentCountry?.region}</span></h2>
                            <h2 className='detail-info'>Sub region: <span className='info-text'>{currentCountry?.subregion}</span></h2>
                            <h2 className='detail-info'>Capital: <span className='info-text'>{currentCountry?.capital}</span></h2>
                        </div>
                        <div className="secondary-info">
                            <h2 className='detail-info'>Top level domain: <span className='info-text'>{currentCountry?.topLevelDomain}</span></h2>
                            <h2 className='detail-info'>Currencies: <span className='info-text'>{currentCountry?.currencies?.map(curr => curr.name)}</span></h2>
                            <h2 className='detail-info'>Languages: <span className='info-text'>{currentCountry?.languages.map(curr => curr.name)}</span></h2>
                        </div>
                    </div>
                    <div className="border-countries-container">
                        <h3 className='detail-border'>Border countries:</h3>
                        <div className="border-countries">
                            {
                                currentCountry?.borders?.map((border) => (
                                    <div className="border-country">{border}</div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
