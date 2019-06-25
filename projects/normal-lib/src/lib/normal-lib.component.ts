import { Component, Inject } from '@angular/core';
import { NormalLibConfig } from './normal-lib-config';
import { NORMAL_LIB_CONFIG } from './normal-lib-config.token';

@Component({
  selector: 'lib-normal-lib',
  template: `
  <h2>Configurable message: {{ message }}</h2>
  `,
  styles: []
})
export class NormalLibComponent {
  message = this.normalLibConfig.message;

  constructor(@Inject(NORMAL_LIB_CONFIG) private normalLibConfig: NormalLibConfig) { }

}
