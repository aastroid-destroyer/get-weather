import { useState, useEffect } from 'react';

const useCountry = (countryName) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!countryName) return;

        setLoading(true);
        fetch(`https://restcountries.com/v3.1/name/${countryName}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data[0]);
                setLoading(false);
            });
    }, [countryName]);

    return { data, loading };
};

export default useCountry;