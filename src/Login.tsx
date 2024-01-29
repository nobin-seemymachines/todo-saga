import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from './store';
import { API_CALL_REQUEST } from './actionTypes';

// Define the type for user data
export type UserData = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  // State variable for user data (email and password)
  const [userData, setUserData] = useState<UserData>({
    email: '',
    password: '',
  });

  const dispatch = useAppDispatch()
  // Event handler for form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(userData);
    dispatch({ type: API_CALL_REQUEST, payload: userData });
  };

  
  const data = useAppSelector((state) => state.token);
  console.log(data);
  

  // JSX structure for the login form
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login
