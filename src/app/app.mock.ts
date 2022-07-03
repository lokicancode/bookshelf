import { Server, Response } from 'miragejs';
import { users } from './app.db';
import { randomToken } from './core/utils';

const USERS_COLLECTION = 'users';
const TOKENS_COLLECTION = 'tokens';

export default () => {
  new Server({
    seeds(server) {
      server.db.loadData({
        [USERS_COLLECTION]: users,
        [TOKENS_COLLECTION]: {},
      });
    },

    routes() {
      this.namespace = 'api/v1';

      this.post('/login', (schema, request) => {
        const requestData = JSON.parse(request.requestBody);
        const user = schema.db[USERS_COLLECTION].find(requestData.username);
        if (requestData && user && user.password === requestData.password) {
          const token = randomToken();
          // save token
          schema.db[TOKENS_COLLECTION].insert({ id: token });
          return {
            user: { username: user.id, displayName: user.displayName },
            token: token,
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

      this.post('/logout', (schema, request) => {
        // get and delete the token
        const errorRes = new Response(
          401,
          {},
          {
            error: 'Invalid/Expired token',
          }
        );

        const token =
          request?.requestHeaders?.['Authorization']?.split?.('Bearer ')?.[1];

        if (!token) {
          return errorRes;
        } else {
          const localToken = schema.db[TOKENS_COLLECTION].find(token);
          if (!localToken) return errorRes;
        }

        schema.db[TOKENS_COLLECTION].remove({ id: token });

        return {};
      });
    },
  });
};
