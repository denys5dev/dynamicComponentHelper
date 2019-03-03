import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ConfigurationService {
	private appConfig;

	constructor(private http: HttpClient) {}

	loadAppConfig(type) {
		return this.http.get<any>(`/assets/${type}.json`);
	}

	getConfig() {
		return this.appConfig;
	}
}
