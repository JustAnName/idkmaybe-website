let currency,adder,numberoffirst;
  currency=1;
  adder=1;
  numberoffirst=1;
  function addsome() {
   currency+=adder;
   document.getElementById("showsomecurrency").innerHTML = currency;
  }
  function wastetoget() {
     if (currency >= numberoffirst * 20) {
      adder+=1.1;
	  currency-=numberoffirst * 20;
	  numberoffirst+=1;
	  document.getElementById("showsomecurrency").innerHTML = currency;
     }
  }