"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[6962],{96962:(ot,C,l)=>{l.r(C),l.d(C,{WwSupplytransactionsComponent:()=>nt});var S=l(65412),g=l(35226),d=l.n(g),f=l(70879),t=l(94650),T=l(95190),N=l(19132),i=l(24006),Z=l(97392),_=l(4859),c=l(59549),h=l(44144),m=l(73546);let A=(()=>{class e{constructor(a,r,n,s,u){this.SupplyTransactions=a,this.anyvariable=r,this.dialogRef=n,this.router=s,this.fb=u,this.user=localStorage.getItem("userName")}ngOnDestroy(){this.SupplyTransactionSubscription&&this.SupplyTransactionSubscription.unsubscribe()}ngOnInit(){this.form=this.fb.group({SNSTOR:this.anyvariable.SNSTOR,SNCONS:this.anyvariable.SNCONS,SNCARR:this.anyvariable.SNCARR,SNTYPE:this.anyvariable.SNTYPE,SNDOCT:this.anyvariable.SNDOCT,SNDOCN:this.anyvariable.SNDOCN,SNLOCN:this.anyvariable.SNLOCN,SNRQTY:this.anyvariable.SNRQTY,SNUQTY:this.anyvariable.SNUQTY,SNXQTY:this.anyvariable.SNXQTY,SNPOOL:this.anyvariable.SNPOOL,SNREAS:this.anyvariable.SNREAS,SNSPID:this.anyvariable.SNSPID,SNNUMB:this.anyvariable.SNNUMB,SNINVP:this.anyvariable.SNINVP,SNSTAT:this.anyvariable.SNSTAT})}updateSupplyTransactions(){var a=this.form.value;console.log(a),this.SupplyTransactionSubscription&&this.SupplyTransactionSubscription.unsubscribe(),this.SupplyTransactionSubscription=this.SupplyTransactions.updateSupplyTransactions(this.user,a.SNSTOR,a.SNCONS,a.SNCARR,a.SNTYPE,a.SNDOCT,a.SNDOCN,a.SNLOCN,a.SNRQTY,a.SNUQTY,a.SNXQTY,a.SNPOOL,a.SNREAS,a.SNSPID,a.SNNUMB,a.SNINVP,a.SNSTAT).subscribe(r=>{this.result=r,console.log(this.result);const s=JSON.parse(r[0].data[r[0].data.length-1].value).returnedData.message;"Record Updated Successfully"===s?(this.successMessage(s),this.closeDialog(),this.router.navigate(["/main-nav/ww-supplytransactions/read"])):this.failureMessage(s)})}successMessage(a){d().fire(a,"","success")}failureMessage(a){d().fire(a,"","error")}closeDialog(){this.dialogRef.close()}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(T.c),t.Y36(S.WI),t.Y36(S.so),t.Y36(N.F0),t.Y36(i.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ww-supplytransactions-change"]],standalone:!0,features:[t.jDz],decls:78,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],["appearance","outline",1,"full-width"],["matInput","","formControlName","SNSTOR",2,"text-transform","uppercase"],["matInput","","formControlName","SNCONS",2,"text-transform","uppercase"],["matInput","","formControlName","SNCARR",2,"text-transform","uppercase"],["matInput","","formControlName","SNTYPE",2,"text-transform","uppercase"],["matInput","","formControlName","SNDOCT",2,"text-transform","uppercase"],["matInput","","formControlName","SNDOCN",2,"text-transform","uppercase"],["matInput","","formControlName","SNLOCN",2,"text-transform","uppercase"],["matInput","","formControlName","SNRQTY",2,"text-transform","uppercase"],["matInput","","formControlName","SNXQTY",2,"text-transform","uppercase"],["matInput","","formControlName","SNUQTY",2,"text-transform","uppercase"],["matInput","","formControlName","SNPOOL",2,"text-transform","uppercase"],["matInput","","formControlName","SNINVP",2,"text-transform","uppercase"],["matInput","","formControlName","SNREAS",2,"text-transform","uppercase"],["matInput","","formControlName","SNSPID"],["matInput","","formControlName","SNNUMB",2,"text-transform","uppercase"],["matInput","","formControlName","SNSTAT",2,"text-transform","uppercase"],[1,"row"],[1,"col"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(a,r){1&a&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Maintain Supply Transaction "),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return r.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"mat-form-field",6)(11,"mat-label"),t._uU(12,"Storer Number"),t.qZA(),t._UZ(13,"input",7),t.qZA(),t.TgZ(14,"mat-form-field",6)(15,"mat-label"),t._uU(16,"Consignee Code"),t.qZA(),t._UZ(17,"input",8),t.qZA(),t.TgZ(18,"mat-form-field",6)(19,"mat-label"),t._uU(20,"Carrier Code"),t.qZA(),t._UZ(21,"input",9),t.qZA(),t.TgZ(22,"mat-form-field",6)(23,"mat-label"),t._uU(24,"Supply Type"),t.qZA(),t._UZ(25,"input",10),t.qZA(),t.TgZ(26,"mat-form-field",6)(27,"mat-label"),t._uU(28,"Document Type"),t.qZA(),t._UZ(29,"input",11),t.qZA(),t.TgZ(30,"mat-form-field",6)(31,"mat-label"),t._uU(32," Document No"),t.qZA(),t._UZ(33,"input",12),t.qZA(),t.TgZ(34,"mat-form-field",6)(35,"mat-label"),t._uU(36,"Location"),t.qZA(),t._UZ(37,"input",13),t.qZA(),t.TgZ(38,"mat-form-field",6)(39,"mat-label"),t._uU(40,"Returned"),t.qZA(),t._UZ(41,"input",14),t.qZA(),t.TgZ(42,"mat-form-field",6)(43,"mat-label"),t._uU(44,"Rejected"),t.qZA(),t._UZ(45,"input",15),t.qZA(),t.TgZ(46,"mat-form-field",6)(47,"mat-label"),t._uU(48,"Used"),t.qZA(),t._UZ(49,"input",16),t.qZA(),t.TgZ(50,"mat-form-field",6)(51,"mat-label"),t._uU(52,"Pool Affected"),t.qZA(),t._UZ(53,"input",17),t.qZA(),t.TgZ(54,"mat-form-field",6)(55,"mat-label"),t._uU(56,"Whose Invoice"),t.qZA(),t._UZ(57,"input",18),t.qZA(),t.TgZ(58,"mat-form-field",6)(59,"mat-label"),t._uU(60,"Reason Code"),t.qZA(),t._UZ(61,"input",19),t.qZA(),t.TgZ(62,"mat-form-field",6)(63,"mat-label"),t._uU(64,"Supply ID number"),t.qZA(),t._UZ(65,"input",20),t.qZA(),t.TgZ(66,"mat-form-field",6)(67,"mat-label"),t._uU(68,"Rate Number"),t.qZA(),t._UZ(69,"input",21),t.qZA(),t.TgZ(70,"mat-form-field",6)(71,"mat-label"),t._uU(72,"Status"),t.qZA(),t._UZ(73,"input",22),t.qZA(),t.TgZ(74,"div",23),t._UZ(75,"div",24),t.qZA(),t.TgZ(76,"button",25),t.NdJ("click",function(){return r.updateSupplyTransactions()}),t._uU(77,"Update"),t.qZA()()()()),2&a&&(t.xp6(9),t.Q6J("formGroup",r.form))},dependencies:[f.m,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,Z.Hw,_.lW,c.KE,c.hX,h.Nt,m.a8,m.dk,m.dn,m.n5]}),e})(),b=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ww-supplytransactions-comments"]],standalone:!0,features:[t.jDz],decls:0,vars:0,template:function(a,r){},dependencies:[f.m]}),e})(),U=(()=>{class e{constructor(a,r,n,s,u){this.data=a,this.dialogRef=r,this.router=n,this.fb=s,this.SupplyTransactionsService=u,this.user=localStorage.getItem("userName")}ngOnDestroy(){this.SupplyTransactionSubscription&&this.SupplyTransactionSubscription.unsubscribe()}ngOnInit(){console.log(this.data),this.form=this.fb.group({SNTRAN:this.data.SNTRAN,SNSTOR:this.data.SNSTOR,SNCONS:this.data.SNCONS,SNCARR:this.data.SNCARR,SNTYPE:this.data.SNTYPE,SNDOCT:this.data.SNDOCT,SNDOCN:this.data.SNDOCN,SNQTY:this.data.SNQTY,SNSPID:this.data.SNSPID,SNINV:this.data.SNINV,SNTDAT:this.data.SNTDAT,SNPOOL:this.data.SNPOOL,SNLOCN:this.data.SNLOCN,SNINVP:this.data.SNINVP,SNNUMB:this.data.SNNUMB,SNSTAT:this.data.SNSTAT})}DeleteSupplyTransaction(){this.SupplyTransactionSubscription&&this.SupplyTransactionSubscription.unsubscribe(),this.SupplyTransactionSubscription=this.SupplyTransactionsService.DeleteSupplytransaction(this.user).subscribe(r=>{const s=JSON.parse(r[0].data[r[0].data.length-1].value).returnedData.message;"Record Deleted Successfully"===s?(this.successMessage(s),this.closeDialog(),this.router.navigate(["/main-nav/supply-transactions/read"])):this.failureMessage(s)})}successMessage(a){d().fire(a,"","success")}failureMessage(a){d().fire(a,"","error")}closeDialog(){this.dialogRef.close()}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(S.WI),t.Y36(S.so),t.Y36(N.F0),t.Y36(i.qu),t.Y36(T.c))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ww-supplytransactions-delete"]],standalone:!0,features:[t.jDz],decls:78,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],["appearance","outline",1,"full-width"],["matInput","","formControlName","SNTRAN"],["matInput","","formControlName","SNSTOR"],["matInput","","formControlName","SNCONS",2,"text-transform","uppercase"],["matInput","","formControlName","SNCARR",2,"text-transform","uppercase"],["matInput","","formControlName","SNTYPE",2,"text-transform","uppercase"],["matInput","","formControlName","SNDOCT",2,"text-transform","uppercase"],["matInput","","formControlName","SNDOCN",2,"text-transform","uppercase"],["matInput","","formControlName","SNQTY",2,"text-transform","uppercase"],["matInput","","formControlName","SNSPID"],["matInput","","formControlName","SNINV",2,"text-transform","uppercase"],["matInput","","formControlName","SNTDAT"],["matInput","","formControlName","SNPOOL",2,"text-transform","uppercase"],["appearance","outline"],["matInput","","formControlName","SNLOCN",2,"text-transform","uppercase"],["matInput","","formControlName","SNINVP",2,"text-transform","uppercase"],["matInput","","formControlName","SNNUMB",2,"text-transform","uppercase"],["matInput","","formControlName","SNSTAT",2,"text-transform","uppercase"],[1,"row"],[1,"col"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(a,r){1&a&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Delete Supply Transaction "),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return r.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"mat-form-field",6)(11,"mat-label"),t._uU(12,"Transaction Number"),t.qZA(),t._UZ(13,"input",7),t.qZA(),t.TgZ(14,"mat-form-field",6)(15,"mat-label"),t._uU(16,"Storer Number"),t.qZA(),t._UZ(17,"input",8),t.qZA(),t.TgZ(18,"mat-form-field",6)(19,"mat-label"),t._uU(20,"Consignee Code"),t.qZA(),t._UZ(21,"input",9),t.qZA(),t.TgZ(22,"mat-form-field",6)(23,"mat-label"),t._uU(24,"Carrier Code"),t.qZA(),t._UZ(25,"input",10),t.qZA(),t.TgZ(26,"mat-form-field",6)(27,"mat-label"),t._uU(28,"Supply Type"),t.qZA(),t._UZ(29,"input",11),t.qZA(),t.TgZ(30,"mat-form-field",6)(31,"mat-label"),t._uU(32,"Document Type"),t.qZA(),t._UZ(33,"input",12),t.qZA(),t.TgZ(34,"mat-form-field",6)(35,"mat-label"),t._uU(36," Document Number"),t.qZA(),t._UZ(37,"input",13),t.qZA(),t.TgZ(38,"mat-form-field",6)(39,"mat-label"),t._uU(40,"Transaction Quantity"),t.qZA(),t._UZ(41,"input",14),t.qZA(),t.TgZ(42,"mat-form-field",6)(43,"mat-label"),t._uU(44,"Supply ID number"),t.qZA(),t._UZ(45,"input",15),t.qZA(),t.TgZ(46,"mat-form-field",6)(47,"mat-label"),t._uU(48," Invoice number"),t.qZA(),t._UZ(49,"input",16),t.qZA(),t.TgZ(50,"mat-form-field",6)(51,"mat-label"),t._uU(52," Transaction Date"),t.qZA(),t._UZ(53,"input",17),t.qZA(),t.TgZ(54,"mat-form-field",6)(55,"mat-label"),t._uU(56,"Pool Affected"),t.qZA(),t._UZ(57,"input",18),t.qZA(),t.TgZ(58,"mat-form-field",19)(59,"mat-label"),t._uU(60,"Location"),t.qZA(),t._UZ(61,"input",20),t.qZA(),t.TgZ(62,"mat-form-field",6)(63,"mat-label"),t._uU(64," Invoice party"),t.qZA(),t._UZ(65,"input",21),t.qZA(),t.TgZ(66,"mat-form-field",6)(67,"mat-label"),t._uU(68,"Rate Number"),t.qZA(),t._UZ(69,"input",22),t.qZA(),t.TgZ(70,"mat-form-field",6)(71,"mat-label"),t._uU(72,"Status"),t.qZA(),t._UZ(73,"input",23),t.qZA(),t.TgZ(74,"div",24),t._UZ(75,"div",25),t.qZA(),t.TgZ(76,"button",26),t.NdJ("click",function(){return r.DeleteSupplyTransaction()}),t._uU(77,"Delete"),t.qZA()()()()),2&a&&(t.xp6(9),t.Q6J("formGroup",r.form))},dependencies:[f.m,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,Z.Hw,_.lW,c.KE,c.hX,h.Nt,m.a8,m.dk,m.dn,m.n5]}),e})(),q=(()=>{class e{constructor(a,r,n,s,u){this.SupplyTransactions=a,this.anyvariable=r,this.dialogRef=n,this.router=s,this.fb=u,this.user=localStorage.getItem("userName")}ngOnInit(){this.form=this.fb.group({SNSTOR:this.anyvariable.SNSTOR,SNCONS:this.anyvariable.SNCONS,SNCARR:this.anyvariable.SNCARR,SNTYPE:this.anyvariable.SNTYPE,SNDOCT:this.anyvariable.SNDOCT,SNDOCN:this.anyvariable.SNDOCN,SNLOCN:this.anyvariable.SNLOCN,SNRQTY:this.anyvariable.SNRQTY,SNUQTY:this.anyvariable.SNUQTY,SNXQTY:this.anyvariable.SNXQTY,SNPOOL:this.anyvariable.SNPOOL,SNREAS:this.anyvariable.SNREAS,SNSPID:this.anyvariable.SNSPID,SNNUMB:this.anyvariable.SNNUMB,SNINVP:this.anyvariable.SNINVP,SNSTAT:this.anyvariable.SNSTAT})}getSupplyTransactionData(){this.SupplyTransactions.getSupplyTransactionsInquiry(this.user,this.anyvariable.SNSTOR,this.anyvariable.SNSSFX,this.anyvariable.SNTRAN).subscribe(a=>{this.result=a;const r=this.result[0].data[1]?.value,n=JSON.parse(r);this.form.patchValue({SNSTOR:n.SNSTOR,SNCONS:n.SNCONS,SNCARR:n.SNCARR,SNTYPE:n.SNTYPE,SNDOCT:n.SNDOCT,SNDOCN:n.SNDOCN,SNLOCN:n.SNLOCN,SNRQTY:n.SNRQTY,SNUQTY:n.SNUQTY,SNXQTY:n.SNXQTY,SNPOOL:n.SNPOOL,SNREAS:n.SNREAS,SNSPID:n.SNSPID,SNNUMB:n.SNNUMB,SNINVP:n.SNINVP,SNSTAT:n.SNSTAT})})}closeDialog(){this.dialogRef.close()}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(T.c),t.Y36(S.WI),t.Y36(S.so),t.Y36(N.F0),t.Y36(i.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ww-supplytransactions-inquiry"]],standalone:!0,features:[t.jDz],decls:76,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","SNSTOR",2,"text-transform","uppercase"],["matInput","","formControlName","SNCONS",2,"text-transform","uppercase"],["matInput","","formControlName","SNCARR",2,"text-transform","uppercase"],["matInput","","formControlName","SNTYPE",2,"text-transform","uppercase"],["matInput","","formControlName","SNDOCT",2,"text-transform","uppercase"],["matInput","","formControlName","SNDOCN",2,"text-transform","uppercase"],["matInput","","formControlName","SNLOCN",2,"text-transform","uppercase"],["matInput","","formControlName","SNRQTY",2,"text-transform","uppercase"],["matInput","","formControlName","SNXQTY",2,"text-transform","uppercase"],["matInput","","formControlName","SNUQTY",2,"text-transform","uppercase"],["matInput","","formControlName","SNPOOL",2,"text-transform","uppercase"],["matInput","","formControlName","SNREAS",2,"text-transform","uppercase"],["matInput","","formControlName","SNSPID",2,"text-transform","uppercase"],["matInput","","formControlName","SNNUMB",2,"text-transform","uppercase"],["matInput","","formControlName","SNINVP",2,"text-transform","uppercase"],["matInput","","formControlName","SNSTAT",2,"text-transform","uppercase"]],template:function(a,r){1&a&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4," Supply Transaction Inquiry"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return r.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"Storer Number"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18,"Consignee Code "),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",8)(21,"mat-label"),t._uU(22,"Carrier Code"),t.qZA(),t._UZ(23,"input",11),t.qZA(),t.TgZ(24,"mat-form-field",8)(25,"mat-label"),t._uU(26,"Supply Type "),t.qZA(),t._UZ(27,"input",12),t.qZA(),t.TgZ(28,"mat-form-field",8)(29,"mat-label"),t._uU(30,"Document Type"),t.qZA(),t._UZ(31,"input",13),t.qZA(),t.TgZ(32,"mat-form-field",8)(33,"mat-label"),t._uU(34,"Document No"),t.qZA(),t._UZ(35,"input",14),t.qZA(),t.TgZ(36,"mat-form-field",8)(37,"mat-label"),t._uU(38,"Location"),t.qZA(),t._UZ(39,"input",15),t.qZA(),t.TgZ(40,"mat-form-field",8)(41,"mat-label"),t._uU(42,"Returned"),t.qZA(),t._UZ(43,"input",16),t.qZA(),t.TgZ(44,"mat-form-field",8)(45,"mat-label"),t._uU(46,"Rejected"),t.qZA(),t._UZ(47,"input",17),t.qZA(),t.TgZ(48,"mat-form-field",8)(49,"mat-label"),t._uU(50,"Used"),t.qZA(),t._UZ(51,"input",18),t.qZA(),t.TgZ(52,"mat-form-field",8)(53,"mat-label"),t._uU(54,"Pool Affected"),t.qZA(),t._UZ(55,"input",19),t.qZA(),t.TgZ(56,"mat-form-field",8)(57,"mat-label"),t._uU(58,"Reason Code"),t.qZA(),t._UZ(59,"input",20),t.qZA(),t.TgZ(60,"mat-form-field",8)(61,"mat-label"),t._uU(62,"Supply ID number"),t.qZA(),t._UZ(63,"input",21),t.qZA(),t.TgZ(64,"mat-form-field",8)(65,"mat-label"),t._uU(66,"Rate Number"),t.qZA(),t._UZ(67,"input",22),t.qZA(),t.TgZ(68,"mat-form-field",8)(69,"mat-label"),t._uU(70,"Whose Invoice"),t.qZA(),t._UZ(71,"input",23),t.qZA(),t.TgZ(72,"mat-form-field",8)(73,"mat-label"),t._uU(74,"Status"),t.qZA(),t._UZ(75,"input",24),t.qZA()()()()()()),2&a&&(t.xp6(9),t.Q6J("formGroup",r.form))},dependencies:[f.m,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,Z.Hw,_.lW,c.KE,c.hX,h.Nt,m.a8,m.dk,m.dn,m.n5]}),e})();var D=l(19344),p=l(7155),y=l(98739),O=l(36895),x=l(10266);function v(e,o){if(1&e){const a=t.EpF();t.TgZ(0,"button",26),t.NdJ("click",function(){t.CHM(a);const n=t.oxw();return t.KtG(n.searchSupplytransactions())}),t.TgZ(1,"mat-icon"),t._uU(2,"clear"),t.qZA()()}}function w(e,o){if(1&e){const a=t.EpF();t.TgZ(0,"button",27),t.NdJ("click",function(){t.CHM(a);const n=t.oxw();return t.KtG(n.searchSupplytransactions())}),t.TgZ(1,"mat-icon"),t._uU(2,"search"),t.qZA()()}}function I(e,o){if(1&e){const a=t.EpF();t.TgZ(0,"form",28),t.NdJ("ngSubmit",function(){t.CHM(a);const n=t.oxw();return t.KtG(n.getSupplyBySearch(n.form.value))}),t.TgZ(1,"div",29)(2,"div",30)(3,"mat-form-field",31)(4,"mat-label"),t._uU(5,"Storer"),t.qZA(),t._UZ(6,"input",32),t.qZA(),t.TgZ(7,"mat-form-field",31)(8,"mat-label"),t._uU(9,"Consignee"),t.qZA(),t._UZ(10,"input",33),t.qZA(),t.TgZ(11,"mat-form-field",31)(12,"mat-label"),t._uU(13,"Carrier"),t.qZA(),t._UZ(14,"input",34),t.qZA(),t.TgZ(15,"mat-form-field",31)(16,"mat-label"),t._uU(17,"Document Type"),t.qZA(),t._UZ(18,"input",35),t.qZA(),t.TgZ(19,"mat-form-field",31)(20,"mat-label"),t._uU(21,"Document No"),t.qZA(),t._UZ(22,"input",36),t.qZA(),t.TgZ(23,"mat-form-field",31)(24,"mat-label"),t._uU(25,"Type"),t.qZA(),t._UZ(26,"input",37),t.qZA(),t.TgZ(27,"mat-form-field",31)(28,"mat-label"),t._uU(29,"Date"),t.qZA(),t._UZ(30,"input",38),t.qZA(),t.TgZ(31,"mat-form-field",31)(32,"mat-label"),t._uU(33," End Date"),t.qZA(),t._UZ(34,"input",39),t.qZA(),t.TgZ(35,"mat-form-field",31)(36,"mat-label"),t._uU(37,"Pool"),t.qZA(),t._UZ(38,"input",40),t.qZA(),t.TgZ(39,"mat-form-field",31)(40,"mat-label"),t._uU(41,"Invoice"),t.qZA(),t._UZ(42,"input",41),t.qZA()()(),t.TgZ(43,"button",42),t._uU(44," Search "),t.qZA()()}if(2&e){const a=t.oxw();t.Q6J("formGroup",a.form)}}function R(e,o){1&e&&(t.TgZ(0,"th",43),t._uU(1,"Storer"),t.qZA())}function Y(e,o){if(1&e&&(t.TgZ(0,"td",44),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.Oqu(a.SNSTOR)}}function W(e,o){1&e&&(t.TgZ(0,"th",43),t._uU(1,"Consignee"),t.qZA())}function P(e,o){if(1&e&&(t.TgZ(0,"td",44),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.Oqu(a.SNCONS)}}function Q(e,o){1&e&&(t.TgZ(0,"th",43),t._uU(1,"Carrier"),t.qZA())}function E(e,o){if(1&e&&(t.TgZ(0,"td",44),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.Oqu(a.SNCARR)}}function J(e,o){1&e&&(t.TgZ(0,"th",43),t._uU(1,"Pool"),t.qZA())}function k(e,o){if(1&e&&(t.TgZ(0,"td",44),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.Oqu(a.SNPOOL)}}function F(e,o){1&e&&(t.TgZ(0,"th",43),t._uU(1,"Transaction Pool"),t.qZA())}function B(e,o){if(1&e&&(t.TgZ(0,"td",44),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.Oqu(a.SNDOCT)}}function L(e,o){1&e&&(t.TgZ(0,"th",43),t._uU(1,"Supply"),t.qZA())}function M(e,o){if(1&e&&(t.TgZ(0,"td",44),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.Oqu(a.SNTYPE)}}function H(e,o){1&e&&(t.TgZ(0,"th",43),t._uU(1,"Net Quantity"),t.qZA())}function X(e,o){if(1&e&&(t.TgZ(0,"td",44),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.Oqu(a.SNQTY)}}function G(e,o){1&e&&(t.TgZ(0,"th",43),t._uU(1,"Date"),t.qZA())}function V(e,o){if(1&e&&(t.TgZ(0,"td",44),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.Oqu(a.TDATE)}}function $(e,o){1&e&&(t.TgZ(0,"th",43),t._uU(1,"Status"),t.qZA())}function j(e,o){if(1&e&&(t.TgZ(0,"td",44),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.Oqu(a.SNSTAT)}}function K(e,o){1&e&&t._UZ(0,"th",45)}function z(e,o){if(1&e){const a=t.EpF();t.TgZ(0,"td",44)(1,"div",46)(2,"button",47)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"ul",48)(6,"li")(7,"button",49),t.NdJ("click",function(){const s=t.CHM(a).$implicit,u=t.oxw();return t.KtG(u.getUpdateForm(s))}),t.TgZ(8,"mat-icon",50),t._uU(9,"edit"),t.qZA(),t.TgZ(10,"mat-label"),t._uU(11,"Change"),t.qZA()()(),t.TgZ(12,"li")(13,"button",49),t.NdJ("click",function(){const s=t.CHM(a).$implicit,u=t.oxw();return t.KtG(u.SupplytransactionsCommentsForm(s))}),t.TgZ(14,"mat-icon",50),t._uU(15,"comments"),t.qZA(),t.TgZ(16,"mat-label"),t._uU(17,"Comments"),t.qZA()()(),t.TgZ(18,"li")(19,"button",49),t.NdJ("click",function(){const s=t.CHM(a).$implicit,u=t.oxw();return t.KtG(u.SupplytransactionsDeleteForm(s))}),t.TgZ(20,"mat-icon",51),t._uU(21,"delete"),t.qZA(),t.TgZ(22,"mat-label"),t._uU(23,"Delete"),t.qZA()()(),t.TgZ(24,"li")(25,"button",49),t.NdJ("click",function(){const s=t.CHM(a).$implicit,u=t.oxw();return t.KtG(u.SupplytransactionsInquiryForm(s))}),t.TgZ(26,"mat-icon",50),t._uU(27,"call_made"),t.qZA(),t.TgZ(28,"mat-label"),t._uU(29,"Inquiry"),t.qZA()()()()()()}}function tt(e,o){1&e&&t._UZ(0,"tr",52)}function at(e,o){1&e&&t._UZ(0,"tr",53)}const et=function(){return[8,16,24]};let nt=(()=>{class e{constructor(a,r,n,s,u){this.fb=a,this.router=r,this.route=n,this.SupplyTransactionsService=s,this.matDialog=u,this.displayedColumns=["Storer","Consignee","Carrier","Pool","Transaction Pool","Supply","Net Quantity","Date","Status","Actions"],this.form=this.fb.group({STOR:"",CONS:"",CARR:"",DOCT:"",DOCN:"",TYPE:"",SDATE:"",EDATE:"",POOL:"",INV:""}),this.searchTextDisplay=!1,this.duplicateSource=[],this.user=localStorage.getItem("userName")||""}ngOnInit(){this.editedRows=[],this.getSupplyTransactions()}searchSupplyTransactions(){this.searchTextDisplay=1!=this.searchTextDisplay}getSupplyTransactions(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.SupplyTransactionsService.getSupplyTransactions(this.user,"","","","","","","","","","").subscribe(a=>{var n=JSON.parse(a[0].data[1].value);this.duplicateSource=n.returnedData,this.dataSource=new p.by(this.duplicateSource),this.dataSource.paginator=this.paginator})}getSupplyBySearch(a){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),console.log("SEARCH"),this.getAll2Subscription=this.SupplyTransactionsService.getSupplyTransactions(this.user,a.STOR,a.CONS,a.CARR,a.DOCT,a.DOCN,a.TYPE,a.SDATE,a.EDATE,a.POOL,a.INV).subscribe(n=>{var u=JSON.parse(n[0].data[1].value);this.duplicateSource=u.returnedData,this.dataSource=new p.by(this.duplicateSource),this.dataSource.paginator=this.paginator})}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}getUpdateForm(a){this.matDialog.open(A,{width:"1000px",height:"auto",maxHeight:"95vh",data:a,autoFocus:!1})}SupplytransactionsCommentsForm(a){this.matDialog.open(b,{width:"1000px",height:"auto",maxHeight:"95vh",data:a,autoFocus:!1})}SupplytransactionsDeleteForm(a){this.matDialog.open(U,{width:"1000px",height:"auto",maxHeight:"95vh",data:a,autoFocus:!1})}SupplytransactionsInquiryForm(a){this.matDialog.open(q,{width:"1000px",height:"auto",maxHeight:"95vh",data:a,autoFocus:!1})}addSupplytransactions(){this.matDialog.open(D.WwSupplytransactionsAddComponent,{width:"1000px",height:"auto",maxHeight:"95vh",autoFocus:!1})}searchSupplytransactions(){this.searchTextDisplay=1!=this.searchTextDisplay}onBack(){this.router.navigate(["/main-nav/tallys/read"])}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(i.qu),t.Y36(N.F0),t.Y36(N.gz),t.Y36(T.c),t.Y36(S.uw))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ww-supplytransactions"]],viewQuery:function(a,r){if(1&a&&t.Gf(y.NW,5),2&a){let n;t.iGM(n=t.CRH())&&(r.paginator=n.first)}},standalone:!0,features:[t.jDz],decls:47,vars:8,consts:[[1,"over-Flow"],[1,"title"],[1,"buttons"],["mat-button","","class","addButton",3,"click",4,"ngIf"],["mat-button","","class","addButton","matTooltip","Search Supply Transactions",3,"click",4,"ngIf"],["mat-button","","matTooltip","Add New Supplytransactions",1,"addButton",3,"click"],[1,"tally-serach-form"],[3,"formGroup","ngSubmit",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","Storer"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Consignee"],["matColumnDef","Carrier"],["matColumnDef","Pool"],["matColumnDef","Transaction Pool"],["matColumnDef","Supply"],["matColumnDef","Net Quantity"],["matColumnDef","Date"],["matColumnDef","Status"],["matColumnDef","Actions"],["mat-header-cell","","class","pending_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-button","",1,"addButton",3,"click"],["mat-button","","matTooltip","Search Supply Transactions",1,"addButton",3,"click"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","STOR"],["matInput","","formControlName","CONS",2,"text-transform","uppercase"],["matInput","","formControlName","CARR",2,"text-transform","uppercase"],["matInput","","formControlName","DOCT",2,"text-transform","uppercase"],["matInput","","formControlName","DOCN",2,"text-transform","uppercase"],["matInput","","formControlName","TYPE",2,"text-transform","uppercase"],["matInput","","formControlName","SDATE",2,"text-transform","uppercase"],["matInput","","formControlName","EDATE",2,"text-transform","uppercase"],["matInput","","formControlName","POOL",2,"text-transform","uppercase"],["matInput","","formControlName","INV",2,"text-transform","uppercase"],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"pending_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],["mat-icon-button","","color","warn"],["mat-header-row",""],["mat-row",""]],template:function(a,r){1&a&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3,"Work With Supply Transactions "),t.qZA(),t.TgZ(4,"div",2),t.YNc(5,v,3,0,"button",3),t.YNc(6,w,3,0,"button",4),t.TgZ(7,"button",5),t.NdJ("click",function(){return r.addSupplytransactions()}),t.TgZ(8,"mat-icon"),t._uU(9,"add"),t.qZA()()()(),t.TgZ(10,"mat-card-content",6),t.YNc(11,I,45,1,"form",7),t.qZA(),t.TgZ(12,"table",8),t.ynx(13,9),t.YNc(14,R,2,0,"th",10),t.YNc(15,Y,2,1,"td",11),t.BQk(),t.ynx(16,12),t.YNc(17,W,2,0,"th",10),t.YNc(18,P,2,1,"td",11),t.BQk(),t.ynx(19,13),t.YNc(20,Q,2,0,"th",10),t.YNc(21,E,2,1,"td",11),t.BQk(),t.ynx(22,14),t.YNc(23,J,2,0,"th",10),t.YNc(24,k,2,1,"td",11),t.BQk(),t.ynx(25,15),t.YNc(26,F,2,0,"th",10),t.YNc(27,B,2,1,"td",11),t.BQk(),t.ynx(28,16),t.YNc(29,L,2,0,"th",10),t.YNc(30,M,2,1,"td",11),t.BQk(),t.ynx(31,17),t.YNc(32,H,2,0,"th",10),t.YNc(33,X,2,1,"td",11),t.BQk(),t.ynx(34,18),t.YNc(35,G,2,0,"th",10),t.YNc(36,V,2,1,"td",11),t.BQk(),t.ynx(37,19),t.YNc(38,$,2,0,"th",10),t.YNc(39,j,2,1,"td",11),t.BQk(),t.ynx(40,20),t.YNc(41,K,1,0,"th",21),t.YNc(42,z,30,0,"td",11),t.BQk(),t.YNc(43,tt,1,0,"tr",22),t.YNc(44,at,1,0,"tr",23),t.qZA(),t._UZ(45,"mat-paginator",24,25),t.qZA()),2&a&&(t.xp6(5),t.Q6J("ngIf",r.searchTextDisplay),t.xp6(1),t.Q6J("ngIf",!r.searchTextDisplay),t.xp6(5),t.Q6J("ngIf",r.searchTextDisplay),t.xp6(1),t.Q6J("dataSource",r.dataSource),t.xp6(31),t.Q6J("matHeaderRowDef",r.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",r.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(7,et)))},dependencies:[f.m,O.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,y.NW,Z.Hw,_.lW,c.KE,c.hX,h.Nt,m.a8,m.dk,m.dn,m.n5,p.BZ,p.fO,p.as,p.w1,p.Dz,p.nj,p.ge,p.ev,p.XQ,p.Gk,x.gM]}),e})()}}]);