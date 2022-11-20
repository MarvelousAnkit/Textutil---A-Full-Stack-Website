import "./App.css";
import Navbar from "./components/Navbar";
//import About from "./components/About";
import React , {useState} from 'react'
import Alert from "./components/Alert";
import Textform from './components/Textform';
import About from "./components/About";
import Contact from "./components/Contact";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('dark');
  const [color, setcolor] = useState("text-light")
  const [text, settext] = useState("Light")
  const [alert, setalert] = useState(null)
  const showalert = (message , type)=>{
    setalert({
      message : message,
      type : type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  

  function toglemode(){
    if (mode==="dark"){
      setmode("light")
      setcolor("text-dark")
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      settext("Light");
      showalert("Light mode is set","successfully")
      
      
    }
    else{
      setmode("dark")
      setcolor("text-light")
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      settext("light")
      showalert("Dark mode is set","successfully")

    }
  }
  return (
    <>
      <Router>
     <Navbar title="TextArea" Home="About" mode={mode} toglemode={toglemode} text={text} color={color} /> 
      <Alert alert={alert} />
      
      

   
            

          
        
     
     



      <Routes>
            <Route path="/about" element={<About mode={mode}/>}>
            </Route>
            <Route path="/contact" element={<Contact mode={mode} />}>
            </Route>
            <Route path="/" element={<Textform heading="Try Text Analyzer : Enter the text to analyze below" showalert={showalert} mode={mode} /> }>
            </Route>
      </Routes>
           
      </Router>
      

      </>
    
  );
}

export default App;
