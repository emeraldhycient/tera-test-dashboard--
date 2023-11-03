// auth0.strategy.ts
import { Strategy } from 'passport-auth0';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class Auth0Strategy extends PassportStrategy(Strategy, 'auth0') {
    constructor() {
        super({
            clientID: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            domain: process.env.AUTH0_DOMAIN,
            callbackURL: process.env.AUTH0_CALLBACK_URL,
            state: false, // Set to true if you want to use Auth0's state handling
        });
    }

    async validate(accessToken, refreshToken, extraParams, profile, done): Promise<any> {
        return done(null, profile);
    }
}
