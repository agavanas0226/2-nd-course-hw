(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function r(t){n(1,arguments);var r=Object.prototype.toString.call(t);return t instanceof Date||"object"===e(t)&&"[object Date]"===r?new Date(t.getTime()):"number"==typeof t||"[object Number]"===r?new Date(t):("string"!=typeof t&&"[object String]"!==r||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function a(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function o(t){n(1,arguments);var e=r(t),a=e.getUTCDay(),o=(a<1?7:0)+a-1;return e.setUTCDate(e.getUTCDate()-o),e.setUTCHours(0,0,0,0),e}function i(t){n(1,arguments);var e=r(t),a=e.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(a+1,0,4),i.setUTCHours(0,0,0,0);var u=o(i),s=new Date(0);s.setUTCFullYear(a,0,4),s.setUTCHours(0,0,0,0);var d=o(s);return e.getTime()>=u.getTime()?a+1:e.getTime()>=d.getTime()?a:a-1}t.d({},{q2:()=>st,Kz:()=>ut,Mw:()=>tt,XA:()=>nt,LP:()=>Z,xS:()=>ot,Sr:()=>at,o5:()=>it,L$:()=>rt,n$:()=>et});var u={};function s(){return u}function d(t,e){var o,i,u,d,l,c,m,h;n(1,arguments);var f=s(),g=a(null!==(o=null!==(i=null!==(u=null!==(d=null==e?void 0:e.weekStartsOn)&&void 0!==d?d:null==e||null===(l=e.locale)||void 0===l||null===(c=l.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==u?u:f.weekStartsOn)&&void 0!==i?i:null===(m=f.locale)||void 0===m||null===(h=m.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==o?o:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=r(t),w=v.getUTCDay(),b=(w<g?7:0)+w-g;return v.setUTCDate(v.getUTCDate()-b),v.setUTCHours(0,0,0,0),v}function l(t,e){var o,i,u,l,c,m,h,f;n(1,arguments);var g=r(t),v=g.getUTCFullYear(),w=s(),b=a(null!==(o=null!==(i=null!==(u=null!==(l=null==e?void 0:e.firstWeekContainsDate)&&void 0!==l?l:null==e||null===(c=e.locale)||void 0===c||null===(m=c.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==u?u:w.firstWeekContainsDate)&&void 0!==i?i:null===(h=w.locale)||void 0===h||null===(f=h.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==o?o:1);if(!(b>=1&&b<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var y=new Date(0);y.setUTCFullYear(v+1,0,b),y.setUTCHours(0,0,0,0);var p=d(y,e),T=new Date(0);T.setUTCFullYear(v,0,b),T.setUTCHours(0,0,0,0);var k=d(T,e);return g.getTime()>=p.getTime()?v+1:g.getTime()>=k.getTime()?v:v-1}function c(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const m=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return c("yy"===e?r%100:r,e.length)},h=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):c(n+1,2)},f=function(t,e){return c(t.getUTCDate(),e.length)},g=function(t,e){return c(t.getUTCHours()%12||12,e.length)},v=function(t,e){return c(t.getUTCHours(),e.length)},w=function(t,e){return c(t.getUTCMinutes(),e.length)},b=function(t,e){return c(t.getUTCSeconds(),e.length)},y=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return c(Math.floor(r*Math.pow(10,n-3)),e.length)};var p={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return m(t,e)},Y:function(t,e,n,r){var a=l(t,r),o=a>0?a:1-a;return"YY"===e?c(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):c(o,e.length)},R:function(t,e){return c(i(t),e.length)},u:function(t,e){return c(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return c(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return c(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return h(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return c(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,o,i){var u=function(t,e){n(1,arguments);var o=r(t),i=d(o,e).getTime()-function(t,e){var r,o,i,u,c,m,h,f;n(1,arguments);var g=s(),v=a(null!==(r=null!==(o=null!==(i=null!==(u=null==e?void 0:e.firstWeekContainsDate)&&void 0!==u?u:null==e||null===(c=e.locale)||void 0===c||null===(m=c.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==i?i:g.firstWeekContainsDate)&&void 0!==o?o:null===(h=g.locale)||void 0===h||null===(f=h.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==r?r:1),w=l(t,e),b=new Date(0);return b.setUTCFullYear(w,0,v),b.setUTCHours(0,0,0,0),d(b,e)}(o,e).getTime();return Math.round(i/6048e5)+1}(t,i);return"wo"===e?o.ordinalNumber(u,{unit:"week"}):c(u,e.length)},I:function(t,e,a){var u=function(t){n(1,arguments);var e=r(t),a=o(e).getTime()-function(t){n(1,arguments);var e=i(t),r=new Date(0);return r.setUTCFullYear(e,0,4),r.setUTCHours(0,0,0,0),o(r)}(e).getTime();return Math.round(a/6048e5)+1}(t);return"Io"===e?a.ordinalNumber(u,{unit:"week"}):c(u,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):f(t,e)},D:function(t,e,a){var o=function(t){n(1,arguments);var e=r(t),a=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var o=a-e.getTime();return Math.floor(o/864e5)+1}(t);return"Do"===e?a.ordinalNumber(o,{unit:"dayOfYear"}):c(o,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return c(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return c(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return c(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return g(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):v(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):c(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):c(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):w(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):b(t,e)},S:function(t,e){return y(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return k(a);case"XXXX":case"XX":return S(a);default:return S(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return k(a);case"xxxx":case"xx":return S(a);default:return S(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+T(a,":");default:return"GMT"+S(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+T(a,":");default:return"GMT"+S(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return c(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return c((r._originalDate||t).getTime(),e.length)}};function T(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+c(o,2)}function k(t,e){return t%60==0?(t>0?"-":"+")+c(Math.abs(t)/60,2):S(t,e)}function S(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+c(Math.floor(a/60),2)+n+c(a%60,2)}const M=p;var C=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},x=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},P={p:x,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return C(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",C(a,e)).replace("{{time}}",x(o,e))}};const D=P;var E=["D","DD"],U=["YY","YYYY"];function W(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var q={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function L(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var N,O={date:L({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:L({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:L({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},Y={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function j(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var i=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function F(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,u=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(s)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(u))return n}(s):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(u))return n}(s);return i=t.valueCallback?t.valueCallback(d):d,{value:i=n.valueCallback?n.valueCallback(i):i,rest:e.slice(u.length)}}}const H={code:"en-US",formatDistance:function(t,e,n){var r,a=q[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:O,formatRelative:function(t,e,n,r){return Y[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:j({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:j({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:j({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:j({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:j({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(N={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(N.matchPattern);if(!n)return null;var r=n[0],a=t.match(N.parsePattern);if(!a)return null;var o=N.valueCallback?N.valueCallback(a[0]):a[0];return{value:o=e.valueCallback?e.valueCallback(o):o,rest:t.slice(r.length)}}),era:F({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:F({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:F({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:F({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:F({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var $=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,A=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,B=/^'([^]*?)'?$/,z=/''/g,I=/[a-zA-Z]/;function G(t,o,i){var u,d,l,c,m,h,f,g,v,w,b,y,p,T,k,S,C,x;n(2,arguments);var P=String(o),q=s(),L=null!==(u=null!==(d=null==i?void 0:i.locale)&&void 0!==d?d:q.locale)&&void 0!==u?u:H,N=a(null!==(l=null!==(c=null!==(m=null!==(h=null==i?void 0:i.firstWeekContainsDate)&&void 0!==h?h:null==i||null===(f=i.locale)||void 0===f||null===(g=f.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==m?m:q.firstWeekContainsDate)&&void 0!==c?c:null===(v=q.locale)||void 0===v||null===(w=v.options)||void 0===w?void 0:w.firstWeekContainsDate)&&void 0!==l?l:1);if(!(N>=1&&N<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var O=a(null!==(b=null!==(y=null!==(p=null!==(T=null==i?void 0:i.weekStartsOn)&&void 0!==T?T:null==i||null===(k=i.locale)||void 0===k||null===(S=k.options)||void 0===S?void 0:S.weekStartsOn)&&void 0!==p?p:q.weekStartsOn)&&void 0!==y?y:null===(C=q.locale)||void 0===C||null===(x=C.options)||void 0===x?void 0:x.weekStartsOn)&&void 0!==b?b:0);if(!(O>=0&&O<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!L.localize)throw new RangeError("locale must contain localize property");if(!L.formatLong)throw new RangeError("locale must contain formatLong property");var Y=r(t);if(!function(t){if(n(1,arguments),!function(t){return n(1,arguments),t instanceof Date||"object"===e(t)&&"[object Date]"===Object.prototype.toString.call(t)}(t)&&"number"!=typeof t)return!1;var a=r(t);return!isNaN(Number(a))}(Y))throw new RangeError("Invalid time value");var j=function(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}(Y),F=function(t,e){return n(2,arguments),function(t,e){n(2,arguments);var o=r(t).getTime(),i=a(e);return new Date(o+i)}(t,-a(e))}(Y,j),G={firstWeekContainsDate:N,weekStartsOn:O,locale:L,_originalDate:Y};return P.match(A).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,D[e])(t,L.formatLong):t})).join("").match($).map((function(e){if("''"===e)return"'";var n,r,a=e[0];if("'"===a)return(r=(n=e).match(B))?r[1].replace(z,"'"):n;var u,s=M[a];if(s)return null!=i&&i.useAdditionalWeekYearTokens||(u=e,-1===U.indexOf(u))||W(e,o,String(t)),null!=i&&i.useAdditionalDayOfYearTokens||!function(t){return-1!==E.indexOf(t)}(e)||W(e,o,String(t)),s(F,e,L.localize,G);if(a.match(I))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return e})).join("")}const Q=t=>{localStorage.setItem("user",JSON.stringify(t))},X=()=>{const t=document.querySelector(".footer");t.innerHTML='<p class="form">Что бы добавить комментарий, пройдите авторизацию <button class="footer__button">Авторизация</button></p>',document.querySelector(".footer__button").addEventListener("click",(()=>{console.log("Вы нажали на копнку авторизации"),(()=>{const t=document.querySelector(".app");let e=!1;const n=()=>{let r=` <div class="login-form">\n        <div class="input__style">\n        ${e?'<input id="inputName" type="text" class="add-form-name" placeholder="Введите ваше имя" />':""}\n        <input id="login" type="text" class="add-form-name" placeholder="Введите login" />\n        <input id="password" type="password" class="add-form-text" placeholder="Введите ваш пароль"\n        rows="4"></input>\n        </div>\n        <div class="add-form-row">\n        <button id="buttonPush" class="login-button"> ${e?"Регистрация":"Войти"}</button>\n        <button id="buttonPush" class="mode-button">${e?"Войти":"Регистрация"}</button>\n        </div>\n    </div >`;t.innerHTML=r;const a=document.querySelector(".login-button"),o=document.querySelector(".mode-button");a.addEventListener("click",(()=>{if(e){const t=document.querySelector("#login").value,e=document.querySelector("#password").value,n=document.querySelector("#inputName").value;V(t,e,n).then((()=>{_(nt)}))}else{const t=document.querySelector("#login").value,e=document.querySelector("#password").value;if(!t||!e)return void alert("Введите логин и пароль");K(t,e).then((()=>{_(nt)}))}})),o.addEventListener("click",(()=>{e=!e,n()}))};n()})(),t.innerHTML=" "}))},_=t=>{const e=document.querySelector(".app"),n=t?.map(((t,e)=>`\n          <li class="comment" data-answer="${e}">\n                <div class="comment-header">\n                  <div>${t.name}</div>\n                  <div>${t.date}</div>\n                </div>\n                <div class="comment-body">\n                ${t.isEdit?`<input value='${t.comment}'>`:`<div data-comment='${e}' class="comment-text" >\n                ${t.comment}\n                \n                \n              </div > `}\n\n    \n                  \n                </div >\n    <div class="comment-footer">\n    <button data-answer="${e}" class="answer-button">Ответить</button>\n        <button data-edit="${e}" class="edit-button">${t.isEdit?"Сохранить":"Редактировать"}</button>\n        <button data-index='${e}' class="delete-button">Удалить</button>\n        \n\n        <div class="likes">\n            <span class="likes-counter">${t.like}</span>\n            <button data-index='${e}' class="like-button ${t.paint}"</button>\n\n    </div>\n                </div >\n                \n              </li >\n    `)).join(""),r=`<ul id="ul" class="comments">\n    ${n}\n  </ul>`;e.innerHTML=r,it(),ot(),at(),ut(),console.log(tt),tt?(()=>{const t=document.querySelector(".footer");console.log(tt),t.innerHTML=` <div class="add-form" id="form-add" >\n    <input id="inputName" type="text" class="add-form-name" value="${tt.user.name}" disabled placeholder="Введите ваше имя" />\n    <textarea id="inputText" type="textarea" class="add-form-text" placeholder="Введите ваш коментарий"\n    rows="4"></textarea>\n    <div class="add-form-row">\n    <button id="buttonPush" class="add-form-button">Написать</button>\n    </div>\n</div >`,st()})():X()},J=()=>{fetch("https://wedev-api.sky.pro/api/v2/:kolesnikova-anastasiia/comments",{method:"GET"}).then((t=>{if(500===t.status)throw new Error("Ошибка сервера");return t.json()})).then((t=>{let e=t.comments.map((t=>{const e=new Date(t.date),n=G(e,"yyyy-MM-dd hh.mm.ss");return console.log(n),{comment:t.text,name:t.author.name,like:t.likes,userLike:t.isLiked,date:e.toLocaleString()}}));rt(e),_(nt)})).catch((t=>{"Failed to fetch"===t.message?alert("Проблемы с интернетом"):alert(t.message)}))};J();const R=()=>{const t=document.getElementById("inputName"),e=document.getElementById("inputText"),n=document.getElementById("buttonPush");fetch("https://wedev-api.sky.pro/api/v2/:kolesnikova-anastasiia/comments",{method:"POST",body:JSON.stringify({text:e.value.replaceAll("<","&lt;").replaceAll(">","&gt;"),name:t.value.replaceAll("<","&lt;").replaceAll(">","&gt;"),forceError:!0}),headers:{Authorization:Z()}}).then((r=>{if(500===r.status)R();else if(400===r.status)throw new Error("Имя или текст комментария должны иметь 3 и более символов");r.ok&&(t.value="",e.value="",n.disabled=!0),J()})).catch((t=>{"Failed to fetch"===t.message?alert("Проблемы с интернетом"):alert(`${t.message}`)})).finally((()=>{setTimeout((function(){}),1e3)}))},K=(t,e)=>fetch("https://wedev-api.sky.pro/api/user/login",{method:"POST",body:JSON.stringify({login:t,password:e})}).then((t=>{if(500===t.status)throw new Error("Ошибка сервера");if(400===t.status)throw new Error("Невыерный логин или пароль");return t.json()})).then((t=>{et(t),Q(t),console.log(tt)})).catch((t=>{"Failed to fetch"===t.message?alert("Проблемы с интернетом"):alert(t.message)})),V=(t,e,n)=>fetch("https://wedev-api.sky.pro/api/user/",{method:"POST",body:JSON.stringify({login:t,password:e,name:n})}).then((t=>{if(500===t.status)throw new Error("Ошибка сервера");if(400===t.status)throw new Error("Пользователь с таким логином уже существует");return t.json()})).then((t=>{et(t),Q(t),console.log(tt)})).catch((t=>{"Failed to fetch"===t.message?alert("Проблемы с интернетом"):alert(t.message)}));function Z(){return`Bearer ${tt.user.token}`}document.getElementById("inputName"),document.getElementById("inputText"),document.getElementById("buttonPush");let tt=JSON.parse(localStorage.getItem("user"));const et=t=>{tt=t};let nt=[];J();const rt=t=>{nt=t},at=()=>{let t=document.querySelectorAll(".edit-button");for(const e of t){const t=e.dataset.edit,n=nt[t].isEdit;console.log(n),n?e.addEventListener("click",(t=>{document.querySelector(".text-comment"),t.stopPropagation();const n=e.dataset.edit,r=(nt[n].comment,document.querySelector("input"));nt[n].comment=r.value,nt[n].isEdit=!1,_(nt)})):e.addEventListener("click",(t=>{t.stopPropagation();const n=e.dataset.edit;nt[n].isEdit=!0,_(nt)}))}},ot=()=>{const t=document.querySelectorAll(".delete-button");for(const e of t)e.addEventListener("click",(t=>{t.stopPropagation(),console.log("Удаляю элемент...");const n=e.dataset.index;console.log(n),nt.splice(n,1),_(nt)}))};ot();const it=()=>{const t=document.querySelectorAll(".like-button");for(const e of t)e.addEventListener("click",(t=>{t.stopPropagation();const n=e.dataset.index;!1===nt[n].userLike?(nt[n].paint="-active-like",nt[n].like+=1,nt[n].userLike=!0):(nt[n].paint="",nt[n].like-=1,nt[n].userLike=!1),_(nt)}))},ut=()=>{const t=document.querySelectorAll(".answer-button");for(const e of t)e.addEventListener("click",(t=>{t.stopPropagation();const n=e.dataset.answer;document.querySelector(".add-form-text").value=`${nt[n].name} \n ${nt[n].comment}`,_(nt)}))};function st(){const t=document.getElementById("inputName"),e=document.getElementById("inputText");document.getElementById("buttonPush").addEventListener("click",(()=>{if(t.classList.remove("error"),e.classList.remove("error"),""===(t.value||e.value))return t.classList.add("error"),void e.classList.add("error");R()}))}ut(),document.getElementById("textElement"),document.addEventListener("keyup",(function(t){t.preventDefault(),13===t.keyCode&&document.getElementById("buttonPush").click()}))})();