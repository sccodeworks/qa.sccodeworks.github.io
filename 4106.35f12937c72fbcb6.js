"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[4106,1790,8754,5645,2313],{11790:(R,h,r)=>{r.d(h,{y:()=>Z});var g=r(65412),i=r(94650),d=r(97392),T=r(4859);let p=(()=>{class e{constructor(l,C){this.dialogRef=l,this.data=C}ngOnInit(){}closeDialog(){this.dialogRef.close(!1)}}return e.\u0275fac=function(l){return new(l||e)(i.Y36(g.so),i.Y36(g.WI))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-alert-dialog"]],decls:10,vars:3,consts:[[1,"confirm-dialog-container"],[1,"content-container"],["id","close-icon",3,"click"],[1,"content-span","full-width"],["mat-flat-button","","id","no-button",3,"mat-dialog-close"],["mat-flat-button","","id","yes-button",3,"mat-dialog-close"]],template:function(l,C){1&l&&(i.TgZ(0,"div",0)(1,"div",1)(2,"mat-icon",2),i.NdJ("click",function(){return C.closeDialog()}),i._uU(3,"close "),i.qZA(),i.TgZ(4,"span",3),i._uU(5),i.qZA()(),i.TgZ(6,"button",4),i._uU(7,"Cancel"),i.qZA(),i.TgZ(8,"button",5),i._uU(9,"Delete"),i.qZA()()),2&l&&(i.xp6(5),i.Oqu(C.data.message),i.xp6(1),i.Q6J("mat-dialog-close",!1),i.xp6(2),i.Q6J("mat-dialog-close",!0))},dependencies:[d.Hw,T.lW,g.ZT]}),e})(),Z=(()=>{class e{constructor(l){this.dialog=l}openCustomAlert(l){return this.dialog.open(p,{width:"450px",panelClass:"confirm-dialog-container",disableClose:!0,data:{message:l}})}}return e.\u0275fac=function(l){return new(l||e)(i.LFG(g.uw))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},74106:(R,h,r)=>{r.r(h),r.d(h,{WorkWithConsigneeRatingPreferencesComponent:()=>ee});var g=r(98739),i=r(7155),d=r(65412),T=r(35226),p=r.n(T),Z=r(70879),e=r(94650),c=r(24006),l=r(19132),C=r(43190),b=r(97392),A=r(4859),_=r(59549),S=r(44144),f=r(73546);let v=(()=>{class n{constructor(t,a,s,m,u){this.anyvariable=t,this.fb=a,this.router=s,this.ConsRatPrefSvc=m,this.dialogRef=u,this.user=localStorage.getItem("userName")}ngOnDestroy(){this.getConsigneeRatingPreferencesSubscription&&this.getConsigneeRatingPreferencesSubscription.unsubscribe()}ngOnInit(){this.form=this.fb.group({ConsigneeCode:this.anyvariable.CCCONS,StateCode:this.anyvariable.CCSTEC,TariffName:this.anyvariable.CCTARF,OriginZone:"",FromZip:"",ToZip:"",SCACCode:this.anyvariable.CCSCAC,Discount:this.anyvariable.CCDISC,InterStateMin:this.anyvariable.CCINTR,IntraStateMin:"",FlatRate:"",CustomRatePGM:"",PerMileRate:this.anyvariable.CCMILE,Status:this.anyvariable.Status})}UpdateConsigneeRatingPreferences(){var t=this.form.value;this.getConsigneeRatingPreferencesSubscription&&this.getConsigneeRatingPreferencesSubscription.unsubscribe(),this.getConsigneeRatingPreferencesSubscription=this.ConsRatPrefSvc.updateConsRatPref(t.ConsigneeCode,t.StateCode,t.TariffName,t.OriginZone,t.FromZip,t.ToZip,t.SCACCode,t.Discount,t.InterStateMin,t.IntraStateMin,t.FlatRate,t.CustomRatePGM,t.PerMileRate,t.Status,this.user).subscribe(a=>{var s=a.acknowledgement;console.log(a),JSON.parse(a.success)?(this.successMessage(s),this.closeDialog(),this.router.navigate(["/main-nav/ConsigneeRatingPreferences/read"])):this.failureMessage(s)})}successMessage(t){p().fire(t,"","success")}failureMessage(t){p().fire(t,"","error")}closeDialog(){this.dialogRef.close()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.WI),e.Y36(c.qu),e.Y36(l.F0),e.Y36(C.I),e.Y36(d.so))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-change-consignee-rating-preferences"]],standalone:!0,features:[e.jDz],decls:70,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","ConsigneeCode",2,"text-transform","uppercase"],["matInput","","formControlName","StateCode",2,"text-transform","uppercase"],["matInput","","formControlName","TariffName",2,"text-transform","uppercase"],["matInput","","formControlName","OriginZone",2,"text-transform","uppercase"],["matInput","","formControlName","FromZip",2,"text-transform","uppercase"],["matInput","","formControlName","ToZip",2,"text-transform","uppercase"],["matInput","","formControlName","SCACCode",2,"text-transform","uppercase"],["matInput","","formControlName","Discount"],["matInput","","formControlName","InterStateMin"],["matInput","","formControlName","IntraStateMin"],["matInput","","formControlName","FlatRate"],["matInput","","formControlName","CustomRatePGM",2,"text-transform","uppercase"],["matInput","","formControlName","PerMileRate"],["matInput","","formControlName","Status","readonly",""],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(t,a){1&t&&(e.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),e._uU(4,"Maintain Consignee Preferences"),e.qZA()(),e.TgZ(5,"button",2),e.NdJ("click",function(){return a.closeDialog()}),e.TgZ(6,"mat-icon",3),e._uU(7,"close"),e.qZA()()(),e.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),e._uU(14," Consignee Code "),e.qZA(),e._UZ(15,"input",9),e.qZA(),e.TgZ(16,"mat-form-field",8)(17,"mat-label"),e._uU(18,"State Code "),e.qZA(),e._UZ(19,"input",10),e.qZA(),e.TgZ(20,"mat-form-field",8)(21,"mat-label"),e._uU(22,"Tariff Name"),e.qZA(),e._UZ(23,"input",11),e.qZA(),e.TgZ(24,"mat-form-field",8)(25,"mat-label"),e._uU(26,"Origin Zone"),e.qZA(),e._UZ(27,"input",12),e.qZA(),e.TgZ(28,"mat-form-field",8)(29,"mat-label"),e._uU(30,"From Zip"),e.qZA(),e._UZ(31,"input",13),e.qZA(),e.TgZ(32,"mat-form-field",8)(33,"mat-label"),e._uU(34,"To Zip"),e.qZA(),e._UZ(35,"input",14),e.qZA(),e.TgZ(36,"mat-form-field",8)(37,"mat-label"),e._uU(38,"SCAC Code"),e.qZA(),e._UZ(39,"input",15),e.qZA(),e.TgZ(40,"mat-form-field",8)(41,"mat-label"),e._uU(42,"Discount"),e.qZA(),e._UZ(43,"input",16),e.qZA(),e.TgZ(44,"mat-form-field",8)(45,"mat-label"),e._uU(46,"Inter-State Min"),e.qZA(),e._UZ(47,"input",17),e.qZA(),e.TgZ(48,"mat-form-field",8)(49,"mat-label"),e._uU(50,"Intra-State Min"),e.qZA(),e._UZ(51,"input",18),e.qZA(),e.TgZ(52,"mat-form-field",8)(53,"mat-label"),e._uU(54,"Flat Rate"),e.qZA(),e._UZ(55,"input",19),e.qZA(),e.TgZ(56,"mat-form-field",8)(57,"mat-label"),e._uU(58," Custom Rate PGM "),e.qZA(),e._UZ(59,"input",20),e.qZA(),e.TgZ(60,"mat-form-field",8)(61,"mat-label"),e._uU(62,"Per Mile Rate"),e.qZA(),e._UZ(63,"input",21),e.qZA(),e.TgZ(64,"mat-form-field",8)(65,"mat-label"),e._uU(66,"Status"),e.qZA(),e._UZ(67,"input",22),e.qZA()()(),e.TgZ(68,"button",23),e.NdJ("click",function(){return a.UpdateConsigneeRatingPreferences()}),e._uU(69,"Update"),e.qZA()()()()),2&t&&(e.xp6(9),e.Q6J("formGroup",a.form))},dependencies:[Z.m,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,b.Hw,A.lW,_.KE,_.hX,S.Nt,f.a8,f.dk,f.dn,f.n5]}),n})();var W=r(19956),U=r(11790),P=r(36895),N=r(10266);function x(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"button",25),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.searchConsignee())}),e.TgZ(1,"mat-icon"),e._uU(2,"clear"),e.qZA()()}}function y(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"button",26),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.searchConsignee())}),e.TgZ(1,"mat-icon"),e._uU(2,"search"),e.qZA()()}}function k(n,o){if(1&n&&(e.TgZ(0,"form",27)(1,"div",28)(2,"div",29)(3,"mat-form-field",30)(4,"mat-label"),e._uU(5,"Consignee Code"),e.qZA(),e._UZ(6,"input",31),e.qZA()()(),e.TgZ(7,"button",32),e._uU(8," Search "),e.qZA()()),2&n){const t=e.oxw();e.Q6J("formGroup",t.form)}}function q(n,o){1&n&&(e.TgZ(0,"th",33),e._uU(1,"Consignee Code"),e.qZA())}function D(n,o){if(1&n&&(e.TgZ(0,"td",34),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Oqu(t.CCCONS)}}function I(n,o){1&n&&(e.TgZ(0,"th",33),e._uU(1,"Destination State"),e.qZA())}function M(n,o){if(1&n&&(e.TgZ(0,"td",34),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Oqu(t.CCSTEC)}}function Y(n,o){1&n&&(e.TgZ(0,"th",33),e._uU(1,"Tariff Name"),e.qZA())}function w(n,o){if(1&n&&(e.TgZ(0,"td",34),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Oqu(t.CCTARF)}}function O(n,o){1&n&&(e.TgZ(0,"th",33),e._uU(1,"SCAC Code Discount"),e.qZA())}function F(n,o){if(1&n&&(e.TgZ(0,"td",34),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Oqu(t.CCSCAC)}}function J(n,o){1&n&&(e.TgZ(0,"th",33),e._uU(1,"Discount Percentage"),e.qZA())}function Q(n,o){if(1&n&&(e.TgZ(0,"td",34),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Oqu(t.CCDISC)}}function B(n,o){1&n&&(e.TgZ(0,"th",33),e._uU(1,"InterState Minimum"),e.qZA())}function G(n,o){if(1&n&&(e.TgZ(0,"td",34),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Oqu(t.CCINTR)}}function H(n,o){1&n&&(e.TgZ(0,"th",33),e._uU(1,"Per Mile "),e.qZA())}function $(n,o){if(1&n&&(e.TgZ(0,"td",34),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Oqu(t.CCMILE)}}function E(n,o){1&n&&(e.TgZ(0,"th",33),e._uU(1,"Status"),e.qZA())}function z(n,o){if(1&n&&(e.TgZ(0,"td",34),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Oqu(t.Status)}}function K(n,o){1&n&&e._UZ(0,"th",35)}function L(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"td",34)(1,"div",36)(2,"button",37)(3,"mat-icon"),e._uU(4,"more_vert"),e.qZA()(),e.TgZ(5,"ul",38)(6,"li")(7,"button",39),e.NdJ("click",function(){const m=e.CHM(t).$implicit,u=e.oxw();return e.KtG(u.Update(m))}),e.TgZ(8,"mat-icon",40),e._uU(9,"edit"),e.qZA(),e.TgZ(10,"mat-label"),e._uU(11,"Update"),e.qZA()()(),e.TgZ(12,"li")(13,"button",39),e.NdJ("click",function(){const m=e.CHM(t).$implicit,u=e.oxw();return e.KtG(u.deleteConsigneeratingpreferences(m))}),e.TgZ(14,"mat-icon",41),e._uU(15,"delete"),e.qZA(),e.TgZ(16,"mat-label"),e._uU(17,"Delete"),e.qZA()()()()()()}}function X(n,o){1&n&&e._UZ(0,"tr",42)}function j(n,o){1&n&&e._UZ(0,"tr",43)}const V=function(){return[8,16,24]};let ee=(()=>{class n{constructor(t,a,s,m,u){this.fb=t,this.matDialog=a,this.ConsRatPrefSvc=s,this.router=m,this.CustomAlertService=u,this.user=localStorage.getItem("userName"),this.searchTextDisplay=!1,this.displayedColumns=["ConsigneeCode","DestinationState","TariffName","SCACCodeDiscount","DiscountPercentage","InterStateMinimum","PerMile","Status","Actions"]}searchConsignee(){this.searchTextDisplay=1!=this.searchTextDisplay}ngOnInit(){this.form=this.fb.group({SRCH:""}),this.getConsRatPref()}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}getConsRatPref(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.ConsRatPrefSvc.getConsRatPref().subscribe(t=>{console.log(t);var a=t.data[1].value;console.log(a);var s=JSON.parse(a);this.dataSource=new i.by(s.returnedData),this.dataSource.paginator=this.paginator})}addConsignee(){this.matDialog.open(W.AddConsigneeRatingPreferencesComponent,{width:"1000px",maxHeight:"80vh",autoFocus:!1})}Update(t){this.matDialog.open(v,{width:"1000px",maxHeight:"80vh",data:t,autoFocus:!1})}deleteConsigneeratingpreferences(t){this.CustomAlertService.openCustomAlert("Are you sure you want to delete : "+t.CCCONS+"? ").afterClosed().subscribe(s=>{s&&(this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.ConsRatPrefSvc.deleteConsRatPref(this.user,t.CCCONS).subscribe(m=>{const u=m.acknowledgement;console.log(m),console.log(t.CCCONS),JSON.parse(m.success)?(this.successMessage(u),this.router.navigateByUrl("/main-nav/ConsigneeRatingPreferences/read")):this.failureMessage(u)}))})}successMessage(t){p().fire(t,"","success")}failureMessage(t){p().fire(t,"","error")}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(c.qu),e.Y36(d.uw),e.Y36(C.I),e.Y36(l.F0),e.Y36(U.y))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-work-with-consignee-rating-preferences"]],viewQuery:function(t,a){if(1&t&&e.Gf(g.NW,5),2&t){let s;e.iGM(s=e.CRH())&&(a.paginator=s.first)}},standalone:!0,features:[e.jDz],decls:44,vars:8,consts:[[1,"over-Flow"],[1,"title"],[1,"buttons"],["mat-button","","class","addButton",3,"click",4,"ngIf"],["mat-button","","class","addButton","matTooltip","Search Consignee",3,"click",4,"ngIf"],["mat-button","","matTooltip","Add New Consignee",1,"addButton",3,"click"],[1,"tally-serach-form"],[3,"formGroup",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","ConsigneeCode"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","DestinationState"],["matColumnDef","TariffName"],["matColumnDef","SCACCodeDiscount"],["matColumnDef","DiscountPercentage"],["matColumnDef","InterStateMinimum"],["matColumnDef","PerMile"],["matColumnDef","Status"],["matColumnDef","Actions"],["mat-header-cell","","class","pending_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-button","",1,"addButton",3,"click"],["mat-button","","matTooltip","Search Consignee",1,"addButton",3,"click"],[3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","SRCH",2,"text-transform","uppercase"],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"pending_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],["mat-icon-button","","color","warn"],["mat-header-row",""],["mat-row",""]],template:function(t,a){1&t&&(e.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),e._uU(3,"Work With Preferred Carriers"),e.qZA(),e.TgZ(4,"div",2),e.YNc(5,x,3,0,"button",3),e.YNc(6,y,3,0,"button",4),e.TgZ(7,"button",5),e.NdJ("click",function(){return a.addConsignee()}),e.TgZ(8,"mat-icon"),e._uU(9,"add"),e.qZA()()()(),e.TgZ(10,"mat-card-content",6),e.YNc(11,k,9,1,"form",7),e.qZA(),e.TgZ(12,"table",8),e.ynx(13,9),e.YNc(14,q,2,0,"th",10),e.YNc(15,D,2,1,"td",11),e.BQk(),e.ynx(16,12),e.YNc(17,I,2,0,"th",10),e.YNc(18,M,2,1,"td",11),e.BQk(),e.ynx(19,13),e.YNc(20,Y,2,0,"th",10),e.YNc(21,w,2,1,"td",11),e.BQk(),e.ynx(22,14),e.YNc(23,O,2,0,"th",10),e.YNc(24,F,2,1,"td",11),e.BQk(),e.ynx(25,15),e.YNc(26,J,2,0,"th",10),e.YNc(27,Q,2,1,"td",11),e.BQk(),e.ynx(28,16),e.YNc(29,B,2,0,"th",10),e.YNc(30,G,2,1,"td",11),e.BQk(),e.ynx(31,17),e.YNc(32,H,2,0,"th",10),e.YNc(33,$,2,1,"td",11),e.BQk(),e.ynx(34,18),e.YNc(35,E,2,0,"th",10),e.YNc(36,z,2,1,"td",11),e.BQk(),e.ynx(37,19),e.YNc(38,K,1,0,"th",20),e.YNc(39,L,18,0,"td",11),e.BQk(),e.YNc(40,X,1,0,"tr",21),e.YNc(41,j,1,0,"tr",22),e.qZA(),e._UZ(42,"mat-paginator",23,24),e.qZA()),2&t&&(e.xp6(5),e.Q6J("ngIf",a.searchTextDisplay),e.xp6(1),e.Q6J("ngIf",!a.searchTextDisplay),e.xp6(5),e.Q6J("ngIf",a.searchTextDisplay),e.xp6(1),e.Q6J("dataSource",a.dataSource),e.xp6(28),e.Q6J("matHeaderRowDef",a.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",a.displayedColumns),e.xp6(1),e.Q6J("pageSizeOptions",e.DdM(7,V)))},dependencies:[Z.m,P.O5,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,g.NW,b.Hw,A.lW,_.KE,_.hX,S.Nt,f.a8,f.dk,f.dn,f.n5,i.BZ,i.fO,i.as,i.w1,i.Dz,i.nj,i.ge,i.ev,i.XQ,i.Gk,N.gM]}),n})()}}]);