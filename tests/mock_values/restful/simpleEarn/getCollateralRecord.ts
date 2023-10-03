import { RestSimpleEarnTypes } from '../../../../src/types';

export const mockResponse: RestSimpleEarnTypes.getCollateralRecordResponse = {
    'rows': [
        {
            'amount': '100.00000000',
            'productId': 'BUSD001',
            'asset': 'USDT',
            'createTime': 1575018510000,
            'type': 'REPAY',
            'productName': 'USDT',
            'orderId': 26055
        }
    ],
    'total': 1
};
