import { Route, Routes } from 'react-router';
import RegisterForm from '../components/Forms/Register/registerForm';
import RegistrationPage from '../pages/registrationPage';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={RegistrationPage}>
            <Route path='/' element={<RegisterForm />} />
            <Route path='/organization' element={<RegisterForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
