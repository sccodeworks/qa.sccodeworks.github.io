"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[2409],{65105:(P,Q,u)=>{u.d(Q,{p:()=>g});var H=u(80529),A=u(61135),f=u(75625),p=u(70262),B=u(62843),N=u(92340),t=u(94650);let g=(()=>{class T{constructor(e){this.httpClient=e,this.url=N.N.API_BASE_URL,this.OrderDataSource=new A.X([]),this.httpHeader={headers:new H.WM({"Content-Type":"application/json"})}}updateOrderDataSource(e){let n=this.OrderDataSource.getValue();n.unshift(e),this.OrderDataSource.next(n)}getAllOrderDetails(e){return this.httpClient.get(this.url+`/orders/readAll?user=${e}`)}readOrderService(e,n,a,i,s,c,h,C,S,y,_){return this.httpClient.get(this.url+`/orders/read?user=${e}&billNo=${n}&status=${a}&storer=${i}&suffix=${s}&refNo=${c}&consignee=${h}&building=${C}&poNo=${S}&carrier=${y}&proNo=${_}`)}deleteMapZone(e,n,a){return this.httpClient.delete(this.url+`/mapzone/delete?user=${e}&building=${n}&zone=${a}`)}orderServiceCreate1(e,n,a,i,s){return this.httpClient.post(this.url+"/orders/create1",{storer:e,suffix:n,storerRef:a,purchaseOrder:i,consignee:s}).pipe((0,f.X)(1),(0,p.K)(this.httpError))}orderServiceCreate2(e,n,a,i,s,c,h,C,S,y,_,Z,v,b,R,U,O,E,I,D,q,x,Y,$,L){return this.httpClient.post(this.url+"/orders/create2",{billOfLading:e,storerNumber:n,suffix:a,schShippedDt:i,schArrivalDt:s,shipType:c,carrierCode:h,freightCode:C,codAmount:S,spCharges:y,billToStorer:_,billToSuffix:Z,brokerName:v,totalQuantity:b,shipFromBucket:R,overrideQty:U,building:O,ctrlCopyPrinterId:E,ctrlCopyImmedFlag:I,zoneCode:D,commitFlag:q,pickSheetPrinterId:x,pickSheetImmedFlag:Y,bolPrinter:$,bolImmedFlag:L}).pipe((0,f.X)(1),(0,p.K)(this.httpError))}orderServiceUpdate1(e,n,a,i,s,c,h,C,S,y,_,Z,v){return this.httpClient.put(this.url+"/orders/update1",{billOfLading:e,orderStatus:n,storer:a,suffix:i,storerRef:s,purchaseOrder:c,consignee:h,consigneeName:C,address1:S,address2:y,address3:_,address4:Z,address5:v}).pipe((0,f.X)(1),(0,p.K)(this.httpError))}orderServiceUpdate2(e,n,a,i,s,c,h,C,S,y,_,Z,v,b,R,U,O,E,I,D,q,x,Y,$,L){return this.httpClient.put(this.url+"/orders/update2",{billOfLading:e,storer:n,suffix:a,schShippedDt:i,schArrivalDt:s,shipType:c,carrierCode:h,freightCode:C,codAmount:S,spCharges:y,billToStorer:_,billToSuffix:Z,brokerName:v,totalQuantity:b,shipFromBucket:R,overrideQty:U,building:O,ctrlCopyPrinterId:E,ctrlCopyImmedFlag:I,zoneCode:D,commitInv:q,pickSheetPrinterId:x,pickSheetImmedFlag:Y,bolPrinter:$,bolImmedFlag:L}).pipe((0,f.X)(1),(0,p.K)(this.httpError))}orderDeship(e){return this.httpClient.put(this.url+"/orders/deship",{billOfLading:e}).pipe((0,f.X)(1),(0,p.K)(this.httpError))}shipConfirmService(e,n,a,i,s,c,h,C,S,y,_,Z,v,b,R,U,O){return this.httpClient.put(this.url+"/orders/shipConfirm",{billOfLading:e,proNumber:n,carrier:a,shipType:i,shipDate:s,shipDateChangeCode:c,loadCode:h,shipTime:C,loadQuantity:S,chepPalletQty:y,manifestNo:_,masterRefNo:Z,linkSequence:v,equipmentNo:b,seal1:R,seal2:U,freightChg:O}).pipe((0,f.X)(1),(0,p.K)(this.httpError))}orderToMoveQueueService(e,n,a){return this.httpClient.post(this.url+"/orders/createMQ",{billOfLading:e,priority:n,location:a}).pipe((0,f.X)(1),(0,p.K)(this.httpError))}deleteOrder(e){return this.httpClient.delete(this.url+`/orders/delete?billOfLading=${e}`)}getOrderEventHistory(e,n,a){return this.httpClient.get(this.url+`/orders/events/read?user=${e}&docn=${n}&status=${a}`)}moveHistoryInquiryService(e,n,a,i){return this.httpClient.get(this.url+`/orders/moveHistoryInquiry?user=${e}&billNo=${n}&status=${a}&sort=${i}`)}moveHistoryInquiryServiceSearch(e,n,a,i){return this.httpClient.get(this.url+`/orders/moveHistoryInquiry?user=${e}&billNo=${n}&status=${a}&sort=${i}`)}billOfLadingSynopsisService(e,n){return this.httpClient.get(this.url+`/orders/bolSynopsis?user=${e}&billNo=${n}`)}forceMq(e){return this.httpClient.put(this.url+"/orders/forceMq",{billOfLading:e}).pipe((0,f.X)(1),(0,p.K)(this.httpError))}readOrderCommentService(e,n,a){return this.httpClient.get(this.url+`/orders/orderCmtsRead?user=${e}&billNo=${n}&sequence=${a}`)}createOrderCommentService(e,n,a,i,s,c,h){return this.httpClient.post(this.url+"/orders/createComment",{bol:e,seq:n,commentSequence:a,comment:i,print:s,ediID:c,ediType:h}).pipe((0,f.X)(1),(0,p.K)(this.httpError))}updateOrderCommentService(e,n,a,i,s,c,h){return this.httpClient.put(this.url+"/orders/updateComment",{bol:e,seq:n,commentSequence:a,comment:i,print:s,ediID:c,ediType:h}).pipe((0,f.X)(1),(0,p.K)(this.httpError))}billOfLading(e,n,a,i,s){return this.httpClient.post(this.url+"/orders/billOfLading",{option:e,billOfLading:n,type:a,contact:i,email:s}).pipe((0,f.X)(1),(0,p.K)(this.httpError))}pickSheet(e,n,a,i,s){return this.httpClient.post(this.url+"/orders/pickSheet",{option:e,billOfLading:n,type:a,contact:i,email:s}).pipe((0,f.X)(1),(0,p.K)(this.httpError))}packingList(e,n,a,i,s){return this.httpClient.post(this.url+"/orders/packingList",{option:e,billOfLading:n,type:a,contact:i,email:s}).pipe((0,f.X)(1),(0,p.K)(this.httpError))}DeleteOrderCommentService(e,n,a,i,s,c,h){return this.httpClient.put(this.url+"/orders/commentDelete",{bol:e,seq:n,commentSequence:a,comment:i,print:s,ediID:c,ediType:h}).pipe((0,f.X)(1),(0,p.K)(this.httpError))}outboundRecord(e){return this.httpClient.put(this.url+"/orders/outboundRecord",{orderNumber:e}).pipe((0,f.X)(1),(0,p.K)(this.httpError))}CreateRecordSupply(e,n,a,i,s,c,h,C){return this.httpClient.post(this.url+"/orders/createRecordSupply",{docNumber:e,tranNumber:n,type:a,IN:i,out:s,rejected:c,trackNumber:h,location:C}).pipe((0,f.X)(1),(0,p.K)(this.httpError))}UpdateRecordSupply(e,n,a,i,s,c,h,C){return this.httpClient.put(this.url+"/orders/updateRecordSupply",{docNumber:e,tranNumber:n,type:a,IN:i,out:s,rejected:c,trackNumber:h,location:C}).pipe((0,f.X)(1),(0,p.K)(this.httpError))}httpError(e){let n="";return n=e.error instanceof ErrorEvent?e.error.message:`Error Code: ${e.status}\nMessage: ${e.message}`,console.log(n),(0,B._)(()=>new Error(n))}}return T.\u0275fac=function(e){return new(e||T)(t.LFG(H.eN))},T.\u0275prov=t.Yz7({token:T,factory:T.\u0275fac,providedIn:"root"}),T})()},2409:(P,Q,u)=>{u.r(Q),u.d(Q,{RecordSupplyComponent:()=>J});var H=u(35226),A=u.n(H),f=u(98739),p=u(7155),B=u(70879),N=u(65412),t=u(94650),g=u(24006),T=u(65105),K=u(19132),e=u(36895),n=u(97392),a=u(4859),i=u(59549),s=u(44144),c=u(73546);function h(o,l){1&o&&(t.TgZ(0,"div")(1,"mat-form-field",8)(2,"mat-label"),t._uU(3,"Tracking Number:"),t.qZA(),t._UZ(4,"input",22),t.qZA(),t.TgZ(5,"mat-form-field",8)(6,"mat-label"),t._uU(7,"Location:"),t.qZA(),t._UZ(8,"input",23),t.qZA()())}function C(o,l){if(1&o){const r=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(r);const m=t.oxw();return t.KtG(m.Update())}),t.TgZ(1,"span"),t._uU(2,"Update"),t.qZA()()}}function S(o,l){if(1&o){const r=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(r);const m=t.oxw();return t.KtG(m.Create())}),t.TgZ(1,"span"),t._uU(2,"Create"),t.qZA()()}}let y=(()=>{class o{constructor(r,d,m,M,k){this.fb=r,this.dialogRef=d,this.OrderService=m,this.anyvariable=M,this.router=k,this.user=localStorage.getItem("userName"),this.update=!1,this.enable=!1}ngOnInit(){this.form=this.fb.group({docNumber:"O\xa0\xa0"+this.anyvariable[0].OHBILL,Coverage:"S",Storer:this.anyvariable[0].OHSTOR,Consignee:this.anyvariable[0].OHCONS,Carrier:this.anyvariable[0].OHCAR,Pool:this.anyvariable[1].RSPOOL,Type:this.anyvariable[1].RSTYPE,In:this.anyvariable[1].RSRQTY,Out:this.anyvariable[1].RSUQTY,Reject:this.anyvariable[1].RSXQTY,TrackingNumber:"",Location:"",Net:this.anyvariable[1].RSQTY}),this.enable=0!=this.anyvariable[1].RSRQTY||0!=this.anyvariable[1].RSUQTY||0!=this.anyvariable[1].RSXQTY}Update(){var r=this.form.value;this.OrderService.UpdateRecordSupply(this.anyvariable[0].OHBILL,this.anyvariable[1].RSTRAN,this.anyvariable[1].RSTYPE,r.In,r.Out,r.Reject,r.TrackingNumber,r.Location).subscribe(d=>{this.result=d;const m=this.result[0].data[this.result[0].data.length-1].value;"Pass Tracking no and Location"===m?this.update=!0:(this.successMessage(m),this.closeDialog(),this.router.navigateByUrl("/main-nav/orders/outboundSupplies/read",{state:this.anyvariable[0]}))})}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}Create(){var r=this.form.value;this.OrderService.CreateRecordSupply(this.anyvariable[0].OHBILL,this.anyvariable[1].RSTRAN,this.anyvariable[1].RSTYPE,r.In,r.Out,r.Reject,r.TrackingNumber,r.Location).subscribe(d=>{this.result=d;const m=this.result[0].data[this.result[0].data.length-1].value;"Pass Tracking no and Location"===m?this.update=!0:(this.successMessage(m),this.closeDialog(),this.router.navigateByUrl("/main-nav/orders/outboundSupplies/read",{state:this.anyvariable[0]}))})}successMessage(r){A().fire(r,"","success")}failureMessage(r){A().fire(r,"","error")}closeDialog(){this.dialogRef.close()}}return o.\u0275fac=function(r){return new(r||o)(t.Y36(g.qu),t.Y36(N.so),t.Y36(T.p),t.Y36(N.WI),t.Y36(K.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-update-record-supply"]],standalone:!0,features:[t.jDz],decls:59,vars:4,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"form","over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["readonly","","matInput","","formControlName","docNumber"],["readonly","","matInput","","formControlName","Coverage"],["readonly","","matInput","","formControlName","Storer"],["readonly","","matInput","","formControlName","Consignee"],["readonly","","matInput","","formControlName","Carrier"],["readonly","","matInput","","formControlName","Pool"],["readonly","","matInput","","formControlName","Type"],["required","","matInput","","formControlName","In"],["required","","matInput","","formControlName","Out"],["required","","matInput","","formControlName","Reject"],["readonly","","matInput","","formControlName","Net"],[4,"ngIf"],["class","buttons addButton","mat-raised-button","",3,"click",4,"ngIf"],["required","","matInput","","formControlName","TrackingNumber"],["required","","matInput","","formControlName","Location"],["mat-raised-button","",1,"buttons","addButton",3,"click"]],template:function(r,d){1&r&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Record Supply Usage"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return d.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"Document:"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18,"Coverage:"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",8)(21,"mat-label"),t._uU(22,"Storer:"),t.qZA(),t._UZ(23,"input",11),t.qZA(),t.TgZ(24,"mat-form-field",8)(25,"mat-label"),t._uU(26,"Consignee:"),t.qZA(),t._UZ(27,"input",12),t.qZA(),t.TgZ(28,"mat-form-field",8)(29,"mat-label"),t._uU(30,"Carrier:"),t.qZA(),t._UZ(31,"input",13),t.qZA(),t.TgZ(32,"mat-form-field",8)(33,"mat-label"),t._uU(34,"Pool:"),t.qZA(),t._UZ(35,"input",14),t.qZA(),t.TgZ(36,"mat-form-field",8)(37,"mat-label"),t._uU(38,"Type:"),t.qZA(),t._UZ(39,"input",15),t.qZA(),t.TgZ(40,"mat-form-field",8)(41,"mat-label"),t._uU(42,"In:"),t.qZA(),t._UZ(43,"input",16),t.qZA(),t.TgZ(44,"mat-form-field",8)(45,"mat-label"),t._uU(46,"Out:"),t.qZA(),t._UZ(47,"input",17),t.qZA(),t.TgZ(48,"mat-form-field",8)(49,"mat-label"),t._uU(50,"Reject:"),t.qZA(),t._UZ(51,"input",18),t.qZA(),t.TgZ(52,"mat-form-field",8)(53,"mat-label"),t._uU(54,"Net:"),t.qZA(),t._UZ(55,"input",19),t.qZA(),t.YNc(56,h,9,0,"div",20),t.qZA()(),t.YNc(57,C,3,0,"button",21),t.YNc(58,S,3,0,"button",21),t.qZA()()()),2&r&&(t.xp6(9),t.Q6J("formGroup",d.form),t.xp6(47),t.Q6J("ngIf",d.update),t.xp6(1),t.Q6J("ngIf",d.enable),t.xp6(1),t.Q6J("ngIf",!d.enable))},dependencies:[B.m,e.O5,g._Y,g.Fj,g.JJ,g.JL,g.Q7,g.sg,g.u,n.Hw,a.lW,i.KE,i.hX,s.Nt,c.a8,c.dk,c.dn,c.n5]}),o})();var _=u(15627);function Z(o,l){1&o&&(t.TgZ(0,"th",28),t._uU(1,"Pool"),t.qZA())}function v(o,l){if(1&o&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&o){const r=l.$implicit;t.xp6(1),t.hij(" ",r.RSPOOL," ")}}function b(o,l){1&o&&(t.TgZ(0,"th",28),t._uU(1,"Type"),t.qZA())}function R(o,l){if(1&o&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&o){const r=l.$implicit;t.xp6(1),t.hij(" ",r.RSTYPE," ")}}function U(o,l){1&o&&(t.TgZ(0,"th",28),t._uU(1,"In"),t.qZA())}function O(o,l){if(1&o&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&o){const r=l.$implicit;t.xp6(1),t.hij(" ",r.RSRQTY," ")}}function E(o,l){1&o&&(t.TgZ(0,"th",28),t._uU(1,"Out"),t.qZA())}function I(o,l){if(1&o&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&o){const r=l.$implicit;t.xp6(1),t.hij(" ",r.RSUQTY," ")}}function D(o,l){1&o&&(t.TgZ(0,"th",28),t._uU(1,"Reject"),t.qZA())}function q(o,l){if(1&o&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&o){const r=l.$implicit;t.xp6(1),t.hij(" ",r.RSXQTY," ")}}function x(o,l){1&o&&(t.TgZ(0,"th",28),t._uU(1,"Net"),t.qZA())}function Y(o,l){if(1&o&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&o){const r=l.$implicit;t.xp6(1),t.hij(" ",r.RSQTY," ")}}function $(o,l){1&o&&(t.TgZ(0,"th",28),t._uU(1," Actions"),t.qZA())}function L(o,l){if(1&o){const r=t.EpF();t.TgZ(0,"td",30)(1,"div",31)(2,"button",32)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"ul",33)(6,"li")(7,"button",34),t.NdJ("click",function(){t.CHM(r);const m=t.oxw();return t.KtG(m.RecordUsageSupplyUpdate())}),t.TgZ(8,"mat-icon",35),t._uU(9,"edit"),t.qZA(),t.TgZ(10,"mat-label"),t._uU(11,"Edit"),t.qZA()()()()()()}}function X(o,l){1&o&&t._UZ(0,"tr",36)}function w(o,l){if(1&o){const r=t.EpF();t.TgZ(0,"tr",37),t.NdJ("click",function(){const M=t.CHM(r).$implicit,k=t.oxw();return t.KtG(k.rowClick(M))}),t.qZA()}}const j=function(){return[8,16,24]};let J=(()=>{class o{constructor(r,d,m,M){this.fb=r,this.iheaderSvc=d,this.matDialog=m,this.router=M,this.displayedColumns=["Pool","Type","In","Out","Reject","Net","Actions"],this.dataSource=[],this.duplicateSource=[],this.update=!1,this.type=[],this.user=localStorage.getItem("userName")}ngOnInit(){this.element=history.state,this.form=this.fb.group({docNumber:"O\xa0\xa0"+this.element.OHBILL,Coverage:"S",Storer:this.element.OHSTOR,Consignee:this.element.OHCONS,Carrier:this.element.OHCAR}),this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.iheaderSvc.getSupplyUsage(this.user,"O",this.element.OHBILL,this.element.OHSTOR,this.element.OHSSFX,this.element.OHCONS,this.element.OHCAR).subscribe(r=>{var m=JSON.parse(r[0].data[1].value);this.duplicateSource=m.returnedData,this.dataSource=new p.by(this.duplicateSource),this.dataSource.paginator=this.paginator})}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}onBack(){this.router.navigate(["/main-nav/orders/read"])}rowClick(r){this.selectedRow=r}RecordUsageSupplyUpdate(){this.matDialog.open(y,{width:"5000px",maxHeight:"90vh",data:[this.element,this.selectedRow],autoFocus:!1})}successMessage(r){A().fire(r,"","success")}failureMessage(r){A().fire(r,"","error")}}return o.\u0275fac=function(r){return new(r||o)(t.Y36(g.qu),t.Y36(_.X),t.Y36(N.uw),t.Y36(K.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-record-supply"]],viewQuery:function(r,d){if(1&r&&t.Gf(f.NW,5),2&r){let m;t.iGM(m=t.CRH())&&(d.paginator=m.first)}},standalone:!0,features:[t.jDz],decls:57,vars:6,consts:[[1,"over-Flow"],[1,"title"],["mat-button","",1,"backButton","go-back-btn",3,"click"],[1,"tally-serach-form"],[1,"form","over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["readonly","","matInput","","formControlName","docNumber"],["readonly","","matInput","","formControlName","Coverage"],["readonly","","matInput","","formControlName","Storer"],["readonly","","matInput","","formControlName","Consignee"],["readonly","","matInput","","formControlName","Carrier"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","Pool"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","class","uppercase-text",4,"matCellDef"],["matColumnDef","Type"],["mat-cell","",4,"matCellDef"],["matColumnDef","In"],["matColumnDef","Out"],["matColumnDef","Reject"],["matColumnDef","Net"],["matColumnDef","Actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-header-cell","","mat-header-cell",""],["mat-cell","",1,"uppercase-text"],["mat-cell",""],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],["mat-header-row",""],["mat-row","",3,"click"]],template:function(r,d){1&r&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1)(3,"button",2),t.NdJ("click",function(){return d.onBack()}),t.TgZ(4,"mat-icon"),t._uU(5,"navigate_before "),t.qZA()(),t._uU(6,"Record Supply Usage "),t.qZA()(),t.TgZ(7,"mat-card-content",3)(8,"form",4)(9,"div",5)(10,"div",6)(11,"mat-form-field",7)(12,"mat-label"),t._uU(13,"Document:"),t.qZA(),t._UZ(14,"input",8),t.qZA(),t.TgZ(15,"mat-form-field",7)(16,"mat-label"),t._uU(17,"Coverage:"),t.qZA(),t._UZ(18,"input",9),t.qZA(),t.TgZ(19,"mat-form-field",7)(20,"mat-label"),t._uU(21,"Storer:"),t.qZA(),t._UZ(22,"input",10),t.qZA(),t.TgZ(23,"mat-form-field",7)(24,"mat-label"),t._uU(25,"Consignee:"),t.qZA(),t._UZ(26,"input",11),t.qZA(),t.TgZ(27,"mat-form-field",7)(28,"mat-label"),t._uU(29,"Carrier:"),t.qZA(),t._UZ(30,"input",12),t.qZA()()()()(),t.TgZ(31,"table",13),t.ynx(32,14),t.YNc(33,Z,2,0,"th",15),t.YNc(34,v,2,1,"td",16),t.BQk(),t.ynx(35,17),t.YNc(36,b,2,0,"th",15),t.YNc(37,R,2,1,"td",18),t.BQk(),t.ynx(38,19),t.YNc(39,U,2,0,"th",15),t.YNc(40,O,2,1,"td",16),t.BQk(),t.ynx(41,20),t.YNc(42,E,2,0,"th",15),t.YNc(43,I,2,1,"td",18),t.BQk(),t.ynx(44,21),t.YNc(45,D,2,0,"th",15),t.YNc(46,q,2,1,"td",18),t.BQk(),t.ynx(47,22),t.YNc(48,x,2,0,"th",15),t.YNc(49,Y,2,1,"td",18),t.BQk(),t.ynx(50,23),t.YNc(51,$,2,0,"th",15),t.YNc(52,L,12,0,"td",18),t.BQk(),t.YNc(53,X,1,0,"tr",24),t.YNc(54,w,1,0,"tr",25),t.qZA(),t._UZ(55,"mat-paginator",26,27),t.qZA()),2&r&&(t.xp6(8),t.Q6J("formGroup",d.form),t.xp6(23),t.Q6J("dataSource",d.dataSource),t.xp6(22),t.Q6J("matHeaderRowDef",d.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",d.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(5,j)))},dependencies:[B.m,g._Y,g.Fj,g.JJ,g.JL,g.sg,g.u,f.NW,n.Hw,a.lW,i.KE,i.hX,s.Nt,c.a8,c.dk,c.dn,c.n5,p.BZ,p.fO,p.as,p.w1,p.Dz,p.nj,p.ge,p.ev,p.XQ,p.Gk]}),o})()}}]);