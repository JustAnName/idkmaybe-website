let currency,adder,numberoffirst,numbersofupgrades,adderofadder,riserinprice;
  
  function newgame() {
	  numbersofupgrades=1;
      currency=1;
      adder=1;
     numberoffirst=1;
     adderofadder=1.1;
     riserinprice=20;
	 document.getElementById("gameplay").style.display="";
	 document.getElementById("loadmenu").style.display="none";
	 setInterval(savegame,6000)
  }
  function addsome() {
   currency+=adder;
   document.getElementById("showsomecurrency").innerHTML = currency;
  }
  function savegame() {
	localStorage.setItem("currency", currency);
    localStorage.setItem("adder",adder);
	localStorage.setItem("numberoffirst",numberoffirst);  
	localStorage.setItem("numbersofupgrades",numbersofupgrades);
    localStorage.setItem("adderofadder",adderofadder);
	localStorage.setItem("riserinprice", riserinprice);
	localStorage.setItem("currency", currency);
	localStorage.setItem("currency", currency);
	localStorage.setItem("currency", currency);
	localStorage.setItem("currency", currency);
	
	
  }
  function loadgame() {
	  currency=parseInt(localStorage.getItem("currency"));
	  adder=parseInt(localStorage.getItem("adder"));
	  numberoffirst=parseInt(localStorage.getItem("numberoffirst"));
	  numbersofupgrades=parseInt(localStorage.getItem("numbersofupgrades"));
	  adderofadder=parseInt(localStorage.getItem("adderofadder"));
	  riserinprice=parseInt(localStorage.getItem("riserinprice"));
	  currency=parseInt(localStorage.getItem("currency"));
	  currency=parseInt(localStorage.getItem("currency"));
	  currency=parseInt(localStorage.getItem("currency"));
	  currency=parseInt(localStorage.getItem("currency"));
	  document.getElementById("gameplay").style.display="";
	  document.getElementById("loadmenu").style.display="none";
	  setInterval(savegame,6000)
  } 
  function wastetoget() {
     if (currency >= numberoffirst * riserinprice) {
      adder+=adderofadder;
	  currency-=numberoffirst * riserinprice;
	  numberoffirst+=1;
	  document.getElementById("showsomecurrency").innerHTML = currency;
	  document.getElementById("showtheprice").innerHTML = "current price is " + numberoffirst * riserinprice;
     }
    }
  function upgradeandwaster() {
     switch(numbersofupgrades){
		 case 1:
		   if(currency >= 200) {
			   riserinprice =riserinprice * 0.8;
			   currency-=200;
		       document.getElementById("nextupdate").innerHTML = "you need"+2000+"for next upgrade";
			   numbersofupgrades+=1;
		   }
		   break;
		  case 2:
		    if(currency >= 2000){
			   adder=adder*2;
		       adderofadder=adderofadder*2;
			   currency -=2000;
		       document.getElementById("nextupdate").innerHTML = "you need"+20000+"for next upgrade (not implemented)";
			   numbersofupgrades+=1;
			}
			break;
		  default:
		      document.getElementById("nextupdate").innerHTML = "There are no uprades anymore";
	 }
  }