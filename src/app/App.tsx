import { Route, Routes } from 'react-router';
import { Provider } from 'react-redux';
import RegisterForm from '../components/Forms/Register/registerForm';
import RegistrationPage from '../pages/Registration/RegistrationPage';
import { BrowserRouter } from 'react-router-dom';
import Disciplines from '../pages/Disciplines/Disciplines';
import { store } from '../service/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/dis' Component={Disciplines} />
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
