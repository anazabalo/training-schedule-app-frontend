import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_HELLO } from './App/graphql/queries';

const App = () => {
  const { loading, error, data } = useQuery(GET_HELLO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Welcome to Training Schedule App</h1>
      <p>Server Response: {data.hello}</p>
    </div>
  );
};

export default App;
