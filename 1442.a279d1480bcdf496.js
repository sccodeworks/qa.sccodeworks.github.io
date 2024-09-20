"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[1442,1790,8754,5645,2313],{11790:(U,b,r)=>{r.d(b,{y:()=>A});var f=r(65412),i=r(94650),g=r(97392),T=r(4859);let Z=(()=>{class m{constructor(d,l){this.dialogRef=d,this.data=l}ngOnInit(){}closeDialog(){this.dialogRef.close(!1)}}return m.\u0275fac=function(d){return new(d||m)(i.Y36(f.so),i.Y36(f.WI))},m.\u0275cmp=i.Xpm({type:m,selectors:[["app-alert-dialog"]],decls:10,vars:3,consts:[[1,"confirm-dialog-container"],[1,"content-container"],["id","close-icon",3,"click"],[1,"content-span","full-width"],["mat-flat-button","","id","no-button",3,"mat-dialog-close"],["mat-flat-button","","id","yes-button",3,"mat-dialog-close"]],template:function(d,l){1&d&&(i.TgZ(0,"div",0)(1,"div",1)(2,"mat-icon",2),i.NdJ("click",function(){return l.closeDialog()}),i._uU(3,"close "),i.qZA(),i.TgZ(4,"span",3),i._uU(5),i.qZA()(),i.TgZ(6,"button",4),i._uU(7,"Cancel"),i.qZA(),i.TgZ(8,"button",5),i._uU(9,"Delete"),i.qZA()()),2&d&&(i.xp6(5),i.Oqu(l.data.message),i.xp6(1),i.Q6J("mat-dialog-close",!1),i.xp6(2),i.Q6J("mat-dialog-close",!0))},dependencies:[g.Hw,T.lW,f.ZT]}),m})(),A=(()=>{class m{constructor(d){this.dialog=d}openCustomAlert(d){return this.dialog.open(Z,{width:"450px",panelClass:"confirm-dialog-container",disableClose:!0,data:{message:d}})}}return m.\u0275fac=function(d){return new(d||m)(i.LFG(f.uw))},m.\u0275prov=i.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},41442:(U,b,r)=>{r.r(b),r.d(b,{WwTaskcodesAttributesComponent:()=>X});var f=r(98739),i=r(7155),g=r(65412),T=r(70879),Z=r(35226),A=r.n(Z),m=r(48529),t=r(94650),d=r(19132),l=r(24006),C=r(16799),v=r(97392),_=r(4859),h=r(59549),S=r(44144),p=r(73546);let w=(()=>{class a{constructor(e,s,o,u,c){this.anyvariable=e,this.dialogRef=s,this.router=o,this.fb=u,this.TaskCodesService=c,this.user=localStorage.getItem("userName"),this.keyValue=""}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}ngOnInit(){console.log(this.anyvariable);const e=(s,o)=>String(s).padStart(o,"0");console.log(e(this.anyvariable.TSSTOR,4)),this.keyValue=e(this.anyvariable.TSSTOR,4),this.form=this.fb.group({EAFLID:{value:"TS",disabled:!0},EAKEY:{value:m.R.fullSlotAisl(this.anyvariable.TSTASK)+e(this.anyvariable.TSSTOR,4),disabled:!0},EAATRB:"",EAVALU:"",EASTAT:"AC",EATMST:"",EAUSER:""})}TaskCodesAttributesCreate(){var e=this.form.value;console.log(e),this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.TaskCodesService.TaskCodesAttributesCreate(this.user,this.form.get("EAFLID")?.value,this.form.get("EAKEY")?.value,e.EAATRB.toUpperCase(),e.EAVALU.toUpperCase(),e.EASTAT,e.EATMST,this.user).subscribe(s=>{if(JSON.parse(s[0].data[1].value).success){const o=JSON.parse(s[0].data[1].value).returnedData.message;this.successMessage(o),this.closeDialog(),this.router.navigateByUrl("/main-nav/task-codes-attributes/read",{state:this.anyvariable})}else{const o=JSON.parse(s[0].data[1].value).returnedData.message;this.failureMessage(o)}})}successMessage(e){A().fire(e,"","success")}failureMessage(e){A().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(g.WI),t.Y36(g.so),t.Y36(d.F0),t.Y36(l.qu),t.Y36(C.x))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-ww-taskcodes-attributes-create"]],standalone:!0,features:[t.jDz],decls:42,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","EAFLID",2,"text-transform","uppercase"],["matInput","","formControlName","EAKEY",2,"text-transform","uppercase"],["matInput","","formControlName","EAATRB",2,"text-transform","uppercase"],["matInput","","formControlName","EAVALU",2,"text-transform","uppercase"],["matInput","","formControlName","EASTAT",2,"text-transform","uppercase"],["matInput","","formControlName","EATMST","readonly",""],["matInput","","formControlName","EAUSER","readonly","",2,"text-transform","uppercase"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(e,s){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Maintain Entity Attributes"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return s.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"File ID"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18,"key"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",8)(21,"mat-label"),t._uU(22,"Attribute"),t.qZA(),t._UZ(23,"input",11),t.qZA(),t.TgZ(24,"mat-form-field",8)(25,"mat-label"),t._uU(26,"Value"),t.qZA(),t._UZ(27,"input",12),t.qZA(),t.TgZ(28,"mat-form-field",8)(29,"mat-label"),t._uU(30,"Status"),t.qZA(),t._UZ(31,"input",13),t.qZA(),t.TgZ(32,"mat-form-field",8)(33,"mat-label"),t._uU(34,"Last Changed"),t.qZA(),t._UZ(35,"input",14),t.qZA(),t.TgZ(36,"mat-form-field",8)(37,"mat-label"),t._uU(38,"Change User"),t.qZA(),t._UZ(39,"input",15),t.qZA()()(),t.TgZ(40,"button",16),t.NdJ("click",function(){return s.TaskCodesAttributesCreate()}),t._uU(41,"Create"),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",s.form))},dependencies:[T.m,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,v.Hw,_.lW,h.KE,h.hX,S.Nt,p.a8,p.dk,p.dn,p.n5]}),a})(),E=(()=>{class a{constructor(e,s,o,u,c){this.anyvariable=e,this.dialogRef=s,this.router=o,this.fb=u,this.TaskCodesService=c,this.user=localStorage.getItem("userName"),this.keyValue=""}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}ngOnInit(){console.log(this.anyvariable),this.form=this.fb.group({EAFLID:{value:this.anyvariable.EAFLID,disabled:!0},EAKEY:{value:m.R.fullSlotAisl(this.anyvariable.EAKEY),disabled:!0},EAATRB:this.anyvariable.EAATRB,EAVALU:this.anyvariable.EAVALU,EASTAT:this.anyvariable.EASTAT,EATMST:{value:this.anyvariable.EATMST,disabled:!0},EAUSER:{value:this.anyvariable.EAUSER,disabled:!0}})}TaskCodesAttributesUpdate(){var e=this.form.value;console.log(e),this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.TaskCodesService.TaskCodesAttributesUpdate(this.anyvariable.EAFLID,this.anyvariable.EAKEY,e.EAATRB.toUpperCase(),e.EAVALU.toUpperCase(),e.EASTAT,this.anyvariable.EATMST,this.user,this.user).subscribe(s=>{const o=JSON.parse(s[0].data[1].value).returnedData.message;if(JSON.parse(s[0].data[1].value).success)this.successMessage(o),this.closeDialog(),this.router.navigateByUrl("/main-nav/task-codes-attributes/read",{state:this.anyvariable});else{const u=JSON.parse(s[0].data[1].value).returnedData.message;this.failureMessage(u)}})}successMessage(e){A().fire(e,"","success")}failureMessage(e){A().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(g.WI),t.Y36(g.so),t.Y36(d.F0),t.Y36(l.qu),t.Y36(C.x))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-ww-taskcodes-attributes-change"]],standalone:!0,features:[t.jDz],decls:42,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","EAFLID",2,"text-transform","uppercase"],["matInput","","formControlName","EAKEY",2,"text-transform","uppercase"],["matInput","","formControlName","EAATRB",2,"text-transform","uppercase"],["matInput","","formControlName","EAVALU",2,"text-transform","uppercase"],["matInput","","formControlName","EASTAT",2,"text-transform","uppercase"],["matInput","","formControlName","EATMST"],["matInput","","formControlName","EAUSER",2,"text-transform","uppercase"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(e,s){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Maintain Entity Attributes"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return s.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"File ID"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18,"key"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",8)(21,"mat-label"),t._uU(22,"Attribute"),t.qZA(),t._UZ(23,"input",11),t.qZA(),t.TgZ(24,"mat-form-field",8)(25,"mat-label"),t._uU(26,"Value"),t.qZA(),t._UZ(27,"input",12),t.qZA(),t.TgZ(28,"mat-form-field",8)(29,"mat-label"),t._uU(30,"Status"),t.qZA(),t._UZ(31,"input",13),t.qZA(),t.TgZ(32,"mat-form-field",8)(33,"mat-label"),t._uU(34,"Last Changed"),t.qZA(),t._UZ(35,"input",14),t.qZA(),t.TgZ(36,"mat-form-field",8)(37,"mat-label"),t._uU(38,"Change User"),t.qZA(),t._UZ(39,"input",15),t.qZA()()(),t.TgZ(40,"button",16),t.NdJ("click",function(){return s.TaskCodesAttributesUpdate()}),t._uU(41,"Update"),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",s.form))},dependencies:[T.m,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,v.Hw,_.lW,h.KE,h.hX,S.Nt,p.a8,p.dk,p.dn,p.n5]}),a})();var x=r(11790),N=r(36895),k=r(28255),D=r(10266),W=r(90455);function q(a,n){if(1&a){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",12)(2,"div",33)(3,"span",34),t.NdJ("click",function(o){return o.stopPropagation()}),t.TgZ(4,"mat-slide-toggle",35),t.NdJ("ngModelChange",function(o){const c=t.CHM(e).$implicit;return t.KtG(c.isActive=o)})("change",function(){const u=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.toggleColumn(u))}),t._uU(5),t.qZA()()()(),t.BQk()}if(2&a){const e=n.$implicit;t.xp6(4),t.Q6J("ngModel",e.isActive),t.xp6(1),t.hij(" ",e.name," ")}}function Y(a,n){1&a&&(t.TgZ(0,"th",36),t._uU(1,"Attribute"),t.qZA())}function F(a,n){if(1&a&&(t.TgZ(0,"td",37),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.Oqu(e.EAATRB)}}function R(a,n){1&a&&(t.TgZ(0,"th",36),t._uU(1,"Value"),t.qZA())}function M(a,n){if(1&a&&(t.TgZ(0,"td",37),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.Oqu(e.EAVALU)}}function I(a,n){1&a&&(t.TgZ(0,"th",36),t._uU(1,"Last Changed"),t.qZA())}function J(a,n){if(1&a&&(t.TgZ(0,"td",37),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.Oqu(e.EATMST)}}function L(a,n){1&a&&(t.TgZ(0,"th",36),t._uU(1,"User"),t.qZA())}function O(a,n){if(1&a&&(t.TgZ(0,"td",37),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.Oqu(e.EAUSER)}}function B(a,n){1&a&&(t.TgZ(0,"th",36),t._uU(1,"Status"),t.qZA())}function K(a,n){if(1&a&&(t.TgZ(0,"td",37),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.Oqu(e.EASTAT)}}function Q(a,n){1&a&&(t.TgZ(0,"th",36),t._uU(1,"Key"),t.qZA())}function H(a,n){if(1&a&&(t.TgZ(0,"td",37),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.Oqu(e.EAKEY)}}function V(a,n){1&a&&t._UZ(0,"th",38)}function G(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"td",37)(1,"div",39)(2,"button",40)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"ul",41)(6,"li")(7,"button",42),t.NdJ("click",function(){const u=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.TaskCodesAttributesChangeForm(u))}),t.TgZ(8,"mat-icon",43),t._uU(9,"edit"),t.qZA(),t.TgZ(10,"mat-label"),t._uU(11,"Change"),t.qZA()()(),t.TgZ(12,"li")(13,"button",42),t.NdJ("click",function(){const u=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.TaskCodesAttributesDelete(u))}),t.TgZ(14,"mat-icon",44),t._uU(15,"delete"),t.qZA(),t.TgZ(16,"mat-label"),t._uU(17,"Delete"),t.qZA()()()()()()}}function $(a,n){1&a&&t._UZ(0,"tr",45)}function z(a,n){1&a&&t._UZ(0,"tr",46)}const j=function(){return[8,16,24]};let X=(()=>{class a{constructor(e,s,o,u,c){this.matDialog=e,this.TaskCodesService=s,this.CustomAlertService=o,this.router=u,this.fb=c,this.selectedRow=[],this.editedRows=[],this.duplicateSource=[],this.searchTextDisplay=!1,this.user=localStorage.getItem("userName"),this.displayedColumns=["Attribute","Value","LastChanged","User","Status","Actions"],this.keyValue="",this.columnShowHideList=[]}ngOnInit(){this.element=history.state,console.log(this.element);const e=(s,o)=>String(s).padStart(o,"0");console.log(e(this.element.TSSTOR,4)),this.keyValue=e(this.element.TSSTOR,4),this.form=this.fb.group({FLID:"TS",KEY:m.R.fullSlotAisl(this.element.TSTASK)+e(this.element.TSSTOR,4)}),this.initializeColumnProperties(),this.editedRows=[],this.getTaskCodesAttributes()}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}toggleColumn(e){if(e.isActive)this.displayedColumns.splice(e.position>this.displayedColumns.length-1?this.displayedColumns.length-1:e.position,0,e.name);else{let s=this.displayedColumns.indexOf(e.name);s>-1&&this.displayedColumns.splice(s,1)}}initializeColumnProperties(){this.displayedColumns.forEach((e,s)=>{"Actions"!=e&&this.columnShowHideList.push({position:s,name:e,isActive:!0})}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"Key",isActive:!1})}rowClick(e){this.selectedRow=e}getTaskCodesAttributes(){var e=this.form.value;console.log(e),this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.TaskCodesService.getTaskCodesAttributes(this.user,e.KEY).subscribe(s=>{var u=JSON.parse(s[0].data[1].value);this.duplicateSource=u.returnedData,this.dataSource=new i.by(this.duplicateSource),this.dataSource.paginator=this.paginator})}searchTaskcodes(){this.searchTextDisplay=1!=this.searchTextDisplay}TaskCodesAttributesDelete(e){var s=this.form.value;console.log(s),this.CustomAlertService.openCustomAlert("Are you sure want to delete this Key:"+s.KEY+"and Attribute:"+e.EAATRB+" ?").afterClosed().subscribe(u=>{u&&(this.deleteTaskCodesAttributesSubscription&&this.deleteTaskCodesAttributesSubscription.unsubscribe(),this.deleteTaskCodesAttributesSubscription=this.TaskCodesService.TaskCodesAttributesDelete(s.KEY,e.EAATRB).subscribe(c=>{const y=c[0].data[c[0].data.length-1].value;"DELETED SUCCESSFULLY"===y?(this.successMessage(y),this.getTaskCodesAttributes()):this.failureMessage(c[0].data[c[0].data.length-1].value)}))})}onBack(){this.router.navigate(["/main-nav/task-codes/read"])}TaskCodesAttributesCreateForm(e){this.matDialog.open(w,{width:"1000px",maxHeight:"80vh",data:e,autoFocus:!1})}TaskCodesAttributesChangeForm(e){this.matDialog.open(E,{width:"1000px",maxHeight:"80vh",data:e,autoFocus:!1})}successMessage(e){A().fire(e,"","success")}failureMessage(e){A().fire(e,"","error")}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(g.uw),t.Y36(C.x),t.Y36(x.y),t.Y36(d.F0),t.Y36(l.qu))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-ww-taskcodes-attributes"]],viewQuery:function(e,s){if(1&e&&t.Gf(f.NW,5),2&e){let o;t.iGM(o=t.CRH())&&(s.paginator=o.first)}},standalone:!0,features:[t.jDz],decls:59,vars:8,consts:[[1,"over-Flow"],["mat-button","",1,"backButton","go-back-btn",3,"click"],[1,"buttons"],["mat-button","","matTooltip","Add New AccountAttributes",1,"addButton",3,"click"],[1,"menu-container"],["mainMenuButton","matMenu"],[1,"grid-container"],[4,"ngFor","ngForOf"],["mat-button","","matTooltip","Hide/Show Columns",1,"mat-focus-indicator","addButton","mat-button","mat-button-base","tally-toltip-btn",3,"matMenuTriggerFor"],["menuTrigger","matMenuTrigger"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","FLID",2,"text-transform","uppercase"],["matInput","","formControlName","KEY",2,"text-transform","uppercase"],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","Attribute"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Value"],["matColumnDef","LastChanged"],["matColumnDef","User"],["matColumnDef","Status"],["matColumnDef","Key"],["matColumnDef","Actions"],["mat-header-cell","","class","pending_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],[1,"grid-item"],[3,"click"],[2,"color","blue",3,"ngModel","ngModelChange","change"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"pending_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],["mat-icon-button","","color","warn"],["mat-header-row",""],["mat-row",""]],template:function(e,s){if(1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title")(3,"button",1),t.NdJ("click",function(){return s.onBack()}),t.TgZ(4,"mat-icon"),t._uU(5,"navigate_before "),t.qZA()(),t._uU(6," Work With Entity Attributes"),t.qZA(),t.TgZ(7,"div",2)(8,"button",3),t.NdJ("click",function(){return s.TaskCodesAttributesCreateForm(s.element)}),t.TgZ(9,"mat-icon"),t._uU(10,"add"),t.qZA()(),t.TgZ(11,"mat-menu",4,5)(13,"div",6),t.YNc(14,q,6,2,"ng-container",7),t.qZA()(),t.TgZ(15,"button",8,9)(17,"mat-icon"),t._uU(18,"visibility_off"),t.qZA()()()(),t.TgZ(19,"mat-card-content",10)(20,"form",11)(21,"div",12)(22,"div",13)(23,"mat-form-field",14)(24,"mat-label"),t._uU(25,"File ID"),t.qZA(),t._UZ(26,"input",15),t.qZA(),t.TgZ(27,"mat-form-field",14)(28,"mat-label"),t._uU(29,"Key"),t.qZA(),t._UZ(30,"input",16),t.qZA()()(),t.TgZ(31,"button",17),t._uU(32," Search "),t.qZA()()(),t.TgZ(33,"table",18),t.ynx(34,19),t.YNc(35,Y,2,0,"th",20),t.YNc(36,F,2,1,"td",21),t.BQk(),t.ynx(37,22),t.YNc(38,R,2,0,"th",20),t.YNc(39,M,2,1,"td",21),t.BQk(),t.ynx(40,23),t.YNc(41,I,2,0,"th",20),t.YNc(42,J,2,1,"td",21),t.BQk(),t.ynx(43,24),t.YNc(44,L,2,0,"th",20),t.YNc(45,O,2,1,"td",21),t.BQk(),t.ynx(46,25),t.YNc(47,B,2,0,"th",20),t.YNc(48,K,2,1,"td",21),t.BQk(),t.ynx(49,26),t.YNc(50,Q,2,0,"th",20),t.YNc(51,H,2,1,"td",21),t.BQk(),t.ynx(52,27),t.YNc(53,V,1,0,"th",28),t.YNc(54,G,18,0,"td",21),t.BQk(),t.YNc(55,$,1,0,"tr",29),t.YNc(56,z,1,0,"tr",30),t.qZA(),t._UZ(57,"mat-paginator",31,32),t.qZA()),2&e){const o=t.MAs(12);t.xp6(14),t.Q6J("ngForOf",s.columnShowHideList),t.xp6(1),t.Q6J("matMenuTriggerFor",o),t.xp6(5),t.Q6J("formGroup",s.form),t.xp6(13),t.Q6J("dataSource",s.dataSource),t.xp6(22),t.Q6J("matHeaderRowDef",s.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",s.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(7,j))}},dependencies:[T.m,N.sg,l._Y,l.Fj,l.JJ,l.JL,l.On,l.sg,l.u,f.NW,v.Hw,k.VK,k.p6,_.lW,h.KE,h.hX,S.Nt,p.a8,p.dk,p.dn,p.n5,i.BZ,i.fO,i.as,i.w1,i.Dz,i.nj,i.ge,i.ev,i.XQ,i.Gk,D.gM,W.Rr]}),a})()}}]);