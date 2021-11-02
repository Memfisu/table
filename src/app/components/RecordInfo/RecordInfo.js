import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from '../../../ui-kit/Containers';
import { Label, Span } from '../../../ui-kit/Labels';
import { chosenRecord } from '../../selectors/selectors';

const RecordInfo = () => {
    const chosenRecordInfo = useSelector(chosenRecord);
    if (!chosenRecordInfo) return null;

    return (
        <Box>
            <Box margin="10px 0px 0px 0px">
                <Label>Выбран пользователь
                    <Span>
                        {` ${chosenRecordInfo?.firstName} ${chosenRecordInfo?.lastName}`}
                    </Span>
                </Label>
            </Box>
            <Box margin="10px 0px 0px 0px">
                <Label>Описание:
                    <Span>{` ${chosenRecordInfo?.description}`}</Span>
                </Label>
            </Box>
            <Box margin="10px 0px 0px 0px">
                <Label>Адрес проживания:
                    <Span>
                        {` ${chosenRecordInfo?.address?.streetAddress}`}
                    </Span>
                </Label>
            </Box>
            <Box margin="10px 0px 0px 0px">
                <Label>Город:
                    <Span>
                        {` ${chosenRecordInfo?.address?.city}`}
                    </Span>
                </Label>
            </Box>
            <Box margin="10px 0px 0px 0px">
                <Label>Провинция/штат:
                    <Span>
                        {` ${chosenRecordInfo?.address?.state}`}
                    </Span>
                </Label>
            </Box>
            <Box margin="10px 0px 0px 0px">
                <Label>Индекс:
                    <Span>
                        {` ${chosenRecordInfo?.address?.zip}`}
                    </Span>
                </Label>
            </Box>
        </Box>
    );
};

export default RecordInfo;
