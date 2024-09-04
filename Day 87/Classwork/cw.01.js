const timerDate = setInterval(function(){
  const currentTime = new Date();
  
  const currentMinute = currentTime.getMinutes();
  
  if(currentMinute === 35){
      console.log("Times Up!");
      
      clearInterval(timerDate);
  };

}, 1000);

