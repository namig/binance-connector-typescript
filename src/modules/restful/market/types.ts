export interface checkServerTimeResponse {
    serverTime: number;
}

export interface exchangeInformationOptions {
    symbol?: string;
    symbols?: string;
    permissions?: string;
}

export interface exchangeInformationResponse {
    timezone: string;
    serverTime: number;
    rateLimits: exchangeInformationRatelimits[];
    exchangeFilters: exchangefilters[] | [Record<string, never>];
    symbols: exchangeInformationSymbols[];
}

interface exchangeInformationRatelimits {
    rateLimitType: 'REQUEST_WEIGHT' | 'ORDERS' | 'RAW_REQUESTS';
    interval: 'SECOND' | 'MINUTE' | 'DAY';
    intervalNum: number;
    limit: number;
}

interface exchangefilters {
    filterType: string;
    maxNumOrders: number;
}

interface exchangeInformationSymbols {
    symbol: string;
    status: string;
    baseAsset: string;
    baseAssetPrecision: number;
    quoteAsset: string;
    quoteAssetPrecision: number;
    baseCommissionPrecision: number;
    quoteCommissionPrecision: number;
    orderTypes: string[];
    icebergAllowed: boolean;
    ocoAllowed: boolean;
    quoteOrderQtyMarketAllowed: boolean;
    allowTrailingStop: boolean;
    isSpotTradingAllowed: boolean;
    isMarginTradingAllowed: boolean;
    filters: filters[];
    permissions: string[];
    defaultSelfTradePreventionMode: string;
    allowedSelfTradePreventionModes: string[];
}

export interface orderBookOptions {
    limit?: number;
}

export interface orderBookResponse {
    lastUpdateId: number;
    bids: string[][];
    asks: string[][];
}

export interface recentTradesListOptions {
    limit?: number;
}

export interface recentTradesListResponse {
    id: number;
    price: string;
    qty: string;
    quoteQty: string;
    time: number;
    isBuyerMaker: boolean;
    isBestMatch: boolean;
}

export interface oldTradeLookupOptions {
    limit?: number;
    fromId?: number;
}

export interface oldTradeLookupResponse {
    id: number;
    price: string;
    qty: string;
    quoteQty: string;
    time: number;
    isBuyerMaker: boolean;
    isBestMatch: boolean;
}

export interface compressedAggregateTradesListOptions {
    fromId?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
}

export interface compressedAggregateTradesListResponse {
    a: number;
    p: string;
    q: string;
    f: number;
    l: number;
    T: number;
    m: boolean;
    M: boolean;
}

export interface klineCandlestickDataOptions {
    startTime?: number;
    endTime?: number;
    limit?: number;
}

export type klineCandlestickDataResponse = (string | number)[]

export interface uiklinesOptions {
    startTime?: number;
    endTime?: number;
    limit?: number;
}

export type uiklinesResponse = (number | string)[]

export interface currentAveragePriceResponse {
    mins: number;
    price: string;
}

export interface ticker24hrOptions {
    symbol?: string;
    symbols?: string;
    type?: 'FULL' | 'MINI';
}

export interface ticker24hrResponse {
    symbol: string;
    priceChange: string;
    priceChangePercent: string;
    prevClosePrice: string;
    lastPrice: string;
    bidPrice: string;
    bidQty: string;
    askPrice: string;
    askQty: string;
    openPrice: string;
    highPrice: string;
    lowPrice: string;
    volume: string;
    quoteVolume: string;
    openTime: number;
    closeTime: number;
    firstId: number;
    lastId: number;
    count: number;
}

export interface symbolPriceTickerOptions {
    symbol?: string;
    symbols?: string;
}

export interface symbolPriceTickerResponse {
    symbol: string;
    price: string;
}

export interface symbolOrderBookTickerOptions {
    symbol?: string;
    symbols?: string;
}

export interface symbolOrderBookTickerResponse {
    symbol: string;
    bidPrice: string;
    bidQty: string;
    askPrice: string;
    askQty: string;
}

export interface rollingWindowPriceChangeStatisticsOptions {
    symbol?: string;
    symbols?: string;
    windowSize?: string;
    type?: 'FULL' | 'MINI';
}

export interface rollingWindowPriceChangeStatisticsResponse {
    symbol: string;
    priceChange: string;
    priceChangePercent: string;
    weightedAvgPrice: string;
    openPrice: string;
    highPrice: string;
    lowPrice: string;
    lastPrice: string;
    volume: string;
    quoteVolume: string;
    openTime: number;
    closeTime: number;
    firstId: number;
    lastId: number;
    count: number;
}

type filters = priceFilter | percentPrice | percentPriceBySide | lotSize | minNotional | notional | iceBergParts | marketLotSize | maxNumOrders | maxNumAlgoOrders | maxNumIcebergOrders | maxPosition | trailingDelta | exchangeMaxNumOrders | exchangeMaxNumAlgoOrders | exchangeMaxNumIcebergOrders;

interface exchangeMaxNumOrders {
    filterType: 'EXCHANGE_MAX_NUM_ORDERS';
    maxNumOrders: number;
}

interface exchangeMaxNumAlgoOrders {
    filterType: 'EXCHANGE_MAX_NUM_ALGO_ORDERS';
    maxNumAlgoOrders: number;
}

interface exchangeMaxNumIcebergOrders {
    filterType: 'EXCHANGE_MAX_NUM_ICEBERG_ORDERS';
    maxNumIcebergOrders: number;
}

interface lotSize {
    filterType: 'LOT_SIZE';
    minQty: string;
    maxQty: string;
    stepSize: string;
}

interface marketLotSize {
    filterType: 'MARKET_LOT_SIZE';
    minQty: string;
    maxQty: string;
    stepSize: string;
}

interface maxNumAlgoOrders {
    filterType: 'MAX_NUM_ALGO_ORDERS';
    maxNumAlgoOrders: number;
}

interface maxNumOrders {
    filterType: 'MAX_NUM_ORDERS';
    maxNumOrders: number;
}

interface maxNumIcebergOrders {
    filterType: 'MAX_NUM_ICEBERG_ORDERS';
    maxNumIcebergOrders: number;
}

interface maxPosition {
    filterType: 'MAX_POSITION';
    maxPosition: string;
}

interface minNotional {
    filterType: 'MIN_NOTIONAL';
    minNotional: string;
    applyToMarket: boolean;
    avgPriceMins: number;
}

interface notional {
    filterType: 'NOTIONAL';
    minNotional: string;
    applyMinToMarket: boolean;
    maxNotional: string;
    applyMaxToMarket: boolean;
    avgPriceMins: number;
}

interface percentPrice {
    filterType: 'PERCENT_PRICE';
    multiplierUp: string;
    multiplierDown: string;
    avgPriceMins: number;
}

interface percentPriceBySide {
    filterType: 'PERCENT_PRICE_BY_SIDE';
    bidMultiplierUp: string;
    bidMultiplierDown: string;
    askMultiplierUp: string;
    askMultiplierDown: string;
    avgPriceMins: number;
}

interface priceFilter {
    filterType: 'PRICE_FILTER';
    minPrice: string;
    maxPrice: string;
    tickSize: string;
}

interface iceBergParts {
    filterType: 'ICEBERG_PARTS';
    limit: number;
}

interface trailingDelta {
    filterType: 'TRAILING_DELTA';
    minTrailingAboveDelta: number;
    maxTrailingAboveDelta: number;
    minTrailingBelowDelta: number;
    maxTrailingBelowDelta: number;
}
