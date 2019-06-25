import { ModuleWithProviders, NgModule } from '@angular/core';
import { NormalLibConfig } from './normal-lib-config';
import { NORMAL_LIB_CONFIG } from './normal-lib-config.token';
import { NormalLibComponent } from './normal-lib.component';

@NgModule({
  declarations: [NormalLibComponent],
  imports: [
  ],
  exports: [NormalLibComponent]
})
export class NormalLibModule {
  static forRoot(normalLibConfig: NormalLibConfig): ModuleWithProviders {
    return {
      ngModule: NormalLibModule,
      providers: [
        {
          provide: NORMAL_LIB_CONFIG,
          useValue: normalLibConfig
        }
      ]
    };
  }
}
