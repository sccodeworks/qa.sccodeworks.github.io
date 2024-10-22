"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[7847],{76263:(X,h,l)=>{l.r(h),l.d(h,{InboundSuppliesComponent:()=>E});var b=l(98739),u=l(7155),g=l(70879),d=l(65412),I=l(35226),Z=l.n(I),p=l(48529),t=l(94650),r=l(24006),T=l(15627),C=l(19132),U=l(36895),_=l(97392),S=l(4859),c=l(59549),y=l(44144),s=l(73546);function v(n,a){1&n&&(t.TgZ(0,"div")(1,"mat-form-field",8)(2,"mat-label"),t._uU(3,"Tracking Number:"),t.qZA(),t._UZ(4,"input",22),t.qZA(),t.TgZ(5,"mat-form-field",8)(6,"mat-label"),t._uU(7,"Location:"),t.qZA(),t._UZ(8,"input",23),t.qZA()())}function A(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.tallyUpdate())}),t.TgZ(1,"span"),t._uU(2,"Update"),t.qZA()()}}function N(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.tallyCreate())}),t.TgZ(1,"span"),t._uU(2,"Create"),t.qZA()()}}let R=(()=>{class n{constructor(e,o,i,m,f){this.fb=e,this.dialogRef=o,this.iheaderSvc=i,this.anyvariable=m,this.router=f,this.user=localStorage.getItem("userName"),this.update=!1,this.enable=!1,this.url="/main-nav/tallys/inboundSupplies/read",this.trackMessage="Pass Tracking no and Location"}ngOnInit(){this.form=this.fb.group({docNumber:"I\xa0\xa0"+this.anyvariable[0].IHTALY,Coverage:"S",Storer:this.anyvariable[0].IHSTOR,Consignee:this.anyvariable[0].IHCONS,Carrier:this.anyvariable[0].IHCARR,Pool:this.anyvariable[1].RSPOOL,Type:this.anyvariable[1].RSTYPE,In:this.anyvariable[1].RSRQTY,Out:this.anyvariable[1].RSUQTY,Reject:this.anyvariable[1].RSXQTY,TrackingNumber:"",Location:"",Net:this.anyvariable[1].RSQTY}),this.enable=0!=this.anyvariable[1].RSRQTY||0!=this.anyvariable[1].RSUQTY||0!=this.anyvariable[1].RSXQTY}tallyUpdate(){var e=this.form.value;this.updateSubscription&&this.updateSubscription.unsubscribe(),this.updateSubscription=this.iheaderSvc.UpdateTallyPosting(this.anyvariable[0].IHTALY,this.anyvariable[1].RSTRAN,this.anyvariable[1].RSTYPE,e.In,e.Out,e.Reject,e.TrackingNumber,e.Location).subscribe(o=>{const i=o[0].data[o[0].data.length-1].value;i===this.trackMessage?this.update=!0:i===p.R.supplyUpdateMsg||p.R.supplyCreateMsg||p.R.supplyDeleteMsg?(this.successMessage(i),this.closeDialog(),this.router.navigateByUrl(this.url,{state:this.anyvariable[0]})):this.failureMessage(i)})}ngOnDestroy(){this.updateSubscription&&this.updateSubscription.unsubscribe()}tallyCreate(){var e=this.form.value;this.updateSubscription&&this.updateSubscription.unsubscribe(),this.updateSubscription=this.iheaderSvc.CreateTallyPosting(this.anyvariable[0].IHTALY,this.anyvariable[1].RSTRAN,this.anyvariable[1].RSTYPE,e.In,e.Out,e.Reject,e.TrackingNumber,e.Location).subscribe(o=>{const i=o[0].data[o[0].data.length-1].value;i===this.trackMessage?this.update=!0:i===p.R.supplyUpdateMsg||p.R.supplyCreateMsg||p.R.supplyDeleteMsg?(this.successMessage(i),this.closeDialog(),this.router.navigateByUrl(this.url,{state:this.anyvariable[0]})):this.failureMessage(i)})}successMessage(e){Z().fire(e,"","success")}failureMessage(e){Z().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.qu),t.Y36(d.so),t.Y36(T.X),t.Y36(d.WI),t.Y36(C.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-update-inbound-supplies"]],standalone:!0,features:[t.jDz],decls:59,vars:4,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"form","over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["readonly","","matInput","","formControlName","docNumber"],["readonly","","matInput","","formControlName","Coverage"],["readonly","","matInput","","formControlName","Storer"],["readonly","","matInput","","formControlName","Consignee"],["readonly","","matInput","","formControlName","Carrier"],["readonly","","matInput","","formControlName","Pool"],["readonly","","matInput","","formControlName","Type"],["required","","matInput","","formControlName","In"],["required","","matInput","","formControlName","Out"],["required","","matInput","","formControlName","Reject"],["readonly","","matInput","","formControlName","Net"],[4,"ngIf"],["class","buttons addButton","mat-raised-button","",3,"click",4,"ngIf"],["required","","matInput","","formControlName","TrackingNumber"],["required","","matInput","","formControlName","Location"],["mat-raised-button","",1,"buttons","addButton",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Record Supply Usage"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return o.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"Document:"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18,"Coverage:"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",8)(21,"mat-label"),t._uU(22,"Storer:"),t.qZA(),t._UZ(23,"input",11),t.qZA(),t.TgZ(24,"mat-form-field",8)(25,"mat-label"),t._uU(26,"Consignee:"),t.qZA(),t._UZ(27,"input",12),t.qZA(),t.TgZ(28,"mat-form-field",8)(29,"mat-label"),t._uU(30,"Carrier:"),t.qZA(),t._UZ(31,"input",13),t.qZA(),t.TgZ(32,"mat-form-field",8)(33,"mat-label"),t._uU(34,"Pool:"),t.qZA(),t._UZ(35,"input",14),t.qZA(),t.TgZ(36,"mat-form-field",8)(37,"mat-label"),t._uU(38,"Type:"),t.qZA(),t._UZ(39,"input",15),t.qZA(),t.TgZ(40,"mat-form-field",8)(41,"mat-label"),t._uU(42,"In:"),t.qZA(),t._UZ(43,"input",16),t.qZA(),t.TgZ(44,"mat-form-field",8)(45,"mat-label"),t._uU(46,"Out:"),t.qZA(),t._UZ(47,"input",17),t.qZA(),t.TgZ(48,"mat-form-field",8)(49,"mat-label"),t._uU(50,"Reject:"),t.qZA(),t._UZ(51,"input",18),t.qZA(),t.TgZ(52,"mat-form-field",8)(53,"mat-label"),t._uU(54,"Net:"),t.qZA(),t._UZ(55,"input",19),t.qZA(),t.YNc(56,v,9,0,"div",20),t.qZA()(),t.YNc(57,A,3,0,"button",21),t.YNc(58,N,3,0,"button",21),t.qZA()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",o.form),t.xp6(47),t.Q6J("ngIf",o.update),t.xp6(1),t.Q6J("ngIf",o.enable),t.xp6(1),t.Q6J("ngIf",!o.enable))},dependencies:[g.m,U.O5,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.sg,r.u,_.Hw,S.lW,c.KE,c.hX,y.Nt,s.a8,s.dk,s.dn,s.n5]}),n})();function q(n,a){1&n&&(t.TgZ(0,"th",28),t._uU(1,"Pool"),t.qZA())}function Y(n,a){if(1&n&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.hij(" ",e.RSPOOL," ")}}function x(n,a){1&n&&(t.TgZ(0,"th",28),t._uU(1,"Type"),t.qZA())}function D(n,a){if(1&n&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.hij(" ",e.RSTYPE," ")}}function k(n,a){1&n&&(t.TgZ(0,"th",28),t._uU(1,"In"),t.qZA())}function Q(n,a){if(1&n&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.hij(" ",e.RSRQTY," ")}}function w(n,a){1&n&&(t.TgZ(0,"th",28),t._uU(1,"Out"),t.qZA())}function O(n,a){if(1&n&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.hij(" ",e.RSUQTY," ")}}function H(n,a){1&n&&(t.TgZ(0,"th",28),t._uU(1,"Reject"),t.qZA())}function M(n,a){if(1&n&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.hij(" ",e.RSXQTY," ")}}function J(n,a){1&n&&(t.TgZ(0,"th",28),t._uU(1,"Net"),t.qZA())}function j(n,a){if(1&n&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.hij(" ",e.RSQTY," ")}}function B(n,a){1&n&&(t.TgZ(0,"th",28),t._uU(1," Actions"),t.qZA())}function F(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"td",30)(1,"div",31)(2,"button",32)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"ul",33)(6,"li")(7,"button",34),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.recordUsageSupplyUpdate())}),t.TgZ(8,"mat-icon",35),t._uU(9,"edit"),t.qZA(),t.TgZ(10,"mat-label"),t._uU(11,"Edit"),t.qZA()()()()()()}}function L(n,a){1&n&&t._UZ(0,"tr",36)}function P(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"tr",37),t.NdJ("click",function(){const m=t.CHM(e).$implicit,f=t.oxw();return t.KtG(f.rowClick(m))}),t.qZA()}}const G=function(){return[8,16,24]};let E=(()=>{class n{constructor(e,o,i,m){this.fb=e,this.iheaderSvc=o,this.matDialog=i,this.router=m,this.displayedColumns=["Pool","Type","In","Out","Reject","Net","Actions"],this.dataSource=new u.by,this.user=localStorage.getItem("userName")||"",this.update=!1,this.type=[],this.pageNumber=1,this.url="/main-nav/tallys/read"}ngOnInit(){this.element=history.state,this.form=this.fb.group({docNumber:"I\xa0\xa0"+this.element.IHTALY,Coverage:"S",Storer:this.element.IHSTOR,Consignee:this.element.IHCONS,Carrier:this.element.IHCARR}),this.supplySubscription&&this.supplySubscription.unsubscribe(),this.supplySubscription=this.iheaderSvc.getSupplyUsage(this.user,"I",this.element.IHTALY,this.element.IHSTOR,this.element.IHSTSX,this.element.IHCONS,this.element.IHCARR).subscribe(e=>{var i=JSON.parse(e[0].data[1].value);this.dataSource=new u.by(i.returnedData),this.dataSource.paginator=this.paginator})}ngOnDestroy(){this.supplySubscription&&this.supplySubscription.unsubscribe()}onBack(){this.router.navigate([this.url])}rowClick(e){this.selectedRow=e}recordUsageSupplyUpdate(){this.matDialog.open(R,{width:"5000px",maxHeight:"90vh",data:[this.element,this.selectedRow],autoFocus:!1})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.qu),t.Y36(T.X),t.Y36(d.uw),t.Y36(C.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-inbound-supplies"]],viewQuery:function(e,o){if(1&e&&t.Gf(b.NW,5),2&e){let i;t.iGM(i=t.CRH())&&(o.paginator=i.first)}},standalone:!0,features:[t.jDz],decls:57,vars:6,consts:[[1,"over-Flow"],[1,"title"],["mat-button","",1,"backButton","go-back-btn",3,"click"],[1,"tally-serach-form"],[1,"form","over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["readonly","","matInput","","formControlName","docNumber"],["readonly","","matInput","","formControlName","Coverage"],["readonly","","matInput","","formControlName","Storer"],["readonly","","matInput","","formControlName","Consignee"],["readonly","","matInput","","formControlName","Carrier"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","Pool"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","class","uppercase-text",4,"matCellDef"],["matColumnDef","Type"],["mat-cell","",4,"matCellDef"],["matColumnDef","In"],["matColumnDef","Out"],["matColumnDef","Reject"],["matColumnDef","Net"],["matColumnDef","Actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-header-cell","","mat-header-cell",""],["mat-cell","",1,"uppercase-text"],["mat-cell",""],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],["mat-header-row",""],["mat-row","",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1)(3,"button",2),t.NdJ("click",function(){return o.onBack()}),t.TgZ(4,"mat-icon"),t._uU(5,"navigate_before "),t.qZA()(),t._uU(6,"Record Supply Usage "),t.qZA()(),t.TgZ(7,"mat-card-content",3)(8,"form",4)(9,"div",5)(10,"div",6)(11,"mat-form-field",7)(12,"mat-label"),t._uU(13,"Document:"),t.qZA(),t._UZ(14,"input",8),t.qZA(),t.TgZ(15,"mat-form-field",7)(16,"mat-label"),t._uU(17,"Coverage:"),t.qZA(),t._UZ(18,"input",9),t.qZA(),t.TgZ(19,"mat-form-field",7)(20,"mat-label"),t._uU(21,"Storer:"),t.qZA(),t._UZ(22,"input",10),t.qZA(),t.TgZ(23,"mat-form-field",7)(24,"mat-label"),t._uU(25,"Consignee:"),t.qZA(),t._UZ(26,"input",11),t.qZA(),t.TgZ(27,"mat-form-field",7)(28,"mat-label"),t._uU(29,"Carrier:"),t.qZA(),t._UZ(30,"input",12),t.qZA()()()()(),t.TgZ(31,"table",13),t.ynx(32,14),t.YNc(33,q,2,0,"th",15),t.YNc(34,Y,2,1,"td",16),t.BQk(),t.ynx(35,17),t.YNc(36,x,2,0,"th",15),t.YNc(37,D,2,1,"td",18),t.BQk(),t.ynx(38,19),t.YNc(39,k,2,0,"th",15),t.YNc(40,Q,2,1,"td",16),t.BQk(),t.ynx(41,20),t.YNc(42,w,2,0,"th",15),t.YNc(43,O,2,1,"td",18),t.BQk(),t.ynx(44,21),t.YNc(45,H,2,0,"th",15),t.YNc(46,M,2,1,"td",18),t.BQk(),t.ynx(47,22),t.YNc(48,J,2,0,"th",15),t.YNc(49,j,2,1,"td",18),t.BQk(),t.ynx(50,23),t.YNc(51,B,2,0,"th",15),t.YNc(52,F,12,0,"td",18),t.BQk(),t.YNc(53,L,1,0,"tr",24),t.YNc(54,P,1,0,"tr",25),t.qZA(),t._UZ(55,"mat-paginator",26,27),t.qZA()),2&e&&(t.xp6(8),t.Q6J("formGroup",o.form),t.xp6(23),t.Q6J("dataSource",o.dataSource),t.xp6(22),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(5,G)))},dependencies:[g.m,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,b.NW,_.Hw,S.lW,c.KE,c.hX,y.Nt,s.a8,s.dk,s.dn,s.n5,u.BZ,u.fO,u.as,u.w1,u.Dz,u.nj,u.ge,u.ev,u.XQ,u.Gk]}),n})()}}]);