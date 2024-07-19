"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[6931,1790,8754,5645,2313],{11790:(v,Z,m)=>{m.d(Z,{y:()=>w});var d=m(65412),l=m(94650),t=m(97392),s=m(4859);let g=(()=>{class p{constructor(r,W){this.dialogRef=r,this.data=W}ngOnInit(){}closeDialog(){this.dialogRef.close(!1)}}return p.\u0275fac=function(r){return new(r||p)(l.Y36(d.so),l.Y36(d.WI))},p.\u0275cmp=l.Xpm({type:p,selectors:[["app-alert-dialog"]],decls:10,vars:3,consts:[[1,"confirm-dialog-container"],[1,"content-container"],["id","close-icon",3,"click"],[1,"content-span","full-width"],["mat-flat-button","","id","no-button",3,"mat-dialog-close"],["mat-flat-button","","id","yes-button",3,"mat-dialog-close"]],template:function(r,W){1&r&&(l.TgZ(0,"div",0)(1,"div",1)(2,"mat-icon",2),l.NdJ("click",function(){return W.closeDialog()}),l._uU(3,"close "),l.qZA(),l.TgZ(4,"span",3),l._uU(5),l.qZA()(),l.TgZ(6,"button",4),l._uU(7,"Cancel"),l.qZA(),l.TgZ(8,"button",5),l._uU(9,"Delete"),l.qZA()()),2&r&&(l.xp6(5),l.Oqu(W.data.message),l.xp6(1),l.Q6J("mat-dialog-close",!1),l.xp6(2),l.Q6J("mat-dialog-close",!0))},dependencies:[t.Hw,s.lW,d.ZT]}),p})(),w=(()=>{class p{constructor(r){this.dialog=r}openCustomAlert(r){return this.dialog.open(g,{width:"450px",panelClass:"confirm-dialog-container",disableClose:!0,data:{message:r}})}}return p.\u0275fac=function(r){return new(r||p)(l.LFG(d.uw))},p.\u0275prov=l.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},86931:(v,Z,m)=>{m.r(Z),m.d(Z,{WwWorkwithoptionsComponent:()=>st});var d=m(65412),l=m(70879),t=m(94650),s=m(24006),g=m(97392),w=m(4859),p=m(59549),f=m(44144),r=m(73546);let W=(()=>{class e{constructor(o,n,a){this.anyvariable=o,this.fb=n,this.dialogRef=a,this.user=localStorage.getItem("userName")}ngOnDestroy(){this.getWorkwithoptionsSubscription&&this.getWorkwithoptionsSubscription.unsubscribe()}ngOnInit(){this.form=this.fb.group({WKPGM:"AAW01R",WKDESC:"Change",WKCALL:"AAU01R"})}statusblocksWorkwithoptions(){}closeDialog(){this.dialogRef.close()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(d.WI),t.Y36(s.qu),t.Y36(d.so))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ww-workwithoptions-statusblocks"]],standalone:!0,features:[t.jDz],decls:30,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],[1,"form-group1"],["for","inputField",1,"form-heading"],[1,"form-input"],["appearance","outline",1,"full-width"],["matInput","","formControlName","WKPGM","readonly",""],["matInput","","formControlName","WKDESC","readonly",""],["matInput","","formControlName","WKCALL","readonly",""],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(o,n){1&o&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Blocked Status Codes"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return n.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"div",8)(13,"label",9),t._uU(14,"Work With Program"),t.qZA(),t.TgZ(15,"div",10)(16,"mat-form-field",11)(17,"mat-label"),t._uU(18,"Work With Program"),t.qZA(),t._UZ(19,"input",12),t.qZA(),t.TgZ(20,"mat-form-field",11)(21,"mat-label"),t._uU(22,"Description"),t.qZA(),t._UZ(23,"input",13),t.qZA()()(),t.TgZ(24,"mat-form-field",11)(25,"mat-label"),t._uU(26,"Program To Call"),t.qZA(),t._UZ(27,"input",14),t.qZA()()(),t.TgZ(28,"button",15),t.NdJ("click",function(){return n.statusblocksWorkwithoptions()}),t._uU(29,"Status Blocks"),t.qZA()()()()),2&o&&(t.xp6(9),t.Q6J("formGroup",n.form))},dependencies:[l.m,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,g.Hw,w.lW,p.KE,p.hX,f.Nt,r.a8,r.dk,r.dn,r.n5],styles:[".form-heading[_ngcontent-%COMP%]{width:153px}"]}),e})();var T=m(35226),C=m.n(T),k=m(7943),_=m(19132);let O=(()=>{class e{constructor(o,n,a,c,u){this.anyvariable=o,this.WorkwithOptions=n,this.dialogRef=a,this.router=c,this.fb=u,this.result=[],this.user=localStorage.getItem("userName")}ngOnDestroy(){this.getWorkwithOptionsSubscription&&this.getWorkwithOptionsSubscription.unsubscribe()}ngOnInit(){console.log(this.anyvariable),this.form=this.fb.group({WKPGM:"",WKOPT:"",WKDESC:"",WKCALL:"",WKDISP:"",WKRFSH:"",WKUSER:""})}updateWorkwithOptions(){var o=this.form.value;console.log(o),this.getWorkwithOptionsSubscription&&this.getWorkwithOptionsSubscription.unsubscribe(),this.getWorkwithOptionsSubscription=this.WorkwithOptions.updateWorkwithOptions(o.WKPGM,o.WKOPT,o.WKDESC,o.WKCALL,o.WKDISP,o.WKRFSH,o.WKUSER,this.user).subscribe(n=>{if(console.log(n),JSON.parse(n.success))this.successMessage("WorkwithOptions updated successfully"),this.closeDialog(),this.router.navigate(["/main-nav/WorkwithOptions/read"]);else{const a=JSON.parse(n[0].data[1].value).returnedData.message;this.failureMessage(a)}})}successMessage(o){C().fire(o,"","success")}failureMessage(o){C().fire(o,"","error")}closeDialog(){this.dialogRef.close()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(d.WI),t.Y36(k.k),t.Y36(d.so),t.Y36(_.F0),t.Y36(s.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ww-workwithoptions-update"]],standalone:!0,features:[t.jDz],decls:42,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","WKPGM",2,"text-transform","uppercase"],["matInput","","formControlName","WKOPT",2,"text-transform","uppercase"],["matInput","","formControlName","WKDESC",2,"text-transform","uppercase"],["matInput","","formControlName","WKCALL",2,"text-transform","uppercase"],["matInput","","formControlName","WKDISP",2,"text-transform","uppercase"],["matInput","","formControlName","WKRFSH",2,"text-transform","uppercase"],["matInput","","formControlName","WKUSER",2,"text-transform","uppercase"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(o,n){1&o&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Maintain Work With Options"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return n.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"Work With Program"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18,"Option"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",8)(21,"mat-label"),t._uU(22,"Screen Description"),t.qZA(),t._UZ(23,"input",11),t.qZA(),t.TgZ(24,"mat-form-field",8)(25,"mat-label"),t._uU(26,"Program To Call"),t.qZA(),t._UZ(27,"input",12),t.qZA(),t.TgZ(28,"mat-form-field",8)(29,"mat-label"),t._uU(30,"Display"),t.qZA(),t._UZ(31,"input",13),t.qZA(),t.TgZ(32,"mat-form-field",8)(33,"mat-label"),t._uU(34,"Refresh"),t.qZA(),t._UZ(35,"input",14),t.qZA(),t.TgZ(36,"mat-form-field",8)(37,"mat-label"),t._uU(38,"User Profile"),t.qZA(),t._UZ(39,"input",15),t.qZA()()(),t.TgZ(40,"button",16),t.NdJ("click",function(){return n.updateWorkwithOptions()}),t._uU(41,"Update"),t.qZA()()()()),2&o&&(t.xp6(9),t.Q6J("formGroup",n.form))},dependencies:[l.m,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,g.Hw,w.lW,p.KE,p.hX,f.Nt,r.a8,r.dk,r.dn,r.n5]}),e})(),S=(()=>{class e{constructor(o,n,a,c){this.data=o,this.dialogRef=n,this.router=a,this.fb=c}closeDialog(){this.dialogRef.close()}ngOnInit(){this.form=this.fb.group({WKPGM:"AAW01R",WKUSER:"PUBLIC",WKOPT:"2",WKCALL:"AAU01R",WKDESC:"Change",WKDISP:"Y",WKRFSH:"Y"})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(d.WI),t.Y36(d.so),t.Y36(_.F0),t.Y36(s.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ww-workwithoptions-copy"]],standalone:!0,features:[t.jDz],decls:42,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","WKPGM",2,"text-transform","uppercase"],["matInput","","formControlName","WKUSER",2,"text-transform","uppercase"],["matInput","","formControlName","WKOPT",2,"text-transform","uppercase"],["matInput","","formControlName","WKCALL",2,"text-transform","uppercase"],["matInput","","formControlName","WKDESC",2,"text-transform","uppercase"],["matInput","","formControlName","WKDISP",2,"text-transform","uppercase"],["matInput","","formControlName","WKRFSH",2,"text-transform","uppercase"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn"]],template:function(o,n){1&o&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Copy An Option"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return n.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"Program Name "),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18,"User Name"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",8)(21,"mat-label"),t._uU(22,"Option Number"),t.qZA(),t._UZ(23,"input",11),t.qZA(),t.TgZ(24,"mat-form-field",8)(25,"mat-label"),t._uU(26,"Program To Call"),t.qZA(),t._UZ(27,"input",12),t.qZA(),t.TgZ(28,"mat-form-field",8)(29,"mat-label"),t._uU(30,"Option Description"),t.qZA(),t._UZ(31,"input",13),t.qZA(),t.TgZ(32,"mat-form-field",8)(33,"mat-label"),t._uU(34,"Option To Display"),t.qZA(),t._UZ(35,"input",14),t.qZA(),t.TgZ(36,"mat-form-field",8)(37,"mat-label"),t._uU(38,"Refresh Afterward"),t.qZA(),t._UZ(39,"input",15),t.qZA()()(),t.TgZ(40,"button",16),t._uU(41,"Copy"),t.qZA()()()()),2&o&&(t.xp6(9),t.Q6J("formGroup",n.form))},dependencies:[l.m,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,g.Hw,w.lW,p.KE,p.hX,f.Nt,r.a8,r.dk,r.dn,r.n5]}),e})();var A=m(11790);let D=(()=>{class e{constructor(o,n,a,c,u,b){this.WorkwithOptions=o,this.fb=n,this.anyvariable=a,this.dialogRef=c,this.router=u,this.CustomAlertService=b,this.user=localStorage.getItem("userName")}ngOnInit(){this.form=this.fb.group({WKPGM:"",WKUSER:"",WKOPT:"",WKDESC:""})}ngOnDestroy(){this.deleteWorkwithOptionsSubscription&&this.deleteWorkwithOptionsSubscription.unsubscribe()}deleteWorkwithOptions(){this.CustomAlertService.openCustomAlert("Are you sure you want to delete this WorkwithOptions").afterClosed().subscribe(n=>{n&&(this.deleteWorkwithOptionsSubscription&&this.deleteWorkwithOptionsSubscription.unsubscribe(),this.deleteWorkwithOptionsSubscription=this.WorkwithOptions.deleteWorkwithOptions(this.user,this.anyvariable.WKPGM).subscribe(a=>{if(this.result=a,console.log(this.result),JSON.parse(this.result.success))this.successMessage("WorkwithOptions deleted successfully"),this.closeDialog(),this.router.navigate(["/main-nav/WorkwithOptions/read"]);else{const c=JSON.parse(this.result[0].data[1].value).returnedData.message;this.failureMessage(c)}}))})}successMessage(o){C().fire(o,"","success"),this.router.navigate(["/main-nav/WorkwithOptions/read"])}failureMessage(o){C().fire(o,"","error")}closeDialog(){this.dialogRef.close()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(k.k),t.Y36(s.qu),t.Y36(d.WI),t.Y36(d.so),t.Y36(_.F0),t.Y36(A.y))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ww-workwithoptions-delete"]],standalone:!0,features:[t.jDz],decls:30,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","WKPGM",2,"text-transform","uppercase"],["matInput","","formControlName","WKUSER",2,"text-transform","uppercase"],["matInput","","formControlName","WKOPT",2,"text-transform","uppercase"],["matInput","","formControlName","WKDESC",2,"text-transform","uppercase"],["mat-button","",1,"buttons","removeButton",3,"click"]],template:function(o,n){1&o&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Option Deletion"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return n.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"Work With Program"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18,"User Profile"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",8)(21,"mat-label"),t._uU(22,"Option Number"),t.qZA(),t._UZ(23,"input",11),t.qZA(),t.TgZ(24,"mat-form-field",8)(25,"mat-label"),t._uU(26,"Screen Description"),t.qZA(),t._UZ(27,"input",12),t.qZA()()(),t.TgZ(28,"button",13),t.NdJ("click",function(){return n.deleteWorkwithOptions()}),t._uU(29,"Delete"),t.qZA()()()()),2&o&&(t.xp6(9),t.Q6J("formGroup",n.form))},dependencies:[l.m,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,g.Hw,w.lW,p.KE,p.hX,f.Nt,r.a8,r.dk,r.dn,r.n5]}),e})(),N=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ww-workwithoptions-notes"]],standalone:!0,features:[t.jDz],decls:2,vars:0,template:function(o,n){1&o&&(t.TgZ(0,"p"),t._uU(1,"ww-workwithoptions-notes works!"),t.qZA())},dependencies:[l.m]}),e})();var q=m(99941),U=m(98739),h=m(7155),x=m(36895),y=m(28255),K=m(10266),Y=m(90455);function I(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"button",28),t.NdJ("click",function(){t.CHM(o);const a=t.oxw();return t.KtG(a.searchWorkwithOptions())}),t.TgZ(1,"mat-icon"),t._uU(2,"clear"),t.qZA()()}}function J(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"button",29),t.NdJ("click",function(){t.CHM(o);const a=t.oxw();return t.KtG(a.searchWorkwithOptions())}),t.TgZ(1,"mat-icon"),t._uU(2,"search"),t.qZA()()}}function P(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"span",30),t.NdJ("click",function(a){return a.stopPropagation()}),t.TgZ(1,"mat-slide-toggle",31),t.NdJ("ngModelChange",function(a){const u=t.CHM(o).$implicit;return t.KtG(u.isActive=a)})("change",function(){const c=t.CHM(o).$implicit,u=t.oxw();return t.KtG(u.toggleColumn(c))}),t._uU(2),t.qZA(),t._UZ(3,"br"),t.qZA()}if(2&e){const o=i.$implicit;t.xp6(1),t.Q6J("ngModel",o.isActive),t.xp6(1),t.hij(" ",o.name," ")}}function F(e,i){if(1&e&&(t.TgZ(0,"form",32)(1,"div",33)(2,"div",34)(3,"mat-form-field",35)(4,"mat-label"),t._uU(5,"Work With Program"),t.qZA(),t._UZ(6,"input",36),t.qZA(),t.TgZ(7,"mat-form-field",35)(8,"mat-label"),t._uU(9,"Program To Call"),t.qZA(),t._UZ(10,"input",37),t.qZA(),t.TgZ(11,"mat-form-field",35)(12,"mat-label"),t._uU(13,"User Profile"),t.qZA(),t._UZ(14,"input",38),t.qZA(),t.TgZ(15,"mat-form-field",35)(16,"mat-label"),t._uU(17,"Option"),t.qZA(),t._UZ(18,"input",39),t.qZA()()(),t.TgZ(19,"button",40),t._uU(20," Search "),t.qZA()()),2&e){const o=t.oxw();t.Q6J("formGroup",o.form)}}function M(e,i){1&e&&(t.TgZ(0,"th",41),t._uU(1,"Work With Program"),t.qZA())}function R(e,i){if(1&e&&(t.TgZ(0,"td",42),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.WKPGM)}}function H(e,i){1&e&&(t.TgZ(0,"th",41),t._uU(1,"Program To Call"),t.qZA())}function L(e,i){if(1&e&&(t.TgZ(0,"td",42),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.WKCALL)}}function G(e,i){1&e&&(t.TgZ(0,"th",41),t._uU(1,"Option No"),t.qZA())}function B(e,i){if(1&e&&(t.TgZ(0,"td",42),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.WKOPT)}}function E(e,i){1&e&&(t.TgZ(0,"th",41),t._uU(1,"Description"),t.qZA())}function Q(e,i){if(1&e&&(t.TgZ(0,"td",42),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.WKDESC)}}function $(e,i){1&e&&(t.TgZ(0,"th",41),t._uU(1,"User"),t.qZA())}function z(e,i){if(1&e&&(t.TgZ(0,"td",42),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.WKUSER)}}function j(e,i){1&e&&(t.TgZ(0,"th",41),t._uU(1,"Display"),t.qZA())}function X(e,i){if(1&e&&(t.TgZ(0,"td",42),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.WKDISP)}}function V(e,i){1&e&&(t.TgZ(0,"th",41),t._uU(1,"Refresh"),t.qZA())}function tt(e,i){if(1&e&&(t.TgZ(0,"td",42),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.WKRFSH)}}function ot(e,i){1&e&&t._UZ(0,"th",43)}function et(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"td",42)(1,"div",44)(2,"button",45)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"ul",46)(6,"li")(7,"button",47),t.NdJ("click",function(){const c=t.CHM(o).$implicit,u=t.oxw();return t.KtG(u.WorkwithOptionsStatusBlocks(c))}),t.TgZ(8,"mat-icon",48),t._uU(9,"call_made"),t.qZA(),t.TgZ(10,"mat-label"),t._uU(11,"StatusBlocks"),t.qZA()()(),t.TgZ(12,"li")(13,"button",47),t.NdJ("click",function(){const c=t.CHM(o).$implicit,u=t.oxw();return t.KtG(u.WorkwithOptionsUpdate(c))}),t.TgZ(14,"mat-icon",48),t._uU(15,"update"),t.qZA(),t.TgZ(16,"mat-label"),t._uU(17,"Update"),t.qZA()()(),t.TgZ(18,"li")(19,"button",47),t.NdJ("click",function(){const c=t.CHM(o).$implicit,u=t.oxw();return t.KtG(u.WorkwithOptionsCopy(c))}),t.TgZ(20,"mat-icon",48),t._uU(21,"call_made"),t.qZA(),t.TgZ(22,"mat-label"),t._uU(23,"Copy"),t.qZA()()(),t.TgZ(24,"li")(25,"button",47),t.NdJ("click",function(){const c=t.CHM(o).$implicit,u=t.oxw();return t.KtG(u.WorkwithOptionsDelete(c))}),t.TgZ(26,"mat-icon",49),t._uU(27,"delete"),t.qZA(),t.TgZ(28,"mat-label"),t._uU(29,"Delete"),t.qZA()()(),t.TgZ(30,"li")(31,"button",47),t.NdJ("click",function(){const c=t.CHM(o).$implicit,u=t.oxw();return t.KtG(u.WorkwithOptionsNotes(c))}),t.TgZ(32,"mat-icon",48),t._uU(33,"notes"),t.qZA(),t.TgZ(34,"mat-label"),t._uU(35,"Notes"),t.qZA()()()()()()}}function nt(e,i){1&e&&t._UZ(0,"tr",50)}function it(e,i){1&e&&t._UZ(0,"tr",51)}const at=function(){return[6,12,18]};let st=(()=>{class e{constructor(o,n,a,c,u,b){this.fb=o,this.matDialog=n,this.router=a,this.route=c,this.CustomAlertService=u,this.WorkwithOptions=b,this.displayedColumns=["Work With Program","Program To Call","Option No","Description","User","Display","Refresh","Actions"],this.user=localStorage.getItem("userName"),this.editedRows=[],this.searchTextDisplay=!1,this.columnShowHideList=[]}searchWorkwithOptions(){this.searchTextDisplay=1!=this.searchTextDisplay}ngOnInit(){this.initializeColumnProperties(),this.editedRows=[],this.form=this.fb.group({PGM:[],CALL:[],WKUSR:[],WKW01S:[]}),this.getWorkwithOptions()}getWorkwithOptions(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.WorkwithOptions.getWorkwithOptions().subscribe(o=>{console.log(o);var a=JSON.parse(o.data[1].value);this.dataSource=new h.by(a.returnedData),this.dataSource.paginator=this.paginator})}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}toggleColumn(o){if(o.isActive)this.displayedColumns.splice(o.position>this.displayedColumns.length-1?this.displayedColumns.length-1:o.position,0,o.name);else{let n=this.displayedColumns.indexOf(o.name);n>-1&&this.displayedColumns.splice(n,1)}console.log(this.displayedColumns)}initializeColumnProperties(){this.displayedColumns.forEach((o,n)=>{"Actions"!=o&&"LastChangedBy"!=o&&this.columnShowHideList.push({position:n,name:o,isActive:!0})}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"LastChangedBy",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"On",isActive:!1}),console.log(this.columnShowHideList)}addWorkwithOptions(){this.matDialog.open(q.WwWorkwithoptionsAddComponent,{width:"950px",height:"auto",maxHeight:"95vh",autoFocus:!1})}WorkwithOptionsStatusBlocks(o){this.matDialog.open(W,{width:"950px",height:"auto",maxHeight:"95vh",data:o,autoFocus:!1})}WorkwithOptionsUpdate(o){this.matDialog.open(O,{width:"950px",height:"auto",maxHeight:"95vh",data:o,autoFocus:!1})}WorkwithOptionsCopy(o){this.matDialog.open(S,{width:"950px",height:"auto",maxHeight:"95vh",data:o,autoFocus:!1})}WorkwithOptionsDelete(o){this.matDialog.open(D,{width:"950px",height:"auto",maxHeight:"95vh",data:o,autoFocus:!1})}WorkwithOptionsNotes(o){this.matDialog.open(N,{width:"950px",height:"auto",maxHeight:"95vh",data:o,autoFocus:!1})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(s.qu),t.Y36(d.uw),t.Y36(_.F0),t.Y36(_.gz),t.Y36(A.y),t.Y36(k.k))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ww-workwithoptions"]],viewQuery:function(o,n){if(1&o&&t.Gf(U.NW,5),2&o){let a;t.iGM(a=t.CRH())&&(n.paginator=a.first)}},standalone:!0,features:[t.jDz],decls:48,vars:10,consts:[[1,"over-Flow"],[1,"title"],[1,"buttons"],["mat-button","","class","addButton",3,"click",4,"ngIf"],["mat-button","","class","addButton","matTooltip","Search WorkwithOptions",3,"click",4,"ngIf"],["mat-button","","matTooltip","Add New WorkwithOptions",1,"addButton",3,"click"],["mainMenuButton","matMenu"],[3,"click",4,"ngFor","ngForOf"],["mat-button","","matTooltip","Hide/Show Columns",1,"mat-focus-indicator","addButton","mat-button","mat-button-base","tally-toltip-btn",3,"matMenuTriggerFor"],["menuTrigger","matMenuTrigger"],[1,"tally-serach-form"],[3,"formGroup",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","Work With Program"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Program To Call"],["matColumnDef","Option No"],["matColumnDef","Description"],["matColumnDef","User"],["matColumnDef","Display"],["matColumnDef","Refresh"],["matColumnDef","Actions"],["mat-header-cell","","class","pending_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-button","",1,"addButton",3,"click"],["mat-button","","matTooltip","Search WorkwithOptions",1,"addButton",3,"click"],[3,"click"],[2,"color","blue",3,"ngModel","ngModelChange","change"],[3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","PGM",2,"text-transform","uppercase"],["matInput","","formControlName","CALL",2,"text-transform","uppercase"],["matInput","","formControlName","WKUSR",2,"text-transform","uppercase"],["matInput","","formControlName","WKW01S",2,"text-transform","uppercase"],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"pending_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],["mat-icon-button","","color","warn"],["mat-header-row",""],["mat-row",""]],template:function(o,n){if(1&o&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3,"Work With Work-With Options"),t.qZA(),t.TgZ(4,"div",2),t.YNc(5,I,3,0,"button",3),t.YNc(6,J,3,0,"button",4),t.TgZ(7,"button",5),t.NdJ("click",function(){return n.addWorkwithOptions()}),t.TgZ(8,"mat-icon"),t._uU(9,"add"),t.qZA()(),t.TgZ(10,"mat-menu",null,6),t.YNc(12,P,4,2,"span",7),t.qZA(),t.TgZ(13,"button",8,9)(15,"mat-icon"),t._uU(16,"visibility_off"),t.qZA()()()(),t.TgZ(17,"mat-card-content",10),t.YNc(18,F,21,1,"form",11),t.qZA(),t.TgZ(19,"table",12),t.ynx(20,13),t.YNc(21,M,2,0,"th",14),t.YNc(22,R,2,1,"td",15),t.BQk(),t.ynx(23,16),t.YNc(24,H,2,0,"th",14),t.YNc(25,L,2,1,"td",15),t.BQk(),t.ynx(26,17),t.YNc(27,G,2,0,"th",14),t.YNc(28,B,2,1,"td",15),t.BQk(),t.ynx(29,18),t.YNc(30,E,2,0,"th",14),t.YNc(31,Q,2,1,"td",15),t.BQk(),t.ynx(32,19),t.YNc(33,$,2,0,"th",14),t.YNc(34,z,2,1,"td",15),t.BQk(),t.ynx(35,20),t.YNc(36,j,2,0,"th",14),t.YNc(37,X,2,1,"td",15),t.BQk(),t.ynx(38,21),t.YNc(39,V,2,0,"th",14),t.YNc(40,tt,2,1,"td",15),t.BQk(),t.ynx(41,22),t.YNc(42,ot,1,0,"th",23),t.YNc(43,et,36,0,"td",15),t.BQk(),t.YNc(44,nt,1,0,"tr",24),t.YNc(45,it,1,0,"tr",25),t.qZA(),t._UZ(46,"mat-paginator",26,27),t.qZA()),2&o){const a=t.MAs(11);t.xp6(5),t.Q6J("ngIf",n.searchTextDisplay),t.xp6(1),t.Q6J("ngIf",!n.searchTextDisplay),t.xp6(6),t.Q6J("ngForOf",n.columnShowHideList),t.xp6(1),t.Q6J("matMenuTriggerFor",a),t.xp6(5),t.Q6J("ngIf",n.searchTextDisplay),t.xp6(1),t.Q6J("dataSource",n.dataSource),t.xp6(25),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(9,at))}},dependencies:[l.m,x.sg,x.O5,s._Y,s.Fj,s.JJ,s.JL,s.On,s.sg,s.u,U.NW,g.Hw,y.VK,y.p6,w.lW,p.KE,p.hX,f.Nt,r.a8,r.dk,r.dn,r.n5,h.BZ,h.fO,h.as,h.w1,h.Dz,h.nj,h.ge,h.ev,h.XQ,h.Gk,K.gM,Y.Rr]}),e})()}}]);