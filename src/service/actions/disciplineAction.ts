import { getDiscipline } from '../utils/api';
import { useAppDispatch } from '../hooks/hooks';
import { disciplineFetching, disciplineFetchingError, disciplineFetchingSuccess } from '../slice/disciplineSlice';

// загрузка дисциплины
export const useFindDiscipline = async (name: string) => {
  const dispatch = useAppDispatch();
  dispatch(disciplineFetching());
  getDiscipline(name)
    .then((res) => {
      dispatch(disciplineFetchingSuccess(res));
    },
    ).catch((err: string) => disciplineFetchingError(err));
};