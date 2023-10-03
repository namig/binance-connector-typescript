import dotenv from 'dotenv';
import { RestMarginTypes } from '../../../src/types';
import { Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, '', { baseURL: baseURL });


client.getMarginPriceIndex('BNBUSDT').then((res: RestMarginTypes.getMarginPriceIndexResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
