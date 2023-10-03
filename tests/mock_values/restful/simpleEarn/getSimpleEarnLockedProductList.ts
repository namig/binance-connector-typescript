import { RestSimpleEarnTypes } from '../../../../src/types';

export const mockResponse: RestSimpleEarnTypes.getSimpleEarnLockedProductListResponse = {
    'rows': [
        {
            'projectId': 'Axs*90',
            'detail': {
                'asset': 'AXS',
                'rewardAsset': 'AXS',
                'duration': 90,
                'renewable': true,
                'isSoldOut': true,
                'apr': '1.2069',
                'status': 'CREATED',
                'subscriptionStartTime': '1646182276000',
                'extraRewardAsset': 'BNB',
                'extraRewardAPR': '0.23'
            },
            'quota': {
                'totalPersonalQuota': '2',
                'minimum': '0.001'
            }
        }
    ],
    'total': 1
};
