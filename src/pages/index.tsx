import axios from 'axios';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState, useCallback } from 'react';
import styles from '../../styles/Home.module.css';

const Home: NextPage = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    // Service Worker가 실행되기 전에 API가 호출되면 에러 발생해서 강제로 setTimeout 실행함
    setTimeout(() => {
      testMockAPI();
    }, 1000);
  }, []);

  const testMockAPI = async () => {
    const mockAPI = await axios.get('/fruits');
  };

  const handleFormSubmit = useCallback(
    async (event) => {
      // Prevent the default behavior, as we don't want
      // for our page to reload upon submit.
      event.preventDefault();

      const mockAPI2 = await axios.post('/login', {
        username: username ? 'test' : username,
      });
      console.log(mockAPI2);

      setUserData(mockAPI2.data);
    },
    [username]
  );

  const handleUsernameChange = useCallback((event) => {
    console.log(event.target.value);
    setUsername(event.target.value);
  }, []);

  if (userData) {
    return (
      <div>
        <h1>
          <span data-testid="firstName">{userData.firstName}</span>{' '}
          <span data-testid="lastName">{userData.lastName}</span>
        </h1>
        <p data-testid="userId">{userData.id}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" name="username" value={username} onChange={handleUsernameChange} />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Home;
