export function commandEmitter(callback, interval, commandsArr) {
  let counter = 0
  return setInterval(() => {
    callback(commandsArr[counter++])
  }, interval)
}

// пример вызова commandEmitter(action => { distatch(action) }, 1000, [{ type: 'fetched'}, { type: 'done', payload: { data: 'a'} }]
/*
* todo
*  Задача
* Сделать кнопку, которая запускает сценарий, с помощью commandEmitter, который генерирует последовательность экшенов с частотой в 1 сек,
* которые устанавливают сортировку
* по очереди по каждому столбцу в таблице
* Логику реализовать в сагах, над commandEmitter реализовать обертку eventChannel https://redux-saga.js.org/docs/advanced/Channels/
*
*  */
