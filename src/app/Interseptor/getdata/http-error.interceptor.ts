import {
	HttpEvent,
	HttpInterceptor,
	HttpHandler,
	HttpRequest,
	HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { NotifierService } from 'angular-notifier';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HttpErrorInterceptor implements HttpInterceptor {
	constructor(private notifierService: NotifierService) {}
	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		return next.handle(request).pipe(
			retry(1),
			catchError((error: HttpErrorResponse) => {
				if (error.error instanceof ErrorEvent) {
					// A client-side or network error occurred. Handle it accordingly.
					this.notifierService.notify('error', error.error.message);
					console.error('An error occurred:', error.error.message);
				} else {
					// The backend returned an unsuccessful response code.
					// The response body may contain clues as to what went wrong,
					console.log(error);
					this.notifierService.notify(
						'error',
						`Backend returned code ${error.status}, body was: ${error.error}`
					);
					console.error(
						`Backend returned code ${error.status}, body was: ${error.error}`
					);
				}
				return throwError(
					'Something bad happened; please try again later.'
				);
			})
		);
	}
}
