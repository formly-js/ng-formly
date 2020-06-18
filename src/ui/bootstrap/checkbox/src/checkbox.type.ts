import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-checkbox',
  template: `
    <div
      [ngClass]="{
        'form-check': to.formCheck.indexOf('custom') === -1,
        'form-check-inline': to.formCheck === 'inline',
        'custom-control': to.formCheck.indexOf('custom') === 0,
        'custom-checkbox': to.formCheck === 'custom' || to.formCheck === 'custom-inline',
        'custom-control-inline': to.formCheck === 'custom-inline',
        'custom-switch': to.formCheck === 'custom-switch'
      }"
    >
      <input
        type="checkbox"
        [class.is-invalid]="showError"
        [class.form-check-input]="to.formCheck.indexOf('custom') === -1"
        [class.custom-control-input]="to.formCheck.indexOf('custom') === 0"
        [indeterminate]="to.indeterminate && formControl.value == null"
        [formControl]="formControl"
        [formlyAttributes]="field"
      />
      <label
        *ngIf="!to.hideLabel" 
        [for]="id"
        [class.form-check-label]="to.formCheck.indexOf('custom') === -1"
        [class.custom-control-label]="to.formCheck.indexOf('custom') === 0"
      >
        {{ to.label }}
        <span *ngIf="to.required && to.hideRequiredMarker !== true">*</span>
      </label>
    </div>
  `,
})
export class FormlyFieldCheckbox extends FieldType {
  defaultOptions = {
    templateOptions: {
      indeterminate: true,
      hideLabel: false,
      formCheck: 'custom', // 'custom' | 'custom-inline' | 'custom-switch' | 'stacked' | 'inline'
    },
  };
}
