(()=>{var Qc=0,cl=1,jc=2;var sr=1,th=2,us=3,hi=0,Ye=1,Pn=2,bi=0,ds=1,hl=2,ul=3,dl=4,eh=5;var wi=100,nh=101,ih=102,sh=103,rh=104,ah=200,oh=201,lh=202,ch=203,fl=204,pl=205,hh=206,uh=207,dh=208,fh=209,ph=210,mh=211,gh=212,_h=213,xh=214,Qr=0,jr=1,ta=2,Qi=3,ea=4,na=5,ia=6,sa=7,Ra=0,vh=1,yh=2,Ln=0,ml=1,gl=2,_l=3,xl=4,vl=5,yl=6,Ml=7;var Sl=300,Ti=301,fs=302,Ca=303,Ia=304,Mi=1e3,wn=1001,ra=1002,Le=1003,Mh=1004;var rr=1005;var Xe=1006,Pa=1007;var Yn=1008;var Ke=1009,bl=1010,wl=1011,ps=1012,La=1013,xn=1014,un=1015,vn=1016,Da=1017,Na=1018,Ei=1020,Tl=35902,El=35899,Al=1021,Rl=1022,yn=1023,Hn=1026,Zn=1027,Ua=1028,Fa=1029,ui=1030,Oa=1031;var Ba=1033,ar=33776,or=33777,lr=33778,cr=33779,za=35840,ka=35841,Ga=35842,Va=35843,Ha=36196,Wa=37492,Xa=37496,qa=37488,Ya=37489,hr=37490,Za=37491,Ja=37808,$a=37809,Ka=37810,Qa=37811,ja=37812,to=37813,eo=37814,no=37815,io=37816,so=37817,ro=37818,ao=37819,oo=37820,lo=37821,co=36492,ho=36494,uo=36495,fo=36283,po=36284,ur=36285,mo=36286;var Ps=2300,aa=2301,$r=2302,jo=2303,tl=2400,el=2401,nl=2402;var Sh=3200;var go=0,bh=1,Jn="",ke="srgb",Ls="srgb-linear",Ds="linear",Qt="srgb";var Kr=7680;var wh=519,Th=512,Eh=513,Ah=514,Cl=515,Rh=516,Ch=517,Il=518,Pl=519,Ll=35044;var Dl="300 es",cn=2e3,ji=2001;function Bu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function zu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ns(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ih(){let i=Ns("canvas");return i.style.display="block",i}var yc={},ts=null;function Us(...i){let t="THREE."+i.shift();ts?ts("log",t,...i):console.log(t,...i)}function Ph(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Lt(...i){i=Ph(i);let t="THREE."+i.shift();if(ts)ts("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Pt(...i){i=Ph(i);let t="THREE."+i.shift();if(ts)ts("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Is(...i){let t=i.join(" ");t in yc||(yc[t]=!0,Lt(...i))}function Lh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Dh={[Qr]:Qr,[ta]:ia,[ea]:ea,[Qi]:na,[jr]:jr,[ia]:ta,[sa]:sa,[na]:Qi},Tn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Io=Math.PI/180,oa=180/Math.PI;function Ai(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function Jt(i,t,e){return Math.max(t,Math.min(e,i))}function ku(i,t){return(i%t+t)%t}function Po(i,t,e){return(1-e)*i+e*t}function Nh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _o(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Uh(i,t){if(t.constructor===Float32Array)return i;let e=_o(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Fh(i,t){if(t.constructor===Float32Array)return i;let e=_o(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Bl=class Bl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Bl.prototype.isVector2=!0;var Nt=Bl,En=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],p=n[s+2],_=n[s+3],h=r[a+0],u=r[a+1],m=r[a+2],g=r[a+3];if(_!==g||l!==h||c!==u||p!==m){let d=l*h+c*u+p*m+_*g;d<0&&(h=-h,u=-u,m=-m,g=-g,d=-d);let f=1-o;if(d<.9995){let y=Math.acos(d),A=Math.sin(y);f=Math.sin(f*y)/A,o=Math.sin(o*y)/A,l=l*f+h*o,c=c*f+u*o,p=p*f+m*o,_=_*f+g*o}else{l=l*f+h*o,c=c*f+u*o,p=p*f+m*o,_=_*f+g*o;let y=1/Math.sqrt(l*l+c*c+p*p+_*_);l*=y,c*=y,p*=y,_*=y}}t[e]=l,t[e+1]=c,t[e+2]=p,t[e+3]=_}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],p=n[s+3],_=r[a],h=r[a+1],u=r[a+2],m=r[a+3];return t[e]=o*m+p*_+l*u-c*h,t[e+1]=l*m+p*h+c*_-o*u,t[e+2]=c*m+p*u+o*h-l*_,t[e+3]=p*m-o*_-l*h-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),p=o(s/2),_=o(r/2),h=l(n/2),u=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=h*p*_+c*u*m,this._y=c*u*_-h*p*m,this._z=c*p*m+h*u*_,this._w=c*p*_-h*u*m;break;case"YXZ":this._x=h*p*_+c*u*m,this._y=c*u*_-h*p*m,this._z=c*p*m-h*u*_,this._w=c*p*_+h*u*m;break;case"ZXY":this._x=h*p*_-c*u*m,this._y=c*u*_+h*p*m,this._z=c*p*m+h*u*_,this._w=c*p*_-h*u*m;break;case"ZYX":this._x=h*p*_-c*u*m,this._y=c*u*_+h*p*m,this._z=c*p*m-h*u*_,this._w=c*p*_+h*u*m;break;case"YZX":this._x=h*p*_+c*u*m,this._y=c*u*_+h*p*m,this._z=c*p*m-h*u*_,this._w=c*p*_-h*u*m;break;case"XZY":this._x=h*p*_-c*u*m,this._y=c*u*_-h*p*m,this._z=c*p*m+h*u*_,this._w=c*p*_+h*u*m;break;default:Lt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],p=e[6],_=e[10],h=n+o+_;if(h>0){let u=.5/Math.sqrt(h+1);this._w=.25/u,this._x=(p-l)*u,this._y=(r-c)*u,this._z=(a-s)*u}else if(n>o&&n>_){let u=2*Math.sqrt(1+n-o-_);this._w=(p-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+c)/u}else if(o>_){let u=2*Math.sqrt(1+o-n-_);this._w=(r-c)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+p)/u}else{let u=2*Math.sqrt(1+_-n-o);this._w=(a-s)/u,this._x=(r+c)/u,this._y=(l+p)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,p=e._w;return this._x=n*p+a*o+s*c-r*l,this._y=s*p+a*l+r*o-n*c,this._z=r*p+a*c+n*l-s*o,this._w=a*p-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),p=Math.sin(c);l=Math.sin(l*c)/p,e=Math.sin(e*c)/p,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},zl=class zl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),p=2*(o*e-r*s),_=2*(r*n-a*e);return this.x=e+l*c+a*_-o*p,this.y=n+l*p+o*c-r*_,this.z=s+l*_+r*p-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Lo.copy(this).projectOnVector(t),this.sub(Lo)}reflect(t){return this.sub(Lo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zl.prototype.isVector3=!0;var F=zl,Lo=new F,Mc=new En,kl=class kl{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let p=this.elements;return p[0]=t,p[1]=s,p[2]=o,p[3]=e,p[4]=r,p[5]=l,p[6]=n,p[7]=a,p[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],p=n[4],_=n[7],h=n[2],u=n[5],m=n[8],g=s[0],d=s[3],f=s[6],y=s[1],A=s[4],T=s[7],R=s[2],b=s[5],x=s[8];return r[0]=a*g+o*y+l*R,r[3]=a*d+o*A+l*b,r[6]=a*f+o*T+l*x,r[1]=c*g+p*y+_*R,r[4]=c*d+p*A+_*b,r[7]=c*f+p*T+_*x,r[2]=h*g+u*y+m*R,r[5]=h*d+u*A+m*b,r[8]=h*f+u*T+m*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],p=t[8];return e*a*p-e*o*c-n*r*p+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],p=t[8],_=p*a-o*c,h=o*l-p*r,u=c*r-a*l,m=e*_+n*h+s*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/m;return t[0]=_*g,t[1]=(s*c-p*n)*g,t[2]=(o*n-s*a)*g,t[3]=h*g,t[4]=(p*e-s*l)*g,t[5]=(s*r-o*e)*g,t[6]=u*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Is("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Do.makeScale(t,e)),this}rotate(t){return Is("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Do.makeRotation(-t)),this}translate(t,e){return Is("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Do.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};kl.prototype.isMatrix3=!0;var Ut=kl,Do=new Ut,Sc=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bc=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gu(){let i={enabled:!0,workingColorSpace:Ls,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Qt&&(s.r=Vn(s.r),s.g=Vn(s.g),s.b=Vn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qt&&(s.r=Ki(s.r),s.g=Ki(s.g),s.b=Ki(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Jn?Ds:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ls]:{primaries:t,whitePoint:n,transfer:Ds,toXYZ:Sc,fromXYZ:bc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:t,whitePoint:n,transfer:Qt,toXYZ:Sc,fromXYZ:bc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}}),i}var Zt=Gu();function Vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Di,la=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Di===void 0&&(Di=Ns("canvas")),Di.width=t.width,Di.height=t.height;let s=Di.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Di}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Ns("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Vn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vn(e[n]/255)*255):e[n]=Vn(e[n]);return{data:e,width:t.width,height:t.height}}else return Lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Vu=0,es=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=Ai(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(No(s[a].image)):r.push(No(s[a]))}else r=No(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function No(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?la.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Lt("Texture: Unable to serialize Texture."),{})}var Hu=0,Uo=new F,qe=class i extends Tn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=wn,s=wn,r=Xe,a=Yn,o=yn,l=Ke,c=i.DEFAULT_ANISOTROPY,p=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=Ai(),this.name="",this.source=new es(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Uo).x}get height(){return this.source.getSize(Uo).y}get depth(){return this.source.getSize(Uo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Lt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Lt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mi:t.x=t.x-Math.floor(t.x);break;case wn:t.x=t.x<0?0:1;break;case ra:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mi:t.y=t.y-Math.floor(t.y);break;case wn:t.y=t.y<0?0:1;break;case ra:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=Sl;qe.DEFAULT_ANISOTROPY=1;var Gl=class Gl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],p=l[4],_=l[8],h=l[1],u=l[5],m=l[9],g=l[2],d=l[6],f=l[10];if(Math.abs(p-h)<.01&&Math.abs(_-g)<.01&&Math.abs(m-d)<.01){if(Math.abs(p+h)<.1&&Math.abs(_+g)<.1&&Math.abs(m+d)<.1&&Math.abs(c+u+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,T=(u+1)/2,R=(f+1)/2,b=(p+h)/4,x=(_+g)/4,w=(m+d)/4;return A>T&&A>R?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=b/n,r=x/n):T>R?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=b/s,r=w/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=x/r,s=w/r),this.set(n,s,r,e),this}let y=Math.sqrt((d-m)*(d-m)+(_-g)*(_-g)+(h-p)*(h-p));return Math.abs(y)<.001&&(y=1),this.x=(d-m)/y,this.y=(_-g)/y,this.z=(h-p)/y,this.w=Math.acos((c+u+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Gl.prototype.isVector4=!0;var de=Gl,ca=class extends Tn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new qe({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Xe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new es(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},tn=class extends ca{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Fs=class extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ha=class extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Aa=class Aa{constructor(t,e,n,s,r,a,o,l,c,p,_,h,u,m,g,d){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,p,_,h,u,m,g,d)}set(t,e,n,s,r,a,o,l,c,p,_,h,u,m,g,d){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=p,f[10]=_,f[14]=h,f[3]=u,f[7]=m,f[11]=g,f[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Aa().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ni.setFromMatrixColumn(t,0).length(),r=1/Ni.setFromMatrixColumn(t,1).length(),a=1/Ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),p=Math.cos(r),_=Math.sin(r);if(t.order==="XYZ"){let h=a*p,u=a*_,m=o*p,g=o*_;e[0]=l*p,e[4]=-l*_,e[8]=c,e[1]=u+m*c,e[5]=h-g*c,e[9]=-o*l,e[2]=g-h*c,e[6]=m+u*c,e[10]=a*l}else if(t.order==="YXZ"){let h=l*p,u=l*_,m=c*p,g=c*_;e[0]=h+g*o,e[4]=m*o-u,e[8]=a*c,e[1]=a*_,e[5]=a*p,e[9]=-o,e[2]=u*o-m,e[6]=g+h*o,e[10]=a*l}else if(t.order==="ZXY"){let h=l*p,u=l*_,m=c*p,g=c*_;e[0]=h-g*o,e[4]=-a*_,e[8]=m+u*o,e[1]=u+m*o,e[5]=a*p,e[9]=g-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let h=a*p,u=a*_,m=o*p,g=o*_;e[0]=l*p,e[4]=m*c-u,e[8]=h*c+g,e[1]=l*_,e[5]=g*c+h,e[9]=u*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let h=a*l,u=a*c,m=o*l,g=o*c;e[0]=l*p,e[4]=g-h*_,e[8]=m*_+u,e[1]=_,e[5]=a*p,e[9]=-o*p,e[2]=-c*p,e[6]=u*_+m,e[10]=h-g*_}else if(t.order==="XZY"){let h=a*l,u=a*c,m=o*l,g=o*c;e[0]=l*p,e[4]=-_,e[8]=c*p,e[1]=h*_+g,e[5]=a*p,e[9]=u*_-m,e[2]=m*_-u,e[6]=o*p,e[10]=g*_+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wu,t,Xu)}lookAt(t,e,n){let s=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),ti.crossVectors(n,Qe),ti.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),ti.crossVectors(n,Qe)),ti.normalize(),wr.crossVectors(Qe,ti),s[0]=ti.x,s[4]=wr.x,s[8]=Qe.x,s[1]=ti.y,s[5]=wr.y,s[9]=Qe.y,s[2]=ti.z,s[6]=wr.z,s[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],p=n[1],_=n[5],h=n[9],u=n[13],m=n[2],g=n[6],d=n[10],f=n[14],y=n[3],A=n[7],T=n[11],R=n[15],b=s[0],x=s[4],w=s[8],L=s[12],C=s[1],N=s[5],O=s[9],V=s[13],P=s[2],W=s[6],Z=s[10],H=s[14],it=s[3],Y=s[7],tt=s[11],et=s[15];return r[0]=a*b+o*C+l*P+c*it,r[4]=a*x+o*N+l*W+c*Y,r[8]=a*w+o*O+l*Z+c*tt,r[12]=a*L+o*V+l*H+c*et,r[1]=p*b+_*C+h*P+u*it,r[5]=p*x+_*N+h*W+u*Y,r[9]=p*w+_*O+h*Z+u*tt,r[13]=p*L+_*V+h*H+u*et,r[2]=m*b+g*C+d*P+f*it,r[6]=m*x+g*N+d*W+f*Y,r[10]=m*w+g*O+d*Z+f*tt,r[14]=m*L+g*V+d*H+f*et,r[3]=y*b+A*C+T*P+R*it,r[7]=y*x+A*N+T*W+R*Y,r[11]=y*w+A*O+T*Z+R*tt,r[15]=y*L+A*V+T*H+R*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],p=t[2],_=t[6],h=t[10],u=t[14],m=t[3],g=t[7],d=t[11],f=t[15],y=l*u-c*h,A=o*u-c*_,T=o*h-l*_,R=a*u-c*p,b=a*h-l*p,x=a*_-o*p;return e*(g*y-d*A+f*T)-n*(m*y-d*R+f*b)+s*(m*A-g*R+f*x)-r*(m*T-g*b+d*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],p=t[10];return e*(a*p-o*c)-n*(r*p-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],p=t[8],_=t[9],h=t[10],u=t[11],m=t[12],g=t[13],d=t[14],f=t[15],y=e*o-n*a,A=e*l-s*a,T=e*c-r*a,R=n*l-s*o,b=n*c-r*o,x=s*c-r*l,w=p*g-_*m,L=p*d-h*m,C=p*f-u*m,N=_*d-h*g,O=_*f-u*g,V=h*f-u*d,P=y*V-A*O+T*N+R*C-b*L+x*w;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/P;return t[0]=(o*V-l*O+c*N)*W,t[1]=(s*O-n*V-r*N)*W,t[2]=(g*x-d*b+f*R)*W,t[3]=(h*b-_*x-u*R)*W,t[4]=(l*C-a*V-c*L)*W,t[5]=(e*V-s*C+r*L)*W,t[6]=(d*T-m*x-f*A)*W,t[7]=(p*x-h*T+u*A)*W,t[8]=(a*O-o*C+c*w)*W,t[9]=(n*C-e*O-r*w)*W,t[10]=(m*b-g*T+f*y)*W,t[11]=(_*T-p*b-u*y)*W,t[12]=(o*L-a*N-l*w)*W,t[13]=(e*N-n*L+s*w)*W,t[14]=(g*A-m*R-d*y)*W,t[15]=(p*R-_*A+h*y)*W,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,p=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,p*o+n,p*l-s*a,0,c*l-s*o,p*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,p=a+a,_=o+o,h=r*c,u=r*p,m=r*_,g=a*p,d=a*_,f=o*_,y=l*c,A=l*p,T=l*_,R=n.x,b=n.y,x=n.z;return s[0]=(1-(g+f))*R,s[1]=(u+T)*R,s[2]=(m-A)*R,s[3]=0,s[4]=(u-T)*b,s[5]=(1-(h+f))*b,s[6]=(d+y)*b,s[7]=0,s[8]=(m+A)*x,s[9]=(d-y)*x,s[10]=(1-(h+g))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ni.set(s[0],s[1],s[2]).length(),o=Ni.set(s[4],s[5],s[6]).length(),l=Ni.set(s[8],s[9],s[10]).length();r<0&&(a=-a),pn.copy(this);let c=1/a,p=1/o,_=1/l;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=p,pn.elements[5]*=p,pn.elements[6]*=p,pn.elements[8]*=_,pn.elements[9]*=_,pn.elements[10]*=_,e.setFromRotationMatrix(pn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=cn,l=!1){let c=this.elements,p=2*r/(e-t),_=2*r/(n-s),h=(e+t)/(e-t),u=(n+s)/(n-s),m,g;if(l)m=r/(a-r),g=a*r/(a-r);else if(o===cn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ji)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=p,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=_,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=cn,l=!1){let c=this.elements,p=2/(e-t),_=2/(n-s),h=-(e+t)/(e-t),u=-(n+s)/(n-s),m,g;if(l)m=1/(a-r),g=a/(a-r);else if(o===cn)m=-2/(a-r),g=-(a+r)/(a-r);else if(o===ji)m=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=p,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=_,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Aa.prototype.isMatrix4=!0;var jt=Aa,Ni=new F,pn=new jt,Wu=new F(0,0,0),Xu=new F(1,1,1),ti=new F,wr=new F,Qe=new F,wc=new jt,Tc=new En,Wn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],p=s[9],_=s[2],h=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-p,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-_,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-_,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Jt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(h,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,c),this._y=Math.atan2(-_,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-p,u),this._y=0);break;default:Lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Tc.setFromEuler(this),this.setFromQuaternion(Tc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wn.DEFAULT_ORDER="XYZ";var ns=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},qu=0,Ec=new F,Ui=new En,Fn=new jt,Tr=new F,Ms=new F,Yu=new F,Zu=new En,Ac=new F(1,0,0),Rc=new F(0,1,0),Cc=new F(0,0,1),Ic={type:"added"},Ju={type:"removed"},Fi={type:"childadded",child:null},Fo={type:"childremoved",child:null},Se=class i extends Tn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,e=new Wn,n=new En,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new jt},normalMatrix:{value:new Ut}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ns,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.premultiply(Ui),this}rotateX(t){return this.rotateOnAxis(Ac,t)}rotateY(t){return this.rotateOnAxis(Rc,t)}rotateZ(t){return this.rotateOnAxis(Cc,t)}translateOnAxis(t,e){return Ec.copy(t).applyQuaternion(this.quaternion),this.position.add(Ec.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ac,t)}translateY(t){return this.translateOnAxis(Rc,t)}translateZ(t){return this.translateOnAxis(Cc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Tr.copy(t):Tr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Ms,Tr,this.up):Fn.lookAt(Tr,Ms,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),Ui.setFromRotationMatrix(Fn),this.quaternion.premultiply(Ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Pt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ic),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ju),Fo.child=t,this.dispatchEvent(Fo),Fo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ic),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,t,Yu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,Zu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,p=l.length;c<p;c++){let _=l[c];r(t.shapes,_)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),p=a(t.images),_=a(t.shapes),h=a(t.skeletons),u=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),p.length>0&&(n.images=p),_.length>0&&(n.shapes=_),h.length>0&&(n.skeletons=h),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let p=o[c];delete p.metadata,l.push(p)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Se.DEFAULT_UP=new F(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ht=class extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}},$u={type:"move"},is=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let g of t.hand.values()){let d=e.getJointPose(g,n),f=this._getHandJoint(c,g);d!==null&&(f.matrix.fromArray(d.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=d.radius),f.visible=d!==null}let p=c.joints["index-finger-tip"],_=c.joints["thumb-tip"],h=p.position.distanceTo(_.position),u=.02,m=.005;c.inputState.pinching&&h>u+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=u-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($u)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ht;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Er={h:0,s:0,l:0};function Oo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=ku(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Oo(a,r,t+1/3),this.g=Oo(a,r,t),this.b=Oo(a,r,t-1/3)}return Zt.colorSpaceToWorking(this,s),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&Lt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Lt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Lt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){let n=Oh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Lt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vn(t.r),this.g=Vn(t.g),this.b=Vn(t.b),this}copyLinearToSRGB(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return Zt.workingToColorSpace(ze.copy(this),t),Math.round(Jt(ze.r*255,0,255))*65536+Math.round(Jt(ze.g*255,0,255))*256+Math.round(Jt(ze.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.workingToColorSpace(ze.copy(this),e);let n=ze.r,s=ze.g,r=ze.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,p=(o+a)/2;if(o===a)l=0,c=0;else{let _=a-o;switch(c=p<=.5?_/(a+o):_/(2-a-o),a){case n:l=(s-r)/_+(s<r?6:0);break;case s:l=(r-n)/_+2;break;case r:l=(n-s)/_+4;break}l/=6}return t.h=l,t.s=c,t.l=p,t}getRGB(t,e=Zt.workingColorSpace){return Zt.workingToColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=ke){Zt.workingToColorSpace(ze.copy(this),t);let e=ze.r,n=ze.g,s=ze.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(Er);let n=Po(ei.h,Er.h,e),s=Po(ei.s,Er.s,e),r=Po(ei.l,Er.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ze=new kt;kt.NAMES=Oh;var Os=class extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},mn=new F,On=new F,Bo=new F,Bn=new F,Oi=new F,Bi=new F,Pc=new F,zo=new F,ko=new F,Go=new F,Vo=new de,Ho=new de,Wo=new de,Gn=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),mn.subVectors(t,e),s.cross(mn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){mn.subVectors(s,e),On.subVectors(n,e),Bo.subVectors(t,e);let a=mn.dot(mn),o=mn.dot(On),l=mn.dot(Bo),c=On.dot(On),p=On.dot(Bo),_=a*c-o*o;if(_===0)return r.set(0,0,0),null;let h=1/_,u=(c*l-o*p)*h,m=(a*p-o*l)*h;return r.set(1-u-m,m,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(a,Bn.y),l.addScaledVector(o,Bn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Vo.setScalar(0),Ho.setScalar(0),Wo.setScalar(0),Vo.fromBufferAttribute(t,e),Ho.fromBufferAttribute(t,n),Wo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Vo,r.x),a.addScaledVector(Ho,r.y),a.addScaledVector(Wo,r.z),a}static isFrontFacing(t,e,n,s){return mn.subVectors(n,e),On.subVectors(t,e),mn.cross(On).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),mn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Oi.subVectors(s,n),Bi.subVectors(r,n),zo.subVectors(t,n);let l=Oi.dot(zo),c=Bi.dot(zo);if(l<=0&&c<=0)return e.copy(n);ko.subVectors(t,s);let p=Oi.dot(ko),_=Bi.dot(ko);if(p>=0&&_<=p)return e.copy(s);let h=l*_-p*c;if(h<=0&&l>=0&&p<=0&&l-p>0)return a=l/(l-p),e.copy(n).addScaledVector(Oi,a);Go.subVectors(t,r);let u=Oi.dot(Go),m=Bi.dot(Go);if(m>=0&&u<=m)return e.copy(r);let g=u*c-l*m;if(g<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Bi,o);let d=p*m-u*_;if(d<=0&&_-p>=0&&u-m>=0)return Pc.subVectors(r,s),o=(_-p)/(_-p+(u-m)),e.copy(s).addScaledVector(Pc,o);let f=1/(d+g+h);return a=g*f,o=h*f,e.copy(n).addScaledVector(Oi,a).addScaledVector(Bi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},An=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,gn):gn.fromBufferAttribute(r,a),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ar.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ar.copy(n.boundingBox)),Ar.applyMatrix4(t.matrixWorld),this.union(Ar)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ss),Rr.subVectors(this.max,Ss),zi.subVectors(t.a,Ss),ki.subVectors(t.b,Ss),Gi.subVectors(t.c,Ss),ni.subVectors(ki,zi),ii.subVectors(Gi,ki),_i.subVectors(zi,Gi);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-_i.z,_i.y,ni.z,0,-ni.x,ii.z,0,-ii.x,_i.z,0,-_i.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-_i.y,_i.x,0];return!Xo(e,zi,ki,Gi,Rr)||(e=[1,0,0,0,1,0,0,0,1],!Xo(e,zi,ki,Gi,Rr))?!1:(Cr.crossVectors(ni,ii),e=[Cr.x,Cr.y,Cr.z],Xo(e,zi,ki,Gi,Rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},zn=[new F,new F,new F,new F,new F,new F,new F,new F],gn=new F,Ar=new An,zi=new F,ki=new F,Gi=new F,ni=new F,ii=new F,_i=new F,Ss=new F,Rr=new F,Cr=new F,xi=new F;function Xo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){xi.fromArray(i,r);let o=s.x*Math.abs(xi.x)+s.y*Math.abs(xi.y)+s.z*Math.abs(xi.z),l=t.dot(xi),c=e.dot(xi),p=n.dot(xi);if(Math.max(-Math.max(l,c,p),Math.min(l,c,p))>o)return!1}return!0}var Me=new F,Ir=new Nt,Ku=0,hn=class extends Tn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ku++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ll,this.updateRanges=[],this.gpuType=un,this.version=0,this._normalizationScale=t!==void 0?_o(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ir.fromBufferAttribute(this,e),Ir.applyMatrix3(t),this.setXY(e,Ir.x,Ir.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Uh(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Fh(t,this.array)}};var Bs=class extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var zs=class extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ie=class extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Qu=new An,bs=new F,qo=new F,Xn=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Qu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bs.subVectors(t,this.center);let e=bs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(bs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bs.copy(t.center).add(qo)),this.expandByPoint(bs.copy(t.center).sub(qo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ju=0,ln=new jt,Yo=new Se,Vi=new F,je=new An,ws=new An,Pe=new F,Ue=class i extends Tn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bu(t)?zs:Bs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return Yo.lookAt(t),Yo.updateMatrix(),this.applyMatrix4(Yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ie(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new An);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];je.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ws.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(je.min,ws.min),je.expandByPoint(Pe),Pe.addVectors(je.max,ws.max),je.expandByPoint(Pe)):(je.expandByPoint(ws.min),je.expandByPoint(ws.max))}je.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Pe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Pe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,p=o.count;c<p;c++)Pe.fromBufferAttribute(o,c),l&&(Vi.fromBufferAttribute(t,c),Pe.add(Vi)),s=Math.max(s,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new hn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let L=0;L<n.count;L++)o[L]=new F,l[L]=new F;let p=new F,_=new F,h=new F,u=new Nt,m=new Nt,g=new Nt,d=new F,f=new F;function y(L,C,N){c[L]=c[C]=c[N]=1,p.fromBufferAttribute(n,L),_.fromBufferAttribute(n,C),h.fromBufferAttribute(n,N),u.fromBufferAttribute(r,L),m.fromBufferAttribute(r,C),g.fromBufferAttribute(r,N),_.sub(p),h.sub(p),m.sub(u),g.sub(u);let O=1/(m.x*g.y-g.x*m.y);isFinite(O)&&(d.copy(_).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(O),f.copy(h).multiplyScalar(m.x).addScaledVector(_,-g.x).multiplyScalar(O),o[L].add(d),o[C].add(d),o[N].add(d),l[L].add(f),l[C].add(f),l[N].add(f))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let L=0,C=A.length;L<C;++L){let N=A[L],O=N.start,V=N.count;for(let P=O,W=O+V;P<W;P+=3)y(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let T=new F,R=new F,b=new F,x=new F;function w(L){b.fromBufferAttribute(s,L),x.copy(b);let C=o[L];T.copy(C),T.sub(b.multiplyScalar(b.dot(C))).normalize(),R.crossVectors(x,C);let O=R.dot(l[L])<0?-1:1;a.setXYZW(L,T.x,T.y,T.z,O)}for(let L=0,C=n.count;L<C;++L)c[L]&&w(L);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,u=n.count;h<u;h++)n.setXYZ(h,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,p=new F,_=new F;if(t)for(let h=0,u=t.count;h<u;h+=3){let m=t.getX(h+0),g=t.getX(h+1),d=t.getX(h+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,d),p.subVectors(a,r),_.subVectors(s,r),p.cross(_),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,d),o.add(p),l.add(p),c.add(p),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,u=e.count;h<u;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),p.subVectors(a,r),_.subVectors(s,r),p.cross(_),n.setXYZ(h+0,p.x,p.y,p.z),n.setXYZ(h+1,p.x,p.y,p.z),n.setXYZ(h+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,l){let c=o.array,p=o.itemSize,_=o.normalized,h=new c.constructor(l.length*p),u=0,m=0;for(let g=0,d=l.length;g<d;g++){o.isInterleavedBufferAttribute?u=l[g]*o.data.stride+o.offset:u=l[g]*p;for(let f=0;f<p;f++)h[m++]=c[u++]}return new hn(h,p,_)}if(this.index===null)return Lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let p=0,_=c.length;p<_;p++){let h=c[p],u=t(h,n);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],p=[];for(let _=0,h=c.length;_<h;_++){let u=c[_];p.push(u.toJSON(t.data))}p.length>0&&(s[l]=p,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let p=s[c];this.setAttribute(c,p.clone(e))}let r=t.morphAttributes;for(let c in r){let p=[],_=r[c];for(let h=0,u=_.length;h<u;h++)p.push(_[h].clone(e));this.morphAttributes[c]=p}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,p=a.length;c<p;c++){let _=a[c];this.addGroup(_.start,_.count,_.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ua=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ll,this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Lc(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Lc(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Lc(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Ai()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var We=new F,ks=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?_o(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Us("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new hn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Us("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Uh(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Fh(t,this.data.array)}},Zo=new F,td=new F,ed=new Ut,_n=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Zo.subVectors(n,e).cross(td.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Zo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ed.getNormalMatrix(t),s=this.coplanarPoint(Zo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},nd=0,Rn=class extends Tn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=ds,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fl,this.blendDst=pl,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Lt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Lt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new _n().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Nt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Nt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ss=class extends Rn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Hi,Ts=new F,Wi=new F,Xi=new F,qi=new Nt,Es=new Nt,Bh=new jt,Pr=new F,As=new F,Lr=new F,Dc=new Nt,Jo=new Nt,Nc=new Nt,Gs=class extends Se{constructor(t=new ss){if(super(),this.isSprite=!0,this.type="Sprite",Hi===void 0){Hi=new Ue;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ua(e,5);Hi.setIndex([0,1,2,0,2,3]),Hi.setAttribute("position",new ks(n,3,0,!1)),Hi.setAttribute("uv",new ks(n,2,3,!1))}this.geometry=Hi,this.material=t,this.center=new Nt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Pt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Wi.setFromMatrixScale(this.matrixWorld),Bh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Xi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wi.multiplyScalar(-Xi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Dr(Pr.set(-.5,-.5,0),Xi,a,Wi,s,r),Dr(As.set(.5,-.5,0),Xi,a,Wi,s,r),Dr(Lr.set(.5,.5,0),Xi,a,Wi,s,r),Dc.set(0,0),Jo.set(1,0),Nc.set(1,1);let o=t.ray.intersectTriangle(Pr,As,Lr,!1,Ts);if(o===null&&(Dr(As.set(-.5,.5,0),Xi,a,Wi,s,r),Jo.set(0,1),o=t.ray.intersectTriangle(Pr,Lr,As,!1,Ts),o===null))return;let l=t.ray.origin.distanceTo(Ts);l<t.near||l>t.far||e.push({distance:l,point:Ts.clone(),uv:Gn.getInterpolation(Ts,Pr,As,Lr,Dc,Jo,Nc,new Nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Dr(i,t,e,n,s,r){qi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Es.x=r*qi.x-s*qi.y,Es.y=s*qi.x+r*qi.y):Es.copy(qi),i.copy(t),i.x+=Es.x,i.y+=Es.y,i.applyMatrix4(Bh)}var kn=new F,$o=new F,Nr=new F,Ur=new F,rs=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){$o.copy(t).add(e).multiplyScalar(.5),Nr.copy(e).sub(t).normalize(),Ur.copy(this.origin).sub($o);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Nr),o=Ur.dot(this.direction),l=-Ur.dot(Nr),c=Ur.lengthSq(),p=Math.abs(1-a*a),_,h,u,m;if(p>0)if(_=a*l-o,h=a*o-l,m=r*p,_>=0)if(h>=-m)if(h<=m){let g=1/p;_*=g,h*=g,u=_*(_+a*h+2*o)+h*(a*_+h+2*l)+c}else h=r,_=Math.max(0,-(a*h+o)),u=-_*_+h*(h+2*l)+c;else h=-r,_=Math.max(0,-(a*h+o)),u=-_*_+h*(h+2*l)+c;else h<=-m?(_=Math.max(0,-(-a*r+o)),h=_>0?-r:Math.min(Math.max(-r,-l),r),u=-_*_+h*(h+2*l)+c):h<=m?(_=0,h=Math.min(Math.max(-r,-l),r),u=h*(h+2*l)+c):(_=Math.max(0,-(a*r+o)),h=_>0?r:Math.min(Math.max(-r,-l),r),u=-_*_+h*(h+2*l)+c);else h=a>0?-r:r,_=Math.max(0,-(a*h+o)),u=-_*_+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,_),s&&s.copy($o).addScaledVector(Nr,h),u}intersectSphere(t,e){if(t.radius<0)return null;kn.subVectors(t.center,this.origin);let n=kn.dot(this.direction),s=kn.dot(kn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),p>=0?(r=(t.min.y-h.y)*p,a=(t.max.y-h.y)*p):(r=(t.max.y-h.y)*p,a=(t.min.y-h.y)*p),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),_>=0?(o=(t.min.z-h.z)*_,l=(t.max.z-h.z)*_):(o=(t.max.z-h.z)*_,l=(t.min.z-h.z)*_),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,p=o.z,_=t.x-a.x,h=t.y-a.y,u=t.z-a.z,m=e.x-a.x,g=e.y-a.y,d=e.z-a.z,f=n.x-a.x,y=n.y-a.y,A=n.z-a.z,T=Math.abs(l),R=Math.abs(c),b=Math.abs(p),x,w,L,C,N,O,V,P,W,Z,H,it;if(T>=R&&T>=b?(L=l,O=_,W=m,it=f,l>=0?(x=c,w=p,C=h,N=u,V=g,P=d,Z=y,H=A):(x=p,w=c,C=u,N=h,V=d,P=g,Z=A,H=y)):R>=b?(L=c,O=h,W=g,it=y,c>=0?(x=p,w=l,C=u,N=_,V=d,P=m,Z=A,H=f):(x=l,w=p,C=_,N=u,V=m,P=d,Z=f,H=A)):(L=p,O=u,W=d,it=A,p>=0?(x=l,w=c,C=_,N=h,V=m,P=g,Z=f,H=y):(x=c,w=l,C=h,N=_,V=g,P=m,Z=y,H=f)),L===0)return null;let Y=x/L,tt=w/L,et=1/L,bt=C-Y*O,Ot=N-tt*O,K=V-Y*W,gt=P-tt*W,yt=Z-Y*it,Rt=H-tt*it,_t=yt*gt-Rt*K,zt=bt*Rt-Ot*yt,ve=K*Ot-gt*bt;if(s){if(_t<0||zt<0||ve<0)return null}else if((_t<0||zt<0||ve<0)&&(_t>0||zt>0||ve>0))return null;let It=_t+zt+ve;if(It===0)return null;let ee=et*(_t*O+zt*W+ve*it);return(It>0?ee<0:ee>0)?null:this.at(ee/It,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Je=class extends Rn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Uc=new jt,vi=new rs,Fr=new Xn,Fc=new F,Or=new F,Br=new F,zr=new F,Ko=new F,kr=new F,Oc=new F,Gr=new F,te=class extends Se{constructor(t=new Ue,e=new Je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){kr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let p=o[l],_=r[l];p!==0&&(Ko.fromBufferAttribute(_,t),a?kr.addScaledVector(Ko,p):kr.addScaledVector(Ko.sub(e),p))}e.add(kr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(r),vi.copy(t.ray).recast(t.near),!(Fr.containsPoint(vi.origin)===!1&&(vi.intersectSphere(Fr,Fc)===null||vi.origin.distanceToSquared(Fc)>(t.far-t.near)**2))&&(Uc.copy(r).invert(),vi.copy(t.ray).applyMatrix4(Uc),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,p=r.attributes.uv1,_=r.attributes.normal,h=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,g=h.length;m<g;m++){let d=h[m],f=a[d.materialIndex],y=Math.max(d.start,u.start),A=Math.min(o.count,Math.min(d.start+d.count,u.start+u.count));for(let T=y,R=A;T<R;T+=3){let b=o.getX(T),x=o.getX(T+1),w=o.getX(T+2);s=Vr(this,f,t,n,c,p,_,b,x,w),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let m=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let d=m,f=g;d<f;d+=3){let y=o.getX(d),A=o.getX(d+1),T=o.getX(d+2);s=Vr(this,a,t,n,c,p,_,y,A,T),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,g=h.length;m<g;m++){let d=h[m],f=a[d.materialIndex],y=Math.max(d.start,u.start),A=Math.min(l.count,Math.min(d.start+d.count,u.start+u.count));for(let T=y,R=A;T<R;T+=3){let b=T,x=T+1,w=T+2;s=Vr(this,f,t,n,c,p,_,b,x,w),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let m=Math.max(0,u.start),g=Math.min(l.count,u.start+u.count);for(let d=m,f=g;d<f;d+=3){let y=d,A=d+1,T=d+2;s=Vr(this,a,t,n,c,p,_,y,A,T),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}};function id(i,t,e,n,s,r,a,o){let l;if(t.side===Ye?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===hi,o),l===null)return null;Gr.copy(o),Gr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Gr);return c<e.near||c>e.far?null:{distance:c,point:Gr.clone(),object:i}}function Vr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Or),i.getVertexPosition(l,Br),i.getVertexPosition(c,zr);let p=id(i,t,e,n,Or,Br,zr,Oc);if(p){let _=new F;Gn.getBarycoord(Oc,Or,Br,zr,_),s&&(p.uv=Gn.getInterpolatedAttribute(s,o,l,c,_,new Nt)),r&&(p.uv1=Gn.getInterpolatedAttribute(r,o,l,c,_,new Nt)),a&&(p.normal=Gn.getInterpolatedAttribute(a,o,l,c,_,new F),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new F,materialIndex:0};Gn.getNormal(Or,Br,zr,h.normal),p.face=h,p.barycoord=_}return p}var Vs=class extends qe{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Le,p=Le,_,h){super(null,a,o,l,c,p,s,r,_,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hs=class extends hn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Yi=new jt,Bc=new jt,Hr=[],zc=new An,sd=new jt,Rs=new te,Cs=new Xn,as=class extends te{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Hs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,sd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new An),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yi),zc.copy(t.boundingBox).applyMatrix4(Yi),this.boundingBox.union(zc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yi),Cs.copy(t.boundingSphere).applyMatrix4(Yi),this.boundingSphere.union(Cs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Rs.geometry=this.geometry,Rs.material=this.material,Rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cs.copy(this.boundingSphere),Cs.applyMatrix4(n),t.ray.intersectsSphere(Cs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Yi),Bc.multiplyMatrices(n,Yi),Rs.matrixWorld=Bc,Rs.raycast(t,Hr);for(let a=0,o=Hr.length;a<o;a++){let l=Hr[a];l.instanceId=r,l.object=this,e.push(l)}Hr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Hs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vs(new Float32Array(s*this.count),s,this.count,Ua,un));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},yi=new Xn,rd=new Nt(.5,.5),Wr=new F,ri=class{constructor(t=new _n,e=new _n,n=new _n,s=new _n,r=new _n,a=new _n){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=cn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],p=r[4],_=r[5],h=r[6],u=r[7],m=r[8],g=r[9],d=r[10],f=r[11],y=r[12],A=r[13],T=r[14],R=r[15];if(s[0].setComponents(c-a,u-p,f-m,R-y).normalize(),s[1].setComponents(c+a,u+p,f+m,R+y).normalize(),s[2].setComponents(c+o,u+_,f+g,R+A).normalize(),s[3].setComponents(c-o,u-_,f-g,R-A).normalize(),n)s[4].setComponents(l,h,d,T).normalize(),s[5].setComponents(c-l,u-h,f-d,R-T).normalize();else if(s[4].setComponents(c-l,u-h,f-d,R-T).normalize(),e===cn)s[5].setComponents(c+l,u+h,f+d,R+T).normalize();else if(e===ji)s[5].setComponents(l,h,d,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(t){yi.center.set(0,0,0);let e=rd.distanceTo(t.center);return yi.radius=.7071067811865476+e,yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Wr.x=s.normal.x>0?t.max.x:t.min.x,Wr.y=s.normal.y>0?t.max.y:t.min.y,Wr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},kc=new jt,da=class i{constructor(){this.coordinateSystem=cn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];kc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ri),n[s].setFromProjectionMatrix(kc,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new ri),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var os=class extends Rn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Gc=new jt,il=new rs,Xr=new Xn,qr=new F,Ws=class extends Se{constructor(t=new Ue,e=new os){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(s),Xr.radius+=r,t.ray.intersectsSphere(Xr)===!1)return;Gc.copy(s).invert(),il.copy(t.ray).applyMatrix4(Gc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,_=n.attributes.position;if(c!==null){let h=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);for(let m=h,g=u;m<g;m++){let d=c.getX(m);qr.fromBufferAttribute(_,d),Vc(qr,d,l,s,t,e,this)}}else{let h=Math.max(0,a.start),u=Math.min(_.count,a.start+a.count);for(let m=h,g=u;m<g;m++)qr.fromBufferAttribute(_,m),Vc(qr,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Vc(i,t,e,n,s,r,a){let o=il.distanceSqToPoint(i);if(o<e){let l=new F;il.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Xs=class extends qe{constructor(t=[],e=Ti,n,s,r,a,o,l,c,p){super(t,e,n,s,r,a,o,l,c,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ls=class extends qe{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var qn=class extends qe{constructor(t,e,n=xn,s,r,a,o=Le,l=Le,c,p=Hn,_=1){if(p!==Hn&&p!==Zn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:_};super(h,s,r,a,o,l,p,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new es(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},qs=class extends qn{constructor(t,e=xn,n=Ti,s,r,a=Le,o=Le,l,c=Hn){let p={width:t,height:t,depth:1},_=[p,p,p,p,p,p];super(t,t,e,n,s,r,a,o,l,c),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ys=class extends qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Cn=class i extends Ue{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],p=[],_=[],h=0,u=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(p,3)),this.setAttribute("uv",new ie(_,2));function m(g,d,f,y,A,T,R,b,x,w,L){let C=T/x,N=R/w,O=T/2,V=R/2,P=b/2,W=x+1,Z=w+1,H=0,it=0,Y=new F;for(let tt=0;tt<Z;tt++){let et=tt*N-V;for(let bt=0;bt<W;bt++){let Ot=bt*C-O;Y[g]=Ot*y,Y[d]=et*A,Y[f]=P,c.push(Y.x,Y.y,Y.z),Y[g]=0,Y[d]=0,Y[f]=b>0?1:-1,p.push(Y.x,Y.y,Y.z),_.push(bt/x),_.push(1-tt/w),H+=1}}for(let tt=0;tt<w;tt++)for(let et=0;et<x;et++){let bt=h+et+W*tt,Ot=h+et+W*(tt+1),K=h+(et+1)+W*(tt+1),gt=h+(et+1)+W*tt;l.push(bt,Ot,gt),l.push(Ot,K,gt),it+=6}o.addGroup(u,it,L),u+=it,h+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Zs=class i extends Ue{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],p=e/2,_=Math.PI/2*t,h=e,u=2*_+h,m=n*2+r,g=s+1,d=new F,f=new F;for(let y=0;y<=m;y++){let A=0,T=0,R=0,b=0;if(y<=n){let L=y/n,C=L*Math.PI/2;T=-p-t*Math.cos(C),R=t*Math.sin(C),b=-t*Math.cos(C),A=L*_}else if(y<=n+r){let L=(y-n)/r;T=-p+L*e,R=t,b=0,A=_+L*h}else{let L=(y-n-r)/n,C=L*Math.PI/2;T=p+t*Math.sin(C),R=t*Math.cos(C),b=t*Math.sin(C),A=_+h+L*_}let x=Math.max(0,Math.min(1,A/u)),w=0;y===0?w=.5/s:y===m&&(w=-.5/s);for(let L=0;L<=s;L++){let C=L/s,N=C*Math.PI*2,O=Math.sin(N),V=Math.cos(N);f.x=-R*V,f.y=T,f.z=R*O,o.push(f.x,f.y,f.z),d.set(-R*V,b,R*O),d.normalize(),l.push(d.x,d.y,d.z),c.push(C+w,x)}if(y>0){let L=(y-1)*g;for(let C=0;C<s;C++){let N=L+C,O=L+C+1,V=y*g+C,P=y*g+C+1;a.push(N,O,V),a.push(O,P,V)}}}this.setIndex(a),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},ai=class i extends Ue{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new F,p=new Nt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let _=0,h=3;_<=e;_++,h+=3){let u=n+_/e*s;c.x=t*Math.cos(u),c.y=t*Math.sin(u),a.push(c.x,c.y,c.z),o.push(0,0,1),p.x=(a[h]/t+1)/2,p.y=(a[h+1]/t+1)/2,l.push(p.x,p.y)}for(let _=1;_<=e;_++)r.push(_,_+1,0);this.setIndex(r),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(o,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},le=class i extends Ue{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let p=[],_=[],h=[],u=[],m=0,g=[],d=n/2,f=0;y(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(p),this.setAttribute("position",new ie(_,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(u,2));function y(){let T=new F,R=new F,b=0,x=(e-t)/n;for(let w=0;w<=r;w++){let L=[],C=w/r,N=C*(e-t)+t;for(let O=0;O<=s;O++){let V=O/s,P=V*l+o,W=Math.sin(P),Z=Math.cos(P);R.x=N*W,R.y=-C*n+d,R.z=N*Z,_.push(R.x,R.y,R.z),T.set(W,x,Z).normalize(),h.push(T.x,T.y,T.z),u.push(V,1-C),L.push(m++)}g.push(L)}for(let w=0;w<s;w++)for(let L=0;L<r;L++){let C=g[L][w],N=g[L+1][w],O=g[L+1][w+1],V=g[L][w+1];(t>0||L!==0)&&(p.push(C,N,V),b+=3),(e>0||L!==r-1)&&(p.push(N,O,V),b+=3)}c.addGroup(f,b,0),f+=b}function A(T){let R=m,b=new Nt,x=new F,w=0,L=T===!0?t:e,C=T===!0?1:-1;for(let O=1;O<=s;O++)_.push(0,d*C,0),h.push(0,C,0),u.push(.5,.5),m++;let N=m;for(let O=0;O<=s;O++){let P=O/s*l+o,W=Math.cos(P),Z=Math.sin(P);x.x=L*Z,x.y=d*C,x.z=L*W,_.push(x.x,x.y,x.z),h.push(0,C,0),b.x=W*.5+.5,b.y=Z*.5*C+.5,u.push(b.x,b.y),m++}for(let O=0;O<s;O++){let V=R+O,P=N+O;T===!0?p.push(P,P+1,V):p.push(P+1,P,V),w+=3}c.addGroup(f,w,T===!0?1:2),f+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Si=class i extends le{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var _e=class i extends Ue{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,p=l+1,_=t/o,h=e/l,u=[],m=[],g=[],d=[];for(let f=0;f<p;f++){let y=f*h-a;for(let A=0;A<c;A++){let T=A*_-r;m.push(T,-y,0),g.push(0,0,1),d.push(A/o),d.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){let A=y+c*f,T=y+c*(f+1),R=y+1+c*(f+1),b=y+1+c*f;u.push(A,T,b),u.push(T,R,b)}this.setIndex(u),this.setAttribute("position",new ie(m,3)),this.setAttribute("normal",new ie(g,3)),this.setAttribute("uv",new ie(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var $e=class i extends Ue{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,p=[],_=new F,h=new F,u=[],m=[],g=[],d=[];for(let f=0;f<=n;f++){let y=[],A=f/n,T=a+A*o,R=t*Math.cos(T),b=Math.sqrt(t*t-R*R),x=0;f===0&&a===0?x=.5/e:f===n&&l===Math.PI&&(x=-.5/e);for(let w=0;w<=e;w++){let L=w/e,C=s+L*r;_.x=-b*Math.cos(C),_.y=R,_.z=b*Math.sin(C),m.push(_.x,_.y,_.z),h.copy(_).normalize(),g.push(h.x,h.y,h.z),d.push(L+x,1-A),y.push(c++)}p.push(y)}for(let f=0;f<n;f++)for(let y=0;y<e;y++){let A=p[f][y+1],T=p[f][y],R=p[f+1][y],b=p[f+1][y+1];(f!==0||a>0)&&u.push(A,T,b),(f!==n-1||l<Math.PI)&&u.push(T,R,b)}this.setIndex(u),this.setAttribute("position",new ie(m,3)),this.setAttribute("normal",new ie(g,3)),this.setAttribute("uv",new ie(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Js=class i extends Ue{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],p=[],_=[],h=new F,u=new F,m=new F;for(let g=0;g<=n;g++){let d=a+g/n*o;for(let f=0;f<=s;f++){let y=f/s*r;u.x=(t+e*Math.cos(d))*Math.cos(y),u.y=(t+e*Math.cos(d))*Math.sin(y),u.z=e*Math.sin(d),c.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),m.subVectors(u,h).normalize(),p.push(m.x,m.y,m.z),_.push(f/s),_.push(g/n)}}for(let g=1;g<=n;g++)for(let d=1;d<=s;d++){let f=(s+1)*g+d-1,y=(s+1)*(g-1)+d-1,A=(s+1)*(g-1)+d,T=(s+1)*g+d;l.push(f,y,T),l.push(y,A,T)}this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(p,3)),this.setAttribute("uv",new ie(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Ri(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Hc(s))s.isRenderTargetTexture?(Lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Hc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ve(i){let t={};for(let e=0;e<i.length;e++){let n=Ri(i[e]);for(let s in n)t[s]=n[s]}return t}function Hc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ad(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}var zh={clone:Ri,merge:Ve},od=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,In=class extends Rn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=od,this.fragmentShader=ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ri(t.uniforms),this.uniformsGroups=ad(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new kt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Nt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new de().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ut().fromArray(s.value);break;case"m4":this.uniforms[n].value=new jt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},fa=class extends In{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var be=class extends Rn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=go,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Ra,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},pa=class extends Rn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ma=class extends Rn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Zi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Yr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var oi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ga=class extends oi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tl,endingEnd:tl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case el:r=t,o=2*e-n;break;case nl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case el:a=t,l=2*n-e;break;case nl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,p=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*p,this._offsetNext=a*p}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,p=this._offsetPrev,_=this._offsetNext,h=this._weightPrev,u=this._weightNext,m=(n-e)/(s-e),g=m*m,d=g*m,f=-h*d+2*h*g-h*m,y=(1+h)*d+(-1.5-2*h)*g+(-.5+h)*m+1,A=(-1-u)*d+(1.5+u)*g+.5*m,T=u*d-u*g;for(let R=0;R!==o;++R)r[R]=f*a[p+R]+y*a[c+R]+A*a[l+R]+T*a[_+R];return r}},_a=class extends oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,p=(n-e)/(s-e),_=1-p;for(let h=0;h!==o;++h)r[h]=a[c+h]*_+a[l+h]*p;return r}},xa=class extends oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},va=class extends oi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,p=this.inTangents,_=this.outTangents;if(!p||!_){let m=(n-e)/(s-e),g=1-m;for(let d=0;d!==o;++d)r[d]=a[c+d]*g+a[l+d]*m;return r}let h=o*2,u=t-1;for(let m=0;m!==o;++m){let g=a[c+m],d=a[l+m],f=u*h+m*2,y=_[f],A=_[f+1],T=t*h+m*2,R=p[T],b=p[T+1],x=hd(n,e,y,R,s);r[m]=kh(x,g,A,b,d)}return r}};function kh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function cd(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function hd(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=kh(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=cd(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var en=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Zi(e,this.TimeBufferType),this.values=Zi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Zi(t.times,Array),values:Zi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Yr(t.settings)&&(n.settings={inTangents:Zi(t.settings.inTangents,Array),outTangents:Zi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new xa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new _a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ga(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new va(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ps:e=this.InterpolantFactoryMethodDiscrete;break;case aa:e=this.InterpolantFactoryMethodLinear;break;case $r:e=this.InterpolantFactoryMethodSmooth;break;case jo:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Lt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ps;case this.InterpolantFactoryMethodLinear:return aa;case this.InterpolantFactoryMethodSmooth:return $r;case this.InterpolantFactoryMethodBezier:return jo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Yr(this.settings)&&(Wc(this.settings.inTangents,t),Wc(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Yr(this.settings)&&(Xc(this.settings.inTangents,t),Xc(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Pt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Pt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Pt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Pt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&zu(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Pt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===$r,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],p=t[o+1];if(c!==p&&(o!==1||c!==t[0]))if(s)l=!0;else{let _=o*n,h=_-n,u=_+n;for(let m=0;m!==n;++m){let g=e[_+m];if(g!==e[h+m]||g!==e[u+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let _=o*n,h=a*n;for(let u=0;u!==n;++u)e[h+u]=e[_+u]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Yr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Wc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Xc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}en.prototype.ValueTypeName="";en.prototype.TimeBufferType=Float32Array;en.prototype.ValueBufferType=Float32Array;en.prototype.DefaultInterpolation=aa;var li=class extends en{constructor(t,e,n){super(t,e,n)}};li.prototype.ValueTypeName="bool";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=Ps;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends en{constructor(t,e,n,s){super(t,e,n,s)}};ya.prototype.ValueTypeName="color";var Ma=class extends en{constructor(t,e,n,s){super(t,e,n,s)}};Ma.prototype.ValueTypeName="number";var Sa=class extends oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let p=c+o;c!==p;c+=4)En.slerpFlat(r,0,a,c-o,a,c,l);return r}},$s=class extends en{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Sa(this.times,this.values,this.getValueSize(),t)}};$s.prototype.ValueTypeName="quaternion";$s.prototype.InterpolantFactoryMethodSmooth=void 0;var ci=class extends en{constructor(t,e,n){super(t,e,n)}};ci.prototype.ValueTypeName="string";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=Ps;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var ba=class extends en{constructor(t,e,n,s){super(t,e,n,s)}};ba.prototype.ValueTypeName="vector";var wa=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(p){o++,r===!1&&s.onStart!==void 0&&s.onStart(p,a,o),r=!0},this.itemEnd=function(p){a++,s.onProgress!==void 0&&s.onProgress(p,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return p=p.normalize("NFC"),l?l(p):p},this.setURLModifier=function(p){return l=p,this},this.addHandler=function(p,_){return c.push(p,_),this},this.removeHandler=function(p){let _=c.indexOf(p);return _!==-1&&c.splice(_,2),this},this.getHandler=function(p){for(let _=0,h=c.length;_<h;_+=2){let u=c[_],m=c[_+1];if(u.global&&(u.lastIndex=0),u.test(p))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Gh=new wa,Ta=class{constructor(t){this.manager=t!==void 0?t:Gh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ta.DEFAULT_MATERIAL_NAME="__DEFAULT";var cs=class extends Se{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ks=class extends cs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Qo=new jt,qc=new F,Yc=new F,Qs=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=Ke,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ri,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;qc.setFromMatrixPosition(t.matrixWorld),e.position.copy(qc),Yc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Qo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Qo,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===ji||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Qo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Zr=new F,Jr=new En,bn=new F,js=class extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Zr,Jr,bn),bn.x===1&&bn.y===1&&bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zr,Jr,bn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Zr,Jr,bn),bn.x===1&&bn.y===1&&bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zr,Jr,bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},si=new F,Zc=new Nt,Jc=new Nt,Ge=class extends js{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=oa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Io*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(Io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,Zc,Jc),e.subVectors(Jc,Zc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Io*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var sl=class extends Qs{constructor(){super(new Ge(90,1,.5,500)),this.isPointLightShadow=!0}},tr=class extends cs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new sl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},er=class extends js{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=p*this.view.offsetY,l=o-p*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},rl=class extends Qs{constructor(){super(new er(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},nr=class extends cs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new rl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ji=-90,$i=1,hs=class extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ge(Ji,$i,t,e);s.layers=this.layers,this.add(s);let r=new Ge(Ji,$i,t,e);r.layers=this.layers,this.add(r);let a=new Ge(Ji,$i,t,e);a.layers=this.layers,this.add(a);let o=new Ge(Ji,$i,t,e);o.layers=this.layers,this.add(o);let l=new Ge(Ji,$i,t,e);l.layers=this.layers,this.add(l);let c=new Ge(Ji,$i,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ji)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,p]=this.children,_=t.getRenderTarget(),h=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let d=!1;t.isWebGLRenderer===!0?d=t.state.buffers.depth.getReversed():d=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=g,t.setRenderTarget(n,5,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,p),t.setRenderTarget(_,h,u),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ea=class extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Ul="\\[\\]\\.:\\/",ud=new RegExp("["+Ul+"]","g"),Fl="[^"+Ul+"]",dd="[^"+Ul.replace("\\.","")+"]",fd=/((?:WC+[\/:])*)/.source.replace("WC",Fl),pd=/(WCOD+)?/.source.replace("WCOD",dd),md=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fl),gd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fl),_d=new RegExp("^"+fd+pd+md+gd+"$"),xd=["material","materials","bones","map"],al=class{constructor(t,e,n){let s=n||oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ud,"")}static parseTrackName(t){let e=_d.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);xd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Lt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Pt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Pt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let p=0;p<t.length;p++)if(t[p].name===c){c=p;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Pt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Pt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Pt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Pt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};oe.Composite=al;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ng=new Float32Array(1);var $c=new jt,ir=class{constructor(t,e,n=0,s=1/0){this.ray=new rs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ns,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Pt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return $c.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($c),this}intersectObject(t,e=!0,n=[]){return ol(t,this,n,e),n.sort(Kc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ol(t[s],this,n,e);return n.sort(Kc),n}};function Kc(i,t){return i.distance-t.distance}function ol(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)ol(r[a],t,e,!0)}}var Vl=class Vl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Vl.prototype.isMatrix2=!0;var ll=Vl;function Ol(i,t,e,n){let s=vd(n);switch(e){case Al:return i*t;case Ua:return i*t/s.components*s.byteLength;case Fa:return i*t/s.components*s.byteLength;case ui:return i*t*2/s.components*s.byteLength;case Oa:return i*t*2/s.components*s.byteLength;case Rl:return i*t*3/s.components*s.byteLength;case yn:return i*t*4/s.components*s.byteLength;case Ba:return i*t*4/s.components*s.byteLength;case ar:case or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case lr:case cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ka:case Va:return Math.max(i,16)*Math.max(t,8)/4;case za:case Ga:return Math.max(i,8)*Math.max(t,8)/2;case Ha:case Wa:case qa:case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xa:case hr:case Za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $a:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ja:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case to:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case eo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case no:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case io:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case so:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ro:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ao:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case oo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case lo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case co:case ho:case uo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case fo:case po:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ur:case mo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vd(i){switch(i){case Ke:case bl:return{byteLength:1,components:1};case ps:case wl:case vn:return{byteLength:2,components:1};case Da:case Na:return{byteLength:2,components:4};case xn:case La:case un:return{byteLength:4,components:1};case Tl:case El:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?Lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function cu(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Md(i){let t=new WeakMap;function e(o,l){let c=o.array,p=o.usage,_=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,p),o.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:_}}function n(o,l,c){let p=l.array,_=l.updateRanges;if(i.bindBuffer(c,o),_.length===0)i.bufferSubData(c,0,p);else{_.sort((u,m)=>u.start-m.start);let h=0;for(let u=1;u<_.length;u++){let m=_[h],g=_[u];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++h,_[h]=g)}_.length=h+1;for(let u=0,m=_.length;u<m;u++){let g=_[u];i.bufferSubData(c,g.start*p.BYTES_PER_ELEMENT,p,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let p=t.get(o);(!p||p.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Sd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Td=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ed=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ad=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Id=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Pd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ld=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ud=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Hd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Wd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Xd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Yd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$d=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,tf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ef=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,af=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,of=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,df=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ff=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,pf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,mf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_f=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wf=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Tf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ef=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Af=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,If=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Df=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ff=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Of=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Xf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$f=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Qf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ep=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,np=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ip=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,rp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ap=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,op=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,up=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_p=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tp=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ap=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ip=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Up=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Op=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$p=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,em=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:Sd,alphahash_pars_fragment:bd,alphamap_fragment:wd,alphamap_pars_fragment:Td,alphatest_fragment:Ed,alphatest_pars_fragment:Ad,aomap_fragment:Rd,aomap_pars_fragment:Cd,batching_pars_vertex:Id,batching_vertex:Pd,begin_vertex:Ld,beginnormal_vertex:Dd,bsdfs:Nd,iridescence_fragment:Ud,bumpmap_pars_fragment:Fd,clipping_planes_fragment:Od,clipping_planes_pars_fragment:Bd,clipping_planes_pars_vertex:zd,clipping_planes_vertex:kd,color_fragment:Gd,color_pars_fragment:Vd,color_pars_vertex:Hd,color_vertex:Wd,common:Xd,defaultnormal_vertex:qd,displacementmap_pars_vertex:Yd,displacementmap_vertex:Zd,emissivemap_fragment:Jd,emissivemap_pars_fragment:$d,colorspace_fragment:Kd,colorspace_pars_fragment:Qd,envmap_fragment:jd,envmap_common_pars_fragment:tf,envmap_pars_fragment:ef,envmap_pars_vertex:nf,envmap_physical_pars_fragment:pf,envmap_vertex:sf,fog_vertex:rf,fog_pars_vertex:af,fog_fragment:of,fog_pars_fragment:lf,gradientmap_pars_fragment:cf,lightmap_pars_fragment:hf,lights_lambert_fragment:uf,lights_lambert_pars_fragment:df,lights_pars_begin:ff,lights_toon_fragment:mf,lights_toon_pars_fragment:gf,lights_phong_fragment:_f,lights_phong_pars_fragment:xf,lights_physical_fragment:vf,lights_physical_pars_fragment:yf,lights_fragment_begin:Mf,lights_fragment_maps:Sf,lights_fragment_end:bf,lightprobes_pars_fragment:wf,logdepthbuf_fragment:Tf,logdepthbuf_pars_fragment:Ef,logdepthbuf_pars_vertex:Af,logdepthbuf_vertex:Rf,map_fragment:Cf,map_pars_fragment:If,map_particle_fragment:Pf,map_particle_pars_fragment:Lf,metalnessmap_fragment:Df,metalnessmap_pars_fragment:Nf,morphinstance_vertex:Uf,morphcolor_vertex:Ff,morphnormal_vertex:Of,morphtarget_pars_vertex:Bf,morphtarget_vertex:zf,normal_fragment_begin:kf,normal_fragment_maps:Gf,normal_pars_fragment:Vf,normal_pars_vertex:Hf,normal_vertex:Wf,normalmap_pars_fragment:Xf,clearcoat_normal_fragment_begin:qf,clearcoat_normal_fragment_maps:Yf,clearcoat_pars_fragment:Zf,iridescence_pars_fragment:Jf,opaque_fragment:$f,packing:Kf,premultiplied_alpha_fragment:Qf,project_vertex:jf,dithering_fragment:tp,dithering_pars_fragment:ep,roughnessmap_fragment:np,roughnessmap_pars_fragment:ip,shadowmap_pars_fragment:sp,shadowmap_pars_vertex:rp,shadowmap_vertex:ap,shadowmask_pars_fragment:op,skinbase_vertex:lp,skinning_pars_vertex:cp,skinning_vertex:hp,skinnormal_vertex:up,specularmap_fragment:dp,specularmap_pars_fragment:fp,tonemapping_fragment:pp,tonemapping_pars_fragment:mp,transmission_fragment:gp,transmission_pars_fragment:_p,uv_pars_fragment:xp,uv_pars_vertex:vp,uv_vertex:yp,worldpos_vertex:Mp,background_vert:Sp,background_frag:bp,backgroundCube_vert:wp,backgroundCube_frag:Tp,cube_vert:Ep,cube_frag:Ap,depth_vert:Rp,depth_frag:Cp,distance_vert:Ip,distance_frag:Pp,equirect_vert:Lp,equirect_frag:Dp,linedashed_vert:Np,linedashed_frag:Up,meshbasic_vert:Fp,meshbasic_frag:Op,meshlambert_vert:Bp,meshlambert_frag:zp,meshmatcap_vert:kp,meshmatcap_frag:Gp,meshnormal_vert:Vp,meshnormal_frag:Hp,meshphong_vert:Wp,meshphong_frag:Xp,meshphysical_vert:qp,meshphysical_frag:Yp,meshtoon_vert:Zp,meshtoon_frag:Jp,points_vert:$p,points_frag:Kp,shadow_vert:Qp,shadow_frag:jp,sprite_vert:tm,sprite_frag:em},mt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},Nn={basic:{uniforms:Ve([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ve([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new kt(0)},envMapIntensity:{value:1}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ve([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ve([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ve([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ve([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ve([mt.points,mt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ve([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ve([mt.common,mt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ve([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ve([mt.sprite,mt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distance:{uniforms:Ve([mt.common,mt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distance_vert,fragmentShader:Wt.distance_frag},shadow:{uniforms:Ve([mt.lights,mt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Nn.physical={uniforms:Ve([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};var xo={r:0,b:0,g:0},nm=new jt,hu=new Ut;hu.set(-1,0,0,0,1,0,0,0,1);function im(i,t,e,n,s,r){let a=new kt(0),o=s===!0?0:1,l,c,p=null,_=0,h=null;function u(y){let A=y.isScene===!0?y.background:null;if(A&&A.isTexture){let T=y.backgroundBlurriness>0;A=t.get(A,T)}return A}function m(y){let A=!1,T=u(y);T===null?d(a,o):T&&T.isColor&&(d(T,1),A=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,A){let T=u(A);T&&T.isCubeTexture?(c===void 0&&(c=new te(new Cn(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Ri(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,b,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=T,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(nm.makeRotationFromEuler(A.backgroundRotation)).transpose(),T.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(hu),c.material.toneMapped=Zt.getTransfer(T.colorSpace)!==Qt,(p!==T||_!==T.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,p=T,_=T.version,h=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new te(new _e(2,2),new In({name:"BackgroundMaterial",uniforms:Ri(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(T.colorSpace)!==Qt,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(p!==T||_!==T.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,p=T,_=T.version,h=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function d(y,A){y.getRGB(xo,Nl(i)),e.buffers.color.setClear(xo.r,xo.g,xo.b,A,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,A=1){a.set(y),o=A,d(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,d(a,o)},render:m,addToRenderList:g,dispose:f}}function sm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(N,O,V,P,W){let Z=!1,H=_(N,P,V,O);r!==H&&(r=H,c(r.object)),Z=u(N,P,V,W),Z&&m(N,P,V,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,T(N,O,V,P),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function p(N){return i.deleteVertexArray(N)}function _(N,O,V,P){let W=P.wireframe===!0,Z=n[O.id];Z===void 0&&(Z={},n[O.id]=Z);let H=N.isInstancedMesh===!0?N.id:0,it=Z[H];it===void 0&&(it={},Z[H]=it);let Y=it[V.id];Y===void 0&&(Y={},it[V.id]=Y);let tt=Y[W];return tt===void 0&&(tt=h(l()),Y[W]=tt),tt}function h(N){let O=[],V=[],P=[];for(let W=0;W<e;W++)O[W]=0,V[W]=0,P[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:P,object:N,attributes:{},index:null}}function u(N,O,V,P){let W=r.attributes,Z=O.attributes,H=0,it=V.getAttributes();for(let Y in it)if(it[Y].location>=0){let et=W[Y],bt=Z[Y];if(bt===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(bt=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(bt=N.instanceColor)),et===void 0||et.attribute!==bt||bt&&et.data!==bt.data)return!0;H++}return r.attributesNum!==H||r.index!==P}function m(N,O,V,P){let W={},Z=O.attributes,H=0,it=V.getAttributes();for(let Y in it)if(it[Y].location>=0){let et=Z[Y];et===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(et=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(et=N.instanceColor));let bt={};bt.attribute=et,et&&et.data&&(bt.data=et.data),W[Y]=bt,H++}r.attributes=W,r.attributesNum=H,r.index=P}function g(){let N=r.newAttributes;for(let O=0,V=N.length;O<V;O++)N[O]=0}function d(N){f(N,0)}function f(N,O){let V=r.newAttributes,P=r.enabledAttributes,W=r.attributeDivisors;V[N]=1,P[N]===0&&(i.enableVertexAttribArray(N),P[N]=1),W[N]!==O&&(i.vertexAttribDivisor(N,O),W[N]=O)}function y(){let N=r.newAttributes,O=r.enabledAttributes;for(let V=0,P=O.length;V<P;V++)O[V]!==N[V]&&(i.disableVertexAttribArray(V),O[V]=0)}function A(N,O,V,P,W,Z,H){H===!0?i.vertexAttribIPointer(N,O,V,W,Z):i.vertexAttribPointer(N,O,V,P,W,Z)}function T(N,O,V,P){g();let W=P.attributes,Z=V.getAttributes(),H=O.defaultAttributeValues;for(let it in Z){let Y=Z[it];if(Y.location>=0){let tt=W[it];if(tt===void 0&&(it==="instanceMatrix"&&N.instanceMatrix&&(tt=N.instanceMatrix),it==="instanceColor"&&N.instanceColor&&(tt=N.instanceColor)),tt!==void 0){let et=tt.normalized,bt=tt.itemSize,Ot=t.get(tt);if(Ot===void 0)continue;let K=Ot.buffer,gt=Ot.type,yt=Ot.bytesPerElement,Rt=gt===i.INT||gt===i.UNSIGNED_INT||tt.gpuType===La;if(tt.isInterleavedBufferAttribute){let _t=tt.data,zt=_t.isInterleavedBuffer===!0?_t.stride:_t.itemSize,ve=tt.offset;if(_t.isInstancedInterleavedBuffer||_t.isInstancedBufferAttribute){for(let It=0;It<Y.locationSize;It++)f(Y.location+It,_t.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let It=0;It<Y.locationSize;It++)d(Y.location+It);i.bindBuffer(i.ARRAY_BUFFER,K);for(let It=0;It<Y.locationSize;It++)A(Y.location+It,bt/Y.locationSize,gt,et,zt*yt,(ve+bt/Y.locationSize*It)*yt,Rt)}else{if(tt.isInstancedBufferAttribute){for(let _t=0;_t<Y.locationSize;_t++)f(Y.location+_t,tt.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let _t=0;_t<Y.locationSize;_t++)d(Y.location+_t);i.bindBuffer(i.ARRAY_BUFFER,K);for(let _t=0;_t<Y.locationSize;_t++)A(Y.location+_t,bt/Y.locationSize,gt,et,bt*yt,bt/Y.locationSize*_t*yt,Rt)}}else if(H!==void 0){let et=H[it];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(Y.location,et);break;case 3:i.vertexAttrib3fv(Y.location,et);break;case 4:i.vertexAttrib4fv(Y.location,et);break;default:i.vertexAttrib1fv(Y.location,et)}}}}y()}function R(){L();for(let N in n){let O=n[N];for(let V in O){let P=O[V];for(let W in P){let Z=P[W];for(let H in Z)p(Z[H].object),delete Z[H];delete P[W]}}delete n[N]}}function b(N){if(n[N.id]===void 0)return;let O=n[N.id];for(let V in O){let P=O[V];for(let W in P){let Z=P[W];for(let H in Z)p(Z[H].object),delete Z[H];delete P[W]}}delete n[N.id]}function x(N){for(let O in n){let V=n[O];for(let P in V){let W=V[P];if(W[N.id]===void 0)continue;let Z=W[N.id];for(let H in Z)p(Z[H].object),delete Z[H];delete W[N.id]}}}function w(N){for(let O in n){let V=n[O],P=N.isInstancedMesh===!0?N.id:0,W=V[P];if(W!==void 0){for(let Z in W){let H=W[Z];for(let it in H)p(H[it].object),delete H[it];delete W[Z]}delete V[P],Object.keys(V).length===0&&delete n[O]}}}function L(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:C,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfObject:w,releaseStatesOfProgram:x,initAttributes:g,enableAttribute:d,disableUnusedAttributes:y}}function rm(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,p){p!==0&&(i.drawArraysInstanced(n,l,c,p),e.update(c,n,p))}function o(l,c,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,p);let h=0;for(let u=0;u<p;u++)h+=c[u];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function am(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==yn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let w=x===vn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==Ke&&x!==un&&!w&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",p=l(c);p!==c&&(Lt("WebGLRenderer:",c,"not supported, using",p,"instead."),c=p);let _=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=e.logarithmicDepthBuffer===!0&&_===!1;e.reversedDepthBuffer===!0&&_===!1&&Lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&_===!0&&Lt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:_,maxTextures:u,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:y,maxVaryings:A,maxFragmentUniforms:T,maxSamples:R,samples:b}}function om(i){let t=this,e=null,n=0,s=!1,r=!1,a=new _n,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(_,h){let u=_.length!==0||h||n!==0||s;return s=h,n=_.length,u},this.beginShadows=function(){r=!0,p(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(_,h){e=p(_,h,0)},this.setState=function(_,h,u){let m=_.clippingPlanes,g=_.clipIntersection,d=_.clipShadows,f=i.get(_);if(!s||m===null||m.length===0||r&&!d)r?p(null):c();else{let y=r?0:n,A=y*4,T=f.clippingState||null;l.value=T,T=p(m,h,A,u);for(let R=0;R!==A;++R)T[R]=e[R];f.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function p(_,h,u,m){let g=_!==null?_.length:0,d=null;if(g!==0){if(d=l.value,m!==!0||d===null){let f=u+g*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(d===null||d.length<f)&&(d=new Float32Array(f));for(let A=0,T=u;A!==g;++A,T+=4)a.copy(_[A]).applyMatrix4(y,o),a.normal.toArray(d,T),d[T+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,d}}var pr=class extends tn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Xs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Cn(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:bi});r.uniforms.tEquirect.value=e;let a=new te(s,r),o=e.minFilter;return e.minFilter===Yn&&(e.minFilter=Xe),new hs(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Vh=256,lm=3,cm=20,uu=256,du=16,hm=3,um=new F,dm=new kt,yo=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new hs(1,10,null),this._boxMesh=new te(new Cn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=um}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),p=this._getSourceTarget(!0);e>0&&(p.texture.mipmapsAutoUpdate=!1);let _=l.autoClear,h=l.autoClearColor,u=l.autoClearDepth,m=l.autoClearStencil,g=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,g===null&&(t.background=l.getClearColor(dm));let d=new hs(n,s,p);return d.position.copy(o),d.update(l,t),l.autoClear=_,l.autoClearColor=h,l.autoClearDepth=u,l.autoClearStencil=m,t.background=g,e>0&&(p.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Vh,Nh(t))}_fromTexture(t,e){t.mapping===Ti||t.mapping===fs?this._setSize(t.image.length===0?Vh:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Hh(t,!1,!1),n=Math.log2(t)-lm;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Hh(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ti||t.mapping===fs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xh()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Wh()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=fm(),this._integrationMaterial=pm());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/du);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-hm)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(uu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=mm());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Hh(i,t,e){return new pr(i,{minFilter:Yn,generateMipmaps:t,type:vn,colorSpace:Ls,depthBuffer:e})}function mr(i,t,e){return new In({name:i,uniforms:t,vertexShader:Wt.cube_vert,fragmentShader:e,side:Ye,blending:bi,depthTest:!1,depthWrite:!1})}function fm(){return mr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${uu}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function pm(){return mr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:du}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function mm(){return mr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${cm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Wh(){return mr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Xh(){return mr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function gm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,u=!1){return h==null?null:u?a(h):r(h)}function r(h){if(h&&h.isTexture){let u=h.mapping;if(u===Ca||u===Ia)if(t.has(h)){let m=t.get(h).texture;return o(m,h.mapping)}else{let m=h.image;if(m&&m.height>0){let g=new pr(m.height);return g.fromEquirectangularTexture(i,h),t.set(h,g),h.addEventListener("dispose",c),o(g.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let u=h.mapping,m=u===Ca||u===Ia,g=u===Ti||u===fs;if(m||g){let d=e.get(h),f=d!==void 0?d.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return n===null&&(n=new yo(i)),d=m?n.fromEquirectangular(h,d):n.fromCubemap(h,d),d.texture.pmremVersion=h.pmremVersion,e.set(h,d),d.texture;if(d!==void 0)return d.texture;{let y=h.image;return m&&y&&y.height>0||g&&y&&l(y)?(n===null&&(n=new yo(i)),d=m?n.fromEquirectangular(h):n.fromCubemap(h),d.texture.pmremVersion=h.pmremVersion,e.set(h,d),h.addEventListener("dispose",p),d.texture):null}}}return h}function o(h,u){return u===Ca?h.mapping=Ti:u===Ia&&(h.mapping=fs),h}function l(h){let u=0,m=6;for(let g=0;g<m;g++)h[g]!==void 0&&u++;return u===m}function c(h){let u=h.target;u.removeEventListener("dispose",c);let m=t.get(u);m!==void 0&&(t.delete(u),m.dispose())}function p(h){let u=h.target;u.removeEventListener("dispose",p);let m=e.get(u);m!==void 0&&(e.delete(u),m.dispose())}function _(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:_}}function _m(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Is("WebGLRenderer: "+n+" extension not supported."),s}}}function xm(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let d in m.attributes)t.remove(m.attributes[d]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);let g=r.get(m);g&&(t.remove(g),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,g){return s[g.id]!==void 0||(g.addEventListener("dispose",o),s[g.id]=new WeakRef(g),a.register(g,g.id,g),e.memory.geometries++),g}function p(m){let g=m.attributes;for(let d in g)t.update(g[d],i.ARRAY_BUFFER)}function _(m){let g=m.index,d=m.attributes.position,f=0;if(d===void 0)return;let y=g!==null?g.array.length:d.array.length/3-1,A=d.count>=65535?zs:Bs,T=new A(Math.ceil(y/3)*6,1),R=T.array;if(g!==null){let x=g.array;f=g.version;for(let w=0,L=0;w<y;w+=3){let C=x[w+0],N=x[w+1],O=x[w+2];R[L++]=C,R[L++]=N,R[L++]=N,R[L++]=O,R[L++]=O,R[L++]=C}}else{f=d.version;for(let x=0,w=0;x<y;x+=3){let L=x+0,C=x+1,N=x+2;R[w++]=L,R[w++]=C,R[w++]=C,R[w++]=N,R[w++]=N,R[w++]=L}}T.version=f;let b=r.get(m);b&&t.remove(b),r.set(m,T)}function h(m){let g=r.get(m);if(g){let d=m.index;d!==null&&g.version<d.version&&_(m)}else _(m);return r.get(m)}function u(){for(let m in s){let g=s[m].deref();g!==void 0&&l(g)}}return{get:c,update:p,getWireframeAttribute:h,dispose:u}}function vm(i,t,e){let n;function s(_){n=_}let r,a;function o(_){r=_.type,a=_.bytesPerElement}function l(_,h){i.drawElements(n,h,r,_*a),e.update(h,n,1)}function c(_,h,u){u!==0&&(i.drawElementsInstanced(n,h,r,_*a,u),e.update(h,n,u))}function p(_,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,_,0,u);let g=0;for(let d=0;d<u;d++)g+=h[d];e.update(g,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=p}function ym(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Pt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Mm(i,t,e){let n=new WeakMap,s=new de;function r(a,o,l){let c=a.morphTargetInfluences,p=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,_=p!==void 0?p.length:0,h=n.get(o);if(h===void 0||h.count!==_){let L=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",L)};h!==void 0&&h.texture.dispose();let u=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],A=0;u===!0&&(A=1),m===!0&&(A=2),g===!0&&(A=3);let T=o.attributes.position.count*A,R=1;T>t.maxTextureSize&&(R=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let b=new Float32Array(T*R*4*_),x=new Fs(b,T,R,_);x.type=un,x.needsUpdate=!0;let w=A*4;for(let C=0;C<_;C++){let N=d[C],O=f[C],V=y[C],P=T*R*4*C;for(let W=0;W<N.count;W++){let Z=W*w;u===!0&&(s.fromBufferAttribute(N,W),b[P+Z+0]=s.x,b[P+Z+1]=s.y,b[P+Z+2]=s.z,b[P+Z+3]=0),m===!0&&(s.fromBufferAttribute(O,W),b[P+Z+4]=s.x,b[P+Z+5]=s.y,b[P+Z+6]=s.z,b[P+Z+7]=0),g===!0&&(s.fromBufferAttribute(V,W),b[P+Z+8]=s.x,b[P+Z+9]=s.y,b[P+Z+10]=s.z,b[P+Z+11]=V.itemSize===4?s.w:1)}}h={count:_,texture:x,size:new Nt(T,R)},n.set(o,h),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let u=0;for(let g=0;g<c.length;g++)u+=c[g];let m=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Sm(i,t,e,n,s){let r=new WeakMap;function a(c){let p=s.render.frame,_=c.geometry,h=t.get(c,_);if(r.get(h)!==p&&(t.update(h),r.set(h,p)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==p&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,p))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==p&&(u.update(),r.set(u,p))}return h}function o(){r=new WeakMap}function l(c){let p=c.target;p.removeEventListener("dispose",l),n.releaseStatesOfObject(p),e.remove(p.instanceMatrix),p.instanceColor!==null&&e.remove(p.instanceColor)}return{update:a,dispose:o}}var bm={[ml]:"LINEAR_TONE_MAPPING",[gl]:"REINHARD_TONE_MAPPING",[_l]:"CINEON_TONE_MAPPING",[xl]:"ACES_FILMIC_TONE_MAPPING",[yl]:"AGX_TONE_MAPPING",[Ml]:"NEUTRAL_TONE_MAPPING",[vl]:"CUSTOM_TONE_MAPPING"};function wm(i,t,e,n,s,r){let a=new tn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,p=new Ue;p.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new ie([0,2,0,0,2,0],2));let _=new fa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new te(p,_),u=new er(-1,1,1,-1,0,1),m=null,g=null,d=!1,f,y=null,A=[],T=!1;this.setSize=function(R,b){a.setSize(R,b),o!==null&&o.setSize(R,b),l!==null&&l.setSize(R,b);for(let x=0;x<A.length;x++){let w=A[x];w.setSize&&w.setSize(R,b)}},this.setEffects=function(R){A=R,T=A.length>0&&A[0].isRenderPass===!0;let b=a.width,x=a.height;A.length>0&&o===null&&(o=new tn(b,x,{type:vn,depthBuffer:!1,stencilBuffer:!1}),l=new tn(b,x,{type:vn,depthBuffer:!1,stencilBuffer:!1}));let w=s===!0&&A.some(L=>L.needsDepthTexture===!0);w!==(a.depthTexture!==null)&&(w===!0&&c===null&&(c=new qn(b,x),r===!0&&(c.format=Zn,c.type=Ei)),a.dispose(),a.depthTexture=w?c:null,a.resolveDepthBuffer=w,a.storeMultisampledDepthBuffer=w);for(let L=0;L<A.length;L++){let C=A[L];C.setSize&&C.setSize(b,x),w&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(R,b){if(d||R.toneMapping===Ln&&A.length===0)return!1;if(y=b,b!==null){let x=b.width,w=b.height;(a.width!==x||a.height!==w)&&this.setSize(x,w)}return T===!1&&R.setRenderTarget(a),f=R.toneMapping,R.toneMapping=Ln,!0},this.hasRenderPass=function(){return T},this.end=function(R,b){R.toneMapping=f,d=!0;let x=a,w=o;for(let L=0;L<A.length;L++){let C=A[L];C.enabled!==!1&&(C.render(R,w,x,b),C.needsSwap!==!1&&(x=w,w=w===o?l:o))}if(m!==R.outputColorSpace||g!==R.toneMapping){m=R.outputColorSpace,g=R.toneMapping,_.defines={},Zt.getTransfer(m)===Qt&&(_.defines.SRGB_TRANSFER="");let L=bm[g];L&&(_.defines[L]=""),_.needsUpdate=!0}_.uniforms.tDiffuse.value=x.texture,R.setRenderTarget(y),R.render(h,u),y=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),p.dispose(),_.dispose()}}var fu=new qe,pu=new qn(1,1),mu=new qs(1),gu=new Fs,_u=new ha,xu=new Xs,qh=[],Yh=[],Zh=new Float32Array(16),Jh=new Float32Array(9),$h=new Float32Array(4);function gs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=qh[s];if(r===void 0&&(r=new Float32Array(s),qh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ee(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function So(i,t){let e=Yh[t];e===void 0&&(e=new Int32Array(t),Yh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Tm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Em(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function Am(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function Rm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function Cm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Ee(e,n))return;$h.set(n),i.uniformMatrix2fv(this.addr,!1,$h),Ae(e,n)}}function Im(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Ee(e,n))return;Jh.set(n),i.uniformMatrix3fv(this.addr,!1,Jh),Ae(e,n)}}function Pm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Ee(e,n))return;Zh.set(n),i.uniformMatrix4fv(this.addr,!1,Zh),Ae(e,n)}}function Lm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2iv(this.addr,t),Ae(e,t)}}function Nm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3iv(this.addr,t),Ae(e,t)}}function Um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4iv(this.addr,t),Ae(e,t)}}function Fm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Om(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2uiv(this.addr,t),Ae(e,t)}}function Bm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3uiv(this.addr,t),Ae(e,t)}}function zm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4uiv(this.addr,t),Ae(e,t)}}function bo(i){return i.version===0&&(i.compareFunction=Pl,i.needsUpdate=!0),i}function km(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=bo(pu):r=fu,e.setTexture2D(t||r,s)}function Gm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||_u,s)}function Vm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=bo(mu):r=xu,e.setTextureCube(t||r,s)}function Hm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||gu,s)}function Wm(i){switch(i){case 5126:return Tm;case 35664:return Em;case 35665:return Am;case 35666:return Rm;case 35674:return Cm;case 35675:return Im;case 35676:return Pm;case 5124:case 35670:return Lm;case 35667:case 35671:return Dm;case 35668:case 35672:return Nm;case 35669:case 35673:return Um;case 5125:return Fm;case 36294:return Om;case 36295:return Bm;case 36296:return zm;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return Gm;case 35680:case 36300:case 36308:case 36293:return Vm;case 36289:case 36303:case 36311:case 36292:return Hm}}function Xm(i,t){i.uniform1fv(this.addr,t)}function qm(i,t){let e=gs(t,this.size,2);i.uniform2fv(this.addr,e)}function Ym(i,t){let e=gs(t,this.size,3);i.uniform3fv(this.addr,e)}function Zm(i,t){let e=gs(t,this.size,4);i.uniform4fv(this.addr,e)}function Jm(i,t){let e=gs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function $m(i,t){let e=gs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Km(i,t){let e=gs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Qm(i,t){i.uniform1iv(this.addr,t)}function jm(i,t){i.uniform2iv(this.addr,t)}function t0(i,t){i.uniform3iv(this.addr,t)}function e0(i,t){i.uniform4iv(this.addr,t)}function n0(i,t){i.uniform1uiv(this.addr,t)}function i0(i,t){i.uniform2uiv(this.addr,t)}function s0(i,t){i.uniform3uiv(this.addr,t)}function r0(i,t){i.uniform4uiv(this.addr,t)}function a0(i,t,e){let n=this.cache,s=t.length,r=So(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=bo(pu):a=fu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function o0(i,t,e){let n=this.cache,s=t.length,r=So(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||_u,r[a])}function l0(i,t,e){let n=this.cache,s=t.length,r=So(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=bo(mu):a=xu;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function c0(i,t,e){let n=this.cache,s=t.length,r=So(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||gu,r[a])}function h0(i){switch(i){case 5126:return Xm;case 35664:return qm;case 35665:return Ym;case 35666:return Zm;case 35674:return Jm;case 35675:return $m;case 35676:return Km;case 5124:case 35670:return Qm;case 35667:case 35671:return jm;case 35668:case 35672:return t0;case 35669:case 35673:return e0;case 5125:return n0;case 36294:return i0;case 36295:return s0;case 36296:return r0;case 35678:case 36198:case 36298:case 36306:case 35682:return a0;case 35679:case 36299:case 36307:return o0;case 35680:case 36300:case 36308:case 36293:return l0;case 36289:case 36303:case 36311:case 36292:return c0}}var Xl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Wm(e.type)}},ql=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=h0(e.type)}},Yl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Hl=/(\w+)(\])?(\[|\.)?/g;function Kh(i,t){i.seq.push(t),i.map[t.id]=t}function u0(i,t,e){let n=i.name,s=n.length;for(Hl.lastIndex=0;;){let r=Hl.exec(n),a=Hl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Kh(e,c===void 0?new Xl(o,i,t):new ql(o,i,t));break}else{let _=e.map[o];_===void 0&&(_=new Yl(o),Kh(e,_)),e=_}}}var ms=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);u0(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Qh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var d0=37297,f0=0;function p0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var jh=new Ut;function m0(i){Zt._getMatrix(jh,Zt.workingColorSpace,i);let t=`mat3( ${jh.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(i)){case Ds:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return Lt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function tu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+p0(i.getShaderSource(t),o)}else return r}function g0(i,t){let e=m0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var _0={[ml]:"Linear",[gl]:"Reinhard",[_l]:"Cineon",[xl]:"ACESFilmic",[yl]:"AgX",[Ml]:"Neutral",[vl]:"Custom"};function x0(i,t){let e=_0[t];return e===void 0?(Lt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var vo=new F;function v0(){Zt.getLuminanceCoefficients(vo);let i=vo.x.toFixed(4),t=vo.y.toFixed(4),e=vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function y0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fr).join(`
`)}function M0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function S0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function fr(i){return i!==""}function eu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function nu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var b0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zl(i){return i.replace(b0,w0)}function w0(i,t){let e=Wt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Zl(e)}var T0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iu(i){return i.replace(T0,E0)}function E0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function su(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var A0={[sr]:"SHADOWMAP_TYPE_PCF",[us]:"SHADOWMAP_TYPE_VSM"};function R0(i){return A0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var C0={[fs]:"ENVMAP_MODE_REFRACTION"};function I0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":C0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var P0={[Ra]:"ENVMAP_BLENDING_MULTIPLY",[vh]:"ENVMAP_BLENDING_MIX",[yh]:"ENVMAP_BLENDING_ADD"};function L0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":P0[i.combine]||"ENVMAP_BLENDING_NONE"}function D0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=R0(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",p=I0(e),_=L0(e),h=y0(e),u=M0(r),m=s.createProgram(),g,d,f=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(fr).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(fr).join(`
`),d.length>0&&(d+=`
`)):(g=[su(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),d=[su(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+p:"",e.envMap?"#define "+_:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Ln?x0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,g0("linearToOutputTexel",e.outputColorSpace),v0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fr).join(`
`)),a=Zl(a),a=eu(a,e),a=nu(a,e),o=Zl(o),o=eu(o,e),o=nu(o,e),a=iu(a),o=iu(o),e.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",e.glslVersion===Dl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let y=f+g+a,A=f+d+o,T=Qh(s,s.VERTEX_SHADER,y),R=Qh(s,s.FRAGMENT_SHADER,A);s.attachShader(m,T),s.attachShader(m,R),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function b(C){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(m)||"",O=s.getShaderInfoLog(T)||"",V=s.getShaderInfoLog(R)||"",P=N.trim(),W=O.trim(),Z=V.trim(),H=!0,it=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,T,R);else{let Y=tu(s,T,"vertex"),tt=tu(s,R,"fragment");Pt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+Y+`
`+tt)}else P!==""?Lt("WebGLProgram: Program Info Log:",P):(W===""||Z==="")&&(it=!1);it&&(C.diagnostics={runnable:H,programLog:P,vertexShader:{log:W,prefix:g},fragmentShader:{log:Z,prefix:d}})}s.deleteShader(T),s.deleteShader(R),x=new ms(s,m),w=S0(s,m)}let x;this.getUniforms=function(){return x===void 0&&b(this),x};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(m,d0)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=f0++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=R,this}var N0=0,Jl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new $l(t),e.set(t,n)),n}},$l=class{constructor(t){this.id=N0++,this.code=t,this.usedTimes=0}};function U0(i){return i===ui||i===hr||i===ur}function F0(i,t,e,n,s,r){let a=new ns,o=new Jl,l=new Set,c=[],p=new Map,_=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,w,L,C,N,O){let V=C.fog,P=N.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,H=t.get(x.envMap||W,Z),it=h[x.type],Y=n.precision;x.precision!==null&&(Y=n.getMaxPrecision(x.precision),Y!==x.precision&&Lt("WebGLProgram.getParameters:",x.precision,"not supported, using",Y,"instead."));let tt=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,et=tt!==void 0?tt.length:0,bt=0;P.morphAttributes.position!==void 0&&(bt=1),P.morphAttributes.normal!==void 0&&(bt=2),P.morphAttributes.color!==void 0&&(bt=3);let Ot,K,gt,yt;if(it){let pt=Nn[it];Ot=pt.vertexShader,K=pt.fragmentShader}else{Ot=x.vertexShader,K=x.fragmentShader;let pt=o.getVertexShaderStage(x),ne=o.getFragmentShaderStage(x);o.update(x,pt,ne),gt=pt.id,yt=ne.id}let Rt=i.getRenderTarget(),_t=i.state.buffers.depth.getReversed(),zt=N.isInstancedMesh===!0,ve=N.isBatchedMesh===!0,It=!!x.map,ee=!!x.matcap,se=!!H,Xt=se&&H.isPMREMTexture===!0,De=!!x.aoMap,we=!!x.lightMap,Ze=!!x.bumpMap&&x.wireframe===!1,me=!!x.normalMap,Sn=!!x.displacementMap,Re=!!x.emissiveMap,sn=!!x.metalnessMap,rn=!!x.roughnessMap,an=x.anisotropy>0,U=x.clearcoat>0,on=x.diffuseRoughness>0,he=x.dispersion>0,ue=x.retroreflectivity>0,ft=x.iridescence>0,Te=x.sheen>0,Ct=x.transmission>0,Ft=an&&!!x.anisotropyMap,E=U&&!!x.clearcoatMap,M=U&&!!x.clearcoatNormalMap,z=U&&!!x.clearcoatRoughnessMap,nt=on&&!!x.diffuseRoughnessMap,j=ft&&!!x.iridescenceMap,at=ft&&!!x.iridescenceThicknessMap,ut=Te&&!!x.sheenColorMap,J=Te&&!!x.sheenRoughnessMap,$=!!x.specularMap,lt=!!x.specularColorMap,I=!!x.specularIntensityMap,Q=Ct&&!!x.transmissionMap,X=Ct&&!!x.thicknessMap,ct=!!x.gradientMap,rt=!!x.alphaMap,ot=x.alphaTest>0,Et=!!x.alphaHash,Vt=!!x.extensions,st=Ln;x.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(st=i.toneMapping);let At=Xt?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Gt={shaderID:it,shaderType:x.type,shaderName:x.name,vertexShader:Ot,fragmentShader:K,defines:x.defines,customVertexShaderID:gt,customFragmentShaderID:yt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:Y,batching:ve,batchingColor:ve&&N._colorsTexture!==null,instancing:zt,instancingColor:zt&&N.instanceColor!==null,instancingMorph:zt&&N.morphTexture!==null,outputColorSpace:Rt===null?i.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:Zt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:It,matcap:ee,envMap:se,envMapMode:se&&H.mapping,envMapPMREM:Xt,envMapMaxLod:Xt?At.length-1:null,envMapSize:Xt?At[0].width:null,aoMap:De,lightMap:we,bumpMap:Ze,normalMap:me,displacementMap:Sn,emissiveMap:Re,normalMapObjectSpace:me&&x.normalMapType===bh,normalMapTangentSpace:me&&x.normalMapType===go,packedNormalMap:me&&x.normalMapType===go&&U0(x.normalMap.format),metalnessMap:sn,roughnessMap:rn,anisotropy:an,anisotropyMap:Ft,clearcoat:U,clearcoatMap:E,clearcoatNormalMap:M,clearcoatRoughnessMap:z,diffuseRoughness:on,diffuseRoughnessMap:nt,dispersion:he,retroreflection:ue,iridescence:ft,iridescenceMap:j,iridescenceThicknessMap:at,sheen:Te,sheenColorMap:ut,sheenRoughnessMap:J,specularMap:$,specularColorMap:lt,specularIntensityMap:I,transmission:Ct,transmissionMap:Q,thicknessMap:X,gradientMap:ct,opaque:x.transparent===!1&&x.blending===ds&&x.alphaToCoverage===!1,alphaMap:rt,alphaTest:ot,alphaHash:Et,combine:x.combine,mapUv:It&&u(x.map.channel),aoMapUv:De&&u(x.aoMap.channel),lightMapUv:we&&u(x.lightMap.channel),bumpMapUv:Ze&&u(x.bumpMap.channel),normalMapUv:me&&u(x.normalMap.channel),displacementMapUv:Sn&&u(x.displacementMap.channel),emissiveMapUv:Re&&u(x.emissiveMap.channel),metalnessMapUv:sn&&u(x.metalnessMap.channel),roughnessMapUv:rn&&u(x.roughnessMap.channel),anisotropyMapUv:Ft&&u(x.anisotropyMap.channel),clearcoatMapUv:E&&u(x.clearcoatMap.channel),clearcoatNormalMapUv:M&&u(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&u(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:nt&&u(x.diffuseRoughnessMap.channel),iridescenceMapUv:j&&u(x.iridescenceMap.channel),iridescenceThicknessMapUv:at&&u(x.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&u(x.sheenColorMap.channel),sheenRoughnessMapUv:J&&u(x.sheenRoughnessMap.channel),specularMapUv:$&&u(x.specularMap.channel),specularColorMapUv:lt&&u(x.specularColorMap.channel),specularIntensityMapUv:I&&u(x.specularIntensityMap.channel),transmissionMapUv:Q&&u(x.transmissionMap.channel),thicknessMapUv:X&&u(x.thicknessMap.channel),alphaMapUv:rt&&u(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(me||an),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!P.attributes.uv&&(It||rt),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&me===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:_t,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:bt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:O.filter(pt=>pt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,decodeVideoTexture:It&&x.map.isVideoTexture===!0&&Zt.getTransfer(x.map.colorSpace)===Qt,decodeVideoTextureEmissive:Re&&x.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(x.emissiveMap.colorSpace)===Qt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Pn,flipSided:x.side===Ye,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Vt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&x.extensions.multiDraw===!0||ve)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Gt.vertexUv1s=l.has(1),Gt.vertexUv2s=l.has(2),Gt.vertexUv3s=l.has(3),l.clear(),Gt}function g(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let L in x.defines)w.push(L),w.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(d(w,x),f(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function d(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapPMREM),x.push(w.envMapMaxLod),x.push(w.envMapSize),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.diffuseRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.numLightProbeGrids),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function f(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.diffuseRoughness&&a.enable(25),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function y(x){let w=h[x.type],L;if(w){let C=Nn[w];L=zh.clone(C.uniforms)}else L=x.uniforms;return L}function A(x,w){let L=p.get(w);return L!==void 0?++L.usedTimes:(L=new D0(i,w,x,s),c.push(L),p.set(w,L)),L}function T(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),p.delete(x.cacheKey),x.destroy()}}function R(x){o.remove(x)}function b(){o.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:y,acquireProgram:A,releaseProgram:T,releaseShaderCache:R,programs:c,dispose:b}}function O0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function B0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function ru(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function au(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let u=0;return h.isInstancedMesh&&(u+=2),h.isSkinnedMesh&&(u+=1),u}function o(h,u,m,g,d,f){let y=i[t];return y===void 0?(y={id:h.id,object:h,geometry:u,material:m,materialVariant:a(h),groupOrder:g,renderOrder:h.renderOrder,z:d,group:f},i[t]=y):(y.id=h.id,y.object=h,y.geometry=u,y.material=m,y.materialVariant=a(h),y.groupOrder=g,y.renderOrder=h.renderOrder,y.z=d,y.group=f),t++,y}function l(h,u,m,g,d,f,y){y.reversedDepth===!0&&(d=-d);let A=o(h,u,m,g,d,f);m.transmission>0?n.push(A):m.transparent===!0?s.push(A):e.push(A)}function c(h,u,m,g,d,f){let y=o(h,u,m,g,d,f);m.transmission>0?n.unshift(y):m.transparent===!0?s.unshift(y):e.unshift(y)}function p(h,u){e.length>1&&e.sort(h||B0),n.length>1&&n.sort(u||ru),s.length>1&&s.sort(u||ru)}function _(){for(let h=t,u=i.length;h<u;h++){let m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:_,sort:p}}function z0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new au,i.set(n,[a])):s>=r.length?(a=new au,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function k0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new kt};break;case"SpotLight":e={position:new F,direction:new F,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function G0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var V0=0;function H0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function W0(i){let t=new k0,e=G0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new jt,a=new jt;function o(c){let p=0,_=0,h=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let u=0,m=0,g=0,d=0,f=0,y=0,A=0,T=0,R=0,b=0,x=0,w=0,L=0,C=0;c.sort(H0);for(let O=0,V=c.length;O<V;O++){let P=c[O],W=P.color,Z=P.intensity,H=P.distance,it=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ui?it=P.shadow.map.texture:it=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)p+=W.r*Z,_+=W.g*Z,h+=W.b*Z;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(P.sh.coefficients[Y],Z);C++}else if(P.isSunLight){let Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let tt=P.shadow,et=e.get(P);et.shadowIntensity=tt.intensity,et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),n.sunShadow[m]=et,n.sunShadowMap[m]=it;let bt=tt.getViewportCount();for(let Ot=0;Ot<bt;Ot++)n.sunShadowMatrix[g+Ot]=tt.getMatrix(Ot),n.sunShadowCascade[g+Ot]=tt._cascadeData[Ot];g+=bt,m++}n.sun[u]=Y,u++}else if(P.isDirectionalLight){let Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let tt=P.shadow,et=e.get(P);et.shadowIntensity=tt.intensity,et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize=tt.mapSize,n.directionalShadow[d]=et,n.directionalShadowMap[d]=it,n.directionalShadowMatrix[d]=P.shadow.matrix,R++}n.directional[d]=Y,d++}else if(P.isSpotLight){let Y=t.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(W).multiplyScalar(Z),Y.distance=H,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,n.spot[y]=Y;let tt=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,tt.updateMatrices(P),P.castShadow&&L++),n.spotLightMatrix[y]=tt.matrix,P.castShadow){let et=e.get(P);et.shadowIntensity=tt.intensity,et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize=tt.mapSize,n.spotShadow[y]=et,n.spotShadowMap[y]=it,x++}y++}else if(P.isRectAreaLight){let Y=t.get(P);Y.color.copy(W).multiplyScalar(Z),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),n.rectArea[A]=Y,A++}else if(P.isPointLight){let Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){let tt=P.shadow,et=e.get(P);et.shadowIntensity=tt.intensity,et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize=tt.mapSize,et.shadowCameraNear=tt.camera.near,et.shadowCameraFar=tt.camera.far,n.pointShadow[f]=et,n.pointShadowMap[f]=it,n.pointShadowMatrix[f]=P.shadow.matrix,b++}n.point[f]=Y,f++}else if(P.isHemisphereLight){let Y=t.get(P);Y.skyColor.copy(P.color).multiplyScalar(Z),Y.groundColor.copy(P.groundColor).multiplyScalar(Z),n.hemi[T]=Y,T++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=_,n.ambient[2]=h;let N=n.hash;(N.sunLength!==u||N.directionalLength!==d||N.pointLength!==f||N.spotLength!==y||N.rectAreaLength!==A||N.hemiLength!==T||N.numSunShadows!==m||N.numDirectionalShadows!==R||N.numPointShadows!==b||N.numSpotShadows!==x||N.numSpotMaps!==w||N.numLightProbes!==C)&&(n.sun.length=u,n.directional.length=d,n.spot.length=y,n.rectArea.length=A,n.point.length=f,n.hemi.length=T,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=g,n.sunShadowCascade.length=g,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+w-L,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=C,N.sunLength=u,N.directionalLength=d,N.pointLength=f,N.spotLength=y,N.rectAreaLength=A,N.hemiLength=T,N.numSunShadows=m,N.numDirectionalShadows=R,N.numPointShadows=b,N.numSpotShadows=x,N.numSpotMaps=w,N.numLightProbes=C,n.version=V0++)}function l(c,p){let _=0,h=0,u=0,m=0,g=0,d=0,f=p.matrixWorldInverse;for(let y=0,A=c.length;y<A;y++){let T=c[y];if(T.isSunLight){let R=n.sun[_];R.direction.setFromMatrixPosition(T.matrixWorld),R.direction.transformDirection(f),_++}else if(T.isDirectionalLight){let R=n.directional[h];R.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(f),h++}else if(T.isSpotLight){let R=n.spot[m];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(f),m++}else if(T.isRectAreaLight){let R=n.rectArea[g];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(f),a.identity(),r.copy(T.matrixWorld),r.premultiply(f),a.extractRotation(r),R.halfWidth.set(T.width*.5,0,0),R.halfHeight.set(0,T.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){let R=n.point[u];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(f),u++}else if(T.isHemisphereLight){let R=n.hemi[d];R.direction.setFromMatrixPosition(T.matrixWorld),R.direction.transformDirection(f),d++}}}return{setup:o,setupView:l,state:n}}function ou(i){let t=new W0(i),e=[],n=[],s=[];function r(_){p.camera=_,e.length=0,n.length=0,s.length=0}function a(_){_.isLightProbeGrid?s.push(_):e.push(_)}function o(_){n.push(_)}function l(){t.setup(e),s.sort((_,h)=>_.priority-h.priority||_.id-h.id)}function c(_){t.setupView(e,_)}let p={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function X0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new ou(i),t.set(s,[o])):r>=a.length?(o=new ou(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var q0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Z0=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],J0=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],lu=new jt,dr=new F,Wl=new F;function $0(i,t,e){let n=new ri,s=new Nt,r=new Nt,a=new de,o=new pa,l=new ma,c={},p=e.maxTextureSize,_={[hi]:Ye,[Ye]:hi,[Pn]:Pn},h=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:q0,fragmentShader:Y0}),u=h.clone();u.defines.HORIZONTAL_PASS=1;let m=new Ue;m.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new te(m,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sr;let f=this.type;this.render=function(b,x,w){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||b.length===0)return;this.type===th&&(Lt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=sr);let L=i.getRenderTarget(),C=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),O=i.state;O.setBlending(bi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let V=f!==this.type;V&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(W=>W.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,W=b.length;P<W;P++){let Z=b[P],H=Z.shadow;if(H===void 0){Lt("WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let it=H.getFrameExtents();s.multiply(it),r.copy(H.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(r.x=Math.floor(p/it.x),s.x=r.x*it.x,H.mapSize.x=r.x),s.y>p&&(r.y=Math.floor(p/it.y),s.y=r.y*it.y,H.mapSize.y=r.y));let Y=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=Y,H.map===null||V===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===us){if(Z.isPointLight){Lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new tn(s.x,s.y,{format:ui,type:vn,minFilter:Xe,magFilter:Xe,generateMipmaps:!1}),H.map.texture.name=Z.name+".shadowMap",H.map.depthTexture=new qn(s.x,s.y,un),H.map.depthTexture.name=Z.name+".shadowMapDepth",H.map.depthTexture.format=Hn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Le,H.map.depthTexture.magFilter=Le}else Z.isPointLight?(H.map=new pr(s.x),H.map.depthTexture=new qs(s.x,xn)):(H.map=new tn(s.x,s.y),H.map.depthTexture=new qn(s.x,s.y,xn)),H.map.depthTexture.name=Z.name+".shadowMap",H.map.depthTexture.format=Hn,this.type===sr?(H.map.depthTexture.compareFunction=Y?Il:Cl,H.map.depthTexture.minFilter=Xe,H.map.depthTexture.magFilter=Xe):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Le,H.map.depthTexture.magFilter=Le);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let tt=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();Z.isPointLight!==!0&&H.updateMatrices(Z,w);let et=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:w.layers;for(let bt=0;bt<tt;bt++){let Ot=H.getCamera(bt);if(Z.isPointLight){let K=H.camera,gt=H.matrix,yt=Z.distance||K.far;yt!==K.far&&(K.far=yt,K.updateProjectionMatrix()),dr.setFromMatrixPosition(Z.matrixWorld),K.position.copy(dr),Wl.copy(K.position),Wl.add(Z0[bt]),K.up.copy(J0[bt]),K.lookAt(Wl),K.updateMatrixWorld(),gt.makeTranslation(-dr.x,-dr.y,-dr.z),lu.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),H._frustum.setFromProjectionMatrix(lu,K.coordinateSystem,K.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,bt),i.clear();else{bt===0&&(i.setRenderTarget(H.map),i.clear());let K=H.getViewport(bt);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),O.viewport(a)}n=H.getFrustum(bt),T(x,w,Ot,Z,et,this.type)}H.isPointLightShadow!==!0&&this.type===us&&y(H,w),H.needsUpdate=!1}f=this.type,d.needsUpdate=!1,i.setRenderTarget(L,C,N)};function y(b,x){let w=t.update(g);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,u.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,u.needsUpdate=!0),b.mapPass===null?b.mapPass=new tn(s.x,s.y,{format:ui,type:vn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(x,null,w,h,g,null),u.uniforms.shadow_pass.value=b.mapPass.texture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(x,null,w,u,g,null)}function A(b,x,w,L){let C=null,N=w.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)C=N;else if(C=w.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let O=C.uuid,V=x.uuid,P=c[O];P===void 0&&(P={},c[O]=P);let W=P[V];W===void 0&&(W=C.clone(),P[V]=W,x.addEventListener("dispose",R)),C=W}if(C.visible=x.visible,C.wireframe=x.wireframe,L===us?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:_[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,w.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let O=i.properties.get(C);O.light=w}return C}function T(b,x,w,L,C,N){if(b.visible===!1)return;if(b.layers.test(C)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&N===us)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,b.matrixWorld);let P=t.update(b),W=b.material;if(Array.isArray(W)){let Z=P.groups;for(let H=0,it=Z.length;H<it;H++){let Y=Z[H],tt=W[Y.materialIndex];if(tt&&tt.visible){let et=A(b,tt,L,N);b.onBeforeShadow(i,b,x,w,P,et,Y),i.renderBufferDirect(w,null,P,et,b,Y),b.onAfterShadow(i,b,x,w,P,et,Y)}}}else if(W.visible){let Z=A(b,W,L,N);b.onBeforeShadow(i,b,x,w,P,Z,null),i.renderBufferDirect(w,null,P,Z,b,null),b.onAfterShadow(i,b,x,w,P,Z,null)}}let V=b.children;for(let P=0,W=V.length;P<W;P++)T(V[P],x,w,L,C,N)}function R(b){b.target.removeEventListener("dispose",R);for(let w in c){let L=c[w],C=b.target.uuid;C in L&&(L[C].dispose(),delete L[C])}}}function K0(i,t){function e(){let I=!1,Q=new de,X=null,ct=new de(0,0,0,0);return{setMask:function(rt){X!==rt&&!I&&(i.colorMask(rt,rt,rt,rt),X=rt)},setLocked:function(rt){I=rt},setClear:function(rt,ot,Et,Vt,st){st===!0&&(rt*=Vt,ot*=Vt,Et*=Vt),Q.set(rt,ot,Et,Vt),ct.equals(Q)===!1&&(i.clearColor(rt,ot,Et,Vt),ct.copy(Q))},reset:function(){I=!1,X=null,ct.set(-1,0,0,0)}}}function n(){let I=!1,Q=!1,X=null,ct=null,rt=null;return{setReversed:function(ot){if(Q!==ot){let Et=t.get("EXT_clip_control");ot?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),Q=ot;let Vt=rt;rt=null,this.setClear(Vt)}},getReversed:function(){return Q},setTest:function(ot){ot?_t(i.DEPTH_TEST):zt(i.DEPTH_TEST)},setMask:function(ot){X!==ot&&!I&&(i.depthMask(ot),X=ot)},setFunc:function(ot){if(Q&&(ot=Dh[ot]),ct!==ot){switch(ot){case Qr:i.depthFunc(i.NEVER);break;case jr:i.depthFunc(i.ALWAYS);break;case ta:i.depthFunc(i.LESS);break;case Qi:i.depthFunc(i.LEQUAL);break;case ea:i.depthFunc(i.EQUAL);break;case na:i.depthFunc(i.GEQUAL);break;case ia:i.depthFunc(i.GREATER);break;case sa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ct=ot}},setLocked:function(ot){I=ot},setClear:function(ot){rt!==ot&&(rt=ot,Q&&(ot=1-ot),i.clearDepth(ot))},reset:function(){I=!1,X=null,ct=null,rt=null,Q=!1}}}function s(){let I=!1,Q=null,X=null,ct=null,rt=null,ot=null,Et=null,Vt=null,st=null;return{setTest:function(At){I||(At?_t(i.STENCIL_TEST):zt(i.STENCIL_TEST))},setMask:function(At){Q!==At&&!I&&(i.stencilMask(At),Q=At)},setFunc:function(At,Gt,pt){(X!==At||ct!==Gt||rt!==pt)&&(i.stencilFunc(At,Gt,pt),X=At,ct=Gt,rt=pt)},setOp:function(At,Gt,pt){(ot!==At||Et!==Gt||Vt!==pt)&&(i.stencilOp(At,Gt,pt),ot=At,Et=Gt,Vt=pt)},setLocked:function(At){I=At},setClear:function(At){st!==At&&(i.clearStencil(At),st=At)},reset:function(){I=!1,Q=null,X=null,ct=null,rt=null,ot=null,Et=null,Vt=null,st=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,p={},_={},h={},u=new WeakMap,m=[],g=null,d=!1,f=null,y=null,A=null,T=null,R=null,b=null,x=null,w=new kt(0,0,0),L=0,C=!1,N=null,O=null,V=null,P=null,W=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,it=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(Y)[1]),H=it>=1):Y.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),H=it>=2);let tt=null,et={},bt=i.getParameter(i.SCISSOR_BOX),Ot=i.getParameter(i.VIEWPORT),K=new de().fromArray(bt),gt=new de().fromArray(Ot);function yt(I,Q,X,ct){let rt=new Uint8Array(4),ot=i.createTexture();i.bindTexture(I,ot),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Et=0;Et<X;Et++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(Q,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,rt):i.texImage2D(Q+Et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,rt);return ot}let Rt={};Rt[i.TEXTURE_2D]=yt(i.TEXTURE_2D,i.TEXTURE_2D,1),Rt[i.TEXTURE_CUBE_MAP]=yt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[i.TEXTURE_2D_ARRAY]=yt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Rt[i.TEXTURE_3D]=yt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_t(i.DEPTH_TEST),a.setFunc(Qi),Ze(!1),me(cl),_t(i.CULL_FACE),De(bi);function _t(I){p[I]!==!0&&(i.enable(I),p[I]=!0)}function zt(I){p[I]!==!1&&(i.disable(I),p[I]=!1)}function ve(I,Q){return h[I]!==Q?(i.bindFramebuffer(I,Q),h[I]=Q,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Q),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Q),!0):!1}function It(I,Q){let X=m,ct=!1;if(I){X=u.get(Q),X===void 0&&(X=[],u.set(Q,X));let rt=I.textures;if(X.length!==rt.length||X[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Et=rt.length;ot<Et;ot++)X[ot]=i.COLOR_ATTACHMENT0+ot;X.length=rt.length,ct=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,ct=!0);ct&&i.drawBuffers(X)}function ee(I){return g!==I?(i.useProgram(I),g=I,!0):!1}let se={[wi]:i.FUNC_ADD,[nh]:i.FUNC_SUBTRACT,[ih]:i.FUNC_REVERSE_SUBTRACT};se[sh]=i.MIN,se[rh]=i.MAX;let Xt={[ah]:i.ZERO,[oh]:i.ONE,[lh]:i.SRC_COLOR,[fl]:i.SRC_ALPHA,[ph]:i.SRC_ALPHA_SATURATE,[dh]:i.DST_COLOR,[hh]:i.DST_ALPHA,[ch]:i.ONE_MINUS_SRC_COLOR,[pl]:i.ONE_MINUS_SRC_ALPHA,[fh]:i.ONE_MINUS_DST_COLOR,[uh]:i.ONE_MINUS_DST_ALPHA,[mh]:i.CONSTANT_COLOR,[gh]:i.ONE_MINUS_CONSTANT_COLOR,[_h]:i.CONSTANT_ALPHA,[xh]:i.ONE_MINUS_CONSTANT_ALPHA};function De(I,Q,X,ct,rt,ot,Et,Vt,st,At){if(I===bi){d===!0&&(zt(i.BLEND),d=!1);return}if(d===!1&&(_t(i.BLEND),d=!0),I!==eh){if(I!==f||At!==C){if((y!==wi||R!==wi)&&(i.blendEquation(i.FUNC_ADD),y=wi,R=wi),At)switch(I){case ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hl:i.blendFunc(i.ONE,i.ONE);break;case ul:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Pt("WebGLState: Invalid blending: ",I);break}else switch(I){case ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ul:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dl:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",I);break}A=null,T=null,b=null,x=null,w.set(0,0,0),L=0,f=I,C=At}return}rt=rt||Q,ot=ot||X,Et=Et||ct,(Q!==y||rt!==R)&&(i.blendEquationSeparate(se[Q],se[rt]),y=Q,R=rt),(X!==A||ct!==T||ot!==b||Et!==x)&&(i.blendFuncSeparate(Xt[X],Xt[ct],Xt[ot],Xt[Et]),A=X,T=ct,b=ot,x=Et),(Vt.equals(w)===!1||st!==L)&&(i.blendColor(Vt.r,Vt.g,Vt.b,st),w.copy(Vt),L=st),f=I,C=!1}function we(I,Q){I.side===Pn?zt(i.CULL_FACE):_t(i.CULL_FACE);let X=I.side===Ye;Q&&(X=!X),Ze(X),I.blending===ds&&I.transparent===!1?De(bi):De(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let ct=I.stencilWrite;o.setTest(ct),ct&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Re(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(I){N!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),N=I)}function me(I){I!==Qc?(_t(i.CULL_FACE),I!==O&&(I===cl?i.cullFace(i.BACK):I===jc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):zt(i.CULL_FACE),O=I}function Sn(I){I!==V&&(H&&i.lineWidth(I),V=I)}function Re(I,Q,X){I?(_t(i.POLYGON_OFFSET_FILL),(P!==Q||W!==X)&&(P=Q,W=X,a.getReversed()&&(Q=-Q,X=-X),i.polygonOffset(Q,X))):zt(i.POLYGON_OFFSET_FILL)}function sn(I){I?_t(i.SCISSOR_TEST):zt(i.SCISSOR_TEST)}function rn(I){I===void 0&&(I=i.TEXTURE0+Z-1),tt!==I&&(i.activeTexture(I),tt=I)}function an(I,Q,X){X===void 0&&(tt===null?X=i.TEXTURE0+Z-1:X=tt);let ct=et[X];ct===void 0&&(ct={type:void 0,texture:void 0},et[X]=ct),(ct.type!==I||ct.texture!==Q)&&(tt!==X&&(i.activeTexture(X),tt=X),i.bindTexture(I,Q||Rt[I]),ct.type=I,ct.texture=Q)}function U(){let I=et[tt];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function on(){try{i.compressedTexImage2D(...arguments)}catch(I){Pt("WebGLState:",I)}}function he(){try{i.compressedTexImage3D(...arguments)}catch(I){Pt("WebGLState:",I)}}function ue(){try{i.texSubImage2D(...arguments)}catch(I){Pt("WebGLState:",I)}}function ft(){try{i.texSubImage3D(...arguments)}catch(I){Pt("WebGLState:",I)}}function Te(){try{i.compressedTexSubImage2D(...arguments)}catch(I){Pt("WebGLState:",I)}}function Ct(){try{i.compressedTexSubImage3D(...arguments)}catch(I){Pt("WebGLState:",I)}}function Ft(){try{i.texStorage2D(...arguments)}catch(I){Pt("WebGLState:",I)}}function E(){try{i.texStorage3D(...arguments)}catch(I){Pt("WebGLState:",I)}}function M(){try{i.texImage2D(...arguments)}catch(I){Pt("WebGLState:",I)}}function z(){try{i.texImage3D(...arguments)}catch(I){Pt("WebGLState:",I)}}function nt(I){return _[I]!==void 0?_[I]:i.getParameter(I)}function j(I,Q){_[I]!==Q&&(i.pixelStorei(I,Q),_[I]=Q)}function at(I){K.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),K.copy(I))}function ut(I){gt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),gt.copy(I))}function J(I,Q){let X=c.get(Q);X===void 0&&(X=new WeakMap,c.set(Q,X));let ct=X.get(I);ct===void 0&&(ct=i.getUniformBlockIndex(Q,I.name),i.uniformBlockBinding(Q,ct,ct),X.set(I,ct))}function $(I,Q,X){let rt=c.get(Q).get(I);l[rt]!==X&&(i.bindBufferBase(i.UNIFORM_BUFFER,rt,X),l[rt]=X)}function lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),p={},_={},tt=null,et={},h={},l={},u=new WeakMap,m=[],g=null,d=!1,f=null,y=null,A=null,T=null,R=null,b=null,x=null,w=new kt(0,0,0),L=0,C=!1,N=null,O=null,V=null,P=null,W=null,K.set(0,0,i.canvas.width,i.canvas.height),gt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:_t,disable:zt,bindFramebuffer:ve,drawBuffers:It,useProgram:ee,setBlending:De,setMaterial:we,setFlipSided:Ze,setCullFace:me,setLineWidth:Sn,setPolygonOffset:Re,setScissorTest:sn,activeTexture:rn,bindTexture:an,unbindTexture:U,compressedTexImage2D:on,compressedTexImage3D:he,texImage2D:M,texImage3D:z,pixelStorei:j,getParameter:nt,updateUBOMapping:J,uniformBlockBinding:$,texStorage2D:Ft,texStorage3D:E,texSubImage2D:ue,texSubImage3D:ft,compressedTexSubImage2D:Te,compressedTexSubImage3D:Ct,scissor:at,viewport:ut,reset:lt}}function Q0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Nt,p=new WeakMap,_=new Set,h,u=new WeakMap,m=new Set,g=new FinalizationRegistry(E=>m.delete(E)),d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(E,M){return d?new OffscreenCanvas(E,M):Ns("canvas")}function y(E,M,z){let nt=1,j=Ft(E);if((j.width>z||j.height>z)&&(nt=z/Math.max(j.width,j.height)),nt<1)if(typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&E instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&E instanceof ImageBitmap||typeof VideoFrame!="undefined"&&E instanceof VideoFrame){let at=Math.floor(nt*j.width),ut=Math.floor(nt*j.height);h===void 0&&(h=f(at,ut));let J=M?f(at,ut):h;return J.width=at,J.height=ut,J.getContext("2d").drawImage(E,0,0,at,ut),Lt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+at+"x"+ut+")."),J}else return"data"in E&&Lt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),E;return E}function A(E){return E.generateMipmaps}function T(E){i.generateMipmap(E)}function R(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,M,z,nt,j,at=!1){if(E!==null){if(i[E]!==void 0)return i[E];Lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ut;nt&&(ut=t.get("EXT_texture_norm16"),ut||Lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=M;if(M===i.RED&&(z===i.FLOAT&&(J=i.R32F),z===i.HALF_FLOAT&&(J=i.R16F),z===i.UNSIGNED_BYTE&&(J=i.R8),z===i.UNSIGNED_SHORT&&ut&&(J=ut.R16_EXT),z===i.SHORT&&ut&&(J=ut.R16_SNORM_EXT)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.R8UI),z===i.UNSIGNED_SHORT&&(J=i.R16UI),z===i.UNSIGNED_INT&&(J=i.R32UI),z===i.BYTE&&(J=i.R8I),z===i.SHORT&&(J=i.R16I),z===i.INT&&(J=i.R32I)),M===i.RG&&(z===i.FLOAT&&(J=i.RG32F),z===i.HALF_FLOAT&&(J=i.RG16F),z===i.UNSIGNED_BYTE&&(J=i.RG8),z===i.UNSIGNED_SHORT&&ut&&(J=ut.RG16_EXT),z===i.SHORT&&ut&&(J=ut.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RG8UI),z===i.UNSIGNED_SHORT&&(J=i.RG16UI),z===i.UNSIGNED_INT&&(J=i.RG32UI),z===i.BYTE&&(J=i.RG8I),z===i.SHORT&&(J=i.RG16I),z===i.INT&&(J=i.RG32I)),M===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGB8UI),z===i.UNSIGNED_SHORT&&(J=i.RGB16UI),z===i.UNSIGNED_INT&&(J=i.RGB32UI),z===i.BYTE&&(J=i.RGB8I),z===i.SHORT&&(J=i.RGB16I),z===i.INT&&(J=i.RGB32I)),M===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),z===i.UNSIGNED_INT&&(J=i.RGBA32UI),z===i.BYTE&&(J=i.RGBA8I),z===i.SHORT&&(J=i.RGBA16I),z===i.INT&&(J=i.RGBA32I)),M===i.RGB&&(z===i.UNSIGNED_SHORT&&ut&&(J=ut.RGB16_EXT),z===i.SHORT&&ut&&(J=ut.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),M===i.RGBA){let $=at?Ds:Zt.getTransfer(j);z===i.FLOAT&&(J=i.RGBA32F),z===i.HALF_FLOAT&&(J=i.RGBA16F),z===i.UNSIGNED_BYTE&&(J=$===Qt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&ut&&(J=ut.RGBA16_EXT),z===i.SHORT&&ut&&(J=ut.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function x(E,M){let z;return E?M===null||M===xn||M===Ei?z=i.DEPTH24_STENCIL8:M===un?z=i.DEPTH32F_STENCIL8:M===ps&&(z=i.DEPTH24_STENCIL8,Lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===xn||M===Ei?z=i.DEPTH_COMPONENT24:M===un?z=i.DEPTH_COMPONENT32F:M===ps&&(z=i.DEPTH_COMPONENT16),z}function w(E,M){return A(E)===!0||E.isFramebufferTexture&&E.minFilter!==Le&&E.minFilter!==Xe?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function L(E){let M=new WeakRef(E);n.get(E).__ref=M,m.add(M),g.register(E,M,M)}function C(E){let M=n.get(E).__ref;M!==void 0&&(m.delete(M),g.unregister(M))}function N(E){V(E.target)}function O(E){P(E.target)}function V(E){E.removeEventListener("dispose",N),C(E),Z(E),E.isVideoTexture&&p.delete(E),E.isHTMLTexture&&_.delete(E)}function P(E){E.removeEventListener("dispose",O),C(E),it(E)}function W(){for(let E of m){let M=E.deref();M!==void 0&&(M.isRenderTarget===!0?P(M):V(M))}m.clear(),_.clear()}function Z(E){let M=n.get(E);if(M.__webglInit===void 0)return;let z=E.source,nt=u.get(z);if(nt){let j=nt[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&H(E),Object.keys(nt).length===0&&u.delete(z)}n.remove(E)}function H(E){let M=n.get(E);i.deleteTexture(M.__webglTexture);let z=E.source,nt=u.get(z);delete nt[M.__cacheKey],a.memory.textures--}function it(E){let M=n.get(E);M.__depthDisposeCallback&&M.__depthDisposeCallback();let z=E.depthTexture;if(z&&z.renderTarget===E&&V(z),E.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let at=0;at<M.__webglFramebuffer[j].length;at++)i.deleteFramebuffer(M.__webglFramebuffer[j][at]);else i.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)i.deleteFramebuffer(M.__webglFramebuffer[j]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let nt=E.textures;for(let j=0,at=nt.length;j<at;j++){let ut=n.get(nt[j]);ut.__webglTexture&&(i.deleteTexture(ut.__webglTexture),a.memory.textures--),n.remove(nt[j])}n.remove(E)}let Y=0;function tt(){Y=0}function et(){return Y}function bt(E){Y=E}function Ot(){let E=Y;return E>=s.maxTextures&&Lt("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,E}function K(E){let M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.mipmapsAutoUpdate),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function gt(E,M){let z=n.get(E);if(E.isVideoTexture&&Te(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&z.__version!==E.version){let nt=E.image;if(nt===null)Lt("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)Lt("WebGLRenderer: Texture marked for update but image is incomplete");else{we(z,E,M);return}}else E.isExternalTexture&&(z.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function yt(E,M){let z=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){we(z,E,M);return}else E.isExternalTexture&&(z.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function Rt(E,M){let z=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){we(z,E,M);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function _t(E,M){let z=n.get(E);if(E.version>0&&z.__version!==E.version){Ze(z,E,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}let zt={[Mi]:i.REPEAT,[wn]:i.CLAMP_TO_EDGE,[ra]:i.MIRRORED_REPEAT},ve={[Le]:i.NEAREST,[Mh]:i.NEAREST_MIPMAP_NEAREST,[rr]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[Pa]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},It={[Th]:i.NEVER,[Pl]:i.ALWAYS,[Eh]:i.LESS,[Cl]:i.LEQUAL,[Ah]:i.EQUAL,[Il]:i.GEQUAL,[Rh]:i.GREATER,[Ch]:i.NOTEQUAL};function ee(E,M){if(M.type===un&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Xe||M.magFilter===Pa||M.magFilter===rr||M.magFilter===Yn||M.minFilter===Xe||M.minFilter===Pa||M.minFilter===rr||M.minFilter===Yn)&&Lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,zt[M.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,zt[M.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,zt[M.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ve[M.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ve[M.minFilter]),M.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,It[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Le||M.minFilter!==rr&&M.minFilter!==Yn||M.type===un&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function se(E,M){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",N),L(M));let nt=M.source,j=u.get(nt);j===void 0&&(j={},u.set(nt,j));let at=K(M);if(at!==E.__cacheKey){j[at]===void 0&&(j[at]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),j[at].usedTimes++;let ut=j[E.__cacheKey];ut!==void 0&&(j[E.__cacheKey].usedTimes--,ut.usedTimes===0&&H(M)),E.__cacheKey=at,E.__webglTexture=j[at].texture}return z}function Xt(E,M,z){return Math.floor(Math.floor(E/z)/M)}function De(E,M,z,nt){let at=E.updateRanges;if(at.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,z,nt,M.data);else{at.sort((I,Q)=>I.start-Q.start);let ut=0;for(let I=1;I<at.length;I++){let Q=at[ut],X=at[I],ct=Q.start+Q.count,rt=Xt(X.start,M.width,4),ot=Xt(Q.start,M.width,4);X.start<=ct+1&&rt===ot&&Xt(X.start+X.count-1,M.width,4)===rt?Q.count=Math.max(Q.count,X.start+X.count-Q.start):(++ut,at[ut]=X)}at.length=ut+1;let J=e.getParameter(i.UNPACK_ROW_LENGTH),$=e.getParameter(i.UNPACK_SKIP_PIXELS),lt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let I=0,Q=at.length;I<Q;I++){let X=at[I],ct=Math.floor(X.start/4),rt=Math.ceil(X.count/4),ot=ct%M.width,Et=Math.floor(ct/M.width),Vt=rt,st=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(i.UNPACK_SKIP_ROWS,Et),e.texSubImage2D(i.TEXTURE_2D,0,ot,Et,Vt,st,z,nt,M.data)}E.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,J),e.pixelStorei(i.UNPACK_SKIP_PIXELS,$),e.pixelStorei(i.UNPACK_SKIP_ROWS,lt)}}function we(E,M,z){let nt=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(nt=i.TEXTURE_3D);let j=se(E,M),at=M.source;e.bindTexture(nt,E.__webglTexture,i.TEXTURE0+z);let ut=n.get(at);if(at.version!==ut.__version||j===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap!="undefined"&&M.image instanceof ImageBitmap)===!1){let st=Zt.getPrimaries(Zt.workingColorSpace),At=M.colorSpace===Jn?null:Zt.getPrimaries(M.colorSpace),Gt=M.colorSpace===Jn||st===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt)}e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let $=y(M.image,!1,s.maxTextureSize);$=Ct(M,$);let lt=r.convert(M.format,M.colorSpace),I=r.convert(M.type),Q=b(M.internalFormat,lt,I,M.normalized,M.colorSpace,M.isVideoTexture);ee(nt,M);let X,ct=M.mipmaps,rt=M.isVideoTexture!==!0,ot=ut.__version===void 0||j===!0,Et=at.dataReady,Vt=w(M,$);if(M.isDepthTexture)Q=x(M.format===Zn,M.type),ot&&(rt?e.texStorage2D(i.TEXTURE_2D,1,Q,$.width,$.height):e.texImage2D(i.TEXTURE_2D,0,Q,$.width,$.height,0,lt,I,null));else if(M.isDataTexture)if(ct.length>0){rt&&ot&&e.texStorage2D(i.TEXTURE_2D,Vt,Q,ct[0].width,ct[0].height);for(let st=0,At=ct.length;st<At;st++)X=ct[st],rt?Et&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,X.width,X.height,lt,I,X.data):e.texImage2D(i.TEXTURE_2D,st,Q,X.width,X.height,0,lt,I,X.data);M.generateMipmaps=!1}else rt?(ot&&e.texStorage2D(i.TEXTURE_2D,Vt,Q,$.width,$.height),Et&&De(M,$,lt,I)):e.texImage2D(i.TEXTURE_2D,0,Q,$.width,$.height,0,lt,I,$.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){rt&&ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,Q,ct[0].width,ct[0].height,$.depth);for(let st=0,At=ct.length;st<At;st++)if(X=ct[st],M.format!==yn)if(lt!==null)if(rt){if(Et)if(M.layerUpdates.size>0){let Gt=Ol(X.width,X.height,M.format,M.type);for(let pt of M.layerUpdates){let ne=X.data.subarray(pt*Gt/X.data.BYTES_PER_ELEMENT,(pt+1)*Gt/X.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,pt,X.width,X.height,1,lt,ne)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,X.width,X.height,$.depth,lt,X.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,Q,X.width,X.height,$.depth,0,X.data,0,0);else Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?Et&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,X.width,X.height,$.depth,lt,I,X.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,Q,X.width,X.height,$.depth,0,lt,I,X.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{rt&&ot&&e.texStorage2D(i.TEXTURE_2D,Vt,Q,ct[0].width,ct[0].height);for(let st=0,At=ct.length;st<At;st++)X=ct[st],M.format!==yn?lt!==null?rt?Et&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,X.width,X.height,lt,X.data):e.compressedTexImage2D(i.TEXTURE_2D,st,Q,X.width,X.height,0,X.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?Et&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,X.width,X.height,lt,I,X.data):e.texImage2D(i.TEXTURE_2D,st,Q,X.width,X.height,0,lt,I,X.data)}else if(M.isDataArrayTexture)if(rt){if(ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,Q,$.width,$.height,$.depth),Et)if(M.layerUpdates.size>0){let st=Ol($.width,$.height,M.format,M.type);for(let At of M.layerUpdates){let Gt=$.data.subarray(At*st/$.data.BYTES_PER_ELEMENT,(At+1)*st/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,At,$.width,$.height,1,lt,I,Gt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,lt,I,$.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Q,$.width,$.height,$.depth,0,lt,I,$.data);else if(M.isData3DTexture)rt?(ot&&e.texStorage3D(i.TEXTURE_3D,Vt,Q,$.width,$.height,$.depth),Et&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,lt,I,$.data)):e.texImage3D(i.TEXTURE_3D,0,Q,$.width,$.height,$.depth,0,lt,I,$.data);else if(M.isFramebufferTexture){if(ot)if(rt)e.texStorage2D(i.TEXTURE_2D,Vt,Q,$.width,$.height);else{let st=$.width,At=$.height;for(let Gt=0;Gt<Vt;Gt++)e.texImage2D(i.TEXTURE_2D,Gt,Q,st,At,0,lt,I,null),st>>=1,At>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let st=i.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),$.parentNode!==st){st.appendChild($),_.add(M),st.onpaint=At=>{let Gt=At.changedElements;for(let pt of _)Gt.includes(pt.image)&&(pt.needsUpdate=!0)},st.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,$);else{let Gt=i.RGBA,pt=i.RGBA,ne=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Gt,pt,ne,$)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ct.length>0){if(rt&&ot){let st=Ft(ct[0]);e.texStorage2D(i.TEXTURE_2D,Vt,Q,st.width,st.height)}for(let st=0,At=ct.length;st<At;st++)X=ct[st],rt?Et&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,lt,I,X):e.texImage2D(i.TEXTURE_2D,st,Q,lt,I,X);M.generateMipmaps=!1}else if(rt){if(ot){let st=Ft($);e.texStorage2D(i.TEXTURE_2D,Vt,Q,st.width,st.height)}Et&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt,I,$)}else e.texImage2D(i.TEXTURE_2D,0,Q,lt,I,$);A(M)&&M.mipmapsAutoUpdate===!0&&T(nt),ut.__version=at.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function Ze(E,M,z){if(M.image.length!==6)return;let nt=se(E,M),j=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+z);let at=n.get(j);if(j.version!==at.__version||nt===!0){e.activeTexture(i.TEXTURE0+z);let ut=Zt.getPrimaries(Zt.workingColorSpace),J=M.colorSpace===Jn?null:Zt.getPrimaries(M.colorSpace),$=M.colorSpace===Jn||ut===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let lt=M.isCompressedTexture||M.image[0].isCompressedTexture,I=M.image[0]&&M.image[0].isDataTexture,Q=[];for(let pt=0;pt<6;pt++)!lt&&!I?Q[pt]=y(M.image[pt],!0,s.maxCubemapSize):Q[pt]=I?M.image[pt].image:M.image[pt],Q[pt]=Ct(M,Q[pt]);let X=Q[0],ct=r.convert(M.format,M.colorSpace),rt=r.convert(M.type),ot=b(M.internalFormat,ct,rt,M.normalized,M.colorSpace),Et=M.isVideoTexture!==!0,Vt=at.__version===void 0||nt===!0,st=j.dataReady,At=w(M,X);ee(i.TEXTURE_CUBE_MAP,M);let Gt;if(M.isDepthTexture){if(ot=x(M.format===Zn,M.type),Vt)if(Et)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ot,X.width,X.height);else for(let pt=0;pt<6;pt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ot,X.width,X.height,0,ct,rt,null)}else if(lt){Et&&Vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,At,ot,X.width,X.height);for(let pt=0;pt<6;pt++){Gt=Q[pt].mipmaps;for(let ne=0;ne<Gt.length;ne++){let Ce=Gt[ne];M.format!==yn?ct!==null?Et?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ne,0,0,Ce.width,Ce.height,ct,Ce.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ne,ot,Ce.width,Ce.height,0,Ce.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Et?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ne,0,0,Ce.width,Ce.height,ct,rt,Ce.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ne,ot,Ce.width,Ce.height,0,ct,rt,Ce.data)}}}else{if(Gt=M.mipmaps,Et&&Vt){Gt.length>0&&At++;let pt=Ft(Q[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,At,ot,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(I){Et?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Q[pt].width,Q[pt].height,ct,rt,Q[pt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ot,Q[pt].width,Q[pt].height,0,ct,rt,Q[pt].data);for(let ne=0;ne<Gt.length;ne++){let Qn=Gt[ne].image[pt].image;Et?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ne+1,0,0,Qn.width,Qn.height,ct,rt,Qn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ne+1,ot,Qn.width,Qn.height,0,ct,rt,Qn.data)}}else{Et?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,ct,rt,Q[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ot,ct,rt,Q[pt]);for(let ne=0;ne<Gt.length;ne++){let Ce=Gt[ne];Et?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ne+1,0,0,ct,rt,Ce.image[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ne+1,ot,ct,rt,Ce.image[pt])}}}A(M)&&M.mipmapsAutoUpdate===!0&&T(i.TEXTURE_CUBE_MAP),at.__version=j.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function me(E,M,z,nt,j,at){let ut=r.convert(z.format,z.colorSpace),J=r.convert(z.type),$=b(z.internalFormat,ut,J,z.normalized,z.colorSpace),lt=n.get(M),I=n.get(z);if(I.__renderTarget=M,!lt.__hasExternalTextures){let Q=Math.max(1,M.width>>at),X=Math.max(1,M.height>>at);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,at,$,Q,X,M.depth,0,ut,J,null):e.texImage2D(j,at,$,Q,X,0,ut,J,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),ft(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,j,I.__webglTexture,0,ue(M)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,j,I.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Sn(E,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,E),M.depthBuffer){let nt=M.depthTexture,j=nt&&nt.isDepthTexture?nt.type:null,at=x(M.stencilBuffer,j),ut=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ft(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(M),at,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(M),at,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,at,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,E)}else{let nt=M.textures;for(let j=0;j<nt.length;j++){let at=nt[j],ut=r.convert(at.format,at.colorSpace),J=r.convert(at.type),$=b(at.internalFormat,ut,J,at.normalized,at.colorSpace);ft(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(M),$,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(M),$,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,$,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(E,M,z){let nt=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(M.depthTexture);j.__renderTarget=M;let at=nt?M.depthTexture.image[0]:M.depthTexture.image;(!j.__webglTexture||at.width!==M.width||at.height!==M.height)&&(at.width=M.width,at.height=M.height,M.depthTexture.needsUpdate=!0),nt?_t(M.depthTexture,0):gt(M.depthTexture,0);let ut=j.__webglTexture,J=ue(M),$=nt?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,lt=M.depthTexture.format===Zn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===Hn)ft(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,$,ut,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,lt,$,ut,0);else if(M.depthTexture.format===Zn)ft(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,$,ut,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,lt,$,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function sn(E){let M=n.get(E),z=E.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==E.depthTexture){let nt=E.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),nt){let j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,nt.removeEventListener("dispose",j)};nt.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=nt}if(E.depthTexture&&!M.__autoAllocateDepthBuffer)if(z)for(let nt=0;nt<6;nt++)Re(M.__webglFramebuffer[nt],E,nt);else E.texture.mipmaps.length>0?Re(M.__webglFramebuffer[0],E,0):Re(M.__webglFramebuffer,E,0);else if(z){M.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[nt]),M.__webglDepthbuffer[nt]===void 0)M.__webglDepthbuffer[nt]=i.createRenderbuffer(),Sn(M.__webglDepthbuffer[nt],E,!1);else{let j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=M.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,at)}}else if(E.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Sn(M.__webglDepthbuffer,E,!1);else{let j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,at)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function rn(E,M,z){let nt=n.get(E);M!==void 0&&me(nt.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&sn(E)}function an(E){let M=E.texture,z=n.get(E),nt=n.get(M);E.addEventListener("dispose",O),L(E);let j=E.textures,at=E.isWebGLCubeRenderTarget===!0,ut=j.length>1;if(ut||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=M.version,a.memory.textures++),at){z.__webglFramebuffer=[];for(let J=0;J<6;J++)if(M.mipmaps.length>0){z.__webglFramebuffer[J]=[];for(let $=0;$<M.mipmaps.length;$++)z.__webglFramebuffer[J][$]=i.createFramebuffer()}else z.__webglFramebuffer[J]=i.createFramebuffer()}else{if(M.mipmaps.length>0){z.__webglFramebuffer=[];for(let J=0;J<M.mipmaps.length;J++)z.__webglFramebuffer[J]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ut)for(let J=0,$=j.length;J<$;J++){let lt=n.get(j[J]);lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&ft(E)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let J=0;J<j.length;J++){let $=j[J];z.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[J]);let lt=r.convert($.format,$.colorSpace),I=r.convert($.type),Q=b($.internalFormat,lt,I,$.normalized,$.colorSpace,E.isXRRenderTarget===!0),X=ue(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,X,Q,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,z.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Sn(z.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),ee(i.TEXTURE_CUBE_MAP,M);for(let J=0;J<6;J++)if(M.mipmaps.length>0)for(let $=0;$<M.mipmaps.length;$++)me(z.__webglFramebuffer[J][$],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,$);else me(z.__webglFramebuffer[J],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);A(M)?T(i.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}else if(ut){for(let J=0,$=j.length;J<$;J++){let lt=j[J],I=n.get(lt),Q=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Q=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,I.__webglTexture),ee(Q,lt),me(z.__webglFramebuffer,E,lt,i.COLOR_ATTACHMENT0+J,Q,0),A(lt)&&T(Q)}e.unbindTexture()}else{let J=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(J=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(J,nt.__webglTexture),ee(J,M),M.mipmaps.length>0)for(let $=0;$<M.mipmaps.length;$++)me(z.__webglFramebuffer[$],E,M,i.COLOR_ATTACHMENT0,J,$);else me(z.__webglFramebuffer,E,M,i.COLOR_ATTACHMENT0,J,0);A(M)?T(J):M.mipmaps.length>0&&i.texParameteri(J,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}E.depthBuffer&&sn(E)}function U(E){let M=E.textures;for(let z=0,nt=M.length;z<nt;z++){let j=M[z];if(A(j)&&j.mipmapsAutoUpdate===!0){let at=R(E),ut=n.get(j).__webglTexture;e.bindTexture(at,ut),T(at),e.unbindTexture()}}}let on=[];function he(E){if(E.samples>0){if(ft(E)===!1){let M=E.textures,z=E.width,nt=E.height,j=i.COLOR_BUFFER_BIT,at=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=n.get(E),J=M.length>1;if(J)for(let lt=0;lt<M.length;lt++)e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let lt=0;lt<M.length;lt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ut.__webglColorRenderbuffer[lt]);let I=n.get(M[lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,I,0)}i.blitFramebuffer(0,0,z,nt,0,0,z,nt,j,i.NEAREST),l===!0&&(on.length=0,on.push(i.COLOR_ATTACHMENT0+lt),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&on.push(at),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,on))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let lt=0;lt<M.length;lt++){e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,ut.__webglColorRenderbuffer[lt]);let I=n.get(M[lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,I,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let M=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function ue(E){return Math.min(s.maxSamples,E.samples)}function ft(E){let M=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Te(E){let M=a.render.frame;p.get(E)!==M&&(p.set(E,M),E.update())}function Ct(E,M){let z=E.colorSpace,nt=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||z!==Ls&&z!==Jn&&(Zt.getTransfer(z)===Qt?(nt!==yn||j!==Ke)&&Lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",z)),M}function Ft(E){return typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame!="undefined"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=Ot,this.resetTextureUnits=tt,this.getTextureUnits=et,this.setTextureUnits=bt,this.setTexture2D=gt,this.setTexture2DArray=yt,this.setTexture3D=Rt,this.setTextureCube=_t,this.rebindTextures=rn,this.setupRenderTarget=an,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=sn,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ft,this.dispose=W}function j0(i,t){function e(n,s=Jn){let r,a=Zt.getTransfer(s);if(n===Ke)return i.UNSIGNED_BYTE;if(n===Da)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Na)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Tl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===El)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===bl)return i.BYTE;if(n===wl)return i.SHORT;if(n===ps)return i.UNSIGNED_SHORT;if(n===La)return i.INT;if(n===xn)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===vn)return i.HALF_FLOAT;if(n===Al)return i.ALPHA;if(n===Rl)return i.RGB;if(n===yn)return i.RGBA;if(n===Hn)return i.DEPTH_COMPONENT;if(n===Zn)return i.DEPTH_STENCIL;if(n===Ua)return i.RED;if(n===Fa)return i.RED_INTEGER;if(n===ui)return i.RG;if(n===Oa)return i.RG_INTEGER;if(n===Ba)return i.RGBA_INTEGER;if(n===ar||n===or||n===lr||n===cr)if(a===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===za||n===ka||n===Ga||n===Va)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Va)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ha||n===Wa||n===Xa||n===qa||n===Ya||n===hr||n===Za)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ha||n===Wa)return a===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===qa)return r.COMPRESSED_R11_EAC;if(n===Ya)return r.COMPRESSED_SIGNED_R11_EAC;if(n===hr)return r.COMPRESSED_RG11_EAC;if(n===Za)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ja||n===$a||n===Ka||n===Qa||n===ja||n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ja)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$a)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ka)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ja)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===to)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===eo)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===no)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===io)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===so)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ro)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ao)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oo)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lo)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===co||n===ho||n===uo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===co)return a===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ho)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fo||n===po||n===ur||n===mo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===fo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===po)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ur)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ei?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var tg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Kl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ys(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new In({vertexShader:tg,fragmentShader:eg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new te(new _e(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ql=class extends Tn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,p=null,_=null,h=null,u=null,m=null,g=typeof XRWebGLBinding!="undefined",d=new Kl,f={},y=e.getContextAttributes(),A=null,T=null,R=[],b=[],x=new Nt,w=null,L=null,C=new Ge;C.viewport=new de;let N=new Ge;N.viewport=new de;let O=[C,N],V=new Ea,P=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let gt=R[K];return gt===void 0&&(gt=new is,R[K]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(K){let gt=R[K];return gt===void 0&&(gt=new is,R[K]=gt),gt.getGripSpace()},this.getHand=function(K){let gt=R[K];return gt===void 0&&(gt=new is,R[K]=gt),gt.getHandSpace()};function Z(K){let gt=b.indexOf(K.inputSource);if(gt===-1)return;let yt=R[gt];yt!==void 0&&(yt.update(K.inputSource,K.frame,c||a),yt.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",it);for(let K=0;K<R.length;K++){let gt=b[K];gt!==null&&(b[K]=null,R[K].disconnect(gt))}P=null,W=null,d.reset();for(let K in f)delete f[K];if(t.setRenderTarget(A),u=null,h=null,_=null,s=null,T=null,Ot.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(x.width,x.height,!1),L!==null){let K=L.camera;K.fov=L.fov,K.zoom=L.zoom,K.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:u},this.getBinding=function(){return _===null&&g&&(_=new XRWebGLBinding(s,e)),_},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",H),s.addEventListener("inputsourceschange",it),y.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(x),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Rt=null,_t=null;y.depth&&(_t=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=y.stencil?Zn:Hn,Rt=y.stencil?Ei:xn);let zt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};_=this.getBinding(),h=_.createProjectionLayer(zt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),T=new tn(h.textureWidth,h.textureHeight,{format:yn,type:Ke,depthTexture:new qn(h.textureWidth,h.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let yt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),T=new tn(u.framebufferWidth,u.framebufferHeight,{format:yn,type:Ke,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ot.setContext(s),Ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function it(K){for(let gt=0;gt<K.removed.length;gt++){let yt=K.removed[gt],Rt=b.indexOf(yt);Rt>=0&&(b[Rt]=null,R[Rt].disconnect(yt))}for(let gt=0;gt<K.added.length;gt++){let yt=K.added[gt],Rt=b.indexOf(yt);if(Rt===-1){for(let zt=0;zt<R.length;zt++)if(zt>=b.length){b.push(yt),Rt=zt;break}else if(b[zt]===null){b[zt]=yt,Rt=zt;break}if(Rt===-1)break}let _t=R[Rt];_t&&_t.connect(yt)}}function Y(K,gt){gt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(gt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let gt=K.near,yt=K.far;d.texture!==null&&(d.depthNear>0&&(gt=d.depthNear),d.depthFar>0&&(yt=d.depthFar)),V.near=N.near=C.near=gt,V.far=N.far=C.far=yt,(P!==V.near||W!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),P=V.near,W=V.far),V.layers.mask=K.layers.mask|6,C.layers.mask=V.layers.mask&-5,N.layers.mask=V.layers.mask&-3;let Rt=K.parent,_t=V.cameras;Y(V,Rt);for(let zt=0;zt<_t.length;zt++)Y(_t[zt],Rt);V.projectionMatrix.copy(C.projectionMatrix),V.projectionMatrixInverse.copy(C.projectionMatrixInverse),L===null&&K.isPerspectiveCamera&&(L={camera:K,fov:K.fov,zoom:K.zoom}),tt(K,V,Rt)};function tt(K,gt,yt){yt===null?K.matrix.copy(gt.matrixWorld):(K.matrix.copy(yt.matrixWorld),K.matrix.invert(),K.matrix.multiply(gt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(gt.projectionMatrix),K.projectionMatrixInverse.copy(gt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=oa*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(h===null&&u===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=K)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(V)},this.getCameraTexture=function(K){return f[K]};let et=null;function bt(K,gt){if(p=gt.getViewerPose(c||a),m=gt,p!==null){let yt=p.views;u!==null&&(t.setRenderTargetFramebuffer(T,u.framebuffer),t.setRenderTarget(T));let Rt=!1;yt.length!==V.cameras.length&&(V.cameras.length=0,Rt=!0);for(let It=0;It<yt.length;It++){let ee=yt[It],se=null;if(u!==null)se=u.getViewport(ee);else{let De=_.getViewSubImage(h,ee);se=De.viewport,It===0&&(t.setRenderTargetTextures(T,De.colorTexture,De.depthStencilTexture),t.setRenderTarget(T))}let Xt=O[It];Xt===void 0&&(Xt=new Ge,Xt.layers.enable(It),Xt.viewport=new de,O[It]=Xt),Xt.matrix.fromArray(ee.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(ee.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(se.x,se.y,se.width,se.height),It===0&&(V.matrix.copy(Xt.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Rt===!0&&V.cameras.push(Xt)}let _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){_=n.getBinding();let It=_.getDepthInformation(yt[0]);It&&It.isValid&&It.texture&&d.init(It,s.renderState)}if(_t&&_t.includes("camera-access")&&g){t.state.unbindTexture(),_=n.getBinding();for(let It=0;It<yt.length;It++){let ee=yt[It].camera;if(ee){let se=f[ee];se||(se=new Ys,f[ee]=se);let Xt=_.getCameraImage(ee);se.sourceTexture=Xt}}}}for(let yt=0;yt<R.length;yt++){let Rt=b[yt],_t=R[yt];Rt!==null&&_t!==void 0&&_t.update(Rt,gt,c||a)}et&&et(K,gt),gt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:gt}),m=null}let Ot=new cu;Ot.setAnimationLoop(bt),this.setAnimationLoop=function(K){et=K},this.dispose=function(){}}},ng=new jt,vu=new Ut;vu.set(-1,0,0,0,1,0,0,0,1);function ig(i,t){function e(d,f){d.matrixAutoUpdate===!0&&d.updateMatrix(),f.value.copy(d.matrix)}function n(d,f){f.color.getRGB(d.fogColor.value,Nl(i)),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function s(d,f,y,A,T){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(d,f):f.isMeshLambertMaterial?(r(d,f),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(d,f),_(d,f)):f.isMeshPhongMaterial?(r(d,f),p(d,f),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(d,f),h(d,f),f.isMeshPhysicalMaterial&&u(d,f,T)):f.isMeshMatcapMaterial?(r(d,f),m(d,f)):f.isMeshDepthMaterial?r(d,f):f.isMeshDistanceMaterial?(r(d,f),g(d,f)):f.isMeshNormalMaterial?r(d,f):f.isLineBasicMaterial?(a(d,f),f.isLineDashedMaterial&&o(d,f)):f.isPointsMaterial?l(d,f,y,A):f.isSpriteMaterial?c(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map,e(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.bumpMap&&(d.bumpMap.value=f.bumpMap,e(f.bumpMap,d.bumpMapTransform),d.bumpScale.value=f.bumpScale,f.side===Ye&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,e(f.normalMap,d.normalMapTransform),d.normalScale.value.copy(f.normalScale),f.side===Ye&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,e(f.displacementMap,d.displacementMapTransform),d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,d.emissiveMapTransform)),f.specularMap&&(d.specularMap.value=f.specularMap,e(f.specularMap,d.specularMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);let y=t.get(f),A=y.envMap,T=y.envMapRotation;A&&(d.envMap.value=A,d.envMapRotation.value.setFromMatrix4(ng.makeRotationFromEuler(T)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply(vu),d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap&&(d.lightMap.value=f.lightMap,d.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,d.lightMapTransform)),f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,d.aoMapTransform))}function a(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,f.map&&(d.map.value=f.map,e(f.map,d.mapTransform))}function o(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function l(d,f,y,A){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*y,d.scale.value=A*.5,f.map&&(d.map.value=f.map,e(f.map,d.uvTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function c(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map,e(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function p(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4)}function _(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap)}function h(d,f){d.metalness.value=f.metalness,f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,d.metalnessMapTransform)),d.roughness.value=f.roughness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,d.roughnessMapTransform)),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function u(d,f,y){d.ior.value=f.ior,f.diffuseRoughness>0&&(d.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(d.diffuseRoughnessMap.value=f.diffuseRoughnessMap,e(f.diffuseRoughnessMap,d.diffuseRoughnessMapTransform))),f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,d.sheenColorMapTransform)),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,d.sheenRoughnessMapTransform))),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,d.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(d.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ye&&d.clearcoatNormalScale.value.negate())),f.dispersion>0&&(d.dispersion.value=f.dispersion),f.retroreflectivity>0&&(d.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(d.iridescence.value=f.iridescence,d.iridescenceIOR.value=f.iridescenceIOR,d.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,d.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(d.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,d.iridescenceMapTransform)),f.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=y.texture,d.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,d.transmissionMapTransform)),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(d.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(d.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,d.specularColorMapTransform)),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,d.specularIntensityMapTransform))}function m(d,f){f.matcap&&(d.matcap.value=f.matcap)}function g(d,f){let y=t.get(f).light;d.referencePosition.value.setFromMatrixPosition(y.matrixWorld),d.nearDistance.value=y.shadow.camera.near,d.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function sg(i,t,e,n){let s={},r={};function a(y,A){let T=A.program;n.uniformBlockBinding(y,T,s[y.id])}function o(y,A){let T=s[y.id];T===void 0&&(m(y),T=l(y),s[y.id]=T,y.addEventListener("dispose",d));let R=A.program;n.updateUBOMapping(y,R);let b=t.render.frame;r[y.id]!==b&&(c(y),r[y.id]=b)}function l(y){let A=i.createBuffer(),T=y.__size,R=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,T,R),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function c(y){let A=s[y.id],T=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let b=0,x=T.length;b<x;b++){let w=T[b];if(Array.isArray(w))for(let L=0,C=w.length;L<C;L++)p(w[L],b,L,R);else p(w,b,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,A,T,R){if(h(y,A,T,R)===!0){let b=y.__offset,x=y.value;if(Array.isArray(x)){let w=0;for(let L=0;L<x.length;L++){let C=x[L],N=g(C,!0);_(C,y.__data,w),w+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else _(x,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,y.__data)}}function _(y,A,T){typeof y=="number"||typeof y=="boolean"?A[T]=y:y.isMatrix3?(A[T]=y.elements[0],A[T+1]=y.elements[1],A[T+2]=y.elements[2],A[T+3]=0,A[T+4]=y.elements[3],A[T+5]=y.elements[4],A[T+6]=y.elements[5],A[T+7]=0,A[T+8]=y.elements[6],A[T+9]=y.elements[7],A[T+10]=y.elements[8],A[T+11]=0):ArrayBuffer.isView(y)?A.set(y.subarray(0,A.length-T),T):y.toArray(A,T)}function h(y,A,T,R){let b=y.value,x=A+"_"+T;if(Array.isArray(b)){R[x]===void 0&&(R[x]=[]);let w=R[x],L=!1;for(let C=0;C<b.length;C++)u(b[C],w,C)===!0&&(L=!0);return L}return u(b,R,x)}function u(y,A,T){if(A[T]===void 0)return typeof y=="number"||typeof y=="boolean"?A[T]=y:ArrayBuffer.isView(y)?A[T]=y.slice():A[T]=y.clone(),!0;{let R=A[T];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return A[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function m(y){let A=y.uniforms,T=0,R=16;for(let x=0,w=A.length;x<w;x++){let L=Array.isArray(A[x])?A[x]:[A[x]];for(let C=0,N=L.length;C<N;C++){let O=L[C],V=Array.isArray(O.value)?O.value:[O.value],P=Array.isArray(A[x])||Array.isArray(O.value),W=T;for(let H=0,it=V.length;H<it;H++){let Y=V[H],tt=g(Y,P),et=T%R,bt=et%tt.boundary,Ot=et+bt;T+=bt,Ot!==0&&R-Ot<tt.storage&&(T+=R-Ot),H===0&&(W=T),T+=tt.storage}let Z=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new Z((T-W)/Float32Array.BYTES_PER_ELEMENT),O.__offset=W}}let b=T%R;return b>0&&(T+=R-b),y.__size=T,y.__cache={},this}function g(y,A){let T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=16,T.storage=48):y.isMatrix4?(T.boundary=16,T.storage=64):y.isTexture?Lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):Lt("WebGLRenderer: Unsupported uniform value type.",y),A===!0&&(T.boundary=16,T.storage=Math.ceil(T.storage/16)*16),T}function d(y){let A=y.target;A.removeEventListener("dispose",d),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function f(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:o,dispose:f}}var rg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Dn=null;function ag(){return Dn===null&&(Dn=new Vs(rg,16,16,ui,vn),Dn.name="DFG_LUT",Dn.minFilter=Xe,Dn.magFilter=Xe,Dn.wrapS=wn,Dn.wrapT=wn,Dn.generateMipmaps=!1,Dn.needsUpdate=!0),Dn}var Mo=class{constructor(t={}){let{canvas:e=Ih(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:h=!1,outputBufferType:u=Ke}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let g=u,d=new Set([Ba,Oa,Fa]),f=new Set([Ke,xn,ps,Ei,Da,Na]),y=new Uint32Array(4),A=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]},R=null,b=null,x=[],w=[],L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,O=null,V=null,P=null,W=null;this._outputColorSpace=ke;let Z=0,H=0,it=null,Y=-1,tt=null,et=new de,bt=new de,Ot=null,K=new kt(0),gt=0,yt=e.width,Rt=e.height,_t=1,zt=null,ve=null,It=new de(0,0,yt,Rt),ee=new de(0,0,yt,Rt),se=!1,Xt=new ri,De=new da,we=!1,Ze=!1,me=new jt,Sn=new F,Re=new de,sn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},rn=!1;function an(){return it===null?_t:1}let U=n;function on(S,D){return e.getContext(S,D)}let he,ue,ft,Te,Ct,Ft,E,M,z,nt,j,at,ut,J,$,lt,I,Q,X,ct,rt,ot,Et;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",At,!1),e.addEventListener("webglcontextrestored",Gt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),U===null){let D="webgl2";if(U=on(D,S),U===null)throw on(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(S){throw e.removeEventListener("webglcontextlost",At,!1),e.removeEventListener("webglcontextrestored",Gt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),Pt("WebGLRenderer: "+S.message),S}function Vt(){he=new _m(U),he.init(),rt=new j0(U,he),ue=new am(U,he,t,rt),ft=new K0(U,he),ue.reversedDepthBuffer&&h&&ft.buffers.depth.setReversed(!0),V=U.createFramebuffer(),P=U.createFramebuffer(),W=U.createFramebuffer(),Te=new ym(U),Ct=new O0,Ft=new Q0(U,he,ft,Ct,ue,rt,Te),E=new gm(C),M=new Md(U),ot=new sm(U,M),z=new xm(U,M,Te,ot),nt=new Sm(U,z,M,ot,Te),Q=new Mm(U,ue,Ft),$=new om(Ct),j=new F0(C,E,he,ue,ot,$),at=new ig(C,Ct),ut=new z0,J=new X0(he),I=new im(C,E,ft,nt,m,l),lt=new $0(C,nt,ue),Et=new sg(U,Te,ue,ft),X=new rm(U,he,Te),ct=new vm(U,he,Te),Te.programs=j.programs,C.capabilities=ue,C.extensions=he,C.properties=Ct,C.renderLists=ut,C.shadowMap=lt,C.state=ft,C.info=Te}g!==Ke&&(L=new wm(g,e.width,e.height,o,s,r));let st=new Ql(C,U);this.xr=st,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let S=he.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=he.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(S){S!==void 0&&(_t=S,this.setSize(yt,Rt,!1))},this.getSize=function(S){return S.set(yt,Rt)},this.setSize=function(S,D,G=!0){if(st.isPresenting){Lt("WebGLRenderer: Can't change size while VR device is presenting.");return}yt=S,Rt=D,e.width=Math.floor(S*_t),e.height=Math.floor(D*_t),G===!0&&(e.style.width=S+"px",e.style.height=D+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(yt*_t,Rt*_t).floor()},this.setDrawingBufferSize=function(S,D,G){yt=S,Rt=D,_t=G,e.width=Math.floor(S*G),e.height=Math.floor(D*G),this.setViewport(0,0,S,D)},this.setEffects=function(S){if(g===Ke){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let D=0;D<S.length;D++)if(S[D].isOutputPass===!0){Lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(et)},this.getViewport=function(S){return S.copy(It)},this.setViewport=function(S,D,G,B){S.isVector4?It.set(S.x,S.y,S.z,S.w):It.set(S,D,G,B),ft.viewport(et.copy(It).multiplyScalar(an()).round())},this.getScissor=function(S){return S.copy(ee)},this.setScissor=function(S,D,G,B){S.isVector4?ee.set(S.x,S.y,S.z,S.w):ee.set(S,D,G,B),ft.scissor(bt.copy(ee).multiplyScalar(an()).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(S){ft.setScissorTest(se=S)},this.setOpaqueSort=function(S){zt=S},this.setTransparentSort=function(S){ve=S},this.getClearColor=function(S){return S.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(S=!0,D=!0,G=!0){let B=0;if(S){let k=!1;if(it!==null){let dt=it.texture.format;k=d.has(dt)}if(k){let dt=it.texture.type,vt=f.has(dt),ht=I.getClearColor(),xt=I.getClearAlpha(),wt=ht.r,Bt=ht.g,qt=ht.b;vt?(y[0]=wt,y[1]=Bt,y[2]=qt,y[3]=xt,U.clearBufferuiv(U.COLOR,0,y)):(A[0]=wt,A[1]=Bt,A[2]=qt,A[3]=xt,U.clearBufferiv(U.COLOR,0,A))}else B|=U.COLOR_BUFFER_BIT}D&&(B|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),O=S},this.dispose=function(){e.removeEventListener("webglcontextlost",At,!1),e.removeEventListener("webglcontextrestored",Gt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),I.dispose(),ut.dispose(),J.dispose(),Ft.dispose(),Ct.dispose(),E.dispose(),nt.dispose(),z.dispose(),ot.dispose(),Et.dispose(),j.dispose(),st.dispose(),st.removeEventListener("sessionstart",hc),st.removeEventListener("sessionend",uc),pi.stop()};function At(S){S.preventDefault(),Us("WebGLRenderer: Context Lost."),N=!0}function Gt(){Us("WebGLRenderer: Context Restored."),N=!1;let S=Te.autoReset,D=lt.enabled,G=lt.autoUpdate,B=lt.needsUpdate,k=lt.type;Vt(),Te.autoReset=S,lt.enabled=D,lt.autoUpdate=G,lt.needsUpdate=B,lt.type=k}function pt(S){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ne(S){let D=S.target;D.removeEventListener("dispose",ne),Ce(D)}function Ce(S){Qn(S),Ct.remove(S)}function Qn(S){let D=Ct.get(S).programs;D!==void 0&&(D.forEach(function(G){j.releaseProgram(G)}),S.isShaderMaterial&&j.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,G,B,k,dt){D===null&&(D=sn);let vt=k.isMesh&&k.matrixWorld.determinantAffine()<0,ht=Uu(S,D,G,B,k);ft.setMaterial(B,vt);let xt=G.index,wt=1;if(B.wireframe===!0){if(xt=z.getWireframeAttribute(G),xt===void 0)return;wt=2}let Bt=G.drawRange,qt=G.attributes.position,Mt=Bt.start*wt,Yt=(Bt.start+Bt.count)*wt;dt!==null&&(Mt=Math.max(Mt,dt.start*wt),Yt=Math.min(Yt,(dt.start+dt.count)*wt)),xt!==null?(Mt=Math.max(Mt,0),Yt=Math.min(Yt,xt.count)):qt!=null&&(Mt=Math.max(Mt,0),Yt=Math.min(Yt,qt.count));let ye=Yt-Mt;if(ye<0||ye===1/0)return;ot.setup(k,B,ht,G,xt);let ae,re=X;if(xt!==null&&(ae=M.get(xt),re=ct,re.setIndex(ae)),k.isMesh)B.wireframe===!0?(ft.setLineWidth(B.wireframeLinewidth*an()),re.setMode(U.LINES)):re.setMode(U.TRIANGLES);else if(k.isLine){let Fe=B.linewidth;Fe===void 0&&(Fe=1),ft.setLineWidth(Fe*an()),k.isLineSegments?re.setMode(U.LINES):k.isLineLoop?re.setMode(U.LINE_LOOP):re.setMode(U.LINE_STRIP)}else k.isPoints?re.setMode(U.POINTS):k.isSprite&&re.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(he.get("WEBGL_multi_draw"))re.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Fe=k._multiDrawStarts,St=k._multiDrawCounts,He=k._multiDrawCount,Kt=xt?M.get(xt).bytesPerElement:1,mi=Ct.get(B).currentProgram.getUniforms();for(let Oe=0;Oe<He;Oe++)mi.setValue(U,"_gl_DrawID",Oe),re.render(Fe[Oe]/Kt,St[Oe])}else if(k.isInstancedMesh)re.renderInstances(Mt,ye,k.count);else if(G.isInstancedBufferGeometry){let Fe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,St=Math.min(G.instanceCount,Fe);re.renderInstances(Mt,ye,St)}else re.render(Mt,ye)};function cc(S,D,G,B){O!==null&&S.isNodeMaterial&&O.setObject(B,S),we===!0&&$.setState(S,G,!1),S.transparent===!0&&S.side===Pn&&S.forceSinglePass===!1?(S.side=Ye,S.needsUpdate=!0,ys(S,D,B),S.side=hi,S.needsUpdate=!0,ys(S,D,B),S.side=Pn):ys(S,D,B)}this.compile=function(S,D,G=null){G===null&&(G=S),O!==null&&O.renderStart(S,D,G),b=J.get(G),b.init(D),w.push(b),G.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),S!==G&&S.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),b.setupLights(),O!==null&&O.updateLights(b.state.lightsArray),Ze=this.localClippingEnabled,we=$.init(this.clippingPlanes,Ze),we===!0&&$.setGlobalState(this.clippingPlanes,D),O!==null&&lt.render(b.state.shadowsArray,G,D);let B=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let dt=k.material;if(dt)if(Array.isArray(dt))for(let vt=0;vt<dt.length;vt++){let ht=dt[vt];cc(ht,G,D,k),B.add(ht)}else cc(dt,G,D,k),B.add(dt)}),b=w.pop(),O!==null&&O.renderEnd(),B},this.compileAsync=function(S,D,G=null){let B=this.compile(S,D,G);return new Promise(k=>{function dt(){if(B.forEach(function(vt){let xt=Ct.get(vt).currentProgram;(xt===void 0||xt.isReady())&&B.delete(vt)}),B.size===0){k(S);return}setTimeout(dt,10)}he.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Ro=null;function Du(S){Ro&&Ro(S)}function hc(){pi.stop()}function uc(){pi.start()}let pi=new cu;pi.setAnimationLoop(Du),typeof self!="undefined"&&pi.setContext(self),this.setAnimationLoop=function(S){Ro=S,st.setAnimationLoop(S),S===null?pi.stop():pi.start()},st.addEventListener("sessionstart",hc),st.addEventListener("sessionend",uc),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;O!==null&&O.renderStart(S,D);let G=st.enabled===!0&&st.isPresenting===!0,B=L!==null&&(it===null||G)&&L.begin(C,it);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(D),D=st.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,D,it),b=J.get(S,w.length),b.init(D),b.state.textureUnits=Ft.getTextureUnits(),w.push(b),me.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?De.setFromArrayCamera(D):Xt.setFromProjectionMatrix(me,cn,D.reversedDepth),Ze=this.localClippingEnabled,we=$.init(this.clippingPlanes,Ze),R=ut.get(S,x.length),R.init(),x.push(R),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){let vt=C.xr.getDepthSensingMesh();vt!==null&&Co(vt,D,-1/0,C.sortObjects)}Co(S,D,0,C.sortObjects),R.finish(),O!==null&&O.updateLights(b.state.lightsArray),C.sortObjects===!0&&R.sort(zt,ve),rn=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,rn&&I.addToRenderList(R,S),this.info.autoReset===!0&&this.info.reset(),we===!0&&$.beginShadows();let k=b.state.shadowsArray;if(lt.render(k,S,D),we===!0&&$.endShadows(),(B&&L.hasRenderPass())===!1){let vt=R.opaque,ht=R.transmissive;if(b.setupLights(),D.isArrayCamera){let xt=D.cameras;if(ht.length>0)for(let wt=0,Bt=xt.length;wt<Bt;wt++){let qt=xt[wt];fc(vt,ht,S,qt)}rn&&I.render(S);for(let wt=0,Bt=xt.length;wt<Bt;wt++){let qt=xt[wt];dc(R,S,qt,qt.viewport)}}else ht.length>0&&fc(vt,ht,S,D),rn&&I.render(S),dc(R,S,D)}it!==null&&H===0&&(Ft.updateMultisampleRenderTarget(it),Ft.updateRenderTargetMipmap(it)),B&&L.end(C),S.isScene===!0&&S.onAfterRender(C,S,D),ot.resetDefaultState(),Y=-1,tt=null,w.pop(),w.length>0?(b=w[w.length-1],Ft.setTextureUnits(b.state.textureUnits),we===!0&&$.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,x.pop(),x.length>0?R=x[x.length-1]:R=null,O!==null&&O.renderEnd()};function Co(S,D,G,B){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)b.pushLight(S),S.castShadow&&b.pushShadow(S);else if(S.isSprite){let vt=D.isArrayCamera?De:Xt;if(!S.frustumCulled||S.intersectsFrustum(vt)){B&&Re.setFromMatrixPosition(S.matrixWorld).applyMatrix4(me);let ht=nt.update(S),xt=S.material;xt.visible&&R.push(S,ht,xt,G,Re.z,null,D)}}else if(S.isMesh||S.isLine||S.isPoints){let vt=D.isArrayCamera?De:Xt;if(!S.frustumCulled||S.intersectsFrustum(vt)){let ht=nt.update(S),xt=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Re.copy(S.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Re.copy(ht.boundingSphere.center)),Re.applyMatrix4(S.matrixWorld).applyMatrix4(me)),Array.isArray(xt)){let wt=ht.groups;for(let Bt=0,qt=wt.length;Bt<qt;Bt++){let Mt=wt[Bt],Yt=xt[Mt.materialIndex];Yt&&Yt.visible&&R.push(S,ht,Yt,G,Re.z,Mt,D)}}else xt.visible&&R.push(S,ht,xt,G,Re.z,null,D)}}}let dt=S.children;for(let vt=0,ht=dt.length;vt<ht;vt++)Co(dt[vt],D,G,B)}function dc(S,D,G,B){let{opaque:k,transmissive:dt,transparent:vt}=S;b.setupLightsView(G),we===!0&&$.setGlobalState(C.clippingPlanes,G),B&&ft.viewport(et.copy(B)),k.length>0&&Sr(k,D,G),dt.length>0&&Sr(dt,D,G),vt.length>0&&Sr(vt,D,G),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function fc(S,D,G,B){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[B.id]===void 0){let Mt=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[B.id]=new tn(1,1,{generateMipmaps:!0,type:Mt?vn:Ke,minFilter:Yn,samples:Math.max(4,ue.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}let dt=b.state.transmissionRenderTarget[B.id],vt=B.viewport||et;dt.setSize(vt.z*C.transmissionResolutionScale,vt.w*C.transmissionResolutionScale);let ht=C.getRenderTarget(),xt=C.getActiveCubeFace(),wt=C.getActiveMipmapLevel();C.setRenderTarget(dt),C.getClearColor(K),gt=C.getClearAlpha(),gt<1&&C.setClearColor(16777215,.5),C.clear(),rn&&I.render(G);let Bt=C.toneMapping;C.toneMapping=Ln;let qt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),b.setupLightsView(B),we===!0&&$.setGlobalState(C.clippingPlanes,B),Sr(S,G,B),Ft.updateMultisampleRenderTarget(dt),Ft.updateRenderTargetMipmap(dt),he.has("WEBGL_multisampled_render_to_texture")===!1){let Mt=!1;for(let Yt=0,ye=D.length;Yt<ye;Yt++){let ae=D[Yt],{object:re,geometry:Fe,material:St,group:He}=ae;if(St.side===Pn&&re.layers.test(B.layers)){let Kt=St.side;St.side=Ye,St.needsUpdate=!0,pc(re,G,B,Fe,St,He),St.side=Kt,St.needsUpdate=!0,Mt=!0}}Mt===!0&&(Ft.updateMultisampleRenderTarget(dt),Ft.updateRenderTargetMipmap(dt))}C.setRenderTarget(ht,xt,wt),C.setClearColor(K,gt),qt!==void 0&&(B.viewport=qt),C.toneMapping=Bt}function Sr(S,D,G){let B=D.isScene===!0?D.overrideMaterial:null;for(let k=0,dt=S.length;k<dt;k++){let vt=S[k],{object:ht,geometry:xt,group:wt}=vt,Bt=vt.material;Bt.allowOverride===!0&&B!==null&&(Bt=B),ht.layers.test(G.layers)&&pc(ht,D,G,xt,Bt,wt)}}function pc(S,D,G,B,k,dt){O!==null&&k.isNodeMaterial&&O.setObject(S,k),S.onBeforeRender(C,D,G,B,k,dt),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(C,D,G,B,S,dt),k.transparent===!0&&k.side===Pn&&k.forceSinglePass===!1?(k.side=Ye,k.needsUpdate=!0,C.renderBufferDirect(G,D,B,k,S,dt),k.side=hi,k.needsUpdate=!0,C.renderBufferDirect(G,D,B,k,S,dt),k.side=Pn):C.renderBufferDirect(G,D,B,k,S,dt),S.onAfterRender(C,D,G,B,k,dt)}function mc(S){let D=0;for(let G of S)G.texture!==null&&D++;return D}function ys(S,D,G){D.isScene!==!0&&(D=sn);let B=Ct.get(S),k=b.state.lights,dt=b.state.shadowsArray,vt=k.state.version,ht=j.getParameters(S,k.state,dt,D,G,b.state.lightProbeGridArray),xt=j.getProgramCacheKey(ht),wt=B.programs;B.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,B.fog=D.fog;let Bt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;B.envMap=E.get(S.envMap||B.environment,Bt),B.envMapRotation=B.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,wt===void 0&&(S.addEventListener("dispose",ne),wt=new Map,B.programs=wt,B.programVariants=new Map);let qt=wt.get(xt);if(qt!==void 0){if(B.currentProgram===qt&&B.lightsStateVersion===vt)return _c(S,ht),qt}else ht.uniforms=j.getUniforms(S),O!==null&&S.isNodeMaterial&&O.build(S,G,ht),S.onBeforeCompile(ht,C),qt=j.acquireProgram(ht,xt),wt.set(xt,qt),B.uniforms=ht.uniforms;let Mt=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Mt.clippingPlanes=$.uniform),_c(S,ht),B.needsLights=Ou(S),B.lightsStateVersion=vt,B.needsLights&&(Mt.ambientLightColor.value=k.state.ambient,Mt.lightProbe.value=k.state.probe,Mt.sunLights.value=k.state.sun,Mt.sunLightShadows.value=k.state.sunShadow,Mt.directionalLights.value=k.state.directional,Mt.directionalLightShadows.value=k.state.directionalShadow,Mt.spotLights.value=k.state.spot,Mt.spotLightShadows.value=k.state.spotShadow,Mt.rectAreaLights.value=k.state.rectArea,Mt.ltc_1.value=k.state.rectAreaLTC1,Mt.ltc_2.value=k.state.rectAreaLTC2,Mt.pointLights.value=k.state.point,Mt.pointLightShadows.value=k.state.pointShadow,Mt.hemisphereLights.value=k.state.hemi,Mt.sunShadowMatrix.value=k.state.sunShadowMatrix,Mt.sunShadowCascade.value=k.state.sunShadowCascade,Mt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Mt.spotLightMatrix.value=k.state.spotLightMatrix,Mt.spotLightMap.value=k.state.spotLightMap,Mt.pointShadowMatrix.value=k.state.pointShadowMatrix),B.numLightProbeGrids=mc(b.state.lightProbeGridArray),B.currentProgram=qt,B.uniformsList=null,qt}function Nu(S,D,G,B,k){let dt=Ct.get(S),vt=dt.currentProgram.id+","+B+","+k,ht=dt.programVariants.get(vt);return ht===void 0?(ht=ys(S,D,G),dt.programVariants.set(vt,ht)):(dt.currentProgram=ht,dt.uniformsList=null,dt.outputColorSpace=B,dt.toneMapping=k),ht}function gc(S){if(S.uniformsList===null){let D=S.currentProgram.getUniforms();S.uniformsList=ms.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function _c(S,D){let G=Ct.get(S);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.batchingColor=D.batchingColor,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.instancingMorph=D.instancingMorph,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function Uu(S,D,G,B,k){D.isScene!==!0&&(D=sn),Ft.resetTextureUnits();let dt=D.fog,vt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?D.environment:null,ht=it===null?C.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Zt.workingColorSpace,xt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,wt=E.get(B.envMap||vt,xt),Bt=B.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,qt=!!G.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Mt=!!G.morphAttributes.position,Yt=!!G.morphAttributes.normal,ye=!!G.morphAttributes.color,ae=Ln;B.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ae=C.toneMapping);let re=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Fe=re!==void 0?re.length:0,St=Ct.get(B),He=b.state.lights;if(we===!0&&(Ze===!0||S!==tt)){let ge=S===tt&&B.id===Y;$.setState(B,S,ge)}let Kt=!1,mi=!1;B.version===St.__version?St.needsLights&&St.lightsStateVersion!==He.state.version||k.isBatchedMesh&&St.batching===!1||!k.isBatchedMesh&&St.batching===!0||k.isBatchedMesh&&St.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&St.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&St.instancing===!1||!k.isInstancedMesh&&St.instancing===!0||k.isSkinnedMesh&&St.skinning===!1||!k.isSkinnedMesh&&St.skinning===!0||k.isInstancedMesh&&St.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&St.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&St.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&St.instancingMorph===!1&&k.morphTexture!==null||St.envMap!==wt||B.fog===!0&&St.fog!==dt||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==$.numPlanes||St.numIntersection!==$.numIntersection)||St.vertexAlphas!==Bt||St.vertexTangents!==qt||St.morphTargets!==Mt||St.morphNormals!==Yt||St.morphColors!==ye||St.morphTargetsCount!==Fe||St.numLightProbeGrids!==mc(b.state.lightProbeGridArray)?Kt=!0:(St.outputColorSpace!==ht||St.toneMapping!==ae)&&(mi=!0):(Kt=!0,St.__version=B.version);let Oe=St.currentProgram;(Kt===!0||mi===!0)&&(Oe=mi===!0?Nu(B,D,k,ht,ae):ys(B,D,k),O&&B.isNodeMaterial&&O.onUpdateProgram(B,Oe,St));let br=!1,jn=!1,gi=!1,$t=Oe.getUniforms(),Ne=St.uniforms;if(ft.useProgram(Oe.program)&&(br=!0,jn=!0,gi=!0),B.id!==Y&&(Y=B.id,jn=!0),br||tt!==S){ft.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),$t.setValue(U,"projectionMatrix",S.projectionMatrix),$t.setValue(U,"viewMatrix",S.matrixWorldInverse);let Ie=$t.map.cameraPosition;Ie!==void 0&&Ie.setValue(U,Sn.setFromMatrixPosition(S.matrixWorld)),ue.logarithmicDepthBuffer&&$t.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&$t.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),tt!==S&&(tt=S,jn=!0,gi=!0)}if(St.needsLights&&(He.state.sunShadowMap.length>0&&$t.setValue(U,"sunShadowMap",He.state.sunShadowMap,Ft),He.state.directionalShadowMap.length>0&&$t.setValue(U,"directionalShadowMap",He.state.directionalShadowMap,Ft),He.state.spotShadowMap.length>0&&$t.setValue(U,"spotShadowMap",He.state.spotShadowMap,Ft),He.state.pointShadowMap.length>0&&$t.setValue(U,"pointShadowMap",He.state.pointShadowMap,Ft)),k.isSkinnedMesh){$t.setOptional(U,k,"bindMatrix"),$t.setOptional(U,k,"bindMatrixInverse");let ge=k.skeleton;ge&&(ge.boneTexture===null&&ge.computeBoneTexture(),$t.setValue(U,"boneTexture",ge.boneTexture,Ft))}k.isBatchedMesh&&($t.setOptional(U,k,"batchingTexture"),$t.setValue(U,"batchingTexture",k._matricesTexture,Ft),$t.setOptional(U,k,"batchingIdTexture"),$t.setValue(U,"batchingIdTexture",k._indirectTexture,Ft),$t.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&$t.setValue(U,"batchingColorTexture",k._colorsTexture,Ft));let fn=G.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&Q.update(k,G,Oe),(jn||St.receiveShadow!==k.receiveShadow)&&(St.receiveShadow=k.receiveShadow,$t.setValue(U,"receiveShadow",k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&D.environment!==null&&(Ne.envMapIntensity.value=D.environmentIntensity),Ne.dfgLUT!==void 0&&(Ne.dfgLUT.value=ag()),jn){if($t.setValue(U,"toneMappingExposure",C.toneMappingExposure),St.needsLights&&Fu(Ne,gi),dt&&B.fog===!0&&at.refreshFogUniforms(Ne,dt),at.refreshMaterialUniforms(Ne,B,_t,Rt,b.state.transmissionRenderTarget[S.id]),St.needsLights&&St.numLightProbeGrids>0){let ge=T,Ie=0;for(let Un of b.state.lightProbeGridArray)Un.texture!==null&&(ge.textures[Ie]=Un.texture,ge.min[Ie]=Un.boundingBox.min,ge.max[Ie]=Un.boundingBox.max,ge.resolution[Ie]=Un.resolution,Ie++);for(let Un in ge)ge[Un].length=Ie;Ne.probesSH.value=ge.textures,Ne.probesMin.value=ge.min,Ne.probesMax.value=ge.max,Ne.probesResolution.value=ge.resolution}ms.upload(U,gc(St),Ne,Ft)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ms.upload(U,gc(St),Ne,Ft),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&$t.setValue(U,"center",k.center),$t.setValue(U,"modelViewMatrix",k.modelViewMatrix),$t.setValue(U,"normalMatrix",k.normalMatrix),$t.setValue(U,"modelMatrix",k.matrixWorld),B.uniformsGroups!==void 0){let ge=B.uniformsGroups;for(let Ie=0,Un=ge.length;Ie<Un;Ie++){let vc=ge[Ie];Et.update(vc,Oe),Et.bind(vc,Oe)}}return Oe}function Fu(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.sunLights.needsUpdate=D,S.sunLightShadows.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function Ou(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(S,D,G){let B=Ct.get(S);B.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Ct.get(S.texture).__webglTexture=D,Ct.get(S.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:G,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,D){let G=Ct.get(S);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,G=0){it=S,Z=D,H=G;let B=null,k=!1,dt=!1;if(S){let ht=Ct.get(S);if(ht.__useDefaultFramebuffer!==void 0){ft.bindFramebuffer(U.FRAMEBUFFER,ht.__webglFramebuffer),et.copy(S.viewport),bt.copy(S.scissor),Ot=S.scissorTest,ft.viewport(et),ft.scissor(bt),ft.setScissorTest(Ot),Y=-1;return}else if(ht.__webglFramebuffer===void 0)Ft.setupRenderTarget(S);else if(ht.__hasExternalTextures)Ft.rebindTextures(S,Ct.get(S.texture).__webglTexture,Ct.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Bt=S.depthTexture;if(ht.__boundDepthTexture!==Bt){if(Bt!==null&&Ct.has(Bt)&&(S.width!==Bt.image.width||S.height!==Bt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ft.setupDepthRenderbuffer(S)}}let xt=S.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(dt=!0);let wt=Ct.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(wt[D])?B=wt[D][G]:B=wt[D],k=!0):S.samples>0&&Ft.useMultisampledRTT(S)===!1?B=Ct.get(S).__webglMultisampledFramebuffer:Array.isArray(wt)?B=wt[G]:B=wt,et.copy(S.viewport),bt.copy(S.scissor),Ot=S.scissorTest}else et.copy(It).multiplyScalar(_t).floor(),bt.copy(ee).multiplyScalar(_t).floor(),Ot=se;if(G!==0&&(B=V),ft.bindFramebuffer(U.FRAMEBUFFER,B)&&ft.drawBuffers(S,B),ft.viewport(et),ft.scissor(bt),ft.setScissorTest(Ot),k){let ht=Ct.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,ht.__webglTexture,G)}else if(dt){let ht=D;for(let xt=0;xt<S.textures.length;xt++){let wt=Ct.get(S.textures[xt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+xt,wt.__webglTexture,G,ht)}}else if(S!==null&&G!==0){let ht=Ct.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ht.__webglTexture,G)}Y=-1};function xc(S){let D=Ct.get(S);return(D.__readFormat!==S.format||D.__readType!==S.type)&&(D.__readFormat=S.format,D.__readType=S.type,D.__formatReadable=ue.textureFormatReadable(S.format),D.__typeReadable=ue.textureTypeReadable(S.type)),D}this.readRenderTargetPixels=function(S,D,G,B,k,dt,vt,ht=0){if(!(S&&S.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Ct.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&vt!==void 0&&(xt=xt[vt],Array.isArray(xt)&&(xt=xt[0])),xt){ft.bindFramebuffer(U.FRAMEBUFFER,xt);try{let wt=S.textures[ht],Bt=wt.format,qt=wt.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ht);let Mt=xc(wt);if(Mt.__formatReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Mt.__typeReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-B&&G>=0&&G<=S.height-k&&U.readPixels(D,G,B,k,rt.convert(Bt),rt.convert(qt),dt)}finally{let wt=it!==null?Ct.get(it).__webglFramebuffer:null;ft.bindFramebuffer(U.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(S,D,G,B,k,dt,vt,ht=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Ct.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&vt!==void 0&&(xt=xt[vt],Array.isArray(xt)&&(xt=xt[0])),xt)if(D>=0&&D<=S.width-B&&G>=0&&G<=S.height-k){ft.bindFramebuffer(U.FRAMEBUFFER,xt);let wt=S.textures[ht],Bt=wt.format,qt=wt.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ht);let Mt=xc(wt);if(Mt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Mt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Yt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Yt),U.bufferData(U.PIXEL_PACK_BUFFER,dt.byteLength,U.STREAM_READ),U.readPixels(D,G,B,k,rt.convert(Bt),rt.convert(qt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let ye=it!==null?Ct.get(it).__webglFramebuffer:null;ft.bindFramebuffer(U.FRAMEBUFFER,ye);let ae=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Lh(U,ae,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Yt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,dt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Yt),U.deleteSync(ae),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,D=null,G=0){let B=Math.pow(2,-G),k=Math.floor(S.image.width*B),dt=Math.floor(S.image.height*B),vt=D!==null?D.x:0,ht=D!==null?D.y:0;Ft.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,G,0,0,vt,ht,k,dt),ft.unbindTexture()},this.copyTextureToTexture=function(S,D,G=null,B=null,k=0,dt=0){let vt,ht,xt,wt,Bt,qt,Mt,Yt,ye,ae=S.isCompressedTexture?S.mipmaps[dt]:S.image;if(G!==null)vt=G.max.x-G.min.x,ht=G.max.y-G.min.y,xt=G.isBox3?G.max.z-G.min.z:1,wt=G.min.x,Bt=G.min.y,qt=G.isBox3?G.min.z:0;else{let $t=Math.pow(2,-k);vt=Math.floor(ae.width*$t),ht=Math.floor(ae.height*$t),S.isDataArrayTexture?xt=ae.depth:S.isData3DTexture?xt=Math.floor(ae.depth*$t):xt=1,wt=0,Bt=0,qt=0}B!==null?(Mt=B.x,Yt=B.y,ye=B.z):(Mt=0,Yt=0,ye=0);let re=rt.convert(D.format),Fe=rt.convert(D.type),St;D.isData3DTexture?(Ft.setTexture3D(D,0),St=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Ft.setTexture2DArray(D,0),St=U.TEXTURE_2D_ARRAY):(Ft.setTexture2D(D,0),St=U.TEXTURE_2D),ft.activeTexture(U.TEXTURE0),ft.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),ft.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),ft.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);let He=ft.getParameter(U.UNPACK_ROW_LENGTH),Kt=ft.getParameter(U.UNPACK_IMAGE_HEIGHT),mi=ft.getParameter(U.UNPACK_SKIP_PIXELS),Oe=ft.getParameter(U.UNPACK_SKIP_ROWS),br=ft.getParameter(U.UNPACK_SKIP_IMAGES);ft.pixelStorei(U.UNPACK_ROW_LENGTH,ae.width),ft.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ae.height),ft.pixelStorei(U.UNPACK_SKIP_PIXELS,wt),ft.pixelStorei(U.UNPACK_SKIP_ROWS,Bt),ft.pixelStorei(U.UNPACK_SKIP_IMAGES,qt);let jn=S.isDataArrayTexture||S.isData3DTexture,gi=D.isDataArrayTexture||D.isData3DTexture;if(S.isDepthTexture){let $t=Ct.get(S),Ne=Ct.get(D),fn=Ct.get($t.__renderTarget),ge=Ct.get(Ne.__renderTarget);ft.bindFramebuffer(U.READ_FRAMEBUFFER,fn.__webglFramebuffer),ft.bindFramebuffer(U.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Ie=0;Ie<xt;Ie++)jn&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ct.get(S).__webglTexture,k,qt+Ie),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ct.get(D).__webglTexture,dt,ye+Ie)),U.blitFramebuffer(wt,Bt,wt+vt,Bt+ht,Mt,Yt,Mt+vt,Yt+ht,U.DEPTH_BUFFER_BIT,U.NEAREST);ft.bindFramebuffer(U.READ_FRAMEBUFFER,null),ft.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(k!==0||S.isRenderTargetTexture||Ct.has(S)){let $t=Ct.get(S),Ne=Ct.get(D);ft.bindFramebuffer(U.READ_FRAMEBUFFER,P),ft.bindFramebuffer(U.DRAW_FRAMEBUFFER,W);for(let fn=0;fn<xt;fn++)jn?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,$t.__webglTexture,k,qt+fn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,$t.__webglTexture,k),gi?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ne.__webglTexture,dt,ye+fn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ne.__webglTexture,dt),k!==0?U.blitFramebuffer(wt,Bt,wt+vt,Bt+ht,Mt,Yt,Mt+vt,Yt+ht,U.COLOR_BUFFER_BIT,U.NEAREST):gi?U.copyTexSubImage3D(St,dt,Mt,Yt,ye+fn,wt,Bt,vt,ht):U.copyTexSubImage2D(St,dt,Mt,Yt,wt,Bt,vt,ht);ft.bindFramebuffer(U.READ_FRAMEBUFFER,null),ft.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else gi?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(St,dt,Mt,Yt,ye,vt,ht,xt,re,Fe,ae.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(St,dt,Mt,Yt,ye,vt,ht,xt,re,ae.data):U.texSubImage3D(St,dt,Mt,Yt,ye,vt,ht,xt,re,Fe,ae):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,dt,Mt,Yt,vt,ht,re,Fe,ae.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,dt,Mt,Yt,ae.width,ae.height,re,ae.data):U.texSubImage2D(U.TEXTURE_2D,dt,Mt,Yt,vt,ht,re,Fe,ae);ft.pixelStorei(U.UNPACK_ROW_LENGTH,He),ft.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Kt),ft.pixelStorei(U.UNPACK_SKIP_PIXELS,mi),ft.pixelStorei(U.UNPACK_SKIP_ROWS,Oe),ft.pixelStorei(U.UNPACK_SKIP_IMAGES,br),dt===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&U.generateMipmap(St),ft.unbindTexture()},this.initRenderTarget=function(S){Ct.get(S).__webglFramebuffer===void 0&&Ft.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Ft.setTextureCube(S,0):S.isData3DTexture?Ft.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ft.setTexture2DArray(S,0):Ft.setTexture2D(S,0),ft.unbindTexture()},this.resetState=function(){Z=0,H=0,it=null,ft.reset(),ot.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}};var Ci=()=>window.NP3,Mn=(i,t,e)=>Math.max(t,Math.min(e,i)),v=null,$n=i=>-5.2+(i-1)*2.3,og=-.8,ec=-2.4,vr={x:7,z:1.5},jl=[6,1.5],_s=8.4,rc=i=>-5.25+i*1.75,Eu=[.19,.74,1.29,1.84],lg=[-.57,-.19,.19,.57],Au=i=>[-6.25,-.1+i*.5],Ru=i=>[-4.6+i*.75,4.15],xs=-4.6,gr=-11.2,Ii=6.2,nn=-7.9,dn=[5.6,-6.3],di=[5.6,-9.5],tc=9.25,vs=19,wo=[-4.6,-7.6],To=[-2,-9],nc=(i,t)=>i<-3.85&&t<-7.6,yu=(i,t)=>i>-3.8&&i<-1.4&&t<-9,ic=new Map,fi=(i,t)=>{let e=ic.get(i);return e||(e=t(),ic.set(i,e)),e},xe=(i,t,e)=>fi(`b${i},${t},${e}`,()=>new Cn(i,t,e)),Dt=(i,t)=>fi(`m${i}${t?JSON.stringify(t):""}`,()=>new be({color:i,...t||{}}));function Tt(i,t,e=0,n=0,s=0,r){let a=new te(i,t);return a.position.set(e,n,s),(r||v.scene).add(a),a}function q(i,t,e,n,s,r,a,o,l){return Tt(xe(i,t,e),Dt(n,l),s,r+t/2,a,o)}function Li(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t;let s=n.getContext("2d");e(s,i,t);let r=new ls(n);return r.colorSpace=ke,r.anisotropy=4,r}var cg='"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji","Twemoji Mozilla",sans-serif';function Cu(i){return fi("e"+i,()=>Li(128,128,t=>{t.font=`96px ${cg}`,t.textAlign="center",t.textBaseline="middle",t.fillText(i,64,70)}))}function Pi(i,t){let e=new Gs(new ss({map:Cu(i),transparent:!0,alphaTest:.1}));return e.scale.set(t,t,t),e}function yr(i,t){i._e!==t&&(i._e=t,i.material.map=Cu(t),i.material.needsUpdate=!0)}function Eo(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function fe(i,{w:t=512,h:e=128,bg:n="#d7262b",fg:s="#fff",font:r="bold 60px system-ui,sans-serif",r:a=18,border:o}={}){return fi(`t${i}${t}${n}${s}${r}`,()=>Li(t,e,l=>{l.fillStyle=n,Eo(l,2,2,t-4,e-4,a),l.fill(),o&&(l.lineWidth=6,l.strokeStyle=o,l.stroke()),l.fillStyle=s,l.font=r,l.textAlign="center",l.textBaseline="middle";let c=String(i).split(`
`),p=e/(c.length+.6);c.forEach((_,h)=>l.fillText(_,t/2,e/2+(h-(c.length-1)/2)*p))}))}function pe(i,t,e,n,s,r,a=0,o){let l=new te(new _e(i,t),new be({map:e,transparent:!0}));return l.position.set(n,s,r),l.rotation.y=a,(o||v.scene).add(l),l}function Kn(i){let t=i>>>0||1;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function hg(i){let t=2166136261;for(let e of String(i))t=Math.imul(t^e.codePointAt(0),16777619);return t>>>0}function ug(){let i=v.scene;q(22.4,.5,17.6,4864814,3.3,-.53,-3.4);let t=Li(128,128,g=>{g.fillStyle="#e9e1d3",g.fillRect(0,0,128,128),g.fillStyle="#ddd3c2",g.fillRect(0,0,64,64),g.fillRect(64,64,64,64),g.strokeStyle="#c9bea9",g.lineWidth=2,g.strokeRect(0,0,64,64),g.strokeRect(64,64,64,64),g.strokeRect(64,0,64,64),g.strokeRect(0,64,64,64)});t.wrapS=t.wrapT=Mi,t.repeat.set(14,9);let e=new te(new _e(14,9),new be({map:t}));e.rotation.x=-Math.PI/2,i.add(e);let n=new te(new _e(14,2.9),Dt(13157048));n.rotation.x=-Math.PI/2,n.position.set(0,.004,-3.05),i.add(n),v.street=new te(new _e(2.6,10.4),new be({color:10132118})),v.street.rotation.x=-Math.PI/2,v.street.position.set(8.5,.002,0),i.add(v.street);for(let g=-4.6;g<5;g+=1.3)q(.12,.02,.6,15263968,9.55,0,g);q(.25,.14,10.4,8224120,9.75,0,0),v.wallMat=new be({color:15855337});let s=v.wallMat,r=3.1,a=Dt(3878694),o=(g,d,f,y,A,T)=>{Tt(xe(g,d,f),s,y,A+d/2,T),Tt(xe(g+.01,.04,f+.01),a,y,A+d+.02,T)};v.sep=new Ht,i.add(v.sep);let l=(g,d,f,y,A,T)=>{Tt(xe(g,d,f),s,y,A+d/2,T,v.sep),Tt(xe(g+.01,.04,f+.01),a,y,A+d+.02,T,v.sep)};l(12.8,r,.2,-.8,0,-4.6),l(.5,r,.2,6.95,0,-4.6),Tt(xe(1,r-2.3,.2),s,Ii,2.3+(r-2.3)/2,-4.6,v.sep),q(1.04,.08,.26,9411235,Ii,2.22,-4.6,v.sep),pe(.9,.2,fe("\u0421\u041A\u041B\u0410\u0414",{w:256,h:56,bg:"#1f3a5f",font:"bold 38px system-ui,sans-serif",r:8}),Ii,2.48,-4.48,0,v.sep),o(.2,r,9.2,-7.1,0,0),o(.2,r,5.4,7.1,0,-1.9),o(.2,r,2.3,7.1,0,3.35),Tt(xe(.2,r-2.35,1.4),s,7.1,2.35+(r-2.35)/2,1.5);let c=Dt(14100011),p=Dt(7033924);for(let[g,d,f,y]of[[12.7,.04,-.85,-4.48],[.04,9,-6.98,0],[.04,5.4,6.98,-1.9],[.04,2.3,6.98,3.35]])Tt(xe(g,.14,d),c,f,1,y,y===-4.48?v.sep:null),Tt(xe(g,.12,d),p,f,.06,y,y===-4.48?v.sep:null);let _=Li(1024,200,g=>{g.fillStyle="#fff",Eo(g,4,4,1016,192,30),g.fill(),g.fillStyle="#d7262b",Eo(g,24,24,152,152,22),g.fill(),g.fillStyle="#fff",g.font="bold 84px system-ui,sans-serif",g.textAlign="center",g.textBaseline="middle",g.fillText("\u041D\u041F",100,104),g.fillStyle="#d7262b",g.font="bold 104px system-ui,sans-serif",g.textAlign="left",g.fillText("\u041D\u0410\u0428\u0410 \u041F\u041E\u0428\u0422\u0410",210,106)});v.signMesh=pe(4.2,.82,_,-.4,2.62,-4.48,0,v.sep),v.tierText=pe(2.4,.3,fe("",{w:512,h:64}),-.4,2.05,-4.48,0,v.sep),v.tierText.visible=!1;let h=new be({color:12575730,transparent:!0,opacity:.38}),u=Dt(9411235);q(.24,.1,1.5,9411235,7.1,2.3,1.5),v.doorL=Tt(xe(.06,2.25,.7),h,7.06,1.15,1.15),v.doorR=Tt(xe(.06,2.25,.7),h,7.14,1.15,1.85);for(let g of[v.doorL,v.doorR])Tt(xe(.08,2.25,.05),u,0,0,.33,g);let m=new te(new _e(1,1.5),Dt(5917244));m.rotation.x=-Math.PI/2,m.position.set(6.45,.006,1.5),i.add(m),pe(.9,.22,fe("\u0412\u0425\u0406\u0414",{w:256,h:64,bg:"#2e7d32",font:"bold 40px system-ui,sans-serif",r:10}),7.22,2.6,1.5,Math.PI/2)}function dg(){let i=v.scene;q(9.4,1,.62,16184560,-1.75,0,-1.6),q(9.4,.12,.62,14100011,-1.75,.55,-1.285+0),q(9.6,.06,.8,10254933,-1.75,1,-1.6),v.wins=[],v.ext5=new Ht,i.add(v.ext5),q(2.1,1,.62,16184560,4,0,-1.6,v.ext5),q(2.1,.12,.62,14100011,4,.55,-1.285,v.ext5),q(2.2,.06,.8,10254933,4,1,-1.6,v.ext5);for(let n=1;n<=5;n++){let s=$n(n),r=new Ht;r.position.set(s,0,0),i.add(r);let a={g:r,x:s,i:n};a.plate=new te(new _e(.55,.55),new be({transparent:!0})),a.plate.position.set(0,2.25,-1.6),r.add(a.plate),Tt(new le(.01,.01,.6),Dt(5592405),0,2.82,-1.6,r),a.mon=new Ht,a.mon.position.set(.32,1.03,-1.78),r.add(a.mon),q(.06,.18,.06,3355443,0,0,0,a.mon),q(.52,.34,.04,2236962,0,.18,0,a.mon),a.screen=new te(new _e(.46,.28),new Je({color:7321576})),a.screen.position.set(0,.35,-.025),a.screen.rotation.y=Math.PI,a.mon.add(a.screen),q(.12,.05,.18,2829099,-.35,1.03,-1.33,r),q(.1,.01,.06,5822093,-.35,1.08,-1.37,r);let o=new be({color:13626101,transparent:!0,opacity:.25});Tt(xe(.03,.85,.5),o,1.15,1.48,-1.55,r),a.chair=new Ht,a.chair.position.set(0,0,ec),r.add(a.chair),q(.46,.08,.46,2899536,0,.56,0,a.chair),q(.46,.55,.07,2899536,0,.6,-.23,a.chair),Tt(new le(.04,.04,.56),Dt(5592405),0,.28,0,a.chair),a.closed=q(2,.9,.03,11580857,0,1.06,-1.4,r),v.wins.push(a)}q(.03,.85,.5,13626101,$n(1)-1.15,1.03,-1.55,null,{transparent:!0,opacity:.25});let t=$n(1);q(.4,.05,.4,10134957,t-.75,1.03,-1.55),q(.16,.12,.05,3355443,t-.75,1.03,-1.78),v.scanner=new Ht,v.scanner.position.set(t+.7,1.03,-1.65),i.add(v.scanner),q(.08,.16,.08,3355443,0,0,0,v.scanner),q(.08,.08,.2,15844367,0,.14,.05,v.scanner),q(.3,.16,.26,15658734,t+.75,1.03,-1.85),q(.2,.01,.1,16777215,t+.75,1.19,-1.75);let e=fe("\u0422\u0456\u043B\u044C\u043A\u0438 \u0434\u043B\u044F \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0443",{w:512,h:88,bg:"#ffffff",fg:"#c0392b",font:"bold 40px system-ui,sans-serif",border:"#c0392b",r:10});v.barFull=new Ht,i.add(v.barFull),q(4.1,.95,.08,9411235,4.95,0,-1.6,v.barFull),q(4.1,.06,.14,10254933,4.95,.95,-1.6,v.barFull),pe(1.5,.26,e,4.95,.6,-1.55,0,v.barFull),v.barShort=new Ht,i.add(v.barShort),v.barShort.visible=!1,q(1.95,.95,.08,9411235,6.03,0,-1.6,v.barShort),q(1.95,.06,.14,10254933,6.03,.95,-1.6,v.barShort),pe(1.5,.26,e,6.03,.6,-1.55,0,v.barShort)}var ce=new Se;function fg(){let i=v.scene,t=Dt(6122878),e=Dt(12034431);v.racks=[];for(let p=0;p<5;p++){let _=new Ht;_.position.set(rc(p),0,-4.05),i.add(_);for(let h of[-.78,.78])for(let u of[-.27,.27])q(.05,2.2,.05,6122878,h,0,u,_);Eu.forEach(h=>Tt(xe(1.62,.04,.58),e,0,h-.02,0,_)),pe(.5,.18,fe(`${p+1}-\u2026`,{w:160,h:56,bg:"#1f3a5f",font:"bold 34px system-ui,sans-serif",r:8}),0,2.08,.3,0,_),v.racks.push(_)}let n=new Ht;n.position.set(3.6,0,-4),i.add(n);for(let p of[-.62,.62])for(let _ of[-.32,.32])q(.07,1.7,.07,3426654,p,0,_,n);for(let p of[.1,.9])q(1.3,.05,.7,9337695,0,p,0,n);pe(.5,.2,fe("\u0413-\u2026",{w:160,h:64,bg:"#7d3c98",font:"bold 38px system-ui,sans-serif",r:8}),0,1.6,.36,0,n),q(1.3,.13,1,11108951,dn[0],0,dn[1]);{let p=pe(1,.22,fe("\u0417 \u043C\u0430\u0448\u0438\u043D\u0438",{w:320,h:70,bg:"#f39c12",font:"bold 40px system-ui,sans-serif",r:10}),dn[0],1.6,dn[1]+.55);Tt(new le(.012,.012,1.5),Dt(5592405),dn[0]-.45,.75,dn[1]+.52)}let s=new Ht;s.position.set(di[0],0,di[1]),i.add(s),q(.9,.05,.7,8359053,0,.12,0,s);for(let p of[-.4,.4])for(let _ of[-.3,.3])Tt(new le(.05,.05,.04,8),Dt(2236962),p,.05,_,s).rotation.z=Math.PI/2;q(.04,1,.7,8359053,.43,.15,0,s),v.cartTag=pe(.7,.18,fe("\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u043A\u0430",{w:256,h:64,bg:"#2980b9",font:"bold 36px system-ui,sans-serif",r:8}),0,1.3,0,Math.PI/2,s),v.cartTag.position.x=.46;let r=(p,_,h,u)=>{let m=new as(new Cn(_,h,u),new be({color:16777215}),p);return m.count=0,i.add(m),m};v.boxSmall=r(80,.32,.28,.38),v.boxBig=r(10,.55,.5,.55),v.boxPile=r(36,.36,.3,.36),v.boxOut=r(24,.32,.26,.3);let a=[13214315,12160342,13939843,11041611,15262422,12884588],o=Kn(7),l=new kt;for(let p of[v.boxSmall,v.boxBig,v.boxPile,v.boxOut])for(let _=0;_<p.instanceMatrix.count;_++)l.set(a[Math.floor(o()*a.length)]),p.setColorAt(_,l);v.slotOrder=[...Array(80).keys()];let c=Kn(11);for(let p=79;p>0;p--){let _=Math.floor(c()*(p+1));[v.slotOrder[p],v.slotOrder[_]]=[v.slotOrder[_],v.slotOrder[p]]}}function pg(i){let t=0,e=0,n=0,s=0;for(let m of i.parcels||[])m.state==="cell"?String(m.cell||"").startsWith("\u0413")?e++:t++:m.state==="pile"?n++:m.state==="outgoing"&&s++;let r=Mn(i.up.shelves||1,1,5);v.racks.forEach((m,g)=>{m.visible=g<r});let a=`${t},${e},${n},${s},${r}`;if(v.boxKey===a)return;v.boxKey=a;let o=Kn(3),l=v.slotOrder.filter(m=>Math.floor(m/16)<r),c=Math.min(t,l.length);for(let m=0;m<c;m++){let g=l[m],d=Math.floor(g/16),f=Math.floor(g%16/4),y=g%4;ce.position.set(rc(d)+lg[y]+(o()-.5)*.05,Eu[f]+.14,-4.05+(o()-.5)*.08),ce.rotation.set(0,(o()-.5)*.25,0),ce.scale.set(.8+o()*.3,.75+o()*.45,1),ce.updateMatrix(),v.boxSmall.setMatrixAt(m,ce.matrix)}v.boxSmall.count=c,v.boxSmall.instanceMatrix.needsUpdate=!0;let p=[[-.3,.13],[.3,.13],[-.3,.93],[.3,.93],[0,1.43],[-.3,1.43]],_=Math.min(e,p.length);for(let m=0;m<_;m++)ce.position.set(3.6+p[m][0],p[m][1]+.25,-4),ce.rotation.set(0,(o()-.5)*.3,0),ce.scale.set(1,.8+o()*.4,1),ce.updateMatrix(),v.boxBig.setMatrixAt(m,ce.matrix);v.boxBig.count=_,v.boxBig.instanceMatrix.needsUpdate=!0;let h=Math.min(n,36);for(let m=0;m<h;m++){let g=Math.floor(m/9),d=m%9;ce.position.set(dn[0]+(d%3-1)*.39+(o()-.5)*.06,.13+.15+g*.3,dn[1]+(Math.floor(d/3)-1)*.3),ce.rotation.set(0,(o()-.5)*.5,0),ce.scale.set(1,1,1),ce.updateMatrix(),v.boxPile.setMatrixAt(m,ce.matrix)}v.boxPile.count=h,v.boxPile.instanceMatrix.needsUpdate=!0;let u=Math.min(s,24);for(let m=0;m<u;m++){let g=Math.floor(m/6),d=m%6;ce.position.set(di[0]+(d%2-.5)*.36,.17+.13+g*.27,di[1]+(Math.floor(d/2)-1)*.22),ce.rotation.set(0,(o()-.5)*.4,0),ce.scale.set(1,1,1),ce.updateMatrix(),v.boxOut.setMatrixAt(m,ce.matrix)}v.boxOut.count=u,v.boxOut.instanceMatrix.needsUpdate=!0}function mg(){let i=v.scene,t=3.1,e=v.wallMat,n=Dt(3878694),s=(b,x,w,L,C,N,O)=>{Tt(xe(b,x,w),O||e,L,C+x/2,N),Tt(xe(b+.01,.04,w+.01),n,L,C+x+.02,N)},r=(xs+gr)/2,a=xs-gr,o=Li(128,128,b=>{b.fillStyle="#b9b6b0",b.fillRect(0,0,128,128),b.strokeStyle="#a7a39c",b.lineWidth=2,b.strokeRect(0,0,128,128);for(let x=0;x<60;x++)b.fillStyle=`rgba(80,70,60,${Math.random()*.08})`,b.fillRect(Math.random()*128,Math.random()*128,3,3)});o.wrapS=o.wrapT=Mi,o.repeat.set(7,3.3);let l=new te(new _e(14.2,a),new be({map:o}));l.rotation.x=-Math.PI/2,l.position.set(0,.001,r),i.add(l);for(let[b,x,w,L]of[[8.4,.08,2.8,-5.15],[.08,4.2,4.6,-7.9],[2.4,.08,5.8,-5.7],[2.4,.08,5.8,-10.1]])q(b,.004,x,15844367,w,.002,L);s(.2,t,a,-7.1,0,r),s(14.4,t,.2,0,0,gr);let c=nn-1.05,p=nn+1.05;s(.2,t,c-gr,7.1,0,(c+gr)/2),s(.2,t,xs-p,7.1,0,(p+xs)/2),Tt(xe(.2,.55,2.1),e,7.1,t-.275,nn),v.gate=Tt(xe(.08,2.5,2.08),Dt(9807270),7.15,1.27,nn),v.gateLines=[];for(let b=.2;b<2.5;b+=.22)v.gateLines.push(q(.09,.02,2.08,8359053,0,b-1.27,0,v.gate));v.gateOpen=0,pe(1.2,.24,fe("\u0420\u0410\u041C\u041F\u0410",{w:320,h:64,bg:"#f39c12",font:"bold 40px system-ui,sans-serif",r:8}),6.98,2.75,nn,-Math.PI/2),v.dockLight=Tt(new $e(.07,8,6),new Je({color:15158332}),6.97,2.25,nn-1.3);let _=[13214315,12160342,13939843,11041611,15262422,12884588],h=Kn(21);for(let b=0;b<3;b++){let x=new Ht;x.position.set(-.2+b*2.2,0,-10.55),i.add(x);for(let w of[-.95,.95])for(let L of[-.33,.33])q(.08,2.6,.08,2388387,w,0,L,x);for(let w of[.15,.95,1.75]){q(1.98,.06,.7,15105570,0,w,0,x);let L=-.75;for(;L<.8;){let C=.28+h()*.25,N=.25+h()*.4;h()<.85&&Tt(xe(C,N,.5),Dt(_[Math.floor(h()*_.length)]),L+C/2,w+.06+N/2,(h()-.5)*.1,x),L+=C+.05}}pe(.7,.18,fe(`\u0420\u0435\u0437\u0435\u0440\u0432 ${String.fromCharCode(65+b)}`,{w:256,h:64,bg:"#2471a3",font:"bold 34px system-ui,sans-serif",r:8}),0,2.45,.36,0,x)}let u=new Ht;u.position.set(2.2,0,-7.3),i.add(u),q(2.4,.06,.85,8359053,0,.82,0,u);for(let b of[-1.1,1.1])for(let x of[-.36,.36])q(.06,.82,.06,5592405,b,0,x,u);for(let b=-1.1;b<=1.1;b+=.16)Tt(new le(.035,.035,.8,8),Dt(12436423),b,.91,0,u).rotation.x=Math.PI/2;v.sortBoxes=[0,1,2].map(b=>{let x=q(.34,.26,.32,_[b+1],-.8+b*.7,.94,0,u);return x._x=-.8+b*.7,x}),pe(1.1,.22,fe("\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F",{w:320,h:64,bg:"#16a085",font:"bold 38px system-ui,sans-serif",r:8}),0,1.75,-.4,0,u);let m=new Ht;m.position.set(4.4,0,-9),m.rotation.y=.4,i.add(m),q(.55,.08,1.1,15158332,0,.06,0,m),Tt(new le(.02,.02,1),Dt(3355443),0,.6,-.6,m).rotation.x=.25;let g=new te(new _e(5.6,2.8),Dt(14208960));g.rotation.x=-Math.PI/2,g.position.set(-4.3,.003,-6.05),i.add(g),pe(1.4,.26,fe("\u041F\u0430\u043A\u0443\u0432\u0430\u043D\u043D\u044F",{w:384,h:72,bg:"#8e44ad",font:"bold 42px system-ui,sans-serif",r:10}),-6.98,2.4,-5.6,Math.PI/2);for(let b of[-5.6,-3.2]){let x=new Ht;x.position.set(b,0,-5.5),i.add(x),q(1.6,.06,.8,14006666,0,.86,0,x);for(let w of[-.75,.75])for(let L of[-.35,.35])q(.05,.86,.05,7033924,w,0,L,x);q(.18,.12,.08,12597547,-.55,.92,.2,x),Tt(new le(.16,.16,.5,14),new be({color:14084856,transparent:!0,opacity:.8}),.5,1.08,.15,x).rotation.z=Math.PI/2,q(.5,.3,.4,13214315,-.05,.92,-.05,x),q(.4,.04,.36,10134957,.55,.92,-.2,x)}let d=new Ht;d.position.set(-6.65,0,-6.6),i.add(d);for(let b of[.05,.75,1.45]){q(.6,.04,1.4,9337695,0,b,0,d);for(let x=0;x<3;x++)q(.5,.06+x*.02,.4,13214315,0,b+.04+x*.08,-.4+x*.4,d)}for(let b of[-.68,.68])q(.05,1.7,.05,6122878,.28,0,b,d);let f=(b,x,w,L)=>s(b,2.3,x,w,0,L);f(2.1,.12,-6.05,-7.6),f(.4,.12,-4.05,-7.6),f(.12,3.6,-3.85,-9.4);let y=new te(new _e(3.2,3.6),Dt(15259843));y.rotation.x=-Math.PI/2,y.position.set(-5.5,.004,-9.4),i.add(y),pe(1,.24,fe("\u2615 \u041A\u0443\u0445\u043D\u044F",{w:320,h:72,bg:"#d35400",font:"bold 40px system-ui,sans-serif",r:10}),-5.5,2.15,-7.53),q(.75,.06,.75,10506797,-5.6,.74,-9.5),Tt(new le(.05,.05,.74,8),Dt(7033924),-5.6,.37,-9.5),v.kChairs=[[-6.15,-9.5,Math.PI/2],[-5.05,-9.5,-Math.PI/2]].map(([b,x,w])=>{let L=new Ht;L.position.set(b,0,x),L.rotation.y=w,i.add(L),q(.38,.05,.38,3049153,0,.45,0,L),q(.38,.4,.05,3049153,0,.48,-.17,L);for(let C of[-.15,.15])for(let N of[-.15,.15])q(.035,.45,.035,5592405,C,0,N,L);return[b,x,w]});{let b=Tt(new le(.05,.04,.09,10),Dt(16777215),-5.5,.82,-9.4)}q(.6,1.8,.6,15922164,-6.7,0,-10.75),q(.02,.5,.04,9807270,-6.42,1.1,-10.44),q(2,.9,.6,16184560,-5,0,-10.8),q(2.05,.05,.64,6122878,-5,.9,-10.8),q(.45,.28,.32,2899536,-5.45,.95,-10.85),v.kettle=Tt(new le(.1,.12,.22,12),Dt(15528177),-4.6,1.06,-10.8),v.steam=Pi("\u{1F4A8}",.3),v.steam.position.set(-4.6,1.45,-10.8),v.steam.visible=!1,i.add(v.steam),q(.4,.04,.3,12436423,-4.25,.94,-10.8),f(1.55,.12,-3.05,-9),f(.25,.12,-1.5,-9),f(.12,2.2,-1.4,-10.1);let A=new te(new _e(2.4,2.2),Dt(15922420));A.rotation.x=-Math.PI/2,A.position.set(-2.6,.005,-10.1),i.add(A),v.wcDoor=new Ht,v.wcDoor.position.set(-2.22,0,-9),i.add(v.wcDoor),q(.5,2,.05,9268835,.25,0,0,v.wcDoor),v.wcSign=pe(.5,.22,fe("\u{1F6BB} \u0432\u0456\u043B\u044C\u043D\u043E",{w:220,h:96,bg:"#2e7d32",font:"bold 40px system-ui,sans-serif",r:10}),-2.6,2.05,-8.93);let T=new Ht;T.position.set(-2.9,0,-10.75),i.add(T),Tt(new le(.2,.16,.4,12),Dt(16777215),0,.2,.05,T),q(.42,.45,.18,16777215,0,.3,-.18,T),q(.45,.06,.35,16777215,-1.05+1.95,.8,.1,T),q(.4,.5,.02,14084856,.9,1.25,-.08,T);let R=new te(new _e(7,7.6),Dt(9211016));R.rotation.x=-Math.PI/2,R.position.set(10.7,.001,-8.4),i.add(R);for(let b=8;b<14;b+=1.4)q(.6,.006,.1,16119285,b,0,-6.7);q(.9,.5,2.4,6122878,7.6,0,nn);for(let b of[nn-1.15,nn+1.15])q(.22,.32,.3,1776411,8.05,.12,b)}function gg(){let i=v.truck=new Ht;v.scene.add(i);let t=new Ht;i.add(t),q(3.5,2.05,2,16185078,0,.62,0,t),q(3.52,.22,2.02,14100011,0,.62,0,t);for(let a of[-1.015,1.015])pe(2.4,.55,fe("\u041D\u0410\u0428\u0410 \u041F\u041E\u0428\u0422\u0410",{w:640,h:140,bg:"#ffffff",fg:"#d7262b",font:"bold 96px system-ui,sans-serif",r:6}),.2,1.9,a,a>0?0:Math.PI,t);q(3.6,.18,1.6,2894892,.6,.38,0,i);let e=new Ht;e.position.set(2.3,0,0),i.add(e),q(1.15,1.55,1.95,14100011,0,.55,0,e),q(.04,.6,1.7,10474474,.58,1.35,0,e);for(let a of[-.98,.98])q(.6,.45,.02,10474474,.05,1.4,a,e);q(.1,.18,1.6,3355443,.6,.6,0,e),v.wheels=[];for(let[a,o]of[[-1,-.95],[-1,.95],[.2,-.95],[.2,.95],[2.4,-.95],[2.4,.95]]){let l=Tt(new le(.34,.34,.24,14),Dt(1776411),a,.34,o,i);l.rotation.x=Math.PI/2,v.wheels.push(l)}v.tDoors=[-1,1].map(a=>{let o=new Ht;return o.position.set(-1.77,.62,a),o._h=a,i.add(o),q(.04,2,.99,15066597,0,0,-a*.495,o),o}),v.truckBoxes=new as(new Cn(.36,.3,.36),new be({color:16777215}),40),v.truckBoxes.count=0,i.add(v.truckBoxes);let n=[13214315,12160342,13939843,11041611,15262422],s=Kn(31),r=new kt;for(let a=0;a<40;a++)r.set(n[Math.floor(s()*n.length)]),v.truckBoxes.setColorAt(a,r);v.driver=_r("driver","\u{1F9D4}",{seed:42}),v.driver.cap=q(.3,.06,.3,14100011,0,1.92,0,v.driver.g),v.driver.g.visible=!1,i.position.set(vs,0,nn),i.visible=!1,v.tx=vs,v.tState="away",v.tDoor=0}function _g(i){if(v._tbn===i)return;v._tbn=i;let t=Kn(13),e=Math.min(i,40);for(let n=0;n<e;n++){let s=Math.floor(n/15),r=n%15;ce.position.set(-1.45+Math.floor(r/5)*.42+(t()-.5)*.04,.8+s*.32,-.75+r%5*.38),ce.rotation.set(0,(t()-.5)*.3,0),ce.scale.set(1,1,1),ce.updateMatrix(),v.truckBoxes.setMatrixAt(n,ce.matrix)}v.truckBoxes.count=e,v.truckBoxes.instanceMatrix.needsUpdate=!0}function xg(){let i=v.scene,t=v.extras={},e=(g,d,f)=>{let y=new Ht;return y.position.set(g,d,f),i.add(y),y.visible=!1,y};t.chairs=[];for(let g=0;g<9;g++){let[d,f]=Au(g),y=e(d,0,f);q(.44,.06,.44,3049153,0,.42,0,y),q(.06,.45,.44,3049153,-.2,.45,0,y);for(let A of[-.17,.17])for(let T of[-.17,.17])q(.04,.42,.04,5592405,A,0,T,y);t.chairs.push(y)}t.chairs2=[];for(let g=0;g<6;g++){let[d,f]=Ru(g),y=e(d,0,f);q(.44,.06,.44,1482885,0,.42,0,y),q(.44,.45,.06,1482885,0,.45,.2,y);for(let A of[-.17,.17])for(let T of[-.17,.17])q(.04,.42,.04,5592405,A,0,T,y);t.chairs2.push(y)}t.coffee=e(3.55,0,-1.2),q(.7,.75,.45,9268835,0,0,0,t.coffee),q(.32,.45,.3,2894892,0,.75,0,t.coffee),q(.1,.08,.1,16777215,.22,.75,.05,t.coffee);{let g=Pi("\u2615",.28);g.position.set(0,1.45,0),t.coffee.add(g)}t.ac=e(-3.6,2.55,-4.42),q(1,.32,.22,16448250,0,0,0,t.ac),q(.9,.03,.02,10134957,0,.06,.11,t.ac),t.locker=e(6.68,0,3.2),t.lockerBody=q(.55,2,1,14100011,0,0,0,t.locker),t.lockerGrid=new te(new _e(1,1.5),new be({transparent:!0,map:Li(128,192,g=>{g.strokeStyle="#ffffffaa",g.lineWidth=3;for(let d=0;d<=128;d+=32)for(let f=0;f<=192;f+=32)g.strokeRect(d+2,f+2,28,28)})})),t.lockerGrid.position.set(-.28,1.15,0),t.lockerGrid.rotation.y=-Math.PI/2,t.locker.add(t.lockerGrid),t.lockerLbl=pe(.8,.16,fe("\u041F\u041E\u0428\u0422\u041E\u041C\u0410\u0422",{w:320,h:64,bg:"#ffffff",fg:"#d7262b",font:"bold 40px system-ui,sans-serif",r:8}),-.285,1.85,0,-Math.PI/2,t.locker),q(.05,.3,.25,2236962,-.28,.85,.3,t.locker),t.ads=e(8.9,0,-.6),q(.06,1.2,.06,5592405,0,0,0,t.ads),pe(.9,.6,fe(`\u041D\u041F
\u0432\u0456\u0434\u043A\u0440\u0438\u0442\u043E`,{w:256,h:170,bg:"#d7262b",font:"bold 56px system-ui,sans-serif",r:14}),0,1.5,0,-Math.PI/2,t.ads),t.gen=e(8.6,0,-3.6),q(.8,.55,.5,15965202,0,0,0,t.gen),q(.6,.05,.3,3355443,0,.55,0,t.gen);let n=(g,d,f,y,A,T)=>{let R=Pi(g,d);return R.position.set(f,y,A),T.add(R),R};t.equeue=e(5.7,0,.35),q(.4,1.15,.34,2046559,0,0,0,t.equeue),q(.3,.06,.2,16777215,0,1.15,0,t.equeue),n("\u{1F3AB}",.32,0,1.55,0,t.equeue),v.qCv=document.createElement("canvas"),v.qCv.width=512,v.qCv.height=128,v.qTex=new ls(v.qCv),v.qTex.colorSpace=ke,t.qBoard=new te(new _e(1.7,.42),new Je({map:v.qTex})),t.qBoard.position.set(-1,2.5,-.55),i.add(t.qBoard),t.qBoard.visible=!1,v.qFrame=q(1.76,.48,.06,2236962,-1,2.26,-.6),v.qFrame.visible=!1,t.kiosk=e(4.75,0,3.95),q(.55,1.25,.4,15528177,0,0,0,t.kiosk),q(.45,.34,.04,2899536,0,.85,-.21,t.kiosk),q(.57,.12,.42,14100011,0,1.25,0,t.kiosk),n("\u{1F5A5}\uFE0F",.34,0,1.7,0,t.kiosk),t.wifi=e(-6.9,2.15,-3.4),q(.1,.1,.32,16777215,0,0,0,t.wifi),n("\u{1F4F6}",.26,.1,.35,0,t.wifi),t.access=e(7.75,0,1.5);{let g=q(.95,.07,1.3,15844367,0,0,0,t.access);g.rotation.z=-.06}for(let g of[-.66,.66]){q(.95,.04,.04,8359053,0,.85,g,t.access);for(let d of[-.45,.45])q(.04,.85,.04,8359053,d,0,g,t.access)}n("\u267F",.3,.5,1.3,-.9,t.access),t.cams=e(0,0,0);for(let[g,d]of[[-6.75,4.25],[6.6,-4.3],[6.6,4.25]])Tt(new $e(.1,10,8),Dt(2899536),g,2.62,d,t.cams),q(.03,.03,.03,16724787,g,2.55,d+(d>0?-.09:.09),t.cams);t.counter=e($n(1)-.75,1.03,-1.65),q(.26,.14,.22,3426654,0,0,0,t.counter),q(.18,.02,.1,3066993,0,.14,0,t.counter),n("\u{1F4B6}",.2,0,.38,0,t.counter),t.solar=e(9.25,0,-1.9),q(.06,.9,.06,8359053,0,0,0,t.solar);{let g=q(.9,.04,1.3,1719406,0,.9,0,t.solar);g.rotation.z=.55;let d=q(.86,.01,1.26,6139362,.01,.93,0,t.solar);d.rotation.z=.55}n("\u2600\uFE0F",.32,0,1.75,0,t.solar),t.starlink=e(9.35,0,-4.7),q(.05,1.4,.05,8947848,0,0,0,t.starlink);{let g=Tt(new le(.28,.28,.04,18),Dt(16777215),0,1.45,0,t.starlink);g.rotation.z=.5}t.cveh=e(8.4,0,4.35),t.cvehSp=n("\u{1F6B2}",.95,0,.5,0,t.cveh),t.lounge=e(-6.62,0,-8.45),q(.6,.42,1.05,9323693,0,0,0,t.lounge),q(.16,.5,1.05,8207512,-.24,.42,0,t.lounge);for(let g of[-.5,.5])q(.6,.22,.1,8207512,0,.42,g,t.lounge);t.lounge2=e(-5,0,-7.85),n("\u{1F4FA}",.45,0,1.7,0,t.lounge2),n("\u{1FAB4}",.4,.9,.3,0,t.lounge2);let s=v.decor={};s.plant=e(2.7,0,4),q(.32,.36,.32,11887901,0,0,0,s.plant);for(let[g,d,f,y]of[[0,.55,0,.26],[.1,.72,.05,.18],[-.08,.68,-.06,.2]])Tt(new $e(y,8,6),Dt(4168523),g,d,f,s.plant);s.ficus=e(-6.45,0,4.05),Tt(new le(.22,.17,.42,10),Dt(9132587),0,.21,0,s.ficus),Tt(new le(.03,.04,1.1,6),Dt(7162945),0,.95,0,s.ficus);for(let[g,d,f,y]of[[0,1.55,0,.36],[.22,1.3,.1,.26],[-.2,1.38,-.08,.28],[.05,1.85,.08,.24]])Tt(new $e(y,8,6),Dt(3046706),g,d,f,s.ficus);s.poster=e(-6.97,1.75,2.6),pe(.9,1.2,fe(`\u041E\u0411\u0415\u0420\u0415\u0416\u041D\u041E
\u041A\u0420\u0418\u0425\u041A\u0415!
\u{1F4E6}\u{1F95A}\u{1F377}`,{w:300,h:400,bg:"#fff3c4",fg:"#c0392b",font:"bold 52px system-ui,sans-serif",r:12,border:"#c0392b"}),0,0,0,Math.PI/2,s.poster),s.tariff=e(-6.97,1.75,1.1),pe(1,1.25,Li(320,400,g=>{g.fillStyle="#1f3a5f",Eo(g,2,2,316,396,14),g.fill(),g.fillStyle="#fff",g.font="bold 44px system-ui,sans-serif",g.textAlign="center",g.fillText("\u0422\u0410\u0420\u0418\u0424\u0418",160,62),g.font="28px system-ui,sans-serif",g.textAlign="left",[["\u041A\u043E\u043D\u0432\u0435\u0440\u0442","45 \u20B4"],["\u0414\u043E 2 \u043A\u0433","70 \u20B4"],["\u0414\u043E 10 \u043A\u0433","110 \u20B4"],["\u0414\u043E 30 \u043A\u0433","180 \u20B4"],["\u0413\u0430\u0431\u0430\u0440\u0438\u0442","250 \u20B4"]].forEach(([d,f],y)=>{g.fillText(d,30,130+y*52),g.textAlign="right",g.fillText(f,290,130+y*52),g.textAlign="left"})}),0,0,0,Math.PI/2,s.tariff),s.clock=e(5,2.6,-4.47),Tt(new le(.3,.3,.05,24),Dt(3355443),0,0,0,s.clock).rotation.x=Math.PI/2;let r=Tt(new ai(.26,24),Dt(16777215),0,0,.03,s.clock);v.hourHand=new Ht,v.hourHand.position.z=.04,s.clock.add(v.hourHand),q(.03,.15,.01,1118481,0,0,0,v.hourHand),v.minHand=new Ht,v.minHand.position.z=.045,s.clock.add(v.minHand),q(.02,.22,.01,1118481,0,0,0,v.minHand),s.flag=e(-5.6,2.6,-4.46),pe(.9,.3,fe("",{w:90,h:30,bg:"#0057b7",r:0}),0,.15,0,0,s.flag),pe(.9,.3,fe("",{w:90,h:30,bg:"#ffd700",r:0}),0,-.15,0,0,s.flag),s.cooler=e(-6.5,0,-.85),q(.4,1,.4,16119285,0,0,0,s.cooler),Tt(new le(.17,.17,.45,14),new be({color:6139362,transparent:!0,opacity:.7}),0,1.23,0,s.cooler),q(.06,.05,.05,3447003,.18,.7,0,s.cooler),q(.06,.05,.05,15158332,.18,.7,.1,s.cooler),s.candy=e($n(1)-.32,1.03,-1.38),Tt(new le(.1,.06,.07,12),new be({color:14084856,transparent:!0,opacity:.8}),0,.035,0,s.candy);for(let[g,d,f]of[[.03,0,15158332],[-.03,.03,15844367],[0,-.04,9323693]])Tt(new $e(.03,6,4),Dt(f),g,.07,d,s.candy);s.tv=e(-6.94,2.3,-.05),q(.06,.72,1.22,1118481,0,-.36,0,s.tv),v.tvScreen=new te(new _e(1.12,.62),new Je({color:3447003})),v.tvScreen.position.set(.04,0,0),v.tvScreen.rotation.y=Math.PI/2,s.tv.add(v.tvScreen),s.aquarium=e(6.6,0,-.75),q(.5,.8,1.2,6111287,0,0,0,s.aquarium),Tt(xe(.45,.5,1.12),new be({color:8374504,transparent:!0,opacity:.45}),0,1.05,0,s.aquarium),q(.44,.06,1.1,14730639,0,.8,0,s.aquarium),v.fish=[16744231,16761600,15158332].map((g,d)=>{let f=Tt(new $e(.05,6,4),Dt(g),0,1+d*.1,0,s.aquarium);return f.scale.set(.6,.8,1.4),f._p=d*2,f}),s.cat=e(0,0,3);let a=s.cat,o=Dt(15105570);q(.2,.18,.42,15105570,0,.1,0,a);let l=new Ht;l.position.set(0,.33,.24),a.add(l),q(.2,.17,.17,15105570,0,-.08,0,l);for(let g of[-.06,.06]){let d=Tt(new Si(.04,.08,4),o,g,.12,0,l);d.rotation.y=Math.PI/4}for(let g of[-.05,.05])Tt(xe(.03,.03,.01),Dt(1776411),g,0,.09,l);v.catTail=new Ht,v.catTail.position.set(0,.25,-.2),a.add(v.catTail),q(.04,.04,.3,13849600,0,0,-.14,v.catTail).rotation.x=-.6,v.catLegs=[[-.07,.15],[.07,.15],[-.07,-.15],[.07,-.15]].map(([g,d])=>{let f=new Ht;return f.position.set(g,.12,d),a.add(f),q(.05,.12,.05,13849600,0,-.12,0,f),f}),Tt(new ai(.22,12),new Je({color:0,transparent:!0,opacity:.18}),0,.01,0,a).rotation.x=-Math.PI/2,v.catSt={pos:new F(-2,0,3),tgt:new F(-2,0,3),wait:2,yaw:0,ph:0,jump:0},s.tree=e(-6.3,0,3.6),Tt(new le(.08,.1,.3,8),Dt(7162945),0,.15,0,s.tree),[[.75,.9,.5],[.6,.75,1.05],[.42,.6,1.55],[.24,.45,1.98]].forEach(([g,d,f])=>Tt(new Si(g,d,12),Dt(1999945),0,f,0,s.tree));{let g=Pi("\u2B50",.35);g.position.set(0,2.35,0),s.tree.add(g)}v.treeBalls=[];for(let g=0;g<14;g++){let d=g*2.4,f=.45+g/14*1.6,y=.7-g/14*.5,A=Tt(new $e(.055,8,6),new Je({color:[15158332,15844367,3447003,15528177][g%4]}),Math.cos(d)*y,f,Math.sin(d)*y,s.tree);v.treeBalls.push(A)}s.presents=e(-5.65,0,3.95),[[0,0,15158332,.34],[.36,.1,3447003,.26],[.1,.36,15844367,.22]].forEach(([g,d,f,y])=>{q(y,y,y,f,g,0,d,s.presents),q(y+.01,y+.01,.05,16777215,g,0,d,s.presents)}),s.garland=e(0,0,0),v.garland=[];for(let g=0;g<28;g++){let d=-6.8+g*.5,f=Tt(new $e(.045,6,4),new Je({color:[15158332,15844367,3066993,3447003][g%4]}),d,2.95-Math.abs(Math.sin(g*.9))*.18,-1.32,s.garland);v.garland.push(f)}s.snowman=e(8.1,0,3.4);for(let[g,d]of[[.3,.32],[.82,.24],[1.22,.17]])Tt(new $e(d,12,10),Dt(16777215),0,g,0,s.snowman);{let g=Tt(new Si(.04,.18,8),Dt(15105570),-.17,1.22,0,s.snowman);g.rotation.z=Math.PI/2}q(.26,.2,.26,2236962,0,1.36,0,s.snowman),t.balloons=e(2.95,0,-1.3),[[0,2.3,0,15158332],[.25,2.15,.12,15844367],[-.2,2.2,.1,3447003]].forEach(([g,d,f,y])=>{Tt(new $e(.17,10,8),Dt(y),g,d,f,t.balloons).scale.y=1.2,Tt(new le(.004,.004,d-1.05),Dt(16777215),g*.4,(d+1.05)/2-.1,f*.4,t.balloons)}),v.dirt=[];let c=Kn(5),p=new Je({color:5982773,transparent:!0,opacity:.28,depthWrite:!1});for(let g=0;g<14;g++){let d=.2+c()*.35,f=new te(new ai(d,10),p);f.rotation.x=-Math.PI/2,f.position.set(-5.5+c()*11.5,.008+g*3e-4,-.9+c()*5.2),f.scale.y=.6+c()*.6,f.visible=!1,i.add(f),v.dirt.push(f)}let _=160,h=new Float32Array(_*3),u=Kn(9);for(let g=0;g<_;g++)h[g*3]=7.3+u()*2.5,h[g*3+1]=u()*3.5,h[g*3+2]=-5+u()*10;let m=new Ue;m.setAttribute("position",new ie(h,3)),v.precip=new Ws(m,new os({color:11458289,size:.06,transparent:!0,opacity:.8})),v.precip.visible=!1,i.add(v.precip)}var Mu=[3894949,12597547,3050327,9323693,13849600,1482885,8359053,2899536,12092939,10181046,2056589,10502144,15221651,35195],Su=[2899536,3426654,1779249,4868682,6111287,1713022],vg=()=>fi("cap",()=>new Zs(.2,.4,4,10));function _r(i,t,{seed:e=0,uniform:n=!1,reg:s=!1,color:r=null,hat:a="",badge:o=""}={}){let l=new Ht,c=Kn(e||hg(i)),p=r!=null?r:n?14100011:Mu[Math.floor(c()*Mu.length)],_=n?2899536:Su[Math.floor(c()*Su.length)],h=Tt(vg(),Dt(p),0,1.02,0,l);h.scale.set(1,1,.8);let u=[-.1,.1].map(b=>{let x=new Ht;return x.position.set(b,.72,0),l.add(x),q(.13,.7,.15,_,0,-.7,0,x),x}),m=[-.27,.27].map(b=>{let x=new Ht;return x.position.set(b,1.25,0),l.add(x),q(.1,.48,.11,p,0,-.46,0,x),x}),g=Pi(t,.62);if(g.position.y=1.62,l.add(g),g._e=t,a){let b=Pi(a,.44);b.position.y=1.98,l.add(b)}if(o){let b=pe(.3,.09,fe(o,{w:256,h:76,bg:"#ffffff",fg:"#222",font:"bold 38px system-ui,sans-serif",r:8}),.08,1.2,.17,0,l);b.renderOrder=2}let d=Pi("\u{1F610}",.34);d.position.y=2.08,d.visible=!1,l.add(d);let f=q(.34,.26,.3,12884588,0,.92,.3,l);f.visible=!1;let y=Tt(new _e(.14,.2),Dt(16777215,{side:2}),.27,.85,.12,l);y.rotation.x=-.3,y.visible=!1;let A=Tt(fi("shg",()=>new ai(.32,14)),fi("shm",()=>new Je({color:0,transparent:!0,opacity:.2,depthWrite:!1})),0,.01,0,l);A.rotation.x=-Math.PI/2;let T=null;s&&(T=Tt(fi("rg",()=>new Js(.36,.035,6,24)),Dt(16101441,{emissive:8215040}),0,.03,0,l),T.rotation.x=Math.PI/2),v.scene.add(l);let R={key:i,g:l,body:h,head:g,legs:u,arms:m,mood:d,carry:f,receipt:y,ring:T,pos:new F,goal:null,path:[],yaw:0,face:Math.PI,ph:c()*6,walking:!1,sit:!1,speed:1.5+c()*.35,busy:!1};return h.userData.P=R,g.userData.P=R,R}function ac(i){v.scene.remove(i.g),i.head.material.dispose(),i.mood.material.dispose()}function sc(i,t,e){let n=((t-i+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;return i+n*e}function yg(i,t,e){var a;let n=i.path.length?i.path[0]:i.goal;if(i.walking=!1,n){let o=n[0]-i.pos.x,l=n[1]-i.pos.z,c=Math.hypot(o,l);if(c>.04){let p=Math.min(c,i.speed*t*e);i.pos.x+=o/c*p,i.pos.z+=l/c*p,i.walking=p>0,i.yaw=sc(i.yaw,Math.atan2(o,l),Math.min(1,t*10))}else i.path.length&&i.path.shift()}i.walking||(i.yaw=sc(i.yaw,i.face,Math.min(1,t*6)));let s=i.sit&&!i.walking&&!i.path.length&&i.goal&&Math.hypot(i.goal[0]-i.pos.x,i.goal[1]-i.pos.z)<.08;i.walking&&(i.ph+=t*9*Math.min(2,e));let r=i.walking?Math.sin(i.ph):0;i.legs[0].rotation.x=s?-1.5:r*.6,i.legs[1].rotation.x=s?-1.5:-r*.6,i.arms[0].rotation.x=i.busy?-.9+Math.sin(v.t*14)*.15:-r*.5-(i.carry.visible?1.1:0),i.arms[1].rotation.x=i.busy?-.9-Math.sin(v.t*14)*.15:r*.5-(i.carry.visible?1.1:0),i.g.position.set(i.pos.x,(s?-((a=i.drop)!=null?a:.28):0)+(i.walking?Math.abs(r)*.05:0),i.pos.z),i.g.rotation.y=i.yaw,i.g.scale.setScalar(i.hover?1.08:1)}function bu(i){let t=Math.floor(i/7),e=i%7;return t===0?[-.6+e*.8,.45]:t===1?[4.2-e*.8,1.85]:[-.6+e*.8,3.1+(t-2)*.8]}function Mg(i,t){return Math.atan2(t[0]-i[0],t[1]-i[1])}function Sg(i){return(i.staff||[]).filter(t=>(t.role==="issue"||t.role==="accept")&&(!t.training||(i.up.school||0)>=2)&&!t.away&&!t.brk).slice(0,Math.max(0,(i.up.windows||1)-1))}function Iu(){if(!v)return;let i=Ci(),t=i&&i.g();if(!t)return;lc();let e=performance.now(),n=i.tab();n!==v.lastTab&&(v.lastTab=n,v.userMode=!1,oc(n==="store"||n==="ramp"?"back":"hall"));let s=t.truck,r=s?s.kind==="in"?"in":"out":null;r&&(v.tState==="away"||v.tState==="leaving")&&(v.tState="arriving",v.tKind=r,v.truck.visible=!0,v.tx>16&&(v.tx=vs)),!r&&(v.tState==="docked"||v.tState==="arriving")&&(v.tState="leaving"),v.tCount=(t.parcels||[]).filter(h=>h.state===(v.tKind==="out"?"loaded":"truck")).length;let a=Mn(t.up.windows||1,1,(t.up.space||0)>=1?5:4),o=Sg(t);v.wins.forEach((h,u)=>{let m=u<a,g=u===0?"me":o[u-1];h.g.visible=u<4||(t.up.space||0)>=1,h.closed.visible=!m,h.mon.visible=m;let d=u===0?t.queue.some(y=>y.by==="me"):!!(g&&g.cl),f=`${m}|${d}|${u===0||!!g}`;h._pk!==f&&(h._pk=f,h.plate.material.map=fe(String(u+1),{w:128,h:128,r:64,bg:m?d?"#d7262b":u===0||g?"#2e7d32":"#7f8c8d":"#bdc3c7",font:"bold 80px system-ui,sans-serif"}),h.plate.material.needsUpdate=!0)});let l=new Map;for(let h=0;h<a;h++){let u=t.look||{},m=h===0?{id:"me",av:u.e||"\u{1F9D1}\u200D\u{1F4BC}",cl:t.queue.some(g=>g.by==="me"),look:u}:o[h-1];m&&l.set(`op${h}:${m.id}:${m.av}`+(h===0?`:${u.c||""}:${u.hat||""}:${u.badge!==!1?1:0}`:""),{kind:"op",w:h,st:m})}(t.staff||[]).filter(h=>h.role==="store"&&(!h.training||(t.up.school||0)>=2)&&!h.away).slice(0,4).forEach(h=>l.set(`st${h.id}:${h.av}`,{kind:"store",st:h})),t.insp&&t.insp.state==="on"&&l.set("insp",{kind:"insp"});let c=t.queue.filter(h=>!h.by),p=Mn((t.up.chairs||0)*3,0,9),_=(t.up.space||0)>=2?6:0;t.queue.forEach(h=>l.set("c"+h.id,{kind:"client",c:h}));for(let[h,u]of l){let m=v.people.get(h);if(!m){if(u.kind==="client"){m=_r(h,u.c.av,{reg:!!u.c.reg});let g=Math.random()<.5;m.pos.set(_s,0,g?5.2:-5.2),m.yaw=g?Math.PI:0,m.path=[[_s,vr.z],jl],m.kindC=u.c.kind,v.seen&&i.tab()==="hall"&&i.door()}else if(u.kind==="op"){let g=u.st.look;m=_r(h,u.st.av,g?{uniform:!0,color:i.LOOKC(g.c),hat:g.hat||"",badge:g.badge!==!1?String(t.nick||"").slice(0,14):""}:{uniform:!0}),m.pos.set($n(u.w+1),0,ec),m.yaw=0,m.face=0,m.sit=!0,m.drop=.1,m.goal=[$n(u.w+1),ec]}else u.kind==="store"?(m=_r(h,u.st.av,{uniform:!0}),m.pos.set(2+Math.random()*2,0,-3.2),m.wait=0,m.zone="hall"):(m=_r(h,"\u{1F575}\uFE0F",{seed:77}),m.pos.set(_s,0,-4),m.path=[[_s,vr.z],jl],m.goal=[4.6,3.6],m.face=Math.PI,m.clip=q(.22,.3,.02,16777215,.15,1,.25,m.g),m.clip.rotation.x=-.5);v.people.set(h,m)}if(m.mark=e,u.kind==="op"&&(m.busy=!!u.st.cl),u.kind==="store"&&(m.stRef=u.st),u.kind==="client"){let g=u.c;if(g.by){let y=1;if(g.by!=="me"){let A=o.findIndex(T=>T.id===g.by);y=A>=0?A+2:2}m.goal=[$n(Mn(y,1,a)),og],m.face=Math.PI,m.sit=!1}else{let y=c.indexOf(g),A,T;if(y<7||y-7>=p+_){let R=y<7?y:y-p-_;A=bu(R),T=R===0?Math.PI:Mg(A,bu(R-1)),m.sit=!1}else y-7<p?(A=Au(y-7),A=[A[0]+.05,A[1]],T=Math.PI/2,m.sit=!0):(A=Ru(y-7-p),A=[A[0],A[1]-.05],T=Math.PI,m.sit=!0);m.goal=A,m.face=T}m.cid=g.by?null:g.id,yr(m.head,g.av);let d=g.pat/(g.max||1),f=g.by?"":d<.25?"\u{1F624}":d<.5?"\u{1F610}":"";m.mood.visible=!!f,f&&yr(m.mood,f),m.carry.visible=g.kind==="send"&&!g.by}}for(let[h,u]of v.people)if(!(u.mark===e||u.leaving))if(h.startsWith("c")||h==="insp"){let m=+h.slice(1),g=h!=="insp"&&i.angry.delete(m);u.leaving=!0,u.cid=null,u.sit=!1,u.busy=!1,u.mood.visible=g,g&&yr(u.mood,"\u{1F620}"),u.carry.visible=!g&&u.kindC==="get",u.receipt.visible=!g&&u.kindC==="send";let d=Math.random()<.5?5.4:-5.4;u.path=[jl,[_s,vr.z],[_s,d]],u.goal=null,u.exitZ=d}else ac(u),v.people.delete(h);v.seen=!0,e-(v.slow||0)>400&&(v.slow=e,bg(t,i))}function bg(i,t){pg(i);let e=(t.WALLS[i.decor&&i.decor.wall]||t.WALLS.cream)[1];v._wc!==e&&(v._wc=e,v.wallMat.color.set(e));let n=i.decor&&i.decor.items||{};for(let m in v.decor)v.decor[m].visible=!!n[m];let s=v.extras,r=i.up;v.mode!=="hall"&&(v.decor.clock.visible=!1,v.decor.flag.visible=!1),s.chairs.forEach((m,g)=>{m.visible=g<(r.chairs||0)*3});let a=r.space||0;if(s.chairs2.forEach(m=>{m.visible=a>=2}),v.ext5.visible=a>=1,v.barFull.visible=a<1,v.barShort.visible=a>=1,s.coffee.position.set(a>=1?1.3:3.55,0,a>=1?4.1:-1.2),s.coffee.visible=!!r.coffee,s.ac.visible=!!r.ac&&v.mode==="hall",s.gen.visible=!!r.gen,s.ads.visible=!!r.ads,s.equeue.visible=s.qBoard.visible=v.qFrame.visible=!!r.equeue,r.equeue){let m=Math.max(1,(i.cid||1)-1-(i.queue||[]).length)%1e3,g=1+m%Math.max(1,r.windows||1),d=m+":"+g;if(v._qk!==d){v._qk=d;let f=v.qCv.getContext("2d");f.fillStyle="#111",f.fillRect(0,0,512,128),f.fillStyle="#ff4d3d",f.font="bold 70px monospace",f.textBaseline="middle",f.fillText("\u2116"+String(m).padStart(3,"0"),22,66),f.fillStyle="#7dff8a",f.fillText("\u2192 "+g,330,66),v.qTex.needsUpdate=!0}}s.kiosk.visible=!!r.kiosk,s.wifi.visible=!!r.wifi&&v.mode==="hall",s.access.visible=!!r.access,s.cams.visible=!!r.cams,s.counter.visible=!!r.counter,s.solar.visible=!!r.solar,s.starlink.visible=!!r.starlink,s.lounge.visible=(r.lounge||0)>=1,s.lounge2.visible=(r.lounge||0)>=2;let o=r.cveh||0,l=(i.staff||[]).some(m=>m.role==="courier"&&!m.route&&!m.away);if(s.cveh.visible=o>0&&l,o&&yr(s.cvehSp,["","\u{1F6B2}","\u{1F6F5}","\u{1F690}"][o]||"\u{1F690}"),s.locker.visible=!!r.locker,r.locker){let m=.6+Math.min(3,r.locker)*.4;s.lockerBody.scale.z=m,s.lockerGrid.scale.x=m*.85,s.locker.position.z=2.4+m/2}v.scanner.visible=!!r.scanner,s.balloons.visible=!!(t.ev()||i.eve);let c=r.tier||0;v.tierText.visible=c>0,c>0&&(v.tierText.material.map=fe(t.TIERS[c]||"",{w:512,h:64,bg:"#1f3a5f",font:"bold 36px system-ui,sans-serif",r:10}),v.tierText.material.needsUpdate=!0);let p=Math.round((i.dirt||0)/7);v.dirt.forEach((m,g)=>{m.visible=g<p});let h=!!(t.WEATHER[i.weather]||{}).wet,u=i.weather==="snow";v.precip.visible=h,v.precip.material.color.set(u?16777215:11458289),v.precip.material.size=u?.09:.05,v._snow=u,v.street.material.color.set(u?15265522:h?7303797:10132118),v.manual=t.manual(),v.gen=!!(i.outage&&i.outage.on&&r.gen&&!r.solar),v.time=i.time||480}function wg(i){let t=Ci(),e=t&&t.g();v.t+=i;let n=!e||t.paused()?0:e.settings.speed||1;for(let[u,m]of v.people)yg(m,i,m.leaving?Math.max(1,n):n),u.startsWith("st")&&Ag(m,i,n),m.leaving&&!m.path.length&&(ac(m),v.people.delete(u));let s=!1;for(let u of v.people.values())if(Math.hypot(u.pos.x-vr.x,u.pos.z-vr.z)<1.6){s=!0;break}v.doorOpen+=((s?1:0)-v.doorOpen)*Math.min(1,i*6),v.doorL.position.z=1.15-v.doorOpen*.62,v.doorR.position.z=1.85+v.doorOpen*.62,v.decor.cat.visible&&Cg(i,n),Rg(i,n);let r=v.tState==="docked"||v.tState==="arriving"&&v.tx<13?1:0;v.gateOpen+=(r-v.gateOpen)*Math.min(1,i*2.5);{let u=1-.88*v.gateOpen;v.gate.scale.y=u,v.gate.position.y=2.52-1.25*u}v.dockLight.material.color.set(v.tState==="docked"?3066993:15158332);let a=[...v.people.values()].some(u=>u.sit&&nc(u.pos.x,u.pos.z));v.steam.visible=a,a&&(v.steam.position.y=1.45+v.t*.4%.3,v.steam.material.opacity=1-v.t*.4%.3/.3);let o=[...v.people.values()].some(u=>u.inWC===2);v.wcDoor.rotation.y=o?0:-1.3*Math.min(1,1),v._wcb!==o&&(v._wcb=o,v.wcSign.material.map=fe(o?"\u{1F6BB} \u0437\u0430\u0439\u043D\u044F\u0442\u043E":"\u{1F6BB} \u0432\u0456\u043B\u044C\u043D\u043E",{w:220,h:96,bg:o?"#c0392b":"#2e7d32",font:"bold 40px system-ui,sans-serif",r:10}),v.wcSign.material.needsUpdate=!0),v.decor.garland.visible&&v.garland.forEach((u,m)=>{u.visible=Math.sin(v.t*3+m*1.7)>-.3}),v.decor.tree.visible&&v.treeBalls.forEach((u,m)=>{u.visible=Math.sin(v.t*2.2+m*2.1)>-.5}),v.sortBoxes.forEach((u,m)=>{u.position.x=-1+(v.t*.25*Math.max(n,.2)+m*.7)%2.1}),v.decor.aquarium.visible&&v.fish.forEach(u=>{u._p+=i*(.6+u.id%3*.2),u.position.z=Math.sin(u._p)*.42,u.rotation.y=Math.cos(u._p)>0?0:Math.PI});let l=v.time||480;v.minHand.rotation.z=-(l%60/60)*Math.PI*2,v.minHand.children[0].position.y=.1,v.hourHand.rotation.z=-(l/60%12/12)*Math.PI*2,v.hourHand.children[0].position.y=.07;let c=v.manual,p=v.gen?.85+Math.sin(v.t*23)*.05:1,_=Mn((l-1020)/180,0,1);v.hemi.intensity=(c?.35:2.4)*p,v.sun.intensity=(c?.12:1.5)*p,v.sun.color.setRGB(1,1-_*.15,1-_*.35),v.torch.intensity=c?9:0,v.scene.background.set(c?1052693:_>0?2958881:2830134);let h=c?1118481:7321576;if(v.wins.forEach(u=>u.screen.material.color.set(h)),v.tvScreen.material.color.setHSL(c?0:v.t*.05%1,c?0:.6,c?.03:.55),v.precip.visible){let u=v.precip.geometry.attributes.position,m=v._snow?.9:6;for(let g=0;g<u.count;g++){let d=u.getY(g)-m*i;d<0&&(d+=3.5),u.setY(g,d),v._snow&&u.setX(g,u.getX(g)+Math.sin(v.t+g)*i*.1)}u.needsUpdate=!0}v.hint&&v.t>6&&!v.hint.hidden&&(v.hint.hidden=!0)}function Tg(i,t,e){let n=i.pos.x,s=i.pos.z,r=[];nc(n,s)&&r.push([wo[0],-8.2],[wo[0],-7.1]),yu(n,s)&&r.push([To[0],-9.5],[To[0],-8.5]);let a=s>xs,o=e>xs;a&&!o&&r.push([Ii,-3.55],[Ii,-5.4]),!a&&o&&r.push([Ii,-5.4],[Ii,-3.55]),nc(t,e)&&r.push([wo[0],-7.1],[wo[0],-8.2]),yu(t,e)&&r.push([To[0],-8.5],[To[0],-9.5]),i.path=r,i.goal=[t,e]}function Eg(i){let t=Ci().g(),e=Mn(t.up.shelves||1,1,5),n=i.stRef||{},s=v.tState==="docked",r=Math.random(),a=p=>(Math.random()-.5)*p,o=()=>({x:rc(Math.floor(Math.random()*e))+a(.8),z:-3.35,face:Math.PI,carry:!1});if(s&&v.tKind==="in"&&v.tCount>0&&r<.75)return{x:7.45,z:nn+a(.9),face:Math.PI/2,carry:!1,wait:.7,chain:[{x:dn[0]-.9,z:dn[1]+a(.5),face:Math.PI/2,carry:!0,wait:.5}]};let l=(t.parcels||[]).filter(p=>p.state==="outgoing").length;if(s&&v.tKind==="out"&&l>0&&r<.75)return{x:di[0]-.85,z:di[1]+a(.4),face:Math.PI/2,carry:!1,wait:.5,chain:[{x:7.45,z:nn+a(.9),face:Math.PI/2,carry:!0,wait:.6}]};if(n.brk||(n.fat||0)>55&&r<.3){let p=new Set([...v.people.values()].filter(h=>h!==i&&h.goal).map(h=>h.goal.join())),_=v.kChairs.find(h=>!p.has(`${h[0]},${h[1]}`));if(_)return{x:_[0],z:_[1],face:_[2],carry:!1,sit:!0,mood:n.brk?"\u{1F37D}\uFE0F":"\u2615",wait:n.brk?3:5+Math.random()*4}}if(r<.05&&!v.wcBusy&&![...v.people.values()].some(p=>p.inWC))return{x:-2.85,z:-10.2,face:0,carry:!1,wc:!0,wait:3};let c=[()=>({x:dn[0]-.9,z:dn[1]+a(.5),face:Math.PI/2,carry:!1,wait:.8,chain:[{...o(),carry:!0}]}),o,o,()=>({x:3.6+a(.6),z:-3.3,face:Math.PI,carry:!1}),()=>({x:2.2+a(1.6),z:-6.65,face:Math.PI,carry:!1,wait:2+Math.random()*2}),()=>({x:-.2+Math.floor(Math.random()*3)*2.2+a(.8),z:-9.75,face:Math.PI,carry:!1}),()=>({x:[-5.6,-3.2][Math.floor(Math.random()*2)]+a(.4),z:-4.95,face:Math.PI,carry:!1,wait:2+Math.random()*2}),()=>({x:di[0]-.85,z:di[1]+a(.4),face:Math.PI/2,carry:!0})];return c[Math.floor(Math.random()*c.length)]()}function Ag(i,t,e){var r;if(!(!i.path.length&&(!i.goal||Math.hypot(i.goal[0]-i.pos.x,i.goal[1]-i.pos.z)<=.05))||(i.inWC===1&&(i.inWC=2,i.g.visible=!1),i.wait=(i.wait||0)-t*e,i.wait>0))return;i.inWC===2&&(i.inWC=0,i.g.visible=!0),i.sit=!1,i.mood.visible=!1;let s=i.chain&&i.chain.length?i.chain.shift():Eg(i);s.chain&&(i.chain=s.chain),i.carry.visible=!!s.carry,Tg(i,s.x,s.z),i.face=s.face,i.wait=(r=s.wait)!=null?r:1+Math.random()*2.5,s.sit&&(i.sit=!0,i.drop=.25),s.mood&&(i.mood.visible=!0,yr(i.mood,s.mood)),s.wc&&(i.inWC=1)}function Rg(i,t){if(v.tState==="away")return;let e=Math.max(t,1);if(v.tState==="arriving"||v.tState==="docked"){let s=tc-v.tx;Math.abs(s)>.01?(v.tx+=Math.sign(s)*Math.min(Math.abs(s),Math.max(.5,Math.abs(s)*1.4)*i*e),v.wheels.forEach(r=>{r.rotation.y+=i*6*e})):(v.tx=tc,v.tState="docked"),v.tDoor+=((v.tState==="docked"?1:0)-v.tDoor)*Math.min(1,i*3)}else v.tState==="leaving"&&(v.tDoor+=(0-v.tDoor)*Math.min(1,i*4),v.tDoor<.03&&(v.tx+=Math.max(.6,(v.tx-tc)*1.3+.6)*i*e,v.wheels.forEach(s=>{s.rotation.y-=i*6*e})),v.tx>=vs&&(v.tx=vs,v.tState="away",v.truck.visible=!1));v.truck.position.x=v.tx,v.tDoors.forEach(s=>{s.rotation.y=s._h*v.tDoor*1.75});let n=v.tState==="docked";_g(n||v.tState==="arriving"?v.tCount:v._tbn||0),v.driver.g.visible=n,n&&(v.driver.g.position.set(v.tx+1.4,0,nn+1.45),v.driver.g.rotation.y=-Math.PI/2+Math.sin(v.t*.7)*.3)}function Cg(i,t){let e=v.catSt,n=v.decor.cat,s=e.tgt.clone().sub(e.pos);s.y=0;let r=s.length(),a=!1;if(r>.05){let o=Math.min(r,.55*i*Math.max(.3,t));e.pos.addScaledVector(s.normalize(),o),e.yaw=sc(e.yaw,Math.atan2(s.x,s.z),Math.min(1,i*6)),a=!0}else e.wait-=i,e.wait<=0&&(e.tgt.set(-5.5+Math.random()*10,0,0+Math.random()*4.2),e.wait=3+Math.random()*6);e.ph+=i*(a?12:0),v.catLegs.forEach((o,l)=>{o.rotation.x=a?Math.sin(e.ph+(l%2?Math.PI:0)+(l>1?Math.PI:0))*.6:0}),v.catTail.rotation.y=Math.sin(v.t*2)*.5,e.jump=Math.max(0,e.jump-i*2.5),n.position.set(e.pos.x,Math.sin(e.jump*Math.PI)*.45,e.pos.z),n.rotation.y=e.yaw}var Mr={hall:{tg:[.6,.5,.1],w:8.2,wp:6.6,h:4.6,pitch:.78},back:{tg:[2.8,.5,-7.9],w:10.6,wp:9,h:4.2,pitch:.98},all:{tg:[2.6,.5,-3.4],w:10.6,wp:8.6,h:7.4,pitch:1.08}};function oc(i){!v||!Mr[i]||(v.mode=i,v.view.yaw=0,v.view.pitch=Mr[i].pitch,v.view.zoom=1,v.sep.visible=i==="hall",v.ctl&&v.ctl.querySelectorAll("[data-h3]").forEach(t=>t.classList.toggle("on",t.dataset.h3===i)),v.slow=0,Ao())}function Ao(){let i=v.camera,t=v.view,e=Mr[v.mode]||Mr.hall,n=i.fov*Math.PI/180,s=2*Math.atan(Math.tan(n/2)*i.aspect),r=Math.max((i.aspect<1.3?e.wp:e.w)/Math.tan(s/2),e.h/Math.tan(n/2)),a=Mn(r,9,44)*t.zoom,o=new F(...e.tg);i.position.set(o.x+a*Math.sin(t.yaw)*Math.cos(t.pitch),o.y+a*Math.sin(t.pitch),o.z+a*Math.cos(t.yaw)*Math.cos(t.pitch)),i.lookAt(o)}function wu(){if(!v)return;let i=v.el.clientWidth||600,t=v.el.clientHeight||260;v.renderer.setSize(i,t,!1),v.camera.aspect=i/t,v.camera.updateProjectionMatrix(),Ao()}function Tu(i){let t=v.canvas.getBoundingClientRect();v.ptr.set((i.clientX-t.left)/t.width*2-1,-((i.clientY-t.top)/t.height)*2+1),v.ray.setFromCamera(v.ptr,v.camera);let e=[];for(let r of v.people.values())r.cid!=null&&e.push(r.body,r.head);v.decor.cat.visible&&e.push(...v.decor.cat.children);let n=v.tState==="docked"&&v.truck.visible;n&&e.push(v.truckBoxes,...v.truck.children[0].children);let s=v.ray.intersectObjects(e,!1)[0];return s?s.object.userData.P?{P:s.object.userData.P}:n&&(s.object===v.truckBoxes||v.truck.children[0].children.includes(s.object))?{truck:!0}:{cat:!0}:null}function Ig(){let i=v.canvas,t=null;i.addEventListener("pointerdown",n=>{t={x:n.clientX,y:n.clientY,t:performance.now(),id:n.pointerId,yaw:v.view.yaw,pitch:v.view.pitch,moved:!1}}),i.addEventListener("pointermove",n=>{if(t&&t.id===n.pointerId){let s=n.clientX-t.x,r=n.clientY-t.y;Math.abs(s)+Math.abs(r)>7&&(t.moved=!0),t.moved&&(v.view.yaw=Mn(t.yaw-s*.006,-1,1),n.pointerType==="mouse"&&(v.view.pitch=Mn(t.pitch+r*.004,.32,1.35)),Ao(),v.hint&&(v.hint.hidden=!0))}else if(n.pointerType==="mouse"&&performance.now()-(v.hoverT||0)>60){v.hoverT=performance.now();let s=Tu(n);for(let r of v.people.values())r.hover=s&&s.P===r;i.style.cursor=s?"pointer":"grab"}});let e=n=>{if(!t||t.id!==n.pointerId)return;let s=t;if(t=null,s.moved||performance.now()-s.t>600)return;let r=Tu(n);if(r){if(r.truck){Ci().act("unload3d",{dataset:{}});return}if(r.cat){v.catSt.jump=1,Ci().beep(880,.07,"sine",.05),setTimeout(()=>Ci().beep(660,.1,"sine",.04),90);return}r.P.cid!=null&&Ci().act("serve",{dataset:{id:String(r.P.cid)}})}};i.addEventListener("pointerup",e),i.addEventListener("pointercancel",()=>{t=null}),i.addEventListener("pointerleave",()=>{for(let n of v.people.values())n.hover=!1}),v.ctl.addEventListener("click",n=>{let s=n.target.closest("[data-h3]");if(!s)return;n.stopPropagation();let r=s.dataset.h3;if(r==="in")v.view.zoom=Mn(v.view.zoom*.85,.4,1.4);else if(r==="out")v.view.zoom=Mn(v.view.zoom/.85,.4,1.4);else if(r==="hall"||r==="back"||r==="all"){oc(r),v.userMode=!0;return}else v.view.yaw=0,v.view.pitch=Mr[v.mode].pitch,v.view.zoom=1;Ao()})}function Pu(i){if(v.raf=0,!v.el.isConnected||document.hidden){v.running=!1;return}let t=Math.min(.05,(i-(v.last||i))/1e3);v.last=i,wg(t),v.renderer.render(v.scene,v.camera),v.raf=requestAnimationFrame(Pu)}function lc(){v&&!v.running&&v.el.isConnected&&!document.hidden&&(v.running=!0,v.last=0,v.raf=requestAnimationFrame(Pu))}function xr(){if(xr.v===void 0)try{let i=document.createElement("canvas");xr.v=!!(window.WebGLRenderingContext&&(i.getContext("webgl2")||i.getContext("webgl")))}catch{xr.v=!1}return xr.v}function Pg(i){v&&Lu();let t=new Mo({antialias:!0,powerPreference:"low-power"});t.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75));let e=t.domElement;e.className="h3d",e.style.touchAction="pan-y",i.appendChild(e);let n=document.createElement("div");n.className="h3dctl",n.innerHTML='<button data-h3="hall" title="\u0417\u0430\u043B">\u{1F3E2}</button><button data-h3="back" title="\u0421\u043A\u043B\u0430\u0434 \u0456 \u0440\u0430\u043C\u043F\u0430">\u{1F4E6}</button><button data-h3="all" title="\u0412\u0441\u0435 \u0432\u0456\u0434\u0434\u0456\u043B\u0435\u043D\u043D\u044F">\u{1F5FA}\uFE0F</button><button data-h3="in" title="\u0411\u043B\u0438\u0436\u0447\u0435">\uFF0B</button><button data-h3="out" title="\u0414\u0430\u043B\u0456">\uFF0D</button><button data-h3="reset" title="\u0421\u043A\u0438\u043D\u0443\u0442\u0438 \u043A\u0430\u043C\u0435\u0440\u0443">\u27F2</button>',i.appendChild(n);let s=document.createElement("div");s.className="h3dhint",s.textContent="\u{1F446} \u0422\u0430\u043F\u043D\u0438 \u043A\u043B\u0456\u0454\u043D\u0442\u0430, \u0449\u043E\u0431 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0442\u0438 \xB7 \u{1F4E6} \u0441\u043A\u043B\u0430\u0434 \u0456 \u0440\u0430\u043C\u043F\u0430 \xB7 \u0442\u044F\u0433\u043D\u0438, \u0449\u043E\u0431 \u043F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438 \u043A\u0430\u043C\u0435\u0440\u0443",i.appendChild(s);let r=new Os;r.background=new kt(2830134);let a=new Ge(38,2,.5,120);v={el:i,renderer:t,canvas:e,ctl:n,hint:s,scene:r,camera:a,people:new Map,view:{yaw:0,pitch:.78,zoom:1},mode:"hall",t:0,doorOpen:0,ray:new ir,ptr:new Nt,seen:!1},v.hemi=new Ks(16775406,10260346,2.4),r.add(v.hemi),v.sun=new nr(16777215,1.5),v.sun.position.set(4,10,7),r.add(v.sun),v.torch=new tr(16766362,0,7,1.6),v.torch.position.set($n(1),1.7,-1),r.add(v.torch),ug(),dg(),fg(),mg(),xg(),gg(),Ig(),v.ro=new ResizeObserver(wu),v.ro.observe(i),wu(),document.addEventListener("visibilitychange",lc),Iu()}function Lg(){if(v){for(let i of v.people.values())ac(i);v.people.clear(),v.seen=!1,v.boxKey=null,v.tState="away",v.tx=vs,v.truck.visible=!1,v.tDoor=0,v._tbn=-1}}function Lu(){if(v){v.raf&&cancelAnimationFrame(v.raf),v.ro.disconnect(),document.removeEventListener("visibilitychange",lc),v.renderer.dispose();try{v.renderer.forceContextLoss()}catch{}v.canvas.remove(),v.ctl.remove(),v.hint.remove(),ic.clear(),v=null}}function Dg(i){if(!v)return null;let t=v.people.get("c"+i);if(!t)return null;let e=new F(t.pos.x,1,t.pos.z).project(v.camera),n=v.canvas.getBoundingClientRect();return{x:n.left+(e.x+1)/2*n.width,y:n.top+(1-e.y)/2*n.height}}window.Hall3D={ok:xr,mount:Pg,sync:Iu,reset:Lg,dispose:Lu,screenOf:Dg,setMode:i=>{v&&(oc(i),v.userMode=!0)},get mode(){return v&&v.mode},get active(){return!!v}};})();
