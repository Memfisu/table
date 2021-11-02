import {Box} from "../../ui-kit/Containers";
import ButtonWrapper from "../hocs/ButtonWrapper";
import Button from "../utils/Button";
import React from "react";

const DataFlowTest = () => {
    function* flowWorker () {
        yield console.log('test1');
        yield console.log('test2');
    }
    let actions = flowWorker();

    const handleClick = () => {
        actions.next();
    }

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