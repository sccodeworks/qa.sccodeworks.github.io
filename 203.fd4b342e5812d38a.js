"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[203,1790,8754,5645,2313],{11790:(G,y,m)=>{m.d(y,{y:()=>E});var f=m(65412),d=m(94650),T=m(97392),Z=m(4859);let e=(()=>{class C{constructor(h,a){this.dialogRef=h,this.data=a}ngOnInit(){}closeDialog(){this.dialogRef.close(!1)}}return C.\u0275fac=function(h){return new(h||C)(d.Y36(f.so),d.Y36(f.WI))},C.\u0275cmp=d.Xpm({type:C,selectors:[["app-alert-dialog"]],decls:10,vars:3,consts:[[1,"confirm-dialog-container"],[1,"content-container"],["id","close-icon",3,"click"],[1,"content-span","full-width"],["mat-flat-button","","id","no-button",3,"mat-dialog-close"],["mat-flat-button","","id","yes-button",3,"mat-dialog-close"]],template:function(h,a){1&h&&(d.TgZ(0,"div",0)(1,"div",1)(2,"mat-icon",2),d.NdJ("click",function(){return a.closeDialog()}),d._uU(3,"close "),d.qZA(),d.TgZ(4,"span",3),d._uU(5),d.qZA()(),d.TgZ(6,"button",4),d._uU(7,"Cancel"),d.qZA(),d.TgZ(8,"button",5),d._uU(9,"Delete"),d.qZA()()),2&h&&(d.xp6(5),d.Oqu(a.data.message),d.xp6(1),d.Q6J("mat-dialog-close",!1),d.xp6(2),d.Q6J("mat-dialog-close",!0))},dependencies:[T.Hw,Z.lW,f.ZT]}),C})(),E=(()=>{class C{constructor(h){this.dialog=h}openCustomAlert(h){return this.dialog.open(e,{width:"450px",panelClass:"confirm-dialog-container",disableClose:!0,data:{message:h}})}}return C.\u0275fac=function(h){return new(h||C)(d.LFG(f.uw))},C.\u0275prov=d.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})()},60203:(G,y,m)=>{m.r(y),m.d(y,{LedgerCodesComponent:()=>j});var f=m(65412),d=m(70879),T=m(35226),Z=m.n(T),e=m(94650),E=m(19132),C=m(46546),s=m(24006),h=m(97392),a=m(4859),i=m(59549),p=m(44144),l=m(73546);let L=(()=>{class r{constructor(t,o,n,c,g){this.anyvariable=t,this.router=o,this.LedgerCodes=n,this.fb=c,this.dialogRef=g,this.result=[],this.user=localStorage.getItem("userName")}ngOnDestroy(){this.LcSubscription&&this.LcSubscription.unsubscribe()}ngOnInit(){console.log(this.anyvariable),this.form=this.fb.group({LedgerCode:this.anyvariable.LELEGC+"\xa0"+this.anyvariable.LELEGS+"\xa0"+this.anyvariable.LEDESC,LECC:this.anyvariable.LECC,LEGC:"",LEGS:"",LELEGC:this.anyvariable.LELEGC})}Consolidate(){var t=this.form.value;console.log(t),this.LcSubscription&&this.LcSubscription.unsubscribe(),this.LcSubscription=this.LedgerCodes.LedgerCodesConsolidate(this.anyvariable.LELEGC,this.anyvariable.LELEGS,t.LEGC,t.LEGS).subscribe(o=>{console.log(o),this.result=o,console.log(this.result);var n=o[0].data.length;const c=o[0].data[n-1].value;"Updated Successfully"===c?(this.successMessage(c),this.closeDialog(),this.router.navigate(["/main-nav/ledgerCode/read"])):this.failureMessage(o[0].data[n-1].value)})}successMessage(t){Z().fire(t,"","success")}failureMessage(t){Z().fire(t,"","error")}closeDialog(){this.dialogRef.close()}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(f.WI),e.Y36(E.F0),e.Y36(C.f),e.Y36(s.qu),e.Y36(f.so))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-consolidate-ledger-code"]],standalone:!0,features:[e.jDz],decls:35,vars:2,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["readonly","","matInput","","formControlName","LedgerCode"],["readonly","","matInput","","formControlName","LECC",2,"text-transform","uppercase"],[1,"form-group1"],["for","inputField",1,"form-heading","full-width2"],[1,"form-input"],["required","","matInput","","formControlName","LEGC","maxlength","4"],["matInput","","formControlName","LEGS","maxlength","2"],["mat-button","",1,"buttons","removeButton",3,"disabled","click"]],template:function(t,o){1&t&&(e.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),e._uU(4," Consolidate Ledger Code References "),e.qZA()(),e.TgZ(5,"button",2),e.NdJ("click",function(){return o.closeDialog()}),e.TgZ(6,"mat-icon",3),e._uU(7,"close"),e.qZA()()(),e.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),e._uU(14,"Ledger Code"),e.qZA(),e._UZ(15,"input",9),e.qZA(),e.TgZ(16,"mat-form-field",8)(17,"mat-label"),e._uU(18,"Cost Center"),e.qZA(),e._UZ(19,"input",10),e.qZA(),e.TgZ(20,"div",11)(21,"label",12),e._uU(22,"Consolidate all references to"),e.qZA(),e.TgZ(23,"div",13)(24,"mat-form-field",8)(25,"mat-label"),e._uU(26,"Ledger Code"),e.qZA(),e._UZ(27,"input",14),e.qZA(),e.TgZ(28,"mat-form-field",8)(29,"mat-label"),e._uU(30,"Ledger Code Suffix"),e.qZA(),e._UZ(31,"input",15),e.qZA()()(),e._UZ(32,"br"),e.qZA()(),e.TgZ(33,"button",16),e.NdJ("click",function(){return o.Consolidate()}),e._uU(34,"Consolidate"),e.qZA()()()()),2&t&&(e.xp6(9),e.Q6J("formGroup",o.form),e.xp6(24),e.Q6J("disabled",!o.form.valid))},dependencies:[d.m,s._Y,s.Fj,s.JJ,s.JL,s.Q7,s.nD,s.sg,s.u,h.Hw,a.lW,i.KE,i.hX,p.Nt,l.a8,l.dk,l.dn,l.n5]}),r})();var _=m(11790);let v=(()=>{class r{constructor(t,o,n,c,g,S){this.LedgerCodes=t,this.fb=o,this.anyvariable=n,this.router=c,this.CustomAlertService=g,this.dialogRef=S,this.user=localStorage.getItem("userName")}ngOnInit(){console.log(this.anyvariable),this.form=this.fb.group({LELEGC:this.anyvariable.LELEGC,LELEGS:this.anyvariable.LELEGS,LEDESC:this.anyvariable.LEDESC}),this.form.disable()}ngOnDestroy(){this.deleteLedgerSubscription&&this.deleteLedgerSubscription.unsubscribe()}deleteLedgerCodes(){this.CustomAlertService.openCustomAlert("Are you sure want to delete this Ledger Code ? ").afterClosed().subscribe(o=>{o&&(this.deleteLedgerSubscription&&this.deleteLedgerSubscription.unsubscribe(),this.deleteLedgerSubscription=this.LedgerCodes.deleteLedgerCodes(this.user,this.anyvariable.LELEGC.toString().padStart(4,"0"),this.anyvariable.LELEGS).subscribe(n=>{this.result=n,console.log(this.result);var c=n[0].data.length;const g=n[0].data[c-1].value;"Deleted Successfully"===g?(this.successMessage(g),this.closeDialog(),this.router.navigate(["/main-nav/ledgerCode/read"])):this.failureMessage(n[0].data[c-1].value)}))})}successMessage(t){Z().fire(t,"","success"),this.router.navigate(["/main-nav/ledgerCode/read"])}failureMessage(t){Z().fire(t,"","error")}closeDialog(){this.dialogRef.close()}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(C.f),e.Y36(s.qu),e.Y36(f.WI),e.Y36(E.F0),e.Y36(_.y),e.Y36(f.so))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-delete-ledger-code"]],standalone:!0,features:[e.jDz],decls:27,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","readonly","","formControlName","LELEGC",2,"text-transform","uppercase"],["matInput","","formControlName","LELEGS"],["appearance","outline",1,"full-width","w-100"],["matInput","","readonly","","required","","formControlName","LEDESC"],["mat-button","",1,"buttons","removeButton",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),e._uU(4,"Delete a Ledger Code"),e.qZA()(),e.TgZ(5,"button",2),e.NdJ("click",function(){return o.closeDialog()}),e.TgZ(6,"mat-icon",3),e._uU(7,"close"),e.qZA()()(),e.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),e._uU(14,"Ledger Code"),e.qZA(),e._UZ(15,"input",9),e.qZA(),e.TgZ(16,"mat-form-field",8)(17,"mat-label"),e._uU(18,"Ledger Sub Code"),e.qZA(),e._UZ(19,"input",10),e.qZA(),e.TgZ(20,"mat-form-field",11)(21,"mat-label"),e._uU(22,"Ledger Code Description"),e.qZA(),e.TgZ(23,"textarea",12),e._uU(24," Ledger Code Description"),e.qZA()()()(),e.TgZ(25,"button",13),e.NdJ("click",function(){return o.deleteLedgerCodes()}),e._uU(26,"Delete"),e.qZA()()()()),2&t&&(e.xp6(9),e.Q6J("formGroup",o.form))},dependencies:[d.m,s._Y,s.Fj,s.JJ,s.JL,s.Q7,s.sg,s.u,h.Hw,a.lW,i.KE,i.hX,p.Nt,l.a8,l.dk,l.dn,l.n5]}),r})(),A=(()=>{class r{constructor(t,o,n,c,g){this.anyvariable=t,this.router=o,this.LedgerCodes=n,this.fb=c,this.dialogRef=g,this.result=[],this.user=localStorage.getItem("userName")}ngOnInit(){console.log(this.anyvariable),this.form=this.fb.group({LELEGC:this.anyvariable.LELEGC,LELEGS:this.anyvariable.LELEGS,LEDESC:this.anyvariable.LEDESC,LECC:this.anyvariable.LECC,LECSFX:this.anyvariable.LECSFX})}ngOnDestroy(){this.getLedgerCodeSubscription&&this.getLedgerCodeSubscription.unsubscribe()}updateLedgerCodes(){var t=this.form.value;console.log(t),this.getLedgerCodeSubscription&&this.getLedgerCodeSubscription.unsubscribe(),this.getLedgerCodeSubscription=this.LedgerCodes.updateLedgerCodes(t.LELEGC,t.LELEGS,t.LEDESC,t.LECC,t.LECSFX,this.user).subscribe(o=>{if(console.log(o),JSON.parse(o[0].data[1].value).success){const n=JSON.parse(o[0].data[1].value).returnedData.message;this.successMessage(n),this.closeDialog(),this.router.navigateByUrl("/main-nav/ledgerCode/read")}else{const n=JSON.parse(o[0].data[1].value).returnedData.message;this.failureMessage(n)}})}successMessage(t){Z().fire(t,"","success")}failureMessage(t){Z().fire(t,"","error")}closeDialog(){this.dialogRef.close()}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(f.WI),e.Y36(E.F0),e.Y36(C.f),e.Y36(s.qu),e.Y36(f.so))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-edit-ledger-code"]],standalone:!0,features:[e.jDz],decls:35,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","LELEGC"],["matInput","","formControlName","LELEGS"],["appearance","outline",1,"full-width","w-100"],["matInput","","formControlName","LEDESC"],["matInput","","formControlName","LECC"],["matInput","","formControlName","LECSFX"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),e._uU(4,"Maintain a Ledger Code"),e.qZA()(),e.TgZ(5,"button",2),e.NdJ("click",function(){return o.closeDialog()}),e.TgZ(6,"mat-icon",3),e._uU(7,"close"),e.qZA()()(),e.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),e._uU(14,"Ledger Code"),e.qZA(),e._UZ(15,"input",9),e.qZA(),e.TgZ(16,"mat-form-field",8)(17,"mat-label"),e._uU(18,"Ledger Sub Code "),e.qZA(),e._UZ(19,"input",10),e.qZA(),e.TgZ(20,"mat-form-field",11)(21,"mat-label"),e._uU(22,"Ledger Code Description"),e.qZA(),e.TgZ(23,"textarea",12),e._uU(24," Ledger Code Description"),e.qZA()(),e.TgZ(25,"mat-form-field",8)(26,"mat-label"),e._uU(27,"Cost Center Code"),e.qZA(),e._UZ(28,"input",13),e.qZA(),e.TgZ(29,"mat-form-field",8)(30,"mat-label"),e._uU(31,"Cost Center Suffix"),e.qZA(),e._UZ(32,"input",14),e.qZA()()(),e.TgZ(33,"button",15),e.NdJ("click",function(){return o.updateLedgerCodes()}),e._uU(34," Update "),e.qZA()()()()),2&t&&(e.xp6(9),e.Q6J("formGroup",o.form))},dependencies:[d.m,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,h.Hw,a.lW,i.KE,i.hX,p.Nt,l.a8,l.dk,l.dn,l.n5]}),r})(),N=(()=>{class r{constructor(t,o,n,c,g,S){this.anyvariable=t,this.LedgerCodes=o,this.router=n,this.fb=c,this.route=g,this.dialogRef=S,this.user=localStorage.getItem("userName")}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}ngOnInit(){this.form=this.fb.group({LELEGC:0,LELEGS:"",LEDESC:["",[s.kI.required]],LECC:["",[s.kI.required]],LECSFX:["",[s.kI.required]]})}addLedgerCodes(){var t=this.form.value;console.log(t),this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.LedgerCodes.createLedgerCodes(t.LELEGC,t.LELEGS,t.LEDESC,t.LECC.toUpperCase(),t.LECSFX,this.user).subscribe(o=>{if(JSON.parse(o[0].data[1].value).success){const n=JSON.parse(o[0].data[1].value).returnedData.message;this.successMessage(n),this.closeDialog(),this.router.navigateByUrl("/main-nav/ledgerCode/read",{state:this.anyvariable})}else{const n=JSON.parse(o[0].data[1].value).returnedData.message;this.failureMessage(n)}})}successMessage(t){Z().fire(t,"","success")}failureMessage(t){Z().fire(t,"","error")}closeDialog(){this.dialogRef.close()}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(f.WI),e.Y36(C.f),e.Y36(E.F0),e.Y36(s.qu),e.Y36(E.gz),e.Y36(f.so))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-add-ledger-code"]],standalone:!0,features:[e.jDz],decls:35,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","LELEGC"],["matInput","","formControlName","LELEGS",2,"text-transform","uppercase"],["appearance","outline",1,"full-width","w-100"],["matInput","","required","","formControlName","LEDESC"],["matInput","","required","","formControlName","LECC",2,"text-transform","uppercase"],["matInput","","required","","formControlName","LECSFX"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),e._uU(4,"Maintain a Ledger Code"),e.qZA()(),e.TgZ(5,"button",2),e.NdJ("click",function(){return o.closeDialog()}),e.TgZ(6,"mat-icon",3),e._uU(7,"close"),e.qZA()()(),e.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),e._uU(14,"Ledger Code"),e.qZA(),e._UZ(15,"input",9),e.qZA(),e.TgZ(16,"mat-form-field",8)(17,"mat-label"),e._uU(18,"Ledger Sub Code "),e.qZA(),e._UZ(19,"input",10),e.qZA(),e.TgZ(20,"mat-form-field",11)(21,"mat-label"),e._uU(22,"Ledger Code Description"),e.qZA(),e.TgZ(23,"textarea",12),e._uU(24," Ledger Code Description"),e.qZA()(),e.TgZ(25,"mat-form-field",8)(26,"mat-label"),e._uU(27,"Cost Center Code"),e.qZA(),e._UZ(28,"input",13),e.qZA(),e.TgZ(29,"mat-form-field",8)(30,"mat-label"),e._uU(31,"Cost Center Suffix"),e.qZA(),e._UZ(32,"input",14),e.qZA()()(),e.TgZ(33,"button",15),e.NdJ("click",function(){return o.addLedgerCodes()}),e._uU(34," Add "),e.qZA()()()()),2&t&&(e.xp6(9),e.Q6J("formGroup",o.form))},dependencies:[d.m,s._Y,s.Fj,s.JJ,s.JL,s.Q7,s.sg,s.u,h.Hw,a.lW,i.KE,i.hX,p.Nt,l.a8,l.dk,l.dn,l.n5]}),r})();var D=m(98739),b=m(7155),q=m(36895),x=m(10266);function I(r,u){if(1&r){const t=e.EpF();e.TgZ(0,"button",23),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.searchLedgerCodes())}),e.TgZ(1,"mat-icon"),e._uU(2,"clear"),e.qZA()()}}function w(r,u){if(1&r){const t=e.EpF();e.TgZ(0,"button",24),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.searchLedgerCodes())}),e.TgZ(1,"mat-icon"),e._uU(2,"search"),e.qZA()()}}function J(r,u){if(1&r){const t=e.EpF();e.TgZ(0,"form",25)(1,"div",26)(2,"div",27)(3,"mat-form-field",28)(4,"mat-label"),e._uU(5,"Ledger Code"),e.qZA(),e._UZ(6,"input",29),e.qZA()()(),e.TgZ(7,"button",30),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.getLedgerCodesBySearch(n.form.value))}),e._uU(8," Search "),e.qZA()()}if(2&r){const t=e.oxw();e.Q6J("formGroup",t.form)}}function k(r,u){1&r&&(e.TgZ(0,"th",31),e._uU(1,"Ledger Code"),e.qZA())}function F(r,u){if(1&r&&(e.TgZ(0,"td",32),e._uU(1),e.qZA()),2&r){const t=u.$implicit;e.xp6(1),e.Oqu(t.LELEGC)}}function R(r,u){1&r&&(e.TgZ(0,"th",31),e._uU(1,"Sub Code"),e.qZA())}function Y(r,u){if(1&r&&(e.TgZ(0,"td",32),e._uU(1),e.qZA()),2&r){const t=u.$implicit;e.xp6(1),e.Oqu(t.LELEGS)}}function M(r,u){1&r&&(e.TgZ(0,"th",31),e._uU(1,"Description"),e.qZA())}function O(r,u){if(1&r&&(e.TgZ(0,"td",32),e._uU(1),e.qZA()),2&r){const t=u.$implicit;e.xp6(1),e.Oqu(t.LEDESC)}}function $(r,u){1&r&&(e.TgZ(0,"th",31),e._uU(1,"Cost Center"),e.qZA())}function B(r,u){if(1&r&&(e.TgZ(0,"td",32),e._uU(1),e.qZA()),2&r){const t=u.$implicit;e.xp6(1),e.Oqu(t.LECC)}}function P(r,u){1&r&&(e.TgZ(0,"th",31),e._uU(1,"Sub Center"),e.qZA())}function H(r,u){if(1&r&&(e.TgZ(0,"td",32),e._uU(1),e.qZA()),2&r){const t=u.$implicit;e.xp6(1),e.Oqu(t.LECSFX)}}function K(r,u){1&r&&e._UZ(0,"th",33)}function Q(r,u){if(1&r){const t=e.EpF();e.TgZ(0,"td",32)(1,"div",34)(2,"button",35)(3,"mat-icon"),e._uU(4,"more_vert"),e.qZA()(),e.TgZ(5,"ul",36)(6,"li")(7,"button",37),e.NdJ("click",function(){const c=e.CHM(t).$implicit,g=e.oxw();return e.KtG(g.updateLedgerCodes(c))}),e.TgZ(8,"mat-icon",38),e._uU(9,"edit"),e.qZA(),e.TgZ(10,"mat-label"),e._uU(11,"Change"),e.qZA()()(),e.TgZ(12,"li")(13,"button",39),e.NdJ("click",function(){const c=e.CHM(t).$implicit,g=e.oxw();return e.KtG(g.deleteLedger(c))}),e.TgZ(14,"mat-icon",40),e._uU(15,"delete"),e.qZA(),e.TgZ(16,"mat-label"),e._uU(17,"Delete"),e.qZA()()(),e.TgZ(18,"li")(19,"button",39),e.NdJ("click",function(){const c=e.CHM(t).$implicit,g=e.oxw();return e.KtG(g.lcAttributesForm(c))}),e.TgZ(20,"mat-icon",38),e._uU(21,"description"),e.qZA(),e.TgZ(22,"mat-label"),e._uU(23,"Entity Attributes"),e.qZA()()(),e.TgZ(24,"li")(25,"button",39),e.NdJ("click",function(){const c=e.CHM(t).$implicit,g=e.oxw();return e.KtG(g.consolidate(c))}),e.TgZ(26,"mat-icon",38),e._uU(27,"call_made"),e.qZA(),e.TgZ(28,"mat-label"),e._uU(29,"Consolidate"),e.qZA()()(),e.TgZ(30,"li")(31,"button",39),e.NdJ("click",function(){const c=e.CHM(t).$implicit,g=e.oxw();return e.KtG(g.ledgerCodesTransactions(c))}),e.TgZ(32,"mat-icon",38),e._uU(33,"description"),e.qZA(),e.TgZ(34,"mat-label"),e._uU(35,"Transactions"),e.qZA()()(),e.TgZ(36,"li")(37,"button",39),e.NdJ("click",function(){const c=e.CHM(t).$implicit,g=e.oxw();return e.KtG(g.ledgerCodeRevInquiry(c))}),e.TgZ(38,"mat-icon",38),e._uU(39,"edit"),e.qZA(),e.TgZ(40,"mat-label"),e._uU(41,"Revenue Inquiry"),e.qZA()()(),e.TgZ(42,"li")(43,"button",39),e.NdJ("click",function(){const c=e.CHM(t).$implicit,g=e.oxw();return e.KtG(g.ledgerCodeRevenue(c))}),e.TgZ(44,"mat-icon",38),e._uU(45,"description"),e.qZA(),e.TgZ(46,"mat-label"),e._uU(47,"Revenue Report"),e.qZA()()()()()()}}function X(r,u){1&r&&e._UZ(0,"tr",41)}function z(r,u){1&r&&e._UZ(0,"tr",42)}const W=function(){return[8,16,24]};let j=(()=>{class r{constructor(t,o,n,c,g){this.router=t,this.fb=o,this.route=n,this.matDialog=c,this.ledgerCodesService=g,this.BASE_ROUTE="/main-nav/ledgerCode",this.INITIAL_PAGE=1,this.DEFAULT_PAGE_SIZE=8,this.displayedColumns=["LedgerCode","SubCode","Description","CostCenter","SubCenter","Actions"],this.searchTextDisplay=!1,this.user=localStorage.getItem("userName"),this.editedRows=[],this.dataSource=new b.by,this.duplicateSource=[],this.pageSize=8,this.totalRecords=0,this.currentFilters=null}ngOnInit(){this.form=this.fb.group({SRCH:"0"}),this.getLedgerCodes(this.pageSize,this.INITIAL_PAGE),this.dataSource.filterPredicate=this.createFilter()}ngOnDestroy(){this.ledgerCodeSubscription&&this.ledgerCodeSubscription.unsubscribe()}searchLedgerCodes(){this.searchTextDisplay=1!=this.searchTextDisplay}getLedgerCodesBySearch(t){this.currentFilters=t,this.paginator.firstPage(),this.getLedgerCodes(this.DEFAULT_PAGE_SIZE,this.INITIAL_PAGE)}onPaginateChange(t){this.pageSize=t.pageSize,this.getLedgerCodes(t.pageSize,t.pageIndex+this.INITIAL_PAGE)}getLedgerCodes(t,o){const n=this.currentFilters||{},{SRCH:c=""}=n;this.ledgerCodeSubscription&&this.ledgerCodeSubscription.unsubscribe(),this.ledgerCodeSubscription=this.ledgerCodesService.getLedgerCodes(this.user,c,t,o).subscribe(g=>{const S=g?.[0]?.data?.[1]?.value;if(S)try{const U=JSON.parse(S);U?.returnedData?(this.dataSource.data=U.returnedData,this.totalRecords=U.TotalRecords||0):console.error("Returned data is undefined or null.")}catch(U){console.error("Error parsing response data:",U)}else console.error("Error fetching ledger codes")})}createFilter(){return(t,o)=>{const n=JSON.parse(o);return Object.keys(n).every(c=>t[c].toString().toLowerCase().includes(n[c].toLowerCase()))}}resetSearch(){this.form.reset(),this.currentFilters=null,this.paginator.firstPage(),this.getLedgerCodes(this.pageSize,this.INITIAL_PAGE)}addLedger(){this.matDialog.open(N,{width:"1000px",maxHeight:"80vh",autoFocus:!1})}updateLedgerCodes(t){this.matDialog.open(A,{width:"1000px",maxHeight:"80vh",data:t,autoFocus:!1})}deleteLedger(t){this.matDialog.open(v,{width:"1000px",maxHeight:"80vh",data:t,autoFocus:!1})}consolidate(t){this.matDialog.open(L,{width:"1000px",maxHeight:"80vh",data:t,autoFocus:!1})}lcAttributesForm(t){this.router.navigateByUrl(`${this.BASE_ROUTE}/attributes/read`,{state:t})}ledgerCodesTransactions(t){this.router.navigateByUrl(`${this.BASE_ROUTE}/receivable-details`,{state:t})}ledgerCodeRevenue(t){this.router.navigateByUrl(`${this.BASE_ROUTE}/revenue-report`,{state:t})}ledgerCodeRevInquiry(t){this.router.navigateByUrl(`${this.BASE_ROUTE}/revenue-inquiry`,{state:t})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(E.F0),e.Y36(s.qu),e.Y36(E.gz),e.Y36(f.uw),e.Y36(C.f))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-ledger-codes"]],viewQuery:function(t,o){if(1&t&&e.Gf(D.NW,5),2&t){let n;e.iGM(n=e.CRH())&&(o.paginator=n.first)}},standalone:!0,features:[e.jDz],decls:38,vars:10,consts:[[1,"over-Flow"],[1,"title"],[1,"buttons"],["mat-button","","class","addButton",3,"click",4,"ngIf"],["mat-button","","class","addButton","matTooltip","Search Ledger Codes",3,"click",4,"ngIf"],["mat-button","","matTooltip","Add New Ledger Code",1,"addButton",3,"click"],["mat-button","","type","reset","value","Reset","matTooltip","Reset Ledger Codes Values",1,"addButton","buttons",3,"click"],[1,"tally-serach-form"],[3,"formGroup",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","LedgerCode"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","SubCode"],["matColumnDef","Description"],["matColumnDef","CostCenter"],["matColumnDef","SubCenter"],["matColumnDef","Actions"],["mat-header-cell","","class","tally_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"length","pageSizeOptions","pageSize","page"],["paginator",""],["mat-button","",1,"addButton",3,"click"],["mat-button","","matTooltip","Search Ledger Codes",1,"addButton",3,"click"],[3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","SRCH"],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn",3,"click"],["mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"tally_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",1,"dropdown-item",3,"click"],["mat-icon-button","","color","primary"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","warn"],["mat-header-row",""],["mat-row",""]],template:function(t,o){1&t&&(e.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),e._uU(3," Work With Ledger Codes "),e.qZA(),e.TgZ(4,"div",2),e.YNc(5,I,3,0,"button",3),e.YNc(6,w,3,0,"button",4),e.TgZ(7,"button",5),e.NdJ("click",function(){return o.addLedger()}),e.TgZ(8,"mat-icon"),e._uU(9,"add"),e.qZA()(),e.TgZ(10,"button",6),e.NdJ("click",function(){return o.resetSearch()}),e.TgZ(11,"mat-icon"),e._uU(12,"loop"),e.qZA()()()(),e.TgZ(13,"mat-card-content",7),e.YNc(14,J,9,1,"form",8),e.qZA(),e.TgZ(15,"table",9),e.ynx(16,10),e.YNc(17,k,2,0,"th",11),e.YNc(18,F,2,1,"td",12),e.BQk(),e.ynx(19,13),e.YNc(20,R,2,0,"th",11),e.YNc(21,Y,2,1,"td",12),e.BQk(),e.ynx(22,14),e.YNc(23,M,2,0,"th",11),e.YNc(24,O,2,1,"td",12),e.BQk(),e.ynx(25,15),e.YNc(26,$,2,0,"th",11),e.YNc(27,B,2,1,"td",12),e.BQk(),e.ynx(28,16),e.YNc(29,P,2,0,"th",11),e.YNc(30,H,2,1,"td",12),e.BQk(),e.ynx(31,17),e.YNc(32,K,1,0,"th",18),e.YNc(33,Q,48,0,"td",12),e.BQk(),e.YNc(34,X,1,0,"tr",19),e.YNc(35,z,1,0,"tr",20),e.qZA(),e.TgZ(36,"mat-paginator",21,22),e.NdJ("page",function(c){return o.onPaginateChange(c)}),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("ngIf",o.searchTextDisplay),e.xp6(1),e.Q6J("ngIf",!o.searchTextDisplay),e.xp6(8),e.Q6J("ngIf",o.searchTextDisplay),e.xp6(1),e.Q6J("dataSource",o.dataSource),e.xp6(19),e.Q6J("matHeaderRowDef",o.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",o.displayedColumns),e.xp6(1),e.Q6J("length",o.totalRecords)("pageSizeOptions",e.DdM(9,W))("pageSize",o.pageSize))},dependencies:[d.m,q.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,D.NW,h.Hw,a.lW,i.KE,i.hX,p.Nt,l.a8,l.dk,l.dn,l.n5,b.BZ,b.fO,b.as,b.w1,b.Dz,b.nj,b.ge,b.ev,b.XQ,b.Gk,x.gM]}),r})()},46546:(G,y,m)=>{m.d(y,{f:()=>C});var f=m(80529),d=m(75625),T=m(70262),Z=m(62843),e=m(92340),E=m(94650);let C=(()=>{class s{constructor(a){this.httpClient=a,this.url=e.N.API_BASE_URL,this.httpHeader={headers:new f.WM({"Content-Type":"application/json"})}}getLedgerCodes(a,i,p,l){return this.httpClient.get(this.url+`/LedgerCodes/read?user=${a}&LedgerCode=${i}&recordsPerPage=${p}&pageNo=${l}`)}getAll(a){return this.httpClient.get(this.url+`/LedgerCodes/readAll?user=${a}`)}createLedgerCodes(a,i,p,l,L,_){return this.httpClient.post(this.url+"/LedgerCodes/create",{LELEGC:a,LELEGS:i,LEDESC:p,LECC:l,LECSFX:L,user:_}).pipe((0,d.X)(1),(0,T.K)(this.httpError))}updateLedgerCodes(a,i,p,l,L,_){return this.httpClient.put(this.url+"/LedgerCodes/update",{LELEGC:a,LELEGS:i,LEDESC:p,LECC:l,LECSFX:L,user:_}).pipe((0,d.X)(1),(0,T.K)(this.httpError))}deleteLedgerCodes(a,i,p){return this.httpClient.delete(this.url+`/LedgerCodes/delete?user=${a}&LedgerCode=${i}&LedgerSubCode=${p}`)}LedgerCodesConsolidate(a,i,p,l){return this.httpClient.put(this.url+"/LedgerCodes/consolidate",{LedgerCode1:a,LedgerSubCode1:i,LedgerCode2:p,LedgerSubCode2:l}).pipe((0,d.X)(1),(0,T.K)(this.httpError))}getLCTransactions(a,i,p,l,L){return this.httpClient.get(this.url+`/LedgerCodes/transactions/read?user=${a}&LedgerCode=${i}&LedgerSubCode=${p}&recordsPerPage=${l}&pageNo=${L}`)}updateLcTransactions(a,i,p,l,L,_,v,A){return this.httpClient.put(this.url+"/LedgerCodes/transactions/update",{user:a,InvoiceNum:i,SequenceNum:p,InvoiceDate:l,LineAmount:L,LedgerCode:_,LedgerSubCode:v,Building:A}).pipe((0,d.X)(1),(0,T.K)(this.httpError))}getLctInvInquiry(a,i){return this.httpClient.get(this.url+`/LedgerCodes/transactions/InvInquiry/read?user=${a}&InvoiceNum=${i}`)}getLctAdjInquiry(a,i){return this.httpClient.get(this.url+`/LedgerCodes/transactions/AdjInquiry/read?user=${a}&InvoiceNum=${i}`)}getLCAttributes(a,i,p,l){return this.httpClient.get(this.url+`/LedgerCodes/attributes/read?user=${a}&key=${i}&recordsPerPage=${p}&pageNo=${l}`)}LCAttributesCreate(a,i,p,l,L,_,v,A){return this.httpClient.post(this.url+"/LedgerCodes/attributes/create",{user:a,EAFLID:i,EAKEY:p,EAATRB:l,EAVALU:L,EASTAT:_,EATMST:v,EAUSER:A}).pipe((0,d.X)(1),(0,T.K)(this.httpError))}LCAttributesUpdate(a,i,p,l,L,_,v,A){return this.httpClient.put(this.url+"/LedgerCodes/attributes/update",{EAFLID:a,EAKEY:i,EAATRB:p,EAVALU:l,EASTAT:L,EATMST:_,EAUSER:v,user:A}).pipe((0,d.X)(1),(0,T.K)(this.httpError))}LCAttributesDelete(a,i){return this.httpClient.delete(this.url+`/LedgerCodes/attributes/delete?key=${a}&attribute=${i}`)}RevenueDistReport(a,i,p,l,L,_,v,A,N,D,b,q,x,I){return this.httpClient.put(this.url+"/LedgerCodes/LedgerCodesRevReport/update",{LedgerCode:a,LedgerCodeSuffix:i,StartDate:p,EndDate:l,StartingCustomer:L,StartingCustomerSuffix:_,StartingCustomerSuffix2:v,EndingCustomer:A,EndingCustomerSuffix:N,EndingCustomerSuffix2:D,StartingBuildingNumber:b,EndingBuildingNumber:q,OutPut:x,Email:I}).pipe((0,d.X)(1),(0,T.K)(this.httpError))}LCRevInquiry(a,i,p){return this.httpClient.get(this.url+`/LedgerCodes/LCRevInquiry/read?user=${a}&LedgerCode=${i}&LedgerSubCode=${p}`)}httpError(a){let i="";return i=a.error instanceof ErrorEvent?a.error.message:`Error Code: ${a.status}\nMessage: ${a.message}`,console.log(i),(0,Z._)(()=>new Error(i))}}return s.\u0275fac=function(a){return new(a||s)(E.LFG(f.eN))},s.\u0275prov=E.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()}}]);