"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[2784],{72784:(Q,h,r)=>{r.r(h),r.d(h,{StorageInvoiceInquiryComponent:()=>k});var f=r(98739),l=r(7155),E=r(70879),C=r(35226),T=r.n(C),d=r(36895),t=r(94650),I=r(19132),Z=r(11240),u=r(24006),M=r(65412),y=r(97392),O=r(4859),p=r(59549),U=r(44144),S=r(99602),_=r(73546);function P(n,a){1&n&&(t.TgZ(0,"th",37),t._uU(1," Item "),t.qZA())}function b(n,a){if(1&n&&(t.TgZ(0,"td",38),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.HOy(" ",e.WKITDSC," ",e.WKS1LOT1," ",e.WKS1LOT2," ",e.WKS1LOT3," ")}}function N(n,a){1&n&&(t.TgZ(0,"th",37),t._uU(1," On Hand Balance "),t.qZA())}function W(n,a){if(1&n&&(t.TgZ(0,"td",38),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.AsE(" ",0!==e.WK1BALN?e.WK1BALN:""," ",0!==e.WK1BUNT?e.WK1BUNT:""," ")}}function R(n,a){1&n&&(t.TgZ(0,"th",37),t._uU(1," On Hand Weight "),t.qZA())}function q(n,a){if(1&n&&(t.TgZ(0,"td",38),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.AsE(" ",0!==e.WK1WGHT?e.WK1WGHT:""," ",e.WK1WUNT," ")}}function K(n,a){1&n&&(t.TgZ(0,"th",37),t._uU(1," Rate "),t.qZA())}function B(n,a){if(1&n&&(t.TgZ(0,"td",38),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.hij("",0!==e.WKRATE?e.WKRATE:""," ")}}function x(n,a){1&n&&(t.TgZ(0,"th",37),t._uU(1," Charge Amount "),t.qZA())}function L(n,a){if(1&n&&(t.TgZ(0,"td",38),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.hij(" ",0!==e.WKAMT?e.WKAMT:"","")}}function F(n,a){1&n&&(t.TgZ(0,"th",37),t._uU(1," Minimum charge "),t.qZA())}function G(n,a){if(1&n&&(t.TgZ(0,"td",38),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.Oqu(e.WK1MIN)}}function H(n,a){1&n&&t._UZ(0,"tr",39)}function Y(n,a){1&n&&t._UZ(0,"tr",40)}const J=function(){return[8,16,24]};let k=(()=>{class n{constructor(e,o,i,s,c,m){this.router=e,this.StorerServiceService=o,this.fb=i,this.route=s,this.matDialog=c,this.cdr=m,this.StorerRead="/main-nav/storer",this.pageNumber=1,this.pageSize=8,this.totalRecords=0,this.currentFilters=null,this.duplicateSource=[],this.displayedColumns=["Item","OnHandBalance","OnHandWeight","Rate","ChargeAmount","Minimumcharge"],this.dataSource=new l.by,this.period="",this.totalAmountDue=0,this.total=0,this.item=""}ngOnInit(){this.element=history.state,console.log(this.element);const e=new Date,o=(0,d.p6)(e,"yyyy-MM-dd","en-US"),i=(0,d.p6)(e,"HH:mm","en-US");this.S1STOR=this.element.STORE,this.S1SSFX=this.element.STSFX,this.STNAME=this.element.STNAME,this.form=this.fb.group({Date:[new Date],Time:[this.formatCurrentTime()],S1STOR:[this.element.STORE]+"\xa0"+[this.element.STNAME],S1SSFX:this.S1SSFX,INVNO:"",GENDT:o,GENTM:i,WKITEM:this.item,SNAME:""}),this.getStorageInvoice(this.pageSize,this.pageNumber),this.dataSource.filterPredicate=this.createFilter()}formatCurrentTime(){const e=new Date;return`${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}`}ngOnDestroy(){this.StorageInvoicesSubscription&&this.StorageInvoicesSubscription.unsubscribe()}createFilter(){return(e,o)=>{const i=JSON.parse(o);return Object.keys(i).every(s=>e[s]?.toString().toLowerCase().includes(i[s].toLowerCase())||!1)}}resetSearch(){this.form.reset(),this.paginator.firstPage(),this.getStorageInvoice(this.pageSize,1)}onPaginateChange(e){this.pageSize=e.pageSize,this.getStorageInvoice(e.pageSize,e.pageIndex+1)}getStorageInvoice(e,o){const{S1STOR:s=`${this.element.STORE}`,S1SSFX:c="",GEND:m="",WKITEM:v=""}=this.currentFilters||{};this.StorageInvoicesSubscription&&this.StorageInvoicesSubscription.unsubscribe(),this.StorageInvoicesSubscription=this.StorerServiceService.StorageInvoiceInquiry(this.element.STORE,this.S1SSFX,"",e,o).subscribe(A=>{console.log(A);var g=JSON.parse(A[0].data[1]?.value);const D=g.returnedData;this.dataSource.data=D,this.totalRecords=g.TotalRecords,this.loadGeneratedDateTime(D[0].WKGEND),this.totalAmountDue=g["Total Amount Due"],this.item=g?.WKITEM||"",console.log("Assigned item:",this.item),this.form.patchValue({WKITEM:this.item})})}loadGeneratedDateTime(e){const o=e.replace('WKGEND":"',"").replace(/"/g,""),i="20"+o.substring(1,3),s=o.substring(3,5),c=o.substring(5,7),m=o.substring(7,9),v=o.substring(9,11);this.form.patchValue({GENDT:new Date(`${i}-${s}-${c}`),GENTM:`${m}:${v}`})}onPrintAccessInvoice(){const o=this.element.STORE,i=this.form.get("S1SSFX")?.value;this.StorerServiceService.PrintAccessInvoice("P",o,i,"").subscribe({next:c=>{console.log("Print Access Invoice response:",c);const m=c.msg||"Submitted Successfully";"Submitted Successfully"===m?this.successMessage(m):this.failureMessage(m)},error:c=>{console.error("Print Access Invoice error:",c),this.failureMessage("Submission Failed")}})}onPostAccessInvoice(){const o=this.element.STORE,i=this.form.get("S1SSFX")?.value;this.StorerServiceService.PostAccessInvoice("U",o,i,"").subscribe({next:c=>{console.log("Post Access Invoice response:",c);const m=c.msg||"Submitted Successfully";"Submitted Successfully"===m?this.successMessage(m):this.failureMessage(m)},error:c=>{console.error("Post Access Invoice error:",c),this.failureMessage("Submission Failed")}})}successMessage(e){T().fire(e,"","success")}failureMessage(e){T().fire(e,"","error")}onBack(){this.router.navigate([this.StorerRead])}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(I.F0),t.Y36(Z.h),t.Y36(u.qu),t.Y36(I.gz),t.Y36(M.uw),t.Y36(t.sBO))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-storage-invoice-inquiry"]],viewQuery:function(e,o){if(1&e&&t.Gf(f.NW,5),2&e){let i;t.iGM(i=t.CRH())&&(o.paginator=i.first)}},standalone:!0,features:[t.jDz],decls:82,vars:16,consts:[[1,"over-Flow"],[1,"title"],["mat-button","",1,"backButton","go-back-btn",3,"click"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","Date",3,"matDatepicker"],["matSuffix","",3,"for"],["DatePicker",""],["matInput","","type","Time","formControlName","Time","placeholder","HH:mm","id","generatedtime","required",""],["matInput","","formControlName","WKITEM"],[1,"form-group1"],["for","inputField",1,"form-heading"],[1,"form-input"],["matInput","","formControlName","GENDT",3,"matDatepicker"],["GeneratedDatePicker",""],["matInput","","type","time","formControlName","GENTM","placeholder","HH:mm","id","generatedtime","required",""],["matInput","","formControlName","S1STOR",2,"text-transform","uppercase"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","Item"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","OnHandBalance"],["matColumnDef","OnHandWeight"],["matColumnDef","Rate"],["matColumnDef","ChargeAmount"],["matColumnDef","Minimumcharge"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"Content-page-both"],[1,"left-side"],[1,"buttons","button3"],["mat-raised-button","","type","submit",1,"buttons","addButton","tally-search-btn",3,"click"],["showFirstLastButtons","",1,"tally-table-pagination",3,"length","pageSizeOptions","pageSize","page"],["paginator",""],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(e,o){if(1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1)(3,"button",2),t.NdJ("click",function(){return o.onBack()}),t.TgZ(4,"mat-icon"),t._uU(5,"navigate_before "),t.qZA()(),t._uU(6," Storage Invoice Inquiry"),t.qZA()(),t.TgZ(7,"mat-card-content",3)(8,"form",4)(9,"div",5)(10,"div",6)(11,"mat-form-field",7)(12,"mat-label"),t._uU(13,"Date "),t.qZA(),t._UZ(14,"input",8)(15,"mat-datepicker-toggle",9)(16,"mat-datepicker",null,10),t.qZA(),t.TgZ(18,"mat-form-field",7)(19,"mat-label"),t._uU(20,"Time"),t.qZA(),t._UZ(21,"input",11),t.qZA(),t.TgZ(22,"mat-form-field",7)(23,"mat-label"),t._uU(24,"Position to Item"),t.qZA(),t._UZ(25,"input",12),t.qZA(),t.TgZ(26,"div",13)(27,"label",14),t._uU(28,"Generated"),t.qZA(),t.TgZ(29,"div",15)(30,"mat-form-field",7)(31,"mat-label"),t._uU(32,"Generated Date "),t.qZA(),t._UZ(33,"input",16)(34,"mat-datepicker-toggle",9)(35,"mat-datepicker",null,17),t.qZA(),t.TgZ(37,"mat-form-field",7)(38,"mat-label"),t._uU(39,"Generated Time"),t.qZA(),t._UZ(40,"input",18),t.qZA()()(),t.TgZ(41,"mat-form-field",7)(42,"mat-label"),t._uU(43," Storer "),t.qZA(),t._UZ(44,"input",19),t.qZA()()()()(),t.TgZ(45,"table",20),t.ynx(46,21),t.YNc(47,P,2,0,"th",22),t.YNc(48,b,2,4,"td",23),t.BQk(),t.ynx(49,24),t.YNc(50,N,2,0,"th",22),t.YNc(51,W,2,2,"td",23),t.BQk(),t.ynx(52,25),t.YNc(53,R,2,0,"th",22),t.YNc(54,q,2,2,"td",23),t.BQk(),t.ynx(55,26),t.YNc(56,K,2,0,"th",22),t.YNc(57,B,2,1,"td",23),t.BQk(),t.ynx(58,27),t.YNc(59,x,2,0,"th",22),t.YNc(60,L,2,1,"td",23),t.BQk(),t.ynx(61,28),t.YNc(62,F,2,0,"th",22),t.YNc(63,G,2,1,"td",23),t.BQk(),t.YNc(64,H,1,0,"tr",29),t.YNc(65,Y,1,0,"tr",30),t.qZA(),t.TgZ(66,"div",31),t._UZ(67,"br")(68,"br"),t.TgZ(69,"div",32)(70,"button",33),t._uU(71),t.ALo(72,"number"),t.qZA()()(),t._UZ(73,"br"),t.TgZ(74,"div",31)(75,"div",32)(76,"button",34),t.NdJ("click",function(){return o.onPostAccessInvoice()}),t._uU(77,"Post & Print"),t.qZA(),t.TgZ(78,"button",34),t.NdJ("click",function(){return o.onPrintAccessInvoice()}),t._uU(79," Print "),t.qZA()()(),t.TgZ(80,"mat-paginator",35,36),t.NdJ("page",function(s){return o.onPaginateChange(s)}),t.qZA()()),2&e){const i=t.MAs(17),s=t.MAs(36);t.xp6(8),t.Q6J("formGroup",o.form),t.xp6(6),t.Q6J("matDatepicker",i),t.xp6(1),t.Q6J("for",i),t.xp6(18),t.Q6J("matDatepicker",s),t.xp6(1),t.Q6J("for",s),t.xp6(11),t.Q6J("dataSource",o.dataSource),t.xp6(19),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns),t.xp6(6),t.hij(" Total Amount : $",t.xi3(72,12,o.totalAmountDue,"1.2-2")," "),t.xp6(9),t.Q6J("length",o.totalRecords)("pageSizeOptions",t.DdM(15,J))("pageSize",o.pageSize)}},dependencies:[E.m,u._Y,u.Fj,u.JJ,u.JL,u.Q7,u.sg,u.u,f.NW,y.Hw,O.lW,p.KE,p.hX,p.R9,U.Nt,S.Mq,S.hl,S.nW,_.a8,_.dk,_.dn,_.n5,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,d.JJ]}),n})()}}]);