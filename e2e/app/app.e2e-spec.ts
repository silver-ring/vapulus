import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('E2E JWT Sample', () => {
  let app: INestApplication;


  beforeAll(async () => {
    const modRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = modRef.createNestApplication();
    await app.init();
  });

  it('should get a JWT then successfully make a call', async () => {
    const loginReq = await request(app.getHttpServer())
      .post('/signin')
      .send({ username: 'test', password: 'test123' })
      .expect(201);
  });

  afterAll(async () => {
    await app.close();
  });
});
