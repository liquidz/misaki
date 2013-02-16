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
var x__6458 = (((x == null))?null:x);
if((p[goog.typeOf(x__6458)]))
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
var G__6459__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__6459 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6459__delegate.call(this, array, i, idxs);
};
G__6459.cljs$lang$maxFixedArity = 2;
G__6459.cljs$lang$applyTo = (function (arglist__6460){
var array = cljs.core.first(arglist__6460);
var i = cljs.core.first(cljs.core.next(arglist__6460));
var idxs = cljs.core.rest(cljs.core.next(arglist__6460));
return G__6459__delegate(array, i, idxs);
});
G__6459.cljs$lang$arity$variadic = G__6459__delegate;
return G__6459;
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
if((function (){var and__3822__auto____6545 = this$;
if(and__3822__auto____6545)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____6545;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2719__auto____6546 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6547 = (cljs.core._invoke[goog.typeOf(x__2719__auto____6546)]);
if(or__3824__auto____6547)
{return or__3824__auto____6547;
} else
{var or__3824__auto____6548 = (cljs.core._invoke["_"]);
if(or__3824__auto____6548)
{return or__3824__auto____6548;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____6549 = this$;
if(and__3822__auto____6549)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____6549;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2719__auto____6550 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6551 = (cljs.core._invoke[goog.typeOf(x__2719__auto____6550)]);
if(or__3824__auto____6551)
{return or__3824__auto____6551;
} else
{var or__3824__auto____6552 = (cljs.core._invoke["_"]);
if(or__3824__auto____6552)
{return or__3824__auto____6552;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____6553 = this$;
if(and__3822__auto____6553)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____6553;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2719__auto____6554 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6555 = (cljs.core._invoke[goog.typeOf(x__2719__auto____6554)]);
if(or__3824__auto____6555)
{return or__3824__auto____6555;
} else
{var or__3824__auto____6556 = (cljs.core._invoke["_"]);
if(or__3824__auto____6556)
{return or__3824__auto____6556;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____6557 = this$;
if(and__3822__auto____6557)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____6557;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2719__auto____6558 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6559 = (cljs.core._invoke[goog.typeOf(x__2719__auto____6558)]);
if(or__3824__auto____6559)
{return or__3824__auto____6559;
} else
{var or__3824__auto____6560 = (cljs.core._invoke["_"]);
if(or__3824__auto____6560)
{return or__3824__auto____6560;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____6561 = this$;
if(and__3822__auto____6561)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____6561;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2719__auto____6562 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6563 = (cljs.core._invoke[goog.typeOf(x__2719__auto____6562)]);
if(or__3824__auto____6563)
{return or__3824__auto____6563;
} else
{var or__3824__auto____6564 = (cljs.core._invoke["_"]);
if(or__3824__auto____6564)
{return or__3824__auto____6564;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____6565 = this$;
if(and__3822__auto____6565)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____6565;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2719__auto____6566 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6567 = (cljs.core._invoke[goog.typeOf(x__2719__auto____6566)]);
if(or__3824__auto____6567)
{return or__3824__auto____6567;
} else
{var or__3824__auto____6568 = (cljs.core._invoke["_"]);
if(or__3824__auto____6568)
{return or__3824__auto____6568;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____6569 = this$;
if(and__3822__auto____6569)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____6569;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2719__auto____6570 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6571 = (cljs.core._invoke[goog.typeOf(x__2719__auto____6570)]);
if(or__3824__auto____6571)
{return or__3824__auto____6571;
} else
{var or__3824__auto____6572 = (cljs.core._invoke["_"]);
if(or__3824__auto____6572)
{return or__3824__auto____6572;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____6573 = this$;
if(and__3822__auto____6573)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____6573;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2719__auto____6574 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6575 = (cljs.core._invoke[goog.typeOf(x__2719__auto____6574)]);
if(or__3824__auto____6575)
{return or__3824__auto____6575;
} else
{var or__3824__auto____6576 = (cljs.core._invoke["_"]);
if(or__3824__auto____6576)
{return or__3824__auto____6576;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____6577 = this$;
if(and__3822__auto____6577)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____6577;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2719__auto____6578 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6579 = (cljs.core._invoke[goog.typeOf(x__2719__auto____6578)]);
if(or__3824__auto____6579)
{return or__3824__auto____6579;
} else
{var or__3824__auto____6580 = (cljs.core._invoke["_"]);
if(or__3824__auto____6580)
{return or__3824__auto____6580;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____6581 = this$;
if(and__3822__auto____6581)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____6581;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2719__auto____6582 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6583 = (cljs.core._invoke[goog.typeOf(x__2719__auto____6582)]);
if(or__3824__auto____6583)
{return or__3824__auto____6583;
} else
{var or__3824__auto____6584 = (cljs.core._invoke["_"]);
if(or__3824__auto____6584)
{return or__3824__auto____6584;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____6585 = this$;
if(and__3822__auto____6585)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____6585;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2719__auto____6586 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6587 = (cljs.core._invoke[goog.typeOf(x__2719__auto____6586)]);
if(or__3824__auto____6587)
{return or__3824__auto____6587;
} else
{var or__3824__auto____6588 = (cljs.core._invoke["_"]);
if(or__3824__auto____6588)
{return or__3824__auto____6588;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____6589 = this$;
if(and__3822__auto____6589)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____6589;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2719__auto____6590 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6591 = (cljs.core._invoke[goog.typeOf(x__2719__auto____6590)]);
if(or__3824__auto____6591)
{return or__3824__auto____6591;
} else
{var or__3824__auto____6592 = (cljs.core._invoke["_"]);
if(or__3824__auto____6592)
{return or__3824__auto____6592;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____6593 = this$;
if(and__3822__auto____6593)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____6593;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2719__auto____6594 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6595 = (cljs.core._invoke[goog.typeOf(x__2719__auto____6594)]);
if(or__3824__auto____6595)
{return or__3824__auto____6595;
} else
{var or__3824__auto____6596 = (cljs.core._invoke["_"]);
if(or__3824__auto____6596)
{return or__3824__auto____6596;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____6597 = this$;
if(and__3822__auto____6597)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____6597;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2719__auto____6598 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6599 = (cljs.core._invoke[goog.typeOf(x__2719__auto____6598)]);
if(or__3824__auto____6599)
{return or__3824__auto____6599;
} else
{var or__3824__auto____6600 = (cljs.core._invoke["_"]);
if(or__3824__auto____6600)
{return or__3824__auto____6600;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____6601 = this$;
if(and__3822__auto____6601)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____6601;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2719__auto____6602 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6603 = (cljs.core._invoke[goog.typeOf(x__2719__auto____6602)]);
if(or__3824__auto____6603)
{return or__3824__auto____6603;
} else
{var or__3824__auto____6604 = (cljs.core._invoke["_"]);
if(or__3824__auto____6604)
{return or__3824__auto____6604;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____6605 = this$;
if(and__3822__auto____6605)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____6605;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2719__auto____6606 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6607 = (cljs.core._invoke[goog.typeOf(x__2719__auto____6606)]);
if(or__3824__auto____6607)
{return or__3824__auto____6607;
} else
{var or__3824__auto____6608 = (cljs.core._invoke["_"]);
if(or__3824__auto____6608)
{return or__3824__auto____6608;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____6609 = this$;
if(and__3822__auto____6609)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____6609;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2719__auto____6610 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6611 = (cljs.core._invoke[goog.typeOf(x__2719__auto____6610)]);
if(or__3824__auto____6611)
{return or__3824__auto____6611;
} else
{var or__3824__auto____6612 = (cljs.core._invoke["_"]);
if(or__3824__auto____6612)
{return or__3824__auto____6612;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____6613 = this$;
if(and__3822__auto____6613)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____6613;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2719__auto____6614 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6615 = (cljs.core._invoke[goog.typeOf(x__2719__auto____6614)]);
if(or__3824__auto____6615)
{return or__3824__auto____6615;
} else
{var or__3824__auto____6616 = (cljs.core._invoke["_"]);
if(or__3824__auto____6616)
{return or__3824__auto____6616;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____6617 = this$;
if(and__3822__auto____6617)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____6617;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2719__auto____6618 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6619 = (cljs.core._invoke[goog.typeOf(x__2719__auto____6618)]);
if(or__3824__auto____6619)
{return or__3824__auto____6619;
} else
{var or__3824__auto____6620 = (cljs.core._invoke["_"]);
if(or__3824__auto____6620)
{return or__3824__auto____6620;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____6621 = this$;
if(and__3822__auto____6621)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____6621;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2719__auto____6622 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6623 = (cljs.core._invoke[goog.typeOf(x__2719__auto____6622)]);
if(or__3824__auto____6623)
{return or__3824__auto____6623;
} else
{var or__3824__auto____6624 = (cljs.core._invoke["_"]);
if(or__3824__auto____6624)
{return or__3824__auto____6624;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____6625 = this$;
if(and__3822__auto____6625)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____6625;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2719__auto____6626 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6627 = (cljs.core._invoke[goog.typeOf(x__2719__auto____6626)]);
if(or__3824__auto____6627)
{return or__3824__auto____6627;
} else
{var or__3824__auto____6628 = (cljs.core._invoke["_"]);
if(or__3824__auto____6628)
{return or__3824__auto____6628;
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
if((function (){var and__3822__auto____6633 = coll;
if(and__3822__auto____6633)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____6633;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2719__auto____6634 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6635 = (cljs.core._count[goog.typeOf(x__2719__auto____6634)]);
if(or__3824__auto____6635)
{return or__3824__auto____6635;
} else
{var or__3824__auto____6636 = (cljs.core._count["_"]);
if(or__3824__auto____6636)
{return or__3824__auto____6636;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____6641 = coll;
if(and__3822__auto____6641)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____6641;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2719__auto____6642 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6643 = (cljs.core._empty[goog.typeOf(x__2719__auto____6642)]);
if(or__3824__auto____6643)
{return or__3824__auto____6643;
} else
{var or__3824__auto____6644 = (cljs.core._empty["_"]);
if(or__3824__auto____6644)
{return or__3824__auto____6644;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____6649 = coll;
if(and__3822__auto____6649)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____6649;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2719__auto____6650 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6651 = (cljs.core._conj[goog.typeOf(x__2719__auto____6650)]);
if(or__3824__auto____6651)
{return or__3824__auto____6651;
} else
{var or__3824__auto____6652 = (cljs.core._conj["_"]);
if(or__3824__auto____6652)
{return or__3824__auto____6652;
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
if((function (){var and__3822__auto____6661 = coll;
if(and__3822__auto____6661)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____6661;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2719__auto____6662 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6663 = (cljs.core._nth[goog.typeOf(x__2719__auto____6662)]);
if(or__3824__auto____6663)
{return or__3824__auto____6663;
} else
{var or__3824__auto____6664 = (cljs.core._nth["_"]);
if(or__3824__auto____6664)
{return or__3824__auto____6664;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____6665 = coll;
if(and__3822__auto____6665)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____6665;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2719__auto____6666 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6667 = (cljs.core._nth[goog.typeOf(x__2719__auto____6666)]);
if(or__3824__auto____6667)
{return or__3824__auto____6667;
} else
{var or__3824__auto____6668 = (cljs.core._nth["_"]);
if(or__3824__auto____6668)
{return or__3824__auto____6668;
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
if((function (){var and__3822__auto____6673 = coll;
if(and__3822__auto____6673)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____6673;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2719__auto____6674 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6675 = (cljs.core._first[goog.typeOf(x__2719__auto____6674)]);
if(or__3824__auto____6675)
{return or__3824__auto____6675;
} else
{var or__3824__auto____6676 = (cljs.core._first["_"]);
if(or__3824__auto____6676)
{return or__3824__auto____6676;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____6681 = coll;
if(and__3822__auto____6681)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____6681;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2719__auto____6682 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6683 = (cljs.core._rest[goog.typeOf(x__2719__auto____6682)]);
if(or__3824__auto____6683)
{return or__3824__auto____6683;
} else
{var or__3824__auto____6684 = (cljs.core._rest["_"]);
if(or__3824__auto____6684)
{return or__3824__auto____6684;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____6689 = coll;
if(and__3822__auto____6689)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____6689;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2719__auto____6690 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6691 = (cljs.core._next[goog.typeOf(x__2719__auto____6690)]);
if(or__3824__auto____6691)
{return or__3824__auto____6691;
} else
{var or__3824__auto____6692 = (cljs.core._next["_"]);
if(or__3824__auto____6692)
{return or__3824__auto____6692;
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
if((function (){var and__3822__auto____6701 = o;
if(and__3822__auto____6701)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____6701;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2719__auto____6702 = (((o == null))?null:o);
return (function (){var or__3824__auto____6703 = (cljs.core._lookup[goog.typeOf(x__2719__auto____6702)]);
if(or__3824__auto____6703)
{return or__3824__auto____6703;
} else
{var or__3824__auto____6704 = (cljs.core._lookup["_"]);
if(or__3824__auto____6704)
{return or__3824__auto____6704;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____6705 = o;
if(and__3822__auto____6705)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____6705;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2719__auto____6706 = (((o == null))?null:o);
return (function (){var or__3824__auto____6707 = (cljs.core._lookup[goog.typeOf(x__2719__auto____6706)]);
if(or__3824__auto____6707)
{return or__3824__auto____6707;
} else
{var or__3824__auto____6708 = (cljs.core._lookup["_"]);
if(or__3824__auto____6708)
{return or__3824__auto____6708;
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
if((function (){var and__3822__auto____6713 = coll;
if(and__3822__auto____6713)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____6713;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2719__auto____6714 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6715 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2719__auto____6714)]);
if(or__3824__auto____6715)
{return or__3824__auto____6715;
} else
{var or__3824__auto____6716 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____6716)
{return or__3824__auto____6716;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____6721 = coll;
if(and__3822__auto____6721)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____6721;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2719__auto____6722 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6723 = (cljs.core._assoc[goog.typeOf(x__2719__auto____6722)]);
if(or__3824__auto____6723)
{return or__3824__auto____6723;
} else
{var or__3824__auto____6724 = (cljs.core._assoc["_"]);
if(or__3824__auto____6724)
{return or__3824__auto____6724;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____6729 = coll;
if(and__3822__auto____6729)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____6729;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2719__auto____6730 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6731 = (cljs.core._dissoc[goog.typeOf(x__2719__auto____6730)]);
if(or__3824__auto____6731)
{return or__3824__auto____6731;
} else
{var or__3824__auto____6732 = (cljs.core._dissoc["_"]);
if(or__3824__auto____6732)
{return or__3824__auto____6732;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____6737 = coll;
if(and__3822__auto____6737)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____6737;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2719__auto____6738 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6739 = (cljs.core._key[goog.typeOf(x__2719__auto____6738)]);
if(or__3824__auto____6739)
{return or__3824__auto____6739;
} else
{var or__3824__auto____6740 = (cljs.core._key["_"]);
if(or__3824__auto____6740)
{return or__3824__auto____6740;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____6745 = coll;
if(and__3822__auto____6745)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____6745;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2719__auto____6746 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6747 = (cljs.core._val[goog.typeOf(x__2719__auto____6746)]);
if(or__3824__auto____6747)
{return or__3824__auto____6747;
} else
{var or__3824__auto____6748 = (cljs.core._val["_"]);
if(or__3824__auto____6748)
{return or__3824__auto____6748;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____6753 = coll;
if(and__3822__auto____6753)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____6753;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2719__auto____6754 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6755 = (cljs.core._disjoin[goog.typeOf(x__2719__auto____6754)]);
if(or__3824__auto____6755)
{return or__3824__auto____6755;
} else
{var or__3824__auto____6756 = (cljs.core._disjoin["_"]);
if(or__3824__auto____6756)
{return or__3824__auto____6756;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____6761 = coll;
if(and__3822__auto____6761)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____6761;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2719__auto____6762 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6763 = (cljs.core._peek[goog.typeOf(x__2719__auto____6762)]);
if(or__3824__auto____6763)
{return or__3824__auto____6763;
} else
{var or__3824__auto____6764 = (cljs.core._peek["_"]);
if(or__3824__auto____6764)
{return or__3824__auto____6764;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____6769 = coll;
if(and__3822__auto____6769)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____6769;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2719__auto____6770 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6771 = (cljs.core._pop[goog.typeOf(x__2719__auto____6770)]);
if(or__3824__auto____6771)
{return or__3824__auto____6771;
} else
{var or__3824__auto____6772 = (cljs.core._pop["_"]);
if(or__3824__auto____6772)
{return or__3824__auto____6772;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____6777 = coll;
if(and__3822__auto____6777)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____6777;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2719__auto____6778 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6779 = (cljs.core._assoc_n[goog.typeOf(x__2719__auto____6778)]);
if(or__3824__auto____6779)
{return or__3824__auto____6779;
} else
{var or__3824__auto____6780 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____6780)
{return or__3824__auto____6780;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____6785 = o;
if(and__3822__auto____6785)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____6785;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2719__auto____6786 = (((o == null))?null:o);
return (function (){var or__3824__auto____6787 = (cljs.core._deref[goog.typeOf(x__2719__auto____6786)]);
if(or__3824__auto____6787)
{return or__3824__auto____6787;
} else
{var or__3824__auto____6788 = (cljs.core._deref["_"]);
if(or__3824__auto____6788)
{return or__3824__auto____6788;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____6793 = o;
if(and__3822__auto____6793)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____6793;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2719__auto____6794 = (((o == null))?null:o);
return (function (){var or__3824__auto____6795 = (cljs.core._deref_with_timeout[goog.typeOf(x__2719__auto____6794)]);
if(or__3824__auto____6795)
{return or__3824__auto____6795;
} else
{var or__3824__auto____6796 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____6796)
{return or__3824__auto____6796;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____6801 = o;
if(and__3822__auto____6801)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____6801;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2719__auto____6802 = (((o == null))?null:o);
return (function (){var or__3824__auto____6803 = (cljs.core._meta[goog.typeOf(x__2719__auto____6802)]);
if(or__3824__auto____6803)
{return or__3824__auto____6803;
} else
{var or__3824__auto____6804 = (cljs.core._meta["_"]);
if(or__3824__auto____6804)
{return or__3824__auto____6804;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____6809 = o;
if(and__3822__auto____6809)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____6809;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2719__auto____6810 = (((o == null))?null:o);
return (function (){var or__3824__auto____6811 = (cljs.core._with_meta[goog.typeOf(x__2719__auto____6810)]);
if(or__3824__auto____6811)
{return or__3824__auto____6811;
} else
{var or__3824__auto____6812 = (cljs.core._with_meta["_"]);
if(or__3824__auto____6812)
{return or__3824__auto____6812;
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
if((function (){var and__3822__auto____6821 = coll;
if(and__3822__auto____6821)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____6821;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2719__auto____6822 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6823 = (cljs.core._reduce[goog.typeOf(x__2719__auto____6822)]);
if(or__3824__auto____6823)
{return or__3824__auto____6823;
} else
{var or__3824__auto____6824 = (cljs.core._reduce["_"]);
if(or__3824__auto____6824)
{return or__3824__auto____6824;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____6825 = coll;
if(and__3822__auto____6825)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____6825;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2719__auto____6826 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6827 = (cljs.core._reduce[goog.typeOf(x__2719__auto____6826)]);
if(or__3824__auto____6827)
{return or__3824__auto____6827;
} else
{var or__3824__auto____6828 = (cljs.core._reduce["_"]);
if(or__3824__auto____6828)
{return or__3824__auto____6828;
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
if((function (){var and__3822__auto____6833 = coll;
if(and__3822__auto____6833)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____6833;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2719__auto____6834 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6835 = (cljs.core._kv_reduce[goog.typeOf(x__2719__auto____6834)]);
if(or__3824__auto____6835)
{return or__3824__auto____6835;
} else
{var or__3824__auto____6836 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____6836)
{return or__3824__auto____6836;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____6841 = o;
if(and__3822__auto____6841)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____6841;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2719__auto____6842 = (((o == null))?null:o);
return (function (){var or__3824__auto____6843 = (cljs.core._equiv[goog.typeOf(x__2719__auto____6842)]);
if(or__3824__auto____6843)
{return or__3824__auto____6843;
} else
{var or__3824__auto____6844 = (cljs.core._equiv["_"]);
if(or__3824__auto____6844)
{return or__3824__auto____6844;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____6849 = o;
if(and__3822__auto____6849)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____6849;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2719__auto____6850 = (((o == null))?null:o);
return (function (){var or__3824__auto____6851 = (cljs.core._hash[goog.typeOf(x__2719__auto____6850)]);
if(or__3824__auto____6851)
{return or__3824__auto____6851;
} else
{var or__3824__auto____6852 = (cljs.core._hash["_"]);
if(or__3824__auto____6852)
{return or__3824__auto____6852;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____6857 = o;
if(and__3822__auto____6857)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____6857;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2719__auto____6858 = (((o == null))?null:o);
return (function (){var or__3824__auto____6859 = (cljs.core._seq[goog.typeOf(x__2719__auto____6858)]);
if(or__3824__auto____6859)
{return or__3824__auto____6859;
} else
{var or__3824__auto____6860 = (cljs.core._seq["_"]);
if(or__3824__auto____6860)
{return or__3824__auto____6860;
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
if((function (){var and__3822__auto____6865 = coll;
if(and__3822__auto____6865)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____6865;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2719__auto____6866 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6867 = (cljs.core._rseq[goog.typeOf(x__2719__auto____6866)]);
if(or__3824__auto____6867)
{return or__3824__auto____6867;
} else
{var or__3824__auto____6868 = (cljs.core._rseq["_"]);
if(or__3824__auto____6868)
{return or__3824__auto____6868;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____6873 = coll;
if(and__3822__auto____6873)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____6873;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2719__auto____6874 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6875 = (cljs.core._sorted_seq[goog.typeOf(x__2719__auto____6874)]);
if(or__3824__auto____6875)
{return or__3824__auto____6875;
} else
{var or__3824__auto____6876 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____6876)
{return or__3824__auto____6876;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____6881 = coll;
if(and__3822__auto____6881)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____6881;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2719__auto____6882 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6883 = (cljs.core._sorted_seq_from[goog.typeOf(x__2719__auto____6882)]);
if(or__3824__auto____6883)
{return or__3824__auto____6883;
} else
{var or__3824__auto____6884 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____6884)
{return or__3824__auto____6884;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____6889 = coll;
if(and__3822__auto____6889)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____6889;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2719__auto____6890 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6891 = (cljs.core._entry_key[goog.typeOf(x__2719__auto____6890)]);
if(or__3824__auto____6891)
{return or__3824__auto____6891;
} else
{var or__3824__auto____6892 = (cljs.core._entry_key["_"]);
if(or__3824__auto____6892)
{return or__3824__auto____6892;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____6897 = coll;
if(and__3822__auto____6897)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____6897;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2719__auto____6898 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6899 = (cljs.core._comparator[goog.typeOf(x__2719__auto____6898)]);
if(or__3824__auto____6899)
{return or__3824__auto____6899;
} else
{var or__3824__auto____6900 = (cljs.core._comparator["_"]);
if(or__3824__auto____6900)
{return or__3824__auto____6900;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____6905 = o;
if(and__3822__auto____6905)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____6905;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2719__auto____6906 = (((o == null))?null:o);
return (function (){var or__3824__auto____6907 = (cljs.core._pr_seq[goog.typeOf(x__2719__auto____6906)]);
if(or__3824__auto____6907)
{return or__3824__auto____6907;
} else
{var or__3824__auto____6908 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____6908)
{return or__3824__auto____6908;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____6913 = d;
if(and__3822__auto____6913)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____6913;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2719__auto____6914 = (((d == null))?null:d);
return (function (){var or__3824__auto____6915 = (cljs.core._realized_QMARK_[goog.typeOf(x__2719__auto____6914)]);
if(or__3824__auto____6915)
{return or__3824__auto____6915;
} else
{var or__3824__auto____6916 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____6916)
{return or__3824__auto____6916;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____6921 = this$;
if(and__3822__auto____6921)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____6921;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2719__auto____6922 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6923 = (cljs.core._notify_watches[goog.typeOf(x__2719__auto____6922)]);
if(or__3824__auto____6923)
{return or__3824__auto____6923;
} else
{var or__3824__auto____6924 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____6924)
{return or__3824__auto____6924;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____6929 = this$;
if(and__3822__auto____6929)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____6929;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2719__auto____6930 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6931 = (cljs.core._add_watch[goog.typeOf(x__2719__auto____6930)]);
if(or__3824__auto____6931)
{return or__3824__auto____6931;
} else
{var or__3824__auto____6932 = (cljs.core._add_watch["_"]);
if(or__3824__auto____6932)
{return or__3824__auto____6932;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____6937 = this$;
if(and__3822__auto____6937)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____6937;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2719__auto____6938 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6939 = (cljs.core._remove_watch[goog.typeOf(x__2719__auto____6938)]);
if(or__3824__auto____6939)
{return or__3824__auto____6939;
} else
{var or__3824__auto____6940 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____6940)
{return or__3824__auto____6940;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____6945 = coll;
if(and__3822__auto____6945)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____6945;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2719__auto____6946 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6947 = (cljs.core._as_transient[goog.typeOf(x__2719__auto____6946)]);
if(or__3824__auto____6947)
{return or__3824__auto____6947;
} else
{var or__3824__auto____6948 = (cljs.core._as_transient["_"]);
if(or__3824__auto____6948)
{return or__3824__auto____6948;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____6953 = tcoll;
if(and__3822__auto____6953)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____6953;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2719__auto____6954 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6955 = (cljs.core._conj_BANG_[goog.typeOf(x__2719__auto____6954)]);
if(or__3824__auto____6955)
{return or__3824__auto____6955;
} else
{var or__3824__auto____6956 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____6956)
{return or__3824__auto____6956;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____6961 = tcoll;
if(and__3822__auto____6961)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____6961;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2719__auto____6962 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6963 = (cljs.core._persistent_BANG_[goog.typeOf(x__2719__auto____6962)]);
if(or__3824__auto____6963)
{return or__3824__auto____6963;
} else
{var or__3824__auto____6964 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____6964)
{return or__3824__auto____6964;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____6969 = tcoll;
if(and__3822__auto____6969)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____6969;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2719__auto____6970 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6971 = (cljs.core._assoc_BANG_[goog.typeOf(x__2719__auto____6970)]);
if(or__3824__auto____6971)
{return or__3824__auto____6971;
} else
{var or__3824__auto____6972 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____6972)
{return or__3824__auto____6972;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____6977 = tcoll;
if(and__3822__auto____6977)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____6977;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2719__auto____6978 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6979 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2719__auto____6978)]);
if(or__3824__auto____6979)
{return or__3824__auto____6979;
} else
{var or__3824__auto____6980 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____6980)
{return or__3824__auto____6980;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____6985 = tcoll;
if(and__3822__auto____6985)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____6985;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2719__auto____6986 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6987 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2719__auto____6986)]);
if(or__3824__auto____6987)
{return or__3824__auto____6987;
} else
{var or__3824__auto____6988 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____6988)
{return or__3824__auto____6988;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____6993 = tcoll;
if(and__3822__auto____6993)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____6993;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2719__auto____6994 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6995 = (cljs.core._pop_BANG_[goog.typeOf(x__2719__auto____6994)]);
if(or__3824__auto____6995)
{return or__3824__auto____6995;
} else
{var or__3824__auto____6996 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____6996)
{return or__3824__auto____6996;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____7001 = tcoll;
if(and__3822__auto____7001)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____7001;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2719__auto____7002 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7003 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2719__auto____7002)]);
if(or__3824__auto____7003)
{return or__3824__auto____7003;
} else
{var or__3824__auto____7004 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____7004)
{return or__3824__auto____7004;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____7009 = x;
if(and__3822__auto____7009)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____7009;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2719__auto____7010 = (((x == null))?null:x);
return (function (){var or__3824__auto____7011 = (cljs.core._compare[goog.typeOf(x__2719__auto____7010)]);
if(or__3824__auto____7011)
{return or__3824__auto____7011;
} else
{var or__3824__auto____7012 = (cljs.core._compare["_"]);
if(or__3824__auto____7012)
{return or__3824__auto____7012;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____7017 = coll;
if(and__3822__auto____7017)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____7017;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2719__auto____7018 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7019 = (cljs.core._drop_first[goog.typeOf(x__2719__auto____7018)]);
if(or__3824__auto____7019)
{return or__3824__auto____7019;
} else
{var or__3824__auto____7020 = (cljs.core._drop_first["_"]);
if(or__3824__auto____7020)
{return or__3824__auto____7020;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____7025 = coll;
if(and__3822__auto____7025)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____7025;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2719__auto____7026 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7027 = (cljs.core._chunked_first[goog.typeOf(x__2719__auto____7026)]);
if(or__3824__auto____7027)
{return or__3824__auto____7027;
} else
{var or__3824__auto____7028 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____7028)
{return or__3824__auto____7028;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____7033 = coll;
if(and__3822__auto____7033)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____7033;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2719__auto____7034 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7035 = (cljs.core._chunked_rest[goog.typeOf(x__2719__auto____7034)]);
if(or__3824__auto____7035)
{return or__3824__auto____7035;
} else
{var or__3824__auto____7036 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____7036)
{return or__3824__auto____7036;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____7041 = coll;
if(and__3822__auto____7041)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____7041;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2719__auto____7042 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7043 = (cljs.core._chunked_next[goog.typeOf(x__2719__auto____7042)]);
if(or__3824__auto____7043)
{return or__3824__auto____7043;
} else
{var or__3824__auto____7044 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____7044)
{return or__3824__auto____7044;
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
var or__3824__auto____7046 = (x === y);
if(or__3824__auto____7046)
{return or__3824__auto____7046;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__7047__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7048 = y;
var G__7049 = cljs.core.first.call(null,more);
var G__7050 = cljs.core.next.call(null,more);
x = G__7048;
y = G__7049;
more = G__7050;
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
var G__7047 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7047__delegate.call(this, x, y, more);
};
G__7047.cljs$lang$maxFixedArity = 2;
G__7047.cljs$lang$applyTo = (function (arglist__7051){
var x = cljs.core.first(arglist__7051);
var y = cljs.core.first(cljs.core.next(arglist__7051));
var more = cljs.core.rest(cljs.core.next(arglist__7051));
return G__7047__delegate(x, y, more);
});
G__7047.cljs$lang$arity$variadic = G__7047__delegate;
return G__7047;
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
var G__7052 = null;
var G__7052__2 = (function (o,k){
return null;
});
var G__7052__3 = (function (o,k,not_found){
return not_found;
});
G__7052 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__7052__2.call(this,o,k);
case 3:
return G__7052__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7052;
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
var G__7053 = null;
var G__7053__2 = (function (_,f){
return f.call(null);
});
var G__7053__3 = (function (_,f,start){
return start;
});
G__7053 = function(_,f,start){
switch(arguments.length){
case 2:
return G__7053__2.call(this,_,f);
case 3:
return G__7053__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7053;
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
var G__7054 = null;
var G__7054__2 = (function (_,n){
return null;
});
var G__7054__3 = (function (_,n,not_found){
return not_found;
});
G__7054 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__7054__2.call(this,_,n);
case 3:
return G__7054__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7054;
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
var and__3822__auto____7055 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____7055)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____7055;
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
var cnt__7068 = cljs.core._count.call(null,cicoll);
if((cnt__7068 === 0))
{return f.call(null);
} else
{var val__7069 = cljs.core._nth.call(null,cicoll,0);
var n__7070 = 1;
while(true){
if((n__7070 < cnt__7068))
{var nval__7071 = f.call(null,val__7069,cljs.core._nth.call(null,cicoll,n__7070));
if(cljs.core.reduced_QMARK_.call(null,nval__7071))
{return cljs.core.deref.call(null,nval__7071);
} else
{{
var G__7080 = nval__7071;
var G__7081 = (n__7070 + 1);
val__7069 = G__7080;
n__7070 = G__7081;
continue;
}
}
} else
{return val__7069;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__7072 = cljs.core._count.call(null,cicoll);
var val__7073 = val;
var n__7074 = 0;
while(true){
if((n__7074 < cnt__7072))
{var nval__7075 = f.call(null,val__7073,cljs.core._nth.call(null,cicoll,n__7074));
if(cljs.core.reduced_QMARK_.call(null,nval__7075))
{return cljs.core.deref.call(null,nval__7075);
} else
{{
var G__7082 = nval__7075;
var G__7083 = (n__7074 + 1);
val__7073 = G__7082;
n__7074 = G__7083;
continue;
}
}
} else
{return val__7073;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__7076 = cljs.core._count.call(null,cicoll);
var val__7077 = val;
var n__7078 = idx;
while(true){
if((n__7078 < cnt__7076))
{var nval__7079 = f.call(null,val__7077,cljs.core._nth.call(null,cicoll,n__7078));
if(cljs.core.reduced_QMARK_.call(null,nval__7079))
{return cljs.core.deref.call(null,nval__7079);
} else
{{
var G__7084 = nval__7079;
var G__7085 = (n__7078 + 1);
val__7077 = G__7084;
n__7078 = G__7085;
continue;
}
}
} else
{return val__7077;
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
var cnt__7098 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__7099 = (arr[0]);
var n__7100 = 1;
while(true){
if((n__7100 < cnt__7098))
{var nval__7101 = f.call(null,val__7099,(arr[n__7100]));
if(cljs.core.reduced_QMARK_.call(null,nval__7101))
{return cljs.core.deref.call(null,nval__7101);
} else
{{
var G__7110 = nval__7101;
var G__7111 = (n__7100 + 1);
val__7099 = G__7110;
n__7100 = G__7111;
continue;
}
}
} else
{return val__7099;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__7102 = arr.length;
var val__7103 = val;
var n__7104 = 0;
while(true){
if((n__7104 < cnt__7102))
{var nval__7105 = f.call(null,val__7103,(arr[n__7104]));
if(cljs.core.reduced_QMARK_.call(null,nval__7105))
{return cljs.core.deref.call(null,nval__7105);
} else
{{
var G__7112 = nval__7105;
var G__7113 = (n__7104 + 1);
val__7103 = G__7112;
n__7104 = G__7113;
continue;
}
}
} else
{return val__7103;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__7106 = arr.length;
var val__7107 = val;
var n__7108 = idx;
while(true){
if((n__7108 < cnt__7106))
{var nval__7109 = f.call(null,val__7107,(arr[n__7108]));
if(cljs.core.reduced_QMARK_.call(null,nval__7109))
{return cljs.core.deref.call(null,nval__7109);
} else
{{
var G__7114 = nval__7109;
var G__7115 = (n__7108 + 1);
val__7107 = G__7114;
n__7108 = G__7115;
continue;
}
}
} else
{return val__7107;
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
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7116 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__7117 = this;
if(((this__7117.i + 1) < this__7117.a.length))
{return (new cljs.core.IndexedSeq(this__7117.a,(this__7117.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7118 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__7119 = this;
var c__7120 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__7120 > 0))
{return (new cljs.core.RSeq(coll,(c__7120 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__7121 = this;
var this__7122 = this;
return cljs.core.pr_str.call(null,this__7122);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7123 = this;
if(cljs.core.counted_QMARK_.call(null,this__7123.a))
{return cljs.core.ci_reduce.call(null,this__7123.a,f,(this__7123.a[this__7123.i]),(this__7123.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__7123.a[this__7123.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7124 = this;
if(cljs.core.counted_QMARK_.call(null,this__7124.a))
{return cljs.core.ci_reduce.call(null,this__7124.a,f,start,this__7124.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__7125 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7126 = this;
return (this__7126.a.length - this__7126.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__7127 = this;
return (this__7127.a[this__7127.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__7128 = this;
if(((this__7128.i + 1) < this__7128.a.length))
{return (new cljs.core.IndexedSeq(this__7128.a,(this__7128.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7129 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7130 = this;
var i__7131 = (n + this__7130.i);
if((i__7131 < this__7130.a.length))
{return (this__7130.a[i__7131]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7132 = this;
var i__7133 = (n + this__7132.i);
if((i__7133 < this__7132.a.length))
{return (this__7132.a[i__7133]);
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
var G__7134 = null;
var G__7134__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__7134__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__7134 = function(array,f,start){
switch(arguments.length){
case 2:
return G__7134__2.call(this,array,f);
case 3:
return G__7134__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7134;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7135 = null;
var G__7135__2 = (function (array,k){
return (array[k]);
});
var G__7135__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__7135 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__7135__2.call(this,array,k);
case 3:
return G__7135__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7135;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7136 = null;
var G__7136__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__7136__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__7136 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__7136__2.call(this,array,n);
case 3:
return G__7136__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7136;
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
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7137 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7138 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__7139 = this;
var this__7140 = this;
return cljs.core.pr_str.call(null,this__7140);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7141 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7142 = this;
return (this__7142.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7143 = this;
return cljs.core._nth.call(null,this__7143.ci,this__7143.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7144 = this;
if((this__7144.i > 0))
{return (new cljs.core.RSeq(this__7144.ci,(this__7144.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7145 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__7146 = this;
return (new cljs.core.RSeq(this__7146.ci,this__7146.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7147 = this;
return this__7147.meta;
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
{if((function (){var G__7151__7152 = coll;
if(G__7151__7152)
{if((function (){var or__3824__auto____7153 = (G__7151__7152.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____7153)
{return or__3824__auto____7153;
} else
{return G__7151__7152.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__7151__7152.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7151__7152);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7151__7152);
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
{if((function (){var G__7158__7159 = coll;
if(G__7158__7159)
{if((function (){var or__3824__auto____7160 = (G__7158__7159.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7160)
{return or__3824__auto____7160;
} else
{return G__7158__7159.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7158__7159.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7158__7159);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7158__7159);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__7161 = cljs.core.seq.call(null,coll);
if((s__7161 == null))
{return null;
} else
{return cljs.core._first.call(null,s__7161);
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
{if((function (){var G__7166__7167 = coll;
if(G__7166__7167)
{if((function (){var or__3824__auto____7168 = (G__7166__7167.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7168)
{return or__3824__auto____7168;
} else
{return G__7166__7167.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7166__7167.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7166__7167);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7166__7167);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__7169 = cljs.core.seq.call(null,coll);
if(!((s__7169 == null)))
{return cljs.core._rest.call(null,s__7169);
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
{if((function (){var G__7173__7174 = coll;
if(G__7173__7174)
{if((function (){var or__3824__auto____7175 = (G__7173__7174.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____7175)
{return or__3824__auto____7175;
} else
{return G__7173__7174.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__7173__7174.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__7173__7174);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__7173__7174);
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
var sn__7177 = cljs.core.next.call(null,s);
if(!((sn__7177 == null)))
{{
var G__7178 = sn__7177;
s = G__7178;
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
var G__7179__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7180 = conj.call(null,coll,x);
var G__7181 = cljs.core.first.call(null,xs);
var G__7182 = cljs.core.next.call(null,xs);
coll = G__7180;
x = G__7181;
xs = G__7182;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__7179 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7179__delegate.call(this, coll, x, xs);
};
G__7179.cljs$lang$maxFixedArity = 2;
G__7179.cljs$lang$applyTo = (function (arglist__7183){
var coll = cljs.core.first(arglist__7183);
var x = cljs.core.first(cljs.core.next(arglist__7183));
var xs = cljs.core.rest(cljs.core.next(arglist__7183));
return G__7179__delegate(coll, x, xs);
});
G__7179.cljs$lang$arity$variadic = G__7179__delegate;
return G__7179;
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
var s__7186 = cljs.core.seq.call(null,coll);
var acc__7187 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__7186))
{return (acc__7187 + cljs.core._count.call(null,s__7186));
} else
{{
var G__7188 = cljs.core.next.call(null,s__7186);
var G__7189 = (acc__7187 + 1);
s__7186 = G__7188;
acc__7187 = G__7189;
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
{if((function (){var G__7196__7197 = coll;
if(G__7196__7197)
{if((function (){var or__3824__auto____7198 = (G__7196__7197.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7198)
{return or__3824__auto____7198;
} else
{return G__7196__7197.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7196__7197.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7196__7197);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7196__7197);
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
{if((function (){var G__7199__7200 = coll;
if(G__7199__7200)
{if((function (){var or__3824__auto____7201 = (G__7199__7200.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7201)
{return or__3824__auto____7201;
} else
{return G__7199__7200.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7199__7200.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7199__7200);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7199__7200);
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
var G__7204__delegate = function (coll,k,v,kvs){
while(true){
var ret__7203 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__7205 = ret__7203;
var G__7206 = cljs.core.first.call(null,kvs);
var G__7207 = cljs.core.second.call(null,kvs);
var G__7208 = cljs.core.nnext.call(null,kvs);
coll = G__7205;
k = G__7206;
v = G__7207;
kvs = G__7208;
continue;
}
} else
{return ret__7203;
}
break;
}
};
var G__7204 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7204__delegate.call(this, coll, k, v, kvs);
};
G__7204.cljs$lang$maxFixedArity = 3;
G__7204.cljs$lang$applyTo = (function (arglist__7209){
var coll = cljs.core.first(arglist__7209);
var k = cljs.core.first(cljs.core.next(arglist__7209));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7209)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7209)));
return G__7204__delegate(coll, k, v, kvs);
});
G__7204.cljs$lang$arity$variadic = G__7204__delegate;
return G__7204;
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
var G__7212__delegate = function (coll,k,ks){
while(true){
var ret__7211 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7213 = ret__7211;
var G__7214 = cljs.core.first.call(null,ks);
var G__7215 = cljs.core.next.call(null,ks);
coll = G__7213;
k = G__7214;
ks = G__7215;
continue;
}
} else
{return ret__7211;
}
break;
}
};
var G__7212 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7212__delegate.call(this, coll, k, ks);
};
G__7212.cljs$lang$maxFixedArity = 2;
G__7212.cljs$lang$applyTo = (function (arglist__7216){
var coll = cljs.core.first(arglist__7216);
var k = cljs.core.first(cljs.core.next(arglist__7216));
var ks = cljs.core.rest(cljs.core.next(arglist__7216));
return G__7212__delegate(coll, k, ks);
});
G__7212.cljs$lang$arity$variadic = G__7212__delegate;
return G__7212;
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
if((function (){var G__7220__7221 = o;
if(G__7220__7221)
{if((function (){var or__3824__auto____7222 = (G__7220__7221.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____7222)
{return or__3824__auto____7222;
} else
{return G__7220__7221.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__7220__7221.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7220__7221);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7220__7221);
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
var G__7225__delegate = function (coll,k,ks){
while(true){
var ret__7224 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7226 = ret__7224;
var G__7227 = cljs.core.first.call(null,ks);
var G__7228 = cljs.core.next.call(null,ks);
coll = G__7226;
k = G__7227;
ks = G__7228;
continue;
}
} else
{return ret__7224;
}
break;
}
};
var G__7225 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7225__delegate.call(this, coll, k, ks);
};
G__7225.cljs$lang$maxFixedArity = 2;
G__7225.cljs$lang$applyTo = (function (arglist__7229){
var coll = cljs.core.first(arglist__7229);
var k = cljs.core.first(cljs.core.next(arglist__7229));
var ks = cljs.core.rest(cljs.core.next(arglist__7229));
return G__7225__delegate(coll, k, ks);
});
G__7225.cljs$lang$arity$variadic = G__7225__delegate;
return G__7225;
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
var h__7231 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__7231);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__7231;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__7233 = (cljs.core.string_hash_cache[k]);
if(!((h__7233 == null)))
{return h__7233;
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
if((function (){var and__3822__auto____7235 = goog.isString(o);
if(and__3822__auto____7235)
{return check_cache;
} else
{return and__3822__auto____7235;
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
{var G__7239__7240 = x;
if(G__7239__7240)
{if((function (){var or__3824__auto____7241 = (G__7239__7240.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____7241)
{return or__3824__auto____7241;
} else
{return G__7239__7240.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__7239__7240.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7239__7240);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7239__7240);
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
{var G__7245__7246 = x;
if(G__7245__7246)
{if((function (){var or__3824__auto____7247 = (G__7245__7246.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____7247)
{return or__3824__auto____7247;
} else
{return G__7245__7246.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__7245__7246.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7245__7246);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7245__7246);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__7251__7252 = x;
if(G__7251__7252)
{if((function (){var or__3824__auto____7253 = (G__7251__7252.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____7253)
{return or__3824__auto____7253;
} else
{return G__7251__7252.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__7251__7252.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7251__7252);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7251__7252);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__7257__7258 = x;
if(G__7257__7258)
{if((function (){var or__3824__auto____7259 = (G__7257__7258.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____7259)
{return or__3824__auto____7259;
} else
{return G__7257__7258.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__7257__7258.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7257__7258);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7257__7258);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__7263__7264 = x;
if(G__7263__7264)
{if((function (){var or__3824__auto____7265 = (G__7263__7264.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____7265)
{return or__3824__auto____7265;
} else
{return G__7263__7264.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__7263__7264.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7263__7264);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7263__7264);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__7269__7270 = x;
if(G__7269__7270)
{if((function (){var or__3824__auto____7271 = (G__7269__7270.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7271)
{return or__3824__auto____7271;
} else
{return G__7269__7270.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7269__7270.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7269__7270);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7269__7270);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__7275__7276 = x;
if(G__7275__7276)
{if((function (){var or__3824__auto____7277 = (G__7275__7276.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7277)
{return or__3824__auto____7277;
} else
{return G__7275__7276.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7275__7276.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7275__7276);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7275__7276);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7281__7282 = x;
if(G__7281__7282)
{if((function (){var or__3824__auto____7283 = (G__7281__7282.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____7283)
{return or__3824__auto____7283;
} else
{return G__7281__7282.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__7281__7282.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7281__7282);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7281__7282);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__7287__7288 = x;
if(G__7287__7288)
{if((function (){var or__3824__auto____7289 = (G__7287__7288.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____7289)
{return or__3824__auto____7289;
} else
{return G__7287__7288.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__7287__7288.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7287__7288);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7287__7288);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__7293__7294 = x;
if(G__7293__7294)
{if(cljs.core.truth_((function (){var or__3824__auto____7295 = null;
if(cljs.core.truth_(or__3824__auto____7295))
{return or__3824__auto____7295;
} else
{return G__7293__7294.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__7293__7294.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7293__7294);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7293__7294);
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
var G__7296__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__7296 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7296__delegate.call(this, keyvals);
};
G__7296.cljs$lang$maxFixedArity = 0;
G__7296.cljs$lang$applyTo = (function (arglist__7297){
var keyvals = cljs.core.seq(arglist__7297);;
return G__7296__delegate(keyvals);
});
G__7296.cljs$lang$arity$variadic = G__7296__delegate;
return G__7296;
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
var keys__7299 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__7299.push(key);
}));
return keys__7299;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__7303 = i;
var j__7304 = j;
var len__7305 = len;
while(true){
if((len__7305 === 0))
{return to;
} else
{(to[j__7304] = (from[i__7303]));
{
var G__7306 = (i__7303 + 1);
var G__7307 = (j__7304 + 1);
var G__7308 = (len__7305 - 1);
i__7303 = G__7306;
j__7304 = G__7307;
len__7305 = G__7308;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__7312 = (i + (len - 1));
var j__7313 = (j + (len - 1));
var len__7314 = len;
while(true){
if((len__7314 === 0))
{return to;
} else
{(to[j__7313] = (from[i__7312]));
{
var G__7315 = (i__7312 - 1);
var G__7316 = (j__7313 - 1);
var G__7317 = (len__7314 - 1);
i__7312 = G__7315;
j__7313 = G__7316;
len__7314 = G__7317;
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
{var G__7321__7322 = s;
if(G__7321__7322)
{if((function (){var or__3824__auto____7323 = (G__7321__7322.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7323)
{return or__3824__auto____7323;
} else
{return G__7321__7322.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7321__7322.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7321__7322);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7321__7322);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__7327__7328 = s;
if(G__7327__7328)
{if((function (){var or__3824__auto____7329 = (G__7327__7328.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____7329)
{return or__3824__auto____7329;
} else
{return G__7327__7328.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__7327__7328.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7327__7328);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7327__7328);
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
var and__3822__auto____7332 = goog.isString(x);
if(and__3822__auto____7332)
{return !((function (){var or__3824__auto____7333 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____7333)
{return or__3824__auto____7333;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____7332;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____7335 = goog.isString(x);
if(and__3822__auto____7335)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____7335;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____7337 = goog.isString(x);
if(and__3822__auto____7337)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____7337;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____7342 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____7342)
{return or__3824__auto____7342;
} else
{var G__7343__7344 = f;
if(G__7343__7344)
{if((function (){var or__3824__auto____7345 = (G__7343__7344.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____7345)
{return or__3824__auto____7345;
} else
{return G__7343__7344.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__7343__7344.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7343__7344);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7343__7344);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____7347 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____7347)
{return (n == n.toFixed());
} else
{return and__3822__auto____7347;
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
if(cljs.core.truth_((function (){var and__3822__auto____7350 = coll;
if(cljs.core.truth_(and__3822__auto____7350))
{var and__3822__auto____7351 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____7351)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____7351;
}
} else
{return and__3822__auto____7350;
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
var G__7360__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__7356 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__7357 = more;
while(true){
var x__7358 = cljs.core.first.call(null,xs__7357);
var etc__7359 = cljs.core.next.call(null,xs__7357);
if(cljs.core.truth_(xs__7357))
{if(cljs.core.contains_QMARK_.call(null,s__7356,x__7358))
{return false;
} else
{{
var G__7361 = cljs.core.conj.call(null,s__7356,x__7358);
var G__7362 = etc__7359;
s__7356 = G__7361;
xs__7357 = G__7362;
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
var G__7360 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7360__delegate.call(this, x, y, more);
};
G__7360.cljs$lang$maxFixedArity = 2;
G__7360.cljs$lang$applyTo = (function (arglist__7363){
var x = cljs.core.first(arglist__7363);
var y = cljs.core.first(cljs.core.next(arglist__7363));
var more = cljs.core.rest(cljs.core.next(arglist__7363));
return G__7360__delegate(x, y, more);
});
G__7360.cljs$lang$arity$variadic = G__7360__delegate;
return G__7360;
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
{if((function (){var G__7367__7368 = x;
if(G__7367__7368)
{if(cljs.core.truth_((function (){var or__3824__auto____7369 = null;
if(cljs.core.truth_(or__3824__auto____7369))
{return or__3824__auto____7369;
} else
{return G__7367__7368.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__7367__7368.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7367__7368);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7367__7368);
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
var xl__7374 = cljs.core.count.call(null,xs);
var yl__7375 = cljs.core.count.call(null,ys);
if((xl__7374 < yl__7375))
{return -1;
} else
{if((xl__7374 > yl__7375))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__7374,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__7376 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____7377 = (d__7376 === 0);
if(and__3822__auto____7377)
{return ((n + 1) < len);
} else
{return and__3822__auto____7377;
}
})())
{{
var G__7378 = xs;
var G__7379 = ys;
var G__7380 = len;
var G__7381 = (n + 1);
xs = G__7378;
ys = G__7379;
len = G__7380;
n = G__7381;
continue;
}
} else
{return d__7376;
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
var r__7383 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__7383))
{return r__7383;
} else
{if(cljs.core.truth_(r__7383))
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
{var a__7385 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__7385,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__7385);
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
var temp__3971__auto____7391 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____7391)
{var s__7392 = temp__3971__auto____7391;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__7392),cljs.core.next.call(null,s__7392));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__7393 = val;
var coll__7394 = cljs.core.seq.call(null,coll);
while(true){
if(coll__7394)
{var nval__7395 = f.call(null,val__7393,cljs.core.first.call(null,coll__7394));
if(cljs.core.reduced_QMARK_.call(null,nval__7395))
{return cljs.core.deref.call(null,nval__7395);
} else
{{
var G__7396 = nval__7395;
var G__7397 = cljs.core.next.call(null,coll__7394);
val__7393 = G__7396;
coll__7394 = G__7397;
continue;
}
}
} else
{return val__7393;
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
var a__7399 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__7399);
return cljs.core.vec.call(null,a__7399);
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
if((function (){var G__7406__7407 = coll;
if(G__7406__7407)
{if((function (){var or__3824__auto____7408 = (G__7406__7407.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7408)
{return or__3824__auto____7408;
} else
{return G__7406__7407.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7406__7407.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7406__7407);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7406__7407);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__7409__7410 = coll;
if(G__7409__7410)
{if((function (){var or__3824__auto____7411 = (G__7409__7410.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7411)
{return or__3824__auto____7411;
} else
{return G__7409__7410.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7409__7410.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7409__7410);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7409__7410);
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
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__7412 = this;
return this__7412.val;
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
var G__7413__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__7413 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7413__delegate.call(this, x, y, more);
};
G__7413.cljs$lang$maxFixedArity = 2;
G__7413.cljs$lang$applyTo = (function (arglist__7414){
var x = cljs.core.first(arglist__7414);
var y = cljs.core.first(cljs.core.next(arglist__7414));
var more = cljs.core.rest(cljs.core.next(arglist__7414));
return G__7413__delegate(x, y, more);
});
G__7413.cljs$lang$arity$variadic = G__7413__delegate;
return G__7413;
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
var G__7415__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
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
var G__7417__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
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
var G__7419__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__7419 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7419__delegate.call(this, x, y, more);
};
G__7419.cljs$lang$maxFixedArity = 2;
G__7419.cljs$lang$applyTo = (function (arglist__7420){
var x = cljs.core.first(arglist__7420);
var y = cljs.core.first(cljs.core.next(arglist__7420));
var more = cljs.core.rest(cljs.core.next(arglist__7420));
return G__7419__delegate(x, y, more);
});
G__7419.cljs$lang$arity$variadic = G__7419__delegate;
return G__7419;
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
var G__7421__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__7422 = y;
var G__7423 = cljs.core.first.call(null,more);
var G__7424 = cljs.core.next.call(null,more);
x = G__7422;
y = G__7423;
more = G__7424;
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
var G__7421 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7421__delegate.call(this, x, y, more);
};
G__7421.cljs$lang$maxFixedArity = 2;
G__7421.cljs$lang$applyTo = (function (arglist__7425){
var x = cljs.core.first(arglist__7425);
var y = cljs.core.first(cljs.core.next(arglist__7425));
var more = cljs.core.rest(cljs.core.next(arglist__7425));
return G__7421__delegate(x, y, more);
});
G__7421.cljs$lang$arity$variadic = G__7421__delegate;
return G__7421;
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
var G__7426__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__7427 = y;
var G__7428 = cljs.core.first.call(null,more);
var G__7429 = cljs.core.next.call(null,more);
x = G__7427;
y = G__7428;
more = G__7429;
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
var G__7426 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7426__delegate.call(this, x, y, more);
};
G__7426.cljs$lang$maxFixedArity = 2;
G__7426.cljs$lang$applyTo = (function (arglist__7430){
var x = cljs.core.first(arglist__7430);
var y = cljs.core.first(cljs.core.next(arglist__7430));
var more = cljs.core.rest(cljs.core.next(arglist__7430));
return G__7426__delegate(x, y, more);
});
G__7426.cljs$lang$arity$variadic = G__7426__delegate;
return G__7426;
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
var G__7431__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__7432 = y;
var G__7433 = cljs.core.first.call(null,more);
var G__7434 = cljs.core.next.call(null,more);
x = G__7432;
y = G__7433;
more = G__7434;
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
var G__7431 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7431__delegate.call(this, x, y, more);
};
G__7431.cljs$lang$maxFixedArity = 2;
G__7431.cljs$lang$applyTo = (function (arglist__7435){
var x = cljs.core.first(arglist__7435);
var y = cljs.core.first(cljs.core.next(arglist__7435));
var more = cljs.core.rest(cljs.core.next(arglist__7435));
return G__7431__delegate(x, y, more);
});
G__7431.cljs$lang$arity$variadic = G__7431__delegate;
return G__7431;
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
var G__7436__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__7437 = y;
var G__7438 = cljs.core.first.call(null,more);
var G__7439 = cljs.core.next.call(null,more);
x = G__7437;
y = G__7438;
more = G__7439;
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
var G__7436 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7436__delegate.call(this, x, y, more);
};
G__7436.cljs$lang$maxFixedArity = 2;
G__7436.cljs$lang$applyTo = (function (arglist__7440){
var x = cljs.core.first(arglist__7440);
var y = cljs.core.first(cljs.core.next(arglist__7440));
var more = cljs.core.rest(cljs.core.next(arglist__7440));
return G__7436__delegate(x, y, more);
});
G__7436.cljs$lang$arity$variadic = G__7436__delegate;
return G__7436;
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
var G__7441__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__7441 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7441__delegate.call(this, x, y, more);
};
G__7441.cljs$lang$maxFixedArity = 2;
G__7441.cljs$lang$applyTo = (function (arglist__7442){
var x = cljs.core.first(arglist__7442);
var y = cljs.core.first(cljs.core.next(arglist__7442));
var more = cljs.core.rest(cljs.core.next(arglist__7442));
return G__7441__delegate(x, y, more);
});
G__7441.cljs$lang$arity$variadic = G__7441__delegate;
return G__7441;
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
var G__7443__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__7443 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7443__delegate.call(this, x, y, more);
};
G__7443.cljs$lang$maxFixedArity = 2;
G__7443.cljs$lang$applyTo = (function (arglist__7444){
var x = cljs.core.first(arglist__7444);
var y = cljs.core.first(cljs.core.next(arglist__7444));
var more = cljs.core.rest(cljs.core.next(arglist__7444));
return G__7443__delegate(x, y, more);
});
G__7443.cljs$lang$arity$variadic = G__7443__delegate;
return G__7443;
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
var rem__7446 = (n % d);
return cljs.core.fix.call(null,((n - rem__7446) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__7448 = cljs.core.quot.call(null,n,d);
return (n - (d * q__7448));
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
var v__7451 = (v - ((v >> 1) & 1431655765));
var v__7452 = ((v__7451 & 858993459) + ((v__7451 >> 2) & 858993459));
return ((((v__7452 + (v__7452 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__7453__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7454 = y;
var G__7455 = cljs.core.first.call(null,more);
var G__7456 = cljs.core.next.call(null,more);
x = G__7454;
y = G__7455;
more = G__7456;
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
var G__7453 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7453__delegate.call(this, x, y, more);
};
G__7453.cljs$lang$maxFixedArity = 2;
G__7453.cljs$lang$applyTo = (function (arglist__7457){
var x = cljs.core.first(arglist__7457);
var y = cljs.core.first(cljs.core.next(arglist__7457));
var more = cljs.core.rest(cljs.core.next(arglist__7457));
return G__7453__delegate(x, y, more);
});
G__7453.cljs$lang$arity$variadic = G__7453__delegate;
return G__7453;
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
var n__7461 = n;
var xs__7462 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7463 = xs__7462;
if(and__3822__auto____7463)
{return (n__7461 > 0);
} else
{return and__3822__auto____7463;
}
})()))
{{
var G__7464 = (n__7461 - 1);
var G__7465 = cljs.core.next.call(null,xs__7462);
n__7461 = G__7464;
xs__7462 = G__7465;
continue;
}
} else
{return xs__7462;
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
var G__7466__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7467 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__7468 = cljs.core.next.call(null,more);
sb = G__7467;
more = G__7468;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__7466 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7466__delegate.call(this, x, ys);
};
G__7466.cljs$lang$maxFixedArity = 1;
G__7466.cljs$lang$applyTo = (function (arglist__7469){
var x = cljs.core.first(arglist__7469);
var ys = cljs.core.rest(arglist__7469);
return G__7466__delegate(x, ys);
});
G__7466.cljs$lang$arity$variadic = G__7466__delegate;
return G__7466;
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
var G__7470__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7471 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__7472 = cljs.core.next.call(null,more);
sb = G__7471;
more = G__7472;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__7470 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7470__delegate.call(this, x, ys);
};
G__7470.cljs$lang$maxFixedArity = 1;
G__7470.cljs$lang$applyTo = (function (arglist__7473){
var x = cljs.core.first(arglist__7473);
var ys = cljs.core.rest(arglist__7473);
return G__7470__delegate(x, ys);
});
G__7470.cljs$lang$arity$variadic = G__7470__delegate;
return G__7470;
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
format.cljs$lang$applyTo = (function (arglist__7474){
var fmt = cljs.core.first(arglist__7474);
var args = cljs.core.rest(arglist__7474);
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__7477 = cljs.core.seq.call(null,x);
var ys__7478 = cljs.core.seq.call(null,y);
while(true){
if((xs__7477 == null))
{return (ys__7478 == null);
} else
{if((ys__7478 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__7477),cljs.core.first.call(null,ys__7478)))
{{
var G__7479 = cljs.core.next.call(null,xs__7477);
var G__7480 = cljs.core.next.call(null,ys__7478);
xs__7477 = G__7479;
ys__7478 = G__7480;
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
return cljs.core.reduce.call(null,(function (p1__7481_SHARP_,p2__7482_SHARP_){
return cljs.core.hash_combine.call(null,p1__7481_SHARP_,cljs.core.hash.call(null,p2__7482_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__7486 = 0;
var s__7487 = cljs.core.seq.call(null,m);
while(true){
if(s__7487)
{var e__7488 = cljs.core.first.call(null,s__7487);
{
var G__7489 = ((h__7486 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__7488)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__7488)))) % 4503599627370496);
var G__7490 = cljs.core.next.call(null,s__7487);
h__7486 = G__7489;
s__7487 = G__7490;
continue;
}
} else
{return h__7486;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__7494 = 0;
var s__7495 = cljs.core.seq.call(null,s);
while(true){
if(s__7495)
{var e__7496 = cljs.core.first.call(null,s__7495);
{
var G__7497 = ((h__7494 + cljs.core.hash.call(null,e__7496)) % 4503599627370496);
var G__7498 = cljs.core.next.call(null,s__7495);
h__7494 = G__7497;
s__7495 = G__7498;
continue;
}
} else
{return h__7494;
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
var G__7519__7520 = cljs.core.seq.call(null,fn_map);
if(G__7519__7520)
{var G__7522__7524 = cljs.core.first.call(null,G__7519__7520);
var vec__7523__7525 = G__7522__7524;
var key_name__7526 = cljs.core.nth.call(null,vec__7523__7525,0,null);
var f__7527 = cljs.core.nth.call(null,vec__7523__7525,1,null);
var G__7519__7528 = G__7519__7520;
var G__7522__7529 = G__7522__7524;
var G__7519__7530 = G__7519__7528;
while(true){
var vec__7531__7532 = G__7522__7529;
var key_name__7533 = cljs.core.nth.call(null,vec__7531__7532,0,null);
var f__7534 = cljs.core.nth.call(null,vec__7531__7532,1,null);
var G__7519__7535 = G__7519__7530;
var str_name__7536 = cljs.core.name.call(null,key_name__7533);
(obj[str_name__7536] = f__7534);
var temp__3974__auto____7537 = cljs.core.next.call(null,G__7519__7535);
if(temp__3974__auto____7537)
{var G__7519__7538 = temp__3974__auto____7537;
{
var G__7539 = cljs.core.first.call(null,G__7519__7538);
var G__7540 = G__7519__7538;
G__7522__7529 = G__7539;
G__7519__7530 = G__7540;
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
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7541 = this;
var h__2548__auto____7542 = this__7541.__hash;
if(!((h__2548__auto____7542 == null)))
{return h__2548__auto____7542;
} else
{var h__2548__auto____7543 = cljs.core.hash_coll.call(null,coll);
this__7541.__hash = h__2548__auto____7543;
return h__2548__auto____7543;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7544 = this;
if((this__7544.count === 1))
{return null;
} else
{return this__7544.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7545 = this;
return (new cljs.core.List(this__7545.meta,o,coll,(this__7545.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__7546 = this;
var this__7547 = this;
return cljs.core.pr_str.call(null,this__7547);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7548 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7549 = this;
return this__7549.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7550 = this;
return this__7550.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7551 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7552 = this;
return this__7552.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7553 = this;
if((this__7553.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__7553.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7554 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7555 = this;
return (new cljs.core.List(meta,this__7555.first,this__7555.rest,this__7555.count,this__7555.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7556 = this;
return this__7556.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7557 = this;
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
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7558 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7559 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7560 = this;
return (new cljs.core.List(this__7560.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__7561 = this;
var this__7562 = this;
return cljs.core.pr_str.call(null,this__7562);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7563 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7564 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7565 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7566 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7567 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7568 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7569 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7570 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7571 = this;
return this__7571.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7572 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__7576__7577 = coll;
if(G__7576__7577)
{if((function (){var or__3824__auto____7578 = (G__7576__7577.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____7578)
{return or__3824__auto____7578;
} else
{return G__7576__7577.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__7576__7577.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7576__7577);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7576__7577);
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
var G__7579__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__7579 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7579__delegate.call(this, x, y, z, items);
};
G__7579.cljs$lang$maxFixedArity = 3;
G__7579.cljs$lang$applyTo = (function (arglist__7580){
var x = cljs.core.first(arglist__7580);
var y = cljs.core.first(cljs.core.next(arglist__7580));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7580)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7580)));
return G__7579__delegate(x, y, z, items);
});
G__7579.cljs$lang$arity$variadic = G__7579__delegate;
return G__7579;
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
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7581 = this;
var h__2548__auto____7582 = this__7581.__hash;
if(!((h__2548__auto____7582 == null)))
{return h__2548__auto____7582;
} else
{var h__2548__auto____7583 = cljs.core.hash_coll.call(null,coll);
this__7581.__hash = h__2548__auto____7583;
return h__2548__auto____7583;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7584 = this;
if((this__7584.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__7584.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7585 = this;
return (new cljs.core.Cons(null,o,coll,this__7585.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__7586 = this;
var this__7587 = this;
return cljs.core.pr_str.call(null,this__7587);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7588 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7589 = this;
return this__7589.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7590 = this;
if((this__7590.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__7590.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7591 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7592 = this;
return (new cljs.core.Cons(meta,this__7592.first,this__7592.rest,this__7592.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7593 = this;
return this__7593.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7594 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7594.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____7599 = (coll == null);
if(or__3824__auto____7599)
{return or__3824__auto____7599;
} else
{var G__7600__7601 = coll;
if(G__7600__7601)
{if((function (){var or__3824__auto____7602 = (G__7600__7601.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7602)
{return or__3824__auto____7602;
} else
{return G__7600__7601.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7600__7601.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7600__7601);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7600__7601);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__7606__7607 = x;
if(G__7606__7607)
{if((function (){var or__3824__auto____7608 = (G__7606__7607.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____7608)
{return or__3824__auto____7608;
} else
{return G__7606__7607.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__7606__7607.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7606__7607);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7606__7607);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__7609 = null;
var G__7609__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__7609__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__7609 = function(string,f,start){
switch(arguments.length){
case 2:
return G__7609__2.call(this,string,f);
case 3:
return G__7609__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7609;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__7610 = null;
var G__7610__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__7610__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__7610 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__7610__2.call(this,string,k);
case 3:
return G__7610__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7610;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__7611 = null;
var G__7611__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__7611__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__7611 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__7611__2.call(this,string,n);
case 3:
return G__7611__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7611;
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
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__7623 = null;
var G__7623__2 = (function (this_sym7614,coll){
var this__7616 = this;
var this_sym7614__7617 = this;
var ___7618 = this_sym7614__7617;
if((coll == null))
{return null;
} else
{var strobj__7619 = coll.strobj;
if((strobj__7619 == null))
{return cljs.core._lookup.call(null,coll,this__7616.k,null);
} else
{return (strobj__7619[this__7616.k]);
}
}
});
var G__7623__3 = (function (this_sym7615,coll,not_found){
var this__7616 = this;
var this_sym7615__7620 = this;
var ___7621 = this_sym7615__7620;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__7616.k,not_found);
}
});
G__7623 = function(this_sym7615,coll,not_found){
switch(arguments.length){
case 2:
return G__7623__2.call(this,this_sym7615,coll);
case 3:
return G__7623__3.call(this,this_sym7615,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7623;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym7612,args7613){
var this__7622 = this;
return this_sym7612.call.apply(this_sym7612,[this_sym7612].concat(args7613.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__7632 = null;
var G__7632__2 = (function (this_sym7626,coll){
var this_sym7626__7628 = this;
var this__7629 = this_sym7626__7628;
return cljs.core._lookup.call(null,coll,this__7629.toString(),null);
});
var G__7632__3 = (function (this_sym7627,coll,not_found){
var this_sym7627__7630 = this;
var this__7631 = this_sym7627__7630;
return cljs.core._lookup.call(null,coll,this__7631.toString(),not_found);
});
G__7632 = function(this_sym7627,coll,not_found){
switch(arguments.length){
case 2:
return G__7632__2.call(this,this_sym7627,coll);
case 3:
return G__7632__3.call(this,this_sym7627,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7632;
})()
;
String.prototype.apply = (function (this_sym7624,args7625){
return this_sym7624.call.apply(this_sym7624,[this_sym7624].concat(args7625.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__7634 = lazy_seq.x;
if(lazy_seq.realized)
{return x__7634;
} else
{lazy_seq.x = x__7634.call(null);
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
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7635 = this;
var h__2548__auto____7636 = this__7635.__hash;
if(!((h__2548__auto____7636 == null)))
{return h__2548__auto____7636;
} else
{var h__2548__auto____7637 = cljs.core.hash_coll.call(null,coll);
this__7635.__hash = h__2548__auto____7637;
return h__2548__auto____7637;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7638 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7639 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__7640 = this;
var this__7641 = this;
return cljs.core.pr_str.call(null,this__7641);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7642 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7643 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7644 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7645 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7646 = this;
return (new cljs.core.LazySeq(meta,this__7646.realized,this__7646.x,this__7646.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7647 = this;
return this__7647.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7648 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7648.meta);
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
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7649 = this;
return this__7649.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__7650 = this;
var ___7651 = this;
(this__7650.buf[this__7650.end] = o);
return this__7650.end = (this__7650.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__7652 = this;
var ___7653 = this;
var ret__7654 = (new cljs.core.ArrayChunk(this__7652.buf,0,this__7652.end));
this__7652.buf = null;
return ret__7654;
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
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7655 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__7655.arr[this__7655.off]),(this__7655.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7656 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__7656.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__7657 = this;
if((this__7657.off === this__7657.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__7657.arr,(this__7657.off + 1),this__7657.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__7658 = this;
return (this__7658.arr[(this__7658.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__7659 = this;
if((function (){var and__3822__auto____7660 = (i >= 0);
if(and__3822__auto____7660)
{return (i < (this__7659.end - this__7659.off));
} else
{return and__3822__auto____7660;
}
})())
{return (this__7659.arr[(this__7659.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7661 = this;
return (this__7661.end - this__7661.off);
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
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__7662 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7663 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7664 = this;
return cljs.core._nth.call(null,this__7664.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7665 = this;
if((cljs.core._count.call(null,this__7665.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__7665.chunk),this__7665.more,this__7665.meta));
} else
{if((this__7665.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7665.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__7666 = this;
if((this__7666.more == null))
{return null;
} else
{return this__7666.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7667 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__7668 = this;
return (new cljs.core.ChunkedCons(this__7668.chunk,this__7668.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7669 = this;
return this__7669.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__7670 = this;
return this__7670.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__7671 = this;
if((this__7671.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7671.more;
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
if((function (){var G__7675__7676 = s;
if(G__7675__7676)
{if(cljs.core.truth_((function (){var or__3824__auto____7677 = null;
if(cljs.core.truth_(or__3824__auto____7677))
{return or__3824__auto____7677;
} else
{return G__7675__7676.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__7675__7676.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7675__7676);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7675__7676);
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
var ary__7680 = [];
var s__7681 = s;
while(true){
if(cljs.core.seq.call(null,s__7681))
{ary__7680.push(cljs.core.first.call(null,s__7681));
{
var G__7682 = cljs.core.next.call(null,s__7681);
s__7681 = G__7682;
continue;
}
} else
{return ary__7680;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__7686 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__7687 = 0;
var xs__7688 = cljs.core.seq.call(null,coll);
while(true){
if(xs__7688)
{(ret__7686[i__7687] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__7688)));
{
var G__7689 = (i__7687 + 1);
var G__7690 = cljs.core.next.call(null,xs__7688);
i__7687 = G__7689;
xs__7688 = G__7690;
continue;
}
} else
{}
break;
}
return ret__7686;
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
var a__7698 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7699 = cljs.core.seq.call(null,init_val_or_seq);
var i__7700 = 0;
var s__7701 = s__7699;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7702 = s__7701;
if(and__3822__auto____7702)
{return (i__7700 < size);
} else
{return and__3822__auto____7702;
}
})()))
{(a__7698[i__7700] = cljs.core.first.call(null,s__7701));
{
var G__7705 = (i__7700 + 1);
var G__7706 = cljs.core.next.call(null,s__7701);
i__7700 = G__7705;
s__7701 = G__7706;
continue;
}
} else
{return a__7698;
}
break;
}
} else
{var n__2883__auto____7703 = size;
var i__7704 = 0;
while(true){
if((i__7704 < n__2883__auto____7703))
{(a__7698[i__7704] = init_val_or_seq);
{
var G__7707 = (i__7704 + 1);
i__7704 = G__7707;
continue;
}
} else
{}
break;
}
return a__7698;
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
var a__7715 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7716 = cljs.core.seq.call(null,init_val_or_seq);
var i__7717 = 0;
var s__7718 = s__7716;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7719 = s__7718;
if(and__3822__auto____7719)
{return (i__7717 < size);
} else
{return and__3822__auto____7719;
}
})()))
{(a__7715[i__7717] = cljs.core.first.call(null,s__7718));
{
var G__7722 = (i__7717 + 1);
var G__7723 = cljs.core.next.call(null,s__7718);
i__7717 = G__7722;
s__7718 = G__7723;
continue;
}
} else
{return a__7715;
}
break;
}
} else
{var n__2883__auto____7720 = size;
var i__7721 = 0;
while(true){
if((i__7721 < n__2883__auto____7720))
{(a__7715[i__7721] = init_val_or_seq);
{
var G__7724 = (i__7721 + 1);
i__7721 = G__7724;
continue;
}
} else
{}
break;
}
return a__7715;
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
var a__7732 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7733 = cljs.core.seq.call(null,init_val_or_seq);
var i__7734 = 0;
var s__7735 = s__7733;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7736 = s__7735;
if(and__3822__auto____7736)
{return (i__7734 < size);
} else
{return and__3822__auto____7736;
}
})()))
{(a__7732[i__7734] = cljs.core.first.call(null,s__7735));
{
var G__7739 = (i__7734 + 1);
var G__7740 = cljs.core.next.call(null,s__7735);
i__7734 = G__7739;
s__7735 = G__7740;
continue;
}
} else
{return a__7732;
}
break;
}
} else
{var n__2883__auto____7737 = size;
var i__7738 = 0;
while(true){
if((i__7738 < n__2883__auto____7737))
{(a__7732[i__7738] = init_val_or_seq);
{
var G__7741 = (i__7738 + 1);
i__7738 = G__7741;
continue;
}
} else
{}
break;
}
return a__7732;
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
{var s__7746 = s;
var i__7747 = n;
var sum__7748 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7749 = (i__7747 > 0);
if(and__3822__auto____7749)
{return cljs.core.seq.call(null,s__7746);
} else
{return and__3822__auto____7749;
}
})()))
{{
var G__7750 = cljs.core.next.call(null,s__7746);
var G__7751 = (i__7747 - 1);
var G__7752 = (sum__7748 + 1);
s__7746 = G__7750;
i__7747 = G__7751;
sum__7748 = G__7752;
continue;
}
} else
{return sum__7748;
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
var s__7757 = cljs.core.seq.call(null,x);
if(s__7757)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__7757))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__7757),concat.call(null,cljs.core.chunk_rest.call(null,s__7757),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__7757),concat.call(null,cljs.core.rest.call(null,s__7757),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__7761__delegate = function (x,y,zs){
var cat__7760 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__7759 = cljs.core.seq.call(null,xys);
if(xys__7759)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__7759))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__7759),cat.call(null,cljs.core.chunk_rest.call(null,xys__7759),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__7759),cat.call(null,cljs.core.rest.call(null,xys__7759),zs));
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
return cat__7760.call(null,concat.call(null,x,y),zs);
};
var G__7761 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7761__delegate.call(this, x, y, zs);
};
G__7761.cljs$lang$maxFixedArity = 2;
G__7761.cljs$lang$applyTo = (function (arglist__7762){
var x = cljs.core.first(arglist__7762);
var y = cljs.core.first(cljs.core.next(arglist__7762));
var zs = cljs.core.rest(cljs.core.next(arglist__7762));
return G__7761__delegate(x, y, zs);
});
G__7761.cljs$lang$arity$variadic = G__7761__delegate;
return G__7761;
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
var G__7763__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__7763 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7763__delegate.call(this, a, b, c, d, more);
};
G__7763.cljs$lang$maxFixedArity = 4;
G__7763.cljs$lang$applyTo = (function (arglist__7764){
var a = cljs.core.first(arglist__7764);
var b = cljs.core.first(cljs.core.next(arglist__7764));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7764)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7764))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7764))));
return G__7763__delegate(a, b, c, d, more);
});
G__7763.cljs$lang$arity$variadic = G__7763__delegate;
return G__7763;
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
var args__7806 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__7807 = cljs.core._first.call(null,args__7806);
var args__7808 = cljs.core._rest.call(null,args__7806);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__7807);
} else
{return f.call(null,a__7807);
}
} else
{var b__7809 = cljs.core._first.call(null,args__7808);
var args__7810 = cljs.core._rest.call(null,args__7808);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__7807,b__7809);
} else
{return f.call(null,a__7807,b__7809);
}
} else
{var c__7811 = cljs.core._first.call(null,args__7810);
var args__7812 = cljs.core._rest.call(null,args__7810);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__7807,b__7809,c__7811);
} else
{return f.call(null,a__7807,b__7809,c__7811);
}
} else
{var d__7813 = cljs.core._first.call(null,args__7812);
var args__7814 = cljs.core._rest.call(null,args__7812);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__7807,b__7809,c__7811,d__7813);
} else
{return f.call(null,a__7807,b__7809,c__7811,d__7813);
}
} else
{var e__7815 = cljs.core._first.call(null,args__7814);
var args__7816 = cljs.core._rest.call(null,args__7814);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__7807,b__7809,c__7811,d__7813,e__7815);
} else
{return f.call(null,a__7807,b__7809,c__7811,d__7813,e__7815);
}
} else
{var f__7817 = cljs.core._first.call(null,args__7816);
var args__7818 = cljs.core._rest.call(null,args__7816);
if((argc === 6))
{if(f__7817.cljs$lang$arity$6)
{return f__7817.cljs$lang$arity$6(a__7807,b__7809,c__7811,d__7813,e__7815,f__7817);
} else
{return f__7817.call(null,a__7807,b__7809,c__7811,d__7813,e__7815,f__7817);
}
} else
{var g__7819 = cljs.core._first.call(null,args__7818);
var args__7820 = cljs.core._rest.call(null,args__7818);
if((argc === 7))
{if(f__7817.cljs$lang$arity$7)
{return f__7817.cljs$lang$arity$7(a__7807,b__7809,c__7811,d__7813,e__7815,f__7817,g__7819);
} else
{return f__7817.call(null,a__7807,b__7809,c__7811,d__7813,e__7815,f__7817,g__7819);
}
} else
{var h__7821 = cljs.core._first.call(null,args__7820);
var args__7822 = cljs.core._rest.call(null,args__7820);
if((argc === 8))
{if(f__7817.cljs$lang$arity$8)
{return f__7817.cljs$lang$arity$8(a__7807,b__7809,c__7811,d__7813,e__7815,f__7817,g__7819,h__7821);
} else
{return f__7817.call(null,a__7807,b__7809,c__7811,d__7813,e__7815,f__7817,g__7819,h__7821);
}
} else
{var i__7823 = cljs.core._first.call(null,args__7822);
var args__7824 = cljs.core._rest.call(null,args__7822);
if((argc === 9))
{if(f__7817.cljs$lang$arity$9)
{return f__7817.cljs$lang$arity$9(a__7807,b__7809,c__7811,d__7813,e__7815,f__7817,g__7819,h__7821,i__7823);
} else
{return f__7817.call(null,a__7807,b__7809,c__7811,d__7813,e__7815,f__7817,g__7819,h__7821,i__7823);
}
} else
{var j__7825 = cljs.core._first.call(null,args__7824);
var args__7826 = cljs.core._rest.call(null,args__7824);
if((argc === 10))
{if(f__7817.cljs$lang$arity$10)
{return f__7817.cljs$lang$arity$10(a__7807,b__7809,c__7811,d__7813,e__7815,f__7817,g__7819,h__7821,i__7823,j__7825);
} else
{return f__7817.call(null,a__7807,b__7809,c__7811,d__7813,e__7815,f__7817,g__7819,h__7821,i__7823,j__7825);
}
} else
{var k__7827 = cljs.core._first.call(null,args__7826);
var args__7828 = cljs.core._rest.call(null,args__7826);
if((argc === 11))
{if(f__7817.cljs$lang$arity$11)
{return f__7817.cljs$lang$arity$11(a__7807,b__7809,c__7811,d__7813,e__7815,f__7817,g__7819,h__7821,i__7823,j__7825,k__7827);
} else
{return f__7817.call(null,a__7807,b__7809,c__7811,d__7813,e__7815,f__7817,g__7819,h__7821,i__7823,j__7825,k__7827);
}
} else
{var l__7829 = cljs.core._first.call(null,args__7828);
var args__7830 = cljs.core._rest.call(null,args__7828);
if((argc === 12))
{if(f__7817.cljs$lang$arity$12)
{return f__7817.cljs$lang$arity$12(a__7807,b__7809,c__7811,d__7813,e__7815,f__7817,g__7819,h__7821,i__7823,j__7825,k__7827,l__7829);
} else
{return f__7817.call(null,a__7807,b__7809,c__7811,d__7813,e__7815,f__7817,g__7819,h__7821,i__7823,j__7825,k__7827,l__7829);
}
} else
{var m__7831 = cljs.core._first.call(null,args__7830);
var args__7832 = cljs.core._rest.call(null,args__7830);
if((argc === 13))
{if(f__7817.cljs$lang$arity$13)
{return f__7817.cljs$lang$arity$13(a__7807,b__7809,c__7811,d__7813,e__7815,f__7817,g__7819,h__7821,i__7823,j__7825,k__7827,l__7829,m__7831);
} else
{return f__7817.call(null,a__7807,b__7809,c__7811,d__7813,e__7815,f__7817,g__7819,h__7821,i__7823,j__7825,k__7827,l__7829,m__7831);
}
} else
{var n__7833 = cljs.core._first.call(null,args__7832);
var args__7834 = cljs.core._rest.call(null,args__7832);
if((argc === 14))
{if(f__7817.cljs$lang$arity$14)
{return f__7817.cljs$lang$arity$14(a__7807,b__7809,c__7811,d__7813,e__7815,f__7817,g__7819,h__7821,i__7823,j__7825,k__7827,l__7829,m__7831,n__7833);
} else
{return f__7817.call(null,a__7807,b__7809,c__7811,d__7813,e__7815,f__7817,g__7819,h__7821,i__7823,j__7825,k__7827,l__7829,m__7831,n__7833);
}
} else
{var o__7835 = cljs.core._first.call(null,args__7834);
var args__7836 = cljs.core._rest.call(null,args__7834);
if((argc === 15))
{if(f__7817.cljs$lang$arity$15)
{return f__7817.cljs$lang$arity$15(a__7807,b__7809,c__7811,d__7813,e__7815,f__7817,g__7819,h__7821,i__7823,j__7825,k__7827,l__7829,m__7831,n__7833,o__7835);
} else
{return f__7817.call(null,a__7807,b__7809,c__7811,d__7813,e__7815,f__7817,g__7819,h__7821,i__7823,j__7825,k__7827,l__7829,m__7831,n__7833,o__7835);
}
} else
{var p__7837 = cljs.core._first.call(null,args__7836);
var args__7838 = cljs.core._rest.call(null,args__7836);
if((argc === 16))
{if(f__7817.cljs$lang$arity$16)
{return f__7817.cljs$lang$arity$16(a__7807,b__7809,c__7811,d__7813,e__7815,f__7817,g__7819,h__7821,i__7823,j__7825,k__7827,l__7829,m__7831,n__7833,o__7835,p__7837);
} else
{return f__7817.call(null,a__7807,b__7809,c__7811,d__7813,e__7815,f__7817,g__7819,h__7821,i__7823,j__7825,k__7827,l__7829,m__7831,n__7833,o__7835,p__7837);
}
} else
{var q__7839 = cljs.core._first.call(null,args__7838);
var args__7840 = cljs.core._rest.call(null,args__7838);
if((argc === 17))
{if(f__7817.cljs$lang$arity$17)
{return f__7817.cljs$lang$arity$17(a__7807,b__7809,c__7811,d__7813,e__7815,f__7817,g__7819,h__7821,i__7823,j__7825,k__7827,l__7829,m__7831,n__7833,o__7835,p__7837,q__7839);
} else
{return f__7817.call(null,a__7807,b__7809,c__7811,d__7813,e__7815,f__7817,g__7819,h__7821,i__7823,j__7825,k__7827,l__7829,m__7831,n__7833,o__7835,p__7837,q__7839);
}
} else
{var r__7841 = cljs.core._first.call(null,args__7840);
var args__7842 = cljs.core._rest.call(null,args__7840);
if((argc === 18))
{if(f__7817.cljs$lang$arity$18)
{return f__7817.cljs$lang$arity$18(a__7807,b__7809,c__7811,d__7813,e__7815,f__7817,g__7819,h__7821,i__7823,j__7825,k__7827,l__7829,m__7831,n__7833,o__7835,p__7837,q__7839,r__7841);
} else
{return f__7817.call(null,a__7807,b__7809,c__7811,d__7813,e__7815,f__7817,g__7819,h__7821,i__7823,j__7825,k__7827,l__7829,m__7831,n__7833,o__7835,p__7837,q__7839,r__7841);
}
} else
{var s__7843 = cljs.core._first.call(null,args__7842);
var args__7844 = cljs.core._rest.call(null,args__7842);
if((argc === 19))
{if(f__7817.cljs$lang$arity$19)
{return f__7817.cljs$lang$arity$19(a__7807,b__7809,c__7811,d__7813,e__7815,f__7817,g__7819,h__7821,i__7823,j__7825,k__7827,l__7829,m__7831,n__7833,o__7835,p__7837,q__7839,r__7841,s__7843);
} else
{return f__7817.call(null,a__7807,b__7809,c__7811,d__7813,e__7815,f__7817,g__7819,h__7821,i__7823,j__7825,k__7827,l__7829,m__7831,n__7833,o__7835,p__7837,q__7839,r__7841,s__7843);
}
} else
{var t__7845 = cljs.core._first.call(null,args__7844);
var args__7846 = cljs.core._rest.call(null,args__7844);
if((argc === 20))
{if(f__7817.cljs$lang$arity$20)
{return f__7817.cljs$lang$arity$20(a__7807,b__7809,c__7811,d__7813,e__7815,f__7817,g__7819,h__7821,i__7823,j__7825,k__7827,l__7829,m__7831,n__7833,o__7835,p__7837,q__7839,r__7841,s__7843,t__7845);
} else
{return f__7817.call(null,a__7807,b__7809,c__7811,d__7813,e__7815,f__7817,g__7819,h__7821,i__7823,j__7825,k__7827,l__7829,m__7831,n__7833,o__7835,p__7837,q__7839,r__7841,s__7843,t__7845);
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
var fixed_arity__7861 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7862 = cljs.core.bounded_count.call(null,args,(fixed_arity__7861 + 1));
if((bc__7862 <= fixed_arity__7861))
{return cljs.core.apply_to.call(null,f,bc__7862,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__7863 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__7864 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7865 = cljs.core.bounded_count.call(null,arglist__7863,(fixed_arity__7864 + 1));
if((bc__7865 <= fixed_arity__7864))
{return cljs.core.apply_to.call(null,f,bc__7865,arglist__7863);
} else
{return f.cljs$lang$applyTo(arglist__7863);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7863));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__7866 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__7867 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7868 = cljs.core.bounded_count.call(null,arglist__7866,(fixed_arity__7867 + 1));
if((bc__7868 <= fixed_arity__7867))
{return cljs.core.apply_to.call(null,f,bc__7868,arglist__7866);
} else
{return f.cljs$lang$applyTo(arglist__7866);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7866));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__7869 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__7870 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7871 = cljs.core.bounded_count.call(null,arglist__7869,(fixed_arity__7870 + 1));
if((bc__7871 <= fixed_arity__7870))
{return cljs.core.apply_to.call(null,f,bc__7871,arglist__7869);
} else
{return f.cljs$lang$applyTo(arglist__7869);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7869));
}
});
var apply__6 = (function() { 
var G__7875__delegate = function (f,a,b,c,d,args){
var arglist__7872 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__7873 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7874 = cljs.core.bounded_count.call(null,arglist__7872,(fixed_arity__7873 + 1));
if((bc__7874 <= fixed_arity__7873))
{return cljs.core.apply_to.call(null,f,bc__7874,arglist__7872);
} else
{return f.cljs$lang$applyTo(arglist__7872);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7872));
}
};
var G__7875 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7875__delegate.call(this, f, a, b, c, d, args);
};
G__7875.cljs$lang$maxFixedArity = 5;
G__7875.cljs$lang$applyTo = (function (arglist__7876){
var f = cljs.core.first(arglist__7876);
var a = cljs.core.first(cljs.core.next(arglist__7876));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7876)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7876))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7876)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7876)))));
return G__7875__delegate(f, a, b, c, d, args);
});
G__7875.cljs$lang$arity$variadic = G__7875__delegate;
return G__7875;
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
vary_meta.cljs$lang$applyTo = (function (arglist__7877){
var obj = cljs.core.first(arglist__7877);
var f = cljs.core.first(cljs.core.next(arglist__7877));
var args = cljs.core.rest(cljs.core.next(arglist__7877));
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
var G__7878__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__7878 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7878__delegate.call(this, x, y, more);
};
G__7878.cljs$lang$maxFixedArity = 2;
G__7878.cljs$lang$applyTo = (function (arglist__7879){
var x = cljs.core.first(arglist__7879);
var y = cljs.core.first(cljs.core.next(arglist__7879));
var more = cljs.core.rest(cljs.core.next(arglist__7879));
return G__7878__delegate(x, y, more);
});
G__7878.cljs$lang$arity$variadic = G__7878__delegate;
return G__7878;
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
var G__7880 = pred;
var G__7881 = cljs.core.next.call(null,coll);
pred = G__7880;
coll = G__7881;
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
{var or__3824__auto____7883 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____7883))
{return or__3824__auto____7883;
} else
{{
var G__7884 = pred;
var G__7885 = cljs.core.next.call(null,coll);
pred = G__7884;
coll = G__7885;
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
var G__7886 = null;
var G__7886__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__7886__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__7886__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__7886__3 = (function() { 
var G__7887__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__7887 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7887__delegate.call(this, x, y, zs);
};
G__7887.cljs$lang$maxFixedArity = 2;
G__7887.cljs$lang$applyTo = (function (arglist__7888){
var x = cljs.core.first(arglist__7888);
var y = cljs.core.first(cljs.core.next(arglist__7888));
var zs = cljs.core.rest(cljs.core.next(arglist__7888));
return G__7887__delegate(x, y, zs);
});
G__7887.cljs$lang$arity$variadic = G__7887__delegate;
return G__7887;
})()
;
G__7886 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__7886__0.call(this);
case 1:
return G__7886__1.call(this,x);
case 2:
return G__7886__2.call(this,x,y);
default:
return G__7886__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__7886.cljs$lang$maxFixedArity = 2;
G__7886.cljs$lang$applyTo = G__7886__3.cljs$lang$applyTo;
return G__7886;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__7889__delegate = function (args){
return x;
};
var G__7889 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7889__delegate.call(this, args);
};
G__7889.cljs$lang$maxFixedArity = 0;
G__7889.cljs$lang$applyTo = (function (arglist__7890){
var args = cljs.core.seq(arglist__7890);;
return G__7889__delegate(args);
});
G__7889.cljs$lang$arity$variadic = G__7889__delegate;
return G__7889;
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
var G__7897 = null;
var G__7897__0 = (function (){
return f.call(null,g.call(null));
});
var G__7897__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__7897__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__7897__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__7897__4 = (function() { 
var G__7898__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__7898 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7898__delegate.call(this, x, y, z, args);
};
G__7898.cljs$lang$maxFixedArity = 3;
G__7898.cljs$lang$applyTo = (function (arglist__7899){
var x = cljs.core.first(arglist__7899);
var y = cljs.core.first(cljs.core.next(arglist__7899));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7899)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7899)));
return G__7898__delegate(x, y, z, args);
});
G__7898.cljs$lang$arity$variadic = G__7898__delegate;
return G__7898;
})()
;
G__7897 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7897__0.call(this);
case 1:
return G__7897__1.call(this,x);
case 2:
return G__7897__2.call(this,x,y);
case 3:
return G__7897__3.call(this,x,y,z);
default:
return G__7897__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7897.cljs$lang$maxFixedArity = 3;
G__7897.cljs$lang$applyTo = G__7897__4.cljs$lang$applyTo;
return G__7897;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__7900 = null;
var G__7900__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__7900__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__7900__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__7900__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__7900__4 = (function() { 
var G__7901__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__7901 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7901__delegate.call(this, x, y, z, args);
};
G__7901.cljs$lang$maxFixedArity = 3;
G__7901.cljs$lang$applyTo = (function (arglist__7902){
var x = cljs.core.first(arglist__7902);
var y = cljs.core.first(cljs.core.next(arglist__7902));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7902)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7902)));
return G__7901__delegate(x, y, z, args);
});
G__7901.cljs$lang$arity$variadic = G__7901__delegate;
return G__7901;
})()
;
G__7900 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7900__0.call(this);
case 1:
return G__7900__1.call(this,x);
case 2:
return G__7900__2.call(this,x,y);
case 3:
return G__7900__3.call(this,x,y,z);
default:
return G__7900__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7900.cljs$lang$maxFixedArity = 3;
G__7900.cljs$lang$applyTo = G__7900__4.cljs$lang$applyTo;
return G__7900;
})()
});
var comp__4 = (function() { 
var G__7903__delegate = function (f1,f2,f3,fs){
var fs__7894 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__7904__delegate = function (args){
var ret__7895 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__7894),args);
var fs__7896 = cljs.core.next.call(null,fs__7894);
while(true){
if(fs__7896)
{{
var G__7905 = cljs.core.first.call(null,fs__7896).call(null,ret__7895);
var G__7906 = cljs.core.next.call(null,fs__7896);
ret__7895 = G__7905;
fs__7896 = G__7906;
continue;
}
} else
{return ret__7895;
}
break;
}
};
var G__7904 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7904__delegate.call(this, args);
};
G__7904.cljs$lang$maxFixedArity = 0;
G__7904.cljs$lang$applyTo = (function (arglist__7907){
var args = cljs.core.seq(arglist__7907);;
return G__7904__delegate(args);
});
G__7904.cljs$lang$arity$variadic = G__7904__delegate;
return G__7904;
})()
;
};
var G__7903 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7903__delegate.call(this, f1, f2, f3, fs);
};
G__7903.cljs$lang$maxFixedArity = 3;
G__7903.cljs$lang$applyTo = (function (arglist__7908){
var f1 = cljs.core.first(arglist__7908);
var f2 = cljs.core.first(cljs.core.next(arglist__7908));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7908)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7908)));
return G__7903__delegate(f1, f2, f3, fs);
});
G__7903.cljs$lang$arity$variadic = G__7903__delegate;
return G__7903;
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
var G__7909__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__7909 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7909__delegate.call(this, args);
};
G__7909.cljs$lang$maxFixedArity = 0;
G__7909.cljs$lang$applyTo = (function (arglist__7910){
var args = cljs.core.seq(arglist__7910);;
return G__7909__delegate(args);
});
G__7909.cljs$lang$arity$variadic = G__7909__delegate;
return G__7909;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__7911__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__7911 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7911__delegate.call(this, args);
};
G__7911.cljs$lang$maxFixedArity = 0;
G__7911.cljs$lang$applyTo = (function (arglist__7912){
var args = cljs.core.seq(arglist__7912);;
return G__7911__delegate(args);
});
G__7911.cljs$lang$arity$variadic = G__7911__delegate;
return G__7911;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__7913__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__7913 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7913__delegate.call(this, args);
};
G__7913.cljs$lang$maxFixedArity = 0;
G__7913.cljs$lang$applyTo = (function (arglist__7914){
var args = cljs.core.seq(arglist__7914);;
return G__7913__delegate(args);
});
G__7913.cljs$lang$arity$variadic = G__7913__delegate;
return G__7913;
})()
;
});
var partial__5 = (function() { 
var G__7915__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__7916__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__7916 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7916__delegate.call(this, args);
};
G__7916.cljs$lang$maxFixedArity = 0;
G__7916.cljs$lang$applyTo = (function (arglist__7917){
var args = cljs.core.seq(arglist__7917);;
return G__7916__delegate(args);
});
G__7916.cljs$lang$arity$variadic = G__7916__delegate;
return G__7916;
})()
;
};
var G__7915 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7915__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__7915.cljs$lang$maxFixedArity = 4;
G__7915.cljs$lang$applyTo = (function (arglist__7918){
var f = cljs.core.first(arglist__7918);
var arg1 = cljs.core.first(cljs.core.next(arglist__7918));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7918)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7918))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7918))));
return G__7915__delegate(f, arg1, arg2, arg3, more);
});
G__7915.cljs$lang$arity$variadic = G__7915__delegate;
return G__7915;
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
var G__7919 = null;
var G__7919__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__7919__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__7919__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__7919__4 = (function() { 
var G__7920__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__7920 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7920__delegate.call(this, a, b, c, ds);
};
G__7920.cljs$lang$maxFixedArity = 3;
G__7920.cljs$lang$applyTo = (function (arglist__7921){
var a = cljs.core.first(arglist__7921);
var b = cljs.core.first(cljs.core.next(arglist__7921));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7921)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7921)));
return G__7920__delegate(a, b, c, ds);
});
G__7920.cljs$lang$arity$variadic = G__7920__delegate;
return G__7920;
})()
;
G__7919 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__7919__1.call(this,a);
case 2:
return G__7919__2.call(this,a,b);
case 3:
return G__7919__3.call(this,a,b,c);
default:
return G__7919__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7919.cljs$lang$maxFixedArity = 3;
G__7919.cljs$lang$applyTo = G__7919__4.cljs$lang$applyTo;
return G__7919;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__7922 = null;
var G__7922__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7922__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__7922__4 = (function() { 
var G__7923__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__7923 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7923__delegate.call(this, a, b, c, ds);
};
G__7923.cljs$lang$maxFixedArity = 3;
G__7923.cljs$lang$applyTo = (function (arglist__7924){
var a = cljs.core.first(arglist__7924);
var b = cljs.core.first(cljs.core.next(arglist__7924));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7924)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7924)));
return G__7923__delegate(a, b, c, ds);
});
G__7923.cljs$lang$arity$variadic = G__7923__delegate;
return G__7923;
})()
;
G__7922 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7922__2.call(this,a,b);
case 3:
return G__7922__3.call(this,a,b,c);
default:
return G__7922__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7922.cljs$lang$maxFixedArity = 3;
G__7922.cljs$lang$applyTo = G__7922__4.cljs$lang$applyTo;
return G__7922;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__7925 = null;
var G__7925__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7925__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__7925__4 = (function() { 
var G__7926__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__7926 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7926__delegate.call(this, a, b, c, ds);
};
G__7926.cljs$lang$maxFixedArity = 3;
G__7926.cljs$lang$applyTo = (function (arglist__7927){
var a = cljs.core.first(arglist__7927);
var b = cljs.core.first(cljs.core.next(arglist__7927));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7927)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7927)));
return G__7926__delegate(a, b, c, ds);
});
G__7926.cljs$lang$arity$variadic = G__7926__delegate;
return G__7926;
})()
;
G__7925 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7925__2.call(this,a,b);
case 3:
return G__7925__3.call(this,a,b,c);
default:
return G__7925__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7925.cljs$lang$maxFixedArity = 3;
G__7925.cljs$lang$applyTo = G__7925__4.cljs$lang$applyTo;
return G__7925;
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
var mapi__7943 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7951 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7951)
{var s__7952 = temp__3974__auto____7951;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7952))
{var c__7953 = cljs.core.chunk_first.call(null,s__7952);
var size__7954 = cljs.core.count.call(null,c__7953);
var b__7955 = cljs.core.chunk_buffer.call(null,size__7954);
var n__2883__auto____7956 = size__7954;
var i__7957 = 0;
while(true){
if((i__7957 < n__2883__auto____7956))
{cljs.core.chunk_append.call(null,b__7955,f.call(null,(idx + i__7957),cljs.core._nth.call(null,c__7953,i__7957)));
{
var G__7958 = (i__7957 + 1);
i__7957 = G__7958;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7955),mapi.call(null,(idx + size__7954),cljs.core.chunk_rest.call(null,s__7952)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__7952)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__7952)));
}
} else
{return null;
}
}),null));
});
return mapi__7943.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7968 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7968)
{var s__7969 = temp__3974__auto____7968;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7969))
{var c__7970 = cljs.core.chunk_first.call(null,s__7969);
var size__7971 = cljs.core.count.call(null,c__7970);
var b__7972 = cljs.core.chunk_buffer.call(null,size__7971);
var n__2883__auto____7973 = size__7971;
var i__7974 = 0;
while(true){
if((i__7974 < n__2883__auto____7973))
{var x__7975 = f.call(null,cljs.core._nth.call(null,c__7970,i__7974));
if((x__7975 == null))
{} else
{cljs.core.chunk_append.call(null,b__7972,x__7975);
}
{
var G__7977 = (i__7974 + 1);
i__7974 = G__7977;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7972),keep.call(null,f,cljs.core.chunk_rest.call(null,s__7969)));
} else
{var x__7976 = f.call(null,cljs.core.first.call(null,s__7969));
if((x__7976 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__7969));
} else
{return cljs.core.cons.call(null,x__7976,keep.call(null,f,cljs.core.rest.call(null,s__7969)));
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
var keepi__8003 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8013 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8013)
{var s__8014 = temp__3974__auto____8013;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8014))
{var c__8015 = cljs.core.chunk_first.call(null,s__8014);
var size__8016 = cljs.core.count.call(null,c__8015);
var b__8017 = cljs.core.chunk_buffer.call(null,size__8016);
var n__2883__auto____8018 = size__8016;
var i__8019 = 0;
while(true){
if((i__8019 < n__2883__auto____8018))
{var x__8020 = f.call(null,(idx + i__8019),cljs.core._nth.call(null,c__8015,i__8019));
if((x__8020 == null))
{} else
{cljs.core.chunk_append.call(null,b__8017,x__8020);
}
{
var G__8022 = (i__8019 + 1);
i__8019 = G__8022;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8017),keepi.call(null,(idx + size__8016),cljs.core.chunk_rest.call(null,s__8014)));
} else
{var x__8021 = f.call(null,idx,cljs.core.first.call(null,s__8014));
if((x__8021 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__8014));
} else
{return cljs.core.cons.call(null,x__8021,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__8014)));
}
}
} else
{return null;
}
}),null));
});
return keepi__8003.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8108 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____8108))
{return p.call(null,y);
} else
{return and__3822__auto____8108;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8109 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____8109))
{var and__3822__auto____8110 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____8110))
{return p.call(null,z);
} else
{return and__3822__auto____8110;
}
} else
{return and__3822__auto____8109;
}
})());
});
var ep1__4 = (function() { 
var G__8179__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8111 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8111))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____8111;
}
})());
};
var G__8179 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8179__delegate.call(this, x, y, z, args);
};
G__8179.cljs$lang$maxFixedArity = 3;
G__8179.cljs$lang$applyTo = (function (arglist__8180){
var x = cljs.core.first(arglist__8180);
var y = cljs.core.first(cljs.core.next(arglist__8180));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8180)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8180)));
return G__8179__delegate(x, y, z, args);
});
G__8179.cljs$lang$arity$variadic = G__8179__delegate;
return G__8179;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8123 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8123))
{return p2.call(null,x);
} else
{return and__3822__auto____8123;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8124 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8124))
{var and__3822__auto____8125 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8125))
{var and__3822__auto____8126 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8126))
{return p2.call(null,y);
} else
{return and__3822__auto____8126;
}
} else
{return and__3822__auto____8125;
}
} else
{return and__3822__auto____8124;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8127 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8127))
{var and__3822__auto____8128 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8128))
{var and__3822__auto____8129 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____8129))
{var and__3822__auto____8130 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8130))
{var and__3822__auto____8131 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8131))
{return p2.call(null,z);
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
} else
{return and__3822__auto____8127;
}
})());
});
var ep2__4 = (function() { 
var G__8181__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8132 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8132))
{return cljs.core.every_QMARK_.call(null,(function (p1__7978_SHARP_){
var and__3822__auto____8133 = p1.call(null,p1__7978_SHARP_);
if(cljs.core.truth_(and__3822__auto____8133))
{return p2.call(null,p1__7978_SHARP_);
} else
{return and__3822__auto____8133;
}
}),args);
} else
{return and__3822__auto____8132;
}
})());
};
var G__8181 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8181__delegate.call(this, x, y, z, args);
};
G__8181.cljs$lang$maxFixedArity = 3;
G__8181.cljs$lang$applyTo = (function (arglist__8182){
var x = cljs.core.first(arglist__8182);
var y = cljs.core.first(cljs.core.next(arglist__8182));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8182)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8182)));
return G__8181__delegate(x, y, z, args);
});
G__8181.cljs$lang$arity$variadic = G__8181__delegate;
return G__8181;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8152 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8152))
{var and__3822__auto____8153 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8153))
{return p3.call(null,x);
} else
{return and__3822__auto____8153;
}
} else
{return and__3822__auto____8152;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8154 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8154))
{var and__3822__auto____8155 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8155))
{var and__3822__auto____8156 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____8156))
{var and__3822__auto____8157 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8157))
{var and__3822__auto____8158 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8158))
{return p3.call(null,y);
} else
{return and__3822__auto____8158;
}
} else
{return and__3822__auto____8157;
}
} else
{return and__3822__auto____8156;
}
} else
{return and__3822__auto____8155;
}
} else
{return and__3822__auto____8154;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8159 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8159))
{var and__3822__auto____8160 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8160))
{var and__3822__auto____8161 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____8161))
{var and__3822__auto____8162 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8162))
{var and__3822__auto____8163 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8163))
{var and__3822__auto____8164 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____8164))
{var and__3822__auto____8165 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____8165))
{var and__3822__auto____8166 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____8166))
{return p3.call(null,z);
} else
{return and__3822__auto____8166;
}
} else
{return and__3822__auto____8165;
}
} else
{return and__3822__auto____8164;
}
} else
{return and__3822__auto____8163;
}
} else
{return and__3822__auto____8162;
}
} else
{return and__3822__auto____8161;
}
} else
{return and__3822__auto____8160;
}
} else
{return and__3822__auto____8159;
}
})());
});
var ep3__4 = (function() { 
var G__8183__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8167 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8167))
{return cljs.core.every_QMARK_.call(null,(function (p1__7979_SHARP_){
var and__3822__auto____8168 = p1.call(null,p1__7979_SHARP_);
if(cljs.core.truth_(and__3822__auto____8168))
{var and__3822__auto____8169 = p2.call(null,p1__7979_SHARP_);
if(cljs.core.truth_(and__3822__auto____8169))
{return p3.call(null,p1__7979_SHARP_);
} else
{return and__3822__auto____8169;
}
} else
{return and__3822__auto____8168;
}
}),args);
} else
{return and__3822__auto____8167;
}
})());
};
var G__8183 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8183__delegate.call(this, x, y, z, args);
};
G__8183.cljs$lang$maxFixedArity = 3;
G__8183.cljs$lang$applyTo = (function (arglist__8184){
var x = cljs.core.first(arglist__8184);
var y = cljs.core.first(cljs.core.next(arglist__8184));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8184)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8184)));
return G__8183__delegate(x, y, z, args);
});
G__8183.cljs$lang$arity$variadic = G__8183__delegate;
return G__8183;
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
var G__8185__delegate = function (p1,p2,p3,ps){
var ps__8170 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__7980_SHARP_){
return p1__7980_SHARP_.call(null,x);
}),ps__8170);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__7981_SHARP_){
var and__3822__auto____8175 = p1__7981_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____8175))
{return p1__7981_SHARP_.call(null,y);
} else
{return and__3822__auto____8175;
}
}),ps__8170);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__7982_SHARP_){
var and__3822__auto____8176 = p1__7982_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____8176))
{var and__3822__auto____8177 = p1__7982_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____8177))
{return p1__7982_SHARP_.call(null,z);
} else
{return and__3822__auto____8177;
}
} else
{return and__3822__auto____8176;
}
}),ps__8170);
});
var epn__4 = (function() { 
var G__8186__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8178 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8178))
{return cljs.core.every_QMARK_.call(null,(function (p1__7983_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__7983_SHARP_,args);
}),ps__8170);
} else
{return and__3822__auto____8178;
}
})());
};
var G__8186 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8186__delegate.call(this, x, y, z, args);
};
G__8186.cljs$lang$maxFixedArity = 3;
G__8186.cljs$lang$applyTo = (function (arglist__8187){
var x = cljs.core.first(arglist__8187);
var y = cljs.core.first(cljs.core.next(arglist__8187));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8187)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8187)));
return G__8186__delegate(x, y, z, args);
});
G__8186.cljs$lang$arity$variadic = G__8186__delegate;
return G__8186;
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
var G__8185 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8185__delegate.call(this, p1, p2, p3, ps);
};
G__8185.cljs$lang$maxFixedArity = 3;
G__8185.cljs$lang$applyTo = (function (arglist__8188){
var p1 = cljs.core.first(arglist__8188);
var p2 = cljs.core.first(cljs.core.next(arglist__8188));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8188)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8188)));
return G__8185__delegate(p1, p2, p3, ps);
});
G__8185.cljs$lang$arity$variadic = G__8185__delegate;
return G__8185;
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
var or__3824__auto____8269 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____8269))
{return or__3824__auto____8269;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____8270 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____8270))
{return or__3824__auto____8270;
} else
{var or__3824__auto____8271 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____8271))
{return or__3824__auto____8271;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__8340__delegate = function (x,y,z,args){
var or__3824__auto____8272 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8272))
{return or__3824__auto____8272;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__8340 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8340__delegate.call(this, x, y, z, args);
};
G__8340.cljs$lang$maxFixedArity = 3;
G__8340.cljs$lang$applyTo = (function (arglist__8341){
var x = cljs.core.first(arglist__8341);
var y = cljs.core.first(cljs.core.next(arglist__8341));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8341)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8341)));
return G__8340__delegate(x, y, z, args);
});
G__8340.cljs$lang$arity$variadic = G__8340__delegate;
return G__8340;
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
var or__3824__auto____8284 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8284))
{return or__3824__auto____8284;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____8285 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8285))
{return or__3824__auto____8285;
} else
{var or__3824__auto____8286 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8286))
{return or__3824__auto____8286;
} else
{var or__3824__auto____8287 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8287))
{return or__3824__auto____8287;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____8288 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8288))
{return or__3824__auto____8288;
} else
{var or__3824__auto____8289 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8289))
{return or__3824__auto____8289;
} else
{var or__3824__auto____8290 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____8290))
{return or__3824__auto____8290;
} else
{var or__3824__auto____8291 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8291))
{return or__3824__auto____8291;
} else
{var or__3824__auto____8292 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8292))
{return or__3824__auto____8292;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__8342__delegate = function (x,y,z,args){
var or__3824__auto____8293 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8293))
{return or__3824__auto____8293;
} else
{return cljs.core.some.call(null,(function (p1__8023_SHARP_){
var or__3824__auto____8294 = p1.call(null,p1__8023_SHARP_);
if(cljs.core.truth_(or__3824__auto____8294))
{return or__3824__auto____8294;
} else
{return p2.call(null,p1__8023_SHARP_);
}
}),args);
}
};
var G__8342 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8342__delegate.call(this, x, y, z, args);
};
G__8342.cljs$lang$maxFixedArity = 3;
G__8342.cljs$lang$applyTo = (function (arglist__8343){
var x = cljs.core.first(arglist__8343);
var y = cljs.core.first(cljs.core.next(arglist__8343));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8343)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8343)));
return G__8342__delegate(x, y, z, args);
});
G__8342.cljs$lang$arity$variadic = G__8342__delegate;
return G__8342;
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
var or__3824__auto____8313 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8313))
{return or__3824__auto____8313;
} else
{var or__3824__auto____8314 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8314))
{return or__3824__auto____8314;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____8315 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8315))
{return or__3824__auto____8315;
} else
{var or__3824__auto____8316 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8316))
{return or__3824__auto____8316;
} else
{var or__3824__auto____8317 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____8317))
{return or__3824__auto____8317;
} else
{var or__3824__auto____8318 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8318))
{return or__3824__auto____8318;
} else
{var or__3824__auto____8319 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8319))
{return or__3824__auto____8319;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____8320 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8320))
{return or__3824__auto____8320;
} else
{var or__3824__auto____8321 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8321))
{return or__3824__auto____8321;
} else
{var or__3824__auto____8322 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____8322))
{return or__3824__auto____8322;
} else
{var or__3824__auto____8323 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8323))
{return or__3824__auto____8323;
} else
{var or__3824__auto____8324 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8324))
{return or__3824__auto____8324;
} else
{var or__3824__auto____8325 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____8325))
{return or__3824__auto____8325;
} else
{var or__3824__auto____8326 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____8326))
{return or__3824__auto____8326;
} else
{var or__3824__auto____8327 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____8327))
{return or__3824__auto____8327;
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
var G__8344__delegate = function (x,y,z,args){
var or__3824__auto____8328 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8328))
{return or__3824__auto____8328;
} else
{return cljs.core.some.call(null,(function (p1__8024_SHARP_){
var or__3824__auto____8329 = p1.call(null,p1__8024_SHARP_);
if(cljs.core.truth_(or__3824__auto____8329))
{return or__3824__auto____8329;
} else
{var or__3824__auto____8330 = p2.call(null,p1__8024_SHARP_);
if(cljs.core.truth_(or__3824__auto____8330))
{return or__3824__auto____8330;
} else
{return p3.call(null,p1__8024_SHARP_);
}
}
}),args);
}
};
var G__8344 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8344__delegate.call(this, x, y, z, args);
};
G__8344.cljs$lang$maxFixedArity = 3;
G__8344.cljs$lang$applyTo = (function (arglist__8345){
var x = cljs.core.first(arglist__8345);
var y = cljs.core.first(cljs.core.next(arglist__8345));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8345)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8345)));
return G__8344__delegate(x, y, z, args);
});
G__8344.cljs$lang$arity$variadic = G__8344__delegate;
return G__8344;
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
var G__8346__delegate = function (p1,p2,p3,ps){
var ps__8331 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__8025_SHARP_){
return p1__8025_SHARP_.call(null,x);
}),ps__8331);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__8026_SHARP_){
var or__3824__auto____8336 = p1__8026_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8336))
{return or__3824__auto____8336;
} else
{return p1__8026_SHARP_.call(null,y);
}
}),ps__8331);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__8027_SHARP_){
var or__3824__auto____8337 = p1__8027_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8337))
{return or__3824__auto____8337;
} else
{var or__3824__auto____8338 = p1__8027_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____8338))
{return or__3824__auto____8338;
} else
{return p1__8027_SHARP_.call(null,z);
}
}
}),ps__8331);
});
var spn__4 = (function() { 
var G__8347__delegate = function (x,y,z,args){
var or__3824__auto____8339 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8339))
{return or__3824__auto____8339;
} else
{return cljs.core.some.call(null,(function (p1__8028_SHARP_){
return cljs.core.some.call(null,p1__8028_SHARP_,args);
}),ps__8331);
}
};
var G__8347 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8347__delegate.call(this, x, y, z, args);
};
G__8347.cljs$lang$maxFixedArity = 3;
G__8347.cljs$lang$applyTo = (function (arglist__8348){
var x = cljs.core.first(arglist__8348);
var y = cljs.core.first(cljs.core.next(arglist__8348));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8348)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8348)));
return G__8347__delegate(x, y, z, args);
});
G__8347.cljs$lang$arity$variadic = G__8347__delegate;
return G__8347;
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
var G__8346 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8346__delegate.call(this, p1, p2, p3, ps);
};
G__8346.cljs$lang$maxFixedArity = 3;
G__8346.cljs$lang$applyTo = (function (arglist__8349){
var p1 = cljs.core.first(arglist__8349);
var p2 = cljs.core.first(cljs.core.next(arglist__8349));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8349)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8349)));
return G__8346__delegate(p1, p2, p3, ps);
});
G__8346.cljs$lang$arity$variadic = G__8346__delegate;
return G__8346;
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
var temp__3974__auto____8368 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8368)
{var s__8369 = temp__3974__auto____8368;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8369))
{var c__8370 = cljs.core.chunk_first.call(null,s__8369);
var size__8371 = cljs.core.count.call(null,c__8370);
var b__8372 = cljs.core.chunk_buffer.call(null,size__8371);
var n__2883__auto____8373 = size__8371;
var i__8374 = 0;
while(true){
if((i__8374 < n__2883__auto____8373))
{cljs.core.chunk_append.call(null,b__8372,f.call(null,cljs.core._nth.call(null,c__8370,i__8374)));
{
var G__8386 = (i__8374 + 1);
i__8374 = G__8386;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8372),map.call(null,f,cljs.core.chunk_rest.call(null,s__8369)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__8369)),map.call(null,f,cljs.core.rest.call(null,s__8369)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8375 = cljs.core.seq.call(null,c1);
var s2__8376 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8377 = s1__8375;
if(and__3822__auto____8377)
{return s2__8376;
} else
{return and__3822__auto____8377;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8375),cljs.core.first.call(null,s2__8376)),map.call(null,f,cljs.core.rest.call(null,s1__8375),cljs.core.rest.call(null,s2__8376)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8378 = cljs.core.seq.call(null,c1);
var s2__8379 = cljs.core.seq.call(null,c2);
var s3__8380 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____8381 = s1__8378;
if(and__3822__auto____8381)
{var and__3822__auto____8382 = s2__8379;
if(and__3822__auto____8382)
{return s3__8380;
} else
{return and__3822__auto____8382;
}
} else
{return and__3822__auto____8381;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8378),cljs.core.first.call(null,s2__8379),cljs.core.first.call(null,s3__8380)),map.call(null,f,cljs.core.rest.call(null,s1__8378),cljs.core.rest.call(null,s2__8379),cljs.core.rest.call(null,s3__8380)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__8387__delegate = function (f,c1,c2,c3,colls){
var step__8385 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8384 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8384))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__8384),step.call(null,map.call(null,cljs.core.rest,ss__8384)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__8189_SHARP_){
return cljs.core.apply.call(null,f,p1__8189_SHARP_);
}),step__8385.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__8387 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8387__delegate.call(this, f, c1, c2, c3, colls);
};
G__8387.cljs$lang$maxFixedArity = 4;
G__8387.cljs$lang$applyTo = (function (arglist__8388){
var f = cljs.core.first(arglist__8388);
var c1 = cljs.core.first(cljs.core.next(arglist__8388));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8388)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8388))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8388))));
return G__8387__delegate(f, c1, c2, c3, colls);
});
G__8387.cljs$lang$arity$variadic = G__8387__delegate;
return G__8387;
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
{var temp__3974__auto____8391 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8391)
{var s__8392 = temp__3974__auto____8391;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__8392),take.call(null,(n - 1),cljs.core.rest.call(null,s__8392)));
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
var step__8398 = (function (n,coll){
while(true){
var s__8396 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8397 = (n > 0);
if(and__3822__auto____8397)
{return s__8396;
} else
{return and__3822__auto____8397;
}
})()))
{{
var G__8399 = (n - 1);
var G__8400 = cljs.core.rest.call(null,s__8396);
n = G__8399;
coll = G__8400;
continue;
}
} else
{return s__8396;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8398.call(null,n,coll);
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
var s__8403 = cljs.core.seq.call(null,coll);
var lead__8404 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__8404)
{{
var G__8405 = cljs.core.next.call(null,s__8403);
var G__8406 = cljs.core.next.call(null,lead__8404);
s__8403 = G__8405;
lead__8404 = G__8406;
continue;
}
} else
{return s__8403;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__8412 = (function (pred,coll){
while(true){
var s__8410 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8411 = s__8410;
if(and__3822__auto____8411)
{return pred.call(null,cljs.core.first.call(null,s__8410));
} else
{return and__3822__auto____8411;
}
})()))
{{
var G__8413 = pred;
var G__8414 = cljs.core.rest.call(null,s__8410);
pred = G__8413;
coll = G__8414;
continue;
}
} else
{return s__8410;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8412.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8417 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8417)
{var s__8418 = temp__3974__auto____8417;
return cljs.core.concat.call(null,s__8418,cycle.call(null,s__8418));
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
var s1__8423 = cljs.core.seq.call(null,c1);
var s2__8424 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8425 = s1__8423;
if(and__3822__auto____8425)
{return s2__8424;
} else
{return and__3822__auto____8425;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__8423),cljs.core.cons.call(null,cljs.core.first.call(null,s2__8424),interleave.call(null,cljs.core.rest.call(null,s1__8423),cljs.core.rest.call(null,s2__8424))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__8427__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8426 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8426))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__8426),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__8426)));
} else
{return null;
}
}),null));
};
var G__8427 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8427__delegate.call(this, c1, c2, colls);
};
G__8427.cljs$lang$maxFixedArity = 2;
G__8427.cljs$lang$applyTo = (function (arglist__8428){
var c1 = cljs.core.first(arglist__8428);
var c2 = cljs.core.first(cljs.core.next(arglist__8428));
var colls = cljs.core.rest(cljs.core.next(arglist__8428));
return G__8427__delegate(c1, c2, colls);
});
G__8427.cljs$lang$arity$variadic = G__8427__delegate;
return G__8427;
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
var cat__8438 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____8436 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____8436)
{var coll__8437 = temp__3971__auto____8436;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__8437),cat.call(null,cljs.core.rest.call(null,coll__8437),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__8438.call(null,null,colls);
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
var G__8439__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__8439 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8439__delegate.call(this, f, coll, colls);
};
G__8439.cljs$lang$maxFixedArity = 2;
G__8439.cljs$lang$applyTo = (function (arglist__8440){
var f = cljs.core.first(arglist__8440);
var coll = cljs.core.first(cljs.core.next(arglist__8440));
var colls = cljs.core.rest(cljs.core.next(arglist__8440));
return G__8439__delegate(f, coll, colls);
});
G__8439.cljs$lang$arity$variadic = G__8439__delegate;
return G__8439;
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
var temp__3974__auto____8450 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8450)
{var s__8451 = temp__3974__auto____8450;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8451))
{var c__8452 = cljs.core.chunk_first.call(null,s__8451);
var size__8453 = cljs.core.count.call(null,c__8452);
var b__8454 = cljs.core.chunk_buffer.call(null,size__8453);
var n__2883__auto____8455 = size__8453;
var i__8456 = 0;
while(true){
if((i__8456 < n__2883__auto____8455))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__8452,i__8456))))
{cljs.core.chunk_append.call(null,b__8454,cljs.core._nth.call(null,c__8452,i__8456));
} else
{}
{
var G__8459 = (i__8456 + 1);
i__8456 = G__8459;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8454),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__8451)));
} else
{var f__8457 = cljs.core.first.call(null,s__8451);
var r__8458 = cljs.core.rest.call(null,s__8451);
if(cljs.core.truth_(pred.call(null,f__8457)))
{return cljs.core.cons.call(null,f__8457,filter.call(null,pred,r__8458));
} else
{return filter.call(null,pred,r__8458);
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
var walk__8462 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__8462.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__8460_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__8460_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__8466__8467 = to;
if(G__8466__8467)
{if((function (){var or__3824__auto____8468 = (G__8466__8467.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____8468)
{return or__3824__auto____8468;
} else
{return G__8466__8467.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__8466__8467.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8466__8467);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8466__8467);
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
var G__8469__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__8469 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8469__delegate.call(this, f, c1, c2, c3, colls);
};
G__8469.cljs$lang$maxFixedArity = 4;
G__8469.cljs$lang$applyTo = (function (arglist__8470){
var f = cljs.core.first(arglist__8470);
var c1 = cljs.core.first(cljs.core.next(arglist__8470));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8470)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8470))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8470))));
return G__8469__delegate(f, c1, c2, c3, colls);
});
G__8469.cljs$lang$arity$variadic = G__8469__delegate;
return G__8469;
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
var temp__3974__auto____8477 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8477)
{var s__8478 = temp__3974__auto____8477;
var p__8479 = cljs.core.take.call(null,n,s__8478);
if((n === cljs.core.count.call(null,p__8479)))
{return cljs.core.cons.call(null,p__8479,partition.call(null,n,step,cljs.core.drop.call(null,step,s__8478)));
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
var temp__3974__auto____8480 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8480)
{var s__8481 = temp__3974__auto____8480;
var p__8482 = cljs.core.take.call(null,n,s__8481);
if((n === cljs.core.count.call(null,p__8482)))
{return cljs.core.cons.call(null,p__8482,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__8481)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__8482,pad)));
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
var sentinel__8487 = cljs.core.lookup_sentinel;
var m__8488 = m;
var ks__8489 = cljs.core.seq.call(null,ks);
while(true){
if(ks__8489)
{var m__8490 = cljs.core._lookup.call(null,m__8488,cljs.core.first.call(null,ks__8489),sentinel__8487);
if((sentinel__8487 === m__8490))
{return not_found;
} else
{{
var G__8491 = sentinel__8487;
var G__8492 = m__8490;
var G__8493 = cljs.core.next.call(null,ks__8489);
sentinel__8487 = G__8491;
m__8488 = G__8492;
ks__8489 = G__8493;
continue;
}
}
} else
{return m__8488;
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
cljs.core.assoc_in = (function assoc_in(m,p__8494,v){
var vec__8499__8500 = p__8494;
var k__8501 = cljs.core.nth.call(null,vec__8499__8500,0,null);
var ks__8502 = cljs.core.nthnext.call(null,vec__8499__8500,1);
if(cljs.core.truth_(ks__8502))
{return cljs.core.assoc.call(null,m,k__8501,assoc_in.call(null,cljs.core._lookup.call(null,m,k__8501,null),ks__8502,v));
} else
{return cljs.core.assoc.call(null,m,k__8501,v);
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
var update_in__delegate = function (m,p__8503,f,args){
var vec__8508__8509 = p__8503;
var k__8510 = cljs.core.nth.call(null,vec__8508__8509,0,null);
var ks__8511 = cljs.core.nthnext.call(null,vec__8508__8509,1);
if(cljs.core.truth_(ks__8511))
{return cljs.core.assoc.call(null,m,k__8510,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__8510,null),ks__8511,f,args));
} else
{return cljs.core.assoc.call(null,m,k__8510,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__8510,null),args));
}
};
var update_in = function (m,p__8503,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__8503, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__8512){
var m = cljs.core.first(arglist__8512);
var p__8503 = cljs.core.first(cljs.core.next(arglist__8512));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8512)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8512)));
return update_in__delegate(m, p__8503, f, args);
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
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8515 = this;
var h__2548__auto____8516 = this__8515.__hash;
if(!((h__2548__auto____8516 == null)))
{return h__2548__auto____8516;
} else
{var h__2548__auto____8517 = cljs.core.hash_coll.call(null,coll);
this__8515.__hash = h__2548__auto____8517;
return h__2548__auto____8517;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8518 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8519 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8520 = this;
var new_array__8521 = this__8520.array.slice();
(new_array__8521[k] = v);
return (new cljs.core.Vector(this__8520.meta,new_array__8521,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__8552 = null;
var G__8552__2 = (function (this_sym8522,k){
var this__8524 = this;
var this_sym8522__8525 = this;
var coll__8526 = this_sym8522__8525;
return coll__8526.cljs$core$ILookup$_lookup$arity$2(coll__8526,k);
});
var G__8552__3 = (function (this_sym8523,k,not_found){
var this__8524 = this;
var this_sym8523__8527 = this;
var coll__8528 = this_sym8523__8527;
return coll__8528.cljs$core$ILookup$_lookup$arity$3(coll__8528,k,not_found);
});
G__8552 = function(this_sym8523,k,not_found){
switch(arguments.length){
case 2:
return G__8552__2.call(this,this_sym8523,k);
case 3:
return G__8552__3.call(this,this_sym8523,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8552;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym8513,args8514){
var this__8529 = this;
return this_sym8513.call.apply(this_sym8513,[this_sym8513].concat(args8514.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8530 = this;
var new_array__8531 = this__8530.array.slice();
new_array__8531.push(o);
return (new cljs.core.Vector(this__8530.meta,new_array__8531,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__8532 = this;
var this__8533 = this;
return cljs.core.pr_str.call(null,this__8533);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8534 = this;
return cljs.core.ci_reduce.call(null,this__8534.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8535 = this;
return cljs.core.ci_reduce.call(null,this__8535.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8536 = this;
if((this__8536.array.length > 0))
{var vector_seq__8537 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__8536.array.length))
{return cljs.core.cons.call(null,(this__8536.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__8537.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8538 = this;
return this__8538.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8539 = this;
var count__8540 = this__8539.array.length;
if((count__8540 > 0))
{return (this__8539.array[(count__8540 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8541 = this;
if((this__8541.array.length > 0))
{var new_array__8542 = this__8541.array.slice();
new_array__8542.pop();
return (new cljs.core.Vector(this__8541.meta,new_array__8542,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8543 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8544 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8545 = this;
return (new cljs.core.Vector(meta,this__8545.array,this__8545.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8546 = this;
return this__8546.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8547 = this;
if((function (){var and__3822__auto____8548 = (0 <= n);
if(and__3822__auto____8548)
{return (n < this__8547.array.length);
} else
{return and__3822__auto____8548;
}
})())
{return (this__8547.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8549 = this;
if((function (){var and__3822__auto____8550 = (0 <= n);
if(and__3822__auto____8550)
{return (n < this__8549.array.length);
} else
{return and__3822__auto____8550;
}
})())
{return (this__8549.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8551 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8551.meta);
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
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__2666__auto__){
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
var cnt__8554 = pv.cnt;
if((cnt__8554 < 32))
{return 0;
} else
{return (((cnt__8554 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__8560 = level;
var ret__8561 = node;
while(true){
if((ll__8560 === 0))
{return ret__8561;
} else
{var embed__8562 = ret__8561;
var r__8563 = cljs.core.pv_fresh_node.call(null,edit);
var ___8564 = cljs.core.pv_aset.call(null,r__8563,0,embed__8562);
{
var G__8565 = (ll__8560 - 5);
var G__8566 = r__8563;
ll__8560 = G__8565;
ret__8561 = G__8566;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__8572 = cljs.core.pv_clone_node.call(null,parent);
var subidx__8573 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__8572,subidx__8573,tailnode);
return ret__8572;
} else
{var child__8574 = cljs.core.pv_aget.call(null,parent,subidx__8573);
if(!((child__8574 == null)))
{var node_to_insert__8575 = push_tail.call(null,pv,(level - 5),child__8574,tailnode);
cljs.core.pv_aset.call(null,ret__8572,subidx__8573,node_to_insert__8575);
return ret__8572;
} else
{var node_to_insert__8576 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__8572,subidx__8573,node_to_insert__8576);
return ret__8572;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____8580 = (0 <= i);
if(and__3822__auto____8580)
{return (i < pv.cnt);
} else
{return and__3822__auto____8580;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__8581 = pv.root;
var level__8582 = pv.shift;
while(true){
if((level__8582 > 0))
{{
var G__8583 = cljs.core.pv_aget.call(null,node__8581,((i >>> level__8582) & 31));
var G__8584 = (level__8582 - 5);
node__8581 = G__8583;
level__8582 = G__8584;
continue;
}
} else
{return node__8581.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__8587 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__8587,(i & 31),val);
return ret__8587;
} else
{var subidx__8588 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8587,subidx__8588,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8588),i,val));
return ret__8587;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__8594 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8595 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8594));
if((function (){var and__3822__auto____8596 = (new_child__8595 == null);
if(and__3822__auto____8596)
{return (subidx__8594 === 0);
} else
{return and__3822__auto____8596;
}
})())
{return null;
} else
{var ret__8597 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8597,subidx__8594,new_child__8595);
return ret__8597;
}
} else
{if((subidx__8594 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__8598 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8598,subidx__8594,null);
return ret__8598;
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
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8601 = this;
return (new cljs.core.TransientVector(this__8601.cnt,this__8601.shift,cljs.core.tv_editable_root.call(null,this__8601.root),cljs.core.tv_editable_tail.call(null,this__8601.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8602 = this;
var h__2548__auto____8603 = this__8602.__hash;
if(!((h__2548__auto____8603 == null)))
{return h__2548__auto____8603;
} else
{var h__2548__auto____8604 = cljs.core.hash_coll.call(null,coll);
this__8602.__hash = h__2548__auto____8604;
return h__2548__auto____8604;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8605 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8606 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8607 = this;
if((function (){var and__3822__auto____8608 = (0 <= k);
if(and__3822__auto____8608)
{return (k < this__8607.cnt);
} else
{return and__3822__auto____8608;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__8609 = this__8607.tail.slice();
(new_tail__8609[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__8607.meta,this__8607.cnt,this__8607.shift,this__8607.root,new_tail__8609,null));
} else
{return (new cljs.core.PersistentVector(this__8607.meta,this__8607.cnt,this__8607.shift,cljs.core.do_assoc.call(null,coll,this__8607.shift,this__8607.root,k,v),this__8607.tail,null));
}
} else
{if((k === this__8607.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__8607.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__8657 = null;
var G__8657__2 = (function (this_sym8610,k){
var this__8612 = this;
var this_sym8610__8613 = this;
var coll__8614 = this_sym8610__8613;
return coll__8614.cljs$core$ILookup$_lookup$arity$2(coll__8614,k);
});
var G__8657__3 = (function (this_sym8611,k,not_found){
var this__8612 = this;
var this_sym8611__8615 = this;
var coll__8616 = this_sym8611__8615;
return coll__8616.cljs$core$ILookup$_lookup$arity$3(coll__8616,k,not_found);
});
G__8657 = function(this_sym8611,k,not_found){
switch(arguments.length){
case 2:
return G__8657__2.call(this,this_sym8611,k);
case 3:
return G__8657__3.call(this,this_sym8611,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8657;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym8599,args8600){
var this__8617 = this;
return this_sym8599.call.apply(this_sym8599,[this_sym8599].concat(args8600.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__8618 = this;
var step_init__8619 = [0,init];
var i__8620 = 0;
while(true){
if((i__8620 < this__8618.cnt))
{var arr__8621 = cljs.core.array_for.call(null,v,i__8620);
var len__8622 = arr__8621.length;
var init__8626 = (function (){var j__8623 = 0;
var init__8624 = (step_init__8619[1]);
while(true){
if((j__8623 < len__8622))
{var init__8625 = f.call(null,init__8624,(j__8623 + i__8620),(arr__8621[j__8623]));
if(cljs.core.reduced_QMARK_.call(null,init__8625))
{return init__8625;
} else
{{
var G__8658 = (j__8623 + 1);
var G__8659 = init__8625;
j__8623 = G__8658;
init__8624 = G__8659;
continue;
}
}
} else
{(step_init__8619[0] = len__8622);
(step_init__8619[1] = init__8624);
return init__8624;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8626))
{return cljs.core.deref.call(null,init__8626);
} else
{{
var G__8660 = (i__8620 + (step_init__8619[0]));
i__8620 = G__8660;
continue;
}
}
} else
{return (step_init__8619[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8627 = this;
if(((this__8627.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__8628 = this__8627.tail.slice();
new_tail__8628.push(o);
return (new cljs.core.PersistentVector(this__8627.meta,(this__8627.cnt + 1),this__8627.shift,this__8627.root,new_tail__8628,null));
} else
{var root_overflow_QMARK___8629 = ((this__8627.cnt >>> 5) > (1 << this__8627.shift));
var new_shift__8630 = ((root_overflow_QMARK___8629)?(this__8627.shift + 5):this__8627.shift);
var new_root__8632 = ((root_overflow_QMARK___8629)?(function (){var n_r__8631 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__8631,0,this__8627.root);
cljs.core.pv_aset.call(null,n_r__8631,1,cljs.core.new_path.call(null,null,this__8627.shift,(new cljs.core.VectorNode(null,this__8627.tail))));
return n_r__8631;
})():cljs.core.push_tail.call(null,coll,this__8627.shift,this__8627.root,(new cljs.core.VectorNode(null,this__8627.tail))));
return (new cljs.core.PersistentVector(this__8627.meta,(this__8627.cnt + 1),new_shift__8630,new_root__8632,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8633 = this;
if((this__8633.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__8633.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__8634 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__8635 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__8636 = this;
var this__8637 = this;
return cljs.core.pr_str.call(null,this__8637);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8638 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8639 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8640 = this;
if((this__8640.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8641 = this;
return this__8641.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8642 = this;
if((this__8642.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__8642.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8643 = this;
if((this__8643.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8643.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8643.meta);
} else
{if((1 < (this__8643.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__8643.meta,(this__8643.cnt - 1),this__8643.shift,this__8643.root,this__8643.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__8644 = cljs.core.array_for.call(null,coll,(this__8643.cnt - 2));
var nr__8645 = cljs.core.pop_tail.call(null,coll,this__8643.shift,this__8643.root);
var new_root__8646 = (((nr__8645 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__8645);
var cnt_1__8647 = (this__8643.cnt - 1);
if((function (){var and__3822__auto____8648 = (5 < this__8643.shift);
if(and__3822__auto____8648)
{return (cljs.core.pv_aget.call(null,new_root__8646,1) == null);
} else
{return and__3822__auto____8648;
}
})())
{return (new cljs.core.PersistentVector(this__8643.meta,cnt_1__8647,(this__8643.shift - 5),cljs.core.pv_aget.call(null,new_root__8646,0),new_tail__8644,null));
} else
{return (new cljs.core.PersistentVector(this__8643.meta,cnt_1__8647,this__8643.shift,new_root__8646,new_tail__8644,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8649 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8650 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8651 = this;
return (new cljs.core.PersistentVector(meta,this__8651.cnt,this__8651.shift,this__8651.root,this__8651.tail,this__8651.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8652 = this;
return this__8652.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8653 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8654 = this;
if((function (){var and__3822__auto____8655 = (0 <= n);
if(and__3822__auto____8655)
{return (n < this__8654.cnt);
} else
{return and__3822__auto____8655;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8656 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8656.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__8661 = xs.length;
var xs__8662 = (((no_clone === true))?xs:xs.slice());
if((l__8661 < 32))
{return (new cljs.core.PersistentVector(null,l__8661,5,cljs.core.PersistentVector.EMPTY_NODE,xs__8662,null));
} else
{var node__8663 = xs__8662.slice(0,32);
var v__8664 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__8663,null));
var i__8665 = 32;
var out__8666 = cljs.core._as_transient.call(null,v__8664);
while(true){
if((i__8665 < l__8661))
{{
var G__8667 = (i__8665 + 1);
var G__8668 = cljs.core.conj_BANG_.call(null,out__8666,(xs__8662[i__8665]));
i__8665 = G__8667;
out__8666 = G__8668;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8666);
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
vector.cljs$lang$applyTo = (function (arglist__8669){
var args = cljs.core.seq(arglist__8669);;
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
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8670 = this;
if(((this__8670.off + 1) < this__8670.node.length))
{var s__8671 = cljs.core.chunked_seq.call(null,this__8670.vec,this__8670.node,this__8670.i,(this__8670.off + 1));
if((s__8671 == null))
{return null;
} else
{return s__8671;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8672 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8673 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8674 = this;
return (this__8674.node[this__8674.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8675 = this;
if(((this__8675.off + 1) < this__8675.node.length))
{var s__8676 = cljs.core.chunked_seq.call(null,this__8675.vec,this__8675.node,this__8675.i,(this__8675.off + 1));
if((s__8676 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8676;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__8677 = this;
var l__8678 = this__8677.node.length;
var s__8679 = ((((this__8677.i + l__8678) < cljs.core._count.call(null,this__8677.vec)))?cljs.core.chunked_seq.call(null,this__8677.vec,(this__8677.i + l__8678),0):null);
if((s__8679 == null))
{return null;
} else
{return s__8679;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8680 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__8681 = this;
return cljs.core.chunked_seq.call(null,this__8681.vec,this__8681.node,this__8681.i,this__8681.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__8682 = this;
return this__8682.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8683 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8683.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__8684 = this;
return cljs.core.array_chunk.call(null,this__8684.node,this__8684.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__8685 = this;
var l__8686 = this__8685.node.length;
var s__8687 = ((((this__8685.i + l__8686) < cljs.core._count.call(null,this__8685.vec)))?cljs.core.chunked_seq.call(null,this__8685.vec,(this__8685.i + l__8686),0):null);
if((s__8687 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8687;
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
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8690 = this;
var h__2548__auto____8691 = this__8690.__hash;
if(!((h__2548__auto____8691 == null)))
{return h__2548__auto____8691;
} else
{var h__2548__auto____8692 = cljs.core.hash_coll.call(null,coll);
this__8690.__hash = h__2548__auto____8692;
return h__2548__auto____8692;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8693 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8694 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__8695 = this;
var v_pos__8696 = (this__8695.start + key);
return (new cljs.core.Subvec(this__8695.meta,cljs.core._assoc.call(null,this__8695.v,v_pos__8696,val),this__8695.start,((this__8695.end > (v_pos__8696 + 1)) ? this__8695.end : (v_pos__8696 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__8722 = null;
var G__8722__2 = (function (this_sym8697,k){
var this__8699 = this;
var this_sym8697__8700 = this;
var coll__8701 = this_sym8697__8700;
return coll__8701.cljs$core$ILookup$_lookup$arity$2(coll__8701,k);
});
var G__8722__3 = (function (this_sym8698,k,not_found){
var this__8699 = this;
var this_sym8698__8702 = this;
var coll__8703 = this_sym8698__8702;
return coll__8703.cljs$core$ILookup$_lookup$arity$3(coll__8703,k,not_found);
});
G__8722 = function(this_sym8698,k,not_found){
switch(arguments.length){
case 2:
return G__8722__2.call(this,this_sym8698,k);
case 3:
return G__8722__3.call(this,this_sym8698,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8722;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym8688,args8689){
var this__8704 = this;
return this_sym8688.call.apply(this_sym8688,[this_sym8688].concat(args8689.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8705 = this;
return (new cljs.core.Subvec(this__8705.meta,cljs.core._assoc_n.call(null,this__8705.v,this__8705.end,o),this__8705.start,(this__8705.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__8706 = this;
var this__8707 = this;
return cljs.core.pr_str.call(null,this__8707);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8708 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8709 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8710 = this;
var subvec_seq__8711 = (function subvec_seq(i){
if((i === this__8710.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__8710.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__8711.call(null,this__8710.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8712 = this;
return (this__8712.end - this__8712.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8713 = this;
return cljs.core._nth.call(null,this__8713.v,(this__8713.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8714 = this;
if((this__8714.start === this__8714.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__8714.meta,this__8714.v,this__8714.start,(this__8714.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8715 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8716 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8717 = this;
return (new cljs.core.Subvec(meta,this__8717.v,this__8717.start,this__8717.end,this__8717.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8718 = this;
return this__8718.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8719 = this;
return cljs.core._nth.call(null,this__8719.v,(this__8719.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8720 = this;
return cljs.core._nth.call(null,this__8720.v,(this__8720.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8721 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8721.meta);
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
var ret__8724 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__8724,0,tl.length);
return ret__8724;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__8728 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__8729 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8728,subidx__8729,(((level === 5))?tail_node:(function (){var child__8730 = cljs.core.pv_aget.call(null,ret__8728,subidx__8729);
if(!((child__8730 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__8730,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__8728;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__8735 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__8736 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8737 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__8735,subidx__8736));
if((function (){var and__3822__auto____8738 = (new_child__8737 == null);
if(and__3822__auto____8738)
{return (subidx__8736 === 0);
} else
{return and__3822__auto____8738;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__8735,subidx__8736,new_child__8737);
return node__8735;
}
} else
{if((subidx__8736 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__8735,subidx__8736,null);
return node__8735;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____8743 = (0 <= i);
if(and__3822__auto____8743)
{return (i < tv.cnt);
} else
{return and__3822__auto____8743;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__8744 = tv.root;
var node__8745 = root__8744;
var level__8746 = tv.shift;
while(true){
if((level__8746 > 0))
{{
var G__8747 = cljs.core.tv_ensure_editable.call(null,root__8744.edit,cljs.core.pv_aget.call(null,node__8745,((i >>> level__8746) & 31)));
var G__8748 = (level__8746 - 5);
node__8745 = G__8747;
level__8746 = G__8748;
continue;
}
} else
{return node__8745.arr;
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
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__8788 = null;
var G__8788__2 = (function (this_sym8751,k){
var this__8753 = this;
var this_sym8751__8754 = this;
var coll__8755 = this_sym8751__8754;
return coll__8755.cljs$core$ILookup$_lookup$arity$2(coll__8755,k);
});
var G__8788__3 = (function (this_sym8752,k,not_found){
var this__8753 = this;
var this_sym8752__8756 = this;
var coll__8757 = this_sym8752__8756;
return coll__8757.cljs$core$ILookup$_lookup$arity$3(coll__8757,k,not_found);
});
G__8788 = function(this_sym8752,k,not_found){
switch(arguments.length){
case 2:
return G__8788__2.call(this,this_sym8752,k);
case 3:
return G__8788__3.call(this,this_sym8752,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8788;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym8749,args8750){
var this__8758 = this;
return this_sym8749.call.apply(this_sym8749,[this_sym8749].concat(args8750.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8759 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8760 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8761 = this;
if(this__8761.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8762 = this;
if((function (){var and__3822__auto____8763 = (0 <= n);
if(and__3822__auto____8763)
{return (n < this__8762.cnt);
} else
{return and__3822__auto____8763;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8764 = this;
if(this__8764.root.edit)
{return this__8764.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__8765 = this;
if(this__8765.root.edit)
{if((function (){var and__3822__auto____8766 = (0 <= n);
if(and__3822__auto____8766)
{return (n < this__8765.cnt);
} else
{return and__3822__auto____8766;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__8765.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__8771 = (function go(level,node){
var node__8769 = cljs.core.tv_ensure_editable.call(null,this__8765.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__8769,(n & 31),val);
return node__8769;
} else
{var subidx__8770 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__8769,subidx__8770,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__8769,subidx__8770)));
return node__8769;
}
}).call(null,this__8765.shift,this__8765.root);
this__8765.root = new_root__8771;
return tcoll;
}
} else
{if((n === this__8765.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__8765.cnt)].join('')));
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
var this__8772 = this;
if(this__8772.root.edit)
{if((this__8772.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8772.cnt))
{this__8772.cnt = 0;
return tcoll;
} else
{if((((this__8772.cnt - 1) & 31) > 0))
{this__8772.cnt = (this__8772.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__8773 = cljs.core.editable_array_for.call(null,tcoll,(this__8772.cnt - 2));
var new_root__8775 = (function (){var nr__8774 = cljs.core.tv_pop_tail.call(null,tcoll,this__8772.shift,this__8772.root);
if(!((nr__8774 == null)))
{return nr__8774;
} else
{return (new cljs.core.VectorNode(this__8772.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____8776 = (5 < this__8772.shift);
if(and__3822__auto____8776)
{return (cljs.core.pv_aget.call(null,new_root__8775,1) == null);
} else
{return and__3822__auto____8776;
}
})())
{var new_root__8777 = cljs.core.tv_ensure_editable.call(null,this__8772.root.edit,cljs.core.pv_aget.call(null,new_root__8775,0));
this__8772.root = new_root__8777;
this__8772.shift = (this__8772.shift - 5);
this__8772.cnt = (this__8772.cnt - 1);
this__8772.tail = new_tail__8773;
return tcoll;
} else
{this__8772.root = new_root__8775;
this__8772.cnt = (this__8772.cnt - 1);
this__8772.tail = new_tail__8773;
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
var this__8778 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8779 = this;
if(this__8779.root.edit)
{if(((this__8779.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__8779.tail[(this__8779.cnt & 31)] = o);
this__8779.cnt = (this__8779.cnt + 1);
return tcoll;
} else
{var tail_node__8780 = (new cljs.core.VectorNode(this__8779.root.edit,this__8779.tail));
var new_tail__8781 = cljs.core.make_array.call(null,32);
(new_tail__8781[0] = o);
this__8779.tail = new_tail__8781;
if(((this__8779.cnt >>> 5) > (1 << this__8779.shift)))
{var new_root_array__8782 = cljs.core.make_array.call(null,32);
var new_shift__8783 = (this__8779.shift + 5);
(new_root_array__8782[0] = this__8779.root);
(new_root_array__8782[1] = cljs.core.new_path.call(null,this__8779.root.edit,this__8779.shift,tail_node__8780));
this__8779.root = (new cljs.core.VectorNode(this__8779.root.edit,new_root_array__8782));
this__8779.shift = new_shift__8783;
this__8779.cnt = (this__8779.cnt + 1);
return tcoll;
} else
{var new_root__8784 = cljs.core.tv_push_tail.call(null,tcoll,this__8779.shift,this__8779.root,tail_node__8780);
this__8779.root = new_root__8784;
this__8779.cnt = (this__8779.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8785 = this;
if(this__8785.root.edit)
{this__8785.root.edit = null;
var len__8786 = (this__8785.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__8787 = cljs.core.make_array.call(null,len__8786);
cljs.core.array_copy.call(null,this__8785.tail,0,trimmed_tail__8787,0,len__8786);
return (new cljs.core.PersistentVector(null,this__8785.cnt,this__8785.shift,this__8785.root,trimmed_tail__8787,null));
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
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8789 = this;
var h__2548__auto____8790 = this__8789.__hash;
if(!((h__2548__auto____8790 == null)))
{return h__2548__auto____8790;
} else
{var h__2548__auto____8791 = cljs.core.hash_coll.call(null,coll);
this__8789.__hash = h__2548__auto____8791;
return h__2548__auto____8791;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8792 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__8793 = this;
var this__8794 = this;
return cljs.core.pr_str.call(null,this__8794);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8795 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8796 = this;
return cljs.core._first.call(null,this__8796.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8797 = this;
var temp__3971__auto____8798 = cljs.core.next.call(null,this__8797.front);
if(temp__3971__auto____8798)
{var f1__8799 = temp__3971__auto____8798;
return (new cljs.core.PersistentQueueSeq(this__8797.meta,f1__8799,this__8797.rear,null));
} else
{if((this__8797.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__8797.meta,this__8797.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8800 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8801 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__8801.front,this__8801.rear,this__8801.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8802 = this;
return this__8802.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8803 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8803.meta);
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
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8804 = this;
var h__2548__auto____8805 = this__8804.__hash;
if(!((h__2548__auto____8805 == null)))
{return h__2548__auto____8805;
} else
{var h__2548__auto____8806 = cljs.core.hash_coll.call(null,coll);
this__8804.__hash = h__2548__auto____8806;
return h__2548__auto____8806;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8807 = this;
if(cljs.core.truth_(this__8807.front))
{return (new cljs.core.PersistentQueue(this__8807.meta,(this__8807.count + 1),this__8807.front,cljs.core.conj.call(null,(function (){var or__3824__auto____8808 = this__8807.rear;
if(cljs.core.truth_(or__3824__auto____8808))
{return or__3824__auto____8808;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__8807.meta,(this__8807.count + 1),cljs.core.conj.call(null,this__8807.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__8809 = this;
var this__8810 = this;
return cljs.core.pr_str.call(null,this__8810);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8811 = this;
var rear__8812 = cljs.core.seq.call(null,this__8811.rear);
if(cljs.core.truth_((function (){var or__3824__auto____8813 = this__8811.front;
if(cljs.core.truth_(or__3824__auto____8813))
{return or__3824__auto____8813;
} else
{return rear__8812;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__8811.front,cljs.core.seq.call(null,rear__8812),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8814 = this;
return this__8814.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8815 = this;
return cljs.core._first.call(null,this__8815.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8816 = this;
if(cljs.core.truth_(this__8816.front))
{var temp__3971__auto____8817 = cljs.core.next.call(null,this__8816.front);
if(temp__3971__auto____8817)
{var f1__8818 = temp__3971__auto____8817;
return (new cljs.core.PersistentQueue(this__8816.meta,(this__8816.count - 1),f1__8818,this__8816.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__8816.meta,(this__8816.count - 1),cljs.core.seq.call(null,this__8816.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8819 = this;
return cljs.core.first.call(null,this__8819.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8820 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8821 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8822 = this;
return (new cljs.core.PersistentQueue(meta,this__8822.count,this__8822.front,this__8822.rear,this__8822.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8823 = this;
return this__8823.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8824 = this;
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
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__8825 = this;
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
var len__8828 = array.length;
var i__8829 = 0;
while(true){
if((i__8829 < len__8828))
{if((k === (array[i__8829])))
{return i__8829;
} else
{{
var G__8830 = (i__8829 + incr);
i__8829 = G__8830;
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
var a__8833 = cljs.core.hash.call(null,a);
var b__8834 = cljs.core.hash.call(null,b);
if((a__8833 < b__8834))
{return -1;
} else
{if((a__8833 > b__8834))
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
var ks__8842 = m.keys;
var len__8843 = ks__8842.length;
var so__8844 = m.strobj;
var out__8845 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__8846 = 0;
var out__8847 = cljs.core.transient$.call(null,out__8845);
while(true){
if((i__8846 < len__8843))
{var k__8848 = (ks__8842[i__8846]);
{
var G__8849 = (i__8846 + 1);
var G__8850 = cljs.core.assoc_BANG_.call(null,out__8847,k__8848,(so__8844[k__8848]));
i__8846 = G__8849;
out__8847 = G__8850;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__8847,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__8856 = {};
var l__8857 = ks.length;
var i__8858 = 0;
while(true){
if((i__8858 < l__8857))
{var k__8859 = (ks[i__8858]);
(new_obj__8856[k__8859] = (obj[k__8859]));
{
var G__8860 = (i__8858 + 1);
i__8858 = G__8860;
continue;
}
} else
{}
break;
}
return new_obj__8856;
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
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8863 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8864 = this;
var h__2548__auto____8865 = this__8864.__hash;
if(!((h__2548__auto____8865 == null)))
{return h__2548__auto____8865;
} else
{var h__2548__auto____8866 = cljs.core.hash_imap.call(null,coll);
this__8864.__hash = h__2548__auto____8866;
return h__2548__auto____8866;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8867 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8868 = this;
if((function (){var and__3822__auto____8869 = goog.isString(k);
if(and__3822__auto____8869)
{return !((cljs.core.scan_array.call(null,1,k,this__8868.keys) == null));
} else
{return and__3822__auto____8869;
}
})())
{return (this__8868.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8870 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____8871 = (this__8870.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____8871)
{return or__3824__auto____8871;
} else
{return (this__8870.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__8870.keys) == null)))
{var new_strobj__8872 = cljs.core.obj_clone.call(null,this__8870.strobj,this__8870.keys);
(new_strobj__8872[k] = v);
return (new cljs.core.ObjMap(this__8870.meta,this__8870.keys,new_strobj__8872,(this__8870.update_count + 1),null));
} else
{var new_strobj__8873 = cljs.core.obj_clone.call(null,this__8870.strobj,this__8870.keys);
var new_keys__8874 = this__8870.keys.slice();
(new_strobj__8873[k] = v);
new_keys__8874.push(k);
return (new cljs.core.ObjMap(this__8870.meta,new_keys__8874,new_strobj__8873,(this__8870.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8875 = this;
if((function (){var and__3822__auto____8876 = goog.isString(k);
if(and__3822__auto____8876)
{return !((cljs.core.scan_array.call(null,1,k,this__8875.keys) == null));
} else
{return and__3822__auto____8876;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__8898 = null;
var G__8898__2 = (function (this_sym8877,k){
var this__8879 = this;
var this_sym8877__8880 = this;
var coll__8881 = this_sym8877__8880;
return coll__8881.cljs$core$ILookup$_lookup$arity$2(coll__8881,k);
});
var G__8898__3 = (function (this_sym8878,k,not_found){
var this__8879 = this;
var this_sym8878__8882 = this;
var coll__8883 = this_sym8878__8882;
return coll__8883.cljs$core$ILookup$_lookup$arity$3(coll__8883,k,not_found);
});
G__8898 = function(this_sym8878,k,not_found){
switch(arguments.length){
case 2:
return G__8898__2.call(this,this_sym8878,k);
case 3:
return G__8898__3.call(this,this_sym8878,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8898;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym8861,args8862){
var this__8884 = this;
return this_sym8861.call.apply(this_sym8861,[this_sym8861].concat(args8862.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8885 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__8886 = this;
var this__8887 = this;
return cljs.core.pr_str.call(null,this__8887);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8888 = this;
if((this__8888.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__8851_SHARP_){
return cljs.core.vector.call(null,p1__8851_SHARP_,(this__8888.strobj[p1__8851_SHARP_]));
}),this__8888.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8889 = this;
return this__8889.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8890 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8891 = this;
return (new cljs.core.ObjMap(meta,this__8891.keys,this__8891.strobj,this__8891.update_count,this__8891.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8892 = this;
return this__8892.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8893 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__8893.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8894 = this;
if((function (){var and__3822__auto____8895 = goog.isString(k);
if(and__3822__auto____8895)
{return !((cljs.core.scan_array.call(null,1,k,this__8894.keys) == null));
} else
{return and__3822__auto____8895;
}
})())
{var new_keys__8896 = this__8894.keys.slice();
var new_strobj__8897 = cljs.core.obj_clone.call(null,this__8894.strobj,this__8894.keys);
new_keys__8896.splice(cljs.core.scan_array.call(null,1,k,new_keys__8896),1);
cljs.core.js_delete.call(null,new_strobj__8897,k);
return (new cljs.core.ObjMap(this__8894.meta,new_keys__8896,new_strobj__8897,(this__8894.update_count + 1),null));
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
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8902 = this;
var h__2548__auto____8903 = this__8902.__hash;
if(!((h__2548__auto____8903 == null)))
{return h__2548__auto____8903;
} else
{var h__2548__auto____8904 = cljs.core.hash_imap.call(null,coll);
this__8902.__hash = h__2548__auto____8904;
return h__2548__auto____8904;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8905 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8906 = this;
var bucket__8907 = (this__8906.hashobj[cljs.core.hash.call(null,k)]);
var i__8908 = (cljs.core.truth_(bucket__8907)?cljs.core.scan_array.call(null,2,k,bucket__8907):null);
if(cljs.core.truth_(i__8908))
{return (bucket__8907[(i__8908 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8909 = this;
var h__8910 = cljs.core.hash.call(null,k);
var bucket__8911 = (this__8909.hashobj[h__8910]);
if(cljs.core.truth_(bucket__8911))
{var new_bucket__8912 = bucket__8911.slice();
var new_hashobj__8913 = goog.object.clone(this__8909.hashobj);
(new_hashobj__8913[h__8910] = new_bucket__8912);
var temp__3971__auto____8914 = cljs.core.scan_array.call(null,2,k,new_bucket__8912);
if(cljs.core.truth_(temp__3971__auto____8914))
{var i__8915 = temp__3971__auto____8914;
(new_bucket__8912[(i__8915 + 1)] = v);
return (new cljs.core.HashMap(this__8909.meta,this__8909.count,new_hashobj__8913,null));
} else
{new_bucket__8912.push(k,v);
return (new cljs.core.HashMap(this__8909.meta,(this__8909.count + 1),new_hashobj__8913,null));
}
} else
{var new_hashobj__8916 = goog.object.clone(this__8909.hashobj);
(new_hashobj__8916[h__8910] = [k,v]);
return (new cljs.core.HashMap(this__8909.meta,(this__8909.count + 1),new_hashobj__8916,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8917 = this;
var bucket__8918 = (this__8917.hashobj[cljs.core.hash.call(null,k)]);
var i__8919 = (cljs.core.truth_(bucket__8918)?cljs.core.scan_array.call(null,2,k,bucket__8918):null);
if(cljs.core.truth_(i__8919))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__8944 = null;
var G__8944__2 = (function (this_sym8920,k){
var this__8922 = this;
var this_sym8920__8923 = this;
var coll__8924 = this_sym8920__8923;
return coll__8924.cljs$core$ILookup$_lookup$arity$2(coll__8924,k);
});
var G__8944__3 = (function (this_sym8921,k,not_found){
var this__8922 = this;
var this_sym8921__8925 = this;
var coll__8926 = this_sym8921__8925;
return coll__8926.cljs$core$ILookup$_lookup$arity$3(coll__8926,k,not_found);
});
G__8944 = function(this_sym8921,k,not_found){
switch(arguments.length){
case 2:
return G__8944__2.call(this,this_sym8921,k);
case 3:
return G__8944__3.call(this,this_sym8921,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8944;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym8900,args8901){
var this__8927 = this;
return this_sym8900.call.apply(this_sym8900,[this_sym8900].concat(args8901.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8928 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__8929 = this;
var this__8930 = this;
return cljs.core.pr_str.call(null,this__8930);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8931 = this;
if((this__8931.count > 0))
{var hashes__8932 = cljs.core.js_keys.call(null,this__8931.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__8899_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__8931.hashobj[p1__8899_SHARP_])));
}),hashes__8932);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8933 = this;
return this__8933.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8934 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8935 = this;
return (new cljs.core.HashMap(meta,this__8935.count,this__8935.hashobj,this__8935.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8936 = this;
return this__8936.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8937 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__8937.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8938 = this;
var h__8939 = cljs.core.hash.call(null,k);
var bucket__8940 = (this__8938.hashobj[h__8939]);
var i__8941 = (cljs.core.truth_(bucket__8940)?cljs.core.scan_array.call(null,2,k,bucket__8940):null);
if(cljs.core.not.call(null,i__8941))
{return coll;
} else
{var new_hashobj__8942 = goog.object.clone(this__8938.hashobj);
if((3 > bucket__8940.length))
{cljs.core.js_delete.call(null,new_hashobj__8942,h__8939);
} else
{var new_bucket__8943 = bucket__8940.slice();
new_bucket__8943.splice(i__8941,2);
(new_hashobj__8942[h__8939] = new_bucket__8943);
}
return (new cljs.core.HashMap(this__8938.meta,(this__8938.count - 1),new_hashobj__8942,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__8945 = ks.length;
var i__8946 = 0;
var out__8947 = cljs.core.HashMap.EMPTY;
while(true){
if((i__8946 < len__8945))
{{
var G__8948 = (i__8946 + 1);
var G__8949 = cljs.core.assoc.call(null,out__8947,(ks[i__8946]),(vs[i__8946]));
i__8946 = G__8948;
out__8947 = G__8949;
continue;
}
} else
{return out__8947;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__8953 = m.arr;
var len__8954 = arr__8953.length;
var i__8955 = 0;
while(true){
if((len__8954 <= i__8955))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__8953[i__8955]),k))
{return i__8955;
} else
{if("\uFDD0'else")
{{
var G__8956 = (i__8955 + 2);
i__8955 = G__8956;
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
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8959 = this;
return (new cljs.core.TransientArrayMap({},this__8959.arr.length,this__8959.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8960 = this;
var h__2548__auto____8961 = this__8960.__hash;
if(!((h__2548__auto____8961 == null)))
{return h__2548__auto____8961;
} else
{var h__2548__auto____8962 = cljs.core.hash_imap.call(null,coll);
this__8960.__hash = h__2548__auto____8962;
return h__2548__auto____8962;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8963 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8964 = this;
var idx__8965 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8965 === -1))
{return not_found;
} else
{return (this__8964.arr[(idx__8965 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8966 = this;
var idx__8967 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8967 === -1))
{if((this__8966.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__8966.meta,(this__8966.cnt + 1),(function (){var G__8968__8969 = this__8966.arr.slice();
G__8968__8969.push(k);
G__8968__8969.push(v);
return G__8968__8969;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__8966.arr[(idx__8967 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__8966.meta,this__8966.cnt,(function (){var G__8970__8971 = this__8966.arr.slice();
(G__8970__8971[(idx__8967 + 1)] = v);
return G__8970__8971;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8972 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__9004 = null;
var G__9004__2 = (function (this_sym8973,k){
var this__8975 = this;
var this_sym8973__8976 = this;
var coll__8977 = this_sym8973__8976;
return coll__8977.cljs$core$ILookup$_lookup$arity$2(coll__8977,k);
});
var G__9004__3 = (function (this_sym8974,k,not_found){
var this__8975 = this;
var this_sym8974__8978 = this;
var coll__8979 = this_sym8974__8978;
return coll__8979.cljs$core$ILookup$_lookup$arity$3(coll__8979,k,not_found);
});
G__9004 = function(this_sym8974,k,not_found){
switch(arguments.length){
case 2:
return G__9004__2.call(this,this_sym8974,k);
case 3:
return G__9004__3.call(this,this_sym8974,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9004;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym8957,args8958){
var this__8980 = this;
return this_sym8957.call.apply(this_sym8957,[this_sym8957].concat(args8958.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8981 = this;
var len__8982 = this__8981.arr.length;
var i__8983 = 0;
var init__8984 = init;
while(true){
if((i__8983 < len__8982))
{var init__8985 = f.call(null,init__8984,(this__8981.arr[i__8983]),(this__8981.arr[(i__8983 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__8985))
{return cljs.core.deref.call(null,init__8985);
} else
{{
var G__9005 = (i__8983 + 2);
var G__9006 = init__8985;
i__8983 = G__9005;
init__8984 = G__9006;
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
var this__8986 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__8987 = this;
var this__8988 = this;
return cljs.core.pr_str.call(null,this__8988);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8989 = this;
if((this__8989.cnt > 0))
{var len__8990 = this__8989.arr.length;
var array_map_seq__8991 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__8990))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__8989.arr[i]),(this__8989.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__8991.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8992 = this;
return this__8992.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8993 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8994 = this;
return (new cljs.core.PersistentArrayMap(meta,this__8994.cnt,this__8994.arr,this__8994.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8995 = this;
return this__8995.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8996 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8996.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8997 = this;
var idx__8998 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8998 >= 0))
{var len__8999 = this__8997.arr.length;
var new_len__9000 = (len__8999 - 2);
if((new_len__9000 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__9001 = cljs.core.make_array.call(null,new_len__9000);
var s__9002 = 0;
var d__9003 = 0;
while(true){
if((s__9002 >= len__8999))
{return (new cljs.core.PersistentArrayMap(this__8997.meta,(this__8997.cnt - 1),new_arr__9001,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__8997.arr[s__9002])))
{{
var G__9007 = (s__9002 + 2);
var G__9008 = d__9003;
s__9002 = G__9007;
d__9003 = G__9008;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__9001[d__9003] = (this__8997.arr[s__9002]));
(new_arr__9001[(d__9003 + 1)] = (this__8997.arr[(s__9002 + 1)]));
{
var G__9009 = (s__9002 + 2);
var G__9010 = (d__9003 + 2);
s__9002 = G__9009;
d__9003 = G__9010;
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
var len__9011 = cljs.core.count.call(null,ks);
var i__9012 = 0;
var out__9013 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__9012 < len__9011))
{{
var G__9014 = (i__9012 + 1);
var G__9015 = cljs.core.assoc_BANG_.call(null,out__9013,(ks[i__9012]),(vs[i__9012]));
i__9012 = G__9014;
out__9013 = G__9015;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9013);
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
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__9016 = this;
if(cljs.core.truth_(this__9016.editable_QMARK_))
{var idx__9017 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__9017 >= 0))
{(this__9016.arr[idx__9017] = (this__9016.arr[(this__9016.len - 2)]));
(this__9016.arr[(idx__9017 + 1)] = (this__9016.arr[(this__9016.len - 1)]));
var G__9018__9019 = this__9016.arr;
G__9018__9019.pop();
G__9018__9019.pop();
G__9018__9019;
this__9016.len = (this__9016.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9020 = this;
if(cljs.core.truth_(this__9020.editable_QMARK_))
{var idx__9021 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__9021 === -1))
{if(((this__9020.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__9020.len = (this__9020.len + 2);
this__9020.arr.push(key);
this__9020.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__9020.len,this__9020.arr),key,val);
}
} else
{if((val === (this__9020.arr[(idx__9021 + 1)])))
{return tcoll;
} else
{(this__9020.arr[(idx__9021 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9022 = this;
if(cljs.core.truth_(this__9022.editable_QMARK_))
{if((function (){var G__9023__9024 = o;
if(G__9023__9024)
{if((function (){var or__3824__auto____9025 = (G__9023__9024.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9025)
{return or__3824__auto____9025;
} else
{return G__9023__9024.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9023__9024.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9023__9024);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9023__9024);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9026 = cljs.core.seq.call(null,o);
var tcoll__9027 = tcoll;
while(true){
var temp__3971__auto____9028 = cljs.core.first.call(null,es__9026);
if(cljs.core.truth_(temp__3971__auto____9028))
{var e__9029 = temp__3971__auto____9028;
{
var G__9035 = cljs.core.next.call(null,es__9026);
var G__9036 = tcoll__9027.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__9027,cljs.core.key.call(null,e__9029),cljs.core.val.call(null,e__9029));
es__9026 = G__9035;
tcoll__9027 = G__9036;
continue;
}
} else
{return tcoll__9027;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9030 = this;
if(cljs.core.truth_(this__9030.editable_QMARK_))
{this__9030.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__9030.len,2),this__9030.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9031 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9032 = this;
if(cljs.core.truth_(this__9032.editable_QMARK_))
{var idx__9033 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__9033 === -1))
{return not_found;
} else
{return (this__9032.arr[(idx__9033 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9034 = this;
if(cljs.core.truth_(this__9034.editable_QMARK_))
{return cljs.core.quot.call(null,this__9034.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__9039 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__9040 = 0;
while(true){
if((i__9040 < len))
{{
var G__9041 = cljs.core.assoc_BANG_.call(null,out__9039,(arr[i__9040]),(arr[(i__9040 + 1)]));
var G__9042 = (i__9040 + 2);
out__9039 = G__9041;
i__9040 = G__9042;
continue;
}
} else
{return out__9039;
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
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__2666__auto__){
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
var G__9047__9048 = arr.slice();
(G__9047__9048[i] = a);
return G__9047__9048;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__9049__9050 = arr.slice();
(G__9049__9050[i] = a);
(G__9049__9050[j] = b);
return G__9049__9050;
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
var new_arr__9052 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__9052,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__9052,(2 * i),(new_arr__9052.length - (2 * i)));
return new_arr__9052;
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
var editable__9055 = inode.ensure_editable(edit);
(editable__9055.arr[i] = a);
return editable__9055;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__9056 = inode.ensure_editable(edit);
(editable__9056.arr[i] = a);
(editable__9056.arr[j] = b);
return editable__9056;
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
var len__9063 = arr.length;
var i__9064 = 0;
var init__9065 = init;
while(true){
if((i__9064 < len__9063))
{var init__9068 = (function (){var k__9066 = (arr[i__9064]);
if(!((k__9066 == null)))
{return f.call(null,init__9065,k__9066,(arr[(i__9064 + 1)]));
} else
{var node__9067 = (arr[(i__9064 + 1)]);
if(!((node__9067 == null)))
{return node__9067.kv_reduce(f,init__9065);
} else
{return init__9065;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__9068))
{return cljs.core.deref.call(null,init__9068);
} else
{{
var G__9069 = (i__9064 + 2);
var G__9070 = init__9068;
i__9064 = G__9069;
init__9065 = G__9070;
continue;
}
}
} else
{return init__9065;
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
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__9071 = this;
var inode__9072 = this;
if((this__9071.bitmap === bit))
{return null;
} else
{var editable__9073 = inode__9072.ensure_editable(e);
var earr__9074 = editable__9073.arr;
var len__9075 = earr__9074.length;
editable__9073.bitmap = (bit ^ editable__9073.bitmap);
cljs.core.array_copy.call(null,earr__9074,(2 * (i + 1)),earr__9074,(2 * i),(len__9075 - (2 * (i + 1))));
(earr__9074[(len__9075 - 2)] = null);
(earr__9074[(len__9075 - 1)] = null);
return editable__9073;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9076 = this;
var inode__9077 = this;
var bit__9078 = (1 << ((hash >>> shift) & 0x01f));
var idx__9079 = cljs.core.bitmap_indexed_node_index.call(null,this__9076.bitmap,bit__9078);
if(((this__9076.bitmap & bit__9078) === 0))
{var n__9080 = cljs.core.bit_count.call(null,this__9076.bitmap);
if(((2 * n__9080) < this__9076.arr.length))
{var editable__9081 = inode__9077.ensure_editable(edit);
var earr__9082 = editable__9081.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__9082,(2 * idx__9079),earr__9082,(2 * (idx__9079 + 1)),(2 * (n__9080 - idx__9079)));
(earr__9082[(2 * idx__9079)] = key);
(earr__9082[((2 * idx__9079) + 1)] = val);
editable__9081.bitmap = (editable__9081.bitmap | bit__9078);
return editable__9081;
} else
{if((n__9080 >= 16))
{var nodes__9083 = cljs.core.make_array.call(null,32);
var jdx__9084 = ((hash >>> shift) & 0x01f);
(nodes__9083[jdx__9084] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9085 = 0;
var j__9086 = 0;
while(true){
if((i__9085 < 32))
{if((((this__9076.bitmap >>> i__9085) & 1) === 0))
{{
var G__9139 = (i__9085 + 1);
var G__9140 = j__9086;
i__9085 = G__9139;
j__9086 = G__9140;
continue;
}
} else
{(nodes__9083[i__9085] = ((!(((this__9076.arr[j__9086]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__9076.arr[j__9086])),(this__9076.arr[j__9086]),(this__9076.arr[(j__9086 + 1)]),added_leaf_QMARK_):(this__9076.arr[(j__9086 + 1)])));
{
var G__9141 = (i__9085 + 1);
var G__9142 = (j__9086 + 2);
i__9085 = G__9141;
j__9086 = G__9142;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__9080 + 1),nodes__9083));
} else
{if("\uFDD0'else")
{var new_arr__9087 = cljs.core.make_array.call(null,(2 * (n__9080 + 4)));
cljs.core.array_copy.call(null,this__9076.arr,0,new_arr__9087,0,(2 * idx__9079));
(new_arr__9087[(2 * idx__9079)] = key);
(new_arr__9087[((2 * idx__9079) + 1)] = val);
cljs.core.array_copy.call(null,this__9076.arr,(2 * idx__9079),new_arr__9087,(2 * (idx__9079 + 1)),(2 * (n__9080 - idx__9079)));
added_leaf_QMARK_.val = true;
var editable__9088 = inode__9077.ensure_editable(edit);
editable__9088.arr = new_arr__9087;
editable__9088.bitmap = (editable__9088.bitmap | bit__9078);
return editable__9088;
} else
{return null;
}
}
}
} else
{var key_or_nil__9089 = (this__9076.arr[(2 * idx__9079)]);
var val_or_node__9090 = (this__9076.arr[((2 * idx__9079) + 1)]);
if((key_or_nil__9089 == null))
{var n__9091 = val_or_node__9090.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9091 === val_or_node__9090))
{return inode__9077;
} else
{return cljs.core.edit_and_set.call(null,inode__9077,edit,((2 * idx__9079) + 1),n__9091);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9089))
{if((val === val_or_node__9090))
{return inode__9077;
} else
{return cljs.core.edit_and_set.call(null,inode__9077,edit,((2 * idx__9079) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__9077,edit,(2 * idx__9079),null,((2 * idx__9079) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__9089,val_or_node__9090,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__9092 = this;
var inode__9093 = this;
return cljs.core.create_inode_seq.call(null,this__9092.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9094 = this;
var inode__9095 = this;
var bit__9096 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9094.bitmap & bit__9096) === 0))
{return inode__9095;
} else
{var idx__9097 = cljs.core.bitmap_indexed_node_index.call(null,this__9094.bitmap,bit__9096);
var key_or_nil__9098 = (this__9094.arr[(2 * idx__9097)]);
var val_or_node__9099 = (this__9094.arr[((2 * idx__9097) + 1)]);
if((key_or_nil__9098 == null))
{var n__9100 = val_or_node__9099.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9100 === val_or_node__9099))
{return inode__9095;
} else
{if(!((n__9100 == null)))
{return cljs.core.edit_and_set.call(null,inode__9095,edit,((2 * idx__9097) + 1),n__9100);
} else
{if((this__9094.bitmap === bit__9096))
{return null;
} else
{if("\uFDD0'else")
{return inode__9095.edit_and_remove_pair(edit,bit__9096,idx__9097);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9098))
{(removed_leaf_QMARK_[0] = true);
return inode__9095.edit_and_remove_pair(edit,bit__9096,idx__9097);
} else
{if("\uFDD0'else")
{return inode__9095;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__9101 = this;
var inode__9102 = this;
if((e === this__9101.edit))
{return inode__9102;
} else
{var n__9103 = cljs.core.bit_count.call(null,this__9101.bitmap);
var new_arr__9104 = cljs.core.make_array.call(null,(((n__9103 < 0))?4:(2 * (n__9103 + 1))));
cljs.core.array_copy.call(null,this__9101.arr,0,new_arr__9104,0,(2 * n__9103));
return (new cljs.core.BitmapIndexedNode(e,this__9101.bitmap,new_arr__9104));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__9105 = this;
var inode__9106 = this;
return cljs.core.inode_kv_reduce.call(null,this__9105.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
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
{return val_or_node__9112.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9111))
{return cljs.core.PersistentVector.fromArray([key_or_nil__9111,val_or_node__9112], true);
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
var this__9113 = this;
var inode__9114 = this;
var bit__9115 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9113.bitmap & bit__9115) === 0))
{return inode__9114;
} else
{var idx__9116 = cljs.core.bitmap_indexed_node_index.call(null,this__9113.bitmap,bit__9115);
var key_or_nil__9117 = (this__9113.arr[(2 * idx__9116)]);
var val_or_node__9118 = (this__9113.arr[((2 * idx__9116) + 1)]);
if((key_or_nil__9117 == null))
{var n__9119 = val_or_node__9118.inode_without((shift + 5),hash,key);
if((n__9119 === val_or_node__9118))
{return inode__9114;
} else
{if(!((n__9119 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__9113.bitmap,cljs.core.clone_and_set.call(null,this__9113.arr,((2 * idx__9116) + 1),n__9119)));
} else
{if((this__9113.bitmap === bit__9115))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__9113.bitmap ^ bit__9115),cljs.core.remove_pair.call(null,this__9113.arr,idx__9116)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9117))
{return (new cljs.core.BitmapIndexedNode(null,(this__9113.bitmap ^ bit__9115),cljs.core.remove_pair.call(null,this__9113.arr,idx__9116)));
} else
{if("\uFDD0'else")
{return inode__9114;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9120 = this;
var inode__9121 = this;
var bit__9122 = (1 << ((hash >>> shift) & 0x01f));
var idx__9123 = cljs.core.bitmap_indexed_node_index.call(null,this__9120.bitmap,bit__9122);
if(((this__9120.bitmap & bit__9122) === 0))
{var n__9124 = cljs.core.bit_count.call(null,this__9120.bitmap);
if((n__9124 >= 16))
{var nodes__9125 = cljs.core.make_array.call(null,32);
var jdx__9126 = ((hash >>> shift) & 0x01f);
(nodes__9125[jdx__9126] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9127 = 0;
var j__9128 = 0;
while(true){
if((i__9127 < 32))
{if((((this__9120.bitmap >>> i__9127) & 1) === 0))
{{
var G__9143 = (i__9127 + 1);
var G__9144 = j__9128;
i__9127 = G__9143;
j__9128 = G__9144;
continue;
}
} else
{(nodes__9125[i__9127] = ((!(((this__9120.arr[j__9128]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__9120.arr[j__9128])),(this__9120.arr[j__9128]),(this__9120.arr[(j__9128 + 1)]),added_leaf_QMARK_):(this__9120.arr[(j__9128 + 1)])));
{
var G__9145 = (i__9127 + 1);
var G__9146 = (j__9128 + 2);
i__9127 = G__9145;
j__9128 = G__9146;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__9124 + 1),nodes__9125));
} else
{var new_arr__9129 = cljs.core.make_array.call(null,(2 * (n__9124 + 1)));
cljs.core.array_copy.call(null,this__9120.arr,0,new_arr__9129,0,(2 * idx__9123));
(new_arr__9129[(2 * idx__9123)] = key);
(new_arr__9129[((2 * idx__9123) + 1)] = val);
cljs.core.array_copy.call(null,this__9120.arr,(2 * idx__9123),new_arr__9129,(2 * (idx__9123 + 1)),(2 * (n__9124 - idx__9123)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__9120.bitmap | bit__9122),new_arr__9129));
}
} else
{var key_or_nil__9130 = (this__9120.arr[(2 * idx__9123)]);
var val_or_node__9131 = (this__9120.arr[((2 * idx__9123) + 1)]);
if((key_or_nil__9130 == null))
{var n__9132 = val_or_node__9131.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9132 === val_or_node__9131))
{return inode__9121;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9120.bitmap,cljs.core.clone_and_set.call(null,this__9120.arr,((2 * idx__9123) + 1),n__9132)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9130))
{if((val === val_or_node__9131))
{return inode__9121;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9120.bitmap,cljs.core.clone_and_set.call(null,this__9120.arr,((2 * idx__9123) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__9120.bitmap,cljs.core.clone_and_set.call(null,this__9120.arr,(2 * idx__9123),null,((2 * idx__9123) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__9130,val_or_node__9131,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9133 = this;
var inode__9134 = this;
var bit__9135 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9133.bitmap & bit__9135) === 0))
{return not_found;
} else
{var idx__9136 = cljs.core.bitmap_indexed_node_index.call(null,this__9133.bitmap,bit__9135);
var key_or_nil__9137 = (this__9133.arr[(2 * idx__9136)]);
var val_or_node__9138 = (this__9133.arr[((2 * idx__9136) + 1)]);
if((key_or_nil__9137 == null))
{return val_or_node__9138.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9137))
{return val_or_node__9138;
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
var arr__9154 = array_node.arr;
var len__9155 = (2 * (array_node.cnt - 1));
var new_arr__9156 = cljs.core.make_array.call(null,len__9155);
var i__9157 = 0;
var j__9158 = 1;
var bitmap__9159 = 0;
while(true){
if((i__9157 < len__9155))
{if((function (){var and__3822__auto____9160 = !((i__9157 === idx));
if(and__3822__auto____9160)
{return !(((arr__9154[i__9157]) == null));
} else
{return and__3822__auto____9160;
}
})())
{(new_arr__9156[j__9158] = (arr__9154[i__9157]));
{
var G__9161 = (i__9157 + 1);
var G__9162 = (j__9158 + 2);
var G__9163 = (bitmap__9159 | (1 << i__9157));
i__9157 = G__9161;
j__9158 = G__9162;
bitmap__9159 = G__9163;
continue;
}
} else
{{
var G__9164 = (i__9157 + 1);
var G__9165 = j__9158;
var G__9166 = bitmap__9159;
i__9157 = G__9164;
j__9158 = G__9165;
bitmap__9159 = G__9166;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__9159,new_arr__9156));
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
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9167 = this;
var inode__9168 = this;
var idx__9169 = ((hash >>> shift) & 0x01f);
var node__9170 = (this__9167.arr[idx__9169]);
if((node__9170 == null))
{var editable__9171 = cljs.core.edit_and_set.call(null,inode__9168,edit,idx__9169,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__9171.cnt = (editable__9171.cnt + 1);
return editable__9171;
} else
{var n__9172 = node__9170.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9172 === node__9170))
{return inode__9168;
} else
{return cljs.core.edit_and_set.call(null,inode__9168,edit,idx__9169,n__9172);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__9173 = this;
var inode__9174 = this;
return cljs.core.create_array_node_seq.call(null,this__9173.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9175 = this;
var inode__9176 = this;
var idx__9177 = ((hash >>> shift) & 0x01f);
var node__9178 = (this__9175.arr[idx__9177]);
if((node__9178 == null))
{return inode__9176;
} else
{var n__9179 = node__9178.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9179 === node__9178))
{return inode__9176;
} else
{if((n__9179 == null))
{if((this__9175.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__9176,edit,idx__9177);
} else
{var editable__9180 = cljs.core.edit_and_set.call(null,inode__9176,edit,idx__9177,n__9179);
editable__9180.cnt = (editable__9180.cnt - 1);
return editable__9180;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__9176,edit,idx__9177,n__9179);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__9181 = this;
var inode__9182 = this;
if((e === this__9181.edit))
{return inode__9182;
} else
{return (new cljs.core.ArrayNode(e,this__9181.cnt,this__9181.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__9183 = this;
var inode__9184 = this;
var len__9185 = this__9183.arr.length;
var i__9186 = 0;
var init__9187 = init;
while(true){
if((i__9186 < len__9185))
{var node__9188 = (this__9183.arr[i__9186]);
if(!((node__9188 == null)))
{var init__9189 = node__9188.kv_reduce(f,init__9187);
if(cljs.core.reduced_QMARK_.call(null,init__9189))
{return cljs.core.deref.call(null,init__9189);
} else
{{
var G__9208 = (i__9186 + 1);
var G__9209 = init__9189;
i__9186 = G__9208;
init__9187 = G__9209;
continue;
}
}
} else
{return null;
}
} else
{return init__9187;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9190 = this;
var inode__9191 = this;
var idx__9192 = ((hash >>> shift) & 0x01f);
var node__9193 = (this__9190.arr[idx__9192]);
if(!((node__9193 == null)))
{return node__9193.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__9194 = this;
var inode__9195 = this;
var idx__9196 = ((hash >>> shift) & 0x01f);
var node__9197 = (this__9194.arr[idx__9196]);
if(!((node__9197 == null)))
{var n__9198 = node__9197.inode_without((shift + 5),hash,key);
if((n__9198 === node__9197))
{return inode__9195;
} else
{if((n__9198 == null))
{if((this__9194.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__9195,null,idx__9196);
} else
{return (new cljs.core.ArrayNode(null,(this__9194.cnt - 1),cljs.core.clone_and_set.call(null,this__9194.arr,idx__9196,n__9198)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__9194.cnt,cljs.core.clone_and_set.call(null,this__9194.arr,idx__9196,n__9198)));
} else
{return null;
}
}
}
} else
{return inode__9195;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9199 = this;
var inode__9200 = this;
var idx__9201 = ((hash >>> shift) & 0x01f);
var node__9202 = (this__9199.arr[idx__9201]);
if((node__9202 == null))
{return (new cljs.core.ArrayNode(null,(this__9199.cnt + 1),cljs.core.clone_and_set.call(null,this__9199.arr,idx__9201,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__9203 = node__9202.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9203 === node__9202))
{return inode__9200;
} else
{return (new cljs.core.ArrayNode(null,this__9199.cnt,cljs.core.clone_and_set.call(null,this__9199.arr,idx__9201,n__9203)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9204 = this;
var inode__9205 = this;
var idx__9206 = ((hash >>> shift) & 0x01f);
var node__9207 = (this__9204.arr[idx__9206]);
if(!((node__9207 == null)))
{return node__9207.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__9212 = (2 * cnt);
var i__9213 = 0;
while(true){
if((i__9213 < lim__9212))
{if(cljs.core.key_test.call(null,key,(arr[i__9213])))
{return i__9213;
} else
{{
var G__9214 = (i__9213 + 2);
i__9213 = G__9214;
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
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9215 = this;
var inode__9216 = this;
if((hash === this__9215.collision_hash))
{var idx__9217 = cljs.core.hash_collision_node_find_index.call(null,this__9215.arr,this__9215.cnt,key);
if((idx__9217 === -1))
{if((this__9215.arr.length > (2 * this__9215.cnt)))
{var editable__9218 = cljs.core.edit_and_set.call(null,inode__9216,edit,(2 * this__9215.cnt),key,((2 * this__9215.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__9218.cnt = (editable__9218.cnt + 1);
return editable__9218;
} else
{var len__9219 = this__9215.arr.length;
var new_arr__9220 = cljs.core.make_array.call(null,(len__9219 + 2));
cljs.core.array_copy.call(null,this__9215.arr,0,new_arr__9220,0,len__9219);
(new_arr__9220[len__9219] = key);
(new_arr__9220[(len__9219 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__9216.ensure_editable_array(edit,(this__9215.cnt + 1),new_arr__9220);
}
} else
{if(((this__9215.arr[(idx__9217 + 1)]) === val))
{return inode__9216;
} else
{return cljs.core.edit_and_set.call(null,inode__9216,edit,(idx__9217 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__9215.collision_hash >>> shift) & 0x01f)),[null,inode__9216,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__9221 = this;
var inode__9222 = this;
return cljs.core.create_inode_seq.call(null,this__9221.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9223 = this;
var inode__9224 = this;
var idx__9225 = cljs.core.hash_collision_node_find_index.call(null,this__9223.arr,this__9223.cnt,key);
if((idx__9225 === -1))
{return inode__9224;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__9223.cnt === 1))
{return null;
} else
{var editable__9226 = inode__9224.ensure_editable(edit);
var earr__9227 = editable__9226.arr;
(earr__9227[idx__9225] = (earr__9227[((2 * this__9223.cnt) - 2)]));
(earr__9227[(idx__9225 + 1)] = (earr__9227[((2 * this__9223.cnt) - 1)]));
(earr__9227[((2 * this__9223.cnt) - 1)] = null);
(earr__9227[((2 * this__9223.cnt) - 2)] = null);
editable__9226.cnt = (editable__9226.cnt - 1);
return editable__9226;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__9228 = this;
var inode__9229 = this;
if((e === this__9228.edit))
{return inode__9229;
} else
{var new_arr__9230 = cljs.core.make_array.call(null,(2 * (this__9228.cnt + 1)));
cljs.core.array_copy.call(null,this__9228.arr,0,new_arr__9230,0,(2 * this__9228.cnt));
return (new cljs.core.HashCollisionNode(e,this__9228.collision_hash,this__9228.cnt,new_arr__9230));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__9231 = this;
var inode__9232 = this;
return cljs.core.inode_kv_reduce.call(null,this__9231.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9233 = this;
var inode__9234 = this;
var idx__9235 = cljs.core.hash_collision_node_find_index.call(null,this__9233.arr,this__9233.cnt,key);
if((idx__9235 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__9233.arr[idx__9235])))
{return cljs.core.PersistentVector.fromArray([(this__9233.arr[idx__9235]),(this__9233.arr[(idx__9235 + 1)])], true);
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
var this__9236 = this;
var inode__9237 = this;
var idx__9238 = cljs.core.hash_collision_node_find_index.call(null,this__9236.arr,this__9236.cnt,key);
if((idx__9238 === -1))
{return inode__9237;
} else
{if((this__9236.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__9236.collision_hash,(this__9236.cnt - 1),cljs.core.remove_pair.call(null,this__9236.arr,cljs.core.quot.call(null,idx__9238,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9239 = this;
var inode__9240 = this;
if((hash === this__9239.collision_hash))
{var idx__9241 = cljs.core.hash_collision_node_find_index.call(null,this__9239.arr,this__9239.cnt,key);
if((idx__9241 === -1))
{var len__9242 = this__9239.arr.length;
var new_arr__9243 = cljs.core.make_array.call(null,(len__9242 + 2));
cljs.core.array_copy.call(null,this__9239.arr,0,new_arr__9243,0,len__9242);
(new_arr__9243[len__9242] = key);
(new_arr__9243[(len__9242 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__9239.collision_hash,(this__9239.cnt + 1),new_arr__9243));
} else
{if(cljs.core._EQ_.call(null,(this__9239.arr[idx__9241]),val))
{return inode__9240;
} else
{return (new cljs.core.HashCollisionNode(null,this__9239.collision_hash,this__9239.cnt,cljs.core.clone_and_set.call(null,this__9239.arr,(idx__9241 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__9239.collision_hash >>> shift) & 0x01f)),[null,inode__9240])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9244 = this;
var inode__9245 = this;
var idx__9246 = cljs.core.hash_collision_node_find_index.call(null,this__9244.arr,this__9244.cnt,key);
if((idx__9246 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__9244.arr[idx__9246])))
{return (this__9244.arr[(idx__9246 + 1)]);
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
var this__9247 = this;
var inode__9248 = this;
if((e === this__9247.edit))
{this__9247.arr = array;
this__9247.cnt = count;
return inode__9248;
} else
{return (new cljs.core.HashCollisionNode(this__9247.edit,this__9247.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__9253 = cljs.core.hash.call(null,key1);
if((key1hash__9253 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9253,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9254 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__9253,key1,val1,added_leaf_QMARK___9254).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___9254);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__9255 = cljs.core.hash.call(null,key1);
if((key1hash__9255 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9255,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9256 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__9255,key1,val1,added_leaf_QMARK___9256).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___9256);
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
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9257 = this;
var h__2548__auto____9258 = this__9257.__hash;
if(!((h__2548__auto____9258 == null)))
{return h__2548__auto____9258;
} else
{var h__2548__auto____9259 = cljs.core.hash_coll.call(null,coll);
this__9257.__hash = h__2548__auto____9259;
return h__2548__auto____9259;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9260 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__9261 = this;
var this__9262 = this;
return cljs.core.pr_str.call(null,this__9262);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9263 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9264 = this;
if((this__9264.s == null))
{return cljs.core.PersistentVector.fromArray([(this__9264.nodes[this__9264.i]),(this__9264.nodes[(this__9264.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__9264.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9265 = this;
if((this__9265.s == null))
{return cljs.core.create_inode_seq.call(null,this__9265.nodes,(this__9265.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__9265.nodes,this__9265.i,cljs.core.next.call(null,this__9265.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9266 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9267 = this;
return (new cljs.core.NodeSeq(meta,this__9267.nodes,this__9267.i,this__9267.s,this__9267.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9268 = this;
return this__9268.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9269 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9269.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__9276 = nodes.length;
var j__9277 = i;
while(true){
if((j__9277 < len__9276))
{if(!(((nodes[j__9277]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__9277,null,null));
} else
{var temp__3971__auto____9278 = (nodes[(j__9277 + 1)]);
if(cljs.core.truth_(temp__3971__auto____9278))
{var node__9279 = temp__3971__auto____9278;
var temp__3971__auto____9280 = node__9279.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9280))
{var node_seq__9281 = temp__3971__auto____9280;
return (new cljs.core.NodeSeq(null,nodes,(j__9277 + 2),node_seq__9281,null));
} else
{{
var G__9282 = (j__9277 + 2);
j__9277 = G__9282;
continue;
}
}
} else
{{
var G__9283 = (j__9277 + 2);
j__9277 = G__9283;
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
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9284 = this;
var h__2548__auto____9285 = this__9284.__hash;
if(!((h__2548__auto____9285 == null)))
{return h__2548__auto____9285;
} else
{var h__2548__auto____9286 = cljs.core.hash_coll.call(null,coll);
this__9284.__hash = h__2548__auto____9286;
return h__2548__auto____9286;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9287 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__9288 = this;
var this__9289 = this;
return cljs.core.pr_str.call(null,this__9289);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9290 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9291 = this;
return cljs.core.first.call(null,this__9291.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9292 = this;
return cljs.core.create_array_node_seq.call(null,null,this__9292.nodes,this__9292.i,cljs.core.next.call(null,this__9292.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9293 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9294 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__9294.nodes,this__9294.i,this__9294.s,this__9294.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9295 = this;
return this__9295.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9296 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9296.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__9303 = nodes.length;
var j__9304 = i;
while(true){
if((j__9304 < len__9303))
{var temp__3971__auto____9305 = (nodes[j__9304]);
if(cljs.core.truth_(temp__3971__auto____9305))
{var nj__9306 = temp__3971__auto____9305;
var temp__3971__auto____9307 = nj__9306.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9307))
{var ns__9308 = temp__3971__auto____9307;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__9304 + 1),ns__9308,null));
} else
{{
var G__9309 = (j__9304 + 1);
j__9304 = G__9309;
continue;
}
}
} else
{{
var G__9310 = (j__9304 + 1);
j__9304 = G__9310;
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
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9313 = this;
return (new cljs.core.TransientHashMap({},this__9313.root,this__9313.cnt,this__9313.has_nil_QMARK_,this__9313.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9314 = this;
var h__2548__auto____9315 = this__9314.__hash;
if(!((h__2548__auto____9315 == null)))
{return h__2548__auto____9315;
} else
{var h__2548__auto____9316 = cljs.core.hash_imap.call(null,coll);
this__9314.__hash = h__2548__auto____9316;
return h__2548__auto____9316;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9317 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9318 = this;
if((k == null))
{if(this__9318.has_nil_QMARK_)
{return this__9318.nil_val;
} else
{return not_found;
}
} else
{if((this__9318.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__9318.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9319 = this;
if((k == null))
{if((function (){var and__3822__auto____9320 = this__9319.has_nil_QMARK_;
if(and__3822__auto____9320)
{return (v === this__9319.nil_val);
} else
{return and__3822__auto____9320;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9319.meta,((this__9319.has_nil_QMARK_)?this__9319.cnt:(this__9319.cnt + 1)),this__9319.root,true,v,null));
}
} else
{var added_leaf_QMARK___9321 = (new cljs.core.Box(false));
var new_root__9322 = (((this__9319.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9319.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9321);
if((new_root__9322 === this__9319.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9319.meta,((added_leaf_QMARK___9321.val)?(this__9319.cnt + 1):this__9319.cnt),new_root__9322,this__9319.has_nil_QMARK_,this__9319.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9323 = this;
if((k == null))
{return this__9323.has_nil_QMARK_;
} else
{if((this__9323.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__9323.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__9346 = null;
var G__9346__2 = (function (this_sym9324,k){
var this__9326 = this;
var this_sym9324__9327 = this;
var coll__9328 = this_sym9324__9327;
return coll__9328.cljs$core$ILookup$_lookup$arity$2(coll__9328,k);
});
var G__9346__3 = (function (this_sym9325,k,not_found){
var this__9326 = this;
var this_sym9325__9329 = this;
var coll__9330 = this_sym9325__9329;
return coll__9330.cljs$core$ILookup$_lookup$arity$3(coll__9330,k,not_found);
});
G__9346 = function(this_sym9325,k,not_found){
switch(arguments.length){
case 2:
return G__9346__2.call(this,this_sym9325,k);
case 3:
return G__9346__3.call(this,this_sym9325,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9346;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym9311,args9312){
var this__9331 = this;
return this_sym9311.call.apply(this_sym9311,[this_sym9311].concat(args9312.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9332 = this;
var init__9333 = ((this__9332.has_nil_QMARK_)?f.call(null,init,null,this__9332.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__9333))
{return cljs.core.deref.call(null,init__9333);
} else
{if(!((this__9332.root == null)))
{return this__9332.root.kv_reduce(f,init__9333);
} else
{if("\uFDD0'else")
{return init__9333;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9334 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__9335 = this;
var this__9336 = this;
return cljs.core.pr_str.call(null,this__9336);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9337 = this;
if((this__9337.cnt > 0))
{var s__9338 = ((!((this__9337.root == null)))?this__9337.root.inode_seq():null);
if(this__9337.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__9337.nil_val], true),s__9338);
} else
{return s__9338;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9339 = this;
return this__9339.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9340 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9341 = this;
return (new cljs.core.PersistentHashMap(meta,this__9341.cnt,this__9341.root,this__9341.has_nil_QMARK_,this__9341.nil_val,this__9341.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9342 = this;
return this__9342.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9343 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__9343.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9344 = this;
if((k == null))
{if(this__9344.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__9344.meta,(this__9344.cnt - 1),this__9344.root,false,null,null));
} else
{return coll;
}
} else
{if((this__9344.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__9345 = this__9344.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__9345 === this__9344.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9344.meta,(this__9344.cnt - 1),new_root__9345,this__9344.has_nil_QMARK_,this__9344.nil_val,null));
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
var len__9347 = ks.length;
var i__9348 = 0;
var out__9349 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__9348 < len__9347))
{{
var G__9350 = (i__9348 + 1);
var G__9351 = cljs.core.assoc_BANG_.call(null,out__9349,(ks[i__9348]),(vs[i__9348]));
i__9348 = G__9350;
out__9349 = G__9351;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9349);
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
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__9352 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9353 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__9354 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9355 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9356 = this;
if((k == null))
{if(this__9356.has_nil_QMARK_)
{return this__9356.nil_val;
} else
{return null;
}
} else
{if((this__9356.root == null))
{return null;
} else
{return this__9356.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9357 = this;
if((k == null))
{if(this__9357.has_nil_QMARK_)
{return this__9357.nil_val;
} else
{return not_found;
}
} else
{if((this__9357.root == null))
{return not_found;
} else
{return this__9357.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9358 = this;
if(this__9358.edit)
{return this__9358.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__9359 = this;
var tcoll__9360 = this;
if(this__9359.edit)
{if((function (){var G__9361__9362 = o;
if(G__9361__9362)
{if((function (){var or__3824__auto____9363 = (G__9361__9362.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9363)
{return or__3824__auto____9363;
} else
{return G__9361__9362.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9361__9362.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9361__9362);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9361__9362);
}
})())
{return tcoll__9360.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9364 = cljs.core.seq.call(null,o);
var tcoll__9365 = tcoll__9360;
while(true){
var temp__3971__auto____9366 = cljs.core.first.call(null,es__9364);
if(cljs.core.truth_(temp__3971__auto____9366))
{var e__9367 = temp__3971__auto____9366;
{
var G__9378 = cljs.core.next.call(null,es__9364);
var G__9379 = tcoll__9365.assoc_BANG_(cljs.core.key.call(null,e__9367),cljs.core.val.call(null,e__9367));
es__9364 = G__9378;
tcoll__9365 = G__9379;
continue;
}
} else
{return tcoll__9365;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__9368 = this;
var tcoll__9369 = this;
if(this__9368.edit)
{if((k == null))
{if((this__9368.nil_val === v))
{} else
{this__9368.nil_val = v;
}
if(this__9368.has_nil_QMARK_)
{} else
{this__9368.count = (this__9368.count + 1);
this__9368.has_nil_QMARK_ = true;
}
return tcoll__9369;
} else
{var added_leaf_QMARK___9370 = (new cljs.core.Box(false));
var node__9371 = (((this__9368.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9368.root).inode_assoc_BANG_(this__9368.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9370);
if((node__9371 === this__9368.root))
{} else
{this__9368.root = node__9371;
}
if(added_leaf_QMARK___9370.val)
{this__9368.count = (this__9368.count + 1);
} else
{}
return tcoll__9369;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__9372 = this;
var tcoll__9373 = this;
if(this__9372.edit)
{if((k == null))
{if(this__9372.has_nil_QMARK_)
{this__9372.has_nil_QMARK_ = false;
this__9372.nil_val = null;
this__9372.count = (this__9372.count - 1);
return tcoll__9373;
} else
{return tcoll__9373;
}
} else
{if((this__9372.root == null))
{return tcoll__9373;
} else
{var removed_leaf_QMARK___9374 = (new cljs.core.Box(false));
var node__9375 = this__9372.root.inode_without_BANG_(this__9372.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___9374);
if((node__9375 === this__9372.root))
{} else
{this__9372.root = node__9375;
}
if(cljs.core.truth_((removed_leaf_QMARK___9374[0])))
{this__9372.count = (this__9372.count - 1);
} else
{}
return tcoll__9373;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__9376 = this;
var tcoll__9377 = this;
if(this__9376.edit)
{this__9376.edit = null;
return (new cljs.core.PersistentHashMap(null,this__9376.count,this__9376.root,this__9376.has_nil_QMARK_,this__9376.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__9382 = node;
var stack__9383 = stack;
while(true){
if(!((t__9382 == null)))
{{
var G__9384 = ((ascending_QMARK_)?t__9382.left:t__9382.right);
var G__9385 = cljs.core.conj.call(null,stack__9383,t__9382);
t__9382 = G__9384;
stack__9383 = G__9385;
continue;
}
} else
{return stack__9383;
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
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9386 = this;
var h__2548__auto____9387 = this__9386.__hash;
if(!((h__2548__auto____9387 == null)))
{return h__2548__auto____9387;
} else
{var h__2548__auto____9388 = cljs.core.hash_coll.call(null,coll);
this__9386.__hash = h__2548__auto____9388;
return h__2548__auto____9388;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9389 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__9390 = this;
var this__9391 = this;
return cljs.core.pr_str.call(null,this__9391);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9392 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9393 = this;
if((this__9393.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__9393.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__9394 = this;
return cljs.core.peek.call(null,this__9394.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__9395 = this;
var t__9396 = cljs.core.first.call(null,this__9395.stack);
var next_stack__9397 = cljs.core.tree_map_seq_push.call(null,((this__9395.ascending_QMARK_)?t__9396.right:t__9396.left),cljs.core.next.call(null,this__9395.stack),this__9395.ascending_QMARK_);
if(!((next_stack__9397 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__9397,this__9395.ascending_QMARK_,(this__9395.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9398 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9399 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__9399.stack,this__9399.ascending_QMARK_,this__9399.cnt,this__9399.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9400 = this;
return this__9400.meta;
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
{if((function (){var and__3822__auto____9402 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____9402)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____9402;
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
{if((function (){var and__3822__auto____9404 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____9404)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____9404;
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
var init__9408 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__9408))
{return cljs.core.deref.call(null,init__9408);
} else
{var init__9409 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__9408):init__9408);
if(cljs.core.reduced_QMARK_.call(null,init__9409))
{return cljs.core.deref.call(null,init__9409);
} else
{var init__9410 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__9409):init__9409);
if(cljs.core.reduced_QMARK_.call(null,init__9410))
{return cljs.core.deref.call(null,init__9410);
} else
{return init__9410;
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
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9413 = this;
var h__2548__auto____9414 = this__9413.__hash;
if(!((h__2548__auto____9414 == null)))
{return h__2548__auto____9414;
} else
{var h__2548__auto____9415 = cljs.core.hash_coll.call(null,coll);
this__9413.__hash = h__2548__auto____9415;
return h__2548__auto____9415;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9416 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9417 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9418 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9418.key,this__9418.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__9466 = null;
var G__9466__2 = (function (this_sym9419,k){
var this__9421 = this;
var this_sym9419__9422 = this;
var node__9423 = this_sym9419__9422;
return node__9423.cljs$core$ILookup$_lookup$arity$2(node__9423,k);
});
var G__9466__3 = (function (this_sym9420,k,not_found){
var this__9421 = this;
var this_sym9420__9424 = this;
var node__9425 = this_sym9420__9424;
return node__9425.cljs$core$ILookup$_lookup$arity$3(node__9425,k,not_found);
});
G__9466 = function(this_sym9420,k,not_found){
switch(arguments.length){
case 2:
return G__9466__2.call(this,this_sym9420,k);
case 3:
return G__9466__3.call(this,this_sym9420,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9466;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym9411,args9412){
var this__9426 = this;
return this_sym9411.call.apply(this_sym9411,[this_sym9411].concat(args9412.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9427 = this;
return cljs.core.PersistentVector.fromArray([this__9427.key,this__9427.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9428 = this;
return this__9428.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9429 = this;
return this__9429.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__9430 = this;
var node__9431 = this;
return ins.balance_right(node__9431);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__9432 = this;
var node__9433 = this;
return (new cljs.core.RedNode(this__9432.key,this__9432.val,this__9432.left,this__9432.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__9434 = this;
var node__9435 = this;
return cljs.core.balance_right_del.call(null,this__9434.key,this__9434.val,this__9434.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__9436 = this;
var node__9437 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__9438 = this;
var node__9439 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9439,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__9440 = this;
var node__9441 = this;
return cljs.core.balance_left_del.call(null,this__9440.key,this__9440.val,del,this__9440.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__9442 = this;
var node__9443 = this;
return ins.balance_left(node__9443);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__9444 = this;
var node__9445 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__9445,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__9467 = null;
var G__9467__0 = (function (){
var this__9446 = this;
var this__9448 = this;
return cljs.core.pr_str.call(null,this__9448);
});
G__9467 = function(){
switch(arguments.length){
case 0:
return G__9467__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9467;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__9449 = this;
var node__9450 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9450,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__9451 = this;
var node__9452 = this;
return node__9452;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9453 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9454 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9455 = this;
return cljs.core.list.call(null,this__9455.key,this__9455.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9456 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9457 = this;
return this__9457.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9458 = this;
return cljs.core.PersistentVector.fromArray([this__9458.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9459 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9459.key,this__9459.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9460 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9461 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9461.key,this__9461.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9462 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9463 = this;
if((n === 0))
{return this__9463.key;
} else
{if((n === 1))
{return this__9463.val;
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
var this__9464 = this;
if((n === 0))
{return this__9464.key;
} else
{if((n === 1))
{return this__9464.val;
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
var this__9465 = this;
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
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9470 = this;
var h__2548__auto____9471 = this__9470.__hash;
if(!((h__2548__auto____9471 == null)))
{return h__2548__auto____9471;
} else
{var h__2548__auto____9472 = cljs.core.hash_coll.call(null,coll);
this__9470.__hash = h__2548__auto____9472;
return h__2548__auto____9472;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9473 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9474 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9475 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9475.key,this__9475.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__9523 = null;
var G__9523__2 = (function (this_sym9476,k){
var this__9478 = this;
var this_sym9476__9479 = this;
var node__9480 = this_sym9476__9479;
return node__9480.cljs$core$ILookup$_lookup$arity$2(node__9480,k);
});
var G__9523__3 = (function (this_sym9477,k,not_found){
var this__9478 = this;
var this_sym9477__9481 = this;
var node__9482 = this_sym9477__9481;
return node__9482.cljs$core$ILookup$_lookup$arity$3(node__9482,k,not_found);
});
G__9523 = function(this_sym9477,k,not_found){
switch(arguments.length){
case 2:
return G__9523__2.call(this,this_sym9477,k);
case 3:
return G__9523__3.call(this,this_sym9477,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9523;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym9468,args9469){
var this__9483 = this;
return this_sym9468.call.apply(this_sym9468,[this_sym9468].concat(args9469.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9484 = this;
return cljs.core.PersistentVector.fromArray([this__9484.key,this__9484.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9485 = this;
return this__9485.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9486 = this;
return this__9486.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__9487 = this;
var node__9488 = this;
return (new cljs.core.RedNode(this__9487.key,this__9487.val,this__9487.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__9489 = this;
var node__9490 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__9491 = this;
var node__9492 = this;
return (new cljs.core.RedNode(this__9491.key,this__9491.val,this__9491.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__9493 = this;
var node__9494 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__9495 = this;
var node__9496 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9496,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__9497 = this;
var node__9498 = this;
return (new cljs.core.RedNode(this__9497.key,this__9497.val,del,this__9497.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__9499 = this;
var node__9500 = this;
return (new cljs.core.RedNode(this__9499.key,this__9499.val,ins,this__9499.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__9501 = this;
var node__9502 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9501.left))
{return (new cljs.core.RedNode(this__9501.key,this__9501.val,this__9501.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__9501.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9501.right))
{return (new cljs.core.RedNode(this__9501.right.key,this__9501.right.val,(new cljs.core.BlackNode(this__9501.key,this__9501.val,this__9501.left,this__9501.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__9501.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__9502,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__9524 = null;
var G__9524__0 = (function (){
var this__9503 = this;
var this__9505 = this;
return cljs.core.pr_str.call(null,this__9505);
});
G__9524 = function(){
switch(arguments.length){
case 0:
return G__9524__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9524;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__9506 = this;
var node__9507 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9506.right))
{return (new cljs.core.RedNode(this__9506.key,this__9506.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9506.left,null)),this__9506.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9506.left))
{return (new cljs.core.RedNode(this__9506.left.key,this__9506.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9506.left.left,null)),(new cljs.core.BlackNode(this__9506.key,this__9506.val,this__9506.left.right,this__9506.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9507,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__9508 = this;
var node__9509 = this;
return (new cljs.core.BlackNode(this__9508.key,this__9508.val,this__9508.left,this__9508.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9510 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9511 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9512 = this;
return cljs.core.list.call(null,this__9512.key,this__9512.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9513 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9514 = this;
return this__9514.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9515 = this;
return cljs.core.PersistentVector.fromArray([this__9515.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9516 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9516.key,this__9516.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9517 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9518 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9518.key,this__9518.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9519 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9520 = this;
if((n === 0))
{return this__9520.key;
} else
{if((n === 1))
{return this__9520.val;
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
var this__9521 = this;
if((n === 0))
{return this__9521.key;
} else
{if((n === 1))
{return this__9521.val;
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
var this__9522 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__9528 = comp.call(null,k,tree.key);
if((c__9528 === 0))
{(found[0] = tree);
return null;
} else
{if((c__9528 < 0))
{var ins__9529 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__9529 == null)))
{return tree.add_left(ins__9529);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__9530 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__9530 == null)))
{return tree.add_right(ins__9530);
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
{var app__9533 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9533))
{return (new cljs.core.RedNode(app__9533.key,app__9533.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__9533.left,null)),(new cljs.core.RedNode(right.key,right.val,app__9533.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__9533,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__9534 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9534))
{return (new cljs.core.RedNode(app__9534.key,app__9534.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__9534.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__9534.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__9534,right.right,null)));
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
{var c__9540 = comp.call(null,k,tree.key);
if((c__9540 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__9540 < 0))
{var del__9541 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____9542 = !((del__9541 == null));
if(or__3824__auto____9542)
{return or__3824__auto____9542;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__9541,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__9541,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__9543 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____9544 = !((del__9543 == null));
if(or__3824__auto____9544)
{return or__3824__auto____9544;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__9543);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__9543,null));
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
var tk__9547 = tree.key;
var c__9548 = comp.call(null,k,tk__9547);
if((c__9548 === 0))
{return tree.replace(tk__9547,v,tree.left,tree.right);
} else
{if((c__9548 < 0))
{return tree.replace(tk__9547,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__9547,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9551 = this;
var h__2548__auto____9552 = this__9551.__hash;
if(!((h__2548__auto____9552 == null)))
{return h__2548__auto____9552;
} else
{var h__2548__auto____9553 = cljs.core.hash_imap.call(null,coll);
this__9551.__hash = h__2548__auto____9553;
return h__2548__auto____9553;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9554 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9555 = this;
var n__9556 = coll.entry_at(k);
if(!((n__9556 == null)))
{return n__9556.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9557 = this;
var found__9558 = [null];
var t__9559 = cljs.core.tree_map_add.call(null,this__9557.comp,this__9557.tree,k,v,found__9558);
if((t__9559 == null))
{var found_node__9560 = cljs.core.nth.call(null,found__9558,0);
if(cljs.core._EQ_.call(null,v,found_node__9560.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9557.comp,cljs.core.tree_map_replace.call(null,this__9557.comp,this__9557.tree,k,v),this__9557.cnt,this__9557.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9557.comp,t__9559.blacken(),(this__9557.cnt + 1),this__9557.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9561 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__9595 = null;
var G__9595__2 = (function (this_sym9562,k){
var this__9564 = this;
var this_sym9562__9565 = this;
var coll__9566 = this_sym9562__9565;
return coll__9566.cljs$core$ILookup$_lookup$arity$2(coll__9566,k);
});
var G__9595__3 = (function (this_sym9563,k,not_found){
var this__9564 = this;
var this_sym9563__9567 = this;
var coll__9568 = this_sym9563__9567;
return coll__9568.cljs$core$ILookup$_lookup$arity$3(coll__9568,k,not_found);
});
G__9595 = function(this_sym9563,k,not_found){
switch(arguments.length){
case 2:
return G__9595__2.call(this,this_sym9563,k);
case 3:
return G__9595__3.call(this,this_sym9563,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9595;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym9549,args9550){
var this__9569 = this;
return this_sym9549.call.apply(this_sym9549,[this_sym9549].concat(args9550.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9570 = this;
if(!((this__9570.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__9570.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9571 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9572 = this;
if((this__9572.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9572.tree,false,this__9572.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__9573 = this;
var this__9574 = this;
return cljs.core.pr_str.call(null,this__9574);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__9575 = this;
var coll__9576 = this;
var t__9577 = this__9575.tree;
while(true){
if(!((t__9577 == null)))
{var c__9578 = this__9575.comp.call(null,k,t__9577.key);
if((c__9578 === 0))
{return t__9577;
} else
{if((c__9578 < 0))
{{
var G__9596 = t__9577.left;
t__9577 = G__9596;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__9597 = t__9577.right;
t__9577 = G__9597;
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
var this__9579 = this;
if((this__9579.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9579.tree,ascending_QMARK_,this__9579.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9580 = this;
if((this__9580.cnt > 0))
{var stack__9581 = null;
var t__9582 = this__9580.tree;
while(true){
if(!((t__9582 == null)))
{var c__9583 = this__9580.comp.call(null,k,t__9582.key);
if((c__9583 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__9581,t__9582),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__9583 < 0))
{{
var G__9598 = cljs.core.conj.call(null,stack__9581,t__9582);
var G__9599 = t__9582.left;
stack__9581 = G__9598;
t__9582 = G__9599;
continue;
}
} else
{{
var G__9600 = stack__9581;
var G__9601 = t__9582.right;
stack__9581 = G__9600;
t__9582 = G__9601;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__9583 > 0))
{{
var G__9602 = cljs.core.conj.call(null,stack__9581,t__9582);
var G__9603 = t__9582.right;
stack__9581 = G__9602;
t__9582 = G__9603;
continue;
}
} else
{{
var G__9604 = stack__9581;
var G__9605 = t__9582.left;
stack__9581 = G__9604;
t__9582 = G__9605;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__9581 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__9581,ascending_QMARK_,-1,null));
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
var this__9584 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9585 = this;
return this__9585.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9586 = this;
if((this__9586.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9586.tree,true,this__9586.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9587 = this;
return this__9587.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9588 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9589 = this;
return (new cljs.core.PersistentTreeMap(this__9589.comp,this__9589.tree,this__9589.cnt,meta,this__9589.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9590 = this;
return this__9590.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9591 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__9591.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9592 = this;
var found__9593 = [null];
var t__9594 = cljs.core.tree_map_remove.call(null,this__9592.comp,this__9592.tree,k,found__9593);
if((t__9594 == null))
{if((cljs.core.nth.call(null,found__9593,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9592.comp,null,0,this__9592.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9592.comp,t__9594.blacken(),(this__9592.cnt - 1),this__9592.meta,null));
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
var in__9608 = cljs.core.seq.call(null,keyvals);
var out__9609 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__9608)
{{
var G__9610 = cljs.core.nnext.call(null,in__9608);
var G__9611 = cljs.core.assoc_BANG_.call(null,out__9609,cljs.core.first.call(null,in__9608),cljs.core.second.call(null,in__9608));
in__9608 = G__9610;
out__9609 = G__9611;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9609);
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
hash_map.cljs$lang$applyTo = (function (arglist__9612){
var keyvals = cljs.core.seq(arglist__9612);;
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
array_map.cljs$lang$applyTo = (function (arglist__9613){
var keyvals = cljs.core.seq(arglist__9613);;
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
var ks__9617 = [];
var obj__9618 = {};
var kvs__9619 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__9619)
{ks__9617.push(cljs.core.first.call(null,kvs__9619));
(obj__9618[cljs.core.first.call(null,kvs__9619)] = cljs.core.second.call(null,kvs__9619));
{
var G__9620 = cljs.core.nnext.call(null,kvs__9619);
kvs__9619 = G__9620;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__9617,obj__9618);
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
obj_map.cljs$lang$applyTo = (function (arglist__9621){
var keyvals = cljs.core.seq(arglist__9621);;
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
var in__9624 = cljs.core.seq.call(null,keyvals);
var out__9625 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__9624)
{{
var G__9626 = cljs.core.nnext.call(null,in__9624);
var G__9627 = cljs.core.assoc.call(null,out__9625,cljs.core.first.call(null,in__9624),cljs.core.second.call(null,in__9624));
in__9624 = G__9626;
out__9625 = G__9627;
continue;
}
} else
{return out__9625;
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
sorted_map.cljs$lang$applyTo = (function (arglist__9628){
var keyvals = cljs.core.seq(arglist__9628);;
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
var in__9631 = cljs.core.seq.call(null,keyvals);
var out__9632 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__9631)
{{
var G__9633 = cljs.core.nnext.call(null,in__9631);
var G__9634 = cljs.core.assoc.call(null,out__9632,cljs.core.first.call(null,in__9631),cljs.core.second.call(null,in__9631));
in__9631 = G__9633;
out__9632 = G__9634;
continue;
}
} else
{return out__9632;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__9635){
var comparator = cljs.core.first(arglist__9635);
var keyvals = cljs.core.rest(arglist__9635);
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
{return cljs.core.reduce.call(null,(function (p1__9636_SHARP_,p2__9637_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____9639 = p1__9636_SHARP_;
if(cljs.core.truth_(or__3824__auto____9639))
{return or__3824__auto____9639;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__9637_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__9640){
var maps = cljs.core.seq(arglist__9640);;
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
{var merge_entry__9648 = (function (m,e){
var k__9646 = cljs.core.first.call(null,e);
var v__9647 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__9646))
{return cljs.core.assoc.call(null,m,k__9646,f.call(null,cljs.core._lookup.call(null,m,k__9646,null),v__9647));
} else
{return cljs.core.assoc.call(null,m,k__9646,v__9647);
}
});
var merge2__9650 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__9648,(function (){var or__3824__auto____9649 = m1;
if(cljs.core.truth_(or__3824__auto____9649))
{return or__3824__auto____9649;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__9650,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__9651){
var f = cljs.core.first(arglist__9651);
var maps = cljs.core.rest(arglist__9651);
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
var ret__9656 = cljs.core.ObjMap.EMPTY;
var keys__9657 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__9657)
{var key__9658 = cljs.core.first.call(null,keys__9657);
var entry__9659 = cljs.core._lookup.call(null,map,key__9658,"\uFDD0'user/not-found");
{
var G__9660 = ((cljs.core.not_EQ_.call(null,entry__9659,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__9656,key__9658,entry__9659):ret__9656);
var G__9661 = cljs.core.next.call(null,keys__9657);
ret__9656 = G__9660;
keys__9657 = G__9661;
continue;
}
} else
{return ret__9656;
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
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9665 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__9665.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9666 = this;
var h__2548__auto____9667 = this__9666.__hash;
if(!((h__2548__auto____9667 == null)))
{return h__2548__auto____9667;
} else
{var h__2548__auto____9668 = cljs.core.hash_iset.call(null,coll);
this__9666.__hash = h__2548__auto____9668;
return h__2548__auto____9668;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9669 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9670 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9670.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__9691 = null;
var G__9691__2 = (function (this_sym9671,k){
var this__9673 = this;
var this_sym9671__9674 = this;
var coll__9675 = this_sym9671__9674;
return coll__9675.cljs$core$ILookup$_lookup$arity$2(coll__9675,k);
});
var G__9691__3 = (function (this_sym9672,k,not_found){
var this__9673 = this;
var this_sym9672__9676 = this;
var coll__9677 = this_sym9672__9676;
return coll__9677.cljs$core$ILookup$_lookup$arity$3(coll__9677,k,not_found);
});
G__9691 = function(this_sym9672,k,not_found){
switch(arguments.length){
case 2:
return G__9691__2.call(this,this_sym9672,k);
case 3:
return G__9691__3.call(this,this_sym9672,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9691;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym9663,args9664){
var this__9678 = this;
return this_sym9663.call.apply(this_sym9663,[this_sym9663].concat(args9664.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9679 = this;
return (new cljs.core.PersistentHashSet(this__9679.meta,cljs.core.assoc.call(null,this__9679.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__9680 = this;
var this__9681 = this;
return cljs.core.pr_str.call(null,this__9681);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9682 = this;
return cljs.core.keys.call(null,this__9682.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9683 = this;
return (new cljs.core.PersistentHashSet(this__9683.meta,cljs.core.dissoc.call(null,this__9683.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9684 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9685 = this;
var and__3822__auto____9686 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9686)
{var and__3822__auto____9687 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9687)
{return cljs.core.every_QMARK_.call(null,(function (p1__9662_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9662_SHARP_);
}),other);
} else
{return and__3822__auto____9687;
}
} else
{return and__3822__auto____9686;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9688 = this;
return (new cljs.core.PersistentHashSet(meta,this__9688.hash_map,this__9688.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9689 = this;
return this__9689.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9690 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__9690.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__9692 = cljs.core.count.call(null,items);
var i__9693 = 0;
var out__9694 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__9693 < len__9692))
{{
var G__9695 = (i__9693 + 1);
var G__9696 = cljs.core.conj_BANG_.call(null,out__9694,(items[i__9693]));
i__9693 = G__9695;
out__9694 = G__9696;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9694);
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
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__9714 = null;
var G__9714__2 = (function (this_sym9700,k){
var this__9702 = this;
var this_sym9700__9703 = this;
var tcoll__9704 = this_sym9700__9703;
if((cljs.core._lookup.call(null,this__9702.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__9714__3 = (function (this_sym9701,k,not_found){
var this__9702 = this;
var this_sym9701__9705 = this;
var tcoll__9706 = this_sym9701__9705;
if((cljs.core._lookup.call(null,this__9702.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__9714 = function(this_sym9701,k,not_found){
switch(arguments.length){
case 2:
return G__9714__2.call(this,this_sym9701,k);
case 3:
return G__9714__3.call(this,this_sym9701,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9714;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym9698,args9699){
var this__9707 = this;
return this_sym9698.call.apply(this_sym9698,[this_sym9698].concat(args9699.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__9708 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__9709 = this;
if((cljs.core._lookup.call(null,this__9709.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9710 = this;
return cljs.core.count.call(null,this__9710.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__9711 = this;
this__9711.transient_map = cljs.core.dissoc_BANG_.call(null,this__9711.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9712 = this;
this__9712.transient_map = cljs.core.assoc_BANG_.call(null,this__9712.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9713 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__9713.transient_map),null));
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
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9717 = this;
var h__2548__auto____9718 = this__9717.__hash;
if(!((h__2548__auto____9718 == null)))
{return h__2548__auto____9718;
} else
{var h__2548__auto____9719 = cljs.core.hash_iset.call(null,coll);
this__9717.__hash = h__2548__auto____9719;
return h__2548__auto____9719;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9720 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9721 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9721.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__9747 = null;
var G__9747__2 = (function (this_sym9722,k){
var this__9724 = this;
var this_sym9722__9725 = this;
var coll__9726 = this_sym9722__9725;
return coll__9726.cljs$core$ILookup$_lookup$arity$2(coll__9726,k);
});
var G__9747__3 = (function (this_sym9723,k,not_found){
var this__9724 = this;
var this_sym9723__9727 = this;
var coll__9728 = this_sym9723__9727;
return coll__9728.cljs$core$ILookup$_lookup$arity$3(coll__9728,k,not_found);
});
G__9747 = function(this_sym9723,k,not_found){
switch(arguments.length){
case 2:
return G__9747__2.call(this,this_sym9723,k);
case 3:
return G__9747__3.call(this,this_sym9723,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9747;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym9715,args9716){
var this__9729 = this;
return this_sym9715.call.apply(this_sym9715,[this_sym9715].concat(args9716.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9730 = this;
return (new cljs.core.PersistentTreeSet(this__9730.meta,cljs.core.assoc.call(null,this__9730.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9731 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__9731.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__9732 = this;
var this__9733 = this;
return cljs.core.pr_str.call(null,this__9733);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9734 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__9734.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9735 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__9735.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9736 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9737 = this;
return cljs.core._comparator.call(null,this__9737.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9738 = this;
return cljs.core.keys.call(null,this__9738.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9739 = this;
return (new cljs.core.PersistentTreeSet(this__9739.meta,cljs.core.dissoc.call(null,this__9739.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9740 = this;
return cljs.core.count.call(null,this__9740.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9741 = this;
var and__3822__auto____9742 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9742)
{var and__3822__auto____9743 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9743)
{return cljs.core.every_QMARK_.call(null,(function (p1__9697_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9697_SHARP_);
}),other);
} else
{return and__3822__auto____9743;
}
} else
{return and__3822__auto____9742;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9744 = this;
return (new cljs.core.PersistentTreeSet(meta,this__9744.tree_map,this__9744.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9745 = this;
return this__9745.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9746 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__9746.meta);
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
var G__9752__delegate = function (keys){
var in__9750 = cljs.core.seq.call(null,keys);
var out__9751 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__9750))
{{
var G__9753 = cljs.core.next.call(null,in__9750);
var G__9754 = cljs.core.conj_BANG_.call(null,out__9751,cljs.core.first.call(null,in__9750));
in__9750 = G__9753;
out__9751 = G__9754;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9751);
}
break;
}
};
var G__9752 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9752__delegate.call(this, keys);
};
G__9752.cljs$lang$maxFixedArity = 0;
G__9752.cljs$lang$applyTo = (function (arglist__9755){
var keys = cljs.core.seq(arglist__9755);;
return G__9752__delegate(keys);
});
G__9752.cljs$lang$arity$variadic = G__9752__delegate;
return G__9752;
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
sorted_set.cljs$lang$applyTo = (function (arglist__9756){
var keys = cljs.core.seq(arglist__9756);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__9758){
var comparator = cljs.core.first(arglist__9758);
var keys = cljs.core.rest(arglist__9758);
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
{var n__9764 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____9765 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____9765))
{var e__9766 = temp__3971__auto____9765;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__9766));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__9764,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__9757_SHARP_){
var temp__3971__auto____9767 = cljs.core.find.call(null,smap,p1__9757_SHARP_);
if(cljs.core.truth_(temp__3971__auto____9767))
{var e__9768 = temp__3971__auto____9767;
return cljs.core.second.call(null,e__9768);
} else
{return p1__9757_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__9798 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__9791,seen){
while(true){
var vec__9792__9793 = p__9791;
var f__9794 = cljs.core.nth.call(null,vec__9792__9793,0,null);
var xs__9795 = vec__9792__9793;
var temp__3974__auto____9796 = cljs.core.seq.call(null,xs__9795);
if(temp__3974__auto____9796)
{var s__9797 = temp__3974__auto____9796;
if(cljs.core.contains_QMARK_.call(null,seen,f__9794))
{{
var G__9799 = cljs.core.rest.call(null,s__9797);
var G__9800 = seen;
p__9791 = G__9799;
seen = G__9800;
continue;
}
} else
{return cljs.core.cons.call(null,f__9794,step.call(null,cljs.core.rest.call(null,s__9797),cljs.core.conj.call(null,seen,f__9794)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__9798.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__9803 = cljs.core.PersistentVector.EMPTY;
var s__9804 = s;
while(true){
if(cljs.core.next.call(null,s__9804))
{{
var G__9805 = cljs.core.conj.call(null,ret__9803,cljs.core.first.call(null,s__9804));
var G__9806 = cljs.core.next.call(null,s__9804);
ret__9803 = G__9805;
s__9804 = G__9806;
continue;
}
} else
{return cljs.core.seq.call(null,ret__9803);
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
{if((function (){var or__3824__auto____9809 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9809)
{return or__3824__auto____9809;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9810 = x.lastIndexOf("/");
if((i__9810 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__9810 + 1));
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
if((function (){var or__3824__auto____9813 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9813)
{return or__3824__auto____9813;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9814 = x.lastIndexOf("/");
if((i__9814 > -1))
{return cljs.core.subs.call(null,x,2,i__9814);
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
var map__9821 = cljs.core.ObjMap.EMPTY;
var ks__9822 = cljs.core.seq.call(null,keys);
var vs__9823 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____9824 = ks__9822;
if(and__3822__auto____9824)
{return vs__9823;
} else
{return and__3822__auto____9824;
}
})())
{{
var G__9825 = cljs.core.assoc.call(null,map__9821,cljs.core.first.call(null,ks__9822),cljs.core.first.call(null,vs__9823));
var G__9826 = cljs.core.next.call(null,ks__9822);
var G__9827 = cljs.core.next.call(null,vs__9823);
map__9821 = G__9825;
ks__9822 = G__9826;
vs__9823 = G__9827;
continue;
}
} else
{return map__9821;
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
var G__9830__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9815_SHARP_,p2__9816_SHARP_){
return max_key.call(null,k,p1__9815_SHARP_,p2__9816_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__9830 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9830__delegate.call(this, k, x, y, more);
};
G__9830.cljs$lang$maxFixedArity = 3;
G__9830.cljs$lang$applyTo = (function (arglist__9831){
var k = cljs.core.first(arglist__9831);
var x = cljs.core.first(cljs.core.next(arglist__9831));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9831)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9831)));
return G__9830__delegate(k, x, y, more);
});
G__9830.cljs$lang$arity$variadic = G__9830__delegate;
return G__9830;
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
var G__9832__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9828_SHARP_,p2__9829_SHARP_){
return min_key.call(null,k,p1__9828_SHARP_,p2__9829_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__9832 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9832__delegate.call(this, k, x, y, more);
};
G__9832.cljs$lang$maxFixedArity = 3;
G__9832.cljs$lang$applyTo = (function (arglist__9833){
var k = cljs.core.first(arglist__9833);
var x = cljs.core.first(cljs.core.next(arglist__9833));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9833)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9833)));
return G__9832__delegate(k, x, y, more);
});
G__9832.cljs$lang$arity$variadic = G__9832__delegate;
return G__9832;
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
var temp__3974__auto____9836 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9836)
{var s__9837 = temp__3974__auto____9836;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__9837),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__9837)));
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
var temp__3974__auto____9840 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9840)
{var s__9841 = temp__3974__auto____9840;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__9841))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9841),take_while.call(null,pred,cljs.core.rest.call(null,s__9841)));
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
var comp__9843 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__9843.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__9855 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____9856 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____9856))
{var vec__9857__9858 = temp__3974__auto____9856;
var e__9859 = cljs.core.nth.call(null,vec__9857__9858,0,null);
var s__9860 = vec__9857__9858;
if(cljs.core.truth_(include__9855.call(null,e__9859)))
{return s__9860;
} else
{return cljs.core.next.call(null,s__9860);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9855,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9861 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____9861))
{var vec__9862__9863 = temp__3974__auto____9861;
var e__9864 = cljs.core.nth.call(null,vec__9862__9863,0,null);
var s__9865 = vec__9862__9863;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__9864))?s__9865:cljs.core.next.call(null,s__9865)));
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
var include__9877 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____9878 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____9878))
{var vec__9879__9880 = temp__3974__auto____9878;
var e__9881 = cljs.core.nth.call(null,vec__9879__9880,0,null);
var s__9882 = vec__9879__9880;
if(cljs.core.truth_(include__9877.call(null,e__9881)))
{return s__9882;
} else
{return cljs.core.next.call(null,s__9882);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9877,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9883 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____9883))
{var vec__9884__9885 = temp__3974__auto____9883;
var e__9886 = cljs.core.nth.call(null,vec__9884__9885,0,null);
var s__9887 = vec__9884__9885;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__9886))?s__9887:cljs.core.next.call(null,s__9887)));
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
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__9888 = this;
var h__2548__auto____9889 = this__9888.__hash;
if(!((h__2548__auto____9889 == null)))
{return h__2548__auto____9889;
} else
{var h__2548__auto____9890 = cljs.core.hash_coll.call(null,rng);
this__9888.__hash = h__2548__auto____9890;
return h__2548__auto____9890;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__9891 = this;
if((this__9891.step > 0))
{if(((this__9891.start + this__9891.step) < this__9891.end))
{return (new cljs.core.Range(this__9891.meta,(this__9891.start + this__9891.step),this__9891.end,this__9891.step,null));
} else
{return null;
}
} else
{if(((this__9891.start + this__9891.step) > this__9891.end))
{return (new cljs.core.Range(this__9891.meta,(this__9891.start + this__9891.step),this__9891.end,this__9891.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__9892 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__9893 = this;
var this__9894 = this;
return cljs.core.pr_str.call(null,this__9894);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__9895 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__9896 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__9897 = this;
if((this__9897.step > 0))
{if((this__9897.start < this__9897.end))
{return rng;
} else
{return null;
}
} else
{if((this__9897.start > this__9897.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__9898 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__9898.end - this__9898.start) / this__9898.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__9899 = this;
return this__9899.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__9900 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__9900.meta,(this__9900.start + this__9900.step),this__9900.end,this__9900.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__9901 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__9902 = this;
return (new cljs.core.Range(meta,this__9902.start,this__9902.end,this__9902.step,this__9902.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__9903 = this;
return this__9903.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__9904 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9904.start + (n * this__9904.step));
} else
{if((function (){var and__3822__auto____9905 = (this__9904.start > this__9904.end);
if(and__3822__auto____9905)
{return (this__9904.step === 0);
} else
{return and__3822__auto____9905;
}
})())
{return this__9904.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__9906 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9906.start + (n * this__9906.step));
} else
{if((function (){var and__3822__auto____9907 = (this__9906.start > this__9906.end);
if(and__3822__auto____9907)
{return (this__9906.step === 0);
} else
{return and__3822__auto____9907;
}
})())
{return this__9906.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__9908 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9908.meta);
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
var temp__3974__auto____9911 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9911)
{var s__9912 = temp__3974__auto____9911;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__9912),take_nth.call(null,n,cljs.core.drop.call(null,n,s__9912)));
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
var temp__3974__auto____9919 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9919)
{var s__9920 = temp__3974__auto____9919;
var fst__9921 = cljs.core.first.call(null,s__9920);
var fv__9922 = f.call(null,fst__9921);
var run__9923 = cljs.core.cons.call(null,fst__9921,cljs.core.take_while.call(null,(function (p1__9913_SHARP_){
return cljs.core._EQ_.call(null,fv__9922,f.call(null,p1__9913_SHARP_));
}),cljs.core.next.call(null,s__9920)));
return cljs.core.cons.call(null,run__9923,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__9923),s__9920))));
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
var temp__3971__auto____9938 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____9938)
{var s__9939 = temp__3971__auto____9938;
return reductions.call(null,f,cljs.core.first.call(null,s__9939),cljs.core.rest.call(null,s__9939));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9940 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9940)
{var s__9941 = temp__3974__auto____9940;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__9941)),cljs.core.rest.call(null,s__9941));
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
var G__9944 = null;
var G__9944__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__9944__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__9944__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__9944__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__9944__4 = (function() { 
var G__9945__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__9945 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9945__delegate.call(this, x, y, z, args);
};
G__9945.cljs$lang$maxFixedArity = 3;
G__9945.cljs$lang$applyTo = (function (arglist__9946){
var x = cljs.core.first(arglist__9946);
var y = cljs.core.first(cljs.core.next(arglist__9946));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9946)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9946)));
return G__9945__delegate(x, y, z, args);
});
G__9945.cljs$lang$arity$variadic = G__9945__delegate;
return G__9945;
})()
;
G__9944 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9944__0.call(this);
case 1:
return G__9944__1.call(this,x);
case 2:
return G__9944__2.call(this,x,y);
case 3:
return G__9944__3.call(this,x,y,z);
default:
return G__9944__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9944.cljs$lang$maxFixedArity = 3;
G__9944.cljs$lang$applyTo = G__9944__4.cljs$lang$applyTo;
return G__9944;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__9947 = null;
var G__9947__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__9947__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__9947__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__9947__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__9947__4 = (function() { 
var G__9948__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9948 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9948__delegate.call(this, x, y, z, args);
};
G__9948.cljs$lang$maxFixedArity = 3;
G__9948.cljs$lang$applyTo = (function (arglist__9949){
var x = cljs.core.first(arglist__9949);
var y = cljs.core.first(cljs.core.next(arglist__9949));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9949)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9949)));
return G__9948__delegate(x, y, z, args);
});
G__9948.cljs$lang$arity$variadic = G__9948__delegate;
return G__9948;
})()
;
G__9947 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9947__0.call(this);
case 1:
return G__9947__1.call(this,x);
case 2:
return G__9947__2.call(this,x,y);
case 3:
return G__9947__3.call(this,x,y,z);
default:
return G__9947__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9947.cljs$lang$maxFixedArity = 3;
G__9947.cljs$lang$applyTo = G__9947__4.cljs$lang$applyTo;
return G__9947;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__9950 = null;
var G__9950__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__9950__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__9950__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__9950__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__9950__4 = (function() { 
var G__9951__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__9951 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9951__delegate.call(this, x, y, z, args);
};
G__9951.cljs$lang$maxFixedArity = 3;
G__9951.cljs$lang$applyTo = (function (arglist__9952){
var x = cljs.core.first(arglist__9952);
var y = cljs.core.first(cljs.core.next(arglist__9952));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9952)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9952)));
return G__9951__delegate(x, y, z, args);
});
G__9951.cljs$lang$arity$variadic = G__9951__delegate;
return G__9951;
})()
;
G__9950 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9950__0.call(this);
case 1:
return G__9950__1.call(this,x);
case 2:
return G__9950__2.call(this,x,y);
case 3:
return G__9950__3.call(this,x,y,z);
default:
return G__9950__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9950.cljs$lang$maxFixedArity = 3;
G__9950.cljs$lang$applyTo = G__9950__4.cljs$lang$applyTo;
return G__9950;
})()
});
var juxt__4 = (function() { 
var G__9953__delegate = function (f,g,h,fs){
var fs__9943 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__9954 = null;
var G__9954__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__9924_SHARP_,p2__9925_SHARP_){
return cljs.core.conj.call(null,p1__9924_SHARP_,p2__9925_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__9943);
});
var G__9954__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__9926_SHARP_,p2__9927_SHARP_){
return cljs.core.conj.call(null,p1__9926_SHARP_,p2__9927_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__9943);
});
var G__9954__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__9928_SHARP_,p2__9929_SHARP_){
return cljs.core.conj.call(null,p1__9928_SHARP_,p2__9929_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__9943);
});
var G__9954__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__9930_SHARP_,p2__9931_SHARP_){
return cljs.core.conj.call(null,p1__9930_SHARP_,p2__9931_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__9943);
});
var G__9954__4 = (function() { 
var G__9955__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__9932_SHARP_,p2__9933_SHARP_){
return cljs.core.conj.call(null,p1__9932_SHARP_,cljs.core.apply.call(null,p2__9933_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__9943);
};
var G__9955 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9955__delegate.call(this, x, y, z, args);
};
G__9955.cljs$lang$maxFixedArity = 3;
G__9955.cljs$lang$applyTo = (function (arglist__9956){
var x = cljs.core.first(arglist__9956);
var y = cljs.core.first(cljs.core.next(arglist__9956));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9956)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9956)));
return G__9955__delegate(x, y, z, args);
});
G__9955.cljs$lang$arity$variadic = G__9955__delegate;
return G__9955;
})()
;
G__9954 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9954__0.call(this);
case 1:
return G__9954__1.call(this,x);
case 2:
return G__9954__2.call(this,x,y);
case 3:
return G__9954__3.call(this,x,y,z);
default:
return G__9954__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9954.cljs$lang$maxFixedArity = 3;
G__9954.cljs$lang$applyTo = G__9954__4.cljs$lang$applyTo;
return G__9954;
})()
};
var G__9953 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9953__delegate.call(this, f, g, h, fs);
};
G__9953.cljs$lang$maxFixedArity = 3;
G__9953.cljs$lang$applyTo = (function (arglist__9957){
var f = cljs.core.first(arglist__9957);
var g = cljs.core.first(cljs.core.next(arglist__9957));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9957)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9957)));
return G__9953__delegate(f, g, h, fs);
});
G__9953.cljs$lang$arity$variadic = G__9953__delegate;
return G__9953;
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
var G__9960 = cljs.core.next.call(null,coll);
coll = G__9960;
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
if(cljs.core.truth_((function (){var and__3822__auto____9959 = cljs.core.seq.call(null,coll);
if(and__3822__auto____9959)
{return (n > 0);
} else
{return and__3822__auto____9959;
}
})()))
{{
var G__9961 = (n - 1);
var G__9962 = cljs.core.next.call(null,coll);
n = G__9961;
coll = G__9962;
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
var matches__9964 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__9964),s))
{if((cljs.core.count.call(null,matches__9964) === 1))
{return cljs.core.first.call(null,matches__9964);
} else
{return cljs.core.vec.call(null,matches__9964);
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
var matches__9966 = re.exec(s);
if((matches__9966 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__9966) === 1))
{return cljs.core.first.call(null,matches__9966);
} else
{return cljs.core.vec.call(null,matches__9966);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__9971 = cljs.core.re_find.call(null,re,s);
var match_idx__9972 = s.search(re);
var match_str__9973 = ((cljs.core.coll_QMARK_.call(null,match_data__9971))?cljs.core.first.call(null,match_data__9971):match_data__9971);
var post_match__9974 = cljs.core.subs.call(null,s,(match_idx__9972 + cljs.core.count.call(null,match_str__9973)));
if(cljs.core.truth_(match_data__9971))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__9971,re_seq.call(null,re,post_match__9974));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__9981__9982 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___9983 = cljs.core.nth.call(null,vec__9981__9982,0,null);
var flags__9984 = cljs.core.nth.call(null,vec__9981__9982,1,null);
var pattern__9985 = cljs.core.nth.call(null,vec__9981__9982,2,null);
return (new RegExp(pattern__9985,flags__9984));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__9975_SHARP_){
return print_one.call(null,p1__9975_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____9995 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____9995))
{var and__3822__auto____9999 = (function (){var G__9996__9997 = obj;
if(G__9996__9997)
{if((function (){var or__3824__auto____9998 = (G__9996__9997.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____9998)
{return or__3824__auto____9998;
} else
{return G__9996__9997.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__9996__9997.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9996__9997);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9996__9997);
}
})();
if(cljs.core.truth_(and__3822__auto____9999))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____9999;
}
} else
{return and__3822__auto____9995;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____10000 = !((obj == null));
if(and__3822__auto____10000)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____10000;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__10001__10002 = obj;
if(G__10001__10002)
{if((function (){var or__3824__auto____10003 = (G__10001__10002.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____10003)
{return or__3824__auto____10003;
} else
{return G__10001__10002.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__10001__10002.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__10001__10002);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__10001__10002);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__10023 = (new goog.string.StringBuffer());
var G__10024__10025 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__10024__10025)
{var string__10026 = cljs.core.first.call(null,G__10024__10025);
var G__10024__10027 = G__10024__10025;
while(true){
sb__10023.append(string__10026);
var temp__3974__auto____10028 = cljs.core.next.call(null,G__10024__10027);
if(temp__3974__auto____10028)
{var G__10024__10029 = temp__3974__auto____10028;
{
var G__10042 = cljs.core.first.call(null,G__10024__10029);
var G__10043 = G__10024__10029;
string__10026 = G__10042;
G__10024__10027 = G__10043;
continue;
}
} else
{}
break;
}
} else
{}
var G__10030__10031 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__10030__10031)
{var obj__10032 = cljs.core.first.call(null,G__10030__10031);
var G__10030__10033 = G__10030__10031;
while(true){
sb__10023.append(" ");
var G__10034__10035 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__10032,opts));
if(G__10034__10035)
{var string__10036 = cljs.core.first.call(null,G__10034__10035);
var G__10034__10037 = G__10034__10035;
while(true){
sb__10023.append(string__10036);
var temp__3974__auto____10038 = cljs.core.next.call(null,G__10034__10037);
if(temp__3974__auto____10038)
{var G__10034__10039 = temp__3974__auto____10038;
{
var G__10044 = cljs.core.first.call(null,G__10034__10039);
var G__10045 = G__10034__10039;
string__10036 = G__10044;
G__10034__10037 = G__10045;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____10040 = cljs.core.next.call(null,G__10030__10033);
if(temp__3974__auto____10040)
{var G__10030__10041 = temp__3974__auto____10040;
{
var G__10046 = cljs.core.first.call(null,G__10030__10041);
var G__10047 = G__10030__10041;
obj__10032 = G__10046;
G__10030__10033 = G__10047;
continue;
}
} else
{}
break;
}
} else
{}
return sb__10023;
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
var sb__10049 = cljs.core.pr_sb.call(null,objs,opts);
sb__10049.append("\n");
return [cljs.core.str(sb__10049)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__10068__10069 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__10068__10069)
{var string__10070 = cljs.core.first.call(null,G__10068__10069);
var G__10068__10071 = G__10068__10069;
while(true){
cljs.core.string_print.call(null,string__10070);
var temp__3974__auto____10072 = cljs.core.next.call(null,G__10068__10071);
if(temp__3974__auto____10072)
{var G__10068__10073 = temp__3974__auto____10072;
{
var G__10086 = cljs.core.first.call(null,G__10068__10073);
var G__10087 = G__10068__10073;
string__10070 = G__10086;
G__10068__10071 = G__10087;
continue;
}
} else
{}
break;
}
} else
{}
var G__10074__10075 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__10074__10075)
{var obj__10076 = cljs.core.first.call(null,G__10074__10075);
var G__10074__10077 = G__10074__10075;
while(true){
cljs.core.string_print.call(null," ");
var G__10078__10079 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__10076,opts));
if(G__10078__10079)
{var string__10080 = cljs.core.first.call(null,G__10078__10079);
var G__10078__10081 = G__10078__10079;
while(true){
cljs.core.string_print.call(null,string__10080);
var temp__3974__auto____10082 = cljs.core.next.call(null,G__10078__10081);
if(temp__3974__auto____10082)
{var G__10078__10083 = temp__3974__auto____10082;
{
var G__10088 = cljs.core.first.call(null,G__10078__10083);
var G__10089 = G__10078__10083;
string__10080 = G__10088;
G__10078__10081 = G__10089;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____10084 = cljs.core.next.call(null,G__10074__10077);
if(temp__3974__auto____10084)
{var G__10074__10085 = temp__3974__auto____10084;
{
var G__10090 = cljs.core.first.call(null,G__10074__10085);
var G__10091 = G__10074__10085;
obj__10076 = G__10090;
G__10074__10077 = G__10091;
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
pr_str.cljs$lang$applyTo = (function (arglist__10092){
var objs = cljs.core.seq(arglist__10092);;
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
prn_str.cljs$lang$applyTo = (function (arglist__10093){
var objs = cljs.core.seq(arglist__10093);;
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
pr.cljs$lang$applyTo = (function (arglist__10094){
var objs = cljs.core.seq(arglist__10094);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__10095){
var objs = cljs.core.seq(arglist__10095);;
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
print_str.cljs$lang$applyTo = (function (arglist__10096){
var objs = cljs.core.seq(arglist__10096);;
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
println.cljs$lang$applyTo = (function (arglist__10097){
var objs = cljs.core.seq(arglist__10097);;
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
println_str.cljs$lang$applyTo = (function (arglist__10098){
var objs = cljs.core.seq(arglist__10098);;
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
prn.cljs$lang$applyTo = (function (arglist__10099){
var objs = cljs.core.seq(arglist__10099);;
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
printf.cljs$lang$applyTo = (function (arglist__10100){
var fmt = cljs.core.first(arglist__10100);
var args = cljs.core.rest(arglist__10100);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10101 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10101,"{",", ","}",opts,coll);
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
var pr_pair__10102 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10102,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10103 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10103,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____10104 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____10104))
{var nspc__10105 = temp__3974__auto____10104;
return [cljs.core.str(nspc__10105),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____10106 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____10106))
{var nspc__10107 = temp__3974__auto____10106;
return [cljs.core.str(nspc__10107),cljs.core.str("/")].join('');
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
var pr_pair__10108 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10108,"{",", ","}",opts,coll);
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
var normalize__10110 = (function (n,len){
var ns__10109 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__10109) < len))
{{
var G__10112 = [cljs.core.str("0"),cljs.core.str(ns__10109)].join('');
ns__10109 = G__10112;
continue;
}
} else
{return ns__10109;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__10110.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__10110.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__10110.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__10110.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__10110.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__10110.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__10111 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10111,"{",", ","}",opts,coll);
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
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10113 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__10114 = this;
var G__10115__10116 = cljs.core.seq.call(null,this__10114.watches);
if(G__10115__10116)
{var G__10118__10120 = cljs.core.first.call(null,G__10115__10116);
var vec__10119__10121 = G__10118__10120;
var key__10122 = cljs.core.nth.call(null,vec__10119__10121,0,null);
var f__10123 = cljs.core.nth.call(null,vec__10119__10121,1,null);
var G__10115__10124 = G__10115__10116;
var G__10118__10125 = G__10118__10120;
var G__10115__10126 = G__10115__10124;
while(true){
var vec__10127__10128 = G__10118__10125;
var key__10129 = cljs.core.nth.call(null,vec__10127__10128,0,null);
var f__10130 = cljs.core.nth.call(null,vec__10127__10128,1,null);
var G__10115__10131 = G__10115__10126;
f__10130.call(null,key__10129,this$,oldval,newval);
var temp__3974__auto____10132 = cljs.core.next.call(null,G__10115__10131);
if(temp__3974__auto____10132)
{var G__10115__10133 = temp__3974__auto____10132;
{
var G__10140 = cljs.core.first.call(null,G__10115__10133);
var G__10141 = G__10115__10133;
G__10118__10125 = G__10140;
G__10115__10126 = G__10141;
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
var this__10134 = this;
return this$.watches = cljs.core.assoc.call(null,this__10134.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__10135 = this;
return this$.watches = cljs.core.dissoc.call(null,this__10135.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__10136 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__10136.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__10137 = this;
return this__10137.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10138 = this;
return this__10138.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__10139 = this;
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
var G__10153__delegate = function (x,p__10142){
var map__10148__10149 = p__10142;
var map__10148__10150 = ((cljs.core.seq_QMARK_.call(null,map__10148__10149))?cljs.core.apply.call(null,cljs.core.hash_map,map__10148__10149):map__10148__10149);
var validator__10151 = cljs.core._lookup.call(null,map__10148__10150,"\uFDD0'validator",null);
var meta__10152 = cljs.core._lookup.call(null,map__10148__10150,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__10152,validator__10151,null));
};
var G__10153 = function (x,var_args){
var p__10142 = null;
if (goog.isDef(var_args)) {
  p__10142 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10153__delegate.call(this, x, p__10142);
};
G__10153.cljs$lang$maxFixedArity = 1;
G__10153.cljs$lang$applyTo = (function (arglist__10154){
var x = cljs.core.first(arglist__10154);
var p__10142 = cljs.core.rest(arglist__10154);
return G__10153__delegate(x, p__10142);
});
G__10153.cljs$lang$arity$variadic = G__10153__delegate;
return G__10153;
})()
;
atom = function(x,var_args){
var p__10142 = var_args;
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
var temp__3974__auto____10158 = a.validator;
if(cljs.core.truth_(temp__3974__auto____10158))
{var validate__10159 = temp__3974__auto____10158;
if(cljs.core.truth_(validate__10159.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440))))].join('')));
}
} else
{}
var old_value__10160 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__10160,new_value);
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
var G__10161__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__10161 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10161__delegate.call(this, a, f, x, y, z, more);
};
G__10161.cljs$lang$maxFixedArity = 5;
G__10161.cljs$lang$applyTo = (function (arglist__10162){
var a = cljs.core.first(arglist__10162);
var f = cljs.core.first(cljs.core.next(arglist__10162));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10162)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10162))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10162)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10162)))));
return G__10161__delegate(a, f, x, y, z, more);
});
G__10161.cljs$lang$arity$variadic = G__10161__delegate;
return G__10161;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__10163){
var iref = cljs.core.first(arglist__10163);
var f = cljs.core.first(cljs.core.next(arglist__10163));
var args = cljs.core.rest(cljs.core.next(arglist__10163));
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
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__10164 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__10164.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10165 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__10165.state,(function (p__10166){
var map__10167__10168 = p__10166;
var map__10167__10169 = ((cljs.core.seq_QMARK_.call(null,map__10167__10168))?cljs.core.apply.call(null,cljs.core.hash_map,map__10167__10168):map__10167__10168);
var curr_state__10170 = map__10167__10169;
var done__10171 = cljs.core._lookup.call(null,map__10167__10169,"\uFDD0'done",null);
if(cljs.core.truth_(done__10171))
{return curr_state__10170;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__10165.f.call(null)});
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
var map__10192__10193 = options;
var map__10192__10194 = ((cljs.core.seq_QMARK_.call(null,map__10192__10193))?cljs.core.apply.call(null,cljs.core.hash_map,map__10192__10193):map__10192__10193);
var keywordize_keys__10195 = cljs.core._lookup.call(null,map__10192__10194,"\uFDD0'keywordize-keys",null);
var keyfn__10196 = (cljs.core.truth_(keywordize_keys__10195)?cljs.core.keyword:cljs.core.str);
var f__10211 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2818__auto____10210 = (function iter__10204(s__10205){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10205__10208 = s__10205;
while(true){
if(cljs.core.seq.call(null,s__10205__10208))
{var k__10209 = cljs.core.first.call(null,s__10205__10208);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__10196.call(null,k__10209),thisfn.call(null,(x[k__10209]))], true),iter__10204.call(null,cljs.core.rest.call(null,s__10205__10208)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2818__auto____10210.call(null,cljs.core.js_keys.call(null,x));
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
return f__10211.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__10212){
var x = cljs.core.first(arglist__10212);
var options = cljs.core.rest(arglist__10212);
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
var mem__10217 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__10221__delegate = function (args){
var temp__3971__auto____10218 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__10217),args,null);
if(cljs.core.truth_(temp__3971__auto____10218))
{var v__10219 = temp__3971__auto____10218;
return v__10219;
} else
{var ret__10220 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__10217,cljs.core.assoc,args,ret__10220);
return ret__10220;
}
};
var G__10221 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10221__delegate.call(this, args);
};
G__10221.cljs$lang$maxFixedArity = 0;
G__10221.cljs$lang$applyTo = (function (arglist__10222){
var args = cljs.core.seq(arglist__10222);;
return G__10221__delegate(args);
});
G__10221.cljs$lang$arity$variadic = G__10221__delegate;
return G__10221;
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
var ret__10224 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__10224))
{{
var G__10225 = ret__10224;
f = G__10225;
continue;
}
} else
{return ret__10224;
}
break;
}
});
var trampoline__2 = (function() { 
var G__10226__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__10226 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10226__delegate.call(this, f, args);
};
G__10226.cljs$lang$maxFixedArity = 1;
G__10226.cljs$lang$applyTo = (function (arglist__10227){
var f = cljs.core.first(arglist__10227);
var args = cljs.core.rest(arglist__10227);
return G__10226__delegate(f, args);
});
G__10226.cljs$lang$arity$variadic = G__10226__delegate;
return G__10226;
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
var k__10229 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__10229,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__10229,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____10238 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____10238)
{return or__3824__auto____10238;
} else
{var or__3824__auto____10239 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____10239)
{return or__3824__auto____10239;
} else
{var and__3822__auto____10240 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____10240)
{var and__3822__auto____10241 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____10241)
{var and__3822__auto____10242 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____10242)
{var ret__10243 = true;
var i__10244 = 0;
while(true){
if((function (){var or__3824__auto____10245 = cljs.core.not.call(null,ret__10243);
if(or__3824__auto____10245)
{return or__3824__auto____10245;
} else
{return (i__10244 === cljs.core.count.call(null,parent));
}
})())
{return ret__10243;
} else
{{
var G__10246 = isa_QMARK_.call(null,h,child.call(null,i__10244),parent.call(null,i__10244));
var G__10247 = (i__10244 + 1);
ret__10243 = G__10246;
i__10244 = G__10247;
continue;
}
}
break;
}
} else
{return and__3822__auto____10242;
}
} else
{return and__3822__auto____10241;
}
} else
{return and__3822__auto____10240;
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
var tp__10256 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__10257 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__10258 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__10259 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____10260 = ((cljs.core.contains_QMARK_.call(null,tp__10256.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__10258.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__10258.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__10256,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__10259.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__10257,parent,ta__10258),"\uFDD0'descendants":tf__10259.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__10258,tag,td__10257)});
})());
if(cljs.core.truth_(or__3824__auto____10260))
{return or__3824__auto____10260;
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
var parentMap__10265 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__10266 = (cljs.core.truth_(parentMap__10265.call(null,tag))?cljs.core.disj.call(null,parentMap__10265.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__10267 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__10266))?cljs.core.assoc.call(null,parentMap__10265,tag,childsParents__10266):cljs.core.dissoc.call(null,parentMap__10265,tag));
var deriv_seq__10268 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__10248_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__10248_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__10248_SHARP_),cljs.core.second.call(null,p1__10248_SHARP_)));
}),cljs.core.seq.call(null,newParents__10267)));
if(cljs.core.contains_QMARK_.call(null,parentMap__10265.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__10249_SHARP_,p2__10250_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__10249_SHARP_,p2__10250_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__10268));
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
var xprefs__10276 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____10278 = (cljs.core.truth_((function (){var and__3822__auto____10277 = xprefs__10276;
if(cljs.core.truth_(and__3822__auto____10277))
{return xprefs__10276.call(null,y);
} else
{return and__3822__auto____10277;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____10278))
{return or__3824__auto____10278;
} else
{var or__3824__auto____10280 = (function (){var ps__10279 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__10279) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__10279),prefer_table)))
{} else
{}
{
var G__10283 = cljs.core.rest.call(null,ps__10279);
ps__10279 = G__10283;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10280))
{return or__3824__auto____10280;
} else
{var or__3824__auto____10282 = (function (){var ps__10281 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__10281) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__10281),y,prefer_table)))
{} else
{}
{
var G__10284 = cljs.core.rest.call(null,ps__10281);
ps__10281 = G__10284;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10282))
{return or__3824__auto____10282;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____10286 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____10286))
{return or__3824__auto____10286;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__10304 = cljs.core.reduce.call(null,(function (be,p__10296){
var vec__10297__10298 = p__10296;
var k__10299 = cljs.core.nth.call(null,vec__10297__10298,0,null);
var ___10300 = cljs.core.nth.call(null,vec__10297__10298,1,null);
var e__10301 = vec__10297__10298;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__10299))
{var be2__10303 = (cljs.core.truth_((function (){var or__3824__auto____10302 = (be == null);
if(or__3824__auto____10302)
{return or__3824__auto____10302;
} else
{return cljs.core.dominates.call(null,k__10299,cljs.core.first.call(null,be),prefer_table);
}
})())?e__10301:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__10303),k__10299,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__10299),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__10303)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__10303;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__10304))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__10304));
return cljs.core.second.call(null,best_entry__10304);
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
if((function (){var and__3822__auto____10309 = mf;
if(and__3822__auto____10309)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____10309;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2719__auto____10310 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10311 = (cljs.core._reset[goog.typeOf(x__2719__auto____10310)]);
if(or__3824__auto____10311)
{return or__3824__auto____10311;
} else
{var or__3824__auto____10312 = (cljs.core._reset["_"]);
if(or__3824__auto____10312)
{return or__3824__auto____10312;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____10317 = mf;
if(and__3822__auto____10317)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____10317;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2719__auto____10318 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10319 = (cljs.core._add_method[goog.typeOf(x__2719__auto____10318)]);
if(or__3824__auto____10319)
{return or__3824__auto____10319;
} else
{var or__3824__auto____10320 = (cljs.core._add_method["_"]);
if(or__3824__auto____10320)
{return or__3824__auto____10320;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____10325 = mf;
if(and__3822__auto____10325)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____10325;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2719__auto____10326 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10327 = (cljs.core._remove_method[goog.typeOf(x__2719__auto____10326)]);
if(or__3824__auto____10327)
{return or__3824__auto____10327;
} else
{var or__3824__auto____10328 = (cljs.core._remove_method["_"]);
if(or__3824__auto____10328)
{return or__3824__auto____10328;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____10333 = mf;
if(and__3822__auto____10333)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____10333;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2719__auto____10334 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10335 = (cljs.core._prefer_method[goog.typeOf(x__2719__auto____10334)]);
if(or__3824__auto____10335)
{return or__3824__auto____10335;
} else
{var or__3824__auto____10336 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____10336)
{return or__3824__auto____10336;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____10341 = mf;
if(and__3822__auto____10341)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____10341;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2719__auto____10342 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10343 = (cljs.core._get_method[goog.typeOf(x__2719__auto____10342)]);
if(or__3824__auto____10343)
{return or__3824__auto____10343;
} else
{var or__3824__auto____10344 = (cljs.core._get_method["_"]);
if(or__3824__auto____10344)
{return or__3824__auto____10344;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____10349 = mf;
if(and__3822__auto____10349)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____10349;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2719__auto____10350 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10351 = (cljs.core._methods[goog.typeOf(x__2719__auto____10350)]);
if(or__3824__auto____10351)
{return or__3824__auto____10351;
} else
{var or__3824__auto____10352 = (cljs.core._methods["_"]);
if(or__3824__auto____10352)
{return or__3824__auto____10352;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____10357 = mf;
if(and__3822__auto____10357)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____10357;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2719__auto____10358 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10359 = (cljs.core._prefers[goog.typeOf(x__2719__auto____10358)]);
if(or__3824__auto____10359)
{return or__3824__auto____10359;
} else
{var or__3824__auto____10360 = (cljs.core._prefers["_"]);
if(or__3824__auto____10360)
{return or__3824__auto____10360;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____10365 = mf;
if(and__3822__auto____10365)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____10365;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2719__auto____10366 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10367 = (cljs.core._dispatch[goog.typeOf(x__2719__auto____10366)]);
if(or__3824__auto____10367)
{return or__3824__auto____10367;
} else
{var or__3824__auto____10368 = (cljs.core._dispatch["_"]);
if(or__3824__auto____10368)
{return or__3824__auto____10368;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__10371 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__10372 = cljs.core._get_method.call(null,mf,dispatch_val__10371);
if(cljs.core.truth_(target_fn__10372))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__10371)].join('')));
}
return cljs.core.apply.call(null,target_fn__10372,args);
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
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10373 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__10374 = this;
cljs.core.swap_BANG_.call(null,this__10374.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10374.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10374.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10374.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__10375 = this;
cljs.core.swap_BANG_.call(null,this__10375.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__10375.method_cache,this__10375.method_table,this__10375.cached_hierarchy,this__10375.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__10376 = this;
cljs.core.swap_BANG_.call(null,this__10376.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__10376.method_cache,this__10376.method_table,this__10376.cached_hierarchy,this__10376.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__10377 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__10377.cached_hierarchy),cljs.core.deref.call(null,this__10377.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__10377.method_cache,this__10377.method_table,this__10377.cached_hierarchy,this__10377.hierarchy);
}
var temp__3971__auto____10378 = cljs.core.deref.call(null,this__10377.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____10378))
{var target_fn__10379 = temp__3971__auto____10378;
return target_fn__10379;
} else
{var temp__3971__auto____10380 = cljs.core.find_and_cache_best_method.call(null,this__10377.name,dispatch_val,this__10377.hierarchy,this__10377.method_table,this__10377.prefer_table,this__10377.method_cache,this__10377.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____10380))
{var target_fn__10381 = temp__3971__auto____10380;
return target_fn__10381;
} else
{return cljs.core.deref.call(null,this__10377.method_table).call(null,this__10377.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__10382 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__10382.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__10382.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__10382.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__10382.method_cache,this__10382.method_table,this__10382.cached_hierarchy,this__10382.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__10383 = this;
return cljs.core.deref.call(null,this__10383.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__10384 = this;
return cljs.core.deref.call(null,this__10384.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__10385 = this;
return cljs.core.do_dispatch.call(null,mf,this__10385.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__10387__delegate = function (_,args){
var self__10386 = this;
return cljs.core._dispatch.call(null,self__10386,args);
};
var G__10387 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10387__delegate.call(this, _, args);
};
G__10387.cljs$lang$maxFixedArity = 1;
G__10387.cljs$lang$applyTo = (function (arglist__10388){
var _ = cljs.core.first(arglist__10388);
var args = cljs.core.rest(arglist__10388);
return G__10387__delegate(_, args);
});
G__10387.cljs$lang$arity$variadic = G__10387__delegate;
return G__10387;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__10389 = this;
return cljs.core._dispatch.call(null,self__10389,args);
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
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__2665__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10390 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_10392,_){
var this__10391 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__10391.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__10393 = this;
var and__3822__auto____10394 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____10394)
{return (this__10393.uuid === other.uuid);
} else
{return and__3822__auto____10394;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__10395 = this;
var this__10396 = this;
return cljs.core.pr_str.call(null,this__10396);
});
cljs.core.UUID;
