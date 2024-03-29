import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { Intro } from '../../components/Intro/Intro';
import { setIsAuthenticated } from '../../redux/reducers/authentication';
import { setIsAuthorized } from '../../redux/reducers/authorization';
import { login } from '../../services/authentication.service';
import { validateCredentials } from '../../tools';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [warning, setWarning] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const issues = validateCredentials(email, password);

    // If there is an API error, clear the error when the user starts correcting the credentials
    setError('');
    setWarning(issues);
  }, [email, password]);

  const handleLogin = async () => {
    setSubmitted(true);
    if (!warning.length) {
      try {
        const { token } = await login(email, password);

        localStorage.setItem('token', token);

        const decoded = jwtDecode(token);
        const roles = decoded.roles;

        dispatch(setIsAuthenticated(true));

        if (roles.includes('admin')) {
          dispatch(setIsAuthorized(true));
        }

        navigate('/cocktails');
      } catch (error) {
        console.log(error);
        setError(error.response.data.message);
      }
    }
  };

  return (
    <>
      <Intro text='Login' />
      <div className='bg-login bg-center bg-cover flex flex-1 justify-center lg:py-20'>
        <form
          onSubmit={(e) => e.preventDefault()}
          className='bg-lightOrangada rounded flex flex-col items-center gap-12 md:w-1/3 w-full md:my-8 px-8 md:py-12 py-40'>
          <div className='xl:w-4/5 w-full'>
            <div className='flex flex-col gap-4'>
              <Input
                type='email'
                autoComplete='on'
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email'
                value={email}
              />
              <Input
                type={showPassword ? 'text' : 'password'}
                autoComplete='on'
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
                value={password}
              />
            </div>
            <div className='relative'>
              <span
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                className='absolute bottom-2 right-0 flex items-center pr-3 cursor-pointer'>
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </span>
            </div>
            <div>
              {submitted && Boolean(warning.length) && <p className='text-blueberry font-bold'>{warning}</p>}
              {Boolean(error.length) && <p className='text-blueberry font-bold'>{error}</p>}
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <Button type='submit' text='Login' onClick={handleLogin} />
            <div className='text-white'>
              <p>
                Don't have an account?{' '}
                <span className='text-blueberry font-bold cursor-pointer' onClick={() => navigate('/register')}>
                  Register
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
