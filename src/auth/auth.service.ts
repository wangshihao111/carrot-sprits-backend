import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  tokens: string[] = [];

  async validateUser(username: string, pass: string): Promise<any> {
    if (username === 'admin' && pass === '913003120') {
      const token = Date.now().toString()
      this.tokens.push(token)
      return {
        name: 'Admin',
        token,
      };
    }
    return null;
  }

  validateToken(token: string) {
    console.log(token, this.tokens)
    return this.tokens.includes(token);
  }
}
