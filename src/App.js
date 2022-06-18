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
                <img className="absolute right-0 top-0 w-96" src={pitch_magic} alt="" />
                {/* <img className='relative w-10 top-44 left-10' src= {ball} alt="" />  ball */}
                <h3 className='text-3xl font-bold absolute left-14 top-44  text-transparent bg-clip-text bg-gradient-to-b from-purple-600 to-white'>Hello</h3>
             
                <p className='text-white absolute left-14 top-56 border-2 border-purple-600 px-2 py-1'>I'm Triumph</p>
                {/* <p className='text-white w-36 h-15 absolute left-14 top-72  border-2 border-purple-600 px-2 py-1'>Empty Space</p> */}

                <center>
                  <img  className='relative w-8 top-72' src= {mouse} alt="" />
                  <p className='relative text-white text-xs top-72'>pull up to see more</p>
                </center>
            </div> 

               {/* nav bar section */}
               <div className='text-white grid grid-cols-3 grid-row-3 bg-black px-96 pb-10 divide-x'>
                <div className='bg-gradient-to-b from-gray-600 to-black h-10 rounded-l-2xl text-center pt-1 uppercase font-semibold'>ANIMATED FILMS</div>
                <div className=' h-10 text-center pt-1 font-semibold bg-purple-900'>
                   <h1 className=' font-bold text-transparent text-3 bg-clip-text bg-gradient-to-b from-white via red-800 to-purple-600'>2D ANIMATION</h1>
                  </div>
      
                <div className='bg-gradient-to-b from-gray-600 to-black h-10 rounded-r-2xl border-b-2 border-r text-center pt-1 font-semibold'>CONTACT</div>
               </div>

               {/* card section */}
                <div className='flex justify-center items-center bg-black'>
                     <div class=" bg-black grid gap-x-36 gap-y-10 grid-cols-2 grid-row-8 text-white">
                     
                        <div className='w-64 '><img src={first} alt="" />  {/* first card */}
                          <div className='flex justify-between pb-2'>
                             <div><h1>Pitch Black</h1></div>
                             <div><h1 className='text-gray-500'>2019</h1></div>
                          </div>
                          <h1>Google</h1>
                       </div>

                        <div className='w-64 '><img src={first} alt="" /> {/* second card */}
                            <div className='flex justify-between pb-2'>
                              <div><h1>Pitch Black</h1></div>
                              <div className='text-gray-500'><h1>2019</h1></div>
                           </div>
                           <h1>Google</h1>
                        </div> 
                        
                        <div className='w-64 '><img src={first} alt="" /> {/* third card */}
                        <div className='flex justify-between pb-2'>
                          <div><h1>Pitch Black</h1></div>
                          <div className='text-gray-500'><h1>2019</h1></div>
                        </div>
                        <h1>Google</h1>
                        </div>

                        <div className='w-64 '><img src={first} alt="" /> {/* fourth card */}
                        <div className='flex justify-between pb-2'>
                          <div><h1>Pitch Black</h1></div>
                          <div className='text-gray-500'><h1>2019</h1></div>
                        </div>
                        <h1>Google</h1>
                        </div>

                        <div className='w-64 '><img src={first} alt="" /> {/* fifth card */}
                        <div className='flex justify-between pb-2'>
                          <div><h1>Pitch Black</h1></div>
                          <div className='text-gray-500'><h1>2019</h1></div>
                        </div>
                        <h1>Google</h1>
                        </div>

                        <div className='w-64 '><img src={first} alt="" /> {/* sixth card */}
                        <div className='flex justify-between pb-2'>
                          <div><h1>Pitch Black</h1></div>
                          <div className='text-gray-500'><h1>2019</h1></div>
                        </div>
                        <h1>Google</h1>
                        </div>

                        <div className='w-64 '><img src={first} alt="" /> {/* seventh card */}
                        <div className='flex justify-between pb-2'>
                          <div><h1>Pitch Black</h1></div>
                          <div className='text-gray-500'><h1>2019</h1></div>
                        </div>
                        <h1>Google</h1>
                        </div>
                        
                        <div className='w-64 '><img src={first} alt="" /> {/* eight card */}
                        <div className='flex justify-between pb-2'>
                          <div><h1>Pitch Black</h1></div>
                          <div className='text-gray-500'><h1>2019</h1></div>
                        </div>
                        <h1>Google</h1>
                        </div>      
                    </div>
                </div>

                {/* footer */}
                <div className='w-full  h-16 bg-black'></div>
                <div className='futer w-full h-8 text-black text-center bg-orange-50'>
                  <footer><strong>Triumph_Motion 2022</strong></footer>
                </div>
        </div>    
   </div>
  )
}

