import axios from 'axios';
import './css/home.css';


import React, { useEffect, useReducer, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NewsFilter from '../components/NewsFilter';
import { useSelector } from 'react-redux';







const Home = () => {


    var newsFilter = useSelector(state=>state.newsFilterReducer);
    var newsSource = useSelector(state=>state.newsSourceReducer);

    const [userData,setUserData] = useState(false)
    const loadRef = useRef(null);
    const [error,setError] = useState(false);

    async function getNews(){
        try{
            if(loadRef.current)
            loadRef.current.style.display="flex"
            var res = await axios.get("http://localhost:9001/api/news/getNews?category="+newsFilter);
            if(res.data){
                setUserData(res.data);
            }
            setError(false)
    
        }catch(e){
          alert("Error while fetching data!");
          setError(true)

        }
        if(loadRef.current)
      loadRef.current.style.display="none"
    }
    


    async function getNewsBySource(){
        try{
            if(loadRef.current)
            loadRef.current.style.display="flex"
            var res = await axios.get("http://localhost:9001/api/news/getNews?source="+newsSource);
            if(res.data){
                setUserData(res.data);
            }
            setError(false)

    
        }catch(e){
          alert("Error while fetching data!");
          setError(true)

        }
        if(loadRef.current)
      loadRef.current.style.display="none"
    }
    



    useEffect(()=>{
    //    alert("Loading")
    
      getNews();
    

    
    },[newsFilter])


    useEffect(()=>{
        //    alert("Loading")
        
         if(newsSource)
          getNewsBySource();
        
    
        
        },[newsSource])


    var navigate = useNavigate();

  return (
    <div>
      <div ref={loadRef} style={{justifyContent:"center",alignItems:"center",height:"",position:"",opacity:"0.6",top:0,left:0,width:"100%"}}><h3>Loading...</h3></div>:
      <NewsFilter />

    {error || (userData && userData.articles.length)<=0?<div className='users-tbl-main' style={{justifyContent:"center",alignItems:"center",flexFlow:"column"}}>No data Found</div>:<div className='users-tbl-main'>

       { userData && userData.articles.map(val=>{
                return(
                <div className='users-col'>
                <img src={val.urlToImage} alt="Image Not Found" onError={(e) => {
                 e.target.src = 'https://www.freeiconspng.com/uploads/no-image-icon-6.png' // some replacement image
                //e.target.style = 'padding: 8px; margin: 16px' // inline styles in html format
  }}
 />
                <p className='title'>
                    {val.title}

                </p>
                <p className='preview'>
                    {val.description}
                </p>
                <div style={{width:"90%",margin:"auto",}}>
                <button style={{width:"100%"}} class="button-3" role="button" onClick={()=>navigate('/view-news',{state:{
                    newsData:val
                }})}>View News</button>
</div>
                </div>
                );
            })
        
    }


    </div>}
    </div>
  )
}

export default Home