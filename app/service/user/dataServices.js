const fetch = require("node-fetch");
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );
const data = require('../../data.json')
// Author : G MANIKAM || Service Function : to Get data
exports.getData = (req, callback) => {
  let result = {};
  // fetch(
  //       "http://45.79.111.106/interview.json"
  //   )
  //   .then((response) => response.json())
  //   .then((data) => {
  //    if(data.length > 0){

  //   var response = [];
  //   var websiteId = [];
  //   var chatid = '';
  //   var sunOfChat = 0;
  //   var sunOfMisChat = 0;

  //   data.forEach(function(obj) {
  //       if (websiteId.indexOf(obj.websiteId) == -1)
  //       websiteId.push(obj.websiteId);
  //   });

  //   for( var i = 0; i < websiteId.length; i++ ){
  //    chatid = websiteId[i]
  //    sunOfChat = 0;
  //    sunOfMisChat = 0;
  //    // sunOfChat = 0
  //       for( var j = 0; j < data.length; j++ ){
  //         if(chatid == data[j].websiteId){
  //           sunOfChat = sunOfChat + data[j].chats
  //           sunOfMisChat = sunOfMisChat + data[j].missedChats
  //         }
  //       }
  //       var r = {
  //         websiteId: chatid,
  //         chats:sunOfChat,
  //         missedChats:sunOfMisChat,
  //       }
  //       response.push(r)
  //   }

    
    
  //   result.error = false; result.success = true; result.message = "Data found"; result.data = response;
  // }
  // else{
  //   result.error = false; result.success = true; result.message = "Data not found"; result.data = 0;
  // }
  // callback(result); 
  //   })
   
   
  //   .catch( (err) => {
  //     result.error = false; result.success = true; result.message = "Data not found"; result.data = 0;
  //     callback(result); 
  //   });




  
  if(data.length > 0){

    var response = [];
    var websiteId = [];
    var chatid = '';
    var sunOfChat = 0;
    var sunOfMisChat = 0;

    data.forEach(function(obj) {
        if (websiteId.indexOf(obj.websiteId) == -1)
        websiteId.push(obj.websiteId);
    });

    for( var i = 0; i < websiteId.length; i++ ){
     chatid = websiteId[i]
     sunOfChat = 0;
     sunOfMisChat = 0;
     // sunOfChat = 0
        for( var j = 0; j < data.length; j++ ){
          if(chatid == data[j].websiteId){
            sunOfChat = sunOfChat + data[j].chats
            sunOfMisChat = sunOfMisChat + data[j].missedChats
          }
        }
        var r = {
          websiteId: chatid,
          chats:sunOfChat,
          missedChats:sunOfMisChat,
        }
        response.push(r)
    }

    
    
    result.error = false; result.success = true; result.message = "Data found"; result.data = response;
  }
  else{
    result.error = false; result.success = true; result.message = "Data not found"; result.data = 0;
  }
  callback(result); 
  
}

exports.getDataWithDateRange = (req, callback) => {
  let result = {};
  // fetch(
  //       "http://45.79.111.106/interview.json"
  //   )
  //   .then((response) => response.json())
  //   .then((data) => {
  //   if(data.length > 0){

  //     var response = [];
  //     var websiteId = [];
  //     var chatid = '';
  //     var sunOfChat = 0;
  //     var sunOfMisChat = 0;
  
  //     console.log(req)
  
  //     var startDate = new Date(req.params.startdate).toISOString()
  //     var endDate = new Date(req.params.enddate).toISOString()
  
  //     var resultProductData = data.filter(a => {
  //       return a.date >= startDate && a.date <= endDate;
  //     });
  
  //     resultProductData.forEach(function(obj) {
  //         if (websiteId.indexOf(obj.websiteId) == -1)
  //         websiteId.push(obj.websiteId);
  //     });
  
  //     for( var i = 0; i < websiteId.length; i++ ){
  //      chatid = websiteId[i]
  //      sunOfChat = 0;
  //      sunOfMisChat = 0;
  //      // sunOfChat = 0
  //         for( var j = 0; j < resultProductData.length; j++ ){
  //           if(chatid == resultProductData[j].websiteId){
  //             sunOfChat = sunOfChat + resultProductData[j].chats
  //             sunOfMisChat = sunOfMisChat + resultProductData[j].missedChats
  //           }
  //         }
  //         var r = {
  //           websiteId: chatid,
  //           chats:sunOfChat,
  //           missedChats:sunOfMisChat,
  //         }
  //         response.push(r)
  //     }
  
      
      
  //     result.error = false; result.success = true; result.message = "Data found"; result.data = response;
  //   }
  //   else{
  //     result.error = false; result.success = true; result.message = "Data not found"; result.data = 0;
  //   }
  //   callback(result);
  //   })
   
   
  //   .catch( (err) => {
  //     result.error = false; result.success = true; result.message = "Data not found"; result.data = 0;
  //     callback(result); 
  //   });
  
  if(data.length > 0){

    var response = [];
    var websiteId = [];
    var chatid = '';
    var sunOfChat = 0;
    var sunOfMisChat = 0;

    var startDate = new Date(req.params.startdate).toISOString()
    var endDate = new Date(req.params.enddate).toISOString()

    var resultProductData = data.filter(a => {
      return a.date >= startDate && a.date <= endDate;
    });

    resultProductData.forEach(function(obj) {
        if (websiteId.indexOf(obj.websiteId) == -1)
        websiteId.push(obj.websiteId);
    });

    for( var i = 0; i < websiteId.length; i++ ){
     chatid = websiteId[i]
     sunOfChat = 0;
     sunOfMisChat = 0;
     // sunOfChat = 0
        for( var j = 0; j < resultProductData.length; j++ ){
          if(chatid == resultProductData[j].websiteId){
            sunOfChat = sunOfChat + resultProductData[j].chats
            sunOfMisChat = sunOfMisChat + resultProductData[j].missedChats
          }
        }
        var r = {
          websiteId: chatid,
          chats:sunOfChat,
          missedChats:sunOfMisChat,
        }
        response.push(r)
    }

    
    
    result.error = false; result.success = true; result.message = "Data found"; result.data = response;
  }
  else{
    result.error = false; result.success = true; result.message = "Data not found"; result.data = 0;
  }
  callback(result); 
  
}