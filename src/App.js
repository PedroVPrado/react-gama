import React from 'react';
import Routes from './routes';
import Repositories from './pages/Repositories';
import Home from './pages/Home';

function App(props) {
  return (
    <Routes path='/' component={Home} />,
    <Routes path='/repositories' component={Repositories} />
  );
}

export default App;
