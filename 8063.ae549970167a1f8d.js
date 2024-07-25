"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[8063],{79979:(q,S,a)=>{a.d(S,{C:()=>b});var _=a(80529),n=a(61135),g=a(75625),D=a(70262),O=a(62843),N=a(92340),e=a(94650);let b=(()=>{class m{constructor(o){this.httpClient=o,this.carrierDataSource=new n.X([]),this.url=N.N.API_BASE_URL,this.httpHeader={headers:new _.WM({"Content-Type":"application/json"})}}updatecarrierDataSource(o){let i=this.carrierDataSource.getValue();i.unshift(...o),this.carrierDataSource.next(i)}getCarrier(o,i,u){return this.httpClient.get(this.url+`/carriers/read?user=${o}&carrierCode=${i}&carrierName=${u}`)}getAllCarriers(o,i,u){return this.httpClient.get(this.url+`/carriers/readAll?user=${o}&pageNum=${i}&recordsPerPage=${u}`)}createCarrier(o,i,u,d,T,h,Z,A,p,C,U,v,I,E,l){return this.httpClient.post(this.url+"/carriers/create",{carrierCode:o,carrierName:i,carrierAdd1:u,carrierAdd2:d,zipcode:T,suffix:h,carrierScacCode:Z,hazardousMaterials:A,palletExchange:p,billFrequency:C,loadingAllowance:U,hundredWeight:v,minimumAmount:I,maximumAmount:E,user:l}).pipe((0,g.X)(1),(0,D.K)(this.httpError))}updateCarrier(o,i,u,d,T,h,Z,A,p,C,U,v,I,E,l){return this.httpClient.put(this.url+"/carriers/update",{carrierCode:o,carrierName:i,carrierAdd1:u,carrierAdd2:d,zipcode:T,suffix:h,carrierScacCode:Z,hazardousMaterials:A,palletExchange:p,billFrequency:C,loadingAllowance:U,hundredWeight:v,minimumAmount:I,maximumAmount:E,user:l}).pipe((0,g.X)(1),(0,D.K)(this.httpError))}httpError(o){let i="";return i=o.error instanceof ErrorEvent?o.error.message:`Error Code: ${o.status}\nMessage: ${o.message}`,console.log(i),(0,O._)(()=>new Error(i))}}return m.\u0275fac=function(o){return new(o||m)(e.LFG(_.eN))},m.\u0275prov=e.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},68063:(q,S,a)=>{a.r(S),a.d(S,{UpdateComponent:()=>E});var _=a(36895),n=a(24006),g=a(48529),D=a(35226),O=a.n(D),N=a(70879),e=a(94650),b=a(19132),m=a(15627),R=a(11240),o=a(79979),i=a(97392),u=a(4859),d=a(59549),T=a(44144),h=a(84385),Z=a(3238),A=a(99602),p=a(73546);function C(l,f){1&l&&(e.TgZ(0,"mat-error"),e._uU(1," Only "),e.TgZ(2,"strong"),e._uU(3,"numbers "),e.qZA(),e._uU(4," are allowed "),e.qZA())}function U(l,f){1&l&&(e.TgZ(0,"mat-error"),e._uU(1," Quantity From is "),e.TgZ(2,"strong"),e._uU(3,"required"),e.qZA()())}function v(l,f){if(1&l&&(e.TgZ(0,"mat-option",33),e._uU(1),e.qZA()),2&l){const r=f.$implicit;e.Q6J("value",r),e.xp6(1),e.AsE(" ",r.value,"- ",r.SCACcode," ")}}function I(l,f){if(1&l){const r=e.EpF();e.TgZ(0,"button",59),e.NdJ("click",function(){e.CHM(r);const s=e.oxw();return e.KtG(s.updateTally(s.tallyId))}),e._uU(1," Update "),e.qZA()}}let E=(()=>{class l{constructor(r,t,s,c,y,P,M){this.router=r,this.iHeaderSvc=t,this.storerService=s,this.fb=c,this.route=y,this.carrierSvc=P,this.datePipe=M,this.singleTally=[],this.carrierOptions=[],this.update=!0,this.minDate=(new Date).toLocaleDateString("fr-CA")}ngOnInit(){this.element=history.state,console.log("TALLY ELEMENT WITH SINGLE RECORD FOR UPDATING"),console.log(this.element),localStorage.getItem("LoggedIn")?(this.user=localStorage.getItem("userName"),this.building=localStorage.getItem("building")):(this.user=g.R.user,this.building=g.R.building),this.sTime=this.element.IHSCHT,this.form=this.fb.group({storer:this.element.IHSTOR,storerRef:this.element.IHSTRF,billTo:this.element.IHCUST,billToSfx:this.element.IHCSFX,billToSfx2:this.element.IHCSF2,invoice:this.element.IHINVO,building:this.element.IHBLDG,status:this.element.IHRCPS,loadType:this.element.IHLDTY,recptType:this.element.IHRCPT,recvdFrom:this.element.IHCONS,qty:[this.element.IHTQTY,[n.kI.required,n.kI.min(0),n.kI.pattern("[0-9]{1,10}")]],schedule:this.element.IHSCHA,Actual:this.element.IHACTA,schdldArrival:[this.element.IHSCHA,[n.kI.required]],actualArrival:[this.element.IHACTA,[n.kI.required]],schdldtime:[this.element.IHSCHT,[n.kI.required]],actualtime:this.element.IHACTT,wgt:this.element.IHTWGT,carrier:this.element.IHCARR,pro:this.element.IHPRO,car:this.element.IHCAR,authorization:this.element.IHAUTH,seal1:this.element.IHSEA1,seal2:this.element.IHSEA2,invoiceDate:this.element.IHINDT,broken1:this.element.IHBRK1,broken2:this.element.IHBRK2,returnValue:this.element.IHRTRN,notification:this.element.INEDIF,specialCharge:this.element.IHSPCG,chargeType:this.element.IHCHTY}),this.form.updateValueAndValidity(),this.route.params.subscribe(r=>{this.tallyId=r.id,console.log(this.tallyId)}),console.log(this.element.IHCARR),this.carrierSvc.getAllCarriers(this.user,1,50).subscribe(r=>{this.result=r;var t=this.result[0].data[1]?.value,s=JSON.parse(t);this.carrierSource=s.returnedData,console.log("ALL CARRIERS DATA FOR ORDER UPDATE 2 DROPDOWN :"),console.log(this.carrierSource);for(const c of this.carrierSource)this.carrierOptions.push({value:c.CRNUMB,SCACcode:c.CRSCAC})}),this.tallyId=this.element.IHTALY,console.log(this.tallyId,"Talyy Id"),this.storerService.getAll(this.user,this.element.IHSTOR).subscribe(r=>{this.result=r;var t=this.result[0].data[1]?.value,s=JSON.parse(t);this.duplicateSource=s.returnedData,console.log("STORER FULL DATA BY USING STORER NUMBER"),console.log(this.duplicateSource[0]),console.log("STORER NAME FOR FULL STORER"),console.log(this.duplicateSource[0].STNAME),this.fullStorer=this.element.IHSTOR+"  "+this.duplicateSource[0].STNAME})}ngOnDestroy(){this.getTallyHeadersSubscription&&this.getTallyHeadersSubscription.unsubscribe(),this.updateTallySubscription&&this.updateTallySubscription.unsubscribe()}validateYearLength(r){const t=r.value;return t&&t.toString().length>4?{invalidYear:!0}:null}changeTimeFormat(r){if(r)return r.replace(/(.{2})$/,":$1")}formatCustomTime(r){var t=r+"";return null!=t&&t.length>=4?(console.log(t.substring(0,2)+":"+t.substring(2,4)),t.substring(0,2)+":"+t.substring(2,4)):(console.log(t.length),t)}closeDialog(){}onBack(){this.router.navigate(["/main-nav/tallys/read"])}updateTally(r){var t=this.form.value;console.log(t),t.returnValue=t.returnValue?"Y":"N",t.broken1=t.broken1?"Y":"N",t.broken2=t.broken2?"Y":"N",t.specialCharge=t.specialCharge?"Y":"N",t.loadType=null!=t.loadType?t.loadType.toUpperCase():null,t.recptType=null!=t.recptType?t.recptType.toUpperCase():null,t.recvdFrom=null!=t.recvdFrom?t.recvdFrom.toUpperCase():null,t.user=this.user,console.log(t),this.updateTallySubscription&&this.updateTallySubscription.unsubscribe(),this.updateTallySubscription=this.iHeaderSvc.updateTally(t.storer,t.storerRef,t.loadType,t.recptType,t.recvdFrom,t.qty,t.schdldArrival,t.carrier,t.actualArrival,t.building,t.pro,t.wgt,this.user,t.schdldtime,t.actualtime,t.authorization?t.authorization.toUpperCase():"",t.car?t.car.toUpperCase():"",t.seal1?t.seal1.toUpperCase():"",t.seal2?t.seal2.toUpperCase():"",t.invoiceDate,t.returnValue,t.broken1?t.broken1.toUpperCase():"",t.broken2?t.broken2.toUpperCase():"",t.specialCharge?t.specialCharge.toUpperCase():"",t.notification?t.notification.toUpperCase():"",t.chargeType,t.billTo,t.billToSfx,t.billToSfx2,this.tallyId).subscribe(s=>{if(JSON.parse(s[0].data[1].value).success){const c=JSON.parse(s[0].data[1].value).returnedData.message;this.successMessage(c),this.router.navigate(["/main-nav/tallys/read"])}else{const c=JSON.parse(s[0].data[1].value).returnedData.message;this.failureMessage(c)}})}successMessage(r){O().fire(r,"","success"),this.router.navigate(["/main-nav/tallys/read"])}failureMessage(r){O().fire(r,"","error")}fetchHeaders(){return this.getTallyHeadersSubscription&&this.getTallyHeadersSubscription.unsubscribe(),this.iHeaderSvc.getTallyHeaders().subscribe(r=>{})}}return l.\u0275fac=function(r){return new(r||l)(e.Y36(b.F0),e.Y36(m.X),e.Y36(R.h),e.Y36(n.qu),e.Y36(b.gz),e.Y36(o.C),e.Y36(_.uU))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-update"]],standalone:!0,features:[e._Bn([_.uU]),e.jDz],decls:192,vars:9,consts:[[1,"over-Flow"],[1,"title"],["mat-button","",1,"backButton","go-back-btn",3,"click"],[1,"tally-serach-form"],[1,"form","over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["readonly","","matInput","","required","","formControlName","storer",3,"value"],[4,"ngIf"],["matInput","","formControlName","storerRef",2,"text-transform","uppercase"],[1,"form-group1"],["for","inputField",1,"form-heading"],[1,"form-input"],["matInput","","formControlName","billTo"],["matInput","","formControlName","billToSfx",2,"text-transform","uppercase"],["matInput","","formControlName","billToSfx2",2,"text-transform","uppercase"],["readonly","","matInput","","formControlName","invoice",2,"text-transform","uppercase"],["readonly","","matInput","","formControlName","building",2,"text-transform","uppercase"],["readonly","","matInput","","formControlName","status",2,"text-transform","uppercase"],["formControlName","loadType"],["value","S"],["value","F"],["value","C"],["value","P"],["formControlName","recptType"],["value","L"],["value","O"],["value","T"],["matInput","","required","","formControlName","recvdFrom",2,"text-transform","uppercase"],["matInput","","formControlName","qty"],["appearance","outline"],["appearance","outline","formControlName","returnValue"],[3,"value"],["matInput","","formControlName","authorization",2,"text-transform","uppercase"],["matInput","","type","date","formControlName","schdldArrival","required",""],["matInput","","type","time","formControlName","schdldtime","required",""],["matInput","","type","date","formControlName","actualArrival","required",""],["matInput","","type","time","formControlName","actualtime","required",""],["matInput","","formControlName","pro",2,"text-transform","uppercase"],["formControlName","carrier","required",""],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","car",2,"text-transform","uppercase"],["matInput","","formControlName","seal1",2,"text-transform","uppercase"],["formControlName","broken1"],["value","Y"],["value","N"],["matInput","","formControlName","seal2",2,"text-transform","uppercase"],["formControlName","broken2"],["formControlName","notification"],["value","D"],["value","E"],["type","date","matInput","","formControlName","invoiceDate"],["invoiceDatePicker",""],["formControlName","specialCharge"],["matInput","","formControlName","wgt"],["formControlName","chargeType"],["value","H"],["class","buttons addButton","mat-raised-button","",3,"click",4,"ngIf"],["mat-raised-button","",1,"buttons","addButton",3,"click"]],template:function(r,t){1&r&&(e.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1)(3,"button",2),e.NdJ("click",function(){return t.onBack()}),e.TgZ(4,"mat-icon"),e._uU(5,"navigate_before "),e.qZA()(),e._uU(6),e.qZA()(),e.TgZ(7,"mat-card-content",3)(8,"form",4)(9,"div",5)(10,"div",6)(11,"mat-form-field",7)(12,"mat-label"),e._uU(13,"Storer "),e.qZA(),e._UZ(14,"input",8),e.YNc(15,C,5,0,"mat-error",9),e.qZA(),e.TgZ(16,"mat-form-field",7)(17,"mat-label"),e._uU(18," Storer Reference "),e.qZA(),e._UZ(19,"input",10),e.qZA(),e.TgZ(20,"div",11)(21,"label",12),e._uU(22,"Bill To"),e.qZA(),e.TgZ(23,"div",13)(24,"mat-form-field",7)(25,"mat-label"),e._uU(26,"Bill To"),e.qZA(),e._UZ(27,"input",14),e.qZA(),e.TgZ(28,"mat-form-field",7)(29,"mat-label"),e._uU(30,"Suffix"),e.qZA(),e._UZ(31,"input",15),e.qZA(),e.TgZ(32,"mat-form-field",7)(33,"mat-label"),e._uU(34," Suffix 2"),e.qZA(),e._UZ(35,"input",16),e.qZA()()(),e.TgZ(36,"mat-form-field",7)(37,"mat-label"),e._uU(38," Invoice "),e.qZA(),e._UZ(39,"input",17),e.qZA(),e.TgZ(40,"mat-form-field",7)(41,"mat-label"),e._uU(42," Building "),e.qZA(),e._UZ(43,"input",18),e.qZA(),e.TgZ(44,"mat-form-field",7)(45,"mat-label"),e._uU(46," Status"),e.qZA(),e._UZ(47,"input",19),e.qZA(),e.TgZ(48,"mat-form-field",7)(49,"mat-label"),e._uU(50,"Load Type "),e.qZA(),e.TgZ(51,"mat-select",20)(52,"mat-option",21),e._uU(53,"S = Slip Sheet "),e.qZA(),e.TgZ(54,"mat-option",22),e._uU(55,"F = Floor unloaded "),e.qZA(),e.TgZ(56,"mat-option",23),e._uU(57,"C = Clamp "),e.qZA(),e.TgZ(58,"mat-option",24),e._uU(59,"P = Pallet "),e.qZA()()(),e.TgZ(60,"mat-form-field",7)(61,"mat-label"),e._uU(62,"Receipt Type "),e.qZA(),e.TgZ(63,"mat-select",25)(64,"mat-option",26),e._uU(65," L = Less than truckload "),e.qZA(),e.TgZ(66,"mat-option",23),e._uU(67," C = Car load "),e.qZA(),e.TgZ(68,"mat-option",21),e._uU(69," S = 20 Ft. Container "),e.qZA(),e.TgZ(70,"mat-option",27),e._uU(71," O = Container "),e.qZA(),e.TgZ(72,"mat-option",24),e._uU(73," P = Pallet"),e.qZA(),e.TgZ(74,"mat-option",28),e._uU(75," T = Truckload"),e.qZA()()(),e.TgZ(76,"mat-form-field",7)(77,"mat-label"),e._uU(78,"Received from "),e.qZA(),e._UZ(79,"input",29),e.qZA(),e.TgZ(80,"mat-form-field",7)(81,"mat-label"),e._uU(82," Total Quantity "),e.qZA(),e._UZ(83,"input",30),e.YNc(84,U,4,0,"mat-error",9),e.qZA(),e.TgZ(85,"mat-form-field",31)(86,"mat-label"),e._uU(87,"Returned "),e.qZA(),e.TgZ(88,"mat-select",32)(89,"mat-option",33),e._uU(90,"Yes"),e.qZA(),e.TgZ(91,"mat-option",33),e._uU(92,"No"),e.qZA()()(),e.TgZ(93,"mat-form-field",7)(94,"mat-label"),e._uU(95,"Authorization "),e.qZA(),e._UZ(96,"input",34),e.qZA(),e.TgZ(97,"mat-form-field",7)(98,"mat-label"),e._uU(99,"Schedule Arrival date"),e.qZA(),e._UZ(100,"input",35),e.qZA(),e.TgZ(101,"mat-form-field",7)(102,"mat-label"),e._uU(103,"Schedule Arrival time"),e.qZA(),e._UZ(104,"input",36),e.qZA(),e._UZ(105,"br"),e.TgZ(106,"mat-form-field",7)(107,"mat-label"),e._uU(108,"Actual Arrival date"),e.qZA(),e._UZ(109,"input",37),e.qZA(),e.TgZ(110,"mat-form-field",7)(111,"mat-label"),e._uU(112,"Actual Arrival time"),e.qZA(),e._UZ(113,"input",38),e.qZA(),e.TgZ(114,"mat-form-field",7)(115,"mat-label"),e._uU(116,"Pro Number "),e.qZA(),e._UZ(117,"input",39),e.qZA(),e.TgZ(118,"mat-form-field",7)(119,"mat-label"),e._uU(120,"Carrier"),e.qZA(),e.TgZ(121,"mat-select",40),e.YNc(122,v,2,3,"mat-option",41),e.qZA()(),e.TgZ(123,"mat-form-field",7)(124,"mat-label"),e._uU(125," Car/Trailer No "),e.qZA(),e._UZ(126,"input",42),e.qZA(),e.TgZ(127,"mat-form-field",7)(128,"mat-label"),e._uU(129,"Seal 1"),e.qZA(),e._UZ(130,"input",43),e.qZA(),e.TgZ(131,"mat-form-field",7)(132,"mat-label"),e._uU(133,"Broken 1"),e.qZA(),e.TgZ(134,"mat-select",44)(135,"mat-option",45),e._uU(136,"Y = Yes"),e.qZA(),e.TgZ(137,"mat-option",46),e._uU(138,"N = No"),e.qZA()()(),e.TgZ(139,"mat-form-field",7)(140,"mat-label"),e._uU(141,"Seal 2"),e.qZA(),e._UZ(142,"input",47),e.qZA(),e.TgZ(143,"mat-form-field",7)(144,"mat-label"),e._uU(145,"Broken 2"),e.qZA(),e.TgZ(146,"mat-select",48)(147,"mat-option",45),e._uU(148,"Y = Yes"),e.qZA(),e.TgZ(149,"mat-option",46),e._uU(150,"N = No"),e.qZA()()(),e.TgZ(151,"mat-form-field",7)(152,"mat-label"),e._uU(153,"Notification"),e.qZA(),e.TgZ(154,"mat-select",49)(155,"mat-option",50),e._uU(156," D = Receiving Documents exist"),e.qZA(),e.TgZ(157,"mat-option",51),e._uU(158," E = Electronic/EDI "),e.qZA(),e.TgZ(159,"mat-option",46),e._uU(160," N = no notification was received"),e.qZA()()(),e.TgZ(161,"mat-form-field",7)(162,"mat-label"),e._uU(163,"Invoice Date"),e.qZA(),e._UZ(164,"input",52)(165,"mat-datepicker",null,53),e.qZA(),e.TgZ(167,"mat-form-field",31)(168,"mat-label"),e._uU(169,"Special Charge"),e.qZA(),e.TgZ(170,"mat-select",54)(171,"mat-option",45),e._uU(172,"Y = Yes"),e.qZA(),e.TgZ(173,"mat-option",46),e._uU(174,"N = No"),e.qZA()()(),e.TgZ(175,"mat-form-field",7)(176,"mat-label"),e._uU(177,"Override Weight"),e.qZA(),e._UZ(178,"input",55),e.qZA(),e.TgZ(179,"mat-form-field",31)(180,"mat-label"),e._uU(181," Charge Type "),e.qZA(),e.TgZ(182,"mat-select",56)(183,"mat-option",46),e._uU(184,"N = No Charge W/R "),e.qZA(),e.TgZ(185,"mat-option",50),e._uU(186," D = Distribution Only W/R "),e.qZA(),e.TgZ(187,"mat-option",21),e._uU(188,"S = Storage Only W/R "),e.qZA(),e.TgZ(189,"mat-option",57),e._uU(190," H = Handling Only W/R "),e.qZA()()()()(),e.YNc(191,I,2,0,"button",58),e.qZA()()()),2&r&&(e.xp6(6),e.hij("Tally ",t.element.IHTALY," "),e.xp6(2),e.Q6J("formGroup",t.form),e.xp6(6),e.s9C("value",t.fullStorer),e.xp6(1),e.Q6J("ngIf",t.form.controls.storer.hasError("pattern")),e.xp6(69),e.Q6J("ngIf",t.form.controls.qty.hasError("required")),e.xp6(5),e.Q6J("value",!0),e.xp6(2),e.Q6J("value",!1),e.xp6(31),e.Q6J("ngForOf",t.carrierOptions),e.xp6(69),e.Q6J("ngIf",t.update))},dependencies:[N.m,_.sg,_.O5,n._Y,n.Fj,n.JJ,n.JL,n.Q7,n.sg,n.u,i.Hw,u.lW,d.TO,d.KE,d.hX,T.Nt,h.gD,Z.ey,A.Mq,p.a8,p.dk,p.dn,p.n5],styles:[".mat-form-field[_ngcontent-%COMP%]{padding-right:10px}"]}),l})()}}]);