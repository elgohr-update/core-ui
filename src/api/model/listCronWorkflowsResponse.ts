/**
 * Onepanel
 * Onepanel API
 *
 * The version of the OpenAPI document: 0.18.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CronWorkflow } from './cronWorkflow';


export interface ListCronWorkflowsResponse { 
    count?: number;
    cronWorkflows?: Array<CronWorkflow>;
    page?: number;
    pages?: number;
    totalCount?: number;
}

