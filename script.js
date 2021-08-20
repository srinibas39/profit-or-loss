let calculate=document.querySelector(".calculate");
let costPrice=document.querySelector("#costPrice");
let sellingPrice=document.querySelector("#sellingPrice");
let noOfStocks=document.querySelector("#noOfStocks");
let result=document.querySelector(".result");
calculate.addEventListener("click",function(e){
   if(sellingPrice.value>costPrice.value){
       let profit=((sellingPrice.value-costPrice.value)*noOfStocks.value).toFixed(2);
       let profitPercentage=((profit/costPrice.value)*100).toFixed(2);
       result.innerText=`Hurrah,you have a profit of ${profit} and  profit% of ${profitPercentage}`
       result.style.color="#059669";
   }
   else if(sellingPrice.value<costPrice.value){
       let loss=((costPrice.value-sellingPrice.value)*noOfStocks.value).toFixed(2);
       let lossPercentage=((loss/costPrice.value)*100).toFixed(2);
       result.innerText=`Sorry,you have a loss of ${loss} and  loss% of ${lossPercentage}`;
       result.style.color="#EF4444";
    }
    else{
        
        result.innerText=`you have neither profit nor loss`
        result.style.color="#60A5FA";
    }
})