import axios from 'axios';
import { useState ,useEffect} from 'react';
import './App.css';
import Nav from "./Nav";
import {Link} from "react-router-dom";
function App() {
  const [result,setresult]=useState([]);
useEffect(()=>{
axios.get("http://localhost:4545/get/main").then((res)=>{
  console.log(res.data);
  setresult(res.data);
})
},[])

const deletes=(id)=>{
axios.delete("http://localhost:4545/user/del/"+id+"").then((res)=>{console.log(res)})
window.location.reload(true);
}
  return (
    <div className="App">
     <Nav />
     <table className='table table-striped'>
     <thead className='thead-light'>
       <tr>
         <th>Username</th>
         <th>Description</th>
         <th>Duration</th>
         <th>Date</th>
         <th>Action</th>
       </tr>
     </thead>
     <tbody>
       
         {result.map((item,index)=>{
           return(
             <tr>
                <td>{item.username}</td>
         <td>{item.decription}</td>
         <td>{item.duration}</td>
         <td>{item.date}</td>
        <td>
         <button className="btn1" ><Link to={`/edit/${item.id}`} className="edit">Edit</Link></button>
         <button className="btn2 " onClick={(e)=>{e.preventDefault();deletes(item.id)}}>Delete</button>
         </td>
            </tr>
           );
         })
        
        }
      
     </tbody>
     </table>
    </div>
  );
}

export default App;
