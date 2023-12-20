import React from 'react';
// import './App.css';
import {NetflixIndex} from './netflix/netflix-index/NetflixIndex';
import LoginComponent from './components/login/LoginComponent';
import ParentComponent from './components/props/ParentComponent/ParentComponent';
import ParentProfile from './components/props/ParentProfile/ParentProfile';
import PropsSpread from './components/props/props passing data/spread individual/PropsSpread';
import CountStateComponent from './components/UseState/CountStateComponent';
import UserInput from './components/UseState/UserInput';
import { FetchWithInComponent } from './components/Fetching/FetchWithInComponent';
import Form from './components/Forms/Form';
import FormsWithMultipleData from './components/Forms/FormsWithMultipleData';
import FormsManageInSingleState from './components/Forms/FormsManageInSingleState';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Routes/Home';
import Forms from './components/Routes/Forms';
import Netflix from './components/Routes/Netflix';
import Props from './components/Routes/Props';
import ApiData from './components/Routes/ApiData';
import NavBar from './components/NavBar';
import Login from './components/Routes/Login';


// import { Form } from './components/Forms/Form';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/props" element={<Props />} />
        <Route path ="/forms" element={<Forms/>}/>
        <Route path="/apidata" element={<ApiData/>}/>
        <Route path="/netflix" element={<Netflix/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>

      {/* <NetflixIndex/>
      <LoginComponent/>
      <ParentComponent/>
      <ParentProfile/>
      <PropsSpread/>
      <CountStateComponent/>
      <UserInput/>
      <Form/>
      <FormsWithMultipleData/>
      <FormsManageInSingleState/>
      <FetchWithInComponent/> */}
      {/* <Form/> */}
     
    </div>
  );
}

export default App;
