"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[2834],{92834:(q,_,o)=>{o.r(_),o.d(_,{WwPaymentsAppldetailsComponent:()=>Y});var c=o(98739),i=o(7155),r=o(70879),t=o(94650),p=o(24006),d=o(65412),A=o(19132),T=o(36895),f=o(97392),P=o(4859),u=o(59549),C=o(44144),s=o(73546),D=o(10266);function g(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"button",22),t.NdJ("click",function(){t.CHM(e);const m=t.oxw();return t.KtG(m.searchPaymentApplications())}),t.TgZ(1,"mat-icon"),t._uU(2,"clear"),t.qZA()()}}function h(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"button",23),t.NdJ("click",function(){t.CHM(e);const m=t.oxw();return t.KtG(m.searchPaymentApplications())}),t.TgZ(1,"mat-icon"),t._uU(2,"search"),t.qZA()()}}function y(a,n){if(1&a&&(t.TgZ(0,"form",24)(1,"div",25)(2,"div",26)(3,"mat-form-field",27)(4,"mat-label"),t._uU(5,"Payment Number"),t.qZA(),t._UZ(6,"input",28),t.qZA(),t.TgZ(7,"mat-form-field",27)(8,"mat-label"),t._uU(9,"Amount"),t.qZA(),t._UZ(10,"input",29),t.qZA(),t.TgZ(11,"mat-form-field",27)(12,"mat-label"),t._uU(13,"Payee"),t.qZA(),t._UZ(14,"input",30),t.qZA()()(),t.TgZ(15,"button",31),t._uU(16," Search "),t.qZA()()),2&a){const e=t.oxw();t.Q6J("formGroup",e.form)}}function Z(a,n){1&a&&(t.TgZ(0,"th",32),t._uU(1,"Status"),t.qZA())}function E(a,n){if(1&a&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.Oqu(e.PDSTAT)}}function U(a,n){1&a&&(t.TgZ(0,"th",32),t._uU(1,"Invoice"),t.qZA())}function M(a,n){if(1&a&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.Oqu(e.PDINV)}}function W(a,n){1&a&&(t.TgZ(0,"th",32),t._uU(1,"Sequence"),t.qZA())}function S(a,n){if(1&a&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.Oqu(e.PDISEQ)}}function O(a,n){1&a&&(t.TgZ(0,"th",32),t._uU(1,"Ledger Code"),t.qZA())}function w(a,n){if(1&a&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.Oqu(e.CSDSC)}}function b(a,n){1&a&&(t.TgZ(0,"th",32),t._uU(1,"Customer"),t.qZA())}function x(a,n){if(1&a&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.Oqu(e.CUST)}}function B(a,n){1&a&&(t.TgZ(0,"th",32),t._uU(1,"Application Amount"),t.qZA())}function H(a,n){if(1&a&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.Oqu(e.PDAMT)}}function N(a,n){1&a&&t._UZ(0,"tr",34)}function I(a,n){1&a&&t._UZ(0,"tr",35)}const v=function(){return[8,16,24]};let Y=(()=>{class a{constructor(e,l,m){this.fb=e,this.matDialog=l,this.router=m,this.element={TotalApplied:0},this.displayedColumns=["Status","Invoice","Sequence","LedgerCode","Customer","ApplicationAmount"],this.user=localStorage.getItem("userName"),this.searchTextDisplay=!1,this.duplicateSource=[{PHSTAT:"",PHTRNC:"",PHCHK:"",PHDATE:"",PHUBAL:"",PHAMT:"",PHPAY:1,PHREF:"",PHDDAT:"",PHDESC:"",PHTDAT:"",PHCUST:"",PHCSFX:"",PHCSF2:"",DATE:"",DDAT:"",CMRECD:"",CMKEY:1,CMSUBD:"",CMCOMM:"",AHINV:"",AHTRNC:"",AHDATE:"",AHCUST:"",AHBCST:"",AHBALN:"",PDSTAT:"",PDINV:"",PDISEQ:"",CSDSC:"",CUST:"",PDAMT:"",AHSTAT:"",INV:"",TDSC:"",PAMT:"",AHTYPE:"",ADLEGC:"",ADBLDG:"",ADAMT:"",WKPAY:0,WKCHK:"",WKPAMT:"",CMSEQ:0}]}ngOnInit(){this.form=this.fb.group({PHPAY:4,PHAMT:"$85095.64",PCUST:3}),this.dataSource=new i.by(this.duplicateSource),this.dataSource.paginator=this.paginator}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}searchPaymentApplications(){this.searchTextDisplay=1!=this.searchTextDisplay}onBack(){this.router.navigate(["/main-nav/Payments/read"])}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(p.qu),t.Y36(d.uw),t.Y36(A.F0))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-ww-payments-appldetails"]],viewQuery:function(e,l){if(1&e&&t.Gf(c.NW,5),2&e){let m;t.iGM(m=t.CRH())&&(l.paginator=m.first)}},standalone:!0,features:[t.jDz],decls:40,vars:9,consts:[[1,"over-Flow"],[1,"title"],["mat-button","",1,"backButton","go-back-btn",3,"click"],[1,"buttons"],["mat-button","","class","addButton",3,"click",4,"ngIf"],["mat-button","","class","addButton","matTooltip","search PaymentApplications",3,"click",4,"ngIf"],[1,"tally-serach-form"],["class","form over-Flow",3,"formGroup",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","Status"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Invoice"],["matColumnDef","Sequence"],["matColumnDef","LedgerCode"],["matColumnDef","Customer"],["matColumnDef","ApplicationAmount"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-button","",1,"tally-table-pagination"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-button","",1,"addButton",3,"click"],["mat-button","","matTooltip","search PaymentApplications",1,"addButton",3,"click"],[1,"form","over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","PHPAY","readonly",""],["matInput","","formControlName","PHAMT","readonly",""],["matInput","","formControlName","PCUST","readonly",""],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(e,l){1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1)(3,"button",2),t.NdJ("click",function(){return l.onBack()}),t.TgZ(4,"mat-icon"),t._uU(5,"navigate_before "),t.qZA()(),t._uU(6,"Work With Payment Applications"),t.qZA(),t.TgZ(7,"div",3),t.YNc(8,g,3,0,"button",4),t.YNc(9,h,3,0,"button",5),t.qZA()(),t.TgZ(10,"mat-card-content",6),t.YNc(11,y,17,1,"form",7),t.qZA(),t.TgZ(12,"table",8),t.ynx(13,9),t.YNc(14,Z,2,0,"th",10),t.YNc(15,E,2,1,"td",11),t.BQk(),t.ynx(16,12),t.YNc(17,U,2,0,"th",10),t.YNc(18,M,2,1,"td",11),t.BQk(),t.ynx(19,13),t.YNc(20,W,2,0,"th",10),t.YNc(21,S,2,1,"td",11),t.BQk(),t.ynx(22,14),t.YNc(23,O,2,0,"th",10),t.YNc(24,w,2,1,"td",11),t.BQk(),t.ynx(25,15),t.YNc(26,b,2,0,"th",10),t.YNc(27,x,2,1,"td",11),t.BQk(),t.ynx(28,16),t.YNc(29,B,2,0,"th",10),t.YNc(30,H,2,1,"td",11),t.BQk(),t.YNc(31,N,1,0,"tr",17),t.YNc(32,I,1,0,"tr",18),t.qZA(),t.TgZ(33,"button",19),t._UZ(34,"br"),t._uU(35," Total Applied: "),t.TgZ(36,"b"),t._uU(37),t.qZA()(),t._UZ(38,"mat-paginator",20,21),t.qZA()),2&e&&(t.xp6(8),t.Q6J("ngIf",l.searchTextDisplay),t.xp6(1),t.Q6J("ngIf",!l.searchTextDisplay),t.xp6(2),t.Q6J("ngIf",l.searchTextDisplay),t.xp6(1),t.Q6J("dataSource",l.dataSource),t.xp6(19),t.Q6J("matHeaderRowDef",l.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",l.displayedColumns),t.xp6(5),t.Oqu(l.element.TotalApplied),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(8,v)))},dependencies:[r.m,T.O5,p._Y,p.Fj,p.JJ,p.JL,p.sg,p.u,c.NW,f.Hw,P.lW,u.KE,u.hX,C.Nt,s.a8,s.dk,s.dn,s.n5,i.BZ,i.fO,i.as,i.w1,i.Dz,i.nj,i.ge,i.ev,i.XQ,i.Gk,D.gM]}),a})()}}]);