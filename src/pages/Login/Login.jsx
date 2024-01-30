import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { Intro } from '../../components/Intro/Intro';
import { login } from '../../services/authentication.service';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login(email, password);

      navigate('/cocktails');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Intro text='Login' />
      <div className='bg-login bg-center bg-cover flex flex-1 justify-center lg:py-20'>
        <form
          onSubmit={(e) => e.preventDefault()}
          className='bg-lightOrangada rounded flex flex-col items-center gap-12 md:w-1/3 w-full md:my-8 px-8 md:py-12 py-32'>
          <div className='flex flex-col gap-4 xl:w-4/5 w-full'>
            <Input
              type='email'
              autoComplete='on'
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              value={email}
            />
            <Input
              type='password'
              autoComplete='on'
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              value={password}
            />
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