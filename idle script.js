let currency,adder,numberoffirst,numbersofupgrades,adderofadder,riserinprice,adderprice,moneysymbol,moneysymbolindex,moneysymbolindexmax,upgradestate,currency_needed_to_update,nextprice;
let prestigeval,interval_clicker,prestigecurrency,x;
let price_1,price_2,multiplier;
let upgrade_4,upgrade_4_unlocked=false;

  moneysymbolindexmax=2;
  function moneysymbolchanger(){
	  if (moneysymbolindex==1){
		  moneysymbol="dollars";
	  }
	  if (moneysymbolindex==2){
		  moneysymbol="euros";
		  
	  }
	  currencyupdater();
		
		  
  }
  function moneysymbolchangerindex(){
	  moneysymbolindex++;
	  if(moneysymbolindex>moneysymbolindexmax){
		  moneysymbolindex=1;
		  
	  }
	  moneysymbolchanger();
	  
  }
  function currencyupdater(){
	  document.getElementById("showsomecurrency").innerHTML = Math.round(currency)+" "+moneysymbol;
	  document.getElementById("showtheprice").innerHTML = "current price is " + nextprice+" "+moneysymbol;
	  if(currency>=1000000){
			document.getElementById("PrestigeButton").style.display="";
		  
		  
		}
	  switch(upgradestate){
		case 1:
			document.getElementById("nextupdate").innerHTML = "you need "+currency_needed_to_update+" "+moneysymbol+" for next upgrade";
			break;
		case 2:
			document.getElementById("nextupdate").innerHTML = "you need "+currency_needed_to_update+" "+moneysymbol+" for next upgrade";
			break;
		case 3:
			document.getElementById("nextupdate").innerHTML = "Upgrade are unavaible rn.Check in next update!";
			break;
	  }
	  PrestigeShow();
  }
  function newgame() {
	  numbersofupgrades=1;
      currency=1;
      adder=1;
     numberoffirst=1;
     adderofadder=1.1;
     riserinprice=20;
	 moneysymbolindex=1;
	 nextprice=20;
	 upgradestate=1;
	 currency_needed_to_update=200;
	 price_1=10;
	 price_2=4;
	 multiplier=1;
	 prestigecurrency=0;
	 x=0;
	 upgrade_4=1;
	 document.getElementById("gameplay").style.display="";
	 document.getElementById("loadmenu").style.display="none";
	 moneysymbolchanger();
	 setInterval(savegame,6000)
  }
  function addsome() {
   currency+=adder*multiplier;
   currencyupdater()
  }
  function savegame() {
	localStorage.setItem("currency", currency);
    localStorage.setItem("adder",adder);
	localStorage.setItem("numberoffirst",numberoffirst);  
	localStorage.setItem("numbersofupgrades",numbersofupgrades);
    localStorage.setItem("adderofadder",adderofadder);
	localStorage.setItem("riserinprice", riserinprice);
	localStorage.setItem("moneysymbolindex", moneysymbolindex);

	localStorage.setItem("prestigeval", prestigeval);
	localStorage.setItem("interval_clicker", interval_clicker);
	localStorage.setItem("prestigecurrency", currency);
	localStorage.setItem("x", x);
	localStorage.setItem("price_1", price_1);
	localStorage.setItem("price_2", price_2);
	localStorage.setItem("multiplier", multiplier);
	localStorage.setItem("upgradestate", upgradestate);
	localStorage.setItem("currency_needed_to_update", nextprice);
	localStorage.setItem("currency", currency);
	localStorage.setItem("currency", currency);
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
	  moneysymbolindex=parseInt(localStorage.getItem("moneysymbolindex"));
	  
	  prestigeval=parseInt(localStorage.getItem("prestigeval"));
	  interval_clicker=parseInt(localStorage.getItem("interval_clicker"));
	  prestigecurrency=parseInt(localStorage.getItem("prestigecurrency"));
	  x=parseInt(localStorage.getItem("x"));
	  price_1=parseInt(localStorage.getItem("price_1"));
	  price_2=parseInt(localStorage.getItem("price_2"));
	  multiplier=parseInt(localStorage.getItem("multiplier"));
	  upgradestate=parseInt(localStorage.getItem("upgradestate"));
	  upgrade_4=parseInt(localStorage.getItem("upgrade_4"));
	  upgrade_4_unlocked=Boolean(localStorage.getItem("upgrade_4"));
	  currency_needed_to_update=parseInt(localStorage.getItem("currency_needed_to_update"));
      moneysymbolchanger();
	  document.getElementById("gameplay").style.display="";
	  document.getElementById("loadmenu").style.display="none";
	  setInterval(savegame,6000)
	  if(x>0){
		  interval_clicker=setInterval(autoclicker,1000/x);
	  }
  } 
  function wastetoget() {
     if (currency >= numberoffirst * riserinprice) {
      adder+=adderofadder;
	  adderprice=numberoffirst * riserinprice;
	  currency-=adderprice;
	  nextprice=(numberoffirst+1)*riserinprice
	  numberoffirst+=1;
	  currencyupdater()
	  rootwaster()
     }
    }
  function upgradeandwaster() {
     switch(numbersofupgrades){
		 case 1:
		   if(currency >= 200) {
			   riserinprice =riserinprice * 0.8;
			   currency-=200;
		       currencyupdater()
			   upgradestate=1;
			   currency_needed_to_update=2000;
			   numbersofupgrades+=1;
			   currencyupdater()
		   }
		   break;
		  case 2:
		    if(currency >= 2000){
			   adder=adder*2;
		       adderofadder=adderofadder*2;
			   currency -=2000;
			   upgradestate=1;
			   currency_needed_to_update=20000;
			   numbersofupgrades+=1;
			   currencyupdater()
			}
			break;
		  case 3:
			upgrade_4_unlocked=true;
			currency-=20000;
			numbersofupgrades+=1;
			currencyupdater()
			rootwaster()
		  default:
			upgradestate=3;
			currencyupdater()
			
	 }
  }
  function rootwaster(){
	if (upgrade_4_unlocked==true){
		upgrade_4=numberoffirst**0.5;
	  
	}
  }

  function PrestigeShow(){
	  prestigeval=Math.round((currency/1000000)**0.5)
	  document.getElementById("PrestigeButton").innerHTML = prestigeval+" gold";
	  
  }
  
  function Prestige(){
	  prestigecurrency+=prestigeval;

	  //below is reset
	  numbersofupgrades=1;
      currency=1;
      adder=0;
     numberoffirst=1;
     adderofadder=1.1;
     riserinprice=20;
	 moneysymbolindex=1;
	 nextprice=20;
	 upgradestate=1;
	 currency_needed_to_update=200;
	  document.getElementById("gameplay").style.display="none";
	  document.getElementById("prestige").style.display="";
	  document.getElementById("gold_currency").innerHTML = prestigecurrency+" gold";
  }
  
  function Prestige_back(){
	  document.getElementById("gameplay").style.display="";
	  document.getElementById("prestige").style.display="none";
	  document.getElementById("PrestigeButton").style.display="none";
	  adder=1;
	  currencyupdater()
	  
  }
  
  function PrestigeUpgrade(index_prestige_upgrade){
	  switch(index_prestige_upgrade){
		case 1:
			if(prestigecurrency>=price_1){
				prestigecurrency-=price_1;
				price_1=Math.round(price_1*1.1 +1);
				x+=1;
				clearInterval(interval_clicker);
				interval_clicker=setInterval(autoclicker,1000/x);
			}
				break;
		case 2:
			if(prestigecurrency>=price_2){
				prestigecurrency-=price_2;
				price_2=Math.round(price_2*1.1 +1);
				multiplier+=(multiplier**0.5)*1.2;
			}
				break;
				
				
	  }
	  document.getElementById("gold_currency").innerHTML = prestigecurrency+" gold";
  }
  
  function autoclicker(){
	  addsome()
  }