$(".ethData").hide();

var bitcoinData= "https://coinmarketcap-nexuist.rhcloud.com/api/btc",
    ethereumData= "https://coinmarketcap-nexuist.rhcloud.com/api/eth";

$.ajax({
    "type": "GET",
    "url": bitcoinData,
    "datatype": "JSON",
    success : function(data){
		var price = data.price.usd,
			change = data.change;
		price = price.toFixed(2);
        $("#btcPrice").html("$ " + price);
		$("#btcChange").html(change + "%");
		
		if(change < 0){
   			$("#btcChange").css("color","red");
   		} else {
			$("#btcChange").css("color","green");
		}
    }
});

$.ajax({
    "type": "GET",
    "url": ethereumData,
    "datatype": "JSON",
    success: function(data2){
        var price = data2.price.usd,
			change = data2.change;
        price = price.toFixed(2);
        $("#ethPrice").html("$ " + price);
		$("#ethChange").html(change + "%");
		
		if(change < 0){
   			$("#ethChange").css("color","red");
   		} else {
			$("#ethChange").css("color","green");
		}
    }
});

$(".btc").click(function(){
	$(".ethData").hide()
	$(".btcData").show()
});

$(".eth").click(function(){
	$(".btcData").hide()
	$(".ethData").show()
});