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
import { GoogleRpcStatus } from './googleRpcStatus';
import { WorkflowExecution } from './workflowExecution';


export interface StreamResultOfWorkflowExecution { 
    result?: WorkflowExecution;
    error?: GoogleRpcStatus;
}

