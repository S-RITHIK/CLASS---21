function isTouching(mr, fr) {
  
    if(mr.x - fr.x < fr.width/2 + mr.width/2 && 
      fr.x - mr.x < fr.width/2 + mr.width/2 && fr.y - mr.y < fr.height/2 + mr.height/2 && mr.y - fr.y < fr.height/2 + mr.height/2 ) {
        return true;
    }
     else{
       return false;
     }
  }
  
  function bounceOff(r, r1) {
    if(r.x - r1.x < r1.width/2 + r.width/2 && r1.x - r.x < r1.width/2 + r.width/2) {
      r1.velocityX = r1.velocityX * -1;
      r.velocityX = r.velocityX * -1;
   }
   
   if(r1.y - r.y < r1.height/2 + r.height/2 && r.y - r1.y < r1.height/2 + r.height/2) {
     r1.velocityY = r1.velocityY * -1;
     r.velocityY = r.velocityY * -1;
   }
  }