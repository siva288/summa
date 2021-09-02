import Nav from "./Nav";
import axios from "axios";
import "./createexercise.css";
import { useState } from "react";
function Createuser()
{
    const [name,setname]=useState("");
const save=(e)=>{
    e.preventDefault();
axios.post("http://localhost:4545/add/insert",{name:name}).then((err,res)=>{
    if(err)
    {
        throw err;
    }
    else
    {
        console.log("data insert..")
    }
})
window.location.reload(true);
}
return(
    <div>
        <Nav />
        <div className="row">
            <div className="col-lg-12 col-md-12">
               <br />Enter User Name:<br /> <input className="Username" onChange={(e)=>{setname(e.target.value)}}/>
               <button onClick={save} className="btn btn-success">Add User</button>
            </div>
        </div>
    </div>
);
}
export default Createuser;