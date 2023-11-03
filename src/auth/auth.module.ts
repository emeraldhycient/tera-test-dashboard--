// auth.module.ts
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { Auth0Strategy } from './auth0.strategy';

@Module({
    imports: [PassportModule.register({ defaultStrategy: 'auth0' })],
    providers: [Auth0Strategy],
})
export class AuthModule { }
