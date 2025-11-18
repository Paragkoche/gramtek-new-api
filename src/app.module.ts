import { ConfigModule, ConfigService } from '@nestjs/config'
import { I18nModule, QueryResolver } from 'nestjs-i18n'
import { Module } from '@nestjs/common'
import path from 'path'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ApiModule } from './v1/api/api.module'
import { ENV_CONFIG } from './types/env.config'
import { TypeOrmConfigService } from './database/typeorm.config'
import { DataSourceOptions, DataSource } from 'typeorm'
console.log(__dirname)

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
      validationSchema: ENV_CONFIG,
    }),
    I18nModule.forRoot({
      fallbackLanguage: process.env.I18N_FALLBACK_LANGUAGE,
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
      resolvers: [
        {
          use: QueryResolver,
          options: ['lang'],
        },
      ],
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      dataSourceFactory: (options: DataSourceOptions) => {
        return new DataSource(options).initialize()
      },
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
    ApiModule,
  ],
})
export class AppModule {}
