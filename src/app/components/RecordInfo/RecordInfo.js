import React from 'react';
import { useSelector } from 'react-redux';
import Box from '../../utils/Box';
import Label from '../../utils/Label';
import Span from '../../utils/Span';
import { chosenRecord } from '../../selectors/selectors';

const RecordInfo = () => {
   const chosenRecordInfo = useSelector(chosenRecord);
   if (!chosenRecordInfo) return null;

   const { address } = chosenRecordInfo;

   const labels = [
       [`${chosenRecordInfo?.firstName} ${chosenRecordInfo?.lastName}`, 'Выбран пользователь: '],
       [chosenRecordInfo?.description, 'Описание: '],
       [address?.streetAddress, 'Адрес проживания: '],
       [address?.city, 'Город: '],
       [address?.state, 'Провинция/штат: '],
       [address?.zip, 'Индекс: ']
   ];

   return (
       <Box className="additionalInfo">
           {labels.map(([key, value], index) => (
                   <Box className="recordInfoWrapper" key={index}>
                       <Label>{value}
                           <Span className="recordInfo">
                               {key}
                           </Span>
                       </Label>
                   </Box>
               ))}
       </Box>
   );
};

export default RecordInfo;
