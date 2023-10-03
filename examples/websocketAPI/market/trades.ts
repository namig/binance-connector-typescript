import dotenv from 'dotenv';
import { WebsocketAPI } from '../../../src/index';
import { WsMarketTypes } from '../../../src/types';

dotenv.config();

const options: WsMarketTypes.tradesOptions = {
    limit: 10
};
const callbacks = {
    open: (client: WebsocketAPI) => {
        console.debug('Connected with Websocket server');
        client.trades('BTCUSDT');
        client.trades('BNBUSDT', options);
    },
    close: () => console.debug('Disconnected with Websocket server'),
    message: (data: string) => {
        const parseData = JSON.parse(data);
        console.info(parseData);
    }
};

const websocketAPIClient = new WebsocketAPI('', '', { callbacks });

// disconnect after 20 seconds
setTimeout(() => websocketAPIClient.disconnect(), 20000);