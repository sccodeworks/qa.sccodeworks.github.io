"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[5263],{39505:(C,c,a)=>{a.d(c,{L:()=>f});var i=a(24006),_=a(59549),t=a(69751),r=a(68675),h=a(54004),o=a(94650),d=a(36895),u=a(47957),E=a(3238),O=a(44144);function p(n,s){if(1&n&&(o.TgZ(0,"mat-option",4),o._uU(1),o.qZA()),2&n){const e=s.$implicit;o.Q6J("value",e),o.xp6(1),o.Oqu(e)}}let f=(()=>{class n{constructor(e){this.fb=e,this.options=[],this.value="",this.placeholder="",this.id="",this.ngControl=null,this.label="",this.appearance="outline",this.describedBy="",this.touched=!1,this.focused=!1,this.empty=!1,this.required=!1,this.disabled=!1,this.shouldLabelFloat=!1,this.formControlName="",this.errorState=!1,this.previousValue="",this.onInput=l=>{},this.onChange=l=>{},this.onTouched=()=>{},this.control=this.fb.control(""),this.stateChanges=new t.y,this.filteredOptions=this.control.valueChanges.pipe((0,r.O)(this.value),(0,h.U)(l=>this._filter(l)))}setDescribedByIds(e){}onContainerClick(e){}markAsTouched(){this.touched||(this.touched=!0,this.onTouched())}writeValue(e){null!=e&&(this.control.setValue(e),this.value=e)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e}_filter(e){if(null==e||0==e.length)return this.options;const l=e.toLowerCase(),m=this.options.filter(A=>A.toLowerCase().includes(l));return!this.disabled&&1===m.length&&this.control.value!=m[0]&&e.length>=(this.previousValue?.length??0)&&this.control.setValue(m[0]),this.onChange(this.control.value),this.previousValue=this.control.value,m}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(i.qu))},n.\u0275cmp=o.Xpm({type:n,selectors:[["custom-input-autocomplete"]],hostVars:1,hostBindings:function(e,l){2&e&&o.uIk("aria-describedby",l.describedBy)},inputs:{options:"options",value:"value",placeholder:"placeholder",id:"id",ngControl:"ngControl",label:"label",appearance:"appearance"},features:[o._Bn([{provide:i.JU,multi:!0,useExisting:n},{provide:_.Eo,useExisting:n}],[{provide:i.gN,useExisting:i.sg}])],decls:8,vars:8,consts:[[3,"appearance"],["matInput","",3,"id","formControl","matAutocomplete"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,l){if(1&e&&(o.TgZ(0,"mat-form-field",0)(1,"mat-label"),o._uU(2),o.qZA(),o._UZ(3,"input",1),o.TgZ(4,"mat-autocomplete",null,2),o.YNc(6,p,2,2,"mat-option",3),o.ALo(7,"async"),o.qZA()()),2&e){const m=o.MAs(5);o.Q6J("appearance",l.appearance),o.xp6(2),o.Oqu(l.label),o.xp6(1),o.Q6J("id",l.id)("formControl",l.control)("matAutocomplete",m),o.xp6(3),o.Q6J("ngForOf",o.lcZ(7,6,l.filteredOptions))}},dependencies:[d.sg,i.Fj,i.JJ,i.oH,u.XC,u.ZL,E.ey,_.KE,_.hX,O.Nt,d.Ov]}),n})()},55263:(C,c,a)=>{a.r(c),a.d(c,{HistoricalItemBalanceComponent:()=>O});var i=a(50692),_=a(70879),t=a(94650),r=a(24006),h=a(19132),o=a(59549),d=a(44144),u=a(73546),E=a(39505);let O=(()=>{class p{constructor(n,s,e){this.fb=n,this.router=s,this.route=e,this.IncludeQuantitiesOptions=["ALL","AVAIL","DAMAGE","HELD","USER1","USER2","USER3","USER4","NEGATIVE","OVERALLOC","NONZERO"],this.ShowLotsOptions=["N","Y"],this.ReportUnitsOptions=["QUANTITY","PALLETS","CASES","CWEIGHT","CUBES"],this.ReportTitleOptions=["Item Balance  Report"],this.OutputOptions=["REPORT","EMAIL"],this.user=localStorage.getItem("userName")}ngOnInit(){this.form=this.fb.group({StorerNumber:"",AsOfDate:"",IncludeQuantities:"",ShowLots:"",ReportUnits:"",ReportTitle:"",OutputOptions:""})}}return p.\u0275fac=function(n){return new(n||p)(t.Y36(r.qu),t.Y36(h.F0),t.Y36(h.gz))},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-historical-item-balance"]],standalone:!0,features:[t.jDz],decls:21,vars:6,consts:[[1,"over-Flow"],[1,"title"],[1,"tally-serach-form"],[3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","StorerNumber"],["appearance","outline","floatLabel","always",1,"full-width"],["matInput","","type","Date","formControlName","AsOfDate"],["appearance","outline","formControlName","IncludeQuantities","label"," Include Quantities",3,"options"],["appearance","outline","formControlName","ShowLots","label"," Show Lots",3,"options"],["appearance","outline","formControlName","ReportUnits","label"," Report Units",3,"options"],["appearance","outline","formControlName","ReportTitle","label","Report Title",3,"options"],["appearance","outline","formControlName","Output","label","Output",3,"options"]],template:function(n,s){1&n&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3," Historical Item Balance Report"),t.qZA()(),t.TgZ(4,"mat-card-content",2)(5,"form",3)(6,"div",4)(7,"div",5)(8,"mat-form-field",6)(9,"mat-label"),t._uU(10,"Storer Number "),t.qZA(),t._UZ(11,"input",7),t.qZA(),t.TgZ(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"As of Date "),t.qZA(),t._UZ(15,"input",9),t.qZA(),t._UZ(16,"custom-input-autocomplete",10)(17,"custom-input-autocomplete",11)(18,"custom-input-autocomplete",12)(19,"custom-input-autocomplete",13)(20,"custom-input-autocomplete",14),t.qZA()()()()()),2&n&&(t.xp6(5),t.Q6J("formGroup",s.form),t.xp6(11),t.Q6J("options",s.IncludeQuantitiesOptions),t.xp6(1),t.Q6J("options",s.ShowLotsOptions),t.xp6(1),t.Q6J("options",s.ReportUnitsOptions),t.xp6(1),t.Q6J("options",s.ReportTitleOptions),t.xp6(1),t.Q6J("options",s.OutputOptions))},dependencies:[_.m,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,o.KE,o.hX,d.Nt,u.a8,u.dk,u.dn,u.n5,i.j,E.L]}),p})()}}]);