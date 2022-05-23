import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-tabs',
  template: `
    <nz-tabset
      [nzAnimated]="to['tabs']?.animated"
      [nzSize]="to['tabs']?.size"
      [nzTabBarExtraContent]="to['tabs']?.tabBarExtraContent"
      [nzTabBarStyle]="to['tabs']?.tabBarStyle"
      [nzTabPosition]="to['tabs']?.tabPosition"
      [nzType]="to['tabs']?.type"
      [nzTabBarGutter]="to['tabs']?.tabBarGutter"
      [nzHideAll]="to['tabs']?.hideAll"
      [nzLinkRouter]="to['tabs']?.linkRouter"
      [nzLinkExact]="to['tabs']?.linkExact"
      [nzCanDeactivate]="to['tabs']?.canDeactivate"
      (nzSelectedIndexChange)="
        to['tabs']?.selectedIndexChange && to['tabs']?.selectedIndexChange($event)
      "
      (nzSelectChange)="to['tabs']?.selectChange && to['tabs']?.selectChange($event)"
    >
      <nz-tab
        *ngFor="let tab of field.fieldGroup; let i = index; let last = last"
        [nzTitle]="tab.templateOptions?.['label'] || to['tabs']?.label"
        [nzDisabled]="tab.templateOptions?.['tab']?.['disabled']"
        [nzForceRender]="tab.templateOptions?.['tab']?.['forceRender']"
        (nzClick)="
          tab.templateOptions?.['tab']?.['click'] && tab.templateOptions?.['tab']?.['click()']
        "
        (nzDeselect)="
          tab.templateOptions?.['tab']?.['deselect'] &&
            tab.templateOptions?.['tab']?.['deselect()']
        "
        (nzSelect)="
          tab.templateOptions?.['tab']?.select && tab.templateOptions?.['tab']?.select()
        "
        (nzContextmenu)="
          tab.templateOptions?.['tab']?.contextmenu &&
            tab.templateOptions?.['tab']?.contextmenu($event)
        "
      >
        <formly-field [field]="tab"></formly-field>
      </nz-tab>
    </nz-tabset>
  `,
})
export class FormlyFieldTabs extends FieldType<FieldTypeConfig> {
 
}
