import { Component, Inject, OnInit } from '@angular/core';
import { NormalLibConfig } from '../normal-lib-config';
import { NORMAL_LIB_CONFIG } from '../normal-lib-config.token';

@Component({
  selector: 'nml-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  message: string;
  constructor(
    @Inject(NORMAL_LIB_CONFIG) private normalLibConfig: NormalLibConfig
  ) {}

  ngOnInit() {
    this.message = this.normalLibConfig.message;
  }
}
