import dotenv from 'dotenv';
import { Interval } from '../../../src/types';
import { WebsocketAPI } from '../../../src/index';

dotenv.config();

const callbacks = {
    open: (client: WebsocketAPI) => {
        console.debug('Connected with Websocket server');
        client.klines('BTCUSDT', Interval['1m']);
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