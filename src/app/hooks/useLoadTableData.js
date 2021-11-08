import axios from 'axios/index';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { loadData } from '../reducers/dataLoader';

export const useLoadTableData = () => {
    const dispatch = useDispatch();
    
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(false);
        axios.get('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
            .then(res => {
                dispatch(loadData({data: res.data}));
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoaded(true);
            })
    }, [dispatch]);

    return { loaded };
}