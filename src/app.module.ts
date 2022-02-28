import { Module } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validateSync } from 'class-validator';
import { TypedConfigModule, fileLoader } from 'nest-typed-config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RootConfig } from './config';

@Module({
  imports: [
    TypedConfigModule.forRoot({
      schema: RootConfig,
      load: fileLoader({ absolutePath: 'config.yml' }),
      // validate: (rawConfig: any) => {
      //   const config = plainToClass(RootConfig, rawConfig);
      //   const schemaErrors = validateSync(config, {
      //     forbidUnknownValues: true,
      //     whitelist: true,
      //   });

      //   if (schemaErrors.length) {
      //     throw new Error(
      //       TypedConfigModule.getConfigErrorMessage(schemaErrors),
      //     );
      //   }

      //   return config as RootConfig;
      // },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
