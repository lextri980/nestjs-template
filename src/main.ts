import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // [Filter] Re-format failure response
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(process.env.PORT ?? 5000);
}

bootstrap().catch((err) => console.error(err));
