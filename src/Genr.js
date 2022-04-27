import React,{useState} from 'react'   
import Generdata from'./Generdata';

function Genr() {

    const[count,setCount]=useState(0);
    const[text,setText]=useState([]);

    const handlesubmit=(e)=>{
      e.preventDefault()

      let amount=parseInt(count);

      if (count<=0){
          amount=1;
      }
      if (count>8){
          amount=8;
      }
      setText(Generdata.slice(0,amount))
}


  return (
    <>
    <section className='section-center'>
        <h3 className='text-center'>TIRED OF BORING LOREM IPSUM?</h3>
        <form onSubmit={handlesubmit}>
           <div className='text-center'>paragraphs   :   <input
            type='number' 
            name='amount'
            id='amount'
            value={count}
            onChange={(e)=>setCount(e.target.value)}
            /></div>
           <div className='text-center'> <button >Generate</button></div>
        </form>
        <article>
            {
                text.map((item,index)=>{
                    return<p key={index}>{item}</p>
                })
            }
        </article>
    </section>
    </>
  )
}

export default Genr