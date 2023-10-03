import dotenv from 'dotenv';
import { RestMarginTypes } from '../../../src/types';
import { Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestMarginTypes.marginAccountRepayOptions = {
    symbol: 'BNBUSDT',
    recvWindow: 5000,
};

client.marginAccountRepay('BTC', 1.01, options).then((res: RestMarginTypes.marginAccountRepayResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
