"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[8379],{58379:(P,v,c)=>{c.r(v),c.d(v,{WwContactTypesComponent:()=>j});var b=c(98739),i=c(7155),d=c(65412),Y=c(35226),C=c.n(Y),h=c(70879),t=c(94650),w=c(80529),_=c(75625),A=c(70262),N=c(62843),D=c(92340);let f=(()=>{class o{constructor(e){this.httpClient=e,this.url=D.N.API_BASE_URL,this.httpHeader={headers:new w.WM({"Content-Type":"application/json"})}}getContactTypes(){return this.httpClient.get("http://localhost:3001/apj/ContactTypes")}getAll(e){return this.httpClient.get(this.url+`/ContactTypes/readAll?user=${e}`)}createContactTypes(e,a,n){return this.httpClient.post("http://localhost:3001/apj/ContactTypes/create",{CYTYPE:e,CYNAME:a,user:n}).pipe((0,_.X)(1),(0,A.K)(this.httpError))}updateContactTypes(e,a,n){return this.httpClient.put("http://localhost:3001/apj/ContactTypes/update",{CYTYPE:e,CYNAME:a,user:n}).pipe((0,_.X)(1),(0,A.K)(this.httpError))}httpError(e){let a="";return a=e.error instanceof ErrorEvent?e.error.message:`Error Code: ${e.status}\nMessage: ${e.message}`,console.log(a),(0,N._)(()=>new Error(a))}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(w.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var r=c(24006),T=c(19132),y=c(97392),g=c(4859),m=c(59549),Z=c(44144),l=c(73546);let x=(()=>{class o{constructor(e,a,n,p,u){this.ContactTypes=e,this.anyvariable=a,this.dialogRef=n,this.fb=p,this.router=u,this.user=localStorage.getItem("userName")}ngOnInit(){this.form=this.fb.group({CYTYPE:"",CYNAME:""})}get CYTYPE(){return this.form.get("CYTYPE")}addContactTypes(){var e=this.form.value;console.log(e),this.ContactTypes.createContactTypes(e.CYTYPE,e.CYNAME,this.user).subscribe(a=>{if(this.result=a,console.log(this.result),JSON.parse(this.result.success))this.successMessage("Contact Types created successfully"),this.closeDialog(),this.router.navigate(["/main-nav/contact-types/read"]);else{const n=JSON.parse(this.result[0].data[1].value).returnedData.message;this.failureMessage(n)}})}successMessage(e){C().fire(e,"","success")}failureMessage(e){C().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(f),t.Y36(d.WI),t.Y36(d.so),t.Y36(r.qu),t.Y36(T.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-contact-types-add"]],standalone:!0,features:[t.jDz],decls:22,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","CYTYPE",2,"text-transform","uppercase"],["matInput","","formControlName","CYNAME",2,"text-transform","uppercase"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Maintain Contact Types"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return a.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14," Contact Type "),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18," Contact Type Name"),t.qZA(),t._UZ(19,"input",10),t.qZA()()(),t.TgZ(20,"button",11),t.NdJ("click",function(){return a.addContactTypes()}),t._uU(21,"Add"),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",a.form))},dependencies:[h.m,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,y.Hw,g.lW,m.KE,m.hX,Z.Nt,l.a8,l.dk,l.dn,l.n5]}),o})(),U=(()=>{class o{constructor(e,a,n,p,u){this.fb=e,this.ContactTypes=a,this.router=n,this.anyvariable=p,this.dialogRef=u,this.user=localStorage.getItem("userName")}ngOnInit(){console.log(this.anyvariable),this.form=this.fb.group({CYTYPE:this.anyvariable.CYTYPE,CYNAME:this.anyvariable.CYNAME})}updateContactTypes(){var e=this.form.value;console.log(e),this.result=this.ContactTypes.updateContactTypes(e.CYTYPE,e.CYNAME,this.user).subscribe(a=>{if(this.result=a,console.log(this.result),JSON.parse(this.result.success))this.successMessage("Contact Types updated successfully"),this.closeDialog(),this.router.navigate(["/main-nav/contact-types/read"]);else{const n=JSON.parse(this.result[0].data[1].value).returnedData.message;this.failureMessage(n)}})}successMessage(e){C().fire(e,"","success")}failureMessage(e){C().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(r.qu),t.Y36(f),t.Y36(T.F0),t.Y36(d.WI),t.Y36(d.so))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-contact-types-change"]],standalone:!0,features:[t.jDz],decls:22,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","CYTYPE",2,"text-transform","uppercase"],["matInput","","formControlName","CYNAME",2,"text-transform","uppercase"],["mat-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Maintain Contact Types"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return a.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14," Contact Type"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18," Contact Type Name"),t.qZA(),t._UZ(19,"input",10),t.qZA()()(),t.TgZ(20,"button",11),t.NdJ("click",function(){return a.updateContactTypes()}),t._uU(21," Update "),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",a.form))},dependencies:[h.m,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,y.Hw,g.lW,m.KE,m.hX,Z.Nt,l.a8,l.dk,l.dn,l.n5]}),o})(),E=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-contact-types-delete"]],standalone:!0,features:[t.jDz],decls:2,vars:0,template:function(e,a){1&e&&(t.TgZ(0,"p"),t._uU(1,"contact-types-delete works!"),t.qZA())},dependencies:[h.m]}),o})();var J=c(36895),W=c(10266);function M(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"button",19),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.searchContactTypes())}),t.TgZ(1,"mat-icon"),t._uU(2,"clear"),t.qZA()()}}function S(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"button",20),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.searchContactTypes())}),t.TgZ(1,"mat-icon"),t._uU(2,"search"),t.qZA()()}}function F(o,s){if(1&o&&(t.TgZ(0,"form",21)(1,"div",22)(2,"div",23)(3,"mat-form-field",24)(4,"mat-label"),t._uU(5,"Contact Type"),t.qZA(),t._UZ(6,"input",25),t.qZA()()(),t.TgZ(7,"button",26),t._uU(8," Search "),t.qZA()()),2&o){const e=t.oxw();t.Q6J("formGroup",e.form)}}function k(o,s){1&o&&(t.TgZ(0,"th",27),t._uU(1," Contact Type "),t.qZA())}function I(o,s){if(1&o&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(e.CYTYPE)}}function H(o,s){1&o&&(t.TgZ(0,"th",27),t._uU(1," Contact Description "),t.qZA())}function q(o,s){if(1&o&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(e.CYNAME)}}function B(o,s){1&o&&t._UZ(0,"th",29)}function Q(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"td",28)(1,"div",30)(2,"button",31)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"ul",32)(6,"li")(7,"button",33),t.NdJ("click",function(){const p=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.getUpdateForm(p))}),t.TgZ(8,"mat-icon",34),t._uU(9,"edit"),t.qZA(),t.TgZ(10,"mat-label"),t._uU(11,"Change"),t.qZA()()(),t.TgZ(12,"li")(13,"button",33),t.NdJ("click",function(){const p=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.deleteContactTypes(p))}),t.TgZ(14,"mat-icon",35),t._uU(15,"delete"),t.qZA(),t.TgZ(16,"mat-label"),t._uU(17,"Delete"),t.qZA()()()()()()}}function G(o,s){1&o&&t._UZ(0,"tr",36)}function O(o,s){1&o&&t._UZ(0,"tr",37)}const R=function(){return[8,16,24]};let j=(()=>{class o{constructor(e,a,n,p,u){this.ContactTypes=e,this.fb=a,this.router=n,this.route=p,this.matDialog=u,this.displayedColumns=["ContactType","ContactDescription","Actions"],this.searchTextDisplay=!1,this.dataSource=[],this.form=this.fb.group({SRCH:""}),this.user=localStorage.getItem("userName")}ngOnInit(){this.getContactTypes()}getContactTypes(){this.ContactTypes.getContactTypes().subscribe(e=>{console.log(e),this.result=e,console.log(this.result);var a=this.result.data[1].value;console.log(a);var n=JSON.parse(a);console.log(n),console.log("DaTA"),this.dataSource=new i.by(n.returnedData),console.log(this.dataSource),console.log("DaTA"),this.dataSource.paginator=this.paginator})}searchContactTypes(){this.searchTextDisplay=1!=this.searchTextDisplay}addContactTypes(){this.matDialog.open(x,{width:"950px",height:"auto",maxHeight:"95vh"})}getUpdateForm(e){this.matDialog.open(U,{width:"950px",height:"auto",maxHeight:"95vh",data:e,autoFocus:!1})}deleteContactTypes(e){this.matDialog.open(E,{width:"1000px",maxHeight:"90vh",data:e,autoFocus:!1})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(f),t.Y36(r.qu),t.Y36(T.F0),t.Y36(T.gz),t.Y36(d.uw))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-ww-contact-types"]],viewQuery:function(e,a){if(1&e&&t.Gf(b.NW,5),2&e){let n;t.iGM(n=t.CRH())&&(a.paginator=n.first)}},standalone:!0,features:[t.jDz],decls:26,vars:8,consts:[[1,"over-Flow"],[1,"title"],[1,"buttons"],["mat-button","","class","addButton",3,"click",4,"ngIf"],["mat-button","","class","addButton","matTooltip","Search ContactTypes",3,"click",4,"ngIf"],["mat-button","","matTooltip","Add New ContactTypes",1,"addButton",3,"click"],[1,"tally-serach-form"],[3,"formGroup",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","ContactType"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","ContactDescription"],["matColumnDef","Actions"],["mat-header-cell","","class","tally_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-button","",1,"addButton",3,"click"],["mat-button","","matTooltip","Search ContactTypes",1,"addButton",3,"click"],[3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","SRCH",2,"text-transform","uppercase"],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"tally_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],["mat-icon-button","","color","warn"],["mat-header-row",""],["mat-row",""]],template:function(e,a){1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3,"Work With Contact Types"),t.qZA(),t.TgZ(4,"div",2),t.YNc(5,M,3,0,"button",3),t.YNc(6,S,3,0,"button",4),t.TgZ(7,"button",5),t.NdJ("click",function(){return a.addContactTypes()}),t.TgZ(8,"mat-icon"),t._uU(9,"add"),t.qZA()()()(),t.TgZ(10,"mat-card-content",6),t.YNc(11,F,9,1,"form",7),t.qZA(),t.TgZ(12,"table",8),t.ynx(13,9),t.YNc(14,k,2,0,"th",10),t.YNc(15,I,2,1,"td",11),t.BQk(),t.ynx(16,12),t.YNc(17,H,2,0,"th",10),t.YNc(18,q,2,1,"td",11),t.BQk(),t.ynx(19,13),t.YNc(20,B,1,0,"th",14),t.YNc(21,Q,18,0,"td",11),t.BQk(),t.YNc(22,G,1,0,"tr",15),t.YNc(23,O,1,0,"tr",16),t.qZA(),t._UZ(24,"mat-paginator",17,18),t.qZA()),2&e&&(t.xp6(5),t.Q6J("ngIf",a.searchTextDisplay),t.xp6(1),t.Q6J("ngIf",!a.searchTextDisplay),t.xp6(5),t.Q6J("ngIf",a.searchTextDisplay),t.xp6(1),t.Q6J("dataSource",a.dataSource),t.xp6(10),t.Q6J("matHeaderRowDef",a.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(7,R)))},dependencies:[h.m,J.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,b.NW,y.Hw,g.lW,m.KE,m.hX,Z.Nt,l.a8,l.dk,l.dn,l.n5,i.BZ,i.fO,i.as,i.w1,i.Dz,i.nj,i.ge,i.ev,i.XQ,i.Gk,W.gM]}),o})()}}]);