window.onload(function(){
var marketData = "https://api.bitcoinaverage.com/ticker/global/USD";

$.ajax({
    "type": "GET",
    "url": marketData,
    "datatype": "JSON",
    success : function(data){
        document.getElementById("btc").innerHTML(data.last);
        }
    })
})
