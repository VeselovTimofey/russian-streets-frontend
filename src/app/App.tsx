import { Route, Routes } from 'react-router';
import RegisterForm from '../components/Forms/Register/registerForm';
import RegistrationPage from '../pages/Registration/RegistrationPage';
import { BrowserRouter } from 'react-router-dom';
import Disciplines from '../pages/Disciplines/Disciplines';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/dis' Component={Disciplines} />
          <Route path='/' Component={RegistrationPage}>
            <Route path='/' element={<RegisterForm />} />
            {/*<Route path='/organization' element={<RegisterForm />} />*/}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
