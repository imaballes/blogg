(function(){var a=this;var c=function(b,e){var d=parseFloat(b);return isNaN(d)||1<d||0>d?e:d},f=function(b,e){var d=parseInt(b,10);return isNaN(d)?e:d},g=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,h=function(b,e){if(!b)return e;var d=b.match(g);return d?d[0]:e};var k=c("0.02",0),l=c("0.0",0);var m=c("0.005",0),n=c("0",0),p=c("0.001",0),q=f("1500",1500),r=c("0.01",0),t=c("1.0",0),u=c("0.5",0),v=c("",.001),w=f("",200),x=c("0.01",
0),y=/^true$/.test("")?!0:!1,z=c("0.1",0),A=c("0.01",0),B=c("0.1",0),C=c("0.01",0),D=c("1",0),E=c("",.001),F=c("0.01",0),G=c("0.0",0),H=c("0.05",0),I=c("0.5",0),J=c("0.0",
0),K=c("0.5",0),L=c("0.001",0),M=c("0.0001",0),N=c("0.001",0),O=c("",0);var P=/^true$/.test("false")?!0:!1;var Q=function(){return a.googletag||(a.googletag={})},R=function(b,e){var d=Q();d.hasOwnProperty(b)||(d[b]=e)};var S={};S["#1#"]=h("","pagead2.googlesyndication.com");S["#2#"]=h("","pubads.g.doubleclick.net");S["#3#"]=h("","securepubads.g.doubleclick.net");S["#4#"]=h("","partner.googleadservices.com");S["#6#"]=function(b){try{for(var e=null;e!=b;e=b,b=b.parent)switch(b.location.protocol){case "https:":return!0;case "http:":case "file:":return!1}}catch(d){}return!0}(window);S["#7#"]=k;S["#10#"]=n;S["#11#"]=p;
S["#12#"]=m;S["#13#"]=q;S["#16#"]=r;S["#17#"]=t;S["#18#"]=u;S["#20#"]=l;S["#23#"]=v;S["#24#"]=w;S["#27#"]=x;S["#28#"]=z;S["#29#"]=A;S["#31#"]=B;S["#33#"]=h("","pagead2.googlesyndication.com");S["#34#"]=D;S["#36#"]=y;S["#37#"]=C;S["#38#"]=E;S["#39#"]="";S["#40#"]=F;S["#41#"]=G;S["#50#"]=H;S["#42#"]=I;S["#43#"]=J;S["#44#"]=K;S["#45#"]=L;S["#46#"]=P;S["#47#"]=M;S["#48#"]=N;S["#49#"]=(new Date).getTime();S["#51#"]=O;R("_vars_",S);R("getVersion",function(){return"73"});var T={};var U=document;R("cmd",[]);
if("function"==function(){var b=googletag.evalScripts,e=typeof b;if("object"==e)if(b){if(b instanceof Array)return"array";if(b instanceof Object)return e;var d=Object.prototype.toString.call(b);if("[object Window]"==d)return"object";if("[object Array]"==d||"number"==typeof b.length&&"undefined"!=typeof b.splice&&"undefined"!=typeof b.propertyIsEnumerable&&!b.propertyIsEnumerable("splice"))return"array";if("[object Function]"==d||"undefined"!=typeof b.call&&"undefined"!=typeof b.propertyIsEnumerable&&
!b.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==e&&"undefined"==typeof b.call)return"object";return e}())googletag.evalScripts();else{var V=(T["#6#"]||Q()._vars_["#6#"]?"https:":"http:")+"//partner.googleadservices.com/gpt/pubads_impl_73.js",W=U.currentScript;if(!("complete"==U.readyState||"loaded"==U.readyState||W&&W.async)){var X="gpt-impl-"+Math.random();try{U.write('<script id="'+X+'" src="'+V+'">\x3c/script>')}catch(Y){}U.getElementById(X)&&(Q()._loadStarted_=
!0)}if(!Q()._loadStarted_){var Z=U.createElement("script");Z.src=V;Z.async=!0;(U.head||U.body||U.documentElement).appendChild(Z);Q()._loadStarted_=!0}};})()
