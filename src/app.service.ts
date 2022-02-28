import { Injectable } from '@nestjs/common';
import { DatabaseConfig, RootConfig } from './config';

@Injectable()
export class AppService {
  constructor(
    private readonly rootConfig: RootConfig,
    private readonly databaseConfig: DatabaseConfig,
  ) {
    console.dir(rootConfig, { depth: null });
    console.dir(databaseConfig, { depth: null });
  }

  getHello(): string {
    return 'Hello World!';
  }
}
