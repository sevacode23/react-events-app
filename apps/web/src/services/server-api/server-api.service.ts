import axios, { AxiosInstance } from 'axios';

import { SERVER_CONSTANTS } from 'const';

class ServerAPI {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({ baseURL: SERVER_CONSTANTS.URL });
  }

  private async get<T>(url: string) {
    const response = await this.instance.get<T>(url);
    return response.data;
  }

  public async getRandomNumber() {
    return this.get<string>('/random-number');
  }
}

export const serverAPI = new ServerAPI();
