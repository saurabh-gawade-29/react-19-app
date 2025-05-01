import React from 'react';
import { useCountryData } from '../../hooks/useCountryData';
import CCard from "../../components/common/CCard/CCard";
import "./About.css";

const About = () => {
    const { data: data, loading, error } = useCountryData();
    console.log(data, "check1");
    console.log(loading, error, "check");
    return (
        <>
            <h1>About Us</h1>
            <p>Country Atlas is your gateway to discovering the world's nations. From rich histories to unique cultures, we provide insights that bring the globe closer to you. Our mission is to foster understanding and appreciation of the world's diversity.</p>
            {/* Country JSON data */}
            <div className="text-center my-4">
                <h2 className='display-5'>Here are the interesting facts <br /> We're proud of</h2>
            </div>
            <div className="row">
                {data && data.map((country) => (
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4" key={country.id}>
                        <CCard
                            countryName={country.countryName}
                            capital={country.capital}
                            population={country.population}
                            interestingFacts={country.interestingFacts}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default About