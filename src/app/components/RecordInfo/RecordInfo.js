import React from 'react';
import { useSelector } from 'react-redux';
import Box from '../../utils/Box';
import Label from '../../utils/Label';
import Span from '../../utils/Span';
import { chosenRecord } from '../../selectors/selectors';

const RecordInfo = () => {
    const chosenRecordInfo = useSelector(chosenRecord);
    if (!chosenRecordInfo) return null;

    const labels = [
        'Выбран пользователь:',
        'Описание:',
        'Адрес проживания:',
        'Город:',
        'Провинция/штат:',
        'Индекс:'
    ];

   const spans = [
       ` ${chosenRecordInfo?.firstName} ${chosenRecordInfo?.lastName}`,
       ` ${chosenRecordInfo?.description || ''}`,
       ` ${chosenRecordInfo?.address?.streetAddress || ''}`,
       ` ${chosenRecordInfo?.address?.city || ''}`,
       ` ${chosenRecordInfo?.address?.state || ''}`,
       ` ${chosenRecordInfo?.address?.zip || ''}`
   ];

   return (
       <Box className="additionalInfo">
           {labels.map((item, index) => (
               <Box className="recordInfoWrapper" key={index}>
                   <Label>{item}
                       <Span className="recordInfo">
                           {spans[index]}
                       </Span>
                   </Label>
               </Box>
            ))}
       </Box>
   );
};

export default RecordInfo;
