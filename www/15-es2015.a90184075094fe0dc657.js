(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{tmrb:function(n,t,o){"use strict";o.r(t),o.d(t,"Tab1PageModule",function(){return g});var e=o("TEn/"),i=o("ofXK"),r=o("3Pt+"),c=o("qtYk"),a=o("tyNb"),b=o("mrSG"),s=o("Bkb5"),l=o("fXoL");const d=[{path:"",component:(()=>{class n{constructor(n,t,o){this.router=n,this.navctrl=t,this.modalController=o,this.nav=document.querySelector("ion-nav")}ngOnInit(){}postPage(){this.navctrl.navigateForward("post-page")}itemPage(){this.navctrl.navigateForward("item-page")}openModal(){return Object(b.a)(this,void 0,void 0,function*(){const n=yield this.modalController.create({component:s.a});return n.onDidDismiss().then(()=>{}),yield n.present()})}}return n.\u0275fac=function(t){return new(t||n)(l.Kb(a.g),l.Kb(e.R),l.Kb(e.Q))},n.\u0275cmp=l.Eb({type:n,selectors:[["app-tab1"]],decls:30,vars:1,consts:[["mode","ios",1,"myToolbar"],[1,"content",3,"fullscreen"],[1,"search",2,"display","flex","align-items","center"],["showCancelButton","focus",2,"margin","auto 0"],["id","filterButton","size","small",2,"margin","auto 0",3,"click"],["name","options-outline"],["vertical","bottom","horizontal","end","slot","fixed",1,"plus-button"],["color","primary",3,"click"],["name","add"],[3,"click"],["src","assets/ucisweater.jpg"],["src","assets/textbook.jpg"]],template:function(n,t){1&n&&(l.Nb(0,"ion-header"),l.Nb(1,"ion-toolbar",0),l.Nb(2,"ion-title"),l.gc(3,"Marketplace"),l.Mb(),l.Mb(),l.Mb(),l.Nb(4,"ion-content",1),l.Nb(5,"ion-item",2),l.Lb(6,"ion-searchbar",3),l.Nb(7,"ion-button",4),l.Vb("click",function(){return t.openModal()}),l.Lb(8,"ion-icon",5),l.Mb(),l.Mb(),l.Nb(9,"ion-fab",6),l.Nb(10,"ion-fab-button",7),l.Vb("click",function(){return t.postPage()}),l.Lb(11,"ion-icon",8),l.Mb(),l.Mb(),l.Nb(12,"ion-card",9),l.Vb("click",function(){return t.itemPage()}),l.Lb(13,"img",10),l.Nb(14,"ion-card-header"),l.Nb(15,"ion-card-subtitle"),l.gc(16,"SCHOOL APPAREL"),l.Mb(),l.Nb(17,"ion-card-title"),l.gc(18,"UCI Sweater"),l.Mb(),l.Mb(),l.Nb(19,"ion-card-content"),l.gc(20," Slightly Worn UCI Sweater! "),l.Mb(),l.Mb(),l.Nb(21,"ion-card"),l.Lb(22,"img",11),l.Nb(23,"ion-card-header"),l.Nb(24,"ion-card-subtitle"),l.gc(25,"SCHOOL SUPPLIES"),l.Mb(),l.Nb(26,"ion-card-title"),l.gc(27,"Lissabon Textbook"),l.Mb(),l.Mb(),l.Nb(28,"ion-card-content"),l.gc(29," Brand new textbook. "),l.Mb(),l.Mb(),l.Mb()),2&n&&(l.Ab(4),l.ac("fullscreen",!0))},directives:[e.r,e.N,e.M,e.m,e.v,e.C,e.U,e.e,e.s,e.n,e.o,e.g,e.i,e.j,e.k,e.h],styles:['ion-content[_ngcontent-%COMP%]{--ion-background-color:#f5f5f5}.myToolbar[_ngcontent-%COMP%]{--background:#ffd200;--color:#000;color:#0064a4}ion-card-title[_ngcontent-%COMP%]{font-size:22px!important;size:22px!important}.content[_ngcontent-%COMP%]{background-color:"#F5F5F5"!important}.search[_ngcontent-%COMP%]{--background:#f5f5f5}ion-searchbar[_ngcontent-%COMP%]{color:#000}']}),n})()}];let u=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=l.Ib({type:n}),n.\u0275inj=l.Hb({imports:[[a.i.forChild(d)],a.i]}),n})(),g=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=l.Ib({type:n}),n.\u0275inj=l.Hb({imports:[[e.O,i.b,r.a,c.a,u]]}),n})()}}]);