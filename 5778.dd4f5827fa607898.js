"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[5778],{25778:(J,C,r)=>{r.r(C),r.d(C,{WwCostCenterComponent:()=>L});var m=r(98739),i=r(7155),h=r(70879),f=r(43653),g=r(24463),t=r(94650),d=r(19132),c=r(24006),D=r(65412),T=r(54516),w=r(36895),b=r(97392),S=r(4859),p=r(59549),E=r(44144),_=r(73546),A=r(10266);function Z(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"button",21),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.searchCostCenter())}),t.TgZ(1,"mat-icon"),t._uU(2,"clear"),t.qZA()()}}function W(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"button",22),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.searchCostCenter())}),t.TgZ(1,"mat-icon"),t._uU(2,"search"),t.qZA()()}}function O(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"form",23),t.NdJ("ngSubmit",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.getCostCenterSearch(a.form.value))}),t.TgZ(1,"div",24)(2,"div",25)(3,"mat-form-field",26)(4,"mat-label"),t._uU(5,"Cost Center codes"),t.qZA(),t._UZ(6,"input",27),t.qZA(),t.TgZ(7,"mat-form-field",26)(8,"mat-label"),t._uU(9,"subcodes"),t.qZA(),t._UZ(10,"input",28),t.qZA()()(),t.TgZ(11,"button",29),t._uU(12," Search "),t.qZA()()}if(2&o){const e=t.oxw();t.Q6J("formGroup",e.form)}}function v(o,s){1&o&&(t.TgZ(0,"th",30),t._uU(1,"Cost Center "),t.qZA())}function x(o,s){if(1&o&&(t.TgZ(0,"td",31),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.hij(" ",e.CSCOD," ")}}function M(o,s){1&o&&(t.TgZ(0,"th",30),t._uU(1,"Suffix "),t.qZA())}function U(o,s){if(1&o&&(t.TgZ(0,"td",31),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(e.CSCSFX)}}function P(o,s){1&o&&(t.TgZ(0,"th",30),t._uU(1,"Description"),t.qZA())}function y(o,s){if(1&o&&(t.TgZ(0,"td",31),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.hij(" ",e.CSDESC," ")}}function B(o,s){1&o&&t._UZ(0,"th",32)}function I(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"td",31)(1,"div",33)(2,"button",34)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"ul",35)(6,"li")(7,"button",36),t.NdJ("click",function(){const l=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.CostcenterUpdate(l))}),t.TgZ(8,"mat-icon",37),t._uU(9,"edit"),t.qZA(),t.TgZ(10,"mat-label"),t._uU(11,"Change"),t.qZA()()()()()()}}function R(o,s){1&o&&t._UZ(0,"tr",38)}function N(o,s){1&o&&t._UZ(0,"tr",39)}const K=function(){return[8,16,24]};let L=(()=>{class o{constructor(e,n,a,l,u){this.router=e,this.fb=n,this.route=a,this.matDialog=l,this.WwCostCenterService=u,this.form=this.fb.group({CSCOD:"",CSCSFX:""}),this.dataSource=new i.by,this.displayedColumns=["CostCenter","Suffix","Description","Actions"],this.searchTextDisplay=!1,this.duplicateSource=[],this.user=localStorage.getItem("userName")}ngOnInit(){this.editedRows=[],this.GetCostCenter(),this.dataSource.filterPredicate=this.createFilter()}ngAfterViewInit(){this.dataSource.paginator=this.paginator}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}createFilter(){return(e,n)=>{const a=JSON.parse(n);return Object.keys(a).every(l=>e[l].toString().toLowerCase().includes(a[l].toLowerCase()))}}applyFilter(e){this.dataSource.filter=e.target.value.trim().toLowerCase()}resetSearch(){this.form.reset(),this.refresh(),this.GetCostCenter()}refresh(){this.form.reset(),this.WwCostCenterService.GetCostCenter(this.user,"","").subscribe(e=>{var n=e[0].data[1]?.value,a=JSON.parse(n);this.dataSource.data=a.returnedData,this.dataSource.paginator=this.paginator})}searchCostCenter(){this.searchTextDisplay=1!=this.searchTextDisplay}GetCostCenter(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.WwCostCenterService.GetCostCenter("",this.user,"").subscribe(e=>{this.dataSource.data=e[0].data[1].value.returnedData})}getCostCenterSearch(e){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),console.log("SEARCH"),this.getAll2Subscription=this.WwCostCenterService.GetCostCenter(e.CSCOD??"",this.user,e.CSCSFX??"").subscribe(a=>{const l=a[0].data[1].value.returnedData;this.dataSource=new i.by(l),this.dataSource.paginator=this.paginator,console.log("SEARCH1"+l)})}CostcenterUpdate(e){this.matDialog.open(f.WwCostCenterUpdateComponent,{width:"1000px",maxHeight:"90vh",data:e,autoFocus:!1})}CostcenterAdd(){this.matDialog.open(g.WwCostCenterCreateComponent,{width:"1000px",maxHeight:"90vh",autoFocus:!1})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(d.F0),t.Y36(c.qu),t.Y36(d.gz),t.Y36(D.uw),t.Y36(T.G))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-ww-cost-center"]],viewQuery:function(e,n){if(1&e&&t.Gf(m.NW,5),2&e){let a;t.iGM(a=t.CRH())&&(n.paginator=a.first)}},standalone:!0,features:[t.jDz],decls:32,vars:8,consts:[[1,"over-Flow"],[1,"title"],[1,"buttons"],["mat-button","","class","addButton",3,"click",4,"ngIf"],["mat-button","","class","addButton","matTooltip","Search Inbound Details",3,"click",4,"ngIf"],["mat-button","","matTooltip","Add Inbound Details",1,"addButton",3,"click"],["mat-button","","type","reset","value","Reset","matTooltip","Reset Cost Centers",1,"addButton","buttons",3,"click"],[1,"tally-serach-form"],[3,"formGroup","ngSubmit",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","CostCenter"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Suffix"],["matColumnDef","Description"],["matColumnDef","Actions"],["mat-header-cell","","class","tally_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-button","",1,"addButton",3,"click"],["mat-button","","matTooltip","Search Inbound Details",1,"addButton",3,"click"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","CSCOD",2,"text-transform","uppercase"],["matInput","","formControlName","CSCSFX"],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"tally_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",1,"dropdown-item",3,"click"],["mat-icon-button","","color","primary"],["mat-header-row",""],["mat-row",""]],template:function(e,n){1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3,"Work With Cost Centers "),t.qZA(),t.TgZ(4,"div",2),t.YNc(5,Z,3,0,"button",3),t.YNc(6,W,3,0,"button",4),t.TgZ(7,"button",5),t.NdJ("click",function(){return n.CostcenterAdd()}),t.TgZ(8,"mat-icon"),t._uU(9,"add"),t.qZA()(),t.TgZ(10,"button",6),t.NdJ("click",function(){return n.resetSearch()}),t.TgZ(11,"mat-icon"),t._uU(12,"loop"),t.qZA()()()(),t.TgZ(13,"mat-card-content",7),t.YNc(14,O,13,1,"form",8),t.qZA(),t.TgZ(15,"table",9),t.ynx(16,10),t.YNc(17,v,2,0,"th",11),t.YNc(18,x,2,1,"td",12),t.BQk(),t.ynx(19,13),t.YNc(20,M,2,0,"th",11),t.YNc(21,U,2,1,"td",12),t.BQk(),t.ynx(22,14),t.YNc(23,P,2,0,"th",11),t.YNc(24,y,2,1,"td",12),t.BQk(),t.ynx(25,15),t.YNc(26,B,1,0,"th",16),t.YNc(27,I,12,0,"td",12),t.BQk(),t.YNc(28,R,1,0,"tr",17),t.YNc(29,N,1,0,"tr",18),t.qZA(),t._UZ(30,"mat-paginator",19,20),t.qZA()),2&e&&(t.xp6(5),t.Q6J("ngIf",n.searchTextDisplay),t.xp6(1),t.Q6J("ngIf",!n.searchTextDisplay),t.xp6(8),t.Q6J("ngIf",n.searchTextDisplay),t.xp6(1),t.Q6J("dataSource",n.dataSource),t.xp6(13),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(7,K)))},dependencies:[h.m,w.O5,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,m.NW,b.Hw,S.lW,p.KE,p.hX,E.Nt,_.a8,_.dk,_.dn,_.n5,i.BZ,i.fO,i.as,i.w1,i.Dz,i.nj,i.ge,i.ev,i.XQ,i.Gk,A.gM]}),o})()}}]);