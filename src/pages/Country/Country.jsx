import React, { useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../../services/api/postApi';

const Country = () => {
    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([])
    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryData();
            console.log(res, "res..")
            setCountries(res.data)
            console.log(countries)
        })
    }, [])
    //! In your main project create one loader component
    if (isPending) return <h4>Loading...</h4>
    return (
        <section className='my-4'>
            <div className='row'>
                {countries.map((ele) => {
                    return (
                        <div className='col-12 col-sm-12 col-md-3 col-lg-2 mb-4'>
                            <div className="card shadow bg-dark">
                                <div className="card-header text-white">
                                    {ele.region}
                                </div>
                                <div className="card-body">
                                    <img src={ele.flags.png} alt="" className='img-fluid card-img-top' />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Country