import { RestSimpleEarnTypes } from '../../../../src/types';

export const mockResponse: RestSimpleEarnTypes.getLockedProductPositionResponse = {
    'rows': [
        {
            'positionId': '123123',
            'projectId': 'Axs*90',
            'asset': 'AXS',
            'amount': '122.09202928',
            'purchaseTime': '1646182276000',
            'duration': '60',
            'accrualDays': '4',
            'rewardAsset': 'AXS',
            'APY': '0.23',
            'isRenewable': true,
            'isAutoRenew': true,
            'redeemDate': '1732182276000'
        }
    ],
    'total': 1
};
