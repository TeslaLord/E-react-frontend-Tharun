import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './screens/LandingPage';
import DBConnection from './screens/DBConnection';
import Contact from './screens/Contact';
import AboutUs from './screens/AboutUs';
import Searchpatient from './screens/searchpatient';
import Searchresult from './screens/searchresult';
import Skincancerml from './screens/skincancerml';
import Header from './components/Header-new';
import Footer from './components/footer-new';
import KidneyStoneML from './screens/eir_kidney_stone_checker';
import Ckdml from './screens/eir_kidney_cdk_checker';
import LogIn from './screens/LogIn/LogIn';
import SignUp from './screens/SignUp/SignUp';
import PatientRegistration from './screens/SignUp/PatientRegistration';
import DoctorRegistration from './screens/SignUp/DoctorRegistration';
import HospitalAdminRegistration from './screens/SignUp/HospitalAdminRegistration'
import LabAdminRegistration from './screens/SignUp/LabAdminRegistration'
import LabApp from './screens/SignUp/LabApp'
import Specialities from './screens/Specialities';
import EmergencyLocations from './screens/EmergencyLocations';
import 'tachyons' ;
import BreastCancerML from './screens/eir_breast_cancer_checker'
import Dashboard from './screens/DoctorDashboard';
import DoctorLayout from './layout/DoctorLayout';
import { DoctorPatients } from './screens/DoctorPatients';
import { DocProfile } from './screens/DoctorProfile';
import { DoctorMessages } from './screens/DoctorMessages';
import { DoctorServices } from './screens/DoctorServices';
import ThyroidDiseaseML from './screens/eir_thyroid_disease_checker';
import ThyroidML from './screens/eir_thyroid_disease_checker';

const initialState ={
  user:{
    id: '',
    name: '',
    email: ''
  }
}


class App extends Component {
  constructor(){
    super();
    this.state = initialState;
  }

  loadUser = (data) =>{
    this.setState({
      user:{
        id:data.id,
        name:data.name,
        email:data.email,
      }
    })
  }


  render(){
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/LogIn" element={<LogIn loadUser ={this.loadUser} />} />
          <Route path="/SignUp" element={<SignUp loadUser ={this.loadUser}/>} />
          <Route path="/searchpatient" element={<Searchpatient />} />
          <Route path="/skincancerml" element={<Skincancerml />} />
          <Route path="/Searchresult" element={<Searchresult />} />
          <Route path="/DBConnection" element={<DBConnection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/kidneystoneml" element={<KidneyStoneML />} />
          <Route path="/chronickidneyml" element={ <Ckdml />}/>
          <Route path="/breastcancerml" element={<BreastCancerML/>} />
          <Route path="/thyroidDiseaseml" element={<ThyroidML/>} />

          <Route path="/PatientRegistration" element={<PatientRegistration loadUser ={this.loadUser}/>} />
          <Route path="/DoctorRegistration" element={<DoctorRegistration loadUser ={this.loadUser}/>} />  
          <Route path="/HospitalAdminRegistration" element={<HospitalAdminRegistration loadUser ={this.loadUser}/>} /> 
          <Route path="/LabAdminRegistration" element={<LabAdminRegistration loadUser ={this.loadUser}/>} />
          <Route path="/LabApp" element={<LabApp />} /> 
          <Route path="/specialities" element={<Specialities />} />
          <Route path="/emergencyLocations" element={<EmergencyLocations />} />
          <Route path="/doctor" element={<DoctorLayout doctorInfo={{id:58}} />}>
            <Route index element={<Dashboard />} />
            <Route path="/doctor/dashboard" element={<Dashboard />} />
            <Route path="/doctor/patients" element={<DoctorPatients />} />
            <Route path="/doctor/profile" element={<DocProfile />} />
            <Route path="/doctor/messages" element={<DoctorMessages />} />
            <Route path="/doctor/services" element={<DoctorServices />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;


