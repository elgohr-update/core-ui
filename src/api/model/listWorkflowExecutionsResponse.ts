/**
 * Onepanel
 * Onepanel API
 *
 * The version of the OpenAPI document: 0.17.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { WorkflowExecution } from './workflowExecution';


export interface ListWorkflowExecutionsResponse { 
    count?: number;
    workflowExecutions?: Array<WorkflowExecution>;
    page?: number;
    pages?: number;
    totalCount?: number;
    totalAvailableCount?: number;
}

