import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import {NzGridModule} from  'ng-zorro-antd/grid'

import { FormlyWrapperFormField } from './form-field.wrapper';

@NgModule({
  declarations: [FormlyWrapperFormField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzGridModule,
    FormlyModule.forChild({
      wrappers: [
        {
          name: 'form-field',
          component: FormlyWrapperFormField,
        },
      ],
    }),
  ],
})
export class FormlyNzFormFieldModule {}
