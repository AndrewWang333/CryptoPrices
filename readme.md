<h1>A Real Time Cryptocurrency Price-Tracker:</h1>

<p>NodeJS Script that uses GDAX API to get BTC, ETH, and LTC (Bitcoin, Ethereum, and Litecoin respectively) prices once in every 5-second interval. Compares prices and price changes to past history to determine if there is a huge change in prices that warrants a notification or warning, this threshold for the notification can be further modified in the NodeJS script. The NodeJS script then uses a Twilio API to send SMS texts using Twilio’s services to user’s phones notifying them of the magnitude of the changes in cryptocurrency prices and the cryptocurrency in question.
</p>
