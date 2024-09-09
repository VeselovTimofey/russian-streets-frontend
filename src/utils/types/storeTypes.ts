import { rootReducer } from '../../service/slice/root';
import { setupStore } from '../../service/store';

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];