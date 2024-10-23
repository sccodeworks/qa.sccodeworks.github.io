"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[1442,1790,8754,5645,2313],{11790:(N,y,o)=>{o.d(y,{y:()=>D});var v=o(65412),r=o(94650),u=o(97392),S=o(4859);let U=(()=>{class C{constructor(s,t){this.dialogRef=s,this.data=t}ngOnInit(){}closeDialog(){this.dialogRef.close(!1)}}return C.\u0275fac=function(s){return new(s||C)(r.Y36(v.so),r.Y36(v.WI))},C.\u0275cmp=r.Xpm({type:C,selectors:[["app-alert-dialog"]],decls:10,vars:3,consts:[[1,"confirm-dialog-container"],[1,"content-container"],["id","close-icon",3,"click"],[1,"content-span","full-width"],["mat-flat-button","","id","no-button",3,"mat-dialog-close"],["mat-flat-button","","id","yes-button",3,"mat-dialog-close"]],template:function(s,t){1&s&&(r.TgZ(0,"div",0)(1,"div",1)(2,"mat-icon",2),r.NdJ("click",function(){return t.closeDialog()}),r._uU(3,"close "),r.qZA(),r.TgZ(4,"span",3),r._uU(5),r.qZA()(),r.TgZ(6,"button",4),r._uU(7,"Cancel"),r.qZA(),r.TgZ(8,"button",5),r._uU(9,"Delete"),r.qZA()()),2&s&&(r.xp6(5),r.Oqu(t.data.message),r.xp6(1),r.Q6J("mat-dialog-close",!1),r.xp6(2),r.Q6J("mat-dialog-close",!0))},dependencies:[u.Hw,S.lW,v.ZT]}),C})(),D=(()=>{class C{constructor(s){this.dialog=s}openCustomAlert(s){return this.dialog.open(U,{width:"450px",panelClass:"confirm-dialog-container",disableClose:!0,data:{message:s}})}}return C.\u0275fac=function(s){return new(s||C)(r.LFG(v.uw))},C.\u0275prov=r.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})()},69501:(N,y,o)=>{o.d(y,{J:()=>E});var v=o(24006),r=o(47957),u=o(59549),S=o(44144),U=o(69751),D=o(68675),C=o(54004),_=o(70879),s=o(94650),t=o(36895),l=o(3238);function p(g,f){if(1&g&&(s.TgZ(0,"mat-option",6),s._uU(1),s.qZA()),2&g){const n=f.$implicit;s.Q6J("value",n),s.xp6(1),s.AsE(" ",n.value," - ",n.description," ")}}function T(g,f){1&g&&(s.TgZ(0,"mat-error"),s._uU(1,"Please select a valid option."),s.qZA())}let E=(()=>{class g{constructor(n){this.fb=n,this.options=[],this.value=null,this.placeholder="",this.id="",this.ngControl=null,this.label="",this.appearance="outline",this.describedBy="",this.touched=!1,this.focused=!1,this.empty=!1,this.required=!1,this.disabled=!1,this.shouldLabelFloat=!1,this.formControlName="",this.errorState=!1,this.onChange=d=>{this.errorState=0===this._filter(this.control.value).length&&this.control.value.length>0},this.onTouched=()=>{},this.control=this.fb.control(""),this.stateChanges=new U.y,this.filteredOptions=this.control.valueChanges.pipe((0,D.O)(""),(0,C.U)(d=>this._filter(d)))}_filter(n){if(null==n||0===n.length)return this.errorState=!1,this.options;let d="";"string"==typeof n&&(d=n.toLowerCase());const Z=this.options.filter(k=>{const w=k.value?.toString().toLowerCase(),O=k.description?.toLowerCase();return w.includes(d)||O.includes(d)});return this.errorState=0===Z.length&&n.length>0,Z}writeValue(n){this.control.setValue(n&&"object"==typeof n?`${n.value} - ${n.description}`:"string"==typeof n?n:""),this.errorState=0===this._filter(this.control.value).length&&this.control.value.length>0}onOptionSelected(n){this.writeValue(n),this.onChange(n.value),this.autocompleteTrigger.closePanel()}registerOnChange(n){this.onChange=n}registerOnTouched(n){this.onTouched=n}setDisabledState(n){this.disabled=n}setDescribedByIds(n){}onContainerClick(n){}markAsTouched(){this.touched||(this.touched=!0,this.onTouched())}}return g.\u0275fac=function(n){return new(n||g)(s.Y36(v.qu))},g.\u0275cmp=s.Xpm({type:g,selectors:[["app-dropdown"]],viewQuery:function(n,d){if(1&n&&s.Gf(r.ZL,7),2&n){let Z;s.iGM(Z=s.CRH())&&(d.autocompleteTrigger=Z.first)}},hostVars:1,hostBindings:function(n,d){2&n&&s.uIk("aria-describedby",d.describedBy)},inputs:{options:"options",value:"value",placeholder:"placeholder",id:"id",ngControl:"ngControl",label:"label",appearance:"appearance"},standalone:!0,features:[s._Bn([{provide:v.JU,multi:!0,useExisting:g},{provide:u.Eo,useExisting:g}],[{provide:v.gN,useExisting:v.sg}]),s.jDz],decls:9,vars:9,consts:[[3,"appearance"],["matInput","",3,"formControl","placeholder","matAutocomplete","blur"],[3,"optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"value"]],template:function(n,d){if(1&n&&(s.TgZ(0,"mat-form-field",0)(1,"mat-label"),s._uU(2),s.qZA(),s.TgZ(3,"input",1),s.NdJ("blur",function(){return d.markAsTouched()}),s.qZA(),s.TgZ(4,"mat-autocomplete",2,3),s.NdJ("optionSelected",function(k){return d.onOptionSelected(k.option.value)}),s.YNc(6,p,2,3,"mat-option",4),s.ALo(7,"async"),s.qZA(),s.YNc(8,T,2,0,"mat-error",5),s.qZA()),2&n){const Z=s.MAs(5);s.Q6J("appearance",d.appearance),s.xp6(2),s.Oqu(d.label),s.xp6(1),s.Q6J("formControl",d.control)("placeholder",d.placeholder)("matAutocomplete",Z),s.xp6(3),s.Q6J("ngForOf",s.lcZ(7,7,d.filteredOptions)),s.xp6(2),s.Q6J("ngIf",d.control.invalid&&d.control.touched)}},dependencies:[_.m,t.sg,t.O5,v.Fj,v.JJ,v.oH,u.TO,u.KE,u.hX,S.Nt,l.ey,t.Ov,v.UX,r.Bb,r.XC,r.ZL,u.lN,S.c]}),g})()},83490:(N,y,o)=>{o.d(y,{y:()=>C});var v=o(80529),r=o(75625),u=o(70262),S=o(62843),U=o(92340),D=o(94650);let C=(()=>{class _{constructor(t){this.httpClient=t,this.url=U.N.API_BASE_URL,this.httpHeader={headers:new v.WM({"Content-Type":"application/json"})}}getAccountingAttribute(t,l,p,T){return this.httpClient.get(this.url+"/accountAttributes/read",{params:{user:t,attribute:l??"",recordsPerPage:p??"",pageNo:T??""}})}AccountingAttributeCreate(t,l,p){return this.httpClient.post(this.url+"/accountAttributes/create",{user:t,attribute:l,description:p}).pipe((0,r.X)(1),(0,u.K)(this.httpError))}AccountingAttributeUpdate(t,l,p){return this.httpClient.put(this.url+"/accountAttributes/update",{user:t,attribute:l,description:p}).pipe((0,r.X)(1),(0,u.K)(this.httpError))}AccountingAttributeDelete(t,l){return this.httpClient.delete(this.url+`/accountAttributes/delete?user=${t}&attribute=${l}`)}httpError(t){let l="";return l=t.error instanceof ErrorEvent?t.error.message:`Error Code: ${t.status}\nMessage: ${t.message}`,console.log(l),(0,S._)(()=>new Error(l))}}return _.\u0275fac=function(t){return new(t||_)(D.LFG(v.eN))},_.\u0275prov=D.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},16799:(N,y,o)=>{o.d(y,{x:()=>C});var v=o(80529),r=o(75625),u=o(70262),S=o(62843),U=o(92340),D=o(94650);let C=(()=>{class _{constructor(t){this.httpClient=t,this.url=U.N.API_BASE_URL,this.httpHeader={headers:new v.WM({"Content-Type":"application/json"})}}getTaskCodes(t,l,p,T,E,g){return this.httpClient.get(this.url+`/TaskCodes/read?user=${t}&storer=${l}&suffix=${p}&status=${T}&recordsPerPage=${E}&pageNo=${g}`)}TaskCodesCreate(t,l,p,T,E,g,f,n,d,Z,k,w,O,M){return this.httpClient.post(this.url+"/TaskCodes/create",{TSTASK:t,TSSTOR:l,TSSSFX:p,TSDESC:T,TSMINM:E,TSBASE:g,TSRATE:f,TSLEGC:n,TSLEGS:d,TSMKUP:Z,TSQUOT:k,TSAUTO:w,TSVARC:O,user:M}).pipe((0,r.X)(1),(0,u.K)(this.httpError))}TaskCodesUpdate(t,l,p,T,E,g,f,n,d,Z,k,w,O,M){return this.httpClient.put(this.url+"/TaskCodes/update",{TSTASK:t,TSSTOR:l,TSSSFX:p,TSDESC:T,TSMINM:E,TSBASE:g,TSRATE:f,TSLEGC:n,TSLEGS:d,TSMKUP:Z,TSQUOT:k,TSAUTO:w,TSVARC:O,user:M}).pipe((0,r.X)(1),(0,u.K)(this.httpError))}taskCodesCopyTask(t,l,p,T,E,g,f,n,d,Z,k,w,O,M,R,W){return this.httpClient.put(this.url+"/TaskCodes/copyTask",{user:t,taskCode:l,storer1:p,storerSuffix1:T,storer2:E,storerSuffix2:g,description:f,minimum:n,base:d,rate:Z,ledgerCode:k,ledgerCodeSuffix:w,markup:O,taskOnQuote:M,autoCharge:R,recalculate:W}).pipe((0,r.X)(1),(0,u.K)(this.httpError))}TaskCodesCopySet(t,l,p,T){return this.httpClient.put(this.url+"/TaskCodes/CopySet",{storer:t,suffix:l,storerNumber:p,storerSuffix:T}).pipe((0,r.X)(1),(0,u.K)(this.httpError))}taskCodesConstraint(t,l,p,T,E,g,f,n){return this.httpClient.post(this.url+"/TaskCodes/constraint",{documentType:t,taskCode:l,storer:p,suffix:T,constraintF:E,relationship:g,constraintV:f,status:n}).pipe((0,r.X)(1),(0,u.K)(this.httpError))}TaskCodesActivate(t,l,p){return this.httpClient.put(this.url+"/TaskCodes/activate",{taskCode:t,storer:l,suffix:p}).pipe((0,r.X)(1),(0,u.K)(this.httpError))}TaskCodesDeactivate(t,l,p){return this.httpClient.put(this.url+"/TaskCodes/Deactivate",{taskCode:t,storer:l,suffix:p}).pipe((0,r.X)(1),(0,u.K)(this.httpError))}taskCodesDelete(t,l,p){return this.httpClient.delete(this.url+`/TaskCodes/delete?taskId=${t}&storer=${l}&suffix=${p}`)}getTaskCodesAttributes(t,l,p,T){return this.httpClient.get(this.url+`/TaskCodes/Attributes?user=${t}&key=${l}&recordsPerPage=${p}&pageNo=${T}`)}TaskCodesAttributesCreate(t,l,p,T,E,g,f,n){return this.httpClient.post(this.url+"/TaskCodes/Attributes/create",{user:t,EAFLID:l,EAKEY:p,EAATRB:T,EAVALU:E,EASTAT:g,EATMST:f,EAUSER:n}).pipe((0,r.X)(1),(0,u.K)(this.httpError))}TaskCodesAttributesUpdate(t,l,p,T,E,g,f,n){return this.httpClient.put(this.url+"/TaskCodes/Attributes/update",{EAFLID:t,EAKEY:l,EAATRB:p,EAVALU:T,EASTAT:E,EATMST:g,EAUSER:f,user:n}).pipe((0,r.X)(1),(0,u.K)(this.httpError))}taskCodesAttributesDelete(t,l){return this.httpClient.delete(this.url+`/TaskCodes/Attributes/delete?key=${t}&attribute=${l}`)}httpError(t){let l="";return l=t.error instanceof ErrorEvent?t.error.message:`Error Code: ${t.status}\nMessage: ${t.message}`,console.log(l),(0,S._)(()=>new Error(l))}}return _.\u0275fac=function(t){return new(t||_)(D.LFG(v.eN))},_.\u0275prov=D.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},41442:(N,y,o)=>{o.r(y),o.d(y,{WwTaskcodesAttributesComponent:()=>et});var v=o(98739),r=o(7155),u=o(24006),S=o(65412),U=o(70879),D=o(35226),C=o.n(D),_=o(48529),s=o(69501),t=o(94650),l=o(19132),p=o(83490),T=o(16799),E=o(97392),g=o(4859),f=o(59549),n=o(44144),d=o(73546);let Z=(()=>{class i{constructor(e,a,c,h,A,b){this.anyvariable=e,this.dialogRef=a,this.router=c,this.accountAttributesService=h,this.fb=A,this.taskCodesService=b,this.attributeOptions=[],this.user=localStorage.getItem("userName")||"",this.keyValue=""}ngOnDestroy(){this.attributeSubscription&&this.attributeSubscription.unsubscribe()}ngOnInit(){console.log(this.anyvariable);const a=(c,h)=>String(c).padStart(h,"0");console.log(a(this.anyvariable.TSSTOR,4)),this.keyValue=a(this.anyvariable.TSSTOR,4),this.form=this.fb.group({EAFLID:{value:"TS",disabled:!0},EAKEY:{value:this.anyvariable.TSTASK+a(this.anyvariable.TSSTOR,4),disabled:!0},EAATRB:["",u.kI.required],EAVALU:["",u.kI.required],EASTAT:"AC",EATMST:"",EAUSER:""}),this.fetchAttributes()}fetchAttributes(){this.accountAttributesService.getAccountingAttribute(this.user,"",10,1).subscribe(c=>{this.result=c;var h=this.result[0].data[1]?.value,A=JSON.parse(h);this.attributeSource=A.returnedData,this.attributeOptions=this.attributeSource.map(b=>({value:b.A2ATRB,description:b.A2DESC}))})}taskCodesAttributesCreate(){var e=this.form.value;console.log(e);const c=(e.EAATRB||"").toUpperCase();this.attributeSubscription&&this.attributeSubscription.unsubscribe(),this.attributeSubscription=this.taskCodesService.TaskCodesAttributesCreate(this.user,this.form.get("EAFLID")?.value,this.form.get("EAKEY")?.value,c,e.EAVALU.toUpperCase(),e.EASTAT,e.EATMST,this.user).subscribe(h=>{const A=h[0]?.data?.length,b=A?h[0]?.data[A-1]?.value:void 0,I=b?JSON.parse(b)?.returnedData?.message:void 0;I?.toUpperCase()===_.R.createMsg.toUpperCase()?(this.successMessage(I),this.closeDialog(),this.router.navigateByUrl("/main-nav/task-codes-attributes/read",{state:this.anyvariable})):this.failureMessage(I)})}successMessage(e){C().fire(e,"","success")}failureMessage(e){C().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(S.WI),t.Y36(S.so),t.Y36(l.F0),t.Y36(p.y),t.Y36(u.qu),t.Y36(T.x))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-ww-taskcodes-attributes-create"]],standalone:!0,features:[t.jDz],decls:39,vars:3,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","EAFLID",2,"text-transform","uppercase"],["matInput","","formControlName","EAKEY",2,"text-transform","uppercase"],["formControlName","EAATRB","label","Attribute","placeholder","Search or Enter Attribute","appearance","outline",3,"options"],["matInput","","formControlName","EAVALU",2,"text-transform","uppercase"],["matInput","","formControlName","EASTAT",2,"text-transform","uppercase"],["matInput","","formControlName","EATMST","readonly",""],["matInput","","formControlName","EAUSER","readonly","",2,"text-transform","uppercase"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"disabled","click"]],template:function(e,a){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Maintain Entity Attributes"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return a.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"File ID"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18,"key"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t._UZ(20,"app-dropdown",11),t.TgZ(21,"mat-form-field",8)(22,"mat-label"),t._uU(23,"Value"),t.qZA(),t._UZ(24,"input",12),t.qZA(),t.TgZ(25,"mat-form-field",8)(26,"mat-label"),t._uU(27,"Status"),t.qZA(),t._UZ(28,"input",13),t.qZA(),t.TgZ(29,"mat-form-field",8)(30,"mat-label"),t._uU(31,"Last Changed"),t.qZA(),t._UZ(32,"input",14),t.qZA(),t.TgZ(33,"mat-form-field",8)(34,"mat-label"),t._uU(35,"Change User"),t.qZA(),t._UZ(36,"input",15),t.qZA()()(),t.TgZ(37,"button",16),t.NdJ("click",function(){return a.taskCodesAttributesCreate()}),t._uU(38,"Create"),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",a.form),t.xp6(11),t.Q6J("options",a.attributeOptions),t.xp6(17),t.Q6J("disabled",!a.form.valid))},dependencies:[U.m,u._Y,u.Fj,u.JJ,u.JL,u.sg,u.u,E.Hw,g.lW,f.KE,f.hX,n.Nt,d.a8,d.dk,d.dn,d.n5,s.J]}),i})(),k=(()=>{class i{constructor(e,a,c,h,A,b){this.anyvariable=e,this.dialogRef=a,this.router=c,this.fb=h,this.taskCodesService=A,this.accountAttributesService=b,this.attributeOptions=[],this.user=localStorage.getItem("userName")||"",this.keyValue=""}ngOnInit(){this.form=this.fb.group({EAFLID:{value:this.anyvariable[1].EAFLID,disabled:!0},EAKEY:{value:this.anyvariable[1].EAKEY,disabled:!0},EAATRB:this.anyvariable[1].EAATRB,EAVALU:this.anyvariable[1].EAVALU,EASTAT:this.anyvariable[1].EASTAT,EATMST:{value:this.anyvariable[1].EATMST,disabled:!0},EAUSER:{value:this.anyvariable[1].EAUSER,disabled:!0}}),this.fetchAttributes()}ngOnDestroy(){this.attributeSubscription&&this.attributeSubscription.unsubscribe()}fetchAttributes(){this.accountAttributesService.getAccountingAttribute(this.user,"",10,1).subscribe(c=>{this.result=c;var h=this.result[0].data[1]?.value,A=JSON.parse(h);this.attributeSource=A.returnedData,this.attributeOptions=this.attributeSource.map(b=>({value:b.A2ATRB,description:b.A2DESC}))})}TaskCodesAttributesUpdate(){var e=this.form.value;const c=(e.EAATRB||"").toUpperCase();this.attributeSubscription&&this.attributeSubscription.unsubscribe(),this.attributeSubscription=this.taskCodesService.TaskCodesAttributesUpdate(this.anyvariable[1].EAFLID,this.anyvariable[1].EAKEY,c,e.EAVALU.toUpperCase(),e.EASTAT,this.anyvariable[1].EATMST,this.user,this.user).subscribe(h=>{const A=h[0]?.data?.length,b=A?h[0]?.data[A-1]?.value:void 0,I=b?JSON.parse(b)?.returnedData?.message:void 0;I?.toUpperCase()===_.R.updateMsg.toUpperCase()?(this.successMessage(I),this.closeDialog(),this.router.navigateByUrl("/main-nav/task-codes-attributes/read",{state:this.anyvariable[0]})):this.failureMessage(I)})}successMessage(e){C().fire(e,"","success")}failureMessage(e){C().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(S.WI),t.Y36(S.so),t.Y36(l.F0),t.Y36(u.qu),t.Y36(T.x),t.Y36(p.y))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-ww-taskcodes-attributes-change"]],standalone:!0,features:[t.jDz],decls:39,vars:2,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","EAFLID",2,"text-transform","uppercase"],["matInput","","formControlName","EAKEY",2,"text-transform","uppercase"],["appearance","outline","formControlName","EAATRB","label","Attribute","placeholder","Search or Enter Attribute",3,"options"],["matInput","","formControlName","EAVALU",2,"text-transform","uppercase"],["matInput","","formControlName","EASTAT",2,"text-transform","uppercase"],["matInput","","formControlName","EATMST"],["matInput","","formControlName","EAUSER",2,"text-transform","uppercase"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Maintain Entity Attributes"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return a.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"File ID"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18,"key"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t._UZ(20,"app-dropdown",11),t.TgZ(21,"mat-form-field",8)(22,"mat-label"),t._uU(23,"Value"),t.qZA(),t._UZ(24,"input",12),t.qZA(),t.TgZ(25,"mat-form-field",8)(26,"mat-label"),t._uU(27,"Status"),t.qZA(),t._UZ(28,"input",13),t.qZA(),t.TgZ(29,"mat-form-field",8)(30,"mat-label"),t._uU(31,"Last Changed"),t.qZA(),t._UZ(32,"input",14),t.qZA(),t.TgZ(33,"mat-form-field",8)(34,"mat-label"),t._uU(35,"Change User"),t.qZA(),t._UZ(36,"input",15),t.qZA()()(),t.TgZ(37,"button",16),t.NdJ("click",function(){return a.TaskCodesAttributesUpdate()}),t._uU(38,"Update"),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",a.form),t.xp6(11),t.Q6J("options",a.attributeOptions))},dependencies:[U.m,u._Y,u.Fj,u.JJ,u.JL,u.sg,u.u,E.Hw,g.lW,f.KE,f.hX,n.Nt,d.a8,d.dk,d.dn,d.n5,s.J]}),i})();var w=o(11790),O=o(36895),M=o(28255),R=o(10266),W=o(90455);function x(i,m){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",12)(2,"div",33)(3,"span",34),t.NdJ("click",function(c){return c.stopPropagation()}),t.TgZ(4,"mat-slide-toggle",35),t.NdJ("ngModelChange",function(c){const A=t.CHM(e).$implicit;return t.KtG(A.isActive=c)})("change",function(){const h=t.CHM(e).$implicit,A=t.oxw();return t.KtG(A.toggleColumn(h))}),t._uU(5),t.qZA()()()(),t.BQk()}if(2&i){const e=m.$implicit;t.xp6(4),t.Q6J("ngModel",e.isActive),t.xp6(1),t.hij(" ",e.name," ")}}function L(i,m){1&i&&(t.TgZ(0,"th",36),t._uU(1,"Attribute"),t.qZA())}function P(i,m){if(1&i&&(t.TgZ(0,"td",37),t._uU(1),t.qZA()),2&i){const e=m.$implicit;t.xp6(1),t.Oqu(e.EAATRB)}}function B(i,m){1&i&&(t.TgZ(0,"th",36),t._uU(1,"Value"),t.qZA())}function K(i,m){if(1&i&&(t.TgZ(0,"td",37),t._uU(1),t.qZA()),2&i){const e=m.$implicit;t.xp6(1),t.Oqu(e.EAVALU)}}function Y(i,m){1&i&&(t.TgZ(0,"th",36),t._uU(1,"Last Changed"),t.qZA())}function F(i,m){if(1&i&&(t.TgZ(0,"td",37),t._uU(1),t.qZA()),2&i){const e=m.$implicit;t.xp6(1),t.Oqu(e.EATMST)}}function J(i,m){1&i&&(t.TgZ(0,"th",36),t._uU(1,"User"),t.qZA())}function $(i,m){if(1&i&&(t.TgZ(0,"td",37),t._uU(1),t.qZA()),2&i){const e=m.$implicit;t.xp6(1),t.Oqu(e.EAUSER)}}function q(i,m){1&i&&(t.TgZ(0,"th",36),t._uU(1,"Status"),t.qZA())}function Q(i,m){if(1&i&&(t.TgZ(0,"td",37),t._uU(1),t.qZA()),2&i){const e=m.$implicit;t.xp6(1),t.Oqu(e.EASTAT)}}function V(i,m){1&i&&(t.TgZ(0,"th",36),t._uU(1,"Key"),t.qZA())}function H(i,m){if(1&i&&(t.TgZ(0,"td",37),t._uU(1),t.qZA()),2&i){const e=m.$implicit;t.xp6(1),t.Oqu(e.EAKEY)}}function G(i,m){1&i&&t._UZ(0,"th",38)}function X(i,m){if(1&i){const e=t.EpF();t.TgZ(0,"td",37)(1,"div",39)(2,"button",40)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"ul",41)(6,"li")(7,"button",42),t.NdJ("click",function(){const h=t.CHM(e).$implicit,A=t.oxw();return t.KtG(A.taskCodesAttributesChangeForm(h))}),t.TgZ(8,"mat-icon",43),t._uU(9,"edit"),t.qZA(),t.TgZ(10,"mat-label"),t._uU(11,"Change"),t.qZA()()(),t.TgZ(12,"li")(13,"button",42),t.NdJ("click",function(){const h=t.CHM(e).$implicit,A=t.oxw();return t.KtG(A.taskCodesAttributesDelete(h))}),t.TgZ(14,"mat-icon",44),t._uU(15,"delete"),t.qZA(),t.TgZ(16,"mat-label"),t._uU(17,"Delete"),t.qZA()()()()()()}}function j(i,m){1&i&&t._UZ(0,"tr",45)}function z(i,m){1&i&&t._UZ(0,"tr",46)}const tt=function(){return[8,16,24]};let et=(()=>{class i{constructor(e,a,c,h,A){this.matDialog=e,this.taskCodesService=a,this.CustomAlertService=c,this.router=h,this.fb=A,this.INITIAL_PAGE=1,this.searchTextDisplay=!1,this.user=localStorage.getItem("userName"),this.selectedRow=[],this.editedRows=[],this.keyValue="",this.dataSource=new r.by,this.duplicateSource=[],this.pageSize=8,this.totalRecords=0,this.currentFilters=null,this.displayedColumns=["Attribute","Value","LastChanged","User","Status","Actions"],this.columnShowHideList=[]}ngOnInit(){this.element=history.state;const a=(c,h)=>String(c).padStart(h,"0");console.log(a(this.element.TSSTOR,4)),this.keyValue=a(this.element.TSSTOR,4),this.form=this.fb.group({FLID:"TS",KEY:this.element.TSTASK+a(this.element.TSSTOR,4)}),this.initializeColumnProperties(),this.editedRows=[],this.getTaskCodesAttributes(this.pageSize,this.INITIAL_PAGE)}onPaginateChange(e){this.pageSize=e.pageSize,this.getTaskCodesAttributes(e.pageSize,e.pageIndex+this.INITIAL_PAGE)}ngOnDestroy(){this.taskCodesSubscription&&this.taskCodesSubscription.unsubscribe()}toggleColumn(e){if(e.isActive)this.displayedColumns.splice(e.position>this.displayedColumns.length-1?this.displayedColumns.length-1:e.position,0,e.name);else{let a=this.displayedColumns.indexOf(e.name);a>-1&&this.displayedColumns.splice(a,1)}}initializeColumnProperties(){this.displayedColumns.forEach((e,a)=>{"Actions"!=e&&this.columnShowHideList.push({position:a,name:e,isActive:!0})}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"Key",isActive:!1})}rowClick(e){this.selectedRow=e}getTaskCodesAttributes(e,a){var c=this.form.value;this.taskCodesSubscription&&this.taskCodesSubscription.unsubscribe(),this.taskCodesSubscription=this.taskCodesService.getTaskCodesAttributes(this.user,c.KEY,e,a).subscribe(h=>{const A=h?.[0]?.data?.[1]?.value;if(A)try{const b=JSON.parse(A);b?.returnedData?(this.duplicateSource=b.returnedData,this.dataSource=new r.by(this.duplicateSource),this.totalRecords=b.TotalRecords||0):console.error("Returned data is undefined or null.")}catch(b){console.error("Error parsing response data:",b)}else console.error("Error fetching attributes data")})}taskCodesAttributesDelete(e){var a=this.form.value;this.CustomAlertService.openCustomAlert("Are you sure want to delete this attribute: "+e.EAATRB+" ?").afterClosed().subscribe(h=>{h&&(this.deleteTaskCodesAttributesSubscription&&this.deleteTaskCodesAttributesSubscription.unsubscribe(),this.deleteTaskCodesAttributesSubscription=this.taskCodesService.taskCodesAttributesDelete(a.KEY,e.EAATRB).subscribe(A=>{const b=A?.[0]?.data?.[A[0].data.length-1]?.value;b?.toUpperCase()===_.R.deleteShortMsg.toUpperCase()?(this.successMessage(b),this.getTaskCodesAttributes()):this.failureMessage(b)}))})}onBack(){this.router.navigate(["/main-nav/task-codes/read"])}taskCodesAttributesCreateForm(e){this.matDialog.open(Z,{width:"1000px",maxHeight:"80vh",data:e,autoFocus:!1})}taskCodesAttributesChangeForm(e){this.matDialog.open(k,{width:"1000px",maxHeight:"80vh",data:[this.element,e],autoFocus:!1})}successMessage(e){C().fire(e,"","success")}failureMessage(e){C().fire(e,"","error")}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(S.uw),t.Y36(T.x),t.Y36(w.y),t.Y36(l.F0),t.Y36(u.qu))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-ww-taskcodes-attributes"]],viewQuery:function(e,a){if(1&e&&t.Gf(v.NW,5),2&e){let c;t.iGM(c=t.CRH())&&(a.paginator=c.first)}},standalone:!0,features:[t.jDz],decls:59,vars:10,consts:[[1,"over-Flow"],["mat-button","",1,"backButton","go-back-btn",3,"click"],[1,"buttons"],["mat-button","","matTooltip","Add New AccountAttributes",1,"addButton",3,"click"],[1,"menu-container"],["mainMenuButton","matMenu"],[1,"grid-container"],[4,"ngFor","ngForOf"],["mat-button","","matTooltip","Hide/Show Columns",1,"mat-focus-indicator","addButton","mat-button","mat-button-base","tally-toltip-btn",3,"matMenuTriggerFor"],["menuTrigger","matMenuTrigger"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","FLID",2,"text-transform","uppercase"],["matInput","","formControlName","KEY",2,"text-transform","uppercase"],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","Attribute"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Value"],["matColumnDef","LastChanged"],["matColumnDef","User"],["matColumnDef","Status"],["matColumnDef","Key"],["matColumnDef","Actions"],["mat-header-cell","","class","pending_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"length","pageSizeOptions","pageSize","page"],["paginator",""],[1,"grid-item"],[3,"click"],[2,"color","blue",3,"ngModel","ngModelChange","change"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"pending_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],["mat-icon-button","","color","warn"],["mat-header-row",""],["mat-row",""]],template:function(e,a){if(1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title")(3,"button",1),t.NdJ("click",function(){return a.onBack()}),t.TgZ(4,"mat-icon"),t._uU(5,"navigate_before "),t.qZA()(),t._uU(6," Work With Entity Attributes"),t.qZA(),t.TgZ(7,"div",2)(8,"button",3),t.NdJ("click",function(){return a.taskCodesAttributesCreateForm(a.element)}),t.TgZ(9,"mat-icon"),t._uU(10,"add"),t.qZA()(),t.TgZ(11,"mat-menu",4,5)(13,"div",6),t.YNc(14,x,6,2,"ng-container",7),t.qZA()(),t.TgZ(15,"button",8,9)(17,"mat-icon"),t._uU(18,"visibility_off"),t.qZA()()()(),t.TgZ(19,"mat-card-content",10)(20,"form",11)(21,"div",12)(22,"div",13)(23,"mat-form-field",14)(24,"mat-label"),t._uU(25,"File ID"),t.qZA(),t._UZ(26,"input",15),t.qZA(),t.TgZ(27,"mat-form-field",14)(28,"mat-label"),t._uU(29,"Key"),t.qZA(),t._UZ(30,"input",16),t.qZA()()(),t.TgZ(31,"button",17),t._uU(32," Search "),t.qZA()()(),t.TgZ(33,"table",18),t.ynx(34,19),t.YNc(35,L,2,0,"th",20),t.YNc(36,P,2,1,"td",21),t.BQk(),t.ynx(37,22),t.YNc(38,B,2,0,"th",20),t.YNc(39,K,2,1,"td",21),t.BQk(),t.ynx(40,23),t.YNc(41,Y,2,0,"th",20),t.YNc(42,F,2,1,"td",21),t.BQk(),t.ynx(43,24),t.YNc(44,J,2,0,"th",20),t.YNc(45,$,2,1,"td",21),t.BQk(),t.ynx(46,25),t.YNc(47,q,2,0,"th",20),t.YNc(48,Q,2,1,"td",21),t.BQk(),t.ynx(49,26),t.YNc(50,V,2,0,"th",20),t.YNc(51,H,2,1,"td",21),t.BQk(),t.ynx(52,27),t.YNc(53,G,1,0,"th",28),t.YNc(54,X,18,0,"td",21),t.BQk(),t.YNc(55,j,1,0,"tr",29),t.YNc(56,z,1,0,"tr",30),t.qZA(),t.TgZ(57,"mat-paginator",31,32),t.NdJ("page",function(h){return a.onPaginateChange(h)}),t.qZA()()),2&e){const c=t.MAs(12);t.xp6(14),t.Q6J("ngForOf",a.columnShowHideList),t.xp6(1),t.Q6J("matMenuTriggerFor",c),t.xp6(5),t.Q6J("formGroup",a.form),t.xp6(13),t.Q6J("dataSource",a.dataSource),t.xp6(22),t.Q6J("matHeaderRowDef",a.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns),t.xp6(1),t.Q6J("length",a.totalRecords)("pageSizeOptions",t.DdM(9,tt))("pageSize",a.pageSize)}},dependencies:[U.m,O.sg,u._Y,u.Fj,u.JJ,u.JL,u.On,u.sg,u.u,v.NW,E.Hw,M.VK,M.p6,g.lW,f.KE,f.hX,n.Nt,d.a8,d.dk,d.dn,d.n5,r.BZ,r.fO,r.as,r.w1,r.Dz,r.nj,r.ge,r.ev,r.XQ,r.Gk,R.gM,W.Rr]}),i})()}}]);