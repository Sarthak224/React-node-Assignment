import React from 'react'
import { useLocation } from 'react-router-dom';
import './css/viewNews.css'
const ViewUser = () => {

    var location = useLocation(),val;
    if(!(location.state && location.state.newsData)){
        return (
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"90vh"}}>
          
               <h1>No news Found</h1>
        
            </div>
          )
    }

 
    val = location.state.newsData
    console.log(val)


  return (
    <div className='main-news-cont page-view-single' style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"80px"}}>
       <h1 className='blog-heading-main' style={{textAlign:"left",width:"100%",fontWeight:"normal",borderBottom:"3px solid #c6abfc",marginBottom:"10%",fontWeight:"bold"}}>
          {val.title}<br/>
          <span className='author'><span style={{color:"#333"}}><b>Written by : </b></span>{val.author} <span style={{color:"#333"}}><b>on </b></span>{(new Date(val.publishedAt)).toString()}</span>
    </h1>
      <img src={val.urlToImage}></img>
      <h1 className='title'>{val.title}</h1>
      <p className='description'>{val.description}</p>
      <p className='description'>{val.content}</p>



    </div>
  )
}

export default ViewUser