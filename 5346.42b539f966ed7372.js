"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[5346],{39505:(K,R,s)=>{s.d(R,{L:()=>l});var p=s(24006),f=s(59549),h=s(69751),Z=s(68675),P=s(54004),e=s(94650),L=s(36895),E=s(47957),U=s(3238),o=s(44144);function i(a,d){if(1&a&&(e.TgZ(0,"mat-option",4),e._uU(1),e.qZA()),2&a){const n=d.$implicit;e.Q6J("value",n),e.xp6(1),e.Oqu(n)}}let l=(()=>{class a{constructor(n){this.fb=n,this.options=[],this.value="",this.placeholder="",this.id="",this.ngControl=null,this.label="",this.appearance="outline",this.describedBy="",this.touched=!1,this.focused=!1,this.empty=!1,this.required=!1,this.disabled=!1,this.shouldLabelFloat=!1,this.formControlName="",this.errorState=!1,this.previousValue="",this.onInput=m=>{},this.onChange=m=>{},this.onTouched=()=>{},this.control=this.fb.control(""),this.stateChanges=new h.y,this.filteredOptions=this.control.valueChanges.pipe((0,Z.O)(this.value),(0,P.U)(m=>this._filter(m)))}setDescribedByIds(n){}onContainerClick(n){}markAsTouched(){this.touched||(this.touched=!0,this.onTouched())}writeValue(n){null!=n&&(this.control.setValue(n),this.value=n)}registerOnChange(n){this.onChange=n}registerOnTouched(n){this.onTouched=n}setDisabledState(n){this.disabled=n}_filter(n){if(null==n||0==n.length)return this.options;const m=n.toLowerCase(),g=this.options.filter(C=>C.toLowerCase().includes(m));return!this.disabled&&1===g.length&&this.control.value!=g[0]&&n.length>=(this.previousValue?.length??0)&&this.control.setValue(g[0]),this.onChange(this.control.value),this.previousValue=this.control.value,g}}return a.\u0275fac=function(n){return new(n||a)(e.Y36(p.qu))},a.\u0275cmp=e.Xpm({type:a,selectors:[["custom-input-autocomplete"]],hostVars:1,hostBindings:function(n,m){2&n&&e.uIk("aria-describedby",m.describedBy)},inputs:{options:"options",value:"value",placeholder:"placeholder",id:"id",ngControl:"ngControl",label:"label",appearance:"appearance"},features:[e._Bn([{provide:p.JU,multi:!0,useExisting:a},{provide:f.Eo,useExisting:a}],[{provide:p.gN,useExisting:p.sg}])],decls:8,vars:8,consts:[[3,"appearance"],["matInput","",3,"id","formControl","matAutocomplete"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(n,m){if(1&n&&(e.TgZ(0,"mat-form-field",0)(1,"mat-label"),e._uU(2),e.qZA(),e._UZ(3,"input",1),e.TgZ(4,"mat-autocomplete",null,2),e.YNc(6,i,2,2,"mat-option",3),e.ALo(7,"async"),e.qZA()()),2&n){const g=e.MAs(5);e.Q6J("appearance",m.appearance),e.xp6(2),e.Oqu(m.label),e.xp6(1),e.Q6J("id",m.id)("formControl",m.control)("matAutocomplete",g),e.xp6(3),e.Q6J("ngForOf",e.lcZ(7,6,m.filteredOptions))}},dependencies:[L.sg,p.Fj,p.JJ,p.oH,E.XC,E.ZL,U.ey,f.KE,f.hX,o.Nt,L.Ov]}),a})()},46546:(K,R,s)=>{s.d(R,{f:()=>L});var p=s(80529),f=s(75625),h=s(70262),Z=s(62843),P=s(92340),e=s(94650);let L=(()=>{class E{constructor(o){this.httpClient=o,this.url=P.N.API_BASE_URL,this.httpHeader={headers:new p.WM({"Content-Type":"application/json"})}}getLedgerCodes(o,i,l,a){return this.httpClient.get(this.url+`/LedgerCodes/read?user=${o}&LedgerCode=${i}&recordsPerPage=${l}&pageNo=${a}`)}getAll(o){return this.httpClient.get(this.url+`/LedgerCodes/readAll?user=${o}`)}createLedgerCodes(o,i,l,a,d,n){return this.httpClient.post(this.url+"/LedgerCodes/create",{LELEGC:o,LELEGS:i,LEDESC:l,LECC:a,LECSFX:d,user:n}).pipe((0,f.X)(1),(0,h.K)(this.httpError))}updateLedgerCodes(o,i,l,a,d,n){return this.httpClient.put(this.url+"/LedgerCodes/update",{LELEGC:o,LELEGS:i,LEDESC:l,LECC:a,LECSFX:d,user:n}).pipe((0,f.X)(1),(0,h.K)(this.httpError))}deleteLedgerCodes(o,i,l){return this.httpClient.delete(this.url+`/LedgerCodes/delete?user=${o}&LedgerCode=${i}&LedgerSubCode=${l}`)}LedgerCodesConsolidate(o,i,l,a){return this.httpClient.put(this.url+"/LedgerCodes/consolidate",{LedgerCode1:o,LedgerSubCode1:i,LedgerCode2:l,LedgerSubCode2:a}).pipe((0,f.X)(1),(0,h.K)(this.httpError))}getLCTransactions(o,i,l,a,d){return this.httpClient.get(this.url+`/LedgerCodes/transactions/read?user=${o}&LedgerCode=${i}&LedgerSubCode=${l}&recordsPerPage=${a}&pageNo=${d}`)}updateLcTransactions(o,i,l,a,d,n,m,g){return this.httpClient.put(this.url+"/LedgerCodes/transactions/update",{user:o,InvoiceNum:i,SequenceNum:l,InvoiceDate:a,LineAmount:d,LedgerCode:n,LedgerSubCode:m,Building:g}).pipe((0,f.X)(1),(0,h.K)(this.httpError))}getLctInvInquiry(o,i){return this.httpClient.get(this.url+`/LedgerCodes/transactions/InvInquiry/read?user=${o}&InvoiceNum=${i}`)}getLctAdjInquiry(o,i){return this.httpClient.get(this.url+`/LedgerCodes/transactions/AdjInquiry/read?user=${o}&InvoiceNum=${i}`)}getLCAttributes(o,i,l,a){return this.httpClient.get(this.url+`/LedgerCodes/attributes/read?user=${o}&key=${i}&recordsPerPage=${l}&pageNo=${a}`)}LCAttributesCreate(o,i,l,a,d,n,m,g){return this.httpClient.post(this.url+"/LedgerCodes/attributes/create",{user:o,EAFLID:i,EAKEY:l,EAATRB:a,EAVALU:d,EASTAT:n,EATMST:m,EAUSER:g}).pipe((0,f.X)(1),(0,h.K)(this.httpError))}LCAttributesUpdate(o,i,l,a,d,n,m,g){return this.httpClient.put(this.url+"/LedgerCodes/attributes/update",{EAFLID:o,EAKEY:i,EAATRB:l,EAVALU:a,EASTAT:d,EATMST:n,EAUSER:m,user:g}).pipe((0,f.X)(1),(0,h.K)(this.httpError))}LCAttributesDelete(o,i){return this.httpClient.delete(this.url+`/LedgerCodes/attributes/delete?key=${o}&attribute=${i}`)}RevenueDistReport(o,i,l,a,d,n,m,g,C,D,T,A,I,S){return this.httpClient.put(this.url+"/LedgerCodes/LedgerCodesRevReport/update",{LedgerCode:o,LedgerCodeSuffix:i,StartDate:l,EndDate:a,StartingCustomer:d,StartingCustomerSuffix:n,StartingCustomerSuffix2:m,EndingCustomer:g,EndingCustomerSuffix:C,EndingCustomerSuffix2:D,StartingBuildingNumber:T,EndingBuildingNumber:A,OutPut:I,Email:S}).pipe((0,f.X)(1),(0,h.K)(this.httpError))}LCRevInquiry(o,i,l,a,d){return this.httpClient.get(this.url+`/LedgerCodes/LCRevInquiry/read?user=${o}&LedgerCode=${i}&LedgerSubCode=${l}&recordsPerPage=${a}&pageNo=${d}`)}ReceivableDetailsRevInquiryForm(o,i,l,a,d,n,m,g,C,D,T,A,I,S,M){const N=(new p.LE).set("user",o||"").set("WKLEGC",i).set("WKLEGS",l).set("StDate",a).set("EndDate",d).set("Stcust",n||"0000").set("Stcustf",m||" ").set("Stcustf2",g||" ").set("Endcust",C||"9999").set("Ecustsuf",D||" ").set("Endcstf2",T||" ").set("Stbldng",A||"").set("Endbldng",I||"999").set("Output",S).set("Emailadd",M||" ");return this.httpClient.get(`${this.url}/LedgerCodes/ReceivableDetailsRevInquiry/read`,{params:N})}LedgercodeRevReport(o,i,l,a,d,n,m,g,C,D,T,A,I,S,M){const N=(new p.LE).set("user",o||"").set("WKLEGC",i).set("WKLEGS",l).set("StDate",a).set("EndDate",d).set("Stcust",n||"0000").set("Stcustf",m||" ").set("Stcustf2",g||" ").set("Endcust",C||"9999").set("Ecustsuf",D||" ").set("Endcstf2",T||" ").set("Stbldng",A||" ").set("Endbldng",I||"999").set("Output",S||"*DISPLAY").set("Emailadd",M||" ");return this.httpClient.get(`${this.url}/LedgerCodes/LedgercodeRevReport/read`,{params:N})}ReceivableDetailsRevInquiry(o,i,l,a,d){const n=(new p.LE).set("user",o||"").set("WKLEGC",i).set("WKLEGS",l).set("StDate",a).set("EndDate",d);return this.httpClient.get(`${this.url}/LedgerCodes/ReceivableDetailsRevInquiry/read`,{params:n})}httpError(o){let i="";return i=o.error instanceof ErrorEvent?o.error.message:`Error Code: ${o.status}\nMessage: ${o.message}`,console.log(i),(0,Z._)(()=>new Error(i))}}return E.\u0275fac=function(o){return new(o||E)(e.LFG(p.eN))},E.\u0275prov=e.Yz7({token:E,factory:E.\u0275fac,providedIn:"root"}),E})()},25346:(K,R,s)=>{s.r(R),s.d(R,{LedgercodeRevenueComponent:()=>X});var p=s(24006),f=s(35226),h=s.n(f),Z=s(70879),P=s(50692),e=s(94650),L=s(19132),E=s(65412),U=s(46546),o=s(36895),i=s(97392),l=s(4859),a=s(59549),d=s(44144),n=s(73546),m=s(39505);function g(u,c){1&u&&(e.TgZ(0,"mat-error"),e._uU(1," Ledger Code is required. "),e.qZA())}function C(u,c){1&u&&(e.TgZ(0,"mat-error"),e._uU(1," Ledger Code must be up to 4 digits. "),e.qZA())}function D(u,c){1&u&&(e.TgZ(0,"mat-error"),e._uU(1," Ledger Code Suffix is required. "),e.qZA())}function T(u,c){1&u&&(e.TgZ(0,"mat-error"),e._uU(1," Ledger Code Suffix must be up to 4 digits. "),e.qZA())}function A(u,c){1&u&&(e.TgZ(0,"mat-error"),e._uU(1," Start Date is required. "),e.qZA())}function I(u,c){1&u&&(e.TgZ(0,"mat-error"),e._uU(1," Invalid date format. Use DD-MM-YYYY. "),e.qZA())}function S(u,c){1&u&&(e.TgZ(0,"mat-error"),e._uU(1," End Date is required. "),e.qZA())}function M(u,c){1&u&&(e.TgZ(0,"mat-error"),e._uU(1," Invalid date format. Use DD-MM-YYYY. "),e.qZA())}function N(u,c){1&u&&(e.TgZ(0,"mat-error"),e._uU(1," Starting Customer must be a number with up to 4 digits or *FIRST. "),e.qZA())}function Y(u,c){1&u&&(e.TgZ(0,"mat-error"),e._uU(1,' Ending Customer must be a number with up to 4 digits or *LAST". '),e.qZA())}function J(u,c){1&u&&(e.TgZ(0,"mat-error"),e._uU(1,' Ending Building Number must be a number with up to 3 digits or *"LAST. '),e.qZA())}function F(u,c){1&u&&(e.TgZ(0,"div"),e._uU(1,"Email is required."),e.qZA())}function Q(u,c){1&u&&(e.TgZ(0,"div"),e._uU(1,"Please enter a valid email address."),e.qZA())}function G(u,c){if(1&u&&(e.TgZ(0,"mat-error"),e.YNc(1,F,2,0,"div",9),e.YNc(2,Q,2,0,"div",9),e.qZA()),2&u){const t=e.oxw(2);let r,_;e.xp6(1),e.Q6J("ngIf",null==(r=t.form.get("Emailadd"))||null==r.errors?null:r.errors.required),e.xp6(1),e.Q6J("ngIf",null==(_=t.form.get("Emailadd"))||null==_.errors?null:_.errors.Emailadd)}}function j(u,c){if(1&u&&(e.TgZ(0,"mat-form-field",14)(1,"mat-label"),e._uU(2,"Email:"),e.qZA(),e._UZ(3,"input",25),e.YNc(4,G,3,2,"mat-error",9),e.qZA()),2&u){const t=e.oxw();let r;e.xp6(4),e.Q6J("ngIf",(null==(r=t.form.get("Emailadd"))?null:r.invalid)&&((null==(r=t.form.get("Emailadd"))?null:r.dirty)||(null==(r=t.form.get("Emailadd"))?null:r.touched)))}}let X=(()=>{class u{constructor(t,r,_,v,B){this.fb=t,this.router=r,this.route=_,this.matDialog=v,this.LedgerCodesService=B,this.receivables="/main-nav/ledgerCode/revenue-inquiry-receivables",this.LedgerRead="/main-nav/ledgerCode/read",this.user=localStorage.getItem("userName"),this.StartingCustomerOptions=["*FIRST"],this.EndingCustomerOptions=["*LAST"],this.StartingBuildingNumberOptions=["*FIRST"],this.EndingBuildingNumberOptions=["*LAST"],this.OutputOptions=["*DISPLAY"]}ngOnInit(){this.element=history.state,this.form=this.fb.group({WKLEGC:[this.prefixWithZeros(this.element.LELEGC,4),[p.kI.required,this.specificPatternValidator()]],WKLEGS:[this.prefixWithZeros(this.element.LELEGS,2),[p.kI.required,this.specificPatternValidator()]],LEDESC:this.element.LEDESC,StDate:["",[p.kI.required,this.dateValidator()]],EndDate:["",[p.kI.required,this.dateValidator()]],Stcust:[this.StartingCustomerOptions[0],[this.startingCustomerValidator()]],Stcustf:"",Stcustf2:"",Endcust:[this.EndingCustomerOptions[0],[this.endingCustomerValidator()]],Ecustsuf:"",Endcstf2:"",Stbldng:"",Endbldng:[this.EndingBuildingNumberOptions[0],[this.endingBuildingNumber()]],Output:"*DISPLAY",Emailadd:["",[this.emailValidator()]]}),this.form.get("Output")?.valueChanges.subscribe(t=>{this.shouldDisplayEmailField()||this.form.get("Emailadd")?.setValue("")}),this.form.get("Stcust")?.valueChanges.subscribe(t=>{"*FIRST"===t&&this.form.get("Stcust")?.setValue("0000",{emitEvent:!1})}),this.form.get("Endcust")?.valueChanges.subscribe(t=>{"*LAST"===t&&this.form.get("Endcust")?.setValue("9999",{emitEvent:!1})}),this.form.get("Endbldng")?.valueChanges.subscribe(t=>{"*LAST"===t&&this.form.get("Endbldng")?.setValue("999",{emitEvent:!1})})}shouldDisplayEmailField(){const t=this.form.get("Output")?.value;return"*BOTH"===t||"*EMAIL"===t}maxLengthValidator(t){return r=>{const _=r.value;return _&&_.length<=t?null:{maxLengthExceeded:!0}}}alphanumericValidator(){return t=>/^[a-zA-Z0-9 *]*$/.test(t.value)?null:{invalidCharacter:!0}}specificPatternValidator(){return t=>/^\d{0,4}$/.test(t.value)?null:{invalidPattern:!0}}emailValidator(){return t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.value)?null:{invalidEmail:!0}}dateValidator(){return t=>/^\d{4}-\d{2}-\d{2}$/.test(t.value)?null:{invalidDate:!0}}startingCustomerValidator(){return t=>{const r=t.value;return/^\d{0,4}$/.test(r)&&r.length<=4||"*FIRST"===r?null:{invalidStartingCustomer:!0}}}endingCustomerValidator(){return t=>{const r=t.value;return/^\d{0,4}$/.test(r)&&r.length<=4||"*LAST"===r?null:{invalidEndingCustomer:!0}}}endingBuildingNumber(){return t=>{const r=t.value;return/^\d{0,3}$/.test(r)&&r.length<=4||"*LAST"===r?null:{invalidEndingBuildingNumber:!0}}}prefixWithZeros(t,r){return String(t).padStart(r,"0")}RevenueDistReport(){const t=this.form.value;"*FIRST"===t.Stcust&&(t.Stcust="0000"),"*LAST"===t.Endcust&&(t.Endcust="9999"),"*LAST"===t.Endbldng&&(t.Endbldng="999"),this.LedgerCodesServiceSubscription&&this.LedgerCodesServiceSubscription.unsubscribe(),this.LedgerCodesServiceSubscription=this.LedgerCodesService.ReceivableDetailsRevInquiryForm(this.user,t.WKLEGC,t.WKLEGS,t.StDate,t.EndDate,t.Stcust,t.Stcustf,t.Stcustf2,t.Endcust,t.Ecustsuf,t.Endcstf2,t.Stbldng,t.Endbldng,t.Output,t.Emailadd).subscribe(r=>{this.firstCall=r;const v=this.firstCall?.[0]?.data[(this.firstCall?.[0]?.data?.length||0)-1]?.value,O=JSON.parse(v)?.returnedData?.message?.trim()||"No value found",b=t.Output;"*DISPLAY"===b?this.navigateToReceivablesForm(r[0].data,t,b,O):"*EMAIL"!==b&&"*PRINTER"!==b||"Successfully Submitted"!==O?this.failureMessage(`Unexpected response: ${O}`):this.successMessage(O)})}navigateToReceivablesForm(t,r,_,v){this.router.navigateByUrl(this.receivables,{state:{data:t,formData:r,output:_,message:v}})}successMessage(t){h().fire({icon:"success",title:"",text:t})}failureMessage(t){h().fire({icon:"error",title:"",text:t})}onBack(){this.router.navigate([this.LedgerRead])}}return u.\u0275fac=function(t){return new(t||u)(e.Y36(p.qu),e.Y36(L.F0),e.Y36(L.gz),e.Y36(E.uw),e.Y36(U.f))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-ledgercode-revenue"]],standalone:!0,features:[e.jDz],decls:62,vars:18,consts:[[1,"over-Flow"],[1,"title"],["mat-button","",1,"backButton","go-back-btn",3,"click"],[1,"tally-serach-form"],[3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","WKLEGC"],[4,"ngIf"],["matInput","","formControlName","WKLEGS"],["type","date","matInput","","formControlName","StDate"],["type","date","matInput","","formControlName","EndDate"],["appearance","outline","formControlName","Stcust","label","Starting Customer ",3,"options"],["appearance","outline",1,"full-width2"],["matInput","","formControlName","Stcustf"],["matInput","","formControlName","Stcustf2"],["appearance","outline","formControlName","Endcust","label","Ending Customer ",3,"options"],["matInput","","formControlName","Ecustsuf"],["matInput","","formControlName","Endcstf2"],["appearance","outline","formControlName","Stbldng","label","Starting Building Number  ",3,"options"],["appearance","outline","formControlName","Endbldng","label","Ending Building Number  ",3,"options"],["appearance","outline","formControlName","Output","label","Output Type",1,"full-width",3,"options"],["appearance","outline","class","full-width2",4,"ngIf"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"],["matInput","","formControlName","Emailadd","placeholder","Enter your email"]],template:function(t,r){if(1&t&&(e.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1)(3,"button",2),e.NdJ("click",function(){return r.onBack()}),e.TgZ(4,"mat-icon"),e._uU(5,"navigate_before "),e.qZA()(),e._uU(6," Ledger Codes Revenue inquiry "),e.qZA()(),e.TgZ(7,"mat-card-content",3)(8,"form",4)(9,"div",5)(10,"div",6)(11,"mat-form-field",7)(12,"mat-label"),e._uU(13,"Ledger Code "),e.qZA(),e._UZ(14,"input",8),e.YNc(15,g,2,0,"mat-error",9),e.YNc(16,C,2,0,"mat-error",9),e.qZA(),e.TgZ(17,"mat-form-field",7)(18,"mat-label"),e._uU(19,"Ledger Code Suffix "),e.qZA(),e._UZ(20,"input",10),e.YNc(21,D,2,0,"mat-error",9),e.YNc(22,T,2,0,"mat-error",9),e.qZA(),e.TgZ(23,"mat-form-field",7)(24,"mat-label"),e._uU(25,"Start Date:"),e.qZA(),e._UZ(26,"input",11),e.YNc(27,A,2,0,"mat-error",9),e.YNc(28,I,2,0,"mat-error",9),e.qZA(),e.TgZ(29,"mat-form-field",7)(30,"mat-label"),e._uU(31,"End Date"),e.qZA(),e._UZ(32,"input",12),e.YNc(33,S,2,0,"mat-error",9),e.YNc(34,M,2,0,"mat-error",9),e.qZA(),e._UZ(35,"custom-input-autocomplete",13),e.YNc(36,N,2,0,"mat-error",9),e.TgZ(37,"mat-form-field",14)(38,"mat-label"),e._uU(39," Starting Customer Suffix "),e.qZA(),e._UZ(40,"input",15),e.qZA(),e.TgZ(41,"mat-form-field",14)(42,"mat-label"),e._uU(43," Starting Customer Suffix II "),e.qZA(),e._UZ(44,"input",16),e.qZA(),e._UZ(45,"custom-input-autocomplete",17),e.YNc(46,Y,2,0,"mat-error",9),e.TgZ(47,"mat-form-field",14)(48,"mat-label"),e._uU(49,"Ending Customer Suffix"),e.qZA(),e._UZ(50,"input",18),e.qZA(),e.TgZ(51,"mat-form-field",14)(52,"mat-label"),e._uU(53,"Ending Customer Suffix II"),e.qZA(),e._UZ(54,"input",19),e.qZA(),e._UZ(55,"custom-input-autocomplete",20)(56,"custom-input-autocomplete",21),e.YNc(57,J,2,0,"mat-error",9),e._UZ(58,"custom-input-autocomplete",22),e.YNc(59,j,5,1,"mat-form-field",23),e.qZA()(),e.TgZ(60,"button",24),e.NdJ("click",function(){return r.RevenueDistReport()}),e._uU(61,"Submit"),e.qZA()()()()),2&t){let _,v,B,O,b,W,x,y,$,V,q;e.xp6(8),e.Q6J("formGroup",r.form),e.xp6(7),e.Q6J("ngIf",null==(_=r.form.get("WKLEGC"))?null:_.hasError("required")),e.xp6(1),e.Q6J("ngIf",null==(v=r.form.get("WKLEGC"))?null:v.hasError("invalidPattern")),e.xp6(5),e.Q6J("ngIf",null==(B=r.form.get("WKLEGS"))?null:B.hasError("required")),e.xp6(1),e.Q6J("ngIf",null==(O=r.form.get("WKLEGS"))?null:O.hasError("invalidPattern")),e.xp6(5),e.Q6J("ngIf",null==(b=r.form.get("StDate"))?null:b.hasError("required")),e.xp6(1),e.Q6J("ngIf",null==(W=r.form.get("StDate"))?null:W.hasError("invalidDate")),e.xp6(5),e.Q6J("ngIf",null==(x=r.form.get("EndDate"))?null:x.hasError("required")),e.xp6(1),e.Q6J("ngIf",null==(y=r.form.get("EndDate"))?null:y.hasError("invalidDate")),e.xp6(1),e.Q6J("options",r.StartingCustomerOptions),e.xp6(1),e.Q6J("ngIf",null==($=r.form.get("Stcust"))?null:$.hasError("invalidStartingCustomer")),e.xp6(9),e.Q6J("options",r.EndingCustomerOptions),e.xp6(1),e.Q6J("ngIf",null==(V=r.form.get("Endcust"))?null:V.hasError("invalidEndingCustomer")),e.xp6(9),e.Q6J("options",r.StartingBuildingNumberOptions),e.xp6(1),e.Q6J("options",r.EndingBuildingNumberOptions),e.xp6(1),e.Q6J("ngIf",null==(q=r.form.get("EndingBuildingNumber"))?null:q.hasError("invalidEndingBuildingNumber")),e.xp6(1),e.Q6J("options",r.OutputOptions),e.xp6(1),e.Q6J("ngIf",r.shouldDisplayEmailField())}},dependencies:[Z.m,o.O5,p._Y,p.Fj,p.JJ,p.JL,p.sg,p.u,i.Hw,l.lW,a.TO,a.KE,a.hX,d.Nt,n.a8,n.dk,n.dn,n.n5,P.j,m.L]}),u})()}}]);