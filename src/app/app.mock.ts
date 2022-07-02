import { Server, Response } from 'miragejs';
import { users } from './app.db';
import { randomToken } from './core/utils';

export default () => {
  new Server({
    seeds(server) {
      server.db.loadData({ users });
    },

    routes() {
      this.namespace = 'api/v1';

      this.post('/login', (schema, request) => {
        const requestData = JSON.parse(request.requestBody);
        const user = schema.db['users'].find(requestData.username);
        if (requestData && user && user.password === requestData.password) {
          return {
            user: { username: user.id, displayName: user.displayName },
            token: randomToken(),
          };
        }
        return new Response(
          404,
          {},
          {
            error: 'Invalid credentials',
          }
        );
      });
    },
  });
};
