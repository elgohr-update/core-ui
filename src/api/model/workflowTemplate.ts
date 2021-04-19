/**
 * Onepanel
 * Onepanel API
 *
 * The version of the OpenAPI document: 0.19.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CronWorkflowStatisticsReport } from './cronWorkflowStatisticsReport';
import { KeyValue } from './keyValue';
import { WorkflowExecutionStatisticReport } from './workflowExecutionStatisticReport';
import { Parameter } from './parameter';


export interface WorkflowTemplate { 
    createdAt?: string;
    modifiedAt?: string;
    uid?: string;
    name?: string;
    version?: string;
    versions?: string;
    manifest?: string;
    isLatest?: boolean;
    isArchived?: boolean;
    labels?: Array<KeyValue>;
    stats?: WorkflowExecutionStatisticReport;
    cronStats?: CronWorkflowStatisticsReport;
    parameters?: Array<Parameter>;
    description?: string;
}

