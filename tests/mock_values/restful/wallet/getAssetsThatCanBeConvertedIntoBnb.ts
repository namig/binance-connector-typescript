import { RestWalletTypes } from '../../../../src/types';

export const mockResponse: RestWalletTypes.getAssetsThatCanBeConvertedIntoBnbResponse = {
    'details': [{
        'asset': 'ADA',
        'assetFullName': 'ADA',
        'amountFree': '6.21',
        'toBTC': '0.00016848',
        'toBNB': '0.01777302',
        'toBNBOffExchange': '0.01741756',
        'exchange': '0.00035546'
    }],
    'totalTransferBtc': '0.00016848',
    'totalTransferBNB': '0.01777302',
    'dribbletPercentage': '0.02'
};
