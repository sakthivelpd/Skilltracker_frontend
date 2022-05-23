import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { DateFormly, RangeDateFormly } from '.';
import { FormlyNzFormFieldModule } from '../form-field/form-field.module';
import { FormlyFieldDate } from './date.type';
@NgModule({
  declarations: [FormlyFieldDate],
  imports: [
    CommonModule,
    NzDatePickerModule,
    ReactiveFormsModule,
    FormlyNzFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'date',
          component: FormlyFieldDate,
          wrappers: ['form-field'],
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              type: 'date',
              date: {
                allowClear: true,
                backdrop: false,
                inputReadOnly: false,
                mode: 'date',
                popupStyle: {},
                borderless: false,
                inline: false,
                showToday: true,
                showNow: true,
              } as DateFormly,
            },
          },
        },
        {
          name: 'rangeDate',
          extends: 'date',
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              type: 'range',
              range: {
                allowClear: true,
                backdrop: false,
                inputReadOnly: false,
                mode: 'date',
                popupStyle: {},
                borderless: false,
                inline: false,
                showToday: true,
                showNow: true,
                separator: '~',
              } as RangeDateFormly,
            },
          },
        },
      ],
    }),
  ],
})
export class FormlyNzDateModule {}
