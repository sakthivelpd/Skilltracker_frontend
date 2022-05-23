import {
  ChangeDetectionStrategy, Component
} from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-input',
  template: `
    <ng-container [ngSwitch]="to.type">
      <!-- <nz-input-group
        *ngSwitchCase="'input'"
        [nzPrefixIcon]="to['input']['prefixIcon']"
        [nzSuffixIcon]="to['input']['suffixIcon']"
        [nzAddOnAfterIcon]="to['input']['addOnAfterIcon']"
        [nzAddOnBeforeIcon]="to['input']['addOnBeforeIcon']"
        [nzAddOnBefore]="to['input']['addOnBefore']"
        [nzAddOnAfter]="to['input']['addOnAfter']"
        [nzPrefix]="to['input']['prefix']"
        [nzSuffix]="to['input']['suffix']"
      > -->
      <input
        *ngSwitchCase="'input'"
        nz-input
        [placeholder]="to.placeholder"
        [formControl]="formControl"
        [nzBorderless]="to['input']['borderless']"
        [formlyAttributes]="field"
      />
      <!-- </nz-input-group> -->

      <nz-input-group
        *ngSwitchCase="'password'"
        [nzPrefixIcon]="to['input']['prefixIcon']"
        [nzSuffixIcon]="to['input']['suffixIcon']"
        [nzAddOnAfterIcon]="to['input']['addOnAfterIcon']"
        [nzAddOnBeforeIcon]="to['input']['addOnBeforeIcon']"
        [nzAddOnBefore]="to['input']['addOnBefore']"
        [nzAddOnAfter]="to['input']['addOnAfter']"
        [nzPrefix]="to['input']['prefix']"
        [nzSuffix]="to['input']['suffix']"
      >
        <input
          type="password"
          nz-input
          [placeholder]="to.placeholder"
          [formControl]="formControl"
          [nzBorderless]="to['input']['borderless']"
          [formlyAttributes]="field"
        />
      </nz-input-group>

      <nz-input-number
        #inputNumber
        *ngSwitchCase="'number'"
        [formControl]="formControl"
        [formlyAttributes]="field"
        [nzMax]="nzMax ? nzMax :0"
        [nzMin]="nzMin"
        [nzPrecision]="to['number']?.precision"
        [nzPrecisionMode]="to['number']?.precisionMode"
        [nzStep]="to['number']?.step"
        [nzInputMode]="to['number']?.inputMode"       
        [ngStyle]="width!"
        [nzParser]="to['number']?.parser"      
         
      ></nz-input-number>
   <!-- [nzFormatter]="to['number']?.formatter"-->
      <ng-container *ngSwitchCase="'textarea'">
        <nz-textarea-count
          *ngIf="to['textarea']['maxCharacterCount']; else textarea"
          [nzMaxCharacterCount]="to['textarea']['maxCharacterCount']"
        >
          <textarea
            [rows]="to['textarea']['rows']"
            nz-input
            [placeholder]="to.placeholder"
            [formControl]="formControl"
            [nzBorderless]="to['textarea']['borderless']"
            [formlyAttributes]="field"
            [nzAutosize]="to['textarea']['autosize']"
          ></textarea>
        </nz-textarea-count>

        <ng-template #textarea>
          <textarea
            [rows]="to['textarea']['rows']"
            nz-input
            [placeholder]="to.placeholder"
            [formControl]="formControl"
            [nzBorderless]="to['textarea']['borderless']"
            [formlyAttributes]="field"
            [nzAutosize]="to['textarea']['autosize']"
          ></textarea>
        </ng-template>
      </ng-container>

      <nz-input-group
        *ngSwitchCase="'autoComplete'"
        [nzPrefixIcon]="to['autoComplete']?.prefixIcon"
        [nzSuffixIcon]="to['autoComplete']?.suffixIcon"
        [nzAddOnAfterIcon]="to['autoComplete']?.addOnAfterIcon"
        [nzAddOnBeforeIcon]="to['autoComplete']?.addOnBeforeIcon"
        [nzAddOnBefore]="to['autoComplete']?.addOnBefore"
        [nzAddOnAfter]="to['autoComplete']?.addOnAfter"
        [nzPrefix]="to['autoComplete']?.prefix"
        [nzSuffix]="to['autoComplete']?.suffix"
      >
        <input
          nz-input
          [placeholder]="to.placeholder"
          [formControl]="formControl"
          [nzBorderless]="to['autoComplete']?.borderless"
          [formlyAttributes]="field"
          [nzAutocomplete]="auto"
        />
        <nz-autocomplete
          [nzBackfill]="to['autoComplete']?.backfill"
          [nzDefaultActiveFirstOption]="
            to['autoComplete']?.defaultActiveFirstOption
          "
          [nzWidth]="to['autoComplete']?.width"
          [nzOverlayClassName]="to['autoComplete']?.overlayClassName"
          [nzOverlayStyle]="to['autoComplete']?.overlayStyle"
          [compareWith]="to['autoComplete']?.compareWith"
          #auto
        >
          <nz-auto-option
            *ngFor="let option of to['autoComplete'].dataSource"
            [nzLabel]="option.label"
            [nzValue]="option.value"
          >
            {{ option.label }}
          </nz-auto-option>
        </nz-autocomplete>
      </nz-input-group>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldInput extends FieldType<FieldTypeConfig> {
  get width() : any | undefined {
    if (this.to.type === 'number' && this.to['number']?.width) {
      return { width: this.to!['number'].width };
    }
    return '';
  }
  get nzMax(): number {
    return this.to!['max'] as number;
  }
  get nzMin(): number {
    return this.to!['min'] as number ;
  }
}
