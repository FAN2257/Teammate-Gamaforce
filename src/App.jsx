import React from "react";
import Map from "./components/Map";
import Sidebar from './components/Sidebar';
import Header from './components/header';

function App() {
  return (
    <div className='flex flex-col bg-blue-950'>
      <Header />
      <div className='flex flex-row bg-white'>
        <Sidebar />
        <Map />
      </div>
    </div>
    )
}

export default App;