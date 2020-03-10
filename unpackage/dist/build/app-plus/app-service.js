var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190703_syb_scopedata*/global.__wcc_version__='v0.5vv_20190703_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[6],[[7],[3,'message']],[3,'user']],[1,'home']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-column'])
Z([3,'index'])
Z([3,'message'])
Z([[7],[3,'messageA']])
Z(z[1])
Z([3,'__l'])
Z([[7],[3,'index']])
Z([[7],[3,'message']])
Z([[7],[3,'scrollTop']])
Z([1,true])
Z([3,'true'])
Z([[2,'+'],[[2,'+'],[1,'height:'],[1,700]],[1,';']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z(z[5])
Z([3,'__e'])
Z(z[14])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^sendMessage']],[[4],[[5],[[4],[[5],[1,'getInputMessage']]]]]]]],[[4],[[5],[[5],[1,'^focus']],[[4],[[5],[[4],[[5],[1,'inputGetFocus']]]]]]]]])
Z([1,700])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/im-chat/chatinput.wxml','./components/im-chat/messageshow.wxml','./pages/chat/chat.wxml','./pages/user/user.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var xC=_v()
_(r,xC)
if(_oz(z,0,e,s,gg)){xC.wxVkey=1
}
xC.wxXCkey=1
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var fE=_n('view')
_rz(z,fE,'class',0,e,s,gg)
var cF=_v()
_(fE,cF)
var hG=function(cI,oH,oJ,gg){
var aL=_mz(z,'message-show',['bind:__l',5,'cid',1,'message',2,'scrollTop',3,'scrollWithAnimation',4,'scrollY',5,'style',6,'vueId',7],[],cI,oH,gg)
_(oJ,aL)
return oJ
}
cF.wxXCkey=4
_2z(z,3,hG,e,s,gg,cF,'message','index','index')
var tM=_mz(z,'chat-input',['bind:__l',13,'bind:focus',1,'bind:sendMessage',2,'data-event-opts',3,'style',4,'vueId',5],[],e,s,gg)
_(fE,tM)
_(r,fE)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/chat/chat","pages/user/user"],"window":{"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#0faeff","backgroundColor":"#fbf9fe"},"tabBar":{"color":"#7a7e83","selectedColor":"#0faeff","backgroundColor":"#ffffff","list":[{"pagePath":"pages/chat/chat","text":"消息","iconPath":"static/img/home.png","selectedIconPath":"static/img/homeHL.png"},{"pagePath":"pages/user/user","text":"我的","iconPath":"static/img/user.png","selectedIconPath":"static/img/userHL.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"uni-app-mqtt-demo","compilerVersion":"2.6.1","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/im-chat/chatinput.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/im-chat/chatinput.wxml']=$gwx('./components/im-chat/chatinput.wxml');

__wxAppCode__['components/im-chat/messageshow.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/im-chat/messageshow.wxml']=$gwx('./components/im-chat/messageshow.wxml');

__wxAppCode__['pages/chat/chat.json']={"navigationBarTitleText":"消息","usingComponents":{"chat-input":"/components/im-chat/chatinput","message-show":"/components/im-chat/messageshow"}};
__wxAppCode__['pages/chat/chat.wxml']=$gwx('./pages/chat/chat.wxml');

__wxAppCode__['pages/user/user.json']={"navigationBarTitleText":"我的","usingComponents":{}};
__wxAppCode__['pages/user/user.wxml']=$gwx('./pages/user/user.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0cd2":function(e,t,n){"use strict";(function(e){n("d47b"),n("921b");var t=o(n("66fd")),u=o(n("fad4"));function o(e){return e&&e.__esModule?e:{default:e}}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},u=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),u.forEach(function(t){r(e,t,n[t])})}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=n("2c8c");t.default.prototype.mqtt=c,t.default.config.productionTip=!1,u.default.mpType="app";var f=new t.default(a({},u.default));e(f).$mount()}).call(this,n("6e42")["createApp"])},a21b:function(e,t,n){},af9e:function(e,t,n){"use strict";var u=n("a21b"),o=n.n(u);o.a},ba56:function(e,t,n){"use strict";n.r(t);var u=n("ee9e"),o=n.n(u);for(var a in u)"default"!==a&&function(e){n.d(t,e,function(){return u[e]})}(a);t["default"]=o.a},ee9e:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={onLaunch:function(){e("log","App Launch"," at App.vue:4")},onShow:function(){e("log","App Show"," at App.vue:7")},onHide:function(){e("log","App Hide"," at App.vue:10")}};t.default=n}).call(this,n("0de9")["default"])},fad4:function(e,t,n){"use strict";n.r(t);var u=n("ba56");for(var o in u)"default"!==o&&function(e){n.d(t,e,function(){return u[e]})}(o);n("af9e");var a,r,c,f,i=n("f0c5"),l=Object(i["a"])(u["default"],a,r,!1,null,null,null,!1,c,f);t["default"]=l.exports}},[["0cd2","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var r, o, i = t[0], c = t[1], l = t[2], s = 0, f = []; s < i.length; s++) {
      o = i[s], a[o] && f.push(a[o][0]), a[o] = 0;
    }

    for (r in c) {
      Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
    }

    p && p(t);

    while (f.length) {
      f.shift()();
    }

    return u.push.apply(u, l || []), n();
  }

  function n() {
    for (var e, t = 0; t < u.length; t++) {
      for (var n = u[t], r = !0, o = 1; o < n.length; o++) {
        var i = n[o];
        0 !== a[i] && (r = !1);
      }

      r && (u.splice(t--, 1), e = c(c.s = n[0]));
    }

    return e;
  }

  var r = {},
      o = {
    "common/runtime": 0
  },
      a = {
    "common/runtime": 0
  },
      u = [];

  function i(e) {
    return c.p + "" + e + ".js";
  }

  function c(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, c), n.l = !0, n.exports;
  }

  c.e = function (e) {
    var t = [],
        n = {
      "components/im-chat/chatinput": 1,
      "components/im-chat/messageshow": 1
    };
    o[e] ? t.push(o[e]) : 0 !== o[e] && n[e] && t.push(o[e] = new Promise(function (t, n) {
      for (var r = ({
        "components/im-chat/chatinput": "components/im-chat/chatinput",
        "components/im-chat/messageshow": "components/im-chat/messageshow"
      }[e] || e) + ".wxss", a = c.p + r, u = document.getElementsByTagName("link"), i = 0; i < u.length; i++) {
        var l = u[i],
            s = l.getAttribute("data-href") || l.getAttribute("href");
        if ("stylesheet" === l.rel && (s === r || s === a)) return t();
      }

      var f = document.getElementsByTagName("style");

      for (i = 0; i < f.length; i++) {
        l = f[i], s = l.getAttribute("data-href");
        if (s === r || s === a) return t();
      }

      var p = document.createElement("link");
      p.rel = "stylesheet", p.type = "text/css", p.onload = t, p.onerror = function (t) {
        var r = t && t.target && t.target.src || a,
            u = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
        u.request = r, delete o[e], p.parentNode.removeChild(p), n(u);
      }, p.href = a;
      var m = document.getElementsByTagName("head")[0];
      m.appendChild(p);
    }).then(function () {
      o[e] = 0;
    }));
    var r = a[e];
    if (0 !== r) if (r) t.push(r[2]);else {
      var u = new Promise(function (t, n) {
        r = a[e] = [t, n];
      });
      t.push(r[2] = u);
      var l,
          s = document.createElement("script");
      s.charset = "utf-8", s.timeout = 120, c.nc && s.setAttribute("nonce", c.nc), s.src = i(e), l = function l(t) {
        s.onerror = s.onload = null, clearTimeout(f);
        var n = a[e];

        if (0 !== n) {
          if (n) {
            var r = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src,
                u = new Error("Loading chunk " + e + " failed.\n(" + r + ": " + o + ")");
            u.type = r, u.request = o, n[1](u);
          }

          a[e] = void 0;
        }
      };
      var f = setTimeout(function () {
        l({
          type: "timeout",
          target: s
        });
      }, 12e4);
      s.onerror = s.onload = l, document.head.appendChild(s);
    }
    return Promise.all(t);
  }, c.m = e, c.c = r, c.d = function (e, t, n) {
    c.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, c.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, c.t = function (e, t) {
    if (1 & t && (e = c(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (c.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      c.d(n, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return n;
  }, c.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return c.d(t, "a", t), t;
  }, c.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, c.p = "/", c.oe = function (e) {
    throw console.error(e), e;
  };
  var l = global["webpackJsonp"] = global["webpackJsonp"] || [],
      s = l.push.bind(l);
  l.push = t, l = l.slice();

  for (var f = 0; f < l.length; f++) {
    t(l[f]);
  }

  var p = s;
  n();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(e,t,n){"use strict";function r(e){var t=Object.prototype.toString.call(e);return t.substring(8,t.length-1)}function o(){return"string"===typeof __channelId__&&__channelId__}function i(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=t.shift();if(o())return t.push(t.pop().replace("at ","uni-app:///")),console[i]["apply"](console,t);var s=t.map(function(e){var t=Object.prototype.toString.call(e);if("[object object]"===t.toLowerCase())try{e="---BEGIN:JSON---"+JSON.stringify(e)+"---END:JSON---"}catch(o){e="[object object]"}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var n=r(e).toUpperCase();e="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+e+"---END:"+n+"---":String(e)}return e}),a="";if(s.length>1){var c=s.pop();a=s.join("---COMMA---"),0===c.indexOf(" at ")?a+=c:a+="---COMMA---"+c}else a=s[0];console[i](a)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i},"2c8c":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.addMessage=f,t.saveMsg=l,t.messageAll=t.options=t.client=void 0;var r=n("c388"),o={timeout:1e6,userName:"admin",password:"admin",useSSL:!1,keepAliveInterval:10,mqttVersion:4,reconnect:!0,onSuccess:function(){e("log","连接成功"," at utils\\chat.js:11"),c.subscribe("aa2",{qos:0})},onFailure:function(t){e("log","连接失败",JSON.stringify(t)," at utils\\chat.js:17")}};t.options=o;var i=Math.floor(1e4*Math.random())+"",s="47.104.177.95",a=61614,c=new r.Client(s,a,i);t.client=c,c.onConnectionLost=function(t){e("log","onConnectionLost",JSON.stringify(t)," at utils\\chat.js:28")},c.onMessageArrived=function(t){var n=t.payloadString,r=JSON.parse(n.toString());e("log","收到来自",r.source,"的消息",n.toString()," at utils\\chat.js:33"),f("home",JSON.parse(n).content,!1),l()};var u=[];function f(e,t,n,r){u.push({user:e,content:t,hasSub:n,subcontent:r})}function l(){}t.messageAll=u}).call(this,n("0de9")["default"])},5324:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={pages:{"pages/chat/chat":{navigationBarTitleText:"消息"},"pages/user/user":{navigationBarTitleText:"我的"}},globalStyle:{navigationBarTextStyle:"white",navigationBarBackgroundColor:"#0faeff",backgroundColor:"#fbf9fe"}};t.default=r},"66fd":function(e,t,n){"use strict";n.r(t),function(e){
/*!
 * Vue.js v2.6.11
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(e){return void 0===e||null===e}function o(e){return void 0!==e&&null!==e}function i(e){return!0===e}function s(e){return!1===e}function a(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function c(e){return null!==e&&"object"===typeof e}var u=Object.prototype.toString;function f(e){return"[object Object]"===u.call(e)}function l(e){return"[object RegExp]"===u.call(e)}function p(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function h(e){return o(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function d(e){return null==e?"":Array.isArray(e)||f(e)&&e.toString===u?JSON.stringify(e,null,2):String(e)}function v(e){var t=parseFloat(e);return isNaN(t)?e:t}function _(e,t){for(var n=Object.create(null),r=e.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}_("slot,component",!0);var g=_("key,ref,slot,slot-scope,is");function y(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function b(e,t){return m.call(e,t)}function w(e){var t=Object.create(null);return function(n){var r=t[n];return r||(t[n]=e(n))}}var S=/-(\w)/g,O=w(function(e){return e.replace(S,function(e,t){return t?t.toUpperCase():""})}),A=w(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),k=/\B([A-Z])/g,E=w(function(e){return e.replace(k,"-$1").toLowerCase()});function I(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function C(e,t){return e.bind(t)}var M=Function.prototype.bind?C:I;function $(e,t){t=t||0;var n=e.length-t,r=new Array(n);while(n--)r[n]=e[n+t];return r}function T(e,t){for(var n in t)e[n]=t[n];return e}function N(e){for(var t={},n=0;n<e.length;n++)e[n]&&T(t,e[n]);return t}function P(e,t,n){}var D=function(e,t,n){return!1},x=function(e){return e};function R(e,t){if(e===t)return!0;var n=c(e),r=c(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var o=Array.isArray(e),i=Array.isArray(t);if(o&&i)return e.length===t.length&&e.every(function(e,n){return R(e,t[n])});if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(o||i)return!1;var s=Object.keys(e),a=Object.keys(t);return s.length===a.length&&s.every(function(n){return R(e[n],t[n])})}catch(u){return!1}}function j(e,t){for(var n=0;n<e.length;n++)if(R(e[n],t))return n;return-1}function U(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var B=["component","directive","filter"],L=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],q={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:D,isReservedAttr:D,isUnknownElement:D,getTagNamespace:P,parsePlatformTagName:x,mustUseProp:D,async:!0,_lifecycleHooks:L},V=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function F(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function H(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var J=new RegExp("[^"+V.source+".$_\\d]");function K(e){if(!J.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}var G,Q="__proto__"in{},z="undefined"!==typeof window,W="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Y=W&&WXEnvironment.platform.toLowerCase(),X=z&&window.navigator.userAgent.toLowerCase(),Z=X&&/msie|trident/.test(X),ee=(X&&X.indexOf("msie 9.0"),X&&X.indexOf("edge/")>0),te=(X&&X.indexOf("android"),X&&/iphone|ipad|ipod|ios/.test(X)||"ios"===Y),ne=(X&&/chrome\/\d+/.test(X),X&&/phantomjs/.test(X),X&&X.match(/firefox\/(\d+)/),{}.watch);if(z)try{var re={};Object.defineProperty(re,"passive",{get:function(){}}),window.addEventListener("test-passive",null,re)}catch(no){}var oe=function(){return void 0===G&&(G=!z&&!W&&"undefined"!==typeof e&&(e["process"]&&"server"===e["process"].env.VUE_ENV)),G},ie=z&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function se(e){return"function"===typeof e&&/native code/.test(e.toString())}var ae,ce="undefined"!==typeof Symbol&&se(Symbol)&&"undefined"!==typeof Reflect&&se(Reflect.ownKeys);ae="undefined"!==typeof Set&&se(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var ue=P,fe=0,le=function(){"undefined"!==typeof SharedObject?this.id=SharedObject.uid++:this.id=fe++,this.subs=[]};function pe(e){le.SharedObject.targetStack.push(e),le.SharedObject.target=e}function he(){le.SharedObject.targetStack.pop(),le.SharedObject.target=le.SharedObject.targetStack[le.SharedObject.targetStack.length-1]}le.prototype.addSub=function(e){this.subs.push(e)},le.prototype.removeSub=function(e){y(this.subs,e)},le.prototype.depend=function(){le.SharedObject.target&&le.SharedObject.target.addDep(this)},le.prototype.notify=function(){var e=this.subs.slice();for(var t=0,n=e.length;t<n;t++)e[t].update()},le.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},le.SharedObject.target=null,le.SharedObject.targetStack=[];var de=function(e,t,n,r,o,i,s,a){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},ve={child:{configurable:!0}};ve.child.get=function(){return this.componentInstance},Object.defineProperties(de.prototype,ve);var _e=function(e){void 0===e&&(e="");var t=new de;return t.text=e,t.isComment=!0,t};function ge(e){return new de(void 0,void 0,void 0,String(e))}function ye(e){var t=new de(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var me=Array.prototype,be=Object.create(me),we=["push","pop","shift","unshift","splice","sort","reverse"];we.forEach(function(e){var t=me[e];H(be,e,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var o,i=t.apply(this,n),s=this.__ob__;switch(e){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);break}return o&&s.observeArray(o),s.dep.notify(),i})});var Se=Object.getOwnPropertyNames(be),Oe=!0;function Ae(e){Oe=e}var ke=function(e){this.value=e,this.dep=new le,this.vmCount=0,H(e,"__ob__",this),Array.isArray(e)?(Q?e.push!==e.__proto__.push?Ie(e,be,Se):Ee(e,be):Ie(e,be,Se),this.observeArray(e)):this.walk(e)};function Ee(e,t){e.__proto__=t}function Ie(e,t,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];H(e,i,t[i])}}function Ce(e,t){var n;if(c(e)&&!(e instanceof de))return b(e,"__ob__")&&e.__ob__ instanceof ke?n=e.__ob__:Oe&&!oe()&&(Array.isArray(e)||f(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new ke(e)),t&&n&&n.vmCount++,n}function Me(e,t,n,r,o){var i=new le,s=Object.getOwnPropertyDescriptor(e,t);if(!s||!1!==s.configurable){var a=s&&s.get,c=s&&s.set;a&&!c||2!==arguments.length||(n=e[t]);var u=!o&&Ce(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=a?a.call(e):n;return le.SharedObject.target&&(i.depend(),u&&(u.dep.depend(),Array.isArray(t)&&Ne(t))),t},set:function(t){var r=a?a.call(e):n;t===r||t!==t&&r!==r||a&&!c||(c?c.call(e,t):n=t,u=!o&&Ce(t),i.notify())}})}}function $e(e,t,n){if(Array.isArray(e)&&p(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n,n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(Me(r.value,t,n),r.dep.notify(),n):(e[t]=n,n)}function Te(e,t){if(Array.isArray(e)&&p(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||b(e,t)&&(delete e[t],n&&n.dep.notify())}}function Ne(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&Ne(t)}ke.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)Me(e,t[n])},ke.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)Ce(e[t])};var Pe=q.optionMergeStrategies;function De(e,t){if(!t)return e;for(var n,r,o,i=ce?Reflect.ownKeys(t):Object.keys(t),s=0;s<i.length;s++)n=i[s],"__ob__"!==n&&(r=e[n],o=t[n],b(e,n)?r!==o&&f(r)&&f(o)&&De(r,o):$e(e,n,o));return e}function xe(e,t,n){return n?function(){var r="function"===typeof t?t.call(n,n):t,o="function"===typeof e?e.call(n,n):e;return r?De(r,o):o}:t?e?function(){return De("function"===typeof t?t.call(this,this):t,"function"===typeof e?e.call(this,this):e)}:t:e}function Re(e,t){var n=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return n?je(n):n}function je(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function Ue(e,t,n,r){var o=Object.create(e||null);return t?T(o,t):o}Pe.data=function(e,t,n){return n?xe(e,t,n):t&&"function"!==typeof t?e:xe(e,t)},L.forEach(function(e){Pe[e]=Re}),B.forEach(function(e){Pe[e+"s"]=Ue}),Pe.watch=function(e,t,n,r){if(e===ne&&(e=void 0),t===ne&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var o={};for(var i in T(o,e),t){var s=o[i],a=t[i];s&&!Array.isArray(s)&&(s=[s]),o[i]=s?s.concat(a):Array.isArray(a)?a:[a]}return o},Pe.props=Pe.methods=Pe.inject=Pe.computed=function(e,t,n,r){if(!e)return t;var o=Object.create(null);return T(o,e),t&&T(o,t),o},Pe.provide=xe;var Be=function(e,t){return void 0===t?e:t};function Le(e,t){var n=e.props;if(n){var r,o,i,s={};if(Array.isArray(n)){r=n.length;while(r--)o=n[r],"string"===typeof o&&(i=O(o),s[i]={type:null})}else if(f(n))for(var a in n)o=n[a],i=O(a),s[i]=f(o)?o:{type:o};else 0;e.props=s}}function qe(e,t){var n=e.inject;if(n){var r=e.inject={};if(Array.isArray(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(f(n))for(var i in n){var s=n[i];r[i]=f(s)?T({from:i},s):{from:s}}else 0}}function Ve(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"===typeof r&&(t[n]={bind:r,update:r})}}function Fe(e,t,n){if("function"===typeof t&&(t=t.options),Le(t,n),qe(t,n),Ve(t),!t._base&&(t.extends&&(e=Fe(e,t.extends,n)),t.mixins))for(var r=0,o=t.mixins.length;r<o;r++)e=Fe(e,t.mixins[r],n);var i,s={};for(i in e)a(i);for(i in t)b(e,i)||a(i);function a(r){var o=Pe[r]||Be;s[r]=o(e[r],t[r],n,r)}return s}function He(e,t,n,r){if("string"===typeof n){var o=e[t];if(b(o,n))return o[n];var i=O(n);if(b(o,i))return o[i];var s=A(i);if(b(o,s))return o[s];var a=o[n]||o[i]||o[s];return a}}function Je(e,t,n,r){var o=t[e],i=!b(n,e),s=n[e],a=ze(Boolean,o.type);if(a>-1)if(i&&!b(o,"default"))s=!1;else if(""===s||s===E(e)){var c=ze(String,o.type);(c<0||a<c)&&(s=!0)}if(void 0===s){s=Ke(r,o,e);var u=Oe;Ae(!0),Ce(s),Ae(u)}return s}function Ke(e,t,n){if(b(t,"default")){var r=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:"function"===typeof r&&"Function"!==Ge(t.type)?r.call(e):r}}function Ge(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}function Qe(e,t){return Ge(e)===Ge(t)}function ze(e,t){if(!Array.isArray(t))return Qe(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(Qe(t[n],e))return n;return-1}function We(e,t,n){pe();try{if(t){var r=t;while(r=r.$parent){var o=r.$options.errorCaptured;if(o)for(var i=0;i<o.length;i++)try{var s=!1===o[i].call(r,e,t,n);if(s)return}catch(no){Xe(no,r,"errorCaptured hook")}}}Xe(e,t,n)}finally{he()}}function Ye(e,t,n,r,o){var i;try{i=n?e.apply(t,n):e.call(t),i&&!i._isVue&&h(i)&&!i._handled&&(i.catch(function(e){return We(e,r,o+" (Promise/async)")}),i._handled=!0)}catch(no){We(no,r,o)}return i}function Xe(e,t,n){if(q.errorHandler)try{return q.errorHandler.call(null,e,t,n)}catch(no){no!==e&&Ze(no,null,"config.errorHandler")}Ze(e,t,n)}function Ze(e,t,n){if(!z&&!W||"undefined"===typeof console)throw e;console.error(e)}var et,tt=[],nt=!1;function rt(){nt=!1;var e=tt.slice(0);tt.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!==typeof Promise&&se(Promise)){var ot=Promise.resolve();et=function(){ot.then(rt),te&&setTimeout(P)}}else if(Z||"undefined"===typeof MutationObserver||!se(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())et="undefined"!==typeof setImmediate&&se(setImmediate)?function(){setImmediate(rt)}:function(){setTimeout(rt,0)};else{var it=1,st=new MutationObserver(rt),at=document.createTextNode(String(it));st.observe(at,{characterData:!0}),et=function(){it=(it+1)%2,at.data=String(it)}}function ct(e,t){var n;if(tt.push(function(){if(e)try{e.call(t)}catch(no){We(no,t,"nextTick")}else n&&n(t)}),nt||(nt=!0,et()),!e&&"undefined"!==typeof Promise)return new Promise(function(e){n=e})}var ut=new ae;function ft(e){lt(e,ut),ut.clear()}function lt(e,t){var n,r,o=Array.isArray(e);if(!(!o&&!c(e)||Object.isFrozen(e)||e instanceof de)){if(e.__ob__){var i=e.__ob__.dep.id;if(t.has(i))return;t.add(i)}if(o){n=e.length;while(n--)lt(e[n],t)}else{r=Object.keys(e),n=r.length;while(n--)lt(e[r[n]],t)}}}var pt=w(function(e){var t="&"===e.charAt(0);e=t?e.slice(1):e;var n="~"===e.charAt(0);e=n?e.slice(1):e;var r="!"===e.charAt(0);return e=r?e.slice(1):e,{name:e,once:n,capture:r,passive:t}});function ht(e,t){function n(){var e=arguments,r=n.fns;if(!Array.isArray(r))return Ye(r,null,arguments,t,"v-on handler");for(var o=r.slice(),i=0;i<o.length;i++)Ye(o[i],null,e,t,"v-on handler")}return n.fns=e,n}function dt(e,t,n,o,s,a){var c,u,f,l;for(c in e)u=e[c],f=t[c],l=pt(c),r(u)||(r(f)?(r(u.fns)&&(u=e[c]=ht(u,a)),i(l.once)&&(u=e[c]=s(l.name,u,l.capture)),n(l.name,u,l.capture,l.passive,l.params)):u!==f&&(f.fns=u,e[c]=f));for(c in t)r(e[c])&&(l=pt(c),o(l.name,t[c],l.capture))}function vt(e,t,n,i){var s=t.options.mpOptions&&t.options.mpOptions.properties;if(r(s))return n;var a=t.options.mpOptions.externalClasses||[],c=e.attrs,u=e.props;if(o(c)||o(u))for(var f in s){var l=E(f),p=gt(n,u,f,l,!0)||gt(n,c,f,l,!1);p&&n[f]&&-1!==a.indexOf(l)&&i[O(n[f])]&&(n[f]=i[O(n[f])])}return n}function _t(e,t,n,i){var s=t.options.props;if(r(s))return vt(e,t,{},i);var a={},c=e.attrs,u=e.props;if(o(c)||o(u))for(var f in s){var l=E(f);gt(a,u,f,l,!0)||gt(a,c,f,l,!1)}return vt(e,t,a,i)}function gt(e,t,n,r,i){if(o(t)){if(b(t,n))return e[n]=t[n],i||delete t[n],!0;if(b(t,r))return e[n]=t[r],i||delete t[r],!0}return!1}function yt(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}function mt(e){return a(e)?[ge(e)]:Array.isArray(e)?wt(e):void 0}function bt(e){return o(e)&&o(e.text)&&s(e.isComment)}function wt(e,t){var n,s,c,u,f=[];for(n=0;n<e.length;n++)s=e[n],r(s)||"boolean"===typeof s||(c=f.length-1,u=f[c],Array.isArray(s)?s.length>0&&(s=wt(s,(t||"")+"_"+n),bt(s[0])&&bt(u)&&(f[c]=ge(u.text+s[0].text),s.shift()),f.push.apply(f,s)):a(s)?bt(u)?f[c]=ge(u.text+s):""!==s&&f.push(ge(s)):bt(s)&&bt(u)?f[c]=ge(u.text+s.text):(i(e._isVList)&&o(s.tag)&&r(s.key)&&o(t)&&(s.key="__vlist"+t+"_"+n+"__"),f.push(s)));return f}function St(e){var t=e.$options.provide;t&&(e._provided="function"===typeof t?t.call(e):t)}function Ot(e){var t=At(e.$options.inject,e);t&&(Ae(!1),Object.keys(t).forEach(function(n){Me(e,n,t[n])}),Ae(!0))}function At(e,t){if(e){for(var n=Object.create(null),r=ce?Reflect.ownKeys(e):Object.keys(e),o=0;o<r.length;o++){var i=r[o];if("__ob__"!==i){var s=e[i].from,a=t;while(a){if(a._provided&&b(a._provided,s)){n[i]=a._provided[s];break}a=a.$parent}if(!a)if("default"in e[i]){var c=e[i].default;n[i]="function"===typeof c?c.call(t):c}else 0}}return n}}function kt(e,t){if(!e||!e.length)return{};for(var n={},r=0,o=e.length;r<o;r++){var i=e[r],s=i.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,i.context!==t&&i.fnContext!==t||!s||null==s.slot)i.asyncMeta&&i.asyncMeta.data&&"page"===i.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(i):(n.default||(n.default=[])).push(i);else{var a=s.slot,c=n[a]||(n[a]=[]);"template"===i.tag?c.push.apply(c,i.children||[]):c.push(i)}}for(var u in n)n[u].every(Et)&&delete n[u];return n}function Et(e){return e.isComment&&!e.asyncFactory||" "===e.text}function It(e,t,r){var o,i=Object.keys(t).length>0,s=e?!!e.$stable:!i,a=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(s&&r&&r!==n&&a===r.$key&&!i&&!r.$hasNormal)return r;for(var c in o={},e)e[c]&&"$"!==c[0]&&(o[c]=Ct(t,c,e[c]))}else o={};for(var u in t)u in o||(o[u]=Mt(t,u));return e&&Object.isExtensible(e)&&(e._normalized=o),H(o,"$stable",s),H(o,"$key",a),H(o,"$hasNormal",i),o}function Ct(e,t,n){var r=function(){var e=arguments.length?n.apply(null,arguments):n({});return e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:mt(e),e&&(0===e.length||1===e.length&&e[0].isComment)?void 0:e};return n.proxy&&Object.defineProperty(e,t,{get:r,enumerable:!0,configurable:!0}),r}function Mt(e,t){return function(){return e[t]}}function $t(e,t){var n,r,i,s,a;if(Array.isArray(e)||"string"===typeof e)for(n=new Array(e.length),r=0,i=e.length;r<i;r++)n[r]=t(e[r],r,r,r);else if("number"===typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r,r,r);else if(c(e))if(ce&&e[Symbol.iterator]){n=[];var u=e[Symbol.iterator](),f=u.next();while(!f.done)n.push(t(f.value,n.length,r++,r)),f=u.next()}else for(s=Object.keys(e),n=new Array(s.length),r=0,i=s.length;r<i;r++)a=s[r],n[r]=t(e[a],a,r,r);return o(n)||(n=[]),n._isVList=!0,n}function Tt(e,t,n,r){var o,i=this.$scopedSlots[e];i?(n=n||{},r&&(n=T(T({},r),n)),o=i(n,this,n._i)||t):o=this.$slots[e]||t;var s=n&&n.slot;return s?this.$createElement("template",{slot:s},o):o}function Nt(e){return He(this.$options,"filters",e,!0)||x}function Pt(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function Dt(e,t,n,r,o){var i=q.keyCodes[t]||n;return o&&r&&!q.keyCodes[t]?Pt(o,r):i?Pt(i,e):r?E(r)!==t:void 0}function xt(e,t,n,r,o){if(n)if(c(n)){var i;Array.isArray(n)&&(n=N(n));var s=function(s){if("class"===s||"style"===s||g(s))i=e;else{var a=e.attrs&&e.attrs.type;i=r||q.mustUseProp(t,a,s)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=O(s),u=E(s);if(!(c in i)&&!(u in i)&&(i[s]=n[s],o)){var f=e.on||(e.on={});f["update:"+s]=function(e){n[s]=e}}};for(var a in n)s(a)}else;return e}function Rt(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t?r:(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),Ut(r,"__static__"+e,!1),r)}function jt(e,t,n){return Ut(e,"__once__"+t+(n?"_"+n:""),!0),e}function Ut(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!==typeof e[r]&&Bt(e[r],t+"_"+r,n);else Bt(e,t,n)}function Bt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function Lt(e,t){if(t)if(f(t)){var n=e.on=e.on?T({},e.on):{};for(var r in t){var o=n[r],i=t[r];n[r]=o?[].concat(o,i):i}}else;return e}function qt(e,t,n,r){t=t||{$stable:!n};for(var o=0;o<e.length;o++){var i=e[o];Array.isArray(i)?qt(i,t,n):i&&(i.proxy&&(i.fn.proxy=!0),t[i.key]=i.fn)}return r&&(t.$key=r),t}function Vt(e,t){for(var n=0;n<t.length;n+=2){var r=t[n];"string"===typeof r&&r&&(e[t[n]]=t[n+1])}return e}function Ft(e,t){return"string"===typeof e?t+e:e}function Ht(e){e._o=jt,e._n=v,e._s=d,e._l=$t,e._t=Tt,e._q=R,e._i=j,e._m=Rt,e._f=Nt,e._k=Dt,e._b=xt,e._v=ge,e._e=_e,e._u=qt,e._g=Lt,e._d=Vt,e._p=Ft}function Jt(e,t,r,o,s){var a,c=this,u=s.options;b(o,"_uid")?(a=Object.create(o),a._original=o):(a=o,o=o._original);var f=i(u._compiled),l=!f;this.data=e,this.props=t,this.children=r,this.parent=o,this.listeners=e.on||n,this.injections=At(u.inject,o),this.slots=function(){return c.$slots||It(e.scopedSlots,c.$slots=kt(r,o)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return It(e.scopedSlots,this.slots())}}),f&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=It(e.scopedSlots,this.$slots)),u._scopeId?this._c=function(e,t,n,r){var i=on(a,e,t,n,r,l);return i&&!Array.isArray(i)&&(i.fnScopeId=u._scopeId,i.fnContext=o),i}:this._c=function(e,t,n,r){return on(a,e,t,n,r,l)}}function Kt(e,t,r,i,s){var a=e.options,c={},u=a.props;if(o(u))for(var f in u)c[f]=Je(f,u,t||n);else o(r.attrs)&&Qt(c,r.attrs),o(r.props)&&Qt(c,r.props);var l=new Jt(r,c,s,i,e),p=a.render.call(null,l._c,l);if(p instanceof de)return Gt(p,r,l.parent,a,l);if(Array.isArray(p)){for(var h=mt(p)||[],d=new Array(h.length),v=0;v<h.length;v++)d[v]=Gt(h[v],r,l.parent,a,l);return d}}function Gt(e,t,n,r,o){var i=ye(e);return i.fnContext=n,i.fnOptions=r,t.slot&&((i.data||(i.data={})).slot=t.slot),i}function Qt(e,t){for(var n in t)e[O(n)]=t[n]}Ht(Jt.prototype);var zt={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;zt.prepatch(n,n)}else{var r=e.componentInstance=Xt(e,An);r.$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var n=t.componentOptions,r=t.componentInstance=e.componentInstance;Cn(r,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(Nn(n,"onServiceCreated"),Nn(n,"onServiceAttached"),n._isMounted=!0,Nn(n,"mounted")),e.data.keepAlive&&(t._isMounted?Hn(n):$n(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?Tn(t,!0):t.$destroy())}},Wt=Object.keys(zt);function Yt(e,t,n,s,a){if(!r(e)){var u=n.$options._base;if(c(e)&&(e=u.extend(e)),"function"===typeof e){var f;if(r(e.cid)&&(f=e,e=vn(f,u),void 0===e))return dn(f,t,n,s,a);t=t||{},hr(e),o(t.model)&&tn(e.options,t);var l=_t(t,e,a,n);if(i(e.options.functional))return Kt(e,l,t,n,s);var p=t.on;if(t.on=t.nativeOn,i(e.options.abstract)){var h=t.slot;t={},h&&(t.slot=h)}Zt(t);var d=e.options.name||a,v=new de("vue-component-"+e.cid+(d?"-"+d:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:l,listeners:p,tag:a,children:s},f);return v}}}function Xt(e,t){var n={_isComponent:!0,_parentVnode:e,parent:t},r=e.data.inlineTemplate;return o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new e.componentOptions.Ctor(n)}function Zt(e){for(var t=e.hook||(e.hook={}),n=0;n<Wt.length;n++){var r=Wt[n],o=t[r],i=zt[r];o===i||o&&o._merged||(t[r]=o?en(i,o):i)}}function en(e,t){var n=function(n,r){e(n,r),t(n,r)};return n._merged=!0,n}function tn(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[n]=t.model.value;var i=t.on||(t.on={}),s=i[r],a=t.model.callback;o(s)?(Array.isArray(s)?-1===s.indexOf(a):s!==a)&&(i[r]=[a].concat(s)):i[r]=a}var nn=1,rn=2;function on(e,t,n,r,o,s){return(Array.isArray(n)||a(n))&&(o=r,r=n,n=void 0),i(s)&&(o=rn),sn(e,t,n,r,o)}function sn(e,t,n,r,i){if(o(n)&&o(n.__ob__))return _e();if(o(n)&&o(n.is)&&(t=n.is),!t)return _e();var s,a,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===rn?r=mt(r):i===nn&&(r=yt(r)),"string"===typeof t)?(a=e.$vnode&&e.$vnode.ns||q.getTagNamespace(t),s=q.isReservedTag(t)?new de(q.parsePlatformTagName(t),n,r,void 0,void 0,e):n&&n.pre||!o(c=He(e.$options,"components",t))?new de(t,n,r,void 0,void 0,e):Yt(c,n,e,r,t)):s=Yt(t,n,e,r);return Array.isArray(s)?s:o(s)?(o(a)&&an(s,a),o(n)&&cn(n),s):_e()}function an(e,t,n){if(e.ns=t,"foreignObject"===e.tag&&(t=void 0,n=!0),o(e.children))for(var s=0,a=e.children.length;s<a;s++){var c=e.children[s];o(c.tag)&&(r(c.ns)||i(n)&&"svg"!==c.tag)&&an(c,t,n)}}function cn(e){c(e.style)&&ft(e.style),c(e.class)&&ft(e.class)}function un(e){e._vnode=null,e._staticTrees=null;var t=e.$options,r=e.$vnode=t._parentVnode,o=r&&r.context;e.$slots=kt(t._renderChildren,o),e.$scopedSlots=n,e._c=function(t,n,r,o){return on(e,t,n,r,o,!1)},e.$createElement=function(t,n,r,o){return on(e,t,n,r,o,!0)};var i=r&&r.data;Me(e,"$attrs",i&&i.attrs||n,null,!0),Me(e,"$listeners",t._parentListeners||n,null,!0)}var fn,ln=null;function pn(e){Ht(e.prototype),e.prototype.$nextTick=function(e){return ct(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,r=n.render,o=n._parentVnode;o&&(t.$scopedSlots=It(o.data.scopedSlots,t.$slots,t.$scopedSlots)),t.$vnode=o;try{ln=t,e=r.call(t._renderProxy,t.$createElement)}catch(no){We(no,t,"render"),e=t._vnode}finally{ln=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof de||(e=_e()),e.parent=o,e}}function hn(e,t){return(e.__esModule||ce&&"Module"===e[Symbol.toStringTag])&&(e=e.default),c(e)?t.extend(e):e}function dn(e,t,n,r,o){var i=_e();return i.asyncFactory=e,i.asyncMeta={data:t,context:n,children:r,tag:o},i}function vn(e,t){if(i(e.error)&&o(e.errorComp))return e.errorComp;if(o(e.resolved))return e.resolved;var n=ln;if(n&&o(e.owners)&&-1===e.owners.indexOf(n)&&e.owners.push(n),i(e.loading)&&o(e.loadingComp))return e.loadingComp;if(n&&!o(e.owners)){var s=e.owners=[n],a=!0,u=null,f=null;n.$on("hook:destroyed",function(){return y(s,n)});var l=function(e){for(var t=0,n=s.length;t<n;t++)s[t].$forceUpdate();e&&(s.length=0,null!==u&&(clearTimeout(u),u=null),null!==f&&(clearTimeout(f),f=null))},p=U(function(n){e.resolved=hn(n,t),a?s.length=0:l(!0)}),d=U(function(t){o(e.errorComp)&&(e.error=!0,l(!0))}),v=e(p,d);return c(v)&&(h(v)?r(e.resolved)&&v.then(p,d):h(v.component)&&(v.component.then(p,d),o(v.error)&&(e.errorComp=hn(v.error,t)),o(v.loading)&&(e.loadingComp=hn(v.loading,t),0===v.delay?e.loading=!0:u=setTimeout(function(){u=null,r(e.resolved)&&r(e.error)&&(e.loading=!0,l(!1))},v.delay||200)),o(v.timeout)&&(f=setTimeout(function(){f=null,r(e.resolved)&&d(null)},v.timeout)))),a=!1,e.loading?e.loadingComp:e.resolved}}function _n(e){return e.isComment&&e.asyncFactory}function gn(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];if(o(n)&&(o(n.componentOptions)||_n(n)))return n}}function yn(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&Sn(e,t)}function mn(e,t){fn.$on(e,t)}function bn(e,t){fn.$off(e,t)}function wn(e,t){var n=fn;return function r(){var o=t.apply(null,arguments);null!==o&&n.$off(e,r)}}function Sn(e,t,n){fn=e,dt(t,n||{},mn,bn,wn,e),fn=void 0}function On(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;if(Array.isArray(e))for(var o=0,i=e.length;o<i;o++)r.$on(e[o],n);else(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0);return r},e.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var r=0,o=e.length;r<o;r++)n.$off(e[r],t);return n}var i,s=n._events[e];if(!s)return n;if(!t)return n._events[e]=null,n;var a=s.length;while(a--)if(i=s[a],i===t||i.fn===t){s.splice(a,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?$(n):n;for(var r=$(arguments,1),o='event handler for "'+e+'"',i=0,s=n.length;i<s;i++)Ye(n[i],t,r,t,o)}return t}}var An=null;function kn(e){var t=An;return An=e,function(){An=t}}function En(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function In(e){e.prototype._update=function(e,t){var n=this,r=n.$el,o=n._vnode,i=kn(n);n._vnode=e,n.$el=o?n.__patch__(o,e):n.__patch__(n.$el,e,t,!1),i(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Nn(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||y(t.$children,e),e._watcher&&e._watcher.teardown();var n=e._watchers.length;while(n--)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Nn(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function Cn(e,t,r,o,i){var s=o.data.scopedSlots,a=e.$scopedSlots,c=!!(s&&!s.$stable||a!==n&&!a.$stable||s&&e.$scopedSlots.$key!==s.$key),u=!!(i||e.$options._renderChildren||c);if(e.$options._parentVnode=o,e.$vnode=o,e._vnode&&(e._vnode.parent=o),e.$options._renderChildren=i,e.$attrs=o.data.attrs||n,e.$listeners=r||n,t&&e.$options.props){Ae(!1);for(var f=e._props,l=e.$options._propKeys||[],p=0;p<l.length;p++){var h=l[p],d=e.$options.props;f[h]=Je(h,d,t,e)}Ae(!0),e.$options.propsData=t}e._$updateProperties&&e._$updateProperties(e),r=r||n;var v=e.$options._parentListeners;e.$options._parentListeners=r,Sn(e,r,v),u&&(e.$slots=kt(i,o.context),e.$forceUpdate())}function Mn(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function $n(e,t){if(t){if(e._directInactive=!1,Mn(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)$n(e.$children[n]);Nn(e,"activated")}}function Tn(e,t){if((!t||(e._directInactive=!0,!Mn(e)))&&!e._inactive){e._inactive=!0;for(var n=0;n<e.$children.length;n++)Tn(e.$children[n]);Nn(e,"deactivated")}}function Nn(e,t){pe();var n=e.$options[t],r=t+" hook";if(n)for(var o=0,i=n.length;o<i;o++)Ye(n[o],e,null,e,r);e._hasHookEvent&&e.$emit("hook:"+t),he()}var Pn=[],Dn=[],xn={},Rn=!1,jn=!1,Un=0;function Bn(){Un=Pn.length=Dn.length=0,xn={},Rn=jn=!1}var Ln=Date.now;if(z&&!Z){var qn=window.performance;qn&&"function"===typeof qn.now&&Ln()>document.createEvent("Event").timeStamp&&(Ln=function(){return qn.now()})}function Vn(){var e,t;for(Ln(),jn=!0,Pn.sort(function(e,t){return e.id-t.id}),Un=0;Un<Pn.length;Un++)e=Pn[Un],e.before&&e.before(),t=e.id,xn[t]=null,e.run();var n=Dn.slice(),r=Pn.slice();Bn(),Jn(n),Fn(r),ie&&q.devtools&&ie.emit("flush")}function Fn(e){var t=e.length;while(t--){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Nn(r,"updated")}}function Hn(e){e._inactive=!1,Dn.push(e)}function Jn(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,$n(e[t],!0)}function Kn(e){var t=e.id;if(null==xn[t]){if(xn[t]=!0,jn){var n=Pn.length-1;while(n>Un&&Pn[n].id>e.id)n--;Pn.splice(n+1,0,e)}else Pn.push(e);Rn||(Rn=!0,ct(Vn))}}var Gn=0,Qn=function(e,t,n,r,o){this.vm=e,o&&(e._watcher=this),e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Gn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ae,this.newDepIds=new ae,this.expression="","function"===typeof t?this.getter=t:(this.getter=K(t),this.getter||(this.getter=P)),this.value=this.lazy?void 0:this.get()};Qn.prototype.get=function(){var e;pe(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(no){if(!this.user)throw no;We(no,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ft(e),he(),this.cleanupDeps()}return e},Qn.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},Qn.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Qn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Kn(this)},Qn.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||c(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(no){We(no,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,t)}}},Qn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Qn.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},Qn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var zn={enumerable:!0,configurable:!0,get:P,set:P};function Wn(e,t,n){zn.get=function(){return this[t][n]},zn.set=function(e){this[t][n]=e},Object.defineProperty(e,n,zn)}function Yn(e){e._watchers=[];var t=e.$options;t.props&&Xn(e,t.props),t.methods&&sr(e,t.methods),t.data?Zn(e):Ce(e._data={},!0),t.computed&&nr(e,t.computed),t.watch&&t.watch!==ne&&ar(e,t.watch)}function Xn(e,t){var n=e.$options.propsData||{},r=e._props={},o=e.$options._propKeys=[],i=!e.$parent;i||Ae(!1);var s=function(i){o.push(i);var s=Je(i,t,n,e);Me(r,i,s),i in e||Wn(e,"_props",i)};for(var a in t)s(a);Ae(!0)}function Zn(e){var t=e.$options.data;t=e._data="function"===typeof t?er(t,e):t||{},f(t)||(t={});var n=Object.keys(t),r=e.$options.props,o=(e.$options.methods,n.length);while(o--){var i=n[o];0,r&&b(r,i)||F(i)||Wn(e,"_data",i)}Ce(t,!0)}function er(e,t){pe();try{return e.call(t,t)}catch(no){return We(no,t,"data()"),{}}finally{he()}}var tr={lazy:!0};function nr(e,t){var n=e._computedWatchers=Object.create(null),r=oe();for(var o in t){var i=t[o],s="function"===typeof i?i:i.get;0,r||(n[o]=new Qn(e,s||P,P,tr)),o in e||rr(e,o,i)}}function rr(e,t,n){var r=!oe();"function"===typeof n?(zn.get=r?or(t):ir(n),zn.set=P):(zn.get=n.get?r&&!1!==n.cache?or(t):ir(n.get):P,zn.set=n.set||P),Object.defineProperty(e,t,zn)}function or(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),le.SharedObject.target&&t.depend(),t.value}}function ir(e){return function(){return e.call(this,this)}}function sr(e,t){e.$options.props;for(var n in t)e[n]="function"!==typeof t[n]?P:M(t[n],e)}function ar(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)cr(e,n,r[o]);else cr(e,n,r)}}function cr(e,t,n,r){return f(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=e[n]),e.$watch(t,n,r)}function ur(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=$e,e.prototype.$delete=Te,e.prototype.$watch=function(e,t,n){var r=this;if(f(t))return cr(r,e,t,n);n=n||{},n.user=!0;var o=new Qn(r,e,t,n);if(n.immediate)try{t.call(r,o.value)}catch(i){We(i,r,'callback for immediate watcher "'+o.expression+'"')}return function(){o.teardown()}}}var fr=0;function lr(e){e.prototype._init=function(e){var t=this;t._uid=fr++,t._isVue=!0,e&&e._isComponent?pr(t,e):t.$options=Fe(hr(t.constructor),e||{},t),t._renderProxy=t,t._self=t,En(t),yn(t),un(t),Nn(t,"beforeCreate"),"mp-toutiao"!==t.mpHost&&Ot(t),Yn(t),"mp-toutiao"!==t.mpHost&&St(t),"mp-toutiao"!==t.mpHost&&Nn(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}function pr(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r;var o=r.componentOptions;n.propsData=o.propsData,n._parentListeners=o.listeners,n._renderChildren=o.children,n._componentTag=o.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function hr(e){var t=e.options;if(e.super){var n=hr(e.super),r=e.superOptions;if(n!==r){e.superOptions=n;var o=dr(e);o&&T(e.extendOptions,o),t=e.options=Fe(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function dr(e){var t,n=e.options,r=e.sealedOptions;for(var o in n)n[o]!==r[o]&&(t||(t={}),t[o]=n[o]);return t}function vr(e){this._init(e)}function _r(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=$(arguments,1);return n.unshift(this),"function"===typeof e.install?e.install.apply(e,n):"function"===typeof e&&e.apply(null,n),t.push(e),this}}function gr(e){e.mixin=function(e){return this.options=Fe(this.options,e),this}}function yr(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,o=e._Ctor||(e._Ctor={});if(o[r])return o[r];var i=e.name||n.options.name;var s=function(e){this._init(e)};return s.prototype=Object.create(n.prototype),s.prototype.constructor=s,s.cid=t++,s.options=Fe(n.options,e),s["super"]=n,s.options.props&&mr(s),s.options.computed&&br(s),s.extend=n.extend,s.mixin=n.mixin,s.use=n.use,B.forEach(function(e){s[e]=n[e]}),i&&(s.options.components[i]=s),s.superOptions=n.options,s.extendOptions=e,s.sealedOptions=T({},s.options),o[r]=s,s}}function mr(e){var t=e.options.props;for(var n in t)Wn(e.prototype,"_props",n)}function br(e){var t=e.options.computed;for(var n in t)rr(e.prototype,n,t[n])}function wr(e){B.forEach(function(t){e[t]=function(e,n){return n?("component"===t&&f(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"===typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}})}function Sr(e){return e&&(e.Ctor.options.name||e.tag)}function Or(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"===typeof e?e.split(",").indexOf(t)>-1:!!l(e)&&e.test(t)}function Ar(e,t){var n=e.cache,r=e.keys,o=e._vnode;for(var i in n){var s=n[i];if(s){var a=Sr(s.componentOptions);a&&!t(a)&&kr(n,i,r,o)}}}function kr(e,t,n,r){var o=e[t];!o||r&&o.tag===r.tag||o.componentInstance.$destroy(),e[t]=null,y(n,t)}lr(vr),ur(vr),On(vr),In(vr),pn(vr);var Er=[String,RegExp,Array],Ir={name:"keep-alive",abstract:!0,props:{include:Er,exclude:Er,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)kr(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",function(t){Ar(e,function(e){return Or(t,e)})}),this.$watch("exclude",function(t){Ar(e,function(e){return!Or(t,e)})})},render:function(){var e=this.$slots.default,t=gn(e),n=t&&t.componentOptions;if(n){var r=Sr(n),o=this,i=o.include,s=o.exclude;if(i&&(!r||!Or(i,r))||s&&r&&Or(s,r))return t;var a=this,c=a.cache,u=a.keys,f=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;c[f]?(t.componentInstance=c[f].componentInstance,y(u,f),u.push(f)):(c[f]=t,u.push(f),this.max&&u.length>parseInt(this.max)&&kr(c,u[0],u,this._vnode)),t.data.keepAlive=!0}return t||e&&e[0]}},Cr={KeepAlive:Ir};function Mr(e){var t={get:function(){return q}};Object.defineProperty(e,"config",t),e.util={warn:ue,extend:T,mergeOptions:Fe,defineReactive:Me},e.set=$e,e.delete=Te,e.nextTick=ct,e.observable=function(e){return Ce(e),e},e.options=Object.create(null),B.forEach(function(t){e.options[t+"s"]=Object.create(null)}),e.options._base=e,T(e.options.components,Cr),_r(e),gr(e),yr(e),wr(e)}Mr(vr),Object.defineProperty(vr.prototype,"$isServer",{get:oe}),Object.defineProperty(vr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(vr,"FunctionalRenderContext",{value:Jt}),vr.version="2.6.11";var $r="[object Array]",Tr="[object Object]";function Nr(e,t){var n={};return Pr(e,t),Dr(e,t,"",n),n}function Pr(e,t){if(e!==t){var n=Rr(e),r=Rr(t);if(n==Tr&&r==Tr){if(Object.keys(e).length>=Object.keys(t).length)for(var o in t){var i=e[o];void 0===i?e[o]=null:Pr(i,t[o])}}else n==$r&&r==$r&&e.length>=t.length&&t.forEach(function(t,n){Pr(e[n],t)})}}function Dr(e,t,n,r){if(e!==t){var o=Rr(e),i=Rr(t);if(o==Tr)if(i!=Tr||Object.keys(e).length<Object.keys(t).length)xr(r,n,e);else{var s=function(o){var i=e[o],s=t[o],a=Rr(i),c=Rr(s);if(a!=$r&&a!=Tr)i!=t[o]&&xr(r,(""==n?"":n+".")+o,i);else if(a==$r)c!=$r?xr(r,(""==n?"":n+".")+o,i):i.length<s.length?xr(r,(""==n?"":n+".")+o,i):i.forEach(function(e,t){Dr(e,s[t],(""==n?"":n+".")+o+"["+t+"]",r)});else if(a==Tr)if(c!=Tr||Object.keys(i).length<Object.keys(s).length)xr(r,(""==n?"":n+".")+o,i);else for(var u in i)Dr(i[u],s[u],(""==n?"":n+".")+o+"."+u,r)};for(var a in e)s(a)}else o==$r?i!=$r?xr(r,n,e):e.length<t.length?xr(r,n,e):e.forEach(function(e,o){Dr(e,t[o],n+"["+o+"]",r)}):xr(r,n,e)}}function xr(e,t,n){e[t]=n}function Rr(e){return Object.prototype.toString.call(e)}function jr(e){if(e.__next_tick_callbacks&&e.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var t=e.$scope;console.log("["+ +new Date+"]["+(t.is||t.route)+"]["+e._uid+"]:flushCallbacks["+e.__next_tick_callbacks.length+"]")}var n=e.__next_tick_callbacks.slice(0);e.__next_tick_callbacks.length=0;for(var r=0;r<n.length;r++)n[r]()}}function Ur(e){return Pn.find(function(t){return e._watcher===t})}function Br(e,t){if(!e.__next_tick_pending&&!Ur(e)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var n=e.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+e._uid+"]:nextVueTick")}return ct(t,e)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var r=e.$scope;console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+e._uid+"]:nextMPTick")}var o;if(e.__next_tick_callbacks||(e.__next_tick_callbacks=[]),e.__next_tick_callbacks.push(function(){if(t)try{t.call(e)}catch(no){We(no,e,"nextTick")}else o&&o(e)}),!t&&"undefined"!==typeof Promise)return new Promise(function(e){o=e})}function Lr(e){var t=Object.create(null),n=[].concat(Object.keys(e._data||{}),Object.keys(e._computedWatchers||{}));return n.reduce(function(t,n){return t[n]=e[n],t},t),Object.assign(t,e.$mp.data||{}),Array.isArray(e.$options.behaviors)&&-1!==e.$options.behaviors.indexOf("uni://form-field")&&(t["name"]=e.name,t["value"]=e.value),JSON.parse(JSON.stringify(t))}var qr=function(e,t){var n=this;if(null!==t&&("page"===this.mpType||"component"===this.mpType)){var r=this.$scope,o=Object.create(null);try{o=Lr(this)}catch(a){console.error(a)}o.__webviewId__=r.data.__webviewId__;var i=Object.create(null);Object.keys(o).forEach(function(e){i[e]=r.data[e]});var s=Nr(o,i);Object.keys(s).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(s)),this.__next_tick_pending=!0,r.setData(s,function(){n.__next_tick_pending=!1,jr(n)})):jr(this)}};function Vr(){}function Fr(e,t,n){if(!e.mpType)return e;"app"===e.mpType&&(e.$options.render=Vr),e.$options.render||(e.$options.render=Vr),"mp-toutiao"!==e.mpHost&&Nn(e,"beforeMount");var r=function(){e._update(e._render(),n)};return new Qn(e,r,P,{before:function(){e._isMounted&&!e._isDestroyed&&Nn(e,"beforeUpdate")}},!0),n=!1,e}function Hr(e,t){return o(e)||o(t)?Jr(e,Kr(t)):""}function Jr(e,t){return e?t?e+" "+t:e:t||""}function Kr(e){return Array.isArray(e)?Gr(e):c(e)?Qr(e):"string"===typeof e?e:""}function Gr(e){for(var t,n="",r=0,i=e.length;r<i;r++)o(t=Kr(e[r]))&&""!==t&&(n&&(n+=" "),n+=t);return n}function Qr(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}var zr=w(function(e){var t={},n=/;(?![^(]*\))/g,r=/:(.+)/;return e.split(n).forEach(function(e){if(e){var n=e.split(r);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t});function Wr(e){return Array.isArray(e)?N(e):"string"===typeof e?zr(e):e}var Yr=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Xr(e,t){var n=t.split("."),r=n[0];return 0===r.indexOf("__$n")&&(r=parseInt(r.replace("__$n",""))),1===n.length?e[r]:Xr(e[r],n.slice(1).join("."))}function Zr(e){e.config.errorHandler=function(e){var t=getApp();t&&t.onError?t.onError(e):console.error(e)};var t=e.prototype.$emit;e.prototype.$emit=function(e){return this.$scope&&e&&this.$scope["triggerEvent"](e,{__args__:$(arguments,1)}),t.apply(this,arguments)},e.prototype.$nextTick=function(e){return Br(this,e)},Yr.forEach(function(t){e.prototype[t]=function(e){return this.$scope&&this.$scope[t]?this.$scope[t](e):"undefined"!==typeof my?"createSelectorQuery"===t?my.createSelectorQuery(e):"createIntersectionObserver"===t?my.createIntersectionObserver(e):void 0:void 0}}),e.prototype.__init_provide=St,e.prototype.__init_injections=Ot,e.prototype.__call_hook=function(e,t){var n=this;pe();var r,o=n.$options[e],i=e+" hook";if(o)for(var s=0,a=o.length;s<a;s++)r=Ye(o[s],n,t?[t]:null,n,i);return n._hasHookEvent&&n.$emit("hook:"+e,t),he(),r},e.prototype.__set_model=function(e,t,n,r){Array.isArray(r)&&(-1!==r.indexOf("trim")&&(n=n.trim()),-1!==r.indexOf("number")&&(n=this._n(n))),e||(e=this),e[t]=n},e.prototype.__set_sync=function(e,t,n){e||(e=this),e[t]=n},e.prototype.__get_orig=function(e){return f(e)&&e["$orig"]||e},e.prototype.__get_value=function(e,t){return Xr(t||this,e)},e.prototype.__get_class=function(e,t){return Hr(t,e)},e.prototype.__get_style=function(e,t){if(!e&&!t)return"";var n=Wr(e),r=t?T(t,n):n;return Object.keys(r).map(function(e){return E(e)+":"+r[e]}).join(";")},e.prototype.__map=function(e,t){var n,r,o,i,s;if(Array.isArray(e)){for(n=new Array(e.length),r=0,o=e.length;r<o;r++)n[r]=t(e[r],r);return n}if(c(e)){for(i=Object.keys(e),n=Object.create(null),r=0,o=i.length;r<o;r++)s=i[r],n[s]=t(e[s],s,r);return n}return[]}}var eo=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function to(e){var t=e.extend;e.extend=function(e){e=e||{};var n=e.methods;return n&&Object.keys(n).forEach(function(t){-1!==eo.indexOf(t)&&(e[t]=n[t],delete n[t])}),t.call(this,e)};var n=e.config.optionMergeStrategies,r=n.created;eo.forEach(function(e){n[e]=r}),e.prototype.__lifecycle_hooks__=eo}vr.prototype.__patch__=qr,vr.prototype.$mount=function(e,t){return Fr(this,e,t)},to(vr),Zr(vr),t["default"]=vr}.call(this,n("c8ba"))},"6e42":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.createApp=dt,t.createComponent=At,t.createPage=Ot,t.default=void 0;var r=o(n("66fd"));function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return c(e)||a(e,t)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function a(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done);r=!0)if(n.push(s.value),t&&n.length===t)break}catch(c){o=!0,i=c}finally{try{r||null==a["return"]||a["return"]()}finally{if(o)throw i}}return n}function c(e){if(Array.isArray(e))return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){return h(e)||p(e)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function h(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}var d=Object.prototype.toString,v=Object.prototype.hasOwnProperty;function _(e){return"function"===typeof e}function g(e){return"string"===typeof e}function y(e){return"[object Object]"===d.call(e)}function m(e,t){return v.call(e,t)}function b(){}function w(e){var t=Object.create(null);return function(n){var r=t[n];return r||(t[n]=e(n))}}var S=/-(\w)/g,O=w(function(e){return e.replace(S,function(e,t){return t?t.toUpperCase():""})}),A=["invoke","success","fail","complete","returnValue"],k={},E={};function I(e,t){var n=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return n?C(n):n}function C(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function M(e,t){var n=e.indexOf(t);-1!==n&&e.splice(n,1)}function $(e,t){Object.keys(t).forEach(function(n){-1!==A.indexOf(n)&&_(t[n])&&(e[n]=I(e[n],t[n]))})}function T(e,t){e&&t&&Object.keys(t).forEach(function(n){-1!==A.indexOf(n)&&_(t[n])&&M(e[n],t[n])})}function N(e,t){"string"===typeof e&&y(t)?$(E[e]||(E[e]={}),t):y(e)&&$(k,e)}function P(e,t){"string"===typeof e?y(t)?T(E[e],t):delete E[e]:y(e)&&T(k,e)}function D(e){return function(t){return e(t)||t}}function x(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then}function R(e,t){for(var n=!1,r=0;r<e.length;r++){var o=e[r];if(n)n=Promise.then(D(o));else{var i=o(t);if(x(i)&&(n=Promise.resolve(i)),!1===i)return{then:function(){}}}}return n||{then:function(e){return e(t)}}}function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(e[n])){var r=t[n];t[n]=function(t){R(e[n],t).then(function(e){return _(r)&&r(e)||e})}}}),t}function U(e,t){var n=[];Array.isArray(k.returnValue)&&n.push.apply(n,f(k.returnValue));var r=E[e];return r&&Array.isArray(r.returnValue)&&n.push.apply(n,f(r.returnValue)),n.forEach(function(e){t=e(t)||t}),t}function B(e){var t=Object.create(null);Object.keys(k).forEach(function(e){"returnValue"!==e&&(t[e]=k[e].slice())});var n=E[e];return n&&Object.keys(n).forEach(function(e){"returnValue"!==e&&(t[e]=(t[e]||[]).concat(n[e]))}),t}function L(e,t,n){for(var r=arguments.length,o=new Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];var s=B(e);if(s&&Object.keys(s).length){if(Array.isArray(s.invoke)){var a=R(s.invoke,n);return a.then(function(e){return t.apply(void 0,[j(s,e)].concat(o))})}return t.apply(void 0,[j(s,n)].concat(o))}return t.apply(void 0,[n].concat(o))}var q={returnValue:function(e){return x(e)?e.then(function(e){return e[1]}).catch(function(e){return e[0]}):e}},V=/^\$|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,F=/^create|Manager$/,H=/^on/;function J(e){return F.test(e)}function K(e){return V.test(e)}function G(e){return H.test(e)&&"onPush"!==e}function Q(e){return e.then(function(e){return[null,e]}).catch(function(e){return[e]})}function z(e){return!(J(e)||K(e)||G(e))}function W(e,t){return z(e)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return _(n.success)||_(n.fail)||_(n.complete)?U(e,L.apply(void 0,[e,t,n].concat(o))):U(e,Q(new Promise(function(r,i){L.apply(void 0,[e,t,Object.assign({},n,{success:r,fail:i})].concat(o)),Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){throw n})})})})))}:t}var Y=1e-4,X=750,Z=!1,ee=0,te=0;function ne(){var e=wx.getSystemInfoSync(),t=e.platform,n=e.pixelRatio,r=e.windowWidth;ee=r,te=n,Z="ios"===t}function re(e,t){if(0===ee&&ne(),e=Number(e),0===e)return 0;var n=e/X*(t||ee);return n<0&&(n=-n),n=Math.floor(n+Y),0===n?1!==te&&Z?.5:1:e<0?-n:n}var oe={promiseInterceptor:q},ie=Object.freeze({__proto__:null,upx2px:re,interceptors:oe,addInterceptor:N,removeInterceptor:P}),se={},ae=[],ce=[],ue=["success","fail","cancel","complete"];function fe(e,t,n){return function(r){return t(pe(e,r,n))}}function le(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(y(t)){var i=!0===o?t:{};for(var s in _(n)&&(n=n(t,i)||{}),t)if(m(n,s)){var a=n[s];_(a)&&(a=a(t[s],t,i)),a?g(a)?i[a]=t[s]:y(a)&&(i[a.name?a.name:s]=a.value):console.warn("app-plus ".concat(e,"暂不支持").concat(s))}else-1!==ue.indexOf(s)?i[s]=fe(e,t[s],r):o||(i[s]=t[s]);return i}return _(t)&&(t=fe(e,t,r)),t}function pe(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return _(se.returnValue)&&(t=se.returnValue(e,t)),le(e,t,n,{},r)}function he(e,t){if(m(se,e)){var n=se[e];return n?function(t,r){var o=n;_(n)&&(o=n(t)),t=le(e,t,o.args,o.returnValue);var i=[t];"undefined"!==typeof r&&i.push(r);var s=wx[o.name||e].apply(wx,i);return K(e)?pe(e,s,o.returnValue,J(e)):s}:function(){console.error("app-plus 暂不支持".concat(e))}}return t}var de=Object.create(null),ve=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function _e(e){return function(t){var n=t.fail,r=t.complete,o={errMsg:"".concat(e,":fail:暂不支持 ").concat(e," 方法")};_(n)&&n(o),_(r)&&r(o)}}ve.forEach(function(e){de[e]=_e(e)});var ge=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return e||(e=new r.default),e};var e}();function ye(e,t,n){return e[t].apply(e,n)}function me(){return ye(ge(),"$on",Array.prototype.slice.call(arguments))}function be(){return ye(ge(),"$off",Array.prototype.slice.call(arguments))}function we(){return ye(ge(),"$once",Array.prototype.slice.call(arguments))}function Se(){return ye(ge(),"$emit",Array.prototype.slice.call(arguments))}var Oe=Object.freeze({__proto__:null,$on:me,$off:be,$once:we,$emit:Se});function Ae(e){return"undefined"!==typeof weex?weex.requireModule(e):__requireNativePlugin__(e)}function ke(e){e.$processed=!0,e.postMessage=function(t){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:t},e.id)};var t=[];if(e.onMessage=function(e){t.push(e)},e.$consumeMessage=function(e){t.forEach(function(t){return t(e)})},e.__uniapp_mask_id){var n=e.__uniapp_mask,r="0"===e.__uniapp_mask_id?{setStyle:function(e){var t=e.mask;Ae("uni-tabview").setMask({color:t})}}:plus.webview.getWebviewById(e.__uniapp_mask_id),o=e.show,i=e.hide,s=e.close,a=function(){r.setStyle({mask:n})},c=function(){r.setStyle({mask:"none"})};e.show=function(){a();for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return o.apply(e,n)},e.hide=function(){c();for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return i.apply(e,n)},e.close=function(){c(),t=[];for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return s.apply(e,r)}}}function Ee(e){var t=plus.webview.getWebviewById(e);return t&&!t.$processed&&ke(t),t}var Ie=Object.freeze({__proto__:null,getSubNVueById:Ee,requireNativePlugin:Ae}),Ce=Page,Me=Component,$e=/:/g,Te=w(function(e){return O(e.replace($e,"-"))});function Ne(e){if(wx.canIUse("nextTick")){var t=e.triggerEvent;e.triggerEvent=function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return t.apply(e,[Te(n)].concat(o))}}}function Pe(e,t){var n=t[e];t[e]=n?function(){Ne(this);for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return n.apply(this,t)}:function(){Ne(this)}}Page=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Pe("onLoad",e),Ce(e)},Component=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Pe("created",e),Me(e)};var De=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function xe(e,t){var n=e.$mp[e.mpType];t.forEach(function(t){m(n,t)&&(e[t]=n[t])})}function Re(e,t){if(!t)return!0;if(r.default.options&&Array.isArray(r.default.options[e]))return!0;if(t=t.default||t,_(t))return!!_(t.extendOptions[e])||!!(t.super&&t.super.options&&Array.isArray(t.super.options[e]));if(_(t[e]))return!0;var n=t.mixins;return Array.isArray(n)?!!n.find(function(t){return Re(e,t)}):void 0}function je(e,t,n){t.forEach(function(t){Re(t,n)&&(e[t]=function(e){return this.$vm&&this.$vm.__call_hook(t,e)})})}function Ue(e,t){var n;return t=t.default||t,_(t)?(n=t,t=n.extendOptions):n=e.extend(t),[n,t]}function Be(e,t){if(Array.isArray(t)&&t.length){var n=Object.create(null);t.forEach(function(e){n[e]=!0}),e.$scopedSlots=e.$slots=n}}function Le(e,t){e=(e||"").split(",");var n=e.length;1===n?t._$vueId=e[0]:2===n&&(t._$vueId=e[0],t._$vuePid=e[1])}function qe(e,t){var n=e.data||{},r=e.methods||{};if("function"===typeof n)try{n=n.call(t)}catch(o){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(o){}return y(n)||(n={}),Object.keys(r).forEach(function(e){-1!==t.__lifecycle_hooks__.indexOf(e)||m(n,e)||(n[e]=r[e])}),n}var Ve=[String,Number,Boolean,Object,Array,null];function Fe(e){return function(t,n){this.$vm&&(this.$vm[e]=t)}}function He(e,t){var n=e["behaviors"],r=e["extends"],o=e["mixins"],i=e["props"];i||(e["props"]=i=[]);var s=[];return Array.isArray(n)&&n.forEach(function(e){s.push(e.replace("uni://","wx".concat("://"))),"uni://form-field"===e&&(Array.isArray(i)?(i.push("name"),i.push("value")):(i["name"]={type:String,default:""},i["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),y(r)&&r.props&&s.push(t({properties:Ke(r.props,!0)})),Array.isArray(o)&&o.forEach(function(e){y(e)&&e.props&&s.push(t({properties:Ke(e.props,!0)}))}),s}function Je(e,t,n,r){return Array.isArray(t)&&1===t.length?t[0]:t}function Ke(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return t||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(e,t){var n=Object.create(null);e.forEach(function(e){n[e]=!0}),this.setData({$slots:n})}}),Array.isArray(e)?e.forEach(function(e){n[e]={type:null,observer:Fe(e)}}):y(e)&&Object.keys(e).forEach(function(t){var r=e[t];if(y(r)){var o=r["default"];_(o)&&(o=o()),r.type=Je(t,r.type),n[t]={type:-1!==Ve.indexOf(r.type)?r.type:null,value:o,observer:Fe(t)}}else{var i=Je(t,r);n[t]={type:-1!==Ve.indexOf(i)?i:null,observer:Fe(t)}}}),n}function Ge(e){try{e.mp=JSON.parse(JSON.stringify(e))}catch(t){}return e.stopPropagation=b,e.preventDefault=b,e.target=e.target||{},m(e,"detail")||(e.detail={}),y(e.detail)&&(e.target=Object.assign({},e.target,e.detail)),e}function Qe(e,t){var n=e;return t.forEach(function(t){var r=t[0],o=t[2];if(r||"undefined"!==typeof o){var i=t[1],s=t[3],a=r?e.__get_value(r,n):n;Number.isInteger(a)?n=o:i?Array.isArray(a)?n=a.find(function(t){return e.__get_value(i,t)===o}):y(a)?n=Object.keys(a).find(function(t){return e.__get_value(i,a[t])===o}):console.error("v-for 暂不支持循环数据：",a):n=a[o],s&&(n=e.__get_value(s,n))}}),n}function ze(e,t,n){var r={};return Array.isArray(t)&&t.length&&t.forEach(function(t,o){"string"===typeof t?t?"$event"===t?r["$"+o]=n:0===t.indexOf("$event.")?r["$"+o]=e.__get_value(t.replace("$event.",""),n):r["$"+o]=e.__get_value(t):r["$"+o]=e:r["$"+o]=Qe(e,t)}),r}function We(e){for(var t={},n=1;n<e.length;n++){var r=e[n];t[r[0]]=r[1]}return t}function Ye(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,s=!1;if(o&&(s=t.currentTarget&&t.currentTarget.dataset&&"wx"===t.currentTarget.dataset.comType,!n.length))return s?[t]:t.detail.__args__||t.detail;var a=ze(e,r,t),c=[];return n.forEach(function(e){"$event"===e?"__set_model"!==i||o?o&&!s?c.push(t.detail.__args__[0]):c.push(t):c.push(t.target.value):Array.isArray(e)&&"o"===e[0]?c.push(We(e)):"string"===typeof e&&m(a,e)?c.push(a[e]):c.push(e)}),c}var Xe="~",Ze="^";function et(e,t){return e===t||"regionchange"===t&&("begin"===e||"end"===e)}function tt(e){var t=this;e=Ge(e);var n=(e.currentTarget||e.target).dataset;if(!n)return console.warn("事件信息不存在");var r=n.eventOpts||n["event-opts"];if(!r)return console.warn("事件信息不存在");var o=e.type,i=[];return r.forEach(function(n){var r=n[0],s=n[1],a=r.charAt(0)===Ze;r=a?r.slice(1):r;var c=r.charAt(0)===Xe;r=c?r.slice(1):r,s&&et(o,r)&&s.forEach(function(n){var r=n[0];if(r){var o=t.$vm;if(o.$options.generic&&o.$parent&&o.$parent.$parent&&(o=o.$parent.$parent),"$emit"===r)return void o.$emit.apply(o,Ye(t.$vm,e,n[1],n[2],a,r));var s=o[r];if(!_(s))throw new Error(" _vm.".concat(r," is not a function"));if(c){if(s.once)return;s.once=!0}i.push(s.apply(o,Ye(t.$vm,e,n[1],n[2],a,r)))}})}),"input"===o&&1===i.length&&"undefined"!==typeof i[0]?i[0]:void 0}var nt=["onShow","onHide","onError","onPageNotFound"];function rt(e,t){var n=t.mocks,o=t.initRefs;e.$options.store&&(r.default.prototype.$store=e.$options.store),r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=u({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(o(this),xe(this,n)))}});var i={onLaunch:function(t){this.$vm||(this.$vm=e,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",t),this.$vm.__call_hook("onLaunch",t))}};i.globalData=e.$options.globalData||{};var s=e.$options.methods;return s&&Object.keys(s).forEach(function(e){i[e]=s[e]}),je(i,nt),i}var ot=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function it(e,t){for(var n,r=e.$children,o=r.length-1;o>=0;o--){var i=r[o];if(i.$scope._$vueId===t)return i}for(var s=r.length-1;s>=0;s--)if(n=it(r[s],t),n)return n}function st(e){return Behavior(e)}function at(){return!!this.route}function ct(e){this.triggerEvent("__l",e)}function ut(e){var t=e.$scope;Object.defineProperty(e,"$refs",{get:function(){var e={},n=t.selectAllComponents(".vue-ref");n.forEach(function(t){var n=t.dataset.ref;e[n]=t.$vm||t});var r=t.selectAllComponents(".vue-ref-in-for");return r.forEach(function(t){var n=t.dataset.ref;e[n]||(e[n]=[]),e[n].push(t.$vm||t)}),e}})}function ft(e){var t,n=e.detail||e.value,r=n.vuePid,o=n.vueOptions;r&&(t=it(this.$vm,r)),t||(t=this.$vm),o.parent=t}function lt(e){return rt(e,{mocks:ot,initRefs:ut})}var pt=["onUniNViewMessage"];function ht(e){var t=lt(e);return je(t,pt),t}function dt(e){return App(ht(e)),e}function vt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.isPage,o=t.initRelation,s=Ue(r.default,e),a=i(s,2),c=a[0],u=a[1],f={multipleSlots:!0,addGlobalClass:!0},l={options:f,data:qe(u,r.default.prototype),behaviors:He(u,st),properties:Ke(u.props,!1,u.__file),lifetimes:{attached:function(){var e=this.properties,t={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:e};Le(e.vueId,this),o.call(this,{vuePid:this._$vuePid,vueOptions:t}),this.$vm=new c(t),Be(this.$vm,e.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm&&this.$vm.$destroy()}},pageLifetimes:{show:function(e){this.$vm&&this.$vm.__call_hook("onPageShow",e)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(e){this.$vm&&this.$vm.__call_hook("onPageResize",e)}},methods:{__l:ft,__e:tt}};return Array.isArray(u.wxsCallMethods)&&u.wxsCallMethods.forEach(function(e){l.methods[e]=function(t){return this.$vm[e](t)}}),n?l:[l,c]}function _t(e){return vt(e,{isPage:at,initRelation:ct})}function gt(e){var t=_t(e);return t.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},t}var yt=["onShow","onHide","onUnload"];function mt(e,t){t.isPage,t.initRelation;var n=gt(e);return je(n.methods,yt,e),n.methods.onLoad=function(e){this.$vm.$mp.query=e,this.$vm.__call_hook("onLoad",e)},n}function bt(e){return mt(e,{isPage:at,initRelation:ct})}yt.push.apply(yt,De);var wt=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function St(e){var t=bt(e);return je(t.methods,wt),t}function Ot(e){return Component(St(e))}function At(e){return Component(gt(e))}ae.forEach(function(e){se[e]=!1}),ce.forEach(function(e){var t=se[e]&&se[e].name?se[e].name:e;wx.canIUse(t)||(se[e]=!1)});var kt={};Object.keys(ie).forEach(function(e){kt[e]=ie[e]}),Object.keys(Oe).forEach(function(e){kt[e]=Oe[e]}),Object.keys(Ie).forEach(function(e){kt[e]=W(e,Ie[e])}),Object.keys(wx).forEach(function(e){(m(wx,e)||m(se,e))&&(kt[e]=W(e,he(e,wx[e])))}),"undefined"!==typeof e&&(e.uni=kt,e.UniEmitter=Oe),wx.createApp=dt,wx.createPage=Ot,wx.createComponent=At;var Et=kt,It=Et;t.default=It}).call(this,n("c8ba"))},8189:function(e){e.exports={_from:"@dcloudio/uni-stat@alpha",_id:"@dcloudio/uni-stat@2.0.0-alpha-25720200116005",_inBundle:!1,_integrity:"sha512-RZFw3WAaS/CZTzzv9JPaWvmoNitojD/06vPdHSzlqZi8GbuE222lFuyochEjrGkG8rPPrWHAnwfoPBuQVtkfdg==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@alpha",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"alpha",saveSpec:null,fetchSpec:"alpha"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-25720200116005.tgz",_shasum:"08bb17aba91c84a981f33d74153aa3dd07b578ad",_spec:"@dcloudio/uni-stat@alpha",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"a129bde60de35f7ef497f43d5a45b4556231995c",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-alpha-25720200116005"}},"921b":function(e,t,n){"use strict";(function(e){var t=n("8189");function r(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?o(e):t}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}function a(e,t){return a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(e,t)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}var l=t.version,p="https://tongji.dcloud.io/uni/stat",h="https://tongji.dcloud.io/uni/stat.gif",d=1800,v=300,_=10,g="__DC_STAT_UUID",y="__DC_UUID_VALUE";function m(){var t="";if("n"===O()){try{t=plus.runtime.getDCloudId()}catch(n){t=""}return t}try{t=e.getStorageSync(g)}catch(n){t=y}if(!t){t=Date.now()+""+Math.floor(1e7*Math.random());try{e.setStorageSync(g,t)}catch(n){e.setStorageSync(g,y)}}return t}var b=function(e){var t=Object.keys(e),n=t.sort(),r={},o="";for(var i in n)r[n[i]]=e[n[i]],o+=n[i]+"="+e[n[i]]+"&";return{sign:"",options:o.substr(0,o.length-1)}},w=function(e){var t="";for(var n in e)t+=n+"="+e[n]+"&";return t.substr(0,t.length-1)},S=function(){return parseInt((new Date).getTime()/1e3)},O=function(){var e={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return e["app-plus"]},A=function(){var t="";return"wx"!==O()&&"qq"!==O()||e.canIUse("getAccountInfoSync")&&(t=e.getAccountInfoSync().miniProgram.appId||""),t},k=function(){return"n"===O()?plus.runtime.version:""},E=function(){var e=O(),t="";return"n"===e&&(t=plus.runtime.channel),t},I=function(t){var n=O(),r="";return t||("wx"===n&&(r=e.getLaunchOptionsSync().scene),r)},C="First__Visit__Time",M="Last__Visit__Time",$=function(){var t=e.getStorageSync(C),n=0;return t?n=t:(n=S(),e.setStorageSync(C,n),e.removeStorageSync(M)),n},T=function(){var t=e.getStorageSync(M),n=0;return n=t||"",e.setStorageSync(M,S()),n},N="__page__residence__time",P=0,D=0,x=function(){return P=S(),"n"===O()&&e.setStorageSync(N,S()),P},R=function(){return D=S(),"n"===O()&&(P=e.getStorageSync(N)),D-P},j="Total__Visit__Count",U=function(){var t=e.getStorageSync(j),n=1;return t&&(n=t,n++),e.setStorageSync(j,n),n},B=function(e){var t={};for(var n in e)t[n]=encodeURIComponent(e[n]);return t},L=0,q=0,V=function(){var e=(new Date).getTime();return L=e,q=0,e},F=function(){var e=(new Date).getTime();return q=e,e},H=function(e){var t=0;if(0!==L&&(t=q-L),t=parseInt(t/1e3),t=t<1?1:t,"app"===e){var n=t>v;return{residenceTime:t,overtime:n}}if("page"===e){var r=t>d;return{residenceTime:t,overtime:r}}return{residenceTime:t}},J=function(){var e=getCurrentPages(),t=e[e.length-1],n=t.$vm;return"bd"===O()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},K=function(e){var t=getCurrentPages(),n=t[t.length-1],r=n.$vm,o=e._query,i=o&&"{}"!==JSON.stringify(o)?"?"+JSON.stringify(o):"";return e._query="","bd"===O()?r.$mp&&r.$mp.page.is+i:r.$scope&&r.$scope.route+i||r.$mp&&r.$mp.page.route+i},G=function(e){return!!("page"===e.mpType||e.$mp&&"page"===e.$mp.mpType||"page"===e.$options.mpType)},Q=function(e,t){return e?"string"!==typeof e?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):e.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof t&&"object"!==typeof t?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof t&&t.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===e&&"string"!==typeof t?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},z=n("5324").default,W=n("be41").default||n("be41"),Y=e.getSystemInfoSync(),X=function(){function t(){c(this,t),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:m(),ut:O(),mpn:A(),ak:W.appid,usv:l,v:k(),ch:E(),cn:"",pn:"",ct:"",t:S(),tt:"",p:"android"===Y.platform?"a":"i",brand:Y.brand||"",md:Y.model,sv:Y.system.replace(/(Android|iOS)\s/,""),mpsdk:Y.SDKVersion||"",mpv:Y.version||"",lang:Y.language,pr:Y.pixelRatio,ww:Y.windowWidth,wh:Y.windowHeight,sw:Y.screenWidth,sh:Y.screenHeight}}return f(t,[{key:"_applicationShow",value:function(){if(this.__licationHide){F();var e=H("app");if(e.overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(e,t){this.__licationHide=!0,F();var n=H();V();var r=K(this);this._sendHideRequest({urlref:r,urlref_ts:n.residenceTime},t)}},{key:"_pageShow",value:function(){var e=K(this),t=J();if(this._navigationBarTitle.config=z&&z.pages[t]&&z.pages[t].titleNView&&z.pages[t].titleNView.titleText||z&&z.pages[t]&&z.pages[t].navigationBarTitleText||"",this.__licationShow)return V(),this.__licationShow=!1,void(this._lastPageRoute=e);F(),this._lastPageRoute=e;var n=H("page");if(n.overtime){var r={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(r)}V()}},{key:"_pageHide",value:function(){if(!this.__licationHide){F();var e=H("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:e.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(e){this._sendEventRequest({key:e},0)}},{key:"_sendReportRequest",value:function(e){this._navigationBarTitle.lt="1";var t=e.query&&"{}"!==JSON.stringify(e.query)?"?"+JSON.stringify(e.query):"";this.statData.lt="1",this.statData.url=e.path+t||"",this.statData.t=S(),this.statData.sc=I(e.scene),this.statData.fvts=$(),this.statData.lvts=T(),this.statData.tvc=U(),"n"===O()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(e){var t=e.url,n=e.urlref,r=e.urlref_ts;this._navigationBarTitle.lt="11";var o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:t,tt:this.statData.tt,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:S(),p:this.statData.p};this.request(o)}},{key:"_sendHideRequest",value:function(e,t){var n=e.urlref,r=e.urlref_ts,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:S(),p:this.statData.p};this.request(o,t)}},{key:"_sendEventRequest",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.key,n=void 0===t?"":t,r=e.value,o=void 0===r?"":r,i=this._lastPageRoute,s={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:i,ch:this.statData.ch,e_n:n,e_v:"object"===typeof o?JSON.stringify(o):o.toString(),usv:this.statData.usv,t:S(),p:this.statData.p};this.request(s)}},{key:"getNetworkInfo",value:function(){var t=this;e.getNetworkType({success:function(e){t.statData.net=e.networkType,t.getLocation()}})}},{key:"getProperty",value:function(){var e=this;plus.runtime.getProperty(plus.runtime.appid,function(t){e.statData.v=t.version||"",e.getNetworkInfo()})}},{key:"getLocation",value:function(){var t=this;W.getLocation?e.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(t.statData.cn=e.address.country,t.statData.pn=e.address.province,t.statData.ct=e.address.city),t.statData.lat=e.latitude,t.statData.lng=e.longitude,t.request(t.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(t,n){var r=this,o=S(),i=this._navigationBarTitle;t.ttn=i.page,t.ttpj=i.config,t.ttc=i.report;var s=this._reportingRequestData;if("n"===O()&&(s=e.getStorageSync("__UNI__STAT__DATA")||{}),s[t.lt]||(s[t.lt]=[]),s[t.lt].push(t),"n"===O()&&e.setStorageSync("__UNI__STAT__DATA",s),!(R()<_)||n){var a=this._reportingRequestData;"n"===O()&&(a=e.getStorageSync("__UNI__STAT__DATA")),x();var c=[],u=[],f=[],p=function(e){var t=a[e];t.forEach(function(t){var n=w(t);0===e?c.push(n):3===e?f.push(n):u.push(n)})};for(var h in a)p(h);c.push.apply(c,u.concat(f));var d={usv:l,t:o,requests:JSON.stringify(c)};this._reportingRequestData={},"n"===O()&&e.removeStorageSync("__UNI__STAT__DATA"),"h5"!==t.ut?"n"!==O()||"a"!==this.statData.p?this._sendRequest(d):setTimeout(function(){r._sendRequest(d)},200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(t){var n=this;e.request({url:p,method:"POST",data:t,success:function(){},fail:function(e){++n._retry<3&&setTimeout(function(){n._sendRequest(t)},1e3)}})}},{key:"imageRequest",value:function(e){var t=new Image,n=b(B(e)).options;t.src=h+"?"+n}},{key:"sendEvent",value:function(e,t){Q(e,t)||("title"!==e?this._sendEventRequest({key:e,value:"object"===typeof t?JSON.stringify(t):t},1):this._navigationBarTitle.report=t)}}]),t}(),Z=function(t){function n(){var t;return c(this,n),t=r(this,i(n).call(this)),t.instance=null,"function"===typeof e.addInterceptor&&(t.addInterceptorInit(),t.interceptLogin(),t.interceptShare(!0),t.interceptRequestPayment()),t}return s(n,t),f(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),f(n,[{key:"addInterceptorInit",value:function(){var t=this;e.addInterceptor("setNavigationBarTitle",{invoke:function(e){t._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var t=this;e.addInterceptor("login",{complete:function(){t._login()}})}},{key:"interceptShare",value:function(t){var n=this;t?e.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var t=this;e.addInterceptor("requestPayment",{success:function(){t._payment("pay_success")},fail:function(){t._payment("pay_fail")}})}},{key:"report",value:function(e,t){this.self=t,x(),this.__licationShow=!0,this._sendReportRequest(e,!0)}},{key:"load",value:function(e,t){if(!t.$scope&&!t.$mp){var n=getCurrentPages();t.$scope=n[n.length-1]}this.self=t,this._query=e}},{key:"show",value:function(e){this.self=e,G(e)?this._pageShow(e):this._applicationShow(e)}},{key:"ready",value:function(e){}},{key:"hide",value:function(e){this.self=e,G(e)?this._pageHide(e):this._applicationHide(e,!0)}},{key:"error",value:function(e){this._platform;var t="";t=e.message?e.stack:JSON.stringify(e);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:t,usv:this.statData.usv,t:S(),p:this.statData.p};this.request(n)}}]),n}(X),ee=Z.getInstance(),te=!1,ne={onLaunch:function(e){ee.report(e,this)},onReady:function(){ee.ready(this)},onLoad:function(e){if(ee.load(e,this),this.$scope&&this.$scope.onShareAppMessage){var t=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(e){return ee.interceptShare(!1),t.call(this,e)}}},onShow:function(){te=!1,ee.show(this)},onHide:function(){te=!0,ee.hide(this)},onUnload:function(){te?te=!1:ee.hide(this)},onError:function(e){ee.error(e)}};function re(){var t=n("66fd");(t.default||t).mixin(ne),e.report=function(e,t){ee.sendEvent(e,t)}}re()}).call(this,n("6e42")["default"])},be41:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={appid:"__UNI__B1CF20D"};t.default=r},c388:function(e,t,n){"use strict";(function(t,r){var o=i(n("c549"));function i(e){return e&&e.__esModule?e:{default:e}}(function(t,n){e.exports=n()})(0,function(){var e=function(e){var t="@VERSION@",n={CONNECT:1,CONNACK:2,PUBLISH:3,PUBACK:4,PUBREC:5,PUBREL:6,PUBCOMP:7,SUBSCRIBE:8,SUBACK:9,UNSUBSCRIBE:10,UNSUBACK:11,PINGREQ:12,PINGRESP:13,DISCONNECT:14},i=function(e,t){for(var n in e)if(e.hasOwnProperty(n)){if(!t.hasOwnProperty(n)){var r="Unknown property, "+n+". Valid properties are:";for(var n in t)t.hasOwnProperty(n)&&(r=r+" "+n);throw new Error(r)}if(typeof e[n]!==t[n])throw new Error(u(a.INVALID_TYPE,[typeof e[n],n]))}},s=function(e,t){return function(){return e.apply(t,arguments)}},a={OK:{code:0,text:"AMQJSC0000I OK."},CONNECT_TIMEOUT:{code:1,text:"AMQJSC0001E Connect timed out."},SUBSCRIBE_TIMEOUT:{code:2,text:"AMQJS0002E Subscribe timed out."},UNSUBSCRIBE_TIMEOUT:{code:3,text:"AMQJS0003E Unsubscribe timed out."},PING_TIMEOUT:{code:4,text:"AMQJS0004E Ping timed out."},INTERNAL_ERROR:{code:5,text:"AMQJS0005E Internal error. Error Message: {0}, Stack trace: {1}"},CONNACK_RETURNCODE:{code:6,text:"AMQJS0006E Bad Connack return code:{0} {1}."},SOCKET_ERROR:{code:7,text:"AMQJS0007E Socket error:{0}."},SOCKET_CLOSE:{code:8,text:"AMQJS0008I Socket closed."},MALFORMED_UTF:{code:9,text:"AMQJS0009E Malformed UTF data:{0} {1} {2}."},UNSUPPORTED:{code:10,text:"AMQJS0010E {0} is not supported by this browser."},INVALID_STATE:{code:11,text:"AMQJS0011E Invalid state {0}."},INVALID_TYPE:{code:12,text:"AMQJS0012E Invalid type {0} for {1}."},INVALID_ARGUMENT:{code:13,text:"AMQJS0013E Invalid argument {0} for {1}."},UNSUPPORTED_OPERATION:{code:14,text:"AMQJS0014E Unsupported operation."},INVALID_STORED_DATA:{code:15,text:"AMQJS0015E Invalid data in local storage key={0} value={1}."},INVALID_MQTT_MESSAGE_TYPE:{code:16,text:"AMQJS0016E Invalid MQTT message type {0}."},MALFORMED_UNICODE:{code:17,text:"AMQJS0017E Malformed Unicode string:{0} {1}."},BUFFER_FULL:{code:18,text:"AMQJS0018E Message buffer is full, maximum buffer size: {0}."}},c={0:"Connection Accepted",1:"Connection Refused: unacceptable protocol version",2:"Connection Refused: identifier rejected",3:"Connection Refused: server unavailable",4:"Connection Refused: bad user name or password",5:"Connection Refused: not authorized"},u=function(e,t){var n=e.text;if(t)for(var r,o,i=0;i<t.length;i++)if(r="{"+i+"}",o=n.indexOf(r),o>0){var s=n.substring(0,o),a=n.substring(o+r.length);n=s+t[i]+a}return n},f=[0,6,77,81,73,115,100,112,3],l=[0,4,77,81,84,84,4],p=function(e,t){for(var n in this.type=e,t)t.hasOwnProperty(n)&&(this[n]=t[n])};function h(e,t){var r,o=t,i=e[t],s=i>>4,a=i&=15;t+=1;var c=0,u=1;do{if(t==e.length)return[null,o];r=e[t++],c+=(127&r)*u,u*=128}while(0!=(128&r));var f=t+c;if(f>e.length)return[null,o];var l=new p(s);switch(s){case n.CONNACK:var h=e[t++];1&h&&(l.sessionPresent=!0),l.returnCode=e[t++];break;case n.PUBLISH:var d=a>>1&3,v=_(e,t);t+=2;var g=b(e,t,v);t+=v,d>0&&(l.messageIdentifier=_(e,t),t+=2);var y=new k(e.subarray(t,f));1==(1&a)&&(y.retained=!0),8==(8&a)&&(y.duplicate=!0),y.qos=d,y.destinationName=g,l.payloadMessage=y;break;case n.PUBACK:case n.PUBREC:case n.PUBREL:case n.PUBCOMP:case n.UNSUBACK:l.messageIdentifier=_(e,t);break;case n.SUBACK:l.messageIdentifier=_(e,t),t+=2,l.returnCode=e.subarray(t,f);break;default:}return[l,f]}function d(e,t,n){return t[n++]=e>>8,t[n++]=e%256,n}function v(e,t,n,r){return r=d(t,n,r),m(e,n,r),r+t}function _(e,t){return 256*e[t]+e[t+1]}function g(e){var t=new Array(1),n=0;do{var r=e%128;e>>=7,e>0&&(r|=128),t[n++]=r}while(e>0&&n<4);return t}function y(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r>2047?(55296<=r&&r<=56319&&(n++,t++),t+=3):r>127?t+=2:t++}return t}function m(e,t,n){for(var r=n,o=0;o<e.length;o++){var i=e.charCodeAt(o);if(55296<=i&&i<=56319){var s=e.charCodeAt(++o);if(isNaN(s))throw new Error(u(a.MALFORMED_UNICODE,[i,s]));i=s-56320+(i-55296<<10)+65536}i<=127?t[r++]=i:i<=2047?(t[r++]=i>>6&31|192,t[r++]=63&i|128):i<=65535?(t[r++]=i>>12&15|224,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>18&7|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t}function b(e,t,n){var r,o="",i=t;while(i<t+n){var s=e[i++];if(s<128)r=s;else{var c=e[i++]-128;if(c<0)throw new Error(u(a.MALFORMED_UTF,[s.toString(16),c.toString(16),""]));if(s<224)r=64*(s-192)+c;else{var f=e[i++]-128;if(f<0)throw new Error(u(a.MALFORMED_UTF,[s.toString(16),c.toString(16),f.toString(16)]));if(s<240)r=4096*(s-224)+64*c+f;else{var l=e[i++]-128;if(l<0)throw new Error(u(a.MALFORMED_UTF,[s.toString(16),c.toString(16),f.toString(16),l.toString(16)]));if(!(s<248))throw new Error(u(a.MALFORMED_UTF,[s.toString(16),c.toString(16),f.toString(16),l.toString(16)]));r=262144*(s-240)+4096*c+64*f+l}}}r>65535&&(r-=65536,o+=String.fromCharCode(55296+(r>>10)),r=56320+(1023&r)),o+=String.fromCharCode(r)}return o}p.prototype.encode=function(){var e=(15&this.type)<<4,t=0,r=new Array,o=0;switch(void 0!=this.messageIdentifier&&(t+=2),this.type){case n.CONNECT:switch(this.mqttVersion){case 3:t+=f.length+3;break;case 4:t+=l.length+3;break}if(t+=y(this.clientId)+2,void 0!=this.willMessage){t+=y(this.willMessage.destinationName)+2;var i=this.willMessage.payloadBytes;i instanceof Uint8Array||(i=new Uint8Array(a)),t+=i.byteLength+2}void 0!=this.userName&&(t+=y(this.userName)+2),void 0!=this.password&&(t+=y(this.password)+2);break;case n.SUBSCRIBE:e|=2;for(var s=0;s<this.topics.length;s++)r[s]=y(this.topics[s]),t+=r[s]+2;t+=this.requestedQos.length;break;case n.UNSUBSCRIBE:e|=2;for(s=0;s<this.topics.length;s++)r[s]=y(this.topics[s]),t+=r[s]+2;break;case n.PUBREL:e|=2;break;case n.PUBLISH:this.payloadMessage.duplicate&&(e|=8),e=e|=this.payloadMessage.qos<<1,this.payloadMessage.retained&&(e|=1),o=y(this.payloadMessage.destinationName),t+=o+2;var a=this.payloadMessage.payloadBytes;t+=a.byteLength,a instanceof ArrayBuffer?a=new Uint8Array(a):a instanceof Uint8Array||(a=new Uint8Array(a.buffer));break;case n.DISCONNECT:break;default:}var c=g(t),u=c.length+1,p=new ArrayBuffer(t+u),h=new Uint8Array(p);if(h[0]=e,h.set(c,1),this.type==n.PUBLISH)u=v(this.payloadMessage.destinationName,o,h,u);else if(this.type==n.CONNECT){switch(this.mqttVersion){case 3:h.set(f,u),u+=f.length;break;case 4:h.set(l,u),u+=l.length;break}var _=0;this.cleanSession&&(_=2),void 0!=this.willMessage&&(_|=4,_|=this.willMessage.qos<<3,this.willMessage.retained&&(_|=32)),void 0!=this.userName&&(_|=128),void 0!=this.password&&(_|=64),h[u++]=_,u=d(this.keepAliveInterval,h,u)}switch(void 0!=this.messageIdentifier&&(u=d(this.messageIdentifier,h,u)),this.type){case n.CONNECT:u=v(this.clientId,y(this.clientId),h,u),void 0!=this.willMessage&&(u=v(this.willMessage.destinationName,y(this.willMessage.destinationName),h,u),u=d(i.byteLength,h,u),h.set(i,u),u+=i.byteLength),void 0!=this.userName&&(u=v(this.userName,y(this.userName),h,u)),void 0!=this.password&&(u=v(this.password,y(this.password),h,u));break;case n.PUBLISH:h.set(a,u);break;case n.SUBSCRIBE:for(s=0;s<this.topics.length;s++)u=v(this.topics[s],r[s],h,u),h[u++]=this.requestedQos[s];break;case n.UNSUBSCRIBE:for(s=0;s<this.topics.length;s++)u=v(this.topics[s],r[s],h,u);break;default:}return p};var w=function(e,t,r){this._client=e,this._window=t,this._keepAliveInterval=1e3*r,this.isReset=!1;var i=new p(n.PINGREQ).encode(),s=function(e){return function(){return c.apply(e)}},c=function(){this.isReset?(this.isReset=!1,this._client._trace("Pinger.doPing","send PINGREQ"),o.default.sendSocketMessage({data:i,success:function(){},fail:function(){},complete:function(){}}),this.timeout=setTimeout(s(this),this._keepAliveInterval)):(this._client._trace("Pinger.doPing","Timed out"),this._client._disconnected(a.PING_TIMEOUT.code,u(a.PING_TIMEOUT)))};this.reset=function(){this.isReset=!0,clearTimeout(this.timeout),this._keepAliveInterval>0&&(this.timeout=setTimeout(s(this),this._keepAliveInterval))},this.cancel=function(){clearTimeout(this.timeout)}},S=function(e,t,n,r,o){this._window=t,n||(n=30);var i=function(e,t,n){return function(){return e.apply(t,n)}};this.timeout=setTimeout(i(r,e,o),1e3*n),this.cancel=function(){clearTimeout(this.timeout)}},O=function(e,t,n,o,i){this._trace("Paho.MQTT.Client",e,t,n,o,i),this.host=t,this.port=n,this.path=o,this.uri=e,this.clientId=i,this._wsuri=null,this._localKey=t+":"+n+("/mqtt"!=o?":"+o:"")+":"+i+":",this._msg_queue=[],this._buffered_msg_queue=[],this._sentMessages={},this._receivedMessages={},this._notify_msg_sent={},this._message_identifier=1,this._sequence=0;var s=r.getStorageInfoSync();for(var a in s.keys)0!=a.indexOf("Sent:"+this._localKey)&&0!=a.indexOf("Received:"+this._localKey)||this.restore(a)};O.prototype.host,O.prototype.port,O.prototype.path,O.prototype.uri,O.prototype.clientId,O.prototype.socket,O.prototype.connected=!1,O.prototype.maxMessageIdentifier=65536,O.prototype.connectOptions,O.prototype.hostIndex,O.prototype.onConnected,O.prototype.onConnectionLost,O.prototype.onMessageDelivered,O.prototype.onMessageArrived,O.prototype.traceFunction,O.prototype._msg_queue=null,O.prototype._buffered_msg_queue=null,O.prototype._connectTimeout,O.prototype.sendPinger=null,O.prototype.receivePinger=null,O.prototype._reconnectInterval=0,O.prototype._reconnecting=!1,O.prototype._reconnectTimeout=null,O.prototype.disconnectedPublishing=!1,O.prototype.disconnectedBufferSize=5e3,O.prototype.receiveBuffer=null,O.prototype._traceBuffer=null,O.prototype._MAX_TRACE_ENTRIES=100,O.prototype.connect=function(e){var t=this._traceMask(e,"password");if(this._trace("Client.connect",t,this.socket,this.connected),this.connected)throw new Error(u(a.INVALID_STATE,["already connected"]));if(this.socket)throw new Error(u(a.INVALID_STATE,["already connected"]));this._reconnecting&&(this._reconnectTimeout.cancel(),this._reconnectTimeout=null,this._reconnecting=!1),this.connectOptions=e,this._reconnectInterval=0,this._reconnecting=!1,e.uris?(this.hostIndex=0,this._doConnect(e.uris[0])):this._doConnect(this.uri)},O.prototype.subscribe=function(e,t){if(this._trace("Client.subscribe",e,t),!this.connected)throw new Error(u(a.INVALID_STATE,["not connected"]));var r=new p(n.SUBSCRIBE);r.topics=[e],void 0!=t.qos?r.requestedQos=[t.qos]:r.requestedQos=[0],t.onSuccess&&(r.onSuccess=function(e){t.onSuccess({invocationContext:t.invocationContext,grantedQos:e})}),t.onFailure&&(r.onFailure=function(e){t.onFailure({invocationContext:t.invocationContext,errorCode:e})}),t.timeout&&(r.timeOut=new S(this,window,t.timeout,t.onFailure,[{invocationContext:t.invocationContext,errorCode:a.SUBSCRIBE_TIMEOUT.code,errorMessage:u(a.SUBSCRIBE_TIMEOUT)}])),this._requires_ack(r),this._schedule_message(r)},O.prototype.unsubscribe=function(e,t){if(this._trace("Client.unsubscribe",e,t),!this.connected)throw new Error(u(a.INVALID_STATE,["not connected"]));var r=new p(n.UNSUBSCRIBE);r.topics=[e],t.onSuccess&&(r.callback=function(){t.onSuccess({invocationContext:t.invocationContext})}),t.timeout&&(r.timeOut=new S(this,window,t.timeout,t.onFailure,[{invocationContext:t.invocationContext,errorCode:a.UNSUBSCRIBE_TIMEOUT.code,errorMessage:u(a.UNSUBSCRIBE_TIMEOUT)}])),this._requires_ack(r),this._schedule_message(r)},O.prototype.send=function(e){if(this._trace("Client.send",e),!this.connected)throw new Error(u(a.INVALID_STATE,["not connected"]));var t=new p(n.PUBLISH);if(t.payloadMessage=e,this.connected)e.qos>0?this._requires_ack(t):this.onMessageDelivered&&(this._notify_msg_sent[t]=this.onMessageDelivered(t.payloadMessage)),this._schedule_message(t);else{if(!this._reconnecting||!this.disconnectedPublishing)throw new Error(u(a.INVALID_STATE,["not connected"]));var r=Object.keys(this._sentMessages).length+this._buffered_msg_queue.length;if(r>this.disconnectedBufferSize)throw new Error(u(a.BUFFER_FULL,[this.disconnectedBufferSize]));e.qos>0?this._requires_ack(t):(t.sequence=++this._sequence,this._buffered_msg_queue.push(t))}},O.prototype.disconnect=function(){if(this._trace("Client.disconnect"),this._reconnecting&&(this._reconnectTimeout.cancel(),this._reconnectTimeout=null,this._reconnecting=!1),!this.socket)throw new Error(u(a.INVALID_STATE,["not connecting or connected"]));var e=new p(n.DISCONNECT);this._notify_msg_sent[e]=s(this._disconnected,this),this._schedule_message(e)},O.prototype.getTraceLog=function(){if(null!==this._traceBuffer){for(var e in this._trace("Client.getTraceLog",new Date),this._trace("Client.getTraceLog in flight messages",this._sentMessages.length),this._sentMessages)this._trace("_sentMessages ",e,this._sentMessages[e]);for(var e in this._receivedMessages)this._trace("_receivedMessages ",e,this._receivedMessages[e]);return this._traceBuffer}},O.prototype.startTrace=function(){null===this._traceBuffer&&(this._traceBuffer=[]),this._trace("Client.startTrace",new Date,t)},O.prototype.stopTrace=function(){delete this._traceBuffer},O.prototype._doConnect=function(e){if(this.connectOptions.useSSL){var t=e.split(":");t[0]="wss",e=t.join(":")}this._wsuri=e,this.connected=!1,this._reconnecting&&(this._reconnectTimeout=new S(this,window,this._reconnectInterval,this._reconnect)),this.socket=o.default.connectSocket({url:e,protocols:["mqtt"],complete:function(){}}),o.default.onSocketOpen(s(this._on_socket_open,this)),o.default.onSocketMessage(s(this._on_socket_message,this)),o.default.onSocketError(s(this._on_socket_error,this)),o.default.onSocketClose(s(this._on_socket_close,this)),this.sendPinger=new w(this,window,this.connectOptions.keepAliveInterval),this.receivePinger=new w(this,window,this.connectOptions.keepAliveInterval),this._connectTimeout&&(this._connectTimeout.cancel(),this._connectTimeout=null),this._connectTimeout=new S(this,window,this.connectOptions.timeout,this._disconnected,[a.CONNECT_TIMEOUT.code,u(a.CONNECT_TIMEOUT)])},O.prototype._schedule_message=function(e){this._msg_queue.push(e),this.connected&&this._process_queue()},O.prototype.store=function(e,t){var o={type:t.type,messageIdentifier:t.messageIdentifier,version:1};switch(t.type){case n.PUBLISH:t.pubRecReceived&&(o.pubRecReceived=!0),o.payloadMessage={};for(var i="",s=t.payloadMessage.payloadBytes,c=0;c<s.length;c++)s[c]<=15?i=i+"0"+s[c].toString(16):i+=s[c].toString(16);o.payloadMessage.payloadHex=i,o.payloadMessage.qos=t.payloadMessage.qos,o.payloadMessage.destinationName=t.payloadMessage.destinationName,t.payloadMessage.duplicate&&(o.payloadMessage.duplicate=!0),t.payloadMessage.retained&&(o.payloadMessage.retained=!0),0==e.indexOf("Sent:")&&(void 0===t.sequence&&(t.sequence=++this._sequence),o.sequence=t.sequence);break;default:throw Error(u(a.INVALID_STORED_DATA,[key,o]))}r.setStorageSync(e+this._localKey+t.messageIdentifier,JSON.stringify(o))},O.prototype.restore=function(e){var t=r.getStorageSync(e),o=JSON.parse(t),i=new p(o.type,o);switch(o.type){case n.PUBLISH:var s=o.payloadMessage.payloadHex,c=new ArrayBuffer(s.length/2),f=new Uint8Array(c),l=0;while(s.length>=2){var h=parseInt(s.substring(0,2),16);s=s.substring(2,s.length),f[l++]=h}var d=new k(f);d.qos=o.payloadMessage.qos,d.destinationName=o.payloadMessage.destinationName,o.payloadMessage.duplicate&&(d.duplicate=!0),o.payloadMessage.retained&&(d.retained=!0),i.payloadMessage=d;break;default:throw Error(u(a.INVALID_STORED_DATA,[e,t]))}0==e.indexOf("Sent:"+this._localKey)?(i.payloadMessage.duplicate=!0,this._sentMessages[i.messageIdentifier]=i):0==e.indexOf("Received:"+this._localKey)&&(this._receivedMessages[i.messageIdentifier]=i)},O.prototype._process_queue=function(){var e=null,t=this._msg_queue.reverse();while(e=t.pop())this._socket_send(e),this._notify_msg_sent[e]&&(this._notify_msg_sent[e](),delete this._notify_msg_sent[e])},O.prototype._requires_ack=function(e){var t=Object.keys(this._sentMessages).length;if(t>this.maxMessageIdentifier)throw Error("Too many messages:"+t);while(void 0!==this._sentMessages[this._message_identifier])this._message_identifier++;e.messageIdentifier=this._message_identifier,this._sentMessages[e.messageIdentifier]=e,e.type===n.PUBLISH&&this.store("Sent:",e),this._message_identifier===this.maxMessageIdentifier&&(this._message_identifier=1)},O.prototype._on_socket_open=function(){var e=new p(n.CONNECT,this.connectOptions);e.clientId=this.clientId,this._socket_send(e)},O.prototype._on_socket_message=function(e){this._trace("Client._on_socket_message",e.data),this.receivePinger.reset();for(var t=this._deframeMessages(e.data),n=0;n<t.length;n+=1)this._handleMessage(t[n])},O.prototype._deframeMessages=function(e){var t=new Uint8Array(e);if(this.receiveBuffer){var n=new Uint8Array(this.receiveBuffer.length+t.length);n.set(this.receiveBuffer),n.set(t,this.receiveBuffer.length),t=n,delete this.receiveBuffer}try{var r=0,o=[];while(r<t.length){var i=h(t,r),s=i[0];if(r=i[1],null===s)break;o.push(s)}r<t.length&&(this.receiveBuffer=t.subarray(r))}catch(c){return void this._disconnected(a.INTERNAL_ERROR.code,u(a.INTERNAL_ERROR,[c.message,c.stack.toString()]))}return o},O.prototype._handleMessage=function(e){this._trace("Client._handleMessage",e);try{switch(e.type){case n.CONNACK:if(this._connectTimeout.cancel(),this._reconnectTimeout&&this._reconnectTimeout.cancel(),this.connectOptions.cleanSession){for(var t in this._sentMessages){var o=this._sentMessages[t];r.setStorageSync("Sent:"+this._localKey+o.messageIdentifier)}for(var t in this._sentMessages={},this._receivedMessages){var i=this._receivedMessages[t];r.setStorageSync("Received:"+this._localKey+i.messageIdentifier)}this._receivedMessages={}}if(0!==e.returnCode){this._disconnected(a.CONNACK_RETURNCODE.code,u(a.CONNACK_RETURNCODE,[e.returnCode,c[e.returnCode]]));break}this.connected=!0,this.connectOptions.uris&&(this.hostIndex=this.connectOptions.uris.length);var s=new Array;for(var f in this._sentMessages)this._sentMessages.hasOwnProperty(f)&&s.push(this._sentMessages[f]);if(this._buffered_msg_queue.length>0){var l=null,h=this._buffered_msg_queue.reverse();while(l=h.pop())s.push(l),this.onMessageDelivered&&(this._notify_msg_sent[l]=this.onMessageDelivered(l.payloadMessage))}s=s.sort(function(e,t){return e.sequence-t.sequence});for(var d=0,v=s.length;d<v;d++){o=s[d];if(o.type==n.PUBLISH&&o.pubRecReceived){var _=new p(n.PUBREL,{messageIdentifier:o.messageIdentifier});this._schedule_message(_)}else this._schedule_message(o)}this.connectOptions.onSuccess&&!this._reconnecting&&this.connectOptions.onSuccess({invocationContext:this.connectOptions.invocationContext});var g=!1;this._reconnecting&&(g=!0,this._reconnectInterval=0,this._reconnecting=!1),this._connected(g,this._wsuri),this._process_queue();break;case n.PUBLISH:this._receivePublish(e);break;case n.PUBACK:o=this._sentMessages[e.messageIdentifier];o&&(delete this._sentMessages[e.messageIdentifier],r.removeStorageSync("Sent:"+this._localKey+e.messageIdentifier),this.onMessageDelivered&&this.onMessageDelivered(o.payloadMessage));break;case n.PUBREC:o=this._sentMessages[e.messageIdentifier];if(o){o.pubRecReceived=!0;_=new p(n.PUBREL,{messageIdentifier:e.messageIdentifier});this.store("Sent:",o),this._schedule_message(_)}break;case n.PUBREL:i=this._receivedMessages[e.messageIdentifier];r.removeStorageSync("Received:"+this._localKey+e.messageIdentifier),i&&(this._receiveMessage(i),delete this._receivedMessages[e.messageIdentifier]);var y=new p(n.PUBCOMP,{messageIdentifier:e.messageIdentifier});this._schedule_message(y);break;case n.PUBCOMP:o=this._sentMessages[e.messageIdentifier];delete this._sentMessages[e.messageIdentifier],r.removeStorageSync("Sent:"+this._localKey+e.messageIdentifier),this.onMessageDelivered&&this.onMessageDelivered(o.payloadMessage);break;case n.SUBACK:o=this._sentMessages[e.messageIdentifier];o&&(o.timeOut&&o.timeOut.cancel(),128===e.returnCode[0]?o.onFailure&&o.onFailure(e.returnCode):o.onSuccess&&o.onSuccess(e.returnCode),delete this._sentMessages[e.messageIdentifier]);break;case n.UNSUBACK:o=this._sentMessages[e.messageIdentifier];o&&(o.timeOut&&o.timeOut.cancel(),o.callback&&o.callback(),delete this._sentMessages[e.messageIdentifier]);break;case n.PINGRESP:this.sendPinger.reset();break;case n.DISCONNECT:this._disconnected(a.INVALID_MQTT_MESSAGE_TYPE.code,u(a.INVALID_MQTT_MESSAGE_TYPE,[e.type]));break;default:this._disconnected(a.INVALID_MQTT_MESSAGE_TYPE.code,u(a.INVALID_MQTT_MESSAGE_TYPE,[e.type]))}}catch(m){return void this._disconnected(a.INTERNAL_ERROR.code,u(a.INTERNAL_ERROR,[m.message,m.stack.toString()]))}},O.prototype._on_socket_error=function(e){this._reconnecting||this._disconnected(a.SOCKET_ERROR.code,u(a.SOCKET_ERROR,[e.data]))},O.prototype._on_socket_close=function(){this._reconnecting||this._disconnected(a.SOCKET_CLOSE.code,u(a.SOCKET_CLOSE))},O.prototype._socket_send=function(e){if(1==e.type){var t=this._traceMask(e,"password");this._trace("Client._socket_send",t)}else this._trace("Client._socket_send",e);o.default.sendSocketMessage({data:e.encode(),success:function(){},fail:function(){},complete:function(){}}),this.sendPinger.reset()},O.prototype._receivePublish=function(e){switch(e.payloadMessage.qos){case"undefined":case 0:this._receiveMessage(e);break;case 1:var t=new p(n.PUBACK,{messageIdentifier:e.messageIdentifier});this._schedule_message(t),this._receiveMessage(e);break;case 2:this._receivedMessages[e.messageIdentifier]=e,this.store("Received:",e);var r=new p(n.PUBREC,{messageIdentifier:e.messageIdentifier});this._schedule_message(r);break;default:throw Error("Invaild qos="+wireMmessage.payloadMessage.qos)}},O.prototype._receiveMessage=function(e){this.onMessageArrived&&this.onMessageArrived(e.payloadMessage)},O.prototype._connected=function(e,t){this.onConnected&&this.onConnected({reconnect:e,uri:t})},O.prototype._reconnect=function(){this._trace("Client._reconnect"),this.connected||(this._reconnecting=!0,this.sendPinger.cancel(),this.receivePinger.cancel(),this._reconnectInterval<60&&(this._reconnectInterval+=5),this.connectOptions.uris?(this.hostIndex=0,this._doConnect(this.connectOptions.uris[0])):this._doConnect(this.uri))},O.prototype._disconnected=function(e,t){if(this._trace("Client._disconnected",e,t),void 0!==e&&this._reconnecting)this._reconnect();else if(this.sendPinger.cancel(),this.receivePinger.cancel(),this._connectTimeout&&(this._connectTimeout.cancel(),this._connectTimeout=null),this._msg_queue=[],this._buffered_msg_queue=[],this._notify_msg_sent={},this.socket&&(this.socket.onopen=null,this.socket.onmessage=null,this.socket.onerror=null,this.socket.onclose=null,this.socket.close(),delete this.socket),this.connectOptions.uris&&this.hostIndex<this.connectOptions.uris.length-1)this.hostIndex++,this._doConnect(this.connectOptions.uris[this.hostIndex]);else if(void 0===e&&(e=a.OK.code,t=u(a.OK)),this.connected){if(this.connected=!1,this.onConnectionLost&&this.onConnectionLost({errorCode:e,errorMessage:t,reconnect:this.connectOptions.reconnect,uri:this._wsuri}),e!==a.OK.code&&this.connectOptions.reconnect)return this._reconnectInterval=0,void this._reconnect()}else 4===this.connectOptions.mqttVersion&&!1===this.connectOptions.mqttVersionExplicit?(this._trace("Failed to connect V4, dropping back to V3"),this.connectOptions.mqttVersion=3,this.connectOptions.uris?(this.hostIndex=0,this._doConnect(this.connectOptions.uris[0])):this._doConnect(this.uri)):this.connectOptions.onFailure&&this.connectOptions.onFailure({invocationContext:this.connectOptions.invocationContext,errorCode:e,errorMessage:t})},O.prototype._trace=function(){if(this.traceFunction){for(var e in arguments)"undefined"!==typeof arguments[e]&&(arguments[e]=JSON.stringify(arguments[e]));var t=Array.prototype.slice.call(arguments).join("");this.traceFunction({severity:"Debug",message:t})}if(null!==this._traceBuffer){e=0;for(var n=arguments.length;e<n;e++)this._traceBuffer.length==this._MAX_TRACE_ENTRIES&&this._traceBuffer.shift(),0===e?this._traceBuffer.push(arguments[e]):"undefined"===typeof arguments[e]?this._traceBuffer.push(arguments[e]):this._traceBuffer.push("  "+JSON.stringify(arguments[e]))}},O.prototype._traceMask=function(e,t){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=r==t?"******":e[r]);return n};var A=function(e,t,n,r){var o;if("string"!==typeof e)throw new Error(u(a.INVALID_TYPE,[typeof e,"host"]));if(2==arguments.length){r=t,o=e;var s=o.match(/^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/);if(!s)throw new Error(u(a.INVALID_ARGUMENT,[e,"host"]));e=s[4]||s[2],t=parseInt(s[7]),n=s[8]}else{if(3==arguments.length&&(r=n,n="/mqtt"),"number"!==typeof t||t<0)throw new Error(u(a.INVALID_TYPE,[typeof t,"port"]));if("string"!==typeof n)throw new Error(u(a.INVALID_TYPE,[typeof n,"path"]));var c=-1!=e.indexOf(":")&&"["!=e.slice(0,1)&&"]"!=e.slice(-1);o="ws://"+(c?"["+e+"]":e)+":"+t+n}for(var f=0,l=0;l<r.length;l++){var p=r.charCodeAt(l);55296<=p&&p<=56319&&l++,f++}if("string"!==typeof r||f>65535)throw new Error(u(a.INVALID_ARGUMENT,[r,"clientId"]));var h=new O(o,e,t,n,r);this._getHost=function(){return e},this._setHost=function(){throw new Error(u(a.UNSUPPORTED_OPERATION))},this._getPort=function(){return t},this._setPort=function(){throw new Error(u(a.UNSUPPORTED_OPERATION))},this._getPath=function(){return n},this._setPath=function(){throw new Error(u(a.UNSUPPORTED_OPERATION))},this._getURI=function(){return o},this._setURI=function(){throw new Error(u(a.UNSUPPORTED_OPERATION))},this._getClientId=function(){return h.clientId},this._setClientId=function(){throw new Error(u(a.UNSUPPORTED_OPERATION))},this._getOnConnected=function(){return h.onConnected},this._setOnConnected=function(e){if("function"!==typeof e)throw new Error(u(a.INVALID_TYPE,[typeof e,"onConnected"]));h.onConnected=e},this._getDisconnectedPublishing=function(){return h.disconnectedPublishing},this._setDisconnectedPublishing=function(e){h.disconnectedPublishing=e},this._getDisconnectedBufferSize=function(){return h.disconnectedBufferSize},this._setDisconnectedBufferSize=function(e){h.disconnectedBufferSize=e},this._getOnConnectionLost=function(){return h.onConnectionLost},this._setOnConnectionLost=function(e){if("function"!==typeof e)throw new Error(u(a.INVALID_TYPE,[typeof e,"onConnectionLost"]));h.onConnectionLost=e},this._getOnMessageDelivered=function(){return h.onMessageDelivered},this._setOnMessageDelivered=function(e){if("function"!==typeof e)throw new Error(u(a.INVALID_TYPE,[typeof e,"onMessageDelivered"]));h.onMessageDelivered=e},this._getOnMessageArrived=function(){return h.onMessageArrived},this._setOnMessageArrived=function(e){if("function"!==typeof e)throw new Error(u(a.INVALID_TYPE,[typeof e,"onMessageArrived"]));h.onMessageArrived=e},this._getTrace=function(){return h.traceFunction},this._setTrace=function(e){if("function"!==typeof e)throw new Error(u(a.INVALID_TYPE,[typeof e,"onTrace"]));h.traceFunction=e},this.connect=function(e){if(e=e||{},i(e,{timeout:"number",userName:"string",password:"string",willMessage:"object",keepAliveInterval:"number",cleanSession:"boolean",useSSL:"boolean",invocationContext:"object",onSuccess:"function",onFailure:"function",hosts:"object",ports:"object",reconnect:"boolean",mqttVersion:"number"}),void 0===e.keepAliveInterval&&(e.keepAliveInterval=60),e.mqttVersion>4||e.mqttVersion<3)throw new Error(u(a.INVALID_ARGUMENT,[e.mqttVersion,"connectOptions.mqttVersion"]));if(void 0===e.mqttVersion?(e.mqttVersionExplicit=!1,e.mqttVersion=4):e.mqttVersionExplicit=!0,void 0===e.password&&void 0!==e.userName)throw new Error(u(a.INVALID_ARGUMENT,[e.password,"connectOptions.password"]));if(void 0===e.reconnectInterval&&(e.reconnectInterval=10),e.willMessage){if(!(e.willMessage instanceof k))throw new Error(u(a.INVALID_TYPE,[e.willMessage,"connectOptions.willMessage"]));if(e.willMessage.stringPayload,"undefined"===typeof e.willMessage.destinationName)throw new Error(u(a.INVALID_TYPE,[typeof e.willMessage.destinationName,"connectOptions.willMessage.destinationName"]))}if("undefined"===typeof e.cleanSession&&(e.cleanSession=!0),e.hosts){if(!(e.hosts instanceof Array))throw new Error(u(a.INVALID_ARGUMENT,[e.hosts,"connectOptions.hosts"]));if(e.hosts.length<1)throw new Error(u(a.INVALID_ARGUMENT,[e.hosts,"connectOptions.hosts"]));for(var t=!1,r=0;r<e.hosts.length;r++){if("string"!==typeof e.hosts[r])throw new Error(u(a.INVALID_TYPE,[typeof e.hosts[r],"connectOptions.hosts["+r+"]"]));if(/^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/.test(e.hosts[r])){if(0==r)t=!0;else if(!t)throw new Error(u(a.INVALID_ARGUMENT,[e.hosts[r],"connectOptions.hosts["+r+"]"]))}else if(t)throw new Error(u(a.INVALID_ARGUMENT,[e.hosts[r],"connectOptions.hosts["+r+"]"]))}if(t)e.uris=e.hosts;else{if(!e.ports)throw new Error(u(a.INVALID_ARGUMENT,[e.ports,"connectOptions.ports"]));if(!(e.ports instanceof Array))throw new Error(u(a.INVALID_ARGUMENT,[e.ports,"connectOptions.ports"]));if(e.hosts.length!=e.ports.length)throw new Error(u(a.INVALID_ARGUMENT,[e.ports,"connectOptions.ports"]));e.uris=[];for(r=0;r<e.hosts.length;r++){if("number"!==typeof e.ports[r]||e.ports[r]<0)throw new Error(u(a.INVALID_TYPE,[typeof e.ports[r],"connectOptions.ports["+r+"]"]));var s=e.hosts[r],c=e.ports[r],f=-1!=s.indexOf(":");o="ws://"+(f?"["+s+"]":s)+":"+c+n,e.uris.push(o)}}}h.connect(e)},this.subscribe=function(e,t){if("string"!==typeof e)throw new Error("Invalid argument:"+e);if(t=t||{},i(t,{qos:"number",invocationContext:"object",onSuccess:"function",onFailure:"function",timeout:"number"}),t.timeout&&!t.onFailure)throw new Error("subscribeOptions.timeout specified with no onFailure callback.");if("undefined"!==typeof t.qos&&0!==t.qos&&1!==t.qos&&2!==t.qos)throw new Error(u(a.INVALID_ARGUMENT,[t.qos,"subscribeOptions.qos"]));h.subscribe(e,t)},this.unsubscribe=function(e,t){if("string"!==typeof e)throw new Error("Invalid argument:"+e);if(t=t||{},i(t,{invocationContext:"object",onSuccess:"function",onFailure:"function",timeout:"number"}),t.timeout&&!t.onFailure)throw new Error("unsubscribeOptions.timeout specified with no onFailure callback.");h.unsubscribe(e,t)},this.send=function(e,t,n,r){var o;if(0==arguments.length)throw new Error("Invalid argument.length");if(1==arguments.length){if(!(e instanceof k)&&"string"!==typeof e)throw new Error("Invalid argument:"+typeof e);if(o=e,"undefined"===typeof o.destinationName)throw new Error(u(a.INVALID_ARGUMENT,[o.destinationName,"Message.destinationName"]));h.send(o)}else o=new k(t),o.destinationName=e,arguments.length>=3&&(o.qos=n),arguments.length>=4&&(o.retained=r),h.send(o)},this.disconnect=function(){h.disconnect()},this.getTraceLog=function(){return h.getTraceLog()},this.startTrace=function(){h.startTrace()},this.stopTrace=function(){h.stopTrace()},this.isConnected=function(){return h.connected}};A.prototype={get host(){return this._getHost()},set host(e){this._setHost(e)},get port(){return this._getPort()},set port(e){this._setPort(e)},get path(){return this._getPath()},set path(e){this._setPath(e)},get clientId(){return this._getClientId()},set clientId(e){this._setClientId(e)},get onConnected(){return this._getOnConnected()},set onConnected(e){this._setOnConnected(e)},get disconnectedPublishing(){return this._getDisconnectedPublishing()},set disconnectedPublishing(e){this._setDisconnectedPublishing(e)},get disconnectedBufferSize(){return this._getDisconnectedBufferSize()},set disconnectedBufferSize(e){this._setDisconnectedBufferSize(e)},get onConnectionLost(){return this._getOnConnectionLost()},set onConnectionLost(e){this._setOnConnectionLost(e)},get onMessageDelivered(){return this._getOnMessageDelivered()},set onMessageDelivered(e){this._setOnMessageDelivered(e)},get onMessageArrived(){return this._getOnMessageArrived()},set onMessageArrived(e){this._setOnMessageArrived(e)},get trace(){return this._getTrace()},set trace(e){this._setTrace(e)}};var k=function(e){var t;if(!("string"===typeof e||e instanceof ArrayBuffer||e instanceof Int8Array||e instanceof Uint8Array||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Float32Array||e instanceof Float64Array))throw u(a.INVALID_ARGUMENT,[e,"newPayload"]);t=e,this._getPayloadString=function(){return"string"===typeof t?t:b(t,0,t.length)},this._getPayloadBytes=function(){if("string"===typeof t){var e=new ArrayBuffer(y(t)),n=new Uint8Array(e);return m(t,n,0),n}return t};var n=void 0;this._getDestinationName=function(){return n},this._setDestinationName=function(e){if("string"!==typeof e)throw new Error(u(a.INVALID_ARGUMENT,[e,"newDestinationName"]));n=e};var r=0;this._getQos=function(){return r},this._setQos=function(e){if(0!==e&&1!==e&&2!==e)throw new Error("Invalid argument:"+e);r=e};var o=!1;this._getRetained=function(){return o},this._setRetained=function(e){if("boolean"!==typeof e)throw new Error(u(a.INVALID_ARGUMENT,[e,"newRetained"]));o=e};var i=!1;this._getDuplicate=function(){return i},this._setDuplicate=function(e){i=e}};return k.prototype={get payloadString(){return this._getPayloadString()},get payloadBytes(){return this._getPayloadBytes()},get destinationName(){return this._getDestinationName()},set destinationName(e){this._setDestinationName(e)},get qos(){return this._getQos()},set qos(e){this._setQos(e)},get retained(){return this._getRetained()},set retained(e){this._setRetained(e)},get duplicate(){return this._getDuplicate()},set duplicate(e){this._setDuplicate(e)}},{Client:A,Message:k}}(window);return e})}).call(this,n("c8ba"),n("6e42")["default"])},c549:function(e,t,n){"use strict";(function(e){!function(e,t){for(var n in t)e[n]=t[n]}(t,function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(t,n,r){function o(e){"object"===("undefined"==typeof plus?"undefined":a(plus))?e():n.isApp&&window.addEventListener("plusready",e,!1)}function i(t,n,r){n?n.errMsg||(n.errMsg="callback:ok"):"object"===(void 0===r?"undefined":a(r))?(r||(r={errMsg:"callback:fail"}),r.errMsg||(r.errMsg=r.message||"callback:fail")):r={errMsg:"callback:fail "+String(r)},t&&"function"==typeof t.success&&n&&t.success(n),r&&e("warn","Callback Fail:",r," at utils\\js\\plus-websocket.js:43"),t&&"function"==typeof t.fail&&r&&t.fail(r),t&&"function"==typeof t.complete&&t.complete(n||r)}function s(){return i}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(n,"__esModule",{value:!0}),n.isPlus="object"===("undefined"==typeof navigator?"undefined":a(navigator))&&!!navigator.userAgent.match(/Html5Plus/i),n.isWeb="object"===("undefined"==typeof document?"undefined":a(document))&&!n.isPlus,n.isWeex="object"===("undefined"==typeof weex?"undefined":a(weex)),n.isApp=n.isPlus||n.isWeex,n.plusReady=o,n.callback=i,n.getCallback=s},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);t.connectSocket=r.connectSocket,t.onSocketOpen=r.onSocketOpen,t.onSocketError=r.onSocketError,t.sendSocketMessage=r.sendSocketMessage,t.onSocketMessage=r.onSocketMessage,t.closeSocket=r.closeSocket,t.onSocketClose=r.onSocketClose},function(e,t,n){function r(e){function t(){p=null}e=e||{};var n=new l.SocketTask(e);if(n.onClose(t),n.onError(t),!p)for(var r in p=n,h)h.hasOwnProperty(r)&&n[r](h[r]);return p=p||n,n}function o(e,t){p?p[e](t):h[e]=t}function i(e){o("onOpen",e)}function s(e){o("onError",e)}function a(e){p&&p.send(e)}function c(e){o("onMessage",e)}function u(e){p&&p.close(e)}function f(e){o("onClose",e)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(3),p=null,h={};t.connectSocket=r,t.onSocketOpen=i,t.onSocketError=s,t.sendSocketMessage=a,t.onSocketMessage=c,t.closeSocket=u,t.onSocketClose=f},function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e){var t=plus.webview.getWebviewById(h);if(!t){var r=n(7);t=plus.webview.create("http://www.dcloud.io",h,{kernel:"UIWebview",render:"always",plusrequire:"none"}),t.overrideUrlLoading({match:".*data.*"},function(e){var n=e.url,r=n.match(/\?(\S+)=(\S+)/);if(r){var o=r[1],i=JSON.parse(decodeURIComponent(r[2]));"event"===o?f.emit(i.type,i.data):"callback"===o&&d[i.callbackName](i.error)}else!_&&"number"!=typeof u&&n.indexOf("load")>=0?u=setInterval(function(){t.evalJS(v)},16):!_&&n.indexOf("ready")>=0&&(clearInterval(u),_=!0,g.forEach(function(e){e(t)}),g=[])}),t.loadData(r,{baseURL:"http://websocket.websocket"})}_?e(t):g.push(e)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},a=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c,u,f=s(n(4)),l=n(0),p=a(n(5)),h="__websocket__",d={},v=n(6),_=!1,g=[],y=function(){function e(t){r(this,e),this.id=Date.now().toString(),this.eval("connect",t)}return i(e,[{key:"send",value:function(e){e.data&&"string"!=typeof e.data&&(e.data=[p.default.encode(e.data)]),this.eval("send",e)}},{key:"close",value:function(e){this.eval("close",e)}},{key:"onOpen",value:function(e){this.on("open",e)}},{key:"onClose",value:function(e){this.on("close",e)}},{key:"onError",value:function(e){this.on("error",e)}},{key:"onMessage",value:function(e){this.on("message",function(t){t=t.data,t=t&&"string"!=typeof t?p.default.decode(t[0]):t,e({data:t})})}},{key:"eval",value:function(e,t){var n="callback"+Date.now(),r=l.isWeb?window:d;r[n]=function(e){delete r[n],e?l.callback(t,{},e):l.callback(t,{})};var i="window.__webSocket&&__webSocket."+e+"("+this.id+","+JSON.stringify(t)+",'"+n+"')";l.isWeb?(c||(window.eval(v),c=!0),window.eval(i)):l.plusReady(function(){o(function(e){e.evalJS(i)})})}},{key:"on",value:function(e,t){f.on("websocket"+e+this.id,function(e){t(e.detail)})}}]),e}();t.SocketTask=y},function(e,t,n){function r(e,t){s.isWeb?window.addEventListener(e,t,!1):(a[e]=a[e]||[],a[e].push(t))}function o(e,t){if(s.isWeb)window.removeEventListener(e,t,!1);else{var n=a[e];n&&n.splice(n.indexOf(t),1)}}function i(e,t){if(s.isWeb)document.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0}));else{var n=a[e];n&&n.forEach(function(e){e({detail:t})})}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),a={};t.on=r,t.off=o,t.emit=i},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r={chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",lookup:null,encode:function(e){var t,n=this.chars,r=new Uint8Array(e),o=r.length,i="";for(t=0;t<o;t+=3)i+=n[r[t]>>2],i+=n[(3&r[t])<<4|r[t+1]>>4],i+=n[(15&r[t+1])<<2|r[t+2]>>6],i+=n[63&r[t+2]];return o%3==2?i=i.substring(0,i.length-1)+"=":o%3==1&&(i=i.substring(0,i.length-2)+"=="),i},decode:function(e){var t=this.chars,n=this.lookup;if(!n){n=this.lookup=new Uint8Array(256);for(var r=0;r<t.length;r++)n[t.charCodeAt(r)]=r}var o,i,s,a,c=.75*e.length,u=e.length,f=0;"="===e[e.length-1]&&(c--,"="===e[e.length-2]&&c--);var l=new ArrayBuffer(c),p=new Uint8Array(l);for(r=0;r<u;r+=4)o=n[e.charCodeAt(r)],i=n[e.charCodeAt(r+1)],s=n[e.charCodeAt(r+2)],a=n[e.charCodeAt(r+3)],p[f++]=o<<2|i>>4,p[f++]=(15&i)<<4|s>>2,p[f++]=(3&s)<<6|63&a;return l}};t.default=r},function(e,t){e.exports="'use strict';\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n(function () {\n    if (window.__webSocket) {\n        return;\n    }\n    var isPlus = (typeof navigator === 'undefined' ? 'undefined' : _typeof(navigator)) === 'object' && !!navigator.userAgent.match(/Html5Plus/i);\n    if (isPlus) {\n        location.href = 'http://data?ready';\n    }\n    // 自定义事件\n    var $event = {\n        emit: function emit(type, data) {\n            if (!isPlus) {\n                document.dispatchEvent(new CustomEvent(type, {\n                    detail: data,\n                    bubbles: true\n                }));\n                return;\n            }\n            location.href = 'http://data?event=' + encodeURIComponent(JSON.stringify({\n                type: type,\n                data: data\n            }));\n        }\n    };\n    var Base64 = {\n        chars: \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\",\n        lookup: null,\n        encode: function encode(arraybuffer) {\n            var chars = this.chars;\n            var bytes = new Uint8Array(arraybuffer),\n                i,\n                len = bytes.length,\n                base64 = \"\";\n\n            for (i = 0; i < len; i += 3) {\n                base64 += chars[bytes[i] >> 2];\n                base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];\n                base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];\n                base64 += chars[bytes[i + 2] & 63];\n            }\n\n            if (len % 3 === 2) {\n                base64 = base64.substring(0, base64.length - 1) + \"=\";\n            } else if (len % 3 === 1) {\n                base64 = base64.substring(0, base64.length - 2) + \"==\";\n            }\n\n            return base64;\n        },\n        decode: function decode(base64) {\n            var chars = this.chars;\n            var lookup = this.lookup;\n            if (!lookup) {\n                lookup = this.lookup = new Uint8Array(256);\n                for (var i = 0; i < chars.length; i++) {\n                    lookup[chars.charCodeAt(i)] = i;\n                }\n            }\n            var bufferLength = base64.length * 0.75,\n                len = base64.length,\n                p = 0,\n                encoded1,\n                encoded2,\n                encoded3,\n                encoded4;\n\n            if (base64[base64.length - 1] === \"=\") {\n                bufferLength--;\n                if (base64[base64.length - 2] === \"=\") {\n                    bufferLength--;\n                }\n            }\n\n            var arraybuffer = new ArrayBuffer(bufferLength),\n                bytes = new Uint8Array(arraybuffer);\n\n            for (i = 0; i < len; i += 4) {\n                encoded1 = lookup[base64.charCodeAt(i)];\n                encoded2 = lookup[base64.charCodeAt(i + 1)];\n                encoded3 = lookup[base64.charCodeAt(i + 2)];\n                encoded4 = lookup[base64.charCodeAt(i + 3)];\n\n                bytes[p++] = encoded1 << 2 | encoded2 >> 4;\n                bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;\n                bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;\n            }\n\n            return arraybuffer;\n        }\n    };\n\n    window.__webSocket = {\n        webSockets: {},\n        connect: function connect(id, data, callbackName) {\n            var url = data.url;\n            var header = data.header; // 未支持\n            var method = data.method; // 未支持\n            var protocols = data.protocols || [];\n            var webSocket;\n            try {\n                webSocket = this.webSockets[id] = new WebSocket(url, protocols);\n                webSocket.binaryType = 'arraybuffer';\n            } catch (error) {\n                this.callback(callbackName, error);\n                return;\n            }\n            this.callback(callbackName);\n            if (webSocket) {\n                webSocket.addEventListener('open', function () {\n                    $event.emit('websocketopen' + id, {});\n                });\n                webSocket.addEventListener('message', function (_ref) {\n                    var data = _ref.data;\n\n                    $event.emit('websocketmessage' + id, {\n                        data: data && typeof data !== 'string' ? [Base64.encode(data)] : data\n                    });\n                });\n                webSocket.addEventListener('error', function () {\n                    $event.emit('websocketerror' + id, {});\n                });\n                webSocket.addEventListener('close', function () {\n                    $event.emit('websocketclose' + id, {});\n                });\n            }\n        },\n        send: function send(id) {\n            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n            var callbackName = arguments[2];\n\n            data = data.data;\n            data = data && typeof data !== 'string' ? Base64.decode(data[0]) : data;\n            try {\n                this.webSockets[id].send(data);\n            } catch (error) {\n                this.callback(callbackName, error);\n                return;\n            }\n            this.callback(callbackName);\n        },\n        close: function close(id) {\n            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n            var callbackName = arguments[2];\n\n            var options = [];\n            options.push(data.code || 1000);\n            if (typeof data.reason === 'string') {\n                options.push(data.reason);\n            }\n            try {\n                var _webSockets$id;\n\n                (_webSockets$id = this.webSockets[id]).close.apply(_webSockets$id, options);\n            } catch (error) {\n                this.callback(callbackName, error);\n                return;\n            }\n            this.callback(callbackName);\n        },\n        callback: function callback(callbackName, error) {\n            if (isPlus) {\n                location.href = 'http://data?callback=' + encodeURIComponent(JSON.stringify({\n                    callbackName: callbackName,\n                    error: error\n                }));\n            } else {\n                var js = 'window.' + callbackName + '&&window.' + callbackName + '(\\'' + (error || '') + '\\')';\n                window[callbackName] && window[callbackName](error | '');\n                window.eval(js);\n            }\n        }\n    };\n})();"},function(e,t){e.exports='<!doctype html> <html lang=en> <head> <meta charset=UTF-8> <title>WebSocket</title> </head> <body> <script>location.href="http://data/load"<\/script> </body> </html>'}]))}).call(this,n("0de9")["default"])},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},d47b:function(e,t,n){},f0c5:function(e,t,n){"use strict";function r(e,t,n,r,o,i,s,a,c,u){var f,l="function"===typeof e?e.options:e;if(c&&(l.components=Object.assign(c,l.components||{})),u&&((u.beforeCreate||(u.beforeCreate=[])).unshift(function(){this[u.__module]=this}),(l.mixins||(l.mixins=[])).push(u)),t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),s?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=f):o&&(f=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(l.functional){l._injectStyles=f;var p=l.render;l.render=function(e,t){return f.call(t),p(e,t)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,f):[f]}return{exports:e,options:l}}n.d(t,"a",function(){return r})}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/im-chat/chatinput';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/im-chat/chatinput.js';

define('components/im-chat/chatinput.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/im-chat/chatinput"], {
  "08f6": function f6(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("a13d"),
        a = e("69dc");

    for (var i in a) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(i);
    }

    e("7155");
    var c,
        o = e("f0c5"),
        r = Object(o["a"])(a["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], c);
    n["default"] = r.exports;
  },
  4606: function _(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var e = {
        name: "chat-input",
        data: function data() {
          return {
            inputValue: ""
          };
        },
        methods: {
          startRecognize: function startRecognize() {
            var n = {},
                e = this;
            n.engine = "iFly", e.inputValue = "", plus.speech.startRecognize(n, function (n) {
              t("log", n, " at components\\im-chat\\chatinput.vue:30"), e.inputValue += n;
            }, function (n) {
              t("log", "语音识别失败：" + n.message, " at components\\im-chat\\chatinput.vue:33");
            });
          },
          sendMessge: function sendMessge() {
            var t = this;
            "" == t.inputValue.trim() ? t.inputValue = "" : (this.$emit("send-message", {
              type: "text",
              content: t.inputValue
            }), t.inputValue = "");
          }
        }
      };
      n.default = e;
    }).call(this, e("0de9")["default"]);
  },
  "69dc": function dc(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("4606"),
        a = e.n(u);

    for (var i in u) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(i);
    }

    n["default"] = a.a;
  },
  7155: function _(t, n, e) {
    "use strict";

    var u = e("85b2"),
        a = e.n(u);
    a.a;
  },
  "85b2": function b2(t, n, e) {},
  a13d: function a13d(t, n, e) {
    "use strict";

    var u,
        a = function a() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        i = [];

    e.d(n, "b", function () {
      return a;
    }), e.d(n, "c", function () {
      return i;
    }), e.d(n, "a", function () {
      return u;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/im-chat/chatinput-create-component', {
  'components/im-chat/chatinput-create-component': function componentsImChatChatinputCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("08f6"));
  }
}, [['components/im-chat/chatinput-create-component']]]);
});
require('components/im-chat/chatinput.js');
__wxRoute = 'components/im-chat/messageshow';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/im-chat/messageshow.js';

define('components/im-chat/messageshow.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/im-chat/messageshow"], {
  "0533": function _(t, n, e) {
    "use strict";

    var u,
        r = function r() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        c = [];

    e.d(n, "b", function () {
      return r;
    }), e.d(n, "c", function () {
      return c;
    }), e.d(n, "a", function () {
      return u;
    });
  },
  "5e6e": function e6e(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("0533"),
        r = e("646b");

    for (var c in r) {
      "default" !== c && function (t) {
        e.d(n, t, function () {
          return r[t];
        });
      }(c);
    }

    e("c271");
    var a,
        f = e("f0c5"),
        o = Object(f["a"])(r["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], a);
    n["default"] = o.exports;
  },
  "646b": function b(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("a111"),
        r = e.n(u);

    for (var c in u) {
      "default" !== c && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(c);
    }

    n["default"] = r.a;
  },
  a111: function a111(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = {
      props: {
        message: {
          type: Object,
          default: function _default() {
            return {};
          }
        },
        cid: {
          type: [Number, String],
          default: ""
        }
      }
    };
    n.default = u;
  },
  c271: function c271(t, n, e) {
    "use strict";

    var u = e("d742"),
        r = e.n(u);
    r.a;
  },
  d742: function d742(t, n, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/im-chat/messageshow-create-component', {
  'components/im-chat/messageshow-create-component': function componentsImChatMessageshowCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("5e6e"));
  }
}, [['components/im-chat/messageshow-create-component']]]);
});
require('components/im-chat/messageshow.js');

__wxRoute = 'pages/chat/chat';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/chat/chat.js';

define('pages/chat/chat.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chat/chat"],{2427:function(t,e,n){"use strict";var i,o=function(){},c=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return c}),n.d(e,"a",function(){return i})},"6baf":function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){return n.e("components/im-chat/chatinput").then(n.bind(null,"08f6"))},c=function(){return n.e("components/im-chat/messageshow").then(n.bind(null,"5e6e"))},s=n("c388"),a={data:function(){return{style:{pageHeight:0,contentViewHeight:0,footViewHeight:90,mitemHeight:0},messageA:[],scrollTop:0,targetName:"To"}},components:{chatInput:o,messageShow:c},onShow:function(){},onLoad:function(){var e=t.getSystemInfoSync();i("log",e," at pages\\chat\\chat.vue:42"),this.style.pageHeight=e.screenHeight,this.style.contentViewHeight=e.windowHeight,t.clearStorage(),this.setText(),this.getMsg(),delete this.mqtt.options.mqttVersionExplicit,this.mqtt.client.connect(this.mqtt.options)},created:function(){},onPullDownRefresh:function(){i("log","refresh"," at pages\\chat\\chat.vue:61"),setTimeout(function(){t.stopPullDownRefresh()},1e3)},methods:{setText:function(){t.setNavigationBarTitle({title:this.targetName})},getInputMessage:function(t){this.mqtt.addMessage("customer",t.content,!1),this.sendMessage(t.content),this.mqtt.saveMsg(),this.messageA=this.mqtt.messageAll},getMsg:function(){},scrollToBottom:function(){var e=this,n=t.createSelectorQuery();n.selectAll(".m-item").boundingClientRect(),n.select("#scrollview").boundingClientRect(),n.exec(function(t){e.style.mitemHeight=0,t[0].forEach(function(t){e.style.mitemHeight=e.style.mitemHeight+t.height+20,e.style.mitemHeight=5}),e.style.mitemHeight>e.style.contentViewHeight&&(e.scrollTop=e.style.mitemHeight-e.style.contentViewHeight,e.scrollTop=50)})},sendMessage:function(t){var e=new s.Message(JSON.stringify({type:16,target:"To",content:t,extend:"123"}));e.qos=1,e.destinationName="aa2",this.mqtt.client.send(e)}}};e.default=a}).call(this,n("6e42")["default"],n("0de9")["default"])},"7d0d":function(t,e,n){},ac8c:function(t,e,n){"use strict";n.r(e);var i=n("2427"),o=n("c88c");for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);n("f627");var s,a=n("f0c5"),u=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);e["default"]=u.exports},c101:function(t,e,n){"use strict";(function(t){n("d47b"),n("921b");i(n("66fd"));var e=i(n("ac8c"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},c88c:function(t,e,n){"use strict";n.r(e);var i=n("6baf"),o=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);e["default"]=o.a},f627:function(t,e,n){"use strict";var i=n("7d0d"),o=n.n(i);o.a}},[["c101","common/runtime","common/vendor"]]]);
});
require('pages/chat/chat.js');
__wxRoute = 'pages/user/user';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/user.js';

define('pages/user/user.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{"0db2":function(n,t,u){"use strict";u.r(t);var e=u("2275"),r=u("1ba5");for(var f in r)"default"!==f&&function(n){u.d(t,n,function(){return r[n]})}(f);var c,a=u("f0c5"),o=Object(a["a"])(r["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],c);t["default"]=o.exports},"1ba5":function(n,t,u){"use strict";u.r(t);var e=u("ff83"),r=u.n(e);for(var f in e)"default"!==f&&function(n){u.d(t,n,function(){return e[n]})}(f);t["default"]=r.a},2275:function(n,t,u){"use strict";var e,r=function(){var n=this,t=n.$createElement;n._self._c},f=[];u.d(t,"b",function(){return r}),u.d(t,"c",function(){return f}),u.d(t,"a",function(){return e})},f2d6:function(n,t,u){"use strict";(function(n){u("d47b"),u("921b");e(u("66fd"));var t=e(u("0db2"));function e(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,u("6e42")["createPage"])},ff83:function(n,t,u){}},[["f2d6","common/runtime","common/vendor"]]]);
});
require('pages/user/user.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

