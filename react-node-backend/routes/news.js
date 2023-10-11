const { default: axios } = require('axios');
const express = require('express');

var newsRoute = express.Router();


newsRoute.get('/getNews', async (req, res, next) => {

try{
       
    var category = req.query.category;
    var source = req.query.source,res2;
    if(category)
         res2 = await axios.get("https://saurav.tech/NewsAPI/top-headlines/category/"+category+"/in.json");
    else if(source)
         res2 = await axios.get("https://saurav.tech/NewsAPI/everything/"+source+".json");
    else throw new Error("Should have at least 1 field")
        if(res2.data && res2.status == 200){
            res.json(res2.data);
        }


}catch(e){
    console.log(e)
   // res.sendStatus(500).send({e});

}

})










module.exports = newsRoute;
