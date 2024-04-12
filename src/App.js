import React from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import  Display  from './components/Display';
import Content from './components/Content';
import Profile from './components/Profile';
import PackingList from './components/Packing';
import List from './components/List';

function App() {
  return (
    <div>
      <Header />
      <Gallery />
      <Display />
      <Content />
      <hr/>
      <Profile />
      <hr/>
      <PackingList />
      <hr/>
      <List/>
    </div>
  );
}

export default App;
