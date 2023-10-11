import React from 'react'
import { useDispatch } from 'react-redux'
import  Select from 'react-select'
import { assignNewsCategory, assignNewsSource } from '../redux/actions/News';
const NewsFilter = () => {


   const dispatch = useDispatch();

  return (
    <div style={{width:"100%",padding:"20px"}}>
        <div style={{textAlign:"left",fontWeight:"normal",paddingBottom:"20px",borderBottom:"3px solid #c5c5c5", display:"flex",marginBottom:"20px"}}>
    <div style={{width:"200px",padding:"20px"}}>
    <p style={{marginBottom:"10px"}}>Categories:</p>
    <Select options={[
    
    {
        label:"health",
        value:"health"
    },
    {
        label:"sports",
        value:"sports"
    },
    {
      label:"general",
      value:"general"
  },
  {
    label:"entertainment",
    value:"entertainment"
}, {
  label:"science",
  value:"science"
}

    
    ]} 
    placeholder="Select Category..."
    
    onChange={(opt)=>{
      dispatch(assignNewsCategory(opt.value));
    }}

    />
    </div>


    <div style={{width:"200px",padding:"20px"}}>
    <p style={{marginBottom:"10px"}}>Sources:</p>
    <Select options={[
    
    {
        label:"CNN",
        value:"cnn"
    },
    {
        label:"BBC",
        value:"bbc"
    },
    {
      label:"google news",
      value:"google-news"
  },
 

    
    ]} 
    placeholder="Select Source..."
    
    onChange={(opt)=>{
      dispatch(assignNewsSource(opt.value));
    }}

    />
    </div>


    </div>

    </div>
  )
}

export default NewsFilter