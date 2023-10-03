import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/margin/getForceLiquidationRecord';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Get Force Liquidation Record', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Get Force Liquidation Record', async () => {
        const spy = jest.spyOn(client, 'getForceLiquidationRecord').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getForceLiquidationRecord();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
