import superTest from 'supertest';
import test from 'jest';
import { router } from '../routers/userRoute.js';

test('toContain', async () => {
  await superTest(router)
    .get('/api')
    .expect(200)
    .then((result) => {
      expect.toBe(result && result.body && typeof (result.body === 'object'));
    });
})
;
