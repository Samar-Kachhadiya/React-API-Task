import React, { useState } from "react";
function Register()
{
    const [first_name,setFirstname]=useState("");
    const [last_name,setLastname]=useState("");
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    async function signUp()
    {
        let item={first_name,last_name,username,email,password}
        console.warn(item)

        let result=await fetch("http://wren.in:3200/api/sign-up/fan",{
        method:'POST',
        body:JSON.stringify(item),
        headers:{
            "Content-Type":'application/json',
            "Accept":'application/json'
        }
     })

     result=await result.json()
     console.warn("result",result)

     setFirstname('');
     setLastname('');
     setUsername('');
     setEmail('');
     setPassword('');

    }

    async function talentsignUp()
    {
        let item={first_name,last_name,username,email,password}
        console.warn(item)

        let result=await fetch("http://wren.in:3200/api/sign-up/talent",{
        method:'POST',
        body:JSON.stringify(item),
        headers:{
            "Content-Type":'application/json',
            "Accept":'application/json'
        }
     })

     result=await result.json()
     console.warn("result",result)

     
     setFirstname('');
     setLastname('');
     setUsername('');
     setEmail('');
     setPassword('');


    }
    return(
        <React.Fragment>
          
        
   

<ul>
  <li className="nav-item" role="presentation">
    <a className="nav-link  active" id="tab-fan" data-mdb-toggle="pill" href="#pills-fan" role="tab"
      aria-controls="pills-login" aria-selected="true">Fan Signup</a>
  </li>
  <li className="nav-item talent" role="presentation">
    <a className="nav-link" id="tab-talent" data-mdb-toggle="pill" href="#pills-talent" role="tab"
      aria-controls="pills-register" aria-selected="false">Talent Signup</a>
  </li>
</ul>



<div className="tab-pane fade show active" id="pills-fan" role="tabpanel" aria-labelledby="tab-fan">
  <center>
        <div className="fan col-md-6 mt-5">
        <h1>Create Your Fan Account</h1>
            <br></br>
            <form id="frm">
               
            <label>First name*</label>
            <input value={first_name} onChange={(e)=>setFirstname(e.target.value)} type="text" className="form form-control w-75" placeholder="First name" data-bvalidator="required,alpha"/>
            <label>Last name*</label>
            <input  value={last_name} onChange={(e)=>setLastname(e.target.value)} type="text" className="form form-control w-75" placeholder="Last name" data-bvalidator="required,alpha"/>
            <label>Username*</label>
            <input  value={username} onChange={(e)=>setUsername(e.target.value)} type="text"  className="form form-control w-75" placeholder="Username" data-bvalidator="required"/>
            <label>Email* </label>
            <input  value={email} onChange={(e)=>setEmail(e.target.value)} type="text" className="form form-control w-75" placeholder="Email" data-bvalidator="required,email"/>
            <label>Password*</label>
            <input  value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="form form-control w-75" placeholder="Password" data-bvalidator="required,maxlen[10],minlen[4]"/>
            <input type="checkbox"  className="term" data-bvalidator="required"/><h6>I agree to the <a href="#"><span>Terms and Conditions.</span></a></h6>
            <button onClick={signUp} className="signup btn w-25 text-black mt-3">Sign Up</button>
            </form>
        </div>
    </center>
</div>





<div className="tab-pane" id="pills-talent" role="tabpanel" aria-labelledby="tab-talent">
  <center>
        <div className="fan col-md-6 mt-5">
        <h1 className="">Create Your Talent Account</h1>
            <br></br>
            <form id="frm1">
               
            <label>First name*</label>
            <input value={first_name} onChange={(e)=>setFirstname(e.target.value)} type="text" className="form form-control w-75" placeholder="First name"  data-bvalidator="required,alpha"/>
            <label>Last name*</label>
            <input  value={last_name} onChange={(e)=>setLastname(e.target.value)} type="text" className="form form-control w-75" placeholder="Last name" data-bvalidator="required,alpha"/>
            <label>Username*</label>
            <input  value={username} onChange={(e)=>setUsername(e.target.value)} type="text"  className="form form-control w-75" placeholder="Username" data-bvalidator="required"/>
            <label>Email* </label>
            <input  value={email} onChange={(e)=>setEmail(e.target.value)} type="text" className="form form-control w-75" placeholder="Email" data-bvalidator="required,email"/>
            <label>Password*</label>
            <input  value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="form form-control w-75" placeholder="Password" data-bvalidator="required,maxlen[10],minlen[4]"/>
            <input type="checkbox"  className="term" data-bvalidator="required"/><h6>I agree to the <a>Terms and Conditions.</a></h6>
            <button onClick={talentsignUp} className="signup btn w-25 text-black mt-3">Sign Up</button>
            </form>
        </div>
  </center>
</div>


            
     
        



        </React.Fragment>
    )
}

export default Register
