import React from 'react';
import { useSelector } from 'react-redux';
import Box from '../../utils/Box';
import Label from '../../utils/Label';
import Span from '../../utils/Span';
import { chosenRecord } from '../../selectors/selectors';

const RecordInfo = () => {
    const chosenRecordInfo = useSelector(chosenRecord);
    if (!chosenRecordInfo) return null;

    return (
        <Box>
            <Box className="recordInfo">
                <Label>Выбран пользователь
                    <Span className="boldText">
                        {` ${chosenRecordInfo?.firstName} ${chosenRecordInfo?.lastName}`}
                    </Span>
                </Label>
            </Box>
            <Box className="recordInfo">
                <Label>Описание:
                    <Span className="boldText">
                        {` ${chosenRecordInfo?.description || ''}`}
                    </Span>
                </Label>
            </Box>
            <Box className="recordInfo">
                <Label>Адрес проживания:
                    <Span className="boldText">
                        {` ${chosenRecordInfo?.address?.streetAddress || ''}`}
                    </Span>
                </Label>
            </Box>
            <Box className="recordInfo">
                <Label>Город:
                    <Span className="boldText">
                        {` ${chosenRecordInfo?.address?.city || ''}`}
                    </Span>
                </Label>
            </Box>
            <Box className="recordInfo">
                <Label>Провинция/штат:
                    <Span className="boldText">
                        {` ${chosenRecordInfo?.address?.state || ''}`}
                    </Span>
                </Label>
            </Box>
            <Box className="recordInfo">
                <Label>Индекс:
                    <Span className="boldText">
                        {` ${chosenRecordInfo?.address?.zip || ''}`}
                    </Span>
                </Label>
            </Box>
        </Box>
    );
};

export default RecordInfo;
