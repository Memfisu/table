import {Box} from "../../ui-kit/Containers";
import ButtonWrapper from "../hocs/ButtonWrapper";
import Button from "../utils/Button";
import React, {useCallback, useState} from "react";
import axios from "axios";
import {loadData} from "../reducers/dataLoader";
import {useDispatch, useSelector} from "react-redux";
import {setChosenRecord} from "../reducers/recordInfoDemonstrator";
import {loadedData} from "../selectors/selectors";
import {clearNewRecord} from "../reducers/newRecordAppendor";

function* flowWorker (array) {
    // yield array[0]();
    // yield array[1]();
    // yield array[2]();
    yield console.log('adding a new record');
    yield console.log('sort ascending');
    yield console.log('sort descending');
    // yield console.log('filter');
    // yield console.log('pagination');
}

export const useGenerator = () => {
    const dispatch = useDispatch();

    const showLoader = useCallback(() => {
        console.log('loading...');
    }, []);
    const hideLoader = useCallback(() => {
        console.log('loaded');
    }, []);

    const dataLoad = useCallback(() => {
        showLoader();
        axios.get('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
            .then(res => {
                dispatch(loadData({data: res.data}));
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                hideLoader();
            });
    }, [dispatch, hideLoader, showLoader]);

    const chosenRecordInfo = useSelector(loadedData);
    const showAdditionalInfo = useCallback(() => {
        dispatch(setChosenRecord({ rowData: chosenRecordInfo[0] }));
    }, [chosenRecordInfo, dispatch]);

    const hideAdditionalInfo = useCallback(() => {
        dispatch(clearNewRecord());
    }, [dispatch]);

    return [() => console.log('dataLoad'), () => console.log('showAdditionalInfo'), () => console.log('hideAdditionalInfo')];
};

let counter = 0;

const DataFlowTest = () => {
    const actions = useGenerator();

    const handleClick = () => {
        actions[counter]();
        counter++;
    };

    return (
        <Box padding="0px 0px 20px 0px">
            <ButtonWrapper
                component={Button}
                onClick={handleClick}
                disabled={false}
                label="== Data Flow Test =="
            />
        </Box>
    )
};

export default DataFlowTest;