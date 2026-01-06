import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl: string = environment.apiUrl || 'http://localhost:8080/api/v1';

  getBaseUrl(): string {
    return this.baseUrl;
  }

  getEndpoint(path: string): string {
    return `${this.baseUrl}${path}`;
  }
}
