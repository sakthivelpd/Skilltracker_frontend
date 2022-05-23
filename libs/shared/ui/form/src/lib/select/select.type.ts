import {
  ChangeDetectionStrategy, Component, OnInit, ViewChild
} from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { NzSelectComponent } from 'ng-zorro-antd/select';


@Component({
  selector: 'formly-field-select',
  template: `
    <nz-select
      #select
      [nzPlaceHolder]="nzPlaceHolder"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [compareWith]="to['select']?.compareWith"
      [nzAllowClear]="to['select']?.allowClear"
      [nzAutoClearSearchValue]="to['select']?.autoClearSearchValue"
      [nzBackdrop]="to['select']?.backdrop"
      [nzBorderless]="to['select']?.borderless"
      [nzOpen]="to['select']?.open"
      [nzDropdownClassName]="to['select']?.dropdownMatchSelectWidth"
      [nzDropdownStyle]="to['select']?.dropdownStyle"
      [nzCustomTemplate]="to['select']?.customTemplate"
      [nzServerSearch]="to['select']?.serverSearch"
      [nzMaxMultipleCount]="to['select']?.maxMultipleCount"
      [nzMode]="to['select']?.mode"
      [nzLoading]="to['select']?.loading"
      [nzShowArrow]="to['select']?.showArrow"
      [nzMaxTagCount]="to['select']?.maxTagCount"
      [nzMaxTagPlaceholder]="to['select']?.maxTagPlaceholder"
      [nzOptionHeightPx]="to['select']?.optionHeightPx"
      [nzOptionOverflowSize]="to['select']?.optionOverflowSize"
      (nzBlur)="to['select']?.blur && to['select']?.blur($event)"
      (nzFocus)="to['select']?.focus && to['select']?.focus($event)"
      (nzOpenChange)="to['select']?.openChange && to['select']?.openChange($event)"
      (nzScrollToBottom)="
        to['select']?.scrollToBottom && to['select']?.scrollToBottom($event)
      "
      (nzOnSearch)="to['select']?.onSearch && to['select']?.onSearch($event)"
    >
      <ng-container
        *ngFor="let item of to.options | formlySelectOptions: field | async"
      >
        <nz-option-group *ngIf="item.group" [nzLabel]="item.label">
          <nz-option
            *ngFor="let child of item.group"
            [nzValue]="child.value"
            [nzDisabled]="child.disabled"
            [nzLabel]="child.label"
          >
          </nz-option>
        </nz-option-group>
        <nz-option
          *ngIf="!item.group"
          [nzValue]="item.value"
          [nzDisabled]="item.disabled"
          [nzLabel]="item.label"
        ></nz-option>
      </ng-container>
    </nz-select>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldSelect extends FieldType<FieldTypeConfig> implements OnInit {
  @ViewChild('select', { static: true })
  select!: NzSelectComponent;
  ngOnInit(): void {
    if (this.to['select']?.filterOption instanceof Function) {
      this.select.nzFilterOption = this.to['select']?.filterOption;
    }
  }
  get nzPlaceHolder(): string {
    return this.to!['nzPlaceHolder'];
  }
}
