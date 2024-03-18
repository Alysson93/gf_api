const request = require('supertest');
const app = require('../src/app');

const user = {
  email: 'email@email.com',
  name: 'John Doe',
  password: '123',
};

test('Deve listar todos os usuários', async () => {
  const res = await request(app).get('/users');
  expect(res.status).toBe(200);
  expect(res.body).toHaveLength(1);
  expect(res.body[0]).toHaveProperty('name', 'John Doe');
});

test('Deve inserir um usuário com sucesso', async () => {
  const res = await request(app).post('/users').send(user);
  expect(res.status).toBe(201);
  expect(res.body).toHaveProperty('name', 'John Doe');
});
