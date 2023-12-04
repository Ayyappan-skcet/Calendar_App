import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './todo.css';
const Todo = () => {
  const navigate= useNavigate();
    const [item,setItem]=useState('');
    const [date,setDate]=useState('');
    const [time,setTime]=useState('');
    const [data,setData]=useState([]);
    const [list,setList]=useState([]);
    function additem(){
        if(!item){
          alert("enter an item");
          return;
        }
        
    const items={
        id:Math.floor(Math.random()*1000),
        value1:item,
        value2:date,
        value3:time,
    }

    setData(oldList=>[...oldList,items]);
    setItem("");
    setDate("");
    }
    const Home = () =>{
      navigate('/home');    }
    function deleteitem(id){
 const array=data.filter(a=>a.id!==id);
 setData(array);
    }
  return (
    <>
    <div className='full'>
    <div className='box'>
    <h1 className='head1'>Daily Task</h1>
    <label className='l1'>Task:
    <input type="text" placeholder='add an item...' value={item} onChange={(e)=>{setItem(e.target.value)}}></input></label><br></br><br></br>
    <label className='l2'>Date:<input type="date" value={date} onChange={(e)=>{setDate(e.target.value)}}></input></label><br></br>
    <label className='l3'>Time:<input type="time" value={time} onChange={(e)=>{setTime(e.target.value)}}></input></label><br></br>
    <button onClick={additem} className='btn1'>Add</button>
    <button onClick={Home} className='btn2'>Back to Home</button>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <ul className='dl'>
    { data.map( a=>(
    <li key={a.id} className='list'>{a.value1}  {a.value2}  {a.value3}<button onClick={()=>deleteitem(a.id)} className='btn3'>Remove</button></li> 
  
    )
  
    )
    
    }
    
    </ul>
    </div>
    </div>
    </>
  )
}

export default Todo