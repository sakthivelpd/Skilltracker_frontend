import {
  ChangeDetectionStrategy, Component, OnInit, ViewChild
} from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { NzTimePickerComponent } from 'ng-zorro-antd/time-picker';

@Component({
  selector: 'formly-field-time',
  template: `
    <nz-time-picker
      #time
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzAddOn]="to['time']?.addOn"
      [nzAllowEmpty]="to['time']?.allowEmpty"
      [nzBackdrop]="to['time']?.backdrop"
      [nzClearText]="to['time']?.clearText"
      [nzNowText]="to['time']?.nowText"
      [nzOkText]="to['time']?.okText"
      [nzDefaultOpenValue]="to['time']?.defaultOpenValue"
      [nzDisabledHours]="to['time']?.disabledHours"
      [nzDisabledMinutes]="to['time']?.disabledMinutes"
      [nzDisabledSeconds]="to['time']?.disabledSeconds"
      [nzFormat]="to['time']?.format"
      [nzHideDisabledOptions]="to['time']?.hideDisabledOptions"
      [nzHourStep]="to['time']?.hourStep"
      [nzMinuteStep]="to['time']?.minuteStep"
      [nzSecondStep]="to['time']?.secondStep"
      [nzOpen]="(to['time']?.open)"
      [nzPopupClassName]="to['time']?.popupClassName"
      [nzUse12Hours]="to['time']?.use12Hours"
      (nzOpenChange)="to['time']?.openChange && to['time']?.openChange($event)"
    ></nz-time-picker>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldTime  extends FieldType<FieldTypeConfig> implements OnInit {
  @ViewChild('time', { static: true })
  time!: NzTimePickerComponent;
  ngOnInit(): void {
    if (
      this.to['time']?.suffixIcon !== null &&
      this.to['time']?.suffixIcon !== undefined
    ) {
      this.time.nzSuffixIcon = this.to['time'].suffixIcon;
    }
  }
}
