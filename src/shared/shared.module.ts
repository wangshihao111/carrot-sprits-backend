import { Module } from '@nestjs/common';
import { resolve } from 'path';

import {Config} from '../interfaces/common.interface'

@Module({
  providers: [
    {
      provide: 'CONFIG',
      useValue: {
        storagePath: process.env.TARGET === 'dev' ? resolve(process.cwd(), '.data') : '/var/app-data'
      } as Config
    }
  ]
})
export class SharedModule {}
