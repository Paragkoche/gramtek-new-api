import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    app.enableCors()
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: process.env.VERSION || '1',
  })

  app.setGlobalPrefix(process.env.API_PREFIX || 'api', {
    exclude: ['/'],
  })
  const options = new DocumentBuilder()
    .setTitle('API')
    .setDescription('API docs')
    .setVersion(process.env.VERSION || '1.0')
    .addBearerAuth()
    .addGlobalParameters({
      in: 'header',
      required: false,
      name: process.env.APP_HEADER_LANGUAGE || 'x-custom-lang',
      schema: {
        example: 'en',
      },
    })
    .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api-docs', app, document)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
