import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http'


@Injectable()
export class HttpService {

	constructor() {

	}

	headerOptionsJson(isGet:boolean):object {
		let httpOptions:object;
		let headers = new HttpHeaders();
		if (!isGet) {
			headers = headers.set("Content-Type", "application/json");
		}
		httpOptions = { headers: headers};
		return httpOptions;
	}

}