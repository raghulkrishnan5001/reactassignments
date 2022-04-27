import React,{useState,useEffect} from "react";
import './Tour.css'
function Tours(){
    const [datas,setDatas]=useState([])
    useEffect(()=>{
    fetch('https://course-api.com/react-tours-project').then(response => response.json())
     .then(data=>setDatas(data.slice(0,200)))
},[])

const handleDelete=(id)=>{
    let nList=datas.filter(data=>data.id !=id);
    setDatas(nList)
}
const[show,SetShow]=useState(false)
const handleToggle =(e)=>{e.preventDefault(); SetShow(!show)}

return(
    <div>
        <div class='a'>
            {datas.length>0?(
            <div>

            <div class='text-center h1'><u>Our Tours</u></div>
            {datas.map(data =><div key={data.id}>
                <div class='b'>

                <img src={data.image} height="400"/> 
          <div class="c"> 
          <h4 class="d">{data.name}</h4> 
            <h6  class="e">$ {data.price}</h6> 
            </div> 
            <div> 
            <p class="f">{show ? data.info : data.info.slice(0, 200)} 
                <a href="#"class="g" onClick={handleToggle}>{show ? 'Show Less' : 'Read More'}</a> 
            </p> 
             
 
        </div> 
             
            <div class="h text-center"><button type="button" class="i btn btn-outline-danger" onClick={() =>handleDelete(data.id)}>Not Interested</button></div> 
 
     
 
          </div> 
      </div>)} 
 
      </div>
             ):( 
                 <h2 className='text-center '>NO TOURS AVAILABLE 
                     <br/><br/><br/> 
                 <button className='btn btn-primary text-center' onClick={()=>window.location.reload()}>REFRESH</button> 
                 </h2> 
             )} 
</div> 
 
    </div> 
  ) 
} 
 
export default Tours;
