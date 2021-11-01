import React from 'react';
import { connect } from 'react-redux';
import { Box } from '../ui-kit/Containers';
import { Label, Span } from '../ui-kit/Labels';

const RecordInfo = ({ chosenRecord }) => {
    return chosenRecord ? (
        <Box>
            <Box margin="10px 0px 0px 0px">
                <Label>Выбран пользователь
                    <Span>
                        {` ${chosenRecord?.firstName} ${chosenRecord?.lastName}`}
                    </Span>
                </Label>
            </Box>
            <Box margin="10px 0px 0px 0px">
                <Label>Описание:
                    <Span>{` ${chosenRecord?.description}`}</Span>
                </Label>
            </Box>
            <Box margin="10px 0px 0px 0px">
                <Label>Адрес проживания:
                    <Span>
                        {` ${chosenRecord?.address?.streetAddress}`}
                    </Span>
                </Label>
            </Box>
            <Box margin="10px 0px 0px 0px">
                <Label>Город:
                    <Span>
                        {` ${chosenRecord?.address?.city}`}
                    </Span>
                </Label>
            </Box>
            <Box margin="10px 0px 0px 0px">
                <Label>Провинция/штат:
                    <Span>
                        {` ${chosenRecord?.address?.state}`}
                    </Span>
                </Label>
            </Box>
            <Box margin="10px 0px 0px 0px">
                <Label>Индекс:
                    <Span>
                        {` ${chosenRecord?.address?.zip}`}
                    </Span>
                </Label>
            </Box>
        </Box>
    ) : null;
};

const mapStateToProps = (state) => state?.additionalInfo;

export default connect(mapStateToProps)(RecordInfo);
