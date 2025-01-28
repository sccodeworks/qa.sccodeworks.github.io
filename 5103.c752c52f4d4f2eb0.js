"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[5103],{69501:(Z,L,i)=>{i.d(L,{J:()=>c});var s=i(94650),m=i(24006),f=i(47957),v=i(59549),S=i(44144),A=i(69751),D=i(68675),t=i(54004),O=i(70879),e=i(36895),r=i(3238);function a(u,g){if(1&u&&(s.TgZ(0,"mat-option",7),s._uU(1),s.qZA()),2&u){const o=g.$implicit;s.Q6J("value",o),s.xp6(1),s.hij(" ",o.description," ")}}function n(u,g){1&u&&(s.TgZ(0,"mat-option"),s._uU(1," No matching results "),s.qZA())}function p(u,g){1&u&&(s.TgZ(0,"mat-error"),s._uU(1," This field is required. Please select an option. "),s.qZA())}function h(u,g){1&u&&(s.TgZ(0,"mat-hint",8),s._uU(1," The option you entered is not valid. Please select one from the list. "),s.qZA())}let c=(()=>{class u{constructor(o){this.fb=o,this.options=[],this.value=null,this.placeholder="",this.id="",this.ngControl=null,this.label="",this.appearance="outline",this.isRequired=!1,this.selectionChange=new s.vpe,this.describedBy="",this.touched=!1,this.focused=!1,this.empty=!1,this.required=!1,this.disabled=!1,this.shouldLabelFloat=!1,this.formControlName="",this.errorState=!1,this.onChange=l=>{this.errorState=0===this._filter(this.control.value).length&&this.control.value.length>0},this.onTouched=()=>{},this.control=this.fb.control("",{validators:this.isRequired?[m.kI.required]:[]}),this.stateChanges=new A.y,this.filteredOptions=this.control.valueChanges.pipe((0,D.O)(""),(0,t.U)(l=>this._filter(l)))}onFocus(){(!this.control.value||"string"==typeof this.control.value&&""===this.control.value.trim())&&this.control.setValue("")}ngOnInit(){this.isRequired&&this.control.setValidators([m.kI.required]),this.control.updateValueAndValidity(),this.filteredOptions=this.control.valueChanges.pipe((0,D.O)(""),(0,t.U)(o=>this._filter(o)))}_filter(o){let l="";if("string"==typeof o)l=o.trim();else{if(!o||"object"!=typeof o)return this.options;l=o.value.toLowerCase()}if(""===l)return this.errorState=!1,this.options;const C=this.options.filter(E=>E.value.toLowerCase().includes(l)||E.description.toLowerCase().includes(l));return this.errorState=0===C.length&&l.length>0,C}writeValue(o){this.control.setValue(o&&"object"==typeof o?`${o.value} - ${o.description}`:"string"==typeof o?o:""),this.errorState=0===this._filter(this.control.value).length&&this.control.value.length>0}onOptionSelected(o){this.control.setValue(o);const[l,C]=o.description.split(" ");this.valueControlName.setValue(l),this.suffixControlName&&this.suffixControlName.setValue(C||""),this.onChange(o.value),this.selectionChange.emit(o.value),this.autocompleteTrigger.closePanel()}displayOptionText(o){return o?o.value:""}registerOnChange(o){this.onChange=o}registerOnTouched(o){this.onTouched=o}setDisabledState(o){this.disabled=o}setDescribedByIds(o){}onContainerClick(o){this.autocompleteTrigger&&this.autocompleteTrigger.openPanel()}markAsTouched(){this.touched||(this.touched=!0,this.onTouched())}}return u.\u0275fac=function(o){return new(o||u)(s.Y36(m.qu))},u.\u0275cmp=s.Xpm({type:u,selectors:[["app-dropdown"]],viewQuery:function(o,l){if(1&o&&s.Gf(f.ZL,7),2&o){let C;s.iGM(C=s.CRH())&&(l.autocompleteTrigger=C.first)}},hostVars:1,hostBindings:function(o,l){2&o&&s.uIk("aria-describedby",l.describedBy)},inputs:{options:"options",value:"value",placeholder:"placeholder",id:"id",ngControl:"ngControl",label:"label",appearance:"appearance",valueControlName:"valueControlName",suffixControlName:"suffixControlName",displayControlName:"displayControlName",isRequired:"isRequired"},outputs:{selectionChange:"selectionChange"},standalone:!0,features:[s._Bn([{provide:m.JU,multi:!0,useExisting:u},{provide:v.Eo,useExisting:u}],[{provide:m.gN,useExisting:m.sg}]),s.jDz],decls:12,vars:15,consts:[["appearance","outline",1,"full-width2"],["matInput","",3,"formControl","placeholder","matAutocomplete","focus","blur"],[3,"displayWith","optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["class","hint-error","style","color: red; font-size:12px",4,"ngIf"],[3,"value"],[1,"hint-error",2,"color","red","font-size","12px"]],template:function(o,l){if(1&o&&(s.TgZ(0,"mat-form-field",0)(1,"mat-label"),s._uU(2),s.qZA(),s.TgZ(3,"input",1),s.NdJ("focus",function(){return l.onFocus(),l.autocompleteTrigger.openPanel()})("blur",function(){return l.onTouched()}),s.qZA(),s.TgZ(4,"mat-autocomplete",2,3),s.NdJ("optionSelected",function(E){return l.onOptionSelected(E.option.value)}),s.YNc(6,a,2,2,"mat-option",4),s.ALo(7,"async"),s.YNc(8,n,2,0,"mat-option",5),s.ALo(9,"async"),s.qZA(),s.YNc(10,p,2,0,"mat-error",5),s.YNc(11,h,2,0,"mat-hint",6),s.qZA()),2&o){const C=s.MAs(5);let E;s.ekj("mat-form-field-invalid",l.control.invalid&&l.control.touched||l.errorState),s.xp6(2),s.Oqu(l.label),s.xp6(1),s.Q6J("formControl",l.control)("placeholder",l.placeholder)("matAutocomplete",C),s.xp6(1),s.Q6J("displayWith",l.displayOptionText),s.xp6(2),s.Q6J("ngForOf",s.lcZ(7,11,l.filteredOptions)),s.xp6(2),s.Q6J("ngIf",0===(null==(E=s.lcZ(9,13,l.filteredOptions))?null:E.length)&&l.control.value),s.xp6(2),s.Q6J("ngIf",l.control.invalid&&l.control.touched),s.xp6(1),s.Q6J("ngIf",l.errorState)}},dependencies:[O.m,e.sg,e.O5,m.Fj,m.JJ,m.oH,v.TO,v.KE,v.bx,v.hX,S.Nt,r.ey,e.Ov,m.UX,f.Bb,f.XC,f.ZL,v.lN,S.c]}),u})()},46546:(Z,L,i)=>{i.d(L,{f:()=>D});var s=i(80529),m=i(75625),f=i(70262),v=i(62843),S=i(92340),A=i(94650);let D=(()=>{class t{constructor(e){this.httpClient=e,this.url=S.N.API_BASE_URL,this.httpHeader={headers:new s.WM({"Content-Type":"application/json"})}}getLedgerCodes(e,r,a,n){return this.httpClient.get(this.url+`/LedgerCodes/read?user=${e}&LedgerCode=${r}&recordsPerPage=${a}&pageNo=${n}`)}getAll(e){return this.httpClient.get(this.url+`/LedgerCodes/readAll?user=${e}`)}createLedgerCodes(e,r,a,n,p,h){return this.httpClient.post(this.url+"/LedgerCodes/create",{LELEGC:e,LELEGS:r,LEDESC:a,LECC:n,LECSFX:p,user:h}).pipe((0,m.X)(1),(0,f.K)(this.httpError))}updateLedgerCodes(e,r,a,n,p,h){return this.httpClient.put(this.url+"/LedgerCodes/update",{LELEGC:e,LELEGS:r,LEDESC:a,LECC:n,LECSFX:p,user:h}).pipe((0,m.X)(1),(0,f.K)(this.httpError))}deleteLedgerCodes(e,r,a){return this.httpClient.delete(this.url+`/LedgerCodes/delete?user=${e}&LedgerCode=${r}&LedgerSubCode=${a}`)}LedgerCodesConsolidate(e,r,a,n){return this.httpClient.put(this.url+"/LedgerCodes/consolidate",{LedgerCode1:e,LedgerSubCode1:r,LedgerCode2:a,LedgerSubCode2:n}).pipe((0,m.X)(1),(0,f.K)(this.httpError))}getLCTransactions(e,r,a,n,p,h,c,u,g,o,l,C,E,d,_,T,M){const P=(new s.LE).set("user",e||"").set("ledgerCode",r||"").set("ledgerSubCode",a||"").set("startDate",n||"").set("endDate",p||"").set("startCust",h?h.toString():"0").set("startCustF",c||"").set("startCustF2",u||"").set("endCust",g?g.toString():"0").set("endCustF",o||"").set("endCustF2",l||"").set("startBldng",C||"").set("endBldng",E||"").set("output",d||"").set("emailAdd",_||"").set("recordsPerPage",T?T.toString():"10").set("pageNo",M?M.toString():"1");return this.httpClient.get(this.url+"/LedgerCodes/transactions/read",{params:P})}updateLcTransactions(e,r,a,n,p,h,c,u){return this.httpClient.put(this.url+"/LedgerCodes/transactions/update",{user:e,InvoiceNum:r,SequenceNum:a,InvoiceDate:n,LineAmount:p,LedgerCode:h,LedgerSubCode:c,Building:u}).pipe((0,m.X)(1),(0,f.K)(this.httpError))}getLctInvInquiry(e,r){return this.httpClient.get(this.url+`/LedgerCodes/transactions/InvInquiry/read?user=${e}&InvoiceNum=${r}`)}getLctAdjInquiry(e,r){return this.httpClient.get(this.url+`/LedgerCodes/transactions/AdjInquiry/read?user=${e}&InvoiceNum=${r}`)}getLCAttributes(e,r,a,n){return this.httpClient.get(this.url+`/LedgerCodes/attributes/read?user=${e}&key=${r}&recordsPerPage=${a}&pageNo=${n}`)}LCAttributesCreate(e,r,a,n,p,h,c,u){return this.httpClient.post(this.url+"/LedgerCodes/attributes/create",{user:e,EAFLID:r,EAKEY:a,EAATRB:n,EAVALU:p,EASTAT:h,EATMST:c,EAUSER:u}).pipe((0,m.X)(1),(0,f.K)(this.httpError))}LCAttributesUpdate(e,r,a,n,p,h,c,u){return this.httpClient.put(this.url+"/LedgerCodes/attributes/update",{EAFLID:e,EAKEY:r,EAATRB:a,EAVALU:n,EASTAT:p,EATMST:h,EAUSER:c,user:u}).pipe((0,m.X)(1),(0,f.K)(this.httpError))}LCAttributesDelete(e,r){return this.httpClient.delete(this.url+`/LedgerCodes/attributes/delete?key=${e}&attribute=${r}`)}RevenueDistReport(e,r,a,n,p,h,c,u,g,o,l,C,E,d){return this.httpClient.put(this.url+"/LedgerCodes/LedgerCodesRevReport/update",{LedgerCode:e,LedgerCodeSuffix:r,StartDate:a,EndDate:n,StartingCustomer:p,StartingCustomerSuffix:h,StartingCustomerSuffix2:c,EndingCustomer:u,EndingCustomerSuffix:g,EndingCustomerSuffix2:o,StartingBuildingNumber:l,EndingBuildingNumber:C,OutPut:E,Email:d}).pipe((0,m.X)(1),(0,f.K)(this.httpError))}LCRevInquiry(e,r,a,n,p){return this.httpClient.get(this.url+`/LedgerCodes/LCRevInquiry/read?user=${e}&LedgerCode=${r}&LedgerSubCode=${a}&recordsPerPage=${n}&pageNo=${p}`)}ReceivableDetailsRevInquiryForm(e,r,a,n,p,h,c,u,g,o,l,C,E,d,_){const T=(new s.LE).set("user",e||"").set("WKLEGC",r).set("WKLEGS",a).set("StDate",n).set("EndDate",p).set("Stcust",h||"0000").set("Stcustf",c||" ").set("Stcustf2",u||" ").set("Endcust",g||"9999").set("Ecustsuf",o||" ").set("Endcstf2",l||" ").set("Stbldng",C||"").set("Endbldng",E||"999").set("Output",d).set("Emailadd",_||" ");return this.httpClient.get(`${this.url}/LedgerCodes/ReceivableDetailsRevInquiry/read`,{params:T})}LedgercodeRevReport(e,r,a,n,p,h,c,u,g,o,l,C,E,d,_){const T=(new s.LE).set("user",e||"").set("WKLEGC",r).set("WKLEGS",a).set("StDate",n).set("EndDate",p).set("Stcust",h||"0000").set("Stcustf",c||" ").set("Stcustf2",u||" ").set("Endcust",g||"9999").set("Ecustsuf",o||" ").set("Endcstf2",l||" ").set("Stbldng",C||" ").set("Endbldng",E||"999").set("Output",d||"*DISPLAY").set("Emailadd",_||" ");return this.httpClient.get(`${this.url}/LedgerCodes/LedgercodeRevReport/read`,{params:T})}ReceivableDetailsRevInquiry(e,r,a,n,p){const h=(new s.LE).set("user",e||"").set("WKLEGC",r).set("WKLEGS",a).set("StDate",n).set("EndDate",p);return this.httpClient.get(`${this.url}/LedgerCodes/ReceivableDetailsRevInquiry/read`,{params:h})}httpError(e){let r="";return r=e.error instanceof ErrorEvent?e.error.message:`Error Code: ${e.status}\nMessage: ${e.message}`,console.log(r),(0,v._)(()=>new Error(r))}}return t.\u0275fac=function(e){return new(e||t)(A.LFG(s.eN))},t.\u0275prov=A.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},16799:(Z,L,i)=>{i.d(L,{x:()=>D});var s=i(80529),m=i(75625),f=i(70262),v=i(62843),S=i(92340),A=i(94650);let D=(()=>{class t{constructor(e){this.httpClient=e,this.url=S.N.API_BASE_URL,this.httpHeader={headers:new s.WM({"Content-Type":"application/json"})}}getTaskCodes(e,r,a,n,p,h){return this.httpClient.get(this.url+`/TaskCodes/read?user=${e}&storer=${r}&suffix=${a}&status=${n}&recordsPerPage=${p}&pageNo=${h}`)}TaskCodesCreate(e,r,a,n,p,h,c,u,g,o,l,C,E,d){return this.httpClient.post(this.url+"/TaskCodes/create",{TSTASK:e,TSSTOR:r,TSSSFX:a,TSDESC:n,TSMINM:p,TSBASE:h,TSRATE:c,TSLEGC:u,TSLEGS:g,TSMKUP:o,TSQUOT:l,TSAUTO:C,TSVARC:E,user:d}).pipe((0,m.X)(1),(0,f.K)(this.httpError))}TaskCodesUpdate(e,r,a,n,p,h,c,u,g,o,l,C,E,d){return this.httpClient.put(this.url+"/TaskCodes/update",{TSTASK:e,TSSTOR:r,TSSSFX:a,TSDESC:n,TSMINM:p,TSBASE:h,TSRATE:c,TSLEGC:u,TSLEGS:g,TSMKUP:o,TSQUOT:l,TSAUTO:C,TSVARC:E,user:d}).pipe((0,m.X)(1),(0,f.K)(this.httpError))}taskCodesCopyTask(e,r,a,n,p,h,c,u,g,o,l,C,E,d,_,T){return this.httpClient.put(this.url+"/TaskCodes/copyTask",{user:e,taskCode:r,storer1:a,storerSuffix1:n,storer2:p,storerSuffix2:h,description:c,minimum:u,base:g,rate:o,ledgerCode:l,ledgerCodeSuffix:C,markup:E,taskOnQuote:d,autoCharge:_,recalculate:T}).pipe((0,m.X)(1),(0,f.K)(this.httpError))}TaskCodesCopySet(e,r,a,n){return this.httpClient.put(this.url+"/TaskCodes/CopySet",{storer:e,suffix:r,storerNumber:a,storerSuffix:n}).pipe((0,m.X)(1),(0,f.K)(this.httpError))}taskCodesConstraint(e,r,a,n,p,h,c,u){return this.httpClient.post(this.url+"/TaskCodes/constraint",{documentType:e,taskCode:r,storer:a,suffix:n,constraintF:p,relationship:h,constraintV:c,status:u}).pipe((0,m.X)(1),(0,f.K)(this.httpError))}TaskCodesActivate(e,r,a){return this.httpClient.put(this.url+"/TaskCodes/activate",{taskCode:e,storer:r,suffix:a}).pipe((0,m.X)(1),(0,f.K)(this.httpError))}TaskCodesDeactivate(e,r,a){return this.httpClient.put(this.url+"/TaskCodes/Deactivate",{taskCode:e,storer:r,suffix:a}).pipe((0,m.X)(1),(0,f.K)(this.httpError))}taskCodesDelete(e,r,a){return this.httpClient.delete(this.url+`/TaskCodes/delete?taskId=${e}&storer=${r}&suffix=${a}`)}getAttributesNames(){return this.httpClient.get(this.url+"/TaskCodes/getNames")}getLedgerNames(){return this.httpClient.get(this.url+"/TaskCodes/getLedgerNames")}getTaskCodesAttributes(e,r,a,n){return this.httpClient.get(this.url+`/TaskCodes/Attributes?user=${e}&key=${r}&recordsPerPage=${a}&pageNo=${n}`)}TaskCodesAttributesCreate(e,r,a,n,p,h,c,u){return this.httpClient.post(this.url+"/TaskCodes/Attributes/create",{user:e,EAFLID:r,EAKEY:a,EAATRB:n,EAVALU:p,EASTAT:h,EATMST:c,EAUSER:u}).pipe((0,m.X)(1),(0,f.K)(this.httpError))}TaskCodesAttributesUpdate(e,r,a,n,p,h,c,u){return this.httpClient.put(this.url+"/TaskCodes/Attributes/update",{EAFLID:e,EAKEY:r,EAATRB:a,EAVALU:n,EASTAT:p,EATMST:h,EAUSER:c,user:u}).pipe((0,m.X)(1),(0,f.K)(this.httpError))}taskCodesAttributesDelete(e,r){return this.httpClient.delete(this.url+`/TaskCodes/Attributes/delete?key=${e}&attribute=${r}`)}taskCodesConstraintDelete(e,r,a,n,p,h,c,u){return this.httpClient.delete(this.url+`/TaskCodes/constraint/delete?documentType=${e}&taskCode=${r}&storer=${a}&suffix=${n}&constraintF=${p}&relationship=${h}&constraintV=${c}&status=${u}`)}httpError(e){let r="";return r=e.error instanceof ErrorEvent?e.error.message:`Error Code: ${e.status}\nMessage: ${e.message}`,console.log(r),(0,v._)(()=>new Error(r))}}return t.\u0275fac=function(e){return new(e||t)(A.LFG(s.eN))},t.\u0275prov=A.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},5103:(Z,L,i)=>{i.r(L),i.d(L,{WwTaskcodesAddComponent:()=>l});var s=i(24006),m=i(65412),f=i(70879),v=i(35226),S=i.n(v),A=i(48529),D=i(69501),t=i(94650),O=i(19132),e=i(16799),r=i(11240),a=i(46546),n=i(97392),p=i(4859),h=i(59549),c=i(44144),u=i(84385),g=i(3238),o=i(73546);let l=(()=>{class C{constructor(d,_,T,M,P,U,I){this.data=d,this.dialogRef=_,this.router=T,this.fb=M,this.taskCodesService=P,this.storerSvc=U,this.ledgerCodesService=I,this.user=localStorage.getItem("userName")||"",this.storerOptions=[],this.ledgerOptions=[],this.totalRecords=0,this.currentPage=1}ngOnInit(){this.form=this.fb.group({TSTASK:"",TSSTOR:"",TSSSFX:"",TSDESC:"",TSMINM:".00",TSBASE:"",TSRATE:".0000",TSLEGC:["",s.kI.required],TSLEGS:["",s.kI.required],TSMKUP:"",TSQUOT:"Y",TSAUTO:"N",TSVARC:"Y",TSLDES:""}),this.fetchStorer(),this.fetchLedgerCode()}get storeControlName(){return this.form.controls.TSSTOR}get suffixControlName(){return this.form.controls.TSSSFX}get ledgerControlName(){return this.form.controls.TSLEGC}get subLedgerControlName(){return this.form.controls.TSLEGS}ngOnDestroy(){this.taskCodesSubscription&&this.taskCodesSubscription.unsubscribe()}fetchStorer(){this.storerSvc.getStorerCodes().subscribe(d=>{this.storerOptions=d.map(_=>({value:_.STORE,description:`${_.STORE}${_.STSFX?" "+_.STSFX:""}  ${_.STNAME}`}))})}fetchLedgerCode(){this.taskCodesService.getLedgerNames().subscribe(d=>{this.ledgerOptions=d.map(_=>({value:_.LELEGC,description:`${_.LELEGC}${_.LELEGS?" "+_.LELEGS:""}  ${_.LEDESC}`}))})}taskCodesCreate(){var d=this.form.value;this.taskCodesSubscription&&this.taskCodesSubscription.unsubscribe(),this.taskCodesSubscription=this.taskCodesService.TaskCodesCreate(d.TSTASK,d.TSSTOR,d.TSSSFX,d.TSDESC,d.TSMINM,d.TSBASE.toUpperCase(),d.TSRATE,d.TSLEGC,d.TSLEGS,d.TSMKUP,d.TSQUOT,d.TSAUTO,d.TSVARC,this.user).subscribe(T=>{const M=T[0]?.data?.length,P=M?T[0]?.data[M-1]?.value:void 0,U=P?JSON.parse(P)?.returnedData?.message:void 0;U?.toUpperCase()===A.R.createMsg.toUpperCase()?(this.successMessage(U),this.closeDialog(),this.router.navigate(["/main-nav/task-codes/read"])):this.failureMessage(U)})}successMessage(d){S().fire(d,"","success")}failureMessage(d){S().fire(d,"","error")}closeDialog(){this.dialogRef.close()}}return C.\u0275fac=function(d){return new(d||C)(t.Y36(m.WI),t.Y36(m.so),t.Y36(O.F0),t.Y36(s.qu),t.Y36(e.x),t.Y36(r.h),t.Y36(a.f))},C.\u0275cmp=t.Xpm({type:C,selectors:[["app-ww-taskcodes-add"]],standalone:!0,features:[t.jDz],decls:93,vars:9,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","TSTASK"],[1,"form-group1"],["for","inputField",1,"form-heading"],[1,"form-input",2,"margin-bottom","10px"],["label","Storer","placeholder","Search or Enter Storer",3,"options","valueControlName","suffixControlName"],["matInput","","formControlName","TSSSFX",2,"text-transform","uppercase"],["appearance","outline",1,"full-width","w-100"],["matInput","","formControlName","TSDESC"],[1,"form-input"],["matInput","","formControlName","TSRATE"],["matInput","","formControlName","TSBASE",2,"text-transform","uppercase"],["matInput","","formControlName","TSMINM"],["label","Ledger Code","placeholder","Search or Enter Ledger Code",3,"options","valueControlName","suffixControlName","isRequired"],["appearance","outline"],["matInput","","formControlName","TSLEGS"],["matInput","","formControlName","TSMKUP"],["formControlName","TSAUTO"],["value",""],["value","I"],["value","O"],["value","N"],["formControlName","TSVARC"],["value","Y"],["formControlName","TSQUOT"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"disabled","click"]],template:function(d,_){1&d&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Task Code Maintenance"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return _.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"Task Code"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"div",10)(17,"label",11),t._uU(18,"Storer"),t.qZA(),t.TgZ(19,"div",12),t._UZ(20,"app-dropdown",13),t.TgZ(21,"mat-form-field",8)(22,"mat-label"),t._uU(23,"Storer Suffix"),t.qZA(),t._UZ(24,"input",14),t.qZA()()(),t.TgZ(25,"mat-form-field",15)(26,"mat-label"),t._uU(27,"Description"),t.qZA(),t.TgZ(28,"textarea",16),t._uU(29," Description"),t.qZA()(),t.TgZ(30,"div",10)(31,"label",11),t._uU(32,"Rate/Base"),t.qZA(),t.TgZ(33,"div",17)(34,"mat-form-field",8)(35,"mat-label"),t._uU(36,"Rate"),t.qZA(),t._UZ(37,"input",18),t.qZA(),t.TgZ(38,"mat-form-field",8)(39,"mat-label"),t._uU(40,"Base"),t.qZA(),t._UZ(41,"input",19),t.qZA()()(),t.TgZ(42,"mat-form-field",8)(43,"mat-label"),t._uU(44,"Minimum"),t.qZA(),t._UZ(45,"input",20),t.qZA(),t.TgZ(46,"div",10)(47,"label",11),t._uU(48,"Ledger Code"),t.qZA(),t.TgZ(49,"div",12),t._UZ(50,"app-dropdown",21),t.TgZ(51,"mat-form-field",22)(52,"mat-label"),t._uU(53,"sub-code"),t.qZA(),t._UZ(54,"input",23),t.qZA()()(),t.TgZ(55,"mat-form-field",8)(56,"mat-label"),t._uU(57,"Markup"),t.qZA(),t._UZ(58,"input",24),t.qZA(),t.TgZ(59,"mat-form-field",8)(60,"mat-label"),t._uU(61,"Auto Charge"),t.qZA(),t.TgZ(62,"mat-select",25)(63,"mat-option",26),t._uU(64,"-- Select --"),t.qZA(),t.TgZ(65,"mat-option",27),t._uU(66,"I"),t.qZA(),t.TgZ(67,"mat-option",28),t._uU(68,"O"),t.qZA(),t.TgZ(69,"mat-option",29),t._uU(70,"N"),t.qZA()()(),t.TgZ(71,"mat-form-field",8)(72,"mat-label"),t._uU(73,"Recalculate At Posting"),t.qZA(),t.TgZ(74,"mat-select",30)(75,"mat-option",26),t._uU(76,"-- Select --"),t.qZA(),t.TgZ(77,"mat-option",31),t._uU(78,"Y"),t.qZA(),t.TgZ(79,"mat-option",29),t._uU(80,"N"),t.qZA()()(),t.TgZ(81,"mat-form-field",8)(82,"mat-label"),t._uU(83,"Task on Quote"),t.qZA(),t.TgZ(84,"mat-select",32)(85,"mat-option",26),t._uU(86,"-- Select --"),t.qZA(),t.TgZ(87,"mat-option",31),t._uU(88,"Y"),t.qZA(),t.TgZ(89,"mat-option",29),t._uU(90,"N"),t.qZA()()()()(),t.TgZ(91,"button",33),t.NdJ("click",function(){return _.taskCodesCreate()}),t._uU(92,"Create"),t.qZA()()()()),2&d&&(t.xp6(9),t.Q6J("formGroup",_.form),t.xp6(11),t.Q6J("options",_.storerOptions)("valueControlName",_.storeControlName)("suffixControlName",_.suffixControlName),t.xp6(30),t.Q6J("options",_.ledgerOptions)("valueControlName",_.ledgerControlName)("suffixControlName",_.subLedgerControlName)("isRequired",!0),t.xp6(41),t.Q6J("disabled",!_.form.valid))},dependencies:[f.m,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,n.Hw,p.lW,h.KE,h.hX,c.Nt,u.gD,g.ey,o.a8,o.dk,o.dn,o.n5,D.J]}),C})()}}]);