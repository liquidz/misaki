goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var x__6432 = (((x == null))?null:x);
if((p[goog.typeOf(x__6432)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error(["No protocol method ",proto," defined for type ",goog.typeOf(obj),": ",obj].join(""));
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return array_like.slice();
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__6433__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__6433 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6433__delegate.call(this, array, i, idxs);
};
G__6433.cljs$lang$maxFixedArity = 2;
G__6433.cljs$lang$applyTo = (function (arglist__6434){
var array = cljs.core.first(arglist__6434);
var i = cljs.core.first(cljs.core.next(arglist__6434));
var idxs = cljs.core.rest(cljs.core.next(arglist__6434));
return G__6433__delegate(array, i, idxs);
});
G__6433.cljs$lang$arity$variadic = G__6433__delegate;
return G__6433;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.call(null,(function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw('Invalid arity: ' + arguments.length);
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3822__auto____6519 = this$;
if(and__3822__auto____6519)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____6519;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2693__auto____6520 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6521 = (cljs.core._invoke[goog.typeOf(x__2693__auto____6520)]);
if(or__3824__auto____6521)
{return or__3824__auto____6521;
} else
{var or__3824__auto____6522 = (cljs.core._invoke["_"]);
if(or__3824__auto____6522)
{return or__3824__auto____6522;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____6523 = this$;
if(and__3822__auto____6523)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____6523;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2693__auto____6524 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6525 = (cljs.core._invoke[goog.typeOf(x__2693__auto____6524)]);
if(or__3824__auto____6525)
{return or__3824__auto____6525;
} else
{var or__3824__auto____6526 = (cljs.core._invoke["_"]);
if(or__3824__auto____6526)
{return or__3824__auto____6526;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____6527 = this$;
if(and__3822__auto____6527)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____6527;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2693__auto____6528 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6529 = (cljs.core._invoke[goog.typeOf(x__2693__auto____6528)]);
if(or__3824__auto____6529)
{return or__3824__auto____6529;
} else
{var or__3824__auto____6530 = (cljs.core._invoke["_"]);
if(or__3824__auto____6530)
{return or__3824__auto____6530;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____6531 = this$;
if(and__3822__auto____6531)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____6531;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2693__auto____6532 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6533 = (cljs.core._invoke[goog.typeOf(x__2693__auto____6532)]);
if(or__3824__auto____6533)
{return or__3824__auto____6533;
} else
{var or__3824__auto____6534 = (cljs.core._invoke["_"]);
if(or__3824__auto____6534)
{return or__3824__auto____6534;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____6535 = this$;
if(and__3822__auto____6535)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____6535;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2693__auto____6536 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6537 = (cljs.core._invoke[goog.typeOf(x__2693__auto____6536)]);
if(or__3824__auto____6537)
{return or__3824__auto____6537;
} else
{var or__3824__auto____6538 = (cljs.core._invoke["_"]);
if(or__3824__auto____6538)
{return or__3824__auto____6538;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____6539 = this$;
if(and__3822__auto____6539)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____6539;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2693__auto____6540 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6541 = (cljs.core._invoke[goog.typeOf(x__2693__auto____6540)]);
if(or__3824__auto____6541)
{return or__3824__auto____6541;
} else
{var or__3824__auto____6542 = (cljs.core._invoke["_"]);
if(or__3824__auto____6542)
{return or__3824__auto____6542;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____6543 = this$;
if(and__3822__auto____6543)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____6543;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2693__auto____6544 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6545 = (cljs.core._invoke[goog.typeOf(x__2693__auto____6544)]);
if(or__3824__auto____6545)
{return or__3824__auto____6545;
} else
{var or__3824__auto____6546 = (cljs.core._invoke["_"]);
if(or__3824__auto____6546)
{return or__3824__auto____6546;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____6547 = this$;
if(and__3822__auto____6547)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____6547;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2693__auto____6548 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6549 = (cljs.core._invoke[goog.typeOf(x__2693__auto____6548)]);
if(or__3824__auto____6549)
{return or__3824__auto____6549;
} else
{var or__3824__auto____6550 = (cljs.core._invoke["_"]);
if(or__3824__auto____6550)
{return or__3824__auto____6550;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____6551 = this$;
if(and__3822__auto____6551)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____6551;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2693__auto____6552 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6553 = (cljs.core._invoke[goog.typeOf(x__2693__auto____6552)]);
if(or__3824__auto____6553)
{return or__3824__auto____6553;
} else
{var or__3824__auto____6554 = (cljs.core._invoke["_"]);
if(or__3824__auto____6554)
{return or__3824__auto____6554;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____6555 = this$;
if(and__3822__auto____6555)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____6555;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2693__auto____6556 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6557 = (cljs.core._invoke[goog.typeOf(x__2693__auto____6556)]);
if(or__3824__auto____6557)
{return or__3824__auto____6557;
} else
{var or__3824__auto____6558 = (cljs.core._invoke["_"]);
if(or__3824__auto____6558)
{return or__3824__auto____6558;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____6559 = this$;
if(and__3822__auto____6559)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____6559;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2693__auto____6560 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6561 = (cljs.core._invoke[goog.typeOf(x__2693__auto____6560)]);
if(or__3824__auto____6561)
{return or__3824__auto____6561;
} else
{var or__3824__auto____6562 = (cljs.core._invoke["_"]);
if(or__3824__auto____6562)
{return or__3824__auto____6562;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____6563 = this$;
if(and__3822__auto____6563)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____6563;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2693__auto____6564 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6565 = (cljs.core._invoke[goog.typeOf(x__2693__auto____6564)]);
if(or__3824__auto____6565)
{return or__3824__auto____6565;
} else
{var or__3824__auto____6566 = (cljs.core._invoke["_"]);
if(or__3824__auto____6566)
{return or__3824__auto____6566;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____6567 = this$;
if(and__3822__auto____6567)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____6567;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2693__auto____6568 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6569 = (cljs.core._invoke[goog.typeOf(x__2693__auto____6568)]);
if(or__3824__auto____6569)
{return or__3824__auto____6569;
} else
{var or__3824__auto____6570 = (cljs.core._invoke["_"]);
if(or__3824__auto____6570)
{return or__3824__auto____6570;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____6571 = this$;
if(and__3822__auto____6571)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____6571;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2693__auto____6572 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6573 = (cljs.core._invoke[goog.typeOf(x__2693__auto____6572)]);
if(or__3824__auto____6573)
{return or__3824__auto____6573;
} else
{var or__3824__auto____6574 = (cljs.core._invoke["_"]);
if(or__3824__auto____6574)
{return or__3824__auto____6574;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____6575 = this$;
if(and__3822__auto____6575)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____6575;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2693__auto____6576 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6577 = (cljs.core._invoke[goog.typeOf(x__2693__auto____6576)]);
if(or__3824__auto____6577)
{return or__3824__auto____6577;
} else
{var or__3824__auto____6578 = (cljs.core._invoke["_"]);
if(or__3824__auto____6578)
{return or__3824__auto____6578;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____6579 = this$;
if(and__3822__auto____6579)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____6579;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2693__auto____6580 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6581 = (cljs.core._invoke[goog.typeOf(x__2693__auto____6580)]);
if(or__3824__auto____6581)
{return or__3824__auto____6581;
} else
{var or__3824__auto____6582 = (cljs.core._invoke["_"]);
if(or__3824__auto____6582)
{return or__3824__auto____6582;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____6583 = this$;
if(and__3822__auto____6583)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____6583;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2693__auto____6584 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6585 = (cljs.core._invoke[goog.typeOf(x__2693__auto____6584)]);
if(or__3824__auto____6585)
{return or__3824__auto____6585;
} else
{var or__3824__auto____6586 = (cljs.core._invoke["_"]);
if(or__3824__auto____6586)
{return or__3824__auto____6586;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____6587 = this$;
if(and__3822__auto____6587)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____6587;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2693__auto____6588 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6589 = (cljs.core._invoke[goog.typeOf(x__2693__auto____6588)]);
if(or__3824__auto____6589)
{return or__3824__auto____6589;
} else
{var or__3824__auto____6590 = (cljs.core._invoke["_"]);
if(or__3824__auto____6590)
{return or__3824__auto____6590;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____6591 = this$;
if(and__3822__auto____6591)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____6591;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2693__auto____6592 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6593 = (cljs.core._invoke[goog.typeOf(x__2693__auto____6592)]);
if(or__3824__auto____6593)
{return or__3824__auto____6593;
} else
{var or__3824__auto____6594 = (cljs.core._invoke["_"]);
if(or__3824__auto____6594)
{return or__3824__auto____6594;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____6595 = this$;
if(and__3822__auto____6595)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____6595;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2693__auto____6596 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6597 = (cljs.core._invoke[goog.typeOf(x__2693__auto____6596)]);
if(or__3824__auto____6597)
{return or__3824__auto____6597;
} else
{var or__3824__auto____6598 = (cljs.core._invoke["_"]);
if(or__3824__auto____6598)
{return or__3824__auto____6598;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____6599 = this$;
if(and__3822__auto____6599)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____6599;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2693__auto____6600 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6601 = (cljs.core._invoke[goog.typeOf(x__2693__auto____6600)]);
if(or__3824__auto____6601)
{return or__3824__auto____6601;
} else
{var or__3824__auto____6602 = (cljs.core._invoke["_"]);
if(or__3824__auto____6602)
{return or__3824__auto____6602;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3822__auto____6607 = coll;
if(and__3822__auto____6607)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____6607;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2693__auto____6608 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6609 = (cljs.core._count[goog.typeOf(x__2693__auto____6608)]);
if(or__3824__auto____6609)
{return or__3824__auto____6609;
} else
{var or__3824__auto____6610 = (cljs.core._count["_"]);
if(or__3824__auto____6610)
{return or__3824__auto____6610;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____6615 = coll;
if(and__3822__auto____6615)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____6615;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2693__auto____6616 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6617 = (cljs.core._empty[goog.typeOf(x__2693__auto____6616)]);
if(or__3824__auto____6617)
{return or__3824__auto____6617;
} else
{var or__3824__auto____6618 = (cljs.core._empty["_"]);
if(or__3824__auto____6618)
{return or__3824__auto____6618;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____6623 = coll;
if(and__3822__auto____6623)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____6623;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2693__auto____6624 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6625 = (cljs.core._conj[goog.typeOf(x__2693__auto____6624)]);
if(or__3824__auto____6625)
{return or__3824__auto____6625;
} else
{var or__3824__auto____6626 = (cljs.core._conj["_"]);
if(or__3824__auto____6626)
{return or__3824__auto____6626;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3822__auto____6635 = coll;
if(and__3822__auto____6635)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____6635;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2693__auto____6636 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6637 = (cljs.core._nth[goog.typeOf(x__2693__auto____6636)]);
if(or__3824__auto____6637)
{return or__3824__auto____6637;
} else
{var or__3824__auto____6638 = (cljs.core._nth["_"]);
if(or__3824__auto____6638)
{return or__3824__auto____6638;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____6639 = coll;
if(and__3822__auto____6639)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____6639;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2693__auto____6640 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6641 = (cljs.core._nth[goog.typeOf(x__2693__auto____6640)]);
if(or__3824__auto____6641)
{return or__3824__auto____6641;
} else
{var or__3824__auto____6642 = (cljs.core._nth["_"]);
if(or__3824__auto____6642)
{return or__3824__auto____6642;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
cljs.core.ASeq = {};
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3822__auto____6647 = coll;
if(and__3822__auto____6647)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____6647;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2693__auto____6648 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6649 = (cljs.core._first[goog.typeOf(x__2693__auto____6648)]);
if(or__3824__auto____6649)
{return or__3824__auto____6649;
} else
{var or__3824__auto____6650 = (cljs.core._first["_"]);
if(or__3824__auto____6650)
{return or__3824__auto____6650;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____6655 = coll;
if(and__3822__auto____6655)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____6655;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2693__auto____6656 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6657 = (cljs.core._rest[goog.typeOf(x__2693__auto____6656)]);
if(or__3824__auto____6657)
{return or__3824__auto____6657;
} else
{var or__3824__auto____6658 = (cljs.core._rest["_"]);
if(or__3824__auto____6658)
{return or__3824__auto____6658;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____6663 = coll;
if(and__3822__auto____6663)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____6663;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2693__auto____6664 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6665 = (cljs.core._next[goog.typeOf(x__2693__auto____6664)]);
if(or__3824__auto____6665)
{return or__3824__auto____6665;
} else
{var or__3824__auto____6666 = (cljs.core._next["_"]);
if(or__3824__auto____6666)
{return or__3824__auto____6666;
} else
{throw cljs.core.missing_protocol.call(null,"INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3822__auto____6675 = o;
if(and__3822__auto____6675)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____6675;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2693__auto____6676 = (((o == null))?null:o);
return (function (){var or__3824__auto____6677 = (cljs.core._lookup[goog.typeOf(x__2693__auto____6676)]);
if(or__3824__auto____6677)
{return or__3824__auto____6677;
} else
{var or__3824__auto____6678 = (cljs.core._lookup["_"]);
if(or__3824__auto____6678)
{return or__3824__auto____6678;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____6679 = o;
if(and__3822__auto____6679)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____6679;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2693__auto____6680 = (((o == null))?null:o);
return (function (){var or__3824__auto____6681 = (cljs.core._lookup[goog.typeOf(x__2693__auto____6680)]);
if(or__3824__auto____6681)
{return or__3824__auto____6681;
} else
{var or__3824__auto____6682 = (cljs.core._lookup["_"]);
if(or__3824__auto____6682)
{return or__3824__auto____6682;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3822__auto____6687 = coll;
if(and__3822__auto____6687)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____6687;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2693__auto____6688 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6689 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2693__auto____6688)]);
if(or__3824__auto____6689)
{return or__3824__auto____6689;
} else
{var or__3824__auto____6690 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____6690)
{return or__3824__auto____6690;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____6695 = coll;
if(and__3822__auto____6695)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____6695;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2693__auto____6696 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6697 = (cljs.core._assoc[goog.typeOf(x__2693__auto____6696)]);
if(or__3824__auto____6697)
{return or__3824__auto____6697;
} else
{var or__3824__auto____6698 = (cljs.core._assoc["_"]);
if(or__3824__auto____6698)
{return or__3824__auto____6698;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____6703 = coll;
if(and__3822__auto____6703)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____6703;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2693__auto____6704 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6705 = (cljs.core._dissoc[goog.typeOf(x__2693__auto____6704)]);
if(or__3824__auto____6705)
{return or__3824__auto____6705;
} else
{var or__3824__auto____6706 = (cljs.core._dissoc["_"]);
if(or__3824__auto____6706)
{return or__3824__auto____6706;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____6711 = coll;
if(and__3822__auto____6711)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____6711;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2693__auto____6712 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6713 = (cljs.core._key[goog.typeOf(x__2693__auto____6712)]);
if(or__3824__auto____6713)
{return or__3824__auto____6713;
} else
{var or__3824__auto____6714 = (cljs.core._key["_"]);
if(or__3824__auto____6714)
{return or__3824__auto____6714;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____6719 = coll;
if(and__3822__auto____6719)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____6719;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2693__auto____6720 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6721 = (cljs.core._val[goog.typeOf(x__2693__auto____6720)]);
if(or__3824__auto____6721)
{return or__3824__auto____6721;
} else
{var or__3824__auto____6722 = (cljs.core._val["_"]);
if(or__3824__auto____6722)
{return or__3824__auto____6722;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____6727 = coll;
if(and__3822__auto____6727)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____6727;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2693__auto____6728 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6729 = (cljs.core._disjoin[goog.typeOf(x__2693__auto____6728)]);
if(or__3824__auto____6729)
{return or__3824__auto____6729;
} else
{var or__3824__auto____6730 = (cljs.core._disjoin["_"]);
if(or__3824__auto____6730)
{return or__3824__auto____6730;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____6735 = coll;
if(and__3822__auto____6735)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____6735;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2693__auto____6736 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6737 = (cljs.core._peek[goog.typeOf(x__2693__auto____6736)]);
if(or__3824__auto____6737)
{return or__3824__auto____6737;
} else
{var or__3824__auto____6738 = (cljs.core._peek["_"]);
if(or__3824__auto____6738)
{return or__3824__auto____6738;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____6743 = coll;
if(and__3822__auto____6743)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____6743;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2693__auto____6744 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6745 = (cljs.core._pop[goog.typeOf(x__2693__auto____6744)]);
if(or__3824__auto____6745)
{return or__3824__auto____6745;
} else
{var or__3824__auto____6746 = (cljs.core._pop["_"]);
if(or__3824__auto____6746)
{return or__3824__auto____6746;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____6751 = coll;
if(and__3822__auto____6751)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____6751;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2693__auto____6752 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6753 = (cljs.core._assoc_n[goog.typeOf(x__2693__auto____6752)]);
if(or__3824__auto____6753)
{return or__3824__auto____6753;
} else
{var or__3824__auto____6754 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____6754)
{return or__3824__auto____6754;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____6759 = o;
if(and__3822__auto____6759)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____6759;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2693__auto____6760 = (((o == null))?null:o);
return (function (){var or__3824__auto____6761 = (cljs.core._deref[goog.typeOf(x__2693__auto____6760)]);
if(or__3824__auto____6761)
{return or__3824__auto____6761;
} else
{var or__3824__auto____6762 = (cljs.core._deref["_"]);
if(or__3824__auto____6762)
{return or__3824__auto____6762;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____6767 = o;
if(and__3822__auto____6767)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____6767;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2693__auto____6768 = (((o == null))?null:o);
return (function (){var or__3824__auto____6769 = (cljs.core._deref_with_timeout[goog.typeOf(x__2693__auto____6768)]);
if(or__3824__auto____6769)
{return or__3824__auto____6769;
} else
{var or__3824__auto____6770 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____6770)
{return or__3824__auto____6770;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____6775 = o;
if(and__3822__auto____6775)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____6775;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2693__auto____6776 = (((o == null))?null:o);
return (function (){var or__3824__auto____6777 = (cljs.core._meta[goog.typeOf(x__2693__auto____6776)]);
if(or__3824__auto____6777)
{return or__3824__auto____6777;
} else
{var or__3824__auto____6778 = (cljs.core._meta["_"]);
if(or__3824__auto____6778)
{return or__3824__auto____6778;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____6783 = o;
if(and__3822__auto____6783)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____6783;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2693__auto____6784 = (((o == null))?null:o);
return (function (){var or__3824__auto____6785 = (cljs.core._with_meta[goog.typeOf(x__2693__auto____6784)]);
if(or__3824__auto____6785)
{return or__3824__auto____6785;
} else
{var or__3824__auto____6786 = (cljs.core._with_meta["_"]);
if(or__3824__auto____6786)
{return or__3824__auto____6786;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3822__auto____6795 = coll;
if(and__3822__auto____6795)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____6795;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2693__auto____6796 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6797 = (cljs.core._reduce[goog.typeOf(x__2693__auto____6796)]);
if(or__3824__auto____6797)
{return or__3824__auto____6797;
} else
{var or__3824__auto____6798 = (cljs.core._reduce["_"]);
if(or__3824__auto____6798)
{return or__3824__auto____6798;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____6799 = coll;
if(and__3822__auto____6799)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____6799;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2693__auto____6800 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6801 = (cljs.core._reduce[goog.typeOf(x__2693__auto____6800)]);
if(or__3824__auto____6801)
{return or__3824__auto____6801;
} else
{var or__3824__auto____6802 = (cljs.core._reduce["_"]);
if(or__3824__auto____6802)
{return or__3824__auto____6802;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3822__auto____6807 = coll;
if(and__3822__auto____6807)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____6807;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2693__auto____6808 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6809 = (cljs.core._kv_reduce[goog.typeOf(x__2693__auto____6808)]);
if(or__3824__auto____6809)
{return or__3824__auto____6809;
} else
{var or__3824__auto____6810 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____6810)
{return or__3824__auto____6810;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____6815 = o;
if(and__3822__auto____6815)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____6815;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2693__auto____6816 = (((o == null))?null:o);
return (function (){var or__3824__auto____6817 = (cljs.core._equiv[goog.typeOf(x__2693__auto____6816)]);
if(or__3824__auto____6817)
{return or__3824__auto____6817;
} else
{var or__3824__auto____6818 = (cljs.core._equiv["_"]);
if(or__3824__auto____6818)
{return or__3824__auto____6818;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____6823 = o;
if(and__3822__auto____6823)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____6823;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2693__auto____6824 = (((o == null))?null:o);
return (function (){var or__3824__auto____6825 = (cljs.core._hash[goog.typeOf(x__2693__auto____6824)]);
if(or__3824__auto____6825)
{return or__3824__auto____6825;
} else
{var or__3824__auto____6826 = (cljs.core._hash["_"]);
if(or__3824__auto____6826)
{return or__3824__auto____6826;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____6831 = o;
if(and__3822__auto____6831)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____6831;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2693__auto____6832 = (((o == null))?null:o);
return (function (){var or__3824__auto____6833 = (cljs.core._seq[goog.typeOf(x__2693__auto____6832)]);
if(or__3824__auto____6833)
{return or__3824__auto____6833;
} else
{var or__3824__auto____6834 = (cljs.core._seq["_"]);
if(or__3824__auto____6834)
{return or__3824__auto____6834;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IList = {};
cljs.core.IRecord = {};
cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3822__auto____6839 = coll;
if(and__3822__auto____6839)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____6839;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2693__auto____6840 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6841 = (cljs.core._rseq[goog.typeOf(x__2693__auto____6840)]);
if(or__3824__auto____6841)
{return or__3824__auto____6841;
} else
{var or__3824__auto____6842 = (cljs.core._rseq["_"]);
if(or__3824__auto____6842)
{return or__3824__auto____6842;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____6847 = coll;
if(and__3822__auto____6847)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____6847;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2693__auto____6848 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6849 = (cljs.core._sorted_seq[goog.typeOf(x__2693__auto____6848)]);
if(or__3824__auto____6849)
{return or__3824__auto____6849;
} else
{var or__3824__auto____6850 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____6850)
{return or__3824__auto____6850;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____6855 = coll;
if(and__3822__auto____6855)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____6855;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2693__auto____6856 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6857 = (cljs.core._sorted_seq_from[goog.typeOf(x__2693__auto____6856)]);
if(or__3824__auto____6857)
{return or__3824__auto____6857;
} else
{var or__3824__auto____6858 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____6858)
{return or__3824__auto____6858;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____6863 = coll;
if(and__3822__auto____6863)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____6863;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2693__auto____6864 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6865 = (cljs.core._entry_key[goog.typeOf(x__2693__auto____6864)]);
if(or__3824__auto____6865)
{return or__3824__auto____6865;
} else
{var or__3824__auto____6866 = (cljs.core._entry_key["_"]);
if(or__3824__auto____6866)
{return or__3824__auto____6866;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____6871 = coll;
if(and__3822__auto____6871)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____6871;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2693__auto____6872 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6873 = (cljs.core._comparator[goog.typeOf(x__2693__auto____6872)]);
if(or__3824__auto____6873)
{return or__3824__auto____6873;
} else
{var or__3824__auto____6874 = (cljs.core._comparator["_"]);
if(or__3824__auto____6874)
{return or__3824__auto____6874;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____6879 = o;
if(and__3822__auto____6879)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____6879;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2693__auto____6880 = (((o == null))?null:o);
return (function (){var or__3824__auto____6881 = (cljs.core._pr_seq[goog.typeOf(x__2693__auto____6880)]);
if(or__3824__auto____6881)
{return or__3824__auto____6881;
} else
{var or__3824__auto____6882 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____6882)
{return or__3824__auto____6882;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____6887 = d;
if(and__3822__auto____6887)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____6887;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2693__auto____6888 = (((d == null))?null:d);
return (function (){var or__3824__auto____6889 = (cljs.core._realized_QMARK_[goog.typeOf(x__2693__auto____6888)]);
if(or__3824__auto____6889)
{return or__3824__auto____6889;
} else
{var or__3824__auto____6890 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____6890)
{return or__3824__auto____6890;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____6895 = this$;
if(and__3822__auto____6895)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____6895;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2693__auto____6896 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6897 = (cljs.core._notify_watches[goog.typeOf(x__2693__auto____6896)]);
if(or__3824__auto____6897)
{return or__3824__auto____6897;
} else
{var or__3824__auto____6898 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____6898)
{return or__3824__auto____6898;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____6903 = this$;
if(and__3822__auto____6903)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____6903;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2693__auto____6904 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6905 = (cljs.core._add_watch[goog.typeOf(x__2693__auto____6904)]);
if(or__3824__auto____6905)
{return or__3824__auto____6905;
} else
{var or__3824__auto____6906 = (cljs.core._add_watch["_"]);
if(or__3824__auto____6906)
{return or__3824__auto____6906;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____6911 = this$;
if(and__3822__auto____6911)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____6911;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2693__auto____6912 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6913 = (cljs.core._remove_watch[goog.typeOf(x__2693__auto____6912)]);
if(or__3824__auto____6913)
{return or__3824__auto____6913;
} else
{var or__3824__auto____6914 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____6914)
{return or__3824__auto____6914;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____6919 = coll;
if(and__3822__auto____6919)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____6919;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2693__auto____6920 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6921 = (cljs.core._as_transient[goog.typeOf(x__2693__auto____6920)]);
if(or__3824__auto____6921)
{return or__3824__auto____6921;
} else
{var or__3824__auto____6922 = (cljs.core._as_transient["_"]);
if(or__3824__auto____6922)
{return or__3824__auto____6922;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____6927 = tcoll;
if(and__3822__auto____6927)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____6927;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2693__auto____6928 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6929 = (cljs.core._conj_BANG_[goog.typeOf(x__2693__auto____6928)]);
if(or__3824__auto____6929)
{return or__3824__auto____6929;
} else
{var or__3824__auto____6930 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____6930)
{return or__3824__auto____6930;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____6935 = tcoll;
if(and__3822__auto____6935)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____6935;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2693__auto____6936 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6937 = (cljs.core._persistent_BANG_[goog.typeOf(x__2693__auto____6936)]);
if(or__3824__auto____6937)
{return or__3824__auto____6937;
} else
{var or__3824__auto____6938 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____6938)
{return or__3824__auto____6938;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____6943 = tcoll;
if(and__3822__auto____6943)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____6943;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2693__auto____6944 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6945 = (cljs.core._assoc_BANG_[goog.typeOf(x__2693__auto____6944)]);
if(or__3824__auto____6945)
{return or__3824__auto____6945;
} else
{var or__3824__auto____6946 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____6946)
{return or__3824__auto____6946;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____6951 = tcoll;
if(and__3822__auto____6951)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____6951;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2693__auto____6952 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6953 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2693__auto____6952)]);
if(or__3824__auto____6953)
{return or__3824__auto____6953;
} else
{var or__3824__auto____6954 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____6954)
{return or__3824__auto____6954;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____6959 = tcoll;
if(and__3822__auto____6959)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____6959;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2693__auto____6960 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6961 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2693__auto____6960)]);
if(or__3824__auto____6961)
{return or__3824__auto____6961;
} else
{var or__3824__auto____6962 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____6962)
{return or__3824__auto____6962;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____6967 = tcoll;
if(and__3822__auto____6967)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____6967;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2693__auto____6968 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6969 = (cljs.core._pop_BANG_[goog.typeOf(x__2693__auto____6968)]);
if(or__3824__auto____6969)
{return or__3824__auto____6969;
} else
{var or__3824__auto____6970 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____6970)
{return or__3824__auto____6970;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____6975 = tcoll;
if(and__3822__auto____6975)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____6975;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2693__auto____6976 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6977 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2693__auto____6976)]);
if(or__3824__auto____6977)
{return or__3824__auto____6977;
} else
{var or__3824__auto____6978 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____6978)
{return or__3824__auto____6978;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____6983 = x;
if(and__3822__auto____6983)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____6983;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2693__auto____6984 = (((x == null))?null:x);
return (function (){var or__3824__auto____6985 = (cljs.core._compare[goog.typeOf(x__2693__auto____6984)]);
if(or__3824__auto____6985)
{return or__3824__auto____6985;
} else
{var or__3824__auto____6986 = (cljs.core._compare["_"]);
if(or__3824__auto____6986)
{return or__3824__auto____6986;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____6991 = coll;
if(and__3822__auto____6991)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____6991;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2693__auto____6992 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6993 = (cljs.core._drop_first[goog.typeOf(x__2693__auto____6992)]);
if(or__3824__auto____6993)
{return or__3824__auto____6993;
} else
{var or__3824__auto____6994 = (cljs.core._drop_first["_"]);
if(or__3824__auto____6994)
{return or__3824__auto____6994;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____6999 = coll;
if(and__3822__auto____6999)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____6999;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2693__auto____7000 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7001 = (cljs.core._chunked_first[goog.typeOf(x__2693__auto____7000)]);
if(or__3824__auto____7001)
{return or__3824__auto____7001;
} else
{var or__3824__auto____7002 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____7002)
{return or__3824__auto____7002;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____7007 = coll;
if(and__3822__auto____7007)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____7007;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2693__auto____7008 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7009 = (cljs.core._chunked_rest[goog.typeOf(x__2693__auto____7008)]);
if(or__3824__auto____7009)
{return or__3824__auto____7009;
} else
{var or__3824__auto____7010 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____7010)
{return or__3824__auto____7010;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____7015 = coll;
if(and__3822__auto____7015)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____7015;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2693__auto____7016 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7017 = (cljs.core._chunked_next[goog.typeOf(x__2693__auto____7016)]);
if(or__3824__auto____7017)
{return or__3824__auto____7017;
} else
{var or__3824__auto____7018 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____7018)
{return or__3824__auto____7018;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3824__auto____7020 = (x === y);
if(or__3824__auto____7020)
{return or__3824__auto____7020;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__7021__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7022 = y;
var G__7023 = cljs.core.first.call(null,more);
var G__7024 = cljs.core.next.call(null,more);
x = G__7022;
y = G__7023;
more = G__7024;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7021 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7021__delegate.call(this, x, y, more);
};
G__7021.cljs$lang$maxFixedArity = 2;
G__7021.cljs$lang$applyTo = (function (arglist__7025){
var x = cljs.core.first(arglist__7025);
var y = cljs.core.first(cljs.core.next(arglist__7025));
var more = cljs.core.rest(cljs.core.next(arglist__7025));
return G__7021__delegate(x, y, more);
});
G__7021.cljs$lang$arity$variadic = G__7021__delegate;
return G__7021;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.type = (function type(x){
if((x == null))
{return null;
} else
{return x.constructor;
}
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__7026 = null;
var G__7026__2 = (function (o,k){
return null;
});
var G__7026__3 = (function (o,k,not_found){
return not_found;
});
G__7026 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__7026__2.call(this,o,k);
case 3:
return G__7026__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7026;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.INext["null"] = true);
(cljs.core._next["null"] = (function (_){
return null;
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__7027 = null;
var G__7027__2 = (function (_,f){
return f.call(null);
});
var G__7027__3 = (function (_,f,start){
return start;
});
G__7027 = function(_,f,start){
switch(arguments.length){
case 2:
return G__7027__2.call(this,_,f);
case 3:
return G__7027__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7027;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__7028 = null;
var G__7028__2 = (function (_,n){
return null;
});
var G__7028__3 = (function (_,n,not_found){
return not_found;
});
G__7028 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__7028__2.call(this,_,n);
case 3:
return G__7028__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7028;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var and__3822__auto____7029 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____7029)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____7029;
}
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
if((o === true))
{return 1;
} else
{return 0;
}
}));
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){
return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt__7042 = cljs.core._count.call(null,cicoll);
if((cnt__7042 === 0))
{return f.call(null);
} else
{var val__7043 = cljs.core._nth.call(null,cicoll,0);
var n__7044 = 1;
while(true){
if((n__7044 < cnt__7042))
{var nval__7045 = f.call(null,val__7043,cljs.core._nth.call(null,cicoll,n__7044));
if(cljs.core.reduced_QMARK_.call(null,nval__7045))
{return cljs.core.deref.call(null,nval__7045);
} else
{{
var G__7054 = nval__7045;
var G__7055 = (n__7044 + 1);
val__7043 = G__7054;
n__7044 = G__7055;
continue;
}
}
} else
{return val__7043;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__7046 = cljs.core._count.call(null,cicoll);
var val__7047 = val;
var n__7048 = 0;
while(true){
if((n__7048 < cnt__7046))
{var nval__7049 = f.call(null,val__7047,cljs.core._nth.call(null,cicoll,n__7048));
if(cljs.core.reduced_QMARK_.call(null,nval__7049))
{return cljs.core.deref.call(null,nval__7049);
} else
{{
var G__7056 = nval__7049;
var G__7057 = (n__7048 + 1);
val__7047 = G__7056;
n__7048 = G__7057;
continue;
}
}
} else
{return val__7047;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__7050 = cljs.core._count.call(null,cicoll);
var val__7051 = val;
var n__7052 = idx;
while(true){
if((n__7052 < cnt__7050))
{var nval__7053 = f.call(null,val__7051,cljs.core._nth.call(null,cicoll,n__7052));
if(cljs.core.reduced_QMARK_.call(null,nval__7053))
{return cljs.core.deref.call(null,nval__7053);
} else
{{
var G__7058 = nval__7053;
var G__7059 = (n__7052 + 1);
val__7051 = G__7058;
n__7052 = G__7059;
continue;
}
}
} else
{return val__7051;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt__7072 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__7073 = (arr[0]);
var n__7074 = 1;
while(true){
if((n__7074 < cnt__7072))
{var nval__7075 = f.call(null,val__7073,(arr[n__7074]));
if(cljs.core.reduced_QMARK_.call(null,nval__7075))
{return cljs.core.deref.call(null,nval__7075);
} else
{{
var G__7084 = nval__7075;
var G__7085 = (n__7074 + 1);
val__7073 = G__7084;
n__7074 = G__7085;
continue;
}
}
} else
{return val__7073;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__7076 = arr.length;
var val__7077 = val;
var n__7078 = 0;
while(true){
if((n__7078 < cnt__7076))
{var nval__7079 = f.call(null,val__7077,(arr[n__7078]));
if(cljs.core.reduced_QMARK_.call(null,nval__7079))
{return cljs.core.deref.call(null,nval__7079);
} else
{{
var G__7086 = nval__7079;
var G__7087 = (n__7078 + 1);
val__7077 = G__7086;
n__7078 = G__7087;
continue;
}
}
} else
{return val__7077;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__7080 = arr.length;
var val__7081 = val;
var n__7082 = idx;
while(true){
if((n__7082 < cnt__7080))
{var nval__7083 = f.call(null,val__7081,(arr[n__7082]));
if(cljs.core.reduced_QMARK_.call(null,nval__7083))
{return cljs.core.deref.call(null,nval__7083);
} else
{{
var G__7088 = nval__7083;
var G__7089 = (n__7082 + 1);
val__7081 = G__7088;
n__7082 = G__7089;
continue;
}
}
} else
{return val__7081;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
array_reduce.cljs$lang$arity$2 = array_reduce__2;
array_reduce.cljs$lang$arity$3 = array_reduce__3;
array_reduce.cljs$lang$arity$4 = array_reduce__4;
return array_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199546;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7090 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__7091 = this;
if(((this__7091.i + 1) < this__7091.a.length))
{return (new cljs.core.IndexedSeq(this__7091.a,(this__7091.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7092 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__7093 = this;
var c__7094 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__7094 > 0))
{return (new cljs.core.RSeq(coll,(c__7094 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__7095 = this;
var this__7096 = this;
return cljs.core.pr_str.call(null,this__7096);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7097 = this;
if(cljs.core.counted_QMARK_.call(null,this__7097.a))
{return cljs.core.ci_reduce.call(null,this__7097.a,f,(this__7097.a[this__7097.i]),(this__7097.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__7097.a[this__7097.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7098 = this;
if(cljs.core.counted_QMARK_.call(null,this__7098.a))
{return cljs.core.ci_reduce.call(null,this__7098.a,f,start,this__7098.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__7099 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7100 = this;
return (this__7100.a.length - this__7100.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__7101 = this;
return (this__7101.a[this__7101.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__7102 = this;
if(((this__7102.i + 1) < this__7102.a.length))
{return (new cljs.core.IndexedSeq(this__7102.a,(this__7102.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7103 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7104 = this;
var i__7105 = (n + this__7104.i);
if((i__7105 < this__7104.a.length))
{return (this__7104.a[i__7105]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7106 = this;
var i__7107 = (n + this__7106.i);
if((i__7107 < this__7106.a.length))
{return (this__7106.a[i__7107]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.call(null,prim,0);
});
var prim_seq__2 = (function (prim,i){
if((prim.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw('Invalid arity: ' + arguments.length);
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.call(null,array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw('Invalid arity: ' + arguments.length);
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__7108 = null;
var G__7108__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__7108__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__7108 = function(array,f,start){
switch(arguments.length){
case 2:
return G__7108__2.call(this,array,f);
case 3:
return G__7108__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7108;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7109 = null;
var G__7109__2 = (function (array,k){
return (array[k]);
});
var G__7109__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__7109 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__7109__2.call(this,array,k);
case 3:
return G__7109__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7109;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7110 = null;
var G__7110__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__7110__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__7110 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__7110__2.call(this,array,n);
case 3:
return G__7110__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7110;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7111 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7112 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__7113 = this;
var this__7114 = this;
return cljs.core.pr_str.call(null,this__7114);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7115 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7116 = this;
return (this__7116.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7117 = this;
return cljs.core._nth.call(null,this__7117.ci,this__7117.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7118 = this;
if((this__7118.i > 0))
{return (new cljs.core.RSeq(this__7118.ci,(this__7118.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7119 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__7120 = this;
return (new cljs.core.RSeq(this__7120.ci,this__7120.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7121 = this;
return this__7121.meta;
});
cljs.core.RSeq;
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__7125__7126 = coll;
if(G__7125__7126)
{if((function (){var or__3824__auto____7127 = (G__7125__7126.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____7127)
{return or__3824__auto____7127;
} else
{return G__7125__7126.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__7125__7126.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7125__7126);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7125__7126);
}
})())
{return coll;
} else
{return cljs.core._seq.call(null,coll);
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__7132__7133 = coll;
if(G__7132__7133)
{if((function (){var or__3824__auto____7134 = (G__7132__7133.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7134)
{return or__3824__auto____7134;
} else
{return G__7132__7133.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7132__7133.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7132__7133);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7132__7133);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__7135 = cljs.core.seq.call(null,coll);
if((s__7135 == null))
{return null;
} else
{return cljs.core._first.call(null,s__7135);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null)))
{if((function (){var G__7140__7141 = coll;
if(G__7140__7141)
{if((function (){var or__3824__auto____7142 = (G__7140__7141.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7142)
{return or__3824__auto____7142;
} else
{return G__7140__7141.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7140__7141.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7140__7141);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7140__7141);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__7143 = cljs.core.seq.call(null,coll);
if(!((s__7143 == null)))
{return cljs.core._rest.call(null,s__7143);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__7147__7148 = coll;
if(G__7147__7148)
{if((function (){var or__3824__auto____7149 = (G__7147__7148.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____7149)
{return or__3824__auto____7149;
} else
{return G__7147__7148.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__7147__7148.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__7147__7148);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__7147__7148);
}
})())
{return cljs.core._next.call(null,coll);
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn__7151 = cljs.core.next.call(null,s);
if(!((sn__7151 == null)))
{{
var G__7152 = sn__7151;
s = G__7152;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3 = (function() { 
var G__7153__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7154 = conj.call(null,coll,x);
var G__7155 = cljs.core.first.call(null,xs);
var G__7156 = cljs.core.next.call(null,xs);
coll = G__7154;
x = G__7155;
xs = G__7156;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__7153 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7153__delegate.call(this, coll, x, xs);
};
G__7153.cljs$lang$maxFixedArity = 2;
G__7153.cljs$lang$applyTo = (function (arglist__7157){
var coll = cljs.core.first(arglist__7157);
var x = cljs.core.first(cljs.core.next(arglist__7157));
var xs = cljs.core.rest(cljs.core.next(arglist__7157));
return G__7153__delegate(coll, x, xs);
});
G__7153.cljs$lang$arity$variadic = G__7153__delegate;
return G__7153;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s__7160 = cljs.core.seq.call(null,coll);
var acc__7161 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__7160))
{return (acc__7161 + cljs.core._count.call(null,s__7160));
} else
{{
var G__7162 = cljs.core.next.call(null,s__7160);
var G__7163 = (acc__7161 + 1);
s__7160 = G__7162;
acc__7161 = G__7163;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_.call(null,coll))
{return cljs.core._count.call(null,coll);
} else
{return cljs.core.accumulating_seq_count.call(null,coll);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1));
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1),not_found);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll == null))
{return null;
} else
{if((function (){var G__7170__7171 = coll;
if(G__7170__7171)
{if((function (){var or__3824__auto____7172 = (G__7170__7171.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7172)
{return or__3824__auto____7172;
} else
{return G__7170__7171.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7170__7171.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7170__7171);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7170__7171);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!((coll == null)))
{if((function (){var G__7173__7174 = coll;
if(G__7173__7174)
{if((function (){var or__3824__auto____7175 = (G__7173__7174.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7175)
{return or__3824__auto____7175;
} else
{return G__7173__7174.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7173__7174.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7173__7174);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7173__7174);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__4 = (function() { 
var G__7178__delegate = function (coll,k,v,kvs){
while(true){
var ret__7177 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__7179 = ret__7177;
var G__7180 = cljs.core.first.call(null,kvs);
var G__7181 = cljs.core.second.call(null,kvs);
var G__7182 = cljs.core.nnext.call(null,kvs);
coll = G__7179;
k = G__7180;
v = G__7181;
kvs = G__7182;
continue;
}
} else
{return ret__7177;
}
break;
}
};
var G__7178 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7178__delegate.call(this, coll, k, v, kvs);
};
G__7178.cljs$lang$maxFixedArity = 3;
G__7178.cljs$lang$applyTo = (function (arglist__7183){
var coll = cljs.core.first(arglist__7183);
var k = cljs.core.first(cljs.core.next(arglist__7183));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7183)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7183)));
return G__7178__delegate(coll, k, v, kvs);
});
G__7178.cljs$lang$arity$variadic = G__7178__delegate;
return G__7178;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3 = (function() { 
var G__7186__delegate = function (coll,k,ks){
while(true){
var ret__7185 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7187 = ret__7185;
var G__7188 = cljs.core.first.call(null,ks);
var G__7189 = cljs.core.next.call(null,ks);
coll = G__7187;
k = G__7188;
ks = G__7189;
continue;
}
} else
{return ret__7185;
}
break;
}
};
var G__7186 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7186__delegate.call(this, coll, k, ks);
};
G__7186.cljs$lang$maxFixedArity = 2;
G__7186.cljs$lang$applyTo = (function (arglist__7190){
var coll = cljs.core.first(arglist__7190);
var k = cljs.core.first(cljs.core.next(arglist__7190));
var ks = cljs.core.rest(cljs.core.next(arglist__7190));
return G__7186__delegate(coll, k, ks);
});
G__7186.cljs$lang$arity$variadic = G__7186__delegate;
return G__7186;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var G__7194__7195 = o;
if(G__7194__7195)
{if((function (){var or__3824__auto____7196 = (G__7194__7195.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____7196)
{return or__3824__auto____7196;
} else
{return G__7194__7195.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__7194__7195.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7194__7195);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7194__7195);
}
})())
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3 = (function() { 
var G__7199__delegate = function (coll,k,ks){
while(true){
var ret__7198 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7200 = ret__7198;
var G__7201 = cljs.core.first.call(null,ks);
var G__7202 = cljs.core.next.call(null,ks);
coll = G__7200;
k = G__7201;
ks = G__7202;
continue;
}
} else
{return ret__7198;
}
break;
}
};
var G__7199 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7199__delegate.call(this, coll, k, ks);
};
G__7199.cljs$lang$maxFixedArity = 2;
G__7199.cljs$lang$applyTo = (function (arglist__7203){
var coll = cljs.core.first(arglist__7203);
var k = cljs.core.first(cljs.core.next(arglist__7203));
var ks = cljs.core.rest(cljs.core.next(arglist__7203));
return G__7199__delegate(coll, k, ks);
});
G__7199.cljs$lang$arity$variadic = G__7199__delegate;
return G__7199;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h__7205 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__7205);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__7205;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__7207 = (cljs.core.string_hash_cache[k]);
if(!((h__7207 == null)))
{return h__7207;
} else
{return cljs.core.add_to_string_hash_cache.call(null,k);
}
});
cljs.core.hash = (function() {
var hash = null;
var hash__1 = (function (o){
return hash.call(null,o,true);
});
var hash__2 = (function (o,check_cache){
if((function (){var and__3822__auto____7209 = goog.isString(o);
if(and__3822__auto____7209)
{return check_cache;
} else
{return and__3822__auto____7209;
}
})())
{return cljs.core.check_string_hash_cache.call(null,o);
} else
{return cljs.core._hash.call(null,o);
}
});
hash = function(o,check_cache){
switch(arguments.length){
case 1:
return hash__1.call(this,o);
case 2:
return hash__2.call(this,o,check_cache);
}
throw('Invalid arity: ' + arguments.length);
};
hash.cljs$lang$arity$1 = hash__1;
hash.cljs$lang$arity$2 = hash__2;
return hash;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7213__7214 = x;
if(G__7213__7214)
{if((function (){var or__3824__auto____7215 = (G__7213__7214.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____7215)
{return or__3824__auto____7215;
} else
{return G__7213__7214.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__7213__7214.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7213__7214);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7213__7214);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7219__7220 = x;
if(G__7219__7220)
{if((function (){var or__3824__auto____7221 = (G__7219__7220.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____7221)
{return or__3824__auto____7221;
} else
{return G__7219__7220.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__7219__7220.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7219__7220);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7219__7220);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__7225__7226 = x;
if(G__7225__7226)
{if((function (){var or__3824__auto____7227 = (G__7225__7226.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____7227)
{return or__3824__auto____7227;
} else
{return G__7225__7226.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__7225__7226.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7225__7226);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7225__7226);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__7231__7232 = x;
if(G__7231__7232)
{if((function (){var or__3824__auto____7233 = (G__7231__7232.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____7233)
{return or__3824__auto____7233;
} else
{return G__7231__7232.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__7231__7232.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7231__7232);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7231__7232);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__7237__7238 = x;
if(G__7237__7238)
{if((function (){var or__3824__auto____7239 = (G__7237__7238.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____7239)
{return or__3824__auto____7239;
} else
{return G__7237__7238.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__7237__7238.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7237__7238);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7237__7238);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__7243__7244 = x;
if(G__7243__7244)
{if((function (){var or__3824__auto____7245 = (G__7243__7244.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7245)
{return or__3824__auto____7245;
} else
{return G__7243__7244.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7243__7244.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7243__7244);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7243__7244);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__7249__7250 = x;
if(G__7249__7250)
{if((function (){var or__3824__auto____7251 = (G__7249__7250.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7251)
{return or__3824__auto____7251;
} else
{return G__7249__7250.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7249__7250.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7249__7250);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7249__7250);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7255__7256 = x;
if(G__7255__7256)
{if((function (){var or__3824__auto____7257 = (G__7255__7256.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____7257)
{return or__3824__auto____7257;
} else
{return G__7255__7256.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__7255__7256.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7255__7256);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7255__7256);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__7261__7262 = x;
if(G__7261__7262)
{if((function (){var or__3824__auto____7263 = (G__7261__7262.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____7263)
{return or__3824__auto____7263;
} else
{return G__7261__7262.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__7261__7262.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7261__7262);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7261__7262);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__7267__7268 = x;
if(G__7267__7268)
{if(cljs.core.truth_((function (){var or__3824__auto____7269 = null;
if(cljs.core.truth_(or__3824__auto____7269))
{return or__3824__auto____7269;
} else
{return G__7267__7268.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__7267__7268.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7267__7268);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7267__7268);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__7270__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__7270 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7270__delegate.call(this, keyvals);
};
G__7270.cljs$lang$maxFixedArity = 0;
G__7270.cljs$lang$applyTo = (function (arglist__7271){
var keyvals = cljs.core.seq(arglist__7271);;
return G__7270__delegate(keyvals);
});
G__7270.cljs$lang$arity$variadic = G__7270__delegate;
return G__7270;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys__7273 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__7273.push(key);
}));
return keys__7273;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__7277 = i;
var j__7278 = j;
var len__7279 = len;
while(true){
if((len__7279 === 0))
{return to;
} else
{(to[j__7278] = (from[i__7277]));
{
var G__7280 = (i__7277 + 1);
var G__7281 = (j__7278 + 1);
var G__7282 = (len__7279 - 1);
i__7277 = G__7280;
j__7278 = G__7281;
len__7279 = G__7282;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__7286 = (i + (len - 1));
var j__7287 = (j + (len - 1));
var len__7288 = len;
while(true){
if((len__7288 === 0))
{return to;
} else
{(to[j__7287] = (from[i__7286]));
{
var G__7289 = (i__7286 - 1);
var G__7290 = (j__7287 - 1);
var G__7291 = (len__7288 - 1);
i__7286 = G__7289;
j__7287 = G__7290;
len__7288 = G__7291;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__7295__7296 = s;
if(G__7295__7296)
{if((function (){var or__3824__auto____7297 = (G__7295__7296.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7297)
{return or__3824__auto____7297;
} else
{return G__7295__7296.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7295__7296.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7295__7296);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7295__7296);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__7301__7302 = s;
if(G__7301__7302)
{if((function (){var or__3824__auto____7303 = (G__7301__7302.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____7303)
{return or__3824__auto____7303;
} else
{return G__7301__7302.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__7301__7302.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7301__7302);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7301__7302);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3822__auto____7306 = goog.isString(x);
if(and__3822__auto____7306)
{return !((function (){var or__3824__auto____7307 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____7307)
{return or__3824__auto____7307;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____7306;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____7309 = goog.isString(x);
if(and__3822__auto____7309)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____7309;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____7311 = goog.isString(x);
if(and__3822__auto____7311)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____7311;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____7316 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____7316)
{return or__3824__auto____7316;
} else
{var G__7317__7318 = f;
if(G__7317__7318)
{if((function (){var or__3824__auto____7319 = (G__7317__7318.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____7319)
{return or__3824__auto____7319;
} else
{return G__7317__7318.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__7317__7318.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7317__7318);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7317__7318);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____7321 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____7321)
{return (n == n.toFixed());
} else
{return and__3822__auto____7321;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3822__auto____7324 = coll;
if(cljs.core.truth_(and__3822__auto____7324))
{var and__3822__auto____7325 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____7325)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____7325;
}
} else
{return and__3822__auto____7324;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)], true);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__7334__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__7330 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__7331 = more;
while(true){
var x__7332 = cljs.core.first.call(null,xs__7331);
var etc__7333 = cljs.core.next.call(null,xs__7331);
if(cljs.core.truth_(xs__7331))
{if(cljs.core.contains_QMARK_.call(null,s__7330,x__7332))
{return false;
} else
{{
var G__7335 = cljs.core.conj.call(null,s__7330,x__7332);
var G__7336 = etc__7333;
s__7330 = G__7335;
xs__7331 = G__7336;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__7334 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7334__delegate.call(this, x, y, more);
};
G__7334.cljs$lang$maxFixedArity = 2;
G__7334.cljs$lang$applyTo = (function (arglist__7337){
var x = cljs.core.first(arglist__7337);
var y = cljs.core.first(cljs.core.next(arglist__7337));
var more = cljs.core.rest(cljs.core.next(arglist__7337));
return G__7334__delegate(x, y, more);
});
G__7334.cljs$lang$arity$variadic = G__7334__delegate;
return G__7334;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y))
{return 0;
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{if((function (){var G__7341__7342 = x;
if(G__7341__7342)
{if(cljs.core.truth_((function (){var or__3824__auto____7343 = null;
if(cljs.core.truth_(or__3824__auto____7343))
{return or__3824__auto____7343;
} else
{return G__7341__7342.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__7341__7342.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7341__7342);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7341__7342);
}
})())
{return cljs.core._compare.call(null,x,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl__7348 = cljs.core.count.call(null,xs);
var yl__7349 = cljs.core.count.call(null,ys);
if((xl__7348 < yl__7349))
{return -1;
} else
{if((xl__7348 > yl__7349))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__7348,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__7350 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____7351 = (d__7350 === 0);
if(and__3822__auto____7351)
{return ((n + 1) < len);
} else
{return and__3822__auto____7351;
}
})())
{{
var G__7352 = xs;
var G__7353 = ys;
var G__7354 = len;
var G__7355 = (n + 1);
xs = G__7352;
ys = G__7353;
len = G__7354;
n = G__7355;
continue;
}
} else
{return d__7350;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw('Invalid arity: ' + arguments.length);
};
compare_indexed.cljs$lang$arity$2 = compare_indexed__2;
compare_indexed.cljs$lang$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__7357 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__7357))
{return r__7357;
} else
{if(cljs.core.truth_(r__7357))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq.call(null,coll))
{var a__7359 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__7359,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__7359);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__3971__auto____7365 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____7365)
{var s__7366 = temp__3971__auto____7365;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__7366),cljs.core.next.call(null,s__7366));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__7367 = val;
var coll__7368 = cljs.core.seq.call(null,coll);
while(true){
if(coll__7368)
{var nval__7369 = f.call(null,val__7367,cljs.core.first.call(null,coll__7368));
if(cljs.core.reduced_QMARK_.call(null,nval__7369))
{return cljs.core.deref.call(null,nval__7369);
} else
{{
var G__7370 = nval__7369;
var G__7371 = cljs.core.next.call(null,coll__7368);
val__7367 = G__7370;
coll__7368 = G__7371;
continue;
}
}
} else
{return val__7367;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a__7373 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__7373);
return cljs.core.vec.call(null,a__7373);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__7380__7381 = coll;
if(G__7380__7381)
{if((function (){var or__3824__auto____7382 = (G__7380__7381.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7382)
{return or__3824__auto____7382;
} else
{return G__7380__7381.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7380__7381.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7380__7381);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7380__7381);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__7383__7384 = coll;
if(G__7383__7384)
{if((function (){var or__3824__auto____7385 = (G__7383__7384.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7385)
{return or__3824__auto____7385;
} else
{return G__7383__7384.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7383__7384.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7383__7384);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7383__7384);
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{return cljs.core.seq_reduce.call(null,f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce.call(null,coll,f,init);
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__7386 = this;
return this__7386.val;
});
cljs.core.Reduced;
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_.call(null,cljs.core.Reduced,r);
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__7387__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__7387 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7387__delegate.call(this, x, y, more);
};
G__7387.cljs$lang$maxFixedArity = 2;
G__7387.cljs$lang$applyTo = (function (arglist__7388){
var x = cljs.core.first(arglist__7388);
var y = cljs.core.first(cljs.core.next(arglist__7388));
var more = cljs.core.rest(cljs.core.next(arglist__7388));
return G__7387__delegate(x, y, more);
});
G__7387.cljs$lang$arity$variadic = G__7387__delegate;
return G__7387;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__7389__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__7389 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7389__delegate.call(this, x, y, more);
};
G__7389.cljs$lang$maxFixedArity = 2;
G__7389.cljs$lang$applyTo = (function (arglist__7390){
var x = cljs.core.first(arglist__7390);
var y = cljs.core.first(cljs.core.next(arglist__7390));
var more = cljs.core.rest(cljs.core.next(arglist__7390));
return G__7389__delegate(x, y, more);
});
G__7389.cljs$lang$arity$variadic = G__7389__delegate;
return G__7389;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__7391__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__7391 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7391__delegate.call(this, x, y, more);
};
G__7391.cljs$lang$maxFixedArity = 2;
G__7391.cljs$lang$applyTo = (function (arglist__7392){
var x = cljs.core.first(arglist__7392);
var y = cljs.core.first(cljs.core.next(arglist__7392));
var more = cljs.core.rest(cljs.core.next(arglist__7392));
return G__7391__delegate(x, y, more);
});
G__7391.cljs$lang$arity$variadic = G__7391__delegate;
return G__7391;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__7393__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__7393 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7393__delegate.call(this, x, y, more);
};
G__7393.cljs$lang$maxFixedArity = 2;
G__7393.cljs$lang$applyTo = (function (arglist__7394){
var x = cljs.core.first(arglist__7394);
var y = cljs.core.first(cljs.core.next(arglist__7394));
var more = cljs.core.rest(cljs.core.next(arglist__7394));
return G__7393__delegate(x, y, more);
});
G__7393.cljs$lang$arity$variadic = G__7393__delegate;
return G__7393;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__7395__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__7396 = y;
var G__7397 = cljs.core.first.call(null,more);
var G__7398 = cljs.core.next.call(null,more);
x = G__7396;
y = G__7397;
more = G__7398;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7395 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7395__delegate.call(this, x, y, more);
};
G__7395.cljs$lang$maxFixedArity = 2;
G__7395.cljs$lang$applyTo = (function (arglist__7399){
var x = cljs.core.first(arglist__7399);
var y = cljs.core.first(cljs.core.next(arglist__7399));
var more = cljs.core.rest(cljs.core.next(arglist__7399));
return G__7395__delegate(x, y, more);
});
G__7395.cljs$lang$arity$variadic = G__7395__delegate;
return G__7395;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__7400__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__7401 = y;
var G__7402 = cljs.core.first.call(null,more);
var G__7403 = cljs.core.next.call(null,more);
x = G__7401;
y = G__7402;
more = G__7403;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7400 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7400__delegate.call(this, x, y, more);
};
G__7400.cljs$lang$maxFixedArity = 2;
G__7400.cljs$lang$applyTo = (function (arglist__7404){
var x = cljs.core.first(arglist__7404);
var y = cljs.core.first(cljs.core.next(arglist__7404));
var more = cljs.core.rest(cljs.core.next(arglist__7404));
return G__7400__delegate(x, y, more);
});
G__7400.cljs$lang$arity$variadic = G__7400__delegate;
return G__7400;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__7405__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__7406 = y;
var G__7407 = cljs.core.first.call(null,more);
var G__7408 = cljs.core.next.call(null,more);
x = G__7406;
y = G__7407;
more = G__7408;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7405 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7405__delegate.call(this, x, y, more);
};
G__7405.cljs$lang$maxFixedArity = 2;
G__7405.cljs$lang$applyTo = (function (arglist__7409){
var x = cljs.core.first(arglist__7409);
var y = cljs.core.first(cljs.core.next(arglist__7409));
var more = cljs.core.rest(cljs.core.next(arglist__7409));
return G__7405__delegate(x, y, more);
});
G__7405.cljs$lang$arity$variadic = G__7405__delegate;
return G__7405;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__7410__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__7411 = y;
var G__7412 = cljs.core.first.call(null,more);
var G__7413 = cljs.core.next.call(null,more);
x = G__7411;
y = G__7412;
more = G__7413;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7410 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7410__delegate.call(this, x, y, more);
};
G__7410.cljs$lang$maxFixedArity = 2;
G__7410.cljs$lang$applyTo = (function (arglist__7414){
var x = cljs.core.first(arglist__7414);
var y = cljs.core.first(cljs.core.next(arglist__7414));
var more = cljs.core.rest(cljs.core.next(arglist__7414));
return G__7410__delegate(x, y, more);
});
G__7410.cljs$lang$arity$variadic = G__7410__delegate;
return G__7410;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__7415__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__7415 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7415__delegate.call(this, x, y, more);
};
G__7415.cljs$lang$maxFixedArity = 2;
G__7415.cljs$lang$applyTo = (function (arglist__7416){
var x = cljs.core.first(arglist__7416);
var y = cljs.core.first(cljs.core.next(arglist__7416));
var more = cljs.core.rest(cljs.core.next(arglist__7416));
return G__7415__delegate(x, y, more);
});
G__7415.cljs$lang$arity$variadic = G__7415__delegate;
return G__7415;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__7417__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__7417 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7417__delegate.call(this, x, y, more);
};
G__7417.cljs$lang$maxFixedArity = 2;
G__7417.cljs$lang$applyTo = (function (arglist__7418){
var x = cljs.core.first(arglist__7418);
var y = cljs.core.first(cljs.core.next(arglist__7418));
var more = cljs.core.rest(cljs.core.next(arglist__7418));
return G__7417__delegate(x, y, more);
});
G__7417.cljs$lang$arity$variadic = G__7417__delegate;
return G__7417;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix.call(null,x);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__7420 = (n % d);
return cljs.core.fix.call(null,((n - rem__7420) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__7422 = cljs.core.quot.call(null,n,d);
return (n - (d * q__7422));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__7425 = (v - ((v >> 1) & 1431655765));
var v__7426 = ((v__7425 & 858993459) + ((v__7425 >> 2) & 858993459));
return ((((v__7426 + (v__7426 >> 4)) & 252645135) * 16843009) >> 24);
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__7427__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7428 = y;
var G__7429 = cljs.core.first.call(null,more);
var G__7430 = cljs.core.next.call(null,more);
x = G__7428;
y = G__7429;
more = G__7430;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7427 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7427__delegate.call(this, x, y, more);
};
G__7427.cljs$lang$maxFixedArity = 2;
G__7427.cljs$lang$applyTo = (function (arglist__7431){
var x = cljs.core.first(arglist__7431);
var y = cljs.core.first(cljs.core.next(arglist__7431));
var more = cljs.core.rest(cljs.core.next(arglist__7431));
return G__7427__delegate(x, y, more);
});
G__7427.cljs$lang$arity$variadic = G__7427__delegate;
return G__7427;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__7435 = n;
var xs__7436 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7437 = xs__7436;
if(and__3822__auto____7437)
{return (n__7435 > 0);
} else
{return and__3822__auto____7437;
}
})()))
{{
var G__7438 = (n__7435 - 1);
var G__7439 = cljs.core.next.call(null,xs__7436);
n__7435 = G__7438;
xs__7436 = G__7439;
continue;
}
} else
{return xs__7436;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__7440__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7441 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__7442 = cljs.core.next.call(null,more);
sb = G__7441;
more = G__7442;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__7440 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7440__delegate.call(this, x, ys);
};
G__7440.cljs$lang$maxFixedArity = 1;
G__7440.cljs$lang$applyTo = (function (arglist__7443){
var x = cljs.core.first(arglist__7443);
var ys = cljs.core.rest(arglist__7443);
return G__7440__delegate(x, ys);
});
G__7440.cljs$lang$arity$variadic = G__7440__delegate;
return G__7440;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_.call(null,x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__7444__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7445 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__7446 = cljs.core.next.call(null,more);
sb = G__7445;
more = G__7446;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__7444 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7444__delegate.call(this, x, ys);
};
G__7444.cljs$lang$maxFixedArity = 1;
G__7444.cljs$lang$applyTo = (function (arglist__7447){
var x = cljs.core.first(arglist__7447);
var ys = cljs.core.rest(arglist__7447);
return G__7444__delegate(x, ys);
});
G__7444.cljs$lang$arity$variadic = G__7444__delegate;
return G__7444;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Formats a string using goog.string.format.
* @param {...*} var_args
*/
cljs.core.format = (function() { 
var format__delegate = function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__7448){
var fmt = cljs.core.first(arglist__7448);
var args = cljs.core.rest(arglist__7448);
return format__delegate(fmt, args);
});
format.cljs$lang$arity$variadic = format__delegate;
return format;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_.call(null,name))
{name;
} else
{if(cljs.core.keyword_QMARK_.call(null,name))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__2 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.symbol_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__7451 = cljs.core.seq.call(null,x);
var ys__7452 = cljs.core.seq.call(null,y);
while(true){
if((xs__7451 == null))
{return (ys__7452 == null);
} else
{if((ys__7452 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__7451),cljs.core.first.call(null,ys__7452)))
{{
var G__7453 = cljs.core.next.call(null,xs__7451);
var G__7454 = cljs.core.next.call(null,ys__7452);
xs__7451 = G__7453;
ys__7452 = G__7454;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__7455_SHARP_,p2__7456_SHARP_){
return cljs.core.hash_combine.call(null,p1__7455_SHARP_,cljs.core.hash.call(null,p2__7456_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__7460 = 0;
var s__7461 = cljs.core.seq.call(null,m);
while(true){
if(s__7461)
{var e__7462 = cljs.core.first.call(null,s__7461);
{
var G__7463 = ((h__7460 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__7462)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__7462)))) % 4503599627370496);
var G__7464 = cljs.core.next.call(null,s__7461);
h__7460 = G__7463;
s__7461 = G__7464;
continue;
}
} else
{return h__7460;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__7468 = 0;
var s__7469 = cljs.core.seq.call(null,s);
while(true){
if(s__7469)
{var e__7470 = cljs.core.first.call(null,s__7469);
{
var G__7471 = ((h__7468 + cljs.core.hash.call(null,e__7470)) % 4503599627370496);
var G__7472 = cljs.core.next.call(null,s__7469);
h__7468 = G__7471;
s__7469 = G__7472;
continue;
}
} else
{return h__7468;
}
break;
}
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__7493__7494 = cljs.core.seq.call(null,fn_map);
if(G__7493__7494)
{var G__7496__7498 = cljs.core.first.call(null,G__7493__7494);
var vec__7497__7499 = G__7496__7498;
var key_name__7500 = cljs.core.nth.call(null,vec__7497__7499,0,null);
var f__7501 = cljs.core.nth.call(null,vec__7497__7499,1,null);
var G__7493__7502 = G__7493__7494;
var G__7496__7503 = G__7496__7498;
var G__7493__7504 = G__7493__7502;
while(true){
var vec__7505__7506 = G__7496__7503;
var key_name__7507 = cljs.core.nth.call(null,vec__7505__7506,0,null);
var f__7508 = cljs.core.nth.call(null,vec__7505__7506,1,null);
var G__7493__7509 = G__7493__7504;
var str_name__7510 = cljs.core.name.call(null,key_name__7507);
(obj[str_name__7510] = f__7508);
var temp__3974__auto____7511 = cljs.core.next.call(null,G__7493__7509);
if(temp__3974__auto____7511)
{var G__7493__7512 = temp__3974__auto____7511;
{
var G__7513 = cljs.core.first.call(null,G__7493__7512);
var G__7514 = G__7493__7512;
G__7496__7503 = G__7513;
G__7493__7504 = G__7514;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413358;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7515 = this;
var h__2522__auto____7516 = this__7515.__hash;
if(!((h__2522__auto____7516 == null)))
{return h__2522__auto____7516;
} else
{var h__2522__auto____7517 = cljs.core.hash_coll.call(null,coll);
this__7515.__hash = h__2522__auto____7517;
return h__2522__auto____7517;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7518 = this;
if((this__7518.count === 1))
{return null;
} else
{return this__7518.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7519 = this;
return (new cljs.core.List(this__7519.meta,o,coll,(this__7519.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__7520 = this;
var this__7521 = this;
return cljs.core.pr_str.call(null,this__7521);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7522 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7523 = this;
return this__7523.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7524 = this;
return this__7524.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7525 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7526 = this;
return this__7526.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7527 = this;
if((this__7527.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__7527.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7528 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7529 = this;
return (new cljs.core.List(meta,this__7529.first,this__7529.rest,this__7529.count,this__7529.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7530 = this;
return this__7530.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7531 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413326;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7532 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7533 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7534 = this;
return (new cljs.core.List(this__7534.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__7535 = this;
var this__7536 = this;
return cljs.core.pr_str.call(null,this__7536);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7537 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7538 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7539 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7540 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7541 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7542 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7543 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7544 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7545 = this;
return this__7545.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7546 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__7550__7551 = coll;
if(G__7550__7551)
{if((function (){var or__3824__auto____7552 = (G__7550__7551.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____7552)
{return or__3824__auto____7552;
} else
{return G__7550__7551.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__7550__7551.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7550__7551);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7550__7551);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_.call(null,coll))
{return cljs.core.rseq.call(null,coll);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() {
var list = null;
var list__0 = (function (){
return cljs.core.List.EMPTY;
});
var list__1 = (function (x){
return cljs.core.conj.call(null,cljs.core.List.EMPTY,x);
});
var list__2 = (function (x,y){
return cljs.core.conj.call(null,list.call(null,y),x);
});
var list__3 = (function (x,y,z){
return cljs.core.conj.call(null,list.call(null,y,z),x);
});
var list__4 = (function() { 
var G__7553__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__7553 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7553__delegate.call(this, x, y, z, items);
};
G__7553.cljs$lang$maxFixedArity = 3;
G__7553.cljs$lang$applyTo = (function (arglist__7554){
var x = cljs.core.first(arglist__7554);
var y = cljs.core.first(cljs.core.next(arglist__7554));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7554)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7554)));
return G__7553__delegate(x, y, z, items);
});
G__7553.cljs$lang$arity$variadic = G__7553__delegate;
return G__7553;
})()
;
list = function(x,y,z,var_args){
var items = var_args;
switch(arguments.length){
case 0:
return list__0.call(this);
case 1:
return list__1.call(this,x);
case 2:
return list__2.call(this,x,y);
case 3:
return list__3.call(this,x,y,z);
default:
return list__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
list.cljs$lang$maxFixedArity = 3;
list.cljs$lang$applyTo = list__4.cljs$lang$applyTo;
list.cljs$lang$arity$0 = list__0;
list.cljs$lang$arity$1 = list__1;
list.cljs$lang$arity$2 = list__2;
list.cljs$lang$arity$3 = list__3;
list.cljs$lang$arity$variadic = list__4.cljs$lang$arity$variadic;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65405164;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7555 = this;
var h__2522__auto____7556 = this__7555.__hash;
if(!((h__2522__auto____7556 == null)))
{return h__2522__auto____7556;
} else
{var h__2522__auto____7557 = cljs.core.hash_coll.call(null,coll);
this__7555.__hash = h__2522__auto____7557;
return h__2522__auto____7557;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7558 = this;
if((this__7558.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__7558.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7559 = this;
return (new cljs.core.Cons(null,o,coll,this__7559.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__7560 = this;
var this__7561 = this;
return cljs.core.pr_str.call(null,this__7561);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7562 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7563 = this;
return this__7563.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7564 = this;
if((this__7564.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__7564.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7565 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7566 = this;
return (new cljs.core.Cons(meta,this__7566.first,this__7566.rest,this__7566.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7567 = this;
return this__7567.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7568 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7568.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____7573 = (coll == null);
if(or__3824__auto____7573)
{return or__3824__auto____7573;
} else
{var G__7574__7575 = coll;
if(G__7574__7575)
{if((function (){var or__3824__auto____7576 = (G__7574__7575.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7576)
{return or__3824__auto____7576;
} else
{return G__7574__7575.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7574__7575.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7574__7575);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7574__7575);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__7580__7581 = x;
if(G__7580__7581)
{if((function (){var or__3824__auto____7582 = (G__7580__7581.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____7582)
{return or__3824__auto____7582;
} else
{return G__7580__7581.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__7580__7581.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7580__7581);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7580__7581);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__7583 = null;
var G__7583__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__7583__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__7583 = function(string,f,start){
switch(arguments.length){
case 2:
return G__7583__2.call(this,string,f);
case 3:
return G__7583__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7583;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__7584 = null;
var G__7584__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__7584__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__7584 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__7584__2.call(this,string,k);
case 3:
return G__7584__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7584;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__7585 = null;
var G__7585__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__7585__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__7585 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__7585__2.call(this,string,n);
case 3:
return G__7585__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7585;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode(o);
}));

/**
* @constructor
*/
cljs.core.Keyword = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__7597 = null;
var G__7597__2 = (function (this_sym7588,coll){
var this__7590 = this;
var this_sym7588__7591 = this;
var ___7592 = this_sym7588__7591;
if((coll == null))
{return null;
} else
{var strobj__7593 = coll.strobj;
if((strobj__7593 == null))
{return cljs.core._lookup.call(null,coll,this__7590.k,null);
} else
{return (strobj__7593[this__7590.k]);
}
}
});
var G__7597__3 = (function (this_sym7589,coll,not_found){
var this__7590 = this;
var this_sym7589__7594 = this;
var ___7595 = this_sym7589__7594;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__7590.k,not_found);
}
});
G__7597 = function(this_sym7589,coll,not_found){
switch(arguments.length){
case 2:
return G__7597__2.call(this,this_sym7589,coll);
case 3:
return G__7597__3.call(this,this_sym7589,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7597;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym7586,args7587){
var this__7596 = this;
return this_sym7586.call.apply(this_sym7586,[this_sym7586].concat(args7587.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__7606 = null;
var G__7606__2 = (function (this_sym7600,coll){
var this_sym7600__7602 = this;
var this__7603 = this_sym7600__7602;
return cljs.core._lookup.call(null,coll,this__7603.toString(),null);
});
var G__7606__3 = (function (this_sym7601,coll,not_found){
var this_sym7601__7604 = this;
var this__7605 = this_sym7601__7604;
return cljs.core._lookup.call(null,coll,this__7605.toString(),not_found);
});
G__7606 = function(this_sym7601,coll,not_found){
switch(arguments.length){
case 2:
return G__7606__2.call(this,this_sym7601,coll);
case 3:
return G__7606__3.call(this,this_sym7601,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7606;
})()
;
String.prototype.apply = (function (this_sym7598,args7599){
return this_sym7598.call.apply(this_sym7598,[this_sym7598].concat(args7599.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__7608 = lazy_seq.x;
if(lazy_seq.realized)
{return x__7608;
} else
{lazy_seq.x = x__7608.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850700;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7609 = this;
var h__2522__auto____7610 = this__7609.__hash;
if(!((h__2522__auto____7610 == null)))
{return h__2522__auto____7610;
} else
{var h__2522__auto____7611 = cljs.core.hash_coll.call(null,coll);
this__7609.__hash = h__2522__auto____7611;
return h__2522__auto____7611;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7612 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7613 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__7614 = this;
var this__7615 = this;
return cljs.core.pr_str.call(null,this__7615);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7616 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7617 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7618 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7619 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7620 = this;
return (new cljs.core.LazySeq(meta,this__7620.realized,this__7620.x,this__7620.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7621 = this;
return this__7621.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7622 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7622.meta);
});
cljs.core.LazySeq;

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7623 = this;
return this__7623.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__7624 = this;
var ___7625 = this;
(this__7624.buf[this__7624.end] = o);
return this__7624.end = (this__7624.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__7626 = this;
var ___7627 = this;
var ret__7628 = (new cljs.core.ArrayChunk(this__7626.buf,0,this__7626.end));
this__7626.buf = null;
return ret__7628;
});
cljs.core.ChunkBuffer;
cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer(cljs.core.make_array.call(null,capacity),0));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7629 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__7629.arr[this__7629.off]),(this__7629.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7630 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__7630.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__7631 = this;
if((this__7631.off === this__7631.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__7631.arr,(this__7631.off + 1),this__7631.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__7632 = this;
return (this__7632.arr[(this__7632.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__7633 = this;
if((function (){var and__3822__auto____7634 = (i >= 0);
if(and__3822__auto____7634)
{return (i < (this__7633.end - this__7633.off));
} else
{return and__3822__auto____7634;
}
})())
{return (this__7633.arr[(this__7633.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7635 = this;
return (this__7635.end - this__7635.off);
});
cljs.core.ArrayChunk;
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return array_chunk.call(null,arr,0,arr.length);
});
var array_chunk__2 = (function (arr,off){
return array_chunk.call(null,arr,off,arr.length);
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw('Invalid arity: ' + arguments.length);
};
array_chunk.cljs$lang$arity$1 = array_chunk__1;
array_chunk.cljs$lang$arity$2 = array_chunk__2;
array_chunk.cljs$lang$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27656296;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__7636 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7637 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7638 = this;
return cljs.core._nth.call(null,this__7638.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7639 = this;
if((cljs.core._count.call(null,this__7639.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__7639.chunk),this__7639.more,this__7639.meta));
} else
{if((this__7639.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7639.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__7640 = this;
if((this__7640.more == null))
{return null;
} else
{return this__7640.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7641 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__7642 = this;
return (new cljs.core.ChunkedCons(this__7642.chunk,this__7642.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7643 = this;
return this__7643.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__7644 = this;
return this__7644.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__7645 = this;
if((this__7645.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7645.more;
}
});
cljs.core.ChunkedCons;
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count.call(null,chunk) === 0))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first.call(null,s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest.call(null,s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__7649__7650 = s;
if(G__7649__7650)
{if(cljs.core.truth_((function (){var or__3824__auto____7651 = null;
if(cljs.core.truth_(or__3824__auto____7651))
{return or__3824__auto____7651;
} else
{return G__7649__7650.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__7649__7650.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7649__7650);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7649__7650);
}
})())
{return cljs.core._chunked_next.call(null,s);
} else
{return cljs.core.seq.call(null,cljs.core._chunked_rest.call(null,s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__7654 = [];
var s__7655 = s;
while(true){
if(cljs.core.seq.call(null,s__7655))
{ary__7654.push(cljs.core.first.call(null,s__7655));
{
var G__7656 = cljs.core.next.call(null,s__7655);
s__7655 = G__7656;
continue;
}
} else
{return ary__7654;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__7660 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__7661 = 0;
var xs__7662 = cljs.core.seq.call(null,coll);
while(true){
if(xs__7662)
{(ret__7660[i__7661] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__7662)));
{
var G__7663 = (i__7661 + 1);
var G__7664 = cljs.core.next.call(null,xs__7662);
i__7661 = G__7663;
xs__7662 = G__7664;
continue;
}
} else
{}
break;
}
return ret__7660;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return long_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a__7672 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7673 = cljs.core.seq.call(null,init_val_or_seq);
var i__7674 = 0;
var s__7675 = s__7673;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7676 = s__7675;
if(and__3822__auto____7676)
{return (i__7674 < size);
} else
{return and__3822__auto____7676;
}
})()))
{(a__7672[i__7674] = cljs.core.first.call(null,s__7675));
{
var G__7679 = (i__7674 + 1);
var G__7680 = cljs.core.next.call(null,s__7675);
i__7674 = G__7679;
s__7675 = G__7680;
continue;
}
} else
{return a__7672;
}
break;
}
} else
{var n__2857__auto____7677 = size;
var i__7678 = 0;
while(true){
if((i__7678 < n__2857__auto____7677))
{(a__7672[i__7678] = init_val_or_seq);
{
var G__7681 = (i__7678 + 1);
i__7678 = G__7681;
continue;
}
} else
{}
break;
}
return a__7672;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return double_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a__7689 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7690 = cljs.core.seq.call(null,init_val_or_seq);
var i__7691 = 0;
var s__7692 = s__7690;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7693 = s__7692;
if(and__3822__auto____7693)
{return (i__7691 < size);
} else
{return and__3822__auto____7693;
}
})()))
{(a__7689[i__7691] = cljs.core.first.call(null,s__7692));
{
var G__7696 = (i__7691 + 1);
var G__7697 = cljs.core.next.call(null,s__7692);
i__7691 = G__7696;
s__7692 = G__7697;
continue;
}
} else
{return a__7689;
}
break;
}
} else
{var n__2857__auto____7694 = size;
var i__7695 = 0;
while(true){
if((i__7695 < n__2857__auto____7694))
{(a__7689[i__7695] = init_val_or_seq);
{
var G__7698 = (i__7695 + 1);
i__7695 = G__7698;
continue;
}
} else
{}
break;
}
return a__7689;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return object_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a__7706 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7707 = cljs.core.seq.call(null,init_val_or_seq);
var i__7708 = 0;
var s__7709 = s__7707;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7710 = s__7709;
if(and__3822__auto____7710)
{return (i__7708 < size);
} else
{return and__3822__auto____7710;
}
})()))
{(a__7706[i__7708] = cljs.core.first.call(null,s__7709));
{
var G__7713 = (i__7708 + 1);
var G__7714 = cljs.core.next.call(null,s__7709);
i__7708 = G__7713;
s__7709 = G__7714;
continue;
}
} else
{return a__7706;
}
break;
}
} else
{var n__2857__auto____7711 = size;
var i__7712 = 0;
while(true){
if((i__7712 < n__2857__auto____7711))
{(a__7706[i__7712] = init_val_or_seq);
{
var G__7715 = (i__7712 + 1);
i__7712 = G__7715;
continue;
}
} else
{}
break;
}
return a__7706;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_.call(null,s))
{return cljs.core.count.call(null,s);
} else
{var s__7720 = s;
var i__7721 = n;
var sum__7722 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7723 = (i__7721 > 0);
if(and__3822__auto____7723)
{return cljs.core.seq.call(null,s__7720);
} else
{return and__3822__auto____7723;
}
})()))
{{
var G__7724 = cljs.core.next.call(null,s__7720);
var G__7725 = (i__7721 - 1);
var G__7726 = (sum__7722 + 1);
s__7720 = G__7724;
i__7721 = G__7725;
sum__7722 = G__7726;
continue;
}
} else
{return sum__7722;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next.call(null,arglist) == null))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if("\uFDD0'else")
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
}),null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
}),null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__7731 = cljs.core.seq.call(null,x);
if(s__7731)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__7731))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__7731),concat.call(null,cljs.core.chunk_rest.call(null,s__7731),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__7731),concat.call(null,cljs.core.rest.call(null,s__7731),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__7735__delegate = function (x,y,zs){
var cat__7734 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__7733 = cljs.core.seq.call(null,xys);
if(xys__7733)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__7733))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__7733),cat.call(null,cljs.core.chunk_rest.call(null,xys__7733),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__7733),cat.call(null,cljs.core.rest.call(null,xys__7733),zs));
}
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
}),null));
});
return cat__7734.call(null,concat.call(null,x,y),zs);
};
var G__7735 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7735__delegate.call(this, x, y, zs);
};
G__7735.cljs$lang$maxFixedArity = 2;
G__7735.cljs$lang$applyTo = (function (arglist__7736){
var x = cljs.core.first(arglist__7736);
var y = cljs.core.first(cljs.core.next(arglist__7736));
var zs = cljs.core.rest(cljs.core.next(arglist__7736));
return G__7735__delegate(x, y, zs);
});
G__7735.cljs$lang$arity$variadic = G__7735__delegate;
return G__7735;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__7737__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__7737 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7737__delegate.call(this, a, b, c, d, more);
};
G__7737.cljs$lang$maxFixedArity = 4;
G__7737.cljs$lang$applyTo = (function (arglist__7738){
var a = cljs.core.first(arglist__7738);
var b = cljs.core.first(cljs.core.next(arglist__7738));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7738)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7738))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7738))));
return G__7737__delegate(a, b, c, d, more);
});
G__7737.cljs$lang$arity$variadic = G__7737__delegate;
return G__7737;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient.call(null,coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_.call(null,tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_.call(null,tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_.call(null,tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
cljs.core.apply_to = (function apply_to(f,argc,args){
var args__7780 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__7781 = cljs.core._first.call(null,args__7780);
var args__7782 = cljs.core._rest.call(null,args__7780);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__7781);
} else
{return f.call(null,a__7781);
}
} else
{var b__7783 = cljs.core._first.call(null,args__7782);
var args__7784 = cljs.core._rest.call(null,args__7782);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__7781,b__7783);
} else
{return f.call(null,a__7781,b__7783);
}
} else
{var c__7785 = cljs.core._first.call(null,args__7784);
var args__7786 = cljs.core._rest.call(null,args__7784);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__7781,b__7783,c__7785);
} else
{return f.call(null,a__7781,b__7783,c__7785);
}
} else
{var d__7787 = cljs.core._first.call(null,args__7786);
var args__7788 = cljs.core._rest.call(null,args__7786);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__7781,b__7783,c__7785,d__7787);
} else
{return f.call(null,a__7781,b__7783,c__7785,d__7787);
}
} else
{var e__7789 = cljs.core._first.call(null,args__7788);
var args__7790 = cljs.core._rest.call(null,args__7788);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__7781,b__7783,c__7785,d__7787,e__7789);
} else
{return f.call(null,a__7781,b__7783,c__7785,d__7787,e__7789);
}
} else
{var f__7791 = cljs.core._first.call(null,args__7790);
var args__7792 = cljs.core._rest.call(null,args__7790);
if((argc === 6))
{if(f__7791.cljs$lang$arity$6)
{return f__7791.cljs$lang$arity$6(a__7781,b__7783,c__7785,d__7787,e__7789,f__7791);
} else
{return f__7791.call(null,a__7781,b__7783,c__7785,d__7787,e__7789,f__7791);
}
} else
{var g__7793 = cljs.core._first.call(null,args__7792);
var args__7794 = cljs.core._rest.call(null,args__7792);
if((argc === 7))
{if(f__7791.cljs$lang$arity$7)
{return f__7791.cljs$lang$arity$7(a__7781,b__7783,c__7785,d__7787,e__7789,f__7791,g__7793);
} else
{return f__7791.call(null,a__7781,b__7783,c__7785,d__7787,e__7789,f__7791,g__7793);
}
} else
{var h__7795 = cljs.core._first.call(null,args__7794);
var args__7796 = cljs.core._rest.call(null,args__7794);
if((argc === 8))
{if(f__7791.cljs$lang$arity$8)
{return f__7791.cljs$lang$arity$8(a__7781,b__7783,c__7785,d__7787,e__7789,f__7791,g__7793,h__7795);
} else
{return f__7791.call(null,a__7781,b__7783,c__7785,d__7787,e__7789,f__7791,g__7793,h__7795);
}
} else
{var i__7797 = cljs.core._first.call(null,args__7796);
var args__7798 = cljs.core._rest.call(null,args__7796);
if((argc === 9))
{if(f__7791.cljs$lang$arity$9)
{return f__7791.cljs$lang$arity$9(a__7781,b__7783,c__7785,d__7787,e__7789,f__7791,g__7793,h__7795,i__7797);
} else
{return f__7791.call(null,a__7781,b__7783,c__7785,d__7787,e__7789,f__7791,g__7793,h__7795,i__7797);
}
} else
{var j__7799 = cljs.core._first.call(null,args__7798);
var args__7800 = cljs.core._rest.call(null,args__7798);
if((argc === 10))
{if(f__7791.cljs$lang$arity$10)
{return f__7791.cljs$lang$arity$10(a__7781,b__7783,c__7785,d__7787,e__7789,f__7791,g__7793,h__7795,i__7797,j__7799);
} else
{return f__7791.call(null,a__7781,b__7783,c__7785,d__7787,e__7789,f__7791,g__7793,h__7795,i__7797,j__7799);
}
} else
{var k__7801 = cljs.core._first.call(null,args__7800);
var args__7802 = cljs.core._rest.call(null,args__7800);
if((argc === 11))
{if(f__7791.cljs$lang$arity$11)
{return f__7791.cljs$lang$arity$11(a__7781,b__7783,c__7785,d__7787,e__7789,f__7791,g__7793,h__7795,i__7797,j__7799,k__7801);
} else
{return f__7791.call(null,a__7781,b__7783,c__7785,d__7787,e__7789,f__7791,g__7793,h__7795,i__7797,j__7799,k__7801);
}
} else
{var l__7803 = cljs.core._first.call(null,args__7802);
var args__7804 = cljs.core._rest.call(null,args__7802);
if((argc === 12))
{if(f__7791.cljs$lang$arity$12)
{return f__7791.cljs$lang$arity$12(a__7781,b__7783,c__7785,d__7787,e__7789,f__7791,g__7793,h__7795,i__7797,j__7799,k__7801,l__7803);
} else
{return f__7791.call(null,a__7781,b__7783,c__7785,d__7787,e__7789,f__7791,g__7793,h__7795,i__7797,j__7799,k__7801,l__7803);
}
} else
{var m__7805 = cljs.core._first.call(null,args__7804);
var args__7806 = cljs.core._rest.call(null,args__7804);
if((argc === 13))
{if(f__7791.cljs$lang$arity$13)
{return f__7791.cljs$lang$arity$13(a__7781,b__7783,c__7785,d__7787,e__7789,f__7791,g__7793,h__7795,i__7797,j__7799,k__7801,l__7803,m__7805);
} else
{return f__7791.call(null,a__7781,b__7783,c__7785,d__7787,e__7789,f__7791,g__7793,h__7795,i__7797,j__7799,k__7801,l__7803,m__7805);
}
} else
{var n__7807 = cljs.core._first.call(null,args__7806);
var args__7808 = cljs.core._rest.call(null,args__7806);
if((argc === 14))
{if(f__7791.cljs$lang$arity$14)
{return f__7791.cljs$lang$arity$14(a__7781,b__7783,c__7785,d__7787,e__7789,f__7791,g__7793,h__7795,i__7797,j__7799,k__7801,l__7803,m__7805,n__7807);
} else
{return f__7791.call(null,a__7781,b__7783,c__7785,d__7787,e__7789,f__7791,g__7793,h__7795,i__7797,j__7799,k__7801,l__7803,m__7805,n__7807);
}
} else
{var o__7809 = cljs.core._first.call(null,args__7808);
var args__7810 = cljs.core._rest.call(null,args__7808);
if((argc === 15))
{if(f__7791.cljs$lang$arity$15)
{return f__7791.cljs$lang$arity$15(a__7781,b__7783,c__7785,d__7787,e__7789,f__7791,g__7793,h__7795,i__7797,j__7799,k__7801,l__7803,m__7805,n__7807,o__7809);
} else
{return f__7791.call(null,a__7781,b__7783,c__7785,d__7787,e__7789,f__7791,g__7793,h__7795,i__7797,j__7799,k__7801,l__7803,m__7805,n__7807,o__7809);
}
} else
{var p__7811 = cljs.core._first.call(null,args__7810);
var args__7812 = cljs.core._rest.call(null,args__7810);
if((argc === 16))
{if(f__7791.cljs$lang$arity$16)
{return f__7791.cljs$lang$arity$16(a__7781,b__7783,c__7785,d__7787,e__7789,f__7791,g__7793,h__7795,i__7797,j__7799,k__7801,l__7803,m__7805,n__7807,o__7809,p__7811);
} else
{return f__7791.call(null,a__7781,b__7783,c__7785,d__7787,e__7789,f__7791,g__7793,h__7795,i__7797,j__7799,k__7801,l__7803,m__7805,n__7807,o__7809,p__7811);
}
} else
{var q__7813 = cljs.core._first.call(null,args__7812);
var args__7814 = cljs.core._rest.call(null,args__7812);
if((argc === 17))
{if(f__7791.cljs$lang$arity$17)
{return f__7791.cljs$lang$arity$17(a__7781,b__7783,c__7785,d__7787,e__7789,f__7791,g__7793,h__7795,i__7797,j__7799,k__7801,l__7803,m__7805,n__7807,o__7809,p__7811,q__7813);
} else
{return f__7791.call(null,a__7781,b__7783,c__7785,d__7787,e__7789,f__7791,g__7793,h__7795,i__7797,j__7799,k__7801,l__7803,m__7805,n__7807,o__7809,p__7811,q__7813);
}
} else
{var r__7815 = cljs.core._first.call(null,args__7814);
var args__7816 = cljs.core._rest.call(null,args__7814);
if((argc === 18))
{if(f__7791.cljs$lang$arity$18)
{return f__7791.cljs$lang$arity$18(a__7781,b__7783,c__7785,d__7787,e__7789,f__7791,g__7793,h__7795,i__7797,j__7799,k__7801,l__7803,m__7805,n__7807,o__7809,p__7811,q__7813,r__7815);
} else
{return f__7791.call(null,a__7781,b__7783,c__7785,d__7787,e__7789,f__7791,g__7793,h__7795,i__7797,j__7799,k__7801,l__7803,m__7805,n__7807,o__7809,p__7811,q__7813,r__7815);
}
} else
{var s__7817 = cljs.core._first.call(null,args__7816);
var args__7818 = cljs.core._rest.call(null,args__7816);
if((argc === 19))
{if(f__7791.cljs$lang$arity$19)
{return f__7791.cljs$lang$arity$19(a__7781,b__7783,c__7785,d__7787,e__7789,f__7791,g__7793,h__7795,i__7797,j__7799,k__7801,l__7803,m__7805,n__7807,o__7809,p__7811,q__7813,r__7815,s__7817);
} else
{return f__7791.call(null,a__7781,b__7783,c__7785,d__7787,e__7789,f__7791,g__7793,h__7795,i__7797,j__7799,k__7801,l__7803,m__7805,n__7807,o__7809,p__7811,q__7813,r__7815,s__7817);
}
} else
{var t__7819 = cljs.core._first.call(null,args__7818);
var args__7820 = cljs.core._rest.call(null,args__7818);
if((argc === 20))
{if(f__7791.cljs$lang$arity$20)
{return f__7791.cljs$lang$arity$20(a__7781,b__7783,c__7785,d__7787,e__7789,f__7791,g__7793,h__7795,i__7797,j__7799,k__7801,l__7803,m__7805,n__7807,o__7809,p__7811,q__7813,r__7815,s__7817,t__7819);
} else
{return f__7791.call(null,a__7781,b__7783,c__7785,d__7787,e__7789,f__7791,g__7793,h__7795,i__7797,j__7799,k__7801,l__7803,m__7805,n__7807,o__7809,p__7811,q__7813,r__7815,s__7817,t__7819);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity__7835 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7836 = cljs.core.bounded_count.call(null,args,(fixed_arity__7835 + 1));
if((bc__7836 <= fixed_arity__7835))
{return cljs.core.apply_to.call(null,f,bc__7836,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__7837 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__7838 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7839 = cljs.core.bounded_count.call(null,arglist__7837,(fixed_arity__7838 + 1));
if((bc__7839 <= fixed_arity__7838))
{return cljs.core.apply_to.call(null,f,bc__7839,arglist__7837);
} else
{return f.cljs$lang$applyTo(arglist__7837);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7837));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__7840 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__7841 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7842 = cljs.core.bounded_count.call(null,arglist__7840,(fixed_arity__7841 + 1));
if((bc__7842 <= fixed_arity__7841))
{return cljs.core.apply_to.call(null,f,bc__7842,arglist__7840);
} else
{return f.cljs$lang$applyTo(arglist__7840);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7840));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__7843 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__7844 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7845 = cljs.core.bounded_count.call(null,arglist__7843,(fixed_arity__7844 + 1));
if((bc__7845 <= fixed_arity__7844))
{return cljs.core.apply_to.call(null,f,bc__7845,arglist__7843);
} else
{return f.cljs$lang$applyTo(arglist__7843);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7843));
}
});
var apply__6 = (function() { 
var G__7849__delegate = function (f,a,b,c,d,args){
var arglist__7846 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__7847 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7848 = cljs.core.bounded_count.call(null,arglist__7846,(fixed_arity__7847 + 1));
if((bc__7848 <= fixed_arity__7847))
{return cljs.core.apply_to.call(null,f,bc__7848,arglist__7846);
} else
{return f.cljs$lang$applyTo(arglist__7846);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7846));
}
};
var G__7849 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7849__delegate.call(this, f, a, b, c, d, args);
};
G__7849.cljs$lang$maxFixedArity = 5;
G__7849.cljs$lang$applyTo = (function (arglist__7850){
var f = cljs.core.first(arglist__7850);
var a = cljs.core.first(cljs.core.next(arglist__7850));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7850)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7850))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7850)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7850)))));
return G__7849__delegate(f, a, b, c, d, args);
});
G__7849.cljs$lang$arity$variadic = G__7849__delegate;
return G__7849;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__7851){
var obj = cljs.core.first(arglist__7851);
var f = cljs.core.first(cljs.core.next(arglist__7851));
var args = cljs.core.rest(cljs.core.next(arglist__7851));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__7852__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__7852 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7852__delegate.call(this, x, y, more);
};
G__7852.cljs$lang$maxFixedArity = 2;
G__7852.cljs$lang$applyTo = (function (arglist__7853){
var x = cljs.core.first(arglist__7853);
var y = cljs.core.first(cljs.core.next(arglist__7853));
var more = cljs.core.rest(cljs.core.next(arglist__7853));
return G__7852__delegate(x, y, more);
});
G__7852.cljs$lang$arity$variadic = G__7852__delegate;
return G__7852;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq.call(null,coll))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq.call(null,coll) == null))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__7854 = pred;
var G__7855 = cljs.core.next.call(null,coll);
pred = G__7854;
coll = G__7855;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq.call(null,coll))
{var or__3824__auto____7857 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____7857))
{return or__3824__auto____7857;
} else
{{
var G__7858 = pred;
var G__7859 = cljs.core.next.call(null,coll);
pred = G__7858;
coll = G__7859;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_.call(null,n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__7860 = null;
var G__7860__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__7860__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__7860__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__7860__3 = (function() { 
var G__7861__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__7861 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7861__delegate.call(this, x, y, zs);
};
G__7861.cljs$lang$maxFixedArity = 2;
G__7861.cljs$lang$applyTo = (function (arglist__7862){
var x = cljs.core.first(arglist__7862);
var y = cljs.core.first(cljs.core.next(arglist__7862));
var zs = cljs.core.rest(cljs.core.next(arglist__7862));
return G__7861__delegate(x, y, zs);
});
G__7861.cljs$lang$arity$variadic = G__7861__delegate;
return G__7861;
})()
;
G__7860 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__7860__0.call(this);
case 1:
return G__7860__1.call(this,x);
case 2:
return G__7860__2.call(this,x,y);
default:
return G__7860__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__7860.cljs$lang$maxFixedArity = 2;
G__7860.cljs$lang$applyTo = G__7860__3.cljs$lang$applyTo;
return G__7860;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__7863__delegate = function (args){
return x;
};
var G__7863 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7863__delegate.call(this, args);
};
G__7863.cljs$lang$maxFixedArity = 0;
G__7863.cljs$lang$applyTo = (function (arglist__7864){
var args = cljs.core.seq(arglist__7864);;
return G__7863__delegate(args);
});
G__7863.cljs$lang$arity$variadic = G__7863__delegate;
return G__7863;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__7871 = null;
var G__7871__0 = (function (){
return f.call(null,g.call(null));
});
var G__7871__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__7871__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__7871__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__7871__4 = (function() { 
var G__7872__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__7872 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7872__delegate.call(this, x, y, z, args);
};
G__7872.cljs$lang$maxFixedArity = 3;
G__7872.cljs$lang$applyTo = (function (arglist__7873){
var x = cljs.core.first(arglist__7873);
var y = cljs.core.first(cljs.core.next(arglist__7873));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7873)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7873)));
return G__7872__delegate(x, y, z, args);
});
G__7872.cljs$lang$arity$variadic = G__7872__delegate;
return G__7872;
})()
;
G__7871 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7871__0.call(this);
case 1:
return G__7871__1.call(this,x);
case 2:
return G__7871__2.call(this,x,y);
case 3:
return G__7871__3.call(this,x,y,z);
default:
return G__7871__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7871.cljs$lang$maxFixedArity = 3;
G__7871.cljs$lang$applyTo = G__7871__4.cljs$lang$applyTo;
return G__7871;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__7874 = null;
var G__7874__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__7874__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__7874__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__7874__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__7874__4 = (function() { 
var G__7875__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__7875 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7875__delegate.call(this, x, y, z, args);
};
G__7875.cljs$lang$maxFixedArity = 3;
G__7875.cljs$lang$applyTo = (function (arglist__7876){
var x = cljs.core.first(arglist__7876);
var y = cljs.core.first(cljs.core.next(arglist__7876));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7876)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7876)));
return G__7875__delegate(x, y, z, args);
});
G__7875.cljs$lang$arity$variadic = G__7875__delegate;
return G__7875;
})()
;
G__7874 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7874__0.call(this);
case 1:
return G__7874__1.call(this,x);
case 2:
return G__7874__2.call(this,x,y);
case 3:
return G__7874__3.call(this,x,y,z);
default:
return G__7874__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7874.cljs$lang$maxFixedArity = 3;
G__7874.cljs$lang$applyTo = G__7874__4.cljs$lang$applyTo;
return G__7874;
})()
});
var comp__4 = (function() { 
var G__7877__delegate = function (f1,f2,f3,fs){
var fs__7868 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__7878__delegate = function (args){
var ret__7869 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__7868),args);
var fs__7870 = cljs.core.next.call(null,fs__7868);
while(true){
if(fs__7870)
{{
var G__7879 = cljs.core.first.call(null,fs__7870).call(null,ret__7869);
var G__7880 = cljs.core.next.call(null,fs__7870);
ret__7869 = G__7879;
fs__7870 = G__7880;
continue;
}
} else
{return ret__7869;
}
break;
}
};
var G__7878 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7878__delegate.call(this, args);
};
G__7878.cljs$lang$maxFixedArity = 0;
G__7878.cljs$lang$applyTo = (function (arglist__7881){
var args = cljs.core.seq(arglist__7881);;
return G__7878__delegate(args);
});
G__7878.cljs$lang$arity$variadic = G__7878__delegate;
return G__7878;
})()
;
};
var G__7877 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7877__delegate.call(this, f1, f2, f3, fs);
};
G__7877.cljs$lang$maxFixedArity = 3;
G__7877.cljs$lang$applyTo = (function (arglist__7882){
var f1 = cljs.core.first(arglist__7882);
var f2 = cljs.core.first(cljs.core.next(arglist__7882));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7882)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7882)));
return G__7877__delegate(f1, f2, f3, fs);
});
G__7877.cljs$lang$arity$variadic = G__7877__delegate;
return G__7877;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() { 
var G__7883__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__7883 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7883__delegate.call(this, args);
};
G__7883.cljs$lang$maxFixedArity = 0;
G__7883.cljs$lang$applyTo = (function (arglist__7884){
var args = cljs.core.seq(arglist__7884);;
return G__7883__delegate(args);
});
G__7883.cljs$lang$arity$variadic = G__7883__delegate;
return G__7883;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__7885__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__7885 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7885__delegate.call(this, args);
};
G__7885.cljs$lang$maxFixedArity = 0;
G__7885.cljs$lang$applyTo = (function (arglist__7886){
var args = cljs.core.seq(arglist__7886);;
return G__7885__delegate(args);
});
G__7885.cljs$lang$arity$variadic = G__7885__delegate;
return G__7885;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__7887__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__7887 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7887__delegate.call(this, args);
};
G__7887.cljs$lang$maxFixedArity = 0;
G__7887.cljs$lang$applyTo = (function (arglist__7888){
var args = cljs.core.seq(arglist__7888);;
return G__7887__delegate(args);
});
G__7887.cljs$lang$arity$variadic = G__7887__delegate;
return G__7887;
})()
;
});
var partial__5 = (function() { 
var G__7889__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__7890__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__7890 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7890__delegate.call(this, args);
};
G__7890.cljs$lang$maxFixedArity = 0;
G__7890.cljs$lang$applyTo = (function (arglist__7891){
var args = cljs.core.seq(arglist__7891);;
return G__7890__delegate(args);
});
G__7890.cljs$lang$arity$variadic = G__7890__delegate;
return G__7890;
})()
;
};
var G__7889 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7889__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__7889.cljs$lang$maxFixedArity = 4;
G__7889.cljs$lang$applyTo = (function (arglist__7892){
var f = cljs.core.first(arglist__7892);
var arg1 = cljs.core.first(cljs.core.next(arglist__7892));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7892)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7892))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7892))));
return G__7889__delegate(f, arg1, arg2, arg3, more);
});
G__7889.cljs$lang$arity$variadic = G__7889__delegate;
return G__7889;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__7893 = null;
var G__7893__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__7893__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__7893__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__7893__4 = (function() { 
var G__7894__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__7894 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7894__delegate.call(this, a, b, c, ds);
};
G__7894.cljs$lang$maxFixedArity = 3;
G__7894.cljs$lang$applyTo = (function (arglist__7895){
var a = cljs.core.first(arglist__7895);
var b = cljs.core.first(cljs.core.next(arglist__7895));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7895)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7895)));
return G__7894__delegate(a, b, c, ds);
});
G__7894.cljs$lang$arity$variadic = G__7894__delegate;
return G__7894;
})()
;
G__7893 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__7893__1.call(this,a);
case 2:
return G__7893__2.call(this,a,b);
case 3:
return G__7893__3.call(this,a,b,c);
default:
return G__7893__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7893.cljs$lang$maxFixedArity = 3;
G__7893.cljs$lang$applyTo = G__7893__4.cljs$lang$applyTo;
return G__7893;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__7896 = null;
var G__7896__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7896__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__7896__4 = (function() { 
var G__7897__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__7897 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7897__delegate.call(this, a, b, c, ds);
};
G__7897.cljs$lang$maxFixedArity = 3;
G__7897.cljs$lang$applyTo = (function (arglist__7898){
var a = cljs.core.first(arglist__7898);
var b = cljs.core.first(cljs.core.next(arglist__7898));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7898)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7898)));
return G__7897__delegate(a, b, c, ds);
});
G__7897.cljs$lang$arity$variadic = G__7897__delegate;
return G__7897;
})()
;
G__7896 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7896__2.call(this,a,b);
case 3:
return G__7896__3.call(this,a,b,c);
default:
return G__7896__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7896.cljs$lang$maxFixedArity = 3;
G__7896.cljs$lang$applyTo = G__7896__4.cljs$lang$applyTo;
return G__7896;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__7899 = null;
var G__7899__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7899__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__7899__4 = (function() { 
var G__7900__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__7900 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7900__delegate.call(this, a, b, c, ds);
};
G__7900.cljs$lang$maxFixedArity = 3;
G__7900.cljs$lang$applyTo = (function (arglist__7901){
var a = cljs.core.first(arglist__7901);
var b = cljs.core.first(cljs.core.next(arglist__7901));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7901)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7901)));
return G__7900__delegate(a, b, c, ds);
});
G__7900.cljs$lang$arity$variadic = G__7900__delegate;
return G__7900;
})()
;
G__7899 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7899__2.call(this,a,b);
case 3:
return G__7899__3.call(this,a,b,c);
default:
return G__7899__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7899.cljs$lang$maxFixedArity = 3;
G__7899.cljs$lang$applyTo = G__7899__4.cljs$lang$applyTo;
return G__7899;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__7917 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7925 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7925)
{var s__7926 = temp__3974__auto____7925;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7926))
{var c__7927 = cljs.core.chunk_first.call(null,s__7926);
var size__7928 = cljs.core.count.call(null,c__7927);
var b__7929 = cljs.core.chunk_buffer.call(null,size__7928);
var n__2857__auto____7930 = size__7928;
var i__7931 = 0;
while(true){
if((i__7931 < n__2857__auto____7930))
{cljs.core.chunk_append.call(null,b__7929,f.call(null,(idx + i__7931),cljs.core._nth.call(null,c__7927,i__7931)));
{
var G__7932 = (i__7931 + 1);
i__7931 = G__7932;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7929),mapi.call(null,(idx + size__7928),cljs.core.chunk_rest.call(null,s__7926)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__7926)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__7926)));
}
} else
{return null;
}
}),null));
});
return mapi__7917.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7942 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7942)
{var s__7943 = temp__3974__auto____7942;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7943))
{var c__7944 = cljs.core.chunk_first.call(null,s__7943);
var size__7945 = cljs.core.count.call(null,c__7944);
var b__7946 = cljs.core.chunk_buffer.call(null,size__7945);
var n__2857__auto____7947 = size__7945;
var i__7948 = 0;
while(true){
if((i__7948 < n__2857__auto____7947))
{var x__7949 = f.call(null,cljs.core._nth.call(null,c__7944,i__7948));
if((x__7949 == null))
{} else
{cljs.core.chunk_append.call(null,b__7946,x__7949);
}
{
var G__7951 = (i__7948 + 1);
i__7948 = G__7951;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7946),keep.call(null,f,cljs.core.chunk_rest.call(null,s__7943)));
} else
{var x__7950 = f.call(null,cljs.core.first.call(null,s__7943));
if((x__7950 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__7943));
} else
{return cljs.core.cons.call(null,x__7950,keep.call(null,f,cljs.core.rest.call(null,s__7943)));
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__7977 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7987 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7987)
{var s__7988 = temp__3974__auto____7987;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7988))
{var c__7989 = cljs.core.chunk_first.call(null,s__7988);
var size__7990 = cljs.core.count.call(null,c__7989);
var b__7991 = cljs.core.chunk_buffer.call(null,size__7990);
var n__2857__auto____7992 = size__7990;
var i__7993 = 0;
while(true){
if((i__7993 < n__2857__auto____7992))
{var x__7994 = f.call(null,(idx + i__7993),cljs.core._nth.call(null,c__7989,i__7993));
if((x__7994 == null))
{} else
{cljs.core.chunk_append.call(null,b__7991,x__7994);
}
{
var G__7996 = (i__7993 + 1);
i__7993 = G__7996;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7991),keepi.call(null,(idx + size__7990),cljs.core.chunk_rest.call(null,s__7988)));
} else
{var x__7995 = f.call(null,idx,cljs.core.first.call(null,s__7988));
if((x__7995 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__7988));
} else
{return cljs.core.cons.call(null,x__7995,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__7988)));
}
}
} else
{return null;
}
}),null));
});
return keepi__7977.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8082 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____8082))
{return p.call(null,y);
} else
{return and__3822__auto____8082;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8083 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____8083))
{var and__3822__auto____8084 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____8084))
{return p.call(null,z);
} else
{return and__3822__auto____8084;
}
} else
{return and__3822__auto____8083;
}
})());
});
var ep1__4 = (function() { 
var G__8153__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8085 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8085))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____8085;
}
})());
};
var G__8153 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8153__delegate.call(this, x, y, z, args);
};
G__8153.cljs$lang$maxFixedArity = 3;
G__8153.cljs$lang$applyTo = (function (arglist__8154){
var x = cljs.core.first(arglist__8154);
var y = cljs.core.first(cljs.core.next(arglist__8154));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8154)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8154)));
return G__8153__delegate(x, y, z, args);
});
G__8153.cljs$lang$arity$variadic = G__8153__delegate;
return G__8153;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8097 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8097))
{return p2.call(null,x);
} else
{return and__3822__auto____8097;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8098 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8098))
{var and__3822__auto____8099 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8099))
{var and__3822__auto____8100 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8100))
{return p2.call(null,y);
} else
{return and__3822__auto____8100;
}
} else
{return and__3822__auto____8099;
}
} else
{return and__3822__auto____8098;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8101 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8101))
{var and__3822__auto____8102 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8102))
{var and__3822__auto____8103 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____8103))
{var and__3822__auto____8104 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8104))
{var and__3822__auto____8105 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8105))
{return p2.call(null,z);
} else
{return and__3822__auto____8105;
}
} else
{return and__3822__auto____8104;
}
} else
{return and__3822__auto____8103;
}
} else
{return and__3822__auto____8102;
}
} else
{return and__3822__auto____8101;
}
})());
});
var ep2__4 = (function() { 
var G__8155__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8106 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8106))
{return cljs.core.every_QMARK_.call(null,(function (p1__7952_SHARP_){
var and__3822__auto____8107 = p1.call(null,p1__7952_SHARP_);
if(cljs.core.truth_(and__3822__auto____8107))
{return p2.call(null,p1__7952_SHARP_);
} else
{return and__3822__auto____8107;
}
}),args);
} else
{return and__3822__auto____8106;
}
})());
};
var G__8155 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8155__delegate.call(this, x, y, z, args);
};
G__8155.cljs$lang$maxFixedArity = 3;
G__8155.cljs$lang$applyTo = (function (arglist__8156){
var x = cljs.core.first(arglist__8156);
var y = cljs.core.first(cljs.core.next(arglist__8156));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8156)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8156)));
return G__8155__delegate(x, y, z, args);
});
G__8155.cljs$lang$arity$variadic = G__8155__delegate;
return G__8155;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8126 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8126))
{var and__3822__auto____8127 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8127))
{return p3.call(null,x);
} else
{return and__3822__auto____8127;
}
} else
{return and__3822__auto____8126;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8128 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8128))
{var and__3822__auto____8129 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8129))
{var and__3822__auto____8130 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____8130))
{var and__3822__auto____8131 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8131))
{var and__3822__auto____8132 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8132))
{return p3.call(null,y);
} else
{return and__3822__auto____8132;
}
} else
{return and__3822__auto____8131;
}
} else
{return and__3822__auto____8130;
}
} else
{return and__3822__auto____8129;
}
} else
{return and__3822__auto____8128;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8133 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8133))
{var and__3822__auto____8134 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8134))
{var and__3822__auto____8135 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____8135))
{var and__3822__auto____8136 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8136))
{var and__3822__auto____8137 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8137))
{var and__3822__auto____8138 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____8138))
{var and__3822__auto____8139 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____8139))
{var and__3822__auto____8140 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____8140))
{return p3.call(null,z);
} else
{return and__3822__auto____8140;
}
} else
{return and__3822__auto____8139;
}
} else
{return and__3822__auto____8138;
}
} else
{return and__3822__auto____8137;
}
} else
{return and__3822__auto____8136;
}
} else
{return and__3822__auto____8135;
}
} else
{return and__3822__auto____8134;
}
} else
{return and__3822__auto____8133;
}
})());
});
var ep3__4 = (function() { 
var G__8157__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8141 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8141))
{return cljs.core.every_QMARK_.call(null,(function (p1__7953_SHARP_){
var and__3822__auto____8142 = p1.call(null,p1__7953_SHARP_);
if(cljs.core.truth_(and__3822__auto____8142))
{var and__3822__auto____8143 = p2.call(null,p1__7953_SHARP_);
if(cljs.core.truth_(and__3822__auto____8143))
{return p3.call(null,p1__7953_SHARP_);
} else
{return and__3822__auto____8143;
}
} else
{return and__3822__auto____8142;
}
}),args);
} else
{return and__3822__auto____8141;
}
})());
};
var G__8157 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8157__delegate.call(this, x, y, z, args);
};
G__8157.cljs$lang$maxFixedArity = 3;
G__8157.cljs$lang$applyTo = (function (arglist__8158){
var x = cljs.core.first(arglist__8158);
var y = cljs.core.first(cljs.core.next(arglist__8158));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8158)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8158)));
return G__8157__delegate(x, y, z, args);
});
G__8157.cljs$lang$arity$variadic = G__8157__delegate;
return G__8157;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__8159__delegate = function (p1,p2,p3,ps){
var ps__8144 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__7954_SHARP_){
return p1__7954_SHARP_.call(null,x);
}),ps__8144);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__7955_SHARP_){
var and__3822__auto____8149 = p1__7955_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____8149))
{return p1__7955_SHARP_.call(null,y);
} else
{return and__3822__auto____8149;
}
}),ps__8144);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__7956_SHARP_){
var and__3822__auto____8150 = p1__7956_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____8150))
{var and__3822__auto____8151 = p1__7956_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____8151))
{return p1__7956_SHARP_.call(null,z);
} else
{return and__3822__auto____8151;
}
} else
{return and__3822__auto____8150;
}
}),ps__8144);
});
var epn__4 = (function() { 
var G__8160__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8152 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8152))
{return cljs.core.every_QMARK_.call(null,(function (p1__7957_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__7957_SHARP_,args);
}),ps__8144);
} else
{return and__3822__auto____8152;
}
})());
};
var G__8160 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8160__delegate.call(this, x, y, z, args);
};
G__8160.cljs$lang$maxFixedArity = 3;
G__8160.cljs$lang$applyTo = (function (arglist__8161){
var x = cljs.core.first(arglist__8161);
var y = cljs.core.first(cljs.core.next(arglist__8161));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8161)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8161)));
return G__8160__delegate(x, y, z, args);
});
G__8160.cljs$lang$arity$variadic = G__8160__delegate;
return G__8160;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__8159 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8159__delegate.call(this, p1, p2, p3, ps);
};
G__8159.cljs$lang$maxFixedArity = 3;
G__8159.cljs$lang$applyTo = (function (arglist__8162){
var p1 = cljs.core.first(arglist__8162);
var p2 = cljs.core.first(cljs.core.next(arglist__8162));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8162)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8162)));
return G__8159__delegate(p1, p2, p3, ps);
});
G__8159.cljs$lang$arity$variadic = G__8159__delegate;
return G__8159;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3824__auto____8243 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____8243))
{return or__3824__auto____8243;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____8244 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____8244))
{return or__3824__auto____8244;
} else
{var or__3824__auto____8245 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____8245))
{return or__3824__auto____8245;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__8314__delegate = function (x,y,z,args){
var or__3824__auto____8246 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8246))
{return or__3824__auto____8246;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__8314 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8314__delegate.call(this, x, y, z, args);
};
G__8314.cljs$lang$maxFixedArity = 3;
G__8314.cljs$lang$applyTo = (function (arglist__8315){
var x = cljs.core.first(arglist__8315);
var y = cljs.core.first(cljs.core.next(arglist__8315));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8315)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8315)));
return G__8314__delegate(x, y, z, args);
});
G__8314.cljs$lang$arity$variadic = G__8314__delegate;
return G__8314;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3824__auto____8258 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8258))
{return or__3824__auto____8258;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____8259 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8259))
{return or__3824__auto____8259;
} else
{var or__3824__auto____8260 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8260))
{return or__3824__auto____8260;
} else
{var or__3824__auto____8261 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8261))
{return or__3824__auto____8261;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____8262 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8262))
{return or__3824__auto____8262;
} else
{var or__3824__auto____8263 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8263))
{return or__3824__auto____8263;
} else
{var or__3824__auto____8264 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____8264))
{return or__3824__auto____8264;
} else
{var or__3824__auto____8265 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8265))
{return or__3824__auto____8265;
} else
{var or__3824__auto____8266 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8266))
{return or__3824__auto____8266;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__8316__delegate = function (x,y,z,args){
var or__3824__auto____8267 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8267))
{return or__3824__auto____8267;
} else
{return cljs.core.some.call(null,(function (p1__7997_SHARP_){
var or__3824__auto____8268 = p1.call(null,p1__7997_SHARP_);
if(cljs.core.truth_(or__3824__auto____8268))
{return or__3824__auto____8268;
} else
{return p2.call(null,p1__7997_SHARP_);
}
}),args);
}
};
var G__8316 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8316__delegate.call(this, x, y, z, args);
};
G__8316.cljs$lang$maxFixedArity = 3;
G__8316.cljs$lang$applyTo = (function (arglist__8317){
var x = cljs.core.first(arglist__8317);
var y = cljs.core.first(cljs.core.next(arglist__8317));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8317)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8317)));
return G__8316__delegate(x, y, z, args);
});
G__8316.cljs$lang$arity$variadic = G__8316__delegate;
return G__8316;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3824__auto____8287 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8287))
{return or__3824__auto____8287;
} else
{var or__3824__auto____8288 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8288))
{return or__3824__auto____8288;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____8289 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8289))
{return or__3824__auto____8289;
} else
{var or__3824__auto____8290 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8290))
{return or__3824__auto____8290;
} else
{var or__3824__auto____8291 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____8291))
{return or__3824__auto____8291;
} else
{var or__3824__auto____8292 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8292))
{return or__3824__auto____8292;
} else
{var or__3824__auto____8293 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8293))
{return or__3824__auto____8293;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____8294 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8294))
{return or__3824__auto____8294;
} else
{var or__3824__auto____8295 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8295))
{return or__3824__auto____8295;
} else
{var or__3824__auto____8296 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____8296))
{return or__3824__auto____8296;
} else
{var or__3824__auto____8297 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8297))
{return or__3824__auto____8297;
} else
{var or__3824__auto____8298 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8298))
{return or__3824__auto____8298;
} else
{var or__3824__auto____8299 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____8299))
{return or__3824__auto____8299;
} else
{var or__3824__auto____8300 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____8300))
{return or__3824__auto____8300;
} else
{var or__3824__auto____8301 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____8301))
{return or__3824__auto____8301;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__8318__delegate = function (x,y,z,args){
var or__3824__auto____8302 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8302))
{return or__3824__auto____8302;
} else
{return cljs.core.some.call(null,(function (p1__7998_SHARP_){
var or__3824__auto____8303 = p1.call(null,p1__7998_SHARP_);
if(cljs.core.truth_(or__3824__auto____8303))
{return or__3824__auto____8303;
} else
{var or__3824__auto____8304 = p2.call(null,p1__7998_SHARP_);
if(cljs.core.truth_(or__3824__auto____8304))
{return or__3824__auto____8304;
} else
{return p3.call(null,p1__7998_SHARP_);
}
}
}),args);
}
};
var G__8318 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8318__delegate.call(this, x, y, z, args);
};
G__8318.cljs$lang$maxFixedArity = 3;
G__8318.cljs$lang$applyTo = (function (arglist__8319){
var x = cljs.core.first(arglist__8319);
var y = cljs.core.first(cljs.core.next(arglist__8319));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8319)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8319)));
return G__8318__delegate(x, y, z, args);
});
G__8318.cljs$lang$arity$variadic = G__8318__delegate;
return G__8318;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__8320__delegate = function (p1,p2,p3,ps){
var ps__8305 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__7999_SHARP_){
return p1__7999_SHARP_.call(null,x);
}),ps__8305);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__8000_SHARP_){
var or__3824__auto____8310 = p1__8000_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8310))
{return or__3824__auto____8310;
} else
{return p1__8000_SHARP_.call(null,y);
}
}),ps__8305);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__8001_SHARP_){
var or__3824__auto____8311 = p1__8001_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8311))
{return or__3824__auto____8311;
} else
{var or__3824__auto____8312 = p1__8001_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____8312))
{return or__3824__auto____8312;
} else
{return p1__8001_SHARP_.call(null,z);
}
}
}),ps__8305);
});
var spn__4 = (function() { 
var G__8321__delegate = function (x,y,z,args){
var or__3824__auto____8313 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8313))
{return or__3824__auto____8313;
} else
{return cljs.core.some.call(null,(function (p1__8002_SHARP_){
return cljs.core.some.call(null,p1__8002_SHARP_,args);
}),ps__8305);
}
};
var G__8321 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8321__delegate.call(this, x, y, z, args);
};
G__8321.cljs$lang$maxFixedArity = 3;
G__8321.cljs$lang$applyTo = (function (arglist__8322){
var x = cljs.core.first(arglist__8322);
var y = cljs.core.first(cljs.core.next(arglist__8322));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8322)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8322)));
return G__8321__delegate(x, y, z, args);
});
G__8321.cljs$lang$arity$variadic = G__8321__delegate;
return G__8321;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__8320 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8320__delegate.call(this, p1, p2, p3, ps);
};
G__8320.cljs$lang$maxFixedArity = 3;
G__8320.cljs$lang$applyTo = (function (arglist__8323){
var p1 = cljs.core.first(arglist__8323);
var p2 = cljs.core.first(cljs.core.next(arglist__8323));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8323)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8323)));
return G__8320__delegate(p1, p2, p3, ps);
});
G__8320.cljs$lang$arity$variadic = G__8320__delegate;
return G__8320;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8342 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8342)
{var s__8343 = temp__3974__auto____8342;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8343))
{var c__8344 = cljs.core.chunk_first.call(null,s__8343);
var size__8345 = cljs.core.count.call(null,c__8344);
var b__8346 = cljs.core.chunk_buffer.call(null,size__8345);
var n__2857__auto____8347 = size__8345;
var i__8348 = 0;
while(true){
if((i__8348 < n__2857__auto____8347))
{cljs.core.chunk_append.call(null,b__8346,f.call(null,cljs.core._nth.call(null,c__8344,i__8348)));
{
var G__8360 = (i__8348 + 1);
i__8348 = G__8360;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8346),map.call(null,f,cljs.core.chunk_rest.call(null,s__8343)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__8343)),map.call(null,f,cljs.core.rest.call(null,s__8343)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8349 = cljs.core.seq.call(null,c1);
var s2__8350 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8351 = s1__8349;
if(and__3822__auto____8351)
{return s2__8350;
} else
{return and__3822__auto____8351;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8349),cljs.core.first.call(null,s2__8350)),map.call(null,f,cljs.core.rest.call(null,s1__8349),cljs.core.rest.call(null,s2__8350)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8352 = cljs.core.seq.call(null,c1);
var s2__8353 = cljs.core.seq.call(null,c2);
var s3__8354 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____8355 = s1__8352;
if(and__3822__auto____8355)
{var and__3822__auto____8356 = s2__8353;
if(and__3822__auto____8356)
{return s3__8354;
} else
{return and__3822__auto____8356;
}
} else
{return and__3822__auto____8355;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8352),cljs.core.first.call(null,s2__8353),cljs.core.first.call(null,s3__8354)),map.call(null,f,cljs.core.rest.call(null,s1__8352),cljs.core.rest.call(null,s2__8353),cljs.core.rest.call(null,s3__8354)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__8361__delegate = function (f,c1,c2,c3,colls){
var step__8359 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8358 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8358))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__8358),step.call(null,map.call(null,cljs.core.rest,ss__8358)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__8163_SHARP_){
return cljs.core.apply.call(null,f,p1__8163_SHARP_);
}),step__8359.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__8361 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8361__delegate.call(this, f, c1, c2, c3, colls);
};
G__8361.cljs$lang$maxFixedArity = 4;
G__8361.cljs$lang$applyTo = (function (arglist__8362){
var f = cljs.core.first(arglist__8362);
var c1 = cljs.core.first(cljs.core.next(arglist__8362));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8362)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8362))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8362))));
return G__8361__delegate(f, c1, c2, c3, colls);
});
G__8361.cljs$lang$arity$variadic = G__8361__delegate;
return G__8361;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__3974__auto____8365 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8365)
{var s__8366 = temp__3974__auto____8365;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__8366),take.call(null,(n - 1),cljs.core.rest.call(null,s__8366)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__8372 = (function (n,coll){
while(true){
var s__8370 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8371 = (n > 0);
if(and__3822__auto____8371)
{return s__8370;
} else
{return and__3822__auto____8371;
}
})()))
{{
var G__8373 = (n - 1);
var G__8374 = cljs.core.rest.call(null,s__8370);
n = G__8373;
coll = G__8374;
continue;
}
} else
{return s__8370;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8372.call(null,n,coll);
}),null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__8377 = cljs.core.seq.call(null,coll);
var lead__8378 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__8378)
{{
var G__8379 = cljs.core.next.call(null,s__8377);
var G__8380 = cljs.core.next.call(null,lead__8378);
s__8377 = G__8379;
lead__8378 = G__8380;
continue;
}
} else
{return s__8377;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__8386 = (function (pred,coll){
while(true){
var s__8384 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8385 = s__8384;
if(and__3822__auto____8385)
{return pred.call(null,cljs.core.first.call(null,s__8384));
} else
{return and__3822__auto____8385;
}
})()))
{{
var G__8387 = pred;
var G__8388 = cljs.core.rest.call(null,s__8384);
pred = G__8387;
coll = G__8388;
continue;
}
} else
{return s__8384;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8386.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8391 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8391)
{var s__8392 = temp__3974__auto____8391;
return cljs.core.concat.call(null,s__8392,cycle.call(null,s__8392));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)], true);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
}),null));
});
var repeat__2 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
}),null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}),null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8397 = cljs.core.seq.call(null,c1);
var s2__8398 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8399 = s1__8397;
if(and__3822__auto____8399)
{return s2__8398;
} else
{return and__3822__auto____8399;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__8397),cljs.core.cons.call(null,cljs.core.first.call(null,s2__8398),interleave.call(null,cljs.core.rest.call(null,s1__8397),cljs.core.rest.call(null,s2__8398))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__8401__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8400 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8400))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__8400),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__8400)));
} else
{return null;
}
}),null));
};
var G__8401 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8401__delegate.call(this, c1, c2, colls);
};
G__8401.cljs$lang$maxFixedArity = 2;
G__8401.cljs$lang$applyTo = (function (arglist__8402){
var c1 = cljs.core.first(arglist__8402);
var c2 = cljs.core.first(cljs.core.next(arglist__8402));
var colls = cljs.core.rest(cljs.core.next(arglist__8402));
return G__8401__delegate(c1, c2, colls);
});
G__8401.cljs$lang$arity$variadic = G__8401__delegate;
return G__8401;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__8412 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____8410 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____8410)
{var coll__8411 = temp__3971__auto____8410;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__8411),cat.call(null,cljs.core.rest.call(null,coll__8411),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__8412.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3 = (function() { 
var G__8413__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__8413 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8413__delegate.call(this, f, coll, colls);
};
G__8413.cljs$lang$maxFixedArity = 2;
G__8413.cljs$lang$applyTo = (function (arglist__8414){
var f = cljs.core.first(arglist__8414);
var coll = cljs.core.first(cljs.core.next(arglist__8414));
var colls = cljs.core.rest(cljs.core.next(arglist__8414));
return G__8413__delegate(f, coll, colls);
});
G__8413.cljs$lang$arity$variadic = G__8413__delegate;
return G__8413;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8424 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8424)
{var s__8425 = temp__3974__auto____8424;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8425))
{var c__8426 = cljs.core.chunk_first.call(null,s__8425);
var size__8427 = cljs.core.count.call(null,c__8426);
var b__8428 = cljs.core.chunk_buffer.call(null,size__8427);
var n__2857__auto____8429 = size__8427;
var i__8430 = 0;
while(true){
if((i__8430 < n__2857__auto____8429))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__8426,i__8430))))
{cljs.core.chunk_append.call(null,b__8428,cljs.core._nth.call(null,c__8426,i__8430));
} else
{}
{
var G__8433 = (i__8430 + 1);
i__8430 = G__8433;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8428),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__8425)));
} else
{var f__8431 = cljs.core.first.call(null,s__8425);
var r__8432 = cljs.core.rest.call(null,s__8425);
if(cljs.core.truth_(pred.call(null,f__8431)))
{return cljs.core.cons.call(null,f__8431,filter.call(null,pred,r__8432));
} else
{return filter.call(null,pred,r__8432);
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__8436 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__8436.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__8434_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__8434_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__8440__8441 = to;
if(G__8440__8441)
{if((function (){var or__3824__auto____8442 = (G__8440__8441.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____8442)
{return or__3824__auto____8442;
} else
{return G__8440__8441.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__8440__8441.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8440__8441);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8440__8441);
}
})())
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
return cljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__8443__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__8443 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8443__delegate.call(this, f, c1, c2, c3, colls);
};
G__8443.cljs$lang$maxFixedArity = 4;
G__8443.cljs$lang$applyTo = (function (arglist__8444){
var f = cljs.core.first(arglist__8444);
var c1 = cljs.core.first(cljs.core.next(arglist__8444));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8444)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8444))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8444))));
return G__8443__delegate(f, c1, c2, c3, colls);
});
G__8443.cljs$lang$arity$variadic = G__8443__delegate;
return G__8443;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.truth_(pred.call(null,o)))
{return cljs.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8451 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8451)
{var s__8452 = temp__3974__auto____8451;
var p__8453 = cljs.core.take.call(null,n,s__8452);
if((n === cljs.core.count.call(null,p__8453)))
{return cljs.core.cons.call(null,p__8453,partition.call(null,n,step,cljs.core.drop.call(null,step,s__8452)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8454 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8454)
{var s__8455 = temp__3974__auto____8454;
var p__8456 = cljs.core.take.call(null,n,s__8455);
if((n === cljs.core.count.call(null,p__8456)))
{return cljs.core.cons.call(null,p__8456,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__8455)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__8456,pad)));
}
} else
{return null;
}
}),null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__8461 = cljs.core.lookup_sentinel;
var m__8462 = m;
var ks__8463 = cljs.core.seq.call(null,ks);
while(true){
if(ks__8463)
{var m__8464 = cljs.core._lookup.call(null,m__8462,cljs.core.first.call(null,ks__8463),sentinel__8461);
if((sentinel__8461 === m__8464))
{return not_found;
} else
{{
var G__8465 = sentinel__8461;
var G__8466 = m__8464;
var G__8467 = cljs.core.next.call(null,ks__8463);
sentinel__8461 = G__8465;
m__8462 = G__8466;
ks__8463 = G__8467;
continue;
}
}
} else
{return m__8462;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__8468,v){
var vec__8473__8474 = p__8468;
var k__8475 = cljs.core.nth.call(null,vec__8473__8474,0,null);
var ks__8476 = cljs.core.nthnext.call(null,vec__8473__8474,1);
if(cljs.core.truth_(ks__8476))
{return cljs.core.assoc.call(null,m,k__8475,assoc_in.call(null,cljs.core._lookup.call(null,m,k__8475,null),ks__8476,v));
} else
{return cljs.core.assoc.call(null,m,k__8475,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__8477,f,args){
var vec__8482__8483 = p__8477;
var k__8484 = cljs.core.nth.call(null,vec__8482__8483,0,null);
var ks__8485 = cljs.core.nthnext.call(null,vec__8482__8483,1);
if(cljs.core.truth_(ks__8485))
{return cljs.core.assoc.call(null,m,k__8484,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__8484,null),ks__8485,f,args));
} else
{return cljs.core.assoc.call(null,m,k__8484,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__8484,null),args));
}
};
var update_in = function (m,p__8477,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__8477, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__8486){
var m = cljs.core.first(arglist__8486);
var p__8477 = cljs.core.first(cljs.core.next(arglist__8486));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8486)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8486)));
return update_in__delegate(m, p__8477, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8489 = this;
var h__2522__auto____8490 = this__8489.__hash;
if(!((h__2522__auto____8490 == null)))
{return h__2522__auto____8490;
} else
{var h__2522__auto____8491 = cljs.core.hash_coll.call(null,coll);
this__8489.__hash = h__2522__auto____8491;
return h__2522__auto____8491;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8492 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8493 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8494 = this;
var new_array__8495 = this__8494.array.slice();
(new_array__8495[k] = v);
return (new cljs.core.Vector(this__8494.meta,new_array__8495,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__8526 = null;
var G__8526__2 = (function (this_sym8496,k){
var this__8498 = this;
var this_sym8496__8499 = this;
var coll__8500 = this_sym8496__8499;
return coll__8500.cljs$core$ILookup$_lookup$arity$2(coll__8500,k);
});
var G__8526__3 = (function (this_sym8497,k,not_found){
var this__8498 = this;
var this_sym8497__8501 = this;
var coll__8502 = this_sym8497__8501;
return coll__8502.cljs$core$ILookup$_lookup$arity$3(coll__8502,k,not_found);
});
G__8526 = function(this_sym8497,k,not_found){
switch(arguments.length){
case 2:
return G__8526__2.call(this,this_sym8497,k);
case 3:
return G__8526__3.call(this,this_sym8497,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8526;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym8487,args8488){
var this__8503 = this;
return this_sym8487.call.apply(this_sym8487,[this_sym8487].concat(args8488.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8504 = this;
var new_array__8505 = this__8504.array.slice();
new_array__8505.push(o);
return (new cljs.core.Vector(this__8504.meta,new_array__8505,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__8506 = this;
var this__8507 = this;
return cljs.core.pr_str.call(null,this__8507);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8508 = this;
return cljs.core.ci_reduce.call(null,this__8508.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8509 = this;
return cljs.core.ci_reduce.call(null,this__8509.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8510 = this;
if((this__8510.array.length > 0))
{var vector_seq__8511 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__8510.array.length))
{return cljs.core.cons.call(null,(this__8510.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__8511.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8512 = this;
return this__8512.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8513 = this;
var count__8514 = this__8513.array.length;
if((count__8514 > 0))
{return (this__8513.array[(count__8514 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8515 = this;
if((this__8515.array.length > 0))
{var new_array__8516 = this__8515.array.slice();
new_array__8516.pop();
return (new cljs.core.Vector(this__8515.meta,new_array__8516,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8517 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8518 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8519 = this;
return (new cljs.core.Vector(meta,this__8519.array,this__8519.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8520 = this;
return this__8520.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8521 = this;
if((function (){var and__3822__auto____8522 = (0 <= n);
if(and__3822__auto____8522)
{return (n < this__8521.array.length);
} else
{return and__3822__auto____8522;
}
})())
{return (this__8521.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8523 = this;
if((function (){var and__3822__auto____8524 = (0 <= n);
if(and__3822__auto____8524)
{return (n < this__8523.array.length);
} else
{return and__3822__auto____8524;
}
})())
{return (this__8523.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8525 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8525.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__2640__auto__){
return cljs.core.list.call(null,"cljs.core/VectorNode");
});
cljs.core.VectorNode;
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.call(null,32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,node.arr.slice()));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__8528 = pv.cnt;
if((cnt__8528 < 32))
{return 0;
} else
{return (((cnt__8528 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__8534 = level;
var ret__8535 = node;
while(true){
if((ll__8534 === 0))
{return ret__8535;
} else
{var embed__8536 = ret__8535;
var r__8537 = cljs.core.pv_fresh_node.call(null,edit);
var ___8538 = cljs.core.pv_aset.call(null,r__8537,0,embed__8536);
{
var G__8539 = (ll__8534 - 5);
var G__8540 = r__8537;
ll__8534 = G__8539;
ret__8535 = G__8540;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__8546 = cljs.core.pv_clone_node.call(null,parent);
var subidx__8547 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__8546,subidx__8547,tailnode);
return ret__8546;
} else
{var child__8548 = cljs.core.pv_aget.call(null,parent,subidx__8547);
if(!((child__8548 == null)))
{var node_to_insert__8549 = push_tail.call(null,pv,(level - 5),child__8548,tailnode);
cljs.core.pv_aset.call(null,ret__8546,subidx__8547,node_to_insert__8549);
return ret__8546;
} else
{var node_to_insert__8550 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__8546,subidx__8547,node_to_insert__8550);
return ret__8546;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____8554 = (0 <= i);
if(and__3822__auto____8554)
{return (i < pv.cnt);
} else
{return and__3822__auto____8554;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__8555 = pv.root;
var level__8556 = pv.shift;
while(true){
if((level__8556 > 0))
{{
var G__8557 = cljs.core.pv_aget.call(null,node__8555,((i >>> level__8556) & 31));
var G__8558 = (level__8556 - 5);
node__8555 = G__8557;
level__8556 = G__8558;
continue;
}
} else
{return node__8555.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__8561 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__8561,(i & 31),val);
return ret__8561;
} else
{var subidx__8562 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8561,subidx__8562,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8562),i,val));
return ret__8561;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__8568 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8569 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8568));
if((function (){var and__3822__auto____8570 = (new_child__8569 == null);
if(and__3822__auto____8570)
{return (subidx__8568 === 0);
} else
{return and__3822__auto____8570;
}
})())
{return null;
} else
{var ret__8571 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8571,subidx__8568,new_child__8569);
return ret__8571;
}
} else
{if((subidx__8568 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__8572 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8572,subidx__8568,null);
return ret__8572;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8575 = this;
return (new cljs.core.TransientVector(this__8575.cnt,this__8575.shift,cljs.core.tv_editable_root.call(null,this__8575.root),cljs.core.tv_editable_tail.call(null,this__8575.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8576 = this;
var h__2522__auto____8577 = this__8576.__hash;
if(!((h__2522__auto____8577 == null)))
{return h__2522__auto____8577;
} else
{var h__2522__auto____8578 = cljs.core.hash_coll.call(null,coll);
this__8576.__hash = h__2522__auto____8578;
return h__2522__auto____8578;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8579 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8580 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8581 = this;
if((function (){var and__3822__auto____8582 = (0 <= k);
if(and__3822__auto____8582)
{return (k < this__8581.cnt);
} else
{return and__3822__auto____8582;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__8583 = this__8581.tail.slice();
(new_tail__8583[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__8581.meta,this__8581.cnt,this__8581.shift,this__8581.root,new_tail__8583,null));
} else
{return (new cljs.core.PersistentVector(this__8581.meta,this__8581.cnt,this__8581.shift,cljs.core.do_assoc.call(null,coll,this__8581.shift,this__8581.root,k,v),this__8581.tail,null));
}
} else
{if((k === this__8581.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__8581.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__8631 = null;
var G__8631__2 = (function (this_sym8584,k){
var this__8586 = this;
var this_sym8584__8587 = this;
var coll__8588 = this_sym8584__8587;
return coll__8588.cljs$core$ILookup$_lookup$arity$2(coll__8588,k);
});
var G__8631__3 = (function (this_sym8585,k,not_found){
var this__8586 = this;
var this_sym8585__8589 = this;
var coll__8590 = this_sym8585__8589;
return coll__8590.cljs$core$ILookup$_lookup$arity$3(coll__8590,k,not_found);
});
G__8631 = function(this_sym8585,k,not_found){
switch(arguments.length){
case 2:
return G__8631__2.call(this,this_sym8585,k);
case 3:
return G__8631__3.call(this,this_sym8585,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8631;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym8573,args8574){
var this__8591 = this;
return this_sym8573.call.apply(this_sym8573,[this_sym8573].concat(args8574.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__8592 = this;
var step_init__8593 = [0,init];
var i__8594 = 0;
while(true){
if((i__8594 < this__8592.cnt))
{var arr__8595 = cljs.core.array_for.call(null,v,i__8594);
var len__8596 = arr__8595.length;
var init__8600 = (function (){var j__8597 = 0;
var init__8598 = (step_init__8593[1]);
while(true){
if((j__8597 < len__8596))
{var init__8599 = f.call(null,init__8598,(j__8597 + i__8594),(arr__8595[j__8597]));
if(cljs.core.reduced_QMARK_.call(null,init__8599))
{return init__8599;
} else
{{
var G__8632 = (j__8597 + 1);
var G__8633 = init__8599;
j__8597 = G__8632;
init__8598 = G__8633;
continue;
}
}
} else
{(step_init__8593[0] = len__8596);
(step_init__8593[1] = init__8598);
return init__8598;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8600))
{return cljs.core.deref.call(null,init__8600);
} else
{{
var G__8634 = (i__8594 + (step_init__8593[0]));
i__8594 = G__8634;
continue;
}
}
} else
{return (step_init__8593[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8601 = this;
if(((this__8601.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__8602 = this__8601.tail.slice();
new_tail__8602.push(o);
return (new cljs.core.PersistentVector(this__8601.meta,(this__8601.cnt + 1),this__8601.shift,this__8601.root,new_tail__8602,null));
} else
{var root_overflow_QMARK___8603 = ((this__8601.cnt >>> 5) > (1 << this__8601.shift));
var new_shift__8604 = ((root_overflow_QMARK___8603)?(this__8601.shift + 5):this__8601.shift);
var new_root__8606 = ((root_overflow_QMARK___8603)?(function (){var n_r__8605 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__8605,0,this__8601.root);
cljs.core.pv_aset.call(null,n_r__8605,1,cljs.core.new_path.call(null,null,this__8601.shift,(new cljs.core.VectorNode(null,this__8601.tail))));
return n_r__8605;
})():cljs.core.push_tail.call(null,coll,this__8601.shift,this__8601.root,(new cljs.core.VectorNode(null,this__8601.tail))));
return (new cljs.core.PersistentVector(this__8601.meta,(this__8601.cnt + 1),new_shift__8604,new_root__8606,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8607 = this;
if((this__8607.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__8607.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__8608 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__8609 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__8610 = this;
var this__8611 = this;
return cljs.core.pr_str.call(null,this__8611);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8612 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8613 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8614 = this;
if((this__8614.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8615 = this;
return this__8615.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8616 = this;
if((this__8616.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__8616.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8617 = this;
if((this__8617.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8617.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8617.meta);
} else
{if((1 < (this__8617.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__8617.meta,(this__8617.cnt - 1),this__8617.shift,this__8617.root,this__8617.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__8618 = cljs.core.array_for.call(null,coll,(this__8617.cnt - 2));
var nr__8619 = cljs.core.pop_tail.call(null,coll,this__8617.shift,this__8617.root);
var new_root__8620 = (((nr__8619 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__8619);
var cnt_1__8621 = (this__8617.cnt - 1);
if((function (){var and__3822__auto____8622 = (5 < this__8617.shift);
if(and__3822__auto____8622)
{return (cljs.core.pv_aget.call(null,new_root__8620,1) == null);
} else
{return and__3822__auto____8622;
}
})())
{return (new cljs.core.PersistentVector(this__8617.meta,cnt_1__8621,(this__8617.shift - 5),cljs.core.pv_aget.call(null,new_root__8620,0),new_tail__8618,null));
} else
{return (new cljs.core.PersistentVector(this__8617.meta,cnt_1__8621,this__8617.shift,new_root__8620,new_tail__8618,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8623 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8624 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8625 = this;
return (new cljs.core.PersistentVector(meta,this__8625.cnt,this__8625.shift,this__8625.root,this__8625.tail,this__8625.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8626 = this;
return this__8626.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8627 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8628 = this;
if((function (){var and__3822__auto____8629 = (0 <= n);
if(and__3822__auto____8629)
{return (n < this__8628.cnt);
} else
{return and__3822__auto____8629;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8630 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8630.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__8635 = xs.length;
var xs__8636 = (((no_clone === true))?xs:xs.slice());
if((l__8635 < 32))
{return (new cljs.core.PersistentVector(null,l__8635,5,cljs.core.PersistentVector.EMPTY_NODE,xs__8636,null));
} else
{var node__8637 = xs__8636.slice(0,32);
var v__8638 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__8637,null));
var i__8639 = 32;
var out__8640 = cljs.core._as_transient.call(null,v__8638);
while(true){
if((i__8639 < l__8635))
{{
var G__8641 = (i__8639 + 1);
var G__8642 = cljs.core.conj_BANG_.call(null,out__8640,(xs__8636[i__8639]));
i__8639 = G__8641;
out__8640 = G__8642;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8640);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core._as_transient.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__8643){
var args = cljs.core.seq(arglist__8643);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27525356;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8644 = this;
if(((this__8644.off + 1) < this__8644.node.length))
{var s__8645 = cljs.core.chunked_seq.call(null,this__8644.vec,this__8644.node,this__8644.i,(this__8644.off + 1));
if((s__8645 == null))
{return null;
} else
{return s__8645;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8646 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8647 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8648 = this;
return (this__8648.node[this__8648.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8649 = this;
if(((this__8649.off + 1) < this__8649.node.length))
{var s__8650 = cljs.core.chunked_seq.call(null,this__8649.vec,this__8649.node,this__8649.i,(this__8649.off + 1));
if((s__8650 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8650;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__8651 = this;
var l__8652 = this__8651.node.length;
var s__8653 = ((((this__8651.i + l__8652) < cljs.core._count.call(null,this__8651.vec)))?cljs.core.chunked_seq.call(null,this__8651.vec,(this__8651.i + l__8652),0):null);
if((s__8653 == null))
{return null;
} else
{return s__8653;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8654 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__8655 = this;
return cljs.core.chunked_seq.call(null,this__8655.vec,this__8655.node,this__8655.i,this__8655.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__8656 = this;
return this__8656.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8657 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8657.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__8658 = this;
return cljs.core.array_chunk.call(null,this__8658.node,this__8658.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__8659 = this;
var l__8660 = this__8659.node.length;
var s__8661 = ((((this__8659.i + l__8660) < cljs.core._count.call(null,this__8659.vec)))?cljs.core.chunked_seq.call(null,this__8659.vec,(this__8659.i + l__8660),0):null);
if((s__8661 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8661;
}
});
cljs.core.ChunkedSeq;
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return chunked_seq.call(null,vec,cljs.core.array_for.call(null,vec,i),i,off,null);
});
var chunked_seq__4 = (function (vec,node,i,off){
return chunked_seq.call(null,vec,node,i,off,null);
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw('Invalid arity: ' + arguments.length);
};
chunked_seq.cljs$lang$arity$3 = chunked_seq__3;
chunked_seq.cljs$lang$arity$4 = chunked_seq__4;
chunked_seq.cljs$lang$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8664 = this;
var h__2522__auto____8665 = this__8664.__hash;
if(!((h__2522__auto____8665 == null)))
{return h__2522__auto____8665;
} else
{var h__2522__auto____8666 = cljs.core.hash_coll.call(null,coll);
this__8664.__hash = h__2522__auto____8666;
return h__2522__auto____8666;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8667 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8668 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__8669 = this;
var v_pos__8670 = (this__8669.start + key);
return (new cljs.core.Subvec(this__8669.meta,cljs.core._assoc.call(null,this__8669.v,v_pos__8670,val),this__8669.start,((this__8669.end > (v_pos__8670 + 1)) ? this__8669.end : (v_pos__8670 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__8696 = null;
var G__8696__2 = (function (this_sym8671,k){
var this__8673 = this;
var this_sym8671__8674 = this;
var coll__8675 = this_sym8671__8674;
return coll__8675.cljs$core$ILookup$_lookup$arity$2(coll__8675,k);
});
var G__8696__3 = (function (this_sym8672,k,not_found){
var this__8673 = this;
var this_sym8672__8676 = this;
var coll__8677 = this_sym8672__8676;
return coll__8677.cljs$core$ILookup$_lookup$arity$3(coll__8677,k,not_found);
});
G__8696 = function(this_sym8672,k,not_found){
switch(arguments.length){
case 2:
return G__8696__2.call(this,this_sym8672,k);
case 3:
return G__8696__3.call(this,this_sym8672,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8696;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym8662,args8663){
var this__8678 = this;
return this_sym8662.call.apply(this_sym8662,[this_sym8662].concat(args8663.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8679 = this;
return (new cljs.core.Subvec(this__8679.meta,cljs.core._assoc_n.call(null,this__8679.v,this__8679.end,o),this__8679.start,(this__8679.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__8680 = this;
var this__8681 = this;
return cljs.core.pr_str.call(null,this__8681);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8682 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8683 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8684 = this;
var subvec_seq__8685 = (function subvec_seq(i){
if((i === this__8684.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__8684.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__8685.call(null,this__8684.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8686 = this;
return (this__8686.end - this__8686.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8687 = this;
return cljs.core._nth.call(null,this__8687.v,(this__8687.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8688 = this;
if((this__8688.start === this__8688.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__8688.meta,this__8688.v,this__8688.start,(this__8688.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8689 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8690 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8691 = this;
return (new cljs.core.Subvec(meta,this__8691.v,this__8691.start,this__8691.end,this__8691.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8692 = this;
return this__8692.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8693 = this;
return cljs.core._nth.call(null,this__8693.v,(this__8693.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8694 = this;
return cljs.core._nth.call(null,this__8694.v,(this__8694.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8695 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8695.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,node.arr.slice()));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},node.arr.slice()));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret__8698 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__8698,0,tl.length);
return ret__8698;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__8702 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__8703 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8702,subidx__8703,(((level === 5))?tail_node:(function (){var child__8704 = cljs.core.pv_aget.call(null,ret__8702,subidx__8703);
if(!((child__8704 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__8704,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__8702;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__8709 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__8710 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8711 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__8709,subidx__8710));
if((function (){var and__3822__auto____8712 = (new_child__8711 == null);
if(and__3822__auto____8712)
{return (subidx__8710 === 0);
} else
{return and__3822__auto____8712;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__8709,subidx__8710,new_child__8711);
return node__8709;
}
} else
{if((subidx__8710 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__8709,subidx__8710,null);
return node__8709;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____8717 = (0 <= i);
if(and__3822__auto____8717)
{return (i < tv.cnt);
} else
{return and__3822__auto____8717;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__8718 = tv.root;
var node__8719 = root__8718;
var level__8720 = tv.shift;
while(true){
if((level__8720 > 0))
{{
var G__8721 = cljs.core.tv_ensure_editable.call(null,root__8718.edit,cljs.core.pv_aget.call(null,node__8719,((i >>> level__8720) & 31)));
var G__8722 = (level__8720 - 5);
node__8719 = G__8721;
level__8720 = G__8722;
continue;
}
} else
{return node__8719.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 22;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__8762 = null;
var G__8762__2 = (function (this_sym8725,k){
var this__8727 = this;
var this_sym8725__8728 = this;
var coll__8729 = this_sym8725__8728;
return coll__8729.cljs$core$ILookup$_lookup$arity$2(coll__8729,k);
});
var G__8762__3 = (function (this_sym8726,k,not_found){
var this__8727 = this;
var this_sym8726__8730 = this;
var coll__8731 = this_sym8726__8730;
return coll__8731.cljs$core$ILookup$_lookup$arity$3(coll__8731,k,not_found);
});
G__8762 = function(this_sym8726,k,not_found){
switch(arguments.length){
case 2:
return G__8762__2.call(this,this_sym8726,k);
case 3:
return G__8762__3.call(this,this_sym8726,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8762;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym8723,args8724){
var this__8732 = this;
return this_sym8723.call.apply(this_sym8723,[this_sym8723].concat(args8724.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8733 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8734 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8735 = this;
if(this__8735.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8736 = this;
if((function (){var and__3822__auto____8737 = (0 <= n);
if(and__3822__auto____8737)
{return (n < this__8736.cnt);
} else
{return and__3822__auto____8737;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8738 = this;
if(this__8738.root.edit)
{return this__8738.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__8739 = this;
if(this__8739.root.edit)
{if((function (){var and__3822__auto____8740 = (0 <= n);
if(and__3822__auto____8740)
{return (n < this__8739.cnt);
} else
{return and__3822__auto____8740;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__8739.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__8745 = (function go(level,node){
var node__8743 = cljs.core.tv_ensure_editable.call(null,this__8739.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__8743,(n & 31),val);
return node__8743;
} else
{var subidx__8744 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__8743,subidx__8744,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__8743,subidx__8744)));
return node__8743;
}
}).call(null,this__8739.shift,this__8739.root);
this__8739.root = new_root__8745;
return tcoll;
}
} else
{if((n === this__8739.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__8739.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var this__8746 = this;
if(this__8746.root.edit)
{if((this__8746.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8746.cnt))
{this__8746.cnt = 0;
return tcoll;
} else
{if((((this__8746.cnt - 1) & 31) > 0))
{this__8746.cnt = (this__8746.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__8747 = cljs.core.editable_array_for.call(null,tcoll,(this__8746.cnt - 2));
var new_root__8749 = (function (){var nr__8748 = cljs.core.tv_pop_tail.call(null,tcoll,this__8746.shift,this__8746.root);
if(!((nr__8748 == null)))
{return nr__8748;
} else
{return (new cljs.core.VectorNode(this__8746.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____8750 = (5 < this__8746.shift);
if(and__3822__auto____8750)
{return (cljs.core.pv_aget.call(null,new_root__8749,1) == null);
} else
{return and__3822__auto____8750;
}
})())
{var new_root__8751 = cljs.core.tv_ensure_editable.call(null,this__8746.root.edit,cljs.core.pv_aget.call(null,new_root__8749,0));
this__8746.root = new_root__8751;
this__8746.shift = (this__8746.shift - 5);
this__8746.cnt = (this__8746.cnt - 1);
this__8746.tail = new_tail__8747;
return tcoll;
} else
{this__8746.root = new_root__8749;
this__8746.cnt = (this__8746.cnt - 1);
this__8746.tail = new_tail__8747;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8752 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8753 = this;
if(this__8753.root.edit)
{if(((this__8753.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__8753.tail[(this__8753.cnt & 31)] = o);
this__8753.cnt = (this__8753.cnt + 1);
return tcoll;
} else
{var tail_node__8754 = (new cljs.core.VectorNode(this__8753.root.edit,this__8753.tail));
var new_tail__8755 = cljs.core.make_array.call(null,32);
(new_tail__8755[0] = o);
this__8753.tail = new_tail__8755;
if(((this__8753.cnt >>> 5) > (1 << this__8753.shift)))
{var new_root_array__8756 = cljs.core.make_array.call(null,32);
var new_shift__8757 = (this__8753.shift + 5);
(new_root_array__8756[0] = this__8753.root);
(new_root_array__8756[1] = cljs.core.new_path.call(null,this__8753.root.edit,this__8753.shift,tail_node__8754));
this__8753.root = (new cljs.core.VectorNode(this__8753.root.edit,new_root_array__8756));
this__8753.shift = new_shift__8757;
this__8753.cnt = (this__8753.cnt + 1);
return tcoll;
} else
{var new_root__8758 = cljs.core.tv_push_tail.call(null,tcoll,this__8753.shift,this__8753.root,tail_node__8754);
this__8753.root = new_root__8758;
this__8753.cnt = (this__8753.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8759 = this;
if(this__8759.root.edit)
{this__8759.root.edit = null;
var len__8760 = (this__8759.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__8761 = cljs.core.make_array.call(null,len__8760);
cljs.core.array_copy.call(null,this__8759.tail,0,trimmed_tail__8761,0,len__8760);
return (new cljs.core.PersistentVector(null,this__8759.cnt,this__8759.shift,this__8759.root,trimmed_tail__8761,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8763 = this;
var h__2522__auto____8764 = this__8763.__hash;
if(!((h__2522__auto____8764 == null)))
{return h__2522__auto____8764;
} else
{var h__2522__auto____8765 = cljs.core.hash_coll.call(null,coll);
this__8763.__hash = h__2522__auto____8765;
return h__2522__auto____8765;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8766 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__8767 = this;
var this__8768 = this;
return cljs.core.pr_str.call(null,this__8768);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8769 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8770 = this;
return cljs.core._first.call(null,this__8770.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8771 = this;
var temp__3971__auto____8772 = cljs.core.next.call(null,this__8771.front);
if(temp__3971__auto____8772)
{var f1__8773 = temp__3971__auto____8772;
return (new cljs.core.PersistentQueueSeq(this__8771.meta,f1__8773,this__8771.rear,null));
} else
{if((this__8771.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__8771.meta,this__8771.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8774 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8775 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__8775.front,this__8775.rear,this__8775.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8776 = this;
return this__8776.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8777 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8777.meta);
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8778 = this;
var h__2522__auto____8779 = this__8778.__hash;
if(!((h__2522__auto____8779 == null)))
{return h__2522__auto____8779;
} else
{var h__2522__auto____8780 = cljs.core.hash_coll.call(null,coll);
this__8778.__hash = h__2522__auto____8780;
return h__2522__auto____8780;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8781 = this;
if(cljs.core.truth_(this__8781.front))
{return (new cljs.core.PersistentQueue(this__8781.meta,(this__8781.count + 1),this__8781.front,cljs.core.conj.call(null,(function (){var or__3824__auto____8782 = this__8781.rear;
if(cljs.core.truth_(or__3824__auto____8782))
{return or__3824__auto____8782;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__8781.meta,(this__8781.count + 1),cljs.core.conj.call(null,this__8781.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__8783 = this;
var this__8784 = this;
return cljs.core.pr_str.call(null,this__8784);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8785 = this;
var rear__8786 = cljs.core.seq.call(null,this__8785.rear);
if(cljs.core.truth_((function (){var or__3824__auto____8787 = this__8785.front;
if(cljs.core.truth_(or__3824__auto____8787))
{return or__3824__auto____8787;
} else
{return rear__8786;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__8785.front,cljs.core.seq.call(null,rear__8786),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8788 = this;
return this__8788.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8789 = this;
return cljs.core._first.call(null,this__8789.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8790 = this;
if(cljs.core.truth_(this__8790.front))
{var temp__3971__auto____8791 = cljs.core.next.call(null,this__8790.front);
if(temp__3971__auto____8791)
{var f1__8792 = temp__3971__auto____8791;
return (new cljs.core.PersistentQueue(this__8790.meta,(this__8790.count - 1),f1__8792,this__8790.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__8790.meta,(this__8790.count - 1),cljs.core.seq.call(null,this__8790.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8793 = this;
return cljs.core.first.call(null,this__8793.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8794 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8795 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8796 = this;
return (new cljs.core.PersistentQueue(meta,this__8796.count,this__8796.front,this__8796.rear,this__8796.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8797 = this;
return this__8797.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8798 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__8799 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,((cljs.core.map_QMARK_.call(null,y))?(((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core._lookup.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__8802 = array.length;
var i__8803 = 0;
while(true){
if((i__8803 < len__8802))
{if((k === (array[i__8803])))
{return i__8803;
} else
{{
var G__8804 = (i__8803 + incr);
i__8803 = G__8804;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__8807 = cljs.core.hash.call(null,a);
var b__8808 = cljs.core.hash.call(null,b);
if((a__8807 < b__8808))
{return -1;
} else
{if((a__8807 > b__8808))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks__8816 = m.keys;
var len__8817 = ks__8816.length;
var so__8818 = m.strobj;
var out__8819 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__8820 = 0;
var out__8821 = cljs.core.transient$.call(null,out__8819);
while(true){
if((i__8820 < len__8817))
{var k__8822 = (ks__8816[i__8820]);
{
var G__8823 = (i__8820 + 1);
var G__8824 = cljs.core.assoc_BANG_.call(null,out__8821,k__8822,(so__8818[k__8822]));
i__8820 = G__8823;
out__8821 = G__8824;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__8821,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__8830 = {};
var l__8831 = ks.length;
var i__8832 = 0;
while(true){
if((i__8832 < l__8831))
{var k__8833 = (ks[i__8832]);
(new_obj__8830[k__8833] = (obj[k__8833]));
{
var G__8834 = (i__8832 + 1);
i__8832 = G__8834;
continue;
}
} else
{}
break;
}
return new_obj__8830;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8837 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8838 = this;
var h__2522__auto____8839 = this__8838.__hash;
if(!((h__2522__auto____8839 == null)))
{return h__2522__auto____8839;
} else
{var h__2522__auto____8840 = cljs.core.hash_imap.call(null,coll);
this__8838.__hash = h__2522__auto____8840;
return h__2522__auto____8840;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8841 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8842 = this;
if((function (){var and__3822__auto____8843 = goog.isString(k);
if(and__3822__auto____8843)
{return !((cljs.core.scan_array.call(null,1,k,this__8842.keys) == null));
} else
{return and__3822__auto____8843;
}
})())
{return (this__8842.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8844 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____8845 = (this__8844.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____8845)
{return or__3824__auto____8845;
} else
{return (this__8844.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__8844.keys) == null)))
{var new_strobj__8846 = cljs.core.obj_clone.call(null,this__8844.strobj,this__8844.keys);
(new_strobj__8846[k] = v);
return (new cljs.core.ObjMap(this__8844.meta,this__8844.keys,new_strobj__8846,(this__8844.update_count + 1),null));
} else
{var new_strobj__8847 = cljs.core.obj_clone.call(null,this__8844.strobj,this__8844.keys);
var new_keys__8848 = this__8844.keys.slice();
(new_strobj__8847[k] = v);
new_keys__8848.push(k);
return (new cljs.core.ObjMap(this__8844.meta,new_keys__8848,new_strobj__8847,(this__8844.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8849 = this;
if((function (){var and__3822__auto____8850 = goog.isString(k);
if(and__3822__auto____8850)
{return !((cljs.core.scan_array.call(null,1,k,this__8849.keys) == null));
} else
{return and__3822__auto____8850;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__8872 = null;
var G__8872__2 = (function (this_sym8851,k){
var this__8853 = this;
var this_sym8851__8854 = this;
var coll__8855 = this_sym8851__8854;
return coll__8855.cljs$core$ILookup$_lookup$arity$2(coll__8855,k);
});
var G__8872__3 = (function (this_sym8852,k,not_found){
var this__8853 = this;
var this_sym8852__8856 = this;
var coll__8857 = this_sym8852__8856;
return coll__8857.cljs$core$ILookup$_lookup$arity$3(coll__8857,k,not_found);
});
G__8872 = function(this_sym8852,k,not_found){
switch(arguments.length){
case 2:
return G__8872__2.call(this,this_sym8852,k);
case 3:
return G__8872__3.call(this,this_sym8852,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8872;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym8835,args8836){
var this__8858 = this;
return this_sym8835.call.apply(this_sym8835,[this_sym8835].concat(args8836.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8859 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__8860 = this;
var this__8861 = this;
return cljs.core.pr_str.call(null,this__8861);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8862 = this;
if((this__8862.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__8825_SHARP_){
return cljs.core.vector.call(null,p1__8825_SHARP_,(this__8862.strobj[p1__8825_SHARP_]));
}),this__8862.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8863 = this;
return this__8863.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8864 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8865 = this;
return (new cljs.core.ObjMap(meta,this__8865.keys,this__8865.strobj,this__8865.update_count,this__8865.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8866 = this;
return this__8866.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8867 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__8867.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8868 = this;
if((function (){var and__3822__auto____8869 = goog.isString(k);
if(and__3822__auto____8869)
{return !((cljs.core.scan_array.call(null,1,k,this__8868.keys) == null));
} else
{return and__3822__auto____8869;
}
})())
{var new_keys__8870 = this__8868.keys.slice();
var new_strobj__8871 = cljs.core.obj_clone.call(null,this__8868.strobj,this__8868.keys);
new_keys__8870.splice(cljs.core.scan_array.call(null,1,k,new_keys__8870),1);
cljs.core.js_delete.call(null,new_strobj__8871,k);
return (new cljs.core.ObjMap(this__8868.meta,new_keys__8870,new_strobj__8871,(this__8868.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8876 = this;
var h__2522__auto____8877 = this__8876.__hash;
if(!((h__2522__auto____8877 == null)))
{return h__2522__auto____8877;
} else
{var h__2522__auto____8878 = cljs.core.hash_imap.call(null,coll);
this__8876.__hash = h__2522__auto____8878;
return h__2522__auto____8878;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8879 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8880 = this;
var bucket__8881 = (this__8880.hashobj[cljs.core.hash.call(null,k)]);
var i__8882 = (cljs.core.truth_(bucket__8881)?cljs.core.scan_array.call(null,2,k,bucket__8881):null);
if(cljs.core.truth_(i__8882))
{return (bucket__8881[(i__8882 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8883 = this;
var h__8884 = cljs.core.hash.call(null,k);
var bucket__8885 = (this__8883.hashobj[h__8884]);
if(cljs.core.truth_(bucket__8885))
{var new_bucket__8886 = bucket__8885.slice();
var new_hashobj__8887 = goog.object.clone(this__8883.hashobj);
(new_hashobj__8887[h__8884] = new_bucket__8886);
var temp__3971__auto____8888 = cljs.core.scan_array.call(null,2,k,new_bucket__8886);
if(cljs.core.truth_(temp__3971__auto____8888))
{var i__8889 = temp__3971__auto____8888;
(new_bucket__8886[(i__8889 + 1)] = v);
return (new cljs.core.HashMap(this__8883.meta,this__8883.count,new_hashobj__8887,null));
} else
{new_bucket__8886.push(k,v);
return (new cljs.core.HashMap(this__8883.meta,(this__8883.count + 1),new_hashobj__8887,null));
}
} else
{var new_hashobj__8890 = goog.object.clone(this__8883.hashobj);
(new_hashobj__8890[h__8884] = [k,v]);
return (new cljs.core.HashMap(this__8883.meta,(this__8883.count + 1),new_hashobj__8890,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8891 = this;
var bucket__8892 = (this__8891.hashobj[cljs.core.hash.call(null,k)]);
var i__8893 = (cljs.core.truth_(bucket__8892)?cljs.core.scan_array.call(null,2,k,bucket__8892):null);
if(cljs.core.truth_(i__8893))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__8918 = null;
var G__8918__2 = (function (this_sym8894,k){
var this__8896 = this;
var this_sym8894__8897 = this;
var coll__8898 = this_sym8894__8897;
return coll__8898.cljs$core$ILookup$_lookup$arity$2(coll__8898,k);
});
var G__8918__3 = (function (this_sym8895,k,not_found){
var this__8896 = this;
var this_sym8895__8899 = this;
var coll__8900 = this_sym8895__8899;
return coll__8900.cljs$core$ILookup$_lookup$arity$3(coll__8900,k,not_found);
});
G__8918 = function(this_sym8895,k,not_found){
switch(arguments.length){
case 2:
return G__8918__2.call(this,this_sym8895,k);
case 3:
return G__8918__3.call(this,this_sym8895,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8918;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym8874,args8875){
var this__8901 = this;
return this_sym8874.call.apply(this_sym8874,[this_sym8874].concat(args8875.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8902 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__8903 = this;
var this__8904 = this;
return cljs.core.pr_str.call(null,this__8904);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8905 = this;
if((this__8905.count > 0))
{var hashes__8906 = cljs.core.js_keys.call(null,this__8905.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__8873_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__8905.hashobj[p1__8873_SHARP_])));
}),hashes__8906);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8907 = this;
return this__8907.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8908 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8909 = this;
return (new cljs.core.HashMap(meta,this__8909.count,this__8909.hashobj,this__8909.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8910 = this;
return this__8910.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8911 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__8911.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8912 = this;
var h__8913 = cljs.core.hash.call(null,k);
var bucket__8914 = (this__8912.hashobj[h__8913]);
var i__8915 = (cljs.core.truth_(bucket__8914)?cljs.core.scan_array.call(null,2,k,bucket__8914):null);
if(cljs.core.not.call(null,i__8915))
{return coll;
} else
{var new_hashobj__8916 = goog.object.clone(this__8912.hashobj);
if((3 > bucket__8914.length))
{cljs.core.js_delete.call(null,new_hashobj__8916,h__8913);
} else
{var new_bucket__8917 = bucket__8914.slice();
new_bucket__8917.splice(i__8915,2);
(new_hashobj__8916[h__8913] = new_bucket__8917);
}
return (new cljs.core.HashMap(this__8912.meta,(this__8912.count - 1),new_hashobj__8916,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__8919 = ks.length;
var i__8920 = 0;
var out__8921 = cljs.core.HashMap.EMPTY;
while(true){
if((i__8920 < len__8919))
{{
var G__8922 = (i__8920 + 1);
var G__8923 = cljs.core.assoc.call(null,out__8921,(ks[i__8920]),(vs[i__8920]));
i__8920 = G__8922;
out__8921 = G__8923;
continue;
}
} else
{return out__8921;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__8927 = m.arr;
var len__8928 = arr__8927.length;
var i__8929 = 0;
while(true){
if((len__8928 <= i__8929))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__8927[i__8929]),k))
{return i__8929;
} else
{if("\uFDD0'else")
{{
var G__8930 = (i__8929 + 2);
i__8929 = G__8930;
continue;
}
} else
{return null;
}
}
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8933 = this;
return (new cljs.core.TransientArrayMap({},this__8933.arr.length,this__8933.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8934 = this;
var h__2522__auto____8935 = this__8934.__hash;
if(!((h__2522__auto____8935 == null)))
{return h__2522__auto____8935;
} else
{var h__2522__auto____8936 = cljs.core.hash_imap.call(null,coll);
this__8934.__hash = h__2522__auto____8936;
return h__2522__auto____8936;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8937 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8938 = this;
var idx__8939 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8939 === -1))
{return not_found;
} else
{return (this__8938.arr[(idx__8939 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8940 = this;
var idx__8941 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8941 === -1))
{if((this__8940.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__8940.meta,(this__8940.cnt + 1),(function (){var G__8942__8943 = this__8940.arr.slice();
G__8942__8943.push(k);
G__8942__8943.push(v);
return G__8942__8943;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__8940.arr[(idx__8941 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__8940.meta,this__8940.cnt,(function (){var G__8944__8945 = this__8940.arr.slice();
(G__8944__8945[(idx__8941 + 1)] = v);
return G__8944__8945;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8946 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__8978 = null;
var G__8978__2 = (function (this_sym8947,k){
var this__8949 = this;
var this_sym8947__8950 = this;
var coll__8951 = this_sym8947__8950;
return coll__8951.cljs$core$ILookup$_lookup$arity$2(coll__8951,k);
});
var G__8978__3 = (function (this_sym8948,k,not_found){
var this__8949 = this;
var this_sym8948__8952 = this;
var coll__8953 = this_sym8948__8952;
return coll__8953.cljs$core$ILookup$_lookup$arity$3(coll__8953,k,not_found);
});
G__8978 = function(this_sym8948,k,not_found){
switch(arguments.length){
case 2:
return G__8978__2.call(this,this_sym8948,k);
case 3:
return G__8978__3.call(this,this_sym8948,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8978;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym8931,args8932){
var this__8954 = this;
return this_sym8931.call.apply(this_sym8931,[this_sym8931].concat(args8932.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8955 = this;
var len__8956 = this__8955.arr.length;
var i__8957 = 0;
var init__8958 = init;
while(true){
if((i__8957 < len__8956))
{var init__8959 = f.call(null,init__8958,(this__8955.arr[i__8957]),(this__8955.arr[(i__8957 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__8959))
{return cljs.core.deref.call(null,init__8959);
} else
{{
var G__8979 = (i__8957 + 2);
var G__8980 = init__8959;
i__8957 = G__8979;
init__8958 = G__8980;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8960 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__8961 = this;
var this__8962 = this;
return cljs.core.pr_str.call(null,this__8962);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8963 = this;
if((this__8963.cnt > 0))
{var len__8964 = this__8963.arr.length;
var array_map_seq__8965 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__8964))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__8963.arr[i]),(this__8963.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__8965.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8966 = this;
return this__8966.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8967 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8968 = this;
return (new cljs.core.PersistentArrayMap(meta,this__8968.cnt,this__8968.arr,this__8968.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8969 = this;
return this__8969.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8970 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8970.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8971 = this;
var idx__8972 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8972 >= 0))
{var len__8973 = this__8971.arr.length;
var new_len__8974 = (len__8973 - 2);
if((new_len__8974 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__8975 = cljs.core.make_array.call(null,new_len__8974);
var s__8976 = 0;
var d__8977 = 0;
while(true){
if((s__8976 >= len__8973))
{return (new cljs.core.PersistentArrayMap(this__8971.meta,(this__8971.cnt - 1),new_arr__8975,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__8971.arr[s__8976])))
{{
var G__8981 = (s__8976 + 2);
var G__8982 = d__8977;
s__8976 = G__8981;
d__8977 = G__8982;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__8975[d__8977] = (this__8971.arr[s__8976]));
(new_arr__8975[(d__8977 + 1)] = (this__8971.arr[(s__8976 + 1)]));
{
var G__8983 = (s__8976 + 2);
var G__8984 = (d__8977 + 2);
s__8976 = G__8983;
d__8977 = G__8984;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len__8985 = cljs.core.count.call(null,ks);
var i__8986 = 0;
var out__8987 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__8986 < len__8985))
{{
var G__8988 = (i__8986 + 1);
var G__8989 = cljs.core.assoc_BANG_.call(null,out__8987,(ks[i__8986]),(vs[i__8986]));
i__8986 = G__8988;
out__8987 = G__8989;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8987);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__8990 = this;
if(cljs.core.truth_(this__8990.editable_QMARK_))
{var idx__8991 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__8991 >= 0))
{(this__8990.arr[idx__8991] = (this__8990.arr[(this__8990.len - 2)]));
(this__8990.arr[(idx__8991 + 1)] = (this__8990.arr[(this__8990.len - 1)]));
var G__8992__8993 = this__8990.arr;
G__8992__8993.pop();
G__8992__8993.pop();
G__8992__8993;
this__8990.len = (this__8990.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8994 = this;
if(cljs.core.truth_(this__8994.editable_QMARK_))
{var idx__8995 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__8995 === -1))
{if(((this__8994.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__8994.len = (this__8994.len + 2);
this__8994.arr.push(key);
this__8994.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__8994.len,this__8994.arr),key,val);
}
} else
{if((val === (this__8994.arr[(idx__8995 + 1)])))
{return tcoll;
} else
{(this__8994.arr[(idx__8995 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8996 = this;
if(cljs.core.truth_(this__8996.editable_QMARK_))
{if((function (){var G__8997__8998 = o;
if(G__8997__8998)
{if((function (){var or__3824__auto____8999 = (G__8997__8998.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____8999)
{return or__3824__auto____8999;
} else
{return G__8997__8998.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__8997__8998.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8997__8998);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8997__8998);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9000 = cljs.core.seq.call(null,o);
var tcoll__9001 = tcoll;
while(true){
var temp__3971__auto____9002 = cljs.core.first.call(null,es__9000);
if(cljs.core.truth_(temp__3971__auto____9002))
{var e__9003 = temp__3971__auto____9002;
{
var G__9009 = cljs.core.next.call(null,es__9000);
var G__9010 = tcoll__9001.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__9001,cljs.core.key.call(null,e__9003),cljs.core.val.call(null,e__9003));
es__9000 = G__9009;
tcoll__9001 = G__9010;
continue;
}
} else
{return tcoll__9001;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9004 = this;
if(cljs.core.truth_(this__9004.editable_QMARK_))
{this__9004.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__9004.len,2),this__9004.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9005 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9006 = this;
if(cljs.core.truth_(this__9006.editable_QMARK_))
{var idx__9007 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__9007 === -1))
{return not_found;
} else
{return (this__9006.arr[(idx__9007 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9008 = this;
if(cljs.core.truth_(this__9008.editable_QMARK_))
{return cljs.core.quot.call(null,this__9008.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__9013 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__9014 = 0;
while(true){
if((i__9014 < len))
{{
var G__9015 = cljs.core.assoc_BANG_.call(null,out__9013,(arr[i__9014]),(arr[(i__9014 + 1)]));
var G__9016 = (i__9014 + 2);
out__9013 = G__9015;
i__9014 = G__9016;
continue;
}
} else
{return out__9013;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__2640__auto__){
return cljs.core.list.call(null,"cljs.core/Box");
});
cljs.core.Box;
cljs.core.key_test = (function key_test(key,other){
if(goog.isString(key))
{return (key === other);
} else
{return cljs.core._EQ_.call(null,key,other);
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__9021__9022 = arr.slice();
(G__9021__9022[i] = a);
return G__9021__9022;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__9023__9024 = arr.slice();
(G__9023__9024[i] = a);
(G__9023__9024[j] = b);
return G__9023__9024;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr__9026 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__9026,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__9026,(2 * i),(new_arr__9026.length - (2 * i)));
return new_arr__9026;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count.call(null,(bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable__9029 = inode.ensure_editable(edit);
(editable__9029.arr[i] = a);
return editable__9029;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__9030 = inode.ensure_editable(edit);
(editable__9030.arr[i] = a);
(editable__9030.arr[j] = b);
return editable__9030;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len__9037 = arr.length;
var i__9038 = 0;
var init__9039 = init;
while(true){
if((i__9038 < len__9037))
{var init__9042 = (function (){var k__9040 = (arr[i__9038]);
if(!((k__9040 == null)))
{return f.call(null,init__9039,k__9040,(arr[(i__9038 + 1)]));
} else
{var node__9041 = (arr[(i__9038 + 1)]);
if(!((node__9041 == null)))
{return node__9041.kv_reduce(f,init__9039);
} else
{return init__9039;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__9042))
{return cljs.core.deref.call(null,init__9042);
} else
{{
var G__9043 = (i__9038 + 2);
var G__9044 = init__9042;
i__9038 = G__9043;
init__9039 = G__9044;
continue;
}
}
} else
{return init__9039;
}
break;
}
});

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__9045 = this;
var inode__9046 = this;
if((this__9045.bitmap === bit))
{return null;
} else
{var editable__9047 = inode__9046.ensure_editable(e);
var earr__9048 = editable__9047.arr;
var len__9049 = earr__9048.length;
editable__9047.bitmap = (bit ^ editable__9047.bitmap);
cljs.core.array_copy.call(null,earr__9048,(2 * (i + 1)),earr__9048,(2 * i),(len__9049 - (2 * (i + 1))));
(earr__9048[(len__9049 - 2)] = null);
(earr__9048[(len__9049 - 1)] = null);
return editable__9047;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9050 = this;
var inode__9051 = this;
var bit__9052 = (1 << ((hash >>> shift) & 0x01f));
var idx__9053 = cljs.core.bitmap_indexed_node_index.call(null,this__9050.bitmap,bit__9052);
if(((this__9050.bitmap & bit__9052) === 0))
{var n__9054 = cljs.core.bit_count.call(null,this__9050.bitmap);
if(((2 * n__9054) < this__9050.arr.length))
{var editable__9055 = inode__9051.ensure_editable(edit);
var earr__9056 = editable__9055.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__9056,(2 * idx__9053),earr__9056,(2 * (idx__9053 + 1)),(2 * (n__9054 - idx__9053)));
(earr__9056[(2 * idx__9053)] = key);
(earr__9056[((2 * idx__9053) + 1)] = val);
editable__9055.bitmap = (editable__9055.bitmap | bit__9052);
return editable__9055;
} else
{if((n__9054 >= 16))
{var nodes__9057 = cljs.core.make_array.call(null,32);
var jdx__9058 = ((hash >>> shift) & 0x01f);
(nodes__9057[jdx__9058] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9059 = 0;
var j__9060 = 0;
while(true){
if((i__9059 < 32))
{if((((this__9050.bitmap >>> i__9059) & 1) === 0))
{{
var G__9113 = (i__9059 + 1);
var G__9114 = j__9060;
i__9059 = G__9113;
j__9060 = G__9114;
continue;
}
} else
{(nodes__9057[i__9059] = ((!(((this__9050.arr[j__9060]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__9050.arr[j__9060])),(this__9050.arr[j__9060]),(this__9050.arr[(j__9060 + 1)]),added_leaf_QMARK_):(this__9050.arr[(j__9060 + 1)])));
{
var G__9115 = (i__9059 + 1);
var G__9116 = (j__9060 + 2);
i__9059 = G__9115;
j__9060 = G__9116;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__9054 + 1),nodes__9057));
} else
{if("\uFDD0'else")
{var new_arr__9061 = cljs.core.make_array.call(null,(2 * (n__9054 + 4)));
cljs.core.array_copy.call(null,this__9050.arr,0,new_arr__9061,0,(2 * idx__9053));
(new_arr__9061[(2 * idx__9053)] = key);
(new_arr__9061[((2 * idx__9053) + 1)] = val);
cljs.core.array_copy.call(null,this__9050.arr,(2 * idx__9053),new_arr__9061,(2 * (idx__9053 + 1)),(2 * (n__9054 - idx__9053)));
added_leaf_QMARK_.val = true;
var editable__9062 = inode__9051.ensure_editable(edit);
editable__9062.arr = new_arr__9061;
editable__9062.bitmap = (editable__9062.bitmap | bit__9052);
return editable__9062;
} else
{return null;
}
}
}
} else
{var key_or_nil__9063 = (this__9050.arr[(2 * idx__9053)]);
var val_or_node__9064 = (this__9050.arr[((2 * idx__9053) + 1)]);
if((key_or_nil__9063 == null))
{var n__9065 = val_or_node__9064.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9065 === val_or_node__9064))
{return inode__9051;
} else
{return cljs.core.edit_and_set.call(null,inode__9051,edit,((2 * idx__9053) + 1),n__9065);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9063))
{if((val === val_or_node__9064))
{return inode__9051;
} else
{return cljs.core.edit_and_set.call(null,inode__9051,edit,((2 * idx__9053) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__9051,edit,(2 * idx__9053),null,((2 * idx__9053) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__9063,val_or_node__9064,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__9066 = this;
var inode__9067 = this;
return cljs.core.create_inode_seq.call(null,this__9066.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9068 = this;
var inode__9069 = this;
var bit__9070 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9068.bitmap & bit__9070) === 0))
{return inode__9069;
} else
{var idx__9071 = cljs.core.bitmap_indexed_node_index.call(null,this__9068.bitmap,bit__9070);
var key_or_nil__9072 = (this__9068.arr[(2 * idx__9071)]);
var val_or_node__9073 = (this__9068.arr[((2 * idx__9071) + 1)]);
if((key_or_nil__9072 == null))
{var n__9074 = val_or_node__9073.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9074 === val_or_node__9073))
{return inode__9069;
} else
{if(!((n__9074 == null)))
{return cljs.core.edit_and_set.call(null,inode__9069,edit,((2 * idx__9071) + 1),n__9074);
} else
{if((this__9068.bitmap === bit__9070))
{return null;
} else
{if("\uFDD0'else")
{return inode__9069.edit_and_remove_pair(edit,bit__9070,idx__9071);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9072))
{(removed_leaf_QMARK_[0] = true);
return inode__9069.edit_and_remove_pair(edit,bit__9070,idx__9071);
} else
{if("\uFDD0'else")
{return inode__9069;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__9075 = this;
var inode__9076 = this;
if((e === this__9075.edit))
{return inode__9076;
} else
{var n__9077 = cljs.core.bit_count.call(null,this__9075.bitmap);
var new_arr__9078 = cljs.core.make_array.call(null,(((n__9077 < 0))?4:(2 * (n__9077 + 1))));
cljs.core.array_copy.call(null,this__9075.arr,0,new_arr__9078,0,(2 * n__9077));
return (new cljs.core.BitmapIndexedNode(e,this__9075.bitmap,new_arr__9078));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__9079 = this;
var inode__9080 = this;
return cljs.core.inode_kv_reduce.call(null,this__9079.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9081 = this;
var inode__9082 = this;
var bit__9083 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9081.bitmap & bit__9083) === 0))
{return not_found;
} else
{var idx__9084 = cljs.core.bitmap_indexed_node_index.call(null,this__9081.bitmap,bit__9083);
var key_or_nil__9085 = (this__9081.arr[(2 * idx__9084)]);
var val_or_node__9086 = (this__9081.arr[((2 * idx__9084) + 1)]);
if((key_or_nil__9085 == null))
{return val_or_node__9086.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9085))
{return cljs.core.PersistentVector.fromArray([key_or_nil__9085,val_or_node__9086], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__9087 = this;
var inode__9088 = this;
var bit__9089 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9087.bitmap & bit__9089) === 0))
{return inode__9088;
} else
{var idx__9090 = cljs.core.bitmap_indexed_node_index.call(null,this__9087.bitmap,bit__9089);
var key_or_nil__9091 = (this__9087.arr[(2 * idx__9090)]);
var val_or_node__9092 = (this__9087.arr[((2 * idx__9090) + 1)]);
if((key_or_nil__9091 == null))
{var n__9093 = val_or_node__9092.inode_without((shift + 5),hash,key);
if((n__9093 === val_or_node__9092))
{return inode__9088;
} else
{if(!((n__9093 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__9087.bitmap,cljs.core.clone_and_set.call(null,this__9087.arr,((2 * idx__9090) + 1),n__9093)));
} else
{if((this__9087.bitmap === bit__9089))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__9087.bitmap ^ bit__9089),cljs.core.remove_pair.call(null,this__9087.arr,idx__9090)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9091))
{return (new cljs.core.BitmapIndexedNode(null,(this__9087.bitmap ^ bit__9089),cljs.core.remove_pair.call(null,this__9087.arr,idx__9090)));
} else
{if("\uFDD0'else")
{return inode__9088;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9094 = this;
var inode__9095 = this;
var bit__9096 = (1 << ((hash >>> shift) & 0x01f));
var idx__9097 = cljs.core.bitmap_indexed_node_index.call(null,this__9094.bitmap,bit__9096);
if(((this__9094.bitmap & bit__9096) === 0))
{var n__9098 = cljs.core.bit_count.call(null,this__9094.bitmap);
if((n__9098 >= 16))
{var nodes__9099 = cljs.core.make_array.call(null,32);
var jdx__9100 = ((hash >>> shift) & 0x01f);
(nodes__9099[jdx__9100] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9101 = 0;
var j__9102 = 0;
while(true){
if((i__9101 < 32))
{if((((this__9094.bitmap >>> i__9101) & 1) === 0))
{{
var G__9117 = (i__9101 + 1);
var G__9118 = j__9102;
i__9101 = G__9117;
j__9102 = G__9118;
continue;
}
} else
{(nodes__9099[i__9101] = ((!(((this__9094.arr[j__9102]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__9094.arr[j__9102])),(this__9094.arr[j__9102]),(this__9094.arr[(j__9102 + 1)]),added_leaf_QMARK_):(this__9094.arr[(j__9102 + 1)])));
{
var G__9119 = (i__9101 + 1);
var G__9120 = (j__9102 + 2);
i__9101 = G__9119;
j__9102 = G__9120;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__9098 + 1),nodes__9099));
} else
{var new_arr__9103 = cljs.core.make_array.call(null,(2 * (n__9098 + 1)));
cljs.core.array_copy.call(null,this__9094.arr,0,new_arr__9103,0,(2 * idx__9097));
(new_arr__9103[(2 * idx__9097)] = key);
(new_arr__9103[((2 * idx__9097) + 1)] = val);
cljs.core.array_copy.call(null,this__9094.arr,(2 * idx__9097),new_arr__9103,(2 * (idx__9097 + 1)),(2 * (n__9098 - idx__9097)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__9094.bitmap | bit__9096),new_arr__9103));
}
} else
{var key_or_nil__9104 = (this__9094.arr[(2 * idx__9097)]);
var val_or_node__9105 = (this__9094.arr[((2 * idx__9097) + 1)]);
if((key_or_nil__9104 == null))
{var n__9106 = val_or_node__9105.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9106 === val_or_node__9105))
{return inode__9095;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9094.bitmap,cljs.core.clone_and_set.call(null,this__9094.arr,((2 * idx__9097) + 1),n__9106)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9104))
{if((val === val_or_node__9105))
{return inode__9095;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9094.bitmap,cljs.core.clone_and_set.call(null,this__9094.arr,((2 * idx__9097) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__9094.bitmap,cljs.core.clone_and_set.call(null,this__9094.arr,(2 * idx__9097),null,((2 * idx__9097) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__9104,val_or_node__9105,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9107 = this;
var inode__9108 = this;
var bit__9109 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9107.bitmap & bit__9109) === 0))
{return not_found;
} else
{var idx__9110 = cljs.core.bitmap_indexed_node_index.call(null,this__9107.bitmap,bit__9109);
var key_or_nil__9111 = (this__9107.arr[(2 * idx__9110)]);
var val_or_node__9112 = (this__9107.arr[((2 * idx__9110) + 1)]);
if((key_or_nil__9111 == null))
{return val_or_node__9112.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9111))
{return val_or_node__9112;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.call(null,0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr__9128 = array_node.arr;
var len__9129 = (2 * (array_node.cnt - 1));
var new_arr__9130 = cljs.core.make_array.call(null,len__9129);
var i__9131 = 0;
var j__9132 = 1;
var bitmap__9133 = 0;
while(true){
if((i__9131 < len__9129))
{if((function (){var and__3822__auto____9134 = !((i__9131 === idx));
if(and__3822__auto____9134)
{return !(((arr__9128[i__9131]) == null));
} else
{return and__3822__auto____9134;
}
})())
{(new_arr__9130[j__9132] = (arr__9128[i__9131]));
{
var G__9135 = (i__9131 + 1);
var G__9136 = (j__9132 + 2);
var G__9137 = (bitmap__9133 | (1 << i__9131));
i__9131 = G__9135;
j__9132 = G__9136;
bitmap__9133 = G__9137;
continue;
}
} else
{{
var G__9138 = (i__9131 + 1);
var G__9139 = j__9132;
var G__9140 = bitmap__9133;
i__9131 = G__9138;
j__9132 = G__9139;
bitmap__9133 = G__9140;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__9133,new_arr__9130));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9141 = this;
var inode__9142 = this;
var idx__9143 = ((hash >>> shift) & 0x01f);
var node__9144 = (this__9141.arr[idx__9143]);
if((node__9144 == null))
{var editable__9145 = cljs.core.edit_and_set.call(null,inode__9142,edit,idx__9143,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__9145.cnt = (editable__9145.cnt + 1);
return editable__9145;
} else
{var n__9146 = node__9144.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9146 === node__9144))
{return inode__9142;
} else
{return cljs.core.edit_and_set.call(null,inode__9142,edit,idx__9143,n__9146);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__9147 = this;
var inode__9148 = this;
return cljs.core.create_array_node_seq.call(null,this__9147.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9149 = this;
var inode__9150 = this;
var idx__9151 = ((hash >>> shift) & 0x01f);
var node__9152 = (this__9149.arr[idx__9151]);
if((node__9152 == null))
{return inode__9150;
} else
{var n__9153 = node__9152.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9153 === node__9152))
{return inode__9150;
} else
{if((n__9153 == null))
{if((this__9149.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__9150,edit,idx__9151);
} else
{var editable__9154 = cljs.core.edit_and_set.call(null,inode__9150,edit,idx__9151,n__9153);
editable__9154.cnt = (editable__9154.cnt - 1);
return editable__9154;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__9150,edit,idx__9151,n__9153);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__9155 = this;
var inode__9156 = this;
if((e === this__9155.edit))
{return inode__9156;
} else
{return (new cljs.core.ArrayNode(e,this__9155.cnt,this__9155.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__9157 = this;
var inode__9158 = this;
var len__9159 = this__9157.arr.length;
var i__9160 = 0;
var init__9161 = init;
while(true){
if((i__9160 < len__9159))
{var node__9162 = (this__9157.arr[i__9160]);
if(!((node__9162 == null)))
{var init__9163 = node__9162.kv_reduce(f,init__9161);
if(cljs.core.reduced_QMARK_.call(null,init__9163))
{return cljs.core.deref.call(null,init__9163);
} else
{{
var G__9182 = (i__9160 + 1);
var G__9183 = init__9163;
i__9160 = G__9182;
init__9161 = G__9183;
continue;
}
}
} else
{return null;
}
} else
{return init__9161;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9164 = this;
var inode__9165 = this;
var idx__9166 = ((hash >>> shift) & 0x01f);
var node__9167 = (this__9164.arr[idx__9166]);
if(!((node__9167 == null)))
{return node__9167.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__9168 = this;
var inode__9169 = this;
var idx__9170 = ((hash >>> shift) & 0x01f);
var node__9171 = (this__9168.arr[idx__9170]);
if(!((node__9171 == null)))
{var n__9172 = node__9171.inode_without((shift + 5),hash,key);
if((n__9172 === node__9171))
{return inode__9169;
} else
{if((n__9172 == null))
{if((this__9168.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__9169,null,idx__9170);
} else
{return (new cljs.core.ArrayNode(null,(this__9168.cnt - 1),cljs.core.clone_and_set.call(null,this__9168.arr,idx__9170,n__9172)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__9168.cnt,cljs.core.clone_and_set.call(null,this__9168.arr,idx__9170,n__9172)));
} else
{return null;
}
}
}
} else
{return inode__9169;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9173 = this;
var inode__9174 = this;
var idx__9175 = ((hash >>> shift) & 0x01f);
var node__9176 = (this__9173.arr[idx__9175]);
if((node__9176 == null))
{return (new cljs.core.ArrayNode(null,(this__9173.cnt + 1),cljs.core.clone_and_set.call(null,this__9173.arr,idx__9175,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__9177 = node__9176.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9177 === node__9176))
{return inode__9174;
} else
{return (new cljs.core.ArrayNode(null,this__9173.cnt,cljs.core.clone_and_set.call(null,this__9173.arr,idx__9175,n__9177)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9178 = this;
var inode__9179 = this;
var idx__9180 = ((hash >>> shift) & 0x01f);
var node__9181 = (this__9178.arr[idx__9180]);
if(!((node__9181 == null)))
{return node__9181.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__9186 = (2 * cnt);
var i__9187 = 0;
while(true){
if((i__9187 < lim__9186))
{if(cljs.core.key_test.call(null,key,(arr[i__9187])))
{return i__9187;
} else
{{
var G__9188 = (i__9187 + 2);
i__9187 = G__9188;
continue;
}
}
} else
{return -1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9189 = this;
var inode__9190 = this;
if((hash === this__9189.collision_hash))
{var idx__9191 = cljs.core.hash_collision_node_find_index.call(null,this__9189.arr,this__9189.cnt,key);
if((idx__9191 === -1))
{if((this__9189.arr.length > (2 * this__9189.cnt)))
{var editable__9192 = cljs.core.edit_and_set.call(null,inode__9190,edit,(2 * this__9189.cnt),key,((2 * this__9189.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__9192.cnt = (editable__9192.cnt + 1);
return editable__9192;
} else
{var len__9193 = this__9189.arr.length;
var new_arr__9194 = cljs.core.make_array.call(null,(len__9193 + 2));
cljs.core.array_copy.call(null,this__9189.arr,0,new_arr__9194,0,len__9193);
(new_arr__9194[len__9193] = key);
(new_arr__9194[(len__9193 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__9190.ensure_editable_array(edit,(this__9189.cnt + 1),new_arr__9194);
}
} else
{if(((this__9189.arr[(idx__9191 + 1)]) === val))
{return inode__9190;
} else
{return cljs.core.edit_and_set.call(null,inode__9190,edit,(idx__9191 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__9189.collision_hash >>> shift) & 0x01f)),[null,inode__9190,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__9195 = this;
var inode__9196 = this;
return cljs.core.create_inode_seq.call(null,this__9195.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9197 = this;
var inode__9198 = this;
var idx__9199 = cljs.core.hash_collision_node_find_index.call(null,this__9197.arr,this__9197.cnt,key);
if((idx__9199 === -1))
{return inode__9198;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__9197.cnt === 1))
{return null;
} else
{var editable__9200 = inode__9198.ensure_editable(edit);
var earr__9201 = editable__9200.arr;
(earr__9201[idx__9199] = (earr__9201[((2 * this__9197.cnt) - 2)]));
(earr__9201[(idx__9199 + 1)] = (earr__9201[((2 * this__9197.cnt) - 1)]));
(earr__9201[((2 * this__9197.cnt) - 1)] = null);
(earr__9201[((2 * this__9197.cnt) - 2)] = null);
editable__9200.cnt = (editable__9200.cnt - 1);
return editable__9200;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__9202 = this;
var inode__9203 = this;
if((e === this__9202.edit))
{return inode__9203;
} else
{var new_arr__9204 = cljs.core.make_array.call(null,(2 * (this__9202.cnt + 1)));
cljs.core.array_copy.call(null,this__9202.arr,0,new_arr__9204,0,(2 * this__9202.cnt));
return (new cljs.core.HashCollisionNode(e,this__9202.collision_hash,this__9202.cnt,new_arr__9204));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__9205 = this;
var inode__9206 = this;
return cljs.core.inode_kv_reduce.call(null,this__9205.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9207 = this;
var inode__9208 = this;
var idx__9209 = cljs.core.hash_collision_node_find_index.call(null,this__9207.arr,this__9207.cnt,key);
if((idx__9209 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__9207.arr[idx__9209])))
{return cljs.core.PersistentVector.fromArray([(this__9207.arr[idx__9209]),(this__9207.arr[(idx__9209 + 1)])], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__9210 = this;
var inode__9211 = this;
var idx__9212 = cljs.core.hash_collision_node_find_index.call(null,this__9210.arr,this__9210.cnt,key);
if((idx__9212 === -1))
{return inode__9211;
} else
{if((this__9210.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__9210.collision_hash,(this__9210.cnt - 1),cljs.core.remove_pair.call(null,this__9210.arr,cljs.core.quot.call(null,idx__9212,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9213 = this;
var inode__9214 = this;
if((hash === this__9213.collision_hash))
{var idx__9215 = cljs.core.hash_collision_node_find_index.call(null,this__9213.arr,this__9213.cnt,key);
if((idx__9215 === -1))
{var len__9216 = this__9213.arr.length;
var new_arr__9217 = cljs.core.make_array.call(null,(len__9216 + 2));
cljs.core.array_copy.call(null,this__9213.arr,0,new_arr__9217,0,len__9216);
(new_arr__9217[len__9216] = key);
(new_arr__9217[(len__9216 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__9213.collision_hash,(this__9213.cnt + 1),new_arr__9217));
} else
{if(cljs.core._EQ_.call(null,(this__9213.arr[idx__9215]),val))
{return inode__9214;
} else
{return (new cljs.core.HashCollisionNode(null,this__9213.collision_hash,this__9213.cnt,cljs.core.clone_and_set.call(null,this__9213.arr,(idx__9215 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__9213.collision_hash >>> shift) & 0x01f)),[null,inode__9214])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9218 = this;
var inode__9219 = this;
var idx__9220 = cljs.core.hash_collision_node_find_index.call(null,this__9218.arr,this__9218.cnt,key);
if((idx__9220 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__9218.arr[idx__9220])))
{return (this__9218.arr[(idx__9220 + 1)]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var this__9221 = this;
var inode__9222 = this;
if((e === this__9221.edit))
{this__9221.arr = array;
this__9221.cnt = count;
return inode__9222;
} else
{return (new cljs.core.HashCollisionNode(this__9221.edit,this__9221.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__9227 = cljs.core.hash.call(null,key1);
if((key1hash__9227 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9227,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9228 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__9227,key1,val1,added_leaf_QMARK___9228).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___9228);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__9229 = cljs.core.hash.call(null,key1);
if((key1hash__9229 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9229,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9230 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__9229,key1,val1,added_leaf_QMARK___9230).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___9230);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw('Invalid arity: ' + arguments.length);
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9231 = this;
var h__2522__auto____9232 = this__9231.__hash;
if(!((h__2522__auto____9232 == null)))
{return h__2522__auto____9232;
} else
{var h__2522__auto____9233 = cljs.core.hash_coll.call(null,coll);
this__9231.__hash = h__2522__auto____9233;
return h__2522__auto____9233;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9234 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__9235 = this;
var this__9236 = this;
return cljs.core.pr_str.call(null,this__9236);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9237 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9238 = this;
if((this__9238.s == null))
{return cljs.core.PersistentVector.fromArray([(this__9238.nodes[this__9238.i]),(this__9238.nodes[(this__9238.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__9238.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9239 = this;
if((this__9239.s == null))
{return cljs.core.create_inode_seq.call(null,this__9239.nodes,(this__9239.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__9239.nodes,this__9239.i,cljs.core.next.call(null,this__9239.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9240 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9241 = this;
return (new cljs.core.NodeSeq(meta,this__9241.nodes,this__9241.i,this__9241.s,this__9241.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9242 = this;
return this__9242.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9243 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9243.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__9250 = nodes.length;
var j__9251 = i;
while(true){
if((j__9251 < len__9250))
{if(!(((nodes[j__9251]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__9251,null,null));
} else
{var temp__3971__auto____9252 = (nodes[(j__9251 + 1)]);
if(cljs.core.truth_(temp__3971__auto____9252))
{var node__9253 = temp__3971__auto____9252;
var temp__3971__auto____9254 = node__9253.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9254))
{var node_seq__9255 = temp__3971__auto____9254;
return (new cljs.core.NodeSeq(null,nodes,(j__9251 + 2),node_seq__9255,null));
} else
{{
var G__9256 = (j__9251 + 2);
j__9251 = G__9256;
continue;
}
}
} else
{{
var G__9257 = (j__9251 + 2);
j__9251 = G__9257;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9258 = this;
var h__2522__auto____9259 = this__9258.__hash;
if(!((h__2522__auto____9259 == null)))
{return h__2522__auto____9259;
} else
{var h__2522__auto____9260 = cljs.core.hash_coll.call(null,coll);
this__9258.__hash = h__2522__auto____9260;
return h__2522__auto____9260;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9261 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__9262 = this;
var this__9263 = this;
return cljs.core.pr_str.call(null,this__9263);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9264 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9265 = this;
return cljs.core.first.call(null,this__9265.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9266 = this;
return cljs.core.create_array_node_seq.call(null,null,this__9266.nodes,this__9266.i,cljs.core.next.call(null,this__9266.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9267 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9268 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__9268.nodes,this__9268.i,this__9268.s,this__9268.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9269 = this;
return this__9269.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9270 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9270.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__9277 = nodes.length;
var j__9278 = i;
while(true){
if((j__9278 < len__9277))
{var temp__3971__auto____9279 = (nodes[j__9278]);
if(cljs.core.truth_(temp__3971__auto____9279))
{var nj__9280 = temp__3971__auto____9279;
var temp__3971__auto____9281 = nj__9280.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9281))
{var ns__9282 = temp__3971__auto____9281;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__9278 + 1),ns__9282,null));
} else
{{
var G__9283 = (j__9278 + 1);
j__9278 = G__9283;
continue;
}
}
} else
{{
var G__9284 = (j__9278 + 1);
j__9278 = G__9284;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9287 = this;
return (new cljs.core.TransientHashMap({},this__9287.root,this__9287.cnt,this__9287.has_nil_QMARK_,this__9287.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9288 = this;
var h__2522__auto____9289 = this__9288.__hash;
if(!((h__2522__auto____9289 == null)))
{return h__2522__auto____9289;
} else
{var h__2522__auto____9290 = cljs.core.hash_imap.call(null,coll);
this__9288.__hash = h__2522__auto____9290;
return h__2522__auto____9290;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9291 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9292 = this;
if((k == null))
{if(this__9292.has_nil_QMARK_)
{return this__9292.nil_val;
} else
{return not_found;
}
} else
{if((this__9292.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__9292.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9293 = this;
if((k == null))
{if((function (){var and__3822__auto____9294 = this__9293.has_nil_QMARK_;
if(and__3822__auto____9294)
{return (v === this__9293.nil_val);
} else
{return and__3822__auto____9294;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9293.meta,((this__9293.has_nil_QMARK_)?this__9293.cnt:(this__9293.cnt + 1)),this__9293.root,true,v,null));
}
} else
{var added_leaf_QMARK___9295 = (new cljs.core.Box(false));
var new_root__9296 = (((this__9293.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9293.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9295);
if((new_root__9296 === this__9293.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9293.meta,((added_leaf_QMARK___9295.val)?(this__9293.cnt + 1):this__9293.cnt),new_root__9296,this__9293.has_nil_QMARK_,this__9293.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9297 = this;
if((k == null))
{return this__9297.has_nil_QMARK_;
} else
{if((this__9297.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__9297.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__9320 = null;
var G__9320__2 = (function (this_sym9298,k){
var this__9300 = this;
var this_sym9298__9301 = this;
var coll__9302 = this_sym9298__9301;
return coll__9302.cljs$core$ILookup$_lookup$arity$2(coll__9302,k);
});
var G__9320__3 = (function (this_sym9299,k,not_found){
var this__9300 = this;
var this_sym9299__9303 = this;
var coll__9304 = this_sym9299__9303;
return coll__9304.cljs$core$ILookup$_lookup$arity$3(coll__9304,k,not_found);
});
G__9320 = function(this_sym9299,k,not_found){
switch(arguments.length){
case 2:
return G__9320__2.call(this,this_sym9299,k);
case 3:
return G__9320__3.call(this,this_sym9299,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9320;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym9285,args9286){
var this__9305 = this;
return this_sym9285.call.apply(this_sym9285,[this_sym9285].concat(args9286.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9306 = this;
var init__9307 = ((this__9306.has_nil_QMARK_)?f.call(null,init,null,this__9306.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__9307))
{return cljs.core.deref.call(null,init__9307);
} else
{if(!((this__9306.root == null)))
{return this__9306.root.kv_reduce(f,init__9307);
} else
{if("\uFDD0'else")
{return init__9307;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9308 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__9309 = this;
var this__9310 = this;
return cljs.core.pr_str.call(null,this__9310);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9311 = this;
if((this__9311.cnt > 0))
{var s__9312 = ((!((this__9311.root == null)))?this__9311.root.inode_seq():null);
if(this__9311.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__9311.nil_val], true),s__9312);
} else
{return s__9312;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9313 = this;
return this__9313.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9314 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9315 = this;
return (new cljs.core.PersistentHashMap(meta,this__9315.cnt,this__9315.root,this__9315.has_nil_QMARK_,this__9315.nil_val,this__9315.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9316 = this;
return this__9316.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9317 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__9317.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9318 = this;
if((k == null))
{if(this__9318.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__9318.meta,(this__9318.cnt - 1),this__9318.root,false,null,null));
} else
{return coll;
}
} else
{if((this__9318.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__9319 = this__9318.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__9319 === this__9318.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9318.meta,(this__9318.cnt - 1),new_root__9319,this__9318.has_nil_QMARK_,this__9318.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len__9321 = ks.length;
var i__9322 = 0;
var out__9323 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__9322 < len__9321))
{{
var G__9324 = (i__9322 + 1);
var G__9325 = cljs.core.assoc_BANG_.call(null,out__9323,(ks[i__9322]),(vs[i__9322]));
i__9322 = G__9324;
out__9323 = G__9325;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9323);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__9326 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9327 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__9328 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9329 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9330 = this;
if((k == null))
{if(this__9330.has_nil_QMARK_)
{return this__9330.nil_val;
} else
{return null;
}
} else
{if((this__9330.root == null))
{return null;
} else
{return this__9330.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9331 = this;
if((k == null))
{if(this__9331.has_nil_QMARK_)
{return this__9331.nil_val;
} else
{return not_found;
}
} else
{if((this__9331.root == null))
{return not_found;
} else
{return this__9331.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9332 = this;
if(this__9332.edit)
{return this__9332.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__9333 = this;
var tcoll__9334 = this;
if(this__9333.edit)
{if((function (){var G__9335__9336 = o;
if(G__9335__9336)
{if((function (){var or__3824__auto____9337 = (G__9335__9336.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9337)
{return or__3824__auto____9337;
} else
{return G__9335__9336.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9335__9336.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9335__9336);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9335__9336);
}
})())
{return tcoll__9334.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9338 = cljs.core.seq.call(null,o);
var tcoll__9339 = tcoll__9334;
while(true){
var temp__3971__auto____9340 = cljs.core.first.call(null,es__9338);
if(cljs.core.truth_(temp__3971__auto____9340))
{var e__9341 = temp__3971__auto____9340;
{
var G__9352 = cljs.core.next.call(null,es__9338);
var G__9353 = tcoll__9339.assoc_BANG_(cljs.core.key.call(null,e__9341),cljs.core.val.call(null,e__9341));
es__9338 = G__9352;
tcoll__9339 = G__9353;
continue;
}
} else
{return tcoll__9339;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__9342 = this;
var tcoll__9343 = this;
if(this__9342.edit)
{if((k == null))
{if((this__9342.nil_val === v))
{} else
{this__9342.nil_val = v;
}
if(this__9342.has_nil_QMARK_)
{} else
{this__9342.count = (this__9342.count + 1);
this__9342.has_nil_QMARK_ = true;
}
return tcoll__9343;
} else
{var added_leaf_QMARK___9344 = (new cljs.core.Box(false));
var node__9345 = (((this__9342.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9342.root).inode_assoc_BANG_(this__9342.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9344);
if((node__9345 === this__9342.root))
{} else
{this__9342.root = node__9345;
}
if(added_leaf_QMARK___9344.val)
{this__9342.count = (this__9342.count + 1);
} else
{}
return tcoll__9343;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__9346 = this;
var tcoll__9347 = this;
if(this__9346.edit)
{if((k == null))
{if(this__9346.has_nil_QMARK_)
{this__9346.has_nil_QMARK_ = false;
this__9346.nil_val = null;
this__9346.count = (this__9346.count - 1);
return tcoll__9347;
} else
{return tcoll__9347;
}
} else
{if((this__9346.root == null))
{return tcoll__9347;
} else
{var removed_leaf_QMARK___9348 = (new cljs.core.Box(false));
var node__9349 = this__9346.root.inode_without_BANG_(this__9346.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___9348);
if((node__9349 === this__9346.root))
{} else
{this__9346.root = node__9349;
}
if(cljs.core.truth_((removed_leaf_QMARK___9348[0])))
{this__9346.count = (this__9346.count - 1);
} else
{}
return tcoll__9347;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__9350 = this;
var tcoll__9351 = this;
if(this__9350.edit)
{this__9350.edit = null;
return (new cljs.core.PersistentHashMap(null,this__9350.count,this__9350.root,this__9350.has_nil_QMARK_,this__9350.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__9356 = node;
var stack__9357 = stack;
while(true){
if(!((t__9356 == null)))
{{
var G__9358 = ((ascending_QMARK_)?t__9356.left:t__9356.right);
var G__9359 = cljs.core.conj.call(null,stack__9357,t__9356);
t__9356 = G__9358;
stack__9357 = G__9359;
continue;
}
} else
{return stack__9357;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9360 = this;
var h__2522__auto____9361 = this__9360.__hash;
if(!((h__2522__auto____9361 == null)))
{return h__2522__auto____9361;
} else
{var h__2522__auto____9362 = cljs.core.hash_coll.call(null,coll);
this__9360.__hash = h__2522__auto____9362;
return h__2522__auto____9362;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9363 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__9364 = this;
var this__9365 = this;
return cljs.core.pr_str.call(null,this__9365);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9366 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9367 = this;
if((this__9367.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__9367.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__9368 = this;
return cljs.core.peek.call(null,this__9368.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__9369 = this;
var t__9370 = cljs.core.first.call(null,this__9369.stack);
var next_stack__9371 = cljs.core.tree_map_seq_push.call(null,((this__9369.ascending_QMARK_)?t__9370.right:t__9370.left),cljs.core.next.call(null,this__9369.stack),this__9369.ascending_QMARK_);
if(!((next_stack__9371 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__9371,this__9369.ascending_QMARK_,(this__9369.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9372 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9373 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__9373.stack,this__9373.ascending_QMARK_,this__9373.cnt,this__9373.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9374 = this;
return this__9374.meta;
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right))
{return cljs.core.balance_right.call(null,key,val,del,right.redden());
} else
{if((function (){var and__3822__auto____9376 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____9376)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____9376;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left))
{return cljs.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if((function (){var and__3822__auto____9378 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____9378)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____9378;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__9382 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__9382))
{return cljs.core.deref.call(null,init__9382);
} else
{var init__9383 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__9382):init__9382);
if(cljs.core.reduced_QMARK_.call(null,init__9383))
{return cljs.core.deref.call(null,init__9383);
} else
{var init__9384 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__9383):init__9383);
if(cljs.core.reduced_QMARK_.call(null,init__9384))
{return cljs.core.deref.call(null,init__9384);
} else
{return init__9384;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9387 = this;
var h__2522__auto____9388 = this__9387.__hash;
if(!((h__2522__auto____9388 == null)))
{return h__2522__auto____9388;
} else
{var h__2522__auto____9389 = cljs.core.hash_coll.call(null,coll);
this__9387.__hash = h__2522__auto____9389;
return h__2522__auto____9389;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9390 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9391 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9392 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9392.key,this__9392.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__9440 = null;
var G__9440__2 = (function (this_sym9393,k){
var this__9395 = this;
var this_sym9393__9396 = this;
var node__9397 = this_sym9393__9396;
return node__9397.cljs$core$ILookup$_lookup$arity$2(node__9397,k);
});
var G__9440__3 = (function (this_sym9394,k,not_found){
var this__9395 = this;
var this_sym9394__9398 = this;
var node__9399 = this_sym9394__9398;
return node__9399.cljs$core$ILookup$_lookup$arity$3(node__9399,k,not_found);
});
G__9440 = function(this_sym9394,k,not_found){
switch(arguments.length){
case 2:
return G__9440__2.call(this,this_sym9394,k);
case 3:
return G__9440__3.call(this,this_sym9394,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9440;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym9385,args9386){
var this__9400 = this;
return this_sym9385.call.apply(this_sym9385,[this_sym9385].concat(args9386.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9401 = this;
return cljs.core.PersistentVector.fromArray([this__9401.key,this__9401.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9402 = this;
return this__9402.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9403 = this;
return this__9403.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__9404 = this;
var node__9405 = this;
return ins.balance_right(node__9405);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__9406 = this;
var node__9407 = this;
return (new cljs.core.RedNode(this__9406.key,this__9406.val,this__9406.left,this__9406.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__9408 = this;
var node__9409 = this;
return cljs.core.balance_right_del.call(null,this__9408.key,this__9408.val,this__9408.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__9410 = this;
var node__9411 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__9412 = this;
var node__9413 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9413,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__9414 = this;
var node__9415 = this;
return cljs.core.balance_left_del.call(null,this__9414.key,this__9414.val,del,this__9414.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__9416 = this;
var node__9417 = this;
return ins.balance_left(node__9417);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__9418 = this;
var node__9419 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__9419,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__9441 = null;
var G__9441__0 = (function (){
var this__9420 = this;
var this__9422 = this;
return cljs.core.pr_str.call(null,this__9422);
});
G__9441 = function(){
switch(arguments.length){
case 0:
return G__9441__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9441;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__9423 = this;
var node__9424 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9424,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__9425 = this;
var node__9426 = this;
return node__9426;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9427 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9428 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9429 = this;
return cljs.core.list.call(null,this__9429.key,this__9429.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9430 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9431 = this;
return this__9431.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9432 = this;
return cljs.core.PersistentVector.fromArray([this__9432.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9433 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9433.key,this__9433.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9434 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9435 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9435.key,this__9435.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9436 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9437 = this;
if((n === 0))
{return this__9437.key;
} else
{if((n === 1))
{return this__9437.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__9438 = this;
if((n === 0))
{return this__9438.key;
} else
{if((n === 1))
{return this__9438.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__9439 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode;

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9444 = this;
var h__2522__auto____9445 = this__9444.__hash;
if(!((h__2522__auto____9445 == null)))
{return h__2522__auto____9445;
} else
{var h__2522__auto____9446 = cljs.core.hash_coll.call(null,coll);
this__9444.__hash = h__2522__auto____9446;
return h__2522__auto____9446;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9447 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9448 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9449 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9449.key,this__9449.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__9497 = null;
var G__9497__2 = (function (this_sym9450,k){
var this__9452 = this;
var this_sym9450__9453 = this;
var node__9454 = this_sym9450__9453;
return node__9454.cljs$core$ILookup$_lookup$arity$2(node__9454,k);
});
var G__9497__3 = (function (this_sym9451,k,not_found){
var this__9452 = this;
var this_sym9451__9455 = this;
var node__9456 = this_sym9451__9455;
return node__9456.cljs$core$ILookup$_lookup$arity$3(node__9456,k,not_found);
});
G__9497 = function(this_sym9451,k,not_found){
switch(arguments.length){
case 2:
return G__9497__2.call(this,this_sym9451,k);
case 3:
return G__9497__3.call(this,this_sym9451,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9497;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym9442,args9443){
var this__9457 = this;
return this_sym9442.call.apply(this_sym9442,[this_sym9442].concat(args9443.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9458 = this;
return cljs.core.PersistentVector.fromArray([this__9458.key,this__9458.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9459 = this;
return this__9459.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9460 = this;
return this__9460.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__9461 = this;
var node__9462 = this;
return (new cljs.core.RedNode(this__9461.key,this__9461.val,this__9461.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__9463 = this;
var node__9464 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__9465 = this;
var node__9466 = this;
return (new cljs.core.RedNode(this__9465.key,this__9465.val,this__9465.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__9467 = this;
var node__9468 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__9469 = this;
var node__9470 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9470,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__9471 = this;
var node__9472 = this;
return (new cljs.core.RedNode(this__9471.key,this__9471.val,del,this__9471.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__9473 = this;
var node__9474 = this;
return (new cljs.core.RedNode(this__9473.key,this__9473.val,ins,this__9473.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__9475 = this;
var node__9476 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9475.left))
{return (new cljs.core.RedNode(this__9475.key,this__9475.val,this__9475.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__9475.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9475.right))
{return (new cljs.core.RedNode(this__9475.right.key,this__9475.right.val,(new cljs.core.BlackNode(this__9475.key,this__9475.val,this__9475.left,this__9475.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__9475.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__9476,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__9498 = null;
var G__9498__0 = (function (){
var this__9477 = this;
var this__9479 = this;
return cljs.core.pr_str.call(null,this__9479);
});
G__9498 = function(){
switch(arguments.length){
case 0:
return G__9498__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9498;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__9480 = this;
var node__9481 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9480.right))
{return (new cljs.core.RedNode(this__9480.key,this__9480.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9480.left,null)),this__9480.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9480.left))
{return (new cljs.core.RedNode(this__9480.left.key,this__9480.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9480.left.left,null)),(new cljs.core.BlackNode(this__9480.key,this__9480.val,this__9480.left.right,this__9480.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9481,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__9482 = this;
var node__9483 = this;
return (new cljs.core.BlackNode(this__9482.key,this__9482.val,this__9482.left,this__9482.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9484 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9485 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9486 = this;
return cljs.core.list.call(null,this__9486.key,this__9486.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9487 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9488 = this;
return this__9488.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9489 = this;
return cljs.core.PersistentVector.fromArray([this__9489.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9490 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9490.key,this__9490.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9491 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9492 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9492.key,this__9492.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9493 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9494 = this;
if((n === 0))
{return this__9494.key;
} else
{if((n === 1))
{return this__9494.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__9495 = this;
if((n === 0))
{return this__9495.key;
} else
{if((n === 1))
{return this__9495.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__9496 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__9502 = comp.call(null,k,tree.key);
if((c__9502 === 0))
{(found[0] = tree);
return null;
} else
{if((c__9502 < 0))
{var ins__9503 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__9503 == null)))
{return tree.add_left(ins__9503);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__9504 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__9504 == null)))
{return tree.add_right(ins__9504);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{var app__9507 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9507))
{return (new cljs.core.RedNode(app__9507.key,app__9507.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__9507.left,null)),(new cljs.core.RedNode(right.key,right.val,app__9507.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__9507,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__9508 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9508))
{return (new cljs.core.RedNode(app__9508.key,app__9508.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__9508.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__9508.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__9508,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null)))
{var c__9514 = comp.call(null,k,tree.key);
if((c__9514 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__9514 < 0))
{var del__9515 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____9516 = !((del__9515 == null));
if(or__3824__auto____9516)
{return or__3824__auto____9516;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__9515,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__9515,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__9517 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____9518 = !((del__9517 == null));
if(or__3824__auto____9518)
{return or__3824__auto____9518;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__9517);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__9517,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk__9521 = tree.key;
var c__9522 = comp.call(null,k,tk__9521);
if((c__9522 === 0))
{return tree.replace(tk__9521,v,tree.left,tree.right);
} else
{if((c__9522 < 0))
{return tree.replace(tk__9521,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__9521,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9525 = this;
var h__2522__auto____9526 = this__9525.__hash;
if(!((h__2522__auto____9526 == null)))
{return h__2522__auto____9526;
} else
{var h__2522__auto____9527 = cljs.core.hash_imap.call(null,coll);
this__9525.__hash = h__2522__auto____9527;
return h__2522__auto____9527;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9528 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9529 = this;
var n__9530 = coll.entry_at(k);
if(!((n__9530 == null)))
{return n__9530.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9531 = this;
var found__9532 = [null];
var t__9533 = cljs.core.tree_map_add.call(null,this__9531.comp,this__9531.tree,k,v,found__9532);
if((t__9533 == null))
{var found_node__9534 = cljs.core.nth.call(null,found__9532,0);
if(cljs.core._EQ_.call(null,v,found_node__9534.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9531.comp,cljs.core.tree_map_replace.call(null,this__9531.comp,this__9531.tree,k,v),this__9531.cnt,this__9531.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9531.comp,t__9533.blacken(),(this__9531.cnt + 1),this__9531.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9535 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__9569 = null;
var G__9569__2 = (function (this_sym9536,k){
var this__9538 = this;
var this_sym9536__9539 = this;
var coll__9540 = this_sym9536__9539;
return coll__9540.cljs$core$ILookup$_lookup$arity$2(coll__9540,k);
});
var G__9569__3 = (function (this_sym9537,k,not_found){
var this__9538 = this;
var this_sym9537__9541 = this;
var coll__9542 = this_sym9537__9541;
return coll__9542.cljs$core$ILookup$_lookup$arity$3(coll__9542,k,not_found);
});
G__9569 = function(this_sym9537,k,not_found){
switch(arguments.length){
case 2:
return G__9569__2.call(this,this_sym9537,k);
case 3:
return G__9569__3.call(this,this_sym9537,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9569;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym9523,args9524){
var this__9543 = this;
return this_sym9523.call.apply(this_sym9523,[this_sym9523].concat(args9524.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9544 = this;
if(!((this__9544.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__9544.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9545 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9546 = this;
if((this__9546.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9546.tree,false,this__9546.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__9547 = this;
var this__9548 = this;
return cljs.core.pr_str.call(null,this__9548);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__9549 = this;
var coll__9550 = this;
var t__9551 = this__9549.tree;
while(true){
if(!((t__9551 == null)))
{var c__9552 = this__9549.comp.call(null,k,t__9551.key);
if((c__9552 === 0))
{return t__9551;
} else
{if((c__9552 < 0))
{{
var G__9570 = t__9551.left;
t__9551 = G__9570;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__9571 = t__9551.right;
t__9551 = G__9571;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9553 = this;
if((this__9553.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9553.tree,ascending_QMARK_,this__9553.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9554 = this;
if((this__9554.cnt > 0))
{var stack__9555 = null;
var t__9556 = this__9554.tree;
while(true){
if(!((t__9556 == null)))
{var c__9557 = this__9554.comp.call(null,k,t__9556.key);
if((c__9557 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__9555,t__9556),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__9557 < 0))
{{
var G__9572 = cljs.core.conj.call(null,stack__9555,t__9556);
var G__9573 = t__9556.left;
stack__9555 = G__9572;
t__9556 = G__9573;
continue;
}
} else
{{
var G__9574 = stack__9555;
var G__9575 = t__9556.right;
stack__9555 = G__9574;
t__9556 = G__9575;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__9557 > 0))
{{
var G__9576 = cljs.core.conj.call(null,stack__9555,t__9556);
var G__9577 = t__9556.right;
stack__9555 = G__9576;
t__9556 = G__9577;
continue;
}
} else
{{
var G__9578 = stack__9555;
var G__9579 = t__9556.left;
stack__9555 = G__9578;
t__9556 = G__9579;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__9555 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__9555,ascending_QMARK_,-1,null));
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9558 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9559 = this;
return this__9559.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9560 = this;
if((this__9560.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9560.tree,true,this__9560.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9561 = this;
return this__9561.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9562 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9563 = this;
return (new cljs.core.PersistentTreeMap(this__9563.comp,this__9563.tree,this__9563.cnt,meta,this__9563.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9564 = this;
return this__9564.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9565 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__9565.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9566 = this;
var found__9567 = [null];
var t__9568 = cljs.core.tree_map_remove.call(null,this__9566.comp,this__9566.tree,k,found__9567);
if((t__9568 == null))
{if((cljs.core.nth.call(null,found__9567,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9566.comp,null,0,this__9566.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9566.comp,t__9568.blacken(),(this__9566.cnt - 1),this__9566.meta,null));
}
});
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in__9582 = cljs.core.seq.call(null,keyvals);
var out__9583 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__9582)
{{
var G__9584 = cljs.core.nnext.call(null,in__9582);
var G__9585 = cljs.core.assoc_BANG_.call(null,out__9583,cljs.core.first.call(null,in__9582),cljs.core.second.call(null,in__9582));
in__9582 = G__9584;
out__9583 = G__9585;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9583);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__9586){
var keyvals = cljs.core.seq(arglist__9586);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,keyvals),2),cljs.core.apply.call(null,cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__9587){
var keyvals = cljs.core.seq(arglist__9587);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){
var ks__9591 = [];
var obj__9592 = {};
var kvs__9593 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__9593)
{ks__9591.push(cljs.core.first.call(null,kvs__9593));
(obj__9592[cljs.core.first.call(null,kvs__9593)] = cljs.core.second.call(null,kvs__9593));
{
var G__9594 = cljs.core.nnext.call(null,kvs__9593);
kvs__9593 = G__9594;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__9591,obj__9592);
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return obj_map__delegate.call(this, keyvals);
};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__9595){
var keyvals = cljs.core.seq(arglist__9595);;
return obj_map__delegate(keyvals);
});
obj_map.cljs$lang$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in__9598 = cljs.core.seq.call(null,keyvals);
var out__9599 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__9598)
{{
var G__9600 = cljs.core.nnext.call(null,in__9598);
var G__9601 = cljs.core.assoc.call(null,out__9599,cljs.core.first.call(null,in__9598),cljs.core.second.call(null,in__9598));
in__9598 = G__9600;
out__9599 = G__9601;
continue;
}
} else
{return out__9599;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__9602){
var keyvals = cljs.core.seq(arglist__9602);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in__9605 = cljs.core.seq.call(null,keyvals);
var out__9606 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__9605)
{{
var G__9607 = cljs.core.nnext.call(null,in__9605);
var G__9608 = cljs.core.assoc.call(null,out__9606,cljs.core.first.call(null,in__9605),cljs.core.second.call(null,in__9605));
in__9605 = G__9607;
out__9606 = G__9608;
continue;
}
} else
{return out__9606;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__9609){
var comparator = cljs.core.first(arglist__9609);
var keyvals = cljs.core.rest(arglist__9609);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key.call(null,map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val.call(null,map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__9610_SHARP_,p2__9611_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____9613 = p1__9610_SHARP_;
if(cljs.core.truth_(or__3824__auto____9613))
{return or__3824__auto____9613;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__9611_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__9614){
var maps = cljs.core.seq(arglist__9614);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__9622 = (function (m,e){
var k__9620 = cljs.core.first.call(null,e);
var v__9621 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__9620))
{return cljs.core.assoc.call(null,m,k__9620,f.call(null,cljs.core._lookup.call(null,m,k__9620,null),v__9621));
} else
{return cljs.core.assoc.call(null,m,k__9620,v__9621);
}
});
var merge2__9624 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__9622,(function (){var or__3824__auto____9623 = m1;
if(cljs.core.truth_(or__3824__auto____9623))
{return or__3824__auto____9623;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__9624,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__9625){
var f = cljs.core.first(arglist__9625);
var maps = cljs.core.rest(arglist__9625);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__9630 = cljs.core.ObjMap.EMPTY;
var keys__9631 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__9631)
{var key__9632 = cljs.core.first.call(null,keys__9631);
var entry__9633 = cljs.core._lookup.call(null,map,key__9632,"\uFDD0'user/not-found");
{
var G__9634 = ((cljs.core.not_EQ_.call(null,entry__9633,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__9630,key__9632,entry__9633):ret__9630);
var G__9635 = cljs.core.next.call(null,keys__9631);
ret__9630 = G__9634;
keys__9631 = G__9635;
continue;
}
} else
{return ret__9630;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9639 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__9639.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9640 = this;
var h__2522__auto____9641 = this__9640.__hash;
if(!((h__2522__auto____9641 == null)))
{return h__2522__auto____9641;
} else
{var h__2522__auto____9642 = cljs.core.hash_iset.call(null,coll);
this__9640.__hash = h__2522__auto____9642;
return h__2522__auto____9642;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9643 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9644 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9644.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__9665 = null;
var G__9665__2 = (function (this_sym9645,k){
var this__9647 = this;
var this_sym9645__9648 = this;
var coll__9649 = this_sym9645__9648;
return coll__9649.cljs$core$ILookup$_lookup$arity$2(coll__9649,k);
});
var G__9665__3 = (function (this_sym9646,k,not_found){
var this__9647 = this;
var this_sym9646__9650 = this;
var coll__9651 = this_sym9646__9650;
return coll__9651.cljs$core$ILookup$_lookup$arity$3(coll__9651,k,not_found);
});
G__9665 = function(this_sym9646,k,not_found){
switch(arguments.length){
case 2:
return G__9665__2.call(this,this_sym9646,k);
case 3:
return G__9665__3.call(this,this_sym9646,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9665;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym9637,args9638){
var this__9652 = this;
return this_sym9637.call.apply(this_sym9637,[this_sym9637].concat(args9638.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9653 = this;
return (new cljs.core.PersistentHashSet(this__9653.meta,cljs.core.assoc.call(null,this__9653.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__9654 = this;
var this__9655 = this;
return cljs.core.pr_str.call(null,this__9655);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9656 = this;
return cljs.core.keys.call(null,this__9656.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9657 = this;
return (new cljs.core.PersistentHashSet(this__9657.meta,cljs.core.dissoc.call(null,this__9657.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9658 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9659 = this;
var and__3822__auto____9660 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9660)
{var and__3822__auto____9661 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9661)
{return cljs.core.every_QMARK_.call(null,(function (p1__9636_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9636_SHARP_);
}),other);
} else
{return and__3822__auto____9661;
}
} else
{return and__3822__auto____9660;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9662 = this;
return (new cljs.core.PersistentHashSet(meta,this__9662.hash_map,this__9662.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9663 = this;
return this__9663.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9664 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__9664.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__9666 = cljs.core.count.call(null,items);
var i__9667 = 0;
var out__9668 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__9667 < len__9666))
{{
var G__9669 = (i__9667 + 1);
var G__9670 = cljs.core.conj_BANG_.call(null,out__9668,(items[i__9667]));
i__9667 = G__9669;
out__9668 = G__9670;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9668);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 34;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__9688 = null;
var G__9688__2 = (function (this_sym9674,k){
var this__9676 = this;
var this_sym9674__9677 = this;
var tcoll__9678 = this_sym9674__9677;
if((cljs.core._lookup.call(null,this__9676.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__9688__3 = (function (this_sym9675,k,not_found){
var this__9676 = this;
var this_sym9675__9679 = this;
var tcoll__9680 = this_sym9675__9679;
if((cljs.core._lookup.call(null,this__9676.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__9688 = function(this_sym9675,k,not_found){
switch(arguments.length){
case 2:
return G__9688__2.call(this,this_sym9675,k);
case 3:
return G__9688__3.call(this,this_sym9675,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9688;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym9672,args9673){
var this__9681 = this;
return this_sym9672.call.apply(this_sym9672,[this_sym9672].concat(args9673.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__9682 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__9683 = this;
if((cljs.core._lookup.call(null,this__9683.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9684 = this;
return cljs.core.count.call(null,this__9684.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__9685 = this;
this__9685.transient_map = cljs.core.dissoc_BANG_.call(null,this__9685.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9686 = this;
this__9686.transient_map = cljs.core.assoc_BANG_.call(null,this__9686.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9687 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__9687.transient_map),null));
});
cljs.core.TransientHashSet;

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9691 = this;
var h__2522__auto____9692 = this__9691.__hash;
if(!((h__2522__auto____9692 == null)))
{return h__2522__auto____9692;
} else
{var h__2522__auto____9693 = cljs.core.hash_iset.call(null,coll);
this__9691.__hash = h__2522__auto____9693;
return h__2522__auto____9693;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9694 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9695 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9695.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__9721 = null;
var G__9721__2 = (function (this_sym9696,k){
var this__9698 = this;
var this_sym9696__9699 = this;
var coll__9700 = this_sym9696__9699;
return coll__9700.cljs$core$ILookup$_lookup$arity$2(coll__9700,k);
});
var G__9721__3 = (function (this_sym9697,k,not_found){
var this__9698 = this;
var this_sym9697__9701 = this;
var coll__9702 = this_sym9697__9701;
return coll__9702.cljs$core$ILookup$_lookup$arity$3(coll__9702,k,not_found);
});
G__9721 = function(this_sym9697,k,not_found){
switch(arguments.length){
case 2:
return G__9721__2.call(this,this_sym9697,k);
case 3:
return G__9721__3.call(this,this_sym9697,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9721;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym9689,args9690){
var this__9703 = this;
return this_sym9689.call.apply(this_sym9689,[this_sym9689].concat(args9690.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9704 = this;
return (new cljs.core.PersistentTreeSet(this__9704.meta,cljs.core.assoc.call(null,this__9704.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9705 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__9705.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__9706 = this;
var this__9707 = this;
return cljs.core.pr_str.call(null,this__9707);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9708 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__9708.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9709 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__9709.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9710 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9711 = this;
return cljs.core._comparator.call(null,this__9711.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9712 = this;
return cljs.core.keys.call(null,this__9712.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9713 = this;
return (new cljs.core.PersistentTreeSet(this__9713.meta,cljs.core.dissoc.call(null,this__9713.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9714 = this;
return cljs.core.count.call(null,this__9714.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9715 = this;
var and__3822__auto____9716 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9716)
{var and__3822__auto____9717 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9717)
{return cljs.core.every_QMARK_.call(null,(function (p1__9671_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9671_SHARP_);
}),other);
} else
{return and__3822__auto____9717;
}
} else
{return and__3822__auto____9716;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9718 = this;
return (new cljs.core.PersistentTreeSet(meta,this__9718.tree_map,this__9718.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9719 = this;
return this__9719.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9720 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__9720.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__9726__delegate = function (keys){
var in__9724 = cljs.core.seq.call(null,keys);
var out__9725 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__9724))
{{
var G__9727 = cljs.core.next.call(null,in__9724);
var G__9728 = cljs.core.conj_BANG_.call(null,out__9725,cljs.core.first.call(null,in__9724));
in__9724 = G__9727;
out__9725 = G__9728;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9725);
}
break;
}
};
var G__9726 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9726__delegate.call(this, keys);
};
G__9726.cljs$lang$maxFixedArity = 0;
G__9726.cljs$lang$applyTo = (function (arglist__9729){
var keys = cljs.core.seq(arglist__9729);;
return G__9726__delegate(keys);
});
G__9726.cljs$lang$arity$variadic = G__9726__delegate;
return G__9726;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$lang$arity$0 = hash_set__0;
hash_set.cljs$lang$arity$variadic = hash_set__1.cljs$lang$arity$variadic;
return hash_set;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
return cljs.core.apply.call(null,cljs.core.hash_set,coll);
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__9730){
var keys = cljs.core.seq(arglist__9730);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.call(null,cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__9732){
var comparator = cljs.core.first(arglist__9732);
var keys = cljs.core.rest(arglist__9732);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_.call(null,coll))
{var n__9738 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____9739 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____9739))
{var e__9740 = temp__3971__auto____9739;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__9740));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__9738,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__9731_SHARP_){
var temp__3971__auto____9741 = cljs.core.find.call(null,smap,p1__9731_SHARP_);
if(cljs.core.truth_(temp__3971__auto____9741))
{var e__9742 = temp__3971__auto____9741;
return cljs.core.second.call(null,e__9742);
} else
{return p1__9731_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__9772 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__9765,seen){
while(true){
var vec__9766__9767 = p__9765;
var f__9768 = cljs.core.nth.call(null,vec__9766__9767,0,null);
var xs__9769 = vec__9766__9767;
var temp__3974__auto____9770 = cljs.core.seq.call(null,xs__9769);
if(temp__3974__auto____9770)
{var s__9771 = temp__3974__auto____9770;
if(cljs.core.contains_QMARK_.call(null,seen,f__9768))
{{
var G__9773 = cljs.core.rest.call(null,s__9771);
var G__9774 = seen;
p__9765 = G__9773;
seen = G__9774;
continue;
}
} else
{return cljs.core.cons.call(null,f__9768,step.call(null,cljs.core.rest.call(null,s__9771),cljs.core.conj.call(null,seen,f__9768)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__9772.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__9777 = cljs.core.PersistentVector.EMPTY;
var s__9778 = s;
while(true){
if(cljs.core.next.call(null,s__9778))
{{
var G__9779 = cljs.core.conj.call(null,ret__9777,cljs.core.first.call(null,s__9778));
var G__9780 = cljs.core.next.call(null,s__9778);
ret__9777 = G__9779;
s__9778 = G__9780;
continue;
}
} else
{return cljs.core.seq.call(null,ret__9777);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if((function (){var or__3824__auto____9783 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9783)
{return or__3824__auto____9783;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9784 = x.lastIndexOf("/");
if((i__9784 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__9784 + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var or__3824__auto____9787 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9787)
{return or__3824__auto____9787;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9788 = x.lastIndexOf("/");
if((i__9788 > -1))
{return cljs.core.subs.call(null,x,2,i__9788);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__9795 = cljs.core.ObjMap.EMPTY;
var ks__9796 = cljs.core.seq.call(null,keys);
var vs__9797 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____9798 = ks__9796;
if(and__3822__auto____9798)
{return vs__9797;
} else
{return and__3822__auto____9798;
}
})())
{{
var G__9799 = cljs.core.assoc.call(null,map__9795,cljs.core.first.call(null,ks__9796),cljs.core.first.call(null,vs__9797));
var G__9800 = cljs.core.next.call(null,ks__9796);
var G__9801 = cljs.core.next.call(null,vs__9797);
map__9795 = G__9799;
ks__9796 = G__9800;
vs__9797 = G__9801;
continue;
}
} else
{return map__9795;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__9804__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9789_SHARP_,p2__9790_SHARP_){
return max_key.call(null,k,p1__9789_SHARP_,p2__9790_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__9804 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9804__delegate.call(this, k, x, y, more);
};
G__9804.cljs$lang$maxFixedArity = 3;
G__9804.cljs$lang$applyTo = (function (arglist__9805){
var k = cljs.core.first(arglist__9805);
var x = cljs.core.first(cljs.core.next(arglist__9805));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9805)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9805)));
return G__9804__delegate(k, x, y, more);
});
G__9804.cljs$lang$arity$variadic = G__9804__delegate;
return G__9804;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__9806__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9802_SHARP_,p2__9803_SHARP_){
return min_key.call(null,k,p1__9802_SHARP_,p2__9803_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__9806 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9806__delegate.call(this, k, x, y, more);
};
G__9806.cljs$lang$maxFixedArity = 3;
G__9806.cljs$lang$applyTo = (function (arglist__9807){
var k = cljs.core.first(arglist__9807);
var x = cljs.core.first(cljs.core.next(arglist__9807));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9807)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9807)));
return G__9806__delegate(k, x, y, more);
});
G__9806.cljs$lang$arity$variadic = G__9806__delegate;
return G__9806;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9810 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9810)
{var s__9811 = temp__3974__auto____9810;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__9811),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__9811)));
} else
{return null;
}
}),null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9814 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9814)
{var s__9815 = temp__3974__auto____9814;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__9815))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9815),take_while.call(null,pred,cljs.core.rest.call(null,s__9815)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp__9817 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__9817.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include__9829 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____9830 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____9830))
{var vec__9831__9832 = temp__3974__auto____9830;
var e__9833 = cljs.core.nth.call(null,vec__9831__9832,0,null);
var s__9834 = vec__9831__9832;
if(cljs.core.truth_(include__9829.call(null,e__9833)))
{return s__9834;
} else
{return cljs.core.next.call(null,s__9834);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9829,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9835 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____9835))
{var vec__9836__9837 = temp__3974__auto____9835;
var e__9838 = cljs.core.nth.call(null,vec__9836__9837,0,null);
var s__9839 = vec__9836__9837;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__9838))?s__9839:cljs.core.next.call(null,s__9839)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include__9851 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____9852 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____9852))
{var vec__9853__9854 = temp__3974__auto____9852;
var e__9855 = cljs.core.nth.call(null,vec__9853__9854,0,null);
var s__9856 = vec__9853__9854;
if(cljs.core.truth_(include__9851.call(null,e__9855)))
{return s__9856;
} else
{return cljs.core.next.call(null,s__9856);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9851,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9857 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____9857))
{var vec__9858__9859 = temp__3974__auto____9857;
var e__9860 = cljs.core.nth.call(null,vec__9858__9859,0,null);
var s__9861 = vec__9858__9859;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__9860))?s__9861:cljs.core.next.call(null,s__9861)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__9862 = this;
var h__2522__auto____9863 = this__9862.__hash;
if(!((h__2522__auto____9863 == null)))
{return h__2522__auto____9863;
} else
{var h__2522__auto____9864 = cljs.core.hash_coll.call(null,rng);
this__9862.__hash = h__2522__auto____9864;
return h__2522__auto____9864;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__9865 = this;
if((this__9865.step > 0))
{if(((this__9865.start + this__9865.step) < this__9865.end))
{return (new cljs.core.Range(this__9865.meta,(this__9865.start + this__9865.step),this__9865.end,this__9865.step,null));
} else
{return null;
}
} else
{if(((this__9865.start + this__9865.step) > this__9865.end))
{return (new cljs.core.Range(this__9865.meta,(this__9865.start + this__9865.step),this__9865.end,this__9865.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__9866 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__9867 = this;
var this__9868 = this;
return cljs.core.pr_str.call(null,this__9868);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__9869 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__9870 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__9871 = this;
if((this__9871.step > 0))
{if((this__9871.start < this__9871.end))
{return rng;
} else
{return null;
}
} else
{if((this__9871.start > this__9871.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__9872 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__9872.end - this__9872.start) / this__9872.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__9873 = this;
return this__9873.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__9874 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__9874.meta,(this__9874.start + this__9874.step),this__9874.end,this__9874.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__9875 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__9876 = this;
return (new cljs.core.Range(meta,this__9876.start,this__9876.end,this__9876.step,this__9876.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__9877 = this;
return this__9877.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__9878 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9878.start + (n * this__9878.step));
} else
{if((function (){var and__3822__auto____9879 = (this__9878.start > this__9878.end);
if(and__3822__auto____9879)
{return (this__9878.step === 0);
} else
{return and__3822__auto____9879;
}
})())
{return this__9878.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__9880 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9880.start + (n * this__9880.step));
} else
{if((function (){var and__3822__auto____9881 = (this__9880.start > this__9880.end);
if(and__3822__auto____9881)
{return (this__9880.step === 0);
} else
{return and__3822__auto____9881;
}
})())
{return this__9880.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__9882 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9882.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.call(null,0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){
return range.call(null,0,end,1);
});
var range__2 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9885 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9885)
{var s__9886 = temp__3974__auto____9885;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__9886),take_nth.call(null,n,cljs.core.drop.call(null,n,s__9886)));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)], true);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9893 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9893)
{var s__9894 = temp__3974__auto____9893;
var fst__9895 = cljs.core.first.call(null,s__9894);
var fv__9896 = f.call(null,fst__9895);
var run__9897 = cljs.core.cons.call(null,fst__9895,cljs.core.take_while.call(null,(function (p1__9887_SHARP_){
return cljs.core._EQ_.call(null,fv__9896,f.call(null,p1__9887_SHARP_));
}),cljs.core.next.call(null,s__9894)));
return cljs.core.cons.call(null,run__9897,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__9897),s__9894))));
} else
{return null;
}
}),null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc_BANG_.call(null,counts,x,(cljs.core._lookup.call(null,counts,x,0) + 1));
}),cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____9912 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____9912)
{var s__9913 = temp__3971__auto____9912;
return reductions.call(null,f,cljs.core.first.call(null,s__9913),cljs.core.rest.call(null,s__9913));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9914 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9914)
{var s__9915 = temp__3974__auto____9914;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__9915)),cljs.core.rest.call(null,s__9915));
} else
{return null;
}
}),null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__9918 = null;
var G__9918__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__9918__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__9918__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__9918__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__9918__4 = (function() { 
var G__9919__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__9919 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9919__delegate.call(this, x, y, z, args);
};
G__9919.cljs$lang$maxFixedArity = 3;
G__9919.cljs$lang$applyTo = (function (arglist__9920){
var x = cljs.core.first(arglist__9920);
var y = cljs.core.first(cljs.core.next(arglist__9920));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9920)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9920)));
return G__9919__delegate(x, y, z, args);
});
G__9919.cljs$lang$arity$variadic = G__9919__delegate;
return G__9919;
})()
;
G__9918 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9918__0.call(this);
case 1:
return G__9918__1.call(this,x);
case 2:
return G__9918__2.call(this,x,y);
case 3:
return G__9918__3.call(this,x,y,z);
default:
return G__9918__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9918.cljs$lang$maxFixedArity = 3;
G__9918.cljs$lang$applyTo = G__9918__4.cljs$lang$applyTo;
return G__9918;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__9921 = null;
var G__9921__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__9921__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__9921__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__9921__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__9921__4 = (function() { 
var G__9922__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9922 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9922__delegate.call(this, x, y, z, args);
};
G__9922.cljs$lang$maxFixedArity = 3;
G__9922.cljs$lang$applyTo = (function (arglist__9923){
var x = cljs.core.first(arglist__9923);
var y = cljs.core.first(cljs.core.next(arglist__9923));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9923)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9923)));
return G__9922__delegate(x, y, z, args);
});
G__9922.cljs$lang$arity$variadic = G__9922__delegate;
return G__9922;
})()
;
G__9921 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9921__0.call(this);
case 1:
return G__9921__1.call(this,x);
case 2:
return G__9921__2.call(this,x,y);
case 3:
return G__9921__3.call(this,x,y,z);
default:
return G__9921__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9921.cljs$lang$maxFixedArity = 3;
G__9921.cljs$lang$applyTo = G__9921__4.cljs$lang$applyTo;
return G__9921;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__9924 = null;
var G__9924__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__9924__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__9924__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__9924__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__9924__4 = (function() { 
var G__9925__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__9925 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9925__delegate.call(this, x, y, z, args);
};
G__9925.cljs$lang$maxFixedArity = 3;
G__9925.cljs$lang$applyTo = (function (arglist__9926){
var x = cljs.core.first(arglist__9926);
var y = cljs.core.first(cljs.core.next(arglist__9926));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9926)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9926)));
return G__9925__delegate(x, y, z, args);
});
G__9925.cljs$lang$arity$variadic = G__9925__delegate;
return G__9925;
})()
;
G__9924 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9924__0.call(this);
case 1:
return G__9924__1.call(this,x);
case 2:
return G__9924__2.call(this,x,y);
case 3:
return G__9924__3.call(this,x,y,z);
default:
return G__9924__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9924.cljs$lang$maxFixedArity = 3;
G__9924.cljs$lang$applyTo = G__9924__4.cljs$lang$applyTo;
return G__9924;
})()
});
var juxt__4 = (function() { 
var G__9927__delegate = function (f,g,h,fs){
var fs__9917 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__9928 = null;
var G__9928__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__9898_SHARP_,p2__9899_SHARP_){
return cljs.core.conj.call(null,p1__9898_SHARP_,p2__9899_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__9917);
});
var G__9928__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__9900_SHARP_,p2__9901_SHARP_){
return cljs.core.conj.call(null,p1__9900_SHARP_,p2__9901_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__9917);
});
var G__9928__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__9902_SHARP_,p2__9903_SHARP_){
return cljs.core.conj.call(null,p1__9902_SHARP_,p2__9903_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__9917);
});
var G__9928__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__9904_SHARP_,p2__9905_SHARP_){
return cljs.core.conj.call(null,p1__9904_SHARP_,p2__9905_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__9917);
});
var G__9928__4 = (function() { 
var G__9929__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__9906_SHARP_,p2__9907_SHARP_){
return cljs.core.conj.call(null,p1__9906_SHARP_,cljs.core.apply.call(null,p2__9907_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__9917);
};
var G__9929 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9929__delegate.call(this, x, y, z, args);
};
G__9929.cljs$lang$maxFixedArity = 3;
G__9929.cljs$lang$applyTo = (function (arglist__9930){
var x = cljs.core.first(arglist__9930);
var y = cljs.core.first(cljs.core.next(arglist__9930));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9930)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9930)));
return G__9929__delegate(x, y, z, args);
});
G__9929.cljs$lang$arity$variadic = G__9929__delegate;
return G__9929;
})()
;
G__9928 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9928__0.call(this);
case 1:
return G__9928__1.call(this,x);
case 2:
return G__9928__2.call(this,x,y);
case 3:
return G__9928__3.call(this,x,y,z);
default:
return G__9928__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9928.cljs$lang$maxFixedArity = 3;
G__9928.cljs$lang$applyTo = G__9928__4.cljs$lang$applyTo;
return G__9928;
})()
};
var G__9927 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9927__delegate.call(this, f, g, h, fs);
};
G__9927.cljs$lang$maxFixedArity = 3;
G__9927.cljs$lang$applyTo = (function (arglist__9931){
var f = cljs.core.first(arglist__9931);
var g = cljs.core.first(cljs.core.next(arglist__9931));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9931)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9931)));
return G__9927__delegate(f, g, h, fs);
});
G__9927.cljs$lang$arity$variadic = G__9927__delegate;
return G__9927;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq.call(null,coll))
{{
var G__9934 = cljs.core.next.call(null,coll);
coll = G__9934;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9933 = cljs.core.seq.call(null,coll);
if(and__3822__auto____9933)
{return (n > 0);
} else
{return and__3822__auto____9933;
}
})()))
{{
var G__9935 = (n - 1);
var G__9936 = cljs.core.next.call(null,coll);
n = G__9935;
coll = G__9936;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return o instanceof RegExp;
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__9938 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__9938),s))
{if((cljs.core.count.call(null,matches__9938) === 1))
{return cljs.core.first.call(null,matches__9938);
} else
{return cljs.core.vec.call(null,matches__9938);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__9940 = re.exec(s);
if((matches__9940 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__9940) === 1))
{return cljs.core.first.call(null,matches__9940);
} else
{return cljs.core.vec.call(null,matches__9940);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__9945 = cljs.core.re_find.call(null,re,s);
var match_idx__9946 = s.search(re);
var match_str__9947 = ((cljs.core.coll_QMARK_.call(null,match_data__9945))?cljs.core.first.call(null,match_data__9945):match_data__9945);
var post_match__9948 = cljs.core.subs.call(null,s,(match_idx__9946 + cljs.core.count.call(null,match_str__9947)));
if(cljs.core.truth_(match_data__9945))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__9945,re_seq.call(null,re,post_match__9948));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__9955__9956 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___9957 = cljs.core.nth.call(null,vec__9955__9956,0,null);
var flags__9958 = cljs.core.nth.call(null,vec__9955__9956,1,null);
var pattern__9959 = cljs.core.nth.call(null,vec__9955__9956,2,null);
return (new RegExp(pattern__9959,flags__9958));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__9949_SHARP_){
return print_one.call(null,p1__9949_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.call(null,"nil");
} else
{if((void 0 === obj))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____9969 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____9969))
{var and__3822__auto____9973 = (function (){var G__9970__9971 = obj;
if(G__9970__9971)
{if((function (){var or__3824__auto____9972 = (G__9970__9971.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____9972)
{return or__3824__auto____9972;
} else
{return G__9970__9971.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__9970__9971.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9970__9971);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9970__9971);
}
})();
if(cljs.core.truth_(and__3822__auto____9973))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____9973;
}
} else
{return and__3822__auto____9969;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____9974 = !((obj == null));
if(and__3822__auto____9974)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____9974;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__9975__9976 = obj;
if(G__9975__9976)
{if((function (){var or__3824__auto____9977 = (G__9975__9976.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____9977)
{return or__3824__auto____9977;
} else
{return G__9975__9976.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__9975__9976.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9975__9976);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9975__9976);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__9997 = (new goog.string.StringBuffer());
var G__9998__9999 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__9998__9999)
{var string__10000 = cljs.core.first.call(null,G__9998__9999);
var G__9998__10001 = G__9998__9999;
while(true){
sb__9997.append(string__10000);
var temp__3974__auto____10002 = cljs.core.next.call(null,G__9998__10001);
if(temp__3974__auto____10002)
{var G__9998__10003 = temp__3974__auto____10002;
{
var G__10016 = cljs.core.first.call(null,G__9998__10003);
var G__10017 = G__9998__10003;
string__10000 = G__10016;
G__9998__10001 = G__10017;
continue;
}
} else
{}
break;
}
} else
{}
var G__10004__10005 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__10004__10005)
{var obj__10006 = cljs.core.first.call(null,G__10004__10005);
var G__10004__10007 = G__10004__10005;
while(true){
sb__9997.append(" ");
var G__10008__10009 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__10006,opts));
if(G__10008__10009)
{var string__10010 = cljs.core.first.call(null,G__10008__10009);
var G__10008__10011 = G__10008__10009;
while(true){
sb__9997.append(string__10010);
var temp__3974__auto____10012 = cljs.core.next.call(null,G__10008__10011);
if(temp__3974__auto____10012)
{var G__10008__10013 = temp__3974__auto____10012;
{
var G__10018 = cljs.core.first.call(null,G__10008__10013);
var G__10019 = G__10008__10013;
string__10010 = G__10018;
G__10008__10011 = G__10019;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____10014 = cljs.core.next.call(null,G__10004__10007);
if(temp__3974__auto____10014)
{var G__10004__10015 = temp__3974__auto____10014;
{
var G__10020 = cljs.core.first.call(null,G__10004__10015);
var G__10021 = G__10004__10015;
obj__10006 = G__10020;
G__10004__10007 = G__10021;
continue;
}
} else
{}
break;
}
} else
{}
return sb__9997;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return [cljs.core.str(cljs.core.pr_sb.call(null,objs,opts))].join('');
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__10023 = cljs.core.pr_sb.call(null,objs,opts);
sb__10023.append("\n");
return [cljs.core.str(sb__10023)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__10042__10043 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__10042__10043)
{var string__10044 = cljs.core.first.call(null,G__10042__10043);
var G__10042__10045 = G__10042__10043;
while(true){
cljs.core.string_print.call(null,string__10044);
var temp__3974__auto____10046 = cljs.core.next.call(null,G__10042__10045);
if(temp__3974__auto____10046)
{var G__10042__10047 = temp__3974__auto____10046;
{
var G__10060 = cljs.core.first.call(null,G__10042__10047);
var G__10061 = G__10042__10047;
string__10044 = G__10060;
G__10042__10045 = G__10061;
continue;
}
} else
{}
break;
}
} else
{}
var G__10048__10049 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__10048__10049)
{var obj__10050 = cljs.core.first.call(null,G__10048__10049);
var G__10048__10051 = G__10048__10049;
while(true){
cljs.core.string_print.call(null," ");
var G__10052__10053 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__10050,opts));
if(G__10052__10053)
{var string__10054 = cljs.core.first.call(null,G__10052__10053);
var G__10052__10055 = G__10052__10053;
while(true){
cljs.core.string_print.call(null,string__10054);
var temp__3974__auto____10056 = cljs.core.next.call(null,G__10052__10055);
if(temp__3974__auto____10056)
{var G__10052__10057 = temp__3974__auto____10056;
{
var G__10062 = cljs.core.first.call(null,G__10052__10057);
var G__10063 = G__10052__10057;
string__10054 = G__10062;
G__10052__10055 = G__10063;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____10058 = cljs.core.next.call(null,G__10048__10051);
if(temp__3974__auto____10058)
{var G__10048__10059 = temp__3974__auto____10058;
{
var G__10064 = cljs.core.first.call(null,G__10048__10059);
var G__10065 = G__10048__10059;
obj__10050 = G__10064;
G__10048__10051 = G__10065;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core._lookup.call(null,opts,"\uFDD0'flush-on-newline",null)))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__10066){
var objs = cljs.core.seq(arglist__10066);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__10067){
var objs = cljs.core.seq(arglist__10067);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__10068){
var objs = cljs.core.seq(arglist__10068);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__10069){
var objs = cljs.core.seq(arglist__10069);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__10070){
var objs = cljs.core.seq(arglist__10070);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__10071){
var objs = cljs.core.seq(arglist__10071);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__10072){
var objs = cljs.core.seq(arglist__10072);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__10073){
var objs = cljs.core.seq(arglist__10073);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
/**
* Prints formatted output, as per format
* @param {...*} var_args
*/
cljs.core.printf = (function() { 
var printf__delegate = function (fmt,args){
return cljs.core.print.call(null,cljs.core.apply.call(null,cljs.core.format,fmt,args));
};
var printf = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return printf__delegate.call(this, fmt, args);
};
printf.cljs$lang$maxFixedArity = 1;
printf.cljs$lang$applyTo = (function (arglist__10074){
var fmt = cljs.core.first(arglist__10074);
var args = cljs.core.rest(arglist__10074);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10075 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10075,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10076 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10076,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10077 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10077,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____10078 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____10078))
{var nspc__10079 = temp__3974__auto____10078;
return [cljs.core.str(nspc__10079),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____10080 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____10080))
{var nspc__10081 = temp__3974__auto____10080;
return [cljs.core.str(nspc__10081),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.call(null,(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts))?goog.string.quote(obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10082 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10082,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (d,_){
var normalize__10084 = (function (n,len){
var ns__10083 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__10083) < len))
{{
var G__10086 = [cljs.core.str("0"),cljs.core.str(ns__10083)].join('');
ns__10083 = G__10086;
continue;
}
} else
{return ns__10083;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__10084.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__10084.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__10084.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__10084.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__10084.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__10084.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10085 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10085,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
return cljs.core.compare_indexed.call(null,x,y);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10087 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__10088 = this;
var G__10089__10090 = cljs.core.seq.call(null,this__10088.watches);
if(G__10089__10090)
{var G__10092__10094 = cljs.core.first.call(null,G__10089__10090);
var vec__10093__10095 = G__10092__10094;
var key__10096 = cljs.core.nth.call(null,vec__10093__10095,0,null);
var f__10097 = cljs.core.nth.call(null,vec__10093__10095,1,null);
var G__10089__10098 = G__10089__10090;
var G__10092__10099 = G__10092__10094;
var G__10089__10100 = G__10089__10098;
while(true){
var vec__10101__10102 = G__10092__10099;
var key__10103 = cljs.core.nth.call(null,vec__10101__10102,0,null);
var f__10104 = cljs.core.nth.call(null,vec__10101__10102,1,null);
var G__10089__10105 = G__10089__10100;
f__10104.call(null,key__10103,this$,oldval,newval);
var temp__3974__auto____10106 = cljs.core.next.call(null,G__10089__10105);
if(temp__3974__auto____10106)
{var G__10089__10107 = temp__3974__auto____10106;
{
var G__10114 = cljs.core.first.call(null,G__10089__10107);
var G__10115 = G__10089__10107;
G__10092__10099 = G__10114;
G__10089__10100 = G__10115;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__10108 = this;
return this$.watches = cljs.core.assoc.call(null,this__10108.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__10109 = this;
return this$.watches = cljs.core.dissoc.call(null,this__10109.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__10110 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__10110.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__10111 = this;
return this__10111.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10112 = this;
return this__10112.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__10113 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__10127__delegate = function (x,p__10116){
var map__10122__10123 = p__10116;
var map__10122__10124 = ((cljs.core.seq_QMARK_.call(null,map__10122__10123))?cljs.core.apply.call(null,cljs.core.hash_map,map__10122__10123):map__10122__10123);
var validator__10125 = cljs.core._lookup.call(null,map__10122__10124,"\uFDD0'validator",null);
var meta__10126 = cljs.core._lookup.call(null,map__10122__10124,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__10126,validator__10125,null));
};
var G__10127 = function (x,var_args){
var p__10116 = null;
if (goog.isDef(var_args)) {
  p__10116 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10127__delegate.call(this, x, p__10116);
};
G__10127.cljs$lang$maxFixedArity = 1;
G__10127.cljs$lang$applyTo = (function (arglist__10128){
var x = cljs.core.first(arglist__10128);
var p__10116 = cljs.core.rest(arglist__10128);
return G__10127__delegate(x, p__10116);
});
G__10127.cljs$lang$arity$variadic = G__10127__delegate;
return G__10127;
})()
;
atom = function(x,var_args){
var p__10116 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3974__auto____10132 = a.validator;
if(cljs.core.truth_(temp__3974__auto____10132))
{var validate__10133 = temp__3974__auto____10132;
if(cljs.core.truth_(validate__10133.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440))))].join('')));
}
} else
{}
var old_value__10134 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__10134,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() { 
var G__10135__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__10135 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10135__delegate.call(this, a, f, x, y, z, more);
};
G__10135.cljs$lang$maxFixedArity = 5;
G__10135.cljs$lang$applyTo = (function (arglist__10136){
var a = cljs.core.first(arglist__10136);
var f = cljs.core.first(cljs.core.next(arglist__10136));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10136)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10136))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10136)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10136)))));
return G__10135__delegate(a, f, x, y, z, more);
});
G__10135.cljs$lang$arity$variadic = G__10135__delegate;
return G__10135;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.call(null,a.state,oldval))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__10137){
var iref = cljs.core.first(arglist__10137);
var f = cljs.core.first(cljs.core.next(arglist__10137));
var args = cljs.core.rest(cljs.core.next(arglist__10137));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,[cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073774592;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__10138 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__10138.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10139 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__10139.state,(function (p__10140){
var map__10141__10142 = p__10140;
var map__10141__10143 = ((cljs.core.seq_QMARK_.call(null,map__10141__10142))?cljs.core.apply.call(null,cljs.core.hash_map,map__10141__10142):map__10141__10142);
var curr_state__10144 = map__10141__10143;
var done__10145 = cljs.core._lookup.call(null,map__10141__10143,"\uFDD0'done",null);
if(cljs.core.truth_(done__10145))
{return curr_state__10144;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__10139.f.call(null)});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_.call(null,x))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__10166__10167 = options;
var map__10166__10168 = ((cljs.core.seq_QMARK_.call(null,map__10166__10167))?cljs.core.apply.call(null,cljs.core.hash_map,map__10166__10167):map__10166__10167);
var keywordize_keys__10169 = cljs.core._lookup.call(null,map__10166__10168,"\uFDD0'keywordize-keys",null);
var keyfn__10170 = (cljs.core.truth_(keywordize_keys__10169)?cljs.core.keyword:cljs.core.str);
var f__10185 = (function thisfn(x){
if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray(x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if((cljs.core.type.call(null,x) === Object))
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2792__auto____10184 = (function iter__10178(s__10179){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10179__10182 = s__10179;
while(true){
if(cljs.core.seq.call(null,s__10179__10182))
{var k__10183 = cljs.core.first.call(null,s__10179__10182);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__10170.call(null,k__10183),thisfn.call(null,(x[k__10183]))], true),iter__10178.call(null,cljs.core.rest.call(null,s__10179__10182)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2792__auto____10184.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});
return f__10185.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__10186){
var x = cljs.core.first(arglist__10186);
var options = cljs.core.rest(arglist__10186);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__10191 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__10195__delegate = function (args){
var temp__3971__auto____10192 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__10191),args,null);
if(cljs.core.truth_(temp__3971__auto____10192))
{var v__10193 = temp__3971__auto____10192;
return v__10193;
} else
{var ret__10194 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__10191,cljs.core.assoc,args,ret__10194);
return ret__10194;
}
};
var G__10195 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10195__delegate.call(this, args);
};
G__10195.cljs$lang$maxFixedArity = 0;
G__10195.cljs$lang$applyTo = (function (arglist__10196){
var args = cljs.core.seq(arglist__10196);;
return G__10195__delegate(args);
});
G__10195.cljs$lang$arity$variadic = G__10195__delegate;
return G__10195;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret__10198 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__10198))
{{
var G__10199 = ret__10198;
f = G__10199;
continue;
}
} else
{return ret__10198;
}
break;
}
});
var trampoline__2 = (function() { 
var G__10200__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__10200 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10200__delegate.call(this, f, args);
};
G__10200.cljs$lang$maxFixedArity = 1;
G__10200.cljs$lang$applyTo = (function (arglist__10201){
var f = cljs.core.first(arglist__10201);
var args = cljs.core.rest(arglist__10201);
return G__10200__delegate(f, args);
});
G__10200.cljs$lang$arity$variadic = G__10200__delegate;
return G__10200;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.call(null,1);
});
var rand__1 = (function (n){
return (Math.random.call(null) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor.call(null,(Math.random.call(null) * n));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__10203 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__10203,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__10203,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.ObjMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.EMPTY,"\uFDD0'descendants":cljs.core.ObjMap.EMPTY,"\uFDD0'ancestors":cljs.core.ObjMap.EMPTY});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3824__auto____10212 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____10212)
{return or__3824__auto____10212;
} else
{var or__3824__auto____10213 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____10213)
{return or__3824__auto____10213;
} else
{var and__3822__auto____10214 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____10214)
{var and__3822__auto____10215 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____10215)
{var and__3822__auto____10216 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____10216)
{var ret__10217 = true;
var i__10218 = 0;
while(true){
if((function (){var or__3824__auto____10219 = cljs.core.not.call(null,ret__10217);
if(or__3824__auto____10219)
{return or__3824__auto____10219;
} else
{return (i__10218 === cljs.core.count.call(null,parent));
}
})())
{return ret__10217;
} else
{{
var G__10220 = isa_QMARK_.call(null,h,child.call(null,i__10218),parent.call(null,i__10218));
var G__10221 = (i__10218 + 1);
ret__10217 = G__10220;
i__10218 = G__10221;
continue;
}
}
break;
}
} else
{return and__3822__auto____10216;
}
} else
{return and__3822__auto____10215;
}
} else
{return and__3822__auto____10214;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,null));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,null));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),tag,null));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6724))))].join('')));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6728))))].join('')));
}
var tp__10230 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__10231 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__10232 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__10233 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____10234 = ((cljs.core.contains_QMARK_.call(null,tp__10230.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__10232.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__10232.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__10230,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__10233.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__10231,parent,ta__10232),"\uFDD0'descendants":tf__10233.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__10232,tag,td__10231)});
})());
if(cljs.core.truth_(or__3824__auto____10234))
{return or__3824__auto____10234;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__10239 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__10240 = (cljs.core.truth_(parentMap__10239.call(null,tag))?cljs.core.disj.call(null,parentMap__10239.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__10241 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__10240))?cljs.core.assoc.call(null,parentMap__10239,tag,childsParents__10240):cljs.core.dissoc.call(null,parentMap__10239,tag));
var deriv_seq__10242 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__10222_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__10222_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__10222_SHARP_),cljs.core.second.call(null,p1__10222_SHARP_)));
}),cljs.core.seq.call(null,newParents__10241)));
if(cljs.core.contains_QMARK_.call(null,parentMap__10239.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__10223_SHARP_,p2__10224_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__10223_SHARP_,p2__10224_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__10242));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__10250 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____10252 = (cljs.core.truth_((function (){var and__3822__auto____10251 = xprefs__10250;
if(cljs.core.truth_(and__3822__auto____10251))
{return xprefs__10250.call(null,y);
} else
{return and__3822__auto____10251;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____10252))
{return or__3824__auto____10252;
} else
{var or__3824__auto____10254 = (function (){var ps__10253 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__10253) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__10253),prefer_table)))
{} else
{}
{
var G__10257 = cljs.core.rest.call(null,ps__10253);
ps__10253 = G__10257;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10254))
{return or__3824__auto____10254;
} else
{var or__3824__auto____10256 = (function (){var ps__10255 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__10255) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__10255),y,prefer_table)))
{} else
{}
{
var G__10258 = cljs.core.rest.call(null,ps__10255);
ps__10255 = G__10258;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10256))
{return or__3824__auto____10256;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____10260 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____10260))
{return or__3824__auto____10260;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__10278 = cljs.core.reduce.call(null,(function (be,p__10270){
var vec__10271__10272 = p__10270;
var k__10273 = cljs.core.nth.call(null,vec__10271__10272,0,null);
var ___10274 = cljs.core.nth.call(null,vec__10271__10272,1,null);
var e__10275 = vec__10271__10272;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__10273))
{var be2__10277 = (cljs.core.truth_((function (){var or__3824__auto____10276 = (be == null);
if(or__3824__auto____10276)
{return or__3824__auto____10276;
} else
{return cljs.core.dominates.call(null,k__10273,cljs.core.first.call(null,be),prefer_table);
}
})())?e__10275:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__10277),k__10273,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__10273),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__10277)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__10277;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__10278))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__10278));
return cljs.core.second.call(null,best_entry__10278);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3822__auto____10283 = mf;
if(and__3822__auto____10283)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____10283;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2693__auto____10284 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10285 = (cljs.core._reset[goog.typeOf(x__2693__auto____10284)]);
if(or__3824__auto____10285)
{return or__3824__auto____10285;
} else
{var or__3824__auto____10286 = (cljs.core._reset["_"]);
if(or__3824__auto____10286)
{return or__3824__auto____10286;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____10291 = mf;
if(and__3822__auto____10291)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____10291;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2693__auto____10292 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10293 = (cljs.core._add_method[goog.typeOf(x__2693__auto____10292)]);
if(or__3824__auto____10293)
{return or__3824__auto____10293;
} else
{var or__3824__auto____10294 = (cljs.core._add_method["_"]);
if(or__3824__auto____10294)
{return or__3824__auto____10294;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____10299 = mf;
if(and__3822__auto____10299)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____10299;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2693__auto____10300 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10301 = (cljs.core._remove_method[goog.typeOf(x__2693__auto____10300)]);
if(or__3824__auto____10301)
{return or__3824__auto____10301;
} else
{var or__3824__auto____10302 = (cljs.core._remove_method["_"]);
if(or__3824__auto____10302)
{return or__3824__auto____10302;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____10307 = mf;
if(and__3822__auto____10307)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____10307;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2693__auto____10308 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10309 = (cljs.core._prefer_method[goog.typeOf(x__2693__auto____10308)]);
if(or__3824__auto____10309)
{return or__3824__auto____10309;
} else
{var or__3824__auto____10310 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____10310)
{return or__3824__auto____10310;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____10315 = mf;
if(and__3822__auto____10315)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____10315;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2693__auto____10316 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10317 = (cljs.core._get_method[goog.typeOf(x__2693__auto____10316)]);
if(or__3824__auto____10317)
{return or__3824__auto____10317;
} else
{var or__3824__auto____10318 = (cljs.core._get_method["_"]);
if(or__3824__auto____10318)
{return or__3824__auto____10318;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____10323 = mf;
if(and__3822__auto____10323)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____10323;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2693__auto____10324 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10325 = (cljs.core._methods[goog.typeOf(x__2693__auto____10324)]);
if(or__3824__auto____10325)
{return or__3824__auto____10325;
} else
{var or__3824__auto____10326 = (cljs.core._methods["_"]);
if(or__3824__auto____10326)
{return or__3824__auto____10326;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____10331 = mf;
if(and__3822__auto____10331)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____10331;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2693__auto____10332 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10333 = (cljs.core._prefers[goog.typeOf(x__2693__auto____10332)]);
if(or__3824__auto____10333)
{return or__3824__auto____10333;
} else
{var or__3824__auto____10334 = (cljs.core._prefers["_"]);
if(or__3824__auto____10334)
{return or__3824__auto____10334;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____10339 = mf;
if(and__3822__auto____10339)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____10339;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2693__auto____10340 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10341 = (cljs.core._dispatch[goog.typeOf(x__2693__auto____10340)]);
if(or__3824__auto____10341)
{return or__3824__auto____10341;
} else
{var or__3824__auto____10342 = (cljs.core._dispatch["_"]);
if(or__3824__auto____10342)
{return or__3824__auto____10342;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__10345 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__10346 = cljs.core._get_method.call(null,mf,dispatch_val__10345);
if(cljs.core.truth_(target_fn__10346))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__10345)].join('')));
}
return cljs.core.apply.call(null,target_fn__10346,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 64;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10347 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__10348 = this;
cljs.core.swap_BANG_.call(null,this__10348.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10348.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10348.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10348.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__10349 = this;
cljs.core.swap_BANG_.call(null,this__10349.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__10349.method_cache,this__10349.method_table,this__10349.cached_hierarchy,this__10349.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__10350 = this;
cljs.core.swap_BANG_.call(null,this__10350.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__10350.method_cache,this__10350.method_table,this__10350.cached_hierarchy,this__10350.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__10351 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__10351.cached_hierarchy),cljs.core.deref.call(null,this__10351.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__10351.method_cache,this__10351.method_table,this__10351.cached_hierarchy,this__10351.hierarchy);
}
var temp__3971__auto____10352 = cljs.core.deref.call(null,this__10351.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____10352))
{var target_fn__10353 = temp__3971__auto____10352;
return target_fn__10353;
} else
{var temp__3971__auto____10354 = cljs.core.find_and_cache_best_method.call(null,this__10351.name,dispatch_val,this__10351.hierarchy,this__10351.method_table,this__10351.prefer_table,this__10351.method_cache,this__10351.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____10354))
{var target_fn__10355 = temp__3971__auto____10354;
return target_fn__10355;
} else
{return cljs.core.deref.call(null,this__10351.method_table).call(null,this__10351.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__10356 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__10356.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__10356.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__10356.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__10356.method_cache,this__10356.method_table,this__10356.cached_hierarchy,this__10356.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__10357 = this;
return cljs.core.deref.call(null,this__10357.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__10358 = this;
return cljs.core.deref.call(null,this__10358.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__10359 = this;
return cljs.core.do_dispatch.call(null,mf,this__10359.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__10361__delegate = function (_,args){
var self__10360 = this;
return cljs.core._dispatch.call(null,self__10360,args);
};
var G__10361 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10361__delegate.call(this, _, args);
};
G__10361.cljs$lang$maxFixedArity = 1;
G__10361.cljs$lang$applyTo = (function (arglist__10362){
var _ = cljs.core.first(arglist__10362);
var args = cljs.core.rest(arglist__10362);
return G__10361__delegate(_, args);
});
G__10361.cljs$lang$arity$variadic = G__10361__delegate;
return G__10361;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__10363 = this;
return cljs.core._dispatch.call(null,self__10363,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 543162368;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__2639__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10364 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_10366,_){
var this__10365 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__10365.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__10367 = this;
var and__3822__auto____10368 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____10368)
{return (this__10367.uuid === other.uuid);
} else
{return and__3822__auto____10368;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__10369 = this;
var this__10370 = this;
return cljs.core.pr_str.call(null,this__10370);
});
cljs.core.UUID;
