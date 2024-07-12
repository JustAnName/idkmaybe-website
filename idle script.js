let currency,adder,numberoffirst,numbersofupgrades,adderofadder,riserinprice,adderprice,moneysymbol,moneysymbolindex,moneysymbolindexmax,upgradestate,currency_needed_to_update,nextprice;
let prestigeval,interval_clicker,prestigecurrency,x,prestige_attempts;
let price_1,price_2,multiplier;
let upgrade_4,upgrade_4_unlocked=false,p_stat;
function round_to(xi,yi){return Math.floor(xi*(10**yi))/10**yi}
function P_upg_des(mi=0){
	switch(mi){
	case 1:
		document.getElementById("p_desc").innerHTML = "Cost of this upgrade will be "+price_1+" and it will autoclick "+ (x+1) +" times per second";
		break;
	case 2:
		document.getElementById("p_desc").innerHTML = "Cost of this upgrade will be "+price_2+" and multiplier will be "+round_to(multiplier+(multiplier**0.5)*1.2,1);
		break;
	default:
		document.getElementById("p_desc").innerHTML = "You aren't looking at anything!"
		break;
	}
}
function getBaseLog(x, y) {	  
  return Math.log(y) / Math.log(x);
}
function show_page(pag){
	document.getElementById("gameplay").style.display="none";
	document.getElementById("loadmenu").style.display="none";
	document.getElementById("prestige").style.display="none"; 
	document.getElementById(pag).style.display="";
}
window.addEventListener("load", function (event) {
    if (localStorage.getItem("Saved")==null){document.getElementById("loadB").style.display="none";}
  });

  upgrademax=3;
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
	  document.getElementById("showsomecurrency").innerHTML = Math.floor(currency)+" "+moneysymbol;
	  document.getElementById("showtheprice").innerHTML = "current price is " + Math.ceil(nextprice)+" "+moneysymbol;
	  if(currency>=100000){
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
			document.getElementById("nextupdate").innerHTML = "Upgrades are unavailable rn.Check in next update!";
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
	 upgrade_4_unlocked=false;
	 prestige_attempts=0;
	 p_stat="gameplay";
	 document.getElementById("gameplay").style.display="";
	 document.getElementById("loadmenu").style.display="none";
	 moneysymbolchanger();
	 setInterval(savegame,20000)
  }
  function addsome(multi = 1) {
   currency+=adder*multiplier*upgrade_4*multi;
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
	localStorage.setItem("Saved", "true");
	localStorage.setItem("prestigeval", prestigeval);
	localStorage.setItem("interval_clicker", interval_clicker);
	localStorage.setItem("prestigecurrency", currency);
	localStorage.setItem("x", x);
	localStorage.setItem("price_1", price_1);
	localStorage.setItem("price_2", price_2);
	localStorage.setItem("multiplier", multiplier);
	localStorage.setItem("upgradestate", upgradestate);
	localStorage.setItem("nextprice", nextprice);
	localStorage.setItem("currency_needed_to_update", currency_needed_to_update);
	localStorage.setItem("upgrade_4", upgrade_4);
	localStorage.setItem("upgrade_4_unlocked", upgrade_4_unlocked);
	localStorage.setItem("prestige_attempts", prestige_attempts);
	localStorage.setItem("p_stat", p_stat);


	
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
	  upgrade_4_unlocked=Boolean(localStorage.getItem("upgrade_4_unlocked"));
	  if(isNaN(upgrade_4)){upgrade_4=1;upgrade_4_unlocked=false;}
	  currency_needed_to_update=parseInt(localStorage.getItem("currency_needed_to_update"));
	  nextprice=parseInt(localStorage.getItem("nextprice"));
	  p_stat=localStorage.getItem("p_stat");
	  prestige_attempts=parseInt(localStorage.getItem("prestige_attempts"));
	  if(p_stat==undefined || p_stat==null){p_stat="gameplay"}
	  if(prestige_attempts==undefined || prestige_attempts==null){prestige_attempts=0}
      moneysymbolchanger();
	  show_page(p_stat)
	  upgrade_desc()
	  setInterval(savegame,20000)
	  if((x>0) && (x<11)){
		  interval_clicker=setInterval(autoclicker,1000/x);
	  }
	  if(x>10){interval_clicker=setInterval(autoclicker,100,x);}
  } 
  function upgrade_desc(){switch(numbersofupgrades){
	case 1:
		document.getElementById("upd_desc").innerHTML = "Makes your wasters much cheaper";
		break;
	case 2:
		document.getElementById("upd_desc").innerHTML = "Doubles your output";
		break;
	case 3:
		document.getElementById("upd_desc").innerHTML = "Adds a multipler thats based on the amount of wasters";
		break;
	default:
		document.getElementById("upd_desc").innerHTML = "There is nothing else left.";
		break;
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
			   currency_needed_to_update=1500;
			   numbersofupgrades+=1;
			   currencyupdater()
			   upgrade_desc()
		   }
		   break;
		  case 2:
		    if(currency >= 1500){
			   adder=adder*2;
		       adderofadder=adderofadder*2;
			   currency -=1500;
			   upgradestate=1;
			   currency_needed_to_update=5000;
			   numbersofupgrades+=1;
			   currencyupdater()
			   upgrade_desc()
			}
			break;
		  case 3:
			if(currency >= 5000){
				upgrade_4_unlocked=true;
				currency-=5000;
				numbersofupgrades+=1;
				currencyupdater()
				rootwaster()
				upgrade_desc()
			}
			break;
		  default:
			upgradestate=3;
			currencyupdater()
			break;
			
	 }
  }
  function rootwaster(){
	if (upgrade_4_unlocked==true){
		upgrade_4=numberoffirst**0.5;
	  
	}
  }

  function PrestigeShow(){
	  prestigeval=Math.round((currency/100000)**0.55)
	  document.getElementById("PrestigeButton").innerHTML = prestigeval+" gold";
  }
  
  function Prestige(){
	  prestigecurrency+=prestigeval;
	savegame()
	  //below is reset
	 p_stat="prestige";
	  show_page(p_stat)
	  adder=1;
	  prestige_attempts+=1;
	  numbersofupgrades=1;
      currency=Math.ceil((5+prestige_attempts)**1.5);
     numberoffirst=1;
     adderofadder=1.1;
     riserinprice=Math.floor(20-getBaseLog(prestige_attempts,5));
	 moneysymbolindex=1;
	 nextprice=20;
	 upgradestate=1;
	 currency_needed_to_update=200;
	 upgrade_4=1;
	 upgrade_4_unlocked=false;
	  document.getElementById("gold_currency").innerHTML = prestigecurrency+" gold";
  }
  
  function Prestige_back(){
	  p_stat="gameplay";
	  show_page(p_stat)
	  document.getElementById("PrestigeButton").style.display="none";
	  adder=1;
	  prestige_attempts+=1;
	  numbersofupgrades=1;
      currency=Math.ceil((5+prestige_attempts)**1.5);
     numberoffirst=1;
     adderofadder=1.1;
     riserinprice=Math.floor(20-getBaseLog(prestige_attempts,5));
	 moneysymbolindex=1;
	 nextprice=20;
	 upgradestate=1;
	 currency_needed_to_update=200;
	 upgrade_4=1;
	 upgrade_4_unlocked=false;
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
				if((x>0) && (x<11)){
					interval_clicker=setInterval(autoclicker,1000/x);
				}
				if(x>10){interval_clicker=setInterval(autoclicker,100,x);}
				P_upg_des(1)
			}
				break;
		case 2:
			if(prestigecurrency>=price_2){
				prestigecurrency-=price_2;
				price_2=Math.round(price_2*1.1 +1);
				multiplier+=(multiplier**0.5)*1.2;
				P_upg_des(2)
				
			}
		break;
				
				
	  }
	  document.getElementById("gold_currency").innerHTML = prestigecurrency+" gold";
  }
  
  function autoclicker(ati=10){
	  addsome(ati/10)
  }