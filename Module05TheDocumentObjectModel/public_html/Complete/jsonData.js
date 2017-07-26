var json = {
 "query": {
  "count": 4,
  "created": "2017-07-25T23:31:13Z",
  "lang": "en-US",
  "diagnostics": {
   "url": [
    {
     "execution-start-time": "0",
     "execution-stop-time": "1",
     "execution-time": "1",
     "content": "http://www.datatables.org/yahoo/finance/yahoo.finance.quotes.xml"
    },
    {
     "execution-start-time": "3",
     "execution-stop-time": "14",
     "execution-time": "11",
     "content": "http://download.finance.yahoo.com/d/quotes.csv?f=aa2bb2b3b4cc1c3c4c6c8dd1d2ee1e7e8e9ghjkg1g3g4g5g6ii5j1j3j4j5j6k1k2k4k5ll1l2l3mm2m3m4m5m6m7m8nn4opp1p2p5p6qrr1r2r5r6r7ss1s7t1t7t8vv1v7ww1w4xy&s=MU,AAPL,GOOG,MSFT"
    }
   ],
   "publiclyCallable": "true",
   "cache": {
    "execution-start-time": "2",
    "execution-stop-time": "3",
    "execution-time": "1",
    "method": "GET",
    "type": "MEMCACHED",
    "content": "5d1e1de680846a307c9874dc3d6878dc"
   },
   "query": {
    "execution-start-time": "3",
    "execution-stop-time": "15",
    "execution-time": "12",
    "params": "{url=[http://download.finance.yahoo.com/d/quotes.csv?f=aa2bb2b3b4cc1c3c4c6c8dd1d2ee1e7e8e9ghjkg1g3g4g5g6ii5j1j3j4j5j6k1k2k4k5ll1l2l3mm2m3m4m5m6m7m8nn4opp1p2p5p6qrr1r2r5r6r7ss1s7t1t7t8vv1v7ww1w4xy&s=MU,AAPL,GOOG,MSFT]}",
    "content": "select * from csv where url=@url and columns='Ask,AverageDailyVolume,Bid,AskRealtime,BidRealtime,BookValue,Change&PercentChange,Change,Commission,Currency,ChangeRealtime,AfterHoursChangeRealtime,DividendShare,LastTradeDate,TradeDate,EarningsShare,ErrorIndicationreturnedforsymbolchangedinvalid,EPSEstimateCurrentYear,EPSEstimateNextYear,EPSEstimateNextQuarter,DaysLow,DaysHigh,YearLow,YearHigh,HoldingsGainPercent,AnnualizedGain,HoldingsGain,HoldingsGainPercentRealtime,HoldingsGainRealtime,MoreInfo,OrderBookRealtime,MarketCapitalization,MarketCapRealtime,EBITDA,ChangeFromYearLow,PercentChangeFromYearLow,LastTradeRealtimeWithTime,ChangePercentRealtime,ChangeFromYearHigh,PercebtChangeFromYearHigh,LastTradeWithTime,LastTradePriceOnly,HighLimit,LowLimit,DaysRange,DaysRangeRealtime,FiftydayMovingAverage,TwoHundreddayMovingAverage,ChangeFromTwoHundreddayMovingAverage,PercentChangeFromTwoHundreddayMovingAverage,ChangeFromFiftydayMovingAverage,PercentChangeFromFiftydayMovingAverage,Name,Notes,Open,PreviousClose,PricePaid,ChangeinPercent,PriceSales,PriceBook,ExDividendDate,PERatio,DividendPayDate,PERatioRealtime,PEGRatio,PriceEPSEstimateCurrentYear,PriceEPSEstimateNextYear,Symbol,SharesOwned,ShortRatio,LastTradeTime,TickerTrend,OneyrTargetPrice,Volume,HoldingsValue,HoldingsValueRealtime,YearRange,DaysValueChange,DaysValueChangeRealtime,StockExchange,DividendYield'"
   },
   "javascript": {
    "execution-start-time": "1",
    "execution-stop-time": "28",
    "execution-time": "26",
    "instructions-used": "261159",
    "table-name": "yahoo.finance.quotes"
   },
   "user-time": "29",
   "service-time": "13",
   "build-version": "2.0.164"
  },
  "results": {
   "quote": [
    {
     "symbol": "MU",
     "Ask": "30.09",
     "AverageDailyVolume": "27841900",
     "Bid": "30.07",
     "AskRealtime": null,
     "BidRealtime": null,
     "BookValue": "14.57",
     "Change_PercentChange": "-1.77 - -5.59%",
     "Change": "-1.77",
     "Commission": null,
     "Currency": "USD",
     "ChangeRealtime": null,
     "AfterHoursChangeRealtime": null,
     "DividendShare": "0.00",
     "LastTradeDate": "7/25/2017",
     "TradeDate": null,
     "EarningsShare": "2.28",
     "ErrorIndicationreturnedforsymbolchangedinvalid": null,
     "EPSEstimateCurrentYear": "4.71",
     "EPSEstimateNextYear": "6.02",
     "EPSEstimateNextQuarter": "1.75",
     "DaysLow": "29.65",
     "DaysHigh": "30.83",
     "YearLow": "13.02",
     "YearHigh": "32.96",
     "HoldingsGainPercent": null,
     "AnnualizedGain": null,
     "HoldingsGain": null,
     "HoldingsGainPercentRealtime": null,
     "HoldingsGainRealtime": null,
     "MoreInfo": null,
     "OrderBookRealtime": null,
     "MarketCapitalization": "33.19B",
     "MarketCapRealtime": null,
     "EBITDA": "7.03B",
     "ChangeFromYearLow": "16.88",
     "PercentChangeFromYearLow": "+129.73%",
     "LastTradeRealtimeWithTime": null,
     "ChangePercentRealtime": null,
     "ChangeFromYearHigh": "-3.06",
     "PercebtChangeFromYearHigh": "-9.28%",
     "LastTradeWithTime": "4:00pm - <b>29.90</b>",
     "LastTradePriceOnly": "29.90",
     "HighLimit": null,
     "LowLimit": null,
     "DaysRange": "29.65 - 30.83",
     "DaysRangeRealtime": null,
     "FiftydayMovingAverage": "31.29",
     "TwoHundreddayMovingAverage": "27.43",
     "ChangeFromTwoHundreddayMovingAverage": "2.47",
     "PercentChangeFromTwoHundreddayMovingAverage": "+9.00%",
     "ChangeFromFiftydayMovingAverage": "-1.39",
     "PercentChangeFromFiftydayMovingAverage": "-4.45%",
     "Name": "Micron Technology, Inc.",
     "Notes": null,
     "Open": "30.80",
     "PreviousClose": "31.67",
     "PricePaid": null,
     "ChangeinPercent": "-5.59%",
     "PriceSales": "2.02",
     "PriceBook": "2.17",
     "ExDividendDate": "5/7/1996",
     "PERatio": "13.13",
     "DividendPayDate": null,
     "PERatioRealtime": null,
     "PEGRatio": "6.80",
     "PriceEPSEstimateCurrentYear": "6.35",
     "PriceEPSEstimateNextYear": "4.97",
     "Symbol": "MU",
     "SharesOwned": null,
     "ShortRatio": "1.37",
     "LastTradeTime": "4:00pm",
     "TickerTrend": null,
     "OneyrTargetPrice": "43.37",
     "Volume": "51200165",
     "HoldingsValue": null,
     "HoldingsValueRealtime": null,
     "YearRange": "13.02 - 32.96",
     "DaysValueChange": null,
     "DaysValueChangeRealtime": null,
     "StockExchange": "NMS",
     "DividendYield": "0.00",
     "PercentChange": "-5.59%"
    },
    {
     "symbol": "AAPL",
     "Ask": "152.89",
     "AverageDailyVolume": "27455100",
     "Bid": "152.84",
     "AskRealtime": null,
     "BidRealtime": null,
     "BookValue": "25.76",
     "Change_PercentChange": "+0.65 - +0.43%",
     "Change": "+0.65",
     "Commission": null,
     "Currency": "USD",
     "ChangeRealtime": null,
     "AfterHoursChangeRealtime": null,
     "DividendShare": "2.52",
     "LastTradeDate": "7/25/2017",
     "TradeDate": null,
     "EarningsShare": "8.52",
     "ErrorIndicationreturnedforsymbolchangedinvalid": null,
     "EPSEstimateCurrentYear": "8.90",
     "EPSEstimateNextYear": "10.65",
     "EPSEstimateNextQuarter": "1.84",
     "DaysLow": "151.80",
     "DaysHigh": "153.84",
     "YearLow": "96.42",
     "YearHigh": "156.65",
     "HoldingsGainPercent": null,
     "AnnualizedGain": null,
     "HoldingsGain": null,
     "HoldingsGainPercentRealtime": null,
     "HoldingsGainRealtime": null,
     "MoreInfo": null,
     "OrderBookRealtime": null,
     "MarketCapitalization": "796.36B",
     "MarketCapRealtime": null,
     "EBITDA": "69.72B",
     "ChangeFromYearLow": "56.32",
     "PercentChangeFromYearLow": "+58.41%",
     "LastTradeRealtimeWithTime": null,
     "ChangePercentRealtime": null,
     "ChangeFromYearHigh": "-3.91",
     "PercebtChangeFromYearHigh": "-2.50%",
     "LastTradeWithTime": "4:00pm - <b>152.74</b>",
     "LastTradePriceOnly": "152.74",
     "HighLimit": null,
     "LowLimit": null,
     "DaysRange": "151.80 - 153.84",
     "DaysRangeRealtime": null,
     "FiftydayMovingAverage": "147.28",
     "TwoHundreddayMovingAverage": "141.20",
     "ChangeFromTwoHundreddayMovingAverage": "11.54",
     "PercentChangeFromTwoHundreddayMovingAverage": "+8.17%",
     "ChangeFromFiftydayMovingAverage": "5.46",
     "PercentChangeFromFiftydayMovingAverage": "+3.71%",
     "Name": "Apple Inc.",
     "Notes": null,
     "Open": "151.80",
     "PreviousClose": "152.09",
     "PricePaid": null,
     "ChangeinPercent": "+0.43%",
     "PriceSales": "3.60",
     "PriceBook": "5.91",
     "ExDividendDate": "5/11/2017",
     "PERatio": "17.92",
     "DividendPayDate": "5/18/2017",
     "PERatioRealtime": null,
     "PEGRatio": "1.49",
     "PriceEPSEstimateCurrentYear": "17.16",
     "PriceEPSEstimateNextYear": "14.34",
     "Symbol": "AAPL",
     "SharesOwned": null,
     "ShortRatio": "1.38",
     "LastTradeTime": "4:00pm",
     "TickerTrend": null,
     "OneyrTargetPrice": "160.18",
     "Volume": "18850501",
     "HoldingsValue": null,
     "HoldingsValueRealtime": null,
     "YearRange": "96.42 - 156.65",
     "DaysValueChange": null,
     "DaysValueChangeRealtime": null,
     "StockExchange": "NMS",
     "DividendYield": "1.68",
     "PercentChange": "+0.43%"
    },
    {
     "symbol": "GOOG",
     "Ask": "951.20",
     "AverageDailyVolume": "1692150",
     "Bid": "950.25",
     "AskRealtime": null,
     "BidRealtime": null,
     "BookValue": "209.43",
     "Change_PercentChange": "-29.64 - -3.02%",
     "Change": "-29.64",
     "Commission": null,
     "Currency": "USD",
     "ChangeRealtime": null,
     "AfterHoursChangeRealtime": null,
     "DividendShare": null,
     "LastTradeDate": "7/25/2017",
     "TradeDate": null,
     "EarningsShare": "29.59",
     "ErrorIndicationreturnedforsymbolchangedinvalid": null,
     "EPSEstimateCurrentYear": "31.00",
     "EPSEstimateNextYear": "40.12",
     "EPSEstimateNextQuarter": "9.65",
     "DaysLow": "945.40",
     "DaysHigh": "959.70",
     "YearLow": "727.54",
     "YearHigh": "988.25",
     "HoldingsGainPercent": null,
     "AnnualizedGain": null,
     "HoldingsGain": null,
     "HoldingsGainPercentRealtime": null,
     "HoldingsGainRealtime": null,
     "MoreInfo": null,
     "OrderBookRealtime": null,
     "MarketCapitalization": "657.64B",
     "MarketCapRealtime": null,
     "EBITDA": "31.21B",
     "ChangeFromYearLow": "223.16",
     "PercentChangeFromYearLow": "+30.67%",
     "LastTradeRealtimeWithTime": null,
     "ChangePercentRealtime": null,
     "ChangeFromYearHigh": "-37.55",
     "PercebtChangeFromYearHigh": "-3.80%",
     "LastTradeWithTime": "4:00pm - <b>950.70</b>",
     "LastTradePriceOnly": "950.70",
     "HighLimit": null,
     "LowLimit": null,
     "DaysRange": "945.40 - 959.70",
     "DaysRangeRealtime": null,
     "FiftydayMovingAverage": "948.37",
     "TwoHundreddayMovingAverage": "878.35",
     "ChangeFromTwoHundreddayMovingAverage": "72.35",
     "PercentChangeFromTwoHundreddayMovingAverage": "+8.24%",
     "ChangeFromFiftydayMovingAverage": "2.33",
     "PercentChangeFromFiftydayMovingAverage": "+0.25%",
     "Name": "Alphabet Inc.",
     "Notes": null,
     "Open": "953.81",
     "PreviousClose": "980.34",
     "PricePaid": null,
     "ChangeinPercent": "-3.02%",
     "PriceSales": "7.16",
     "PriceBook": "4.68",
     "ExDividendDate": null,
     "PERatio": "32.13",
     "DividendPayDate": null,
     "PERatioRealtime": null,
     "PEGRatio": "1.74",
     "PriceEPSEstimateCurrentYear": "31.07",
     "PriceEPSEstimateNextYear": "23.70",
     "Symbol": "GOOG",
     "SharesOwned": null,
     "ShortRatio": "1.71",
     "LastTradeTime": "4:00pm",
     "TickerTrend": null,
     "OneyrTargetPrice": "1042.63",
     "Volume": "4659950",
     "HoldingsValue": null,
     "HoldingsValueRealtime": null,
     "YearRange": "727.54 - 988.25",
     "DaysValueChange": null,
     "DaysValueChangeRealtime": null,
     "StockExchange": "NMS",
     "DividendYield": null,
     "PercentChange": "-3.02%"
    },
    {
     "symbol": "MSFT",
     "Ask": "74.19",
     "AverageDailyVolume": "25873500",
     "Bid": "74.11",
     "AskRealtime": null,
     "BidRealtime": null,
     "BookValue": "9.39",
     "Change_PercentChange": "+0.59 - +0.80%",
     "Change": "+0.59",
     "Commission": null,
     "Currency": "USD",
     "ChangeRealtime": null,
     "AfterHoursChangeRealtime": null,
     "DividendShare": "1.56",
     "LastTradeDate": "7/25/2017",
     "TradeDate": null,
     "EarningsShare": "2.71",
     "ErrorIndicationreturnedforsymbolchangedinvalid": null,
     "EPSEstimateCurrentYear": "3.25",
     "EPSEstimateNextYear": "3.63",
     "EPSEstimateNextQuarter": "0.86",
     "DaysLow": "73.50",
     "DaysHigh": "74.31",
     "YearLow": "55.61",
     "YearHigh": "74.31",
     "HoldingsGainPercent": null,
     "AnnualizedGain": null,
     "HoldingsGain": null,
     "HoldingsGainPercentRealtime": null,
     "HoldingsGainRealtime": null,
     "MoreInfo": null,
     "OrderBookRealtime": null,
     "MarketCapitalization": "571.86B",
     "MarketCapRealtime": null,
     "EBITDA": "31.41B",
     "ChangeFromYearLow": "18.58",
     "PercentChangeFromYearLow": "+33.41%",
     "LastTradeRealtimeWithTime": null,
     "ChangePercentRealtime": null,
     "ChangeFromYearHigh": "-0.12",
     "PercebtChangeFromYearHigh": "-0.16%",
     "LastTradeWithTime": "4:00pm - <b>74.19</b>",
     "LastTradePriceOnly": "74.19",
     "HighLimit": null,
     "LowLimit": null,
     "DaysRange": "73.50 - 74.31",
     "DaysRangeRealtime": null,
     "FiftydayMovingAverage": "70.93",
     "TwoHundreddayMovingAverage": "67.04",
     "ChangeFromTwoHundreddayMovingAverage": "7.15",
     "PercentChangeFromTwoHundreddayMovingAverage": "+10.67%",
     "ChangeFromFiftydayMovingAverage": "3.26",
     "PercentChangeFromFiftydayMovingAverage": "+4.59%",
     "Name": "Microsoft Corporation",
     "Notes": null,
     "Open": "73.80",
     "PreviousClose": "73.60",
     "PricePaid": null,
     "ChangeinPercent": "+0.80%",
     "PriceSales": "6.31",
     "PriceBook": "7.84",
     "ExDividendDate": "5/16/2017",
     "PERatio": "27.38",
     "DividendPayDate": "9/14/2017",
     "PERatioRealtime": null,
     "PEGRatio": "2.29",
     "PriceEPSEstimateCurrentYear": "22.90",
     "PriceEPSEstimateNextYear": "20.44",
     "Symbol": "MSFT",
     "SharesOwned": null,
     "ShortRatio": "1.50",
     "LastTradeTime": "4:00pm",
     "TickerTrend": null,
     "OneyrTargetPrice": "79.61",
     "Volume": "22016781",
     "HoldingsValue": null,
     "HoldingsValueRealtime": null,
     "YearRange": "55.61 - 74.31",
     "DaysValueChange": null,
     "DaysValueChangeRealtime": null,
     "StockExchange": "NMS",
     "DividendYield": "2.11",
     "PercentChange": "+0.80%"
    }
   ]
  }
 }
};