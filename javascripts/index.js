// inject css
const link = document.createElement("link");
link.href = "./styles/mystyle.css";
link.type = "text/css";
link.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link);

const url_btc = "https://api.coinmarketcap.com/v1/ticker/bitcoin/";
const url_eth = "https://api.coinmarketcap.com/v1/ticker/ethereum/";

const memory = [];

$.get(url_btc, data => {
	memory.push(data[0]);
	displayInfoFor('btc'); // ..when the extension is activated.
});

$.get(url_eth, data => memory.push(data[0]));

function ticker(symbol) {
	return memory.find(data => {
		if (data.symbol === symbol.toUpperCase()) {
			return data;
		}
	})
}

function displayInfoFor(symbol) {
	const price = ticker(symbol).price_usd;
	const change = ticker(symbol).percent_change_24h;

	// src: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
	const numberWithCommas = x => {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	$(".btc-info #price").html("$ " + numberWithCommas(price));
	$(".btc-info #change").html(change + "%");

	if (change < 0) {
		$(".btc-info #change").css("color", "red");
	} else {
		$(".btc-info #change").css("color", "green");
	}
}

$(".btc-chrome-btn").click(el => {
	displayInfoFor(el.target.id);
});