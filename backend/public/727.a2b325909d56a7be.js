"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[727],{1727:(V,p,a)=>{a.r(p),a.d(p,{AccountModule:()=>P});var i=a(3075),u=a(9808),f=a(520),s=a(8243),e=a(7587),d=a(7110);const v=function(t){return{"border-bottom":t}};let C=(()=>{class t{constructor(n,o){this.router=n,this.accountService=o,this.accountService.userValue&&(console.log("Account Layout Component "),console.log(this.accountService.userValue),this.router.navigate(["/"]))}isLogin(){return"/account/auth/login"===this.router.url.split("?")[0]}md(){return window.innerWidth>800}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(s.F0),e.Y36(d.B))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:25,vars:6,consts:[[1,"container-fluid","h-100","p-0","m-0"],[1,"row","d-flex","justify-content-center","align-items-center","h-100"],[1,"col","h-100"],[1,"card","text-black","h-100"],[1,"row","g-0","h-100"],[1,"col-12","col-md-6","d-flex","align-items-center"],[1,"card-body","p-md-5","mx-md-4"],[1,"text-center"],[1,"container","p-4"],[1,"row","text-center"],[1,"col-6","choice","border-danger",3,"ngClass"],["routerLink","login","routerLinkActive","active","ariaCurrentWhenActive","page"],["routerLink","register","routerLinkActive","active","ariaCurrentWhenActive","page"],[1,"row"],[1,"card"],[1,"card-body"],[1,"d-none","d-md-flex","col-md-6","align-items-center","justify-content-between","gradient-custom-2"],[1,"text-white","text-center","m-auto"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"h3"),e._uU(9,"RukBooks"),e.qZA()(),e.TgZ(10,"div",8)(11,"div",9)(12,"div",10)(13,"a",11),e._uU(14,"Connexion"),e.qZA()(),e.TgZ(15,"div",10)(16,"a",12),e._uU(17,"Inscription"),e.qZA()()(),e.TgZ(18,"div",13)(19,"div",14)(20,"div",15),e._UZ(21,"router-outlet"),e.qZA()()()()()(),e.TgZ(22,"div",16)(23,"h4",17),e._uU(24,"RukBooks, study easily"),e.qZA()()()()()()()),2&n&&(e.xp6(12),e.Q6J("ngClass",e.VKq(2,v,o.isLogin())),e.xp6(3),e.Q6J("ngClass",e.VKq(4,v,!o.isLogin())))},dependencies:[u.mk,s.lC,s.yS,s.Od],styles:[".gradient-custom-2[_ngcontent-%COMP%]{background:#fccb90;background:linear-gradient(to right,#ee7724,#d8363a,#dd3675,#b44593)}@media (min-width: 768px){.gradient-form[_ngcontent-%COMP%]{height:100vh!important}}@media (min-width: 769px){.gradient-custom-2[_ngcontent-%COMP%]{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}}"]}),t})();var h=a(590),_=a(2712);function Z(t,r){1&t&&(e.TgZ(0,"div",10),e._uU(1," Informations are incorrect, any account is related.\n"),e.qZA())}function T(t,r){1&t&&(e.TgZ(0,"div"),e._uU(1,"Username is required"),e.qZA())}function q(t,r){if(1&t&&(e.TgZ(0,"div",11),e.YNc(1,T,2,0,"div",12),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.f.username.errors.required)}}function A(t,r){1&t&&(e.TgZ(0,"div"),e._uU(1,"Password is required"),e.qZA())}function x(t,r){if(1&t&&(e.TgZ(0,"div",11),e.YNc(1,A,2,0,"div",12),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.f.password.errors.required)}}function y(t,r){1&t&&e._UZ(0,"span",13)}const b=function(t){return{"is-invalid":t}};let J=(()=>{class t{constructor(n,o,c,m,g){this.formBuilder=n,this.route=o,this.router=c,this.accountService=m,this.alertService=g,this.loading=!1,this.submitted=!1,this.error=!1}ngOnInit(){this.form=this.formBuilder.group({username:["",i.kI.required],password:["",i.kI.required]}),console.log("user"),console.log(this.accountService.userValue)}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.loading=!0,this.accountService.login(this.f.username.value,this.f.password.value).pipe((0,h.P)()).subscribe({next:()=>{console.log(this.accountService.userValue),this.router.navigateByUrl(this.route.snapshot.queryParams.returnUrl||"/")},error:n=>{this.error=!0,this.alertService.error(n),console.log(n),this.loading=!1}}))}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(i.qu),e.Y36(s.gz),e.Y36(s.F0),e.Y36(d.B),e.Y36(_.c))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:14,vars:12,consts:[["class","text-danger font-weight-bold",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-group","m-1"],["type","text","formControlName","username","placeholder","Pseudo",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","password","formControlName","password","placeholder","Mot de passe",1,"form-control",3,"ngClass"],[1,"form-group"],["type","submit",1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["routerLink","../register",1,"btn","btn-link"],[1,"text-danger","font-weight-bold"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(n,o){1&n&&(e.YNc(0,Z,2,0,"div",0),e.TgZ(1,"form",1),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e.TgZ(2,"div",2),e._UZ(3,"input",3),e.YNc(4,q,2,1,"div",4),e.qZA(),e.TgZ(5,"div",2),e._UZ(6,"input",5),e.YNc(7,x,2,1,"div",4),e.qZA(),e.TgZ(8,"div",6)(9,"button",7),e.YNc(10,y,1,0,"span",8),e._uU(11," Sign "),e.qZA(),e.TgZ(12,"a",9),e._uU(13,"I don't have an account"),e.qZA()()()),2&n&&(e.Q6J("ngIf",o.error),e.xp6(1),e.Q6J("formGroup",o.form),e.xp6(2),e.Q6J("ngClass",e.VKq(8,b,o.submitted&&o.f.username.errors)),e.xp6(1),e.Q6J("ngIf",o.submitted&&o.f.username.errors),e.xp6(2),e.Q6J("ngClass",e.VKq(10,b,o.submitted&&o.f.password.errors)),e.xp6(1),e.Q6J("ngIf",o.submitted&&o.f.password.errors),e.xp6(2),e.Q6J("disabled",o.loading),e.xp6(1),e.Q6J("ngIf",o.loading))},dependencies:[u.mk,u.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,s.yS],encapsulation:2}),t})(),I=(()=>{class t{constructor(n,o){this.accountService=n,this.router=o}ngOnInit(){this.accountService.logout(),console.log("logged out")}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(d.B),e.Y36(s.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-logout"]],decls:0,vars:0,template:function(n,o){}}),t})();function w(t,r){1&t&&(e.TgZ(0,"div",11),e._uU(1," An account with this information has already existed\n"),e.qZA())}function S(t,r){1&t&&(e.TgZ(0,"div"),e._uU(1,"Email is required"),e.qZA())}function L(t,r){if(1&t&&(e.TgZ(0,"div",12),e.YNc(1,S,2,0,"div",13),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.f.email.errors.required)}}function Y(t,r){1&t&&(e.TgZ(0,"div"),e._uU(1,"Username is required"),e.qZA())}function U(t,r){if(1&t&&(e.TgZ(0,"div",12),e.YNc(1,Y,2,0,"div",13),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.f.username.errors.required)}}function Q(t,r){1&t&&(e.TgZ(0,"div"),e._uU(1,"Password is required"),e.qZA())}function k(t,r){1&t&&(e.TgZ(0,"div"),e._uU(1,"Password must be at least 6 characters"),e.qZA())}function R(t,r){if(1&t&&(e.TgZ(0,"div",12),e.YNc(1,Q,2,0,"div",13),e.YNc(2,k,2,0,"div",13),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.f.password.errors.required),e.xp6(1),e.Q6J("ngIf",n.f.password.errors.minlength)}}function N(t,r){1&t&&e._UZ(0,"span",14)}const l=function(t){return{"is-invalid":t}},B=[{path:"auth",component:C,children:[{path:"login",component:J},{path:"register",component:(()=>{class t{constructor(n,o,c,m,g){this.formBuilder=n,this.route=o,this.router=c,this.accountService=m,this.alertService=g,this.loading=!1,this.submitted=!1,this.error=!1}ngOnInit(){this.form=this.formBuilder.group({email:["",i.kI.required],username:["",i.kI.required],password:["",[i.kI.required,i.kI.minLength(6)]]})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.loading=!0,this.accountService.register(this.form.value).pipe((0,h.P)()).subscribe({next:()=>{this.alertService.success("Registration successful",{keepAfterRouteChange:!0}),this.router.navigate(["/"],{relativeTo:this.route})},error:n=>{this.alertService.error(n),this.error=!0,console.log("error "),console.log(n),this.loading=!1}}))}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(i.qu),e.Y36(s.gz),e.Y36(s.F0),e.Y36(d.B),e.Y36(_.c))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:17,vars:16,consts:[["class","text-danger font-weight-bold",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-group","m-1"],["type","text","formControlName","email","placeholder","Email","email","true",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","text","formControlName","username","placeholder","Pseudo",1,"form-control",3,"ngClass"],["type","password","formControlName","password","placeholder","Mot de passe",1,"form-control",3,"ngClass"],[1,"form-group"],["type","submit",1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["routerLink","../login",1,"btn","btn-link"],[1,"text-danger","font-weight-bold"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(n,o){1&n&&(e.YNc(0,w,2,0,"div",0),e.TgZ(1,"form",1),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e.TgZ(2,"div",2),e._UZ(3,"input",3),e.YNc(4,L,2,1,"div",4),e.qZA(),e.TgZ(5,"div",2),e._UZ(6,"input",5),e.YNc(7,U,2,1,"div",4),e.qZA(),e.TgZ(8,"div",2),e._UZ(9,"input",6),e.YNc(10,R,3,2,"div",4),e.qZA(),e.TgZ(11,"div",7)(12,"button",8),e.YNc(13,N,1,0,"span",9),e._uU(14," Register "),e.qZA(),e.TgZ(15,"a",10),e._uU(16,"I have an account"),e.qZA()()()),2&n&&(e.Q6J("ngIf",o.error),e.xp6(1),e.Q6J("formGroup",o.form),e.xp6(2),e.Q6J("ngClass",e.VKq(10,l,o.submitted&&o.f.username.errors)),e.xp6(1),e.Q6J("ngIf",o.submitted&&o.f.email.errors),e.xp6(2),e.Q6J("ngClass",e.VKq(12,l,o.submitted&&o.f.username.errors)),e.xp6(1),e.Q6J("ngIf",o.submitted&&o.f.username.errors),e.xp6(2),e.Q6J("ngClass",e.VKq(14,l,o.submitted&&o.f.password.errors)),e.xp6(1),e.Q6J("ngIf",o.submitted&&o.f.password.errors),e.xp6(2),e.Q6J("disabled",o.loading),e.xp6(1),e.Q6J("ngIf",o.loading))},dependencies:[u.mk,u.O5,i._Y,i.Fj,i.JJ,i.JL,i.on,i.sg,i.u,s.yS],encapsulation:2}),t})()},{path:"",pathMatch:"full",redirectTo:"login"}]},{path:"logout",component:I},{path:"",pathMatch:"full",redirectTo:"auth"},{path:"**",redirectTo:"auth"}];let F=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.Bz.forChild(B),s.Bz]}),t})();var M=a(4575);let P=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[f.JF],imports:[u.ez,f.JF,i.UX,F,M.q]}),t})()}}]);