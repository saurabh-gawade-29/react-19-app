import { useState, useEffect } from "react";
import countryData from "../services/api/countryData.json";

export function useCountryData() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCountryData = () => {
        try {
            setData(countryData);
        } catch (err) {
            setError("Falied to load country data");
            console.log(err, "Error in useCountryData Custom hook")
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchCountryData();
    }, [])

    return { data, loading, error }
}
