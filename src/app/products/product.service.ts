import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IProduct } from "./product";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private productUrl = 'api/products/products.json';

    constructor(private http: HttpClient) {}

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl)
            .pipe(
                tap(data => console.log(`Api called: ${this.productUrl}, response: ${JSON.stringify(data)}`)),
                catchError(this.handleError)
            );
    };
    private handleError(error: HttpErrorResponse) {
        let errorMessage = '';

        if (error.error instanceof ErrorEvent) {
            errorMessage = `An error occured: ${error.error.message}`;
        } else {
            errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
        }
        console.error(errorMessage);

        return throwError(errorMessage);
    }
}