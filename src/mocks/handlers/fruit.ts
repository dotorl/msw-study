import { rest } from 'msw';

// [Get] fruits 서버 요청 시 [ '사과', '바나나' ]를 응답한다.
export const getFruits = rest.get('/fruits', (req, res, ctx) => {
  return res(ctx.json(['사과', '바나나']));
});

export const getFruits2 = rest.get('/fruits2', (req, res, ctx) => {
  return res(ctx.json(['사과', '바나나', '배', '키위']));
});
