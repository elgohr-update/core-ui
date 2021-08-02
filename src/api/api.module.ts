import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AuthServiceService } from './api/authService.service';
import { ConfigServiceService } from './api/configService.service';
import { CronWorkflowServiceService } from './api/cronWorkflowService.service';
import { FileServiceService } from './api/fileService.service';
import { LabelServiceService } from './api/labelService.service';
import { NamespaceServiceService } from './api/namespaceService.service';
import { SecretServiceService } from './api/secretService.service';
import { ServiceServiceService } from './api/serviceService.service';
import { WorkflowServiceService } from './api/workflowService.service';
import { WorkflowTemplateServiceService } from './api/workflowTemplateService.service';
import { WorkspaceServiceService } from './api/workspaceService.service';
import { WorkspaceTemplateServiceService } from './api/workspaceTemplateService.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
