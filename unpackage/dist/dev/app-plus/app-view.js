var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190703_syb_scopedata*/window.__wcc_version__='v0.5vv_20190703_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
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

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
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
Z([[7],[3,'text']])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'uni-badge data-v-39eaf552']],[[2,'?:'],[[7],[3,'inverted']],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'uni-badge--'],[[7],[3,'type']]],[1,' uni-badge--']],[[7],[3,'size']]],[1,' uni-badge--']],[[7],[3,'type']]],[1,'-inverted']],[[2,'+'],[[2,'+'],[[2,'+'],[1,'uni-badge--'],[[7],[3,'type']]],[1,' uni-badge--']],[[7],[3,'size']]]]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'onClick']]]]]]]]])
Z([[7],[3,'badgeStyle']])
Z([a,[[7],[3,'text']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'width']])
Z([3,'uni-grid-item data-v-55e469c0'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'width:'],[[7],[3,'width']]],[1,';']],[[2,'?:'],[[7],[3,'square']],[[2,'+'],[1,'height:'],[[7],[3,'width']]],[1,'']]])
Z([3,'__e'])
Z([[4],[[5],[[5],[[5],[[5],[1,'uni-grid-item__box data-v-55e469c0']],[[2,'?:'],[[7],[3,'showBorder']],[1,'uni-grid-item--border'],[1,'']]],[[2,'?:'],[[2,'&&'],[[7],[3,'showBorder']],[[2,'<'],[[7],[3,'index']],[[7],[3,'column']]]],[1,'uni-grid-item--border-top'],[1,'']]],[[2,'?:'],[[7],[3,'highlight']],[1,'uni-highlight'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'_onClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'border-right-color:'],[[7],[3,'borderColor']]],[1,';']],[[2,'+'],[[2,'+'],[1,'border-bottom-color:'],[[7],[3,'borderColor']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'border-top-color:'],[[7],[3,'borderColor']]],[1,';']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-grid-wrap data-v-09159438'])
Z([[4],[[5],[[5],[1,'uni-grid data-v-09159438 vue-ref']],[[2,'?:'],[[7],[3,'showBorder']],[1,'uni-grid--border'],[1,'']]]])
Z([3,'uni-grid'])
Z([[7],[3,'elId']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'border-left-style:'],[1,'solid']],[1,';']],[[2,'+'],[[2,'+'],[1,'border-left-color:'],[[7],[3,'borderColor']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'border-left-width:'],[[2,'?:'],[[7],[3,'showBorder']],[1,'1px'],[1,0]]],[1,';']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-section data-v-19bcd5d4'])
Z([[7],[3,'type']])
Z([3,'uni-section__head data-v-19bcd5d4'])
Z([[4],[[5],[[5],[1,'uni-section__head-tag data-v-19bcd5d4']],[[7],[3,'type']]]])
Z([3,'uni-section__content data-v-19bcd5d4'])
Z([[4],[[5],[[5],[1,'uni-section__content-title data-v-19bcd5d4']],[[2,'?:'],[[2,'!'],[[7],[3,'subTitle']]],[1,'distraction'],[1,'']]]])
Z([a,[[7],[3,'title']]])
Z([[7],[3,'subTitle']])
Z([3,'uni-section__content-sub data-v-19bcd5d4'])
Z([a,[[7],[3,'subTitle']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'aaaaaaaa'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'warp'])
Z([3,'example-info'])
Z([3,'宫格组件主要使用场景如：商品推荐列表、热门内容等'])
Z([3,'__l'])
Z([3,'默认样式（3列）'])
Z([3,'line'])
Z([3,'1'])
Z([3,'example-body'])
Z(z[3])
Z([3,'__e'])
Z([1,3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'change']]]]]]]]])
Z([1,true])
Z([3,'2'])
Z([[4],[[5],[1,'default']]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[15])
Z(z[3])
Z([[7],[3,'index']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'3-'],[[7],[3,'index']]],[1,',']],[1,'2']])
Z(z[14])
Z([3,'grid-item-box'])
Z([3,'image'])
Z([3,'aspectFill'])
Z([[6],[[7],[3,'item']],[3,'url']])
Z([3,'text'])
Z([a,[[6],[[7],[3,'item']],[3,'text']]])
Z(z[3])
Z([3,'滑动视图'])
Z(z[5])
Z([3,'4'])
Z(z[7])
Z([3,'swiper'])
Z(z[12])
Z(z[3])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[12])
Z([3,'5'])
Z(z[14])
Z(z[15])
Z(z[16])
Z(z[17])
Z(z[15])
Z(z[3])
Z(z[20])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'6-'],[[7],[3,'index']]],[1,',']],[1,'5']])
Z(z[14])
Z(z[23])
Z(z[24])
Z(z[25])
Z(z[26])
Z(z[27])
Z([a,z[28][1]])
Z(z[3])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[12])
Z([3,'7'])
Z(z[14])
Z(z[15])
Z(z[16])
Z(z[17])
Z(z[15])
Z(z[3])
Z(z[20])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'8-'],[[7],[3,'index']]],[1,',']],[1,'7']])
Z(z[14])
Z(z[23])
Z(z[24])
Z(z[25])
Z(z[26])
Z(z[27])
Z([a,z[28][1]])
Z(z[3])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[12])
Z([3,'9'])
Z(z[14])
Z(z[15])
Z(z[16])
Z(z[17])
Z(z[15])
Z(z[3])
Z(z[20])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'10-'],[[7],[3,'index']]],[1,',']],[1,'9']])
Z(z[14])
Z(z[23])
Z(z[24])
Z(z[25])
Z(z[26])
Z(z[27])
Z([a,z[28][1]])
Z(z[3])
Z([3,'动态加载'])
Z(z[5])
Z([3,'11'])
Z(z[14])
Z([a,[[6],[[6],[[7],[3,'messageA']],[[2,'-'],[[6],[[7],[3,'messageA']],[3,'length']],[1,1]]],[3,'content']]])
Z(z[7])
Z([[2,'!=='],[[6],[[7],[3,'dynamicList']],[3,'length']],[1,0]])
Z([3,'grid-dynamic-box'])
Z(z[3])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[12])
Z([3,'12'])
Z(z[14])
Z(z[15])
Z(z[16])
Z([[7],[3,'dynamicList']])
Z(z[15])
Z(z[3])
Z(z[20])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'13-'],[[7],[3,'index']]],[1,',']],[1,'12']])
Z(z[14])
Z(z[23])
Z([[2,'+'],[[2,'+'],[1,'background-color:'],[[6],[[7],[3,'item']],[3,'color']]],[1,';']])
Z(z[24])
Z(z[25])
Z(z[26])
Z(z[27])
Z([a,z[28][1]])
Z(z[9])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'add']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'primary'])
Z([3,'点击添加一个宫格'])
Z(z[106])
Z(z[9])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'del']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'margin-top:15px;'])
Z(z[132])
Z([3,'点击删除一个宫格'])
Z(z[3])
Z([3,'无边框带角标（3列）'])
Z(z[5])
Z([3,'14'])
Z(z[7])
Z(z[3])
Z(z[9])
Z(z[10])
Z(z[11])
Z([1,false])
Z(z[149])
Z([3,'15'])
Z(z[14])
Z(z[15])
Z(z[16])
Z(z[17])
Z(z[15])
Z([[2,'<'],[[7],[3,'index']],[1,6]])
Z(z[3])
Z(z[20])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'16-'],[[7],[3,'index']]],[1,',']],[1,'15']])
Z(z[14])
Z(z[23])
Z(z[24])
Z(z[25])
Z(z[26])
Z(z[27])
Z([a,z[28][1]])
Z([[6],[[7],[3,'item']],[3,'badge']])
Z([3,'grid-dot'])
Z(z[3])
Z(z[168])
Z([[6],[[7],[3,'item']],[3,'type']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'17-'],[[7],[3,'index']]],[1,',']],[[2,'+'],[1,'16-'],[[7],[3,'index']]]])
Z(z[3])
Z([3,'矩形宫格（3列）'])
Z(z[5])
Z([3,'18'])
Z(z[7])
Z(z[3])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[149])
Z(z[149])
Z([3,'19'])
Z(z[14])
Z(z[15])
Z(z[16])
Z(z[17])
Z(z[15])
Z(z[3])
Z(z[20])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'20-'],[[7],[3,'index']]],[1,',']],[1,'19']])
Z(z[14])
Z(z[23])
Z(z[24])
Z(z[25])
Z(z[26])
Z(z[27])
Z([a,z[28][1]])
Z(z[3])
Z([3,'边框颜色（4列 无文字）'])
Z(z[5])
Z([3,'21'])
Z(z[7])
Z(z[3])
Z(z[9])
Z([3,'#03a9f4'])
Z([1,4])
Z(z[11])
Z([3,'22'])
Z(z[14])
Z(z[3])
Z([1,0])
Z([[2,'+'],[[2,'+'],[1,'23'],[1,',']],[1,'22']])
Z(z[14])
Z(z[23])
Z(z[24])
Z(z[25])
Z([3,'/static/c1.png'])
Z(z[3])
Z([1,1])
Z([[2,'+'],[[2,'+'],[1,'24'],[1,',']],[1,'22']])
Z(z[14])
Z(z[23])
Z(z[24])
Z(z[25])
Z([3,'/static/c2.png'])
Z(z[3])
Z([1,2])
Z([[2,'+'],[[2,'+'],[1,'25'],[1,',']],[1,'22']])
Z(z[14])
Z(z[23])
Z(z[24])
Z(z[25])
Z([3,'/static/c3.png'])
Z(z[3])
Z(z[10])
Z([[2,'+'],[[2,'+'],[1,'26'],[1,',']],[1,'22']])
Z(z[14])
Z(z[23])
Z(z[24])
Z(z[25])
Z([3,'/static/c4.png'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./node-modules/@dcloudio/uni-ui/lib/uni-badge/uni-badge.wxml','./node-modules/@dcloudio/uni-ui/lib/uni-grid-item/uni-grid-item.wxml','./node-modules/@dcloudio/uni-ui/lib/uni-grid/uni-grid.wxml','./node-modules/@dcloudio/uni-ui/lib/uni-section/uni-section.wxml','./pages/main/config.wxml','./pages/main/main.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_v()
_(r,oB)
if(_oz(z,0,e,s,gg)){oB.wxVkey=1
var xC=_mz(z,'text',['bindtap',1,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var oD=_oz(z,5,e,s,gg)
_(xC,oD)
_(oB,xC)
}
oB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var cF=_v()
_(r,cF)
if(_oz(z,0,e,s,gg)){cF.wxVkey=1
var hG=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var oH=_mz(z,'view',['bindtap',3,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var cI=_n('slot')
_(oH,cI)
_(hG,oH)
_(cF,hG)
}
cF.wxXCkey=1
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var lK=_n('view')
_rz(z,lK,'class',0,e,s,gg)
var aL=_mz(z,'view',['class',1,'data-ref',1,'id',2,'style',3],[],e,s,gg)
var tM=_n('slot')
_(aL,tM)
_(lK,aL)
_(r,lK)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var bO=_mz(z,'view',['nvue',-1,'class',0],[],e,s,gg)
var oP=_v()
_(bO,oP)
if(_oz(z,1,e,s,gg)){oP.wxVkey=1
var xQ=_n('view')
_rz(z,xQ,'class',2,e,s,gg)
var oR=_n('view')
_rz(z,oR,'class',3,e,s,gg)
_(xQ,oR)
_(oP,xQ)
}
var fS=_n('view')
_rz(z,fS,'class',4,e,s,gg)
var hU=_n('text')
_rz(z,hU,'class',5,e,s,gg)
var oV=_oz(z,6,e,s,gg)
_(hU,oV)
_(fS,hU)
var cT=_v()
_(fS,cT)
if(_oz(z,7,e,s,gg)){cT.wxVkey=1
var cW=_n('text')
_rz(z,cW,'class',8,e,s,gg)
var oX=_oz(z,9,e,s,gg)
_(cW,oX)
_(cT,cW)
}
cT.wxXCkey=1
_(bO,fS)
var lY=_n('slot')
_(bO,lY)
oP.wxXCkey=1
_(r,bO)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var t1=_n('view')
var e2=_oz(z,0,e,s,gg)
_(t1,e2)
_(r,t1)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var o4=_n('view')
_rz(z,o4,'class',0,e,s,gg)
var x5=_n('text')
_rz(z,x5,'class',1,e,s,gg)
var o6=_oz(z,2,e,s,gg)
_(x5,o6)
_(o4,x5)
var f7=_mz(z,'uni-section',['bind:__l',3,'title',1,'type',2,'vueId',3],[],e,s,gg)
_(o4,f7)
var c8=_n('view')
_rz(z,c8,'class',7,e,s,gg)
var h9=_mz(z,'uni-grid',['bind:__l',8,'bind:change',1,'column',2,'data-event-opts',3,'highlight',4,'vueId',5,'vueSlots',6],[],e,s,gg)
var o0=_v()
_(h9,o0)
var cAB=function(lCB,oBB,aDB,gg){
var eFB=_mz(z,'uni-grid-item',['bind:__l',19,'index',1,'vueId',2,'vueSlots',3],[],lCB,oBB,gg)
var bGB=_n('view')
_rz(z,bGB,'class',23,lCB,oBB,gg)
var oHB=_mz(z,'image',['class',24,'mode',1,'src',2],[],lCB,oBB,gg)
_(bGB,oHB)
var xIB=_n('text')
_rz(z,xIB,'class',27,lCB,oBB,gg)
var oJB=_oz(z,28,lCB,oBB,gg)
_(xIB,oJB)
_(bGB,xIB)
_(eFB,bGB)
_(aDB,eFB)
return aDB
}
o0.wxXCkey=4
_2z(z,17,cAB,e,s,gg,o0,'item','index','index')
_(c8,h9)
_(o4,c8)
var fKB=_mz(z,'uni-section',['bind:__l',29,'title',1,'type',2,'vueId',3],[],e,s,gg)
_(o4,fKB)
var cLB=_n('view')
_rz(z,cLB,'class',33,e,s,gg)
var hMB=_mz(z,'swiper',['class',34,'indicatorDots',1],[],e,s,gg)
var oNB=_n('swiper-item')
var cOB=_mz(z,'uni-grid',['bind:__l',36,'bind:change',1,'column',2,'data-event-opts',3,'highlight',4,'vueId',5,'vueSlots',6],[],e,s,gg)
var oPB=_v()
_(cOB,oPB)
var lQB=function(tSB,aRB,eTB,gg){
var oVB=_mz(z,'uni-grid-item',['bind:__l',47,'index',1,'vueId',2,'vueSlots',3],[],tSB,aRB,gg)
var xWB=_n('view')
_rz(z,xWB,'class',51,tSB,aRB,gg)
var oXB=_mz(z,'image',['class',52,'mode',1,'src',2],[],tSB,aRB,gg)
_(xWB,oXB)
var fYB=_n('text')
_rz(z,fYB,'class',55,tSB,aRB,gg)
var cZB=_oz(z,56,tSB,aRB,gg)
_(fYB,cZB)
_(xWB,fYB)
_(oVB,xWB)
_(eTB,oVB)
return eTB
}
oPB.wxXCkey=4
_2z(z,45,lQB,e,s,gg,oPB,'item','index','index')
_(oNB,cOB)
_(hMB,oNB)
var h1B=_n('swiper-item')
var o2B=_mz(z,'uni-grid',['bind:__l',57,'bind:change',1,'column',2,'data-event-opts',3,'highlight',4,'vueId',5,'vueSlots',6],[],e,s,gg)
var c3B=_v()
_(o2B,c3B)
var o4B=function(a6B,l5B,t7B,gg){
var b9B=_mz(z,'uni-grid-item',['bind:__l',68,'index',1,'vueId',2,'vueSlots',3],[],a6B,l5B,gg)
var o0B=_n('view')
_rz(z,o0B,'class',72,a6B,l5B,gg)
var xAC=_mz(z,'image',['class',73,'mode',1,'src',2],[],a6B,l5B,gg)
_(o0B,xAC)
var oBC=_n('text')
_rz(z,oBC,'class',76,a6B,l5B,gg)
var fCC=_oz(z,77,a6B,l5B,gg)
_(oBC,fCC)
_(o0B,oBC)
_(b9B,o0B)
_(t7B,b9B)
return t7B
}
c3B.wxXCkey=4
_2z(z,66,o4B,e,s,gg,c3B,'item','index','index')
_(h1B,o2B)
_(hMB,h1B)
var cDC=_n('swiper-item')
var hEC=_mz(z,'uni-grid',['bind:__l',78,'bind:change',1,'column',2,'data-event-opts',3,'highlight',4,'vueId',5,'vueSlots',6],[],e,s,gg)
var oFC=_v()
_(hEC,oFC)
var cGC=function(lIC,oHC,aJC,gg){
var eLC=_mz(z,'uni-grid-item',['bind:__l',89,'index',1,'vueId',2,'vueSlots',3],[],lIC,oHC,gg)
var bMC=_n('view')
_rz(z,bMC,'class',93,lIC,oHC,gg)
var oNC=_mz(z,'image',['class',94,'mode',1,'src',2],[],lIC,oHC,gg)
_(bMC,oNC)
var xOC=_n('text')
_rz(z,xOC,'class',97,lIC,oHC,gg)
var oPC=_oz(z,98,lIC,oHC,gg)
_(xOC,oPC)
_(bMC,xOC)
_(eLC,bMC)
_(aJC,eLC)
return aJC
}
oFC.wxXCkey=4
_2z(z,87,cGC,e,s,gg,oFC,'item','index','index')
_(cDC,hEC)
_(hMB,cDC)
_(cLB,hMB)
_(o4,cLB)
var fQC=_mz(z,'uni-section',['bind:__l',99,'title',1,'type',2,'vueId',3,'vueSlots',4],[],e,s,gg)
var cRC=_oz(z,104,e,s,gg)
_(fQC,cRC)
_(o4,fQC)
var hSC=_n('view')
_rz(z,hSC,'class',105,e,s,gg)
var oTC=_v()
_(hSC,oTC)
if(_oz(z,106,e,s,gg)){oTC.wxVkey=1
var oVC=_n('view')
_rz(z,oVC,'class',107,e,s,gg)
var lWC=_mz(z,'uni-grid',['bind:__l',108,'bind:change',1,'column',2,'data-event-opts',3,'highlight',4,'vueId',5,'vueSlots',6],[],e,s,gg)
var aXC=_v()
_(lWC,aXC)
var tYC=function(b1C,eZC,o2C,gg){
var o4C=_mz(z,'uni-grid-item',['bind:__l',119,'index',1,'vueId',2,'vueSlots',3],[],b1C,eZC,gg)
var f5C=_mz(z,'view',['class',123,'style',1],[],b1C,eZC,gg)
var c6C=_mz(z,'image',['class',125,'mode',1,'src',2],[],b1C,eZC,gg)
_(f5C,c6C)
var h7C=_n('text')
_rz(z,h7C,'class',128,b1C,eZC,gg)
var o8C=_oz(z,129,b1C,eZC,gg)
_(h7C,o8C)
_(f5C,h7C)
_(o4C,f5C)
_(o2C,o4C)
return o2C
}
aXC.wxXCkey=4
_2z(z,117,tYC,e,s,gg,aXC,'item','index','index')
_(oVC,lWC)
_(oTC,oVC)
}
var c9C=_mz(z,'button',['bindtap',130,'data-event-opts',1,'type',2],[],e,s,gg)
var o0C=_oz(z,133,e,s,gg)
_(c9C,o0C)
_(hSC,c9C)
var cUC=_v()
_(hSC,cUC)
if(_oz(z,134,e,s,gg)){cUC.wxVkey=1
var lAD=_mz(z,'button',['bindtap',135,'data-event-opts',1,'style',2,'type',3],[],e,s,gg)
var aBD=_oz(z,139,e,s,gg)
_(lAD,aBD)
_(cUC,lAD)
}
oTC.wxXCkey=1
oTC.wxXCkey=3
cUC.wxXCkey=1
_(o4,hSC)
var tCD=_mz(z,'uni-section',['bind:__l',140,'title',1,'type',2,'vueId',3],[],e,s,gg)
_(o4,tCD)
var eDD=_n('view')
_rz(z,eDD,'class',144,e,s,gg)
var bED=_mz(z,'uni-grid',['bind:__l',145,'bind:change',1,'column',2,'data-event-opts',3,'showBorder',4,'square',5,'vueId',6,'vueSlots',7],[],e,s,gg)
var oFD=_v()
_(bED,oFD)
var xGD=function(fID,oHD,cJD,gg){
var oLD=_v()
_(cJD,oLD)
if(_oz(z,157,fID,oHD,gg)){oLD.wxVkey=1
var cMD=_mz(z,'uni-grid-item',['bind:__l',158,'index',1,'vueId',2,'vueSlots',3],[],fID,oHD,gg)
var oND=_n('view')
_rz(z,oND,'class',162,fID,oHD,gg)
var aPD=_mz(z,'image',['class',163,'mode',1,'src',2],[],fID,oHD,gg)
_(oND,aPD)
var tQD=_n('text')
_rz(z,tQD,'class',166,fID,oHD,gg)
var eRD=_oz(z,167,fID,oHD,gg)
_(tQD,eRD)
_(oND,tQD)
var lOD=_v()
_(oND,lOD)
if(_oz(z,168,fID,oHD,gg)){lOD.wxVkey=1
var bSD=_n('view')
_rz(z,bSD,'class',169,fID,oHD,gg)
var oTD=_mz(z,'uni-badge',['bind:__l',170,'text',1,'type',2,'vueId',3],[],fID,oHD,gg)
_(bSD,oTD)
_(lOD,bSD)
}
lOD.wxXCkey=1
lOD.wxXCkey=3
_(cMD,oND)
_(oLD,cMD)
}
oLD.wxXCkey=1
oLD.wxXCkey=3
return cJD
}
oFD.wxXCkey=4
_2z(z,155,xGD,e,s,gg,oFD,'item','index','index')
_(eDD,bED)
_(o4,eDD)
var xUD=_mz(z,'uni-section',['bind:__l',174,'title',1,'type',2,'vueId',3],[],e,s,gg)
_(o4,xUD)
var oVD=_n('view')
_rz(z,oVD,'class',178,e,s,gg)
var fWD=_mz(z,'uni-grid',['bind:__l',179,'bind:change',1,'column',2,'data-event-opts',3,'highlight',4,'square',5,'vueId',6,'vueSlots',7],[],e,s,gg)
var cXD=_v()
_(fWD,cXD)
var hYD=function(c1D,oZD,o2D,gg){
var a4D=_mz(z,'uni-grid-item',['bind:__l',191,'index',1,'vueId',2,'vueSlots',3],[],c1D,oZD,gg)
var t5D=_n('view')
_rz(z,t5D,'class',195,c1D,oZD,gg)
var e6D=_mz(z,'image',['class',196,'mode',1,'src',2],[],c1D,oZD,gg)
_(t5D,e6D)
var b7D=_n('text')
_rz(z,b7D,'class',199,c1D,oZD,gg)
var o8D=_oz(z,200,c1D,oZD,gg)
_(b7D,o8D)
_(t5D,b7D)
_(a4D,t5D)
_(o2D,a4D)
return o2D
}
cXD.wxXCkey=4
_2z(z,189,hYD,e,s,gg,cXD,'item','index','index')
_(oVD,fWD)
_(o4,oVD)
var x9D=_mz(z,'uni-section',['bind:__l',201,'title',1,'type',2,'vueId',3],[],e,s,gg)
_(o4,x9D)
var o0D=_n('view')
_rz(z,o0D,'class',205,e,s,gg)
var fAE=_mz(z,'uni-grid',['bind:__l',206,'bind:change',1,'borderColor',2,'column',3,'data-event-opts',4,'vueId',5,'vueSlots',6],[],e,s,gg)
var cBE=_mz(z,'uni-grid-item',['bind:__l',213,'index',1,'vueId',2,'vueSlots',3],[],e,s,gg)
var hCE=_n('view')
_rz(z,hCE,'class',217,e,s,gg)
var oDE=_mz(z,'image',['class',218,'mode',1,'src',2],[],e,s,gg)
_(hCE,oDE)
_(cBE,hCE)
_(fAE,cBE)
var cEE=_mz(z,'uni-grid-item',['bind:__l',221,'index',1,'vueId',2,'vueSlots',3],[],e,s,gg)
var oFE=_n('view')
_rz(z,oFE,'class',225,e,s,gg)
var lGE=_mz(z,'image',['class',226,'mode',1,'src',2],[],e,s,gg)
_(oFE,lGE)
_(cEE,oFE)
_(fAE,cEE)
var aHE=_mz(z,'uni-grid-item',['bind:__l',229,'index',1,'vueId',2,'vueSlots',3],[],e,s,gg)
var tIE=_n('view')
_rz(z,tIE,'class',233,e,s,gg)
var eJE=_mz(z,'image',['class',234,'mode',1,'src',2],[],e,s,gg)
_(tIE,eJE)
_(aHE,tIE)
_(fAE,aHE)
var bKE=_mz(z,'uni-grid-item',['bind:__l',237,'index',1,'vueId',2,'vueSlots',3],[],e,s,gg)
var oLE=_n('view')
_rz(z,oLE,'class',241,e,s,gg)
var xME=_mz(z,'image',['class',242,'mode',1,'src',2],[],e,s,gg)
_(oLE,xME)
_(bKE,oLE)
_(fAE,bKE)
_(o0D,fAE)
_(o4,o0D)
_(r,o4)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var usingStyleSheetManager = !!window.__styleSheetManager__
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],[],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 )
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid );
}
}
Ca={};
css = makeup(file, opt);
if (usingStyleSheetManager) {
window.__styleSheetManager__.setCss(info.path, css);
return;
}
if ( !style )
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else
style.childNodes[0].nodeValue = css;
}
}
if (usingStyleSheetManager) {
window.__styleSheetManager__.addPath(info.path);
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['node-modules/@dcloudio/uni-ui/lib/uni-badge/uni-badge.wxss']=setCssToHead([".",[1],"uni-badge.",[1],"data-v-39eaf552 { -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; height: 20px; line-height: 20px; color: #333; border-radius: 100px; background-color: #f1f1f1; background-color: transparent; text-align: center; font-family: \x27Helvetica Neue\x27, Helvetica, sans-serif; font-size: 12px; padding: 0px 6px; }\n.",[1],"uni-badge--inverted.",[1],"data-v-39eaf552 { padding: 0 5px 0 0; color: #f1f1f1; }\n.",[1],"uni-badge--default.",[1],"data-v-39eaf552 { color: #333; background-color: #f1f1f1; }\n.",[1],"uni-badge--default-inverted.",[1],"data-v-39eaf552 { color: #999; background-color: transparent; }\n.",[1],"uni-badge--primary.",[1],"data-v-39eaf552 { color: #fff; background-color: #007aff; }\n.",[1],"uni-badge--primary-inverted.",[1],"data-v-39eaf552 { color: #007aff; background-color: transparent; }\n.",[1],"uni-badge--success.",[1],"data-v-39eaf552 { color: #fff; background-color: #4cd964; }\n.",[1],"uni-badge--success-inverted.",[1],"data-v-39eaf552 { color: #4cd964; background-color: transparent; }\n.",[1],"uni-badge--warning.",[1],"data-v-39eaf552 { color: #fff; background-color: #f0ad4e; }\n.",[1],"uni-badge--warning-inverted.",[1],"data-v-39eaf552 { color: #f0ad4e; background-color: transparent; }\n.",[1],"uni-badge--error.",[1],"data-v-39eaf552 { color: #fff; background-color: #dd524d; }\n.",[1],"uni-badge--error-inverted.",[1],"data-v-39eaf552 { color: #dd524d; background-color: transparent; }\n.",[1],"uni-badge--small.",[1],"data-v-39eaf552 { -webkit-transform: scale(0.8); transform: scale(0.8); -webkit-transform-origin: center center; transform-origin: center center; }\n",],undefined,{path:"./node-modules/@dcloudio/uni-ui/lib/uni-badge/uni-badge.wxss"});    
__wxAppCode__['node-modules/@dcloudio/uni-ui/lib/uni-badge/uni-badge.wxml']=$gwx('./node-modules/@dcloudio/uni-ui/lib/uni-badge/uni-badge.wxml');

__wxAppCode__['node-modules/@dcloudio/uni-ui/lib/uni-grid-item/uni-grid-item.wxss']=setCssToHead([".",[1],"uni-grid-item.",[1],"data-v-55e469c0 { height: 100%; display: -webkit-box; display: -webkit-flex; display: flex; }\n.",[1],"uni-grid-item__box.",[1],"data-v-55e469c0 { display: -webkit-box; display: -webkit-flex; display: flex; width: 100%; position: relative; -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; }\n.",[1],"uni-grid-item--border.",[1],"data-v-55e469c0 { position: relative; border-bottom-color: #c8c7cc; border-bottom-style: solid; border-bottom-width: 1px; border-right-color: #c8c7cc; border-right-style: solid; border-right-width: 1px; }\n.",[1],"uni-grid-item--border-top.",[1],"data-v-55e469c0 { border-top-color: #c8c7cc; border-top-style: solid; border-top-width: 1px; height: 100%; box-sizing: border-box; }\n.",[1],"uni-highlight.",[1],"data-v-55e469c0:active { background-color: #f1f1f1; }\n",],undefined,{path:"./node-modules/@dcloudio/uni-ui/lib/uni-grid-item/uni-grid-item.wxss"});    
__wxAppCode__['node-modules/@dcloudio/uni-ui/lib/uni-grid-item/uni-grid-item.wxml']=$gwx('./node-modules/@dcloudio/uni-ui/lib/uni-grid-item/uni-grid-item.wxml');

__wxAppCode__['node-modules/@dcloudio/uni-ui/lib/uni-grid/uni-grid.wxss']=setCssToHead([".",[1],"uni-grid-wrap.",[1],"data-v-09159438 { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; }\n.",[1],"uni-grid.",[1],"data-v-09159438 { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"uni-grid--border.",[1],"data-v-09159438 { border-left-color: #c8c7cc; border-left-style: solid; border-left-width: 1px; }\n",],undefined,{path:"./node-modules/@dcloudio/uni-ui/lib/uni-grid/uni-grid.wxss"});    
__wxAppCode__['node-modules/@dcloudio/uni-ui/lib/uni-grid/uni-grid.wxml']=$gwx('./node-modules/@dcloudio/uni-ui/lib/uni-grid/uni-grid.wxml');

__wxAppCode__['node-modules/@dcloudio/uni-ui/lib/uni-section/uni-section.wxss']=setCssToHead([".",[1],"uni-section.",[1],"data-v-19bcd5d4 { position: relative; display: -webkit-box; display: -webkit-flex; display: flex; margin-top: 10px; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; -webkit-box-align: center; -webkit-align-items: center; align-items: center; padding: 0 10px; height: 50px; background-color: #f8f8f8; font-weight: normal; }\n.",[1],"uni-section.",[1],"data-v-19bcd5d4:after { position: absolute; bottom: 0; right: 0; left: 0; height: 1px; content: \x27\x27; -webkit-transform: scaleY(0.5); transform: scaleY(0.5); background-color: #c8c7cc; }\n.",[1],"uni-section__head.",[1],"data-v-19bcd5d4 { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; margin-right: 10px; }\n.",[1],"line.",[1],"data-v-19bcd5d4 { height: 15px; background-color: #c0c0c0; border-radius: 5px; width: 3px; }\n.",[1],"circle.",[1],"data-v-19bcd5d4 { width: 8px; height: 8px; border-top-right-radius: 50px; border-top-left-radius: 50px; border-bottom-left-radius: 50px; border-bottom-right-radius: 50px; background-color: #c0c0c0; }\n.",[1],"uni-section__content.",[1],"data-v-19bcd5d4 { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; color: #333; }\n.",[1],"uni-section__content-title.",[1],"data-v-19bcd5d4 { font-size: ",[0,28],"; color: #333; }\n.",[1],"distraction.",[1],"data-v-19bcd5d4 { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"uni-section__content-sub.",[1],"data-v-19bcd5d4 { font-size: ",[0,24],"; color: #999; }\n",],undefined,{path:"./node-modules/@dcloudio/uni-ui/lib/uni-section/uni-section.wxss"});    
__wxAppCode__['node-modules/@dcloudio/uni-ui/lib/uni-section/uni-section.wxml']=$gwx('./node-modules/@dcloudio/uni-ui/lib/uni-section/uni-section.wxml');

__wxAppCode__['pages/main/config.wxss']=undefined;    
__wxAppCode__['pages/main/config.wxml']=$gwx('./pages/main/config.wxml');

__wxAppCode__['pages/main/main.wxss']=setCssToHead(["body { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; box-sizing: border-box; background-color: #efeff4; min-height: 100%; height: auto; }\nwx-view { font-size: 14px; line-height: inherit; }\n.",[1],"example { padding: 0 15px 15px; }\n.",[1],"example-info { padding: 15px; color: #3b4144; background: #ffffff; }\n.",[1],"example-body { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; flex-wrap: wrap; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; padding: 0; font-size: 14px; background-color: #ffffff; }\n.",[1],"example { padding: 0 15px; }\n.",[1],"example-info { display: block; padding: 15px; color: #3b4144; background-color: #ffffff; font-size: 14px; line-height: 20px; }\n.",[1],"example-info-text { font-size: 14px; line-height: 20px; color: #3b4144; }\n.",[1],"example-body { -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; padding: 15px; background-color: #ffffff; }\n.",[1],"word-btn-white { font-size: 18px; color: #ffffff; }\n.",[1],"word-btn { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; border-radius: 6px; height: 48px; margin: 15px; background-color: #007aff; }\n.",[1],"word-btn--hover { background-color: #4ca2ff; }\n.",[1],"image { width: ",[0,50],"; height: ",[0,50],"; }\n.",[1],"text { font-size: ",[0,26],"; margin-top: ",[0,10],"; }\n.",[1],"example-body { display: block; }\n.",[1],"grid-dynamic-box { margin-bottom: 15px; }\n.",[1],"grid-item-box { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; padding: 15px 0; }\n.",[1],"grid-dot { position: absolute; top: 5px; right: 15px; }\n.",[1],"swiper { height: 420px; }\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/main/main.wxss:241:1)",{path:"./pages/main/main.wxss"});    
__wxAppCode__['pages/main/main.wxml']=$gwx('./pages/main/main.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
