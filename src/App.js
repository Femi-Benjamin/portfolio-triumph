import './App.css';
import React from 'react'
import pitch_magic from './pitch_magic/hand.png'
import mouse from './mouse/Group 3.png'
import first from "./first/magic 1.png"
// import ball from "./ball/Rectangle 7.png"



export default function App() {
  return (
    <div>
          <div className="App">
            <div className="bg-black h-96 ">
                {/* <center>
                  <img className='blur' src={pitch_magic} alt="" />
               </center> */}
                <img className="absolute right-0  top-0 w-96" src={pitch_magic} alt="" />
                {/* <img className='' src= {ball} alt="" /> */}
                <h3 className='text-3xl font-bold absolute left-14 top-44  text-transparent bg-clip-text bg-gradient-to-b from-purple-600 to-white'>Hello</h3>
             
                <p className='text-white absolute left-14 top-56 border-2 border-purple-600 px-2 py-1'>I'm Triumph</p>
                {/* <p className='text-white w-36 h-15 absolute left-14 top-72  border-2 border-purple-600 px-4 py-1'>Triumph</p> */}

                <center>
                  <img  className='relative w-8 top-72' src= {mouse} alt="" />
                  <p className='relative text-white text-xs top-72'>pull up to see more</p>
                </center>
                    
            </div> 
               
                <div className='flex justify-center items-center bg-black'>
                  <div class=" bg-black grid gap-x-36 gap-y-10 grid-cols-2 grid-row-8 text-white">
                        <div className='w-64 '><img src={first} alt="" /></div>
                        <div className='w-64 '><img src={first} alt="" /></div>
                        <div className='w-64 '><img src={first} alt="" /></div>
                        <div className='w-64 '><img src={first} alt="" /></div>
                        <div className='w-64 '><img src={first} alt="" /></div>
                        <div className='w-64 '><img src={first} alt="" /></div>
                        <div className='w-64 '><img src={first} alt="" /></div>
                        <div className='w-64 '><img src={first} alt="" /></div>
                       
                  </div>
                </div>
                <div className='w-full h-8 text-black text-center bg-orange-100'>
                  <footer><strong>Triumph_Motion 2022</strong></footer>
                </div>
        </div>    
   </div>
  )
}

