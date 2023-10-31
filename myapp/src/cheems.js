import React,{useState}from 'react'


function cheems(props) {
    const[conunts1,setcounts1]=useState(0);
    function funcincrease()
    {
        setcounts1(conunts1+1);
    }
    function funcdecrease()
    {
        setcounts1(conunts1-1);
    }
  return (
    <>
   <button onClick={funcincrease}>Increase</button>
   <span>{conunts1}</span>
   <button onClick={funcdecrease}>decrease</button>
    </>
  )
}


// export default cheems

// import React from 'react'

// function Cheems() {
//   return (
//     <div>Hai da cheems is a good but it is now passed awy from us it's sad news</div>
//   )
// }

// export default Cheems

// import React, { Component } from 'react'

// export default class cheems extends Component {
//   render() {
//     return (
//       <>
      
//       </>
//     )
//   }
// }
