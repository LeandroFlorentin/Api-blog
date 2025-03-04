import { Injectable } from '@nestjs/common';
import { http } from '../utils/http';
import { BodyLogin, ResponseGetMe, ResponseLogin } from './types';

@Injectable()
export class AuthService {
  private url_auth: string = process.env.URL_AUTH + '/auth';
  private url_users: string = process.env.URL_AUTH + '/users';

  async getMe(id: string, token: string): Promise<ResponseGetMe> {
    const url = `${this.url_users}/me?id=${id}`;
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    };
    const response = await http<ResponseGetMe>(url, options);
    return response;
  }

  async getLogin(body: BodyLogin) {
    const url = `${this.url_auth}/login`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
    const response = await http<ResponseLogin>(url, options);
    return response;
  }
}
