"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[1476,1790,8754,5645,2313],{11790:(R,b,l)=>{l.d(b,{y:()=>t});var T=l(65412),n=l(94650),I=l(97392),f=l(4859);let _=(()=>{class m{constructor(d,A){this.dialogRef=d,this.data=A}ngOnInit(){}closeDialog(){this.dialogRef.close(!1)}}return m.\u0275fac=function(d){return new(d||m)(n.Y36(T.so),n.Y36(T.WI))},m.\u0275cmp=n.Xpm({type:m,selectors:[["app-alert-dialog"]],decls:10,vars:3,consts:[[1,"confirm-dialog-container"],[1,"content-container"],["id","close-icon",3,"click"],[1,"content-span","full-width"],["mat-flat-button","","id","no-button",3,"mat-dialog-close"],["mat-flat-button","","id","yes-button",3,"mat-dialog-close"]],template:function(d,A){1&d&&(n.TgZ(0,"div",0)(1,"div",1)(2,"mat-icon",2),n.NdJ("click",function(){return A.closeDialog()}),n._uU(3,"close "),n.qZA(),n.TgZ(4,"span",3),n._uU(5),n.qZA()(),n.TgZ(6,"button",4),n._uU(7,"Cancel"),n.qZA(),n.TgZ(8,"button",5),n._uU(9,"Delete"),n.qZA()()),2&d&&(n.xp6(5),n.Oqu(A.data.message),n.xp6(1),n.Q6J("mat-dialog-close",!1),n.xp6(2),n.Q6J("mat-dialog-close",!0))},dependencies:[I.Hw,f.lW,T.ZT]}),m})(),t=(()=>{class m{constructor(d){this.dialog=d}openCustomAlert(d){return this.dialog.open(_,{width:"450px",panelClass:"confirm-dialog-container",disableClose:!0,data:{message:d}})}}return m.\u0275fac=function(d){return new(d||m)(n.LFG(T.uw))},m.\u0275prov=n.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},51476:(R,b,l)=>{l.r(b),l.d(b,{WwTriggersComponent:()=>Ct});var T=l(98739),n=l(7155),I=l(35226),f=l.n(I),_=l(70879),t=l(94650),m=l(19132),s=l(24006),d=l(80529),A=l(75625),N=l(70262),Y=l(62843),J=l(92340);let F=(()=>{class o{constructor(e){this.httpClient=e,this.url=J.N.API_BASE_URL1,this.httpHeader={headers:new d.WM({"Content-Type":"application/json"})}}getTriggers(){return this.httpClient.get(this.url+"/Triggers/read")}getAll(e){return this.httpClient.get(this.url+`/Triggers/readAll?user=${e}`)}createTriggers(e,r,a,u,c,Z,v,w,x,W,B){return this.httpClient.post(this.url+"/Triggers/create",{FASTOR:e,FASSFX:r,FASREF:a,FAWBIL:u,FABILL:c,GDAT:Z,FAGTIM:v,PDAT:w,FASTAT:x,FAPTIM:W,user:B}).pipe((0,A.X)(1),(0,N.K)(this.httpError))}updateTriggers(e,r,a,u,c,Z,v,w,x,W,B){return this.httpClient.put(this.url+"/Triggers/update",{FASTOR:e,FASSFX:r,FASREF:a,FAWBIL:u,FABILL:c,GDAT:Z,FAGTIM:v,PDAT:w,FASTAT:x,FAPTIM:W,user:B}).pipe((0,A.X)(1),(0,N.K)(this.httpError))}deleteTriggers(e,r){return console.log(r),this.httpClient.delete(this.url+"/Triggers/delete?user=${user}&FAWBIL=${FAWBIL}")}httpError(e){let r="";return r=e.error instanceof ErrorEvent?e.error.message:`Error Code: ${e.status}\nMessage: ${e.message}`,console.log(r),(0,Y._)(()=>new Error(r))}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(d.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var C=l(65412),S=l(97392),U=l(4859),p=l(59549),q=l(44144),y=l(84385),D=l(3238),h=l(99602),g=l(73546);let L=(()=>{class o{constructor(e,r,a,u,c){this.router=e,this.fb=r,this.route=a,this.TriggersSvc=u,this.dialogRef=c,this.user=localStorage.getItem("userName")}ngOnInit(){this.form=this.fb.group({FASTOR:"",FASSFX:"",FASREF:"",FAWBIL:"",FABILL:"",GDAT:"",FAGTIM:"",PDAT:"",FAPTIM:"",FASTAT:""})}createTriggers(){var e=this.form.value;console.log(e),this.TriggersSvc.createTriggers(e.FASTOR,e.FASSFX,e.FASREF,e.FAWBIL,e.FABILL,e.GDAT,e.FAGTIM,e.PDAT,e.FASTAT,e.FAPTIM,this.user).subscribe(r=>{if(this.result=r,console.log(this.result),JSON.parse(this.result.success))this.successMessage(" created successfully"),this.closeDialog(),this.router.navigate(["/main-nav/triggers/read"]);else{const a=JSON.parse(this.result[0].data[1].value).returnedData.message;this.failureMessage(a)}})}successMessage(e){f().fire(e,"","success")}failureMessage(e){f().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.F0),t.Y36(s.qu),t.Y36(m.gz),t.Y36(F),t.Y36(C.so))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-trigger"]],standalone:!0,features:[t.jDz],decls:77,vars:5,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[3,"formGroup"],[1,"row"],[1,"col"],[1,"form-group1"],["for","inputField",1,"form-heading"],[1,"form-input"],["appearance","outline",1,"full-width"],["matInput","","formControlName","FASTOR"],["matInput","","formControlName","FASSFX"],["appearance","outline",1,"full-width2"],["matInput","","formControlName","FASREF"],["matInput","","formControlName","FAWBIL"],["matInput","","formControlName","FABILL"],["matInput","","formControlName","GDAT",3,"matDatepicker"],["matSuffix","",3,"for"],["DatePicker",""],["matInput","","type","time","formControlName","FAGTIM"],["matInput","","formControlName","PDAT",3,"matDatepicker"],["matInput","","type","time","formControlName","FAPTIM"],["appearance","outline"],["formControlName","FASTAT"],["value",""],["value","AC"],["value","PR"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(e,r){if(1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4," Maintain 997 Triggers"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return r.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"div",8)(13,"label",9),t._uU(14,"Storer"),t.qZA(),t.TgZ(15,"div",10)(16,"mat-form-field",11)(17,"mat-label"),t._uU(18,"Storer"),t.qZA(),t._UZ(19,"input",12),t.qZA(),t.TgZ(20,"mat-form-field",11)(21,"mat-label"),t._uU(22,"Suffix "),t.qZA(),t._UZ(23,"input",13),t.qZA()()(),t._UZ(24,"br"),t.TgZ(25,"mat-form-field",14)(26,"mat-label"),t._uU(27,"Storer Reference "),t.qZA(),t._UZ(28,"input",15),t.qZA(),t.TgZ(29,"mat-form-field",11)(30,"mat-label"),t._uU(31," Working Bill "),t.qZA(),t._UZ(32,"input",16),t.qZA(),t.TgZ(33,"mat-form-field",11)(34,"mat-label"),t._uU(35,"Bill Number "),t.qZA(),t._UZ(36,"input",17),t.qZA(),t.TgZ(37,"div",8)(38,"label",9),t._uU(39,"Generated"),t.qZA(),t.TgZ(40,"div",10)(41,"mat-form-field",11)(42,"mat-label"),t._uU(43," Date"),t.qZA(),t._UZ(44,"input",18)(45,"mat-datepicker-toggle",19)(46,"mat-datepicker",null,20),t.qZA(),t.TgZ(48,"mat-form-field",11)(49,"mat-label"),t._uU(50," Time"),t.qZA(),t._UZ(51,"input",21),t.qZA()()(),t.TgZ(52,"div",8)(53,"label",9),t._uU(54,"Processed"),t.qZA(),t.TgZ(55,"div",10)(56,"mat-form-field",11),t._UZ(57,"input",22)(58,"mat-datepicker-toggle",19)(59,"mat-datepicker",null,20),t.qZA(),t.TgZ(61,"mat-form-field",11)(62,"mat-label"),t._uU(63," Time"),t.qZA(),t._UZ(64,"input",23),t.qZA()()(),t.TgZ(65,"mat-form-field",24)(66,"mat-label"),t._uU(67,"Status"),t.qZA(),t.TgZ(68,"mat-select",25)(69,"mat-option",26),t._uU(70,"--select--"),t.qZA(),t.TgZ(71,"mat-option",27),t._uU(72,"AC = Active"),t.qZA(),t.TgZ(73,"mat-option",28),t._uU(74,"PR = Processed"),t.qZA()()()()(),t.TgZ(75,"button",29),t.NdJ("click",function(){return r.createTriggers()}),t._uU(76," Add "),t.qZA()()()()),2&e){const a=t.MAs(47);t.xp6(9),t.Q6J("formGroup",r.form),t.xp6(35),t.Q6J("matDatepicker",a),t.xp6(1),t.Q6J("for",a),t.xp6(12),t.Q6J("matDatepicker",a),t.xp6(1),t.Q6J("for",a)}},dependencies:[_.m,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,S.Hw,U.lW,p.KE,p.hX,p.R9,q.Nt,y.gD,D.ey,h.Mq,h.hl,h.nW,g.a8,g.dk,g.dn,g.n5]}),o})(),G=(()=>{class o{constructor(e,r,a,u,c,Z){this.router=e,this.fb=r,this.route=a,this.anyvariable=u,this.TriggersSvc=c,this.dialogRef=Z,this.user=localStorage.getItem("userName")}ngOnInit(){this.form=this.fb.group({FASTOR:this.anyvariable.FASTOR,FASSFX:"",FASREF:this.anyvariable.FASREF,FAWBIL:this.anyvariable.FAWBIL,FABILL:this.anyvariable.FABILL,GDAT:this.anyvariable.FAGDAT,FAGTIM:this.anyvariable.FAGTIM,PDAT:this.anyvariable.FAPDAT,FAPTIM:this.anyvariable.FAPTIM,FASTAT:this.anyvariable.FASTAT})}updateTriggers(){var e=this.form.value;console.log(e),this.TriggersSvc.updateTriggers(e.FASTOR,e.FASSFX,e.FASREF,e.FAWBIL,e.FABILL,e.GDAT,e.FAGTIM,e.PDAT,e.FASTAT,e.FAPTIM,this.user).subscribe(r=>{this.result=r;var a=this.result.acknowledgement;JSON.parse(this.result.success)?(this.successMessage(a),this.closeDialog(),this.router.navigate(["/main-nav/triggers/read"])):this.failureMessage(a)})}successMessage(e){f().fire(e,"","success")}failureMessage(e){f().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.F0),t.Y36(s.qu),t.Y36(m.gz),t.Y36(C.WI),t.Y36(F),t.Y36(C.so))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-edit-trigger"]],standalone:!0,features:[t.jDz],decls:78,vars:5,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[3,"formGroup"],[1,"row"],[1,"col"],[1,"form-group1"],["for","inputField",1,"form-heading"],[1,"form-input"],["appearance","outline",1,"full-width"],["readonly","","matInput","","formControlName","FASTOR"],["readonly","","matInput","","formControlName","FASSFX"],["readonly","","matInput","","formControlName","FASREF"],["readonly","","matInput","","formControlName","FAWBIL"],["readonly","","matInput","","formControlName","FABILL"],["matInput","","formControlName","GDAT",3,"matDatepicker"],["matSuffix","",3,"for"],["DatePicker",""],["matInput","","type","time","formControlName","FAGTIM"],["matInput","","formControlName","PDAT",3,"matDatepicker"],["matInput","","type","time","formControlName","FAPTIM"],["appearance","outline"],["formControlName","FASTAT"],["value",""],["value","AC"],["value","PR"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(e,r){if(1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4," Maintain 997 Triggers"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return r.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"div",8)(13,"label",9),t._uU(14,"Storer"),t.qZA(),t.TgZ(15,"div",10)(16,"mat-form-field",11)(17,"mat-label"),t._uU(18,"Storer"),t.qZA(),t._UZ(19,"input",12),t.qZA(),t.TgZ(20,"mat-form-field",11)(21,"mat-label"),t._uU(22,"Suffix "),t.qZA(),t._UZ(23,"input",13),t.qZA()()(),t._UZ(24,"br"),t.TgZ(25,"mat-form-field",11)(26,"mat-label"),t._uU(27,"Storer Reference "),t.qZA(),t._UZ(28,"input",14),t.qZA(),t.TgZ(29,"mat-form-field",11)(30,"mat-label"),t._uU(31," Working Bill "),t.qZA(),t._UZ(32,"input",15),t.qZA(),t.TgZ(33,"mat-form-field",11)(34,"mat-label"),t._uU(35,"Bill Number "),t.qZA(),t._UZ(36,"input",16),t.qZA(),t.TgZ(37,"div",8)(38,"label",9),t._uU(39,"Generated"),t.qZA(),t.TgZ(40,"div",10)(41,"mat-form-field",11)(42,"mat-label"),t._uU(43," Date"),t.qZA(),t._UZ(44,"input",17)(45,"mat-datepicker-toggle",18)(46,"mat-datepicker",null,19),t.qZA(),t.TgZ(48,"mat-form-field",11)(49,"mat-label"),t._uU(50," Time"),t.qZA(),t._UZ(51,"input",20),t.qZA()()(),t._UZ(52,"br"),t.TgZ(53,"div",8)(54,"label",9),t._uU(55,"Processed"),t.qZA(),t.TgZ(56,"div",10)(57,"mat-form-field",11),t._UZ(58,"input",21)(59,"mat-datepicker-toggle",18)(60,"mat-datepicker",null,19),t.qZA(),t.TgZ(62,"mat-form-field",11)(63,"mat-label"),t._uU(64," Time"),t.qZA(),t._UZ(65,"input",22),t.qZA()()(),t.TgZ(66,"mat-form-field",23)(67,"mat-label"),t._uU(68,"Status"),t.qZA(),t.TgZ(69,"mat-select",24)(70,"mat-option",25),t._uU(71,"--select--"),t.qZA(),t.TgZ(72,"mat-option",26),t._uU(73,"AC = Active"),t.qZA(),t.TgZ(74,"mat-option",27),t._uU(75,"PR = Processed"),t.qZA()()()()(),t.TgZ(76,"button",28),t.NdJ("click",function(){return r.updateTriggers()}),t._uU(77," Update "),t.qZA()()()()),2&e){const a=t.MAs(47);t.xp6(9),t.Q6J("formGroup",r.form),t.xp6(35),t.Q6J("matDatepicker",a),t.xp6(1),t.Q6J("for",a),t.xp6(13),t.Q6J("matDatepicker",a),t.xp6(1),t.Q6J("for",a)}},dependencies:[_.m,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,S.Hw,U.lW,p.KE,p.hX,p.R9,q.Nt,y.gD,D.ey,h.Mq,h.hl,h.nW,g.a8,g.dk,g.dn,g.n5]}),o})();var P=l(11790);let O=(()=>{class o{constructor(e,r,a,u,c,Z,v){this.router=e,this.fb=r,this.route=a,this.anyvariable=u,this.TriggersSvc=c,this.CustomAlertService=Z,this.dialogRef=v,this.user=localStorage.getItem("userName")}ngOnInit(){this.form=this.fb.group({FASTOR:this.anyvariable.FASTOR,FASSFX:"",FASREF:this.anyvariable.FASREF,FAWBIL:this.anyvariable.FAWBIL,FABILL:this.anyvariable.FABILL,GDAT:this.anyvariable.FAGDAT,FAGTIM:this.anyvariable.FAGTIM,PDAT:this.anyvariable.FAPDAT,FAPTIM:this.anyvariable.FAPTIM,FASTAT:this.anyvariable.FASTAT}),this.form.disable()}deleteTriggers(){this.CustomAlertService.openCustomAlert("Are you sure want to delete this Working Bill :"+this.anyvariable.FAWBIL+"?").afterClosed().subscribe(r=>{r&&(this.result=this.TriggersSvc.deleteTriggers(this.user,this.anyvariable.FAWBIL).subscribe(a=>{if(this.result=a,console.log(this.result),JSON.parse(this.result.success))this.successMessage(" deleted successfully"),this.closeDialog(),this.router.navigate(["/main-nav/triggers/read"]);else{const u=JSON.parse(this.result[0].data[1].value).returnedData.message;this.failureMessage(u)}}))})}successMessage(e){f().fire(e,"","success")}failureMessage(e){f().fire(e,"","error"),this.router.navigate(["/main-nav/triggers/read"])}closeDialog(){this.dialogRef.close()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.F0),t.Y36(s.qu),t.Y36(m.gz),t.Y36(C.WI),t.Y36(F),t.Y36(P.y),t.Y36(C.so))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-delete-trigger"]],standalone:!0,features:[t.jDz],decls:63,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[3,"formGroup"],[1,"row"],[1,"col"],[1,"form-group1"],["for","inputField",1,"form-heading"],[1,"form-input"],["appearance","outline",1,"full-width"],["matInput","","formControlName","FASTOR"],["matInput","","formControlName","FASSFX"],["matInput","","formControlName","FASREF"],["matInput","","formControlName","FAWBIL"],["matInput","","formControlName","FABILL"],["type","date","matInput","","formControlName","GDAT"],["DatePicker",""],["type","time","id","exampleInput","name","input","placeholder","HH:mm","formControlName","FAGTIM"],["type","date","matInput","","formControlName","PDAT"],["type","time","id","exampleInput","name","input","placeholder","HH:mm","formControlName","FAPTIM"],["appearance","outline"],["formControlName","FASTAT"],["value",""],["value","AC"],["value","PR"],["mat-button","",1,"buttons","removeButton",3,"click"]],template:function(e,r){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4," Delete 997 Triggers"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return r.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"div",8)(13,"label",9),t._uU(14,"Storer"),t.qZA(),t.TgZ(15,"div",10)(16,"mat-form-field",11)(17,"mat-label"),t._uU(18,"Storer"),t.qZA(),t._UZ(19,"input",12),t.qZA(),t.TgZ(20,"mat-form-field",11)(21,"mat-label"),t._uU(22,"Suffix "),t.qZA(),t._UZ(23,"input",13),t.qZA()()(),t._UZ(24,"br"),t.TgZ(25,"mat-form-field",11)(26,"mat-label"),t._uU(27,"Storer Reference "),t.qZA(),t._UZ(28,"input",14),t.qZA(),t.TgZ(29,"mat-form-field",11)(30,"mat-label"),t._uU(31," Working Bill "),t.qZA(),t._UZ(32,"input",15),t.qZA(),t.TgZ(33,"mat-form-field",11)(34,"mat-label"),t._uU(35,"Bill Number "),t.qZA(),t._UZ(36,"input",16),t.qZA(),t.TgZ(37,"mat-form-field",11)(38,"mat-label"),t._uU(39,"Generated "),t.qZA(),t._UZ(40,"input",17)(41,"mat-datepicker",null,18)(43,"input",19),t.qZA(),t.TgZ(44,"mat-form-field",11)(45,"mat-label"),t._uU(46,"Processed "),t.qZA(),t._UZ(47,"input",20)(48,"mat-datepicker",null,18)(50,"input",21),t.qZA(),t.TgZ(51,"mat-form-field",22)(52,"mat-label"),t._uU(53,"Status"),t.qZA(),t.TgZ(54,"mat-select",23)(55,"mat-option",24),t._uU(56,"--select--"),t.qZA(),t.TgZ(57,"mat-option",25),t._uU(58,"AC = Active"),t.qZA(),t.TgZ(59,"mat-option",26),t._uU(60,"PR = Processed"),t.qZA()()()()(),t.TgZ(61,"button",27),t.NdJ("click",function(){return r.deleteTriggers()}),t._uU(62,"Delete"),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",r.form))},dependencies:[_.m,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,S.Hw,U.lW,p.KE,p.hX,q.Nt,y.gD,D.ey,h.Mq,g.a8,g.dk,g.dn,g.n5]}),o})();var k=l(36895),M=l(28255),E=l(10266),Q=l(90455);function H(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"span",30),t.NdJ("click",function(a){return a.stopPropagation()}),t.TgZ(1,"mat-slide-toggle",31),t.NdJ("ngModelChange",function(a){const c=t.CHM(e).$implicit;return t.KtG(c.isActive=a)})("change",function(){const u=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.toggleColumn(u))}),t._uU(2),t.qZA(),t._UZ(3,"br"),t.qZA()}if(2&o){const e=i.$implicit;t.xp6(1),t.Q6J("ngModel",e.isActive),t.xp6(1),t.hij(" ",e.name," ")}}function X(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",32),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.searchTrigger())}),t.TgZ(1,"mat-icon"),t._uU(2,"clear"),t.qZA()()}}function $(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",33),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.searchTrigger())}),t.TgZ(1,"mat-icon"),t._uU(2,"search"),t.qZA()()}}function z(o,i){1&o&&(t.TgZ(0,"button",53),t._uU(1," Search "),t.qZA())}function K(o,i){if(1&o&&(t.TgZ(0,"form",34)(1,"div",35)(2,"div",36)(3,"div",37)(4,"label",38),t._uU(5,"Storer"),t.qZA(),t.TgZ(6,"div",39)(7,"mat-form-field",40)(8,"mat-label"),t._uU(9,"Storer"),t.qZA(),t._UZ(10,"input",41),t.qZA(),t.TgZ(11,"mat-form-field",40)(12,"mat-label"),t._uU(13,"Suffix "),t.qZA(),t._UZ(14,"input",42),t.qZA()()(),t._UZ(15,"br"),t.TgZ(16,"mat-form-field",40)(17,"mat-label"),t._uU(18,"Bill Number "),t.qZA(),t._UZ(19,"input",43),t.qZA(),t.TgZ(20,"mat-form-field",40)(21,"mat-label"),t._uU(22," Working Bill "),t.qZA(),t._UZ(23,"input",44),t.qZA(),t.TgZ(24,"mat-form-field",45)(25,"mat-label"),t._uU(26," Reference "),t.qZA(),t._UZ(27,"input",46),t.qZA(),t.TgZ(28,"mat-form-field",47)(29,"mat-label"),t._uU(30,"Status"),t.qZA(),t.TgZ(31,"mat-select",48)(32,"mat-option",49),t._uU(33,"--select--"),t.qZA(),t.TgZ(34,"mat-option",50),t._uU(35,"AC = Active"),t.qZA(),t.TgZ(36,"mat-option",51),t._uU(37,"PR = Processed"),t.qZA()()()()(),t.YNc(38,z,2,0,"button",52),t.qZA()),2&o){const e=t.oxw();t.Q6J("formGroup",e.form),t.xp6(38),t.Q6J("ngIf",e.searchTextDisplay)}}function j(o,i){1&o&&(t.TgZ(0,"th",54),t._uU(1,"Storer"),t.qZA())}function V(o,i){if(1&o&&(t.TgZ(0,"td",55),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.Oqu(e.FASTOR)}}function tt(o,i){1&o&&(t.TgZ(0,"th",54),t._uU(1," Working Bill Number "),t.qZA())}function et(o,i){if(1&o&&(t.TgZ(0,"td",55),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.Oqu(e.FAWBIL)}}function ot(o,i){1&o&&(t.TgZ(0,"th",54),t._uU(1,"Bill Number"),t.qZA())}function rt(o,i){if(1&o&&(t.TgZ(0,"td",55),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.Oqu(e.FABILL)}}function at(o,i){1&o&&(t.TgZ(0,"th",54),t._uU(1,"Generated Date"),t.qZA())}function it(o,i){if(1&o&&(t.TgZ(0,"td",55),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.Oqu(e.FAGDAT)}}function nt(o,i){1&o&&(t.TgZ(0,"th",54),t._uU(1,"Generated Time"),t.qZA())}function lt(o,i){if(1&o&&(t.TgZ(0,"td",55),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.Oqu(e.FAGTIM)}}function st(o,i){1&o&&(t.TgZ(0,"th",54),t._uU(1,"Processed Date"),t.qZA())}function mt(o,i){if(1&o&&(t.TgZ(0,"td",55),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.Oqu(e.FAPDAT)}}function ut(o,i){1&o&&(t.TgZ(0,"th",54),t._uU(1,"Processed Time"),t.qZA())}function ct(o,i){if(1&o&&(t.TgZ(0,"td",55),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.Oqu(e.FAPTIM)}}function gt(o,i){1&o&&(t.TgZ(0,"th",54),t._uU(1,"Status"),t.qZA())}function dt(o,i){if(1&o&&(t.TgZ(0,"td",55),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.Oqu(e.FASTAT)}}function pt(o,i){1&o&&(t.TgZ(0,"th",54),t._uU(1," Storer Reference "),t.qZA())}function ft(o,i){if(1&o&&(t.TgZ(0,"td",55),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.Oqu(e.FASREF)}}function Tt(o,i){1&o&&t._UZ(0,"th",56)}function At(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"td",55)(1,"div",57)(2,"button",58)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"ul",59)(6,"li")(7,"button",60),t.NdJ("click",function(){const u=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.editTrigger(u))}),t.TgZ(8,"mat-icon",61),t._uU(9,"edit"),t.qZA(),t.TgZ(10,"mat-label"),t._uU(11,"Edit"),t.qZA()()(),t.TgZ(12,"li")(13,"button",60),t.NdJ("click",function(){const u=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.deleteTrigger(u))}),t.TgZ(14,"mat-icon",62),t._uU(15,"delete"),t.qZA(),t.TgZ(16,"mat-label"),t._uU(17,"Delete"),t.qZA()()()()()()}}function ht(o,i){1&o&&t._UZ(0,"tr",63)}function Zt(o,i){1&o&&t._UZ(0,"tr",64)}const _t=function(){return[8,16,24]};let Ct=(()=>{class o{constructor(e,r,a,u,c){this.router=e,this.fb=r,this.route=a,this.matDialog=u,this.TriggersSvc=c,this.searchTextDisplay=!1,this.displayedColumns=["Storer","WorkingBillNumber","BillNumber","GeneratedDate","GeneratedTime","ProcessedDate","ProcessedTime","Status","Actions"],this.dataSource=[],this.user=localStorage.getItem("userName"),this.columnShowHideList=[]}ngOnInit(){this.initializeColumnProperties(),this.editedRows=[],this.form=this.fb.group({STOR:"",SSFX:"",BILL:"",WBIL:"",SREF:"",STAT:""}),this.getTriggers(),this.dataSource.paginator=this.paginator}getTriggers(){this.TriggersSvc.getTriggers().subscribe(e=>{console.log(e),this.result=e,console.log(this.result);var r=this.result.data[1].value;console.log(r);var a=JSON.parse(r);console.log(a),console.log("DaTA"),this.dataSource=new n.by(a.returnedData),console.log(this.dataSource),console.log("DaTA"),this.dataSource.paginator=this.paginator})}toggleColumn(e){if(e.isActive)e.position>this.displayedColumns.length-1?this.displayedColumns.push(e.name):this.displayedColumns.splice(e.position,0,e.name);else{let r=this.displayedColumns.indexOf(e.name);r>-1&&this.displayedColumns.splice(r,1)}}initializeColumnProperties(){this.displayedColumns.forEach((e,r)=>{"Actions"!=e&&this.columnShowHideList.push({position:r,name:e,isActive:!0})}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"StorerReference",isActive:!1})}addTrigger(){this.matDialog.open(L,{width:"900px",maxHeight:"80vh",autoFocus:!1})}editTrigger(e){this.matDialog.open(G,{width:"1000px",maxHeight:"90vh",data:e,autoFocus:!1})}deleteTrigger(e){this.matDialog.open(O,{width:"1000px",maxHeight:"90vh",data:e,autoFocus:!1})}searchTrigger(){this.searchTextDisplay=1!=this.searchTextDisplay}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.F0),t.Y36(s.qu),t.Y36(m.gz),t.Y36(C.uw),t.Y36(F))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-ww-triggers"]],viewQuery:function(e,r){if(1&e&&t.Gf(T.NW,5),2&e){let a;t.iGM(a=t.CRH())&&(r.paginator=a.first)}},standalone:!0,features:[t.jDz],decls:54,vars:10,consts:[[1,"over-Flow"],[1,"title"],["mainMenuButton","matMenu"],[3,"click",4,"ngFor","ngForOf"],[1,"buttons"],["mat-button","","class","addButton",3,"click",4,"ngIf"],["mat-button","","class","addButton","matTooltip","Search Trigger",3,"click",4,"ngIf"],["mat-button","","matTooltip","Add New Trigger",1,"addButton",3,"click"],["mat-button","","matTooltip","Hide/Show Columns",1,"mat-focus-indicator","addButton","mat-button","mat-button-base","tally-toltip-btn",3,"matMenuTriggerFor"],["menuTrigger","matMenuTrigger"],[1,"tally-serach-form"],["class","form over-Flow",3,"formGroup",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","Storer"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","WorkingBillNumber"],["matColumnDef","BillNumber"],["matColumnDef","GeneratedDate"],["matColumnDef","GeneratedTime"],["matColumnDef","ProcessedDate"],["matColumnDef","ProcessedTime"],["matColumnDef","Status"],["matColumnDef","StorerReference"],["matColumnDef","Actions"],["mat-header-cell","","class","tally_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],[3,"click"],[2,"color","blue",3,"ngModel","ngModelChange","change"],["mat-button","",1,"addButton",3,"click"],["mat-button","","matTooltip","Search Trigger",1,"addButton",3,"click"],[1,"form","over-Flow",3,"formGroup"],[1,"row"],[1,"col"],[1,"form-group1"],["for","inputField",1,"form-heading"],[1,"form-input"],["appearance","outline",1,"full-width"],["matInput","","formControlName","STOR"],["matInput","","formControlName","SSFX"],["matInput","","formControlName","BILL"],["matInput","","formControlName","WBIL"],["appearance","outline",1,"full-width2"],["matInput","","formControlName","SREF"],["appearance","outline"],["formControlName","STAT"],["value",""],["value","AC"],["value","PR"],["class","buttons addButton tally-search-btn","mat-raised-button","","type","submit","placeholder","Search",4,"ngIf"],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"tally_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",1,"dropdown-item",3,"click"],["mat-icon-button","","color","primary"],["mat-icon-button","","color","warn"],["mat-header-row",""],["mat-row",""]],template:function(e,r){if(1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3," Work With Functional Acknowledgment 997 Triggers "),t.qZA(),t.TgZ(4,"mat-menu",null,2),t.YNc(6,H,4,2,"span",3),t.qZA(),t.TgZ(7,"div",4),t.YNc(8,X,3,0,"button",5),t.YNc(9,$,3,0,"button",6),t.TgZ(10,"button",7),t.NdJ("click",function(){return r.addTrigger()}),t.TgZ(11,"mat-icon"),t._uU(12,"add"),t.qZA()(),t.TgZ(13,"button",8,9)(15,"mat-icon"),t._uU(16,"visibility_off"),t.qZA()()()(),t.TgZ(17,"mat-card-content",10),t.YNc(18,K,39,2,"form",11),t.qZA(),t.TgZ(19,"table",12),t.ynx(20,13),t.YNc(21,j,2,0,"th",14),t.YNc(22,V,2,1,"td",15),t.BQk(),t.ynx(23,16),t.YNc(24,tt,2,0,"th",14),t.YNc(25,et,2,1,"td",15),t.BQk(),t.ynx(26,17),t.YNc(27,ot,2,0,"th",14),t.YNc(28,rt,2,1,"td",15),t.BQk(),t.ynx(29,18),t.YNc(30,at,2,0,"th",14),t.YNc(31,it,2,1,"td",15),t.BQk(),t.ynx(32,19),t.YNc(33,nt,2,0,"th",14),t.YNc(34,lt,2,1,"td",15),t.BQk(),t.ynx(35,20),t.YNc(36,st,2,0,"th",14),t.YNc(37,mt,2,1,"td",15),t.BQk(),t.ynx(38,21),t.YNc(39,ut,2,0,"th",14),t.YNc(40,ct,2,1,"td",15),t.BQk(),t.ynx(41,22),t.YNc(42,gt,2,0,"th",14),t.YNc(43,dt,2,1,"td",15),t.BQk(),t.ynx(44,23),t.YNc(45,pt,2,0,"th",14),t.YNc(46,ft,2,1,"td",15),t.BQk(),t.ynx(47,24),t.YNc(48,Tt,1,0,"th",25),t.YNc(49,At,18,0,"td",15),t.BQk(),t.YNc(50,ht,1,0,"tr",26),t.YNc(51,Zt,1,0,"tr",27),t.qZA(),t._UZ(52,"mat-paginator",28,29),t.qZA()),2&e){const a=t.MAs(5);t.xp6(6),t.Q6J("ngForOf",r.columnShowHideList),t.xp6(2),t.Q6J("ngIf",r.searchTextDisplay),t.xp6(1),t.Q6J("ngIf",!r.searchTextDisplay),t.xp6(4),t.Q6J("matMenuTriggerFor",a),t.xp6(5),t.Q6J("ngIf",r.searchTextDisplay),t.xp6(1),t.Q6J("dataSource",r.dataSource),t.xp6(31),t.Q6J("matHeaderRowDef",r.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",r.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(9,_t))}},dependencies:[_.m,k.sg,k.O5,s._Y,s.Fj,s.JJ,s.JL,s.On,s.sg,s.u,T.NW,S.Hw,M.VK,M.p6,U.lW,p.KE,p.hX,q.Nt,y.gD,D.ey,g.a8,g.dk,g.dn,g.n5,n.BZ,n.fO,n.as,n.w1,n.Dz,n.nj,n.ge,n.ev,n.XQ,n.Gk,E.gM,Q.Rr]}),o})()}}]);