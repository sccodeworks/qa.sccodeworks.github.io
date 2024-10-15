"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[9552],{99552:(P,s,o)=>{o.r(s),o.d(s,{InquiryGeneralInvoiceComponent:()=>S});var u=o(7155),f=o(70879),t=o(94650),d=o(19132),m=o(24006),h=o(20025),_=o(36895),T=o(98739),I=o(97392),C=o(4859),p=o(59549),g=o(44144),c=o(73546);const A=["paginator"];function D(e,a){1&e&&(t.TgZ(0,"mat-form-field",9)(1,"mat-label"),t._uU(2,"Invoice Number"),t.qZA(),t._UZ(3,"input",31),t.qZA())}function v(e,a){1&e&&(t.TgZ(0,"th",32),t._uU(1,"Charge Description"),t.qZA())}function Z(e,a){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.AsE("",n.WKDESC,"\xa0",n.CGCMNT,"")}}function q(e,a){1&e&&(t.TgZ(0,"th",32),t._uU(1,"Quantity"),t.qZA())}function y(e,a){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.ALo(2,"number"),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,n.DGQTY,"1.2-2"))}}function E(e,a){1&e&&(t.TgZ(0,"th",32),t._uU(1,"Rate"),t.qZA())}function b(e,a){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.ALo(2,"number"),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,n.DGRATE,"1.4-4"))}}function U(e,a){1&e&&(t.TgZ(0,"th",32),t._uU(1,"Basis"),t.qZA())}function O(e,a){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.Oqu(n.DGBASE)}}function G(e,a){1&e&&(t.TgZ(0,"th",32),t._uU(1,"Amount"),t.qZA())}function M(e,a){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.ALo(2,"number"),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,n.DGAMT,"1.2-2"))}}function N(e,a){1&e&&(t.TgZ(0,"th",32),t._uU(1,"Minimum Charges"),t.qZA())}function W(e,a){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.Oqu(n.DGMINM)}}function K(e,a){1&e&&t._UZ(0,"tr",34)}function B(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"tr",35),t.NdJ("click",function(){const l=t.CHM(n).$implicit,x=t.oxw();return t.KtG(x.rowClick(l))}),t.qZA()}}const R=function(){return[8,16,24]};let S=(()=>{class e{constructor(n,i,r){this.router=n,this.fb=i,this.generalInvoicesSvc=r,this.title="",this.header="",this.mailTo="",this.totalDue=0,this.billTO="",this.acctOf="",this.duplicateSource=[],this.user=localStorage.getItem("userName"),this.displayedColumns=["chargeDescription","quantity","rate","basis","amount","minimumCharges"]}ngOnInit(){this.element=history.state,console.log(this.element),this.element&&(this.WKSTAT=this.element.WKSTAT||""),this.form=this.fb.group({BillTo:{value:"",disabled:!0},AcctOf:{value:"",disabled:!0},RefNo:{value:this.element.WKREF,disabled:!0},CarTr:{value:this.element.WKCAR,disabled:!0},Date:{value:this.element.WKDATE,disabled:!0},Building:{value:this.element.HGBLDG,disabled:!0},invoice:{value:this.element.WKINV,disabled:!0}}),this.getGeneralInvoiceInquiry()}ngOnDestroy(){this.inquirySubscription&&this.inquirySubscription.unsubscribe()}formatTitle(n){let i=n.replace(/([A-Z])\s/g,"$1");return i=i.replace(/\s{2,}/g," "),i=i.toLowerCase().split(" ").map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join(" "),i}getGeneralInvoiceInquiry(){this.inquirySubscription&&this.inquirySubscription.unsubscribe(),this.inquirySubscription=this.generalInvoicesSvc.getGeneralInvoiceInquiry(this.user,this.element.WKCTRL,this.element.WKINV).subscribe(n=>{const i=n[0]?.data[1]?.value,r=i?JSON.parse(i):null;if(r){this.duplicateSource=r.returnedData||[],this.dataSource=new u.by(this.duplicateSource);const l=this.duplicateSource[0];l?(this.mailTo=`${l.SYNAME||""} ${l.SYADD1||""} ${l.SYADD2||""} ${l.SYADD3||""}`.trim(),this.totalDue=l.HGAMT||0,this.title=this.formatTitle(l.WKHDG||""),this.header="EN"===this.WKSTAT?"Worksheet":"",this.billTO=`${l.WKSNAME||""}\xa0${l.WKADDR1||""}\xa0${l.WKADDR2||""}\xa0${l.WKADDR3||""}`.trim(),this.acctOf=l.WKACTOF||""):(this.billTO=this.element?.WKCUST||"",this.acctOf=this.element?.WKCUST||"")}})}rowClick(n){this.selectedRow=n}onBack(){this.router.navigate(["/main-nav/generalInvoice/read"])}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(d.F0),t.Y36(m.qu),t.Y36(h.m))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-inquiry-general-invoice"]],viewQuery:function(n,i){if(1&n&&t.Gf(A,5),2&n){let r;t.iGM(r=t.CRH())&&(i.paginator=r.first)}},standalone:!0,features:[t.jDz],decls:69,vars:16,consts:[[1,"over-Flow"],["mat-button","",1,"backButton","go-back-btn",3,"click"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline","class","full-width",4,"ngIf"],["appearance","outline",1,"full-width2"],["matInput","","disabled","",3,"value"],["appearance","outline",1,"full-width"],["matInput","","formControlName","RefNo"],["matInput","","formControlName","CarTr"],["matInput","","formControlName","Date"],["matInput","","formControlName","Building"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","chargeDescription"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","quantity"],["matColumnDef","rate"],["matColumnDef","basis"],["matColumnDef","amount"],["matColumnDef","minimumCharges"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],[1,"Content-page-both"],[1,"left-side"],[1,"buttons","button3"],[1,"left-side1"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["matInput","","formControlName","invoice"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row","",3,"click"]],template:function(n,i){1&n&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title")(3,"button",1),t.NdJ("click",function(){return i.onBack()}),t.TgZ(4,"mat-icon"),t._uU(5,"navigate_before"),t.qZA()(),t._uU(6),t.qZA()(),t.TgZ(7,"mat-card-content",2)(8,"form",3)(9,"div",4)(10,"div",5),t.YNc(11,D,4,0,"mat-form-field",6),t.TgZ(12,"mat-form-field",7)(13,"mat-label"),t._uU(14,"Bill To"),t.qZA(),t._UZ(15,"input",8),t.qZA(),t.TgZ(16,"mat-form-field",7)(17,"mat-label"),t._uU(18,"Account Of"),t.qZA(),t._UZ(19,"input",8),t.qZA(),t.TgZ(20,"mat-form-field",9)(21,"mat-label"),t._uU(22,"Reference Number"),t.qZA(),t._UZ(23,"input",10),t.qZA(),t.TgZ(24,"mat-form-field",7)(25,"mat-label"),t._uU(26,"Car / Trailer Number"),t.qZA(),t._UZ(27,"input",11),t.qZA(),t.TgZ(28,"mat-form-field",9)(29,"mat-label"),t._uU(30,"Date"),t.qZA(),t._UZ(31,"input",12),t.qZA(),t.TgZ(32,"mat-form-field",9)(33,"mat-label"),t._uU(34,"Building"),t.qZA(),t._UZ(35,"input",13),t.qZA()()()()(),t.TgZ(36,"table",14),t.ynx(37,15),t.YNc(38,v,2,0,"th",16),t.YNc(39,Z,2,2,"td",17),t.BQk(),t.ynx(40,18),t.YNc(41,q,2,0,"th",16),t.YNc(42,y,3,4,"td",17),t.BQk(),t.ynx(43,19),t.YNc(44,E,2,0,"th",16),t.YNc(45,b,3,4,"td",17),t.BQk(),t.ynx(46,20),t.YNc(47,U,2,0,"th",16),t.YNc(48,O,2,1,"td",17),t.BQk(),t.ynx(49,21),t.YNc(50,G,2,0,"th",16),t.YNc(51,M,3,4,"td",17),t.BQk(),t.ynx(52,22),t.YNc(53,N,2,0,"th",16),t.YNc(54,W,2,1,"td",17),t.BQk(),t.YNc(55,K,1,0,"tr",23),t.YNc(56,B,1,0,"tr",24),t.qZA(),t._UZ(57,"br")(58,"br"),t.TgZ(59,"div",25)(60,"div",26)(61,"button",27),t._uU(62),t.qZA()(),t.TgZ(63,"div",28)(64,"button",27),t._uU(65),t.ALo(66,"number"),t.qZA()()(),t._UZ(67,"mat-paginator",29,30),t.qZA()),2&n&&(t.xp6(6),t.AsE(" ",i.title," ",i.header," "),t.xp6(2),t.Q6J("formGroup",i.form),t.xp6(3),t.Q6J("ngIf","AR"===i.WKSTAT),t.xp6(4),t.s9C("value",i.billTO),t.xp6(4),t.s9C("value",i.acctOf),t.xp6(17),t.Q6J("dataSource",i.dataSource),t.xp6(19),t.Q6J("matHeaderRowDef",i.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns),t.xp6(6),t.hij("Mail Payment to : ",i.mailTo,""),t.xp6(3),t.hij("Total Due : $",t.xi3(66,12,i.totalDue,"1.2-2"),""),t.xp6(2),t.Q6J("pageSizeOptions",t.DdM(15,R)))},dependencies:[f.m,_.O5,m._Y,m.Fj,m.JJ,m.JL,m.sg,m.u,T.NW,I.Hw,C.lW,p.KE,p.hX,g.Nt,c.a8,c.dk,c.dn,c.n5,u.BZ,u.fO,u.as,u.w1,u.Dz,u.nj,u.ge,u.ev,u.XQ,u.Gk,_.JJ]}),e})()}}]);