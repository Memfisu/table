import axios from 'axios/index';
import { useState, useEffect } from 'react';

export const useGetTableData = () => {
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState();

    useEffect(() => {
        setLoaded(false);
        setData(null);
        axios.get('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoaded(true);
            })
    }, []);

    return { loaded, data };
}