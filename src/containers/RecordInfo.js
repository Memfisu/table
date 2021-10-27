import React from 'react';
import { Grid } from '../ui-kit/Containers';
import { Label, Span } from '../ui-kit/Labels';

const RecordInfo = ({ chosenRecord }) => {
    return (
        <Grid gridAutoRows="20px">
            <Label>Выбран пользователь
                <Span>
                    {` ${chosenRecord?.firstName} ${chosenRecord?.lastName}`}
                </Span>
            </Label>
            <Label>Описание: <Span>et lacus magna dolor...</Span></Label>
            <Label>Адрес проживания: <Span>9792 Mattis Ct</Span></Label>
            <Label>Город: <Span>Waukesha</Span></Label>
            <Label>Провинция/штат: <Span>WI</Span></Label>
            <Label>Индекс: <Span>22178</Span></Label>
        </Grid>
    );
};

export default RecordInfo;
