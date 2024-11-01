"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[3134,3128],{3134:(M,R,u)=>{u.r(R),u.d(R,{CustomersComponent:()=>ot});var r=u(24006),U=u(65412),q=u(35226),Z=u.n(q),E=u(70879),F=u(48529),t=u(94650),_=u(19132),I=u(23128),m=u(97392),l=u(4859),c=u(59549),p=u(44144),f=u(84385),g=u(3238),C=u(73546);let A=(()=>{class s{constructor(e,o,a,n,d){this.data=e,this.dialogRef=o,this.router=a,this.fb=n,this.CustomersService=d,this.user=localStorage.getItem("userName"),this.url="/main-nav/customers/read"}ngOnDestroy(){this.customerSubscription&&this.customerSubscription.unsubscribe()}ngOnInit(){this.form=this.fb.group({CUST:this.data.WKCUST+"\xa0"+this.data.CUSFX+"\xa0"+this.data.CUSSFX,CUNAME:[this.data.CUNAME,[r.kI.required]],CUADD1:this.data.CUADD1,CUADD2:this.data.CUADD2,CUADD3:this.data.CUADD3,CUZIP:[this.data.CUZIP,[r.kI.pattern("[0-9]{5}"),r.kI.required]],CUZSFX:[this.data.CUZSFX,[r.kI.pattern("[0-9]{0,4}")]],CUPHAR:[this.data.CUPHAR,[r.kI.pattern("[0-9]{0,3}")]],CUPHEX:[this.data.CUPHEX,[r.kI.pattern("[0-9]{0,3}")]],CUPHNU:[this.data.CUPHNU,[r.kI.pattern("[0-9]{0,4}")]],CUFXAR:[this.data.CUFXAR,[r.kI.pattern("[0-9]{0,3}")]],CUFXEX:[this.data.CUFXEX,[r.kI.pattern("[0-9]{0,3}")]],CUFXNU:[this.data.CUFXNU,[r.kI.pattern("[0-9]{0,4}")]],CUCPER:this.data.CUCPER,CUSORT:this.data.CUSORT,CUSTPR:this.data.CUSTPR})}customersUpdate(){var e=this.form.value;const o=(a,n)=>String(a).padStart(n,"0");this.customerSubscription&&this.customerSubscription.unsubscribe(),this.customerSubscription=this.CustomersService.CustomersUpdate(this.data.WKCUST,this.data.CUSFX,this.data.CUSSFX,e.CUNAME,e.CUADD1,e.CUADD2,e.CUADD3,e.CUZIP,e.CUZSFX,o(e.CUPHAR,3),o(e.CUPHEX,3),o(e.CUPHNU,4),o(e.CUFXAR,3),o(e.CUFXEX,3),o(e.CUFXNU,4),e.CUCPER,e.CUSORT,e.CUSTPR,this.user).subscribe(a=>{const d=JSON.parse(a[0].data[a[0].data.length-1].value).returnedData.message;d===F.R.updateMsg?(this.successMessage(d),this.closeDialog(),this.router.navigate([this.url])):this.failureMessage(d)})}successMessage(e){Z().fire(e,"","success")}failureMessage(e){Z().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(U.WI),t.Y36(U.so),t.Y36(_.F0),t.Y36(r.qu),t.Y36(I.v))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-customer-update"]],standalone:!0,features:[t.jDz],decls:143,vars:2,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["readonly","","matInput","","formControlName","CUST"],["matInput","","formControlName","CUNAME"],[1,"form-group1"],["for","inputField",1,"form-heading"],[1,"form-input"],["appearance","outline",1,"full-width2"],["matInput","","formControlName","CUADD1"],["matInput","","formControlName","CUADD2"],["matInput","","formControlName","CUADD3"],["matInput","","required","","formControlName","CUZIP","maxlength","5"],["matInput","","formControlName","CUZSFX","maxlength","4"],["matInput","","formControlName","CUPHAR","maxlength","3"],["matInput","","formControlName","CUPHEX","maxlength","3"],["matInput","","formControlName","CUPHNU","maxlength","4"],["matInput","","formControlName","CUFXAR","maxlength","3"],["matInput","","formControlName","CUFXEX","maxlength","3"],["matInput","","formControlName","CUFXNU","maxlength","4"],["matInput","","formControlName","CUCPER"],["matInput","","formControlName","CUSORT"],["formControlName","CUSTPR"],["value","Y"],["value","N"],["mat-button","",1,"buttons","addButton",3,"disabled","click"]],template:function(e,o){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4," Customer Maintenance"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return o.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"Customer"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18," Customer Name "),t.qZA(),t._UZ(19,"input",10),t.qZA(),t._UZ(20,"br"),t.TgZ(21,"div",11)(22,"label",12),t._uU(23,"Address"),t.qZA(),t.TgZ(24,"div",13)(25,"mat-form-field",14)(26,"mat-label"),t._uU(27," Address1 "),t.qZA(),t._UZ(28,"input",15),t.qZA(),t.TgZ(29,"mat-form-field",14)(30,"mat-label"),t._uU(31," Address 2"),t.qZA(),t._UZ(32,"input",16),t.qZA(),t.TgZ(33,"mat-form-field",14)(34,"mat-label"),t._uU(35," Address 3"),t.qZA(),t._UZ(36,"input",17),t.qZA()()(),t._UZ(37,"br"),t.TgZ(38,"div",11)(39,"label",12),t._uU(40,"Zip Code"),t.qZA(),t.TgZ(41,"div",13)(42,"mat-form-field",8)(43,"mat-label"),t._uU(44,"Zip Code "),t.qZA(),t._UZ(45,"input",18),t.TgZ(46,"mat-hint"),t._uU(47," Only "),t.TgZ(48,"strong"),t._uU(49,"5 digits "),t.qZA(),t._uU(50," are allowed"),t.qZA()(),t.TgZ(51,"mat-form-field",8)(52,"mat-label"),t._uU(53,"Suffix "),t.qZA(),t._UZ(54,"input",19),t.TgZ(55,"mat-hint"),t._uU(56," Only "),t.TgZ(57,"strong"),t._uU(58,"4 digits "),t.qZA(),t._uU(59," are allowed"),t.qZA()()()(),t._UZ(60,"br"),t.TgZ(61,"div",11)(62,"label",12),t._uU(63,"Phone Number"),t.qZA(),t.TgZ(64,"div",13)(65,"mat-form-field",8)(66,"mat-label"),t._uU(67," Area Code "),t.qZA(),t._UZ(68,"input",20),t.TgZ(69,"mat-hint"),t._uU(70," Only "),t.TgZ(71,"strong"),t._uU(72,"3 digits "),t.qZA(),t._uU(73," are allowed"),t.qZA()(),t.TgZ(74,"mat-form-field",8)(75,"mat-label"),t._uU(76," Exchange Number "),t.qZA(),t._UZ(77,"input",21),t.TgZ(78,"mat-hint"),t._uU(79," Only "),t.TgZ(80,"strong"),t._uU(81,"3 digits "),t.qZA(),t._uU(82," are allowed"),t.qZA()(),t.TgZ(83,"mat-form-field",8)(84,"mat-label"),t._uU(85," Suffix "),t.qZA(),t._UZ(86,"input",22),t.TgZ(87,"mat-hint"),t._uU(88," Only "),t.TgZ(89,"strong"),t._uU(90,"4 digits "),t.qZA(),t._uU(91," are allowed"),t.qZA()()()(),t._UZ(92,"br"),t.TgZ(93,"div",11)(94,"label",12),t._uU(95,"Fax Number"),t.qZA(),t.TgZ(96,"div",13)(97,"mat-form-field",8)(98,"mat-label"),t._uU(99," Area Code "),t.qZA(),t._UZ(100,"input",23),t.TgZ(101,"mat-hint"),t._uU(102," Only "),t.TgZ(103,"strong"),t._uU(104,"3 digits "),t.qZA(),t._uU(105," are allowed"),t.qZA()(),t.TgZ(106,"mat-form-field",8)(107,"mat-label"),t._uU(108,"Exchange Code "),t.qZA(),t._UZ(109,"input",24),t.TgZ(110,"mat-hint"),t._uU(111," Only "),t.TgZ(112,"strong"),t._uU(113,"3 digits "),t.qZA(),t._uU(114," are allowed"),t.qZA()(),t.TgZ(115,"mat-form-field",8)(116,"mat-label"),t._uU(117,"Suffix "),t.qZA(),t._UZ(118,"input",25),t.TgZ(119,"mat-hint"),t._uU(120," Only "),t.TgZ(121,"strong"),t._uU(122,"4 digits "),t.qZA(),t._uU(123," are allowed"),t.qZA()()()(),t._UZ(124,"br"),t.TgZ(125,"mat-form-field",8)(126,"mat-label"),t._uU(127,"Contact Person "),t.qZA(),t._UZ(128,"input",26),t.qZA(),t.TgZ(129,"mat-form-field",8)(130,"mat-label"),t._uU(131,"Sort Field "),t.qZA(),t._UZ(132,"input",27),t.qZA(),t.TgZ(133,"mat-form-field",8)(134,"mat-label"),t._uU(135,"Print Statement"),t.qZA(),t.TgZ(136,"mat-select",28)(137,"mat-option",29),t._uU(138,"Yes"),t.qZA(),t.TgZ(139,"mat-option",30),t._uU(140,"No"),t.qZA()()()()(),t.TgZ(141,"button",31),t.NdJ("click",function(){return o.customersUpdate()}),t._uU(142," Update "),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",o.form),t.xp6(132),t.Q6J("disabled",!(o.form.valid&&o.form.dirty)))},dependencies:[E.m,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.nD,r.sg,r.u,m.Hw,l.lW,c.KE,c.bx,c.hX,p.Nt,f.gD,g.ey,C.a8,C.dk,C.dn,C.n5]}),s})(),b=(()=>{class s{constructor(e,o,a,n,d){this.anyvariable=e,this.dialogRef=o,this.router=a,this.fb=n,this.CustomersService=d,this.url="/main-nav/customers/read",this.user=localStorage.getItem("userName")}ngOnInit(){this.form=this.fb.group({CUST:this.anyvariable.WKCUST+"\xa0"+this.anyvariable.CUSFX+"\xa0"+this.anyvariable.CUSSFX,CUNAME:this.anyvariable.CUNAME,XCUST:"",XCUSFX:"",XCUSF2:""})}ngOnDestroy(){this.customerSubscription&&this.customerSubscription.unsubscribe()}WCustomersConsolidate(){var e=this.form.value;this.customerSubscription&&this.customerSubscription.unsubscribe(),this.customerSubscription=this.CustomersService.CustomersConsolidate(F.R.fullSlotAisl(this.anyvariable.WKCUST),this.anyvariable.CUSFX,this.anyvariable.CUSSFX,e.XCUST,e.XCUSFX,e.XCUSF2).subscribe(o=>{const n=o[0].data[o[0].data.length-1].value;JSON.parse(o[0].success&&"DELETED AND CONSOLIDATED REFERENCES TO ANOTHER CUSTOMER"==n)?(this.successMessage(n+":\xa0"+e.XCUST),this.closeDialog(),this.router.navigate([this.url])):this.failureMessage(n+":\xa0"+e.XCUST)})}successMessage(e){Z().fire(e,"","success")}failureMessage(e){Z().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(U.WI),t.Y36(U.so),t.Y36(_.F0),t.Y36(r.qu),t.Y36(I.v))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-customer-consolidate"]],standalone:!0,features:[t.jDz],decls:39,vars:2,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["readonly","","matInput","","formControlName","CUST"],["readonly","","matInput","","formControlName","CUNAME",2,"text-transform","uppercase"],[1,"form-group1"],["for","inputField",1,"form-heading"],[1,"form-input"],["required","","matInput","","formControlName","XCUST","maxlength","4"],["matInput","","formControlName","XCUSFX","maxlength","2"],["matInput","","formControlName","XCUSF2","maxlength","2"],["mat-button","",1,"buttons","removeButton",3,"disabled","click"]],template:function(e,o){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Consolidate a Customer"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return o.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"Customer Number"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18,"Customer Name"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"div",11)(21,"label",12),t._uU(22,"Consolidate References to Customer"),t.qZA(),t.TgZ(23,"div",13)(24,"mat-form-field",8)(25,"mat-label"),t._uU(26,"Customer Code"),t.qZA(),t._UZ(27,"input",14),t.qZA(),t.TgZ(28,"mat-form-field",8)(29,"mat-label"),t._uU(30,"Suffix1"),t.qZA(),t._UZ(31,"input",15),t.qZA(),t.TgZ(32,"mat-form-field",8)(33,"mat-label"),t._uU(34,"Suffix2"),t.qZA(),t._UZ(35,"input",16),t.qZA()()(),t._UZ(36,"br"),t.qZA()(),t.TgZ(37,"button",17),t.NdJ("click",function(){return o.WCustomersConsolidate()}),t._uU(38,"Consolidate"),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",o.form),t.xp6(28),t.Q6J("disabled",!o.form.valid))},dependencies:[E.m,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.nD,r.sg,r.u,m.Hw,l.lW,c.KE,c.hX,p.Nt,C.a8,C.dk,C.dn,C.n5],styles:[".form-heading[_ngcontent-%COMP%]{display:block;width:300px}"]}),s})();var S=u(56413),h=u(7155),T=u(98739),v=u(334),N=u(36895),x=u(10266),y=u(34894);function D(s,i){if(1&s){const e=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.searchCustomers())}),t.TgZ(1,"mat-icon"),t._uU(2,"clear"),t.qZA()()}}function X(s,i){if(1&s){const e=t.EpF();t.TgZ(0,"button",25),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.searchCustomers())}),t.TgZ(1,"mat-icon"),t._uU(2,"search"),t.qZA()()}}function P(s,i){if(1&s){const e=t.EpF();t.TgZ(0,"form",26),t.NdJ("ngSubmit",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.getCustomerBySearch(a.form.value))}),t.TgZ(1,"div",27)(2,"div",28)(3,"mat-form-field",29)(4,"mat-label"),t._uU(5,"Customer Number"),t.qZA(),t._UZ(6,"input",30),t.qZA(),t.TgZ(7,"mat-form-field",29)(8,"mat-label"),t._uU(9,"Name"),t.qZA(),t._UZ(10,"input",31),t.qZA()()(),t.TgZ(11,"button",32),t._uU(12," Search "),t.qZA()()}if(2&s){const e=t.oxw();t.Q6J("formGroup",e.form)}}function O(s,i){1&s&&(t.TgZ(0,"th",33),t._uU(1,"Customer"),t.qZA())}function k(s,i){if(1&s&&(t.TgZ(0,"td",34),t._uU(1),t.qZA()),2&s){const e=i.$implicit;t.xp6(1),t.Oqu(e.WKCUST)}}function H(s,i){1&s&&(t.TgZ(0,"th",33),t._uU(1,"Name"),t.qZA())}function $(s,i){if(1&s&&(t.TgZ(0,"td",34),t._uU(1),t.qZA()),2&s){const e=i.$implicit;t.xp6(1),t.Oqu(e.CUNAME)}}function J(s,i){1&s&&(t.TgZ(0,"th",33),t._uU(1,"Phone"),t.qZA())}function Y(s,i){if(1&s&&(t.TgZ(0,"td",34),t._uU(1),t.qZA()),2&s){const e=i.$implicit;t.xp6(1),t.lnq(" ",e.CUPHAR,"\xa0",e.CUPHEX,"-",e.CUPHNU," ")}}function B(s,i){1&s&&(t.TgZ(0,"th",33),t._uU(1,"Contact"),t.qZA())}function K(s,i){if(1&s&&(t.TgZ(0,"td",34),t._uU(1),t.qZA()),2&s){const e=i.$implicit;t.xp6(1),t.Oqu(e.CUCPER)}}function W(s,i){1&s&&(t.TgZ(0,"th",33),t._uU(1,"Fax"),t.qZA())}function Q(s,i){if(1&s&&(t.TgZ(0,"td",34),t._uU(1),t.qZA()),2&s){const e=i.$implicit;t.xp6(1),t.lnq(" ",e.CUFXAR,"\xa0",e.CUFXEX,"-",e.CUFXNU," ")}}function L(s,i){1&s&&(t.TgZ(0,"th",33),t._uU(1,"Address"),t.qZA())}function G(s,i){if(1&s&&(t.TgZ(0,"td",34),t._uU(1),t.qZA()),2&s){const e=i.$implicit;t.xp6(1),t.lnq(" ",e.CUADD1,"",e.CUADD2,"",e.CUADD3," ")}}function z(s,i){1&s&&t._UZ(0,"th",35)}function j(s,i){if(1&s){const e=t.EpF();t.TgZ(0,"td",34)(1,"div",36)(2,"button",37)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"ul",38)(6,"li")(7,"button",39),t.NdJ("click",function(){const n=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.customersUpdate(n))}),t.TgZ(8,"mat-icon",40),t._uU(9,"edit"),t.qZA(),t.TgZ(10,"mat-label"),t._uU(11,"Update"),t.qZA()()(),t.TgZ(12,"li")(13,"button",39),t.NdJ("click",function(){const n=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.wCustomersConsolidate(n))}),t.TgZ(14,"mat-icon",40),t._uU(15,"call_made"),t.qZA(),t.TgZ(16,"mat-label"),t._uU(17,"Consolidate"),t.qZA()()(),t.TgZ(18,"li")(19,"button",39),t.NdJ("click",function(){const n=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.attributes(n))}),t.TgZ(20,"mat-icon",40),t._uU(21,"call_made"),t.qZA(),t.TgZ(22,"mat-label"),t._uU(23,"Account Attributes"),t.qZA()()(),t.TgZ(24,"li")(25,"button",39),t.NdJ("click",function(){const n=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.inquiry(n))}),t.TgZ(26,"mat-icon",40),t._uU(27,"call_made"),t.qZA(),t.TgZ(28,"mat-label"),t._uU(29,"Inquiry"),t.qZA()()(),t.TgZ(30,"li")(31,"button",39),t.NdJ("click",function(){const n=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.statement(n))}),t.TgZ(32,"mat-icon",40),t._uU(33,"call_made"),t.qZA(),t.TgZ(34,"mat-label"),t._uU(35,"Statement"),t.qZA()()()()()()}}function V(s,i){1&s&&t._UZ(0,"tr",41)}function tt(s,i){if(1&s){const e=t.EpF();t.TgZ(0,"tr",42),t.NdJ("click",function(){const n=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.rowClick(n.id))}),t.qZA()}if(2&s){const e=i.$implicit,o=t.oxw();t.ekj("selected",o.selectedRow==e.id)}}const et=function(){return[8,16,24]};let ot=(()=>{class s{constructor(e,o,a,n){this.fb=e,this.router=o,this.matDialog=a,this.CustomersService=n,this.form=this.fb.group({CUST:"",NAME:""}),this.displayedColumns=["Customer","Name","Phone","Contact","Actions"],this.searchTextDisplay=!1,this.dataSource=new h.by,this.user=localStorage.getItem("userName")||"",this.editedRows=[],this.id=0,this.pageNumber=1,this.columnShowHideList=[],this.pageSize=8,this.totalRecords=0,this.currentFilters=null,this.url="/main-nav/Customer-Attributes/read",this.url1="/main-nav/Customer-Inquiry/read",this.date=(new Date).toLocaleDateString("fr-CA"),this.outputMsg="Report Generated Successfully"}ngOnInit(){this.initializeColumnProperties(),this.editedRows=[],this.getCustomers(this.pageSize,this.pageNumber),this.dataSource.filterPredicate=this.createFilter()}ngOnDestroy(){this.customerSubscription&&this.customerSubscription.unsubscribe()}toggleColumn(e){if(e.isActive)e.position>this.displayedColumns.length-1?this.displayedColumns.push(e.name):this.displayedColumns.splice(e.position,0,e.name);else{let o=this.displayedColumns.indexOf(e.name);o>-1&&this.displayedColumns.splice(o,1)}}initializeColumnProperties(){this.displayedColumns.forEach((e,o)=>{"Actions"!=e&&this.columnShowHideList.push({position:o,name:e,isActive:!0})}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"Fax",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"Address",isActive:!1})}getCustomers(e,o){const a=this.currentFilters||{},{CUST:n="",NAME:d=""}=a;this.customerSubscription&&this.customerSubscription.unsubscribe(),this.customerSubscription=this.CustomersService.getCustomers(n,this.user,d,e,o).subscribe(st=>{var w=JSON.parse(st[0].data[1]?.value);this.dataSource.data=w.returnedData,this.totalRecords=w.TotalRecords})}createFilter(){return(e,o)=>{const a=JSON.parse(o);return Object.keys(a).every(n=>e[n].toString().toLowerCase().includes(a[n].toLowerCase()))}}getCustomerBySearch(e){this.currentFilters=e,this.paginator.firstPage(),this.getCustomers(this.pageSize,this.pageNumber)}resetSearch(){this.form.reset();const e=this.pageSize,o=this.pageNumber;this.currentFilters=null,this.paginator.firstPage(),this.getCustomers(e,o)}onPaginateChange(e){this.pageSize=e.pageSize,this.getCustomers(e.pageSize,e.pageIndex+1)}customersCreate(){this.matDialog.open(S.CustomerAddComponent,{width:"1000px",maxHeight:"80vh",autoFocus:!1})}rowClick(e){this.selectedRow=e}customersUpdate(e){this.matDialog.open(A,{width:"1000px",maxHeight:"80vh",data:e,autoFocus:!1})}wCustomersConsolidate(e){this.matDialog.open(b,{width:"1000px",maxHeight:"80vh",data:e,autoFocus:!1})}storerAccount(e){this.matDialog.open(v.n,{width:"1000px",maxHeight:"80vh",data:e,autoFocus:!1})}attributes(e){this.router.navigateByUrl(this.url,{state:e})}inquiry(e){this.router.navigateByUrl(this.url1,{state:e})}statement(e){this.customerSubscription&&this.customerSubscription.unsubscribe(),this.customerSubscription=this.CustomersService.customerStatement(e.WKCUST,e.CUSFX,e.CUSSFX,this.date).subscribe(o=>{const n=o[0].data[o[0].data.length-1].value;n?.toUpperCase()===this.outputMsg.toUpperCase()?this.successMessage(n):this.failureMessage(n)})}searchCustomers(){this.searchTextDisplay=1!=this.searchTextDisplay}successMessage(e){Z().fire(e,"","success")}failureMessage(e){Z().fire(e,"","error")}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(r.qu),t.Y36(_.F0),t.Y36(U.uw),t.Y36(I.v))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-customers"]],viewQuery:function(e,o){if(1&e&&t.Gf(T.NW,5),2&e){let a;t.iGM(a=t.CRH())&&(o.paginator=a.first)}},standalone:!0,features:[t.jDz],decls:41,vars:10,consts:[[1,"over-Flow"],[1,"title"],[1,"buttons"],["mat-button","","class","addButton",3,"click",4,"ngIf"],["mat-button","","class","addButton","matTooltip","Search Customers",3,"click",4,"ngIf"],["mat-button","","matTooltip","Add New Customers",1,"addButton",3,"click"],["mat-button","","type","reset","value","Reset","matTooltip","Reset customer values",1,"addButton","buttons",3,"click"],[1,"tally-serach-form"],[3,"formGroup","ngSubmit",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","Customer"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Name"],["matColumnDef","Phone"],["matColumnDef","Contact"],["matColumnDef","Fax"],["matColumnDef","Address"],["matColumnDef","Actions"],["mat-header-cell","","class","pending_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"selected","click",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"length","pageSizeOptions","pageSize","page"],["paginator",""],["mat-button","",1,"addButton",3,"click"],["mat-button","","matTooltip","Search Customers",1,"addButton",3,"click"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","CUST"],["matInput","","formControlName","NAME","appUppercase",""],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"pending_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],["mat-header-row",""],["mat-row","",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3,"Work With Customers"),t.qZA(),t.TgZ(4,"div",2),t.YNc(5,D,3,0,"button",3),t.YNc(6,X,3,0,"button",4),t.TgZ(7,"button",5),t.NdJ("click",function(){return o.customersCreate()}),t.TgZ(8,"mat-icon"),t._uU(9,"add"),t.qZA()(),t.TgZ(10,"button",6),t.NdJ("click",function(){return o.resetSearch()}),t.TgZ(11,"mat-icon"),t._uU(12,"loop"),t.qZA()()()(),t.TgZ(13,"mat-card-content",7),t.YNc(14,P,13,1,"form",8),t.qZA(),t.TgZ(15,"table",9),t.ynx(16,10),t.YNc(17,O,2,0,"th",11),t.YNc(18,k,2,1,"td",12),t.BQk(),t.ynx(19,13),t.YNc(20,H,2,0,"th",11),t.YNc(21,$,2,1,"td",12),t.BQk(),t.ynx(22,14),t.YNc(23,J,2,0,"th",11),t.YNc(24,Y,2,3,"td",12),t.BQk(),t.ynx(25,15),t.YNc(26,B,2,0,"th",11),t.YNc(27,K,2,1,"td",12),t.BQk(),t.ynx(28,16),t.YNc(29,W,2,0,"th",11),t.YNc(30,Q,2,3,"td",12),t.BQk(),t.ynx(31,17),t.YNc(32,L,2,0,"th",11),t.YNc(33,G,2,3,"td",12),t.BQk(),t.ynx(34,18),t.YNc(35,z,1,0,"th",19),t.YNc(36,j,36,0,"td",12),t.BQk(),t.YNc(37,V,1,0,"tr",20),t.YNc(38,tt,1,2,"tr",21),t.qZA(),t.TgZ(39,"mat-paginator",22,23),t.NdJ("page",function(n){return o.onPaginateChange(n)}),t.qZA()()),2&e&&(t.xp6(5),t.Q6J("ngIf",o.searchTextDisplay),t.xp6(1),t.Q6J("ngIf",!o.searchTextDisplay),t.xp6(8),t.Q6J("ngIf",o.searchTextDisplay),t.xp6(1),t.Q6J("dataSource",o.dataSource),t.xp6(22),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns),t.xp6(1),t.Q6J("length",o.totalRecords)("pageSizeOptions",t.DdM(9,et))("pageSize",o.pageSize))},dependencies:[E.m,N.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,T.NW,m.Hw,l.lW,c.KE,c.hX,p.Nt,C.a8,C.dk,C.dn,C.n5,h.BZ,h.fO,h.as,h.w1,h.Dz,h.nj,h.ge,h.ev,h.XQ,h.Gk,x.gM,y.e]}),s})()},23128:(M,R,u)=>{u.d(R,{v:()=>t});var r=u(80529),U=u(75625),q=u(70262),Z=u(62843),E=u(92340),F=u(94650);let t=(()=>{class _{constructor(m){this.httpClient=m,this.url=E.N.API_BASE_URL,this.httpHeader={headers:new r.WM({"Content-Type":"application/json"})},this.update="/Customers/update",this.create="/Customers/create",this.consolidate="/Customers/consolidate",this.statement="/Customers/statement"}getCustomers(m,l,c,p,f){return this.httpClient.get(this.url+"/Customers/read",{params:{customerCode:m??"",user:l,customerName:c??"",recordsPerPage:p??"",pageNo:f??""}})}CustomersCreate(m,l,c,p,f,g,C,A,b,S,h,T,v,N,x,y,D,X,P){return this.httpClient.post(this.url+this.create,{CUST:m,CUSFX:l,CUSSFX:c,CUNAME:p,CUADD1:f,CUADD2:g,CUADD3:C,CUZIP:A,CUZSFX:b,CUPHAR:S,CUPHEX:h,CUPHNU:T,CUFXAR:v,CUFXEX:N,CUFXNU:x,CUCPER:y,CUSORT:D,CUSTPR:X,user:P}).pipe((0,U.X)(1),(0,q.K)(this.httpError))}CustomersUpdate(m,l,c,p,f,g,C,A,b,S,h,T,v,N,x,y,D,X,P){return this.httpClient.put(this.url+this.update,{CUST:m,CUSFX:l,CUSSFX:c,CUNAME:p,CUADD1:f,CUADD2:g,CUADD3:C,CUZIP:A,CUZSFX:b,CUPHAR:S,CUPHEX:h,CUPHNU:T,CUFXAR:v,CUFXEX:N,CUFXNU:x,CUCPER:y,CUSORT:D,CUSTPR:X,user:P}).pipe((0,U.X)(1),(0,q.K)(this.httpError))}CustomersConsolidate(m,l,c,p,f,g){return this.httpClient.put(this.url+this.consolidate,{customerNumber:m,suffix1:l,suffix2:c,refCustNumber:p,refCustsfx1:f,refCustsfx2:g}).pipe((0,U.X)(1),(0,q.K)(this.httpError))}AccountAttributes(m,l,c,p,f,g){return this.httpClient.get(this.url+`/Customers/read/accountAttribute?customer=${m}&user=${l}&suffix1=${c}&suffix2=${p}&recordsPerPage=${f}&pageNo=${g}`)}AgingInquiryRead(m,l,c,p,f,g,C,A,b,S,h,T,v,N,x,y,D){return this.httpClient.get(this.url+`/Customers/ARInquiry/read?user=${m}&customerNumber=${l}&suffix1=${c}&suffix2=${p}&agingDate=${f}&includeType1=${g}&includeType2=${C}&includeType3=${A}&includeType4=${b}&includeType5=${S}&omitType1=${h}&omitType2=${T}&omitType3=${v}&omitType4=${N}&omitType5=${x}&recordsPerPage=${y}&pageNo=${D}`)}AgingInquiryInq(m,l,c,p){return this.httpClient.get(this.url+`/Customers/ARInquiry/inquiry?user=${m}&invoice=${l}&recordsPerPage=${c}&pageNo=${p}`)}customerStatement(m,l,c,p){return this.httpClient.put(this.url+this.statement,{customerNumber:m,suffix1:l,suffix2:c,date:p}).pipe((0,U.X)(1),(0,q.K)(this.httpError))}httpError(m){let l="";return l=m.error instanceof ErrorEvent?m.error.message:`Error Code: ${m.status}\nMessage: ${m.message}`,console.log(l),(0,Z._)(()=>new Error(l))}}return _.\u0275fac=function(m){return new(m||_)(F.LFG(r.eN))},_.\u0275prov=F.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()}}]);