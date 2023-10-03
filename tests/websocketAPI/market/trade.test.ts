import http from 'http';
import WebSocket from 'ws';
import { startServer, waitForSocketState, resultTemplate } from '../utils/webSocketTestUtils';
import { mockTrades } from '../../mock_values/websocket/market/trades';
import { WebsocketAPI } from '../../../src/websocketAPI';

describe('Trades', () => {
    let responseMessage: WebSocket.Data = '';
    let server: http.Server;
    const callbacks = {
        open: (client: WebsocketAPI) => client.trades('BTCUSDT'),
        close: () => console.log('Disconnected with Websocket server'),
        message: (data: string) => responseMessage = data.toString()
    };

    beforeAll(async () => server = await startServer(3000));

    afterAll(() => server.close());

    it('should return recent trades', async () => {
        resultTemplate.data = mockTrades;
        const test = new WebsocketAPI('', '', { callbacks, wsURL: 'ws://localhost:3000' });
        if (test.wsConnection.ws) await waitForSocketState(test.wsConnection.ws, test.wsConnection.ws.OPEN);
        setTimeout(() => test.disconnect(), 100);
        if (test.wsConnection.ws) await waitForSocketState(test.wsConnection.ws, test.wsConnection.ws.CLOSED);
        expect(responseMessage).toBe(JSON.stringify(resultTemplate));
    });
});
