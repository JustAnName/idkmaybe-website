let currency,adder,numberoffirst,numbersofupgrades,adderofadder,riserinprice;
  numbersofupgrades=1;
  currency=1;
  adder=1;
  numberoffirst=1;
  adderofadder=1.1;
  riserinprice=20;
  function addsome() {
   currency+=adder;
   document.getElementById("showsomecurrency").innerHTML = currency;
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
			   currency-=2000;
		       document.getElementById("nextupdate").innerHTML = "you need"+20000+"for next upgrade (not implemented)";
			   numbersofupgrades+=1;
			}
			break;
		  default:
		      document.getElementById("nextupdate").innerHTML = "There are no uprades anymore";
	 }
  }