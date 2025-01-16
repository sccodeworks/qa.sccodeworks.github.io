"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[4274],{39505:(P,C,s)=>{s.d(C,{L:()=>U});var m=s(24006),f=s(59549),g=s(69751),O=s(68675),t=s(54004),n=s(94650),h=s(36895),R=s(47957),I=s(3238),T=s(44144);function d(a,_){if(1&a&&(n.TgZ(0,"mat-option",4),n._uU(1),n.qZA()),2&a){const i=_.$implicit;n.Q6J("value",i),n.xp6(1),n.Oqu(i)}}let U=(()=>{class a{constructor(i){this.fb=i,this.options=[],this.value="",this.placeholder="",this.id="",this.ngControl=null,this.label="",this.appearance="outline",this.describedBy="",this.touched=!1,this.focused=!1,this.empty=!1,this.required=!1,this.disabled=!1,this.shouldLabelFloat=!1,this.formControlName="",this.errorState=!1,this.previousValue="",this.onInput=l=>{},this.onChange=l=>{},this.onTouched=()=>{},this.control=this.fb.control(""),this.stateChanges=new g.y,this.filteredOptions=this.control.valueChanges.pipe((0,O.O)(this.value),(0,t.U)(l=>this._filter(l)))}setDescribedByIds(i){}onContainerClick(i){}markAsTouched(){this.touched||(this.touched=!0,this.onTouched())}writeValue(i){null!=i&&(this.control.setValue(i),this.value=i)}registerOnChange(i){this.onChange=i}registerOnTouched(i){this.onTouched=i}setDisabledState(i){this.disabled=i}_filter(i){if(null==i||0==i.length)return this.options;const l=i.toLowerCase(),c=this.options.filter(A=>A.toLowerCase().includes(l));return!this.disabled&&1===c.length&&this.control.value!=c[0]&&i.length>=(this.previousValue?.length??0)&&this.control.setValue(c[0]),this.onChange(this.control.value),this.previousValue=this.control.value,c}}return a.\u0275fac=function(i){return new(i||a)(n.Y36(m.qu))},a.\u0275cmp=n.Xpm({type:a,selectors:[["custom-input-autocomplete"]],hostVars:1,hostBindings:function(i,l){2&i&&n.uIk("aria-describedby",l.describedBy)},inputs:{options:"options",value:"value",placeholder:"placeholder",id:"id",ngControl:"ngControl",label:"label",appearance:"appearance"},features:[n._Bn([{provide:m.JU,multi:!0,useExisting:a},{provide:f.Eo,useExisting:a}],[{provide:m.gN,useExisting:m.sg}])],decls:8,vars:8,consts:[[3,"appearance"],["matInput","",3,"id","formControl","matAutocomplete"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(i,l){if(1&i&&(n.TgZ(0,"mat-form-field",0)(1,"mat-label"),n._uU(2),n.qZA(),n._UZ(3,"input",1),n.TgZ(4,"mat-autocomplete",null,2),n.YNc(6,d,2,2,"mat-option",3),n.ALo(7,"async"),n.qZA()()),2&i){const c=n.MAs(5);n.Q6J("appearance",l.appearance),n.xp6(2),n.Oqu(l.label),n.xp6(1),n.Q6J("id",l.id)("formControl",l.control)("matAutocomplete",c),n.xp6(3),n.Q6J("ngForOf",n.lcZ(7,6,l.filteredOptions))}},dependencies:[h.sg,m.Fj,m.JJ,m.oH,R.XC,R.ZL,I.ey,f.KE,f.hX,T.Nt,h.Ov]}),a})()},34274:(P,C,s)=>{s.r(C),s.d(C,{ItemBalanceReportsComponent:()=>L});var m=s(50692),f=s(70879),g=s(35226),O=s.n(g),t=s(94650),n=s(24006),h=s(19132),R=s(78568),I=s(36895),T=s(4859),d=s(59549),U=s(44144),a=s(73546),_=s(39505);function i(r,u){1&r&&(t.TgZ(0,"div"),t._uU(1,"File Extension is required."),t.qZA())}function l(r,u){1&r&&(t.TgZ(0,"div"),t._uU(1,"Please enter a valid File Extension."),t.qZA())}function c(r,u){if(1&r&&(t.TgZ(0,"mat-error"),t.YNc(1,i,2,0,"div",23),t.YNc(2,l,2,0,"div",23),t.qZA()),2&r){const e=t.oxw(2);let o,p;t.xp6(1),t.Q6J("ngIf",null==(o=e.form.get("FileExtension"))||null==o.errors?null:o.errors.required),t.xp6(1),t.Q6J("ngIf",null==(p=e.form.get("FileExtension"))||null==p.errors?null:p.errors.FileExtension)}}function A(r,u){if(1&r&&(t.TgZ(0,"custom-input-autocomplete",22),t.YNc(1,c,3,2,"mat-error",23),t.qZA()),2&r){const e=t.oxw();let o;t.Q6J("options",e.fileExtensionOptions),t.xp6(1),t.Q6J("ngIf",(null==(o=e.form.get("FileExtension"))?null:o.invalid)&&((null==(o=e.form.get("FileExtension"))?null:o.dirty)||(null==(o=e.form.get("FileExtension"))?null:o.touched)))}}function v(r,u){1&r&&(t.TgZ(0,"div"),t._uU(1,"Contact Type is required."),t.qZA())}function S(r,u){1&r&&(t.TgZ(0,"div"),t._uU(1,"Please enter a Contact Type."),t.qZA())}function M(r,u){if(1&r&&(t.TgZ(0,"mat-error"),t.YNc(1,v,2,0,"div",23),t.YNc(2,S,2,0,"div",23),t.qZA()),2&r){const e=t.oxw(2);let o,p;t.xp6(1),t.Q6J("ngIf",null==(o=e.form.get("ContactType"))||null==o.errors?null:o.errors.required),t.xp6(1),t.Q6J("ngIf",null==(p=e.form.get("ContactType"))||null==p.errors?null:p.errors.ContactType)}}function B(r,u){if(1&r&&(t.TgZ(0,"mat-form-field",6)(1,"mat-label"),t._uU(2,"Contact Type"),t.qZA(),t._UZ(3,"input",24),t.YNc(4,M,3,2,"mat-error",23),t.qZA()),2&r){const e=t.oxw();let o;t.xp6(4),t.Q6J("ngIf",(null==(o=e.form.get("ContactType"))?null:o.invalid)&&((null==(o=e.form.get("ContactType"))?null:o.dirty)||(null==(o=e.form.get("ContactType"))?null:o.touched)))}}let L=(()=>{class r{constructor(e,o,p,E){this.fb=e,this.router=o,this.route=p,this.ReportsService=E,this.IncludeQuantyOptions=["*ALL","*AVAIL","*DAMAGE","*HELD","*USER1","*USER2","*USER3","*USER4","*NEGATIVE","*OVERALLOC","*LOWSTOCK","*NONZERO"],this.ShowLocationsOptions=["N","Y"],this.ShowLotsOptions=["N","Y"],this.ShowSerialsOptions=["N","Y"],this.UseItemCrossRefeOptions=["N","Y"],this.ReportOrderOptions=["*ITEM","*ITMSEQ","*DESCRIPT","*PRODUCT"],this.ReportUnitsOptions=["*QUANTITY","*PALLETS","*CASES","*CWEIGHT","*CUBES","*LP","*GROSS","*EACHES","*PACK","*INNER PACK"],this.ReportTitleOptions=["Item Balance Report"],this.OutputOptions=["*REPORT","*EMAIL"],this.fileExtensionOptions=["CSV","TXT","HTML","XLM"],this.user=localStorage.getItem("userName")}ngOnInit(){this.form=this.fb.group({StorerNumber:"",Building:"",Quantities:[this.IncludeQuantyOptions[0]],ShowLocations:[this.ShowLocationsOptions[0]],Showlots:[this.ShowLotsOptions[0]],ShowSerials:[this.ShowSerialsOptions[0]],ItemCrossReference:[this.UseItemCrossRefeOptions[0]],ReportOrder:[this.ReportOrderOptions[0]],ReportUnits:[this.ReportUnitsOptions[0]],ReportTitle:[this.ReportTitleOptions[0]],OutPut:[this.OutputOptions[0]],FileExtension:[this.fileExtensionOptions[0]],ContactType:"",Email:""}),this.form.get("OutPut")?.valueChanges.subscribe(e=>{"*EMAIL"===e?this.form.get("FileExtension")?.setValue("CSV"):this.form.get("FileExtension")?.setValue(this.fileExtensionOptions[0])}),this.form.get("OutPut")?.valueChanges.subscribe(e=>{this.FileextensionContactype()||(this.form.get("FileExtension")?.setValue(""),this.form.get("ContactType")?.setValue(""))})}FileextensionContactype(){return"*EMAIL"===this.form.get("OutPut")?.value}ngOnDestroy(){this.ItemBalanceSubscription&&this.ItemBalanceSubscription.unsubscribe()}ItemBalance(){const e=this.form.value;"*ITEM"===e.ReportOrder&&(e.ReportOrder="ITEM"),"*ITMSEQ"===e.ReportOrder&&(e.ReportOrder="ITSEQ#"),"*DESCRIPT"===e.ReportOrder&&(e.ReportOrder="4"),"*PRODUCT"===e.ReportOrder&&(e.ReportOrder="ITPDCD"),"*QUANTITY"===e.ReportUnits&&(e.ReportUnits="Qty"),"*PALLETS"===e.ReportUnits&&(e.ReportUnits="Pallets"),"*CASES"===e.ReportUnits&&(e.ReportUnits="Cases"),"*CWEIGHT"===e.ReportUnits&&(e.ReportUnits="100 Wt"),"*CUBES"===e.ReportUnits&&(e.ReportUnits="Cubes"),"*LP"===e.ReportUnits&&(e.ReportUnits="LP"),"*GROSS"===e.ReportUnits&&(e.ReportUnits="Gross"),"*EACHES"===e.ReportUnits&&(e.ReportUnits="EA"),"*PACK"===e.ReportUnits&&(e.ReportUnits="PK"),"*INNER PACK"===e.ReportUnits&&(e.ReportUnits="IP"),this.ItemBalanceSubscription&&this.ItemBalanceSubscription.unsubscribe(),this.ItemBalanceSubscription=this.ReportsService.ItemBalanceReport(e.StorerNumber,e.Building,e.Quantities,e.ShowLocations,e.Showlots,e.ShowSerials,e.ItemCrossReference,e.ReportOrder,e.ReportUnits,e.ReportTitle,e.OutPut,e.FileExtension,e.ContactType,e.Email).subscribe(o=>{const E=o[0].data[o[0].data.length-1].value;"Successfully Submitted"===E?(this.successMessage(E),this.router.navigate(["/main-nav/ItemBalanceReports/read"])):this.failureMessage(E)})}successMessage(e){O().fire(e,"","success")}failureMessage(e){O().fire(e,"","error")}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(n.qu),t.Y36(h.F0),t.Y36(h.gz),t.Y36(R.F))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-item-balance-reports"]],standalone:!0,features:[t.jDz],decls:33,vars:12,consts:[[1,"over-Flow"],[1,"title"],[1,"tally-serach-form"],[3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","StorerNumber"],["matInput","","formControlName","Building"],["appearance","outline","formControlName","Quantities","label","Include Quantities ",3,"options"],["appearance","outline","formControlName","ShowLocations","label","Show Locations ",3,"options"],["appearance","outline","formControlName","Showlots","label"," Show Lots ",3,"options"],["appearance","outline","formControlName","ShowSerials","label"," Show Serials ",3,"options"],["appearance","outline","formControlName","ItemCrossReference","label"," Use Item Cross-Reference ",3,"options"],["appearance","outline","formControlName","ReportOrder","label","Report Order",1,"full-width",3,"options"],["appearance","outline","formControlName","ReportUnits","label","Report Units",1,"full-width",3,"options"],["appearance","outline","formControlName","ReportTitle","label","Report Title",1,"full-width",3,"options"],["appearance","outline","formControlName","OutPut","label","Output",1,"full-width",3,"options"],["appearance","outline","class","full-width","formControlName","FileExtension","label","File Extension",3,"options",4,"ngIf"],["appearance","outline","class","full-width",4,"ngIf"],["matInput","","formControlName","Email","placeholder","Enter your email"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"],["appearance","outline","formControlName","FileExtension","label","File Extension",1,"full-width",3,"options"],[4,"ngIf"],["matInput","","formControlName","ContactType","placeholder","Contact Type"]],template:function(e,o){1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3," Item Balance Reports "),t.qZA()(),t.TgZ(4,"mat-card-content",2)(5,"form",3)(6,"div",4)(7,"div",5)(8,"mat-form-field",6)(9,"mat-label"),t._uU(10,"Storer Number"),t.qZA(),t._UZ(11,"input",7),t.qZA(),t.TgZ(12,"mat-form-field",6)(13,"mat-label"),t._uU(14,"Building Number"),t.qZA(),t._UZ(15,"input",8),t.qZA(),t._UZ(16,"custom-input-autocomplete",9)(17,"custom-input-autocomplete",10)(18,"custom-input-autocomplete",11)(19,"custom-input-autocomplete",12)(20,"custom-input-autocomplete",13)(21,"custom-input-autocomplete",14)(22,"custom-input-autocomplete",15)(23,"custom-input-autocomplete",16)(24,"custom-input-autocomplete",17),t.YNc(25,A,2,2,"custom-input-autocomplete",18),t.YNc(26,B,5,1,"mat-form-field",19),t.TgZ(27,"mat-form-field",6)(28,"mat-label"),t._uU(29,"Email"),t.qZA(),t._UZ(30,"input",20),t.qZA()()(),t.TgZ(31,"button",21),t.NdJ("click",function(){return o.ItemBalance()}),t._uU(32,"Submit"),t.qZA()()()()),2&e&&(t.xp6(5),t.Q6J("formGroup",o.form),t.xp6(11),t.Q6J("options",o.IncludeQuantyOptions),t.xp6(1),t.Q6J("options",o.ShowLocationsOptions),t.xp6(1),t.Q6J("options",o.ShowLotsOptions),t.xp6(1),t.Q6J("options",o.ShowSerialsOptions),t.xp6(1),t.Q6J("options",o.UseItemCrossRefeOptions),t.xp6(1),t.Q6J("options",o.ReportOrderOptions),t.xp6(1),t.Q6J("options",o.ReportUnitsOptions),t.xp6(1),t.Q6J("options",o.ReportTitleOptions),t.xp6(1),t.Q6J("options",o.OutputOptions),t.xp6(1),t.Q6J("ngIf",o.FileextensionContactype()),t.xp6(1),t.Q6J("ngIf",o.FileextensionContactype()))},dependencies:[f.m,I.O5,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,T.lW,d.TO,d.KE,d.hX,U.Nt,a.a8,a.dk,a.dn,a.n5,m.j,_.L],styles:[".dropdown-icon[_ngcontent-%COMP%]{position:relative;right:20px;color:#10069a;transition:transform .3s ease}.rotate-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"]}),r})()}}]);