import { IEvent } from '@events/shared';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { SERVER_CONSTANTS } from 'const';

class ServerAPI {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({ baseURL: SERVER_CONSTANTS.URL });
  }

  private async get<T>(url: string, config?: AxiosRequestConfig<T>) {
    const response = await this.instance.get<T>(url, config);
    return response.data;
  }

  public async getRandomNumber() {
    return this.get<string>('/random-number');
  }

  public async getEvents(search?: string) {
    return this.get<IEvent[]>('/events', { params: { search } });
  }
}

export const serverAPI = new ServerAPI();
