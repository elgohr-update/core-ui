/**
 * Onepanel
 * Onepanel API
 *
 * The version of the OpenAPI document: 0.13.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

import { CreateWorkspaceBody } from '../model/models';
import { GetWorkspaceStatisticsForNamespaceResponse } from '../model/models';
import { GrpcGatewayRuntimeError } from '../model/models';
import { ListWorkspaceResponse } from '../model/models';
import { UpdateWorkspaceBody } from '../model/models';
import { Workspace } from '../model/models';
import { WorkspaceStatus } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class WorkspaceServiceService {

    protected basePath = 'http://localhost:8888';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }



    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key,
                        (value as Date).toISOString().substr(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * @param namespace 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createWorkspace(namespace: string, body: CreateWorkspaceBody, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<Workspace>;
    public createWorkspace(namespace: string, body: CreateWorkspaceBody, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<HttpResponse<Workspace>>;
    public createWorkspace(namespace: string, body: CreateWorkspaceBody, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<HttpEvent<Workspace>>;
    public createWorkspace(namespace: string, body: CreateWorkspaceBody, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<any> {
        if (namespace === null || namespace === undefined) {
            throw new Error('Required parameter namespace was null or undefined when calling createWorkspace.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createWorkspace.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys) {
            const key: string | undefined = this.configuration.apiKeys["Bearer"] || this.configuration.apiKeys["authorization"];
            if (key) {
                headers = headers.set('authorization', key);
            }
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json',
                'application/octet-stream'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.post<Workspace>(`${this.configuration.basePath}/apis/v1beta1/${encodeURIComponent(String(namespace))}/workspaces`,
            body,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param namespace 
     * @param uid 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteWorkspace(namespace: string, uid: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<object>;
    public deleteWorkspace(namespace: string, uid: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<HttpResponse<object>>;
    public deleteWorkspace(namespace: string, uid: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<HttpEvent<object>>;
    public deleteWorkspace(namespace: string, uid: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<any> {
        if (namespace === null || namespace === undefined) {
            throw new Error('Required parameter namespace was null or undefined when calling deleteWorkspace.');
        }
        if (uid === null || uid === undefined) {
            throw new Error('Required parameter uid was null or undefined when calling deleteWorkspace.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys) {
            const key: string | undefined = this.configuration.apiKeys["Bearer"] || this.configuration.apiKeys["authorization"];
            if (key) {
                headers = headers.set('authorization', key);
            }
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json',
                'application/octet-stream'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.delete<object>(`${this.configuration.basePath}/apis/v1beta1/${encodeURIComponent(String(namespace))}/workspaces/${encodeURIComponent(String(uid))}`,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param namespace 
     * @param uid 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getWorkspace(namespace: string, uid: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<Workspace>;
    public getWorkspace(namespace: string, uid: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<HttpResponse<Workspace>>;
    public getWorkspace(namespace: string, uid: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<HttpEvent<Workspace>>;
    public getWorkspace(namespace: string, uid: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<any> {
        if (namespace === null || namespace === undefined) {
            throw new Error('Required parameter namespace was null or undefined when calling getWorkspace.');
        }
        if (uid === null || uid === undefined) {
            throw new Error('Required parameter uid was null or undefined when calling getWorkspace.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys) {
            const key: string | undefined = this.configuration.apiKeys["Bearer"] || this.configuration.apiKeys["authorization"];
            if (key) {
                headers = headers.set('authorization', key);
            }
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json',
                'application/octet-stream'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.get<Workspace>(`${this.configuration.basePath}/apis/v1beta1/${encodeURIComponent(String(namespace))}/workspaces/${encodeURIComponent(String(uid))}`,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param namespace 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getWorkspaceStatisticsForNamespace(namespace: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<GetWorkspaceStatisticsForNamespaceResponse>;
    public getWorkspaceStatisticsForNamespace(namespace: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<HttpResponse<GetWorkspaceStatisticsForNamespaceResponse>>;
    public getWorkspaceStatisticsForNamespace(namespace: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<HttpEvent<GetWorkspaceStatisticsForNamespaceResponse>>;
    public getWorkspaceStatisticsForNamespace(namespace: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<any> {
        if (namespace === null || namespace === undefined) {
            throw new Error('Required parameter namespace was null or undefined when calling getWorkspaceStatisticsForNamespace.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys) {
            const key: string | undefined = this.configuration.apiKeys["Bearer"] || this.configuration.apiKeys["authorization"];
            if (key) {
                headers = headers.set('authorization', key);
            }
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json',
                'application/octet-stream'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.get<GetWorkspaceStatisticsForNamespaceResponse>(`${this.configuration.basePath}/apis/v1beta1/${encodeURIComponent(String(namespace))}/workspace/statistics`,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param namespace 
     * @param pageSize 
     * @param page 
     * @param order 
     * @param labels 
     * @param phase 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listWorkspaces(namespace: string, pageSize?: number, page?: number, order?: string, labels?: string, phase?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<ListWorkspaceResponse>;
    public listWorkspaces(namespace: string, pageSize?: number, page?: number, order?: string, labels?: string, phase?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<HttpResponse<ListWorkspaceResponse>>;
    public listWorkspaces(namespace: string, pageSize?: number, page?: number, order?: string, labels?: string, phase?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<HttpEvent<ListWorkspaceResponse>>;
    public listWorkspaces(namespace: string, pageSize?: number, page?: number, order?: string, labels?: string, phase?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<any> {
        if (namespace === null || namespace === undefined) {
            throw new Error('Required parameter namespace was null or undefined when calling listWorkspaces.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (pageSize !== undefined && pageSize !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>pageSize, 'pageSize');
        }
        if (page !== undefined && page !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>page, 'page');
        }
        if (order !== undefined && order !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>order, 'order');
        }
        if (labels !== undefined && labels !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>labels, 'labels');
        }
        if (phase !== undefined && phase !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>phase, 'phase');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys) {
            const key: string | undefined = this.configuration.apiKeys["Bearer"] || this.configuration.apiKeys["authorization"];
            if (key) {
                headers = headers.set('authorization', key);
            }
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json',
                'application/octet-stream'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.get<ListWorkspaceResponse>(`${this.configuration.basePath}/apis/v1beta1/${encodeURIComponent(String(namespace))}/workspaces`,
            {
                params: queryParameters,
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param namespace 
     * @param uid 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public pauseWorkspace(namespace: string, uid: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<object>;
    public pauseWorkspace(namespace: string, uid: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<HttpResponse<object>>;
    public pauseWorkspace(namespace: string, uid: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<HttpEvent<object>>;
    public pauseWorkspace(namespace: string, uid: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<any> {
        if (namespace === null || namespace === undefined) {
            throw new Error('Required parameter namespace was null or undefined when calling pauseWorkspace.');
        }
        if (uid === null || uid === undefined) {
            throw new Error('Required parameter uid was null or undefined when calling pauseWorkspace.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys) {
            const key: string | undefined = this.configuration.apiKeys["Bearer"] || this.configuration.apiKeys["authorization"];
            if (key) {
                headers = headers.set('authorization', key);
            }
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json',
                'application/octet-stream'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.put<object>(`${this.configuration.basePath}/apis/v1beta1/${encodeURIComponent(String(namespace))}/workspaces/${encodeURIComponent(String(uid))}/pause`,
            null,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param namespace 
     * @param uid 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public resumeWorkspace(namespace: string, uid: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<object>;
    public resumeWorkspace(namespace: string, uid: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<HttpResponse<object>>;
    public resumeWorkspace(namespace: string, uid: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<HttpEvent<object>>;
    public resumeWorkspace(namespace: string, uid: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<any> {
        if (namespace === null || namespace === undefined) {
            throw new Error('Required parameter namespace was null or undefined when calling resumeWorkspace.');
        }
        if (uid === null || uid === undefined) {
            throw new Error('Required parameter uid was null or undefined when calling resumeWorkspace.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys) {
            const key: string | undefined = this.configuration.apiKeys["Bearer"] || this.configuration.apiKeys["authorization"];
            if (key) {
                headers = headers.set('authorization', key);
            }
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json',
                'application/octet-stream'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.put<object>(`${this.configuration.basePath}/apis/v1beta1/${encodeURIComponent(String(namespace))}/workspaces/${encodeURIComponent(String(uid))}/resume`,
            null,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param namespace 
     * @param uid 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public retryLastWorkspaceAction(namespace: string, uid: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<object>;
    public retryLastWorkspaceAction(namespace: string, uid: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<HttpResponse<object>>;
    public retryLastWorkspaceAction(namespace: string, uid: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<HttpEvent<object>>;
    public retryLastWorkspaceAction(namespace: string, uid: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<any> {
        if (namespace === null || namespace === undefined) {
            throw new Error('Required parameter namespace was null or undefined when calling retryLastWorkspaceAction.');
        }
        if (uid === null || uid === undefined) {
            throw new Error('Required parameter uid was null or undefined when calling retryLastWorkspaceAction.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys) {
            const key: string | undefined = this.configuration.apiKeys["Bearer"] || this.configuration.apiKeys["authorization"];
            if (key) {
                headers = headers.set('authorization', key);
            }
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json',
                'application/octet-stream'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.put<object>(`${this.configuration.basePath}/apis/v1beta1/${encodeURIComponent(String(namespace))}/workspaces/${encodeURIComponent(String(uid))}/retry`,
            null,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param namespace 
     * @param uid 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateWorkspace(namespace: string, uid: string, body: UpdateWorkspaceBody, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<object>;
    public updateWorkspace(namespace: string, uid: string, body: UpdateWorkspaceBody, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<HttpResponse<object>>;
    public updateWorkspace(namespace: string, uid: string, body: UpdateWorkspaceBody, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<HttpEvent<object>>;
    public updateWorkspace(namespace: string, uid: string, body: UpdateWorkspaceBody, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<any> {
        if (namespace === null || namespace === undefined) {
            throw new Error('Required parameter namespace was null or undefined when calling updateWorkspace.');
        }
        if (uid === null || uid === undefined) {
            throw new Error('Required parameter uid was null or undefined when calling updateWorkspace.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateWorkspace.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys) {
            const key: string | undefined = this.configuration.apiKeys["Bearer"] || this.configuration.apiKeys["authorization"];
            if (key) {
                headers = headers.set('authorization', key);
            }
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json',
                'application/octet-stream'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.put<object>(`${this.configuration.basePath}/apis/v1beta1/${encodeURIComponent(String(namespace))}/workspaces/${encodeURIComponent(String(uid))}`,
            body,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param namespace 
     * @param uid 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateWorkspaceStatus(namespace: string, uid: string, body: WorkspaceStatus, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<object>;
    public updateWorkspaceStatus(namespace: string, uid: string, body: WorkspaceStatus, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<HttpResponse<object>>;
    public updateWorkspaceStatus(namespace: string, uid: string, body: WorkspaceStatus, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<HttpEvent<object>>;
    public updateWorkspaceStatus(namespace: string, uid: string, body: WorkspaceStatus, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/octet-stream'}): Observable<any> {
        if (namespace === null || namespace === undefined) {
            throw new Error('Required parameter namespace was null or undefined when calling updateWorkspaceStatus.');
        }
        if (uid === null || uid === undefined) {
            throw new Error('Required parameter uid was null or undefined when calling updateWorkspaceStatus.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateWorkspaceStatus.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys) {
            const key: string | undefined = this.configuration.apiKeys["Bearer"] || this.configuration.apiKeys["authorization"];
            if (key) {
                headers = headers.set('authorization', key);
            }
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json',
                'application/octet-stream'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.put<object>(`${this.configuration.basePath}/apis/v1beta1/${encodeURIComponent(String(namespace))}/workspaces/${encodeURIComponent(String(uid))}/status`,
            body,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
