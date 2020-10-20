import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
export const ApplicationRouter = () => {
  return (
    <div className='flex flex-col h-screen justify-between mb-auto'>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
};
