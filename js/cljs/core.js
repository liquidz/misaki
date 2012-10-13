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
var x__6435 = (((x == null))?null:x);
if((p[goog.typeOf(x__6435)]))
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
var G__6436__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__6436 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6436__delegate.call(this, array, i, idxs);
};
G__6436.cljs$lang$maxFixedArity = 2;
G__6436.cljs$lang$applyTo = (function (arglist__6437){
var array = cljs.core.first(arglist__6437);
var i = cljs.core.first(cljs.core.next(arglist__6437));
var idxs = cljs.core.rest(cljs.core.next(arglist__6437));
return G__6436__delegate(array, i, idxs);
});
G__6436.cljs$lang$arity$variadic = G__6436__delegate;
return G__6436;
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
if((function (){var and__3822__auto____6522 = this$;
if(and__3822__auto____6522)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____6522;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2696__auto____6523 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6524 = (cljs.core._invoke[goog.typeOf(x__2696__auto____6523)]);
if(or__3824__auto____6524)
{return or__3824__auto____6524;
} else
{var or__3824__auto____6525 = (cljs.core._invoke["_"]);
if(or__3824__auto____6525)
{return or__3824__auto____6525;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____6526 = this$;
if(and__3822__auto____6526)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____6526;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2696__auto____6527 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6528 = (cljs.core._invoke[goog.typeOf(x__2696__auto____6527)]);
if(or__3824__auto____6528)
{return or__3824__auto____6528;
} else
{var or__3824__auto____6529 = (cljs.core._invoke["_"]);
if(or__3824__auto____6529)
{return or__3824__auto____6529;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____6530 = this$;
if(and__3822__auto____6530)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____6530;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2696__auto____6531 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6532 = (cljs.core._invoke[goog.typeOf(x__2696__auto____6531)]);
if(or__3824__auto____6532)
{return or__3824__auto____6532;
} else
{var or__3824__auto____6533 = (cljs.core._invoke["_"]);
if(or__3824__auto____6533)
{return or__3824__auto____6533;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____6534 = this$;
if(and__3822__auto____6534)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____6534;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2696__auto____6535 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6536 = (cljs.core._invoke[goog.typeOf(x__2696__auto____6535)]);
if(or__3824__auto____6536)
{return or__3824__auto____6536;
} else
{var or__3824__auto____6537 = (cljs.core._invoke["_"]);
if(or__3824__auto____6537)
{return or__3824__auto____6537;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____6538 = this$;
if(and__3822__auto____6538)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____6538;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2696__auto____6539 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6540 = (cljs.core._invoke[goog.typeOf(x__2696__auto____6539)]);
if(or__3824__auto____6540)
{return or__3824__auto____6540;
} else
{var or__3824__auto____6541 = (cljs.core._invoke["_"]);
if(or__3824__auto____6541)
{return or__3824__auto____6541;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____6542 = this$;
if(and__3822__auto____6542)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____6542;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2696__auto____6543 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6544 = (cljs.core._invoke[goog.typeOf(x__2696__auto____6543)]);
if(or__3824__auto____6544)
{return or__3824__auto____6544;
} else
{var or__3824__auto____6545 = (cljs.core._invoke["_"]);
if(or__3824__auto____6545)
{return or__3824__auto____6545;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____6546 = this$;
if(and__3822__auto____6546)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____6546;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2696__auto____6547 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6548 = (cljs.core._invoke[goog.typeOf(x__2696__auto____6547)]);
if(or__3824__auto____6548)
{return or__3824__auto____6548;
} else
{var or__3824__auto____6549 = (cljs.core._invoke["_"]);
if(or__3824__auto____6549)
{return or__3824__auto____6549;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____6550 = this$;
if(and__3822__auto____6550)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____6550;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2696__auto____6551 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6552 = (cljs.core._invoke[goog.typeOf(x__2696__auto____6551)]);
if(or__3824__auto____6552)
{return or__3824__auto____6552;
} else
{var or__3824__auto____6553 = (cljs.core._invoke["_"]);
if(or__3824__auto____6553)
{return or__3824__auto____6553;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____6554 = this$;
if(and__3822__auto____6554)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____6554;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2696__auto____6555 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6556 = (cljs.core._invoke[goog.typeOf(x__2696__auto____6555)]);
if(or__3824__auto____6556)
{return or__3824__auto____6556;
} else
{var or__3824__auto____6557 = (cljs.core._invoke["_"]);
if(or__3824__auto____6557)
{return or__3824__auto____6557;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____6558 = this$;
if(and__3822__auto____6558)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____6558;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2696__auto____6559 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6560 = (cljs.core._invoke[goog.typeOf(x__2696__auto____6559)]);
if(or__3824__auto____6560)
{return or__3824__auto____6560;
} else
{var or__3824__auto____6561 = (cljs.core._invoke["_"]);
if(or__3824__auto____6561)
{return or__3824__auto____6561;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____6562 = this$;
if(and__3822__auto____6562)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____6562;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2696__auto____6563 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6564 = (cljs.core._invoke[goog.typeOf(x__2696__auto____6563)]);
if(or__3824__auto____6564)
{return or__3824__auto____6564;
} else
{var or__3824__auto____6565 = (cljs.core._invoke["_"]);
if(or__3824__auto____6565)
{return or__3824__auto____6565;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____6566 = this$;
if(and__3822__auto____6566)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____6566;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2696__auto____6567 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6568 = (cljs.core._invoke[goog.typeOf(x__2696__auto____6567)]);
if(or__3824__auto____6568)
{return or__3824__auto____6568;
} else
{var or__3824__auto____6569 = (cljs.core._invoke["_"]);
if(or__3824__auto____6569)
{return or__3824__auto____6569;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____6570 = this$;
if(and__3822__auto____6570)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____6570;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2696__auto____6571 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6572 = (cljs.core._invoke[goog.typeOf(x__2696__auto____6571)]);
if(or__3824__auto____6572)
{return or__3824__auto____6572;
} else
{var or__3824__auto____6573 = (cljs.core._invoke["_"]);
if(or__3824__auto____6573)
{return or__3824__auto____6573;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____6574 = this$;
if(and__3822__auto____6574)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____6574;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2696__auto____6575 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6576 = (cljs.core._invoke[goog.typeOf(x__2696__auto____6575)]);
if(or__3824__auto____6576)
{return or__3824__auto____6576;
} else
{var or__3824__auto____6577 = (cljs.core._invoke["_"]);
if(or__3824__auto____6577)
{return or__3824__auto____6577;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____6578 = this$;
if(and__3822__auto____6578)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____6578;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2696__auto____6579 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6580 = (cljs.core._invoke[goog.typeOf(x__2696__auto____6579)]);
if(or__3824__auto____6580)
{return or__3824__auto____6580;
} else
{var or__3824__auto____6581 = (cljs.core._invoke["_"]);
if(or__3824__auto____6581)
{return or__3824__auto____6581;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____6582 = this$;
if(and__3822__auto____6582)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____6582;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2696__auto____6583 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6584 = (cljs.core._invoke[goog.typeOf(x__2696__auto____6583)]);
if(or__3824__auto____6584)
{return or__3824__auto____6584;
} else
{var or__3824__auto____6585 = (cljs.core._invoke["_"]);
if(or__3824__auto____6585)
{return or__3824__auto____6585;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____6586 = this$;
if(and__3822__auto____6586)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____6586;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2696__auto____6587 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6588 = (cljs.core._invoke[goog.typeOf(x__2696__auto____6587)]);
if(or__3824__auto____6588)
{return or__3824__auto____6588;
} else
{var or__3824__auto____6589 = (cljs.core._invoke["_"]);
if(or__3824__auto____6589)
{return or__3824__auto____6589;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____6590 = this$;
if(and__3822__auto____6590)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____6590;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2696__auto____6591 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6592 = (cljs.core._invoke[goog.typeOf(x__2696__auto____6591)]);
if(or__3824__auto____6592)
{return or__3824__auto____6592;
} else
{var or__3824__auto____6593 = (cljs.core._invoke["_"]);
if(or__3824__auto____6593)
{return or__3824__auto____6593;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____6594 = this$;
if(and__3822__auto____6594)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____6594;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2696__auto____6595 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6596 = (cljs.core._invoke[goog.typeOf(x__2696__auto____6595)]);
if(or__3824__auto____6596)
{return or__3824__auto____6596;
} else
{var or__3824__auto____6597 = (cljs.core._invoke["_"]);
if(or__3824__auto____6597)
{return or__3824__auto____6597;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____6598 = this$;
if(and__3822__auto____6598)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____6598;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2696__auto____6599 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6600 = (cljs.core._invoke[goog.typeOf(x__2696__auto____6599)]);
if(or__3824__auto____6600)
{return or__3824__auto____6600;
} else
{var or__3824__auto____6601 = (cljs.core._invoke["_"]);
if(or__3824__auto____6601)
{return or__3824__auto____6601;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____6602 = this$;
if(and__3822__auto____6602)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____6602;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2696__auto____6603 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6604 = (cljs.core._invoke[goog.typeOf(x__2696__auto____6603)]);
if(or__3824__auto____6604)
{return or__3824__auto____6604;
} else
{var or__3824__auto____6605 = (cljs.core._invoke["_"]);
if(or__3824__auto____6605)
{return or__3824__auto____6605;
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
if((function (){var and__3822__auto____6610 = coll;
if(and__3822__auto____6610)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____6610;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2696__auto____6611 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6612 = (cljs.core._count[goog.typeOf(x__2696__auto____6611)]);
if(or__3824__auto____6612)
{return or__3824__auto____6612;
} else
{var or__3824__auto____6613 = (cljs.core._count["_"]);
if(or__3824__auto____6613)
{return or__3824__auto____6613;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____6618 = coll;
if(and__3822__auto____6618)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____6618;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2696__auto____6619 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6620 = (cljs.core._empty[goog.typeOf(x__2696__auto____6619)]);
if(or__3824__auto____6620)
{return or__3824__auto____6620;
} else
{var or__3824__auto____6621 = (cljs.core._empty["_"]);
if(or__3824__auto____6621)
{return or__3824__auto____6621;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____6626 = coll;
if(and__3822__auto____6626)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____6626;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2696__auto____6627 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6628 = (cljs.core._conj[goog.typeOf(x__2696__auto____6627)]);
if(or__3824__auto____6628)
{return or__3824__auto____6628;
} else
{var or__3824__auto____6629 = (cljs.core._conj["_"]);
if(or__3824__auto____6629)
{return or__3824__auto____6629;
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
if((function (){var and__3822__auto____6638 = coll;
if(and__3822__auto____6638)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____6638;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2696__auto____6639 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6640 = (cljs.core._nth[goog.typeOf(x__2696__auto____6639)]);
if(or__3824__auto____6640)
{return or__3824__auto____6640;
} else
{var or__3824__auto____6641 = (cljs.core._nth["_"]);
if(or__3824__auto____6641)
{return or__3824__auto____6641;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____6642 = coll;
if(and__3822__auto____6642)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____6642;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2696__auto____6643 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6644 = (cljs.core._nth[goog.typeOf(x__2696__auto____6643)]);
if(or__3824__auto____6644)
{return or__3824__auto____6644;
} else
{var or__3824__auto____6645 = (cljs.core._nth["_"]);
if(or__3824__auto____6645)
{return or__3824__auto____6645;
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
if((function (){var and__3822__auto____6650 = coll;
if(and__3822__auto____6650)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____6650;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2696__auto____6651 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6652 = (cljs.core._first[goog.typeOf(x__2696__auto____6651)]);
if(or__3824__auto____6652)
{return or__3824__auto____6652;
} else
{var or__3824__auto____6653 = (cljs.core._first["_"]);
if(or__3824__auto____6653)
{return or__3824__auto____6653;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____6658 = coll;
if(and__3822__auto____6658)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____6658;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2696__auto____6659 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6660 = (cljs.core._rest[goog.typeOf(x__2696__auto____6659)]);
if(or__3824__auto____6660)
{return or__3824__auto____6660;
} else
{var or__3824__auto____6661 = (cljs.core._rest["_"]);
if(or__3824__auto____6661)
{return or__3824__auto____6661;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____6666 = coll;
if(and__3822__auto____6666)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____6666;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2696__auto____6667 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6668 = (cljs.core._next[goog.typeOf(x__2696__auto____6667)]);
if(or__3824__auto____6668)
{return or__3824__auto____6668;
} else
{var or__3824__auto____6669 = (cljs.core._next["_"]);
if(or__3824__auto____6669)
{return or__3824__auto____6669;
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
if((function (){var and__3822__auto____6678 = o;
if(and__3822__auto____6678)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____6678;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2696__auto____6679 = (((o == null))?null:o);
return (function (){var or__3824__auto____6680 = (cljs.core._lookup[goog.typeOf(x__2696__auto____6679)]);
if(or__3824__auto____6680)
{return or__3824__auto____6680;
} else
{var or__3824__auto____6681 = (cljs.core._lookup["_"]);
if(or__3824__auto____6681)
{return or__3824__auto____6681;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____6682 = o;
if(and__3822__auto____6682)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____6682;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2696__auto____6683 = (((o == null))?null:o);
return (function (){var or__3824__auto____6684 = (cljs.core._lookup[goog.typeOf(x__2696__auto____6683)]);
if(or__3824__auto____6684)
{return or__3824__auto____6684;
} else
{var or__3824__auto____6685 = (cljs.core._lookup["_"]);
if(or__3824__auto____6685)
{return or__3824__auto____6685;
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
if((function (){var and__3822__auto____6690 = coll;
if(and__3822__auto____6690)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____6690;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2696__auto____6691 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6692 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2696__auto____6691)]);
if(or__3824__auto____6692)
{return or__3824__auto____6692;
} else
{var or__3824__auto____6693 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____6693)
{return or__3824__auto____6693;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____6698 = coll;
if(and__3822__auto____6698)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____6698;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2696__auto____6699 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6700 = (cljs.core._assoc[goog.typeOf(x__2696__auto____6699)]);
if(or__3824__auto____6700)
{return or__3824__auto____6700;
} else
{var or__3824__auto____6701 = (cljs.core._assoc["_"]);
if(or__3824__auto____6701)
{return or__3824__auto____6701;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____6706 = coll;
if(and__3822__auto____6706)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____6706;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2696__auto____6707 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6708 = (cljs.core._dissoc[goog.typeOf(x__2696__auto____6707)]);
if(or__3824__auto____6708)
{return or__3824__auto____6708;
} else
{var or__3824__auto____6709 = (cljs.core._dissoc["_"]);
if(or__3824__auto____6709)
{return or__3824__auto____6709;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____6714 = coll;
if(and__3822__auto____6714)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____6714;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2696__auto____6715 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6716 = (cljs.core._key[goog.typeOf(x__2696__auto____6715)]);
if(or__3824__auto____6716)
{return or__3824__auto____6716;
} else
{var or__3824__auto____6717 = (cljs.core._key["_"]);
if(or__3824__auto____6717)
{return or__3824__auto____6717;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____6722 = coll;
if(and__3822__auto____6722)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____6722;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2696__auto____6723 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6724 = (cljs.core._val[goog.typeOf(x__2696__auto____6723)]);
if(or__3824__auto____6724)
{return or__3824__auto____6724;
} else
{var or__3824__auto____6725 = (cljs.core._val["_"]);
if(or__3824__auto____6725)
{return or__3824__auto____6725;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____6730 = coll;
if(and__3822__auto____6730)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____6730;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2696__auto____6731 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6732 = (cljs.core._disjoin[goog.typeOf(x__2696__auto____6731)]);
if(or__3824__auto____6732)
{return or__3824__auto____6732;
} else
{var or__3824__auto____6733 = (cljs.core._disjoin["_"]);
if(or__3824__auto____6733)
{return or__3824__auto____6733;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____6738 = coll;
if(and__3822__auto____6738)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____6738;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2696__auto____6739 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6740 = (cljs.core._peek[goog.typeOf(x__2696__auto____6739)]);
if(or__3824__auto____6740)
{return or__3824__auto____6740;
} else
{var or__3824__auto____6741 = (cljs.core._peek["_"]);
if(or__3824__auto____6741)
{return or__3824__auto____6741;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____6746 = coll;
if(and__3822__auto____6746)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____6746;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2696__auto____6747 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6748 = (cljs.core._pop[goog.typeOf(x__2696__auto____6747)]);
if(or__3824__auto____6748)
{return or__3824__auto____6748;
} else
{var or__3824__auto____6749 = (cljs.core._pop["_"]);
if(or__3824__auto____6749)
{return or__3824__auto____6749;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____6754 = coll;
if(and__3822__auto____6754)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____6754;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2696__auto____6755 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6756 = (cljs.core._assoc_n[goog.typeOf(x__2696__auto____6755)]);
if(or__3824__auto____6756)
{return or__3824__auto____6756;
} else
{var or__3824__auto____6757 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____6757)
{return or__3824__auto____6757;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____6762 = o;
if(and__3822__auto____6762)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____6762;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2696__auto____6763 = (((o == null))?null:o);
return (function (){var or__3824__auto____6764 = (cljs.core._deref[goog.typeOf(x__2696__auto____6763)]);
if(or__3824__auto____6764)
{return or__3824__auto____6764;
} else
{var or__3824__auto____6765 = (cljs.core._deref["_"]);
if(or__3824__auto____6765)
{return or__3824__auto____6765;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____6770 = o;
if(and__3822__auto____6770)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____6770;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2696__auto____6771 = (((o == null))?null:o);
return (function (){var or__3824__auto____6772 = (cljs.core._deref_with_timeout[goog.typeOf(x__2696__auto____6771)]);
if(or__3824__auto____6772)
{return or__3824__auto____6772;
} else
{var or__3824__auto____6773 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____6773)
{return or__3824__auto____6773;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____6778 = o;
if(and__3822__auto____6778)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____6778;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2696__auto____6779 = (((o == null))?null:o);
return (function (){var or__3824__auto____6780 = (cljs.core._meta[goog.typeOf(x__2696__auto____6779)]);
if(or__3824__auto____6780)
{return or__3824__auto____6780;
} else
{var or__3824__auto____6781 = (cljs.core._meta["_"]);
if(or__3824__auto____6781)
{return or__3824__auto____6781;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____6786 = o;
if(and__3822__auto____6786)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____6786;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2696__auto____6787 = (((o == null))?null:o);
return (function (){var or__3824__auto____6788 = (cljs.core._with_meta[goog.typeOf(x__2696__auto____6787)]);
if(or__3824__auto____6788)
{return or__3824__auto____6788;
} else
{var or__3824__auto____6789 = (cljs.core._with_meta["_"]);
if(or__3824__auto____6789)
{return or__3824__auto____6789;
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
if((function (){var and__3822__auto____6798 = coll;
if(and__3822__auto____6798)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____6798;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2696__auto____6799 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6800 = (cljs.core._reduce[goog.typeOf(x__2696__auto____6799)]);
if(or__3824__auto____6800)
{return or__3824__auto____6800;
} else
{var or__3824__auto____6801 = (cljs.core._reduce["_"]);
if(or__3824__auto____6801)
{return or__3824__auto____6801;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____6802 = coll;
if(and__3822__auto____6802)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____6802;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2696__auto____6803 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6804 = (cljs.core._reduce[goog.typeOf(x__2696__auto____6803)]);
if(or__3824__auto____6804)
{return or__3824__auto____6804;
} else
{var or__3824__auto____6805 = (cljs.core._reduce["_"]);
if(or__3824__auto____6805)
{return or__3824__auto____6805;
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
if((function (){var and__3822__auto____6810 = coll;
if(and__3822__auto____6810)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____6810;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2696__auto____6811 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6812 = (cljs.core._kv_reduce[goog.typeOf(x__2696__auto____6811)]);
if(or__3824__auto____6812)
{return or__3824__auto____6812;
} else
{var or__3824__auto____6813 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____6813)
{return or__3824__auto____6813;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____6818 = o;
if(and__3822__auto____6818)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____6818;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2696__auto____6819 = (((o == null))?null:o);
return (function (){var or__3824__auto____6820 = (cljs.core._equiv[goog.typeOf(x__2696__auto____6819)]);
if(or__3824__auto____6820)
{return or__3824__auto____6820;
} else
{var or__3824__auto____6821 = (cljs.core._equiv["_"]);
if(or__3824__auto____6821)
{return or__3824__auto____6821;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____6826 = o;
if(and__3822__auto____6826)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____6826;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2696__auto____6827 = (((o == null))?null:o);
return (function (){var or__3824__auto____6828 = (cljs.core._hash[goog.typeOf(x__2696__auto____6827)]);
if(or__3824__auto____6828)
{return or__3824__auto____6828;
} else
{var or__3824__auto____6829 = (cljs.core._hash["_"]);
if(or__3824__auto____6829)
{return or__3824__auto____6829;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____6834 = o;
if(and__3822__auto____6834)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____6834;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2696__auto____6835 = (((o == null))?null:o);
return (function (){var or__3824__auto____6836 = (cljs.core._seq[goog.typeOf(x__2696__auto____6835)]);
if(or__3824__auto____6836)
{return or__3824__auto____6836;
} else
{var or__3824__auto____6837 = (cljs.core._seq["_"]);
if(or__3824__auto____6837)
{return or__3824__auto____6837;
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
if((function (){var and__3822__auto____6842 = coll;
if(and__3822__auto____6842)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____6842;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2696__auto____6843 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6844 = (cljs.core._rseq[goog.typeOf(x__2696__auto____6843)]);
if(or__3824__auto____6844)
{return or__3824__auto____6844;
} else
{var or__3824__auto____6845 = (cljs.core._rseq["_"]);
if(or__3824__auto____6845)
{return or__3824__auto____6845;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____6850 = coll;
if(and__3822__auto____6850)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____6850;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2696__auto____6851 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6852 = (cljs.core._sorted_seq[goog.typeOf(x__2696__auto____6851)]);
if(or__3824__auto____6852)
{return or__3824__auto____6852;
} else
{var or__3824__auto____6853 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____6853)
{return or__3824__auto____6853;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____6858 = coll;
if(and__3822__auto____6858)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____6858;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2696__auto____6859 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6860 = (cljs.core._sorted_seq_from[goog.typeOf(x__2696__auto____6859)]);
if(or__3824__auto____6860)
{return or__3824__auto____6860;
} else
{var or__3824__auto____6861 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____6861)
{return or__3824__auto____6861;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____6866 = coll;
if(and__3822__auto____6866)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____6866;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2696__auto____6867 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6868 = (cljs.core._entry_key[goog.typeOf(x__2696__auto____6867)]);
if(or__3824__auto____6868)
{return or__3824__auto____6868;
} else
{var or__3824__auto____6869 = (cljs.core._entry_key["_"]);
if(or__3824__auto____6869)
{return or__3824__auto____6869;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____6874 = coll;
if(and__3822__auto____6874)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____6874;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2696__auto____6875 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6876 = (cljs.core._comparator[goog.typeOf(x__2696__auto____6875)]);
if(or__3824__auto____6876)
{return or__3824__auto____6876;
} else
{var or__3824__auto____6877 = (cljs.core._comparator["_"]);
if(or__3824__auto____6877)
{return or__3824__auto____6877;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____6882 = o;
if(and__3822__auto____6882)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____6882;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2696__auto____6883 = (((o == null))?null:o);
return (function (){var or__3824__auto____6884 = (cljs.core._pr_seq[goog.typeOf(x__2696__auto____6883)]);
if(or__3824__auto____6884)
{return or__3824__auto____6884;
} else
{var or__3824__auto____6885 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____6885)
{return or__3824__auto____6885;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____6890 = d;
if(and__3822__auto____6890)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____6890;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2696__auto____6891 = (((d == null))?null:d);
return (function (){var or__3824__auto____6892 = (cljs.core._realized_QMARK_[goog.typeOf(x__2696__auto____6891)]);
if(or__3824__auto____6892)
{return or__3824__auto____6892;
} else
{var or__3824__auto____6893 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____6893)
{return or__3824__auto____6893;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____6898 = this$;
if(and__3822__auto____6898)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____6898;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2696__auto____6899 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6900 = (cljs.core._notify_watches[goog.typeOf(x__2696__auto____6899)]);
if(or__3824__auto____6900)
{return or__3824__auto____6900;
} else
{var or__3824__auto____6901 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____6901)
{return or__3824__auto____6901;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____6906 = this$;
if(and__3822__auto____6906)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____6906;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2696__auto____6907 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6908 = (cljs.core._add_watch[goog.typeOf(x__2696__auto____6907)]);
if(or__3824__auto____6908)
{return or__3824__auto____6908;
} else
{var or__3824__auto____6909 = (cljs.core._add_watch["_"]);
if(or__3824__auto____6909)
{return or__3824__auto____6909;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____6914 = this$;
if(and__3822__auto____6914)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____6914;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2696__auto____6915 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6916 = (cljs.core._remove_watch[goog.typeOf(x__2696__auto____6915)]);
if(or__3824__auto____6916)
{return or__3824__auto____6916;
} else
{var or__3824__auto____6917 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____6917)
{return or__3824__auto____6917;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____6922 = coll;
if(and__3822__auto____6922)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____6922;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2696__auto____6923 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6924 = (cljs.core._as_transient[goog.typeOf(x__2696__auto____6923)]);
if(or__3824__auto____6924)
{return or__3824__auto____6924;
} else
{var or__3824__auto____6925 = (cljs.core._as_transient["_"]);
if(or__3824__auto____6925)
{return or__3824__auto____6925;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____6930 = tcoll;
if(and__3822__auto____6930)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____6930;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2696__auto____6931 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6932 = (cljs.core._conj_BANG_[goog.typeOf(x__2696__auto____6931)]);
if(or__3824__auto____6932)
{return or__3824__auto____6932;
} else
{var or__3824__auto____6933 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____6933)
{return or__3824__auto____6933;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____6938 = tcoll;
if(and__3822__auto____6938)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____6938;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2696__auto____6939 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6940 = (cljs.core._persistent_BANG_[goog.typeOf(x__2696__auto____6939)]);
if(or__3824__auto____6940)
{return or__3824__auto____6940;
} else
{var or__3824__auto____6941 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____6941)
{return or__3824__auto____6941;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____6946 = tcoll;
if(and__3822__auto____6946)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____6946;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2696__auto____6947 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6948 = (cljs.core._assoc_BANG_[goog.typeOf(x__2696__auto____6947)]);
if(or__3824__auto____6948)
{return or__3824__auto____6948;
} else
{var or__3824__auto____6949 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____6949)
{return or__3824__auto____6949;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____6954 = tcoll;
if(and__3822__auto____6954)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____6954;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2696__auto____6955 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6956 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2696__auto____6955)]);
if(or__3824__auto____6956)
{return or__3824__auto____6956;
} else
{var or__3824__auto____6957 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____6957)
{return or__3824__auto____6957;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____6962 = tcoll;
if(and__3822__auto____6962)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____6962;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2696__auto____6963 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6964 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2696__auto____6963)]);
if(or__3824__auto____6964)
{return or__3824__auto____6964;
} else
{var or__3824__auto____6965 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____6965)
{return or__3824__auto____6965;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____6970 = tcoll;
if(and__3822__auto____6970)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____6970;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2696__auto____6971 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6972 = (cljs.core._pop_BANG_[goog.typeOf(x__2696__auto____6971)]);
if(or__3824__auto____6972)
{return or__3824__auto____6972;
} else
{var or__3824__auto____6973 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____6973)
{return or__3824__auto____6973;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____6978 = tcoll;
if(and__3822__auto____6978)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____6978;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2696__auto____6979 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6980 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2696__auto____6979)]);
if(or__3824__auto____6980)
{return or__3824__auto____6980;
} else
{var or__3824__auto____6981 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____6981)
{return or__3824__auto____6981;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____6986 = x;
if(and__3822__auto____6986)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____6986;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2696__auto____6987 = (((x == null))?null:x);
return (function (){var or__3824__auto____6988 = (cljs.core._compare[goog.typeOf(x__2696__auto____6987)]);
if(or__3824__auto____6988)
{return or__3824__auto____6988;
} else
{var or__3824__auto____6989 = (cljs.core._compare["_"]);
if(or__3824__auto____6989)
{return or__3824__auto____6989;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____6994 = coll;
if(and__3822__auto____6994)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____6994;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2696__auto____6995 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6996 = (cljs.core._drop_first[goog.typeOf(x__2696__auto____6995)]);
if(or__3824__auto____6996)
{return or__3824__auto____6996;
} else
{var or__3824__auto____6997 = (cljs.core._drop_first["_"]);
if(or__3824__auto____6997)
{return or__3824__auto____6997;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____7002 = coll;
if(and__3822__auto____7002)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____7002;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2696__auto____7003 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7004 = (cljs.core._chunked_first[goog.typeOf(x__2696__auto____7003)]);
if(or__3824__auto____7004)
{return or__3824__auto____7004;
} else
{var or__3824__auto____7005 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____7005)
{return or__3824__auto____7005;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____7010 = coll;
if(and__3822__auto____7010)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____7010;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2696__auto____7011 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7012 = (cljs.core._chunked_rest[goog.typeOf(x__2696__auto____7011)]);
if(or__3824__auto____7012)
{return or__3824__auto____7012;
} else
{var or__3824__auto____7013 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____7013)
{return or__3824__auto____7013;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____7018 = coll;
if(and__3822__auto____7018)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____7018;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2696__auto____7019 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7020 = (cljs.core._chunked_next[goog.typeOf(x__2696__auto____7019)]);
if(or__3824__auto____7020)
{return or__3824__auto____7020;
} else
{var or__3824__auto____7021 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____7021)
{return or__3824__auto____7021;
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
var or__3824__auto____7023 = (x === y);
if(or__3824__auto____7023)
{return or__3824__auto____7023;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__7024__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7025 = y;
var G__7026 = cljs.core.first.call(null,more);
var G__7027 = cljs.core.next.call(null,more);
x = G__7025;
y = G__7026;
more = G__7027;
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
var G__7024 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7024__delegate.call(this, x, y, more);
};
G__7024.cljs$lang$maxFixedArity = 2;
G__7024.cljs$lang$applyTo = (function (arglist__7028){
var x = cljs.core.first(arglist__7028);
var y = cljs.core.first(cljs.core.next(arglist__7028));
var more = cljs.core.rest(cljs.core.next(arglist__7028));
return G__7024__delegate(x, y, more);
});
G__7024.cljs$lang$arity$variadic = G__7024__delegate;
return G__7024;
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
var G__7029 = null;
var G__7029__2 = (function (o,k){
return null;
});
var G__7029__3 = (function (o,k,not_found){
return not_found;
});
G__7029 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__7029__2.call(this,o,k);
case 3:
return G__7029__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7029;
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
var G__7030 = null;
var G__7030__2 = (function (_,f){
return f.call(null);
});
var G__7030__3 = (function (_,f,start){
return start;
});
G__7030 = function(_,f,start){
switch(arguments.length){
case 2:
return G__7030__2.call(this,_,f);
case 3:
return G__7030__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7030;
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
var G__7031 = null;
var G__7031__2 = (function (_,n){
return null;
});
var G__7031__3 = (function (_,n,not_found){
return not_found;
});
G__7031 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__7031__2.call(this,_,n);
case 3:
return G__7031__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7031;
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
var and__3822__auto____7032 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____7032)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____7032;
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
var cnt__7045 = cljs.core._count.call(null,cicoll);
if((cnt__7045 === 0))
{return f.call(null);
} else
{var val__7046 = cljs.core._nth.call(null,cicoll,0);
var n__7047 = 1;
while(true){
if((n__7047 < cnt__7045))
{var nval__7048 = f.call(null,val__7046,cljs.core._nth.call(null,cicoll,n__7047));
if(cljs.core.reduced_QMARK_.call(null,nval__7048))
{return cljs.core.deref.call(null,nval__7048);
} else
{{
var G__7057 = nval__7048;
var G__7058 = (n__7047 + 1);
val__7046 = G__7057;
n__7047 = G__7058;
continue;
}
}
} else
{return val__7046;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__7049 = cljs.core._count.call(null,cicoll);
var val__7050 = val;
var n__7051 = 0;
while(true){
if((n__7051 < cnt__7049))
{var nval__7052 = f.call(null,val__7050,cljs.core._nth.call(null,cicoll,n__7051));
if(cljs.core.reduced_QMARK_.call(null,nval__7052))
{return cljs.core.deref.call(null,nval__7052);
} else
{{
var G__7059 = nval__7052;
var G__7060 = (n__7051 + 1);
val__7050 = G__7059;
n__7051 = G__7060;
continue;
}
}
} else
{return val__7050;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__7053 = cljs.core._count.call(null,cicoll);
var val__7054 = val;
var n__7055 = idx;
while(true){
if((n__7055 < cnt__7053))
{var nval__7056 = f.call(null,val__7054,cljs.core._nth.call(null,cicoll,n__7055));
if(cljs.core.reduced_QMARK_.call(null,nval__7056))
{return cljs.core.deref.call(null,nval__7056);
} else
{{
var G__7061 = nval__7056;
var G__7062 = (n__7055 + 1);
val__7054 = G__7061;
n__7055 = G__7062;
continue;
}
}
} else
{return val__7054;
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
var cnt__7075 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__7076 = (arr[0]);
var n__7077 = 1;
while(true){
if((n__7077 < cnt__7075))
{var nval__7078 = f.call(null,val__7076,(arr[n__7077]));
if(cljs.core.reduced_QMARK_.call(null,nval__7078))
{return cljs.core.deref.call(null,nval__7078);
} else
{{
var G__7087 = nval__7078;
var G__7088 = (n__7077 + 1);
val__7076 = G__7087;
n__7077 = G__7088;
continue;
}
}
} else
{return val__7076;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__7079 = arr.length;
var val__7080 = val;
var n__7081 = 0;
while(true){
if((n__7081 < cnt__7079))
{var nval__7082 = f.call(null,val__7080,(arr[n__7081]));
if(cljs.core.reduced_QMARK_.call(null,nval__7082))
{return cljs.core.deref.call(null,nval__7082);
} else
{{
var G__7089 = nval__7082;
var G__7090 = (n__7081 + 1);
val__7080 = G__7089;
n__7081 = G__7090;
continue;
}
}
} else
{return val__7080;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__7083 = arr.length;
var val__7084 = val;
var n__7085 = idx;
while(true){
if((n__7085 < cnt__7083))
{var nval__7086 = f.call(null,val__7084,(arr[n__7085]));
if(cljs.core.reduced_QMARK_.call(null,nval__7086))
{return cljs.core.deref.call(null,nval__7086);
} else
{{
var G__7091 = nval__7086;
var G__7092 = (n__7085 + 1);
val__7084 = G__7091;
n__7085 = G__7092;
continue;
}
}
} else
{return val__7084;
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
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7093 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__7094 = this;
if(((this__7094.i + 1) < this__7094.a.length))
{return (new cljs.core.IndexedSeq(this__7094.a,(this__7094.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7095 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__7096 = this;
var c__7097 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__7097 > 0))
{return (new cljs.core.RSeq(coll,(c__7097 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__7098 = this;
var this__7099 = this;
return cljs.core.pr_str.call(null,this__7099);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7100 = this;
if(cljs.core.counted_QMARK_.call(null,this__7100.a))
{return cljs.core.ci_reduce.call(null,this__7100.a,f,(this__7100.a[this__7100.i]),(this__7100.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__7100.a[this__7100.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7101 = this;
if(cljs.core.counted_QMARK_.call(null,this__7101.a))
{return cljs.core.ci_reduce.call(null,this__7101.a,f,start,this__7101.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__7102 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7103 = this;
return (this__7103.a.length - this__7103.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__7104 = this;
return (this__7104.a[this__7104.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__7105 = this;
if(((this__7105.i + 1) < this__7105.a.length))
{return (new cljs.core.IndexedSeq(this__7105.a,(this__7105.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7106 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7107 = this;
var i__7108 = (n + this__7107.i);
if((i__7108 < this__7107.a.length))
{return (this__7107.a[i__7108]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7109 = this;
var i__7110 = (n + this__7109.i);
if((i__7110 < this__7109.a.length))
{return (this__7109.a[i__7110]);
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
var G__7111 = null;
var G__7111__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__7111__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__7111 = function(array,f,start){
switch(arguments.length){
case 2:
return G__7111__2.call(this,array,f);
case 3:
return G__7111__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7111;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7112 = null;
var G__7112__2 = (function (array,k){
return (array[k]);
});
var G__7112__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__7112 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__7112__2.call(this,array,k);
case 3:
return G__7112__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7112;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7113 = null;
var G__7113__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__7113__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__7113 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__7113__2.call(this,array,n);
case 3:
return G__7113__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7113;
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
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7114 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7115 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__7116 = this;
var this__7117 = this;
return cljs.core.pr_str.call(null,this__7117);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7118 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7119 = this;
return (this__7119.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7120 = this;
return cljs.core._nth.call(null,this__7120.ci,this__7120.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7121 = this;
if((this__7121.i > 0))
{return (new cljs.core.RSeq(this__7121.ci,(this__7121.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7122 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__7123 = this;
return (new cljs.core.RSeq(this__7123.ci,this__7123.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7124 = this;
return this__7124.meta;
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
{if((function (){var G__7128__7129 = coll;
if(G__7128__7129)
{if((function (){var or__3824__auto____7130 = (G__7128__7129.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____7130)
{return or__3824__auto____7130;
} else
{return G__7128__7129.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__7128__7129.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7128__7129);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7128__7129);
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
{if((function (){var G__7135__7136 = coll;
if(G__7135__7136)
{if((function (){var or__3824__auto____7137 = (G__7135__7136.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7137)
{return or__3824__auto____7137;
} else
{return G__7135__7136.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7135__7136.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7135__7136);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7135__7136);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__7138 = cljs.core.seq.call(null,coll);
if((s__7138 == null))
{return null;
} else
{return cljs.core._first.call(null,s__7138);
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
{if((function (){var G__7143__7144 = coll;
if(G__7143__7144)
{if((function (){var or__3824__auto____7145 = (G__7143__7144.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7145)
{return or__3824__auto____7145;
} else
{return G__7143__7144.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7143__7144.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7143__7144);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7143__7144);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__7146 = cljs.core.seq.call(null,coll);
if(!((s__7146 == null)))
{return cljs.core._rest.call(null,s__7146);
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
{if((function (){var G__7150__7151 = coll;
if(G__7150__7151)
{if((function (){var or__3824__auto____7152 = (G__7150__7151.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____7152)
{return or__3824__auto____7152;
} else
{return G__7150__7151.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__7150__7151.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__7150__7151);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__7150__7151);
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
var sn__7154 = cljs.core.next.call(null,s);
if(!((sn__7154 == null)))
{{
var G__7155 = sn__7154;
s = G__7155;
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
var G__7156__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7157 = conj.call(null,coll,x);
var G__7158 = cljs.core.first.call(null,xs);
var G__7159 = cljs.core.next.call(null,xs);
coll = G__7157;
x = G__7158;
xs = G__7159;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__7156 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7156__delegate.call(this, coll, x, xs);
};
G__7156.cljs$lang$maxFixedArity = 2;
G__7156.cljs$lang$applyTo = (function (arglist__7160){
var coll = cljs.core.first(arglist__7160);
var x = cljs.core.first(cljs.core.next(arglist__7160));
var xs = cljs.core.rest(cljs.core.next(arglist__7160));
return G__7156__delegate(coll, x, xs);
});
G__7156.cljs$lang$arity$variadic = G__7156__delegate;
return G__7156;
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
var s__7163 = cljs.core.seq.call(null,coll);
var acc__7164 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__7163))
{return (acc__7164 + cljs.core._count.call(null,s__7163));
} else
{{
var G__7165 = cljs.core.next.call(null,s__7163);
var G__7166 = (acc__7164 + 1);
s__7163 = G__7165;
acc__7164 = G__7166;
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
{return cljs.core._nth.call(null,coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!((coll == null)))
{if((function (){var G__7176__7177 = coll;
if(G__7176__7177)
{if((function (){var or__3824__auto____7178 = (G__7176__7177.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7178)
{return or__3824__auto____7178;
} else
{return G__7176__7177.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7176__7177.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7176__7177);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7176__7177);
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
var G__7181__delegate = function (coll,k,v,kvs){
while(true){
var ret__7180 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__7182 = ret__7180;
var G__7183 = cljs.core.first.call(null,kvs);
var G__7184 = cljs.core.second.call(null,kvs);
var G__7185 = cljs.core.nnext.call(null,kvs);
coll = G__7182;
k = G__7183;
v = G__7184;
kvs = G__7185;
continue;
}
} else
{return ret__7180;
}
break;
}
};
var G__7181 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7181__delegate.call(this, coll, k, v, kvs);
};
G__7181.cljs$lang$maxFixedArity = 3;
G__7181.cljs$lang$applyTo = (function (arglist__7186){
var coll = cljs.core.first(arglist__7186);
var k = cljs.core.first(cljs.core.next(arglist__7186));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7186)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7186)));
return G__7181__delegate(coll, k, v, kvs);
});
G__7181.cljs$lang$arity$variadic = G__7181__delegate;
return G__7181;
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
var G__7189__delegate = function (coll,k,ks){
while(true){
var ret__7188 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7190 = ret__7188;
var G__7191 = cljs.core.first.call(null,ks);
var G__7192 = cljs.core.next.call(null,ks);
coll = G__7190;
k = G__7191;
ks = G__7192;
continue;
}
} else
{return ret__7188;
}
break;
}
};
var G__7189 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7189__delegate.call(this, coll, k, ks);
};
G__7189.cljs$lang$maxFixedArity = 2;
G__7189.cljs$lang$applyTo = (function (arglist__7193){
var coll = cljs.core.first(arglist__7193);
var k = cljs.core.first(cljs.core.next(arglist__7193));
var ks = cljs.core.rest(cljs.core.next(arglist__7193));
return G__7189__delegate(coll, k, ks);
});
G__7189.cljs$lang$arity$variadic = G__7189__delegate;
return G__7189;
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
if((function (){var G__7197__7198 = o;
if(G__7197__7198)
{if((function (){var or__3824__auto____7199 = (G__7197__7198.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____7199)
{return or__3824__auto____7199;
} else
{return G__7197__7198.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__7197__7198.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7197__7198);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7197__7198);
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
var G__7202__delegate = function (coll,k,ks){
while(true){
var ret__7201 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7203 = ret__7201;
var G__7204 = cljs.core.first.call(null,ks);
var G__7205 = cljs.core.next.call(null,ks);
coll = G__7203;
k = G__7204;
ks = G__7205;
continue;
}
} else
{return ret__7201;
}
break;
}
};
var G__7202 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7202__delegate.call(this, coll, k, ks);
};
G__7202.cljs$lang$maxFixedArity = 2;
G__7202.cljs$lang$applyTo = (function (arglist__7206){
var coll = cljs.core.first(arglist__7206);
var k = cljs.core.first(cljs.core.next(arglist__7206));
var ks = cljs.core.rest(cljs.core.next(arglist__7206));
return G__7202__delegate(coll, k, ks);
});
G__7202.cljs$lang$arity$variadic = G__7202__delegate;
return G__7202;
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
var h__7208 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__7208);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__7208;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__7210 = (cljs.core.string_hash_cache[k]);
if(!((h__7210 == null)))
{return h__7210;
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
if((function (){var and__3822__auto____7212 = goog.isString(o);
if(and__3822__auto____7212)
{return check_cache;
} else
{return and__3822__auto____7212;
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
{var G__7216__7217 = x;
if(G__7216__7217)
{if((function (){var or__3824__auto____7218 = (G__7216__7217.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____7218)
{return or__3824__auto____7218;
} else
{return G__7216__7217.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__7216__7217.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7216__7217);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7216__7217);
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
{var G__7222__7223 = x;
if(G__7222__7223)
{if((function (){var or__3824__auto____7224 = (G__7222__7223.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____7224)
{return or__3824__auto____7224;
} else
{return G__7222__7223.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__7222__7223.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7222__7223);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7222__7223);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__7228__7229 = x;
if(G__7228__7229)
{if((function (){var or__3824__auto____7230 = (G__7228__7229.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____7230)
{return or__3824__auto____7230;
} else
{return G__7228__7229.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__7228__7229.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7228__7229);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7228__7229);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__7234__7235 = x;
if(G__7234__7235)
{if((function (){var or__3824__auto____7236 = (G__7234__7235.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____7236)
{return or__3824__auto____7236;
} else
{return G__7234__7235.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__7234__7235.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7234__7235);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7234__7235);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__7240__7241 = x;
if(G__7240__7241)
{if((function (){var or__3824__auto____7242 = (G__7240__7241.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____7242)
{return or__3824__auto____7242;
} else
{return G__7240__7241.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__7240__7241.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7240__7241);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7240__7241);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__7246__7247 = x;
if(G__7246__7247)
{if((function (){var or__3824__auto____7248 = (G__7246__7247.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7248)
{return or__3824__auto____7248;
} else
{return G__7246__7247.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7246__7247.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7246__7247);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7246__7247);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__7252__7253 = x;
if(G__7252__7253)
{if((function (){var or__3824__auto____7254 = (G__7252__7253.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7254)
{return or__3824__auto____7254;
} else
{return G__7252__7253.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7252__7253.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7252__7253);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7252__7253);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7258__7259 = x;
if(G__7258__7259)
{if((function (){var or__3824__auto____7260 = (G__7258__7259.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____7260)
{return or__3824__auto____7260;
} else
{return G__7258__7259.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__7258__7259.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7258__7259);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7258__7259);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__7264__7265 = x;
if(G__7264__7265)
{if((function (){var or__3824__auto____7266 = (G__7264__7265.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____7266)
{return or__3824__auto____7266;
} else
{return G__7264__7265.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__7264__7265.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7264__7265);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7264__7265);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__7270__7271 = x;
if(G__7270__7271)
{if(cljs.core.truth_((function (){var or__3824__auto____7272 = null;
if(cljs.core.truth_(or__3824__auto____7272))
{return or__3824__auto____7272;
} else
{return G__7270__7271.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__7270__7271.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7270__7271);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7270__7271);
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
var G__7273__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__7273 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7273__delegate.call(this, keyvals);
};
G__7273.cljs$lang$maxFixedArity = 0;
G__7273.cljs$lang$applyTo = (function (arglist__7274){
var keyvals = cljs.core.seq(arglist__7274);;
return G__7273__delegate(keyvals);
});
G__7273.cljs$lang$arity$variadic = G__7273__delegate;
return G__7273;
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
var keys__7276 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__7276.push(key);
}));
return keys__7276;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__7280 = i;
var j__7281 = j;
var len__7282 = len;
while(true){
if((len__7282 === 0))
{return to;
} else
{(to[j__7281] = (from[i__7280]));
{
var G__7283 = (i__7280 + 1);
var G__7284 = (j__7281 + 1);
var G__7285 = (len__7282 - 1);
i__7280 = G__7283;
j__7281 = G__7284;
len__7282 = G__7285;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__7289 = (i + (len - 1));
var j__7290 = (j + (len - 1));
var len__7291 = len;
while(true){
if((len__7291 === 0))
{return to;
} else
{(to[j__7290] = (from[i__7289]));
{
var G__7292 = (i__7289 - 1);
var G__7293 = (j__7290 - 1);
var G__7294 = (len__7291 - 1);
i__7289 = G__7292;
j__7290 = G__7293;
len__7291 = G__7294;
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
{var G__7298__7299 = s;
if(G__7298__7299)
{if((function (){var or__3824__auto____7300 = (G__7298__7299.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7300)
{return or__3824__auto____7300;
} else
{return G__7298__7299.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7298__7299.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7298__7299);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7298__7299);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__7304__7305 = s;
if(G__7304__7305)
{if((function (){var or__3824__auto____7306 = (G__7304__7305.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____7306)
{return or__3824__auto____7306;
} else
{return G__7304__7305.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__7304__7305.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7304__7305);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7304__7305);
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
var and__3822__auto____7309 = goog.isString(x);
if(and__3822__auto____7309)
{return !((function (){var or__3824__auto____7310 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____7310)
{return or__3824__auto____7310;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____7309;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____7312 = goog.isString(x);
if(and__3822__auto____7312)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____7312;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____7314 = goog.isString(x);
if(and__3822__auto____7314)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____7314;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____7319 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____7319)
{return or__3824__auto____7319;
} else
{var G__7320__7321 = f;
if(G__7320__7321)
{if((function (){var or__3824__auto____7322 = (G__7320__7321.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____7322)
{return or__3824__auto____7322;
} else
{return G__7320__7321.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__7320__7321.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7320__7321);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7320__7321);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____7324 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____7324)
{return (n == n.toFixed());
} else
{return and__3822__auto____7324;
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
if(cljs.core.truth_((function (){var and__3822__auto____7327 = coll;
if(cljs.core.truth_(and__3822__auto____7327))
{var and__3822__auto____7328 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____7328)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____7328;
}
} else
{return and__3822__auto____7327;
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
var G__7337__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__7333 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__7334 = more;
while(true){
var x__7335 = cljs.core.first.call(null,xs__7334);
var etc__7336 = cljs.core.next.call(null,xs__7334);
if(cljs.core.truth_(xs__7334))
{if(cljs.core.contains_QMARK_.call(null,s__7333,x__7335))
{return false;
} else
{{
var G__7338 = cljs.core.conj.call(null,s__7333,x__7335);
var G__7339 = etc__7336;
s__7333 = G__7338;
xs__7334 = G__7339;
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
var G__7337 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7337__delegate.call(this, x, y, more);
};
G__7337.cljs$lang$maxFixedArity = 2;
G__7337.cljs$lang$applyTo = (function (arglist__7340){
var x = cljs.core.first(arglist__7340);
var y = cljs.core.first(cljs.core.next(arglist__7340));
var more = cljs.core.rest(cljs.core.next(arglist__7340));
return G__7337__delegate(x, y, more);
});
G__7337.cljs$lang$arity$variadic = G__7337__delegate;
return G__7337;
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
{if((function (){var G__7344__7345 = x;
if(G__7344__7345)
{if(cljs.core.truth_((function (){var or__3824__auto____7346 = null;
if(cljs.core.truth_(or__3824__auto____7346))
{return or__3824__auto____7346;
} else
{return G__7344__7345.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__7344__7345.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7344__7345);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7344__7345);
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
var xl__7351 = cljs.core.count.call(null,xs);
var yl__7352 = cljs.core.count.call(null,ys);
if((xl__7351 < yl__7352))
{return -1;
} else
{if((xl__7351 > yl__7352))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__7351,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__7353 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____7354 = (d__7353 === 0);
if(and__3822__auto____7354)
{return ((n + 1) < len);
} else
{return and__3822__auto____7354;
}
})())
{{
var G__7355 = xs;
var G__7356 = ys;
var G__7357 = len;
var G__7358 = (n + 1);
xs = G__7355;
ys = G__7356;
len = G__7357;
n = G__7358;
continue;
}
} else
{return d__7353;
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
var r__7360 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__7360))
{return r__7360;
} else
{if(cljs.core.truth_(r__7360))
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
{var a__7362 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__7362,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__7362);
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
var temp__3971__auto____7368 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____7368)
{var s__7369 = temp__3971__auto____7368;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__7369),cljs.core.next.call(null,s__7369));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__7370 = val;
var coll__7371 = cljs.core.seq.call(null,coll);
while(true){
if(coll__7371)
{var nval__7372 = f.call(null,val__7370,cljs.core.first.call(null,coll__7371));
if(cljs.core.reduced_QMARK_.call(null,nval__7372))
{return cljs.core.deref.call(null,nval__7372);
} else
{{
var G__7373 = nval__7372;
var G__7374 = cljs.core.next.call(null,coll__7371);
val__7370 = G__7373;
coll__7371 = G__7374;
continue;
}
}
} else
{return val__7370;
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
var a__7376 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__7376);
return cljs.core.vec.call(null,a__7376);
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
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__7386__7387 = coll;
if(G__7386__7387)
{if((function (){var or__3824__auto____7388 = (G__7386__7387.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7388)
{return or__3824__auto____7388;
} else
{return G__7386__7387.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7386__7387.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7386__7387);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7386__7387);
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
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__7389 = this;
return this__7389.val;
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
var G__7390__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__7390 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7390__delegate.call(this, x, y, more);
};
G__7390.cljs$lang$maxFixedArity = 2;
G__7390.cljs$lang$applyTo = (function (arglist__7391){
var x = cljs.core.first(arglist__7391);
var y = cljs.core.first(cljs.core.next(arglist__7391));
var more = cljs.core.rest(cljs.core.next(arglist__7391));
return G__7390__delegate(x, y, more);
});
G__7390.cljs$lang$arity$variadic = G__7390__delegate;
return G__7390;
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
var G__7392__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__7392 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7392__delegate.call(this, x, y, more);
};
G__7392.cljs$lang$maxFixedArity = 2;
G__7392.cljs$lang$applyTo = (function (arglist__7393){
var x = cljs.core.first(arglist__7393);
var y = cljs.core.first(cljs.core.next(arglist__7393));
var more = cljs.core.rest(cljs.core.next(arglist__7393));
return G__7392__delegate(x, y, more);
});
G__7392.cljs$lang$arity$variadic = G__7392__delegate;
return G__7392;
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
var G__7394__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__7394 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7394__delegate.call(this, x, y, more);
};
G__7394.cljs$lang$maxFixedArity = 2;
G__7394.cljs$lang$applyTo = (function (arglist__7395){
var x = cljs.core.first(arglist__7395);
var y = cljs.core.first(cljs.core.next(arglist__7395));
var more = cljs.core.rest(cljs.core.next(arglist__7395));
return G__7394__delegate(x, y, more);
});
G__7394.cljs$lang$arity$variadic = G__7394__delegate;
return G__7394;
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
var G__7396__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__7396 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7396__delegate.call(this, x, y, more);
};
G__7396.cljs$lang$maxFixedArity = 2;
G__7396.cljs$lang$applyTo = (function (arglist__7397){
var x = cljs.core.first(arglist__7397);
var y = cljs.core.first(cljs.core.next(arglist__7397));
var more = cljs.core.rest(cljs.core.next(arglist__7397));
return G__7396__delegate(x, y, more);
});
G__7396.cljs$lang$arity$variadic = G__7396__delegate;
return G__7396;
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
var G__7398__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__7399 = y;
var G__7400 = cljs.core.first.call(null,more);
var G__7401 = cljs.core.next.call(null,more);
x = G__7399;
y = G__7400;
more = G__7401;
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
var G__7398 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7398__delegate.call(this, x, y, more);
};
G__7398.cljs$lang$maxFixedArity = 2;
G__7398.cljs$lang$applyTo = (function (arglist__7402){
var x = cljs.core.first(arglist__7402);
var y = cljs.core.first(cljs.core.next(arglist__7402));
var more = cljs.core.rest(cljs.core.next(arglist__7402));
return G__7398__delegate(x, y, more);
});
G__7398.cljs$lang$arity$variadic = G__7398__delegate;
return G__7398;
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
var G__7403__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__7404 = y;
var G__7405 = cljs.core.first.call(null,more);
var G__7406 = cljs.core.next.call(null,more);
x = G__7404;
y = G__7405;
more = G__7406;
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
var G__7403 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7403__delegate.call(this, x, y, more);
};
G__7403.cljs$lang$maxFixedArity = 2;
G__7403.cljs$lang$applyTo = (function (arglist__7407){
var x = cljs.core.first(arglist__7407);
var y = cljs.core.first(cljs.core.next(arglist__7407));
var more = cljs.core.rest(cljs.core.next(arglist__7407));
return G__7403__delegate(x, y, more);
});
G__7403.cljs$lang$arity$variadic = G__7403__delegate;
return G__7403;
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
var G__7408__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__7409 = y;
var G__7410 = cljs.core.first.call(null,more);
var G__7411 = cljs.core.next.call(null,more);
x = G__7409;
y = G__7410;
more = G__7411;
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
var G__7408 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7408__delegate.call(this, x, y, more);
};
G__7408.cljs$lang$maxFixedArity = 2;
G__7408.cljs$lang$applyTo = (function (arglist__7412){
var x = cljs.core.first(arglist__7412);
var y = cljs.core.first(cljs.core.next(arglist__7412));
var more = cljs.core.rest(cljs.core.next(arglist__7412));
return G__7408__delegate(x, y, more);
});
G__7408.cljs$lang$arity$variadic = G__7408__delegate;
return G__7408;
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
var G__7413__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__7414 = y;
var G__7415 = cljs.core.first.call(null,more);
var G__7416 = cljs.core.next.call(null,more);
x = G__7414;
y = G__7415;
more = G__7416;
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
var G__7413 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7413__delegate.call(this, x, y, more);
};
G__7413.cljs$lang$maxFixedArity = 2;
G__7413.cljs$lang$applyTo = (function (arglist__7417){
var x = cljs.core.first(arglist__7417);
var y = cljs.core.first(cljs.core.next(arglist__7417));
var more = cljs.core.rest(cljs.core.next(arglist__7417));
return G__7413__delegate(x, y, more);
});
G__7413.cljs$lang$arity$variadic = G__7413__delegate;
return G__7413;
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
var G__7418__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__7418 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7418__delegate.call(this, x, y, more);
};
G__7418.cljs$lang$maxFixedArity = 2;
G__7418.cljs$lang$applyTo = (function (arglist__7419){
var x = cljs.core.first(arglist__7419);
var y = cljs.core.first(cljs.core.next(arglist__7419));
var more = cljs.core.rest(cljs.core.next(arglist__7419));
return G__7418__delegate(x, y, more);
});
G__7418.cljs$lang$arity$variadic = G__7418__delegate;
return G__7418;
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
var G__7420__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__7420 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7420__delegate.call(this, x, y, more);
};
G__7420.cljs$lang$maxFixedArity = 2;
G__7420.cljs$lang$applyTo = (function (arglist__7421){
var x = cljs.core.first(arglist__7421);
var y = cljs.core.first(cljs.core.next(arglist__7421));
var more = cljs.core.rest(cljs.core.next(arglist__7421));
return G__7420__delegate(x, y, more);
});
G__7420.cljs$lang$arity$variadic = G__7420__delegate;
return G__7420;
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
var rem__7423 = (n % d);
return cljs.core.fix.call(null,((n - rem__7423) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__7425 = cljs.core.quot.call(null,n,d);
return (n - (d * q__7425));
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
var v__7428 = (v - ((v >> 1) & 1431655765));
var v__7429 = ((v__7428 & 858993459) + ((v__7428 >> 2) & 858993459));
return ((((v__7429 + (v__7429 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__7430__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7431 = y;
var G__7432 = cljs.core.first.call(null,more);
var G__7433 = cljs.core.next.call(null,more);
x = G__7431;
y = G__7432;
more = G__7433;
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
var G__7430 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7430__delegate.call(this, x, y, more);
};
G__7430.cljs$lang$maxFixedArity = 2;
G__7430.cljs$lang$applyTo = (function (arglist__7434){
var x = cljs.core.first(arglist__7434);
var y = cljs.core.first(cljs.core.next(arglist__7434));
var more = cljs.core.rest(cljs.core.next(arglist__7434));
return G__7430__delegate(x, y, more);
});
G__7430.cljs$lang$arity$variadic = G__7430__delegate;
return G__7430;
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
var n__7438 = n;
var xs__7439 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7440 = xs__7439;
if(and__3822__auto____7440)
{return (n__7438 > 0);
} else
{return and__3822__auto____7440;
}
})()))
{{
var G__7441 = (n__7438 - 1);
var G__7442 = cljs.core.next.call(null,xs__7439);
n__7438 = G__7441;
xs__7439 = G__7442;
continue;
}
} else
{return xs__7439;
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
var G__7443__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7444 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__7445 = cljs.core.next.call(null,more);
sb = G__7444;
more = G__7445;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__7443 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7443__delegate.call(this, x, ys);
};
G__7443.cljs$lang$maxFixedArity = 1;
G__7443.cljs$lang$applyTo = (function (arglist__7446){
var x = cljs.core.first(arglist__7446);
var ys = cljs.core.rest(arglist__7446);
return G__7443__delegate(x, ys);
});
G__7443.cljs$lang$arity$variadic = G__7443__delegate;
return G__7443;
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
var G__7447__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7448 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__7449 = cljs.core.next.call(null,more);
sb = G__7448;
more = G__7449;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__7447 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7447__delegate.call(this, x, ys);
};
G__7447.cljs$lang$maxFixedArity = 1;
G__7447.cljs$lang$applyTo = (function (arglist__7450){
var x = cljs.core.first(arglist__7450);
var ys = cljs.core.rest(arglist__7450);
return G__7447__delegate(x, ys);
});
G__7447.cljs$lang$arity$variadic = G__7447__delegate;
return G__7447;
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
format.cljs$lang$applyTo = (function (arglist__7451){
var fmt = cljs.core.first(arglist__7451);
var args = cljs.core.rest(arglist__7451);
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__7454 = cljs.core.seq.call(null,x);
var ys__7455 = cljs.core.seq.call(null,y);
while(true){
if((xs__7454 == null))
{return (ys__7455 == null);
} else
{if((ys__7455 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__7454),cljs.core.first.call(null,ys__7455)))
{{
var G__7456 = cljs.core.next.call(null,xs__7454);
var G__7457 = cljs.core.next.call(null,ys__7455);
xs__7454 = G__7456;
ys__7455 = G__7457;
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
return cljs.core.reduce.call(null,(function (p1__7458_SHARP_,p2__7459_SHARP_){
return cljs.core.hash_combine.call(null,p1__7458_SHARP_,cljs.core.hash.call(null,p2__7459_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__7463 = 0;
var s__7464 = cljs.core.seq.call(null,m);
while(true){
if(s__7464)
{var e__7465 = cljs.core.first.call(null,s__7464);
{
var G__7466 = ((h__7463 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__7465)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__7465)))) % 4503599627370496);
var G__7467 = cljs.core.next.call(null,s__7464);
h__7463 = G__7466;
s__7464 = G__7467;
continue;
}
} else
{return h__7463;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__7471 = 0;
var s__7472 = cljs.core.seq.call(null,s);
while(true){
if(s__7472)
{var e__7473 = cljs.core.first.call(null,s__7472);
{
var G__7474 = ((h__7471 + cljs.core.hash.call(null,e__7473)) % 4503599627370496);
var G__7475 = cljs.core.next.call(null,s__7472);
h__7471 = G__7474;
s__7472 = G__7475;
continue;
}
} else
{return h__7471;
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
var G__7496__7497 = cljs.core.seq.call(null,fn_map);
if(G__7496__7497)
{var G__7499__7501 = cljs.core.first.call(null,G__7496__7497);
var vec__7500__7502 = G__7499__7501;
var key_name__7503 = cljs.core.nth.call(null,vec__7500__7502,0,null);
var f__7504 = cljs.core.nth.call(null,vec__7500__7502,1,null);
var G__7496__7505 = G__7496__7497;
var G__7499__7506 = G__7499__7501;
var G__7496__7507 = G__7496__7505;
while(true){
var vec__7508__7509 = G__7499__7506;
var key_name__7510 = cljs.core.nth.call(null,vec__7508__7509,0,null);
var f__7511 = cljs.core.nth.call(null,vec__7508__7509,1,null);
var G__7496__7512 = G__7496__7507;
var str_name__7513 = cljs.core.name.call(null,key_name__7510);
(obj[str_name__7513] = f__7511);
var temp__3974__auto____7514 = cljs.core.next.call(null,G__7496__7512);
if(temp__3974__auto____7514)
{var G__7496__7515 = temp__3974__auto____7514;
{
var G__7516 = cljs.core.first.call(null,G__7496__7515);
var G__7517 = G__7496__7515;
G__7499__7506 = G__7516;
G__7496__7507 = G__7517;
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
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7518 = this;
var h__2525__auto____7519 = this__7518.__hash;
if(!((h__2525__auto____7519 == null)))
{return h__2525__auto____7519;
} else
{var h__2525__auto____7520 = cljs.core.hash_coll.call(null,coll);
this__7518.__hash = h__2525__auto____7520;
return h__2525__auto____7520;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7521 = this;
if((this__7521.count === 1))
{return null;
} else
{return this__7521.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7522 = this;
return (new cljs.core.List(this__7522.meta,o,coll,(this__7522.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__7523 = this;
var this__7524 = this;
return cljs.core.pr_str.call(null,this__7524);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7525 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7526 = this;
return this__7526.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7527 = this;
return this__7527.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7528 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7529 = this;
return this__7529.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7530 = this;
if((this__7530.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__7530.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7531 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7532 = this;
return (new cljs.core.List(meta,this__7532.first,this__7532.rest,this__7532.count,this__7532.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7533 = this;
return this__7533.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7534 = this;
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
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7535 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7536 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7537 = this;
return (new cljs.core.List(this__7537.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__7538 = this;
var this__7539 = this;
return cljs.core.pr_str.call(null,this__7539);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7540 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7541 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7542 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7543 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7544 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7545 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7546 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7547 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7548 = this;
return this__7548.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7549 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__7553__7554 = coll;
if(G__7553__7554)
{if((function (){var or__3824__auto____7555 = (G__7553__7554.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____7555)
{return or__3824__auto____7555;
} else
{return G__7553__7554.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__7553__7554.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7553__7554);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7553__7554);
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
var G__7556__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__7556 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7556__delegate.call(this, x, y, z, items);
};
G__7556.cljs$lang$maxFixedArity = 3;
G__7556.cljs$lang$applyTo = (function (arglist__7557){
var x = cljs.core.first(arglist__7557);
var y = cljs.core.first(cljs.core.next(arglist__7557));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7557)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7557)));
return G__7556__delegate(x, y, z, items);
});
G__7556.cljs$lang$arity$variadic = G__7556__delegate;
return G__7556;
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
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7558 = this;
var h__2525__auto____7559 = this__7558.__hash;
if(!((h__2525__auto____7559 == null)))
{return h__2525__auto____7559;
} else
{var h__2525__auto____7560 = cljs.core.hash_coll.call(null,coll);
this__7558.__hash = h__2525__auto____7560;
return h__2525__auto____7560;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7561 = this;
if((this__7561.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__7561.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7562 = this;
return (new cljs.core.Cons(null,o,coll,this__7562.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__7563 = this;
var this__7564 = this;
return cljs.core.pr_str.call(null,this__7564);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7565 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7566 = this;
return this__7566.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7567 = this;
if((this__7567.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__7567.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7568 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7569 = this;
return (new cljs.core.Cons(meta,this__7569.first,this__7569.rest,this__7569.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7570 = this;
return this__7570.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7571 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7571.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____7576 = (coll == null);
if(or__3824__auto____7576)
{return or__3824__auto____7576;
} else
{var G__7577__7578 = coll;
if(G__7577__7578)
{if((function (){var or__3824__auto____7579 = (G__7577__7578.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7579)
{return or__3824__auto____7579;
} else
{return G__7577__7578.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7577__7578.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7577__7578);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7577__7578);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__7583__7584 = x;
if(G__7583__7584)
{if((function (){var or__3824__auto____7585 = (G__7583__7584.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____7585)
{return or__3824__auto____7585;
} else
{return G__7583__7584.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__7583__7584.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7583__7584);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7583__7584);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__7586 = null;
var G__7586__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__7586__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__7586 = function(string,f,start){
switch(arguments.length){
case 2:
return G__7586__2.call(this,string,f);
case 3:
return G__7586__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7586;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__7587 = null;
var G__7587__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__7587__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__7587 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__7587__2.call(this,string,k);
case 3:
return G__7587__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7587;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__7588 = null;
var G__7588__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__7588__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__7588 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__7588__2.call(this,string,n);
case 3:
return G__7588__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7588;
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
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__7600 = null;
var G__7600__2 = (function (this_sym7591,coll){
var this__7593 = this;
var this_sym7591__7594 = this;
var ___7595 = this_sym7591__7594;
if((coll == null))
{return null;
} else
{var strobj__7596 = coll.strobj;
if((strobj__7596 == null))
{return cljs.core._lookup.call(null,coll,this__7593.k,null);
} else
{return (strobj__7596[this__7593.k]);
}
}
});
var G__7600__3 = (function (this_sym7592,coll,not_found){
var this__7593 = this;
var this_sym7592__7597 = this;
var ___7598 = this_sym7592__7597;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__7593.k,not_found);
}
});
G__7600 = function(this_sym7592,coll,not_found){
switch(arguments.length){
case 2:
return G__7600__2.call(this,this_sym7592,coll);
case 3:
return G__7600__3.call(this,this_sym7592,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7600;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym7589,args7590){
var this__7599 = this;
return this_sym7589.call.apply(this_sym7589,[this_sym7589].concat(args7590.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__7609 = null;
var G__7609__2 = (function (this_sym7603,coll){
var this_sym7603__7605 = this;
var this__7606 = this_sym7603__7605;
return cljs.core._lookup.call(null,coll,this__7606.toString(),null);
});
var G__7609__3 = (function (this_sym7604,coll,not_found){
var this_sym7604__7607 = this;
var this__7608 = this_sym7604__7607;
return cljs.core._lookup.call(null,coll,this__7608.toString(),not_found);
});
G__7609 = function(this_sym7604,coll,not_found){
switch(arguments.length){
case 2:
return G__7609__2.call(this,this_sym7604,coll);
case 3:
return G__7609__3.call(this,this_sym7604,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7609;
})()
;
String.prototype.apply = (function (this_sym7601,args7602){
return this_sym7601.call.apply(this_sym7601,[this_sym7601].concat(args7602.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__7611 = lazy_seq.x;
if(lazy_seq.realized)
{return x__7611;
} else
{lazy_seq.x = x__7611.call(null);
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
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7612 = this;
var h__2525__auto____7613 = this__7612.__hash;
if(!((h__2525__auto____7613 == null)))
{return h__2525__auto____7613;
} else
{var h__2525__auto____7614 = cljs.core.hash_coll.call(null,coll);
this__7612.__hash = h__2525__auto____7614;
return h__2525__auto____7614;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7615 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7616 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__7617 = this;
var this__7618 = this;
return cljs.core.pr_str.call(null,this__7618);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7619 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7620 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7621 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7622 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7623 = this;
return (new cljs.core.LazySeq(meta,this__7623.realized,this__7623.x,this__7623.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7624 = this;
return this__7624.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7625 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7625.meta);
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
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7626 = this;
return this__7626.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__7627 = this;
var ___7628 = this;
(this__7627.buf[this__7627.end] = o);
return this__7627.end = (this__7627.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__7629 = this;
var ___7630 = this;
var ret__7631 = (new cljs.core.ArrayChunk(this__7629.buf,0,this__7629.end));
this__7629.buf = null;
return ret__7631;
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
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7632 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__7632.arr[this__7632.off]),(this__7632.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7633 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__7633.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__7634 = this;
if((this__7634.off === this__7634.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__7634.arr,(this__7634.off + 1),this__7634.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__7635 = this;
return (this__7635.arr[(this__7635.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__7636 = this;
if((function (){var and__3822__auto____7637 = (i >= 0);
if(and__3822__auto____7637)
{return (i < (this__7636.end - this__7636.off));
} else
{return and__3822__auto____7637;
}
})())
{return (this__7636.arr[(this__7636.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7638 = this;
return (this__7638.end - this__7638.off);
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
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__7639 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7640 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7641 = this;
return cljs.core._nth.call(null,this__7641.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7642 = this;
if((cljs.core._count.call(null,this__7642.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__7642.chunk),this__7642.more,this__7642.meta));
} else
{if((this__7642.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7642.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__7643 = this;
if((this__7643.more == null))
{return null;
} else
{return this__7643.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7644 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__7645 = this;
return (new cljs.core.ChunkedCons(this__7645.chunk,this__7645.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7646 = this;
return this__7646.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__7647 = this;
return this__7647.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__7648 = this;
if((this__7648.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7648.more;
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
if((function (){var G__7652__7653 = s;
if(G__7652__7653)
{if(cljs.core.truth_((function (){var or__3824__auto____7654 = null;
if(cljs.core.truth_(or__3824__auto____7654))
{return or__3824__auto____7654;
} else
{return G__7652__7653.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__7652__7653.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7652__7653);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7652__7653);
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
var ary__7657 = [];
var s__7658 = s;
while(true){
if(cljs.core.seq.call(null,s__7658))
{ary__7657.push(cljs.core.first.call(null,s__7658));
{
var G__7659 = cljs.core.next.call(null,s__7658);
s__7658 = G__7659;
continue;
}
} else
{return ary__7657;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__7663 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__7664 = 0;
var xs__7665 = cljs.core.seq.call(null,coll);
while(true){
if(xs__7665)
{(ret__7663[i__7664] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__7665)));
{
var G__7666 = (i__7664 + 1);
var G__7667 = cljs.core.next.call(null,xs__7665);
i__7664 = G__7666;
xs__7665 = G__7667;
continue;
}
} else
{}
break;
}
return ret__7663;
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
var a__7675 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7676 = cljs.core.seq.call(null,init_val_or_seq);
var i__7677 = 0;
var s__7678 = s__7676;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7679 = s__7678;
if(and__3822__auto____7679)
{return (i__7677 < size);
} else
{return and__3822__auto____7679;
}
})()))
{(a__7675[i__7677] = cljs.core.first.call(null,s__7678));
{
var G__7682 = (i__7677 + 1);
var G__7683 = cljs.core.next.call(null,s__7678);
i__7677 = G__7682;
s__7678 = G__7683;
continue;
}
} else
{return a__7675;
}
break;
}
} else
{var n__2860__auto____7680 = size;
var i__7681 = 0;
while(true){
if((i__7681 < n__2860__auto____7680))
{(a__7675[i__7681] = init_val_or_seq);
{
var G__7684 = (i__7681 + 1);
i__7681 = G__7684;
continue;
}
} else
{}
break;
}
return a__7675;
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
var a__7692 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7693 = cljs.core.seq.call(null,init_val_or_seq);
var i__7694 = 0;
var s__7695 = s__7693;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7696 = s__7695;
if(and__3822__auto____7696)
{return (i__7694 < size);
} else
{return and__3822__auto____7696;
}
})()))
{(a__7692[i__7694] = cljs.core.first.call(null,s__7695));
{
var G__7699 = (i__7694 + 1);
var G__7700 = cljs.core.next.call(null,s__7695);
i__7694 = G__7699;
s__7695 = G__7700;
continue;
}
} else
{return a__7692;
}
break;
}
} else
{var n__2860__auto____7697 = size;
var i__7698 = 0;
while(true){
if((i__7698 < n__2860__auto____7697))
{(a__7692[i__7698] = init_val_or_seq);
{
var G__7701 = (i__7698 + 1);
i__7698 = G__7701;
continue;
}
} else
{}
break;
}
return a__7692;
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
var a__7709 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7710 = cljs.core.seq.call(null,init_val_or_seq);
var i__7711 = 0;
var s__7712 = s__7710;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7713 = s__7712;
if(and__3822__auto____7713)
{return (i__7711 < size);
} else
{return and__3822__auto____7713;
}
})()))
{(a__7709[i__7711] = cljs.core.first.call(null,s__7712));
{
var G__7716 = (i__7711 + 1);
var G__7717 = cljs.core.next.call(null,s__7712);
i__7711 = G__7716;
s__7712 = G__7717;
continue;
}
} else
{return a__7709;
}
break;
}
} else
{var n__2860__auto____7714 = size;
var i__7715 = 0;
while(true){
if((i__7715 < n__2860__auto____7714))
{(a__7709[i__7715] = init_val_or_seq);
{
var G__7718 = (i__7715 + 1);
i__7715 = G__7718;
continue;
}
} else
{}
break;
}
return a__7709;
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
{var s__7723 = s;
var i__7724 = n;
var sum__7725 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7726 = (i__7724 > 0);
if(and__3822__auto____7726)
{return cljs.core.seq.call(null,s__7723);
} else
{return and__3822__auto____7726;
}
})()))
{{
var G__7727 = cljs.core.next.call(null,s__7723);
var G__7728 = (i__7724 - 1);
var G__7729 = (sum__7725 + 1);
s__7723 = G__7727;
i__7724 = G__7728;
sum__7725 = G__7729;
continue;
}
} else
{return sum__7725;
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
var s__7734 = cljs.core.seq.call(null,x);
if(s__7734)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__7734))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__7734),concat.call(null,cljs.core.chunk_rest.call(null,s__7734),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__7734),concat.call(null,cljs.core.rest.call(null,s__7734),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__7738__delegate = function (x,y,zs){
var cat__7737 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__7736 = cljs.core.seq.call(null,xys);
if(xys__7736)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__7736))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__7736),cat.call(null,cljs.core.chunk_rest.call(null,xys__7736),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__7736),cat.call(null,cljs.core.rest.call(null,xys__7736),zs));
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
return cat__7737.call(null,concat.call(null,x,y),zs);
};
var G__7738 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7738__delegate.call(this, x, y, zs);
};
G__7738.cljs$lang$maxFixedArity = 2;
G__7738.cljs$lang$applyTo = (function (arglist__7739){
var x = cljs.core.first(arglist__7739);
var y = cljs.core.first(cljs.core.next(arglist__7739));
var zs = cljs.core.rest(cljs.core.next(arglist__7739));
return G__7738__delegate(x, y, zs);
});
G__7738.cljs$lang$arity$variadic = G__7738__delegate;
return G__7738;
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
var G__7740__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__7740 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7740__delegate.call(this, a, b, c, d, more);
};
G__7740.cljs$lang$maxFixedArity = 4;
G__7740.cljs$lang$applyTo = (function (arglist__7741){
var a = cljs.core.first(arglist__7741);
var b = cljs.core.first(cljs.core.next(arglist__7741));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7741)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7741))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7741))));
return G__7740__delegate(a, b, c, d, more);
});
G__7740.cljs$lang$arity$variadic = G__7740__delegate;
return G__7740;
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
var args__7783 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__7784 = cljs.core._first.call(null,args__7783);
var args__7785 = cljs.core._rest.call(null,args__7783);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__7784);
} else
{return f.call(null,a__7784);
}
} else
{var b__7786 = cljs.core._first.call(null,args__7785);
var args__7787 = cljs.core._rest.call(null,args__7785);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__7784,b__7786);
} else
{return f.call(null,a__7784,b__7786);
}
} else
{var c__7788 = cljs.core._first.call(null,args__7787);
var args__7789 = cljs.core._rest.call(null,args__7787);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__7784,b__7786,c__7788);
} else
{return f.call(null,a__7784,b__7786,c__7788);
}
} else
{var d__7790 = cljs.core._first.call(null,args__7789);
var args__7791 = cljs.core._rest.call(null,args__7789);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__7784,b__7786,c__7788,d__7790);
} else
{return f.call(null,a__7784,b__7786,c__7788,d__7790);
}
} else
{var e__7792 = cljs.core._first.call(null,args__7791);
var args__7793 = cljs.core._rest.call(null,args__7791);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__7784,b__7786,c__7788,d__7790,e__7792);
} else
{return f.call(null,a__7784,b__7786,c__7788,d__7790,e__7792);
}
} else
{var f__7794 = cljs.core._first.call(null,args__7793);
var args__7795 = cljs.core._rest.call(null,args__7793);
if((argc === 6))
{if(f__7794.cljs$lang$arity$6)
{return f__7794.cljs$lang$arity$6(a__7784,b__7786,c__7788,d__7790,e__7792,f__7794);
} else
{return f__7794.call(null,a__7784,b__7786,c__7788,d__7790,e__7792,f__7794);
}
} else
{var g__7796 = cljs.core._first.call(null,args__7795);
var args__7797 = cljs.core._rest.call(null,args__7795);
if((argc === 7))
{if(f__7794.cljs$lang$arity$7)
{return f__7794.cljs$lang$arity$7(a__7784,b__7786,c__7788,d__7790,e__7792,f__7794,g__7796);
} else
{return f__7794.call(null,a__7784,b__7786,c__7788,d__7790,e__7792,f__7794,g__7796);
}
} else
{var h__7798 = cljs.core._first.call(null,args__7797);
var args__7799 = cljs.core._rest.call(null,args__7797);
if((argc === 8))
{if(f__7794.cljs$lang$arity$8)
{return f__7794.cljs$lang$arity$8(a__7784,b__7786,c__7788,d__7790,e__7792,f__7794,g__7796,h__7798);
} else
{return f__7794.call(null,a__7784,b__7786,c__7788,d__7790,e__7792,f__7794,g__7796,h__7798);
}
} else
{var i__7800 = cljs.core._first.call(null,args__7799);
var args__7801 = cljs.core._rest.call(null,args__7799);
if((argc === 9))
{if(f__7794.cljs$lang$arity$9)
{return f__7794.cljs$lang$arity$9(a__7784,b__7786,c__7788,d__7790,e__7792,f__7794,g__7796,h__7798,i__7800);
} else
{return f__7794.call(null,a__7784,b__7786,c__7788,d__7790,e__7792,f__7794,g__7796,h__7798,i__7800);
}
} else
{var j__7802 = cljs.core._first.call(null,args__7801);
var args__7803 = cljs.core._rest.call(null,args__7801);
if((argc === 10))
{if(f__7794.cljs$lang$arity$10)
{return f__7794.cljs$lang$arity$10(a__7784,b__7786,c__7788,d__7790,e__7792,f__7794,g__7796,h__7798,i__7800,j__7802);
} else
{return f__7794.call(null,a__7784,b__7786,c__7788,d__7790,e__7792,f__7794,g__7796,h__7798,i__7800,j__7802);
}
} else
{var k__7804 = cljs.core._first.call(null,args__7803);
var args__7805 = cljs.core._rest.call(null,args__7803);
if((argc === 11))
{if(f__7794.cljs$lang$arity$11)
{return f__7794.cljs$lang$arity$11(a__7784,b__7786,c__7788,d__7790,e__7792,f__7794,g__7796,h__7798,i__7800,j__7802,k__7804);
} else
{return f__7794.call(null,a__7784,b__7786,c__7788,d__7790,e__7792,f__7794,g__7796,h__7798,i__7800,j__7802,k__7804);
}
} else
{var l__7806 = cljs.core._first.call(null,args__7805);
var args__7807 = cljs.core._rest.call(null,args__7805);
if((argc === 12))
{if(f__7794.cljs$lang$arity$12)
{return f__7794.cljs$lang$arity$12(a__7784,b__7786,c__7788,d__7790,e__7792,f__7794,g__7796,h__7798,i__7800,j__7802,k__7804,l__7806);
} else
{return f__7794.call(null,a__7784,b__7786,c__7788,d__7790,e__7792,f__7794,g__7796,h__7798,i__7800,j__7802,k__7804,l__7806);
}
} else
{var m__7808 = cljs.core._first.call(null,args__7807);
var args__7809 = cljs.core._rest.call(null,args__7807);
if((argc === 13))
{if(f__7794.cljs$lang$arity$13)
{return f__7794.cljs$lang$arity$13(a__7784,b__7786,c__7788,d__7790,e__7792,f__7794,g__7796,h__7798,i__7800,j__7802,k__7804,l__7806,m__7808);
} else
{return f__7794.call(null,a__7784,b__7786,c__7788,d__7790,e__7792,f__7794,g__7796,h__7798,i__7800,j__7802,k__7804,l__7806,m__7808);
}
} else
{var n__7810 = cljs.core._first.call(null,args__7809);
var args__7811 = cljs.core._rest.call(null,args__7809);
if((argc === 14))
{if(f__7794.cljs$lang$arity$14)
{return f__7794.cljs$lang$arity$14(a__7784,b__7786,c__7788,d__7790,e__7792,f__7794,g__7796,h__7798,i__7800,j__7802,k__7804,l__7806,m__7808,n__7810);
} else
{return f__7794.call(null,a__7784,b__7786,c__7788,d__7790,e__7792,f__7794,g__7796,h__7798,i__7800,j__7802,k__7804,l__7806,m__7808,n__7810);
}
} else
{var o__7812 = cljs.core._first.call(null,args__7811);
var args__7813 = cljs.core._rest.call(null,args__7811);
if((argc === 15))
{if(f__7794.cljs$lang$arity$15)
{return f__7794.cljs$lang$arity$15(a__7784,b__7786,c__7788,d__7790,e__7792,f__7794,g__7796,h__7798,i__7800,j__7802,k__7804,l__7806,m__7808,n__7810,o__7812);
} else
{return f__7794.call(null,a__7784,b__7786,c__7788,d__7790,e__7792,f__7794,g__7796,h__7798,i__7800,j__7802,k__7804,l__7806,m__7808,n__7810,o__7812);
}
} else
{var p__7814 = cljs.core._first.call(null,args__7813);
var args__7815 = cljs.core._rest.call(null,args__7813);
if((argc === 16))
{if(f__7794.cljs$lang$arity$16)
{return f__7794.cljs$lang$arity$16(a__7784,b__7786,c__7788,d__7790,e__7792,f__7794,g__7796,h__7798,i__7800,j__7802,k__7804,l__7806,m__7808,n__7810,o__7812,p__7814);
} else
{return f__7794.call(null,a__7784,b__7786,c__7788,d__7790,e__7792,f__7794,g__7796,h__7798,i__7800,j__7802,k__7804,l__7806,m__7808,n__7810,o__7812,p__7814);
}
} else
{var q__7816 = cljs.core._first.call(null,args__7815);
var args__7817 = cljs.core._rest.call(null,args__7815);
if((argc === 17))
{if(f__7794.cljs$lang$arity$17)
{return f__7794.cljs$lang$arity$17(a__7784,b__7786,c__7788,d__7790,e__7792,f__7794,g__7796,h__7798,i__7800,j__7802,k__7804,l__7806,m__7808,n__7810,o__7812,p__7814,q__7816);
} else
{return f__7794.call(null,a__7784,b__7786,c__7788,d__7790,e__7792,f__7794,g__7796,h__7798,i__7800,j__7802,k__7804,l__7806,m__7808,n__7810,o__7812,p__7814,q__7816);
}
} else
{var r__7818 = cljs.core._first.call(null,args__7817);
var args__7819 = cljs.core._rest.call(null,args__7817);
if((argc === 18))
{if(f__7794.cljs$lang$arity$18)
{return f__7794.cljs$lang$arity$18(a__7784,b__7786,c__7788,d__7790,e__7792,f__7794,g__7796,h__7798,i__7800,j__7802,k__7804,l__7806,m__7808,n__7810,o__7812,p__7814,q__7816,r__7818);
} else
{return f__7794.call(null,a__7784,b__7786,c__7788,d__7790,e__7792,f__7794,g__7796,h__7798,i__7800,j__7802,k__7804,l__7806,m__7808,n__7810,o__7812,p__7814,q__7816,r__7818);
}
} else
{var s__7820 = cljs.core._first.call(null,args__7819);
var args__7821 = cljs.core._rest.call(null,args__7819);
if((argc === 19))
{if(f__7794.cljs$lang$arity$19)
{return f__7794.cljs$lang$arity$19(a__7784,b__7786,c__7788,d__7790,e__7792,f__7794,g__7796,h__7798,i__7800,j__7802,k__7804,l__7806,m__7808,n__7810,o__7812,p__7814,q__7816,r__7818,s__7820);
} else
{return f__7794.call(null,a__7784,b__7786,c__7788,d__7790,e__7792,f__7794,g__7796,h__7798,i__7800,j__7802,k__7804,l__7806,m__7808,n__7810,o__7812,p__7814,q__7816,r__7818,s__7820);
}
} else
{var t__7822 = cljs.core._first.call(null,args__7821);
var args__7823 = cljs.core._rest.call(null,args__7821);
if((argc === 20))
{if(f__7794.cljs$lang$arity$20)
{return f__7794.cljs$lang$arity$20(a__7784,b__7786,c__7788,d__7790,e__7792,f__7794,g__7796,h__7798,i__7800,j__7802,k__7804,l__7806,m__7808,n__7810,o__7812,p__7814,q__7816,r__7818,s__7820,t__7822);
} else
{return f__7794.call(null,a__7784,b__7786,c__7788,d__7790,e__7792,f__7794,g__7796,h__7798,i__7800,j__7802,k__7804,l__7806,m__7808,n__7810,o__7812,p__7814,q__7816,r__7818,s__7820,t__7822);
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
var fixed_arity__7838 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7839 = cljs.core.bounded_count.call(null,args,(fixed_arity__7838 + 1));
if((bc__7839 <= fixed_arity__7838))
{return cljs.core.apply_to.call(null,f,bc__7839,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__7840 = cljs.core.list_STAR_.call(null,x,args);
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
var apply__4 = (function (f,x,y,args){
var arglist__7843 = cljs.core.list_STAR_.call(null,x,y,args);
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
var apply__5 = (function (f,x,y,z,args){
var arglist__7846 = cljs.core.list_STAR_.call(null,x,y,z,args);
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
});
var apply__6 = (function() { 
var G__7852__delegate = function (f,a,b,c,d,args){
var arglist__7849 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__7850 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7851 = cljs.core.bounded_count.call(null,arglist__7849,(fixed_arity__7850 + 1));
if((bc__7851 <= fixed_arity__7850))
{return cljs.core.apply_to.call(null,f,bc__7851,arglist__7849);
} else
{return f.cljs$lang$applyTo(arglist__7849);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7849));
}
};
var G__7852 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7852__delegate.call(this, f, a, b, c, d, args);
};
G__7852.cljs$lang$maxFixedArity = 5;
G__7852.cljs$lang$applyTo = (function (arglist__7853){
var f = cljs.core.first(arglist__7853);
var a = cljs.core.first(cljs.core.next(arglist__7853));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7853)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7853))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7853)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7853)))));
return G__7852__delegate(f, a, b, c, d, args);
});
G__7852.cljs$lang$arity$variadic = G__7852__delegate;
return G__7852;
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
vary_meta.cljs$lang$applyTo = (function (arglist__7854){
var obj = cljs.core.first(arglist__7854);
var f = cljs.core.first(cljs.core.next(arglist__7854));
var args = cljs.core.rest(cljs.core.next(arglist__7854));
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
var G__7855__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__7855 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7855__delegate.call(this, x, y, more);
};
G__7855.cljs$lang$maxFixedArity = 2;
G__7855.cljs$lang$applyTo = (function (arglist__7856){
var x = cljs.core.first(arglist__7856);
var y = cljs.core.first(cljs.core.next(arglist__7856));
var more = cljs.core.rest(cljs.core.next(arglist__7856));
return G__7855__delegate(x, y, more);
});
G__7855.cljs$lang$arity$variadic = G__7855__delegate;
return G__7855;
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
var G__7857 = pred;
var G__7858 = cljs.core.next.call(null,coll);
pred = G__7857;
coll = G__7858;
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
{var or__3824__auto____7860 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____7860))
{return or__3824__auto____7860;
} else
{{
var G__7861 = pred;
var G__7862 = cljs.core.next.call(null,coll);
pred = G__7861;
coll = G__7862;
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
var G__7863 = null;
var G__7863__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__7863__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__7863__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__7863__3 = (function() { 
var G__7864__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__7864 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7864__delegate.call(this, x, y, zs);
};
G__7864.cljs$lang$maxFixedArity = 2;
G__7864.cljs$lang$applyTo = (function (arglist__7865){
var x = cljs.core.first(arglist__7865);
var y = cljs.core.first(cljs.core.next(arglist__7865));
var zs = cljs.core.rest(cljs.core.next(arglist__7865));
return G__7864__delegate(x, y, zs);
});
G__7864.cljs$lang$arity$variadic = G__7864__delegate;
return G__7864;
})()
;
G__7863 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__7863__0.call(this);
case 1:
return G__7863__1.call(this,x);
case 2:
return G__7863__2.call(this,x,y);
default:
return G__7863__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__7863.cljs$lang$maxFixedArity = 2;
G__7863.cljs$lang$applyTo = G__7863__3.cljs$lang$applyTo;
return G__7863;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__7866__delegate = function (args){
return x;
};
var G__7866 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7866__delegate.call(this, args);
};
G__7866.cljs$lang$maxFixedArity = 0;
G__7866.cljs$lang$applyTo = (function (arglist__7867){
var args = cljs.core.seq(arglist__7867);;
return G__7866__delegate(args);
});
G__7866.cljs$lang$arity$variadic = G__7866__delegate;
return G__7866;
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
var G__7874 = null;
var G__7874__0 = (function (){
return f.call(null,g.call(null));
});
var G__7874__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__7874__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__7874__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__7874__4 = (function() { 
var G__7875__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
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
var comp__3 = (function (f,g,h){
return (function() {
var G__7877 = null;
var G__7877__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__7877__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__7877__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__7877__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__7877__4 = (function() { 
var G__7878__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__7878 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7878__delegate.call(this, x, y, z, args);
};
G__7878.cljs$lang$maxFixedArity = 3;
G__7878.cljs$lang$applyTo = (function (arglist__7879){
var x = cljs.core.first(arglist__7879);
var y = cljs.core.first(cljs.core.next(arglist__7879));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7879)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7879)));
return G__7878__delegate(x, y, z, args);
});
G__7878.cljs$lang$arity$variadic = G__7878__delegate;
return G__7878;
})()
;
G__7877 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7877__0.call(this);
case 1:
return G__7877__1.call(this,x);
case 2:
return G__7877__2.call(this,x,y);
case 3:
return G__7877__3.call(this,x,y,z);
default:
return G__7877__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7877.cljs$lang$maxFixedArity = 3;
G__7877.cljs$lang$applyTo = G__7877__4.cljs$lang$applyTo;
return G__7877;
})()
});
var comp__4 = (function() { 
var G__7880__delegate = function (f1,f2,f3,fs){
var fs__7871 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__7881__delegate = function (args){
var ret__7872 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__7871),args);
var fs__7873 = cljs.core.next.call(null,fs__7871);
while(true){
if(fs__7873)
{{
var G__7882 = cljs.core.first.call(null,fs__7873).call(null,ret__7872);
var G__7883 = cljs.core.next.call(null,fs__7873);
ret__7872 = G__7882;
fs__7873 = G__7883;
continue;
}
} else
{return ret__7872;
}
break;
}
};
var G__7881 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7881__delegate.call(this, args);
};
G__7881.cljs$lang$maxFixedArity = 0;
G__7881.cljs$lang$applyTo = (function (arglist__7884){
var args = cljs.core.seq(arglist__7884);;
return G__7881__delegate(args);
});
G__7881.cljs$lang$arity$variadic = G__7881__delegate;
return G__7881;
})()
;
};
var G__7880 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7880__delegate.call(this, f1, f2, f3, fs);
};
G__7880.cljs$lang$maxFixedArity = 3;
G__7880.cljs$lang$applyTo = (function (arglist__7885){
var f1 = cljs.core.first(arglist__7885);
var f2 = cljs.core.first(cljs.core.next(arglist__7885));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7885)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7885)));
return G__7880__delegate(f1, f2, f3, fs);
});
G__7880.cljs$lang$arity$variadic = G__7880__delegate;
return G__7880;
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
var G__7886__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__7886 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7886__delegate.call(this, args);
};
G__7886.cljs$lang$maxFixedArity = 0;
G__7886.cljs$lang$applyTo = (function (arglist__7887){
var args = cljs.core.seq(arglist__7887);;
return G__7886__delegate(args);
});
G__7886.cljs$lang$arity$variadic = G__7886__delegate;
return G__7886;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__7888__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__7888 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7888__delegate.call(this, args);
};
G__7888.cljs$lang$maxFixedArity = 0;
G__7888.cljs$lang$applyTo = (function (arglist__7889){
var args = cljs.core.seq(arglist__7889);;
return G__7888__delegate(args);
});
G__7888.cljs$lang$arity$variadic = G__7888__delegate;
return G__7888;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__7890__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
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
});
var partial__5 = (function() { 
var G__7892__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__7893__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__7893 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7893__delegate.call(this, args);
};
G__7893.cljs$lang$maxFixedArity = 0;
G__7893.cljs$lang$applyTo = (function (arglist__7894){
var args = cljs.core.seq(arglist__7894);;
return G__7893__delegate(args);
});
G__7893.cljs$lang$arity$variadic = G__7893__delegate;
return G__7893;
})()
;
};
var G__7892 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7892__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__7892.cljs$lang$maxFixedArity = 4;
G__7892.cljs$lang$applyTo = (function (arglist__7895){
var f = cljs.core.first(arglist__7895);
var arg1 = cljs.core.first(cljs.core.next(arglist__7895));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7895)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7895))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7895))));
return G__7892__delegate(f, arg1, arg2, arg3, more);
});
G__7892.cljs$lang$arity$variadic = G__7892__delegate;
return G__7892;
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
var G__7896 = null;
var G__7896__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__7896__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__7896__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__7896__4 = (function() { 
var G__7897__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
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
case 1:
return G__7896__1.call(this,a);
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
var fnil__3 = (function (f,x,y){
return (function() {
var G__7899 = null;
var G__7899__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7899__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__7899__4 = (function() { 
var G__7900__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
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
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__7902 = null;
var G__7902__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7902__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__7902__4 = (function() { 
var G__7903__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__7903 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7903__delegate.call(this, a, b, c, ds);
};
G__7903.cljs$lang$maxFixedArity = 3;
G__7903.cljs$lang$applyTo = (function (arglist__7904){
var a = cljs.core.first(arglist__7904);
var b = cljs.core.first(cljs.core.next(arglist__7904));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7904)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7904)));
return G__7903__delegate(a, b, c, ds);
});
G__7903.cljs$lang$arity$variadic = G__7903__delegate;
return G__7903;
})()
;
G__7902 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7902__2.call(this,a,b);
case 3:
return G__7902__3.call(this,a,b,c);
default:
return G__7902__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7902.cljs$lang$maxFixedArity = 3;
G__7902.cljs$lang$applyTo = G__7902__4.cljs$lang$applyTo;
return G__7902;
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
var mapi__7920 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7928 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7928)
{var s__7929 = temp__3974__auto____7928;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7929))
{var c__7930 = cljs.core.chunk_first.call(null,s__7929);
var size__7931 = cljs.core.count.call(null,c__7930);
var b__7932 = cljs.core.chunk_buffer.call(null,size__7931);
var n__2860__auto____7933 = size__7931;
var i__7934 = 0;
while(true){
if((i__7934 < n__2860__auto____7933))
{cljs.core.chunk_append.call(null,b__7932,f.call(null,(idx + i__7934),cljs.core._nth.call(null,c__7930,i__7934)));
{
var G__7935 = (i__7934 + 1);
i__7934 = G__7935;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7932),mapi.call(null,(idx + size__7931),cljs.core.chunk_rest.call(null,s__7929)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__7929)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__7929)));
}
} else
{return null;
}
}),null));
});
return mapi__7920.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7945 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7945)
{var s__7946 = temp__3974__auto____7945;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7946))
{var c__7947 = cljs.core.chunk_first.call(null,s__7946);
var size__7948 = cljs.core.count.call(null,c__7947);
var b__7949 = cljs.core.chunk_buffer.call(null,size__7948);
var n__2860__auto____7950 = size__7948;
var i__7951 = 0;
while(true){
if((i__7951 < n__2860__auto____7950))
{var x__7952 = f.call(null,cljs.core._nth.call(null,c__7947,i__7951));
if((x__7952 == null))
{} else
{cljs.core.chunk_append.call(null,b__7949,x__7952);
}
{
var G__7954 = (i__7951 + 1);
i__7951 = G__7954;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7949),keep.call(null,f,cljs.core.chunk_rest.call(null,s__7946)));
} else
{var x__7953 = f.call(null,cljs.core.first.call(null,s__7946));
if((x__7953 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__7946));
} else
{return cljs.core.cons.call(null,x__7953,keep.call(null,f,cljs.core.rest.call(null,s__7946)));
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
var keepi__7980 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7990 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7990)
{var s__7991 = temp__3974__auto____7990;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7991))
{var c__7992 = cljs.core.chunk_first.call(null,s__7991);
var size__7993 = cljs.core.count.call(null,c__7992);
var b__7994 = cljs.core.chunk_buffer.call(null,size__7993);
var n__2860__auto____7995 = size__7993;
var i__7996 = 0;
while(true){
if((i__7996 < n__2860__auto____7995))
{var x__7997 = f.call(null,(idx + i__7996),cljs.core._nth.call(null,c__7992,i__7996));
if((x__7997 == null))
{} else
{cljs.core.chunk_append.call(null,b__7994,x__7997);
}
{
var G__7999 = (i__7996 + 1);
i__7996 = G__7999;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7994),keepi.call(null,(idx + size__7993),cljs.core.chunk_rest.call(null,s__7991)));
} else
{var x__7998 = f.call(null,idx,cljs.core.first.call(null,s__7991));
if((x__7998 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__7991));
} else
{return cljs.core.cons.call(null,x__7998,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__7991)));
}
}
} else
{return null;
}
}),null));
});
return keepi__7980.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8085 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____8085))
{return p.call(null,y);
} else
{return and__3822__auto____8085;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8086 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____8086))
{var and__3822__auto____8087 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____8087))
{return p.call(null,z);
} else
{return and__3822__auto____8087;
}
} else
{return and__3822__auto____8086;
}
})());
});
var ep1__4 = (function() { 
var G__8156__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8088 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8088))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____8088;
}
})());
};
var G__8156 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8156__delegate.call(this, x, y, z, args);
};
G__8156.cljs$lang$maxFixedArity = 3;
G__8156.cljs$lang$applyTo = (function (arglist__8157){
var x = cljs.core.first(arglist__8157);
var y = cljs.core.first(cljs.core.next(arglist__8157));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8157)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8157)));
return G__8156__delegate(x, y, z, args);
});
G__8156.cljs$lang$arity$variadic = G__8156__delegate;
return G__8156;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8100 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8100))
{return p2.call(null,x);
} else
{return and__3822__auto____8100;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8101 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8101))
{var and__3822__auto____8102 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8102))
{var and__3822__auto____8103 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8103))
{return p2.call(null,y);
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
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8104 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8104))
{var and__3822__auto____8105 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8105))
{var and__3822__auto____8106 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____8106))
{var and__3822__auto____8107 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8107))
{var and__3822__auto____8108 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8108))
{return p2.call(null,z);
} else
{return and__3822__auto____8108;
}
} else
{return and__3822__auto____8107;
}
} else
{return and__3822__auto____8106;
}
} else
{return and__3822__auto____8105;
}
} else
{return and__3822__auto____8104;
}
})());
});
var ep2__4 = (function() { 
var G__8158__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8109 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8109))
{return cljs.core.every_QMARK_.call(null,(function (p1__7955_SHARP_){
var and__3822__auto____8110 = p1.call(null,p1__7955_SHARP_);
if(cljs.core.truth_(and__3822__auto____8110))
{return p2.call(null,p1__7955_SHARP_);
} else
{return and__3822__auto____8110;
}
}),args);
} else
{return and__3822__auto____8109;
}
})());
};
var G__8158 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8158__delegate.call(this, x, y, z, args);
};
G__8158.cljs$lang$maxFixedArity = 3;
G__8158.cljs$lang$applyTo = (function (arglist__8159){
var x = cljs.core.first(arglist__8159);
var y = cljs.core.first(cljs.core.next(arglist__8159));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8159)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8159)));
return G__8158__delegate(x, y, z, args);
});
G__8158.cljs$lang$arity$variadic = G__8158__delegate;
return G__8158;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8129 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8129))
{var and__3822__auto____8130 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8130))
{return p3.call(null,x);
} else
{return and__3822__auto____8130;
}
} else
{return and__3822__auto____8129;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8131 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8131))
{var and__3822__auto____8132 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8132))
{var and__3822__auto____8133 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____8133))
{var and__3822__auto____8134 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8134))
{var and__3822__auto____8135 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8135))
{return p3.call(null,y);
} else
{return and__3822__auto____8135;
}
} else
{return and__3822__auto____8134;
}
} else
{return and__3822__auto____8133;
}
} else
{return and__3822__auto____8132;
}
} else
{return and__3822__auto____8131;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8136 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8136))
{var and__3822__auto____8137 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8137))
{var and__3822__auto____8138 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____8138))
{var and__3822__auto____8139 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8139))
{var and__3822__auto____8140 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8140))
{var and__3822__auto____8141 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____8141))
{var and__3822__auto____8142 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____8142))
{var and__3822__auto____8143 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____8143))
{return p3.call(null,z);
} else
{return and__3822__auto____8143;
}
} else
{return and__3822__auto____8142;
}
} else
{return and__3822__auto____8141;
}
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
})());
});
var ep3__4 = (function() { 
var G__8160__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8144 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8144))
{return cljs.core.every_QMARK_.call(null,(function (p1__7956_SHARP_){
var and__3822__auto____8145 = p1.call(null,p1__7956_SHARP_);
if(cljs.core.truth_(and__3822__auto____8145))
{var and__3822__auto____8146 = p2.call(null,p1__7956_SHARP_);
if(cljs.core.truth_(and__3822__auto____8146))
{return p3.call(null,p1__7956_SHARP_);
} else
{return and__3822__auto____8146;
}
} else
{return and__3822__auto____8145;
}
}),args);
} else
{return and__3822__auto____8144;
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
var G__8162__delegate = function (p1,p2,p3,ps){
var ps__8147 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__7957_SHARP_){
return p1__7957_SHARP_.call(null,x);
}),ps__8147);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__7958_SHARP_){
var and__3822__auto____8152 = p1__7958_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____8152))
{return p1__7958_SHARP_.call(null,y);
} else
{return and__3822__auto____8152;
}
}),ps__8147);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__7959_SHARP_){
var and__3822__auto____8153 = p1__7959_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____8153))
{var and__3822__auto____8154 = p1__7959_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____8154))
{return p1__7959_SHARP_.call(null,z);
} else
{return and__3822__auto____8154;
}
} else
{return and__3822__auto____8153;
}
}),ps__8147);
});
var epn__4 = (function() { 
var G__8163__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8155 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8155))
{return cljs.core.every_QMARK_.call(null,(function (p1__7960_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__7960_SHARP_,args);
}),ps__8147);
} else
{return and__3822__auto____8155;
}
})());
};
var G__8163 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8163__delegate.call(this, x, y, z, args);
};
G__8163.cljs$lang$maxFixedArity = 3;
G__8163.cljs$lang$applyTo = (function (arglist__8164){
var x = cljs.core.first(arglist__8164);
var y = cljs.core.first(cljs.core.next(arglist__8164));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8164)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8164)));
return G__8163__delegate(x, y, z, args);
});
G__8163.cljs$lang$arity$variadic = G__8163__delegate;
return G__8163;
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
var G__8162 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8162__delegate.call(this, p1, p2, p3, ps);
};
G__8162.cljs$lang$maxFixedArity = 3;
G__8162.cljs$lang$applyTo = (function (arglist__8165){
var p1 = cljs.core.first(arglist__8165);
var p2 = cljs.core.first(cljs.core.next(arglist__8165));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8165)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8165)));
return G__8162__delegate(p1, p2, p3, ps);
});
G__8162.cljs$lang$arity$variadic = G__8162__delegate;
return G__8162;
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
var or__3824__auto____8246 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____8246))
{return or__3824__auto____8246;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____8247 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____8247))
{return or__3824__auto____8247;
} else
{var or__3824__auto____8248 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____8248))
{return or__3824__auto____8248;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__8317__delegate = function (x,y,z,args){
var or__3824__auto____8249 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8249))
{return or__3824__auto____8249;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__8317 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8317__delegate.call(this, x, y, z, args);
};
G__8317.cljs$lang$maxFixedArity = 3;
G__8317.cljs$lang$applyTo = (function (arglist__8318){
var x = cljs.core.first(arglist__8318);
var y = cljs.core.first(cljs.core.next(arglist__8318));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8318)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8318)));
return G__8317__delegate(x, y, z, args);
});
G__8317.cljs$lang$arity$variadic = G__8317__delegate;
return G__8317;
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
var or__3824__auto____8261 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8261))
{return or__3824__auto____8261;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____8262 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8262))
{return or__3824__auto____8262;
} else
{var or__3824__auto____8263 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8263))
{return or__3824__auto____8263;
} else
{var or__3824__auto____8264 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8264))
{return or__3824__auto____8264;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____8265 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8265))
{return or__3824__auto____8265;
} else
{var or__3824__auto____8266 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8266))
{return or__3824__auto____8266;
} else
{var or__3824__auto____8267 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____8267))
{return or__3824__auto____8267;
} else
{var or__3824__auto____8268 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8268))
{return or__3824__auto____8268;
} else
{var or__3824__auto____8269 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8269))
{return or__3824__auto____8269;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__8319__delegate = function (x,y,z,args){
var or__3824__auto____8270 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8270))
{return or__3824__auto____8270;
} else
{return cljs.core.some.call(null,(function (p1__8000_SHARP_){
var or__3824__auto____8271 = p1.call(null,p1__8000_SHARP_);
if(cljs.core.truth_(or__3824__auto____8271))
{return or__3824__auto____8271;
} else
{return p2.call(null,p1__8000_SHARP_);
}
}),args);
}
};
var G__8319 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8319__delegate.call(this, x, y, z, args);
};
G__8319.cljs$lang$maxFixedArity = 3;
G__8319.cljs$lang$applyTo = (function (arglist__8320){
var x = cljs.core.first(arglist__8320);
var y = cljs.core.first(cljs.core.next(arglist__8320));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8320)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8320)));
return G__8319__delegate(x, y, z, args);
});
G__8319.cljs$lang$arity$variadic = G__8319__delegate;
return G__8319;
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
var or__3824__auto____8290 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8290))
{return or__3824__auto____8290;
} else
{var or__3824__auto____8291 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8291))
{return or__3824__auto____8291;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____8292 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8292))
{return or__3824__auto____8292;
} else
{var or__3824__auto____8293 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8293))
{return or__3824__auto____8293;
} else
{var or__3824__auto____8294 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____8294))
{return or__3824__auto____8294;
} else
{var or__3824__auto____8295 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8295))
{return or__3824__auto____8295;
} else
{var or__3824__auto____8296 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8296))
{return or__3824__auto____8296;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____8297 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8297))
{return or__3824__auto____8297;
} else
{var or__3824__auto____8298 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8298))
{return or__3824__auto____8298;
} else
{var or__3824__auto____8299 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____8299))
{return or__3824__auto____8299;
} else
{var or__3824__auto____8300 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8300))
{return or__3824__auto____8300;
} else
{var or__3824__auto____8301 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8301))
{return or__3824__auto____8301;
} else
{var or__3824__auto____8302 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____8302))
{return or__3824__auto____8302;
} else
{var or__3824__auto____8303 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____8303))
{return or__3824__auto____8303;
} else
{var or__3824__auto____8304 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____8304))
{return or__3824__auto____8304;
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
var G__8321__delegate = function (x,y,z,args){
var or__3824__auto____8305 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8305))
{return or__3824__auto____8305;
} else
{return cljs.core.some.call(null,(function (p1__8001_SHARP_){
var or__3824__auto____8306 = p1.call(null,p1__8001_SHARP_);
if(cljs.core.truth_(or__3824__auto____8306))
{return or__3824__auto____8306;
} else
{var or__3824__auto____8307 = p2.call(null,p1__8001_SHARP_);
if(cljs.core.truth_(or__3824__auto____8307))
{return or__3824__auto____8307;
} else
{return p3.call(null,p1__8001_SHARP_);
}
}
}),args);
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
var G__8323__delegate = function (p1,p2,p3,ps){
var ps__8308 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__8002_SHARP_){
return p1__8002_SHARP_.call(null,x);
}),ps__8308);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__8003_SHARP_){
var or__3824__auto____8313 = p1__8003_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8313))
{return or__3824__auto____8313;
} else
{return p1__8003_SHARP_.call(null,y);
}
}),ps__8308);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__8004_SHARP_){
var or__3824__auto____8314 = p1__8004_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8314))
{return or__3824__auto____8314;
} else
{var or__3824__auto____8315 = p1__8004_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____8315))
{return or__3824__auto____8315;
} else
{return p1__8004_SHARP_.call(null,z);
}
}
}),ps__8308);
});
var spn__4 = (function() { 
var G__8324__delegate = function (x,y,z,args){
var or__3824__auto____8316 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8316))
{return or__3824__auto____8316;
} else
{return cljs.core.some.call(null,(function (p1__8005_SHARP_){
return cljs.core.some.call(null,p1__8005_SHARP_,args);
}),ps__8308);
}
};
var G__8324 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8324__delegate.call(this, x, y, z, args);
};
G__8324.cljs$lang$maxFixedArity = 3;
G__8324.cljs$lang$applyTo = (function (arglist__8325){
var x = cljs.core.first(arglist__8325);
var y = cljs.core.first(cljs.core.next(arglist__8325));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8325)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8325)));
return G__8324__delegate(x, y, z, args);
});
G__8324.cljs$lang$arity$variadic = G__8324__delegate;
return G__8324;
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
var G__8323 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8323__delegate.call(this, p1, p2, p3, ps);
};
G__8323.cljs$lang$maxFixedArity = 3;
G__8323.cljs$lang$applyTo = (function (arglist__8326){
var p1 = cljs.core.first(arglist__8326);
var p2 = cljs.core.first(cljs.core.next(arglist__8326));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8326)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8326)));
return G__8323__delegate(p1, p2, p3, ps);
});
G__8323.cljs$lang$arity$variadic = G__8323__delegate;
return G__8323;
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
var temp__3974__auto____8345 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8345)
{var s__8346 = temp__3974__auto____8345;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8346))
{var c__8347 = cljs.core.chunk_first.call(null,s__8346);
var size__8348 = cljs.core.count.call(null,c__8347);
var b__8349 = cljs.core.chunk_buffer.call(null,size__8348);
var n__2860__auto____8350 = size__8348;
var i__8351 = 0;
while(true){
if((i__8351 < n__2860__auto____8350))
{cljs.core.chunk_append.call(null,b__8349,f.call(null,cljs.core._nth.call(null,c__8347,i__8351)));
{
var G__8363 = (i__8351 + 1);
i__8351 = G__8363;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8349),map.call(null,f,cljs.core.chunk_rest.call(null,s__8346)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__8346)),map.call(null,f,cljs.core.rest.call(null,s__8346)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8352 = cljs.core.seq.call(null,c1);
var s2__8353 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8354 = s1__8352;
if(and__3822__auto____8354)
{return s2__8353;
} else
{return and__3822__auto____8354;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8352),cljs.core.first.call(null,s2__8353)),map.call(null,f,cljs.core.rest.call(null,s1__8352),cljs.core.rest.call(null,s2__8353)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8355 = cljs.core.seq.call(null,c1);
var s2__8356 = cljs.core.seq.call(null,c2);
var s3__8357 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____8358 = s1__8355;
if(and__3822__auto____8358)
{var and__3822__auto____8359 = s2__8356;
if(and__3822__auto____8359)
{return s3__8357;
} else
{return and__3822__auto____8359;
}
} else
{return and__3822__auto____8358;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8355),cljs.core.first.call(null,s2__8356),cljs.core.first.call(null,s3__8357)),map.call(null,f,cljs.core.rest.call(null,s1__8355),cljs.core.rest.call(null,s2__8356),cljs.core.rest.call(null,s3__8357)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__8364__delegate = function (f,c1,c2,c3,colls){
var step__8362 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8361 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8361))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__8361),step.call(null,map.call(null,cljs.core.rest,ss__8361)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__8166_SHARP_){
return cljs.core.apply.call(null,f,p1__8166_SHARP_);
}),step__8362.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__8364 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8364__delegate.call(this, f, c1, c2, c3, colls);
};
G__8364.cljs$lang$maxFixedArity = 4;
G__8364.cljs$lang$applyTo = (function (arglist__8365){
var f = cljs.core.first(arglist__8365);
var c1 = cljs.core.first(cljs.core.next(arglist__8365));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8365)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8365))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8365))));
return G__8364__delegate(f, c1, c2, c3, colls);
});
G__8364.cljs$lang$arity$variadic = G__8364__delegate;
return G__8364;
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
{var temp__3974__auto____8368 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8368)
{var s__8369 = temp__3974__auto____8368;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__8369),take.call(null,(n - 1),cljs.core.rest.call(null,s__8369)));
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
var step__8375 = (function (n,coll){
while(true){
var s__8373 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8374 = (n > 0);
if(and__3822__auto____8374)
{return s__8373;
} else
{return and__3822__auto____8374;
}
})()))
{{
var G__8376 = (n - 1);
var G__8377 = cljs.core.rest.call(null,s__8373);
n = G__8376;
coll = G__8377;
continue;
}
} else
{return s__8373;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8375.call(null,n,coll);
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
var s__8380 = cljs.core.seq.call(null,coll);
var lead__8381 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__8381)
{{
var G__8382 = cljs.core.next.call(null,s__8380);
var G__8383 = cljs.core.next.call(null,lead__8381);
s__8380 = G__8382;
lead__8381 = G__8383;
continue;
}
} else
{return s__8380;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__8389 = (function (pred,coll){
while(true){
var s__8387 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8388 = s__8387;
if(and__3822__auto____8388)
{return pred.call(null,cljs.core.first.call(null,s__8387));
} else
{return and__3822__auto____8388;
}
})()))
{{
var G__8390 = pred;
var G__8391 = cljs.core.rest.call(null,s__8387);
pred = G__8390;
coll = G__8391;
continue;
}
} else
{return s__8387;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8389.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8394 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8394)
{var s__8395 = temp__3974__auto____8394;
return cljs.core.concat.call(null,s__8395,cycle.call(null,s__8395));
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
var s1__8400 = cljs.core.seq.call(null,c1);
var s2__8401 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8402 = s1__8400;
if(and__3822__auto____8402)
{return s2__8401;
} else
{return and__3822__auto____8402;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__8400),cljs.core.cons.call(null,cljs.core.first.call(null,s2__8401),interleave.call(null,cljs.core.rest.call(null,s1__8400),cljs.core.rest.call(null,s2__8401))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__8404__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8403 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8403))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__8403),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__8403)));
} else
{return null;
}
}),null));
};
var G__8404 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8404__delegate.call(this, c1, c2, colls);
};
G__8404.cljs$lang$maxFixedArity = 2;
G__8404.cljs$lang$applyTo = (function (arglist__8405){
var c1 = cljs.core.first(arglist__8405);
var c2 = cljs.core.first(cljs.core.next(arglist__8405));
var colls = cljs.core.rest(cljs.core.next(arglist__8405));
return G__8404__delegate(c1, c2, colls);
});
G__8404.cljs$lang$arity$variadic = G__8404__delegate;
return G__8404;
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
var cat__8415 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____8413 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____8413)
{var coll__8414 = temp__3971__auto____8413;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__8414),cat.call(null,cljs.core.rest.call(null,coll__8414),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__8415.call(null,null,colls);
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
var G__8416__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__8416 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8416__delegate.call(this, f, coll, colls);
};
G__8416.cljs$lang$maxFixedArity = 2;
G__8416.cljs$lang$applyTo = (function (arglist__8417){
var f = cljs.core.first(arglist__8417);
var coll = cljs.core.first(cljs.core.next(arglist__8417));
var colls = cljs.core.rest(cljs.core.next(arglist__8417));
return G__8416__delegate(f, coll, colls);
});
G__8416.cljs$lang$arity$variadic = G__8416__delegate;
return G__8416;
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
var temp__3974__auto____8427 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8427)
{var s__8428 = temp__3974__auto____8427;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8428))
{var c__8429 = cljs.core.chunk_first.call(null,s__8428);
var size__8430 = cljs.core.count.call(null,c__8429);
var b__8431 = cljs.core.chunk_buffer.call(null,size__8430);
var n__2860__auto____8432 = size__8430;
var i__8433 = 0;
while(true){
if((i__8433 < n__2860__auto____8432))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__8429,i__8433))))
{cljs.core.chunk_append.call(null,b__8431,cljs.core._nth.call(null,c__8429,i__8433));
} else
{}
{
var G__8436 = (i__8433 + 1);
i__8433 = G__8436;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8431),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__8428)));
} else
{var f__8434 = cljs.core.first.call(null,s__8428);
var r__8435 = cljs.core.rest.call(null,s__8428);
if(cljs.core.truth_(pred.call(null,f__8434)))
{return cljs.core.cons.call(null,f__8434,filter.call(null,pred,r__8435));
} else
{return filter.call(null,pred,r__8435);
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
var walk__8439 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__8439.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__8437_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__8437_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__8443__8444 = to;
if(G__8443__8444)
{if((function (){var or__3824__auto____8445 = (G__8443__8444.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____8445)
{return or__3824__auto____8445;
} else
{return G__8443__8444.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__8443__8444.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8443__8444);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8443__8444);
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
var G__8446__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__8446 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8446__delegate.call(this, f, c1, c2, c3, colls);
};
G__8446.cljs$lang$maxFixedArity = 4;
G__8446.cljs$lang$applyTo = (function (arglist__8447){
var f = cljs.core.first(arglist__8447);
var c1 = cljs.core.first(cljs.core.next(arglist__8447));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8447)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8447))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8447))));
return G__8446__delegate(f, c1, c2, c3, colls);
});
G__8446.cljs$lang$arity$variadic = G__8446__delegate;
return G__8446;
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
var temp__3974__auto____8454 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8454)
{var s__8455 = temp__3974__auto____8454;
var p__8456 = cljs.core.take.call(null,n,s__8455);
if((n === cljs.core.count.call(null,p__8456)))
{return cljs.core.cons.call(null,p__8456,partition.call(null,n,step,cljs.core.drop.call(null,step,s__8455)));
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
var temp__3974__auto____8457 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8457)
{var s__8458 = temp__3974__auto____8457;
var p__8459 = cljs.core.take.call(null,n,s__8458);
if((n === cljs.core.count.call(null,p__8459)))
{return cljs.core.cons.call(null,p__8459,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__8458)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__8459,pad)));
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
var sentinel__8464 = cljs.core.lookup_sentinel;
var m__8465 = m;
var ks__8466 = cljs.core.seq.call(null,ks);
while(true){
if(ks__8466)
{var m__8467 = cljs.core._lookup.call(null,m__8465,cljs.core.first.call(null,ks__8466),sentinel__8464);
if((sentinel__8464 === m__8467))
{return not_found;
} else
{{
var G__8468 = sentinel__8464;
var G__8469 = m__8467;
var G__8470 = cljs.core.next.call(null,ks__8466);
sentinel__8464 = G__8468;
m__8465 = G__8469;
ks__8466 = G__8470;
continue;
}
}
} else
{return m__8465;
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
cljs.core.assoc_in = (function assoc_in(m,p__8471,v){
var vec__8476__8477 = p__8471;
var k__8478 = cljs.core.nth.call(null,vec__8476__8477,0,null);
var ks__8479 = cljs.core.nthnext.call(null,vec__8476__8477,1);
if(cljs.core.truth_(ks__8479))
{return cljs.core.assoc.call(null,m,k__8478,assoc_in.call(null,cljs.core._lookup.call(null,m,k__8478,null),ks__8479,v));
} else
{return cljs.core.assoc.call(null,m,k__8478,v);
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
var update_in__delegate = function (m,p__8480,f,args){
var vec__8485__8486 = p__8480;
var k__8487 = cljs.core.nth.call(null,vec__8485__8486,0,null);
var ks__8488 = cljs.core.nthnext.call(null,vec__8485__8486,1);
if(cljs.core.truth_(ks__8488))
{return cljs.core.assoc.call(null,m,k__8487,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__8487,null),ks__8488,f,args));
} else
{return cljs.core.assoc.call(null,m,k__8487,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__8487,null),args));
}
};
var update_in = function (m,p__8480,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__8480, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__8489){
var m = cljs.core.first(arglist__8489);
var p__8480 = cljs.core.first(cljs.core.next(arglist__8489));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8489)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8489)));
return update_in__delegate(m, p__8480, f, args);
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
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8492 = this;
var h__2525__auto____8493 = this__8492.__hash;
if(!((h__2525__auto____8493 == null)))
{return h__2525__auto____8493;
} else
{var h__2525__auto____8494 = cljs.core.hash_coll.call(null,coll);
this__8492.__hash = h__2525__auto____8494;
return h__2525__auto____8494;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8495 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8496 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8497 = this;
var new_array__8498 = this__8497.array.slice();
(new_array__8498[k] = v);
return (new cljs.core.Vector(this__8497.meta,new_array__8498,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__8529 = null;
var G__8529__2 = (function (this_sym8499,k){
var this__8501 = this;
var this_sym8499__8502 = this;
var coll__8503 = this_sym8499__8502;
return coll__8503.cljs$core$ILookup$_lookup$arity$2(coll__8503,k);
});
var G__8529__3 = (function (this_sym8500,k,not_found){
var this__8501 = this;
var this_sym8500__8504 = this;
var coll__8505 = this_sym8500__8504;
return coll__8505.cljs$core$ILookup$_lookup$arity$3(coll__8505,k,not_found);
});
G__8529 = function(this_sym8500,k,not_found){
switch(arguments.length){
case 2:
return G__8529__2.call(this,this_sym8500,k);
case 3:
return G__8529__3.call(this,this_sym8500,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8529;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym8490,args8491){
var this__8506 = this;
return this_sym8490.call.apply(this_sym8490,[this_sym8490].concat(args8491.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8507 = this;
var new_array__8508 = this__8507.array.slice();
new_array__8508.push(o);
return (new cljs.core.Vector(this__8507.meta,new_array__8508,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__8509 = this;
var this__8510 = this;
return cljs.core.pr_str.call(null,this__8510);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8511 = this;
return cljs.core.ci_reduce.call(null,this__8511.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8512 = this;
return cljs.core.ci_reduce.call(null,this__8512.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8513 = this;
if((this__8513.array.length > 0))
{var vector_seq__8514 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__8513.array.length))
{return cljs.core.cons.call(null,(this__8513.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__8514.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8515 = this;
return this__8515.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8516 = this;
var count__8517 = this__8516.array.length;
if((count__8517 > 0))
{return (this__8516.array[(count__8517 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8518 = this;
if((this__8518.array.length > 0))
{var new_array__8519 = this__8518.array.slice();
new_array__8519.pop();
return (new cljs.core.Vector(this__8518.meta,new_array__8519,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8520 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8521 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8522 = this;
return (new cljs.core.Vector(meta,this__8522.array,this__8522.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8523 = this;
return this__8523.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8524 = this;
if((function (){var and__3822__auto____8525 = (0 <= n);
if(and__3822__auto____8525)
{return (n < this__8524.array.length);
} else
{return and__3822__auto____8525;
}
})())
{return (this__8524.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8526 = this;
if((function (){var and__3822__auto____8527 = (0 <= n);
if(and__3822__auto____8527)
{return (n < this__8526.array.length);
} else
{return and__3822__auto____8527;
}
})())
{return (this__8526.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8528 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8528.meta);
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
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__2643__auto__){
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
var cnt__8531 = pv.cnt;
if((cnt__8531 < 32))
{return 0;
} else
{return (((cnt__8531 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__8537 = level;
var ret__8538 = node;
while(true){
if((ll__8537 === 0))
{return ret__8538;
} else
{var embed__8539 = ret__8538;
var r__8540 = cljs.core.pv_fresh_node.call(null,edit);
var ___8541 = cljs.core.pv_aset.call(null,r__8540,0,embed__8539);
{
var G__8542 = (ll__8537 - 5);
var G__8543 = r__8540;
ll__8537 = G__8542;
ret__8538 = G__8543;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__8549 = cljs.core.pv_clone_node.call(null,parent);
var subidx__8550 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__8549,subidx__8550,tailnode);
return ret__8549;
} else
{var child__8551 = cljs.core.pv_aget.call(null,parent,subidx__8550);
if(!((child__8551 == null)))
{var node_to_insert__8552 = push_tail.call(null,pv,(level - 5),child__8551,tailnode);
cljs.core.pv_aset.call(null,ret__8549,subidx__8550,node_to_insert__8552);
return ret__8549;
} else
{var node_to_insert__8553 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__8549,subidx__8550,node_to_insert__8553);
return ret__8549;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____8557 = (0 <= i);
if(and__3822__auto____8557)
{return (i < pv.cnt);
} else
{return and__3822__auto____8557;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__8558 = pv.root;
var level__8559 = pv.shift;
while(true){
if((level__8559 > 0))
{{
var G__8560 = cljs.core.pv_aget.call(null,node__8558,((i >>> level__8559) & 31));
var G__8561 = (level__8559 - 5);
node__8558 = G__8560;
level__8559 = G__8561;
continue;
}
} else
{return node__8558.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__8564 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__8564,(i & 31),val);
return ret__8564;
} else
{var subidx__8565 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8564,subidx__8565,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8565),i,val));
return ret__8564;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__8571 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8572 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8571));
if((function (){var and__3822__auto____8573 = (new_child__8572 == null);
if(and__3822__auto____8573)
{return (subidx__8571 === 0);
} else
{return and__3822__auto____8573;
}
})())
{return null;
} else
{var ret__8574 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8574,subidx__8571,new_child__8572);
return ret__8574;
}
} else
{if((subidx__8571 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__8575 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8575,subidx__8571,null);
return ret__8575;
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
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8578 = this;
return (new cljs.core.TransientVector(this__8578.cnt,this__8578.shift,cljs.core.tv_editable_root.call(null,this__8578.root),cljs.core.tv_editable_tail.call(null,this__8578.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8579 = this;
var h__2525__auto____8580 = this__8579.__hash;
if(!((h__2525__auto____8580 == null)))
{return h__2525__auto____8580;
} else
{var h__2525__auto____8581 = cljs.core.hash_coll.call(null,coll);
this__8579.__hash = h__2525__auto____8581;
return h__2525__auto____8581;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8582 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8583 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8584 = this;
if((function (){var and__3822__auto____8585 = (0 <= k);
if(and__3822__auto____8585)
{return (k < this__8584.cnt);
} else
{return and__3822__auto____8585;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__8586 = this__8584.tail.slice();
(new_tail__8586[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__8584.meta,this__8584.cnt,this__8584.shift,this__8584.root,new_tail__8586,null));
} else
{return (new cljs.core.PersistentVector(this__8584.meta,this__8584.cnt,this__8584.shift,cljs.core.do_assoc.call(null,coll,this__8584.shift,this__8584.root,k,v),this__8584.tail,null));
}
} else
{if((k === this__8584.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__8584.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__8634 = null;
var G__8634__2 = (function (this_sym8587,k){
var this__8589 = this;
var this_sym8587__8590 = this;
var coll__8591 = this_sym8587__8590;
return coll__8591.cljs$core$ILookup$_lookup$arity$2(coll__8591,k);
});
var G__8634__3 = (function (this_sym8588,k,not_found){
var this__8589 = this;
var this_sym8588__8592 = this;
var coll__8593 = this_sym8588__8592;
return coll__8593.cljs$core$ILookup$_lookup$arity$3(coll__8593,k,not_found);
});
G__8634 = function(this_sym8588,k,not_found){
switch(arguments.length){
case 2:
return G__8634__2.call(this,this_sym8588,k);
case 3:
return G__8634__3.call(this,this_sym8588,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8634;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym8576,args8577){
var this__8594 = this;
return this_sym8576.call.apply(this_sym8576,[this_sym8576].concat(args8577.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__8595 = this;
var step_init__8596 = [0,init];
var i__8597 = 0;
while(true){
if((i__8597 < this__8595.cnt))
{var arr__8598 = cljs.core.array_for.call(null,v,i__8597);
var len__8599 = arr__8598.length;
var init__8603 = (function (){var j__8600 = 0;
var init__8601 = (step_init__8596[1]);
while(true){
if((j__8600 < len__8599))
{var init__8602 = f.call(null,init__8601,(j__8600 + i__8597),(arr__8598[j__8600]));
if(cljs.core.reduced_QMARK_.call(null,init__8602))
{return init__8602;
} else
{{
var G__8635 = (j__8600 + 1);
var G__8636 = init__8602;
j__8600 = G__8635;
init__8601 = G__8636;
continue;
}
}
} else
{(step_init__8596[0] = len__8599);
(step_init__8596[1] = init__8601);
return init__8601;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8603))
{return cljs.core.deref.call(null,init__8603);
} else
{{
var G__8637 = (i__8597 + (step_init__8596[0]));
i__8597 = G__8637;
continue;
}
}
} else
{return (step_init__8596[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8604 = this;
if(((this__8604.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__8605 = this__8604.tail.slice();
new_tail__8605.push(o);
return (new cljs.core.PersistentVector(this__8604.meta,(this__8604.cnt + 1),this__8604.shift,this__8604.root,new_tail__8605,null));
} else
{var root_overflow_QMARK___8606 = ((this__8604.cnt >>> 5) > (1 << this__8604.shift));
var new_shift__8607 = ((root_overflow_QMARK___8606)?(this__8604.shift + 5):this__8604.shift);
var new_root__8609 = ((root_overflow_QMARK___8606)?(function (){var n_r__8608 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__8608,0,this__8604.root);
cljs.core.pv_aset.call(null,n_r__8608,1,cljs.core.new_path.call(null,null,this__8604.shift,(new cljs.core.VectorNode(null,this__8604.tail))));
return n_r__8608;
})():cljs.core.push_tail.call(null,coll,this__8604.shift,this__8604.root,(new cljs.core.VectorNode(null,this__8604.tail))));
return (new cljs.core.PersistentVector(this__8604.meta,(this__8604.cnt + 1),new_shift__8607,new_root__8609,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8610 = this;
if((this__8610.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__8610.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__8611 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__8612 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__8613 = this;
var this__8614 = this;
return cljs.core.pr_str.call(null,this__8614);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8615 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8616 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8617 = this;
if((this__8617.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8618 = this;
return this__8618.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8619 = this;
if((this__8619.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__8619.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8620 = this;
if((this__8620.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8620.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8620.meta);
} else
{if((1 < (this__8620.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__8620.meta,(this__8620.cnt - 1),this__8620.shift,this__8620.root,this__8620.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__8621 = cljs.core.array_for.call(null,coll,(this__8620.cnt - 2));
var nr__8622 = cljs.core.pop_tail.call(null,coll,this__8620.shift,this__8620.root);
var new_root__8623 = (((nr__8622 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__8622);
var cnt_1__8624 = (this__8620.cnt - 1);
if((function (){var and__3822__auto____8625 = (5 < this__8620.shift);
if(and__3822__auto____8625)
{return (cljs.core.pv_aget.call(null,new_root__8623,1) == null);
} else
{return and__3822__auto____8625;
}
})())
{return (new cljs.core.PersistentVector(this__8620.meta,cnt_1__8624,(this__8620.shift - 5),cljs.core.pv_aget.call(null,new_root__8623,0),new_tail__8621,null));
} else
{return (new cljs.core.PersistentVector(this__8620.meta,cnt_1__8624,this__8620.shift,new_root__8623,new_tail__8621,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8626 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8627 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8628 = this;
return (new cljs.core.PersistentVector(meta,this__8628.cnt,this__8628.shift,this__8628.root,this__8628.tail,this__8628.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8629 = this;
return this__8629.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8630 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8631 = this;
if((function (){var and__3822__auto____8632 = (0 <= n);
if(and__3822__auto____8632)
{return (n < this__8631.cnt);
} else
{return and__3822__auto____8632;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8633 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8633.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__8638 = xs.length;
var xs__8639 = (((no_clone === true))?xs:xs.slice());
if((l__8638 < 32))
{return (new cljs.core.PersistentVector(null,l__8638,5,cljs.core.PersistentVector.EMPTY_NODE,xs__8639,null));
} else
{var node__8640 = xs__8639.slice(0,32);
var v__8641 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__8640,null));
var i__8642 = 32;
var out__8643 = cljs.core._as_transient.call(null,v__8641);
while(true){
if((i__8642 < l__8638))
{{
var G__8644 = (i__8642 + 1);
var G__8645 = cljs.core.conj_BANG_.call(null,out__8643,(xs__8639[i__8642]));
i__8642 = G__8644;
out__8643 = G__8645;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8643);
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
vector.cljs$lang$applyTo = (function (arglist__8646){
var args = cljs.core.seq(arglist__8646);;
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
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8647 = this;
if(((this__8647.off + 1) < this__8647.node.length))
{var s__8648 = cljs.core.chunked_seq.call(null,this__8647.vec,this__8647.node,this__8647.i,(this__8647.off + 1));
if((s__8648 == null))
{return null;
} else
{return s__8648;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8649 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8650 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8651 = this;
return (this__8651.node[this__8651.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8652 = this;
if(((this__8652.off + 1) < this__8652.node.length))
{var s__8653 = cljs.core.chunked_seq.call(null,this__8652.vec,this__8652.node,this__8652.i,(this__8652.off + 1));
if((s__8653 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8653;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__8654 = this;
var l__8655 = this__8654.node.length;
var s__8656 = ((((this__8654.i + l__8655) < cljs.core._count.call(null,this__8654.vec)))?cljs.core.chunked_seq.call(null,this__8654.vec,(this__8654.i + l__8655),0):null);
if((s__8656 == null))
{return null;
} else
{return s__8656;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8657 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__8658 = this;
return cljs.core.chunked_seq.call(null,this__8658.vec,this__8658.node,this__8658.i,this__8658.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__8659 = this;
return this__8659.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8660 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8660.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__8661 = this;
return cljs.core.array_chunk.call(null,this__8661.node,this__8661.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__8662 = this;
var l__8663 = this__8662.node.length;
var s__8664 = ((((this__8662.i + l__8663) < cljs.core._count.call(null,this__8662.vec)))?cljs.core.chunked_seq.call(null,this__8662.vec,(this__8662.i + l__8663),0):null);
if((s__8664 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8664;
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
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8667 = this;
var h__2525__auto____8668 = this__8667.__hash;
if(!((h__2525__auto____8668 == null)))
{return h__2525__auto____8668;
} else
{var h__2525__auto____8669 = cljs.core.hash_coll.call(null,coll);
this__8667.__hash = h__2525__auto____8669;
return h__2525__auto____8669;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8670 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8671 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__8672 = this;
var v_pos__8673 = (this__8672.start + key);
return (new cljs.core.Subvec(this__8672.meta,cljs.core._assoc.call(null,this__8672.v,v_pos__8673,val),this__8672.start,((this__8672.end > (v_pos__8673 + 1)) ? this__8672.end : (v_pos__8673 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__8699 = null;
var G__8699__2 = (function (this_sym8674,k){
var this__8676 = this;
var this_sym8674__8677 = this;
var coll__8678 = this_sym8674__8677;
return coll__8678.cljs$core$ILookup$_lookup$arity$2(coll__8678,k);
});
var G__8699__3 = (function (this_sym8675,k,not_found){
var this__8676 = this;
var this_sym8675__8679 = this;
var coll__8680 = this_sym8675__8679;
return coll__8680.cljs$core$ILookup$_lookup$arity$3(coll__8680,k,not_found);
});
G__8699 = function(this_sym8675,k,not_found){
switch(arguments.length){
case 2:
return G__8699__2.call(this,this_sym8675,k);
case 3:
return G__8699__3.call(this,this_sym8675,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8699;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym8665,args8666){
var this__8681 = this;
return this_sym8665.call.apply(this_sym8665,[this_sym8665].concat(args8666.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8682 = this;
return (new cljs.core.Subvec(this__8682.meta,cljs.core._assoc_n.call(null,this__8682.v,this__8682.end,o),this__8682.start,(this__8682.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__8683 = this;
var this__8684 = this;
return cljs.core.pr_str.call(null,this__8684);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8685 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8686 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8687 = this;
var subvec_seq__8688 = (function subvec_seq(i){
if((i === this__8687.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__8687.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__8688.call(null,this__8687.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8689 = this;
return (this__8689.end - this__8689.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8690 = this;
return cljs.core._nth.call(null,this__8690.v,(this__8690.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8691 = this;
if((this__8691.start === this__8691.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__8691.meta,this__8691.v,this__8691.start,(this__8691.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8692 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8693 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8694 = this;
return (new cljs.core.Subvec(meta,this__8694.v,this__8694.start,this__8694.end,this__8694.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8695 = this;
return this__8695.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8696 = this;
return cljs.core._nth.call(null,this__8696.v,(this__8696.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8697 = this;
return cljs.core._nth.call(null,this__8697.v,(this__8697.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8698 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8698.meta);
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
var ret__8701 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__8701,0,tl.length);
return ret__8701;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__8705 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__8706 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8705,subidx__8706,(((level === 5))?tail_node:(function (){var child__8707 = cljs.core.pv_aget.call(null,ret__8705,subidx__8706);
if(!((child__8707 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__8707,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__8705;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__8712 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__8713 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8714 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__8712,subidx__8713));
if((function (){var and__3822__auto____8715 = (new_child__8714 == null);
if(and__3822__auto____8715)
{return (subidx__8713 === 0);
} else
{return and__3822__auto____8715;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__8712,subidx__8713,new_child__8714);
return node__8712;
}
} else
{if((subidx__8713 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__8712,subidx__8713,null);
return node__8712;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____8720 = (0 <= i);
if(and__3822__auto____8720)
{return (i < tv.cnt);
} else
{return and__3822__auto____8720;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__8721 = tv.root;
var node__8722 = root__8721;
var level__8723 = tv.shift;
while(true){
if((level__8723 > 0))
{{
var G__8724 = cljs.core.tv_ensure_editable.call(null,root__8721.edit,cljs.core.pv_aget.call(null,node__8722,((i >>> level__8723) & 31)));
var G__8725 = (level__8723 - 5);
node__8722 = G__8724;
level__8723 = G__8725;
continue;
}
} else
{return node__8722.arr;
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
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__8765 = null;
var G__8765__2 = (function (this_sym8728,k){
var this__8730 = this;
var this_sym8728__8731 = this;
var coll__8732 = this_sym8728__8731;
return coll__8732.cljs$core$ILookup$_lookup$arity$2(coll__8732,k);
});
var G__8765__3 = (function (this_sym8729,k,not_found){
var this__8730 = this;
var this_sym8729__8733 = this;
var coll__8734 = this_sym8729__8733;
return coll__8734.cljs$core$ILookup$_lookup$arity$3(coll__8734,k,not_found);
});
G__8765 = function(this_sym8729,k,not_found){
switch(arguments.length){
case 2:
return G__8765__2.call(this,this_sym8729,k);
case 3:
return G__8765__3.call(this,this_sym8729,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8765;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym8726,args8727){
var this__8735 = this;
return this_sym8726.call.apply(this_sym8726,[this_sym8726].concat(args8727.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8736 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8737 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8738 = this;
if(this__8738.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8739 = this;
if((function (){var and__3822__auto____8740 = (0 <= n);
if(and__3822__auto____8740)
{return (n < this__8739.cnt);
} else
{return and__3822__auto____8740;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8741 = this;
if(this__8741.root.edit)
{return this__8741.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__8742 = this;
if(this__8742.root.edit)
{if((function (){var and__3822__auto____8743 = (0 <= n);
if(and__3822__auto____8743)
{return (n < this__8742.cnt);
} else
{return and__3822__auto____8743;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__8742.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__8748 = (function go(level,node){
var node__8746 = cljs.core.tv_ensure_editable.call(null,this__8742.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__8746,(n & 31),val);
return node__8746;
} else
{var subidx__8747 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__8746,subidx__8747,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__8746,subidx__8747)));
return node__8746;
}
}).call(null,this__8742.shift,this__8742.root);
this__8742.root = new_root__8748;
return tcoll;
}
} else
{if((n === this__8742.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__8742.cnt)].join('')));
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
var this__8749 = this;
if(this__8749.root.edit)
{if((this__8749.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8749.cnt))
{this__8749.cnt = 0;
return tcoll;
} else
{if((((this__8749.cnt - 1) & 31) > 0))
{this__8749.cnt = (this__8749.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__8750 = cljs.core.editable_array_for.call(null,tcoll,(this__8749.cnt - 2));
var new_root__8752 = (function (){var nr__8751 = cljs.core.tv_pop_tail.call(null,tcoll,this__8749.shift,this__8749.root);
if(!((nr__8751 == null)))
{return nr__8751;
} else
{return (new cljs.core.VectorNode(this__8749.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____8753 = (5 < this__8749.shift);
if(and__3822__auto____8753)
{return (cljs.core.pv_aget.call(null,new_root__8752,1) == null);
} else
{return and__3822__auto____8753;
}
})())
{var new_root__8754 = cljs.core.tv_ensure_editable.call(null,this__8749.root.edit,cljs.core.pv_aget.call(null,new_root__8752,0));
this__8749.root = new_root__8754;
this__8749.shift = (this__8749.shift - 5);
this__8749.cnt = (this__8749.cnt - 1);
this__8749.tail = new_tail__8750;
return tcoll;
} else
{this__8749.root = new_root__8752;
this__8749.cnt = (this__8749.cnt - 1);
this__8749.tail = new_tail__8750;
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
var this__8755 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8756 = this;
if(this__8756.root.edit)
{if(((this__8756.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__8756.tail[(this__8756.cnt & 31)] = o);
this__8756.cnt = (this__8756.cnt + 1);
return tcoll;
} else
{var tail_node__8757 = (new cljs.core.VectorNode(this__8756.root.edit,this__8756.tail));
var new_tail__8758 = cljs.core.make_array.call(null,32);
(new_tail__8758[0] = o);
this__8756.tail = new_tail__8758;
if(((this__8756.cnt >>> 5) > (1 << this__8756.shift)))
{var new_root_array__8759 = cljs.core.make_array.call(null,32);
var new_shift__8760 = (this__8756.shift + 5);
(new_root_array__8759[0] = this__8756.root);
(new_root_array__8759[1] = cljs.core.new_path.call(null,this__8756.root.edit,this__8756.shift,tail_node__8757));
this__8756.root = (new cljs.core.VectorNode(this__8756.root.edit,new_root_array__8759));
this__8756.shift = new_shift__8760;
this__8756.cnt = (this__8756.cnt + 1);
return tcoll;
} else
{var new_root__8761 = cljs.core.tv_push_tail.call(null,tcoll,this__8756.shift,this__8756.root,tail_node__8757);
this__8756.root = new_root__8761;
this__8756.cnt = (this__8756.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8762 = this;
if(this__8762.root.edit)
{this__8762.root.edit = null;
var len__8763 = (this__8762.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__8764 = cljs.core.make_array.call(null,len__8763);
cljs.core.array_copy.call(null,this__8762.tail,0,trimmed_tail__8764,0,len__8763);
return (new cljs.core.PersistentVector(null,this__8762.cnt,this__8762.shift,this__8762.root,trimmed_tail__8764,null));
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
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8766 = this;
var h__2525__auto____8767 = this__8766.__hash;
if(!((h__2525__auto____8767 == null)))
{return h__2525__auto____8767;
} else
{var h__2525__auto____8768 = cljs.core.hash_coll.call(null,coll);
this__8766.__hash = h__2525__auto____8768;
return h__2525__auto____8768;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8769 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__8770 = this;
var this__8771 = this;
return cljs.core.pr_str.call(null,this__8771);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8772 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8773 = this;
return cljs.core._first.call(null,this__8773.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8774 = this;
var temp__3971__auto____8775 = cljs.core.next.call(null,this__8774.front);
if(temp__3971__auto____8775)
{var f1__8776 = temp__3971__auto____8775;
return (new cljs.core.PersistentQueueSeq(this__8774.meta,f1__8776,this__8774.rear,null));
} else
{if((this__8774.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__8774.meta,this__8774.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8777 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8778 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__8778.front,this__8778.rear,this__8778.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8779 = this;
return this__8779.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8780 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8780.meta);
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
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8781 = this;
var h__2525__auto____8782 = this__8781.__hash;
if(!((h__2525__auto____8782 == null)))
{return h__2525__auto____8782;
} else
{var h__2525__auto____8783 = cljs.core.hash_coll.call(null,coll);
this__8781.__hash = h__2525__auto____8783;
return h__2525__auto____8783;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8784 = this;
if(cljs.core.truth_(this__8784.front))
{return (new cljs.core.PersistentQueue(this__8784.meta,(this__8784.count + 1),this__8784.front,cljs.core.conj.call(null,(function (){var or__3824__auto____8785 = this__8784.rear;
if(cljs.core.truth_(or__3824__auto____8785))
{return or__3824__auto____8785;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__8784.meta,(this__8784.count + 1),cljs.core.conj.call(null,this__8784.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__8786 = this;
var this__8787 = this;
return cljs.core.pr_str.call(null,this__8787);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8788 = this;
var rear__8789 = cljs.core.seq.call(null,this__8788.rear);
if(cljs.core.truth_((function (){var or__3824__auto____8790 = this__8788.front;
if(cljs.core.truth_(or__3824__auto____8790))
{return or__3824__auto____8790;
} else
{return rear__8789;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__8788.front,cljs.core.seq.call(null,rear__8789),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8791 = this;
return this__8791.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8792 = this;
return cljs.core._first.call(null,this__8792.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8793 = this;
if(cljs.core.truth_(this__8793.front))
{var temp__3971__auto____8794 = cljs.core.next.call(null,this__8793.front);
if(temp__3971__auto____8794)
{var f1__8795 = temp__3971__auto____8794;
return (new cljs.core.PersistentQueue(this__8793.meta,(this__8793.count - 1),f1__8795,this__8793.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__8793.meta,(this__8793.count - 1),cljs.core.seq.call(null,this__8793.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8796 = this;
return cljs.core.first.call(null,this__8796.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8797 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8798 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8799 = this;
return (new cljs.core.PersistentQueue(meta,this__8799.count,this__8799.front,this__8799.rear,this__8799.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8800 = this;
return this__8800.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8801 = this;
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
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__8802 = this;
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
var len__8805 = array.length;
var i__8806 = 0;
while(true){
if((i__8806 < len__8805))
{if((k === (array[i__8806])))
{return i__8806;
} else
{{
var G__8807 = (i__8806 + incr);
i__8806 = G__8807;
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
var a__8810 = cljs.core.hash.call(null,a);
var b__8811 = cljs.core.hash.call(null,b);
if((a__8810 < b__8811))
{return -1;
} else
{if((a__8810 > b__8811))
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
var ks__8819 = m.keys;
var len__8820 = ks__8819.length;
var so__8821 = m.strobj;
var out__8822 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__8823 = 0;
var out__8824 = cljs.core.transient$.call(null,out__8822);
while(true){
if((i__8823 < len__8820))
{var k__8825 = (ks__8819[i__8823]);
{
var G__8826 = (i__8823 + 1);
var G__8827 = cljs.core.assoc_BANG_.call(null,out__8824,k__8825,(so__8821[k__8825]));
i__8823 = G__8826;
out__8824 = G__8827;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__8824,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__8833 = {};
var l__8834 = ks.length;
var i__8835 = 0;
while(true){
if((i__8835 < l__8834))
{var k__8836 = (ks[i__8835]);
(new_obj__8833[k__8836] = (obj[k__8836]));
{
var G__8837 = (i__8835 + 1);
i__8835 = G__8837;
continue;
}
} else
{}
break;
}
return new_obj__8833;
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
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8840 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8841 = this;
var h__2525__auto____8842 = this__8841.__hash;
if(!((h__2525__auto____8842 == null)))
{return h__2525__auto____8842;
} else
{var h__2525__auto____8843 = cljs.core.hash_imap.call(null,coll);
this__8841.__hash = h__2525__auto____8843;
return h__2525__auto____8843;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8844 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8845 = this;
if((function (){var and__3822__auto____8846 = goog.isString(k);
if(and__3822__auto____8846)
{return !((cljs.core.scan_array.call(null,1,k,this__8845.keys) == null));
} else
{return and__3822__auto____8846;
}
})())
{return (this__8845.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8847 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____8848 = (this__8847.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____8848)
{return or__3824__auto____8848;
} else
{return (this__8847.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__8847.keys) == null)))
{var new_strobj__8849 = cljs.core.obj_clone.call(null,this__8847.strobj,this__8847.keys);
(new_strobj__8849[k] = v);
return (new cljs.core.ObjMap(this__8847.meta,this__8847.keys,new_strobj__8849,(this__8847.update_count + 1),null));
} else
{var new_strobj__8850 = cljs.core.obj_clone.call(null,this__8847.strobj,this__8847.keys);
var new_keys__8851 = this__8847.keys.slice();
(new_strobj__8850[k] = v);
new_keys__8851.push(k);
return (new cljs.core.ObjMap(this__8847.meta,new_keys__8851,new_strobj__8850,(this__8847.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8852 = this;
if((function (){var and__3822__auto____8853 = goog.isString(k);
if(and__3822__auto____8853)
{return !((cljs.core.scan_array.call(null,1,k,this__8852.keys) == null));
} else
{return and__3822__auto____8853;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__8875 = null;
var G__8875__2 = (function (this_sym8854,k){
var this__8856 = this;
var this_sym8854__8857 = this;
var coll__8858 = this_sym8854__8857;
return coll__8858.cljs$core$ILookup$_lookup$arity$2(coll__8858,k);
});
var G__8875__3 = (function (this_sym8855,k,not_found){
var this__8856 = this;
var this_sym8855__8859 = this;
var coll__8860 = this_sym8855__8859;
return coll__8860.cljs$core$ILookup$_lookup$arity$3(coll__8860,k,not_found);
});
G__8875 = function(this_sym8855,k,not_found){
switch(arguments.length){
case 2:
return G__8875__2.call(this,this_sym8855,k);
case 3:
return G__8875__3.call(this,this_sym8855,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8875;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym8838,args8839){
var this__8861 = this;
return this_sym8838.call.apply(this_sym8838,[this_sym8838].concat(args8839.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8862 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__8863 = this;
var this__8864 = this;
return cljs.core.pr_str.call(null,this__8864);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8865 = this;
if((this__8865.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__8828_SHARP_){
return cljs.core.vector.call(null,p1__8828_SHARP_,(this__8865.strobj[p1__8828_SHARP_]));
}),this__8865.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8866 = this;
return this__8866.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8867 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8868 = this;
return (new cljs.core.ObjMap(meta,this__8868.keys,this__8868.strobj,this__8868.update_count,this__8868.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8869 = this;
return this__8869.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8870 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__8870.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8871 = this;
if((function (){var and__3822__auto____8872 = goog.isString(k);
if(and__3822__auto____8872)
{return !((cljs.core.scan_array.call(null,1,k,this__8871.keys) == null));
} else
{return and__3822__auto____8872;
}
})())
{var new_keys__8873 = this__8871.keys.slice();
var new_strobj__8874 = cljs.core.obj_clone.call(null,this__8871.strobj,this__8871.keys);
new_keys__8873.splice(cljs.core.scan_array.call(null,1,k,new_keys__8873),1);
cljs.core.js_delete.call(null,new_strobj__8874,k);
return (new cljs.core.ObjMap(this__8871.meta,new_keys__8873,new_strobj__8874,(this__8871.update_count + 1),null));
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
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8879 = this;
var h__2525__auto____8880 = this__8879.__hash;
if(!((h__2525__auto____8880 == null)))
{return h__2525__auto____8880;
} else
{var h__2525__auto____8881 = cljs.core.hash_imap.call(null,coll);
this__8879.__hash = h__2525__auto____8881;
return h__2525__auto____8881;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8882 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8883 = this;
var bucket__8884 = (this__8883.hashobj[cljs.core.hash.call(null,k)]);
var i__8885 = (cljs.core.truth_(bucket__8884)?cljs.core.scan_array.call(null,2,k,bucket__8884):null);
if(cljs.core.truth_(i__8885))
{return (bucket__8884[(i__8885 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8886 = this;
var h__8887 = cljs.core.hash.call(null,k);
var bucket__8888 = (this__8886.hashobj[h__8887]);
if(cljs.core.truth_(bucket__8888))
{var new_bucket__8889 = bucket__8888.slice();
var new_hashobj__8890 = goog.object.clone(this__8886.hashobj);
(new_hashobj__8890[h__8887] = new_bucket__8889);
var temp__3971__auto____8891 = cljs.core.scan_array.call(null,2,k,new_bucket__8889);
if(cljs.core.truth_(temp__3971__auto____8891))
{var i__8892 = temp__3971__auto____8891;
(new_bucket__8889[(i__8892 + 1)] = v);
return (new cljs.core.HashMap(this__8886.meta,this__8886.count,new_hashobj__8890,null));
} else
{new_bucket__8889.push(k,v);
return (new cljs.core.HashMap(this__8886.meta,(this__8886.count + 1),new_hashobj__8890,null));
}
} else
{var new_hashobj__8893 = goog.object.clone(this__8886.hashobj);
(new_hashobj__8893[h__8887] = [k,v]);
return (new cljs.core.HashMap(this__8886.meta,(this__8886.count + 1),new_hashobj__8893,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8894 = this;
var bucket__8895 = (this__8894.hashobj[cljs.core.hash.call(null,k)]);
var i__8896 = (cljs.core.truth_(bucket__8895)?cljs.core.scan_array.call(null,2,k,bucket__8895):null);
if(cljs.core.truth_(i__8896))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__8921 = null;
var G__8921__2 = (function (this_sym8897,k){
var this__8899 = this;
var this_sym8897__8900 = this;
var coll__8901 = this_sym8897__8900;
return coll__8901.cljs$core$ILookup$_lookup$arity$2(coll__8901,k);
});
var G__8921__3 = (function (this_sym8898,k,not_found){
var this__8899 = this;
var this_sym8898__8902 = this;
var coll__8903 = this_sym8898__8902;
return coll__8903.cljs$core$ILookup$_lookup$arity$3(coll__8903,k,not_found);
});
G__8921 = function(this_sym8898,k,not_found){
switch(arguments.length){
case 2:
return G__8921__2.call(this,this_sym8898,k);
case 3:
return G__8921__3.call(this,this_sym8898,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8921;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym8877,args8878){
var this__8904 = this;
return this_sym8877.call.apply(this_sym8877,[this_sym8877].concat(args8878.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8905 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__8906 = this;
var this__8907 = this;
return cljs.core.pr_str.call(null,this__8907);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8908 = this;
if((this__8908.count > 0))
{var hashes__8909 = cljs.core.js_keys.call(null,this__8908.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__8876_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__8908.hashobj[p1__8876_SHARP_])));
}),hashes__8909);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8910 = this;
return this__8910.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8911 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8912 = this;
return (new cljs.core.HashMap(meta,this__8912.count,this__8912.hashobj,this__8912.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8913 = this;
return this__8913.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8914 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__8914.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8915 = this;
var h__8916 = cljs.core.hash.call(null,k);
var bucket__8917 = (this__8915.hashobj[h__8916]);
var i__8918 = (cljs.core.truth_(bucket__8917)?cljs.core.scan_array.call(null,2,k,bucket__8917):null);
if(cljs.core.not.call(null,i__8918))
{return coll;
} else
{var new_hashobj__8919 = goog.object.clone(this__8915.hashobj);
if((3 > bucket__8917.length))
{cljs.core.js_delete.call(null,new_hashobj__8919,h__8916);
} else
{var new_bucket__8920 = bucket__8917.slice();
new_bucket__8920.splice(i__8918,2);
(new_hashobj__8919[h__8916] = new_bucket__8920);
}
return (new cljs.core.HashMap(this__8915.meta,(this__8915.count - 1),new_hashobj__8919,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__8922 = ks.length;
var i__8923 = 0;
var out__8924 = cljs.core.HashMap.EMPTY;
while(true){
if((i__8923 < len__8922))
{{
var G__8925 = (i__8923 + 1);
var G__8926 = cljs.core.assoc.call(null,out__8924,(ks[i__8923]),(vs[i__8923]));
i__8923 = G__8925;
out__8924 = G__8926;
continue;
}
} else
{return out__8924;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__8930 = m.arr;
var len__8931 = arr__8930.length;
var i__8932 = 0;
while(true){
if((len__8931 <= i__8932))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__8930[i__8932]),k))
{return i__8932;
} else
{if("\uFDD0'else")
{{
var G__8933 = (i__8932 + 2);
i__8932 = G__8933;
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
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8936 = this;
return (new cljs.core.TransientArrayMap({},this__8936.arr.length,this__8936.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8937 = this;
var h__2525__auto____8938 = this__8937.__hash;
if(!((h__2525__auto____8938 == null)))
{return h__2525__auto____8938;
} else
{var h__2525__auto____8939 = cljs.core.hash_imap.call(null,coll);
this__8937.__hash = h__2525__auto____8939;
return h__2525__auto____8939;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8940 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8941 = this;
var idx__8942 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8942 === -1))
{return not_found;
} else
{return (this__8941.arr[(idx__8942 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8943 = this;
var idx__8944 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8944 === -1))
{if((this__8943.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__8943.meta,(this__8943.cnt + 1),(function (){var G__8945__8946 = this__8943.arr.slice();
G__8945__8946.push(k);
G__8945__8946.push(v);
return G__8945__8946;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__8943.arr[(idx__8944 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__8943.meta,this__8943.cnt,(function (){var G__8947__8948 = this__8943.arr.slice();
(G__8947__8948[(idx__8944 + 1)] = v);
return G__8947__8948;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8949 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__8981 = null;
var G__8981__2 = (function (this_sym8950,k){
var this__8952 = this;
var this_sym8950__8953 = this;
var coll__8954 = this_sym8950__8953;
return coll__8954.cljs$core$ILookup$_lookup$arity$2(coll__8954,k);
});
var G__8981__3 = (function (this_sym8951,k,not_found){
var this__8952 = this;
var this_sym8951__8955 = this;
var coll__8956 = this_sym8951__8955;
return coll__8956.cljs$core$ILookup$_lookup$arity$3(coll__8956,k,not_found);
});
G__8981 = function(this_sym8951,k,not_found){
switch(arguments.length){
case 2:
return G__8981__2.call(this,this_sym8951,k);
case 3:
return G__8981__3.call(this,this_sym8951,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8981;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym8934,args8935){
var this__8957 = this;
return this_sym8934.call.apply(this_sym8934,[this_sym8934].concat(args8935.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8958 = this;
var len__8959 = this__8958.arr.length;
var i__8960 = 0;
var init__8961 = init;
while(true){
if((i__8960 < len__8959))
{var init__8962 = f.call(null,init__8961,(this__8958.arr[i__8960]),(this__8958.arr[(i__8960 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__8962))
{return cljs.core.deref.call(null,init__8962);
} else
{{
var G__8982 = (i__8960 + 2);
var G__8983 = init__8962;
i__8960 = G__8982;
init__8961 = G__8983;
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
var this__8963 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__8964 = this;
var this__8965 = this;
return cljs.core.pr_str.call(null,this__8965);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8966 = this;
if((this__8966.cnt > 0))
{var len__8967 = this__8966.arr.length;
var array_map_seq__8968 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__8967))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__8966.arr[i]),(this__8966.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__8968.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8969 = this;
return this__8969.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8970 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8971 = this;
return (new cljs.core.PersistentArrayMap(meta,this__8971.cnt,this__8971.arr,this__8971.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8972 = this;
return this__8972.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8973 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8973.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8974 = this;
var idx__8975 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8975 >= 0))
{var len__8976 = this__8974.arr.length;
var new_len__8977 = (len__8976 - 2);
if((new_len__8977 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__8978 = cljs.core.make_array.call(null,new_len__8977);
var s__8979 = 0;
var d__8980 = 0;
while(true){
if((s__8979 >= len__8976))
{return (new cljs.core.PersistentArrayMap(this__8974.meta,(this__8974.cnt - 1),new_arr__8978,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__8974.arr[s__8979])))
{{
var G__8984 = (s__8979 + 2);
var G__8985 = d__8980;
s__8979 = G__8984;
d__8980 = G__8985;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__8978[d__8980] = (this__8974.arr[s__8979]));
(new_arr__8978[(d__8980 + 1)] = (this__8974.arr[(s__8979 + 1)]));
{
var G__8986 = (s__8979 + 2);
var G__8987 = (d__8980 + 2);
s__8979 = G__8986;
d__8980 = G__8987;
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
var len__8988 = cljs.core.count.call(null,ks);
var i__8989 = 0;
var out__8990 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__8989 < len__8988))
{{
var G__8991 = (i__8989 + 1);
var G__8992 = cljs.core.assoc_BANG_.call(null,out__8990,(ks[i__8989]),(vs[i__8989]));
i__8989 = G__8991;
out__8990 = G__8992;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8990);
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
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__8993 = this;
if(cljs.core.truth_(this__8993.editable_QMARK_))
{var idx__8994 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__8994 >= 0))
{(this__8993.arr[idx__8994] = (this__8993.arr[(this__8993.len - 2)]));
(this__8993.arr[(idx__8994 + 1)] = (this__8993.arr[(this__8993.len - 1)]));
var G__8995__8996 = this__8993.arr;
G__8995__8996.pop();
G__8995__8996.pop();
G__8995__8996;
this__8993.len = (this__8993.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8997 = this;
if(cljs.core.truth_(this__8997.editable_QMARK_))
{var idx__8998 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__8998 === -1))
{if(((this__8997.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__8997.len = (this__8997.len + 2);
this__8997.arr.push(key);
this__8997.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__8997.len,this__8997.arr),key,val);
}
} else
{if((val === (this__8997.arr[(idx__8998 + 1)])))
{return tcoll;
} else
{(this__8997.arr[(idx__8998 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8999 = this;
if(cljs.core.truth_(this__8999.editable_QMARK_))
{if((function (){var G__9000__9001 = o;
if(G__9000__9001)
{if((function (){var or__3824__auto____9002 = (G__9000__9001.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9002)
{return or__3824__auto____9002;
} else
{return G__9000__9001.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9000__9001.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9000__9001);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9000__9001);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9003 = cljs.core.seq.call(null,o);
var tcoll__9004 = tcoll;
while(true){
var temp__3971__auto____9005 = cljs.core.first.call(null,es__9003);
if(cljs.core.truth_(temp__3971__auto____9005))
{var e__9006 = temp__3971__auto____9005;
{
var G__9012 = cljs.core.next.call(null,es__9003);
var G__9013 = tcoll__9004.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__9004,cljs.core.key.call(null,e__9006),cljs.core.val.call(null,e__9006));
es__9003 = G__9012;
tcoll__9004 = G__9013;
continue;
}
} else
{return tcoll__9004;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9007 = this;
if(cljs.core.truth_(this__9007.editable_QMARK_))
{this__9007.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__9007.len,2),this__9007.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9008 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9009 = this;
if(cljs.core.truth_(this__9009.editable_QMARK_))
{var idx__9010 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__9010 === -1))
{return not_found;
} else
{return (this__9009.arr[(idx__9010 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9011 = this;
if(cljs.core.truth_(this__9011.editable_QMARK_))
{return cljs.core.quot.call(null,this__9011.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__9016 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__9017 = 0;
while(true){
if((i__9017 < len))
{{
var G__9018 = cljs.core.assoc_BANG_.call(null,out__9016,(arr[i__9017]),(arr[(i__9017 + 1)]));
var G__9019 = (i__9017 + 2);
out__9016 = G__9018;
i__9017 = G__9019;
continue;
}
} else
{return out__9016;
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
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__2643__auto__){
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
var G__9024__9025 = arr.slice();
(G__9024__9025[i] = a);
return G__9024__9025;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__9026__9027 = arr.slice();
(G__9026__9027[i] = a);
(G__9026__9027[j] = b);
return G__9026__9027;
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
var new_arr__9029 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__9029,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__9029,(2 * i),(new_arr__9029.length - (2 * i)));
return new_arr__9029;
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
var editable__9032 = inode.ensure_editable(edit);
(editable__9032.arr[i] = a);
return editable__9032;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__9033 = inode.ensure_editable(edit);
(editable__9033.arr[i] = a);
(editable__9033.arr[j] = b);
return editable__9033;
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
var len__9040 = arr.length;
var i__9041 = 0;
var init__9042 = init;
while(true){
if((i__9041 < len__9040))
{var init__9045 = (function (){var k__9043 = (arr[i__9041]);
if(!((k__9043 == null)))
{return f.call(null,init__9042,k__9043,(arr[(i__9041 + 1)]));
} else
{var node__9044 = (arr[(i__9041 + 1)]);
if(!((node__9044 == null)))
{return node__9044.kv_reduce(f,init__9042);
} else
{return init__9042;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__9045))
{return cljs.core.deref.call(null,init__9045);
} else
{{
var G__9046 = (i__9041 + 2);
var G__9047 = init__9045;
i__9041 = G__9046;
init__9042 = G__9047;
continue;
}
}
} else
{return init__9042;
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
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__9048 = this;
var inode__9049 = this;
if((this__9048.bitmap === bit))
{return null;
} else
{var editable__9050 = inode__9049.ensure_editable(e);
var earr__9051 = editable__9050.arr;
var len__9052 = earr__9051.length;
editable__9050.bitmap = (bit ^ editable__9050.bitmap);
cljs.core.array_copy.call(null,earr__9051,(2 * (i + 1)),earr__9051,(2 * i),(len__9052 - (2 * (i + 1))));
(earr__9051[(len__9052 - 2)] = null);
(earr__9051[(len__9052 - 1)] = null);
return editable__9050;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9053 = this;
var inode__9054 = this;
var bit__9055 = (1 << ((hash >>> shift) & 0x01f));
var idx__9056 = cljs.core.bitmap_indexed_node_index.call(null,this__9053.bitmap,bit__9055);
if(((this__9053.bitmap & bit__9055) === 0))
{var n__9057 = cljs.core.bit_count.call(null,this__9053.bitmap);
if(((2 * n__9057) < this__9053.arr.length))
{var editable__9058 = inode__9054.ensure_editable(edit);
var earr__9059 = editable__9058.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__9059,(2 * idx__9056),earr__9059,(2 * (idx__9056 + 1)),(2 * (n__9057 - idx__9056)));
(earr__9059[(2 * idx__9056)] = key);
(earr__9059[((2 * idx__9056) + 1)] = val);
editable__9058.bitmap = (editable__9058.bitmap | bit__9055);
return editable__9058;
} else
{if((n__9057 >= 16))
{var nodes__9060 = cljs.core.make_array.call(null,32);
var jdx__9061 = ((hash >>> shift) & 0x01f);
(nodes__9060[jdx__9061] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9062 = 0;
var j__9063 = 0;
while(true){
if((i__9062 < 32))
{if((((this__9053.bitmap >>> i__9062) & 1) === 0))
{{
var G__9116 = (i__9062 + 1);
var G__9117 = j__9063;
i__9062 = G__9116;
j__9063 = G__9117;
continue;
}
} else
{(nodes__9060[i__9062] = ((!(((this__9053.arr[j__9063]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__9053.arr[j__9063])),(this__9053.arr[j__9063]),(this__9053.arr[(j__9063 + 1)]),added_leaf_QMARK_):(this__9053.arr[(j__9063 + 1)])));
{
var G__9118 = (i__9062 + 1);
var G__9119 = (j__9063 + 2);
i__9062 = G__9118;
j__9063 = G__9119;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__9057 + 1),nodes__9060));
} else
{if("\uFDD0'else")
{var new_arr__9064 = cljs.core.make_array.call(null,(2 * (n__9057 + 4)));
cljs.core.array_copy.call(null,this__9053.arr,0,new_arr__9064,0,(2 * idx__9056));
(new_arr__9064[(2 * idx__9056)] = key);
(new_arr__9064[((2 * idx__9056) + 1)] = val);
cljs.core.array_copy.call(null,this__9053.arr,(2 * idx__9056),new_arr__9064,(2 * (idx__9056 + 1)),(2 * (n__9057 - idx__9056)));
added_leaf_QMARK_.val = true;
var editable__9065 = inode__9054.ensure_editable(edit);
editable__9065.arr = new_arr__9064;
editable__9065.bitmap = (editable__9065.bitmap | bit__9055);
return editable__9065;
} else
{return null;
}
}
}
} else
{var key_or_nil__9066 = (this__9053.arr[(2 * idx__9056)]);
var val_or_node__9067 = (this__9053.arr[((2 * idx__9056) + 1)]);
if((key_or_nil__9066 == null))
{var n__9068 = val_or_node__9067.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9068 === val_or_node__9067))
{return inode__9054;
} else
{return cljs.core.edit_and_set.call(null,inode__9054,edit,((2 * idx__9056) + 1),n__9068);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9066))
{if((val === val_or_node__9067))
{return inode__9054;
} else
{return cljs.core.edit_and_set.call(null,inode__9054,edit,((2 * idx__9056) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__9054,edit,(2 * idx__9056),null,((2 * idx__9056) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__9066,val_or_node__9067,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__9069 = this;
var inode__9070 = this;
return cljs.core.create_inode_seq.call(null,this__9069.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9071 = this;
var inode__9072 = this;
var bit__9073 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9071.bitmap & bit__9073) === 0))
{return inode__9072;
} else
{var idx__9074 = cljs.core.bitmap_indexed_node_index.call(null,this__9071.bitmap,bit__9073);
var key_or_nil__9075 = (this__9071.arr[(2 * idx__9074)]);
var val_or_node__9076 = (this__9071.arr[((2 * idx__9074) + 1)]);
if((key_or_nil__9075 == null))
{var n__9077 = val_or_node__9076.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9077 === val_or_node__9076))
{return inode__9072;
} else
{if(!((n__9077 == null)))
{return cljs.core.edit_and_set.call(null,inode__9072,edit,((2 * idx__9074) + 1),n__9077);
} else
{if((this__9071.bitmap === bit__9073))
{return null;
} else
{if("\uFDD0'else")
{return inode__9072.edit_and_remove_pair(edit,bit__9073,idx__9074);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9075))
{(removed_leaf_QMARK_[0] = true);
return inode__9072.edit_and_remove_pair(edit,bit__9073,idx__9074);
} else
{if("\uFDD0'else")
{return inode__9072;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__9078 = this;
var inode__9079 = this;
if((e === this__9078.edit))
{return inode__9079;
} else
{var n__9080 = cljs.core.bit_count.call(null,this__9078.bitmap);
var new_arr__9081 = cljs.core.make_array.call(null,(((n__9080 < 0))?4:(2 * (n__9080 + 1))));
cljs.core.array_copy.call(null,this__9078.arr,0,new_arr__9081,0,(2 * n__9080));
return (new cljs.core.BitmapIndexedNode(e,this__9078.bitmap,new_arr__9081));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__9082 = this;
var inode__9083 = this;
return cljs.core.inode_kv_reduce.call(null,this__9082.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9084 = this;
var inode__9085 = this;
var bit__9086 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9084.bitmap & bit__9086) === 0))
{return not_found;
} else
{var idx__9087 = cljs.core.bitmap_indexed_node_index.call(null,this__9084.bitmap,bit__9086);
var key_or_nil__9088 = (this__9084.arr[(2 * idx__9087)]);
var val_or_node__9089 = (this__9084.arr[((2 * idx__9087) + 1)]);
if((key_or_nil__9088 == null))
{return val_or_node__9089.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9088))
{return cljs.core.PersistentVector.fromArray([key_or_nil__9088,val_or_node__9089], true);
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
var this__9090 = this;
var inode__9091 = this;
var bit__9092 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9090.bitmap & bit__9092) === 0))
{return inode__9091;
} else
{var idx__9093 = cljs.core.bitmap_indexed_node_index.call(null,this__9090.bitmap,bit__9092);
var key_or_nil__9094 = (this__9090.arr[(2 * idx__9093)]);
var val_or_node__9095 = (this__9090.arr[((2 * idx__9093) + 1)]);
if((key_or_nil__9094 == null))
{var n__9096 = val_or_node__9095.inode_without((shift + 5),hash,key);
if((n__9096 === val_or_node__9095))
{return inode__9091;
} else
{if(!((n__9096 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__9090.bitmap,cljs.core.clone_and_set.call(null,this__9090.arr,((2 * idx__9093) + 1),n__9096)));
} else
{if((this__9090.bitmap === bit__9092))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__9090.bitmap ^ bit__9092),cljs.core.remove_pair.call(null,this__9090.arr,idx__9093)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9094))
{return (new cljs.core.BitmapIndexedNode(null,(this__9090.bitmap ^ bit__9092),cljs.core.remove_pair.call(null,this__9090.arr,idx__9093)));
} else
{if("\uFDD0'else")
{return inode__9091;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9097 = this;
var inode__9098 = this;
var bit__9099 = (1 << ((hash >>> shift) & 0x01f));
var idx__9100 = cljs.core.bitmap_indexed_node_index.call(null,this__9097.bitmap,bit__9099);
if(((this__9097.bitmap & bit__9099) === 0))
{var n__9101 = cljs.core.bit_count.call(null,this__9097.bitmap);
if((n__9101 >= 16))
{var nodes__9102 = cljs.core.make_array.call(null,32);
var jdx__9103 = ((hash >>> shift) & 0x01f);
(nodes__9102[jdx__9103] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9104 = 0;
var j__9105 = 0;
while(true){
if((i__9104 < 32))
{if((((this__9097.bitmap >>> i__9104) & 1) === 0))
{{
var G__9120 = (i__9104 + 1);
var G__9121 = j__9105;
i__9104 = G__9120;
j__9105 = G__9121;
continue;
}
} else
{(nodes__9102[i__9104] = ((!(((this__9097.arr[j__9105]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__9097.arr[j__9105])),(this__9097.arr[j__9105]),(this__9097.arr[(j__9105 + 1)]),added_leaf_QMARK_):(this__9097.arr[(j__9105 + 1)])));
{
var G__9122 = (i__9104 + 1);
var G__9123 = (j__9105 + 2);
i__9104 = G__9122;
j__9105 = G__9123;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__9101 + 1),nodes__9102));
} else
{var new_arr__9106 = cljs.core.make_array.call(null,(2 * (n__9101 + 1)));
cljs.core.array_copy.call(null,this__9097.arr,0,new_arr__9106,0,(2 * idx__9100));
(new_arr__9106[(2 * idx__9100)] = key);
(new_arr__9106[((2 * idx__9100) + 1)] = val);
cljs.core.array_copy.call(null,this__9097.arr,(2 * idx__9100),new_arr__9106,(2 * (idx__9100 + 1)),(2 * (n__9101 - idx__9100)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__9097.bitmap | bit__9099),new_arr__9106));
}
} else
{var key_or_nil__9107 = (this__9097.arr[(2 * idx__9100)]);
var val_or_node__9108 = (this__9097.arr[((2 * idx__9100) + 1)]);
if((key_or_nil__9107 == null))
{var n__9109 = val_or_node__9108.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9109 === val_or_node__9108))
{return inode__9098;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9097.bitmap,cljs.core.clone_and_set.call(null,this__9097.arr,((2 * idx__9100) + 1),n__9109)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9107))
{if((val === val_or_node__9108))
{return inode__9098;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9097.bitmap,cljs.core.clone_and_set.call(null,this__9097.arr,((2 * idx__9100) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__9097.bitmap,cljs.core.clone_and_set.call(null,this__9097.arr,(2 * idx__9100),null,((2 * idx__9100) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__9107,val_or_node__9108,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9110 = this;
var inode__9111 = this;
var bit__9112 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9110.bitmap & bit__9112) === 0))
{return not_found;
} else
{var idx__9113 = cljs.core.bitmap_indexed_node_index.call(null,this__9110.bitmap,bit__9112);
var key_or_nil__9114 = (this__9110.arr[(2 * idx__9113)]);
var val_or_node__9115 = (this__9110.arr[((2 * idx__9113) + 1)]);
if((key_or_nil__9114 == null))
{return val_or_node__9115.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9114))
{return val_or_node__9115;
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
var arr__9131 = array_node.arr;
var len__9132 = (2 * (array_node.cnt - 1));
var new_arr__9133 = cljs.core.make_array.call(null,len__9132);
var i__9134 = 0;
var j__9135 = 1;
var bitmap__9136 = 0;
while(true){
if((i__9134 < len__9132))
{if((function (){var and__3822__auto____9137 = !((i__9134 === idx));
if(and__3822__auto____9137)
{return !(((arr__9131[i__9134]) == null));
} else
{return and__3822__auto____9137;
}
})())
{(new_arr__9133[j__9135] = (arr__9131[i__9134]));
{
var G__9138 = (i__9134 + 1);
var G__9139 = (j__9135 + 2);
var G__9140 = (bitmap__9136 | (1 << i__9134));
i__9134 = G__9138;
j__9135 = G__9139;
bitmap__9136 = G__9140;
continue;
}
} else
{{
var G__9141 = (i__9134 + 1);
var G__9142 = j__9135;
var G__9143 = bitmap__9136;
i__9134 = G__9141;
j__9135 = G__9142;
bitmap__9136 = G__9143;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__9136,new_arr__9133));
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
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9144 = this;
var inode__9145 = this;
var idx__9146 = ((hash >>> shift) & 0x01f);
var node__9147 = (this__9144.arr[idx__9146]);
if((node__9147 == null))
{var editable__9148 = cljs.core.edit_and_set.call(null,inode__9145,edit,idx__9146,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__9148.cnt = (editable__9148.cnt + 1);
return editable__9148;
} else
{var n__9149 = node__9147.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9149 === node__9147))
{return inode__9145;
} else
{return cljs.core.edit_and_set.call(null,inode__9145,edit,idx__9146,n__9149);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__9150 = this;
var inode__9151 = this;
return cljs.core.create_array_node_seq.call(null,this__9150.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9152 = this;
var inode__9153 = this;
var idx__9154 = ((hash >>> shift) & 0x01f);
var node__9155 = (this__9152.arr[idx__9154]);
if((node__9155 == null))
{return inode__9153;
} else
{var n__9156 = node__9155.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9156 === node__9155))
{return inode__9153;
} else
{if((n__9156 == null))
{if((this__9152.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__9153,edit,idx__9154);
} else
{var editable__9157 = cljs.core.edit_and_set.call(null,inode__9153,edit,idx__9154,n__9156);
editable__9157.cnt = (editable__9157.cnt - 1);
return editable__9157;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__9153,edit,idx__9154,n__9156);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__9158 = this;
var inode__9159 = this;
if((e === this__9158.edit))
{return inode__9159;
} else
{return (new cljs.core.ArrayNode(e,this__9158.cnt,this__9158.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__9160 = this;
var inode__9161 = this;
var len__9162 = this__9160.arr.length;
var i__9163 = 0;
var init__9164 = init;
while(true){
if((i__9163 < len__9162))
{var node__9165 = (this__9160.arr[i__9163]);
if(!((node__9165 == null)))
{var init__9166 = node__9165.kv_reduce(f,init__9164);
if(cljs.core.reduced_QMARK_.call(null,init__9166))
{return cljs.core.deref.call(null,init__9166);
} else
{{
var G__9185 = (i__9163 + 1);
var G__9186 = init__9166;
i__9163 = G__9185;
init__9164 = G__9186;
continue;
}
}
} else
{return null;
}
} else
{return init__9164;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9167 = this;
var inode__9168 = this;
var idx__9169 = ((hash >>> shift) & 0x01f);
var node__9170 = (this__9167.arr[idx__9169]);
if(!((node__9170 == null)))
{return node__9170.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__9171 = this;
var inode__9172 = this;
var idx__9173 = ((hash >>> shift) & 0x01f);
var node__9174 = (this__9171.arr[idx__9173]);
if(!((node__9174 == null)))
{var n__9175 = node__9174.inode_without((shift + 5),hash,key);
if((n__9175 === node__9174))
{return inode__9172;
} else
{if((n__9175 == null))
{if((this__9171.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__9172,null,idx__9173);
} else
{return (new cljs.core.ArrayNode(null,(this__9171.cnt - 1),cljs.core.clone_and_set.call(null,this__9171.arr,idx__9173,n__9175)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__9171.cnt,cljs.core.clone_and_set.call(null,this__9171.arr,idx__9173,n__9175)));
} else
{return null;
}
}
}
} else
{return inode__9172;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9176 = this;
var inode__9177 = this;
var idx__9178 = ((hash >>> shift) & 0x01f);
var node__9179 = (this__9176.arr[idx__9178]);
if((node__9179 == null))
{return (new cljs.core.ArrayNode(null,(this__9176.cnt + 1),cljs.core.clone_and_set.call(null,this__9176.arr,idx__9178,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__9180 = node__9179.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9180 === node__9179))
{return inode__9177;
} else
{return (new cljs.core.ArrayNode(null,this__9176.cnt,cljs.core.clone_and_set.call(null,this__9176.arr,idx__9178,n__9180)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9181 = this;
var inode__9182 = this;
var idx__9183 = ((hash >>> shift) & 0x01f);
var node__9184 = (this__9181.arr[idx__9183]);
if(!((node__9184 == null)))
{return node__9184.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__9189 = (2 * cnt);
var i__9190 = 0;
while(true){
if((i__9190 < lim__9189))
{if(cljs.core.key_test.call(null,key,(arr[i__9190])))
{return i__9190;
} else
{{
var G__9191 = (i__9190 + 2);
i__9190 = G__9191;
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
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9192 = this;
var inode__9193 = this;
if((hash === this__9192.collision_hash))
{var idx__9194 = cljs.core.hash_collision_node_find_index.call(null,this__9192.arr,this__9192.cnt,key);
if((idx__9194 === -1))
{if((this__9192.arr.length > (2 * this__9192.cnt)))
{var editable__9195 = cljs.core.edit_and_set.call(null,inode__9193,edit,(2 * this__9192.cnt),key,((2 * this__9192.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__9195.cnt = (editable__9195.cnt + 1);
return editable__9195;
} else
{var len__9196 = this__9192.arr.length;
var new_arr__9197 = cljs.core.make_array.call(null,(len__9196 + 2));
cljs.core.array_copy.call(null,this__9192.arr,0,new_arr__9197,0,len__9196);
(new_arr__9197[len__9196] = key);
(new_arr__9197[(len__9196 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__9193.ensure_editable_array(edit,(this__9192.cnt + 1),new_arr__9197);
}
} else
{if(((this__9192.arr[(idx__9194 + 1)]) === val))
{return inode__9193;
} else
{return cljs.core.edit_and_set.call(null,inode__9193,edit,(idx__9194 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__9192.collision_hash >>> shift) & 0x01f)),[null,inode__9193,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__9198 = this;
var inode__9199 = this;
return cljs.core.create_inode_seq.call(null,this__9198.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9200 = this;
var inode__9201 = this;
var idx__9202 = cljs.core.hash_collision_node_find_index.call(null,this__9200.arr,this__9200.cnt,key);
if((idx__9202 === -1))
{return inode__9201;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__9200.cnt === 1))
{return null;
} else
{var editable__9203 = inode__9201.ensure_editable(edit);
var earr__9204 = editable__9203.arr;
(earr__9204[idx__9202] = (earr__9204[((2 * this__9200.cnt) - 2)]));
(earr__9204[(idx__9202 + 1)] = (earr__9204[((2 * this__9200.cnt) - 1)]));
(earr__9204[((2 * this__9200.cnt) - 1)] = null);
(earr__9204[((2 * this__9200.cnt) - 2)] = null);
editable__9203.cnt = (editable__9203.cnt - 1);
return editable__9203;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__9205 = this;
var inode__9206 = this;
if((e === this__9205.edit))
{return inode__9206;
} else
{var new_arr__9207 = cljs.core.make_array.call(null,(2 * (this__9205.cnt + 1)));
cljs.core.array_copy.call(null,this__9205.arr,0,new_arr__9207,0,(2 * this__9205.cnt));
return (new cljs.core.HashCollisionNode(e,this__9205.collision_hash,this__9205.cnt,new_arr__9207));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__9208 = this;
var inode__9209 = this;
return cljs.core.inode_kv_reduce.call(null,this__9208.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9210 = this;
var inode__9211 = this;
var idx__9212 = cljs.core.hash_collision_node_find_index.call(null,this__9210.arr,this__9210.cnt,key);
if((idx__9212 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__9210.arr[idx__9212])))
{return cljs.core.PersistentVector.fromArray([(this__9210.arr[idx__9212]),(this__9210.arr[(idx__9212 + 1)])], true);
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
var this__9213 = this;
var inode__9214 = this;
var idx__9215 = cljs.core.hash_collision_node_find_index.call(null,this__9213.arr,this__9213.cnt,key);
if((idx__9215 === -1))
{return inode__9214;
} else
{if((this__9213.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__9213.collision_hash,(this__9213.cnt - 1),cljs.core.remove_pair.call(null,this__9213.arr,cljs.core.quot.call(null,idx__9215,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9216 = this;
var inode__9217 = this;
if((hash === this__9216.collision_hash))
{var idx__9218 = cljs.core.hash_collision_node_find_index.call(null,this__9216.arr,this__9216.cnt,key);
if((idx__9218 === -1))
{var len__9219 = this__9216.arr.length;
var new_arr__9220 = cljs.core.make_array.call(null,(len__9219 + 2));
cljs.core.array_copy.call(null,this__9216.arr,0,new_arr__9220,0,len__9219);
(new_arr__9220[len__9219] = key);
(new_arr__9220[(len__9219 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__9216.collision_hash,(this__9216.cnt + 1),new_arr__9220));
} else
{if(cljs.core._EQ_.call(null,(this__9216.arr[idx__9218]),val))
{return inode__9217;
} else
{return (new cljs.core.HashCollisionNode(null,this__9216.collision_hash,this__9216.cnt,cljs.core.clone_and_set.call(null,this__9216.arr,(idx__9218 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__9216.collision_hash >>> shift) & 0x01f)),[null,inode__9217])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9221 = this;
var inode__9222 = this;
var idx__9223 = cljs.core.hash_collision_node_find_index.call(null,this__9221.arr,this__9221.cnt,key);
if((idx__9223 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__9221.arr[idx__9223])))
{return (this__9221.arr[(idx__9223 + 1)]);
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
var this__9224 = this;
var inode__9225 = this;
if((e === this__9224.edit))
{this__9224.arr = array;
this__9224.cnt = count;
return inode__9225;
} else
{return (new cljs.core.HashCollisionNode(this__9224.edit,this__9224.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__9230 = cljs.core.hash.call(null,key1);
if((key1hash__9230 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9230,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9231 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__9230,key1,val1,added_leaf_QMARK___9231).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___9231);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__9232 = cljs.core.hash.call(null,key1);
if((key1hash__9232 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9232,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9233 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__9232,key1,val1,added_leaf_QMARK___9233).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___9233);
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
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9234 = this;
var h__2525__auto____9235 = this__9234.__hash;
if(!((h__2525__auto____9235 == null)))
{return h__2525__auto____9235;
} else
{var h__2525__auto____9236 = cljs.core.hash_coll.call(null,coll);
this__9234.__hash = h__2525__auto____9236;
return h__2525__auto____9236;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9237 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__9238 = this;
var this__9239 = this;
return cljs.core.pr_str.call(null,this__9239);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9240 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9241 = this;
if((this__9241.s == null))
{return cljs.core.PersistentVector.fromArray([(this__9241.nodes[this__9241.i]),(this__9241.nodes[(this__9241.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__9241.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9242 = this;
if((this__9242.s == null))
{return cljs.core.create_inode_seq.call(null,this__9242.nodes,(this__9242.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__9242.nodes,this__9242.i,cljs.core.next.call(null,this__9242.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9243 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9244 = this;
return (new cljs.core.NodeSeq(meta,this__9244.nodes,this__9244.i,this__9244.s,this__9244.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9245 = this;
return this__9245.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9246 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9246.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__9253 = nodes.length;
var j__9254 = i;
while(true){
if((j__9254 < len__9253))
{if(!(((nodes[j__9254]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__9254,null,null));
} else
{var temp__3971__auto____9255 = (nodes[(j__9254 + 1)]);
if(cljs.core.truth_(temp__3971__auto____9255))
{var node__9256 = temp__3971__auto____9255;
var temp__3971__auto____9257 = node__9256.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9257))
{var node_seq__9258 = temp__3971__auto____9257;
return (new cljs.core.NodeSeq(null,nodes,(j__9254 + 2),node_seq__9258,null));
} else
{{
var G__9259 = (j__9254 + 2);
j__9254 = G__9259;
continue;
}
}
} else
{{
var G__9260 = (j__9254 + 2);
j__9254 = G__9260;
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
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9261 = this;
var h__2525__auto____9262 = this__9261.__hash;
if(!((h__2525__auto____9262 == null)))
{return h__2525__auto____9262;
} else
{var h__2525__auto____9263 = cljs.core.hash_coll.call(null,coll);
this__9261.__hash = h__2525__auto____9263;
return h__2525__auto____9263;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9264 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__9265 = this;
var this__9266 = this;
return cljs.core.pr_str.call(null,this__9266);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9267 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9268 = this;
return cljs.core.first.call(null,this__9268.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9269 = this;
return cljs.core.create_array_node_seq.call(null,null,this__9269.nodes,this__9269.i,cljs.core.next.call(null,this__9269.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9270 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9271 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__9271.nodes,this__9271.i,this__9271.s,this__9271.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9272 = this;
return this__9272.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9273 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9273.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__9280 = nodes.length;
var j__9281 = i;
while(true){
if((j__9281 < len__9280))
{var temp__3971__auto____9282 = (nodes[j__9281]);
if(cljs.core.truth_(temp__3971__auto____9282))
{var nj__9283 = temp__3971__auto____9282;
var temp__3971__auto____9284 = nj__9283.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9284))
{var ns__9285 = temp__3971__auto____9284;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__9281 + 1),ns__9285,null));
} else
{{
var G__9286 = (j__9281 + 1);
j__9281 = G__9286;
continue;
}
}
} else
{{
var G__9287 = (j__9281 + 1);
j__9281 = G__9287;
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
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9290 = this;
return (new cljs.core.TransientHashMap({},this__9290.root,this__9290.cnt,this__9290.has_nil_QMARK_,this__9290.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9291 = this;
var h__2525__auto____9292 = this__9291.__hash;
if(!((h__2525__auto____9292 == null)))
{return h__2525__auto____9292;
} else
{var h__2525__auto____9293 = cljs.core.hash_imap.call(null,coll);
this__9291.__hash = h__2525__auto____9293;
return h__2525__auto____9293;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9294 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9295 = this;
if((k == null))
{if(this__9295.has_nil_QMARK_)
{return this__9295.nil_val;
} else
{return not_found;
}
} else
{if((this__9295.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__9295.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9296 = this;
if((k == null))
{if((function (){var and__3822__auto____9297 = this__9296.has_nil_QMARK_;
if(and__3822__auto____9297)
{return (v === this__9296.nil_val);
} else
{return and__3822__auto____9297;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9296.meta,((this__9296.has_nil_QMARK_)?this__9296.cnt:(this__9296.cnt + 1)),this__9296.root,true,v,null));
}
} else
{var added_leaf_QMARK___9298 = (new cljs.core.Box(false));
var new_root__9299 = (((this__9296.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9296.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9298);
if((new_root__9299 === this__9296.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9296.meta,((added_leaf_QMARK___9298.val)?(this__9296.cnt + 1):this__9296.cnt),new_root__9299,this__9296.has_nil_QMARK_,this__9296.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9300 = this;
if((k == null))
{return this__9300.has_nil_QMARK_;
} else
{if((this__9300.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__9300.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__9323 = null;
var G__9323__2 = (function (this_sym9301,k){
var this__9303 = this;
var this_sym9301__9304 = this;
var coll__9305 = this_sym9301__9304;
return coll__9305.cljs$core$ILookup$_lookup$arity$2(coll__9305,k);
});
var G__9323__3 = (function (this_sym9302,k,not_found){
var this__9303 = this;
var this_sym9302__9306 = this;
var coll__9307 = this_sym9302__9306;
return coll__9307.cljs$core$ILookup$_lookup$arity$3(coll__9307,k,not_found);
});
G__9323 = function(this_sym9302,k,not_found){
switch(arguments.length){
case 2:
return G__9323__2.call(this,this_sym9302,k);
case 3:
return G__9323__3.call(this,this_sym9302,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9323;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym9288,args9289){
var this__9308 = this;
return this_sym9288.call.apply(this_sym9288,[this_sym9288].concat(args9289.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9309 = this;
var init__9310 = ((this__9309.has_nil_QMARK_)?f.call(null,init,null,this__9309.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__9310))
{return cljs.core.deref.call(null,init__9310);
} else
{if(!((this__9309.root == null)))
{return this__9309.root.kv_reduce(f,init__9310);
} else
{if("\uFDD0'else")
{return init__9310;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9311 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__9312 = this;
var this__9313 = this;
return cljs.core.pr_str.call(null,this__9313);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9314 = this;
if((this__9314.cnt > 0))
{var s__9315 = ((!((this__9314.root == null)))?this__9314.root.inode_seq():null);
if(this__9314.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__9314.nil_val], true),s__9315);
} else
{return s__9315;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9316 = this;
return this__9316.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9317 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9318 = this;
return (new cljs.core.PersistentHashMap(meta,this__9318.cnt,this__9318.root,this__9318.has_nil_QMARK_,this__9318.nil_val,this__9318.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9319 = this;
return this__9319.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9320 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__9320.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9321 = this;
if((k == null))
{if(this__9321.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__9321.meta,(this__9321.cnt - 1),this__9321.root,false,null,null));
} else
{return coll;
}
} else
{if((this__9321.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__9322 = this__9321.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__9322 === this__9321.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9321.meta,(this__9321.cnt - 1),new_root__9322,this__9321.has_nil_QMARK_,this__9321.nil_val,null));
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
var len__9324 = ks.length;
var i__9325 = 0;
var out__9326 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__9325 < len__9324))
{{
var G__9327 = (i__9325 + 1);
var G__9328 = cljs.core.assoc_BANG_.call(null,out__9326,(ks[i__9325]),(vs[i__9325]));
i__9325 = G__9327;
out__9326 = G__9328;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9326);
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
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__9329 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9330 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__9331 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9332 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9333 = this;
if((k == null))
{if(this__9333.has_nil_QMARK_)
{return this__9333.nil_val;
} else
{return null;
}
} else
{if((this__9333.root == null))
{return null;
} else
{return this__9333.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9334 = this;
if((k == null))
{if(this__9334.has_nil_QMARK_)
{return this__9334.nil_val;
} else
{return not_found;
}
} else
{if((this__9334.root == null))
{return not_found;
} else
{return this__9334.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9335 = this;
if(this__9335.edit)
{return this__9335.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__9336 = this;
var tcoll__9337 = this;
if(this__9336.edit)
{if((function (){var G__9338__9339 = o;
if(G__9338__9339)
{if((function (){var or__3824__auto____9340 = (G__9338__9339.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9340)
{return or__3824__auto____9340;
} else
{return G__9338__9339.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9338__9339.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9338__9339);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9338__9339);
}
})())
{return tcoll__9337.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9341 = cljs.core.seq.call(null,o);
var tcoll__9342 = tcoll__9337;
while(true){
var temp__3971__auto____9343 = cljs.core.first.call(null,es__9341);
if(cljs.core.truth_(temp__3971__auto____9343))
{var e__9344 = temp__3971__auto____9343;
{
var G__9355 = cljs.core.next.call(null,es__9341);
var G__9356 = tcoll__9342.assoc_BANG_(cljs.core.key.call(null,e__9344),cljs.core.val.call(null,e__9344));
es__9341 = G__9355;
tcoll__9342 = G__9356;
continue;
}
} else
{return tcoll__9342;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__9345 = this;
var tcoll__9346 = this;
if(this__9345.edit)
{if((k == null))
{if((this__9345.nil_val === v))
{} else
{this__9345.nil_val = v;
}
if(this__9345.has_nil_QMARK_)
{} else
{this__9345.count = (this__9345.count + 1);
this__9345.has_nil_QMARK_ = true;
}
return tcoll__9346;
} else
{var added_leaf_QMARK___9347 = (new cljs.core.Box(false));
var node__9348 = (((this__9345.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9345.root).inode_assoc_BANG_(this__9345.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9347);
if((node__9348 === this__9345.root))
{} else
{this__9345.root = node__9348;
}
if(added_leaf_QMARK___9347.val)
{this__9345.count = (this__9345.count + 1);
} else
{}
return tcoll__9346;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__9349 = this;
var tcoll__9350 = this;
if(this__9349.edit)
{if((k == null))
{if(this__9349.has_nil_QMARK_)
{this__9349.has_nil_QMARK_ = false;
this__9349.nil_val = null;
this__9349.count = (this__9349.count - 1);
return tcoll__9350;
} else
{return tcoll__9350;
}
} else
{if((this__9349.root == null))
{return tcoll__9350;
} else
{var removed_leaf_QMARK___9351 = (new cljs.core.Box(false));
var node__9352 = this__9349.root.inode_without_BANG_(this__9349.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___9351);
if((node__9352 === this__9349.root))
{} else
{this__9349.root = node__9352;
}
if(cljs.core.truth_((removed_leaf_QMARK___9351[0])))
{this__9349.count = (this__9349.count - 1);
} else
{}
return tcoll__9350;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__9353 = this;
var tcoll__9354 = this;
if(this__9353.edit)
{this__9353.edit = null;
return (new cljs.core.PersistentHashMap(null,this__9353.count,this__9353.root,this__9353.has_nil_QMARK_,this__9353.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__9359 = node;
var stack__9360 = stack;
while(true){
if(!((t__9359 == null)))
{{
var G__9361 = ((ascending_QMARK_)?t__9359.left:t__9359.right);
var G__9362 = cljs.core.conj.call(null,stack__9360,t__9359);
t__9359 = G__9361;
stack__9360 = G__9362;
continue;
}
} else
{return stack__9360;
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
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9363 = this;
var h__2525__auto____9364 = this__9363.__hash;
if(!((h__2525__auto____9364 == null)))
{return h__2525__auto____9364;
} else
{var h__2525__auto____9365 = cljs.core.hash_coll.call(null,coll);
this__9363.__hash = h__2525__auto____9365;
return h__2525__auto____9365;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9366 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__9367 = this;
var this__9368 = this;
return cljs.core.pr_str.call(null,this__9368);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9369 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9370 = this;
if((this__9370.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__9370.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__9371 = this;
return cljs.core.peek.call(null,this__9371.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__9372 = this;
var t__9373 = cljs.core.first.call(null,this__9372.stack);
var next_stack__9374 = cljs.core.tree_map_seq_push.call(null,((this__9372.ascending_QMARK_)?t__9373.right:t__9373.left),cljs.core.next.call(null,this__9372.stack),this__9372.ascending_QMARK_);
if(!((next_stack__9374 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__9374,this__9372.ascending_QMARK_,(this__9372.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9375 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9376 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__9376.stack,this__9376.ascending_QMARK_,this__9376.cnt,this__9376.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9377 = this;
return this__9377.meta;
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
{if((function (){var and__3822__auto____9379 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____9379)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____9379;
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
{if((function (){var and__3822__auto____9381 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____9381)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____9381;
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
var init__9385 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__9385))
{return cljs.core.deref.call(null,init__9385);
} else
{var init__9386 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__9385):init__9385);
if(cljs.core.reduced_QMARK_.call(null,init__9386))
{return cljs.core.deref.call(null,init__9386);
} else
{var init__9387 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__9386):init__9386);
if(cljs.core.reduced_QMARK_.call(null,init__9387))
{return cljs.core.deref.call(null,init__9387);
} else
{return init__9387;
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
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9390 = this;
var h__2525__auto____9391 = this__9390.__hash;
if(!((h__2525__auto____9391 == null)))
{return h__2525__auto____9391;
} else
{var h__2525__auto____9392 = cljs.core.hash_coll.call(null,coll);
this__9390.__hash = h__2525__auto____9392;
return h__2525__auto____9392;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9393 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9394 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9395 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9395.key,this__9395.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__9443 = null;
var G__9443__2 = (function (this_sym9396,k){
var this__9398 = this;
var this_sym9396__9399 = this;
var node__9400 = this_sym9396__9399;
return node__9400.cljs$core$ILookup$_lookup$arity$2(node__9400,k);
});
var G__9443__3 = (function (this_sym9397,k,not_found){
var this__9398 = this;
var this_sym9397__9401 = this;
var node__9402 = this_sym9397__9401;
return node__9402.cljs$core$ILookup$_lookup$arity$3(node__9402,k,not_found);
});
G__9443 = function(this_sym9397,k,not_found){
switch(arguments.length){
case 2:
return G__9443__2.call(this,this_sym9397,k);
case 3:
return G__9443__3.call(this,this_sym9397,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9443;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym9388,args9389){
var this__9403 = this;
return this_sym9388.call.apply(this_sym9388,[this_sym9388].concat(args9389.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9404 = this;
return cljs.core.PersistentVector.fromArray([this__9404.key,this__9404.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9405 = this;
return this__9405.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9406 = this;
return this__9406.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__9407 = this;
var node__9408 = this;
return ins.balance_right(node__9408);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__9409 = this;
var node__9410 = this;
return (new cljs.core.RedNode(this__9409.key,this__9409.val,this__9409.left,this__9409.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__9411 = this;
var node__9412 = this;
return cljs.core.balance_right_del.call(null,this__9411.key,this__9411.val,this__9411.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__9413 = this;
var node__9414 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__9415 = this;
var node__9416 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9416,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__9417 = this;
var node__9418 = this;
return cljs.core.balance_left_del.call(null,this__9417.key,this__9417.val,del,this__9417.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__9419 = this;
var node__9420 = this;
return ins.balance_left(node__9420);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__9421 = this;
var node__9422 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__9422,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__9444 = null;
var G__9444__0 = (function (){
var this__9423 = this;
var this__9425 = this;
return cljs.core.pr_str.call(null,this__9425);
});
G__9444 = function(){
switch(arguments.length){
case 0:
return G__9444__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9444;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__9426 = this;
var node__9427 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9427,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__9428 = this;
var node__9429 = this;
return node__9429;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9430 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9431 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9432 = this;
return cljs.core.list.call(null,this__9432.key,this__9432.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9433 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9434 = this;
return this__9434.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9435 = this;
return cljs.core.PersistentVector.fromArray([this__9435.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9436 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9436.key,this__9436.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9437 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9438 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9438.key,this__9438.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9439 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9440 = this;
if((n === 0))
{return this__9440.key;
} else
{if((n === 1))
{return this__9440.val;
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
var this__9441 = this;
if((n === 0))
{return this__9441.key;
} else
{if((n === 1))
{return this__9441.val;
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
var this__9442 = this;
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
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9447 = this;
var h__2525__auto____9448 = this__9447.__hash;
if(!((h__2525__auto____9448 == null)))
{return h__2525__auto____9448;
} else
{var h__2525__auto____9449 = cljs.core.hash_coll.call(null,coll);
this__9447.__hash = h__2525__auto____9449;
return h__2525__auto____9449;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9450 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9451 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9452 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9452.key,this__9452.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__9500 = null;
var G__9500__2 = (function (this_sym9453,k){
var this__9455 = this;
var this_sym9453__9456 = this;
var node__9457 = this_sym9453__9456;
return node__9457.cljs$core$ILookup$_lookup$arity$2(node__9457,k);
});
var G__9500__3 = (function (this_sym9454,k,not_found){
var this__9455 = this;
var this_sym9454__9458 = this;
var node__9459 = this_sym9454__9458;
return node__9459.cljs$core$ILookup$_lookup$arity$3(node__9459,k,not_found);
});
G__9500 = function(this_sym9454,k,not_found){
switch(arguments.length){
case 2:
return G__9500__2.call(this,this_sym9454,k);
case 3:
return G__9500__3.call(this,this_sym9454,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9500;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym9445,args9446){
var this__9460 = this;
return this_sym9445.call.apply(this_sym9445,[this_sym9445].concat(args9446.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9461 = this;
return cljs.core.PersistentVector.fromArray([this__9461.key,this__9461.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9462 = this;
return this__9462.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9463 = this;
return this__9463.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__9464 = this;
var node__9465 = this;
return (new cljs.core.RedNode(this__9464.key,this__9464.val,this__9464.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__9466 = this;
var node__9467 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__9468 = this;
var node__9469 = this;
return (new cljs.core.RedNode(this__9468.key,this__9468.val,this__9468.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__9470 = this;
var node__9471 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__9472 = this;
var node__9473 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9473,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__9474 = this;
var node__9475 = this;
return (new cljs.core.RedNode(this__9474.key,this__9474.val,del,this__9474.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__9476 = this;
var node__9477 = this;
return (new cljs.core.RedNode(this__9476.key,this__9476.val,ins,this__9476.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__9478 = this;
var node__9479 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9478.left))
{return (new cljs.core.RedNode(this__9478.key,this__9478.val,this__9478.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__9478.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9478.right))
{return (new cljs.core.RedNode(this__9478.right.key,this__9478.right.val,(new cljs.core.BlackNode(this__9478.key,this__9478.val,this__9478.left,this__9478.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__9478.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__9479,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__9501 = null;
var G__9501__0 = (function (){
var this__9480 = this;
var this__9482 = this;
return cljs.core.pr_str.call(null,this__9482);
});
G__9501 = function(){
switch(arguments.length){
case 0:
return G__9501__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9501;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__9483 = this;
var node__9484 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9483.right))
{return (new cljs.core.RedNode(this__9483.key,this__9483.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9483.left,null)),this__9483.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9483.left))
{return (new cljs.core.RedNode(this__9483.left.key,this__9483.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9483.left.left,null)),(new cljs.core.BlackNode(this__9483.key,this__9483.val,this__9483.left.right,this__9483.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9484,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__9485 = this;
var node__9486 = this;
return (new cljs.core.BlackNode(this__9485.key,this__9485.val,this__9485.left,this__9485.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9487 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9488 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9489 = this;
return cljs.core.list.call(null,this__9489.key,this__9489.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9490 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9491 = this;
return this__9491.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9492 = this;
return cljs.core.PersistentVector.fromArray([this__9492.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9493 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9493.key,this__9493.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9494 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9495 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9495.key,this__9495.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9496 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9497 = this;
if((n === 0))
{return this__9497.key;
} else
{if((n === 1))
{return this__9497.val;
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
var this__9498 = this;
if((n === 0))
{return this__9498.key;
} else
{if((n === 1))
{return this__9498.val;
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
var this__9499 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__9505 = comp.call(null,k,tree.key);
if((c__9505 === 0))
{(found[0] = tree);
return null;
} else
{if((c__9505 < 0))
{var ins__9506 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__9506 == null)))
{return tree.add_left(ins__9506);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__9507 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__9507 == null)))
{return tree.add_right(ins__9507);
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
{var app__9510 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9510))
{return (new cljs.core.RedNode(app__9510.key,app__9510.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__9510.left,null)),(new cljs.core.RedNode(right.key,right.val,app__9510.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__9510,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__9511 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9511))
{return (new cljs.core.RedNode(app__9511.key,app__9511.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__9511.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__9511.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__9511,right.right,null)));
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
{var c__9517 = comp.call(null,k,tree.key);
if((c__9517 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__9517 < 0))
{var del__9518 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____9519 = !((del__9518 == null));
if(or__3824__auto____9519)
{return or__3824__auto____9519;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__9518,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__9518,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__9520 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____9521 = !((del__9520 == null));
if(or__3824__auto____9521)
{return or__3824__auto____9521;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__9520);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__9520,null));
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
var tk__9524 = tree.key;
var c__9525 = comp.call(null,k,tk__9524);
if((c__9525 === 0))
{return tree.replace(tk__9524,v,tree.left,tree.right);
} else
{if((c__9525 < 0))
{return tree.replace(tk__9524,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__9524,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9528 = this;
var h__2525__auto____9529 = this__9528.__hash;
if(!((h__2525__auto____9529 == null)))
{return h__2525__auto____9529;
} else
{var h__2525__auto____9530 = cljs.core.hash_imap.call(null,coll);
this__9528.__hash = h__2525__auto____9530;
return h__2525__auto____9530;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9531 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9532 = this;
var n__9533 = coll.entry_at(k);
if(!((n__9533 == null)))
{return n__9533.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9534 = this;
var found__9535 = [null];
var t__9536 = cljs.core.tree_map_add.call(null,this__9534.comp,this__9534.tree,k,v,found__9535);
if((t__9536 == null))
{var found_node__9537 = cljs.core.nth.call(null,found__9535,0);
if(cljs.core._EQ_.call(null,v,found_node__9537.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9534.comp,cljs.core.tree_map_replace.call(null,this__9534.comp,this__9534.tree,k,v),this__9534.cnt,this__9534.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9534.comp,t__9536.blacken(),(this__9534.cnt + 1),this__9534.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9538 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__9572 = null;
var G__9572__2 = (function (this_sym9539,k){
var this__9541 = this;
var this_sym9539__9542 = this;
var coll__9543 = this_sym9539__9542;
return coll__9543.cljs$core$ILookup$_lookup$arity$2(coll__9543,k);
});
var G__9572__3 = (function (this_sym9540,k,not_found){
var this__9541 = this;
var this_sym9540__9544 = this;
var coll__9545 = this_sym9540__9544;
return coll__9545.cljs$core$ILookup$_lookup$arity$3(coll__9545,k,not_found);
});
G__9572 = function(this_sym9540,k,not_found){
switch(arguments.length){
case 2:
return G__9572__2.call(this,this_sym9540,k);
case 3:
return G__9572__3.call(this,this_sym9540,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9572;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym9526,args9527){
var this__9546 = this;
return this_sym9526.call.apply(this_sym9526,[this_sym9526].concat(args9527.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9547 = this;
if(!((this__9547.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__9547.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9548 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9549 = this;
if((this__9549.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9549.tree,false,this__9549.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__9550 = this;
var this__9551 = this;
return cljs.core.pr_str.call(null,this__9551);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__9552 = this;
var coll__9553 = this;
var t__9554 = this__9552.tree;
while(true){
if(!((t__9554 == null)))
{var c__9555 = this__9552.comp.call(null,k,t__9554.key);
if((c__9555 === 0))
{return t__9554;
} else
{if((c__9555 < 0))
{{
var G__9573 = t__9554.left;
t__9554 = G__9573;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__9574 = t__9554.right;
t__9554 = G__9574;
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
var this__9556 = this;
if((this__9556.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9556.tree,ascending_QMARK_,this__9556.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9557 = this;
if((this__9557.cnt > 0))
{var stack__9558 = null;
var t__9559 = this__9557.tree;
while(true){
if(!((t__9559 == null)))
{var c__9560 = this__9557.comp.call(null,k,t__9559.key);
if((c__9560 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__9558,t__9559),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__9560 < 0))
{{
var G__9575 = cljs.core.conj.call(null,stack__9558,t__9559);
var G__9576 = t__9559.left;
stack__9558 = G__9575;
t__9559 = G__9576;
continue;
}
} else
{{
var G__9577 = stack__9558;
var G__9578 = t__9559.right;
stack__9558 = G__9577;
t__9559 = G__9578;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__9560 > 0))
{{
var G__9579 = cljs.core.conj.call(null,stack__9558,t__9559);
var G__9580 = t__9559.right;
stack__9558 = G__9579;
t__9559 = G__9580;
continue;
}
} else
{{
var G__9581 = stack__9558;
var G__9582 = t__9559.left;
stack__9558 = G__9581;
t__9559 = G__9582;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__9558 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__9558,ascending_QMARK_,-1,null));
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
var this__9561 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9562 = this;
return this__9562.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9563 = this;
if((this__9563.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9563.tree,true,this__9563.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9564 = this;
return this__9564.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9565 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9566 = this;
return (new cljs.core.PersistentTreeMap(this__9566.comp,this__9566.tree,this__9566.cnt,meta,this__9566.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9567 = this;
return this__9567.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9568 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__9568.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9569 = this;
var found__9570 = [null];
var t__9571 = cljs.core.tree_map_remove.call(null,this__9569.comp,this__9569.tree,k,found__9570);
if((t__9571 == null))
{if((cljs.core.nth.call(null,found__9570,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9569.comp,null,0,this__9569.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9569.comp,t__9571.blacken(),(this__9569.cnt - 1),this__9569.meta,null));
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
var in__9585 = cljs.core.seq.call(null,keyvals);
var out__9586 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__9585)
{{
var G__9587 = cljs.core.nnext.call(null,in__9585);
var G__9588 = cljs.core.assoc_BANG_.call(null,out__9586,cljs.core.first.call(null,in__9585),cljs.core.second.call(null,in__9585));
in__9585 = G__9587;
out__9586 = G__9588;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9586);
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
hash_map.cljs$lang$applyTo = (function (arglist__9589){
var keyvals = cljs.core.seq(arglist__9589);;
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
array_map.cljs$lang$applyTo = (function (arglist__9590){
var keyvals = cljs.core.seq(arglist__9590);;
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
var ks__9594 = [];
var obj__9595 = {};
var kvs__9596 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__9596)
{ks__9594.push(cljs.core.first.call(null,kvs__9596));
(obj__9595[cljs.core.first.call(null,kvs__9596)] = cljs.core.second.call(null,kvs__9596));
{
var G__9597 = cljs.core.nnext.call(null,kvs__9596);
kvs__9596 = G__9597;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__9594,obj__9595);
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
obj_map.cljs$lang$applyTo = (function (arglist__9598){
var keyvals = cljs.core.seq(arglist__9598);;
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
var in__9601 = cljs.core.seq.call(null,keyvals);
var out__9602 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__9601)
{{
var G__9603 = cljs.core.nnext.call(null,in__9601);
var G__9604 = cljs.core.assoc.call(null,out__9602,cljs.core.first.call(null,in__9601),cljs.core.second.call(null,in__9601));
in__9601 = G__9603;
out__9602 = G__9604;
continue;
}
} else
{return out__9602;
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
sorted_map.cljs$lang$applyTo = (function (arglist__9605){
var keyvals = cljs.core.seq(arglist__9605);;
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
var in__9608 = cljs.core.seq.call(null,keyvals);
var out__9609 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__9608)
{{
var G__9610 = cljs.core.nnext.call(null,in__9608);
var G__9611 = cljs.core.assoc.call(null,out__9609,cljs.core.first.call(null,in__9608),cljs.core.second.call(null,in__9608));
in__9608 = G__9610;
out__9609 = G__9611;
continue;
}
} else
{return out__9609;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__9612){
var comparator = cljs.core.first(arglist__9612);
var keyvals = cljs.core.rest(arglist__9612);
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
{return cljs.core.reduce.call(null,(function (p1__9613_SHARP_,p2__9614_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____9616 = p1__9613_SHARP_;
if(cljs.core.truth_(or__3824__auto____9616))
{return or__3824__auto____9616;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__9614_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__9617){
var maps = cljs.core.seq(arglist__9617);;
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
{var merge_entry__9625 = (function (m,e){
var k__9623 = cljs.core.first.call(null,e);
var v__9624 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__9623))
{return cljs.core.assoc.call(null,m,k__9623,f.call(null,cljs.core._lookup.call(null,m,k__9623,null),v__9624));
} else
{return cljs.core.assoc.call(null,m,k__9623,v__9624);
}
});
var merge2__9627 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__9625,(function (){var or__3824__auto____9626 = m1;
if(cljs.core.truth_(or__3824__auto____9626))
{return or__3824__auto____9626;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__9627,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__9628){
var f = cljs.core.first(arglist__9628);
var maps = cljs.core.rest(arglist__9628);
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
var ret__9633 = cljs.core.ObjMap.EMPTY;
var keys__9634 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__9634)
{var key__9635 = cljs.core.first.call(null,keys__9634);
var entry__9636 = cljs.core._lookup.call(null,map,key__9635,"\uFDD0'user/not-found");
{
var G__9637 = ((cljs.core.not_EQ_.call(null,entry__9636,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__9633,key__9635,entry__9636):ret__9633);
var G__9638 = cljs.core.next.call(null,keys__9634);
ret__9633 = G__9637;
keys__9634 = G__9638;
continue;
}
} else
{return ret__9633;
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
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9642 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__9642.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9643 = this;
var h__2525__auto____9644 = this__9643.__hash;
if(!((h__2525__auto____9644 == null)))
{return h__2525__auto____9644;
} else
{var h__2525__auto____9645 = cljs.core.hash_iset.call(null,coll);
this__9643.__hash = h__2525__auto____9645;
return h__2525__auto____9645;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9646 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9647 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9647.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__9668 = null;
var G__9668__2 = (function (this_sym9648,k){
var this__9650 = this;
var this_sym9648__9651 = this;
var coll__9652 = this_sym9648__9651;
return coll__9652.cljs$core$ILookup$_lookup$arity$2(coll__9652,k);
});
var G__9668__3 = (function (this_sym9649,k,not_found){
var this__9650 = this;
var this_sym9649__9653 = this;
var coll__9654 = this_sym9649__9653;
return coll__9654.cljs$core$ILookup$_lookup$arity$3(coll__9654,k,not_found);
});
G__9668 = function(this_sym9649,k,not_found){
switch(arguments.length){
case 2:
return G__9668__2.call(this,this_sym9649,k);
case 3:
return G__9668__3.call(this,this_sym9649,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9668;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym9640,args9641){
var this__9655 = this;
return this_sym9640.call.apply(this_sym9640,[this_sym9640].concat(args9641.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9656 = this;
return (new cljs.core.PersistentHashSet(this__9656.meta,cljs.core.assoc.call(null,this__9656.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__9657 = this;
var this__9658 = this;
return cljs.core.pr_str.call(null,this__9658);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9659 = this;
return cljs.core.keys.call(null,this__9659.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9660 = this;
return (new cljs.core.PersistentHashSet(this__9660.meta,cljs.core.dissoc.call(null,this__9660.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9661 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9662 = this;
var and__3822__auto____9663 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9663)
{var and__3822__auto____9664 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9664)
{return cljs.core.every_QMARK_.call(null,(function (p1__9639_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9639_SHARP_);
}),other);
} else
{return and__3822__auto____9664;
}
} else
{return and__3822__auto____9663;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9665 = this;
return (new cljs.core.PersistentHashSet(meta,this__9665.hash_map,this__9665.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9666 = this;
return this__9666.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9667 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__9667.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__9669 = cljs.core.count.call(null,items);
var i__9670 = 0;
var out__9671 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__9670 < len__9669))
{{
var G__9672 = (i__9670 + 1);
var G__9673 = cljs.core.conj_BANG_.call(null,out__9671,(items[i__9670]));
i__9670 = G__9672;
out__9671 = G__9673;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9671);
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
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__9691 = null;
var G__9691__2 = (function (this_sym9677,k){
var this__9679 = this;
var this_sym9677__9680 = this;
var tcoll__9681 = this_sym9677__9680;
if((cljs.core._lookup.call(null,this__9679.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__9691__3 = (function (this_sym9678,k,not_found){
var this__9679 = this;
var this_sym9678__9682 = this;
var tcoll__9683 = this_sym9678__9682;
if((cljs.core._lookup.call(null,this__9679.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__9691 = function(this_sym9678,k,not_found){
switch(arguments.length){
case 2:
return G__9691__2.call(this,this_sym9678,k);
case 3:
return G__9691__3.call(this,this_sym9678,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9691;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym9675,args9676){
var this__9684 = this;
return this_sym9675.call.apply(this_sym9675,[this_sym9675].concat(args9676.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__9685 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__9686 = this;
if((cljs.core._lookup.call(null,this__9686.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9687 = this;
return cljs.core.count.call(null,this__9687.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__9688 = this;
this__9688.transient_map = cljs.core.dissoc_BANG_.call(null,this__9688.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9689 = this;
this__9689.transient_map = cljs.core.assoc_BANG_.call(null,this__9689.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9690 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__9690.transient_map),null));
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
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9694 = this;
var h__2525__auto____9695 = this__9694.__hash;
if(!((h__2525__auto____9695 == null)))
{return h__2525__auto____9695;
} else
{var h__2525__auto____9696 = cljs.core.hash_iset.call(null,coll);
this__9694.__hash = h__2525__auto____9696;
return h__2525__auto____9696;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9697 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9698 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9698.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__9724 = null;
var G__9724__2 = (function (this_sym9699,k){
var this__9701 = this;
var this_sym9699__9702 = this;
var coll__9703 = this_sym9699__9702;
return coll__9703.cljs$core$ILookup$_lookup$arity$2(coll__9703,k);
});
var G__9724__3 = (function (this_sym9700,k,not_found){
var this__9701 = this;
var this_sym9700__9704 = this;
var coll__9705 = this_sym9700__9704;
return coll__9705.cljs$core$ILookup$_lookup$arity$3(coll__9705,k,not_found);
});
G__9724 = function(this_sym9700,k,not_found){
switch(arguments.length){
case 2:
return G__9724__2.call(this,this_sym9700,k);
case 3:
return G__9724__3.call(this,this_sym9700,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9724;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym9692,args9693){
var this__9706 = this;
return this_sym9692.call.apply(this_sym9692,[this_sym9692].concat(args9693.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9707 = this;
return (new cljs.core.PersistentTreeSet(this__9707.meta,cljs.core.assoc.call(null,this__9707.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9708 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__9708.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__9709 = this;
var this__9710 = this;
return cljs.core.pr_str.call(null,this__9710);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9711 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__9711.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9712 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__9712.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9713 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9714 = this;
return cljs.core._comparator.call(null,this__9714.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9715 = this;
return cljs.core.keys.call(null,this__9715.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9716 = this;
return (new cljs.core.PersistentTreeSet(this__9716.meta,cljs.core.dissoc.call(null,this__9716.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9717 = this;
return cljs.core.count.call(null,this__9717.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9718 = this;
var and__3822__auto____9719 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9719)
{var and__3822__auto____9720 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9720)
{return cljs.core.every_QMARK_.call(null,(function (p1__9674_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9674_SHARP_);
}),other);
} else
{return and__3822__auto____9720;
}
} else
{return and__3822__auto____9719;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9721 = this;
return (new cljs.core.PersistentTreeSet(meta,this__9721.tree_map,this__9721.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9722 = this;
return this__9722.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9723 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__9723.meta);
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
var G__9729__delegate = function (keys){
var in__9727 = cljs.core.seq.call(null,keys);
var out__9728 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__9727))
{{
var G__9730 = cljs.core.next.call(null,in__9727);
var G__9731 = cljs.core.conj_BANG_.call(null,out__9728,cljs.core.first.call(null,in__9727));
in__9727 = G__9730;
out__9728 = G__9731;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9728);
}
break;
}
};
var G__9729 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9729__delegate.call(this, keys);
};
G__9729.cljs$lang$maxFixedArity = 0;
G__9729.cljs$lang$applyTo = (function (arglist__9732){
var keys = cljs.core.seq(arglist__9732);;
return G__9729__delegate(keys);
});
G__9729.cljs$lang$arity$variadic = G__9729__delegate;
return G__9729;
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
sorted_set.cljs$lang$applyTo = (function (arglist__9733){
var keys = cljs.core.seq(arglist__9733);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__9735){
var comparator = cljs.core.first(arglist__9735);
var keys = cljs.core.rest(arglist__9735);
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
{var n__9741 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____9742 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____9742))
{var e__9743 = temp__3971__auto____9742;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__9743));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__9741,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__9734_SHARP_){
var temp__3971__auto____9744 = cljs.core.find.call(null,smap,p1__9734_SHARP_);
if(cljs.core.truth_(temp__3971__auto____9744))
{var e__9745 = temp__3971__auto____9744;
return cljs.core.second.call(null,e__9745);
} else
{return p1__9734_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__9775 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__9768,seen){
while(true){
var vec__9769__9770 = p__9768;
var f__9771 = cljs.core.nth.call(null,vec__9769__9770,0,null);
var xs__9772 = vec__9769__9770;
var temp__3974__auto____9773 = cljs.core.seq.call(null,xs__9772);
if(temp__3974__auto____9773)
{var s__9774 = temp__3974__auto____9773;
if(cljs.core.contains_QMARK_.call(null,seen,f__9771))
{{
var G__9776 = cljs.core.rest.call(null,s__9774);
var G__9777 = seen;
p__9768 = G__9776;
seen = G__9777;
continue;
}
} else
{return cljs.core.cons.call(null,f__9771,step.call(null,cljs.core.rest.call(null,s__9774),cljs.core.conj.call(null,seen,f__9771)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__9775.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__9780 = cljs.core.PersistentVector.EMPTY;
var s__9781 = s;
while(true){
if(cljs.core.next.call(null,s__9781))
{{
var G__9782 = cljs.core.conj.call(null,ret__9780,cljs.core.first.call(null,s__9781));
var G__9783 = cljs.core.next.call(null,s__9781);
ret__9780 = G__9782;
s__9781 = G__9783;
continue;
}
} else
{return cljs.core.seq.call(null,ret__9780);
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
{if((function (){var or__3824__auto____9786 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9786)
{return or__3824__auto____9786;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9787 = x.lastIndexOf("/");
if((i__9787 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__9787 + 1));
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
if((function (){var or__3824__auto____9790 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9790)
{return or__3824__auto____9790;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9791 = x.lastIndexOf("/");
if((i__9791 > -1))
{return cljs.core.subs.call(null,x,2,i__9791);
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
var map__9798 = cljs.core.ObjMap.EMPTY;
var ks__9799 = cljs.core.seq.call(null,keys);
var vs__9800 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____9801 = ks__9799;
if(and__3822__auto____9801)
{return vs__9800;
} else
{return and__3822__auto____9801;
}
})())
{{
var G__9802 = cljs.core.assoc.call(null,map__9798,cljs.core.first.call(null,ks__9799),cljs.core.first.call(null,vs__9800));
var G__9803 = cljs.core.next.call(null,ks__9799);
var G__9804 = cljs.core.next.call(null,vs__9800);
map__9798 = G__9802;
ks__9799 = G__9803;
vs__9800 = G__9804;
continue;
}
} else
{return map__9798;
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
var G__9807__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9792_SHARP_,p2__9793_SHARP_){
return max_key.call(null,k,p1__9792_SHARP_,p2__9793_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__9807 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9807__delegate.call(this, k, x, y, more);
};
G__9807.cljs$lang$maxFixedArity = 3;
G__9807.cljs$lang$applyTo = (function (arglist__9808){
var k = cljs.core.first(arglist__9808);
var x = cljs.core.first(cljs.core.next(arglist__9808));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9808)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9808)));
return G__9807__delegate(k, x, y, more);
});
G__9807.cljs$lang$arity$variadic = G__9807__delegate;
return G__9807;
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
var G__9809__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9805_SHARP_,p2__9806_SHARP_){
return min_key.call(null,k,p1__9805_SHARP_,p2__9806_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__9809 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9809__delegate.call(this, k, x, y, more);
};
G__9809.cljs$lang$maxFixedArity = 3;
G__9809.cljs$lang$applyTo = (function (arglist__9810){
var k = cljs.core.first(arglist__9810);
var x = cljs.core.first(cljs.core.next(arglist__9810));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9810)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9810)));
return G__9809__delegate(k, x, y, more);
});
G__9809.cljs$lang$arity$variadic = G__9809__delegate;
return G__9809;
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
var temp__3974__auto____9813 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9813)
{var s__9814 = temp__3974__auto____9813;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__9814),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__9814)));
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
var temp__3974__auto____9817 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9817)
{var s__9818 = temp__3974__auto____9817;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__9818))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9818),take_while.call(null,pred,cljs.core.rest.call(null,s__9818)));
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
var comp__9820 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__9820.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__9832 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____9833 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____9833))
{var vec__9834__9835 = temp__3974__auto____9833;
var e__9836 = cljs.core.nth.call(null,vec__9834__9835,0,null);
var s__9837 = vec__9834__9835;
if(cljs.core.truth_(include__9832.call(null,e__9836)))
{return s__9837;
} else
{return cljs.core.next.call(null,s__9837);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9832,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9838 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____9838))
{var vec__9839__9840 = temp__3974__auto____9838;
var e__9841 = cljs.core.nth.call(null,vec__9839__9840,0,null);
var s__9842 = vec__9839__9840;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__9841))?s__9842:cljs.core.next.call(null,s__9842)));
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
var include__9854 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____9855 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____9855))
{var vec__9856__9857 = temp__3974__auto____9855;
var e__9858 = cljs.core.nth.call(null,vec__9856__9857,0,null);
var s__9859 = vec__9856__9857;
if(cljs.core.truth_(include__9854.call(null,e__9858)))
{return s__9859;
} else
{return cljs.core.next.call(null,s__9859);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9854,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9860 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____9860))
{var vec__9861__9862 = temp__3974__auto____9860;
var e__9863 = cljs.core.nth.call(null,vec__9861__9862,0,null);
var s__9864 = vec__9861__9862;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__9863))?s__9864:cljs.core.next.call(null,s__9864)));
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
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__9865 = this;
var h__2525__auto____9866 = this__9865.__hash;
if(!((h__2525__auto____9866 == null)))
{return h__2525__auto____9866;
} else
{var h__2525__auto____9867 = cljs.core.hash_coll.call(null,rng);
this__9865.__hash = h__2525__auto____9867;
return h__2525__auto____9867;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__9868 = this;
if((this__9868.step > 0))
{if(((this__9868.start + this__9868.step) < this__9868.end))
{return (new cljs.core.Range(this__9868.meta,(this__9868.start + this__9868.step),this__9868.end,this__9868.step,null));
} else
{return null;
}
} else
{if(((this__9868.start + this__9868.step) > this__9868.end))
{return (new cljs.core.Range(this__9868.meta,(this__9868.start + this__9868.step),this__9868.end,this__9868.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__9869 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__9870 = this;
var this__9871 = this;
return cljs.core.pr_str.call(null,this__9871);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__9872 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__9873 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__9874 = this;
if((this__9874.step > 0))
{if((this__9874.start < this__9874.end))
{return rng;
} else
{return null;
}
} else
{if((this__9874.start > this__9874.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__9875 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__9875.end - this__9875.start) / this__9875.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__9876 = this;
return this__9876.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__9877 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__9877.meta,(this__9877.start + this__9877.step),this__9877.end,this__9877.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__9878 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__9879 = this;
return (new cljs.core.Range(meta,this__9879.start,this__9879.end,this__9879.step,this__9879.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__9880 = this;
return this__9880.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__9881 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9881.start + (n * this__9881.step));
} else
{if((function (){var and__3822__auto____9882 = (this__9881.start > this__9881.end);
if(and__3822__auto____9882)
{return (this__9881.step === 0);
} else
{return and__3822__auto____9882;
}
})())
{return this__9881.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__9883 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9883.start + (n * this__9883.step));
} else
{if((function (){var and__3822__auto____9884 = (this__9883.start > this__9883.end);
if(and__3822__auto____9884)
{return (this__9883.step === 0);
} else
{return and__3822__auto____9884;
}
})())
{return this__9883.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__9885 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9885.meta);
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
var temp__3974__auto____9888 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9888)
{var s__9889 = temp__3974__auto____9888;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__9889),take_nth.call(null,n,cljs.core.drop.call(null,n,s__9889)));
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
var temp__3974__auto____9896 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9896)
{var s__9897 = temp__3974__auto____9896;
var fst__9898 = cljs.core.first.call(null,s__9897);
var fv__9899 = f.call(null,fst__9898);
var run__9900 = cljs.core.cons.call(null,fst__9898,cljs.core.take_while.call(null,(function (p1__9890_SHARP_){
return cljs.core._EQ_.call(null,fv__9899,f.call(null,p1__9890_SHARP_));
}),cljs.core.next.call(null,s__9897)));
return cljs.core.cons.call(null,run__9900,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__9900),s__9897))));
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
var temp__3971__auto____9915 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____9915)
{var s__9916 = temp__3971__auto____9915;
return reductions.call(null,f,cljs.core.first.call(null,s__9916),cljs.core.rest.call(null,s__9916));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9917 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9917)
{var s__9918 = temp__3974__auto____9917;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__9918)),cljs.core.rest.call(null,s__9918));
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
var G__9921 = null;
var G__9921__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__9921__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__9921__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__9921__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__9921__4 = (function() { 
var G__9922__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
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
var juxt__2 = (function (f,g){
return (function() {
var G__9924 = null;
var G__9924__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__9924__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__9924__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__9924__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__9924__4 = (function() { 
var G__9925__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
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
var juxt__3 = (function (f,g,h){
return (function() {
var G__9927 = null;
var G__9927__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__9927__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__9927__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__9927__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__9927__4 = (function() { 
var G__9928__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__9928 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9928__delegate.call(this, x, y, z, args);
};
G__9928.cljs$lang$maxFixedArity = 3;
G__9928.cljs$lang$applyTo = (function (arglist__9929){
var x = cljs.core.first(arglist__9929);
var y = cljs.core.first(cljs.core.next(arglist__9929));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9929)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9929)));
return G__9928__delegate(x, y, z, args);
});
G__9928.cljs$lang$arity$variadic = G__9928__delegate;
return G__9928;
})()
;
G__9927 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9927__0.call(this);
case 1:
return G__9927__1.call(this,x);
case 2:
return G__9927__2.call(this,x,y);
case 3:
return G__9927__3.call(this,x,y,z);
default:
return G__9927__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9927.cljs$lang$maxFixedArity = 3;
G__9927.cljs$lang$applyTo = G__9927__4.cljs$lang$applyTo;
return G__9927;
})()
});
var juxt__4 = (function() { 
var G__9930__delegate = function (f,g,h,fs){
var fs__9920 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__9931 = null;
var G__9931__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__9901_SHARP_,p2__9902_SHARP_){
return cljs.core.conj.call(null,p1__9901_SHARP_,p2__9902_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__9920);
});
var G__9931__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__9903_SHARP_,p2__9904_SHARP_){
return cljs.core.conj.call(null,p1__9903_SHARP_,p2__9904_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__9920);
});
var G__9931__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__9905_SHARP_,p2__9906_SHARP_){
return cljs.core.conj.call(null,p1__9905_SHARP_,p2__9906_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__9920);
});
var G__9931__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__9907_SHARP_,p2__9908_SHARP_){
return cljs.core.conj.call(null,p1__9907_SHARP_,p2__9908_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__9920);
});
var G__9931__4 = (function() { 
var G__9932__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__9909_SHARP_,p2__9910_SHARP_){
return cljs.core.conj.call(null,p1__9909_SHARP_,cljs.core.apply.call(null,p2__9910_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__9920);
};
var G__9932 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9932__delegate.call(this, x, y, z, args);
};
G__9932.cljs$lang$maxFixedArity = 3;
G__9932.cljs$lang$applyTo = (function (arglist__9933){
var x = cljs.core.first(arglist__9933);
var y = cljs.core.first(cljs.core.next(arglist__9933));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9933)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9933)));
return G__9932__delegate(x, y, z, args);
});
G__9932.cljs$lang$arity$variadic = G__9932__delegate;
return G__9932;
})()
;
G__9931 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9931__0.call(this);
case 1:
return G__9931__1.call(this,x);
case 2:
return G__9931__2.call(this,x,y);
case 3:
return G__9931__3.call(this,x,y,z);
default:
return G__9931__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9931.cljs$lang$maxFixedArity = 3;
G__9931.cljs$lang$applyTo = G__9931__4.cljs$lang$applyTo;
return G__9931;
})()
};
var G__9930 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9930__delegate.call(this, f, g, h, fs);
};
G__9930.cljs$lang$maxFixedArity = 3;
G__9930.cljs$lang$applyTo = (function (arglist__9934){
var f = cljs.core.first(arglist__9934);
var g = cljs.core.first(cljs.core.next(arglist__9934));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9934)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9934)));
return G__9930__delegate(f, g, h, fs);
});
G__9930.cljs$lang$arity$variadic = G__9930__delegate;
return G__9930;
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
var G__9937 = cljs.core.next.call(null,coll);
coll = G__9937;
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
if(cljs.core.truth_((function (){var and__3822__auto____9936 = cljs.core.seq.call(null,coll);
if(and__3822__auto____9936)
{return (n > 0);
} else
{return and__3822__auto____9936;
}
})()))
{{
var G__9938 = (n - 1);
var G__9939 = cljs.core.next.call(null,coll);
n = G__9938;
coll = G__9939;
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
var matches__9941 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__9941),s))
{if((cljs.core.count.call(null,matches__9941) === 1))
{return cljs.core.first.call(null,matches__9941);
} else
{return cljs.core.vec.call(null,matches__9941);
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
var matches__9943 = re.exec(s);
if((matches__9943 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__9943) === 1))
{return cljs.core.first.call(null,matches__9943);
} else
{return cljs.core.vec.call(null,matches__9943);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__9948 = cljs.core.re_find.call(null,re,s);
var match_idx__9949 = s.search(re);
var match_str__9950 = ((cljs.core.coll_QMARK_.call(null,match_data__9948))?cljs.core.first.call(null,match_data__9948):match_data__9948);
var post_match__9951 = cljs.core.subs.call(null,s,(match_idx__9949 + cljs.core.count.call(null,match_str__9950)));
if(cljs.core.truth_(match_data__9948))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__9948,re_seq.call(null,re,post_match__9951));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__9958__9959 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___9960 = cljs.core.nth.call(null,vec__9958__9959,0,null);
var flags__9961 = cljs.core.nth.call(null,vec__9958__9959,1,null);
var pattern__9962 = cljs.core.nth.call(null,vec__9958__9959,2,null);
return (new RegExp(pattern__9962,flags__9961));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__9952_SHARP_){
return print_one.call(null,p1__9952_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____9972 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____9972))
{var and__3822__auto____9976 = (function (){var G__9973__9974 = obj;
if(G__9973__9974)
{if((function (){var or__3824__auto____9975 = (G__9973__9974.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____9975)
{return or__3824__auto____9975;
} else
{return G__9973__9974.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__9973__9974.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9973__9974);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9973__9974);
}
})();
if(cljs.core.truth_(and__3822__auto____9976))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____9976;
}
} else
{return and__3822__auto____9972;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____9977 = !((obj == null));
if(and__3822__auto____9977)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____9977;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__9978__9979 = obj;
if(G__9978__9979)
{if((function (){var or__3824__auto____9980 = (G__9978__9979.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____9980)
{return or__3824__auto____9980;
} else
{return G__9978__9979.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__9978__9979.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9978__9979);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9978__9979);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__10000 = (new goog.string.StringBuffer());
var G__10001__10002 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__10001__10002)
{var string__10003 = cljs.core.first.call(null,G__10001__10002);
var G__10001__10004 = G__10001__10002;
while(true){
sb__10000.append(string__10003);
var temp__3974__auto____10005 = cljs.core.next.call(null,G__10001__10004);
if(temp__3974__auto____10005)
{var G__10001__10006 = temp__3974__auto____10005;
{
var G__10019 = cljs.core.first.call(null,G__10001__10006);
var G__10020 = G__10001__10006;
string__10003 = G__10019;
G__10001__10004 = G__10020;
continue;
}
} else
{}
break;
}
} else
{}
var G__10007__10008 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__10007__10008)
{var obj__10009 = cljs.core.first.call(null,G__10007__10008);
var G__10007__10010 = G__10007__10008;
while(true){
sb__10000.append(" ");
var G__10011__10012 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__10009,opts));
if(G__10011__10012)
{var string__10013 = cljs.core.first.call(null,G__10011__10012);
var G__10011__10014 = G__10011__10012;
while(true){
sb__10000.append(string__10013);
var temp__3974__auto____10015 = cljs.core.next.call(null,G__10011__10014);
if(temp__3974__auto____10015)
{var G__10011__10016 = temp__3974__auto____10015;
{
var G__10021 = cljs.core.first.call(null,G__10011__10016);
var G__10022 = G__10011__10016;
string__10013 = G__10021;
G__10011__10014 = G__10022;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____10017 = cljs.core.next.call(null,G__10007__10010);
if(temp__3974__auto____10017)
{var G__10007__10018 = temp__3974__auto____10017;
{
var G__10023 = cljs.core.first.call(null,G__10007__10018);
var G__10024 = G__10007__10018;
obj__10009 = G__10023;
G__10007__10010 = G__10024;
continue;
}
} else
{}
break;
}
} else
{}
return sb__10000;
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
var sb__10026 = cljs.core.pr_sb.call(null,objs,opts);
sb__10026.append("\n");
return [cljs.core.str(sb__10026)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__10045__10046 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__10045__10046)
{var string__10047 = cljs.core.first.call(null,G__10045__10046);
var G__10045__10048 = G__10045__10046;
while(true){
cljs.core.string_print.call(null,string__10047);
var temp__3974__auto____10049 = cljs.core.next.call(null,G__10045__10048);
if(temp__3974__auto____10049)
{var G__10045__10050 = temp__3974__auto____10049;
{
var G__10063 = cljs.core.first.call(null,G__10045__10050);
var G__10064 = G__10045__10050;
string__10047 = G__10063;
G__10045__10048 = G__10064;
continue;
}
} else
{}
break;
}
} else
{}
var G__10051__10052 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__10051__10052)
{var obj__10053 = cljs.core.first.call(null,G__10051__10052);
var G__10051__10054 = G__10051__10052;
while(true){
cljs.core.string_print.call(null," ");
var G__10055__10056 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__10053,opts));
if(G__10055__10056)
{var string__10057 = cljs.core.first.call(null,G__10055__10056);
var G__10055__10058 = G__10055__10056;
while(true){
cljs.core.string_print.call(null,string__10057);
var temp__3974__auto____10059 = cljs.core.next.call(null,G__10055__10058);
if(temp__3974__auto____10059)
{var G__10055__10060 = temp__3974__auto____10059;
{
var G__10065 = cljs.core.first.call(null,G__10055__10060);
var G__10066 = G__10055__10060;
string__10057 = G__10065;
G__10055__10058 = G__10066;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____10061 = cljs.core.next.call(null,G__10051__10054);
if(temp__3974__auto____10061)
{var G__10051__10062 = temp__3974__auto____10061;
{
var G__10067 = cljs.core.first.call(null,G__10051__10062);
var G__10068 = G__10051__10062;
obj__10053 = G__10067;
G__10051__10054 = G__10068;
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
pr_str.cljs$lang$applyTo = (function (arglist__10069){
var objs = cljs.core.seq(arglist__10069);;
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
prn_str.cljs$lang$applyTo = (function (arglist__10070){
var objs = cljs.core.seq(arglist__10070);;
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
pr.cljs$lang$applyTo = (function (arglist__10071){
var objs = cljs.core.seq(arglist__10071);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__10072){
var objs = cljs.core.seq(arglist__10072);;
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
print_str.cljs$lang$applyTo = (function (arglist__10073){
var objs = cljs.core.seq(arglist__10073);;
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
println.cljs$lang$applyTo = (function (arglist__10074){
var objs = cljs.core.seq(arglist__10074);;
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
println_str.cljs$lang$applyTo = (function (arglist__10075){
var objs = cljs.core.seq(arglist__10075);;
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
prn.cljs$lang$applyTo = (function (arglist__10076){
var objs = cljs.core.seq(arglist__10076);;
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
printf.cljs$lang$applyTo = (function (arglist__10077){
var fmt = cljs.core.first(arglist__10077);
var args = cljs.core.rest(arglist__10077);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10078 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10078,"{",", ","}",opts,coll);
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
var pr_pair__10079 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10079,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10080 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10080,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____10081 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____10081))
{var nspc__10082 = temp__3974__auto____10081;
return [cljs.core.str(nspc__10082),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____10083 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____10083))
{var nspc__10084 = temp__3974__auto____10083;
return [cljs.core.str(nspc__10084),cljs.core.str("/")].join('');
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
var pr_pair__10085 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10085,"{",", ","}",opts,coll);
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
var normalize__10087 = (function (n,len){
var ns__10086 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__10086) < len))
{{
var G__10089 = [cljs.core.str("0"),cljs.core.str(ns__10086)].join('');
ns__10086 = G__10089;
continue;
}
} else
{return ns__10086;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__10087.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__10087.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__10087.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__10087.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__10087.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__10087.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__10088 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10088,"{",", ","}",opts,coll);
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
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10090 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__10091 = this;
var G__10092__10093 = cljs.core.seq.call(null,this__10091.watches);
if(G__10092__10093)
{var G__10095__10097 = cljs.core.first.call(null,G__10092__10093);
var vec__10096__10098 = G__10095__10097;
var key__10099 = cljs.core.nth.call(null,vec__10096__10098,0,null);
var f__10100 = cljs.core.nth.call(null,vec__10096__10098,1,null);
var G__10092__10101 = G__10092__10093;
var G__10095__10102 = G__10095__10097;
var G__10092__10103 = G__10092__10101;
while(true){
var vec__10104__10105 = G__10095__10102;
var key__10106 = cljs.core.nth.call(null,vec__10104__10105,0,null);
var f__10107 = cljs.core.nth.call(null,vec__10104__10105,1,null);
var G__10092__10108 = G__10092__10103;
f__10107.call(null,key__10106,this$,oldval,newval);
var temp__3974__auto____10109 = cljs.core.next.call(null,G__10092__10108);
if(temp__3974__auto____10109)
{var G__10092__10110 = temp__3974__auto____10109;
{
var G__10117 = cljs.core.first.call(null,G__10092__10110);
var G__10118 = G__10092__10110;
G__10095__10102 = G__10117;
G__10092__10103 = G__10118;
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
var this__10111 = this;
return this$.watches = cljs.core.assoc.call(null,this__10111.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__10112 = this;
return this$.watches = cljs.core.dissoc.call(null,this__10112.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__10113 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__10113.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__10114 = this;
return this__10114.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10115 = this;
return this__10115.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__10116 = this;
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
var G__10130__delegate = function (x,p__10119){
var map__10125__10126 = p__10119;
var map__10125__10127 = ((cljs.core.seq_QMARK_.call(null,map__10125__10126))?cljs.core.apply.call(null,cljs.core.hash_map,map__10125__10126):map__10125__10126);
var validator__10128 = cljs.core._lookup.call(null,map__10125__10127,"\uFDD0'validator",null);
var meta__10129 = cljs.core._lookup.call(null,map__10125__10127,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__10129,validator__10128,null));
};
var G__10130 = function (x,var_args){
var p__10119 = null;
if (goog.isDef(var_args)) {
  p__10119 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10130__delegate.call(this, x, p__10119);
};
G__10130.cljs$lang$maxFixedArity = 1;
G__10130.cljs$lang$applyTo = (function (arglist__10131){
var x = cljs.core.first(arglist__10131);
var p__10119 = cljs.core.rest(arglist__10131);
return G__10130__delegate(x, p__10119);
});
G__10130.cljs$lang$arity$variadic = G__10130__delegate;
return G__10130;
})()
;
atom = function(x,var_args){
var p__10119 = var_args;
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
var temp__3974__auto____10135 = a.validator;
if(cljs.core.truth_(temp__3974__auto____10135))
{var validate__10136 = temp__3974__auto____10135;
if(cljs.core.truth_(validate__10136.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440))))].join('')));
}
} else
{}
var old_value__10137 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__10137,new_value);
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
var G__10138__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__10138 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10138__delegate.call(this, a, f, x, y, z, more);
};
G__10138.cljs$lang$maxFixedArity = 5;
G__10138.cljs$lang$applyTo = (function (arglist__10139){
var a = cljs.core.first(arglist__10139);
var f = cljs.core.first(cljs.core.next(arglist__10139));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10139)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10139))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10139)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10139)))));
return G__10138__delegate(a, f, x, y, z, more);
});
G__10138.cljs$lang$arity$variadic = G__10138__delegate;
return G__10138;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__10140){
var iref = cljs.core.first(arglist__10140);
var f = cljs.core.first(cljs.core.next(arglist__10140));
var args = cljs.core.rest(cljs.core.next(arglist__10140));
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
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__10141 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__10141.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10142 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__10142.state,(function (p__10143){
var map__10144__10145 = p__10143;
var map__10144__10146 = ((cljs.core.seq_QMARK_.call(null,map__10144__10145))?cljs.core.apply.call(null,cljs.core.hash_map,map__10144__10145):map__10144__10145);
var curr_state__10147 = map__10144__10146;
var done__10148 = cljs.core._lookup.call(null,map__10144__10146,"\uFDD0'done",null);
if(cljs.core.truth_(done__10148))
{return curr_state__10147;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__10142.f.call(null)});
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
var map__10169__10170 = options;
var map__10169__10171 = ((cljs.core.seq_QMARK_.call(null,map__10169__10170))?cljs.core.apply.call(null,cljs.core.hash_map,map__10169__10170):map__10169__10170);
var keywordize_keys__10172 = cljs.core._lookup.call(null,map__10169__10171,"\uFDD0'keywordize-keys",null);
var keyfn__10173 = (cljs.core.truth_(keywordize_keys__10172)?cljs.core.keyword:cljs.core.str);
var f__10188 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2795__auto____10187 = (function iter__10181(s__10182){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10182__10185 = s__10182;
while(true){
if(cljs.core.seq.call(null,s__10182__10185))
{var k__10186 = cljs.core.first.call(null,s__10182__10185);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__10173.call(null,k__10186),thisfn.call(null,(x[k__10186]))], true),iter__10181.call(null,cljs.core.rest.call(null,s__10182__10185)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2795__auto____10187.call(null,cljs.core.js_keys.call(null,x));
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
return f__10188.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__10189){
var x = cljs.core.first(arglist__10189);
var options = cljs.core.rest(arglist__10189);
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
var mem__10194 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__10198__delegate = function (args){
var temp__3971__auto____10195 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__10194),args,null);
if(cljs.core.truth_(temp__3971__auto____10195))
{var v__10196 = temp__3971__auto____10195;
return v__10196;
} else
{var ret__10197 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__10194,cljs.core.assoc,args,ret__10197);
return ret__10197;
}
};
var G__10198 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10198__delegate.call(this, args);
};
G__10198.cljs$lang$maxFixedArity = 0;
G__10198.cljs$lang$applyTo = (function (arglist__10199){
var args = cljs.core.seq(arglist__10199);;
return G__10198__delegate(args);
});
G__10198.cljs$lang$arity$variadic = G__10198__delegate;
return G__10198;
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
var ret__10201 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__10201))
{{
var G__10202 = ret__10201;
f = G__10202;
continue;
}
} else
{return ret__10201;
}
break;
}
});
var trampoline__2 = (function() { 
var G__10203__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__10203 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10203__delegate.call(this, f, args);
};
G__10203.cljs$lang$maxFixedArity = 1;
G__10203.cljs$lang$applyTo = (function (arglist__10204){
var f = cljs.core.first(arglist__10204);
var args = cljs.core.rest(arglist__10204);
return G__10203__delegate(f, args);
});
G__10203.cljs$lang$arity$variadic = G__10203__delegate;
return G__10203;
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
var k__10206 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__10206,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__10206,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____10215 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____10215)
{return or__3824__auto____10215;
} else
{var or__3824__auto____10216 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____10216)
{return or__3824__auto____10216;
} else
{var and__3822__auto____10217 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____10217)
{var and__3822__auto____10218 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____10218)
{var and__3822__auto____10219 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____10219)
{var ret__10220 = true;
var i__10221 = 0;
while(true){
if((function (){var or__3824__auto____10222 = cljs.core.not.call(null,ret__10220);
if(or__3824__auto____10222)
{return or__3824__auto____10222;
} else
{return (i__10221 === cljs.core.count.call(null,parent));
}
})())
{return ret__10220;
} else
{{
var G__10223 = isa_QMARK_.call(null,h,child.call(null,i__10221),parent.call(null,i__10221));
var G__10224 = (i__10221 + 1);
ret__10220 = G__10223;
i__10221 = G__10224;
continue;
}
}
break;
}
} else
{return and__3822__auto____10219;
}
} else
{return and__3822__auto____10218;
}
} else
{return and__3822__auto____10217;
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
var tp__10233 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__10234 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__10235 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__10236 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____10237 = ((cljs.core.contains_QMARK_.call(null,tp__10233.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__10235.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__10235.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__10233,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__10236.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__10234,parent,ta__10235),"\uFDD0'descendants":tf__10236.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__10235,tag,td__10234)});
})());
if(cljs.core.truth_(or__3824__auto____10237))
{return or__3824__auto____10237;
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
var parentMap__10242 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__10243 = (cljs.core.truth_(parentMap__10242.call(null,tag))?cljs.core.disj.call(null,parentMap__10242.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__10244 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__10243))?cljs.core.assoc.call(null,parentMap__10242,tag,childsParents__10243):cljs.core.dissoc.call(null,parentMap__10242,tag));
var deriv_seq__10245 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__10225_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__10225_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__10225_SHARP_),cljs.core.second.call(null,p1__10225_SHARP_)));
}),cljs.core.seq.call(null,newParents__10244)));
if(cljs.core.contains_QMARK_.call(null,parentMap__10242.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__10226_SHARP_,p2__10227_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__10226_SHARP_,p2__10227_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__10245));
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
var xprefs__10253 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____10255 = (cljs.core.truth_((function (){var and__3822__auto____10254 = xprefs__10253;
if(cljs.core.truth_(and__3822__auto____10254))
{return xprefs__10253.call(null,y);
} else
{return and__3822__auto____10254;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____10255))
{return or__3824__auto____10255;
} else
{var or__3824__auto____10257 = (function (){var ps__10256 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__10256) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__10256),prefer_table)))
{} else
{}
{
var G__10260 = cljs.core.rest.call(null,ps__10256);
ps__10256 = G__10260;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10257))
{return or__3824__auto____10257;
} else
{var or__3824__auto____10259 = (function (){var ps__10258 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__10258) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__10258),y,prefer_table)))
{} else
{}
{
var G__10261 = cljs.core.rest.call(null,ps__10258);
ps__10258 = G__10261;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10259))
{return or__3824__auto____10259;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____10263 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____10263))
{return or__3824__auto____10263;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__10281 = cljs.core.reduce.call(null,(function (be,p__10273){
var vec__10274__10275 = p__10273;
var k__10276 = cljs.core.nth.call(null,vec__10274__10275,0,null);
var ___10277 = cljs.core.nth.call(null,vec__10274__10275,1,null);
var e__10278 = vec__10274__10275;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__10276))
{var be2__10280 = (cljs.core.truth_((function (){var or__3824__auto____10279 = (be == null);
if(or__3824__auto____10279)
{return or__3824__auto____10279;
} else
{return cljs.core.dominates.call(null,k__10276,cljs.core.first.call(null,be),prefer_table);
}
})())?e__10278:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__10280),k__10276,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__10276),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__10280)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__10280;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__10281))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__10281));
return cljs.core.second.call(null,best_entry__10281);
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
if((function (){var and__3822__auto____10286 = mf;
if(and__3822__auto____10286)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____10286;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2696__auto____10287 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10288 = (cljs.core._reset[goog.typeOf(x__2696__auto____10287)]);
if(or__3824__auto____10288)
{return or__3824__auto____10288;
} else
{var or__3824__auto____10289 = (cljs.core._reset["_"]);
if(or__3824__auto____10289)
{return or__3824__auto____10289;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____10294 = mf;
if(and__3822__auto____10294)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____10294;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2696__auto____10295 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10296 = (cljs.core._add_method[goog.typeOf(x__2696__auto____10295)]);
if(or__3824__auto____10296)
{return or__3824__auto____10296;
} else
{var or__3824__auto____10297 = (cljs.core._add_method["_"]);
if(or__3824__auto____10297)
{return or__3824__auto____10297;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____10302 = mf;
if(and__3822__auto____10302)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____10302;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2696__auto____10303 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10304 = (cljs.core._remove_method[goog.typeOf(x__2696__auto____10303)]);
if(or__3824__auto____10304)
{return or__3824__auto____10304;
} else
{var or__3824__auto____10305 = (cljs.core._remove_method["_"]);
if(or__3824__auto____10305)
{return or__3824__auto____10305;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____10310 = mf;
if(and__3822__auto____10310)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____10310;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2696__auto____10311 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10312 = (cljs.core._prefer_method[goog.typeOf(x__2696__auto____10311)]);
if(or__3824__auto____10312)
{return or__3824__auto____10312;
} else
{var or__3824__auto____10313 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____10313)
{return or__3824__auto____10313;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____10318 = mf;
if(and__3822__auto____10318)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____10318;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2696__auto____10319 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10320 = (cljs.core._get_method[goog.typeOf(x__2696__auto____10319)]);
if(or__3824__auto____10320)
{return or__3824__auto____10320;
} else
{var or__3824__auto____10321 = (cljs.core._get_method["_"]);
if(or__3824__auto____10321)
{return or__3824__auto____10321;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____10326 = mf;
if(and__3822__auto____10326)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____10326;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2696__auto____10327 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10328 = (cljs.core._methods[goog.typeOf(x__2696__auto____10327)]);
if(or__3824__auto____10328)
{return or__3824__auto____10328;
} else
{var or__3824__auto____10329 = (cljs.core._methods["_"]);
if(or__3824__auto____10329)
{return or__3824__auto____10329;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____10334 = mf;
if(and__3822__auto____10334)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____10334;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2696__auto____10335 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10336 = (cljs.core._prefers[goog.typeOf(x__2696__auto____10335)]);
if(or__3824__auto____10336)
{return or__3824__auto____10336;
} else
{var or__3824__auto____10337 = (cljs.core._prefers["_"]);
if(or__3824__auto____10337)
{return or__3824__auto____10337;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____10342 = mf;
if(and__3822__auto____10342)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____10342;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2696__auto____10343 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10344 = (cljs.core._dispatch[goog.typeOf(x__2696__auto____10343)]);
if(or__3824__auto____10344)
{return or__3824__auto____10344;
} else
{var or__3824__auto____10345 = (cljs.core._dispatch["_"]);
if(or__3824__auto____10345)
{return or__3824__auto____10345;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__10348 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__10349 = cljs.core._get_method.call(null,mf,dispatch_val__10348);
if(cljs.core.truth_(target_fn__10349))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__10348)].join('')));
}
return cljs.core.apply.call(null,target_fn__10349,args);
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
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10350 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__10351 = this;
cljs.core.swap_BANG_.call(null,this__10351.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10351.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10351.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10351.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__10352 = this;
cljs.core.swap_BANG_.call(null,this__10352.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__10352.method_cache,this__10352.method_table,this__10352.cached_hierarchy,this__10352.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__10353 = this;
cljs.core.swap_BANG_.call(null,this__10353.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__10353.method_cache,this__10353.method_table,this__10353.cached_hierarchy,this__10353.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__10354 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__10354.cached_hierarchy),cljs.core.deref.call(null,this__10354.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__10354.method_cache,this__10354.method_table,this__10354.cached_hierarchy,this__10354.hierarchy);
}
var temp__3971__auto____10355 = cljs.core.deref.call(null,this__10354.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____10355))
{var target_fn__10356 = temp__3971__auto____10355;
return target_fn__10356;
} else
{var temp__3971__auto____10357 = cljs.core.find_and_cache_best_method.call(null,this__10354.name,dispatch_val,this__10354.hierarchy,this__10354.method_table,this__10354.prefer_table,this__10354.method_cache,this__10354.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____10357))
{var target_fn__10358 = temp__3971__auto____10357;
return target_fn__10358;
} else
{return cljs.core.deref.call(null,this__10354.method_table).call(null,this__10354.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__10359 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__10359.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__10359.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__10359.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__10359.method_cache,this__10359.method_table,this__10359.cached_hierarchy,this__10359.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__10360 = this;
return cljs.core.deref.call(null,this__10360.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__10361 = this;
return cljs.core.deref.call(null,this__10361.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__10362 = this;
return cljs.core.do_dispatch.call(null,mf,this__10362.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__10364__delegate = function (_,args){
var self__10363 = this;
return cljs.core._dispatch.call(null,self__10363,args);
};
var G__10364 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10364__delegate.call(this, _, args);
};
G__10364.cljs$lang$maxFixedArity = 1;
G__10364.cljs$lang$applyTo = (function (arglist__10365){
var _ = cljs.core.first(arglist__10365);
var args = cljs.core.rest(arglist__10365);
return G__10364__delegate(_, args);
});
G__10364.cljs$lang$arity$variadic = G__10364__delegate;
return G__10364;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__10366 = this;
return cljs.core._dispatch.call(null,self__10366,args);
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
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__2642__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10367 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_10369,_){
var this__10368 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__10368.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__10370 = this;
var and__3822__auto____10371 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____10371)
{return (this__10370.uuid === other.uuid);
} else
{return and__3822__auto____10371;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__10372 = this;
var this__10373 = this;
return cljs.core.pr_str.call(null,this__10373);
});
cljs.core.UUID;
