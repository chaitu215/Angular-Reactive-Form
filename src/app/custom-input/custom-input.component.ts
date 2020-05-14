import { Component, OnInit , Input, Self, Optional } from '@angular/core';
import { ControlValueAccessor , NgControl } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})

export class CustomInputComponent implements OnInit, ControlValueAccessor {

  @Input() disabled:boolean;
  @Input() label:string;
  @Input() placeholder:string ='';
  @Input() type: 'text' |'email' | 'password' = 'text';

  value: any= ''

  constructor(
    @Self()
    @Optional()
    private ngContol :NgControl
  ) { 
    if(this.ngContol){
      this.ngContol.valueAccessor = this;
    }

  }

  ngOnInit(): void {
  }

  writeValue(value: any) :void{
    this.value = value;
  }

  setDisabledState(isDisabled:boolean):void{
    this.disabled = isDisabled;
  }

  registerOnChange(fn:any) : void{
    this.onChange = fn 
  }

  registerOnTouched(fn:any):void{
    this.onTouched = fn
  }

  public onChange(e) {}
  public onTouched() {}

}
