//-----------------BODYS------------------//

export type BodyLogin = { username: 'string'; password: 'string' };

//-----------------RESPONSES------------------//

export type ResponseGetMe = {
  status: number;
  message: string;
  data: {
    id: number;
    username: string;
    email: string;
    role: string[];
    disabled: number;
    createdAt: string;
    updatedAt: string;
  };
};

export type ResponseLogin = {
  status: number;
  message: string;
  data: {
    id: number;
    username: string;
    email: string;
    role: string[];
    disabled: number;
    access_token: string;
  };
};
