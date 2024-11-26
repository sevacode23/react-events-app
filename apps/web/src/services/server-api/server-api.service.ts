import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { IEvent, TCreateEvent } from '@events/shared';

import { SERVER_CONSTANTS } from 'const';

class ServerAPI {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({ baseURL: SERVER_CONSTANTS.URL });
  }

  private async get<TResponse>(
    url: string,
    config?: AxiosRequestConfig<TResponse>
  ) {
    const response = await this.instance.get<TResponse>(url, config);
    return response.data;
  }

  private async post<TResponse, TData>(
    url: string,
    data?: TData,
    config?: AxiosRequestConfig<TData>
  ) {
    const response = await this.instance.post<TResponse>(url, data, config);
    return response.data;
  }

  private async put<TResponse, TData>(
    url: string,
    data?: TData,
    config?: AxiosRequestConfig<TData>
  ) {
    const response = await this.instance.put<TResponse>(url, data, config);
    return response.data;
  }

  private async delete<TResponse>(
    url: string,
    config?: AxiosRequestConfig<TResponse>
  ) {
    const response = await this.instance.delete<TResponse>(url, config);
    return response.data;
  }

  public async getEvents(search?: string) {
    return this.get<IEvent[]>('/events', { params: { search } });
  }

  public async getEvent(eventId: string) {
    return this.get<IEvent>('/events/' + eventId);
  }

  public async getEventImages() {
    return this.get<string[]>('/event-images');
  }

  public async createEvent(createEvent: TCreateEvent) {
    return this.post<IEvent, TCreateEvent>('/events', createEvent);
  }

  public async deleteEvent(eventId: string) {
    return this.delete<IEvent>('/events/' + eventId);
  }

  public async updateEvent(eventId: string, data: TCreateEvent) {
    return this.put<IEvent, TCreateEvent>('/events/' + eventId, data);
  }
}

export const serverAPI = new ServerAPI();
