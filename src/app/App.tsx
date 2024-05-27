import { Route, Routes } from 'react-router';
import { Provider } from 'react-redux';
import RegisterForm from '../components/Forms/Register/RegisterForm';
import RegistrationPage from '../pages/Registration/RegistrationPage';
import { BrowserRouter } from 'react-router-dom';
import Disciplines from '../pages/Disciplines/Disciplines';
import { setupStore } from '../service/store';

const store = setupStore();
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/dis' Component={Disciplines}></Route>
          <Route path='/' Component={RegistrationPage}>
            <Route path='/' element={<RegisterForm />} />
            {/*<Route path='/organization' element={<RegisterForm />} />*/}
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
