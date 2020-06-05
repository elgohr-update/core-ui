/**
 * Onepanel
 * Onepanel API
 *
 * The version of the OpenAPI document: 0.10.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { KeyValue } from './keyValue';
import { WorkflowTemplate } from './workflowTemplate';
import { Parameter } from './parameter';


export interface WorkflowExecution { 
    createdAt?: string;
    uid?: string;
    name?: string;
    phase?: string;
    startedAt?: string;
    finishedAt?: string;
    manifest?: string;
    parameters?: Array<Parameter>;
    workflowTemplate?: WorkflowTemplate;
    labels?: Array<KeyValue>;
}

