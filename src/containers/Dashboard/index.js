import {useState, useEffect} from 'react';
import {
  BasicButton
} from "../../components/Button";
import AppDrawer from "../../components/AppBar";
import {auth, signOut, db, collection, getDocs} from "../../config/Firebase/Firebase"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Home = () => {
  return (
    <>
    <h1>Food Applications</h1>
    <Tabs>
    <TabList>
      <Tab>Pending</Tab>
      <Tab>Approved/Rejected</Tab>
    </TabList>

    <TabPanel>
      <h2>Pending Applicationss</h2>
    </TabPanel>
    <TabPanel>
      <h2>Approved/Rejected Applications</h2>
    </TabPanel>
  </Tabs>
  </>
  )
}

export default Home;