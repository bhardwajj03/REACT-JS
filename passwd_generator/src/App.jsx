import { useState,useCallback, useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

  

function App() {
  const [length, setLength]=useState(8)
  const [character,setCharacter]=useState(false)
  const [number , setNumber]=useState(false)
  const [password, setPassword] = useState("")  

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    
    if (number) str +="0123456789"
    if(character) str +="!@#$%^&*()_+{}~`"
    
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()* str.length +1)
      pass+=str.charAt(char)
    }
    setPassword(pass)
  },[length,character,number,setPassword])

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordGenerator()
  },[length,character,number,setPassword])

  const passwordRef=useRef(null)
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-6 py-10 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center py-2'>Password generator</h1>
        <div className='className="flex shadow rounded-lg overflow-hidden mb-4>"'>
          
          <input type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly 
          ref={passwordRef}
          />
        <button 
        onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-25'>copy</button>
        </div>
       
        <div className='flex text-sm py-3 gap-x-3'>
          <div className='flex items-center gap-x-2'>
            <input type="range"
            min={6}
            max={100} 
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            defaultChecked={number}
            id="numberinput"
            onChange={()=>{setNumber((prev)=> !prev);
            }}
            />
            <label>Number{number}</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            defaultChecked={character}
            id="characterinput"
            onChange={()=>{setCharacter((prev)=> !prev);
            }}
            />
            <label>Character{character}</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
