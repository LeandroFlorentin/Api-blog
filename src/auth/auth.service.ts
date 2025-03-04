import { Injectable } from '@nestjs/common';
import { http } from '../utils/http';

type ResponseGetMe = {
  status: number;
  message: string;
  data: {
    id: number;
    username: string;
    email: string;
    role: string;
    disabled: number;
    createdAt: string;
    updatedAt: string;
  };
};

@Injectable()
export class AuthService {
  private url_auth: string = process.env.URL_AUTH + '/users';

  async getMe(id: string): Promise<ResponseGetMe> {
    const url = `${this.url_auth}/me?id=${id}`;
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await http<ResponseGetMe>(url, options);
    return response;
  }
}
