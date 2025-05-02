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

    if (isPending) return <h1>Loading...</h1>
    return (
        <>Country</>
    )
}

export default Country