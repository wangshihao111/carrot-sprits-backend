import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SpritsController } from './sprits/sprits.controller';
import { ArticleController } from './article/article.controller';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [AuthModule, SharedModule],
  controllers: [AppController, SpritsController, ArticleController],
  providers: [AppService],
})
export class AppModule {}
