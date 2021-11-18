import { useSelector } from 'react-redux';
import {getSortCallback} from "../utils/getSortCallback";

const checkInclude = (obj, searchString) => Object.values(obj).some(elem => elem.toString().includes(searchString));

export const useLoadedData = state => {
    /*
    * todo
    *  переделать как в примере
    * https://react-redux.js.org/api/hooks
    *
    * Ориентироваться на последний пример с использованием reselect
    *
      const makeSelectCompletedTodosCount = () =>
      createSelector(
        (state) => state.todos,
        (_, completed) => completed,
        (todos, completed) =>
          todos.filter((todo) => todo.completed === completed).length
      )

    export const CompletedTodosCount = ({ completed }) => {
      const selectCompletedTodosCount = useMemo(makeSelectCompletedTodosCount, [])

      const matchingCount = useSelector((state) =>
        selectCompletedTodosCount(state, completed)
      )

      return <div>{matchingCount}</div>
    }
    * */
    let { data } = state.dataLoader;

    const { filterString } = useSelector(filterInfo);
    if (filterString) data = data.filter(item => checkInclude(item, filterString));

    const sortData = useSelector(sortInfo);
    const sortCallback = getSortCallback({
        key: sortData?.column,
        direction: sortData?.direction
    });
    if (Object.keys(sortData).length) data = data.sort(sortCallback);

    return data;
}
export const loadingStatus = state => state.dataLoader.status;

export const additionalInfo = state => state.additionalInfo;
export const chosenRecord = state => additionalInfo(state).chosenRecord;

export const newRecord = state => state.newRecordAppendor;

export const sortInfo = state => state.dataSorter;

export const filterInfo = state => state.dataFilter;

export const pagination = state => state.pagination;

export const formVisibility = state => state.formDemonstrator;
