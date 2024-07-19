"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[5778],{25778:(Y,m,n)=>{n.r(m),n.d(m,{WwCostCenterComponent:()=>L});var C=n(98739),i=n(7155),f=n(70879),h=n(43653),g=n(24463),t=n(94650),d=n(19132),l=n(24006),D=n(65412),T=n(54516),w=n(36895),E=n(97392),b=n(4859),p=n(59549),A=n(44144),u=n(73546),Z=n(10266);function S(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"button",20),t.NdJ("click",function(){t.CHM(o);const s=t.oxw();return t.KtG(s.searchCostCenter())}),t.TgZ(1,"mat-icon"),t._uU(2,"clear"),t.qZA()()}}function W(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"button",21),t.NdJ("click",function(){t.CHM(o);const s=t.oxw();return t.KtG(s.searchCostCenter())}),t.TgZ(1,"mat-icon"),t._uU(2,"search"),t.qZA()()}}function O(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"form",22),t.NdJ("ngSubmit",function(){t.CHM(o);const s=t.oxw();return t.KtG(s.getCostCenterSearch(s.form.value))}),t.TgZ(1,"div",23)(2,"div",24)(3,"mat-form-field",25)(4,"mat-label"),t._uU(5,"Cost Center codes"),t.qZA(),t._UZ(6,"input",26),t.qZA(),t.TgZ(7,"mat-form-field",25)(8,"mat-label"),t._uU(9,"subcodes"),t.qZA(),t._UZ(10,"input",27),t.qZA()()(),t.TgZ(11,"button",28),t._uU(12," Search "),t.qZA()()}if(2&e){const o=t.oxw();t.Q6J("formGroup",o.form)}}function x(e,a){1&e&&(t.TgZ(0,"th",29),t._uU(1,"Cost Center "),t.qZA())}function M(e,a){if(1&e&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&e){const o=a.$implicit;t.xp6(1),t.hij(" ",o.CSCOD," ")}}function v(e,a){1&e&&(t.TgZ(0,"th",29),t._uU(1,"Suffix "),t.qZA())}function U(e,a){if(1&e&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&e){const o=a.$implicit;t.xp6(1),t.Oqu(o.CSCSFX)}}function P(e,a){1&e&&(t.TgZ(0,"th",29),t._uU(1,"Description"),t.qZA())}function y(e,a){if(1&e&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&e){const o=a.$implicit;t.xp6(1),t.hij(" ",o.CSDESC," ")}}function B(e,a){1&e&&t._UZ(0,"th",31)}function I(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"td",30)(1,"div",32)(2,"button",33)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"ul",34)(6,"li")(7,"button",35),t.NdJ("click",function(){const _=t.CHM(o).$implicit,c=t.oxw();return t.KtG(c.CostcenterUpdate(_))}),t.TgZ(8,"mat-icon",36),t._uU(9,"edit"),t.qZA(),t.TgZ(10,"mat-label"),t._uU(11,"Change"),t.qZA()()()()()()}}function N(e,a){1&e&&t._UZ(0,"tr",37)}function R(e,a){1&e&&t._UZ(0,"tr",38)}const K=function(){return[8,16,24]};let L=(()=>{class e{constructor(o,r,s,_,c){this.router=o,this.fb=r,this.route=s,this.matDialog=_,this.WwCostCenterService=c,this.form=this.fb.group({COD:"",CSFX:""}),this.displayedColumns=["CostCenter","Suffix","Description","Actions"],this.searchTextDisplay=!1,this.duplicateSource=[],this.user=localStorage.getItem("userName")}ngOnInit(){this.editedRows=[],this.GetCostCenter()}GetCostCenter(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.WwCostCenterService.GetCostCenter("",this.user,"").subscribe(o=>{var s=JSON.parse(o[0].data[1].value);this.duplicateSource=s.returnedData,this.dataSource=new i.by(this.duplicateSource),this.dataSource.paginator=this.paginator})}getCostCenterSearch(o){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),console.log("SEARCH"),this.getAll2Subscription=this.WwCostCenterService.GetCostCenter(o.COD,this.user,o.CSFX).subscribe(s=>{var _=s[0].data[1].value;console.log("SEARCH1"+_);var c=JSON.parse(_);this.duplicateSource=c.returnedData,this.dataSource=new i.by(this.duplicateSource),this.dataSource.paginator=this.paginator})}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}CostcenterUpdate(o){this.matDialog.open(h.WwCostCenterUpdateComponent,{width:"1000px",maxHeight:"90vh",data:o,autoFocus:!1})}CostcenterAdd(){this.matDialog.open(g.WwCostCenterCreateComponent,{width:"1000px",maxHeight:"90vh",autoFocus:!1})}searchCostCenter(){this.searchTextDisplay=1!=this.searchTextDisplay}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(d.F0),t.Y36(l.qu),t.Y36(d.gz),t.Y36(D.uw),t.Y36(T.G))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ww-cost-center"]],viewQuery:function(o,r){if(1&o&&t.Gf(C.NW,5),2&o){let s;t.iGM(s=t.CRH())&&(r.paginator=s.first)}},standalone:!0,features:[t.jDz],decls:29,vars:8,consts:[[1,"over-Flow"],[1,"title"],[1,"buttons"],["mat-button","","class","addButton",3,"click",4,"ngIf"],["mat-button","","class","addButton","matTooltip","Search Inbound Details",3,"click",4,"ngIf"],["mat-button","","matTooltip","Add Inbound Details",1,"addButton",3,"click"],[1,"tally-serach-form"],[3,"formGroup","ngSubmit",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","CostCenter"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Suffix"],["matColumnDef","Description"],["matColumnDef","Actions"],["mat-header-cell","","class","tally_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-button","",1,"addButton",3,"click"],["mat-button","","matTooltip","Search Inbound Details",1,"addButton",3,"click"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","COD"],["matInput","","formControlName","CSFX"],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"tally_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",1,"dropdown-item",3,"click"],["mat-icon-button","","color","primary"],["mat-header-row",""],["mat-row",""]],template:function(o,r){1&o&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3,"Work With Cost Centers "),t.qZA(),t.TgZ(4,"div",2),t.YNc(5,S,3,0,"button",3),t.YNc(6,W,3,0,"button",4),t.TgZ(7,"button",5),t.NdJ("click",function(){return r.CostcenterAdd()}),t.TgZ(8,"mat-icon"),t._uU(9,"add"),t.qZA()()()(),t.TgZ(10,"mat-card-content",6),t.YNc(11,O,13,1,"form",7),t.qZA(),t.TgZ(12,"table",8),t.ynx(13,9),t.YNc(14,x,2,0,"th",10),t.YNc(15,M,2,1,"td",11),t.BQk(),t.ynx(16,12),t.YNc(17,v,2,0,"th",10),t.YNc(18,U,2,1,"td",11),t.BQk(),t.ynx(19,13),t.YNc(20,P,2,0,"th",10),t.YNc(21,y,2,1,"td",11),t.BQk(),t.ynx(22,14),t.YNc(23,B,1,0,"th",15),t.YNc(24,I,12,0,"td",11),t.BQk(),t.YNc(25,N,1,0,"tr",16),t.YNc(26,R,1,0,"tr",17),t.qZA(),t._UZ(27,"mat-paginator",18,19),t.qZA()),2&o&&(t.xp6(5),t.Q6J("ngIf",r.searchTextDisplay),t.xp6(1),t.Q6J("ngIf",!r.searchTextDisplay),t.xp6(5),t.Q6J("ngIf",r.searchTextDisplay),t.xp6(1),t.Q6J("dataSource",r.dataSource),t.xp6(13),t.Q6J("matHeaderRowDef",r.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",r.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(7,K)))},dependencies:[f.m,w.O5,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,C.NW,E.Hw,b.lW,p.KE,p.hX,A.Nt,u.a8,u.dk,u.dn,u.n5,i.BZ,i.fO,i.as,i.w1,i.Dz,i.nj,i.ge,i.ev,i.XQ,i.Gk,Z.gM]}),e})()}}]);