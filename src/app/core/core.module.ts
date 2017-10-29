import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
  
  import { CommonModule }      from '@angular/common';
  
  import { SharedModule }       from '../shared/shared.module';

  import { TitleComponent }    from './title.component';
  import { UserService }       from './user.service';
  import { UserServiceConfig } from './user.service';
  
  @NgModule({
    imports:      [ SharedModule ],
    declarations: [ TitleComponent ],
    exports:      [ TitleComponent ],
    providers:    [ UserService ]
  })
  export class CoreModule {

    static forRoot(config: UserServiceConfig): ModuleWithProviders {
        return {
          ngModule: CoreModule,
          providers: [
            {provide: UserServiceConfig, useValue: config }
          ]
        };
      }

  }