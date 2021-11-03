import {Box} from "../../ui-kit/Containers";
import ButtonWrapper from "../hocs/ButtonWrapper";
import Button from "../utils/Button";
import React from "react";
import axios from "axios";
import {loadData} from "../reducers/dataLoader";
import {setChosenRecord} from "../reducers/recordInfoDemonstrator";
import { clearNewRecord } from "../reducers/newRecordAppendor";
import store from "../store";

function* flowWorker (array) {
    for (let i in array) {
        yield array[i]();
    }
}

const hideAdditionalInfo = () => {
    store.dispatch(clearNewRecord);
};

const showAdditionalInfo = () => {
    const { dataLoader } = store.getState();
    store.dispatch(setChosenRecord({ rowData: dataLoader[0] }));
};

const dataLoad = () => {
    const showLoader = () => {
        console.log('loading...');
    };

    const hideLoader = () => {
        console.log('loaded');
    };

    showLoader();
    axios.get('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
        .then(res => {
            store.dispatch(loadData({ data: res.data }));
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            hideLoader();
        });
};

const steps = [dataLoad, showAdditionalInfo, hideAdditionalInfo];

const temp = flowWorker(steps);

const DataFlowTest = () => {
    const handleClick = () => {
        temp.next();
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