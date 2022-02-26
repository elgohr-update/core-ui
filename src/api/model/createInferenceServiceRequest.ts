/**
 * Onepanel
 * Onepanel API
 *
 * The version of the OpenAPI document: 1.0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { InferenceServiceTransformer } from './inferenceServiceTransformer';
import { InferenceServicePredictor } from './inferenceServicePredictor';


export interface CreateInferenceServiceRequest { 
    namespace?: string;
    name?: string;
    defaultTransformerImage?: string;
    predictor?: InferenceServicePredictor;
    transformer?: InferenceServiceTransformer;
}
