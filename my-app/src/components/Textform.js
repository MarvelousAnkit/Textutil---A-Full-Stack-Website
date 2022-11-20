import React , {useState} from "react";


export default function Textform(props) {
    const click = function clicks() { console.log("i luv u riya")
    let newtext = text.toUpperCase()
    setText(newtext)
    props.showalert("Converted to Upper Case " , "Successfully")
    
        
    }
    const handleOnChange = function clicks(event) { console.log("i luv u riya")
    console.log("on change")
    setText(event.target.value)
  }
  function click2() {
    let newtext1 = text.toLowerCase()
    setText(newtext1) 
    props.showalert("Converted to lowercase" , "successfully")
  }
  function click3() {
    setText("")
    props.showalert("Text is Cleared ","successfully")
  }
  function click4(){
    let area = document.querySelector('textarea');
    area.select()
    document.execCommand('copy')
    props.showalert(" Text is selected to clipboard" , " successfully")
  }

    const [text, setText] = useState("");

    
  return (
    <>
    <div className="container " >
    <h1 className="text-center mb-3" > {props.heading}</h1>
      <div className="mb-3">

        <textarea className="form-control" style={{backgroundColor : props.mode==='dark'?'black' : 'white', color: props.mode==="dark"? 'white':"black"  }   }   value={text} onChange={handleOnChange} placeholder="Enter Your Word Here" id="box" rows="12"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2 "  onClick={click} > Convert To Uper Case</button> 
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2 " onClick={click2}>Convert To Lower Case </button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={click3}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={click4}>Copy Text</button>
      <div className="container">
        <h2> Your Text Summary</h2>
        <p> {text.split(" ").filter(function element(elements) { return elements.length!==0})
.length} Words and {text.length} Characters are there.
        Time Taken To Read {text.split(" ").filter(function element(elements) { return elements.length!==0})
.length} Words is {text.split(" ").filter(function element(elements) { return elements.length!==0})
.length*0.0032}  Minutes  </p>
        <h2>Preview</h2>
        <p>{text.length===0?"Nothing To Preview" :text}</p>
      </div>
      </div>
    </>
  );
}
