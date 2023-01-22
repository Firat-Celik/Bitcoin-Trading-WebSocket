new TradingView.widget(
    {
        "symbol": "CAPITALCOM:BTCTRY",
        "interval": "D",
        "timezone": "exchange",
        "theme": "Light",
        "style": "0",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "hide_side_toolbar": false,
        "container_id": "tradingview_9278a"
    }
);
const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
const ws1 = new WebSocket('wss://stream.binance.com:9443/ws/btctry@trade');
const ws2 = new WebSocket('wss://stream.binance.com:9443/ws/btctry@trade');
let StockPriceElements1 = document.getElementById("stock-price1")
let LastPrice1 = null;
let StockPriceElements2 = document.getElementById("stock-price2")
let LastPrice2 = null;
let LastPrice4 = null;
let StockPriceElements = document.getElementById("stock-price")
let LastPrice = null;
let Tables = document.getElementById("aaa")
ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p).toFixed(2);
    StockPriceElements.innerText = " ≈ " + price + " USD";
    StockPriceElements.style.color = !LastPrice || LastPrice === price ? 'black' : price > LastPrice ? 'green' : 'red';
    LastPrice = price;
    var dates = new Date(stockObject.E).toLocaleTimeString();
    $("#mCSB_2").remove();
    var newRowContent = '<tr><td> ' + dates + '</td><td >' + price + '</td>';
    $("#History tbody").append(newRowContent);
    $("#mCSB_1").remove();
    var newRowContent1 = '<tr><td> ' + price + '</td><td >' + stockObject.q + '</td>';
    $("#Orders tbody").append(newRowContent1);
     
};
ws1.onmessage = (event1) => {
    let stockObject1 = JSON.parse(event1.data);
    let price1 = parseFloat(stockObject1.p).toFixed(2);
    StockPriceElements1.innerText = price1 + " TL ";
    StockPriceElements1.style.color = !LastPrice1 || LastPrice1 === price1 ? 'black' : price1 > LastPrice1 ? 'green' : 'red';
    LastPrice1 = price1;
 
};
ws2.onmessage = (event2) => {
    let stockObject2 = JSON.parse(event2.data);
    let price2 = parseFloat(stockObject2.p).toFixed(2);
    StockPriceElements2.innerText = price2 + " TL ";
    StockPriceElements2.style.color = !LastPrice2 || LastPrice2 === price2 ? 'black' : price2 > LastPrice2 ? 'green' : 'red';
    LastPrice2 = price2;
};

