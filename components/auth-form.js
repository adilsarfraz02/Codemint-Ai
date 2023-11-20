import { useState, useRef } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';


async function createUser(email, password) {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
}

function AuthForm() {
  const [registered, setRegistered] = useState(false)
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: Add validation

    if (isLogin) {
      await signIn('credentials', {
        redirect: '/',
        email: enteredEmail,
        password: enteredPassword,
      });

    } else {
      try {
        const result = await createUser(enteredEmail, enteredPassword);
        setRegistered(true)
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <section className='max-w-xl mx-auto min-h-[60vh]'>
      {!registered ? (
        <div className='mx-auto w-fit '>
          <h1 className='text-center text-5xl mt-32 font-bold'>{isLogin ? 'Login' : 'Sign Up'}</h1>
          <form onSubmit={submitHandler}>
            <div className='my-4 text-xl'>
              <label htmlFor='email'>Your Email</label><br/>
              <input className='w-64 text-black p-3 rounded-xl mt-1' type='email' id='email' required ref={emailInputRef} />
            </div>
            <div className='my-4 text-xl'>
              <label htmlFor='password'>Password</label><br />
              <input
                type='password'
                id='password'
                required className='w-64 text-black p-3 rounded-xl mt-1'
                ref={passwordInputRef}
              />
            </div>
            <div className='my-2 mx-auto'>
              <button className='bg-pink-500 px-6 py-3 rounded-3xl mr-4'>{isLogin ? 'Login' : 'Create Account'}</button>
              <br />
              <button
                type='button'
                className='text-center mx-auto flex'
                onClick={switchAuthModeHandler}>
                {isLogin ? 'No Account? Create One' : 'Already a user? Login'}
              </button>
            </div>
          </form>
          <button onClick={() => signIn('google')} className='cursor-pointer'>login with google </button>
        </div>
      ) : (
        <div className=''>
          <p>You have successfully registered!</p>
          
          <button onClick={() => router.reload()} className='button button-color'>Login Now</button>
          
        </div>
      )}
      
    </section>
  );
}

export default AuthForm;
