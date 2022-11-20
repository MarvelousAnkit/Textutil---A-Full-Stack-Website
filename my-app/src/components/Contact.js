import React from 'react'




function Contact(props) {
  
  
  let mystyle = {
    color : props.mode === "dark" ? "white" : "black",
    backgroundColor : props.mode==="dark" ? "black" : "white"
  }
    
  return (
    <form className='mx-5 my-3' action='#' method='post'  >
     { `{% csrf_token % }` }
    
    
      
    <div class="mb-3" >
    <h1 class="mb-3">
        Contact US
      </h1>
      <label htmlFor="name" class="form-label" >Name</label>
      <input type="text" class="form-control" id="name" aria-describedby="emailHelp" name='name' style={mystyle} />
  
      <label htmlFor="email" class="form-label">Email address</label>
      <input type="email" class="form-control" id="email" aria-describedby="emailHelp" name='email' style={mystyle} />
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  
    </div>
    <div class="mb-3" >
      <label htmlhtmlFor="text" > Enter Your Message</label>
      <br />
    <textarea className='my-2' style={mystyle}  name="text" id="text" cols="133" rows="10"></textarea>
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
      <label class="form-check-label" htmlFor="exampleCheck1">Check me out</label>
    </div>
    
    <button type="submit" class="btn btn-dark" style={{backgroundColor : props.mode==='dark'?'black' : 'white', color: props.mode==="dark"? 'white':"black"  }   } >Submit</button>
  
  </form>
  )
}

export default Contact