"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[1749,1860,3765,3483],{51860:(M,E,m)=>{m.d(E,{c:()=>v});var C=m(80529),d=m(75625),r=m(70262),U=m(62843),t=m(92340),p=m(94650);let v=(()=>{class y{constructor(a){this.httpClient=a,this.url=t.N.API_BASE_URL,this.httpHeader={headers:new C.WM({"Content-Type":"application/json"})}}getPayments(a,i,s,o,_,c,P,f,D,T){return this.httpClient.get(this.url+`/Payments/read?user=${a}&customer=${i}&customersuffixone=${s}&customersuffixtwo=${o}&checknumber=${_}&startdate=${c}&enddate=${P}&paymentno=${f}&refno=${D}&status=${T}`)}getPaymentInquiry(a,i){return this.httpClient.get(this.url+`/Payments/read/Inquiry?user=${a}&paymentno=${i}`)}getPaymentDetailInquiry(a,i){return this.httpClient.get(this.url+`/Payments/read/Detail/Inquiry?user=${a}&paymentno=${i}`)}getPaymentApply(a,i){return this.httpClient.get(this.url+`/Payments/read/Apply?user=${a}&PaymentNumber=${i}`)}getPaymentApplyDetail(a,i){return this.httpClient.get(this.url+`/Payments/read/Apply/Details?user=${a}&PaymentNumber=${i}`)}createpayments(a,i,s,o,_,c,P,f,D,T,g){return this.httpClient.post(this.url+"/Payments/create",{PHTDAT:a,PHCUST:i,PHCSFX:s,PHCSF2:o,PHCHK:_,PHREF:c,PHDESC:P,PHAMT:f,PHDATE:D,PHDDAT:T,user:g}).pipe((0,d.X)(1),(0,r.K)(this.httpError))}updatepayments(a,i,s,o,_,c,P,f,D,T,g,N,W,b){return this.httpClient.put(this.url+"/Payments/update",{PHPAY:a,PHTDAT:i,PHCUST:s,PHCSFX:o,PHCSF2:_,PHCHK:c,PHREF:P,PHDESC:f,PHAMT:D,PHDATE:T,PHDDAT:g,PHSTAT:N,PHTRNC:W,user:b}).pipe((0,d.X)(1),(0,r.K)(this.httpError))}getPaymentComment(a,i){return this.httpClient.get(this.url+`/Payments/comments/read?user=${a}&key=${i}`)}updateComment(a,i,s,o,_,c){return this.httpClient.put(this.url+"/Payments/comments/update",{user:a,fileID:i,key:s,sub:o,comment:_,seq:c}).pipe((0,d.X)(1),(0,r.K)(this.httpError))}createComment(a,i,s,o,_){return this.httpClient.post(this.url+"/Payments/comments/create",{user:a,fileID:i,key:s,sub:o,comment:_}).pipe((0,d.X)(1),(0,r.K)(this.httpError))}deleteComment(a,i,s,o,_){return this.httpClient.delete(this.url+`/Payments/comments/delete?user=${a}&fileID=${i}&key=${s}&sub=${o}&seq=${_}`)}PaymentsPrint(a,i){return this.httpClient.put(this.url+"/Payments/Print",{PaymentNumber:a,user:i}).pipe((0,d.X)(1),(0,r.K)(this.httpError))}PaymentsRecal(a,i){return this.httpClient.put(this.url+"/Payments/Recalculate",{PaymentNumber:a,user:i}).pipe((0,d.X)(1),(0,r.K)(this.httpError))}PaymentDelete(a,i){return this.httpClient.delete(this.url+`/Payments/delete?user=${a}&PaymentNum=${i}`)}httpError(a){let i="";return i=a.error instanceof ErrorEvent?a.error.message:`Error Code: ${a.status}\nMessage: ${a.message}`,console.log(i),(0,U._)(()=>new Error(i))}}return y.\u0275fac=function(a){return new(a||y)(p.LFG(C.eN))},y.\u0275prov=p.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})()},61749:(M,E,m)=>{m.r(E),m.d(E,{WwPaymentsDetailinquiryComponent:()=>k});var C=m(65412),d=m(98739),r=m(7155),U=m(70879),t=m(94650),p=m(24006),v=m(19132),y=m(51860),O=m(97392),a=m(4859),i=m(59549),s=m(44144),o=m(73546);function _(e,n){1&e&&(t.TgZ(0,"th",39),t._uU(1,"Status"),t.qZA())}function c(e,n){if(1&e&&(t.TgZ(0,"td",40),t._uU(1),t.qZA()),2&e){const l=n.$implicit;t.xp6(1),t.Oqu(l.PDSTAT)}}function P(e,n){1&e&&(t.TgZ(0,"th",39),t._uU(1,"Invoice Number"),t.qZA())}function f(e,n){if(1&e&&(t.TgZ(0,"td",40),t._uU(1),t.qZA()),2&e){const l=n.$implicit;t.xp6(1),t.Oqu(l.PDINV)}}function D(e,n){1&e&&(t.TgZ(0,"th",39),t._uU(1,"Sequence Number."),t.qZA())}function T(e,n){if(1&e&&(t.TgZ(0,"td",40),t._uU(1),t.qZA()),2&e){const l=n.$implicit;t.xp6(1),t.Oqu(l.PDISEQ)}}function g(e,n){1&e&&(t.TgZ(0,"th",39),t._uU(1,"Invoice Date"),t.qZA())}function N(e,n){if(1&e&&(t.TgZ(0,"td",40),t._uU(1),t.qZA()),2&e){const l=n.$implicit;t.xp6(1),t.Oqu(l.AHDATE)}}function W(e,n){1&e&&(t.TgZ(0,"th",39),t._uU(1,"TT"),t.qZA())}function b(e,n){if(1&e&&(t.TgZ(0,"td",40),t._uU(1),t.qZA()),2&e){const l=n.$implicit;t.xp6(1),t.Oqu(l.AHTRNC)}}function I(e,n){1&e&&(t.TgZ(0,"th",39),t._uU(1,"TC"),t.qZA())}function $(e,n){if(1&e&&(t.TgZ(0,"td",40),t._uU(1),t.qZA()),2&e){const l=n.$implicit;t.xp6(1),t.Oqu(l.AHTYPE)}}function w(e,n){1&e&&(t.TgZ(0,"th",39),t._uU(1,"Customer"),t.qZA())}function S(e,n){if(1&e&&(t.TgZ(0,"td",40),t._uU(1),t.qZA()),2&e){const l=n.$implicit;t.xp6(1),t.Oqu(l.AHCUST)}}function x(e,n){1&e&&(t.TgZ(0,"th",39),t._uU(1,"Ledger Code"),t.qZA())}function B(e,n){if(1&e&&(t.TgZ(0,"td",40),t._uU(1),t.qZA()),2&e){const l=n.$implicit;t.xp6(1),t.Oqu(l.ADLEGC)}}function H(e,n){1&e&&(t.TgZ(0,"th",39),t._uU(1,"Building Number."),t.qZA())}function Y(e,n){if(1&e&&(t.TgZ(0,"td",40),t._uU(1),t.qZA()),2&e){const l=n.$implicit;t.xp6(1),t.Oqu(l.ADBLDG)}}function R(e,n){1&e&&(t.TgZ(0,"th",39),t._uU(1,"OriginalLine Amount"),t.qZA())}function L(e,n){if(1&e&&(t.TgZ(0,"td",40),t._uU(1),t.qZA()),2&e){const l=n.$implicit;t.xp6(1),t.Oqu("$"+l.ADAMT)}}function K(e,n){1&e&&(t.TgZ(0,"th",39),t._uU(1,"Paid Amount"),t.qZA())}function Q(e,n){if(1&e&&(t.TgZ(0,"td",40),t._uU(1),t.qZA()),2&e){const l=n.$implicit;t.xp6(1),t.Oqu("$"+l.PDAMT)}}function F(e,n){1&e&&t._UZ(0,"tr",41)}function J(e,n){1&e&&t._UZ(0,"tr",42)}const X=function(){return[8,16,24]};let k=(()=>{class e{constructor(l,u,h,A,Z,q){this.data=l,this.fb=u,this.dialogRef=h,this.matDialog=A,this.router=Z,this.PaymentsSvc=q,this.displayedColumns=["Status","InvoiceNumber","SequenceNumber","InvoiceDate","TT","TC","Customer","LedgerCode","BuildingNumber","OriginalLineAmount","PaidAmount"],this.user=localStorage.getItem("userName"),this.searchTextDisplay=!1,this.duplicateSource=[]}ngOnInit(){this.paymentno=this.data.WKPAY,this.form=this.fb.group({PHPAY:{value:this.data.WKPAY,disabled:!0},PHDATE:{value:this.data.PHDATE,disabled:!0},PHCHK:{value:this.data.WKCHK,disabled:!0},PHTDAT:{value:"",disabled:!0},PHREF:{value:this.data.PHREF,disabled:!0},PHDDAT:{value:this.data.PHDDAT,disabled:!0},PHDESC:{value:this.data.PHDESC,disabled:!0},PHSTAT:{value:this.data.PHSTAT,disabled:!0},TTDESC:{value:"",disabled:!0},PHAMT:{value:"$"+this.data.PHAMT,disabled:!0},OCNAM:{value:this.data.PHCUST,disabled:!0},PHUBAL:{value:"$"+this.data.PHUBAL,disabled:!0}}),this.getDetailPaymentinquiry()}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}getDetailPaymentinquiry(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.PaymentsSvc.getPaymentDetailInquiry(this.user,this.paymentno).subscribe(l=>{var u=l[0].data[1].value;console.log(u);var h=JSON.parse(u);this.duplicateSource=h.returnedData,console.log(this.duplicateSource);var A=h.returnedData;this.TransType=A[0].TTDESC,this.TransDate=A[0].PHTDAT,this.payingcust=A[0].WKOCNAM;let Z=0;for(let q=0;q<A.length;q++)Z+=A[q].PDAMT,console.log(Z);this.AppliedTotal=Z,this.dataSource=new r.by(this.duplicateSource),this.dataSource.paginator=this.paginator})}closeDialog(){this.dialogRef.close()}}return e.\u0275fac=function(l){return new(l||e)(t.Y36(C.WI),t.Y36(p.qu),t.Y36(C.so),t.Y36(C.uw),t.Y36(v.F0),t.Y36(y.c))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ww-payments-detailinquiry"]],viewQuery:function(l,u){if(1&l&&t.Gf(d.NW,5),2&l){let h;t.iGM(h=t.CRH())&&(u.paginator=h.first)}},standalone:!0,features:[t.jDz],decls:106,vars:10,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["readonly","","matInput","","formControlName","PHPAY"],["readonly","","matInput","","formControlName","PHDATE"],["readonly","","matInput","","formControlName","PHCHK"],["disabled","","matInput","",3,"value"],["readonly","","matInput","","formControlName","PHREF"],["readonly","","matInput","","formControlName","PHDDAT"],["readonly","","matInput","","formControlName","PHDESC"],["readonly","","matInput","","formControlName","PHSTAT"],["readonly","","matInput","","formControlName","PHAMT"],["readonly","","matInput","","formControlName","PHUBAL"],[2,"white-space","nowrap"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","Status"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","InvoiceNumber"],["matColumnDef","SequenceNumber"],["matColumnDef","InvoiceDate"],["matColumnDef","TT"],["matColumnDef","TC"],["matColumnDef","Customer"],["matColumnDef","LedgerCode"],["matColumnDef","BuildingNumber"],["matColumnDef","OriginalLineAmount"],["matColumnDef","PaidAmount"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-button","",1,"tally-table-pagination"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(l,u){1&l&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Payment Detail Inquiry"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return u.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"Payment Number"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18,"Payment Date"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",8)(21,"mat-label"),t._uU(22,"Check Number"),t.qZA(),t._UZ(23,"input",11),t.qZA(),t.TgZ(24,"mat-form-field",8)(25,"mat-label"),t._uU(26,"Transaction Date"),t.qZA(),t._UZ(27,"input",12),t.qZA(),t.TgZ(28,"mat-form-field",8)(29,"mat-label"),t._uU(30,"Reference Number"),t.qZA(),t._UZ(31,"input",13),t.qZA(),t.TgZ(32,"mat-form-field",8)(33,"mat-label"),t._uU(34,"Deposit Date"),t.qZA(),t._UZ(35,"input",14),t.qZA(),t.TgZ(36,"mat-form-field",8)(37,"mat-label"),t._uU(38,"Description"),t.qZA(),t._UZ(39,"input",15),t.qZA(),t.TgZ(40,"mat-form-field",8)(41,"mat-label"),t._uU(42,"Status"),t.qZA(),t._UZ(43,"input",16),t.qZA(),t.TgZ(44,"mat-form-field",8)(45,"mat-label"),t._uU(46,"Trans Type"),t.qZA(),t._UZ(47,"input",12),t.qZA(),t.TgZ(48,"mat-form-field",8)(49,"mat-label"),t._uU(50,"Payment Amount"),t.qZA(),t._UZ(51,"input",17),t.qZA(),t.TgZ(52,"mat-form-field",8)(53,"mat-label"),t._uU(54,"Paying Customer"),t.qZA(),t._UZ(55,"input",12),t.qZA(),t.TgZ(56,"mat-form-field",8)(57,"mat-label"),t._uU(58,"Unapplied Balance"),t.qZA(),t._UZ(59,"input",18),t.qZA()()()()(),t._UZ(60,"br"),t.TgZ(61,"label",19),t._uU(62,"Payment Application Register"),t.qZA(),t.TgZ(63,"table",20),t.ynx(64,21),t.YNc(65,_,2,0,"th",22),t.YNc(66,c,2,1,"td",23),t.BQk(),t.ynx(67,24),t.YNc(68,P,2,0,"th",22),t.YNc(69,f,2,1,"td",23),t.BQk(),t.ynx(70,25),t.YNc(71,D,2,0,"th",22),t.YNc(72,T,2,1,"td",23),t.BQk(),t.ynx(73,26),t.YNc(74,g,2,0,"th",22),t.YNc(75,N,2,1,"td",23),t.BQk(),t.ynx(76,27),t.YNc(77,W,2,0,"th",22),t.YNc(78,b,2,1,"td",23),t.BQk(),t.ynx(79,28),t.YNc(80,I,2,0,"th",22),t.YNc(81,$,2,1,"td",23),t.BQk(),t.ynx(82,29),t.YNc(83,w,2,0,"th",22),t.YNc(84,S,2,1,"td",23),t.BQk(),t.ynx(85,30),t.YNc(86,x,2,0,"th",22),t.YNc(87,B,2,1,"td",23),t.BQk(),t.ynx(88,31),t.YNc(89,H,2,0,"th",22),t.YNc(90,Y,2,1,"td",23),t.BQk(),t.ynx(91,32),t.YNc(92,R,2,0,"th",22),t.YNc(93,L,2,1,"td",23),t.BQk(),t.ynx(94,33),t.YNc(95,K,2,0,"th",22),t.YNc(96,Q,2,1,"td",23),t.BQk(),t.YNc(97,F,1,0,"tr",34),t.YNc(98,J,1,0,"tr",35),t.qZA(),t.TgZ(99,"button",36),t._UZ(100,"br"),t._uU(101," Applied Total: "),t.TgZ(102,"b"),t._uU(103),t.qZA()(),t._UZ(104,"mat-paginator",37,38),t.qZA()),2&l&&(t.xp6(9),t.Q6J("formGroup",u.form),t.xp6(18),t.s9C("value",u.TransDate),t.xp6(20),t.s9C("value",u.TransType),t.xp6(8),t.s9C("value",u.payingcust),t.xp6(8),t.Q6J("dataSource",u.dataSource),t.xp6(34),t.Q6J("matHeaderRowDef",u.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",u.displayedColumns),t.xp6(5),t.Oqu("$"+u.AppliedTotal),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(9,X)))},dependencies:[U.m,p._Y,p.Fj,p.JJ,p.JL,p.sg,p.u,d.NW,O.Hw,a.lW,i.KE,i.hX,s.Nt,o.a8,o.dk,o.dn,o.n5,r.BZ,r.fO,r.as,r.w1,r.Dz,r.nj,r.ge,r.ev,r.XQ,r.Gk]}),e})()}}]);