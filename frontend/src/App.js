import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Educations from "./pages/educations/Educations";
import Talks from "./pages/talks/Talks";
import Forums from "./pages/forums/Forums";

import ContactList from "./components/contactList/ContactList";
import Footer from "./components/footer/Footer";
import Services from "./pages/services/Services";
import Clock from "./components/clock/Clock";
import CreateStudent from "./components/student/CreateStudent";
import StudentTable from "./components/studentList/StudentTable";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", margin:"11px 41px",gap:"66px", padding:"0px"}}>
          <Clock/>
          <Link to="/candidacy" style={{textDecoration:"none", width:"120px", textAlign:"center", backgroundColor:"#0D6EFD", color:"white", padding:"8px 10px", borderRadius:"7px", fontWeight:"bold"}}>S'inscrire</Link>
      </div>
      <div className="main" style={{padding:"0px"}}> {/* Padding to avoid overlap */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/educations" element={<Educations/>} />
          <Route path="/forums" element={<Forums/>} />
          <Route path="/talks" element={<Talks/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/contacts-all" element={<ContactList/>} />
          <Route path="/candidacy" element={<CreateStudent/>} />
          <Route path="/students-all" element={<StudentTable/>} />
        </Routes>
      <Footer/>
      </div>
    </Router>
    
    
  );
}

export default App;
