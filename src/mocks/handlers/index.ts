import * as fruitHandlers from '@mocks/handlers/fruit';
import * as loginHandlers from '@mocks/handlers/login';
// import * as fruitHandlers from './fruit';

// export const handlers = [...Object.values(fruitHandlers)];

export const handlers = [...Object.values(fruitHandlers), ...Object.values(loginHandlers)];

// export const handlers = [fruitHandlers.getAAAAA];
