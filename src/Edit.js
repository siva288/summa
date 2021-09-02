import "./createexercise.css";
import {useEffect,useState} from "react";
import axios from "axios";
function Edit(props)
{
    const [rresult,setrresult]=useState([]);
   const [username,setusername]=useState("");
    const [description,setdescription]=useState("");
    const [date,setdate]=useState("");
   const [duration,setduration]=useState(0);
    const id=props.match.params.id;
   
    useEffect(()=>{
        
        axios.get(`http://localhost:4545/get/update/${id}`).then((ress)=>{
           
              setrresult(ress.data);
              console.log(ress.data);
          
        })
        
    },[])
    
const save=(e)=>{
e.preventDefault();
axios.put(`http://localhost:4545/main/update`,{id:id,name:username,description:description,date:date,duration:duration}).then((err)=>{if(err)throw err})
window.location.reload(true);
}
    return(
        <div>
            <div className="row">
            <div className="col-lg-12 col-md-12">
                <br />
                <h3>Edit Excercise Log</h3>
             {
                 rresult.map((item,index)=>{
                     return(
                         <div>
                Username:<br />
                <input key={index} className="Username" value={item.username} onChange={(e)=>{setusername(e.target.value)}} placeholder={item.username}/><br />
                Description:<br /> 
                   <input  className="Username" onChange={(e)=>{setdescription(e.target.value)}} placeholder={item.decription} type="text"/>
                   Duration(in minutes)
                <input   className="Username" onChange={(e)=>{setduration(e.target.value)}} placeholder={item.duration} type="number"/>
                Date({item.date}):<br />
                <input   type="date" onChange={(e)=>{setdate(e.target.value)}}></input><br />
                        </div>
                     );
                 })
             }
                        
              
                   
               
               
                <button  className="btn btn-primary btn1" onClick={save}>Save</button>
            </div>
        </div>
        </div>
    );
}
export default Edit;