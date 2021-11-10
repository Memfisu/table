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
            <Box className="recordInfoWrapper">
                <Label>Выбран пользователь:
                    <Span className="recordInfo">
                        {` ${chosenRecordInfo?.firstName} ${chosenRecordInfo?.lastName}`}
                    </Span>
                </Label>
            </Box>
            <Box className="recordInfoWrapper">
                <Label>Описание:
                    <Span className="recordInfo">
                        {` ${chosenRecordInfo?.description || ''}`}
                    </Span>
                </Label>
            </Box>
            <Box className="recordInfoWrapper">
                <Label>Адрес проживания:
                    <Span className="recordInfo">
                        {` ${chosenRecordInfo?.address?.streetAddress || ''}`}
                    </Span>
                </Label>
            </Box>
            <Box className="recordInfoWrapper">
                <Label>Город:
                    <Span className="recordInfo">
                        {` ${chosenRecordInfo?.address?.city || ''}`}
                    </Span>
                </Label>
            </Box>
            <Box className="recordInfoWrapper">
                <Label>Провинция/штат:
                    <Span className="recordInfo">
                        {` ${chosenRecordInfo?.address?.state || ''}`}
                    </Span>
                </Label>
            </Box>
            <Box className="recordInfoWrapper">
                <Label>Индекс:
                    <Span className="recordInfo">
                        {` ${chosenRecordInfo?.address?.zip || ''}`}
                    </Span>
                </Label>
            </Box>
        </Box>
    );
};

export default RecordInfo;
