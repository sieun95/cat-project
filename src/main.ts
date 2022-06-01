import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/exceptions/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.init();
  // app.use((req, res, next) => {
  //   res.header('Access-Control-Allow-Origin', '*');
  //   res.header(
  //     'Access-Control-Allow-Headers',
  //     'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  //   );
  //   if (req.method == 'OPTIONS') {
  //     res.header(
  //       'Access-Control-Allow-Methods',
  //       'PUT, POST, PATCH, DELETE, GET',
  //     );
  //     return res.status(200).json({});
  //   }

  //   next();
  // });

  app.enableCors({
    credentials: true,
    origin: true,
  });

  app.useGlobalPipes(new ValidationPipe()); //* 스키마 등록하는거 class validator 사용가능해짐
  app.useGlobalFilters(new HttpExceptionFilter());

  const config = new DocumentBuilder()
    .setTitle('C.I.C')
    .setDescription('cat')
    .setVersion('1.0.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const PORT = process.env.PORT;
  await app.listen(PORT);
}

bootstrap();
