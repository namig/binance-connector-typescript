
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/simpleEarn/getSimpleEarnLockedProductList';


jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Get Simple Earn Locked Product List', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should return simple earn locked product list', async () => {
        const spy = jest.spyOn(client, 'getSimpleEarnLockedProductList').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getSimpleEarnLockedProductList();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});

