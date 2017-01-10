var express = require('express');
var moment = require('moment');
var app = express();

app.listen(process.env.PORT);
console.log('Server up');

app.get('/', function(req, res){
    
   res.send('Moo'); 
   
});



app.get('/:time', function(req, res){
   
   var time = req.params.time;
   var timeResponse;
   

   if(/^\d{8,}$/.test(req.params.time)) {
        
        timeResponse = moment(req.params.time, "X");
        
    } else {
        
        timeResponse = moment(req.params.time, "MMMM D, YYYY");
        
    }


    if ( timeResponse.isValid() ){

        res.json({
            unix: timeResponse.format("X"),
            natural: timeResponse.format("MMMM D, YYYY")
        });        
        
    } else {
        
        res.json({
            
            unix: null,
            natural: null
            
        })
        
    }

   

    
});

