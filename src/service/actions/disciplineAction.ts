import { getDiscipline } from "../../utils/api"
import { useAppDispatch } from "../hooks/hooks";
import { disciplineFetching, disciplineFetchingError, disciplineFetchingSuccess } from "../slice/disciplineSlice"
//import { AppDispatch } from "../types"

// загрузка дисциплины
export const findDiscipline = async (name: string) => {
  const dispatch = useAppDispatch()
  dispatch(disciplineFetching());
  getDiscipline(name)
    .then((res) => {
      dispatch(disciplineFetchingSuccess(res))
    }
    ).catch((err: string) => disciplineFetchingError(err))
}