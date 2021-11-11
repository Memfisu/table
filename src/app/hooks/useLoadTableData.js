import axios from 'axios/index';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { loadData } from '../reducers/dataLoader';
import { setLoader } from '../reducers/showLoader';

export const useLoadTableData = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLoader({ visibility: true }));
        axios.get('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
            .then(res => {
                dispatch(loadData({data: res.data}));
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                dispatch(setLoader({ visibility: false }));
            })
    }, [dispatch]);
}