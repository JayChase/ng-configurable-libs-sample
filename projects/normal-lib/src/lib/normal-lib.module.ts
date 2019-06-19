import { ModuleWithProviders, NgModule } from '@angular/core';
import { NormalLibConfig } from './normal-lib-config';
import { NORMAL_LIB_CONFIG } from './normal-lib-config.token';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [TestComponent],
  imports: [],
  exports: [TestComponent]
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
