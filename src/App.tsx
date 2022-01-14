import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { useAuth } from './hooks';
import DefaultLayout from './shared/components/DefaultLayout';

function App () {
  const { onLoginWithToken } = useAuth();

  useEffect(() => {
    onLoginWithToken();
  }, [onLoginWithToken]);

  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  );
}

export default App;
