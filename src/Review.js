import React,{useState} from 'react'
import person1 from './Images/person1.jpg';
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import './Review.css'


function Review() {
    const[users,setUser]=useState([
        {
          id: 1,
          name: 'susan smith',
          job: 'web developer', 
          image:person1,
          text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        },
        {
          id: 2,
          name: 'anna johnson',
          job: 'web designer',
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
          text:
            'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
        },
        {
          id: 3,
          name: 'peter jones',
          job: 'intern',
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
          text:
            'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
        },
        {
          id: 4,
          name: 'bill anderson',
          job: 'the boss',
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
          text:
            'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
        },
    ])

    const[index,setIndex]=useState(0)
    const handlenext=()=>{
        if(index===users.length-1){
            setIndex(0)
        }
        else{
        setIndex(index+1)
    }
  }
//     const handleprev=()=>{
//       if(index===users.length-1){
//       setIndex(0)
//     }
//     else{
//       setIndex(index-1)
//   }
// }

      const handleprev =()=>{
        setIndex(index===0 ? users.length -1 :
          index-1)
      }

const handlerandom=()=>{
  let randomvalue=Math.floor(Math.random()*users.length);
  setIndex(randomvalue)
}
    
      
  return (
    <div className='text-center'>
      
       <div><h2>Our Reviews</h2></div>
       {/* <div class='underline '></div> */}
    <div className='d-flex justify-content-center'>
          <div className='card col-4 shadow-lg p-3 mb-5 mt-5 bg-body rounded'>
      
    
        <div className=''>
        
        < img src={users[index].image} height='150px' width='150px' className='p1'></img>
        <div className='kr ms-5'><h3 >{users[index].name}</h3></div>
        <div className='an ps-5 ms-2'><h5>{users[index].job}</h5></div> 
         <div>{users[index].text}</div>
         <div className='d-flex justify-content-center'> <div onClick={handleprev} className='bt1'><FcPrevious size='20'/></div>
        <div onClick={handlenext}className='bt2 '><FcNext size='20'/></div></div><br/>
       
        <button onClick={handlerandom} class="btn btn-info">Suprise Me</button>
        </div>
        </div>
        </div>
        
    </div>
  )
}

export default Review



// <div className='card shadow-lg p-3 mb-5 bg-body rounded'>
// <div className='mt'>
// <div className='re'>
//  <h2 class='text-center ms-2' >Our Reviews</h2>
//  <div class='underline '></div>
// </div>
// </div>
// <div className='text-center'>
// <div className='rk'>
//   <div className='car'>
//   <div class=' text-center col-sm-5 col-12 '></div>
  
//   < img src={users[index].image} height='150px' width='150px' className='p1'></img>
//   <div className='kr'><h3>{users[index].name}</h3></div>
//   <div className='an'><h5>{users[index].job}</h5></div> 
//    <div>{users[index].text}</div>
//    <div className='d-flex justify-content-center'> <div onClick={handleprev} className='bt1'><FcPrevious size='20'/></div>
//   <div onClick={handlenext}className='bt2 '><FcNext size='20'/></div></div>
 
//   <button onClick={handlerandom} class="btn btn-info">Suprise Me</button>
//   </div>
//   </div>

// </div>
// </div>
// )
// }

