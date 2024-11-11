import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { IEvent, TCreateEvent } from '@events/shared';

import { SERVER_CONSTANTS } from 'const';

class ServerAPI {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({ baseURL: SERVER_CONSTANTS.URL });
  }

  private async get<TData>(url: string, config?: AxiosRequestConfig<TData>) {
    const response = await this.instance.get<TData>(url, config);
    return response.data;
  }

  public async post<TResponse, TData>(
    url: string,
    data: TData,
    config?: AxiosRequestConfig<TData>
  ) {
    const response = await this.instance.post<TResponse>(url, data, config);
    return response.data;
  }

  public async getRandomNumber() {
    return this.get<string>('/random-number');
  }

  public async getEvents(search?: string) {
    return this.get<IEvent[]>('/events', { params: { search } });
  }

  public async createEvent(createEvent: TCreateEvent) {
    return this.post('/events', createEvent);
  }
}

export const serverAPI = new ServerAPI();
