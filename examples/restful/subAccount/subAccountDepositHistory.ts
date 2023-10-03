import dotenv from 'dotenv';
import { RestSubAccountTypes } from '../../../src/types';
import { Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestSubAccountTypes.subAccountDepositHistoryOptions = {
    recvWindow: 5000,
};

client.subAccountDepositHistory(
    '', // sub email
    options
).then((res: RestSubAccountTypes.subAccountDepositHistoryResponse[]) => {
    console.log(res);
}).catch(err => { console.log(err); });
