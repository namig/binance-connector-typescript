import http from 'http';
import WebSocket from 'ws';
import { startServer, waitForSocketState, resultTemplate } from '../utils/webSocketTestUtils';
import { mockKlines }  from '../../mock_values/websocket/market/klines';
import { WebsocketAPI } from '../../../src/websocketAPI';
import { Interval } from '../../../src/types';

describe('Klines', () => {
    let responseMessage: WebSocket.Data = '';
    let server: http.Server;
    const callbacks = {
        open: (client: WebsocketAPI) => client.klines('BTCUSDT', Interval['1m']),
        close: () => console.log('Disconnected with Websocket server'),
        message: (data: string) => responseMessage = data.toString()
    };

    beforeAll(async () => server = await startServer(3000));

    afterAll(() => server.close());

    it('should return klines (candlestick bars)', async () => {
        resultTemplate.data = mockKlines;
        const test = new WebsocketAPI('', '', { callbacks, wsURL: 'ws://localhost:3000'});
        if(test.wsConnection.ws) await waitForSocketState(test.wsConnection.ws, test.wsConnection.ws.OPEN);
        setTimeout(() => test.disconnect(), 100);
        if(test.wsConnection.ws) await waitForSocketState(test.wsConnection.ws, test.wsConnection.ws.CLOSED);
        expect(responseMessage).toBe(JSON.stringify(resultTemplate));
    });
});
