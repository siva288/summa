import Nav from "./Nav";
import "./createexercise.css";
import {useEffect,useState} from "react";
import axios from "axios";
function Createexercise()
{
    const [name, setname] = useState([]);
   const [username,setusername]=useState("");
       const [description,setdescription]=useState("");
       const [duration,setduration]=useState(0);
       const [date,setdate]=useState("");
    useEffect(()=>{
        axios.get("http://localhost:4545/get/user").then((res)=>
        {
          console.log(res.data);  
          setname(res.data);
        })
      },[])
    
    const save=(e)=>{
        e.preventDefault();
        if(username==="")
        {
            alert("Select User..")
        }
        else
        {
        axios.post("http://localhost:4545/data/inserts",{
            name:username,
            description:description,
            duration:duration,
            date:date
        }).then((err)=>{if(err)throw err})
        window.location.reload(true);
    }
    }
return(
    <div>
        <Nav />
        <div className="row">
            <div className="col-lg-12 col-md-12">
                <br />
                <h3>Create New Excercise Log</h3>
                Username:<br />
                <select className="Username" onClick={(e)=>{setusername(e.target.value)}}>
                {
                    name.map((item,index)=>{
                        return(
                                <option key={index} value={item.name}>{item.name}</option>
                        )
                    })
                
                }
                 </select>
                Description:<br />
                <input className="Username" onChange={(e)=>{setdescription(e.target.value)}} type="text"/>
                Duration(in minutes)
                <input className="Username" onChange={(e)=>{setduration(e.target.value)}} type="number"/>
                Date:<br />
                <input type="date" onChange={(e)=>{setdate(e.target.value)}} /><br />
                <button onClick={save} className="btn btn-primary btn1">Create Exercise Log</button>
            </div>
        </div>
    </div>
);
}
export default Createexercise;