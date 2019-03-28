import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-ng-zorro-antd-input',
  template: `
    <input
      *ngIf="to.type !== 'number'; else numberTmp"
      nz-input
      [type]="to.type || 'text'"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [class.ng-dirty]="showError"
    />
    <ng-template #numberTmp>
      <nz-input-number
        [formControl]="formControl"
        [formlyAttributes]="field"
        [class.ng-dirty]="showError"
      ></nz-input-number>
    </ng-template>
  `,
})
export class FormlyFieldInput extends FieldType {}
