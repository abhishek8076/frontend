import './home.scss'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Navbar from '../navbar/navbar';
import Image from '../../assets/images/my.jpg'
import React,{useState} from 'react';
import Featured from '../featured/featured';
import List from '../list/list';
const Home=()=> {
 
  return (
    <div className="home">
     <Navbar/>
     <Featured type='movies'/>
     <List/>
     <List/>
     <List/>
    </div>
  );
}

export default Home;