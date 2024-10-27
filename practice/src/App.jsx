import { useState } from 'react'
import './App.css'

function App() {
  
  const [formData,setFormData]=useState({
    firstName:'',
    lastName:''
  });

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData({...formData,[name]:value});
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    setFormData({firstName:'',lastName:''});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          First Name: <input type='text' placeholder='enter first name' value={formData.firstName} onChange={handleChange} required/>
        </label>
    </div>
    <div>
    <label>
          last Name: <input type='text' placeholder='enter last Name' value={formData.lastName} onChange={handleChange} required/>
        </label>
    </div>
    <button type='submit' >submit</button>
    </form>
  )
}

export default App
