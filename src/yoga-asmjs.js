export default function instantiate(info) {
function Table(ret) {
  // grow method not included; table is not growable
  ret.set = function(i, func) {
    this[i] = func;
  };
  ret.get = function(i) {
    return this[i];
  };
  return ret;
}

  var bufferView;
  var base64ReverseLookup = new Uint8Array(123/*'z'+1*/);
  for (var i = 25; i >= 0; --i) {
    base64ReverseLookup[48+i] = 52+i; // '0-9'
    base64ReverseLookup[65+i] = i; // 'A-Z'
    base64ReverseLookup[97+i] = 26+i; // 'a-z'
  }
  base64ReverseLookup[43] = 62; // '+'
  base64ReverseLookup[47] = 63; // '/'
  /** @noinline Inlining this function would mean expanding the base64 string 4x times in the source code, which Closure seems to be happy to do. */
  function base64DecodeToExistingUint8Array(uint8Array, offset, b64) {
    var b1, b2, i = 0, j = offset, bLength = b64.length, end = offset + (bLength*3>>2) - (b64[bLength-2] == '=') - (b64[bLength-1] == '=');
    for (; i < bLength; i += 4) {
      b1 = base64ReverseLookup[b64.charCodeAt(i+1)];
      b2 = base64ReverseLookup[b64.charCodeAt(i+2)];
      uint8Array[j++] = base64ReverseLookup[b64.charCodeAt(i)] << 2 | b1 >> 4;
      if (j < end) uint8Array[j++] = b1 << 4 | b2 >> 2;
      if (j < end) uint8Array[j++] = b2 << 6 | base64ReverseLookup[b64.charCodeAt(i+3)];
    }
  }
function initActiveSegments(imports) {
  base64DecodeToExistingUint8Array(bufferView, 1024, "T25seSBsZWFmIG5vZGVzIHdpdGggY3VzdG9tIG1lYXN1cmUgZnVuY3Rpb25zIHNob3VsZCBtYW51YWxseSBtYXJrIHRoZW1zZWx2ZXMgYXMgZGlydHkAaXNEaXJ0eQBtYXJrRGlydHkAZGVzdHJveQBzZXREaXNwbGF5AGdldERpc3BsYXkAc2V0RmxleAAtKyAgIDBYMHgALTBYKzBYIDBYLTB4KzB4IDB4AHNldEZsZXhHcm93AGdldEZsZXhHcm93AHNldE92ZXJmbG93AGdldE92ZXJmbG93AGhhc05ld0xheW91dABjYWxjdWxhdGVMYXlvdXQAZ2V0Q29tcHV0ZWRMYXlvdXQAdW5zaWduZWQgc2hvcnQAZ2V0Q2hpbGRDb3VudAB1bnNpZ25lZCBpbnQAc2V0SnVzdGlmeUNvbnRlbnQAZ2V0SnVzdGlmeUNvbnRlbnQAYXZhaWxhYmxlSGVpZ2h0IGlzIGluZGVmaW5pdGUgc28gaGVpZ2h0U2l6aW5nTW9kZSBtdXN0IGJlIFNpemluZ01vZGU6Ok1heENvbnRlbnQAYXZhaWxhYmxlV2lkdGggaXMgaW5kZWZpbml0ZSBzbyB3aWR0aFNpemluZ01vZGUgbXVzdCBiZSBTaXppbmdNb2RlOjpNYXhDb250ZW50AHNldEFsaWduQ29udGVudABnZXRBbGlnbkNvbnRlbnQAZ2V0UGFyZW50AGltcGxlbWVudABzZXRNYXhIZWlnaHRQZXJjZW50AHNldEhlaWdodFBlcmNlbnQAc2V0TWluSGVpZ2h0UGVyY2VudABzZXRGbGV4QmFzaXNQZXJjZW50AHNldEdhcFBlcmNlbnQAc2V0UG9zaXRpb25QZXJjZW50AHNldE1hcmdpblBlcmNlbnQAc2V0TWF4V2lkdGhQZXJjZW50AHNldFdpZHRoUGVyY2VudABzZXRNaW5XaWR0aFBlcmNlbnQAc2V0UGFkZGluZ1BlcmNlbnQAaGFuZGxlLnR5cGUoKSA9PSBTdHlsZVZhbHVlSGFuZGxlOjpUeXBlOjpQb2ludCB8fCBoYW5kbGUudHlwZSgpID09IFN0eWxlVmFsdWVIYW5kbGU6OlR5cGU6OlBlcmNlbnQAY3JlYXRlRGVmYXVsdAB1bml0AHJpZ2h0AGhlaWdodABzZXRNYXhIZWlnaHQAZ2V0TWF4SGVpZ2h0AHNldEhlaWdodABnZXRIZWlnaHQAc2V0TWluSGVpZ2h0AGdldE1pbkhlaWdodABnZXRDb21wdXRlZEhlaWdodABnZXRDb21wdXRlZFJpZ2h0AGxlZnQAZ2V0Q29tcHV0ZWRMZWZ0AHJlc2V0AF9fZGVzdHJ1Y3QAZmxvYXQAdWludDY0X3QAdXNlV2ViRGVmYXVsdHMAc2V0VXNlV2ViRGVmYXVsdHMAc2V0QWxpZ25JdGVtcwBnZXRBbGlnbkl0ZW1zAHNldEZsZXhCYXNpcwBnZXRGbGV4QmFzaXMAQ2Fubm90IGdldCBsYXlvdXQgcHJvcGVydGllcyBvZiBtdWx0aS1lZGdlIHNob3J0aGFuZHMAc2V0UG9pbnRTY2FsZUZhY3RvcgBNZWFzdXJlQ2FsbGJhY2tXcmFwcGVyAERpcnRpZWRDYWxsYmFja1dyYXBwZXIAQ2Fubm90IHJlc2V0IGEgbm9kZSBzdGlsbCBhdHRhY2hlZCB0byBhIG93bmVyAHNldEJvcmRlcgBnZXRCb3JkZXIAZ2V0Q29tcHV0ZWRCb3JkZXIAZ2V0TnVtYmVyAGhhbmRsZS50eXBlKCkgPT0gU3R5bGVWYWx1ZUhhbmRsZTo6VHlwZTo6TnVtYmVyAHVuc2lnbmVkIGNoYXIAdG9wAGdldENvbXB1dGVkVG9wAHNldEZsZXhXcmFwAGdldEZsZXhXcmFwAHNldEdhcABnZXRHYXAAJXAAc2V0SGVpZ2h0QXV0bwBzZXRGbGV4QmFzaXNBdXRvAHNldFBvc2l0aW9uQXV0bwBzZXRNYXJnaW5BdXRvAHNldFdpZHRoQXV0bwBTY2FsZSBmYWN0b3Igc2hvdWxkIG5vdCBiZSBsZXNzIHRoYW4gemVybwBzZXRBc3BlY3RSYXRpbwBnZXRBc3BlY3RSYXRpbwBzZXRQb3NpdGlvbgBnZXRQb3NpdGlvbgBub3RpZnlPbkRlc3RydWN0aW9uAHNldEZsZXhEaXJlY3Rpb24AZ2V0RmxleERpcmVjdGlvbgBzZXREaXJlY3Rpb24AZ2V0RGlyZWN0aW9uAHNldE1hcmdpbgBnZXRNYXJnaW4AZ2V0Q29tcHV0ZWRNYXJnaW4AbWFya0xheW91dFNlZW4AbmFuAGJvdHRvbQBnZXRDb21wdXRlZEJvdHRvbQBib29sAGVtc2NyaXB0ZW46OnZhbABzZXRGbGV4U2hyaW5rAGdldEZsZXhTaHJpbmsAc2V0QWx3YXlzRm9ybXNDb250YWluaW5nQmxvY2sATWVhc3VyZUNhbGxiYWNrAERpcnRpZWRDYWxsYmFjawBnZXRMZW5ndGgAd2lkdGgAc2V0TWF4V2lkdGgAZ2V0TWF4V2lkdGgAc2V0V2lkdGgAZ2V0V2lkdGgAc2V0TWluV2lkdGgAZ2V0TWluV2lkdGgAZ2V0Q29tcHV0ZWRXaWR0aABwdXNoAC9ob21lL3J1bm5lci93b3JrL3lvZ2EveW9nYS9qYXZhc2NyaXB0Ly4uL3lvZ2Evc3R5bGUvU21hbGxWYWx1ZUJ1ZmZlci5oAC9ob21lL3J1bm5lci93b3JrL3lvZ2EveW9nYS9qYXZhc2NyaXB0Ly4uL3lvZ2Evc3R5bGUvU3R5bGVWYWx1ZVBvb2wuaAB1bnNpZ25lZCBsb25nAHNldEJveFNpemluZwBnZXRCb3hTaXppbmcAc3RkOjp3c3RyaW5nAHN0ZDo6c3RyaW5nAHN0ZDo6dTE2c3RyaW5nAHN0ZDo6dTMyc3RyaW5nAHNldFBhZGRpbmcAZ2V0UGFkZGluZwBnZXRDb21wdXRlZFBhZGRpbmcAVHJpZWQgdG8gY29uc3RydWN0IFlHTm9kZSB3aXRoIG51bGwgY29uZmlnAEF0dGVtcHRpbmcgdG8gY29uc3RydWN0IE5vZGUgd2l0aCBudWxsIGNvbmZpZwBjcmVhdGVXaXRoQ29uZmlnAGluZgBzZXRBbGlnblNlbGYAZ2V0QWxpZ25TZWxmAFNpemUAdmFsdWUAVmFsdWUAY3JlYXRlAG1lYXN1cmUAc2V0UG9zaXRpb25UeXBlAGdldFBvc2l0aW9uVHlwZQBpc1JlZmVyZW5jZUJhc2VsaW5lAHNldElzUmVmZXJlbmNlQmFzZWxpbmUAY29weVN0eWxlAGRvdWJsZQBOb2RlAGV4dGVuZABpbnNlcnRDaGlsZABnZXRDaGlsZAByZW1vdmVDaGlsZAB2b2lkAHNldEV4cGVyaW1lbnRhbEZlYXR1cmVFbmFibGVkAGlzRXhwZXJpbWVudGFsRmVhdHVyZUVuYWJsZWQAZGlydGllZABDYW5ub3QgcmVzZXQgYSBub2RlIHdoaWNoIHN0aWxsIGhhcyBjaGlsZHJlbiBhdHRhY2hlZAB1bnNldE1lYXN1cmVGdW5jAHVuc2V0RGlydGllZEZ1bmMAc2V0RXJyYXRhAGdldEVycmF0YQBNZWFzdXJlIGZ1bmN0aW9uIHJldHVybmVkIGFuIGludmFsaWQgZGltZW5zaW9uIHRvIFlvZ2E6IFt3aWR0aD0lZiwgaGVpZ2h0PSVmXQBFeHBlY3QgY3VzdG9tIGJhc2VsaW5lIGZ1bmN0aW9uIHRvIG5vdCByZXR1cm4gTmFOAE5BTgBJTkYAZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8c2hvcnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIHNob3J0PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIGludD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8ZmxvYXQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVpbnQ4X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludDhfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dWludDE2X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludDE2X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVpbnQzMl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQzMl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBjaGFyPgBzdGQ6OmJhc2ljX3N0cmluZzx1bnNpZ25lZCBjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxzaWduZWQgY2hhcj4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8bG9uZz4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgbG9uZz4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8ZG91YmxlPgBDaGlsZCBhbHJlYWR5IGhhcyBhIG93bmVyLCBpdCBtdXN0IGJlIHJlbW92ZWQgZmlyc3QuAENhbm5vdCBzZXQgbWVhc3VyZSBmdW5jdGlvbjogTm9kZXMgd2l0aCBtZWFzdXJlIGZ1bmN0aW9ucyBjYW5ub3QgaGF2ZSBjaGlsZHJlbi4AQ2Fubm90IGFkZCBjaGlsZDogTm9kZXMgd2l0aCBtZWFzdXJlIGZ1bmN0aW9ucyBjYW5ub3QgaGF2ZSBjaGlsZHJlbi4AKG51bGwpAGluZGV4IDwgNDA5NiAmJiAiU21hbGxWYWx1ZUJ1ZmZlciBjYW4gb25seSBob2xkIHVwIHRvIDQwOTYgY2h1bmtzIgAlcwoAAQAAAAMAAAAAAAAAAgAAAAMAAAABAAAAAgAAAAAAAAABAAAAAQ==");
  base64DecodeToExistingUint8Array(bufferView, 4876, "aWkAdgB2aQ==");
  base64DecodeToExistingUint8Array(bufferView, 4896, "ox0AAKEdAADhHQAA2x0AAOEdAADbHQAAaWlpZmlmaQDUHQAApB0AAHZpaQClHQAA6B0AAGlpaQ==");
  base64DecodeToExistingUint8Array(bufferView, 4960, "xAAAAMUAAADG");
  base64DecodeToExistingUint8Array(bufferView, 4980, "xAAAAMcAAADIAAAA1B0=");
  base64DecodeToExistingUint8Array(bufferView, 5008, "ox0AAOEdAADbHQAA4R0AANsdAADoHQAA4x0AAOgdAABpaWlpAAAAANQdAAC5HQAA1B0AALsdAAC8HQAA6B0=");
  base64DecodeToExistingUint8Array(bufferView, 5080, "yQAAAMoAAADL");
  base64DecodeToExistingUint8Array(bufferView, 5100, "yQAAAMwAAADIAAAAvx0AANQdAAC/HQ==");
  base64DecodeToExistingUint8Array(bufferView, 5136, "1B0AAL8dAADbHQAA1R0AAHZpaWlpAAAA1B0AAL8dAADhHQAAdmlpZgAAAADUHQAAvx0AANsdAAB2aWlpAAAAANQdAAC/HQAA1R0AANUdAADAHQAA2x0AANsdAADAHQAA1R0AAMAdAABpAGRpaQB2aWlkAADEHQAAxB0AAL8dAADUHQAAxB0AANQdAADEHQAAwx0AANQdAADEHQAA2x0AANQdAADEHQAA2x0AAOIdAAB2aWlpZAAAANQdAADEHQAA4h0AANsdAADFHQAAwh0AAMUdAADbHQAAwh0AAMUdAADiHQAAxR0AAOIdAADFHQAA2x0AAGRpaWkAAAAA4R0AAMQdAADbHQAAZmlpaQAAAADUHQAAxB0AAMQdAADcHQAA1B0AAMQdAADEHQAA3B0AAMUdAADEHQAAxB0AAMQdAADEHQAA3B0AANQdAADEHQAA1R0AANUdAADEHQAA1B0AAMQdAAChHQAA1B0AAMQdAAC5HQAA1R0AAMUdAAAAAAAA1B0AAMQdAADiHQAA4h0AANsdAAB2aWlkZGkAAMEdAADFHQ==");
  base64DecodeToExistingUint8Array(bufferView, 5568, "GQAKABkZGQAAAAAFAAAAAAAACQAAAAALAAAAAAAAAAAZABEKGRkZAwoHAAEACQsYAAAJBgsAAAsABhkAAAAZGRk=");
  base64DecodeToExistingUint8Array(bufferView, 5649, "DgAAAAAAAAAAGQAKDRkZGQANAAACAAkOAAAACQAOAAAO");
  base64DecodeToExistingUint8Array(bufferView, 5707, "DA==");
  base64DecodeToExistingUint8Array(bufferView, 5719, "EwAAAAATAAAAAAkMAAAAAAAMAAAM");
  base64DecodeToExistingUint8Array(bufferView, 5765, "EA==");
  base64DecodeToExistingUint8Array(bufferView, 5777, "DwAAAAQPAAAAAAkQAAAAAAAQAAAQ");
  base64DecodeToExistingUint8Array(bufferView, 5823, "Eg==");
  base64DecodeToExistingUint8Array(bufferView, 5835, "EQAAAAARAAAAAAkSAAAAAAASAAASAAAaAAAAGhoa");
  base64DecodeToExistingUint8Array(bufferView, 5890, "GgAAABoaGgAAAAAAAAk=");
  base64DecodeToExistingUint8Array(bufferView, 5939, "FA==");
  base64DecodeToExistingUint8Array(bufferView, 5951, "FwAAAAAXAAAAAAkUAAAAAAAUAAAU");
  base64DecodeToExistingUint8Array(bufferView, 5997, "Fg==");
  base64DecodeToExistingUint8Array(bufferView, 6009, "FQAAAAAVAAAAAAkWAAAAAAAWAAAWAAAwMTIzNDU2Nzg5QUJDREVG");
  base64DecodeToExistingUint8Array(bufferView, 6084, "0g==");
  base64DecodeToExistingUint8Array(bufferView, 6124, "//////////8=");
  base64DecodeToExistingUint8Array(bufferView, 6192, "ECIBAAAAAAAF");
  base64DecodeToExistingUint8Array(bufferView, 6212, "zQ==");
  base64DecodeToExistingUint8Array(bufferView, 6236, "zgAAAM8AAAD8HQ==");
  base64DecodeToExistingUint8Array(bufferView, 6260, "Ag==");
  base64DecodeToExistingUint8Array(bufferView, 6276, "//////////8=");
  base64DecodeToExistingUint8Array(bufferView, 6344, "BQ==");
  base64DecodeToExistingUint8Array(bufferView, 6356, "0A==");
  base64DecodeToExistingUint8Array(bufferView, 6380, "zgAAANEAAAAIHgAAAAQ=");
  base64DecodeToExistingUint8Array(bufferView, 6404, "AQ==");
  base64DecodeToExistingUint8Array(bufferView, 6420, "/////wo=");
  base64DecodeToExistingUint8Array(bufferView, 6488, "0w==");
}

  var scratchBuffer = new ArrayBuffer(16);
  var i32ScratchView = new Int32Array(scratchBuffer);
  var f32ScratchView = new Float32Array(scratchBuffer);
  var f64ScratchView = new Float64Array(scratchBuffer);
  
  function wasm2js_scratch_load_i32(index) {
    return i32ScratchView[index];
  }
      
  function wasm2js_scratch_store_i32(index, value) {
    i32ScratchView[index] = value;
  }
      
  function wasm2js_scratch_load_f64() {
    return f64ScratchView[0];
  }
      
  function wasm2js_scratch_store_f64(value) {
    f64ScratchView[0] = value;
  }
      function wasm2js_trap() { throw new Error('abort'); }

  function wasm2js_scratch_load_f32() {
    return f32ScratchView[2];
  }
      
function asmFunc(imports) {
 var buffer = new ArrayBuffer(16777216);
 var HEAP8 = new Int8Array(buffer);
 var HEAP16 = new Int16Array(buffer);
 var HEAP32 = new Int32Array(buffer);
 var HEAPU8 = new Uint8Array(buffer);
 var HEAPU16 = new Uint16Array(buffer);
 var HEAPU32 = new Uint32Array(buffer);
 var HEAPF32 = new Float32Array(buffer);
 var HEAPF64 = new Float64Array(buffer);
 var Math_imul = Math.imul;
 var Math_fround = Math.fround;
 var Math_abs = Math.abs;
 var Math_clz32 = Math.clz32;
 var Math_min = Math.min;
 var Math_max = Math.max;
 var Math_floor = Math.floor;
 var Math_ceil = Math.ceil;
 var Math_trunc = Math.trunc;
 var Math_sqrt = Math.sqrt;
 var a = imports.a;
 var fimport$0 = a.a;
 var fimport$1 = a.b;
 var fimport$2 = a.c;
 var fimport$3 = a.d;
 var fimport$4 = a.e;
 var fimport$5 = a.f;
 var fimport$6 = a.g;
 var fimport$7 = a.h;
 var fimport$8 = a.i;
 var fimport$9 = a.j;
 var fimport$10 = a.k;
 var fimport$11 = a.l;
 var fimport$12 = a.m;
 var fimport$13 = a.n;
 var fimport$14 = a.o;
 var fimport$15 = a.p;
 var fimport$16 = a.q;
 var fimport$17 = a.r;
 var fimport$18 = a.s;
 var fimport$19 = a.t;
 var fimport$20 = a.u;
 var fimport$21 = a.v;
 var fimport$22 = a.w;
 var fimport$23 = a.x;
 var fimport$24 = a.y;
 var fimport$25 = a.z;
 var fimport$26 = a.A;
 var fimport$27 = a.B;
 var fimport$28 = a.C;
 var fimport$29 = a.D;
 var global$0 = 74256;
 var global$1 = 0;
 var __wasm_intrinsics_temp_i64 = 0;
 var __wasm_intrinsics_temp_i64$hi = 0;
 var i64toi32_i32$HIGH_BITS = 0;
 // EMSCRIPTEN_START_FUNCS
;
 function $0($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $0_1 = $0_1 ? $0_1 : 1;
  block : {
   label : while (1) {
    $1_1 = $67($0_1 | 0) | 0;
    if ($1_1) {
     break block
    }
    $1_1 = HEAP32[8712 >> 2] | 0;
    if ($1_1) {
     FUNCTION_TABLE[$1_1 | 0]();
     continue label;
    }
    break label;
   };
   fimport$2();
   wasm2js_trap();
  }
  return $1_1 | 0;
 }
 
 function $1($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = Math_fround(0), $4_1 = Math_fround(0), $6_1 = 0, $5_1 = 0, $7_1 = 0, $23_1 = Math_fround(0);
  $4_1 = Math_fround(NaN);
  block3 : {
   block : {
    block1 : {
     block2 : {
      $6_1 = $2_1 & 7 | 0;
      switch ($6_1 | 0) {
      case 0:
       break block;
      case 4:
       break block2;
      default:
       break block1;
      };
     }
     $5_1 = 3;
     break block;
    }
    if (($6_1 - 1 | 0) >>> 0 >= 2 >>> 0) {
     break block3
    }
    $7_1 = ($2_1 & 65520 | 0) >>> 4 | 0;
    block4 : {
     if ($2_1 & 8 | 0) {
      $23_1 = (wasm2js_scratch_store_i32(2, $128($1_1 | 0, $7_1 | 0) | 0), wasm2js_scratch_load_f32());
      break block4;
     }
     $1_1 = $7_1 & 2047 | 0;
     $23_1 = Math_fround((($2_1 << 16 >> 16 | 0) < (0 | 0) ? 0 - $1_1 | 0 : $1_1) | 0);
    }
    $3_1 = $23_1;
    if (($6_1 | 0) == (1 | 0)) {
     if ($3_1 != $3_1) {
      break block
     }
     $1_1 = $3_1 == Math_fround(Infinity) | $3_1 == Math_fround(-Infinity) | 0;
     $4_1 = $1_1 ? Math_fround(NaN) : $3_1;
     $5_1 = !$1_1;
     break block;
    }
    if ($3_1 != $3_1) {
     break block
    }
    $1_1 = $3_1 == Math_fround(Infinity) | $3_1 == Math_fround(-Infinity) | 0;
    $5_1 = $1_1 ? 0 : 2;
    $4_1 = $1_1 ? Math_fround(NaN) : $3_1;
   }
   HEAP8[($0_1 + 4 | 0) >> 0] = $5_1;
   HEAPF32[$0_1 >> 2] = $4_1;
   return;
  }
  fimport$11(1780 | 0, 3113 | 0, 58 | 0, 2937 | 0);
  wasm2js_trap();
 }
 
 function $2($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = Math_fround(0), $3_1 = 0;
  $2_1 = Math_fround(NaN);
  block : {
   switch ($1_1 & 7 | 0 | 0) {
   default:
    fimport$11(2372 | 0, 3113 | 0, 73 | 0, 2362 | 0);
    wasm2js_trap();
   case 3:
    $3_1 = ($1_1 & 65520 | 0) >>> 4 | 0;
    if ($1_1 & 8 | 0) {
     return Math_fround((wasm2js_scratch_store_i32(2, $128($0_1 | 0, $3_1 | 0) | 0), wasm2js_scratch_load_f32()))
    }
    $0_1 = $3_1 & 2047 | 0;
    $2_1 = Math_fround((($1_1 << 16 >> 16 | 0) < (0 | 0) ? 0 - $0_1 | 0 : $0_1) | 0);
    break;
   case 0:
    break block;
   };
  }
  return Math_fround($2_1);
 }
 
 function $3($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = Math_fround($3_1);
  var $4_1 = 0, $5_1 = Math_fround(0);
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  $10($4_1 + 8 | 0 | 0, $0_1 | 0, (($1_1 & 254 | 0 | 0) != (2 | 0) ? 3 : (($2_1 | 0) != (2 | 0)) << 1 | 0) | 0, $2_1 | 0);
  $5_1 = Math_fround(NaN);
  block2 : {
   block1 : {
    switch ((HEAPU8[($4_1 + 12 | 0) >> 0] | 0) - 1 | 0 | 0) {
    case 0:
     $5_1 = Math_fround(HEAPF32[($4_1 + 8 | 0) >> 2]);
     break block2;
    case 1:
     break block1;
    default:
     break block2;
    };
   }
   $5_1 = Math_fround(Math_fround(Math_fround(HEAPF32[($4_1 + 8 | 0) >> 2]) * $3_1) * Math_fround(.009999999776482582));
  }
  global$0 = $4_1 + 16 | 0;
  return Math_fround($5_1 == $5_1 ? $5_1 : Math_fround(0.0));
 }
 
 function $4($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = Math_fround($3_1);
  var $4_1 = 0, $5_1 = Math_fround(0);
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  $10($4_1 + 8 | 0 | 0, $0_1 | 0, (($1_1 & 254 | 0 | 0) != (2 | 0) ? 1 : (($2_1 | 0) == (2 | 0)) << 1 | 0) | 0, $2_1 | 0);
  $5_1 = Math_fround(NaN);
  block2 : {
   block1 : {
    switch ((HEAPU8[($4_1 + 12 | 0) >> 0] | 0) - 1 | 0 | 0) {
    case 0:
     $5_1 = Math_fround(HEAPF32[($4_1 + 8 | 0) >> 2]);
     break block2;
    case 1:
     break block1;
    default:
     break block2;
    };
   }
   $5_1 = Math_fround(Math_fround(Math_fround(HEAPF32[($4_1 + 8 | 0) >> 2]) * $3_1) * Math_fround(.009999999776482582));
  }
  global$0 = $4_1 + 16 | 0;
  return Math_fround($5_1 == $5_1 ? $5_1 : Math_fround(0.0));
 }
 
 function $5($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, $4_1 = 0, $3_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$4 = 0, $76_1 = 0, $5_1 = 0, $17_1 = 0, $67_1 = 0, $119_1 = 0, $119$hi = 0, $121$hi = 0, $122$hi = 0, $123_1 = 0;
  if ($0_1) {
   $1_1 = $0_1 - 4 | 0;
   $5_1 = HEAP32[$1_1 >> 2] | 0;
   $3_1 = $5_1;
   $2_1 = $1_1;
   $0_1 = HEAP32[($0_1 - 8 | 0) >> 2] | 0;
   $4_1 = $0_1 & -2 | 0;
   if (($0_1 | 0) != ($4_1 | 0)) {
    $2_1 = $1_1 - $4_1 | 0;
    $0_1 = HEAP32[($2_1 + 4 | 0) >> 2] | 0;
    HEAP32[($0_1 + 8 | 0) >> 2] = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
    HEAP32[((HEAP32[($2_1 + 8 | 0) >> 2] | 0) + 4 | 0) >> 2] = $0_1;
    $3_1 = $4_1 + $3_1 | 0;
   }
   $4_1 = $1_1 + $5_1 | 0;
   $1_1 = HEAP32[$4_1 >> 2] | 0;
   if (($1_1 | 0) != (HEAP32[(($1_1 + $4_1 | 0) - 4 | 0) >> 2] | 0 | 0)) {
    $0_1 = HEAP32[($4_1 + 4 | 0) >> 2] | 0;
    HEAP32[($0_1 + 8 | 0) >> 2] = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
    HEAP32[((HEAP32[($4_1 + 8 | 0) >> 2] | 0) + 4 | 0) >> 2] = $0_1;
    $3_1 = $1_1 + $3_1 | 0;
   }
   HEAP32[$2_1 >> 2] = $3_1;
   HEAP32[((($3_1 & -4 | 0) + $2_1 | 0) - 4 | 0) >> 2] = $3_1 | 1 | 0;
   $67_1 = $2_1;
   block : {
    $1_1 = (HEAP32[$2_1 >> 2] | 0) - 8 | 0;
    if ($1_1 >>> 0 <= 127 >>> 0) {
     $76_1 = ($1_1 >>> 3 | 0) - 1 | 0;
     break block;
    }
    $0_1 = Math_clz32($1_1);
    $76_1 = ((($1_1 >>> (29 - $0_1 | 0) | 0) ^ 4 | 0) - ($0_1 << 2 | 0) | 0) + 110 | 0;
    if ($1_1 >>> 0 <= 4095 >>> 0) {
     break block
    }
    $0_1 = ((($1_1 >>> (30 - $0_1 | 0) | 0) ^ 2 | 0) - ($0_1 << 1 | 0) | 0) + 71 | 0;
    $76_1 = $0_1 >>> 0 >= 63 >>> 0 ? 63 : $0_1;
   }
   $1_1 = $76_1;
   $0_1 = $1_1 << 4 | 0;
   HEAP32[($67_1 + 4 | 0) >> 2] = $0_1 + 6496 | 0;
   $0_1 = $0_1 + 6504 | 0;
   HEAP32[($2_1 + 8 | 0) >> 2] = HEAP32[$0_1 >> 2] | 0;
   HEAP32[$0_1 >> 2] = $2_1;
   HEAP32[((HEAP32[($2_1 + 8 | 0) >> 2] | 0) + 4 | 0) >> 2] = $2_1;
   i64toi32_i32$2 = 7528;
   i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
   i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
   $119_1 = i64toi32_i32$0;
   $119$hi = i64toi32_i32$1;
   i64toi32_i32$1 = 0;
   $121$hi = i64toi32_i32$1;
   i64toi32_i32$1 = 0;
   i64toi32_i32$2 = 1;
   i64toi32_i32$0 = $121$hi;
   i64toi32_i32$4 = $1_1 & 31 | 0;
   if (32 >>> 0 <= ($1_1 & 63 | 0) >>> 0) {
    i64toi32_i32$0 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
    $17_1 = 0;
   } else {
    i64toi32_i32$0 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
    $17_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   }
   $122$hi = i64toi32_i32$0;
   i64toi32_i32$0 = $119$hi;
   i64toi32_i32$1 = $119_1;
   i64toi32_i32$2 = $122$hi;
   i64toi32_i32$2 = i64toi32_i32$0 | i64toi32_i32$2 | 0;
   $123_1 = i64toi32_i32$1 | $17_1 | 0;
   i64toi32_i32$1 = 7528;
   HEAP32[i64toi32_i32$1 >> 2] = $123_1;
   HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$2;
  }
 }
 
 function $6() {
  FUNCTION_TABLE[HEAP32[6488 >> 2] | 0 | 0]();
  $58();
  wasm2js_trap();
 }
 
 function $7($0_1, $1_1, $2_1, $3_1, $4_1, $5_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = Math_fround($3_1);
  $4_1 = Math_fround($4_1);
  $5_1 = Math_fround($5_1);
  var $6_1 = Math_fround(0), $7_1 = 0, $8_1 = 0;
  $7_1 = $0_1 + 20 | 0;
  $8_1 = $1_1 >>> 0 < 2 >>> 0;
  $6_1 = Math_fround($23($7_1 | 0, $2_1 | 0, $8_1 | 0, Math_fround($4_1), Math_fround($5_1)));
  block : {
   $4_1 = Math_fround($15($7_1 | 0, $2_1 | 0, $8_1 | 0, Math_fround($4_1), Math_fround($5_1)));
   if ($4_1 >= Math_fround(0.0) & $3_1 > $4_1 | 0) {
    break block
   }
   if (!($6_1 >= Math_fround(0.0))) {
    $4_1 = $3_1;
    break block;
   }
   $4_1 = $3_1 < $6_1 ? $6_1 : $3_1;
  }
  $0_1 = $0_1 + 20 | 0;
  $3_1 = Math_fround(Math_fround(Math_fround($26($0_1 | 0, $1_1 | 0, $2_1 | 0, Math_fround($5_1))) + Math_fround($18($0_1 | 0, $1_1 | 0, $2_1 | 0))) + Math_fround(Math_fround($25($0_1 | 0, $1_1 | 0, $2_1 | 0, Math_fround($5_1))) + Math_fround($17($0_1 | 0, $1_1 | 0, $2_1 | 0))));
  return Math_fround($4_1 == $4_1 & $3_1 == $3_1 | 0 ? ($3_1 > $4_1 ? $3_1 : $4_1) : $4_1 != $4_1 ? $3_1 : $4_1);
 }
 
 function $8($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0, $5_1 = 0, $23_1 = 0, $11_1 = 0;
  if (!((HEAPU8[$0_1 >> 0] | 0) & 32 | 0)) {
   block1 : {
    $3_1 = $1_1;
    block : {
     $11_1 = $2_1;
     $1_1 = $0_1;
     $0_1 = HEAP32[($1_1 + 16 | 0) >> 2] | 0;
     if ($0_1) {
      $23_1 = $0_1
     } else {
      if ($127($1_1 | 0) | 0) {
       break block
      }
      $23_1 = HEAP32[($1_1 + 16 | 0) >> 2] | 0;
     }
     $5_1 = HEAP32[($1_1 + 20 | 0) >> 2] | 0;
     if ($11_1 >>> 0 > ($23_1 - $5_1 | 0) >>> 0) {
      FUNCTION_TABLE[HEAP32[($1_1 + 36 | 0) >> 2] | 0 | 0]($1_1, $3_1, $2_1) | 0;
      break block1;
     }
     block2 : {
      if ((HEAP32[($1_1 + 80 | 0) >> 2] | 0 | 0) < (0 | 0)) {
       break block2
      }
      $0_1 = $2_1;
      label : while (1) {
       $4_1 = $0_1;
       if (!$0_1) {
        break block2
       }
       $0_1 = $0_1 - 1 | 0;
       if ((HEAPU8[($3_1 + $0_1 | 0) >> 0] | 0 | 0) != (10 | 0)) {
        continue label
       }
       break label;
      };
      if ((FUNCTION_TABLE[HEAP32[($1_1 + 36 | 0) >> 2] | 0 | 0]($1_1, $3_1, $4_1) | 0) >>> 0 < $4_1 >>> 0) {
       break block
      }
      $3_1 = $3_1 + $4_1 | 0;
      $2_1 = $2_1 - $4_1 | 0;
      $5_1 = HEAP32[($1_1 + 20 | 0) >> 2] | 0;
     }
     $13($5_1 | 0, $3_1 | 0, $2_1 | 0) | 0;
     HEAP32[($1_1 + 20 | 0) >> 2] = (HEAP32[($1_1 + 20 | 0) >> 2] | 0) + $2_1 | 0;
    }
   }
  }
 }
 
 function $9($0_1) {
  $0_1 = $0_1 | 0;
  $5($0_1 | 0);
 }
 
 function $10($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  block : {
   switch ($2_1 | 0) {
   case 1:
    $37($0_1 | 0, $1_1 | 0, $1_1 + 12 | 0 | 0);
    return;
   case 2:
    $38($0_1 | 0, $1_1 | 0, $1_1 + 12 | 0 | 0, $3_1 | 0);
    return;
   case 3:
    $36($0_1 | 0, $1_1 | 0, $1_1 + 12 | 0 | 0);
    return;
   default:
    $6();
    wasm2js_trap();
   case 0:
    break block;
   };
  }
  $39($0_1 | 0, $1_1 | 0, $1_1 + 12 | 0 | 0, $3_1 | 0);
 }
 
 function $11($0_1, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  var $5_1 = 0, $18_1 = 0;
  $5_1 = global$0 - 256 | 0;
  global$0 = $5_1;
  if (!($4_1 & 73728 | 0 | ($2_1 | 0) <= ($3_1 | 0) | 0)) {
   $18_1 = $1_1 & 255 | 0;
   $3_1 = $2_1 - $3_1 | 0;
   $1_1 = $3_1 >>> 0 < 256 >>> 0;
   $12($5_1 | 0, $18_1 | 0, ($1_1 ? $3_1 : 256) | 0) | 0;
   if (!$1_1) {
    label : while (1) {
     $8($0_1 | 0, $5_1 | 0, 256 | 0);
     $3_1 = $3_1 - 256 | 0;
     if ($3_1 >>> 0 > 255 >>> 0) {
      continue label
     }
     break label;
    }
   }
   $8($0_1 | 0, $5_1 | 0, $3_1 | 0);
  }
  global$0 = $5_1 + 256 | 0;
 }
 
 function $12($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $5_1 = 0, $92_1 = 0, $5$hi = 0;
  block : {
   if (!$2_1) {
    break block
   }
   HEAP8[$0_1 >> 0] = $1_1;
   $3_1 = $0_1 + $2_1 | 0;
   HEAP8[($3_1 - 1 | 0) >> 0] = $1_1;
   if ($2_1 >>> 0 < 3 >>> 0) {
    break block
   }
   HEAP8[($0_1 + 2 | 0) >> 0] = $1_1;
   HEAP8[($0_1 + 1 | 0) >> 0] = $1_1;
   HEAP8[($3_1 - 3 | 0) >> 0] = $1_1;
   HEAP8[($3_1 - 2 | 0) >> 0] = $1_1;
   if ($2_1 >>> 0 < 7 >>> 0) {
    break block
   }
   HEAP8[($0_1 + 3 | 0) >> 0] = $1_1;
   HEAP8[($3_1 - 4 | 0) >> 0] = $1_1;
   if ($2_1 >>> 0 < 9 >>> 0) {
    break block
   }
   $4_1 = (0 - $0_1 | 0) & 3 | 0;
   $3_1 = $0_1 + $4_1 | 0;
   $1_1 = Math_imul($1_1 & 255 | 0, 16843009);
   HEAP32[$3_1 >> 2] = $1_1;
   $4_1 = ($2_1 - $4_1 | 0) & -4 | 0;
   $2_1 = $3_1 + $4_1 | 0;
   HEAP32[($2_1 - 4 | 0) >> 2] = $1_1;
   if ($4_1 >>> 0 < 9 >>> 0) {
    break block
   }
   HEAP32[($3_1 + 8 | 0) >> 2] = $1_1;
   HEAP32[($3_1 + 4 | 0) >> 2] = $1_1;
   HEAP32[($2_1 - 8 | 0) >> 2] = $1_1;
   HEAP32[($2_1 - 12 | 0) >> 2] = $1_1;
   if ($4_1 >>> 0 < 25 >>> 0) {
    break block
   }
   HEAP32[($3_1 + 24 | 0) >> 2] = $1_1;
   HEAP32[($3_1 + 20 | 0) >> 2] = $1_1;
   HEAP32[($3_1 + 16 | 0) >> 2] = $1_1;
   HEAP32[($3_1 + 12 | 0) >> 2] = $1_1;
   HEAP32[($2_1 - 16 | 0) >> 2] = $1_1;
   HEAP32[($2_1 - 20 | 0) >> 2] = $1_1;
   HEAP32[($2_1 - 24 | 0) >> 2] = $1_1;
   HEAP32[($2_1 - 28 | 0) >> 2] = $1_1;
   $92_1 = $4_1;
   $4_1 = $3_1 & 4 | 0 | 24 | 0;
   $2_1 = $92_1 - $4_1 | 0;
   if ($2_1 >>> 0 < 32 >>> 0) {
    break block
   }
   i64toi32_i32$0 = 0;
   i64toi32_i32$1 = 1;
   i64toi32_i32$1 = __wasm_i64_mul($1_1 | 0, i64toi32_i32$0 | 0, 1 | 0, i64toi32_i32$1 | 0) | 0;
   i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
   $5_1 = i64toi32_i32$1;
   $5$hi = i64toi32_i32$0;
   $1_1 = $3_1 + $4_1 | 0;
   label : while (1) {
    i64toi32_i32$0 = $5$hi;
    i64toi32_i32$1 = $1_1;
    HEAP32[($1_1 + 24 | 0) >> 2] = $5_1;
    HEAP32[($1_1 + 28 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$1 = $1_1;
    HEAP32[($1_1 + 16 | 0) >> 2] = $5_1;
    HEAP32[($1_1 + 20 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$1 = $1_1;
    HEAP32[($1_1 + 8 | 0) >> 2] = $5_1;
    HEAP32[($1_1 + 12 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$1 = $1_1;
    HEAP32[$1_1 >> 2] = $5_1;
    HEAP32[($1_1 + 4 | 0) >> 2] = i64toi32_i32$0;
    $1_1 = $1_1 + 32 | 0;
    $2_1 = $2_1 - 32 | 0;
    if ($2_1 >>> 0 > 31 >>> 0) {
     continue label
    }
    break label;
   };
  }
  return $0_1 | 0;
 }
 
 function $13($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $4_1 = 0, $3_1 = 0, $5_1 = 0;
  if ($2_1 >>> 0 >= 512 >>> 0) {
   fimport$23($0_1 | 0, $1_1 | 0, $2_1 | 0);
   return $0_1 | 0;
  }
  $3_1 = $0_1 + $2_1 | 0;
  block2 : {
   if (!(($0_1 ^ $1_1 | 0) & 3 | 0)) {
    block : {
     if (!($0_1 & 3 | 0)) {
      $2_1 = $0_1;
      break block;
     }
     if (!$2_1) {
      $2_1 = $0_1;
      break block;
     }
     $2_1 = $0_1;
     label : while (1) {
      HEAP8[$2_1 >> 0] = HEAPU8[$1_1 >> 0] | 0;
      $1_1 = $1_1 + 1 | 0;
      $2_1 = $2_1 + 1 | 0;
      if (!($2_1 & 3 | 0)) {
       break block
      }
      if ($2_1 >>> 0 < $3_1 >>> 0) {
       continue label
      }
      break label;
     };
    }
    block1 : {
     $4_1 = $3_1 & -4 | 0;
     if ($4_1 >>> 0 < 64 >>> 0) {
      break block1
     }
     $5_1 = $4_1 + -64 | 0;
     if ($2_1 >>> 0 > $5_1 >>> 0) {
      break block1
     }
     label1 : while (1) {
      HEAP32[$2_1 >> 2] = HEAP32[$1_1 >> 2] | 0;
      HEAP32[($2_1 + 4 | 0) >> 2] = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
      HEAP32[($2_1 + 8 | 0) >> 2] = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
      HEAP32[($2_1 + 12 | 0) >> 2] = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
      HEAP32[($2_1 + 16 | 0) >> 2] = HEAP32[($1_1 + 16 | 0) >> 2] | 0;
      HEAP32[($2_1 + 20 | 0) >> 2] = HEAP32[($1_1 + 20 | 0) >> 2] | 0;
      HEAP32[($2_1 + 24 | 0) >> 2] = HEAP32[($1_1 + 24 | 0) >> 2] | 0;
      HEAP32[($2_1 + 28 | 0) >> 2] = HEAP32[($1_1 + 28 | 0) >> 2] | 0;
      HEAP32[($2_1 + 32 | 0) >> 2] = HEAP32[($1_1 + 32 | 0) >> 2] | 0;
      HEAP32[($2_1 + 36 | 0) >> 2] = HEAP32[($1_1 + 36 | 0) >> 2] | 0;
      HEAP32[($2_1 + 40 | 0) >> 2] = HEAP32[($1_1 + 40 | 0) >> 2] | 0;
      HEAP32[($2_1 + 44 | 0) >> 2] = HEAP32[($1_1 + 44 | 0) >> 2] | 0;
      HEAP32[($2_1 + 48 | 0) >> 2] = HEAP32[($1_1 + 48 | 0) >> 2] | 0;
      HEAP32[($2_1 + 52 | 0) >> 2] = HEAP32[($1_1 + 52 | 0) >> 2] | 0;
      HEAP32[($2_1 + 56 | 0) >> 2] = HEAP32[($1_1 + 56 | 0) >> 2] | 0;
      HEAP32[($2_1 + 60 | 0) >> 2] = HEAP32[($1_1 + 60 | 0) >> 2] | 0;
      $1_1 = $1_1 - -64 | 0;
      $2_1 = $2_1 - -64 | 0;
      if ($2_1 >>> 0 <= $5_1 >>> 0) {
       continue label1
      }
      break label1;
     };
    }
    if ($2_1 >>> 0 >= $4_1 >>> 0) {
     break block2
    }
    label2 : while (1) {
     HEAP32[$2_1 >> 2] = HEAP32[$1_1 >> 2] | 0;
     $1_1 = $1_1 + 4 | 0;
     $2_1 = $2_1 + 4 | 0;
     if ($2_1 >>> 0 < $4_1 >>> 0) {
      continue label2
     }
     break label2;
    };
    break block2;
   }
   if ($3_1 >>> 0 < 4 >>> 0) {
    $2_1 = $0_1;
    break block2;
   }
   $4_1 = $3_1 - 4 | 0;
   if ($0_1 >>> 0 > $4_1 >>> 0) {
    $2_1 = $0_1;
    break block2;
   }
   $2_1 = $0_1;
   label3 : while (1) {
    HEAP8[$2_1 >> 0] = HEAPU8[$1_1 >> 0] | 0;
    HEAP8[($2_1 + 1 | 0) >> 0] = HEAPU8[($1_1 + 1 | 0) >> 0] | 0;
    HEAP8[($2_1 + 2 | 0) >> 0] = HEAPU8[($1_1 + 2 | 0) >> 0] | 0;
    HEAP8[($2_1 + 3 | 0) >> 0] = HEAPU8[($1_1 + 3 | 0) >> 0] | 0;
    $1_1 = $1_1 + 4 | 0;
    $2_1 = $2_1 + 4 | 0;
    if ($2_1 >>> 0 <= $4_1 >>> 0) {
     continue label3
    }
    break label3;
   };
  }
  if ($2_1 >>> 0 < $3_1 >>> 0) {
   label4 : while (1) {
    HEAP8[$2_1 >> 0] = HEAPU8[$1_1 >> 0] | 0;
    $1_1 = $1_1 + 1 | 0;
    $2_1 = $2_1 + 1 | 0;
    if (($2_1 | 0) != ($3_1 | 0)) {
     continue label4
    }
    break label4;
   }
  }
  return $0_1 | 0;
 }
 
 function $14($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var $4_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $3_1;
  block : {
   if (!$0_1) {
    $83(0 | 0, 0 | 0, $1_1 | 0, $2_1 | 0, HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0);
    break block;
   }
   $83(HEAP32[($0_1 + 500 | 0) >> 2] | 0 | 0, $0_1 | 0, $1_1 | 0, $2_1 | 0, HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0);
  }
  global$0 = $4_1 + 16 | 0;
 }
 
 function $15($0_1, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = Math_fround($3_1);
  $4_1 = Math_fround($4_1);
  var $6_1 = 0, $5_1 = Math_fround(0);
  $6_1 = global$0 - 16 | 0;
  global$0 = $6_1;
  $1($6_1 + 8 | 0 | 0, $0_1 + 104 | 0 | 0, HEAPU16[(($0_1 + ($2_1 << 1 | 0) | 0) + 98 | 0) >> 1] | 0 | 0);
  $5_1 = Math_fround(NaN);
  block2 : {
   block1 : {
    switch ((HEAPU8[($6_1 + 12 | 0) >> 0] | 0) - 1 | 0 | 0) {
    case 0:
     $5_1 = Math_fround(HEAPF32[($6_1 + 8 | 0) >> 2]);
     break block2;
    case 1:
     break block1;
    default:
     break block2;
    };
   }
   $5_1 = Math_fround(Math_fround(Math_fround(HEAPF32[($6_1 + 8 | 0) >> 2]) * $3_1) * Math_fround(.009999999776482582));
  }
  if (((HEAPU8[($0_1 + 3 | 0) >> 0] | 0) << 16 | 0) & 1048576 | 0) {
   $3_1 = Math_fround($54($0_1 | 0, $1_1 | 0, $2_1 | 0, Math_fround($4_1)));
   $5_1 = Math_fround($5_1 + ($3_1 == $3_1 ? $3_1 : Math_fround(0.0)));
  }
  global$0 = $6_1 + 16 | 0;
  return Math_fround($5_1);
 }
 
 function $16($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, $10_1 = 0, $40_1 = 0;
  $1_1 = (HEAP32[($0_1 + 4 | 0) >> 2] | 0) + 1 | 0;
  $2_1 = HEAP32[$0_1 >> 2] | 0;
  $10_1 = HEAP32[($2_1 + 492 | 0) >> 2] | 0;
  $2_1 = HEAP32[($2_1 + 488 | 0) >> 2] | 0;
  if ($1_1 >>> 0 >= (($10_1 - $2_1 | 0) >> 2 | 0) >>> 0) {
   label : while (1) {
    $1_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
    if (!$1_1) {
     HEAP32[($0_1 + 8 | 0) >> 2] = 0;
     HEAP32[$0_1 >> 2] = 0;
     HEAP32[($0_1 + 4 | 0) >> 2] = 0;
     return;
    }
    HEAP32[$0_1 >> 2] = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
    HEAP32[($0_1 + 4 | 0) >> 2] = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
    HEAP32[($0_1 + 8 | 0) >> 2] = HEAP32[$1_1 >> 2] | 0;
    $5($1_1 | 0);
    $1_1 = (HEAP32[($0_1 + 4 | 0) >> 2] | 0) + 1 | 0;
    $2_1 = HEAP32[$0_1 >> 2] | 0;
    $40_1 = HEAP32[($2_1 + 492 | 0) >> 2] | 0;
    $2_1 = HEAP32[($2_1 + 488 | 0) >> 2] | 0;
    if ($1_1 >>> 0 >= (($40_1 - $2_1 | 0) >> 2 | 0) >>> 0) {
     continue label
    }
    break label;
   }
  }
  HEAP32[($0_1 + 4 | 0) >> 2] = $1_1;
  if ((((HEAPU8[((HEAP32[($2_1 + ($1_1 << 2 | 0) | 0) >> 2] | 0) + 23 | 0) >> 0] | 0) << 16 | 0) & 786432 | 0 | 0) == (524288 | 0)) {
   $95($0_1 | 0)
  }
 }
 
 function $17($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = Math_fround(0);
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  $53($3_1 + 8 | 0 | 0, $0_1 | 0, (($1_1 & 254 | 0 | 0) != (2 | 0) ? 3 : (($2_1 | 0) != (2 | 0)) << 1 | 0) | 0, $2_1 | 0);
  $4_1 = Math_fround(NaN);
  block2 : {
   block1 : {
    switch ((HEAPU8[($3_1 + 12 | 0) >> 0] | 0) - 1 | 0 | 0) {
    case 0:
     $4_1 = Math_fround(HEAPF32[($3_1 + 8 | 0) >> 2]);
     break block2;
    case 1:
     break block1;
    default:
     break block2;
    };
   }
   $4_1 = Math_fround(Math_fround(Math_fround(HEAPF32[($3_1 + 8 | 0) >> 2]) * Math_fround(0.0)) * Math_fround(.009999999776482582));
  }
  global$0 = $3_1 + 16 | 0;
  return Math_fround($4_1 == $4_1 ? Math_fround(Math_max($4_1, Math_fround(0.0))) : Math_fround(0.0));
 }
 
 function $18($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = Math_fround(0);
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  $53($3_1 + 8 | 0 | 0, $0_1 | 0, (($1_1 & 254 | 0 | 0) != (2 | 0) ? 1 : (($2_1 | 0) == (2 | 0)) << 1 | 0) | 0, $2_1 | 0);
  $4_1 = Math_fround(NaN);
  block2 : {
   block1 : {
    switch ((HEAPU8[($3_1 + 12 | 0) >> 0] | 0) - 1 | 0 | 0) {
    case 0:
     $4_1 = Math_fround(HEAPF32[($3_1 + 8 | 0) >> 2]);
     break block2;
    case 1:
     break block1;
    default:
     break block2;
    };
   }
   $4_1 = Math_fround(Math_fround(Math_fround(HEAPF32[($3_1 + 8 | 0) >> 2]) * Math_fround(0.0)) * Math_fround(.009999999776482582));
  }
  global$0 = $3_1 + 16 | 0;
  return Math_fround($4_1 == $4_1 ? Math_fround(Math_max($4_1, Math_fround(0.0))) : Math_fround(0.0));
 }
 
 function $19($0_1, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = Math_fround($3_1);
  $4_1 = Math_fround($4_1);
  var $5_1 = Math_fround(0), $7_1 = 0, $6_1 = Math_fround(0), $40_1 = Math_fround(0);
  $7_1 = $0_1 + ($2_1 << 3 | 0) | 0;
  $6_1 = Math_fround(HEAPF32[($7_1 + 504 | 0) >> 2]);
  $5_1 = Math_fround(NaN);
  block2 : {
   block1 : {
    switch ((HEAPU8[($7_1 + 508 | 0) >> 0] | 0) - 1 | 0 | 0) {
    case 0:
     $5_1 = $6_1;
     break block2;
    case 1:
     break block1;
    default:
     break block2;
    };
   }
   $5_1 = Math_fround(Math_fround($6_1 * $3_1) * Math_fround(.009999999776482582));
  }
  if (((HEAPU8[($0_1 + 23 | 0) >> 0] | 0) << 16 | 0) & 1048576 | 0) {
   $3_1 = Math_fround($54($0_1 + 20 | 0 | 0, $1_1 | 0, $2_1 | 0, Math_fround($4_1)));
   $40_1 = Math_fround($5_1 + ($3_1 == $3_1 ? $3_1 : Math_fround(0.0)));
  } else {
   $40_1 = $5_1
  }
  return Math_fround($40_1);
 }
 
 function $20($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$0 = 0, $2_1 = 0;
  block : {
   $2_1 = HEAP32[($1_1 + 488 | 0) >> 2] | 0;
   if (($2_1 | 0) != (HEAP32[($1_1 + 492 | 0) >> 2] | 0 | 0)) {
    i64toi32_i32$0 = 0;
    HEAP32[($0_1 + 4 | 0) >> 2] = 0;
    HEAP32[($0_1 + 8 | 0) >> 2] = i64toi32_i32$0;
    HEAP32[$0_1 >> 2] = $1_1;
    if ((((HEAPU8[((HEAP32[$2_1 >> 2] | 0) + 23 | 0) >> 0] | 0) << 16 | 0) & 786432 | 0 | 0) != (524288 | 0)) {
     break block
    }
    $95($0_1 | 0);
    return;
   }
   i64toi32_i32$0 = 0;
   HEAP32[$0_1 >> 2] = 0;
   HEAP32[($0_1 + 4 | 0) >> 2] = i64toi32_i32$0;
   HEAP32[($0_1 + 8 | 0) >> 2] = 0;
  }
 }
 
 function $21($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  block : {
   if (($0_1 | 0) == ($1_1 | 0)) {
    break block
   }
   $4_1 = $0_1 + $2_1 | 0;
   if (($1_1 - $4_1 | 0) >>> 0 <= (0 - ($2_1 << 1 | 0) | 0) >>> 0) {
    return $13($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0 | 0
   }
   $3_1 = ($0_1 ^ $1_1 | 0) & 3 | 0;
   block1 : {
    block2 : {
     if ($0_1 >>> 0 < $1_1 >>> 0) {
      if ($3_1) {
       $3_1 = $0_1;
       break block1;
      }
      if (!($0_1 & 3 | 0)) {
       $3_1 = $0_1;
       break block2;
      }
      $3_1 = $0_1;
      label : while (1) {
       if (!$2_1) {
        break block
       }
       HEAP8[$3_1 >> 0] = HEAPU8[$1_1 >> 0] | 0;
       $1_1 = $1_1 + 1 | 0;
       $2_1 = $2_1 - 1 | 0;
       $3_1 = $3_1 + 1 | 0;
       if ($3_1 & 3 | 0) {
        continue label
       }
       break label;
      };
      break block2;
     }
     block3 : {
      if ($3_1) {
       break block3
      }
      if ($4_1 & 3 | 0) {
       label1 : while (1) {
        if (!$2_1) {
         break block
        }
        $2_1 = $2_1 - 1 | 0;
        $3_1 = $0_1 + $2_1 | 0;
        HEAP8[$3_1 >> 0] = HEAPU8[($1_1 + $2_1 | 0) >> 0] | 0;
        if ($3_1 & 3 | 0) {
         continue label1
        }
        break label1;
       }
      }
      if ($2_1 >>> 0 <= 3 >>> 0) {
       break block3
      }
      label2 : while (1) {
       $2_1 = $2_1 - 4 | 0;
       HEAP32[($0_1 + $2_1 | 0) >> 2] = HEAP32[($1_1 + $2_1 | 0) >> 2] | 0;
       if ($2_1 >>> 0 > 3 >>> 0) {
        continue label2
       }
       break label2;
      };
     }
     if (!$2_1) {
      break block
     }
     label3 : while (1) {
      $2_1 = $2_1 - 1 | 0;
      HEAP8[($0_1 + $2_1 | 0) >> 0] = HEAPU8[($1_1 + $2_1 | 0) >> 0] | 0;
      if ($2_1) {
       continue label3
      }
      break label3;
     };
     break block;
    }
    if ($2_1 >>> 0 <= 3 >>> 0) {
     break block1
    }
    label4 : while (1) {
     HEAP32[$3_1 >> 2] = HEAP32[$1_1 >> 2] | 0;
     $1_1 = $1_1 + 4 | 0;
     $3_1 = $3_1 + 4 | 0;
     $2_1 = $2_1 - 4 | 0;
     if ($2_1 >>> 0 > 3 >>> 0) {
      continue label4
     }
     break label4;
    };
   }
   if (!$2_1) {
    break block
   }
   label5 : while (1) {
    HEAP8[$3_1 >> 0] = HEAPU8[$1_1 >> 0] | 0;
    $3_1 = $3_1 + 1 | 0;
    $1_1 = $1_1 + 1 | 0;
    $2_1 = $2_1 - 1 | 0;
    if ($2_1) {
     continue label5
    }
    break label5;
   };
  }
  return $0_1 | 0;
 }
 
 function $22($0_1, $1_1, $2_1, $3_1) {
  $0_1 = +$0_1;
  $1_1 = +$1_1;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var $4_1 = 0.0, $51_1 = 0.0, $5_1 = 0, $49_1 = 0.0;
  block : {
   $0_1 = $0_1 * $1_1;
   $4_1 = +$78(+$0_1);
   $4_1 = $4_1 < 0.0 ? $4_1 + 1.0 : $4_1;
   $5_1 = $4_1 != $4_1;
   if (!($5_1 | !(Math_abs($4_1) < .0001) | 0)) {
    $0_1 = $0_1 - $4_1;
    break block;
   }
   if (!($5_1 | !(Math_abs($4_1 + -1.0) < .0001) | 0)) {
    $0_1 = $0_1 - $4_1 + 1.0;
    break block;
   }
   $0_1 = $0_1 - $4_1;
   if ($2_1) {
    $0_1 = $0_1 + 1.0;
    break block;
   }
   if ($3_1) {
    break block
   }
   $49_1 = $0_1;
   block1 : {
    $51_1 = 0.0;
    if ($5_1) {
     break block1
    }
    $51_1 = 1.0;
    if ($4_1 > .5) {
     break block1
    }
    $51_1 = Math_abs($4_1 + -.5) < .0001 ? 1.0 : 0.0;
   }
   $0_1 = $49_1 + $51_1;
  }
  if ($0_1 != $0_1 | $1_1 != $1_1 | 0) {
   return Math_fround(Math_fround(NaN))
  }
  return Math_fround(Math_fround($0_1 / $1_1));
 }
 
 function $23($0_1, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = Math_fround($3_1);
  $4_1 = Math_fround($4_1);
  var $6_1 = 0, $5_1 = Math_fround(0);
  $6_1 = global$0 - 16 | 0;
  global$0 = $6_1;
  $1($6_1 + 8 | 0 | 0, $0_1 + 104 | 0 | 0, HEAPU16[(($0_1 + ($2_1 << 1 | 0) | 0) + 94 | 0) >> 1] | 0 | 0);
  $5_1 = Math_fround(NaN);
  block2 : {
   block1 : {
    switch ((HEAPU8[($6_1 + 12 | 0) >> 0] | 0) - 1 | 0 | 0) {
    case 0:
     $5_1 = Math_fround(HEAPF32[($6_1 + 8 | 0) >> 2]);
     break block2;
    case 1:
     break block1;
    default:
     break block2;
    };
   }
   $5_1 = Math_fround(Math_fround(Math_fround(HEAPF32[($6_1 + 8 | 0) >> 2]) * $3_1) * Math_fround(.009999999776482582));
  }
  if (((HEAPU8[($0_1 + 3 | 0) >> 0] | 0) << 16 | 0) & 1048576 | 0) {
   $3_1 = Math_fround($54($0_1 | 0, $1_1 | 0, $2_1 | 0, Math_fround($4_1)));
   $5_1 = Math_fround($5_1 + ($3_1 == $3_1 ? $3_1 : Math_fround(0.0)));
  }
  global$0 = $6_1 + 16 | 0;
  return Math_fround($5_1);
 }
 
 function $24($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  block : {
   switch ($2_1 | 0) {
   case 1:
    $37($0_1 | 0, $1_1 | 0, $1_1 + 30 | 0 | 0);
    return;
   case 2:
    $38($0_1 | 0, $1_1 | 0, $1_1 + 30 | 0 | 0, $3_1 | 0);
    return;
   case 3:
    $36($0_1 | 0, $1_1 | 0, $1_1 + 30 | 0 | 0);
    return;
   default:
    $6();
    wasm2js_trap();
   case 0:
    break block;
   };
  }
  $39($0_1 | 0, $1_1 | 0, $1_1 + 30 | 0 | 0, $3_1 | 0);
 }
 
 function $25($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = Math_fround($3_1);
  var $4_1 = 0, $5_1 = Math_fround(0);
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  $50($4_1 + 8 | 0 | 0, $0_1 | 0, (($1_1 & 254 | 0 | 0) != (2 | 0) ? 3 : (($2_1 | 0) != (2 | 0)) << 1 | 0) | 0, $2_1 | 0);
  $5_1 = Math_fround(NaN);
  block2 : {
   block1 : {
    switch ((HEAPU8[($4_1 + 12 | 0) >> 0] | 0) - 1 | 0 | 0) {
    case 0:
     $5_1 = Math_fround(HEAPF32[($4_1 + 8 | 0) >> 2]);
     break block2;
    case 1:
     break block1;
    default:
     break block2;
    };
   }
   $5_1 = Math_fround(Math_fround(Math_fround(HEAPF32[($4_1 + 8 | 0) >> 2]) * $3_1) * Math_fround(.009999999776482582));
  }
  global$0 = $4_1 + 16 | 0;
  return Math_fround($5_1 == $5_1 ? Math_fround(Math_max($5_1, Math_fround(0.0))) : Math_fround(0.0));
 }
 
 function $26($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = Math_fround($3_1);
  var $4_1 = 0, $5_1 = Math_fround(0);
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  $50($4_1 + 8 | 0 | 0, $0_1 | 0, (($1_1 & 254 | 0 | 0) != (2 | 0) ? 1 : (($2_1 | 0) == (2 | 0)) << 1 | 0) | 0, $2_1 | 0);
  $5_1 = Math_fround(NaN);
  block2 : {
   block1 : {
    switch ((HEAPU8[($4_1 + 12 | 0) >> 0] | 0) - 1 | 0 | 0) {
    case 0:
     $5_1 = Math_fround(HEAPF32[($4_1 + 8 | 0) >> 2]);
     break block2;
    case 1:
     break block1;
    default:
     break block2;
    };
   }
   $5_1 = Math_fround(Math_fround(Math_fround(HEAPF32[($4_1 + 8 | 0) >> 2]) * $3_1) * Math_fround(.009999999776482582));
  }
  global$0 = $4_1 + 16 | 0;
  return Math_fround($5_1 == $5_1 ? Math_fround(Math_max($5_1, Math_fround(0.0))) : Math_fround(0.0));
 }
 
 function $27($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = Math_fround($2_1);
  $3_1 = $3_1 | 0;
  var $4_1 = 0, $5_1 = 0;
  block1 : {
   block2 : {
    block : {
     $3_1 = $3_1 & 255 | 0;
     switch ($3_1 | 0) {
     case 0:
      break block;
     case 3:
      break block2;
     default:
      break block1;
     };
    }
    $4_1 = (HEAPU8[$1_1 >> 0] | 0 | ((HEAPU8[($1_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0) & 65528 | 0;
    HEAP8[$1_1 >> 0] = $4_1;
    HEAP8[($1_1 + 1 | 0) >> 0] = $4_1 >>> 8 | 0;
    return;
   }
   $5_1 = (HEAPU8[$1_1 >> 0] | 0 | ((HEAPU8[($1_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0) & 65528 | 0 | 4 | 0;
   HEAP8[$1_1 >> 0] = $5_1;
   HEAP8[($1_1 + 1 | 0) >> 0] = $5_1 >>> 8 | 0;
   return;
  }
  $46($0_1 | 0, $1_1 | 0, Math_fround($2_1), (($3_1 | 0) == (1 | 0) ? 1 : 2) | 0);
 }
 
 function $28($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $22_1 = 0, $12_1 = 0, $13_1 = 0;
  $3_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
  $1_1 = $1_1 + ($3_1 >> 1 | 0) | 0;
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  $12_1 = $1_1;
  $13_1 = $2_1;
  if ($3_1 & 1 | 0) {
   $22_1 = HEAP32[((HEAP32[$1_1 >> 2] | 0) + $0_1 | 0) >> 2] | 0
  } else {
   $22_1 = $0_1
  }
  FUNCTION_TABLE[$22_1 | 0]($12_1, $13_1);
 }
 
 function $29($0_1) {
  $0_1 = $0_1 | 0;
  var $2_1 = Math_fround(0), $3_1 = 0, $4_1 = 0, $1_1 = Math_fround(0);
  block : {
   if (!(HEAP32[($0_1 + 484 | 0) >> 2] | 0)) {
    break block
   }
   $3_1 = $0_1 + 124 | 0;
   $4_1 = $0_1 + 26 | 0;
   $2_1 = Math_fround($2($3_1 | 0, HEAPU16[$4_1 >> 1] | 0 | 0));
   if ($2_1 != $2_1) {
    $4_1 = $0_1 + 24 | 0;
    $2_1 = Math_fround($2($3_1 | 0, HEAPU16[$4_1 >> 1] | 0 | 0));
    if ($2_1 != $2_1) {
     break block
    }
    if (!(Math_fround($2($3_1 | 0, HEAPU16[($0_1 + 24 | 0) >> 1] | 0 | 0)) > Math_fround(0.0))) {
     break block
    }
   }
   $1_1 = Math_fround($2($3_1 | 0, HEAPU16[$4_1 >> 1] | 0 | 0));
  }
  return Math_fround($1_1);
 }
 
 function $30($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $2_1 = 0, $3_1 = 0, $4_1 = 0, $9_1 = 0, $18_1 = 0;
  if ($1_1) {
   $3_1 = $0(12 | 0) | 0;
   i64toi32_i32$0 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
   i64toi32_i32$1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
   $9_1 = i64toi32_i32$0;
   i64toi32_i32$0 = $3_1;
   HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = $9_1;
   HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = i64toi32_i32$1;
   $2_1 = i64toi32_i32$0;
   $1_1 = HEAP32[$1_1 >> 2] | 0;
   if ($1_1) {
    $4_1 = i64toi32_i32$0;
    label : while (1) {
     $2_1 = $0(12 | 0) | 0;
     i64toi32_i32$1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
     i64toi32_i32$0 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
     $18_1 = i64toi32_i32$1;
     i64toi32_i32$1 = $2_1;
     HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = $18_1;
     HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = i64toi32_i32$0;
     HEAP32[$4_1 >> 2] = i64toi32_i32$1;
     $4_1 = i64toi32_i32$1;
     $1_1 = HEAP32[$1_1 >> 2] | 0;
     if ($1_1) {
      continue label
     }
     break label;
    };
   }
   HEAP32[$2_1 >> 2] = HEAP32[$0_1 >> 2] | 0;
   HEAP32[$0_1 >> 2] = $3_1;
  }
 }
 
 function $31($0_1, $1_1, $2_1, $3_1, $4_1, $5_1, $6_1, $7_1, $8_1, $9_1, $10_1, $11_1, $12_1) {
  $0_1 = $0_1 | 0;
  $1_1 = Math_fround($1_1);
  $2_1 = Math_fround($2_1);
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  $5_1 = $5_1 | 0;
  $6_1 = Math_fround($6_1);
  $7_1 = Math_fround($7_1);
  $8_1 = $8_1 | 0;
  $9_1 = $9_1 | 0;
  $10_1 = $10_1 | 0;
  $11_1 = $11_1 | 0;
  $12_1 = $12_1 | 0;
  var $13_1 = 0, $14_1 = 0, $58_1 = Math_fround(0), $15_1 = 0, $16_1 = 0, $59_1 = Math_fround(0), $60_1 = Math_fround(0), $61_1 = Math_fround(0), $62_1 = Math_fround(0), $17_1 = 0, $63_1 = Math_fround(0), $65_1 = Math_fround(0), $64_1 = Math_fround(0), $18_1 = 0, $19_1 = 0, $23_1 = 0, $20_1 = 0, $21_1 = 0, $22_1 = 0, i64toi32_i32$0 = 0, $66_1 = Math_fround(0), i64toi32_i32$1 = 0, $24_1 = 0, $67_1 = Math_fround(0), $68_1 = Math_fround(0), $69_1 = Math_fround(0), $25_1 = 0, $70_1 = Math_fround(0), $28_1 = 0, $26_1 = 0, $29_1 = 0, $30_1 = 0, $31_1 = 0, $27_1 = 0, $71_1 = Math_fround(0), i64toi32_i32$2 = 0, $74_1 = Math_fround(0), $73_1 = Math_fround(0), i64toi32_i32$3 = 0, $32_1 = 0, $33_1 = 0, $72_1 = Math_fround(0), $75_1 = Math_fround(0), $35_1 = 0, $34_1 = 0, $36_1 = 0, $77_1 = Math_fround(0), $86_1 = 0, $38_1 = 0, $76_1 = Math_fround(0), $37_1 = 0, $78_1 = Math_fround(0), i64toi32_i32$4 = 0, $316 = 0, $39_1 = 0, $40_1 = 0, $41_1 = 0, $1276 = Math_fround(0), $2502 = Math_fround(0), $2509 = Math_fround(0), $2921 = Math_fround(0), $3047 = 0, $3492 = 0, $3566 = Math_fround(0), $4463 = 0, $104_1 = 0, $86$hi = 0, $42_1 = 0, $2261 = Math_fround(0), $2843 = 0, $43_1 = 0, $44_1 = 0, $533 = Math_fround(0), $744 = Math_fround(0), $769 = Math_fround(0), $80_1 = Math_fround(0), $81_1 = Math_fround(0), $1098 = 0, $1479 = 0, $79_1 = Math_fround(0), $51_1 = 0, $53_1 = 0, $2286 = Math_fround(0), $84_1 = Math_fround(0), $85_1 = Math_fround(0), $2633 = 0, $2687 = 0, $170_1 = 0, $2765 = 0, $2949 = 0, $3216 = Math_fround(0), $3331 = Math_fround(0), $3781 = 0, $3789 = 0, $3979 = 0, $4084 = Math_fround(0), $4267 = Math_fround(0), $4351 = Math_fround(0), $4559 = 0, $4564 = 0, $4593 = 0, $4598 = 0, $4693 = 0, $299 = 0, $465 = 0, $515 = 0, $564 = Math_fround(0), $691 = 0, $724 = 0, $725 = 0, $726 = 0, $749 = 0, $750 = 0, $751 = 0, $963 = 0, $1043 = 0, $1067 = 0, $1170 = Math_fround(0), $1213 = 0, $45_1 = 0, $46_1 = 0, $47_1 = 0, $48_1 = 0, $49_1 = 0, $50_1 = 0, $52_1 = 0, $54_1 = 0, $55_1 = 0, $56_1 = 0, $57_1 = 0, $1927 = 0, $2170 = 0, $2489 = 0, $2490 = 0, $2491 = 0, $82_1 = Math_fround(0), $83_1 = Math_fround(0), $2584 = Math_fround(0), $2709 = 0, $2710 = 0, $2833 = 0, $3298 = 0, $3316 = Math_fround(0), $3558 = 0, $3559 = 0, $3560 = 0, $3683 = 0, $3704 = 0, $3881 = 0, $3905 = 0, $3943 = 0, $4165 = 0, $4249 = 0, $4330 = 0, $4436 = 0, $4453 = 0, $4525 = 0, $4712 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0, wasm2js_i32$2 = 0, wasm2js_f32$0 = Math_fround(0);
  block1 : {
   block : {
    if ((HEAPU8[$0_1 >> 0] | 0) & 4 | 0) {
     if ((HEAP32[($0_1 + 160 | 0) >> 2] | 0 | 0) != ($12_1 | 0)) {
      break block
     }
    }
    if ((HEAP32[($0_1 + 164 | 0) >> 2] | 0 | 0) != (HEAP32[((HEAP32[($0_1 + 500 | 0) >> 2] | 0) + 12 | 0) >> 2] | 0 | 0)) {
     break block
    }
    $104_1 = 0;
    if ((HEAPU8[($0_1 + 168 | 0) >> 0] | 0 | 0) == ($3_1 | 0)) {
     break block1
    }
   }
   i64toi32_i32$1 = $0_1;
   i64toi32_i32$0 = -1082130432;
   HEAP32[($0_1 + 384 | 0) >> 2] = -1082130432;
   HEAP32[($0_1 + 388 | 0) >> 2] = i64toi32_i32$0;
   i64toi32_i32$1 = $0_1;
   i64toi32_i32$0 = 1;
   HEAP32[($0_1 + 376 | 0) >> 2] = 1;
   HEAP32[($0_1 + 380 | 0) >> 2] = i64toi32_i32$0;
   i64toi32_i32$1 = $0_1;
   i64toi32_i32$0 = -1082130432;
   HEAP32[($0_1 + 368 | 0) >> 2] = -1082130432;
   HEAP32[($0_1 + 372 | 0) >> 2] = i64toi32_i32$0;
   HEAP32[($0_1 + 172 | 0) >> 2] = 0;
   $104_1 = 1;
  }
  $43_1 = $104_1;
  block10 : {
   block3 : {
    block4 : {
     block2 : {
      if (HEAP32[($0_1 + 8 | 0) >> 2] | 0) {
       $14_1 = $0_1 + 20 | 0;
       $62_1 = Math_fround($4($14_1 | 0, 2 | 0, 1 | 0, Math_fround($6_1)));
       $60_1 = Math_fround($3($14_1 | 0, 2 | 0, 1 | 0, Math_fround($6_1)));
       $59_1 = Math_fround($4($14_1 | 0, 0 | 0, 1 | 0, Math_fround($6_1)));
       $64_1 = Math_fround($3($14_1 | 0, 0 | 0, 1 | 0, Math_fround($6_1)));
       $14_1 = $0_1 + 368 | 0;
       $62_1 = Math_fround($62_1 + $60_1);
       $60_1 = Math_fround($59_1 + $64_1);
       $16_1 = HEAP32[($0_1 + 500 | 0) >> 2] | 0;
       if ($93($4_1 | 0, Math_fround($1_1), $5_1 | 0, Math_fround($2_1), HEAP32[($0_1 + 376 | 0) >> 2] | 0 | 0, Math_fround(Math_fround(HEAPF32[$14_1 >> 2])), HEAP32[($0_1 + 380 | 0) >> 2] | 0 | 0, Math_fround(Math_fround(HEAPF32[($0_1 + 372 | 0) >> 2])), Math_fround(Math_fround(HEAPF32[($0_1 + 384 | 0) >> 2])), Math_fround(Math_fround(HEAPF32[($0_1 + 388 | 0) >> 2])), Math_fround($62_1), Math_fround($60_1), $16_1 | 0) | 0) {
        break block2
       }
       $17_1 = HEAP32[($0_1 + 172 | 0) >> 2] | 0;
       if (!$17_1) {
        break block3
       }
       $19_1 = $0_1 + 176 | 0;
       label : while (1) {
        $14_1 = $19_1 + Math_imul($29_1, 24) | 0;
        if ($93($4_1 | 0, Math_fround($1_1), $5_1 | 0, Math_fround($2_1), HEAP32[($14_1 + 8 | 0) >> 2] | 0 | 0, Math_fround(Math_fround(HEAPF32[$14_1 >> 2])), HEAP32[($14_1 + 12 | 0) >> 2] | 0 | 0, Math_fround(Math_fround(HEAPF32[($14_1 + 4 | 0) >> 2])), Math_fround(Math_fround(HEAPF32[($14_1 + 16 | 0) >> 2])), Math_fround(Math_fround(HEAPF32[($14_1 + 20 | 0) >> 2])), Math_fround($62_1), Math_fround($60_1), $16_1 | 0) | 0) {
         break block2
        }
        $29_1 = $29_1 + 1 | 0;
        if (($29_1 | 0) != ($17_1 | 0)) {
         continue label
        }
        break label;
       };
       break block4;
      }
      if (!$8_1) {
       $19_1 = HEAP32[($0_1 + 172 | 0) >> 2] | 0;
       if (!$19_1) {
        break block4
       }
       $16_1 = $0_1 + 176 | 0;
       label1 : while (1) {
        block6 : {
         block5 : {
          $17_1 = Math_imul($29_1, 24);
          $14_1 = $16_1 + $17_1 | 0;
          $62_1 = Math_fround(HEAPF32[$14_1 >> 2]);
          if (!($62_1 != $62_1 | $1_1 != $1_1 | 0)) {
           if (Math_fround(Math_abs(Math_fround($62_1 - $1_1))) < Math_fround(9.999999747378752e-05)) {
            break block5
           }
           break block6;
          }
          if ($1_1 == $1_1 | $62_1 == $62_1 | 0) {
           break block6
          }
         }
         block7 : {
          $17_1 = $16_1 + $17_1 | 0;
          $62_1 = Math_fround(HEAPF32[($17_1 + 4 | 0) >> 2]);
          if (!($62_1 != $62_1 | $2_1 != $2_1 | 0)) {
           if (Math_fround(Math_abs(Math_fround($62_1 - $2_1))) < Math_fround(9.999999747378752e-05)) {
            break block7
           }
           break block6;
          }
          if ($2_1 == $2_1 | $62_1 == $62_1 | 0) {
           break block6
          }
         }
         if ((HEAP32[($17_1 + 8 | 0) >> 2] | 0 | 0) != ($4_1 | 0)) {
          break block6
         }
         if ((HEAP32[($17_1 + 12 | 0) >> 2] | 0 | 0) == ($5_1 | 0)) {
          break block2
         }
        }
        $29_1 = $29_1 + 1 | 0;
        if (($19_1 | 0) != ($29_1 | 0)) {
         continue label1
        }
        break label1;
       };
       break block4;
      }
      block8 : {
       $14_1 = $0_1 + 368 | 0;
       $62_1 = Math_fround(HEAPF32[$14_1 >> 2]);
       if (!($62_1 != $62_1 | $1_1 != $1_1 | 0)) {
        if (Math_fround(Math_abs(Math_fround($62_1 - $1_1))) < Math_fround(9.999999747378752e-05)) {
         break block8
        }
        break block3;
       }
       if ($1_1 == $1_1 | $62_1 == $62_1 | 0) {
        break block3
       }
      }
      $299 = (wasm2js_i32$0 = (HEAP32[($0_1 + 380 | 0) >> 2] | 0 | 0) == ($5_1 | 0) ? $14_1 : 0, wasm2js_i32$1 = 0, wasm2js_i32$2 = (HEAP32[($0_1 + 376 | 0) >> 2] | 0 | 0) == ($4_1 | 0), wasm2js_i32$2 ? wasm2js_i32$0 : wasm2js_i32$1);
      block9 : {
       $14_1 = $2_1 != $2_1;
       $62_1 = Math_fround(HEAPF32[($0_1 + 372 | 0) >> 2]);
       if (!($14_1 | $62_1 != $62_1 | 0)) {
        $316 = Math_fround(Math_abs(Math_fround($62_1 - $2_1))) < Math_fround(9.999999747378752e-05);
        break block9;
       }
       $316 = 0;
       if ($62_1 == $62_1) {
        break block9
       }
       $316 = $14_1;
      }
      $14_1 = $316 ? $299 : 0;
     }
     if (!$14_1 | $43_1 | 0) {
      $29_1 = $14_1;
      break block3;
     }
     HEAPF32[($0_1 + 404 | 0) >> 2] = Math_fround(HEAPF32[($14_1 + 16 | 0) >> 2]);
     HEAPF32[($0_1 + 408 | 0) >> 2] = Math_fround(HEAPF32[($14_1 + 20 | 0) >> 2]);
     $3_1 = $10_1 + ($8_1 ? 12 : 16) | 0;
     HEAP32[$3_1 >> 2] = (HEAP32[$3_1 >> 2] | 0) + 1 | 0;
     $29_1 = $14_1;
     break block10;
    }
    $29_1 = 0;
   }
   $64_1 = $6_1;
   $71_1 = $7_1;
   $34_1 = $11_1 + 1 | 0;
   $13_1 = global$0 - 160 | 0;
   global$0 = $13_1;
   block195 : {
    block11 : {
     if (!(($4_1 | 0) == (1 | 0) | $1_1 == $1_1 | 0)) {
      HEAP32[($13_1 + 32 | 0) >> 2] = 1450;
      $14($0_1 | 0, 5 | 0, 4824 | 0, $13_1 + 32 | 0 | 0);
      break block11;
     }
     if (!(($5_1 | 0) == (1 | 0) | $2_1 == $2_1 | 0)) {
      HEAP32[($13_1 + 16 | 0) >> 2] = 1369;
      $14($0_1 | 0, 5 | 0, 4824 | 0, $13_1 + 16 | 0 | 0);
      break block11;
     }
     $11_1 = $10_1 + ($8_1 ? 0 : 4) | 0;
     HEAP32[$11_1 >> 2] = (HEAP32[$11_1 >> 2] | 0) + 1 | 0;
     $11_1 = (HEAPU8[($0_1 + 20 | 0) >> 0] | 0) & 3 | 0;
     $44_1 = $3_1 ? $3_1 : 1;
     $15_1 = $11_1 ? $11_1 : $44_1;
     HEAP8[($0_1 + 392 | 0) >> 0] = (HEAPU8[($0_1 + 392 | 0) >> 0] | 0) & 252 | 0 | ($15_1 & 3 | 0) | 0;
     $16_1 = $0_1 + 428 | 0;
     $11_1 = (($15_1 | 0) != (1 | 0)) << 3 | 0;
     $20_1 = $0_1 + 20 | 0;
     $17_1 = ($15_1 | 0) == (2 | 0) ? 3 : 2;
     $6_1 = Math_fround($4($20_1 | 0, $17_1 | 0, $15_1 | 0, Math_fround($64_1)));
     HEAPF32[($16_1 + $11_1 | 0) >> 2] = $6_1;
     $14_1 = (($15_1 | 0) == (1 | 0)) << 3 | 0;
     $7_1 = Math_fround($3($20_1 | 0, $17_1 | 0, $15_1 | 0, Math_fround($64_1)));
     HEAPF32[($16_1 + $14_1 | 0) >> 2] = $7_1;
     $60_1 = Math_fround($4($20_1 | 0, 0 | 0, $15_1 | 0, Math_fround($64_1)));
     HEAPF32[($0_1 + 432 | 0) >> 2] = $60_1;
     $59_1 = Math_fround($3($20_1 | 0, 0 | 0, $15_1 | 0, Math_fround($64_1)));
     HEAPF32[($0_1 + 440 | 0) >> 2] = $59_1;
     $16_1 = $0_1 + 444 | 0;
     (wasm2js_i32$0 = $16_1 + $11_1 | 0, wasm2js_f32$0 = Math_fround($18($20_1 | 0, $17_1 | 0, $15_1 | 0))), HEAPF32[wasm2js_i32$0 >> 2] = wasm2js_f32$0;
     (wasm2js_i32$0 = $14_1 + $16_1 | 0, wasm2js_f32$0 = Math_fround($17($20_1 | 0, $17_1 | 0, $15_1 | 0))), HEAPF32[wasm2js_i32$0 >> 2] = wasm2js_f32$0;
     (wasm2js_i32$0 = $0_1, wasm2js_f32$0 = Math_fround($18($20_1 | 0, 0 | 0, $15_1 | 0))), HEAPF32[(wasm2js_i32$0 + 448 | 0) >> 2] = wasm2js_f32$0;
     (wasm2js_i32$0 = $0_1, wasm2js_f32$0 = Math_fround($17($20_1 | 0, 0 | 0, $15_1 | 0))), HEAPF32[(wasm2js_i32$0 + 456 | 0) >> 2] = wasm2js_f32$0;
     $465 = $11_1;
     $11_1 = $0_1 + 460 | 0;
     (wasm2js_i32$0 = $465 + $11_1 | 0, wasm2js_f32$0 = Math_fround($26($20_1 | 0, $17_1 | 0, $15_1 | 0, Math_fround($64_1)))), HEAPF32[wasm2js_i32$0 >> 2] = wasm2js_f32$0;
     (wasm2js_i32$0 = $11_1 + $14_1 | 0, wasm2js_f32$0 = Math_fround($25($20_1 | 0, $17_1 | 0, $15_1 | 0, Math_fround($64_1)))), HEAPF32[wasm2js_i32$0 >> 2] = wasm2js_f32$0;
     (wasm2js_i32$0 = $0_1, wasm2js_f32$0 = Math_fround($26($20_1 | 0, 0 | 0, $15_1 | 0, Math_fround($64_1)))), HEAPF32[(wasm2js_i32$0 + 464 | 0) >> 2] = wasm2js_f32$0;
     $58_1 = Math_fround($25($20_1 | 0, 0 | 0, $15_1 | 0, Math_fround($64_1)));
     HEAPF32[($0_1 + 472 | 0) >> 2] = $58_1;
     $62_1 = Math_fround($6_1 + $7_1);
     $60_1 = Math_fround($60_1 + $59_1);
     block194 : {
      block13 : {
       $11_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
       if ($11_1) {
        $6_1 = ($4_1 | 0) == (1 | 0) ? Math_fround(NaN) : Math_fround($1_1 - $62_1);
        $62_1 = ($5_1 | 0) == (1 | 0) ? Math_fround(NaN) : Math_fround($2_1 - $60_1);
        $515 = $0_1;
        block12 : {
         if (!($4_1 | $5_1 | 0)) {
          (wasm2js_i32$0 = $0_1, wasm2js_f32$0 = Math_fround($7($0_1 | 0, 2 | 0, $15_1 | 0, Math_fround($6_1), Math_fround($64_1), Math_fround($64_1)))), HEAPF32[(wasm2js_i32$0 + 404 | 0) >> 2] = wasm2js_f32$0;
          $533 = Math_fround($7($0_1 | 0, 0 | 0, $15_1 | 0, Math_fround($62_1), Math_fround($71_1), Math_fround($64_1)));
          break block12;
         }
         if ($4_1 >>> 0 >= 3 >>> 0 | $5_1 >>> 0 >= 3 >>> 0 | 0) {
          break block11
         }
         $60_1 = Math_fround(Math_fround(Math_fround(Math_fround(HEAPF32[($0_1 + 460 | 0) >> 2]) + Math_fround(HEAPF32[($0_1 + 468 | 0) >> 2])) + Math_fround(HEAPF32[($0_1 + 444 | 0) >> 2])) + Math_fround(HEAPF32[($0_1 + 452 | 0) >> 2]));
         $7_1 = Math_fround($6_1 - $60_1);
         $564 = $6_1 != $6_1 ? $6_1 : $7_1 > Math_fround(0.0) ? $7_1 : Math_fround(0.0);
         $59_1 = Math_fround(Math_fround(Math_fround(Math_fround(HEAPF32[($0_1 + 464 | 0) >> 2]) + $58_1) + Math_fround(HEAPF32[($0_1 + 448 | 0) >> 2])) + Math_fround(HEAPF32[($0_1 + 456 | 0) >> 2]));
         $7_1 = Math_fround($62_1 - $59_1);
         FUNCTION_TABLE[$11_1 | 0]($13_1 + 136 | 0, $0_1, $564, (131073 >>> (($4_1 << 3 | 0) & 16777208 | 0) | 0) & 255 | 0, $62_1 != $62_1 ? $62_1 : $7_1 > Math_fround(0.0) ? $7_1 : Math_fround(0.0), (131073 >>> (($5_1 << 3 | 0) & 16777208 | 0) | 0) & 255 | 0);
         $61_1 = Math_fround(HEAPF32[($13_1 + 140 | 0) >> 2]);
         $7_1 = Math_fround(HEAPF32[($13_1 + 136 | 0) >> 2]);
         if (!($61_1 >= Math_fround(0.0) & $7_1 >= Math_fround(0.0) | 0)) {
          HEAPF64[($13_1 + 8 | 0) >> 3] = +$61_1;
          HEAPF64[$13_1 >> 3] = +$7_1;
          $14($0_1 | 0, 1 | 0, 3804 | 0, $13_1 | 0);
          $7_1 = Math_fround(HEAPF32[($13_1 + 140 | 0) >> 2]);
          $61_1 = $7_1 > Math_fround(0.0) ? $7_1 : Math_fround(0.0);
          $7_1 = Math_fround(HEAPF32[($13_1 + 136 | 0) >> 2]);
          $7_1 = $7_1 > Math_fround(0.0) ? $7_1 : Math_fround(0.0);
         }
         HEAP32[($10_1 + 20 | 0) >> 2] = (HEAP32[($10_1 + 20 | 0) >> 2] | 0) + 1 | 0;
         $9_1 = $10_1 + ($9_1 << 2 | 0) | 0;
         HEAP32[($9_1 + 24 | 0) >> 2] = (HEAP32[($9_1 + 24 | 0) >> 2] | 0) + 1 | 0;
         (wasm2js_i32$0 = $0_1, wasm2js_f32$0 = Math_fround($7($0_1 | 0, 2 | 0, $15_1 | 0, Math_fround(($4_1 - 1 | 0) >>> 0 < 2 >>> 0 ? Math_fround($60_1 + $7_1) : $6_1), Math_fround($64_1), Math_fround($64_1)))), HEAPF32[(wasm2js_i32$0 + 404 | 0) >> 2] = wasm2js_f32$0;
         $533 = Math_fround($7($0_1 | 0, 0 | 0, $15_1 | 0, Math_fround(($5_1 - 1 | 0) >>> 0 < 2 >>> 0 ? Math_fround($59_1 + $61_1) : $62_1), Math_fround($71_1), Math_fround($64_1)));
        }
        HEAPF32[($515 + 408 | 0) >> 2] = $533;
        break block13;
       }
       block14 : {
        if (!(HEAP32[($0_1 + 480 | 0) >> 2] | 0)) {
         $11_1 = ((HEAP32[($0_1 + 492 | 0) >> 2] | 0) - (HEAP32[($0_1 + 488 | 0) >> 2] | 0) | 0) >> 2 | 0;
         break block14;
        }
        $20($13_1 + 136 | 0 | 0, $0_1 | 0);
        block15 : {
         if (!(HEAP32[($13_1 + 136 | 0) >> 2] | 0)) {
          $11_1 = 0;
          if (!(HEAP32[($13_1 + 140 | 0) >> 2] | 0)) {
           break block15
          }
         }
         $16_1 = $13_1 + 128 | 0;
         $11_1 = 0;
         label3 : while (1) {
          HEAP32[($13_1 + 128 | 0) >> 2] = 0;
          i64toi32_i32$2 = $13_1;
          i64toi32_i32$0 = HEAP32[($13_1 + 136 | 0) >> 2] | 0;
          i64toi32_i32$1 = HEAP32[($13_1 + 140 | 0) >> 2] | 0;
          $691 = i64toi32_i32$0;
          i64toi32_i32$0 = $13_1;
          HEAP32[($13_1 + 120 | 0) >> 2] = $691;
          HEAP32[($13_1 + 124 | 0) >> 2] = i64toi32_i32$1;
          $30($16_1 | 0, HEAP32[($13_1 + 144 | 0) >> 2] | 0 | 0);
          $16($13_1 + 136 | 0 | 0);
          $9_1 = HEAP32[($13_1 + 128 | 0) >> 2] | 0;
          if ($9_1) {
           label2 : while (1) {
            $14_1 = HEAP32[$9_1 >> 2] | 0;
            $9($9_1 | 0);
            $9_1 = $14_1;
            if ($9_1) {
             continue label2
            }
            break label2;
           }
          }
          $11_1 = $11_1 + 1 | 0;
          HEAP32[($13_1 + 128 | 0) >> 2] = 0;
          if (HEAP32[($13_1 + 140 | 0) >> 2] | 0 | (HEAP32[($13_1 + 136 | 0) >> 2] | 0) | 0) {
           continue label3
          }
          break label3;
         };
        }
        $9_1 = HEAP32[($13_1 + 144 | 0) >> 2] | 0;
        if (!$9_1) {
         break block14
        }
        label4 : while (1) {
         $14_1 = HEAP32[$9_1 >> 2] | 0;
         $9($9_1 | 0);
         $9_1 = $14_1;
         if ($9_1) {
          continue label4
         }
         break label4;
        };
       }
       if (!$11_1) {
        $724 = $0_1;
        $725 = $0_1;
        $726 = $15_1;
        if (($4_1 - 1 | 0) >>> 0 > 1 >>> 0) {
         $744 = Math_fround($1_1 - $62_1)
        } else {
         $744 = Math_fround(Math_fround(Math_fround(Math_fround(HEAPF32[($0_1 + 460 | 0) >> 2]) + Math_fround(HEAPF32[($0_1 + 468 | 0) >> 2])) + Math_fround(HEAPF32[($0_1 + 444 | 0) >> 2])) + Math_fround(HEAPF32[($0_1 + 452 | 0) >> 2]))
        }
        (wasm2js_i32$0 = $724, wasm2js_f32$0 = Math_fround($7($725 | 0, 2 | 0, $726 | 0, Math_fround($744), Math_fround($64_1), Math_fround($64_1)))), HEAPF32[(wasm2js_i32$0 + 404 | 0) >> 2] = wasm2js_f32$0;
        $749 = $0_1;
        $750 = $0_1;
        $751 = $15_1;
        if (($5_1 - 1 | 0) >>> 0 > 1 >>> 0) {
         $769 = Math_fround($2_1 - $60_1)
        } else {
         $769 = Math_fround(Math_fround(Math_fround(Math_fround(HEAPF32[($0_1 + 464 | 0) >> 2]) + Math_fround(HEAPF32[($0_1 + 472 | 0) >> 2])) + Math_fround(HEAPF32[($0_1 + 448 | 0) >> 2])) + Math_fround(HEAPF32[($0_1 + 456 | 0) >> 2]))
        }
        (wasm2js_i32$0 = $749, wasm2js_f32$0 = Math_fround($7($750 | 0, 0 | 0, $751 | 0, Math_fround($769), Math_fround($71_1), Math_fround($64_1)))), HEAPF32[(wasm2js_i32$0 + 408 | 0) >> 2] = wasm2js_f32$0;
        break block13;
       }
       block16 : {
        if ($8_1) {
         break block16
        }
        $6_1 = Math_fround($2_1 - $60_1);
        $7_1 = Math_fround($1_1 - $62_1);
        if (!((($5_1 | 0) == (2 | 0) & $6_1 == $6_1 | 0) & $6_1 <= Math_fround(0.0) | 0 | (!($4_1 | $5_1 | 0) | (($4_1 | 0) == (2 | 0) & $7_1 <= Math_fround(0.0) | 0) | 0) | 0)) {
         break block16
        }
        (wasm2js_i32$0 = $0_1, wasm2js_f32$0 = Math_fround($7($0_1 | 0, 2 | 0, $15_1 | 0, Math_fround($7_1 != $7_1 ? Math_fround(0.0) : ($4_1 | 0) == (2 | 0) ? ($7_1 < Math_fround(0.0) ? Math_fround(0.0) : $7_1) : $7_1), Math_fround($64_1), Math_fround($64_1)))), HEAPF32[(wasm2js_i32$0 + 404 | 0) >> 2] = wasm2js_f32$0;
        (wasm2js_i32$0 = $0_1, wasm2js_f32$0 = Math_fround($7($0_1 | 0, 0 | 0, $15_1 | 0, Math_fround($6_1 != $6_1 ? Math_fround(0.0) : ($5_1 | 0) == (2 | 0) ? ($6_1 < Math_fround(0.0) ? Math_fround(0.0) : $6_1) : $6_1), Math_fround($71_1), Math_fround($64_1)))), HEAPF32[(wasm2js_i32$0 + 408 | 0) >> 2] = wasm2js_f32$0;
        break block13;
       }
       $49($0_1 | 0);
       HEAP8[($0_1 + 392 | 0) >> 0] = (HEAPU8[($0_1 + 392 | 0) >> 0] | 0) & 251 | 0;
       $64($0_1 | 0);
       $19_1 = 3;
       $9_1 = ((HEAPU8[($0_1 + 20 | 0) >> 0] | 0) >>> 2 | 0) & 3 | 0;
       block18 : {
        block17 : {
         if (($15_1 | 0) != (2 | 0)) {
          break block17
         }
         block19 : {
          switch ($9_1 - 2 | 0 | 0) {
          case 0:
           break block18;
          case 1:
           break block19;
          default:
           break block17;
          };
         }
         $19_1 = 2;
         break block18;
        }
        $19_1 = $9_1;
       }
       $39_1 = HEAPU8[($0_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($0_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0;
       $6_1 = Math_fround($26($20_1 | 0, $19_1 | 0, $15_1 | 0, Math_fround($64_1)));
       $7_1 = Math_fround($18($20_1 | 0, $19_1 | 0, $15_1 | 0));
       $59_1 = Math_fround($25($20_1 | 0, $19_1 | 0, $15_1 | 0, Math_fround($64_1)));
       $58_1 = Math_fround($17($20_1 | 0, $19_1 | 0, $15_1 | 0));
       $16_1 = 0;
       $22_1 = $19_1 >>> 0 < 2 >>> 0 ? $17_1 : 0;
       $63_1 = Math_fround($26($20_1 | 0, $22_1 | 0, $15_1 | 0, Math_fround($64_1)));
       $61_1 = Math_fround($18($20_1 | 0, $22_1 | 0, $15_1 | 0));
       $65_1 = Math_fround($25($20_1 | 0, $22_1 | 0, $15_1 | 0, Math_fround($64_1)));
       $68_1 = Math_fround($17($20_1 | 0, $22_1 | 0, $15_1 | 0));
       $66_1 = Math_fround($66($20_1 | 0, $22_1 | 0, $15_1 | 0, Math_fround($64_1)));
       $67_1 = Math_fround($45($20_1 | 0, $22_1 | 0, $15_1 | 0));
       $80_1 = Math_fround($1_1 - $62_1);
       $74_1 = Math_fround(Math_fround($6_1 + $7_1) + Math_fround($59_1 + $58_1));
       $70_1 = Math_fround(Math_fround($63_1 + $61_1) + Math_fround($65_1 + $68_1));
       $25_1 = $19_1 >>> 0 > 1 >>> 0;
       $59_1 = Math_fround($92($0_1 | 0, $15_1 | 0, 0 | 0, Math_fround($80_1), Math_fround($25_1 ? $74_1 : $70_1), Math_fround($64_1), Math_fround($64_1)));
       $81_1 = Math_fround($2_1 - $60_1);
       $69_1 = Math_fround($92($0_1 | 0, $15_1 | 0, 1 | 0, Math_fround($81_1), Math_fround($25_1 ? $70_1 : $74_1), Math_fround($71_1), Math_fround($64_1)));
       block22 : {
        block20 : {
         $28_1 = $25_1 ? $4_1 : $5_1;
         if ($28_1) {
          break block20
         }
         $20($13_1 + 136 | 0 | 0, $0_1 | 0);
         block24 : {
          block21 : {
           $14_1 = HEAP32[($13_1 + 136 | 0) >> 2] | 0;
           $9_1 = HEAP32[($13_1 + 140 | 0) >> 2] | 0;
           if (!($14_1 | $9_1 | 0)) {
            break block21
           }
           label5 : while (1) {
            $963 = HEAP32[($14_1 + 492 | 0) >> 2] | 0;
            $14_1 = HEAP32[($14_1 + 488 | 0) >> 2] | 0;
            if ((($963 - $14_1 | 0) >> 2 | 0) >>> 0 <= $9_1 >>> 0) {
             break block22
            }
            block23 : {
             $9_1 = HEAP32[($14_1 + ($9_1 << 2 | 0) | 0) >> 2] | 0;
             if (!($91($9_1 | 0) | 0)) {
              break block23
             }
             if ($16_1) {
              break block21
             }
             $6_1 = Math_fround($29($9_1 | 0));
             if ($6_1 == $6_1 & Math_fround(Math_abs($6_1)) < Math_fround(9.999999747378752e-05) | 0) {
              break block21
             }
             $6_1 = Math_fround($34($9_1 | 0));
             if ($6_1 != $6_1) {
              $16_1 = $9_1;
              break block23;
             }
             $16_1 = $9_1;
             if (Math_fround(Math_abs($6_1)) < Math_fround(9.999999747378752e-05)) {
              break block21
             }
            }
            $16($13_1 + 136 | 0 | 0);
            $9_1 = HEAP32[($13_1 + 140 | 0) >> 2] | 0;
            $14_1 = HEAP32[($13_1 + 136 | 0) >> 2] | 0;
            if ($9_1 | $14_1 | 0) {
             continue label5
            }
            break label5;
           };
           break block24;
          }
          $16_1 = 0;
         }
         $9_1 = HEAP32[($13_1 + 144 | 0) >> 2] | 0;
         if (!$9_1) {
          break block20
         }
         label6 : while (1) {
          $14_1 = HEAP32[$9_1 >> 2] | 0;
          $9($9_1 | 0);
          $9_1 = $14_1;
          if ($9_1) {
           continue label6
          }
          break label6;
         };
        }
        $20($13_1 + 136 | 0 | 0, $0_1 | 0);
        $9_1 = HEAP32[($13_1 + 140 | 0) >> 2] | 0;
        block25 : {
         $14_1 = HEAP32[($13_1 + 136 | 0) >> 2] | 0;
         if (!$14_1) {
          $61_1 = Math_fround(0.0);
          if (!$9_1) {
           break block25
          }
         }
         $35_1 = $69_1 != $69_1;
         $40_1 = $35_1 | ($5_1 | 0) != (0 | 0) | 0;
         $36_1 = $59_1 != $59_1;
         $41_1 = $36_1 | ($4_1 | 0) != (0 | 0) | 0;
         $61_1 = Math_fround(0.0);
         label7 : while (1) {
          $1043 = HEAP32[($14_1 + 492 | 0) >> 2] | 0;
          $14_1 = HEAP32[($14_1 + 488 | 0) >> 2] | 0;
          if ((($1043 - $14_1 | 0) >> 2 | 0) >>> 0 <= $9_1 >>> 0) {
           break block22
          }
          $14_1 = HEAP32[($14_1 + ($9_1 << 2 | 0) | 0) >> 2] | 0;
          $90($14_1 | 0);
          block26 : {
           $9_1 = HEAPU8[($14_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($14_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($14_1 + 23 | 0) >> 0] | 0) << 16 | 0) | 0;
           if (($9_1 & 786432 | 0 | 0) == (262144 | 0)) {
            $89($14_1 | 0);
            $1067 = $14_1;
            $9_1 = HEAPU8[$14_1 >> 0] | 0;
            $14_1 = $9_1 | 1 | 0;
            HEAP8[$1067 >> 0] = $9_1 & 4 | 0 ? $14_1 & 251 | 0 : $14_1;
            break block26;
           }
           if ($8_1) {
            $9_1 = (HEAPU8[($14_1 + 20 | 0) >> 0] | 0) & 3 | 0;
            $88($14_1 | 0, ($9_1 ? $9_1 : $15_1) | 0, Math_fround($59_1), Math_fround($69_1));
            $1098 = HEAPU8[($14_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($14_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($14_1 + 23 | 0) >> 0] | 0) << 16 | 0) | 0;
           } else {
            $1098 = $9_1
           }
           if (($1098 & 12288 | 0 | 0) == (8192 | 0)) {
            break block26
           }
           $17_1 = $14_1 + 20 | 0;
           block27 : {
            if (($14_1 | 0) == ($16_1 | 0)) {
             HEAP32[($16_1 + 156 | 0) >> 2] = 0;
             HEAP32[($16_1 + 152 | 0) >> 2] = $12_1;
             $7_1 = Math_fround(0.0);
             break block27;
            }
            $9_1 = ((HEAPU8[$20_1 >> 0] | 0) >>> 2 | 0) & 3 | 0;
            block29 : {
             block28 : {
              if (($15_1 | 0) != (2 | 0)) {
               break block28
              }
              $18_1 = 3;
              block30 : {
               switch ($9_1 - 2 | 0 | 0) {
               case 0:
                break block29;
               case 1:
                break block30;
               default:
                break block28;
               };
              }
              $18_1 = 2;
              break block29;
             }
             $18_1 = $9_1;
            }
            HEAP32[($13_1 + 104 | 0) >> 2] = 2143289344;
            HEAP32[($13_1 + 80 | 0) >> 2] = 2143289344;
            $23_1 = $14_1 + 124 | 0;
            $1($13_1 + 120 | 0 | 0, $23_1 | 0, HEAPU16[($14_1 + 30 | 0) >> 1] | 0 | 0);
            $30_1 = $18_1 >>> 0 > 1 >>> 0;
            $62_1 = $30_1 ? $59_1 : $69_1;
            block35 : {
             block34 : {
              block32 : {
               block31 : {
                $9_1 = HEAPU8[($13_1 + 124 | 0) >> 0] | 0;
                switch ($9_1 | 0) {
                case 0:
                case 3:
                 break block31;
                default:
                 break block32;
                };
               }
               block33 : {
                $6_1 = Math_fround($2($23_1 | 0, HEAPU16[($14_1 + 24 | 0) >> 1] | 0 | 0));
                if ($6_1 != $6_1) {
                 break block33
                }
                if (!(Math_fround($2($23_1 | 0, HEAPU16[($14_1 + 24 | 0) >> 1] | 0 | 0)) > Math_fround(0.0))) {
                 break block33
                }
                $9_1 = (HEAPU8[((HEAP32[($14_1 + 500 | 0) >> 2] | 0) + 8 | 0) >> 0] | 0) & 1 | 0;
                if ($9_1) {
                 break block33
                }
                $7_1 = $9_1 ? Math_fround(NaN) : Math_fround(0.0);
                break block34;
               }
               $6_1 = Math_fround(NaN);
               break block35;
              }
              $7_1 = Math_fround(HEAPF32[($13_1 + 120 | 0) >> 2]);
              $6_1 = Math_fround(NaN);
              block36 : {
               switch ($9_1 - 1 | 0 | 0) {
               case 0:
                break block34;
               case 1:
                break block36;
               default:
                break block35;
               };
              }
              $6_1 = Math_fround(Math_fround($7_1 * $62_1) * Math_fround(.009999999776482582));
              break block35;
             }
             $6_1 = $7_1;
            }
            if (((HEAPU8[($14_1 + 23 | 0) >> 0] | 0) << 16 | 0) & 1048576 | 0) {
             $1170 = $6_1;
             $6_1 = Math_fround($54($17_1 | 0, $15_1 | 0, (257 >>> ($18_1 << 3 | 0) | 0) & 1 | 0 | 0, Math_fround($59_1)));
             $6_1 = Math_fround($1170 + ($6_1 == $6_1 ? $6_1 : Math_fround(0.0)));
            }
            $7_1 = Math_fround(HEAPF32[($14_1 + 504 | 0) >> 2]);
            $31_1 = 0;
            $24_1 = 0;
            block39 : {
             block37 : {
              switch ((HEAPU8[($14_1 + 508 | 0) >> 0] | 0) - 1 | 0 | 0) {
              case 1:
               $7_1 = Math_fround(Math_fround($59_1 * $7_1) * Math_fround(.009999999776482582));
               break;
              case 0:
               break block37;
              default:
               break block39;
              };
             }
             if ($7_1 != $7_1) {
              break block39
             }
             $24_1 = $7_1 >= Math_fround(0.0);
            }
            $7_1 = Math_fround(HEAPF32[($14_1 + 512 | 0) >> 2]);
            block42 : {
             block40 : {
              switch ((HEAPU8[($14_1 + 516 | 0) >> 0] | 0) - 1 | 0 | 0) {
              case 1:
               $7_1 = Math_fround(Math_fround($69_1 * $7_1) * Math_fround(.009999999776482582));
               break;
              case 0:
               break block40;
              default:
               break block42;
              };
             }
             if ($7_1 != $7_1) {
              break block42
             }
             $31_1 = $7_1 >= Math_fround(0.0);
            }
            block43 : {
             $1213 = $14_1;
             block44 : {
              $9_1 = $6_1 != $6_1;
              if (!($9_1 | $62_1 != $62_1 | 0)) {
               $7_1 = Math_fround(HEAPF32[($14_1 + 156 | 0) >> 2]);
               if ($7_1 == $7_1) {
                if (!((HEAPU8[((HEAP32[($14_1 + 500 | 0) >> 2] | 0) + 16 | 0) >> 0] | 0) & 1 | 0)) {
                 break block43
                }
                if ((HEAP32[($14_1 + 152 | 0) >> 2] | 0 | 0) == ($12_1 | 0)) {
                 break block43
                }
               }
               $7_1 = Math_fround(Math_fround(Math_fround($26($17_1 | 0, $18_1 | 0, $15_1 | 0, Math_fround($59_1))) + Math_fround($18($17_1 | 0, $18_1 | 0, $15_1 | 0))) + Math_fround(Math_fround($25($17_1 | 0, $18_1 | 0, $15_1 | 0, Math_fround($59_1))) + Math_fround($17($17_1 | 0, $18_1 | 0, $15_1 | 0))));
               $1276 = $6_1 == $6_1 & $7_1 == $7_1 | 0 ? ($6_1 < $7_1 ? $7_1 : $6_1) : $9_1 ? $7_1 : $6_1;
               break block44;
              }
              if ($24_1 & $30_1 | 0) {
               $7_1 = Math_fround(Math_fround(Math_fround($26($17_1 | 0, 2 | 0, $15_1 | 0, Math_fround($59_1))) + Math_fround($18($17_1 | 0, 2 | 0, $15_1 | 0))) + Math_fround(Math_fround($25($17_1 | 0, 2 | 0, $15_1 | 0, Math_fround($59_1))) + Math_fround($17($17_1 | 0, 2 | 0, $15_1 | 0))));
               $6_1 = Math_fround($19($14_1 | 0, $15_1 | 0, 0 | 0, Math_fround($59_1), Math_fround($59_1)));
               $1276 = $6_1 == $6_1 & $7_1 == $7_1 | 0 ? ($6_1 < $7_1 ? $7_1 : $6_1) : $6_1 != $6_1 ? $7_1 : $6_1;
               break block44;
              }
              if (!($30_1 | !$31_1 | 0)) {
               $7_1 = Math_fround(Math_fround(Math_fround($26($17_1 | 0, 0 | 0, $15_1 | 0, Math_fround($59_1))) + Math_fround($18($17_1 | 0, 0 | 0, $15_1 | 0))) + Math_fround(Math_fround($25($17_1 | 0, 0 | 0, $15_1 | 0, Math_fround($59_1))) + Math_fround($17($17_1 | 0, 0 | 0, $15_1 | 0))));
               $6_1 = Math_fround($19($14_1 | 0, $15_1 | 0, 1 | 0, Math_fround($69_1), Math_fround($59_1)));
               $1276 = $6_1 == $6_1 & $7_1 == $7_1 | 0 ? ($6_1 < $7_1 ? $7_1 : $6_1) : $6_1 != $6_1 ? $7_1 : $6_1;
               break block44;
              }
              $26_1 = 1;
              HEAP32[($13_1 + 100 | 0) >> 2] = 1;
              HEAP32[($13_1 + 120 | 0) >> 2] = 1;
              $62_1 = Math_fround(Math_fround($4($17_1 | 0, 2 | 0, 1 | 0, Math_fround($59_1))) + Math_fround($3($17_1 | 0, 2 | 0, 1 | 0, Math_fround($59_1))));
              $60_1 = Math_fround($4($17_1 | 0, 0 | 0, 1 | 0, Math_fround($59_1)));
              $58_1 = Math_fround($3($17_1 | 0, 0 | 0, 1 | 0, Math_fround($59_1)));
              $7_1 = Math_fround(NaN);
              $21_1 = 1;
              $6_1 = Math_fround(NaN);
              if ($24_1) {
               $6_1 = Math_fround($19($14_1 | 0, $15_1 | 0, 0 | 0, Math_fround($59_1), Math_fround($59_1)));
               HEAP32[($13_1 + 120 | 0) >> 2] = 0;
               $6_1 = Math_fround($62_1 + $6_1);
               HEAPF32[($13_1 + 104 | 0) >> 2] = $6_1;
               $21_1 = 0;
              }
              $60_1 = Math_fround($60_1 + $58_1);
              if ($31_1) {
               $7_1 = Math_fround($19($14_1 | 0, $15_1 | 0, 1 | 0, Math_fround($69_1), Math_fround($59_1)));
               HEAP32[($13_1 + 100 | 0) >> 2] = 0;
               $7_1 = Math_fround($60_1 + $7_1);
               HEAPF32[($13_1 + 80 | 0) >> 2] = $7_1;
               $26_1 = 0;
              }
              block47 : {
               block45 : {
                block46 : {
                 $9_1 = (((HEAPU8[($0_1 + 23 | 0) >> 0] | 0) << 16 | 0) & 196608 | 0 | 0) == (131072 | 0);
                 $32_1 = $18_1 >>> 0 < 2 >>> 0;
                 if (!($9_1 & $32_1 | 0)) {
                  if ($9_1 | $36_1 | 0) {
                   break block45
                  }
                  if ($6_1 != $6_1) {
                   break block46
                  }
                  break block45;
                 }
                 if ($36_1 | $6_1 == $6_1 | 0) {
                  break block47
                 }
                }
                $21_1 = 2;
                HEAP32[($13_1 + 120 | 0) >> 2] = 2;
                HEAPF32[($13_1 + 104 | 0) >> 2] = $59_1;
                $6_1 = $59_1;
               }
               block48 : {
                if ($9_1 ? $32_1 : 1) {
                 if ($9_1 | $35_1 | 0) {
                  break block47
                 }
                 if ($7_1 != $7_1) {
                  break block48
                 }
                 break block47;
                }
                if ($35_1 | $7_1 == $7_1 | 0) {
                 break block47
                }
               }
               $26_1 = 2;
               HEAP32[($13_1 + 100 | 0) >> 2] = 2;
               HEAPF32[($13_1 + 80 | 0) >> 2] = $69_1;
               $7_1 = $69_1;
              }
              block49 : {
               $58_1 = Math_fround($2($23_1 | 0, HEAPU16[($14_1 + 122 | 0) >> 1] | 0 | 0));
               if ($58_1 != $58_1) {
                break block49
               }
               block50 : {
                if (!($21_1 | $30_1 | 0)) {
                 $7_1 = Math_fround($2($23_1 | 0, HEAPU16[($14_1 + 122 | 0) >> 1] | 0 | 0));
                 HEAP32[($13_1 + 100 | 0) >> 2] = 0;
                 HEAPF32[($13_1 + 80 | 0) >> 2] = Math_fround($60_1 + Math_fround(Math_fround($6_1 - $62_1) / $7_1));
                 $1479 = 0;
                 break block50;
                }
                if ($26_1 | $32_1 | 0) {
                 break block49
                }
                $6_1 = Math_fround($2($23_1 | 0, HEAPU16[($14_1 + 122 | 0) >> 1] | 0 | 0));
                HEAP32[($13_1 + 120 | 0) >> 2] = 0;
                HEAPF32[($13_1 + 104 | 0) >> 2] = Math_fround(Math_fround($6_1 * Math_fround($7_1 - $60_1)) + $62_1);
                $1479 = 0;
               }
               $26_1 = $1479;
               $21_1 = 0;
              }
              $9_1 = (HEAPU8[($14_1 + 22 | 0) >> 0] | 0 | ((HEAPU8[($14_1 + 23 | 0) >> 0] | 0) << 8 | 0) | 0) & 15 | 0;
              if (!$9_1) {
               $9_1 = (HEAPU8[($0_1 + 21 | 0) >> 0] | 0) >>> 4 | 0
              }
              block51 : {
               if (!$21_1 | (($9_1 | 0) == (5 | 0) | $30_1 | 0 | ($24_1 | $41_1 | 0 | ($9_1 | 0) != (4 | 0) | 0) | 0) | 0) {
                break block51
               }
               HEAP32[($13_1 + 120 | 0) >> 2] = 0;
               HEAPF32[($13_1 + 104 | 0) >> 2] = $59_1;
               $6_1 = Math_fround($2($23_1 | 0, HEAPU16[($14_1 + 122 | 0) >> 1] | 0 | 0));
               if ($6_1 != $6_1) {
                break block51
               }
               $26_1 = 0;
               $6_1 = Math_fround($2($23_1 | 0, HEAPU16[($14_1 + 122 | 0) >> 1] | 0 | 0));
               HEAP32[($13_1 + 100 | 0) >> 2] = 0;
               HEAPF32[($13_1 + 80 | 0) >> 2] = Math_fround(Math_fround($59_1 - $62_1) / $6_1);
              }
              $24_1 = (HEAPU8[($14_1 + 22 | 0) >> 0] | 0 | ((HEAPU8[($14_1 + 23 | 0) >> 0] | 0) << 8 | 0) | 0) & 15 | 0;
              if (!$24_1) {
               $24_1 = (HEAPU8[($0_1 + 21 | 0) >> 0] | 0) >>> 4 | 0
              }
              block52 : {
               if ($32_1 | $40_1 | 0 | $31_1 | 0 | ($24_1 | 0) == (5 | 0) | 0 | (!$26_1 | ($24_1 | 0) != (4 | 0) | 0) | 0) {
                break block52
               }
               HEAP32[($13_1 + 100 | 0) >> 2] = 0;
               HEAPF32[($13_1 + 80 | 0) >> 2] = $69_1;
               $6_1 = Math_fround($2($23_1 | 0, HEAPU16[($14_1 + 122 | 0) >> 1] | 0 | 0));
               if ($6_1 != $6_1) {
                break block52
               }
               $6_1 = Math_fround($2($23_1 | 0, HEAPU16[($14_1 + 122 | 0) >> 1] | 0 | 0));
               HEAP32[($13_1 + 120 | 0) >> 2] = 0;
               HEAPF32[($13_1 + 104 | 0) >> 2] = Math_fround($6_1 * Math_fround($69_1 - $60_1));
              }
              $33($14_1 | 0, $15_1 | 0, 2 | 0, Math_fround($59_1), Math_fround($59_1), $13_1 + 120 | 0 | 0, $13_1 + 104 | 0 | 0);
              $33($14_1 | 0, $15_1 | 0, 0 | 0, Math_fround($69_1), Math_fround($59_1), $13_1 + 100 | 0 | 0, $13_1 + 80 | 0 | 0);
              $31($14_1 | 0, Math_fround(Math_fround(HEAPF32[($13_1 + 104 | 0) >> 2])), Math_fround(Math_fround(HEAPF32[($13_1 + 80 | 0) >> 2])), $15_1 | 0, HEAP32[($13_1 + 120 | 0) >> 2] | 0 | 0, HEAP32[($13_1 + 100 | 0) >> 2] | 0 | 0, Math_fround($59_1), Math_fround($69_1), 0 | 0, 5 | 0, $10_1 | 0, $34_1 | 0, $12_1 | 0) | 0;
              $6_1 = Math_fround(HEAPF32[(($14_1 + ((HEAP32[(($18_1 << 2 | 0) + 4860 | 0) >> 2] | 0) << 2 | 0) | 0) + 404 | 0) >> 2]);
              $7_1 = Math_fround(Math_fround(Math_fround($26($17_1 | 0, $18_1 | 0, $15_1 | 0, Math_fround($59_1))) + Math_fround($18($17_1 | 0, $18_1 | 0, $15_1 | 0))) + Math_fround(Math_fround($25($17_1 | 0, $18_1 | 0, $15_1 | 0, Math_fround($59_1))) + Math_fround($17($17_1 | 0, $18_1 | 0, $15_1 | 0))));
              $1276 = $6_1 == $6_1 & $7_1 == $7_1 | 0 ? ($6_1 < $7_1 ? $7_1 : $6_1) : $6_1 != $6_1 ? $7_1 : $6_1;
             }
             $7_1 = $1276;
             HEAPF32[($1213 + 156 | 0) >> 2] = $7_1;
            }
            HEAP32[($14_1 + 152 | 0) >> 2] = $12_1;
           }
           $61_1 = Math_fround($61_1 + Math_fround($7_1 + Math_fround(Math_fround($4($17_1 | 0, $19_1 | 0, 1 | 0, Math_fround($59_1))) + Math_fround($3($17_1 | 0, $19_1 | 0, 1 | 0, Math_fround($59_1))))));
          }
          $16($13_1 + 136 | 0 | 0);
          $9_1 = HEAP32[($13_1 + 140 | 0) >> 2] | 0;
          $14_1 = HEAP32[($13_1 + 136 | 0) >> 2] | 0;
          if ($9_1 | $14_1 | 0) {
           continue label7
          }
          break label7;
         };
        }
        $9_1 = HEAP32[($13_1 + 144 | 0) >> 2] | 0;
        if ($9_1) {
         label8 : while (1) {
          $14_1 = HEAP32[$9_1 >> 2] | 0;
          $9($9_1 | 0);
          $9_1 = $14_1;
          if ($9_1) {
           continue label8
          }
          break label8;
         }
        }
        $7_1 = $25_1 ? $59_1 : $69_1;
        $6_1 = Math_fround($61_1 + Math_fround(0.0));
        if ($11_1 >>> 0 >= 2 >>> 0) {
         $6_1 = Math_fround(Math_fround(Math_fround($47($20_1 | 0, $19_1 | 0, Math_fround($7_1))) * Math_fround(($11_1 - 1 | 0) >>> 0)) + $6_1)
        }
        $62_1 = Math_fround($66_1 + $67_1);
        $26_1 = $25_1 ? $5_1 : $4_1;
        $77_1 = $25_1 ? $71_1 : $64_1;
        $73_1 = $25_1 ? $64_1 : $71_1;
        $20($13_1 + 80 | 0 | 0, $0_1 | 0);
        $11_1 = $6_1 > $7_1;
        $31_1 = $39_1 & 49152 | 0;
        $30_1 = $31_1 ? (($28_1 | 0) == (2 | 0) ? ($11_1 ? 0 : $28_1) : $28_1) : $28_1;
        $68_1 = $25_1 ? $69_1 : $59_1;
        $79_1 = Math_fround($47($20_1 | 0, $22_1 | 0, Math_fround($68_1)));
        $17_1 = HEAP32[($13_1 + 84 | 0) >> 2] | 0;
        $9_1 = HEAP32[($13_1 + 80 | 0) >> 2] | 0;
        if ($17_1 | $9_1 | 0) {
         $41_1 = $68_1 != $68_1;
         $45_1 = $41_1 ? 1 : 2;
         $46_1 = !$11_1 | ($28_1 | 0) == (1 | 0) | 0;
         $25_1 = $19_1 >>> 0 < 2 >>> 0;
         $47_1 = $0_1 + 114 | 0;
         $48_1 = $0_1 + 124 | 0;
         $11_1 = $19_1 << 2 | 0;
         $49_1 = $11_1 + 4844 | 0;
         $50_1 = $11_1 + 4828 | 0;
         $14_1 = $22_1 << 2 | 0;
         $28_1 = $14_1 + 4844 | 0;
         $32_1 = $14_1 + 4828 | 0;
         $36_1 = $11_1 + 4860 | 0;
         $35_1 = $14_1 + 4860 | 0;
         $51_1 = ($26_1 | 0) != (0 | 0);
         $52_1 = $51_1 | $8_1 | 0;
         $53_1 = !$26_1;
         $54_1 = $53_1 & ($8_1 ^ 1 | 0) | 0;
         $55_1 = !($26_1 | $31_1 | 0);
         $56_1 = $13_1 + 112 | 0;
         $39_1 = $13_1 + 128 | 0;
         $40_1 = (257 >>> ($19_1 << 3 | 0) | 0) & 255 | 0;
         $57_1 = ($26_1 - 1 | 0) >>> 0 < 2 >>> 0;
         label15 : while (1) {
          HEAP32[($13_1 + 128 | 0) >> 2] = 0;
          i64toi32_i32$0 = $13_1;
          i64toi32_i32$1 = 0;
          HEAP32[($13_1 + 120 | 0) >> 2] = 0;
          HEAP32[($13_1 + 124 | 0) >> 2] = i64toi32_i32$1;
          block53 : {
           $11_1 = HEAP32[($0_1 + 492 | 0) >> 2] | 0;
           $14_1 = HEAP32[($0_1 + 488 | 0) >> 2] | 0;
           if (($11_1 | 0) == ($14_1 | 0)) {
            break block53
           }
           $11_1 = $11_1 - $14_1 | 0;
           if (($11_1 | 0) < (0 | 0)) {
            break block22
           }
           $16_1 = $44($13_1 + 136 | 0 | 0, $11_1 >> 2 | 0 | 0, 0 | 0, $39_1 | 0) | 0;
           $11_1 = HEAP32[($13_1 + 120 | 0) >> 2] | 0;
           $14_1 = (HEAP32[($13_1 + 124 | 0) >> 2] | 0) - $11_1 | 0;
           $14_1 = $21((HEAP32[($13_1 + 140 | 0) >> 2] | 0) - $14_1 | 0 | 0, $11_1 | 0, $14_1 | 0) | 0;
           $11_1 = HEAP32[($13_1 + 120 | 0) >> 2] | 0;
           HEAP32[($13_1 + 140 | 0) >> 2] = $11_1;
           HEAP32[($13_1 + 120 | 0) >> 2] = $14_1;
           i64toi32_i32$2 = $13_1;
           i64toi32_i32$1 = HEAP32[($13_1 + 144 | 0) >> 2] | 0;
           i64toi32_i32$0 = HEAP32[($13_1 + 148 | 0) >> 2] | 0;
           $86_1 = i64toi32_i32$1;
           $86$hi = i64toi32_i32$0;
           $14_1 = HEAP32[($13_1 + 124 | 0) >> 2] | 0;
           HEAP32[($13_1 + 144 | 0) >> 2] = $14_1;
           $18_1 = HEAP32[($13_1 + 128 | 0) >> 2] | 0;
           i64toi32_i32$1 = $13_1;
           HEAP32[($13_1 + 124 | 0) >> 2] = $86_1;
           HEAP32[($13_1 + 128 | 0) >> 2] = i64toi32_i32$0;
           HEAP32[($13_1 + 148 | 0) >> 2] = $18_1;
           HEAP32[$16_1 >> 2] = $11_1;
           if (($11_1 | 0) != ($14_1 | 0)) {
            HEAP32[($13_1 + 144 | 0) >> 2] = $14_1 + ((($11_1 - $14_1 | 0) + 3 | 0) & -4 | 0) | 0
           }
           if (!$11_1) {
            break block53
           }
           $9($11_1 | 0);
          }
          $14_1 = HEAPU8[$20_1 >> 0] | 0;
          $11_1 = ($14_1 >>> 2 | 0) & 3 | 0;
          block55 : {
           block54 : {
            $14_1 = $14_1 & 3 | 0;
            $18_1 = $14_1 ? $14_1 : $44_1;
            if (($18_1 | 0) != (2 | 0)) {
             break block54
            }
            $16_1 = 3;
            block56 : {
             switch ($11_1 - 2 | 0 | 0) {
             case 0:
              break block55;
             case 1:
              break block56;
             default:
              break block54;
             };
            }
            $16_1 = 2;
            break block55;
           }
           $16_1 = $11_1;
          }
          $11_1 = HEAPU8[($0_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($0_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0;
          $63_1 = Math_fround($47($20_1 | 0, $16_1 | 0, Math_fround($7_1)));
          block57 : {
           if (!($9_1 | $17_1 | 0)) {
            $67_1 = Math_fround(0.0);
            $17_1 = 0;
            $66_1 = Math_fround(0.0);
            $65_1 = Math_fround(0.0);
            $21_1 = 0;
            break block57;
           }
           $37_1 = $11_1 & 49152 | 0;
           $24_1 = $16_1 >>> 0 < 2 >>> 0;
           $11_1 = $16_1 << 2 | 0;
           $33_1 = $11_1 + 4844 | 0;
           $42_1 = $11_1 + 4828 | 0;
           $21_1 = 0;
           $65_1 = Math_fround(0.0);
           $14_1 = $17_1;
           $66_1 = Math_fround(0.0);
           $67_1 = Math_fround(0.0);
           $23_1 = 0;
           $61_1 = Math_fround(0.0);
           label10 : while (1) {
            $1927 = HEAP32[($9_1 + 492 | 0) >> 2] | 0;
            $9_1 = HEAP32[($9_1 + 488 | 0) >> 2] | 0;
            if ((($1927 - $9_1 | 0) >> 2 | 0) >>> 0 <= $14_1 >>> 0) {
             break block22
            }
            block58 : {
             $9_1 = HEAP32[($9_1 + ($14_1 << 2 | 0) | 0) >> 2] | 0;
             $11_1 = HEAPU8[($9_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($9_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($9_1 + 23 | 0) >> 0] | 0) << 16 | 0) | 0;
             if (($11_1 & 786432 | 0 | 0) == (262144 | 0) | ($11_1 & 12288 | 0 | 0) == (8192 | 0) | 0) {
              break block58
             }
             $17_1 = $13_1 + 136 | 0;
             $11_1 = $9_1 + 20 | 0;
             $10($17_1 | 0, $11_1 | 0, HEAP32[$42_1 >> 2] | 0 | 0, $3_1 | 0);
             $38_1 = HEAPU8[($13_1 + 140 | 0) >> 0] | 0;
             $10($17_1 | 0, $11_1 | 0, HEAP32[$33_1 >> 2] | 0 | 0, $3_1 | 0);
             $17_1 = HEAPU8[($13_1 + 140 | 0) >> 0] | 0;
             HEAP32[($9_1 + 476 | 0) >> 2] = $27_1;
             $21_1 = $21_1 + (($38_1 | 0) == (3 | 0)) | 0;
             $17_1 = ($17_1 | 0) == (3 | 0);
             $75_1 = Math_fround($4($11_1 | 0, $16_1 | 0, 1 | 0, Math_fround($59_1)));
             $78_1 = Math_fround($3($11_1 | 0, $16_1 | 0, 1 | 0, Math_fround($59_1)));
             $23_1 = $23_1 ? $23_1 : $9_1;
             $38_1 = ($9_1 | 0) == ($23_1 | 0);
             $60_1 = Math_fround(HEAPF32[($9_1 + 156 | 0) >> 2]);
             $58_1 = Math_fround($23($11_1 | 0, $18_1 | 0, $24_1 | 0, Math_fround($73_1), Math_fround($64_1)));
             block59 : {
              $6_1 = Math_fround($15($11_1 | 0, $18_1 | 0, $24_1 | 0, Math_fround($73_1), Math_fround($64_1)));
              if ($6_1 >= Math_fround(0.0) & $6_1 < $60_1 | 0) {
               break block59
              }
              if (!($58_1 >= Math_fround(0.0))) {
               $6_1 = $60_1;
               break block59;
              }
              $6_1 = $58_1 > $60_1 ? $58_1 : $60_1;
             }
             $21_1 = $17_1 + $21_1 | 0;
             block60 : {
              $60_1 = $38_1 ? Math_fround(0.0) : $63_1;
              $58_1 = Math_fround($75_1 + $78_1);
              if (!$37_1 | !(Math_fround($60_1 + Math_fround($58_1 + Math_fround($61_1 + $6_1))) > $7_1) | 0) {
               break block60
              }
              if ((HEAP32[($13_1 + 120 | 0) >> 2] | 0 | 0) == (HEAP32[($13_1 + 124 | 0) >> 2] | 0 | 0)) {
               break block60
              }
              $17_1 = $14_1;
              break block57;
             }
             if ($91($9_1 | 0) | 0) {
              $66_1 = Math_fround($66_1 + Math_fround($29($9_1 | 0)));
              $67_1 = Math_fround($67_1 - Math_fround(Math_fround($34($9_1 | 0)) * Math_fround(HEAPF32[($9_1 + 156 | 0) >> 2])));
             }
             $6_1 = Math_fround($60_1 + Math_fround($58_1 + $6_1));
             $65_1 = Math_fround($65_1 + $6_1);
             $61_1 = Math_fround($61_1 + $6_1);
             $11_1 = HEAP32[($13_1 + 124 | 0) >> 2] | 0;
             if (($11_1 | 0) != (HEAP32[($13_1 + 128 | 0) >> 2] | 0 | 0)) {
              HEAP32[$11_1 >> 2] = $9_1;
              HEAP32[($13_1 + 124 | 0) >> 2] = $11_1 + 4 | 0;
              break block58;
             }
             $11_1 = $11_1 - (HEAP32[($13_1 + 120 | 0) >> 2] | 0) | 0;
             $17_1 = $11_1 >> 2 | 0;
             $14_1 = $17_1 + 1 | 0;
             if ($14_1 >>> 0 >= 1073741824 >>> 0) {
              break block22
             }
             $38_1 = $11_1 >> 1 | 0;
             $14_1 = $44($13_1 + 136 | 0 | 0, ($11_1 >>> 0 >= 2147483644 >>> 0 ? 1073741823 : $14_1 >>> 0 < $38_1 >>> 0 ? $38_1 : $14_1) | 0, $17_1 | 0, $39_1 | 0) | 0;
             HEAP32[(HEAP32[($13_1 + 144 | 0) >> 2] | 0) >> 2] = $9_1;
             HEAP32[($13_1 + 144 | 0) >> 2] = (HEAP32[($13_1 + 144 | 0) >> 2] | 0) + 4 | 0;
             $9_1 = HEAP32[($13_1 + 120 | 0) >> 2] | 0;
             $11_1 = (HEAP32[($13_1 + 124 | 0) >> 2] | 0) - $9_1 | 0;
             $11_1 = $21((HEAP32[($13_1 + 140 | 0) >> 2] | 0) - $11_1 | 0 | 0, $9_1 | 0, $11_1 | 0) | 0;
             $9_1 = HEAP32[($13_1 + 120 | 0) >> 2] | 0;
             HEAP32[($13_1 + 140 | 0) >> 2] = $9_1;
             HEAP32[($13_1 + 120 | 0) >> 2] = $11_1;
             i64toi32_i32$2 = $13_1;
             i64toi32_i32$0 = HEAP32[($13_1 + 144 | 0) >> 2] | 0;
             i64toi32_i32$1 = HEAP32[($13_1 + 148 | 0) >> 2] | 0;
             $86_1 = i64toi32_i32$0;
             $86$hi = i64toi32_i32$1;
             $11_1 = HEAP32[($13_1 + 124 | 0) >> 2] | 0;
             HEAP32[($13_1 + 144 | 0) >> 2] = $11_1;
             $17_1 = HEAP32[($13_1 + 128 | 0) >> 2] | 0;
             i64toi32_i32$0 = $13_1;
             HEAP32[($13_1 + 124 | 0) >> 2] = $86_1;
             HEAP32[($13_1 + 128 | 0) >> 2] = i64toi32_i32$1;
             HEAP32[($13_1 + 148 | 0) >> 2] = $17_1;
             HEAP32[$14_1 >> 2] = $9_1;
             if (($9_1 | 0) != ($11_1 | 0)) {
              HEAP32[($13_1 + 144 | 0) >> 2] = $11_1 + ((($9_1 - $11_1 | 0) + 3 | 0) & -4 | 0) | 0
             }
             if (!$9_1) {
              break block58
             }
             $9($9_1 | 0);
            }
            HEAP32[($13_1 + 112 | 0) >> 2] = 0;
            i64toi32_i32$2 = $13_1;
            i64toi32_i32$1 = HEAP32[($13_1 + 80 | 0) >> 2] | 0;
            i64toi32_i32$0 = HEAP32[($13_1 + 84 | 0) >> 2] | 0;
            $2170 = i64toi32_i32$1;
            i64toi32_i32$1 = $13_1;
            HEAP32[($13_1 + 104 | 0) >> 2] = $2170;
            HEAP32[($13_1 + 108 | 0) >> 2] = i64toi32_i32$0;
            $30($56_1 | 0, HEAP32[($13_1 + 88 | 0) >> 2] | 0 | 0);
            $16($13_1 + 80 | 0 | 0);
            $9_1 = HEAP32[($13_1 + 112 | 0) >> 2] | 0;
            if ($9_1) {
             label9 : while (1) {
              $11_1 = HEAP32[$9_1 >> 2] | 0;
              $9($9_1 | 0);
              $9_1 = $11_1;
              if ($9_1) {
               continue label9
              }
              break label9;
             }
            }
            $17_1 = 0;
            HEAP32[($13_1 + 112 | 0) >> 2] = 0;
            $14_1 = HEAP32[($13_1 + 84 | 0) >> 2] | 0;
            $9_1 = HEAP32[($13_1 + 80 | 0) >> 2] | 0;
            if ($14_1 | $9_1 | 0) {
             continue label10
            }
            break label10;
           };
          }
          $60_1 = $66_1 > Math_fround(0.0) ? ($66_1 < Math_fround(1.0) ? Math_fround(1.0) : $66_1) : $66_1;
          $23_1 = HEAP32[($13_1 + 124 | 0) >> 2] | 0;
          $9_1 = HEAP32[($13_1 + 120 | 0) >> 2] | 0;
          block66 : {
           block65 : {
            block63 : {
             block64 : {
              block62 : {
               block61 : {
                if (!$30_1) {
                 break block61
                }
                $6_1 = Math_fround($23($20_1 | 0, $15_1 | 0, 0 | 0, Math_fround($64_1), Math_fround($64_1)));
                $58_1 = Math_fround($15($20_1 | 0, $15_1 | 0, 0 | 0, Math_fround($64_1), Math_fround($64_1)));
                $63_1 = Math_fround($23($20_1 | 0, $15_1 | 0, 1 | 0, Math_fround($71_1), Math_fround($64_1)));
                $61_1 = Math_fround($15($20_1 | 0, $15_1 | 0, 1 | 0, Math_fround($71_1), Math_fround($64_1)));
                $11_1 = $19_1 >>> 0 > 1 >>> 0;
                $6_1 = Math_fround(($11_1 ? $6_1 : $63_1) - $74_1);
                if ($6_1 == $6_1 & $6_1 > $65_1 | 0) {
                 break block62
                }
                $6_1 = Math_fround(($11_1 ? $58_1 : $61_1) - $74_1);
                if ($6_1 == $6_1 & $6_1 < $65_1 | 0) {
                 break block62
                }
                if ((HEAPU8[((HEAP32[($0_1 + 500 | 0) >> 2] | 0) + 20 | 0) >> 0] | 0) & 1 | 0) {
                 break block61
                }
                $2261 = $65_1;
                if ($60_1 == Math_fround(0.0)) {
                 break block63
                }
                $6_1 = Math_fround($29($0_1 | 0));
                if ($6_1 != $6_1) {
                 break block64
                }
                $2261 = $65_1;
                if (Math_fround($29($0_1 | 0)) == Math_fround(0.0)) {
                 break block63
                }
                break block64;
               }
               $6_1 = $7_1;
              }
              if ($6_1 == $6_1) {
               break block65
              }
              $7_1 = $6_1;
             }
             $2261 = $7_1;
            }
            $6_1 = $2261;
            $63_1 = $65_1 < Math_fround(0.0) ? Math_fround(-$65_1) : Math_fround(0.0);
            $2286 = $6_1;
            break block66;
           }
           $63_1 = Math_fround($6_1 - $65_1);
           $2286 = $6_1;
          }
          $7_1 = $2286;
          if (!$54_1) {
           block67 : {
            if (($9_1 | 0) == ($23_1 | 0)) {
             $65_1 = Math_fround(0.0);
             break block67;
            }
            $61_1 = $67_1 > Math_fround(0.0) ? ($67_1 < Math_fround(1.0) ? Math_fround(1.0) : $67_1) : $67_1;
            $65_1 = Math_fround(0.0);
            $14_1 = $9_1;
            label11 : while (1) {
             $11_1 = HEAP32[$14_1 >> 2] | 0;
             $58_1 = Math_fround(HEAPF32[($11_1 + 156 | 0) >> 2]);
             $16_1 = $11_1 + 20 | 0;
             $66_1 = Math_fround($23($16_1 | 0, $15_1 | 0, $25_1 | 0, Math_fround($73_1), Math_fround($64_1)));
             block68 : {
              $6_1 = Math_fround($15($16_1 | 0, $15_1 | 0, $25_1 | 0, Math_fround($73_1), Math_fround($64_1)));
              if ($6_1 >= Math_fround(0.0) & $6_1 < $58_1 | 0) {
               break block68
              }
              if (!($66_1 >= Math_fround(0.0))) {
               $6_1 = $58_1;
               break block68;
              }
              $6_1 = $58_1 < $66_1 ? $66_1 : $58_1;
             }
             block69 : {
              if ($63_1 < Math_fround(0.0)) {
               $58_1 = Math_fround($6_1 * Math_fround(-Math_fround($34($11_1 | 0))));
               if (!($58_1 > Math_fround(0.0) | $58_1 < Math_fround(0.0) | 0)) {
                break block69
               }
               $66_1 = Math_fround(Math_fround(Math_fround($63_1 / $61_1) * $58_1) + $6_1);
               $58_1 = Math_fround($7($11_1 | 0, $19_1 | 0, $15_1 | 0, Math_fround($66_1), Math_fround($7_1), Math_fround($59_1)));
               if ($66_1 != $66_1 | $58_1 != $58_1 | 0 | $58_1 == $66_1 | 0) {
                break block69
               }
               $65_1 = Math_fround($65_1 + Math_fround($58_1 - $6_1));
               $61_1 = Math_fround(Math_fround(Math_fround($34($11_1 | 0)) * Math_fround(HEAPF32[($11_1 + 156 | 0) >> 2])) + $61_1);
               break block69;
              }
              if (!($63_1 > Math_fround(0.0))) {
               break block69
              }
              $66_1 = Math_fround($29($11_1 | 0));
              if (!($66_1 > Math_fround(0.0) | $66_1 < Math_fround(0.0) | 0)) {
               break block69
              }
              $67_1 = Math_fround(Math_fround(Math_fround($63_1 / $60_1) * $66_1) + $6_1);
              $58_1 = Math_fround($7($11_1 | 0, $19_1 | 0, $15_1 | 0, Math_fround($67_1), Math_fround($7_1), Math_fround($59_1)));
              if ($67_1 != $67_1 | $58_1 != $58_1 | 0 | $58_1 == $67_1 | 0) {
               break block69
              }
              $60_1 = Math_fround($60_1 - $66_1);
              $65_1 = Math_fround($65_1 + Math_fround($58_1 - $6_1));
             }
             $14_1 = $14_1 + 4 | 0;
             if (($14_1 | 0) != ($23_1 | 0)) {
              continue label11
             }
             break label11;
            };
            $66_1 = Math_fround($63_1 - $65_1);
            $75_1 = Math_fround($66_1 / $61_1);
            $78_1 = Math_fround($66_1 / $60_1);
            $37_1 = !((HEAPU8[($0_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($0_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0) & 49152 | 0) | $46_1 | 0;
            $65_1 = Math_fround(0.0);
            $11_1 = $9_1;
            label12 : while (1) {
             $14_1 = HEAP32[$11_1 >> 2] | 0;
             $60_1 = Math_fround(HEAPF32[($14_1 + 156 | 0) >> 2]);
             $24_1 = $14_1 + 20 | 0;
             $58_1 = Math_fround($23($24_1 | 0, $15_1 | 0, $25_1 | 0, Math_fround($73_1), Math_fround($64_1)));
             block70 : {
              $6_1 = Math_fround($15($24_1 | 0, $15_1 | 0, $25_1 | 0, Math_fround($73_1), Math_fround($64_1)));
              if ($6_1 >= Math_fround(0.0) & $6_1 < $60_1 | 0) {
               break block70
              }
              if (!($58_1 >= Math_fround(0.0))) {
               $6_1 = $60_1;
               break block70;
              }
              $6_1 = $58_1 > $60_1 ? $58_1 : $60_1;
             }
             block71 : {
              $2489 = $14_1;
              $2490 = $19_1;
              $2491 = $15_1;
              block72 : {
               if ($66_1 < Math_fround(0.0)) {
                $60_1 = Math_fround($6_1 * Math_fround(-Math_fround($34($14_1 | 0))));
                $2502 = $6_1;
                if ($60_1 == Math_fround(0.0)) {
                 break block71
                }
                $2509 = Math_fround($6_1 + $60_1);
                if ($61_1 == Math_fround(0.0)) {
                 break block72
                }
                $2509 = Math_fround(Math_fround($75_1 * $60_1) + $6_1);
                break block72;
               }
               $2502 = $6_1;
               if (!($66_1 > Math_fround(0.0))) {
                break block71
               }
               $60_1 = Math_fround($29($14_1 | 0));
               $2502 = $6_1;
               if (!($60_1 > Math_fround(0.0) | $60_1 < Math_fround(0.0) | 0)) {
                break block71
               }
               $2509 = Math_fround(Math_fround($78_1 * $60_1) + $6_1);
              }
              $2502 = Math_fround($7($2489 | 0, $2490 | 0, $2491 | 0, Math_fround($2509), Math_fround($7_1), Math_fround($59_1)));
             }
             $67_1 = $2502;
             $60_1 = Math_fround($4($24_1 | 0, $19_1 | 0, 1 | 0, Math_fround($59_1)));
             $58_1 = Math_fround($3($24_1 | 0, $19_1 | 0, 1 | 0, Math_fround($59_1)));
             $82_1 = Math_fround($4($24_1 | 0, $22_1 | 0, 1 | 0, Math_fround($59_1)));
             $83_1 = Math_fround($3($24_1 | 0, $22_1 | 0, 1 | 0, Math_fround($59_1)));
             $84_1 = Math_fround($60_1 + $58_1);
             $85_1 = Math_fround($67_1 + $84_1);
             HEAPF32[($13_1 + 104 | 0) >> 2] = $85_1;
             HEAP32[($13_1 + 96 | 0) >> 2] = 0;
             $60_1 = Math_fround($82_1 + $83_1);
             block73 : {
              $16_1 = $14_1 + 124 | 0;
              $58_1 = Math_fround($2($16_1 | 0, HEAPU16[($14_1 + 122 | 0) >> 1] | 0 | 0));
              if ($58_1 == $58_1) {
               $58_1 = Math_fround($2($16_1 | 0, HEAPU16[($14_1 + 122 | 0) >> 1] | 0 | 0));
               HEAP32[($13_1 + 100 | 0) >> 2] = 0;
               $2584 = $60_1;
               $60_1 = Math_fround($85_1 - $84_1);
               HEAPF32[($13_1 + 120 | 0) >> 2] = Math_fround($2584 + ($25_1 ? Math_fround($60_1 * $58_1) : Math_fround($60_1 / $58_1)));
               break block73;
              }
              $16_1 = HEAP32[$35_1 >> 2] | 0;
              block74 : {
               if ($41_1) {
                break block74
               }
               $33_1 = $14_1 + ($16_1 << 3 | 0) | 0;
               $58_1 = Math_fround(HEAPF32[($33_1 + 504 | 0) >> 2]);
               $18_1 = 0;
               block77 : {
                block75 : {
                 switch ((HEAPU8[($33_1 + 508 | 0) >> 0] | 0) - 1 | 0 | 0) {
                 case 1:
                  $58_1 = Math_fround(Math_fround($68_1 * $58_1) * Math_fround(.009999999776482582));
                  break;
                 case 0:
                  break block75;
                 default:
                  break block77;
                 };
                }
                if ($58_1 != $58_1) {
                 break block77
                }
                $18_1 = $58_1 >= Math_fround(0.0);
               }
               if (!($37_1 & ($53_1 & ($18_1 ^ 1 | 0) | 0) | 0)) {
                break block74
               }
               $18_1 = (HEAPU8[($14_1 + 22 | 0) >> 0] | 0 | ((HEAPU8[($14_1 + 23 | 0) >> 0] | 0) << 8 | 0) | 0) & 15 | 0;
               if ($18_1) {
                $2633 = $18_1
               } else {
                $2633 = (HEAPU8[($0_1 + 21 | 0) >> 0] | 0) >>> 4 | 0
               }
               if (($2633 | 0) != (4 | 0)) {
                break block74
               }
               $10($13_1 + 136 | 0 | 0, $24_1 | 0, HEAP32[$32_1 >> 2] | 0 | 0, $15_1 | 0);
               if ((HEAPU8[($13_1 + 140 | 0) >> 0] | 0 | 0) == (3 | 0)) {
                break block74
               }
               $10($13_1 + 136 | 0 | 0, $24_1 | 0, HEAP32[$28_1 >> 2] | 0 | 0, $15_1 | 0);
               if ((HEAPU8[($13_1 + 140 | 0) >> 0] | 0 | 0) == (3 | 0)) {
                break block74
               }
               HEAP32[($13_1 + 100 | 0) >> 2] = 0;
               HEAPF32[($13_1 + 120 | 0) >> 2] = $68_1;
               break block73;
              }
              $18_1 = $14_1 + 504 | 0;
              $16_1 = $18_1 + ($16_1 << 3 | 0) | 0;
              $58_1 = Math_fround(HEAPF32[$16_1 >> 2]);
              block81 : {
               block80 : {
                switch ((HEAPU8[($16_1 + 4 | 0) >> 0] | 0) - 1 | 0 | 0) {
                case 1:
                 $58_1 = Math_fround(Math_fround($68_1 * $58_1) * Math_fround(.009999999776482582));
                case 0:
                 if ($58_1 >= Math_fround(0.0)) {
                  break block81
                 }
                 break;
                default:
                 break block80;
                };
               }
               HEAP32[($13_1 + 100 | 0) >> 2] = $45_1;
               HEAPF32[($13_1 + 120 | 0) >> 2] = $68_1;
               break block73;
              }
              block86 : {
               block85 : {
                block82 : {
                 switch ($22_1 - 2 | 0 | 0) {
                 case 1:
                  $58_1 = Math_fround($60_1 + Math_fround($19($14_1 | 0, $15_1 | 0, 0 | 0, Math_fround($68_1), Math_fround($59_1))));
                  $2687 = 0;
                  break block85;
                 default:
                  $16_1 = 1;
                  $58_1 = Math_fround($60_1 + Math_fround($19($14_1 | 0, $15_1 | 0, 1 | 0, Math_fround($68_1), Math_fround($59_1))));
                  HEAPF32[($13_1 + 120 | 0) >> 2] = $58_1;
                  if ($19_1 >>> 0 <= 1 >>> 0) {
                   break block11
                  }
                  break block86;
                 case 0:
                  break block82;
                 };
                }
                $58_1 = Math_fround($60_1 + Math_fround($19($14_1 | 0, $15_1 | 0, 0 | 0, Math_fround($68_1), Math_fround($59_1))));
                $2687 = 0;
               }
               $16_1 = $2687;
               HEAPF32[($13_1 + 120 | 0) >> 2] = $58_1;
              }
              $2709 = $13_1;
              $2710 = $51_1;
              i64toi32_i32$2 = $18_1 + ($16_1 << 3 | 0) | 0;
              i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0;
              i64toi32_i32$1 = 0;
              i64toi32_i32$2 = i64toi32_i32$0;
              i64toi32_i32$0 = 0;
              i64toi32_i32$3 = 32;
              i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
              if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
               i64toi32_i32$0 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
               $170_1 = 0;
              } else {
               i64toi32_i32$0 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
               $170_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
              }
              i64toi32_i32$1 = $170_1;
              i64toi32_i32$2 = 2;
              i64toi32_i32$3 = 0;
              HEAP32[($2709 + 100 | 0) >> 2] = $2710 & ((i64toi32_i32$1 | 0) == (i64toi32_i32$3 | 0) & (i64toi32_i32$0 | 0) == (i64toi32_i32$2 | 0) | 0) | 0 | $58_1 != $58_1 | 0;
             }
             $33($14_1 | 0, $15_1 | 0, $19_1 | 0, Math_fround($7_1), Math_fround($59_1), $13_1 + 96 | 0 | 0, $13_1 + 104 | 0 | 0);
             $33($14_1 | 0, $15_1 | 0, $22_1 | 0, Math_fround($68_1), Math_fround($59_1), $13_1 + 100 | 0 | 0, $13_1 + 120 | 0 | 0);
             $16_1 = $14_1 + ((HEAP32[$35_1 >> 2] | 0) << 3 | 0) | 0;
             $58_1 = Math_fround(HEAPF32[($16_1 + 504 | 0) >> 2]);
             block90 : {
              block89 : {
               switch ((HEAPU8[($16_1 + 508 | 0) >> 0] | 0) - 1 | 0 | 0) {
               case 1:
                $58_1 = Math_fround(Math_fround($68_1 * $58_1) * Math_fround(.009999999776482582));
               case 0:
                $16_1 = 1;
                if ($58_1 >= Math_fround(0.0)) {
                 break block90
                }
                break;
               default:
                break block89;
               };
              }
              $16_1 = 1;
              $18_1 = (HEAPU8[($14_1 + 22 | 0) >> 0] | 0 | ((HEAPU8[($14_1 + 23 | 0) >> 0] | 0) << 8 | 0) | 0) & 15 | 0;
              if ($18_1) {
               $2765 = $18_1
              } else {
               $2765 = (HEAPU8[($0_1 + 21 | 0) >> 0] | 0) >>> 4 | 0
              }
              if (($2765 | 0) != (4 | 0)) {
               break block90
              }
              $10($13_1 + 136 | 0 | 0, $24_1 | 0, HEAP32[$32_1 >> 2] | 0 | 0, $15_1 | 0);
              if ((HEAPU8[($13_1 + 140 | 0) >> 0] | 0 | 0) == (3 | 0)) {
               break block90
              }
              $10($13_1 + 136 | 0 | 0, $24_1 | 0, HEAP32[$28_1 >> 2] | 0 | 0, $15_1 | 0);
              $16_1 = (HEAPU8[($13_1 + 140 | 0) >> 0] | 0 | 0) == (3 | 0);
             }
             $60_1 = Math_fround(HEAPF32[($13_1 + 104 | 0) >> 2]);
             $58_1 = Math_fround(HEAPF32[($13_1 + 120 | 0) >> 2]);
             $18_1 = $19_1 >>> 0 > 1 >>> 0;
             $24_1 = HEAP32[($13_1 + 96 | 0) >> 2] | 0;
             $33_1 = HEAP32[($13_1 + 100 | 0) >> 2] | 0;
             $16_1 = $8_1 & $16_1 | 0;
             $31($14_1 | 0, Math_fround($18_1 ? $60_1 : $58_1), Math_fround($18_1 ? $58_1 : $60_1), (HEAPU8[($0_1 + 392 | 0) >> 0] | 0) & 3 | 0 | 0, ($18_1 ? $24_1 : $33_1) | 0, ($18_1 ? $33_1 : $24_1) | 0, Math_fround($59_1), Math_fround($69_1), $16_1 | 0, ($16_1 ? 4 : 7) | 0, $10_1 | 0, $34_1 | 0, $12_1 | 0) | 0;
             $65_1 = Math_fround($65_1 + Math_fround($67_1 - $6_1));
             $2833 = $0_1;
             block91 : {
              $16_1 = HEAPU8[($0_1 + 392 | 0) >> 0] | 0;
              if (!($16_1 & 4 | 0)) {
               $2843 = 0;
               if (!((HEAPU8[($14_1 + 392 | 0) >> 0] | 0) & 4 | 0)) {
                break block91
               }
              }
              $2843 = 4;
             }
             HEAP8[($2833 + 392 | 0) >> 0] = $2843 | ($16_1 & 251 | 0) | 0;
             $11_1 = $11_1 + 4 | 0;
             if (($11_1 | 0) != ($23_1 | 0)) {
              continue label12
             }
             break label12;
            };
           }
           $63_1 = Math_fround($63_1 - $65_1);
          }
          $11_1 = HEAPU8[($0_1 + 392 | 0) >> 0] | 0;
          HEAP8[($0_1 + 392 | 0) >> 0] = $11_1 & 251 | 0 | (($11_1 & 4 | 0) >>> 2 | 0 ? 4 : ($63_1 < Math_fround(0.0)) << 2 | 0) | 0;
          $58_1 = Math_fround(Math_fround($66($20_1 | 0, $19_1 | 0, $15_1 | 0, Math_fround($64_1))) + Math_fround($45($20_1 | 0, $19_1 | 0, $15_1 | 0)));
          $75_1 = Math_fround(Math_fround($97($20_1 | 0, $19_1 | 0, $15_1 | 0, Math_fround($64_1))) + Math_fround($52($20_1 | 0, $19_1 | 0, $15_1 | 0)));
          $66_1 = Math_fround($47($20_1 | 0, $19_1 | 0, Math_fround($7_1)));
          block95 : {
           block94 : {
            block93 : {
             if (!(!($63_1 > Math_fround(0.0)) | ($30_1 | 0) != (2 | 0) | 0)) {
              $1($13_1 + 136 | 0 | 0, $48_1 | 0, HEAPU16[($47_1 + ((HEAP32[$36_1 >> 2] | 0) << 1 | 0) | 0) >> 1] | 0 | 0);
              block92 : {
               if (HEAPU8[($13_1 + 140 | 0) >> 0] | 0) {
                $6_1 = Math_fround($23($20_1 | 0, $15_1 | 0, $40_1 | 0, Math_fround($73_1), Math_fround($64_1)));
                if ($6_1 == $6_1) {
                 break block92
                }
               }
               $2921 = Math_fround(0.0);
               break block93;
              }
              $63_1 = Math_fround(Math_fround(Math_fround(Math_fround($23($20_1 | 0, $15_1 | 0, $40_1 | 0, Math_fround($73_1), Math_fround($64_1))) - $58_1) - $75_1) - Math_fround($7_1 - $63_1));
              $2921 = Math_fround(0.0);
              if (!($63_1 > Math_fround(0.0))) {
               break block93
              }
             }
             if (!($63_1 >= Math_fround(0.0))) {
              break block94
             }
             $2921 = $63_1;
            }
            $60_1 = $2921;
            $2949 = ((HEAPU8[$20_1 >> 0] | 0) >>> 4 | 0) & 7 | 0;
            break block95;
           }
           $60_1 = $63_1;
           $11_1 = ((HEAPU8[$20_1 >> 0] | 0) >>> 4 | 0) & 7 | 0;
           $2949 = ($11_1 - 3 | 0) >>> 0 >= 3 >>> 0 ? $11_1 : 0;
          }
          $11_1 = $2949;
          $6_1 = Math_fround(0.0);
          block102 : {
           block96 : {
            if ($21_1) {
             break block96
            }
            $61_1 = Math_fround(0.0);
            block100 : {
             switch ($11_1 - 1 | 0 | 0) {
             case 0:
              $61_1 = Math_fround($60_1 * Math_fround(.5));
              break block102;
             case 1:
              $61_1 = $60_1;
              break block102;
             case 2:
              $11_1 = $23_1 - $9_1 | 0;
              if ($11_1 >>> 0 < 5 >>> 0) {
               break block96
              }
              $66_1 = Math_fround($66_1 + Math_fround($60_1 / Math_fround((($11_1 >> 2 | 0) - 1 | 0) >>> 0)));
              break block96;
             case 4:
              $61_1 = Math_fround($60_1 / Math_fround(((($23_1 - $9_1 | 0) >> 2 | 0) + 1 | 0) >>> 0));
              $66_1 = Math_fround($66_1 + $61_1);
              break block102;
             case 3:
              break block100;
             default:
              break block102;
             };
            }
            $61_1 = Math_fround(Math_fround($60_1 * Math_fround(.5)) / Math_fround((($23_1 - $9_1 | 0) >> 2 | 0) >>> 0));
            $66_1 = Math_fround(Math_fround($61_1 + $61_1) + $66_1);
            break block102;
           }
           $61_1 = Math_fround(0.0);
          }
          $61_1 = Math_fround($58_1 + $61_1);
          $18_1 = $94($0_1 | 0) | 0;
          block103 : {
           $24_1 = ($9_1 | 0) == ($23_1 | 0);
           if ($24_1) {
            $63_1 = Math_fround(0.0);
            $58_1 = Math_fround(0.0);
            break block103;
           }
           $37_1 = $23_1 - 4 | 0;
           $78_1 = Math_fround($60_1 / Math_fround($21_1 >>> 0));
           $33_1 = HEAP32[$50_1 >> 2] | 0;
           $58_1 = Math_fround(0.0);
           $63_1 = Math_fround(0.0);
           $11_1 = $9_1;
           label13 : while (1) {
            $14_1 = HEAP32[$11_1 >> 2] | 0;
            $16_1 = $14_1 + 20 | 0;
            $10($13_1 + 136 | 0 | 0, $16_1 | 0, $33_1 | 0, $15_1 | 0);
            $65_1 = $60_1 > Math_fround(0.0) ? $78_1 : Math_fround(-0.0);
            $61_1 = Math_fround($61_1 + ((HEAPU8[($13_1 + 140 | 0) >> 0] | 0 | 0) != (3 | 0) ? Math_fround(-0.0) : $65_1));
            if ($8_1) {
             block108 : {
              block106 : {
               switch ($19_1 - 1 | 0 | 0) {
               default:
                $21_1 = 1;
                $3047 = $14_1 + 416 | 0;
                break block108;
               case 0:
                $21_1 = 3;
                $3047 = $14_1 + 424 | 0;
                break block108;
               case 1:
                $21_1 = 0;
                $3047 = $14_1 + 412 | 0;
                break block108;
               case 2:
                break block106;
               };
              }
              $21_1 = 2;
              $3047 = $14_1 + 420 | 0;
             }
             $42_1 = $3047;
             HEAPF32[(($14_1 + ($21_1 << 2 | 0) | 0) + 412 | 0) >> 2] = Math_fround(Math_fround(HEAPF32[$42_1 >> 2]) + $61_1);
            }
            $21_1 = HEAP32[$37_1 >> 2] | 0;
            $10($13_1 + 136 | 0 | 0, $16_1 | 0, HEAP32[$49_1 >> 2] | 0 | 0, $15_1 | 0);
            $61_1 = Math_fround(Math_fround($61_1 + (($14_1 | 0) == ($21_1 | 0) ? Math_fround(-0.0) : $66_1)) + ((HEAPU8[($13_1 + 140 | 0) >> 0] | 0 | 0) != (3 | 0) ? Math_fround(-0.0) : $65_1));
            block109 : {
             if (!$52_1) {
              $61_1 = Math_fround($61_1 + Math_fround(Math_fround(Math_fround($4($16_1 | 0, $19_1 | 0, 1 | 0, Math_fround($59_1))) + Math_fround($3($16_1 | 0, $19_1 | 0, 1 | 0, Math_fround($59_1)))) + Math_fround(HEAPF32[($14_1 + 156 | 0) >> 2])));
              $6_1 = $68_1;
              break block109;
             }
             $61_1 = Math_fround(Math_fround($63($14_1 | 0, $19_1 | 0, Math_fround($59_1))) + $61_1);
             if ($18_1) {
              $65_1 = Math_fround($48($14_1 | 0));
              $67_1 = Math_fround($35($16_1 | 0, 0 | 0, $15_1 | 0, Math_fround($59_1)));
              $65_1 = Math_fround($65_1 + $67_1);
              $67_1 = Math_fround(Math_fround(Math_fround(HEAPF32[($14_1 + 408 | 0) >> 2]) + Math_fround(Math_fround($4($16_1 | 0, 0 | 0, 1 | 0, Math_fround($59_1))) + Math_fround($3($16_1 | 0, 0 | 0, 1 | 0, Math_fround($59_1))))) - $65_1);
              $63_1 = $63_1 == $63_1 & $67_1 == $67_1 | 0 ? ($63_1 < $67_1 ? $67_1 : $63_1) : $63_1 != $63_1 ? $67_1 : $63_1;
              $58_1 = $58_1 == $58_1 & $65_1 == $65_1 | 0 ? ($58_1 < $65_1 ? $65_1 : $58_1) : $58_1 != $58_1 ? $65_1 : $58_1;
              break block109;
             }
             $65_1 = Math_fround($63($14_1 | 0, $22_1 | 0, Math_fround($59_1)));
             $6_1 = $6_1 == $6_1 & $65_1 == $65_1 | 0 ? ($6_1 < $65_1 ? $65_1 : $6_1) : $6_1 != $6_1 ? $65_1 : $6_1;
            }
            $11_1 = $11_1 + 4 | 0;
            if (($11_1 | 0) != ($23_1 | 0)) {
             continue label13
            }
            break label13;
           };
          }
          $65_1 = $18_1 ? Math_fround($63_1 + $58_1) : $6_1;
          block110 : {
           if ($57_1) {
            $3216 = Math_fround(Math_fround($7($0_1 | 0, $22_1 | 0, $15_1 | 0, Math_fround(Math_fround($70_1 + $65_1)), Math_fround($77_1), Math_fround($64_1))) - $70_1);
            break block110;
           }
           $65_1 = $55_1 ? $68_1 : $65_1;
           $3216 = $68_1;
          }
          $63_1 = $3216;
          if (!$31_1) {
           $65_1 = Math_fround(Math_fround($7($0_1 | 0, $22_1 | 0, $15_1 | 0, Math_fround(Math_fround($70_1 + $65_1)), Math_fround($77_1), Math_fround($64_1))) - $70_1)
          }
          $60_1 = Math_fround($75_1 + $61_1);
          block111 : {
           if (!$8_1) {
            break block111
           }
           $11_1 = $9_1;
           if ($24_1) {
            break block111
           }
           label14 : while (1) {
            $21_1 = HEAP32[$11_1 >> 2] | 0;
            $14_1 = (HEAPU8[($21_1 + 22 | 0) >> 0] | 0 | ((HEAPU8[($21_1 + 23 | 0) >> 0] | 0) << 8 | 0) | 0) & 15 | 0;
            if (!$14_1) {
             $14_1 = (HEAPU8[($0_1 + 21 | 0) >> 0] | 0) >>> 4 | 0
            }
            block118 : {
             block114 : {
              block113 : {
               switch ($14_1 - 4 | 0 | 0) {
               case 0:
                $16_1 = $21_1 + 20 | 0;
                $10($13_1 + 136 | 0 | 0, $16_1 | 0, HEAP32[$32_1 >> 2] | 0 | 0, $15_1 | 0);
                $14_1 = 4;
                if ((HEAPU8[($13_1 + 140 | 0) >> 0] | 0 | 0) == (3 | 0)) {
                 break block114
                }
                $10($13_1 + 136 | 0 | 0, $16_1 | 0, HEAP32[$28_1 >> 2] | 0 | 0, $15_1 | 0);
                if ((HEAPU8[($13_1 + 140 | 0) >> 0] | 0 | 0) == (3 | 0)) {
                 break block114
                }
                $14_1 = $21_1 + ((HEAP32[$35_1 >> 2] | 0) << 3 | 0) | 0;
                $61_1 = Math_fround(HEAPF32[($14_1 + 504 | 0) >> 2]);
                block117 : {
                 switch ((HEAPU8[($14_1 + 508 | 0) >> 0] | 0) - 1 | 0 | 0) {
                 case 1:
                  $61_1 = Math_fround(Math_fround($68_1 * $61_1) * Math_fround(.009999999776482582));
                 case 0:
                  $6_1 = $62_1;
                  if ($61_1 >= Math_fround(0.0)) {
                   break block118
                  }
                  break;
                 default:
                  break block117;
                 };
                }
                $6_1 = Math_fround(HEAPF32[(($21_1 + ((HEAP32[$36_1 >> 2] | 0) << 2 | 0) | 0) + 404 | 0) >> 2]);
                $3298 = $13_1;
                $14_1 = $21_1 + 124 | 0;
                $58_1 = Math_fround($2($14_1 | 0, HEAPU16[($21_1 + 122 | 0) >> 1] | 0 | 0));
                if ($58_1 == $58_1) {
                 $3316 = Math_fround(Math_fround($4($16_1 | 0, $22_1 | 0, 1 | 0, Math_fround($59_1))) + Math_fround($3($16_1 | 0, $22_1 | 0, 1 | 0, Math_fround($59_1))));
                 $58_1 = Math_fround($2($14_1 | 0, HEAPU16[($21_1 + 122 | 0) >> 1] | 0 | 0));
                 $3331 = Math_fround($3316 + ($25_1 ? Math_fround($6_1 * $58_1) : Math_fround($6_1 / $58_1)));
                } else {
                 $3331 = $65_1
                }
                HEAPF32[($3298 + 120 | 0) >> 2] = $3331;
                (wasm2js_i32$0 = $13_1, wasm2js_f32$0 = Math_fround($6_1 + Math_fround(Math_fround($4($16_1 | 0, $19_1 | 0, 1 | 0, Math_fround($59_1))) + Math_fround($3($16_1 | 0, $19_1 | 0, 1 | 0, Math_fround($59_1)))))), HEAPF32[(wasm2js_i32$0 + 136 | 0) >> 2] = wasm2js_f32$0;
                HEAP32[($13_1 + 104 | 0) >> 2] = 0;
                HEAP32[($13_1 + 100 | 0) >> 2] = 0;
                $33($21_1 | 0, $15_1 | 0, $19_1 | 0, Math_fround($7_1), Math_fround($59_1), $13_1 + 104 | 0 | 0, $13_1 + 136 | 0 | 0);
                $33($21_1 | 0, $15_1 | 0, $22_1 | 0, Math_fround($68_1), Math_fround($59_1), $13_1 + 100 | 0 | 0, $13_1 + 120 | 0 | 0);
                $58_1 = Math_fround(HEAPF32[($13_1 + 120 | 0) >> 2]);
                $61_1 = Math_fround(HEAPF32[($13_1 + 136 | 0) >> 2]);
                $24_1 = $19_1 >>> 0 > 1 >>> 0;
                $14_1 = $24_1;
                $6_1 = $14_1 ? $58_1 : $61_1;
                $16_1 = ($31_1 | 0) != (0 | 0) & ((HEAPU8[($0_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($0_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0) & 15 | 0 | 0) != (4 | 0) | 0;
                $58_1 = $14_1 ? $61_1 : $58_1;
                $14_1 = $16_1 & $25_1 | 0 | $58_1 != $58_1 | 0;
                $31($21_1 | 0, Math_fround($58_1), Math_fround($6_1), $15_1 | 0, $14_1 | 0, $16_1 & $24_1 | 0 | $6_1 != $6_1 | 0 | 0, Math_fround($59_1), Math_fround($69_1), 1 | 0, 2 | 0, $10_1 | 0, $34_1 | 0, $12_1 | 0) | 0;
                $6_1 = $62_1;
                break block118;
               case 1:
                break block113;
               default:
                break block114;
               };
              }
              $14_1 = (HEAPU8[$20_1 >> 0] | 0) & 8 | 0 ? 5 : 1;
             }
             $6_1 = Math_fround($63($21_1 | 0, $22_1 | 0, Math_fround($59_1)));
             $16_1 = $21_1 + 20 | 0;
             $24_1 = HEAP32[$32_1 >> 2] | 0;
             $10($13_1 + 136 | 0 | 0, $16_1 | 0, $24_1 | 0, $15_1 | 0);
             $58_1 = Math_fround($63_1 - $6_1);
             block119 : {
              if ((HEAPU8[($13_1 + 140 | 0) >> 0] | 0 | 0) != (3 | 0)) {
               $18_1 = HEAP32[$28_1 >> 2] | 0;
               break block119;
              }
              $18_1 = HEAP32[$28_1 >> 2] | 0;
              $10($13_1 + 136 | 0 | 0, $16_1 | 0, $18_1 | 0, $15_1 | 0);
              if ((HEAPU8[($13_1 + 140 | 0) >> 0] | 0 | 0) != (3 | 0)) {
               break block119
              }
              $6_1 = Math_fround($58_1 * Math_fround(.5));
              $6_1 = Math_fround($62_1 + ($6_1 > Math_fround(0.0) ? $6_1 : Math_fround(0.0)));
              break block118;
             }
             $10($13_1 + 136 | 0 | 0, $16_1 | 0, $18_1 | 0, $15_1 | 0);
             $6_1 = $62_1;
             if ((HEAPU8[($13_1 + 140 | 0) >> 0] | 0 | 0) == (3 | 0)) {
              break block118
             }
             $10($13_1 + 136 | 0 | 0, $16_1 | 0, $24_1 | 0, $15_1 | 0);
             if ((HEAPU8[($13_1 + 140 | 0) >> 0] | 0 | 0) == (3 | 0)) {
              $6_1 = Math_fround($6_1 + ($58_1 > Math_fround(0.0) ? $58_1 : Math_fround(0.0)));
              break block118;
             }
             block121 : {
              switch ($14_1 - 1 | 0 | 0) {
              case 1:
               $6_1 = Math_fround($62_1 + Math_fround($58_1 * Math_fround(.5)));
               break block118;
              case 0:
               break block118;
              default:
               break block121;
              };
             }
             $6_1 = Math_fround($62_1 + $58_1);
            }
            block126 : {
             block124 : {
              switch ($22_1 - 1 | 0 | 0) {
              default:
               $16_1 = 1;
               $3492 = $21_1 + 416 | 0;
               break block126;
              case 0:
               $16_1 = 3;
               $3492 = $21_1 + 424 | 0;
               break block126;
              case 1:
               $16_1 = 0;
               $3492 = $21_1 + 412 | 0;
               break block126;
              case 2:
               break block124;
              };
             }
             $16_1 = 2;
             $3492 = $21_1 + 420 | 0;
            }
            $14_1 = $3492;
            HEAPF32[(($21_1 + ($16_1 << 2 | 0) | 0) + 412 | 0) >> 2] = Math_fround($6_1 + Math_fround($76_1 + Math_fround(HEAPF32[$14_1 >> 2])));
            $11_1 = $11_1 + 4 | 0;
            if (($11_1 | 0) != ($23_1 | 0)) {
             continue label14
            }
            break label14;
           };
          }
          if ($9_1) {
           $9($9_1 | 0)
          }
          $72_1 = $72_1 == $72_1 & $60_1 == $60_1 | 0 ? ($60_1 > $72_1 ? $60_1 : $72_1) : $72_1 != $72_1 ? $60_1 : $72_1;
          $76_1 = Math_fround($76_1 + Math_fround(($27_1 ? $79_1 : Math_fround(0.0)) + $65_1));
          $27_1 = $27_1 + 1 | 0;
          $9_1 = HEAP32[($13_1 + 80 | 0) >> 2] | 0;
          if ($9_1 | $17_1 | 0) {
           continue label15
          }
          break label15;
         };
        }
        block127 : {
         if (!$8_1) {
          break block127
         }
         if (!$31_1) {
          if (!($94($0_1 | 0) | 0)) {
           break block127
          }
         }
         $3558 = $0_1;
         $3559 = $22_1;
         $3560 = $15_1;
         block128 : {
          $3566 = Math_fround($70_1 + $68_1);
          if (!$26_1) {
           break block128
          }
          $9_1 = $0_1 + ((HEAP32[(($22_1 << 2 | 0) + 4860 | 0) >> 2] | 0) << 3 | 0) | 0;
          $6_1 = Math_fround(HEAPF32[($9_1 + 504 | 0) >> 2]);
          block131 : {
           block129 : {
            switch ((HEAPU8[($9_1 + 508 | 0) >> 0] | 0) - 1 | 0 | 0) {
            case 1:
             $6_1 = Math_fround(Math_fround($77_1 * $6_1) * Math_fround(.009999999776482582));
             break;
            case 0:
             break block129;
            default:
             break block131;
            };
           }
           if (!($6_1 >= Math_fround(0.0))) {
            break block131
           }
           $3566 = Math_fround($19($0_1 | 0, $15_1 | 0, (257 >>> ($22_1 << 3 | 0) | 0) & 1 | 0 | 0, Math_fround($77_1), Math_fround($64_1)));
           break block128;
          }
          $3566 = Math_fround($70_1 + $76_1);
         }
         $6_1 = Math_fround($7($3558 | 0, $3559 | 0, $3560 | 0, Math_fround($3566), Math_fround($71_1), Math_fround($64_1)));
         $60_1 = Math_fround(0.0);
         $9_1 = (HEAPU8[($0_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($0_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0) & 15 | 0;
         block140 : {
          block139 : {
           block134 : {
            block135 : {
             block136 : {
              block138 : {
               block137 : {
                block132 : {
                 block133 : {
                  $6_1 = Math_fround(Math_fround($6_1 - $70_1) - $76_1);
                  if (!($6_1 >= Math_fround(0.0))) {
                   $67_1 = Math_fround(0.0);
                   switch ($9_1 - 2 | 0 | 0) {
                   case 0:
                    break block132;
                   case 1:
                    break block133;
                   default:
                    break block134;
                   };
                  }
                  $67_1 = Math_fround(0.0);
                  switch ($9_1 - 2 | 0 | 0) {
                  case 0:
                   break block132;
                  case 1:
                   break block133;
                  case 2:
                   break block135;
                  case 4:
                   break block136;
                  case 5:
                   break block137;
                  case 6:
                   break block138;
                  default:
                   break block134;
                  };
                 }
                 $62_1 = Math_fround($62_1 + $6_1);
                 break block134;
                }
                $62_1 = Math_fround($62_1 + Math_fround($6_1 * Math_fround(.5)));
                break block134;
               }
               $58_1 = Math_fround($27_1 >>> 0);
               $60_1 = Math_fround($6_1 / $58_1);
               $62_1 = Math_fround($62_1 + Math_fround($6_1 / Math_fround($58_1 + $58_1)));
               break block134;
              }
              $60_1 = Math_fround($6_1 / Math_fround(($27_1 + 1 | 0) >>> 0));
              $62_1 = Math_fround($62_1 + $60_1);
              break block134;
             }
             if ($27_1 >>> 0 < 2 >>> 0) {
              break block134
             }
             $20($13_1 + 136 | 0 | 0, $0_1 | 0);
             $60_1 = Math_fround($6_1 / Math_fround(($27_1 - 1 | 0) >>> 0));
             break block139;
            }
            $67_1 = Math_fround($6_1 / Math_fround($27_1 >>> 0));
           }
           $20($13_1 + 136 | 0 | 0, $0_1 | 0);
           if (!$27_1) {
            break block140
           }
          }
          $9_1 = $22_1 << 2 | 0;
          $16_1 = $9_1 + 4828 | 0;
          $17_1 = $9_1 + 4860 | 0;
          $24_1 = $13_1 + 56 | 0;
          $25_1 = $13_1 + 72 | 0;
          $21_1 = $13_1 + 112 | 0;
          $28_1 = $13_1 + 144 | 0;
          $31_1 = $13_1 + 128 | 0;
          $18_1 = 0;
          label22 : while (1) {
           HEAP32[($13_1 + 128 | 0) >> 2] = 0;
           i64toi32_i32$3 = $13_1;
           i64toi32_i32$1 = HEAP32[($13_1 + 136 | 0) >> 2] | 0;
           i64toi32_i32$0 = HEAP32[($13_1 + 140 | 0) >> 2] | 0;
           $3683 = i64toi32_i32$1;
           i64toi32_i32$1 = $13_1;
           HEAP32[($13_1 + 120 | 0) >> 2] = $3683;
           HEAP32[($13_1 + 124 | 0) >> 2] = i64toi32_i32$0;
           $30($31_1 | 0, HEAP32[($13_1 + 144 | 0) >> 2] | 0 | 0);
           HEAP32[($13_1 + 112 | 0) >> 2] = 0;
           i64toi32_i32$3 = $13_1;
           i64toi32_i32$0 = HEAP32[($13_1 + 120 | 0) >> 2] | 0;
           i64toi32_i32$1 = HEAP32[($13_1 + 124 | 0) >> 2] | 0;
           $86_1 = i64toi32_i32$0;
           $86$hi = i64toi32_i32$1;
           i64toi32_i32$0 = $13_1;
           HEAP32[($13_1 + 104 | 0) >> 2] = $86_1;
           HEAP32[($13_1 + 108 | 0) >> 2] = i64toi32_i32$1;
           $11_1 = HEAP32[($13_1 + 128 | 0) >> 2] | 0;
           $30($21_1 | 0, $11_1 | 0);
           $9_1 = HEAP32[($13_1 + 108 | 0) >> 2] | 0;
           block142 : {
            block141 : {
             $14_1 = HEAP32[($13_1 + 104 | 0) >> 2] | 0;
             if ($14_1) {
              $58_1 = Math_fround(0.0);
              $63_1 = Math_fround(0.0);
              $6_1 = Math_fround(0.0);
              break block141;
             }
             $58_1 = Math_fround(0.0);
             $63_1 = Math_fround(0.0);
             $6_1 = Math_fround(0.0);
             if (!$9_1) {
              break block142
             }
            }
            label17 : while (1) {
             $3704 = HEAP32[($14_1 + 492 | 0) >> 2] | 0;
             $14_1 = HEAP32[($14_1 + 488 | 0) >> 2] | 0;
             if ((($3704 - $14_1 | 0) >> 2 | 0) >>> 0 <= $9_1 >>> 0) {
              break block22
             }
             block143 : {
              $9_1 = HEAP32[($14_1 + ($9_1 << 2 | 0) | 0) >> 2] | 0;
              $23_1 = HEAPU8[($9_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($9_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($9_1 + 23 | 0) >> 0] | 0) << 16 | 0) | 0;
              if (($23_1 & 786432 | 0 | 0) == (262144 | 0) | ($23_1 & 12288 | 0 | 0) == (8192 | 0) | 0) {
               break block143
              }
              if ((HEAP32[($9_1 + 476 | 0) >> 2] | 0 | 0) != ($18_1 | 0)) {
               break block142
              }
              $14_1 = $9_1 + 20 | 0;
              $61_1 = Math_fround(HEAPF32[(($9_1 + ((HEAP32[$17_1 >> 2] | 0) << 2 | 0) | 0) + 404 | 0) >> 2]);
              if ($61_1 >= Math_fround(0.0)) {
               $61_1 = Math_fround($61_1 + Math_fround(Math_fround($4($14_1 | 0, $22_1 | 0, 1 | 0, Math_fround($59_1))) + Math_fround($3($14_1 | 0, $22_1 | 0, 1 | 0, Math_fround($59_1)))));
               $6_1 = $6_1 == $6_1 & $61_1 == $61_1 | 0 ? ($6_1 < $61_1 ? $61_1 : $6_1) : $6_1 != $6_1 ? $61_1 : $6_1;
               $3781 = HEAPU8[($9_1 + 22 | 0) >> 0] | 0;
              } else {
               $3781 = $23_1 >>> 8 | 0
              }
              $23_1 = $3781 & 15 | 0;
              if ($23_1) {
               $3789 = $23_1
              } else {
               $3789 = (HEAPU8[($0_1 + 21 | 0) >> 0] | 0) >>> 4 | 0
              }
              if (($3789 | 0) != (5 | 0)) {
               break block143
              }
              if (!((HEAPU8[$20_1 >> 0] | 0) & 8 | 0)) {
               break block143
              }
              $61_1 = Math_fround(Math_fround($48($9_1 | 0)) + Math_fround($35($14_1 | 0, 0 | 0, $15_1 | 0, Math_fround($59_1))));
              $63_1 = $63_1 == $63_1 & $61_1 == $61_1 | 0 ? ($61_1 > $63_1 ? $61_1 : $63_1) : $63_1 != $63_1 ? $61_1 : $63_1;
              $61_1 = Math_fround(Math_fround(Math_fround(HEAPF32[($9_1 + 408 | 0) >> 2]) + Math_fround(Math_fround($4($14_1 | 0, 0 | 0, 1 | 0, Math_fround($59_1))) + Math_fround($3($14_1 | 0, 0 | 0, 1 | 0, Math_fround($59_1))))) - $61_1);
              $58_1 = $58_1 == $58_1 & $61_1 == $61_1 | 0 ? ($58_1 < $61_1 ? $61_1 : $58_1) : $58_1 != $58_1 ? $61_1 : $58_1;
              $61_1 = Math_fround($63_1 + $58_1);
              $6_1 = $6_1 == $6_1 & $61_1 == $61_1 | 0 ? ($6_1 < $61_1 ? $61_1 : $6_1) : $6_1 != $6_1 ? $61_1 : $6_1;
             }
             HEAP32[($13_1 + 72 | 0) >> 2] = 0;
             i64toi32_i32$3 = $13_1;
             i64toi32_i32$1 = HEAP32[($13_1 + 104 | 0) >> 2] | 0;
             i64toi32_i32$0 = HEAP32[($13_1 + 108 | 0) >> 2] | 0;
             $3881 = i64toi32_i32$1;
             i64toi32_i32$1 = $13_1;
             HEAP32[($13_1 + 64 | 0) >> 2] = $3881;
             HEAP32[($13_1 + 68 | 0) >> 2] = i64toi32_i32$0;
             $30($25_1 | 0, HEAP32[($13_1 + 112 | 0) >> 2] | 0 | 0);
             $16($13_1 + 104 | 0 | 0);
             $9_1 = HEAP32[($13_1 + 72 | 0) >> 2] | 0;
             if ($9_1) {
              label16 : while (1) {
               $14_1 = HEAP32[$9_1 >> 2] | 0;
               $9($9_1 | 0);
               $9_1 = $14_1;
               if ($9_1) {
                continue label16
               }
               break label16;
              }
             }
             HEAP32[($13_1 + 72 | 0) >> 2] = 0;
             $9_1 = HEAP32[($13_1 + 108 | 0) >> 2] | 0;
             $14_1 = HEAP32[($13_1 + 104 | 0) >> 2] | 0;
             if ($9_1 | $14_1 | 0) {
              continue label17
             }
             break label17;
            };
           }
           i64toi32_i32$3 = $13_1;
           i64toi32_i32$0 = HEAP32[($13_1 + 104 | 0) >> 2] | 0;
           i64toi32_i32$1 = HEAP32[($13_1 + 108 | 0) >> 2] | 0;
           $3905 = i64toi32_i32$0;
           i64toi32_i32$0 = $13_1;
           HEAP32[($13_1 + 136 | 0) >> 2] = $3905;
           HEAP32[($13_1 + 140 | 0) >> 2] = i64toi32_i32$1;
           $87($28_1 | 0, HEAP32[($13_1 + 112 | 0) >> 2] | 0 | 0);
           i64toi32_i32$1 = $86$hi;
           i64toi32_i32$0 = $13_1;
           HEAP32[($13_1 + 104 | 0) >> 2] = $86_1;
           HEAP32[($13_1 + 108 | 0) >> 2] = i64toi32_i32$1;
           $87($21_1 | 0, $11_1 | 0);
           $62_1 = Math_fround($62_1 + ($18_1 ? $79_1 : Math_fround(0.0)));
           $61_1 = Math_fround($67_1 + $6_1);
           $9_1 = HEAP32[($13_1 + 108 | 0) >> 2] | 0;
           block144 : {
            $14_1 = HEAP32[($13_1 + 104 | 0) >> 2] | 0;
            if (($14_1 | 0) == (HEAP32[($13_1 + 136 | 0) >> 2] | 0 | 0)) {
             if (($9_1 | 0) == (HEAP32[($13_1 + 140 | 0) >> 2] | 0 | 0)) {
              break block144
             }
            }
            $66_1 = Math_fround($62_1 + $63_1);
            $75_1 = Math_fround($62_1 + $61_1);
            $6_1 = Math_fround($60_1 + $61_1);
            label19 : while (1) {
             $3943 = HEAP32[($14_1 + 492 | 0) >> 2] | 0;
             $14_1 = HEAP32[($14_1 + 488 | 0) >> 2] | 0;
             if ((($3943 - $14_1 | 0) >> 2 | 0) >>> 0 <= $9_1 >>> 0) {
              break block22
             }
             block145 : {
              $9_1 = HEAP32[($14_1 + ($9_1 << 2 | 0) | 0) >> 2] | 0;
              $23_1 = HEAPU8[($9_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($9_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($9_1 + 23 | 0) >> 0] | 0) << 16 | 0) | 0;
              if (($23_1 & 786432 | 0 | 0) == (262144 | 0) | ($23_1 & 12288 | 0 | 0) == (8192 | 0) | 0) {
               break block145
              }
              $14_1 = $9_1 + 20 | 0;
              block151 : {
               block149 : {
                block147 : {
                 block148 : {
                  block146 : {
                   block150 : {
                    $23_1 = ($23_1 >>> 8 | 0) & 15 | 0;
                    if ($23_1) {
                     $3979 = $23_1
                    } else {
                     $3979 = (HEAPU8[($0_1 + 21 | 0) >> 0] | 0) >>> 4 | 0
                    }
                    switch ($3979 - 1 | 0 | 0) {
                    case 0:
                     break block146;
                    case 1:
                     break block147;
                    case 2:
                     break block148;
                    case 3:
                     break block149;
                    case 4:
                     break block150;
                    default:
                     break block145;
                    };
                   }
                   if ((HEAPU8[$20_1 >> 0] | 0) & 8 | 0) {
                    break block151
                   }
                  }
                  $58_1 = Math_fround($51($14_1 | 0, $22_1 | 0, $15_1 | 0, Math_fround($59_1)));
                  HEAPF32[(($9_1 + ((HEAP32[$16_1 >> 2] | 0) << 2 | 0) | 0) + 412 | 0) >> 2] = Math_fround($62_1 + $58_1);
                  break block145;
                 }
                 $63_1 = Math_fround($68($14_1 | 0, $22_1 | 0, $15_1 | 0, Math_fround($59_1)));
                 block155 : {
                  block152 : {
                   switch ($22_1 - 2 | 0 | 0) {
                   case 1:
                    $58_1 = Math_fround(HEAPF32[($9_1 + 404 | 0) >> 2]);
                    $14_1 = 2;
                    break block155;
                   default:
                    $14_1 = 1;
                    $58_1 = Math_fround(HEAPF32[($9_1 + 408 | 0) >> 2]);
                    block156 : {
                     switch ($22_1 | 0) {
                     case 0:
                      break block155;
                     case 1:
                      break block156;
                     default:
                      break block11;
                     };
                    }
                    $14_1 = 3;
                    break block155;
                   case 0:
                    break block152;
                   };
                  }
                  $58_1 = Math_fround(HEAPF32[($9_1 + 404 | 0) >> 2]);
                  $14_1 = 0;
                 }
                 HEAPF32[(($9_1 + ($14_1 << 2 | 0) | 0) + 412 | 0) >> 2] = Math_fround(Math_fround($75_1 - $63_1) - $58_1);
                 break block145;
                }
                block160 : {
                 block157 : {
                  switch ($22_1 - 2 | 0 | 0) {
                  case 1:
                   $63_1 = Math_fround(HEAPF32[($9_1 + 404 | 0) >> 2]);
                   $14_1 = 2;
                   break block160;
                  default:
                   $14_1 = 1;
                   $63_1 = Math_fround(HEAPF32[($9_1 + 408 | 0) >> 2]);
                   block161 : {
                    switch ($22_1 | 0) {
                    case 0:
                     break block160;
                    case 1:
                     break block161;
                    default:
                     break block11;
                    };
                   }
                   $14_1 = 3;
                   break block160;
                  case 0:
                   break block157;
                  };
                 }
                 $63_1 = Math_fround(HEAPF32[($9_1 + 404 | 0) >> 2]);
                 $14_1 = 0;
                }
                HEAPF32[(($9_1 + ($14_1 << 2 | 0) | 0) + 412 | 0) >> 2] = Math_fround($62_1 + Math_fround(Math_fround($61_1 - $63_1) * Math_fround(.5)));
                break block145;
               }
               $58_1 = Math_fround($35($14_1 | 0, $22_1 | 0, $15_1 | 0, Math_fround($59_1)));
               HEAPF32[(($9_1 + ((HEAP32[$16_1 >> 2] | 0) << 2 | 0) | 0) + 412 | 0) >> 2] = Math_fround($62_1 + $58_1);
               $23_1 = $9_1 + ((HEAP32[$17_1 >> 2] | 0) << 3 | 0) | 0;
               $63_1 = Math_fround(HEAPF32[($23_1 + 504 | 0) >> 2]);
               block164 : {
                switch ((HEAPU8[($23_1 + 508 | 0) >> 0] | 0) - 1 | 0 | 0) {
                case 1:
                 $63_1 = Math_fround(Math_fround($68_1 * $63_1) * Math_fround(.009999999776482582));
                case 0:
                 if ($63_1 >= Math_fround(0.0)) {
                  break block145
                 }
                 break;
                default:
                 break block164;
                };
               }
               block167 : {
                block166 : {
                 block165 : {
                  if ($19_1 >>> 0 <= 1 >>> 0) {
                   $58_1 = Math_fround(Math_fround(HEAPF32[($9_1 + 408 | 0) >> 2]) + Math_fround(Math_fround($4($14_1 | 0, $22_1 | 0, 1 | 0, Math_fround($59_1))) + Math_fround($3($14_1 | 0, $22_1 | 0, 1 | 0, Math_fround($59_1)))));
                   $4084 = $6_1;
                   break block165;
                  }
                  $58_1 = $6_1;
                  $4084 = Math_fround(Math_fround(HEAPF32[($9_1 + 404 | 0) >> 2]) + Math_fround(Math_fround($4($14_1 | 0, $19_1 | 0, 1 | 0, Math_fround($59_1))) + Math_fround($3($14_1 | 0, $19_1 | 0, 1 | 0, Math_fround($59_1)))));
                 }
                 $63_1 = $4084;
                 $65_1 = Math_fround(HEAPF32[($9_1 + 404 | 0) >> 2]);
                 if (!($63_1 != $63_1 | $65_1 != $65_1 | 0)) {
                  if (Math_fround(Math_abs(Math_fround($63_1 - $65_1))) < Math_fround(9.999999747378752e-05)) {
                   break block166
                  }
                  break block167;
                 }
                 if ($63_1 == $63_1 | $65_1 == $65_1 | 0) {
                  break block167
                 }
                }
                $65_1 = Math_fround(HEAPF32[($9_1 + 408 | 0) >> 2]);
                $14_1 = $65_1 != $65_1;
                if (!($14_1 | $58_1 != $58_1 | 0)) {
                 if (!(Math_fround(Math_abs(Math_fround($58_1 - $65_1))) < Math_fround(9.999999747378752e-05))) {
                  break block167
                 }
                 break block145;
                }
                if ($58_1 == $58_1) {
                 break block167
                }
                if ($14_1) {
                 break block145
                }
               }
               $31($9_1 | 0, Math_fround($63_1), Math_fround($58_1), $15_1 | 0, 0 | 0, 0 | 0, Math_fround($59_1), Math_fround($69_1), 1 | 0, 3 | 0, $10_1 | 0, $34_1 | 0, $12_1 | 0) | 0;
               break block145;
              }
              (wasm2js_i32$0 = $9_1, wasm2js_f32$0 = Math_fround(Math_fround($66_1 - Math_fround($48($9_1 | 0))) + Math_fround($51($14_1 | 0, 0 | 0, $15_1 | 0, Math_fround($68_1))))), HEAPF32[(wasm2js_i32$0 + 416 | 0) >> 2] = wasm2js_f32$0;
             }
             HEAP32[($13_1 + 56 | 0) >> 2] = 0;
             i64toi32_i32$3 = $13_1;
             i64toi32_i32$1 = HEAP32[($13_1 + 104 | 0) >> 2] | 0;
             i64toi32_i32$0 = HEAP32[($13_1 + 108 | 0) >> 2] | 0;
             $4165 = i64toi32_i32$1;
             i64toi32_i32$1 = $13_1;
             HEAP32[($13_1 + 48 | 0) >> 2] = $4165;
             HEAP32[($13_1 + 52 | 0) >> 2] = i64toi32_i32$0;
             $30($24_1 | 0, HEAP32[($13_1 + 112 | 0) >> 2] | 0 | 0);
             $16($13_1 + 104 | 0 | 0);
             $9_1 = HEAP32[($13_1 + 56 | 0) >> 2] | 0;
             if ($9_1) {
              label18 : while (1) {
               $14_1 = HEAP32[$9_1 >> 2] | 0;
               $9($9_1 | 0);
               $9_1 = $14_1;
               if ($9_1) {
                continue label18
               }
               break label18;
              }
             }
             HEAP32[($13_1 + 56 | 0) >> 2] = 0;
             $9_1 = HEAP32[($13_1 + 108 | 0) >> 2] | 0;
             $14_1 = HEAP32[($13_1 + 104 | 0) >> 2] | 0;
             if (($14_1 | 0) != (HEAP32[($13_1 + 136 | 0) >> 2] | 0 | 0)) {
              continue label19
             }
             if (($9_1 | 0) != (HEAP32[($13_1 + 140 | 0) >> 2] | 0 | 0)) {
              continue label19
             }
             break label19;
            };
           }
           $9_1 = HEAP32[($13_1 + 112 | 0) >> 2] | 0;
           if ($9_1) {
            label20 : while (1) {
             $14_1 = HEAP32[$9_1 >> 2] | 0;
             $9($9_1 | 0);
             $9_1 = $14_1;
             if ($9_1) {
              continue label20
             }
             break label20;
            }
           }
           if ($11_1) {
            label21 : while (1) {
             $9_1 = HEAP32[$11_1 >> 2] | 0;
             $9($11_1 | 0);
             $11_1 = $9_1;
             if ($9_1) {
              continue label21
             }
             break label21;
            }
           }
           $62_1 = Math_fround(Math_fround($60_1 + $62_1) + $61_1);
           $18_1 = $18_1 + 1 | 0;
           if (($18_1 | 0) != ($27_1 | 0)) {
            continue label22
           }
           break label22;
          };
         }
         $9_1 = HEAP32[($13_1 + 144 | 0) >> 2] | 0;
         if (!$9_1) {
          break block127
         }
         label23 : while (1) {
          $11_1 = HEAP32[$9_1 >> 2] | 0;
          $9($9_1 | 0);
          $9_1 = $11_1;
          if ($9_1) {
           continue label23
          }
          break label23;
         };
        }
        $16_1 = $0_1 + 404 | 0;
        (wasm2js_i32$0 = $16_1, wasm2js_f32$0 = Math_fround($7($0_1 | 0, 2 | 0, $15_1 | 0, Math_fround($80_1), Math_fround($64_1), Math_fround($64_1)))), HEAPF32[wasm2js_i32$0 >> 2] = wasm2js_f32$0;
        $17_1 = $0_1 + 408 | 0;
        (wasm2js_i32$0 = $17_1, wasm2js_f32$0 = Math_fround($7($0_1 | 0, 0 | 0, $15_1 | 0, Math_fround($81_1), Math_fround($71_1), Math_fround($64_1)))), HEAPF32[wasm2js_i32$0 >> 2] = wasm2js_f32$0;
        block170 : {
         $4249 = $16_1 + (((257 >>> ($19_1 << 3 | 0) | 0) & 1 | 0) << 2 | 0) | 0;
         block169 : {
          block168 : {
           if (($30_1 | 0) != (1 | 0)) {
            $9_1 = (HEAPU8[($0_1 + 23 | 0) >> 0] | 0) & 3 | 0;
            if (($9_1 | 0) == (2 | 0) | ($30_1 | 0) != (2 | 0) | 0) {
             break block168
            }
           }
           $4267 = Math_fround($7($0_1 | 0, $19_1 | 0, $15_1 | 0, Math_fround($72_1), Math_fround($73_1), Math_fround($64_1)));
           break block169;
          }
          if (($30_1 | 0) != (2 | 0) | ($9_1 | 0) != (2 | 0) | 0) {
           break block170
          }
          $62_1 = Math_fround($86($0_1 | 0, $15_1 | 0, $19_1 | 0, Math_fround($72_1), Math_fround($73_1), Math_fround($64_1)));
          $6_1 = Math_fround($74_1 + $7_1);
          $6_1 = $6_1 == $6_1 & $62_1 == $62_1 | 0 ? ($6_1 > $62_1 ? $62_1 : $6_1) : $6_1 != $6_1 ? $62_1 : $6_1;
          $4267 = $6_1 == $6_1 & $74_1 == $74_1 | 0 ? ($6_1 < $74_1 ? $74_1 : $6_1) : $6_1 != $6_1 ? $74_1 : $6_1;
         }
         HEAPF32[$4249 >> 2] = $4267;
        }
        block173 : {
         $4330 = $16_1 + (((257 >>> ($22_1 << 3 | 0) | 0) & 1 | 0) << 2 | 0) | 0;
         block172 : {
          block171 : {
           if (($26_1 | 0) != (1 | 0)) {
            $9_1 = ($26_1 | 0) != (2 | 0);
            $11_1 = (HEAPU8[($0_1 + 23 | 0) >> 0] | 0) & 3 | 0;
            if ($9_1 | ($11_1 | 0) == (2 | 0) | 0) {
             break block171
            }
           }
           $4351 = Math_fround($7($0_1 | 0, $22_1 | 0, $15_1 | 0, Math_fround(Math_fround($70_1 + $76_1)), Math_fround($77_1), Math_fround($64_1)));
           break block172;
          }
          if ($9_1 | ($11_1 | 0) != (2 | 0) | 0) {
           break block173
          }
          $7_1 = Math_fround($86($0_1 | 0, $15_1 | 0, $22_1 | 0, Math_fround(Math_fround($70_1 + $76_1)), Math_fround($77_1), Math_fround($64_1)));
          $6_1 = Math_fround($70_1 + $68_1);
          $6_1 = $6_1 == $6_1 & $7_1 == $7_1 | 0 ? ($6_1 > $7_1 ? $7_1 : $6_1) : $6_1 != $6_1 ? $7_1 : $6_1;
          $4351 = $6_1 == $6_1 & $70_1 == $70_1 | 0 ? ($6_1 < $70_1 ? $70_1 : $6_1) : $6_1 != $6_1 ? $70_1 : $6_1;
         }
         HEAPF32[$4330 >> 2] = $4351;
        }
        block174 : {
         if (!$8_1) {
          break block174
         }
         block175 : {
          if (((HEAPU8[($0_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($0_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0) & 49152 | 0 | 0) != (32768 | 0)) {
           break block175
          }
          $20($13_1 + 136 | 0 | 0, $0_1 | 0);
          label25 : while (1) {
           $9_1 = HEAP32[($13_1 + 140 | 0) >> 2] | 0;
           $11_1 = HEAP32[($13_1 + 136 | 0) >> 2] | 0;
           if (!($9_1 | $11_1 | 0)) {
            $9_1 = HEAP32[($13_1 + 144 | 0) >> 2] | 0;
            if (!$9_1) {
             break block175
            }
            label24 : while (1) {
             $11_1 = HEAP32[$9_1 >> 2] | 0;
             $9($9_1 | 0);
             $9_1 = $11_1;
             if ($9_1) {
              continue label24
             }
             break label24;
            };
            break block175;
           }
           $4436 = HEAP32[($11_1 + 492 | 0) >> 2] | 0;
           $11_1 = HEAP32[($11_1 + 488 | 0) >> 2] | 0;
           if ((($4436 - $11_1 | 0) >> 2 | 0) >>> 0 <= $9_1 >>> 0) {
            break block22
           }
           $9_1 = HEAP32[($11_1 + ($9_1 << 2 | 0) | 0) >> 2] | 0;
           if (((HEAPU8[($9_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($9_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0) & 12288 | 0 | 0) != (8192 | 0)) {
            $4453 = $9_1;
            block179 : {
             block178 : {
              switch ($22_1 - 2 | 0 | 0) {
              case 0:
               $14_1 = $9_1 + 404 | 0;
               $6_1 = Math_fround(Math_fround(HEAPF32[$16_1 >> 2]) - Math_fround(HEAPF32[($9_1 + 412 | 0) >> 2]));
               $4463 = 0;
               break block179;
              case 1:
               $14_1 = $9_1 + 404 | 0;
               $6_1 = Math_fround(Math_fround(HEAPF32[$16_1 >> 2]) - Math_fround(HEAPF32[($9_1 + 420 | 0) >> 2]));
               $4463 = 2;
               break block179;
              default:
               break block178;
              };
             }
             $6_1 = Math_fround(HEAPF32[$17_1 >> 2]);
             block181 : {
              switch ($22_1 | 0) {
              case 0:
               $14_1 = $9_1 + 408 | 0;
               $6_1 = Math_fround($6_1 - Math_fround(HEAPF32[($9_1 + 416 | 0) >> 2]));
               $4463 = 1;
               break block179;
              case 1:
               break block181;
              default:
               break block11;
              };
             }
             $14_1 = $9_1 + 408 | 0;
             $6_1 = Math_fround($6_1 - Math_fround(HEAPF32[($9_1 + 424 | 0) >> 2]));
             $4463 = 3;
            }
            HEAPF32[(($4453 + ($4463 << 2 | 0) | 0) + 412 | 0) >> 2] = Math_fround($6_1 - Math_fround(HEAPF32[$14_1 >> 2]));
           }
           $16($13_1 + 136 | 0 | 0);
           continue label25;
          };
         }
         block182 : {
          if (!(($19_1 | $22_1 | 0) & 1 | 0)) {
           break block182
          }
          $20_1 = $22_1 & 1 | 0;
          $21_1 = $19_1 & 1 | 0;
          $20($13_1 + 136 | 0 | 0, $0_1 | 0);
          label27 : while (1) {
           $9_1 = HEAP32[($13_1 + 140 | 0) >> 2] | 0;
           $11_1 = HEAP32[($13_1 + 136 | 0) >> 2] | 0;
           if (!($9_1 | $11_1 | 0)) {
            $9_1 = HEAP32[($13_1 + 144 | 0) >> 2] | 0;
            if (!$9_1) {
             break block182
            }
            label26 : while (1) {
             $11_1 = HEAP32[$9_1 >> 2] | 0;
             $9($9_1 | 0);
             $9_1 = $11_1;
             if ($9_1) {
              continue label26
             }
             break label26;
            };
            break block182;
           }
           $4525 = HEAP32[($11_1 + 492 | 0) >> 2] | 0;
           $11_1 = HEAP32[($11_1 + 488 | 0) >> 2] | 0;
           if ((($4525 - $11_1 | 0) >> 2 | 0) >>> 0 <= $9_1 >>> 0) {
            break block22
           }
           block183 : {
            $9_1 = HEAP32[($11_1 + ($9_1 << 2 | 0) | 0) >> 2] | 0;
            $11_1 = HEAPU8[($9_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($9_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($9_1 + 23 | 0) >> 0] | 0) << 16 | 0) | 0;
            if (($11_1 & 786432 | 0 | 0) == (262144 | 0) | ($11_1 & 12288 | 0 | 0) == (8192 | 0) | 0) {
             break block183
            }
            if ($21_1) {
             block187 : {
              block188 : {
               block186 : {
                switch ($19_1 - 1 | 0 | 0) {
                case 0:
                 $14_1 = $9_1 + 408 | 0;
                 $11_1 = $9_1 + 424 | 0;
                 $18_1 = 1;
                 $4559 = $17_1;
                 break block187;
                case 1:
                 $14_1 = $9_1 + 404 | 0;
                 $18_1 = 2;
                 $4564 = $9_1 + 412 | 0;
                 break block188;
                case 2:
                 break block186;
                default:
                 break block11;
                };
               }
               $14_1 = $9_1 + 404 | 0;
               $18_1 = 0;
               $4564 = $9_1 + 420 | 0;
              }
              $11_1 = $4564;
              $4559 = $16_1;
             }
             $27_1 = $4559;
             HEAPF32[(($9_1 + ($18_1 << 2 | 0) | 0) + 412 | 0) >> 2] = Math_fround(Math_fround(Math_fround(HEAPF32[$27_1 >> 2]) - Math_fround(HEAPF32[$14_1 >> 2])) - Math_fround(HEAPF32[$11_1 >> 2]));
            }
            if (!$20_1) {
             break block183
            }
            block192 : {
             block193 : {
              block191 : {
               switch ($22_1 - 1 | 0 | 0) {
               case 0:
                $11_1 = $9_1 + 408 | 0;
                $18_1 = $9_1 + 424 | 0;
                $23_1 = 1;
                $4593 = $17_1;
                break block192;
               case 1:
                $11_1 = $9_1 + 404 | 0;
                $18_1 = $9_1 + 412 | 0;
                $4598 = 2;
                break block193;
               case 2:
                break block191;
               default:
                break block11;
               };
              }
              $11_1 = $9_1 + 404 | 0;
              $18_1 = $9_1 + 420 | 0;
              $4598 = 0;
             }
             $23_1 = $4598;
             $4593 = $16_1;
            }
            $14_1 = $4593;
            HEAPF32[(($9_1 + ($23_1 << 2 | 0) | 0) + 412 | 0) >> 2] = Math_fround(Math_fround(Math_fround(HEAPF32[$14_1 >> 2]) - Math_fround(HEAPF32[$11_1 >> 2])) - Math_fround(HEAPF32[$18_1 >> 2]));
           }
           $16($13_1 + 136 | 0 | 0);
           continue label27;
          };
         }
         if (!((HEAPU8[($0_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($0_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0) & 12288 | 0 | ($34_1 | 0) == (1 | 0) | 0)) {
          if (!((HEAPU8[$0_1 >> 0] | 0) & 8 | 0)) {
           break block174
          }
         }
         $96($0_1 | 0, $0_1 | 0, ($19_1 >>> 0 > 1 >>> 0 ? $30_1 : $4_1) | 0, $15_1 | 0, $10_1 | 0, $34_1 | 0, $12_1 | 0, Math_fround(Math_fround(0.0)), Math_fround(Math_fround(0.0)), Math_fround($59_1), Math_fround($69_1)) | 0;
        }
        $9_1 = HEAP32[($13_1 + 88 | 0) >> 2] | 0;
        if (!$9_1) {
         break block194
        }
        label28 : while (1) {
         $11_1 = HEAP32[$9_1 >> 2] | 0;
         $9($9_1 | 0);
         $9_1 = $11_1;
         if ($9_1) {
          continue label28
         }
         break label28;
        };
        break block194;
       }
       fimport$2();
       wasm2js_trap();
      }
      $64($0_1 | 0);
     }
     global$0 = $13_1 + 160 | 0;
     break block195;
    }
    $6();
    wasm2js_trap();
   }
   HEAP8[($0_1 + 168 | 0) >> 0] = $3_1;
   HEAP32[($0_1 + 164 | 0) >> 2] = HEAP32[((HEAP32[($0_1 + 500 | 0) >> 2] | 0) + 12 | 0) >> 2] | 0;
   if ($29_1) {
    break block10
   }
   $3_1 = HEAP32[($10_1 + 8 | 0) >> 2] | 0;
   $14_1 = HEAP32[($0_1 + 172 | 0) >> 2] | 0;
   $9_1 = $14_1 + 1 | 0;
   HEAP32[($10_1 + 8 | 0) >> 2] = $3_1 >>> 0 > $9_1 >>> 0 ? $3_1 : $9_1;
   if (($14_1 | 0) == (8 | 0)) {
    HEAP32[($0_1 + 172 | 0) >> 2] = 0;
    $14_1 = 0;
   }
   if ($8_1) {
    $4693 = $0_1 + 368 | 0
   } else {
    HEAP32[($0_1 + 172 | 0) >> 2] = $14_1 + 1 | 0;
    $4693 = ($0_1 + Math_imul($14_1, 24) | 0) + 176 | 0;
   }
   $3_1 = $4693;
   HEAP32[($3_1 + 12 | 0) >> 2] = $5_1;
   HEAP32[($3_1 + 8 | 0) >> 2] = $4_1;
   HEAPF32[($3_1 + 4 | 0) >> 2] = $2_1;
   HEAPF32[$3_1 >> 2] = $1_1;
   HEAPF32[($3_1 + 16 | 0) >> 2] = Math_fround(HEAPF32[($0_1 + 404 | 0) >> 2]);
   HEAPF32[($3_1 + 20 | 0) >> 2] = Math_fround(HEAPF32[($0_1 + 408 | 0) >> 2]);
   $29_1 = 0;
  }
  if ($8_1) {
   i64toi32_i32$3 = $0_1;
   i64toi32_i32$0 = HEAP32[($0_1 + 404 | 0) >> 2] | 0;
   i64toi32_i32$1 = HEAP32[($0_1 + 408 | 0) >> 2] | 0;
   $4712 = i64toi32_i32$0;
   i64toi32_i32$0 = $0_1;
   HEAP32[($0_1 + 396 | 0) >> 2] = $4712;
   HEAP32[($0_1 + 400 | 0) >> 2] = i64toi32_i32$1;
   $3_1 = HEAPU8[$0_1 >> 0] | 0;
   $4_1 = $3_1 | 1 | 0;
   HEAP8[$0_1 >> 0] = $3_1 & 4 | 0 ? $4_1 & 251 | 0 : $4_1;
  }
  HEAP32[($0_1 + 160 | 0) >> 2] = $12_1;
  return $43_1 | !$29_1 | 0 | 0;
 }
 
 function $32($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $20_1 = 0, $11_1 = 0;
  $2_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
  $1_1 = $1_1 + ($2_1 >> 1 | 0) | 0;
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  $11_1 = $1_1;
  if ($2_1 & 1 | 0) {
   $20_1 = HEAP32[((HEAP32[$1_1 >> 2] | 0) + $0_1 | 0) >> 2] | 0
  } else {
   $20_1 = $0_1
  }
  return FUNCTION_TABLE[$20_1 | 0]($11_1) | 0 | 0;
 }
 
 function $33($0_1, $1_1, $2_1, $3_1, $4_1, $5_1, $6_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = Math_fround($3_1);
  $4_1 = Math_fround($4_1);
  $5_1 = $5_1 | 0;
  $6_1 = $6_1 | 0;
  $0_1 = $0_1 + 20 | 0;
  $4_1 = Math_fround(Math_fround($15($0_1 | 0, $1_1 | 0, (257 >>> ($2_1 << 3 | 0) | 0) & 255 | 0 | 0, Math_fround($3_1), Math_fround($4_1))) + Math_fround(Math_fround($4($0_1 | 0, $2_1 | 0, 1 | 0, Math_fround($4_1))) + Math_fround($3($0_1 | 0, $2_1 | 0, 1 | 0, Math_fround($4_1)))));
  block2 : {
   block3 : {
    block1 : {
     switch (HEAP32[$5_1 >> 2] | 0 | 0) {
     case 0:
     case 2:
      $3_1 = Math_fround(HEAPF32[$6_1 >> 2]);
      $4_1 = $4_1 != $4_1 ? $3_1 : $3_1 < $4_1 ? $3_1 : $4_1;
      break block3;
     case 1:
      break block1;
     default:
      break block2;
     };
    }
    if ($4_1 != $4_1) {
     break block2
    }
    HEAP32[$5_1 >> 2] = 2;
   }
   HEAPF32[$6_1 >> 2] = $4_1;
  }
 }
 
 function $34($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = Math_fround(0);
  if (!(HEAP32[($0_1 + 484 | 0) >> 2] | 0)) {
   return Math_fround(Math_fround(0.0))
  }
  $1_1 = $0_1 + 124 | 0;
  $2_1 = Math_fround($2($1_1 | 0, HEAPU16[($0_1 + 28 | 0) >> 1] | 0 | 0));
  if ($2_1 == $2_1) {
   return Math_fround(Math_fround($2($1_1 | 0, HEAPU16[($0_1 + 28 | 0) >> 1] | 0 | 0)))
  }
  block : {
   if ((HEAPU8[((HEAP32[($0_1 + 500 | 0) >> 2] | 0) + 8 | 0) >> 0] | 0) & 1 | 0) {
    break block
   }
   $2_1 = Math_fround($2($1_1 | 0, HEAPU16[($0_1 + 24 | 0) >> 1] | 0 | 0));
   if ($2_1 != $2_1) {
    break block
   }
   if (!(Math_fround($2($1_1 | 0, HEAPU16[($0_1 + 24 | 0) >> 1] | 0 | 0)) < Math_fround(0.0))) {
    break block
   }
   return Math_fround(Math_fround(-Math_fround($2($1_1 | 0, HEAPU16[($0_1 + 24 | 0) >> 1] | 0 | 0))));
  }
  return Math_fround((HEAPU8[((HEAP32[($0_1 + 500 | 0) >> 2] | 0) + 8 | 0) >> 0] | 0) & 1 | 0 ? Math_fround(1.0) : Math_fround(0.0));
 }
 
 function $35($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = Math_fround($3_1);
  var $4_1 = 0, $5_1 = Math_fround(0);
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  $10($4_1 + 8 | 0 | 0, $0_1 | 0, HEAP32[(($1_1 << 2 | 0) + 4828 | 0) >> 2] | 0 | 0, $2_1 | 0);
  $5_1 = Math_fround(NaN);
  block2 : {
   block1 : {
    switch ((HEAPU8[($4_1 + 12 | 0) >> 0] | 0) - 1 | 0 | 0) {
    case 0:
     $5_1 = Math_fround(HEAPF32[($4_1 + 8 | 0) >> 2]);
     break block2;
    case 1:
     break block1;
    default:
     break block2;
    };
   }
   $5_1 = Math_fround(Math_fround(Math_fround(HEAPF32[($4_1 + 8 | 0) >> 2]) * $3_1) * Math_fround(.009999999776482582));
  }
  global$0 = $4_1 + 16 | 0;
  return Math_fround($5_1 == $5_1 ? $5_1 : Math_fround(0.0));
 }
 
 function $36($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0;
  $3_1 = HEAPU8[($2_1 + 6 | 0) >> 0] | 0 | ((HEAPU8[($2_1 + 7 | 0) >> 0] | 0) << 8 | 0) | 0;
  if ($3_1 & 7 | 0) {
   $1($0_1 | 0, $1_1 + 104 | 0 | 0, $3_1 | 0);
   return;
  }
  $1_1 = $1_1 + 104 | 0;
  $3_1 = HEAPU8[($2_1 + 14 | 0) >> 0] | 0 | ((HEAPU8[($2_1 + 15 | 0) >> 0] | 0) << 8 | 0) | 0;
  if ($3_1 & 7 | 0) {
   $1($0_1 | 0, $1_1 | 0, $3_1 | 0);
   return;
  }
  $1($0_1 | 0, $1_1 | 0, HEAPU8[($2_1 + 16 | 0) >> 0] | 0 | ((HEAPU8[($2_1 + 17 | 0) >> 0] | 0) << 8 | 0) | 0 | 0);
 }
 
 function $37($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0;
  $3_1 = HEAPU8[($2_1 + 2 | 0) >> 0] | 0 | ((HEAPU8[($2_1 + 3 | 0) >> 0] | 0) << 8 | 0) | 0;
  if ($3_1 & 7 | 0) {
   $1($0_1 | 0, $1_1 + 104 | 0 | 0, $3_1 | 0);
   return;
  }
  $1_1 = $1_1 + 104 | 0;
  $3_1 = HEAPU8[($2_1 + 14 | 0) >> 0] | 0 | ((HEAPU8[($2_1 + 15 | 0) >> 0] | 0) << 8 | 0) | 0;
  if ($3_1 & 7 | 0) {
   $1($0_1 | 0, $1_1 | 0, $3_1 | 0);
   return;
  }
  $1($0_1 | 0, $1_1 | 0, HEAPU8[($2_1 + 16 | 0) >> 0] | 0 | ((HEAPU8[($2_1 + 17 | 0) >> 0] | 0) << 8 | 0) | 0 | 0);
 }
 
 function $38($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  block3 : {
   block2 : {
    block1 : {
     switch ($3_1 - 1 | 0 | 0) {
     case 0:
      $3_1 = HEAPU8[($2_1 + 10 | 0) >> 0] | 0 | ((HEAPU8[($2_1 + 11 | 0) >> 0] | 0) << 8 | 0) | 0;
      if (!($3_1 & 7 | 0)) {
       break block2
      }
      break block3;
     case 1:
      break block1;
     default:
      break block2;
     };
    }
    $3_1 = HEAPU8[($2_1 + 8 | 0) >> 0] | 0 | ((HEAPU8[($2_1 + 9 | 0) >> 0] | 0) << 8 | 0) | 0;
    if (!($3_1 & 7 | 0)) {
     break block2
    }
    break block3;
   }
   $3_1 = HEAPU8[($2_1 + 4 | 0) >> 0] | 0 | ((HEAPU8[($2_1 + 5 | 0) >> 0] | 0) << 8 | 0) | 0;
   if ($3_1 & 7 | 0) {
    break block3
   }
   $1_1 = $1_1 + 104 | 0;
   $3_1 = HEAPU8[($2_1 + 12 | 0) >> 0] | 0 | ((HEAPU8[($2_1 + 13 | 0) >> 0] | 0) << 8 | 0) | 0;
   if ($3_1 & 7 | 0) {
    $1($0_1 | 0, $1_1 | 0, $3_1 | 0);
    return;
   }
   $1($0_1 | 0, $1_1 | 0, HEAPU8[($2_1 + 16 | 0) >> 0] | 0 | ((HEAPU8[($2_1 + 17 | 0) >> 0] | 0) << 8 | 0) | 0 | 0);
   return;
  }
  $1($0_1 | 0, $1_1 + 104 | 0 | 0, $3_1 | 0);
 }
 
 function $39($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  block3 : {
   block2 : {
    block1 : {
     switch ($3_1 - 1 | 0 | 0) {
     case 0:
      $3_1 = HEAPU8[($2_1 + 8 | 0) >> 0] | 0 | ((HEAPU8[($2_1 + 9 | 0) >> 0] | 0) << 8 | 0) | 0;
      if (!($3_1 & 7 | 0)) {
       break block2
      }
      break block3;
     case 1:
      break block1;
     default:
      break block2;
     };
    }
    $3_1 = HEAPU8[($2_1 + 10 | 0) >> 0] | 0 | ((HEAPU8[($2_1 + 11 | 0) >> 0] | 0) << 8 | 0) | 0;
    if (!($3_1 & 7 | 0)) {
     break block2
    }
    break block3;
   }
   $3_1 = HEAPU8[$2_1 >> 0] | 0 | ((HEAPU8[($2_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0;
   if ($3_1 & 7 | 0) {
    break block3
   }
   $1_1 = $1_1 + 104 | 0;
   $3_1 = HEAPU8[($2_1 + 12 | 0) >> 0] | 0 | ((HEAPU8[($2_1 + 13 | 0) >> 0] | 0) << 8 | 0) | 0;
   if ($3_1 & 7 | 0) {
    $1($0_1 | 0, $1_1 | 0, $3_1 | 0);
    return;
   }
   $1($0_1 | 0, $1_1 | 0, HEAPU8[($2_1 + 16 | 0) >> 0] | 0 | ((HEAPU8[($2_1 + 17 | 0) >> 0] | 0) << 8 | 0) | 0 | 0);
   return;
  }
  $1($0_1 | 0, $1_1 + 104 | 0 | 0, $3_1 | 0);
 }
 
 function $40($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $6_1 = Math_fround(0), $7_1 = Math_fround(0), $4_1 = 0, $5_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  $4_1 = 1;
  $5_1 = $0_1 + 124 | 0;
  $1_1 = ($0_1 + ($1_1 << 1 | 0) | 0) + 110 | 0;
  $1($3_1 + 8 | 0 | 0, $5_1 | 0, HEAPU16[$1_1 >> 1] | 0 | 0);
  block1 : {
   block : {
    $7_1 = Math_fround(HEAPF32[($3_1 + 8 | 0) >> 2]);
    $6_1 = Math_fround(HEAPF32[$2_1 >> 2]);
    if ($7_1 != $6_1) {
     if ($7_1 == $7_1) {
      $2_1 = HEAPU8[($2_1 + 4 | 0) >> 0] | 0;
      break block;
     }
     $4_1 = $6_1 != $6_1;
    }
    $2_1 = HEAPU8[($2_1 + 4 | 0) >> 0] | 0;
    if (!$4_1) {
     break block
    }
    if ((HEAPU8[($3_1 + 12 | 0) >> 0] | 0 | 0) == ($2_1 & 255 | 0 | 0)) {
     break block1
    }
   }
   $27($5_1 | 0, $1_1 | 0, Math_fround($6_1), $2_1 | 0);
   label : while (1) {
    $1_1 = HEAPU8[$0_1 >> 0] | 0;
    if ($1_1 & 4 | 0) {
     break block1
    }
    HEAP8[$0_1 >> 0] = $1_1 | 4 | 0;
    $1_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
    if ($1_1) {
     FUNCTION_TABLE[$1_1 | 0]($0_1)
    }
    HEAP32[($0_1 + 156 | 0) >> 2] = 2143289344;
    $0_1 = HEAP32[($0_1 + 484 | 0) >> 2] | 0;
    if ($0_1) {
     continue label
    }
    break label;
   };
  }
  global$0 = $3_1 + 16 | 0;
 }
 
 function $41($0_1, $0$hi, $1_1) {
  $0_1 = $0_1 | 0;
  $0$hi = $0$hi | 0;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, $2_1 = 0, i64toi32_i32$3 = 0, i64toi32_i32$1 = 0, $5_1 = 0, i64toi32_i32$5 = 0, $5$hi = 0, i64toi32_i32$4 = 0, $3_1 = 0, $11_1 = 0, $15$hi = 0, $4_1 = 0;
  block : {
   i64toi32_i32$0 = $0$hi;
   i64toi32_i32$2 = $0_1;
   i64toi32_i32$1 = 1;
   i64toi32_i32$3 = 0;
   if (i64toi32_i32$0 >>> 0 < i64toi32_i32$1 >>> 0 | ((i64toi32_i32$0 | 0) == (i64toi32_i32$1 | 0) & i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0 | 0) | 0) {
    i64toi32_i32$2 = i64toi32_i32$0;
    $5_1 = $0_1;
    $5$hi = i64toi32_i32$2;
    break block;
   }
   label : while (1) {
    $1_1 = $1_1 - 1 | 0;
    $11_1 = $1_1;
    i64toi32_i32$2 = $0$hi;
    i64toi32_i32$0 = 0;
    i64toi32_i32$0 = __wasm_i64_udiv($0_1 | 0, i64toi32_i32$2 | 0, 10 | 0, i64toi32_i32$0 | 0) | 0;
    i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
    $5_1 = i64toi32_i32$0;
    $5$hi = i64toi32_i32$2;
    i64toi32_i32$0 = 0;
    i64toi32_i32$0 = __wasm_i64_mul($5_1 | 0, i64toi32_i32$2 | 0, 246 | 0, i64toi32_i32$0 | 0) | 0;
    i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
    $15$hi = i64toi32_i32$2;
    i64toi32_i32$2 = $0$hi;
    i64toi32_i32$2 = $15$hi;
    i64toi32_i32$3 = i64toi32_i32$0;
    i64toi32_i32$0 = $0$hi;
    i64toi32_i32$1 = $0_1;
    i64toi32_i32$4 = i64toi32_i32$3 + $0_1 | 0;
    i64toi32_i32$5 = i64toi32_i32$2 + i64toi32_i32$0 | 0;
    if (i64toi32_i32$4 >>> 0 < $0_1 >>> 0) {
     i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
    }
    HEAP8[$11_1 >> 0] = i64toi32_i32$4 | 48 | 0;
    i64toi32_i32$5 = $0$hi;
    i64toi32_i32$5 = $0$hi;
    i64toi32_i32$2 = $0_1;
    i64toi32_i32$3 = 9;
    i64toi32_i32$1 = -1;
    $2_1 = $0$hi >>> 0 > i64toi32_i32$3 >>> 0 | (($0$hi | 0) == (i64toi32_i32$3 | 0) & i64toi32_i32$2 >>> 0 > i64toi32_i32$1 >>> 0 | 0) | 0;
    i64toi32_i32$2 = $5$hi;
    $0_1 = $5_1;
    $0$hi = i64toi32_i32$2;
    if ($2_1) {
     continue label
    }
    break label;
   };
  }
  i64toi32_i32$2 = $5$hi;
  $2_1 = $5_1;
  if ($2_1) {
   label1 : while (1) {
    $1_1 = $1_1 - 1 | 0;
    $3_1 = ($2_1 >>> 0) / (10 >>> 0) | 0;
    HEAP8[$1_1 >> 0] = Math_imul($3_1, 246) + $2_1 | 0 | 48 | 0;
    $4_1 = $2_1 >>> 0 > 9 >>> 0;
    $2_1 = $3_1;
    if ($4_1) {
     continue label1
    }
    break label1;
   }
  }
  return $1_1 | 0;
 }
 
 function $42($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0;
  $2_1 = $0(4 | 0) | 0;
  HEAP32[$2_1 >> 2] = $1_1;
  $3_1 = $0(4 | 0) | 0;
  HEAP32[$3_1 >> 2] = $1_1;
  fimport$7(7617 | 0, $0_1 | 0, 7650 | 0, 5242 | 0, 191 | 0, $2_1 | 0, 7650 | 0, 5246 | 0, 192 | 0, $3_1 | 0);
 }
 
 function $43($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  return $109($0_1 | 0, $1_1 | 0, $2_1 | 0, 1 | 0, 2 | 0) | 0 | 0;
 }
 
 function $44($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var $4_1 = 0, $30_1 = 0;
  HEAP32[($0_1 + 12 | 0) >> 2] = 0;
  HEAP32[($0_1 + 16 | 0) >> 2] = $3_1;
  block : {
   if ($1_1) {
    if ($1_1 >>> 0 >= 1073741824 >>> 0) {
     break block
    }
    $4_1 = $0($1_1 << 2 | 0 | 0) | 0;
   }
   HEAP32[$0_1 >> 2] = $4_1;
   $2_1 = $4_1 + ($2_1 << 2 | 0) | 0;
   HEAP32[($0_1 + 8 | 0) >> 2] = $2_1;
   HEAP32[($0_1 + 12 | 0) >> 2] = $4_1 + ($1_1 << 2 | 0) | 0;
   HEAP32[($0_1 + 4 | 0) >> 2] = $2_1;
   return $0_1 | 0;
  }
  $58();
  wasm2js_trap();
 }
 
 function $45($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = Math_fround(0);
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  $53($3_1 + 8 | 0 | 0, $0_1 | 0, HEAP32[(($1_1 << 2 | 0) + 4828 | 0) >> 2] | 0 | 0, $2_1 | 0);
  $4_1 = Math_fround(NaN);
  block2 : {
   block1 : {
    switch ((HEAPU8[($3_1 + 12 | 0) >> 0] | 0) - 1 | 0 | 0) {
    case 0:
     $4_1 = Math_fround(HEAPF32[($3_1 + 8 | 0) >> 2]);
     break block2;
    case 1:
     break block1;
    default:
     break block2;
    };
   }
   $4_1 = Math_fround(Math_fround(Math_fround(HEAPF32[($3_1 + 8 | 0) >> 2]) * Math_fround(0.0)) * Math_fround(.009999999776482582));
  }
  global$0 = $3_1 + 16 | 0;
  return Math_fround($4_1 == $4_1 ? Math_fround(Math_max($4_1, Math_fround(0.0))) : Math_fround(0.0));
 }
 
 function $46($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = Math_fround($2_1);
  $3_1 = $3_1 | 0;
  var $4_1 = 0, $5_1 = 0, $6_1 = 0, $7_1 = 0, $8_1 = 0, $9_1 = 0, i64toi32_i32$0 = 0, $10_1 = 0, $11_1 = 0, $12_1 = 0, $57_1 = 0, $65_1 = 0, $147_1 = 0, $44_1 = 0, $13_1 = 0, $328 = 0, $14_1 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $8_1 = global$0 - 16 | 0;
  global$0 = $8_1;
  $3_1 = (HEAPU8[$1_1 >> 0] | 0 | ((HEAPU8[($1_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0) & -8 | 0 | $3_1 | 0;
  HEAP8[$1_1 >> 0] = $3_1;
  HEAP8[($1_1 + 1 | 0) >> 0] = $3_1 >>> 8 | 0;
  block1 : {
   block4 : {
    block8 : {
     block12 : {
      block11 : {
       block7 : {
        block3 : {
         block10 : {
          block9 : {
           block : {
            if ($3_1 & 8 | 0) {
             $6_1 = $3_1 & 65535 | 0;
             $4_1 = $6_1 >>> 4 | 0;
             if ($6_1 >>> 0 <= 63 >>> 0) {
              $57_1 = ($0_1 + ($4_1 << 2 | 0) | 0) + 4 | 0
             } else {
              $4_1 = $4_1 - 4 | 0;
              $0_1 = HEAP32[($0_1 + 24 | 0) >> 2] | 0;
              $44_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
              $0_1 = HEAP32[$0_1 >> 2] | 0;
              if ($4_1 >>> 0 >= (($44_1 - $0_1 | 0) >> 2 | 0) >>> 0) {
               break block
              }
              $57_1 = $0_1 + ($4_1 << 2 | 0) | 0;
             }
             HEAPF32[$57_1 >> 2] = $2_1;
             break block1;
            }
            block2 : {
             if (Math_fround(Math_abs($2_1)) < Math_fround(2147483648.0)) {
              $65_1 = ~~$2_1;
              break block2;
             }
             $65_1 = -2147483648;
            }
            $4_1 = $65_1;
            if (!(($4_1 + 2047 | 0) >>> 0 > 4094 >>> 0 | Math_fround($4_1 | 0) != $2_1 | 0)) {
             $3_1 = $3_1 & 15 | 0 | (($2_1 < Math_fround(0.0) ? 0 - $4_1 | 0 | 2048 | 0 : $4_1) << 4 | 0) | 0;
             break block1;
            }
            $11_1 = HEAPU16[$0_1 >> 1] | 0;
            HEAP16[$0_1 >> 1] = $11_1 + 1 | 0;
            if ($11_1 >>> 0 >= 4096 >>> 0) {
             break block3
            }
            if ($11_1 >>> 0 <= 3 >>> 0) {
             HEAPF32[(($0_1 + ($11_1 << 2 | 0) | 0) + 4 | 0) >> 2] = $2_1;
             break block4;
            }
            $3_1 = HEAP32[($0_1 + 24 | 0) >> 2] | 0;
            if (!$3_1) {
             $3_1 = $0(24 | 0) | 0;
             i64toi32_i32$0 = 0;
             HEAP32[$3_1 >> 2] = 0;
             HEAP32[($3_1 + 4 | 0) >> 2] = i64toi32_i32$0;
             i64toi32_i32$0 = 0;
             HEAP32[($3_1 + 16 | 0) >> 2] = 0;
             HEAP32[($3_1 + 20 | 0) >> 2] = i64toi32_i32$0;
             i64toi32_i32$0 = 0;
             HEAP32[($3_1 + 8 | 0) >> 2] = 0;
             HEAP32[($3_1 + 12 | 0) >> 2] = i64toi32_i32$0;
             HEAP32[($0_1 + 24 | 0) >> 2] = $3_1;
            }
            block5 : {
             $4_1 = HEAP32[($3_1 + 4 | 0) >> 2] | 0;
             if (($4_1 | 0) != (HEAP32[($3_1 + 8 | 0) >> 2] | 0 | 0)) {
              HEAPF32[$4_1 >> 2] = $2_1;
              HEAP32[($3_1 + 4 | 0) >> 2] = $4_1 + 4 | 0;
              break block5;
             }
             $7_1 = HEAP32[$3_1 >> 2] | 0;
             $4_1 = $4_1 - $7_1 | 0;
             $9_1 = $4_1 >> 2 | 0;
             $6_1 = $9_1 + 1 | 0;
             if ($6_1 >>> 0 >= 1073741824 >>> 0) {
              break block
             }
             block6 : {
              $5_1 = $4_1 >> 1 | 0;
              $6_1 = $4_1 >>> 0 >= 2147483644 >>> 0 ? 1073741823 : $5_1 >>> 0 > $6_1 >>> 0 ? $5_1 : $6_1;
              if (!$6_1) {
               $5_1 = 0;
               $147_1 = $9_1;
               break block6;
              }
              if ($6_1 >>> 0 >= 1073741824 >>> 0) {
               break block7
              }
              $5_1 = $0($6_1 << 2 | 0 | 0) | 0;
              $7_1 = HEAP32[$3_1 >> 2] | 0;
              $4_1 = (HEAP32[($3_1 + 4 | 0) >> 2] | 0) - $7_1 | 0;
              $147_1 = $4_1 >> 2 | 0;
             }
             $10_1 = $147_1;
             $9_1 = $5_1 + ($9_1 << 2 | 0) | 0;
             HEAPF32[$9_1 >> 2] = $2_1;
             $7_1 = $21($9_1 - ($10_1 << 2 | 0) | 0 | 0, $7_1 | 0, $4_1 | 0) | 0;
             HEAP32[($3_1 + 8 | 0) >> 2] = $5_1 + ($6_1 << 2 | 0) | 0;
             HEAP32[($3_1 + 4 | 0) >> 2] = $9_1 + 4 | 0;
             $4_1 = HEAP32[$3_1 >> 2] | 0;
             HEAP32[$3_1 >> 2] = $7_1;
             if (!$4_1) {
              break block5
             }
             $5($4_1 | 0);
            }
            $6_1 = HEAP32[($0_1 + 24 | 0) >> 2] | 0;
            $3_1 = HEAP32[($6_1 + 16 | 0) >> 2] | 0;
            $0_1 = HEAP32[($6_1 + 20 | 0) >> 2] | 0;
            if (($3_1 | 0) != ($0_1 << 5 | 0 | 0)) {
             break block8
            }
            if (($3_1 + 1 | 0 | 0) < (0 | 0)) {
             break block
            }
            if ($3_1 >>> 0 > 1073741822 >>> 0) {
             break block9
            }
            $0_1 = $0_1 << 6 | 0;
            $4_1 = ($3_1 & -32 | 0) + 32 | 0;
            $0_1 = $0_1 >>> 0 > $4_1 >>> 0 ? $0_1 : $4_1;
            if ($3_1 >>> 0 >= $0_1 >>> 0) {
             break block8
            }
            if (($0_1 | 0) >= (0 | 0)) {
             break block10
            }
           }
           fimport$2();
           wasm2js_trap();
          }
          $0_1 = 2147483647;
          if ($3_1 >>> 0 >= 2147483647 >>> 0) {
           break block8
          }
         }
         HEAP32[($8_1 + 8 | 0) >> 2] = 0;
         i64toi32_i32$0 = 0;
         HEAP32[$8_1 >> 2] = 0;
         HEAP32[($8_1 + 4 | 0) >> 2] = i64toi32_i32$0;
         $129($8_1 | 0, $0_1 | 0);
         $4_1 = HEAP32[($6_1 + 12 | 0) >> 2] | 0;
         $7_1 = HEAP32[($8_1 + 4 | 0) >> 2] | 0;
         $0_1 = HEAP32[($6_1 + 16 | 0) >> 2] | 0;
         $3_1 = ($7_1 + ($0_1 & 31 | 0) | 0) + ($0_1 & -32 | 0) | 0;
         HEAP32[($8_1 + 4 | 0) >> 2] = $3_1;
         if (!$7_1) {
          $5_1 = $3_1 - 1 | 0;
          break block11;
         }
         $5_1 = $3_1 - 1 | 0;
         if (($5_1 ^ ($7_1 - 1 | 0) | 0) >>> 0 > 31 >>> 0) {
          break block11
         }
         $10_1 = HEAP32[$8_1 >> 2] | 0;
         break block12;
        }
        fimport$11(4757 | 0, 3041 | 0, 34 | 0, 3036 | 0);
        wasm2js_trap();
       }
       $58();
       wasm2js_trap();
      }
      $10_1 = HEAP32[$8_1 >> 2] | 0;
      HEAP32[($10_1 + (($3_1 >>> 0 >= 33 >>> 0 ? $5_1 >>> 5 | 0 : 0) << 2 | 0) | 0) >> 2] = 0;
     }
     $3_1 = $10_1 + (($7_1 >>> 3 | 0) & 536870908 | 0) | 0;
     block13 : {
      $7_1 = $7_1 & 31 | 0;
      if (!$7_1) {
       if (($0_1 | 0) <= (0 | 0)) {
        break block13
       }
       $5_1 = ($0_1 | 0) / (32 | 0) | 0;
       if (($0_1 + 31 | 0) >>> 0 >= 63 >>> 0) {
        $21($3_1 | 0, $4_1 | 0, $5_1 << 2 | 0 | 0) | 0
       }
       $0_1 = $0_1 - ($5_1 << 5 | 0) | 0;
       if (($0_1 | 0) <= (0 | 0)) {
        break block13
       }
       $5_1 = $5_1 << 2 | 0;
       $3_1 = $3_1 + $5_1 | 0;
       $0_1 = -1 >>> (32 - $0_1 | 0) | 0;
       HEAP32[$3_1 >> 2] = (HEAP32[$3_1 >> 2] | 0) & ($0_1 ^ -1 | 0) | 0 | ((HEAP32[($4_1 + $5_1 | 0) >> 2] | 0) & $0_1 | 0) | 0;
       break block13;
      }
      if (($0_1 | 0) <= (0 | 0)) {
       break block13
      }
      $12_1 = -1 << $7_1 | 0;
      $9_1 = 32 - $7_1 | 0;
      if (($0_1 | 0) >= (32 | 0)) {
       $13_1 = $12_1 ^ -1 | 0;
       $5_1 = HEAP32[$3_1 >> 2] | 0;
       label : while (1) {
        $328 = $5_1 & $13_1 | 0;
        $5_1 = HEAP32[$4_1 >> 2] | 0;
        HEAP32[$3_1 >> 2] = $328 | ($5_1 << $7_1 | 0) | 0;
        $5_1 = (HEAP32[($3_1 + 4 | 0) >> 2] | 0) & $12_1 | 0 | ($5_1 >>> $9_1 | 0) | 0;
        HEAP32[($3_1 + 4 | 0) >> 2] = $5_1;
        $4_1 = $4_1 + 4 | 0;
        $3_1 = $3_1 + 4 | 0;
        $14_1 = $0_1 >>> 0 > 63 >>> 0;
        $0_1 = $0_1 - 32 | 0;
        if ($14_1) {
         continue label
        }
        break label;
       };
       if (($0_1 | 0) <= (0 | 0)) {
        break block13
       }
      }
      $5_1 = ($0_1 | 0) > ($9_1 | 0) ? $9_1 : $0_1;
      $4_1 = (HEAP32[$4_1 >> 2] | 0) & (-1 >>> (32 - $0_1 | 0) | 0) | 0;
      HEAP32[$3_1 >> 2] = (HEAP32[$3_1 >> 2] | 0) & (((-1 >>> ($9_1 - $5_1 | 0) | 0) & $12_1 | 0) ^ -1 | 0) | 0 | ($4_1 << $7_1 | 0) | 0;
      $0_1 = $0_1 - $5_1 | 0;
      if (($0_1 | 0) <= (0 | 0)) {
       break block13
      }
      $3_1 = $3_1 + ((($5_1 + $7_1 | 0) >>> 3 | 0) & 536870908 | 0) | 0;
      HEAP32[$3_1 >> 2] = (HEAP32[$3_1 >> 2] | 0) & ((-1 >>> (32 - $0_1 | 0) | 0) ^ -1 | 0) | 0 | ($4_1 >>> $5_1 | 0) | 0;
     }
     $0_1 = HEAP32[($6_1 + 12 | 0) >> 2] | 0;
     HEAP32[($6_1 + 12 | 0) >> 2] = $10_1;
     $3_1 = HEAP32[($8_1 + 4 | 0) >> 2] | 0;
     HEAP32[($6_1 + 16 | 0) >> 2] = $3_1;
     HEAP32[($6_1 + 20 | 0) >> 2] = HEAP32[($8_1 + 8 | 0) >> 2] | 0;
     if (!$0_1) {
      break block8
     }
     $5($0_1 | 0);
     $3_1 = HEAP32[($6_1 + 16 | 0) >> 2] | 0;
    }
    HEAP32[($6_1 + 16 | 0) >> 2] = $3_1 + 1 | 0;
    $0_1 = (HEAP32[($6_1 + 12 | 0) >> 2] | 0) + (($3_1 >>> 3 | 0) & 536870908 | 0) | 0;
    (wasm2js_i32$0 = $0_1, wasm2js_i32$1 = (HEAP32[$0_1 >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $3_1 | 0) | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
    $3_1 = HEAPU8[$1_1 >> 0] | 0 | ((HEAPU8[($1_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0;
   }
   $3_1 = $3_1 & 7 | 0 | ($11_1 << 4 | 0) | 0 | 8 | 0;
  }
  HEAP8[$1_1 >> 0] = $3_1;
  HEAP8[($1_1 + 1 | 0) >> 0] = $3_1 >>> 8 | 0;
  global$0 = $8_1 + 16 | 0;
 }
 
 function $47($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = Math_fround($2_1);
  var $3_1 = 0, $4_1 = Math_fround(0), wasm2js_i32$0 = 0, wasm2js_i32$1 = 0, wasm2js_i32$2 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  $1_1 = HEAPU16[($0_1 + (($1_1 & 254 | 0 | 0) == (2 | 0) ? 84 : 86) | 0) >> 1] | 0;
  $1($3_1 + 8 | 0 | 0, $0_1 + 104 | 0 | 0, (wasm2js_i32$0 = $1_1, wasm2js_i32$1 = HEAPU16[($0_1 + 88 | 0) >> 1] | 0, wasm2js_i32$2 = $1_1 & 7 | 0, wasm2js_i32$2 ? wasm2js_i32$0 : wasm2js_i32$1) | 0);
  $4_1 = Math_fround(NaN);
  block2 : {
   block1 : {
    switch ((HEAPU8[($3_1 + 12 | 0) >> 0] | 0) - 1 | 0 | 0) {
    case 0:
     $4_1 = Math_fround(HEAPF32[($3_1 + 8 | 0) >> 2]);
     break block2;
    case 1:
     break block1;
    default:
     break block2;
    };
   }
   $4_1 = Math_fround(Math_fround(Math_fround(HEAPF32[($3_1 + 8 | 0) >> 2]) * $2_1) * Math_fround(.009999999776482582));
  }
  global$0 = $3_1 + 16 | 0;
  return Math_fround($4_1 == $4_1 ? Math_fround(Math_max($4_1, Math_fround(0.0))) : Math_fround(0.0));
 }
 
 function $48($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, $3_1 = 0, $4_1 = 0, $5_1 = Math_fround(0), $69_1 = 0, $38_1 = 0;
  $3_1 = global$0 - 32 | 0;
  global$0 = $3_1;
  block : {
   $1_1 = HEAP32[($0_1 + 12 | 0) >> 2] | 0;
   if ($1_1) {
    $5_1 = Math_fround(FUNCTION_TABLE[$1_1 | 0]($0_1, Math_fround(HEAPF32[($0_1 + 404 | 0) >> 2]), Math_fround(HEAPF32[($0_1 + 408 | 0) >> 2])));
    if ($5_1 == $5_1) {
     break block
    }
    HEAP32[$3_1 >> 2] = 3882;
    $14($0_1 | 0, 5 | 0, 4824 | 0, $3_1 | 0);
    $6();
    wasm2js_trap();
   }
   $20($3_1 + 16 | 0 | 0, $0_1 | 0);
   block1 : {
    $2_1 = HEAP32[($3_1 + 16 | 0) >> 2] | 0;
    $1_1 = HEAP32[($3_1 + 20 | 0) >> 2] | 0;
    if (!($2_1 | $1_1 | 0)) {
     break block1
    }
    block2 : {
     label : while (1) {
      $38_1 = HEAP32[($2_1 + 492 | 0) >> 2] | 0;
      $2_1 = HEAP32[($2_1 + 488 | 0) >> 2] | 0;
      if ($1_1 >>> 0 < (($38_1 - $2_1 | 0) >> 2 | 0) >>> 0) {
       $1_1 = HEAP32[($2_1 + ($1_1 << 2 | 0) | 0) >> 2] | 0;
       if (HEAP32[($1_1 + 476 | 0) >> 2] | 0) {
        break block1
       }
       $2_1 = HEAPU8[($1_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($1_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($1_1 + 23 | 0) >> 0] | 0) << 16 | 0) | 0;
       if (($2_1 & 12288 | 0 | 0) != (8192 | 0)) {
        $2_1 = ($2_1 >>> 8 | 0) & 15 | 0;
        if ($2_1) {
         $69_1 = $2_1
        } else {
         $69_1 = (HEAPU8[($0_1 + 21 | 0) >> 0] | 0) >>> 4 | 0
        }
        if (($69_1 | 0) == (5 | 0)) {
         if ((HEAPU8[($0_1 + 20 | 0) >> 0] | 0) & 8 | 0) {
          break block2
         }
        }
        if ((HEAPU8[$1_1 >> 0] | 0) & 2 | 0) {
         break block2
        }
        $4_1 = $4_1 ? $4_1 : $1_1;
       }
       $16($3_1 + 16 | 0 | 0);
       $1_1 = HEAP32[($3_1 + 20 | 0) >> 2] | 0;
       $2_1 = HEAP32[($3_1 + 16 | 0) >> 2] | 0;
       if ($1_1 | $2_1 | 0) {
        continue label
       }
       break block1;
      }
      break label;
     };
     fimport$2();
     wasm2js_trap();
    }
    $4_1 = $1_1;
   }
   $1_1 = HEAP32[($3_1 + 24 | 0) >> 2] | 0;
   if ($1_1) {
    label1 : while (1) {
     $2_1 = HEAP32[$1_1 >> 2] | 0;
     $5($1_1 | 0);
     $1_1 = $2_1;
     if ($1_1) {
      continue label1
     }
     break label1;
    }
   }
   if (!$4_1) {
    $5_1 = Math_fround(HEAPF32[($0_1 + 408 | 0) >> 2]);
    break block;
   }
   $5_1 = Math_fround(Math_fround($48($4_1 | 0)) + Math_fround(HEAPF32[($4_1 + 416 | 0) >> 2]));
  }
  global$0 = $3_1 + 32 | 0;
  return Math_fround($5_1);
 }
 
 function $49($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $3_1 = 0, $4_1 = 0, $5_1 = 0, $7_1 = 0, $6_1 = 0, $8_1 = 0, $38_1 = 0, $41_1 = 0, $106_1 = 0, $112_1 = 0;
  block1 : {
   $5_1 = HEAP32[($0_1 + 488 | 0) >> 2] | 0;
   $7_1 = HEAP32[($0_1 + 492 | 0) >> 2] | 0;
   if (($5_1 | 0) != ($7_1 | 0)) {
    label1 : while (1) {
     $2_1 = HEAP32[$5_1 >> 2] | 0;
     if (($0_1 | 0) != (HEAP32[($2_1 + 484 | 0) >> 2] | 0 | 0)) {
      block : {
       $1_1 = HEAP32[(HEAP32[($0_1 + 500 | 0) >> 2] | 0) >> 2] | 0;
       if ($1_1) {
        $1_1 = FUNCTION_TABLE[$1_1 | 0]($2_1, $0_1, $6_1) | 0;
        if ($1_1) {
         break block
        }
       }
       $1_1 = $0(520 | 0) | 0;
       HEAP32[($1_1 + 16 | 0) >> 2] = HEAP32[($2_1 + 16 | 0) >> 2] | 0;
       i64toi32_i32$0 = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
       i64toi32_i32$1 = HEAP32[($2_1 + 12 | 0) >> 2] | 0;
       $38_1 = i64toi32_i32$0;
       i64toi32_i32$0 = $1_1;
       HEAP32[($1_1 + 8 | 0) >> 2] = $38_1;
       HEAP32[($1_1 + 12 | 0) >> 2] = i64toi32_i32$1;
       i64toi32_i32$1 = HEAP32[$2_1 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[($2_1 + 4 | 0) >> 2] | 0;
       $41_1 = i64toi32_i32$1;
       i64toi32_i32$1 = $1_1;
       HEAP32[$1_1 >> 2] = $41_1;
       HEAP32[($1_1 + 4 | 0) >> 2] = i64toi32_i32$0;
       $13($1_1 + 20 | 0 | 0, $2_1 + 20 | 0 | 0, 104 | 0) | 0;
       i64toi32_i32$1 = $1_1;
       i64toi32_i32$0 = 0;
       HEAP32[($1_1 + 128 | 0) >> 2] = 0;
       HEAP32[($1_1 + 132 | 0) >> 2] = i64toi32_i32$0;
       $3_1 = $1_1 + 124 | 0;
       HEAP16[$3_1 >> 1] = 0;
       i64toi32_i32$1 = $1_1;
       i64toi32_i32$0 = 0;
       HEAP32[($1_1 + 136 | 0) >> 2] = 0;
       HEAP32[($1_1 + 140 | 0) >> 2] = i64toi32_i32$0;
       i64toi32_i32$1 = $1_1;
       i64toi32_i32$0 = 0;
       HEAP32[($1_1 + 144 | 0) >> 2] = 0;
       HEAP32[($1_1 + 148 | 0) >> 2] = i64toi32_i32$0;
       $130($3_1 | 0, $2_1 + 124 | 0 | 0);
       $13($1_1 + 152 | 0 | 0, $2_1 + 152 | 0 | 0, 336 | 0) | 0;
       HEAP32[($1_1 + 496 | 0) >> 2] = 0;
       i64toi32_i32$1 = $1_1;
       i64toi32_i32$0 = 0;
       HEAP32[($1_1 + 488 | 0) >> 2] = 0;
       HEAP32[($1_1 + 492 | 0) >> 2] = i64toi32_i32$0;
       $3_1 = HEAP32[($2_1 + 492 | 0) >> 2] | 0;
       $4_1 = HEAP32[($2_1 + 488 | 0) >> 2] | 0;
       if (($3_1 | 0) != ($4_1 | 0)) {
        $4_1 = $3_1 - $4_1 | 0;
        if (($4_1 | 0) < (0 | 0)) {
         break block1
        }
        $3_1 = $0($4_1 | 0) | 0;
        HEAP32[($1_1 + 492 | 0) >> 2] = $3_1;
        HEAP32[($1_1 + 488 | 0) >> 2] = $3_1;
        HEAP32[($1_1 + 496 | 0) >> 2] = $3_1 + $4_1 | 0;
        $4_1 = HEAP32[($2_1 + 488 | 0) >> 2] | 0;
        $8_1 = HEAP32[($2_1 + 492 | 0) >> 2] | 0;
        if (($4_1 | 0) != ($8_1 | 0)) {
         label : while (1) {
          HEAP32[$3_1 >> 2] = HEAP32[$4_1 >> 2] | 0;
          $3_1 = $3_1 + 4 | 0;
          $4_1 = $4_1 + 4 | 0;
          if (($4_1 | 0) != ($8_1 | 0)) {
           continue label
          }
          break label;
         }
        }
        HEAP32[($1_1 + 492 | 0) >> 2] = $3_1;
       }
       i64toi32_i32$0 = HEAP32[($2_1 + 500 | 0) >> 2] | 0;
       i64toi32_i32$1 = HEAP32[($2_1 + 504 | 0) >> 2] | 0;
       $106_1 = i64toi32_i32$0;
       i64toi32_i32$0 = $1_1;
       HEAP32[($1_1 + 500 | 0) >> 2] = $106_1;
       HEAP32[($1_1 + 504 | 0) >> 2] = i64toi32_i32$1;
       HEAP32[($1_1 + 516 | 0) >> 2] = HEAP32[($2_1 + 516 | 0) >> 2] | 0;
       i64toi32_i32$1 = HEAP32[($2_1 + 508 | 0) >> 2] | 0;
       i64toi32_i32$0 = HEAP32[($2_1 + 512 | 0) >> 2] | 0;
       $112_1 = i64toi32_i32$1;
       i64toi32_i32$1 = $1_1;
       HEAP32[($1_1 + 508 | 0) >> 2] = $112_1;
       HEAP32[($1_1 + 512 | 0) >> 2] = i64toi32_i32$0;
       HEAP32[($1_1 + 484 | 0) >> 2] = 0;
      }
      HEAP32[$5_1 >> 2] = $1_1;
      HEAP32[($1_1 + 484 | 0) >> 2] = $0_1;
     }
     $6_1 = $6_1 + 1 | 0;
     $5_1 = $5_1 + 4 | 0;
     if (($5_1 | 0) != ($7_1 | 0)) {
      continue label1
     }
     break label1;
    }
   }
   return;
  }
  fimport$2();
  wasm2js_trap();
 }
 
 function $50($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  block : {
   switch ($2_1 | 0) {
   case 1:
    $37($0_1 | 0, $1_1 | 0, $1_1 + 48 | 0 | 0);
    return;
   case 2:
    $38($0_1 | 0, $1_1 | 0, $1_1 + 48 | 0 | 0, $3_1 | 0);
    return;
   case 3:
    $36($0_1 | 0, $1_1 | 0, $1_1 + 48 | 0 | 0);
    return;
   default:
    $6();
    wasm2js_trap();
   case 0:
    break block;
   };
  }
  $39($0_1 | 0, $1_1 | 0, $1_1 + 48 | 0 | 0, $3_1 | 0);
 }
 
 function $51($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = Math_fround($3_1);
  var $4_1 = 0, $5_1 = Math_fround(0);
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  $24($4_1 + 8 | 0 | 0, $0_1 | 0, HEAP32[(($1_1 << 2 | 0) + 4828 | 0) >> 2] | 0 | 0, $2_1 | 0);
  $5_1 = Math_fround(NaN);
  block2 : {
   block1 : {
    switch ((HEAPU8[($4_1 + 12 | 0) >> 0] | 0) - 1 | 0 | 0) {
    case 0:
     $5_1 = Math_fround(HEAPF32[($4_1 + 8 | 0) >> 2]);
     break block2;
    case 1:
     break block1;
    default:
     break block2;
    };
   }
   $5_1 = Math_fround(Math_fround(Math_fround(HEAPF32[($4_1 + 8 | 0) >> 2]) * $3_1) * Math_fround(.009999999776482582));
  }
  global$0 = $4_1 + 16 | 0;
  return Math_fround($5_1 == $5_1 ? $5_1 : Math_fround(0.0));
 }
 
 function $52($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = Math_fround(0);
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  $53($3_1 + 8 | 0 | 0, $0_1 | 0, HEAP32[(($1_1 << 2 | 0) + 4844 | 0) >> 2] | 0 | 0, $2_1 | 0);
  $4_1 = Math_fround(NaN);
  block2 : {
   block1 : {
    switch ((HEAPU8[($3_1 + 12 | 0) >> 0] | 0) - 1 | 0 | 0) {
    case 0:
     $4_1 = Math_fround(HEAPF32[($3_1 + 8 | 0) >> 2]);
     break block2;
    case 1:
     break block1;
    default:
     break block2;
    };
   }
   $4_1 = Math_fround(Math_fround(Math_fround(HEAPF32[($3_1 + 8 | 0) >> 2]) * Math_fround(0.0)) * Math_fround(.009999999776482582));
  }
  global$0 = $3_1 + 16 | 0;
  return Math_fround($4_1 == $4_1 ? Math_fround(Math_max($4_1, Math_fround(0.0))) : Math_fround(0.0));
 }
 
 function $53($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  block : {
   switch ($2_1 | 0) {
   case 1:
    $37($0_1 | 0, $1_1 | 0, $1_1 + 66 | 0 | 0);
    return;
   case 2:
    $38($0_1 | 0, $1_1 | 0, $1_1 + 66 | 0 | 0, $3_1 | 0);
    return;
   case 3:
    $36($0_1 | 0, $1_1 | 0, $1_1 + 66 | 0 | 0);
    return;
   default:
    $6();
    wasm2js_trap();
   case 0:
    break block;
   };
  }
  $39($0_1 | 0, $1_1 | 0, $1_1 + 66 | 0 | 0, $3_1 | 0);
 }
 
 function $54($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = Math_fround($3_1);
  $2_1 = !$2_1 << 1 | 0;
  return Math_fround(Math_fround(Math_fround(Math_fround($66($0_1 | 0, $2_1 | 0, $1_1 | 0, Math_fround($3_1))) + Math_fround($45($0_1 | 0, $2_1 | 0, $1_1 | 0))) + Math_fround(Math_fround($97($0_1 | 0, $2_1 | 0, $1_1 | 0, Math_fround($3_1))) + Math_fround($52($0_1 | 0, $2_1 | 0, $1_1 | 0)))));
 }
 
 function $55($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $6_1 = Math_fround(0), $7_1 = Math_fround(0), $4_1 = 0, $5_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  $4_1 = 1;
  $5_1 = $0_1 + 124 | 0;
  $1_1 = ($0_1 + ($1_1 << 1 | 0) | 0) + 118 | 0;
  $1($3_1 + 8 | 0 | 0, $5_1 | 0, HEAPU16[$1_1 >> 1] | 0 | 0);
  block1 : {
   block : {
    $7_1 = Math_fround(HEAPF32[($3_1 + 8 | 0) >> 2]);
    $6_1 = Math_fround(HEAPF32[$2_1 >> 2]);
    if ($7_1 != $6_1) {
     if ($7_1 == $7_1) {
      $2_1 = HEAPU8[($2_1 + 4 | 0) >> 0] | 0;
      break block;
     }
     $4_1 = $6_1 != $6_1;
    }
    $2_1 = HEAPU8[($2_1 + 4 | 0) >> 0] | 0;
    if (!$4_1) {
     break block
    }
    if ((HEAPU8[($3_1 + 12 | 0) >> 0] | 0 | 0) == ($2_1 & 255 | 0 | 0)) {
     break block1
    }
   }
   $27($5_1 | 0, $1_1 | 0, Math_fround($6_1), $2_1 | 0);
   label : while (1) {
    $1_1 = HEAPU8[$0_1 >> 0] | 0;
    if ($1_1 & 4 | 0) {
     break block1
    }
    HEAP8[$0_1 >> 0] = $1_1 | 4 | 0;
    $1_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
    if ($1_1) {
     FUNCTION_TABLE[$1_1 | 0]($0_1)
    }
    HEAP32[($0_1 + 156 | 0) >> 2] = 2143289344;
    $0_1 = HEAP32[($0_1 + 484 | 0) >> 2] | 0;
    if ($0_1) {
     continue label
    }
    break label;
   };
  }
  global$0 = $3_1 + 16 | 0;
 }
 
 function $56($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $6_1 = Math_fround(0), $7_1 = Math_fround(0), $4_1 = 0, $5_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  $4_1 = 1;
  $5_1 = $0_1 + 124 | 0;
  $1_1 = ($0_1 + ($1_1 << 1 | 0) | 0) + 114 | 0;
  $1($3_1 + 8 | 0 | 0, $5_1 | 0, HEAPU16[$1_1 >> 1] | 0 | 0);
  block1 : {
   block : {
    $7_1 = Math_fround(HEAPF32[($3_1 + 8 | 0) >> 2]);
    $6_1 = Math_fround(HEAPF32[$2_1 >> 2]);
    if ($7_1 != $6_1) {
     if ($7_1 == $7_1) {
      $2_1 = HEAPU8[($2_1 + 4 | 0) >> 0] | 0;
      break block;
     }
     $4_1 = $6_1 != $6_1;
    }
    $2_1 = HEAPU8[($2_1 + 4 | 0) >> 0] | 0;
    if (!$4_1) {
     break block
    }
    if ((HEAPU8[($3_1 + 12 | 0) >> 0] | 0 | 0) == ($2_1 & 255 | 0 | 0)) {
     break block1
    }
   }
   $27($5_1 | 0, $1_1 | 0, Math_fround($6_1), $2_1 | 0);
   label : while (1) {
    $1_1 = HEAPU8[$0_1 >> 0] | 0;
    if ($1_1 & 4 | 0) {
     break block1
    }
    HEAP8[$0_1 >> 0] = $1_1 | 4 | 0;
    $1_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
    if ($1_1) {
     FUNCTION_TABLE[$1_1 | 0]($0_1)
    }
    HEAP32[($0_1 + 156 | 0) >> 2] = 2143289344;
    $0_1 = HEAP32[($0_1 + 484 | 0) >> 2] | 0;
    if ($0_1) {
     continue label
    }
    break label;
   };
  }
  global$0 = $3_1 + 16 | 0;
 }
 
 function $57($0_1) {
  $0_1 = $0_1 | 0;
  return ($0_1 - 48 | 0) >>> 0 < 10 >>> 0 | 0;
 }
 
 function $58() {
  fimport$2();
  wasm2js_trap();
 }
 
 function $59($0_1) {
  $0_1 = $0_1 | 0;
  return $0_1 | 0;
 }
 
 function $60($0_1) {
  $0_1 = $0_1 | 0;
  if ($0_1) {
   FUNCTION_TABLE[HEAP32[((HEAP32[$0_1 >> 2] | 0) + 4 | 0) >> 2] | 0 | 0]($0_1)
  }
 }
 
 function $61($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = HEAP32[($0_1 + 12 | 0) >> 2] | 0;
  if ($1_1) {
   $5($1_1 | 0)
  }
  $1_1 = HEAP32[$0_1 >> 2] | 0;
  if ($1_1) {
   HEAP32[($0_1 + 4 | 0) >> 2] = $1_1;
   $5($1_1 | 0);
  }
  $5($0_1 | 0);
 }
 
 function $62($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $2_1 = 0, $3_1 = 0, $8_1 = 0, $9_1 = 0, $10_1 = 0, $11_1 = 0, $12_1 = 0, $4_1 = 0, $91_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$0 = 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[($0_1 + 8 | 0) >> 2] = i64toi32_i32$0;
  $8_1 = 4161;
  HEAP8[($0_1 + 21 | 0) >> 0] = $8_1;
  HEAP8[($0_1 + 22 | 0) >> 0] = $8_1 >>> 8 | 0;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$0 = 0;
  HEAP32[($0_1 + 12 | 0) >> 2] = 0;
  HEAP32[($0_1 + 16 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$0 = 262144;
  HEAP32[($0_1 + 24 | 0) >> 2] = 0;
  HEAP32[($0_1 + 28 | 0) >> 2] = i64toi32_i32$0;
  HEAP8[($0_1 + 23 | 0) >> 0] = (HEAPU8[($0_1 + 23 | 0) >> 0] | 0) & 224 | 0;
  HEAP8[$0_1 >> 0] = (HEAPU8[$0_1 >> 0] | 0) & 224 | 0 | 5 | 0;
  HEAP8[($0_1 + 20 | 0) >> 0] = (HEAPU8[($0_1 + 20 | 0) >> 0] | 0) & 128 | 0;
  $12($0_1 + 32 | 0 | 0, 0 | 0, 78 | 0) | 0;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$0 = 0;
  $9_1 = 0;
  HEAP16[($0_1 + 114 | 0) >> 1] = $9_1;
  HEAP16[($0_1 + 116 | 0) >> 1] = $9_1 >>> 16 | 0;
  HEAP16[($0_1 + 118 | 0) >> 1] = i64toi32_i32$0;
  HEAP16[($0_1 + 120 | 0) >> 1] = i64toi32_i32$0 >>> 16 | 0;
  $10_1 = 262148;
  HEAP16[($0_1 + 110 | 0) >> 1] = $10_1;
  HEAP16[($0_1 + 112 | 0) >> 1] = $10_1 >>> 16 | 0;
  $11_1 = 0;
  HEAP16[($0_1 + 122 | 0) >> 1] = $11_1;
  HEAP16[($0_1 + 124 | 0) >> 1] = $11_1 >>> 16 | 0;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$0 = 0;
  HEAP32[($0_1 + 128 | 0) >> 2] = 0;
  HEAP32[($0_1 + 132 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$0 = 0;
  HEAP32[($0_1 + 136 | 0) >> 2] = 0;
  HEAP32[($0_1 + 140 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$0 = 0;
  HEAP32[($0_1 + 144 | 0) >> 2] = 0;
  HEAP32[($0_1 + 148 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$0 = 0;
  HEAP32[($0_1 + 160 | 0) >> 2] = 0;
  HEAP32[($0_1 + 164 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$0 = 2143289344;
  HEAP32[($0_1 + 152 | 0) >> 2] = 0;
  HEAP32[($0_1 + 156 | 0) >> 2] = i64toi32_i32$0;
  HEAP8[($0_1 + 168 | 0) >> 0] = 0;
  $12($0_1 + 172 | 0 | 0, 0 | 0, 196 | 0) | 0;
  $4_1 = $0_1 + 368 | 0;
  $2_1 = $0_1 + 176 | 0;
  label : while (1) {
   i64toi32_i32$1 = $2_1;
   i64toi32_i32$0 = -1082130432;
   HEAP32[(i64toi32_i32$1 + 16 | 0) >> 2] = -1082130432;
   HEAP32[(i64toi32_i32$1 + 20 | 0) >> 2] = i64toi32_i32$0;
   i64toi32_i32$0 = 1;
   HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = 1;
   HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
   i64toi32_i32$0 = -1082130432;
   HEAP32[i64toi32_i32$1 >> 2] = -1082130432;
   HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
   $2_1 = i64toi32_i32$1 + 24 | 0;
   if (($2_1 | 0) != ($4_1 | 0)) {
    continue label
   }
   break label;
  };
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$0 = -1082130432;
  HEAP32[($0_1 + 368 | 0) >> 2] = -1082130432;
  HEAP32[($0_1 + 372 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$0 = -1082130432;
  HEAP32[($0_1 + 384 | 0) >> 2] = -1082130432;
  HEAP32[($0_1 + 388 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$0 = 1;
  HEAP32[($0_1 + 376 | 0) >> 2] = 1;
  HEAP32[($0_1 + 380 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$0 = 2143289344;
  HEAP32[($0_1 + 404 | 0) >> 2] = 2143289344;
  HEAP32[($0_1 + 408 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$0 = 2143289344;
  HEAP32[($0_1 + 396 | 0) >> 2] = 2143289344;
  HEAP32[($0_1 + 400 | 0) >> 2] = i64toi32_i32$0;
  $2_1 = $0_1 + 392 | 0;
  HEAP8[$2_1 >> 0] = (HEAPU8[$2_1 >> 0] | 0) & 248 | 0;
  $12($0_1 + 412 | 0 | 0, 0 | 0, 88 | 0) | 0;
  HEAP8[($0_1 + 516 | 0) >> 0] = 0;
  HEAP32[($0_1 + 512 | 0) >> 2] = 2143289344;
  HEAP8[($0_1 + 508 | 0) >> 0] = 0;
  HEAP32[($0_1 + 504 | 0) >> 2] = 2143289344;
  HEAP32[($0_1 + 500 | 0) >> 2] = $1_1;
  if ($1_1) {
   if ((HEAPU8[($1_1 + 8 | 0) >> 0] | 0) & 1 | 0) {
    HEAP8[($0_1 + 20 | 0) >> 0] = (HEAPU8[($0_1 + 20 | 0) >> 0] | 0) & 243 | 0 | 8 | 0;
    $12_1 = (HEAPU8[($0_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($0_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0) & 65520 | 0 | 4 | 0;
    HEAP8[($0_1 + 21 | 0) >> 0] = $12_1;
    HEAP8[($0_1 + 22 | 0) >> 0] = $12_1 >>> 8 | 0;
   }
   global$0 = $3_1 + 16 | 0;
   return $0_1 | 0;
  }
  HEAP32[$3_1 >> 2] = 3362;
  $84($3_1 | 0);
  $6();
  wasm2js_trap();
 }
 
 function $63($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = Math_fround($2_1);
  var $10_1 = Math_fround(0);
  $10_1 = Math_fround(HEAPF32[(($0_1 + ((HEAP32[(($1_1 << 2 | 0) + 4860 | 0) >> 2] | 0) << 2 | 0) | 0) + 404 | 0) >> 2]);
  $0_1 = $0_1 + 20 | 0;
  return Math_fround(Math_fround($10_1 + Math_fround(Math_fround($4($0_1 | 0, $1_1 | 0, 1 | 0, Math_fround($2_1))) + Math_fround($3($0_1 | 0, $1_1 | 0, 1 | 0, Math_fround($2_1))))));
 }
 
 function $64($0_1) {
  $0_1 = $0_1 | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $1_1 = 0, $3_1 = 0, $2_1 = 0, $5_1 = 0, $4_1 = 0, $10_1 = 0, $6_1 = 0, $7_1 = 0, $8_1 = 0, $9_1 = 0;
  $1_1 = global$0 - 336 | 0;
  global$0 = $1_1;
  $3_1 = HEAP32[($0_1 + 488 | 0) >> 2] | 0;
  $5_1 = HEAP32[($0_1 + 492 | 0) >> 2] | 0;
  if (($3_1 | 0) != ($5_1 | 0)) {
   $6_1 = $1_1 + 268 | 0;
   $7_1 = $1_1 + 224 | 0;
   $8_1 = $1_1 + 32 | 0;
   $9_1 = $1_1 + 28 | 0;
   $4_1 = $1_1 + 16 | 0;
   label1 : while (1) {
    $2_1 = HEAP32[$3_1 >> 2] | 0;
    if ((((HEAPU8[($2_1 + 23 | 0) >> 0] | 0) << 16 | 0) & 786432 | 0 | 0) == (524288 | 0)) {
     $12($1_1 + 8 | 0 | 0, 0 | 0, 324 | 0) | 0;
     HEAP32[($1_1 + 12 | 0) >> 2] = 2143289344;
     HEAP8[($4_1 + 8 | 0) >> 0] = 0;
     i64toi32_i32$1 = $4_1;
     i64toi32_i32$0 = 0;
     HEAP32[i64toi32_i32$1 >> 2] = 0;
     HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
     $12($9_1 | 0, 0 | 0, 196 | 0) | 0;
     $0_1 = $8_1;
     label : while (1) {
      i64toi32_i32$1 = $0_1;
      i64toi32_i32$0 = -1082130432;
      HEAP32[(i64toi32_i32$1 + 16 | 0) >> 2] = -1082130432;
      HEAP32[(i64toi32_i32$1 + 20 | 0) >> 2] = i64toi32_i32$0;
      i64toi32_i32$0 = 1;
      HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = 1;
      HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
      i64toi32_i32$0 = -1082130432;
      HEAP32[i64toi32_i32$1 >> 2] = -1082130432;
      HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
      $0_1 = i64toi32_i32$1 + 24 | 0;
      if (($0_1 | 0) != ($7_1 | 0)) {
       continue label
      }
      break label;
     };
     i64toi32_i32$1 = $1_1;
     i64toi32_i32$0 = -1082130432;
     HEAP32[(i64toi32_i32$1 + 240 | 0) >> 2] = -1082130432;
     HEAP32[(i64toi32_i32$1 + 244 | 0) >> 2] = i64toi32_i32$0;
     i64toi32_i32$0 = 1;
     HEAP32[(i64toi32_i32$1 + 232 | 0) >> 2] = 1;
     HEAP32[(i64toi32_i32$1 + 236 | 0) >> 2] = i64toi32_i32$0;
     i64toi32_i32$0 = -1082130432;
     HEAP32[(i64toi32_i32$1 + 224 | 0) >> 2] = -1082130432;
     HEAP32[(i64toi32_i32$1 + 228 | 0) >> 2] = i64toi32_i32$0;
     i64toi32_i32$0 = 2143289344;
     HEAP32[(i64toi32_i32$1 + 260 | 0) >> 2] = 2143289344;
     HEAP32[(i64toi32_i32$1 + 264 | 0) >> 2] = i64toi32_i32$0;
     i64toi32_i32$0 = 2143289344;
     HEAP32[(i64toi32_i32$1 + 252 | 0) >> 2] = 2143289344;
     HEAP32[(i64toi32_i32$1 + 256 | 0) >> 2] = i64toi32_i32$0;
     HEAP8[(i64toi32_i32$1 + 248 | 0) >> 0] = (HEAPU8[(i64toi32_i32$1 + 248 | 0) >> 0] | 0) & 248 | 0;
     $12($6_1 | 0, 0 | 0, 64 | 0) | 0;
     $13($2_1 + 152 | 0 | 0, i64toi32_i32$1 + 8 | 0 | 0, 324 | 0) | 0;
     i64toi32_i32$1 = $2_1;
     i64toi32_i32$0 = 0;
     HEAP32[(i64toi32_i32$1 + 396 | 0) >> 2] = 0;
     HEAP32[(i64toi32_i32$1 + 400 | 0) >> 2] = i64toi32_i32$0;
     $0_1 = HEAPU8[i64toi32_i32$1 >> 0] | 0;
     $10_1 = $0_1 | 1 | 0;
     HEAP8[i64toi32_i32$1 >> 0] = $0_1 & 4 | 0 ? $10_1 & 251 | 0 : $10_1;
     $49(i64toi32_i32$1 | 0);
     $64(i64toi32_i32$1 | 0);
    }
    $3_1 = $3_1 + 4 | 0;
    if (($3_1 | 0) != ($5_1 | 0)) {
     continue label1
    }
    break label1;
   };
  }
  global$0 = $1_1 + 336 | 0;
 }
 
 function $65($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = 1;
  block : {
   if ((HEAPU8[($0_1 + 30 | 0) >> 0] | 0) & 7 | 0) {
    break block
   }
   if ((HEAPU8[($0_1 + 34 | 0) >> 0] | 0) & 7 | 0) {
    break block
   }
   if ((HEAPU8[($0_1 + 46 | 0) >> 0] | 0) & 7 | 0) {
    break block
   }
   if ((HEAPU8[($0_1 + 42 | 0) >> 0] | 0) & 7 | 0) {
    break block
   }
   if ((HEAPU8[($0_1 + 38 | 0) >> 0] | 0) & 7 | 0) {
    break block
   }
   $1_1 = ((HEAPU8[($0_1 + 40 | 0) >> 0] | 0) & 7 | 0 | 0) != (0 | 0);
  }
  return $1_1 | 0;
 }
 
 function $66($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = Math_fround($3_1);
  var $4_1 = 0, $5_1 = Math_fround(0);
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  $50($4_1 + 8 | 0 | 0, $0_1 | 0, HEAP32[(($1_1 << 2 | 0) + 4828 | 0) >> 2] | 0 | 0, $2_1 | 0);
  $5_1 = Math_fround(NaN);
  block2 : {
   block1 : {
    switch ((HEAPU8[($4_1 + 12 | 0) >> 0] | 0) - 1 | 0 | 0) {
    case 0:
     $5_1 = Math_fround(HEAPF32[($4_1 + 8 | 0) >> 2]);
     break block2;
    case 1:
     break block1;
    default:
     break block2;
    };
   }
   $5_1 = Math_fround(Math_fround(Math_fround(HEAPF32[($4_1 + 8 | 0) >> 2]) * $3_1) * Math_fround(.009999999776482582));
  }
  global$0 = $4_1 + 16 | 0;
  return Math_fround($5_1 == $5_1 ? Math_fround(Math_max($5_1, Math_fround(0.0))) : Math_fround(0.0));
 }
 
 function $67($0_1) {
  $0_1 = $0_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, $1_1 = 0, i64toi32_i32$3 = 0, i64toi32_i32$4 = 0, $2_1 = 0, $3_1 = 0, $5_1 = 0, $4_1 = 0, $8_1 = 0, $7_1 = 0, $7$hi = 0, $8$hi = 0, $6_1 = 0, $28_1 = 0, $31_1 = 0, $32_1 = 0, $33_1 = 0, $111_1 = 0, $111$hi = 0, $34_1 = 0, $189_1 = 0, $16_1 = 0, $16$hi = 0, $58$hi = 0, $63_1 = 0, $63$hi = 0, $112_1 = 0, $112$hi = 0, $114$hi = 0, $115_1 = 0, $115$hi = 0, $116_1 = 0;
  block6 : {
   $4_1 = 8;
   block5 : {
    block : {
     if ($0_1 >>> 0 > -57 >>> 0) {
      break block
     }
     label3 : while (1) {
      $4_1 = $4_1 >>> 0 <= 8 >>> 0 ? 8 : $4_1;
      i64toi32_i32$2 = 7528;
      i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
      i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
      $7_1 = i64toi32_i32$0;
      $7$hi = i64toi32_i32$1;
      $16_1 = i64toi32_i32$0;
      $16$hi = i64toi32_i32$1;
      block1 : {
       $0_1 = $0_1 >>> 0 <= 8 >>> 0 ? 8 : ($0_1 + 3 | 0) & -4 | 0;
       if ($0_1 >>> 0 <= 127 >>> 0) {
        $28_1 = ($0_1 >>> 3 | 0) - 1 | 0;
        break block1;
       }
       $1_1 = Math_clz32($0_1);
       $28_1 = ((($0_1 >>> (29 - $1_1 | 0) | 0) ^ 4 | 0) - ($1_1 << 2 | 0) | 0) + 110 | 0;
       if ($0_1 >>> 0 <= 4095 >>> 0) {
        break block1
       }
       $1_1 = ((($0_1 >>> (30 - $1_1 | 0) | 0) ^ 2 | 0) - ($1_1 << 1 | 0) | 0) + 71 | 0;
       $28_1 = $1_1 >>> 0 >= 63 >>> 0 ? 63 : $1_1;
      }
      $3_1 = $28_1;
      i64toi32_i32$1 = 0;
      $58$hi = i64toi32_i32$1;
      i64toi32_i32$1 = $16$hi;
      i64toi32_i32$2 = $16_1;
      i64toi32_i32$0 = $58$hi;
      i64toi32_i32$3 = $3_1;
      i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
      if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
       i64toi32_i32$0 = 0;
       $31_1 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
      } else {
       i64toi32_i32$0 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
       $31_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
      }
      $8_1 = $31_1;
      $8$hi = i64toi32_i32$0;
      if (!!($8_1 | i64toi32_i32$0 | 0)) {
       label : while (1) {
        i64toi32_i32$0 = $8$hi;
        $63_1 = $8_1;
        $63$hi = i64toi32_i32$0;
        i64toi32_i32$0 = __wasm_ctz_i64($8_1 | 0, i64toi32_i32$0 | 0) | 0;
        i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
        $8_1 = i64toi32_i32$0;
        $8$hi = i64toi32_i32$2;
        i64toi32_i32$2 = $63$hi;
        i64toi32_i32$1 = $63_1;
        i64toi32_i32$0 = $8$hi;
        i64toi32_i32$3 = $8_1;
        i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
         i64toi32_i32$0 = 0;
         $32_1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
        } else {
         i64toi32_i32$0 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
         $32_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$4 | 0) | 0;
        }
        $7_1 = $32_1;
        $7$hi = i64toi32_i32$0;
        block2 : {
         i64toi32_i32$0 = $8$hi;
         $3_1 = $3_1 + $8_1 | 0;
         $2_1 = $3_1 << 4 | 0;
         $1_1 = HEAP32[($2_1 + 6504 | 0) >> 2] | 0;
         $6_1 = $2_1 + 6496 | 0;
         if (($1_1 | 0) != ($6_1 | 0)) {
          $5_1 = $69($1_1 | 0, $4_1 | 0, $0_1 | 0) | 0;
          if ($5_1) {
           break block
          }
          $5_1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
          HEAP32[($5_1 + 8 | 0) >> 2] = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
          HEAP32[((HEAP32[($1_1 + 8 | 0) >> 2] | 0) + 4 | 0) >> 2] = $5_1;
          HEAP32[($1_1 + 8 | 0) >> 2] = $6_1;
          $2_1 = $2_1 + 6500 | 0;
          HEAP32[($1_1 + 4 | 0) >> 2] = HEAP32[$2_1 >> 2] | 0;
          HEAP32[$2_1 >> 2] = $1_1;
          HEAP32[((HEAP32[($1_1 + 4 | 0) >> 2] | 0) + 8 | 0) >> 2] = $1_1;
          $3_1 = $3_1 + 1 | 0;
          i64toi32_i32$0 = $7$hi;
          i64toi32_i32$2 = $7_1;
          i64toi32_i32$1 = 0;
          i64toi32_i32$3 = 1;
          i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
          if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
           i64toi32_i32$1 = 0;
           $33_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
          } else {
           i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
           $33_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
          }
          $111_1 = $33_1;
          $111$hi = i64toi32_i32$1;
          break block2;
         }
         i64toi32_i32$0 = 7528;
         i64toi32_i32$1 = HEAP32[i64toi32_i32$0 >> 2] | 0;
         i64toi32_i32$2 = HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] | 0;
         $112_1 = i64toi32_i32$1;
         $112$hi = i64toi32_i32$2;
         i64toi32_i32$2 = 0;
         $114$hi = i64toi32_i32$2;
         i64toi32_i32$2 = -1;
         i64toi32_i32$1 = $114$hi;
         i64toi32_i32$1 = __wasm_rotl_i64(-2 | 0, i64toi32_i32$2 | 0, $3_1 | 0, i64toi32_i32$1 | 0) | 0;
         i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
         $115_1 = i64toi32_i32$1;
         $115$hi = i64toi32_i32$2;
         i64toi32_i32$2 = $112$hi;
         i64toi32_i32$0 = $112_1;
         i64toi32_i32$1 = $115$hi;
         i64toi32_i32$3 = $115_1;
         i64toi32_i32$1 = i64toi32_i32$2 & i64toi32_i32$1 | 0;
         $116_1 = i64toi32_i32$0 & i64toi32_i32$3 | 0;
         i64toi32_i32$0 = 7528;
         HEAP32[i64toi32_i32$0 >> 2] = $116_1;
         HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
         i64toi32_i32$1 = $7$hi;
         i64toi32_i32$2 = $7_1;
         i64toi32_i32$0 = 0;
         i64toi32_i32$3 = 1;
         i64toi32_i32$0 = i64toi32_i32$1 ^ i64toi32_i32$0 | 0;
         $111_1 = i64toi32_i32$2 ^ i64toi32_i32$3 | 0;
         $111$hi = i64toi32_i32$0;
        }
        i64toi32_i32$0 = $111$hi;
        $8_1 = $111_1;
        $8$hi = i64toi32_i32$0;
        i64toi32_i32$1 = $8_1;
        i64toi32_i32$2 = 0;
        i64toi32_i32$3 = 0;
        if ((i64toi32_i32$1 | 0) != (i64toi32_i32$3 | 0) | (i64toi32_i32$0 | 0) != (i64toi32_i32$2 | 0) | 0) {
         continue label
        }
        break label;
       };
       i64toi32_i32$3 = 7528;
       i64toi32_i32$1 = HEAP32[i64toi32_i32$3 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$3 + 4 | 0) >> 2] | 0;
       $7_1 = i64toi32_i32$1;
       $7$hi = i64toi32_i32$0;
      }
      block4 : {
       i64toi32_i32$0 = $7$hi;
       if (!!($7_1 | i64toi32_i32$0 | 0)) {
        i64toi32_i32$1 = $7_1;
        i64toi32_i32$2 = Math_clz32(i64toi32_i32$0);
        i64toi32_i32$3 = 0;
        if ((i64toi32_i32$2 | 0) == (32 | 0)) {
         $34_1 = Math_clz32(i64toi32_i32$1) + 32 | 0
        } else {
         $34_1 = i64toi32_i32$2
        }
        $6_1 = 63 - $34_1 | 0;
        $2_1 = $6_1 << 4 | 0;
        $1_1 = HEAP32[($2_1 + 6504 | 0) >> 2] | 0;
        block3 : {
         i64toi32_i32$3 = $7$hi;
         i64toi32_i32$1 = $7_1;
         i64toi32_i32$0 = 0;
         i64toi32_i32$2 = 1073741824;
         if (i64toi32_i32$3 >>> 0 < i64toi32_i32$0 >>> 0 | ((i64toi32_i32$3 | 0) == (i64toi32_i32$0 | 0) & i64toi32_i32$1 >>> 0 < i64toi32_i32$2 >>> 0 | 0) | 0) {
          break block3
         }
         $3_1 = 99;
         $2_1 = $2_1 + 6496 | 0;
         if (($1_1 | 0) == ($2_1 | 0)) {
          break block3
         }
         label1 : while (1) {
          if (!$3_1) {
           break block3
          }
          $5_1 = $69($1_1 | 0, $4_1 | 0, $0_1 | 0) | 0;
          if ($5_1) {
           break block
          }
          $3_1 = $3_1 - 1 | 0;
          $1_1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
          if (($1_1 | 0) != ($2_1 | 0)) {
           continue label1
          }
          break label1;
         };
         $1_1 = $2_1;
        }
        if ($70($0_1 + 48 | 0 | 0) | 0) {
         break block4
        }
        if (!$1_1) {
         break block5
        }
        $2_1 = ($6_1 << 4 | 0) + 6496 | 0;
        if (($1_1 | 0) == ($2_1 | 0)) {
         break block5
        }
        label2 : while (1) {
         $5_1 = $69($1_1 | 0, $4_1 | 0, $0_1 | 0) | 0;
         if ($5_1) {
          break block
         }
         $1_1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
         if (($1_1 | 0) != ($2_1 | 0)) {
          continue label2
         }
         break label2;
        };
        break block5;
       }
       if (!($70($0_1 + 48 | 0 | 0) | 0)) {
        break block5
       }
      }
      $5_1 = 0;
      if ($4_1 & ($4_1 - 1 | 0) | 0) {
       break block
      }
      if ($0_1 >>> 0 <= -57 >>> 0) {
       continue label3
      }
      break label3;
     };
    }
    $189_1 = $5_1;
    break block6;
   }
   $189_1 = 0;
  }
  return $189_1 | 0;
 }
 
 function $68($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = Math_fround($3_1);
  var $4_1 = 0, $5_1 = Math_fround(0);
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  $10($4_1 + 8 | 0 | 0, $0_1 | 0, HEAP32[(($1_1 << 2 | 0) + 4844 | 0) >> 2] | 0 | 0, $2_1 | 0);
  $5_1 = Math_fround(NaN);
  block2 : {
   block1 : {
    switch ((HEAPU8[($4_1 + 12 | 0) >> 0] | 0) - 1 | 0 | 0) {
    case 0:
     $5_1 = Math_fround(HEAPF32[($4_1 + 8 | 0) >> 2]);
     break block2;
    case 1:
     break block1;
    default:
     break block2;
    };
   }
   $5_1 = Math_fround(Math_fround(Math_fround(HEAPF32[($4_1 + 8 | 0) >> 2]) * $3_1) * Math_fround(.009999999776482582));
  }
  global$0 = $4_1 + 16 | 0;
  return Math_fround($5_1 == $5_1 ? $5_1 : Math_fround(0.0));
 }
 
 function $69($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $4_1 = 0, $3_1 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, $5_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$4 = 0, $95_1 = 0, $18_1 = 0, $163_1 = 0, $86_1 = 0, $138_1 = 0, $138$hi = 0, $140$hi = 0, $141$hi = 0, $142_1 = 0;
  $4_1 = $0_1 + 4 | 0;
  $5_1 = (($1_1 + $4_1 | 0) - 1 | 0) & (0 - $1_1 | 0) | 0;
  $1_1 = HEAP32[$0_1 >> 2] | 0;
  if (($5_1 + $2_1 | 0) >>> 0 <= (($0_1 + $1_1 | 0) - 4 | 0) >>> 0) {
   $3_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
   HEAP32[($3_1 + 8 | 0) >> 2] = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
   HEAP32[((HEAP32[($0_1 + 8 | 0) >> 2] | 0) + 4 | 0) >> 2] = $3_1;
   if (($4_1 | 0) != ($5_1 | 0)) {
    $3_1 = $0_1 - ((HEAP32[($0_1 - 4 | 0) >> 2] | 0) & -2 | 0) | 0;
    $4_1 = $5_1 - $4_1 | 0;
    $5_1 = $4_1 + (HEAP32[$3_1 >> 2] | 0) | 0;
    HEAP32[$3_1 >> 2] = $5_1;
    HEAP32[((($5_1 & -4 | 0) + $3_1 | 0) - 4 | 0) >> 2] = $5_1;
    $0_1 = $0_1 + $4_1 | 0;
    $1_1 = $1_1 - $4_1 | 0;
    HEAP32[$0_1 >> 2] = $1_1;
   }
   block1 : {
    if ($1_1 >>> 0 >= ($2_1 + 24 | 0) >>> 0) {
     $3_1 = ($0_1 + $2_1 | 0) + 8 | 0;
     $1_1 = ($1_1 - $2_1 | 0) - 8 | 0;
     HEAP32[$3_1 >> 2] = $1_1;
     HEAP32[((($1_1 & -4 | 0) + $3_1 | 0) - 4 | 0) >> 2] = $1_1 | 1 | 0;
     $86_1 = $3_1;
     block : {
      $1_1 = (HEAP32[$3_1 >> 2] | 0) - 8 | 0;
      if ($1_1 >>> 0 <= 127 >>> 0) {
       $95_1 = ($1_1 >>> 3 | 0) - 1 | 0;
       break block;
      }
      $4_1 = Math_clz32($1_1);
      $95_1 = ((($1_1 >>> (29 - $4_1 | 0) | 0) ^ 4 | 0) - ($4_1 << 2 | 0) | 0) + 110 | 0;
      if ($1_1 >>> 0 <= 4095 >>> 0) {
       break block
      }
      $1_1 = ((($1_1 >>> (30 - $4_1 | 0) | 0) ^ 2 | 0) - ($4_1 << 1 | 0) | 0) + 71 | 0;
      $95_1 = $1_1 >>> 0 >= 63 >>> 0 ? 63 : $1_1;
     }
     $1_1 = $95_1;
     $4_1 = $1_1 << 4 | 0;
     HEAP32[($86_1 + 4 | 0) >> 2] = $4_1 + 6496 | 0;
     $4_1 = $4_1 + 6504 | 0;
     HEAP32[($3_1 + 8 | 0) >> 2] = HEAP32[$4_1 >> 2] | 0;
     HEAP32[$4_1 >> 2] = $3_1;
     HEAP32[((HEAP32[($3_1 + 8 | 0) >> 2] | 0) + 4 | 0) >> 2] = $3_1;
     i64toi32_i32$2 = 7528;
     i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
     i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
     $138_1 = i64toi32_i32$0;
     $138$hi = i64toi32_i32$1;
     i64toi32_i32$1 = 0;
     $140$hi = i64toi32_i32$1;
     i64toi32_i32$1 = 0;
     i64toi32_i32$2 = 1;
     i64toi32_i32$0 = $140$hi;
     i64toi32_i32$4 = $1_1 & 31 | 0;
     if (32 >>> 0 <= ($1_1 & 63 | 0) >>> 0) {
      i64toi32_i32$0 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
      $18_1 = 0;
     } else {
      i64toi32_i32$0 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
      $18_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
     }
     $141$hi = i64toi32_i32$0;
     i64toi32_i32$0 = $138$hi;
     i64toi32_i32$1 = $138_1;
     i64toi32_i32$2 = $141$hi;
     i64toi32_i32$2 = i64toi32_i32$0 | i64toi32_i32$2 | 0;
     $142_1 = i64toi32_i32$1 | $18_1 | 0;
     i64toi32_i32$1 = 7528;
     HEAP32[i64toi32_i32$1 >> 2] = $142_1;
     HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$2;
     $1_1 = $2_1 + 8 | 0;
     HEAP32[$0_1 >> 2] = $1_1;
     HEAP32[((($1_1 & -4 | 0) + $0_1 | 0) - 4 | 0) >> 2] = $1_1;
     break block1;
    }
    HEAP32[(($0_1 + $1_1 | 0) - 4 | 0) >> 2] = $1_1;
   }
   $163_1 = $0_1 + 4 | 0;
  } else {
   $163_1 = $3_1
  }
  return $163_1 | 0;
 }
 
 function $70($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $3_1 = 0, $2_1 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$4 = 0, $115_1 = 0, $69_1 = 0, $27_1 = 0, $42_1 = 0, $4_1 = 0, $20_1 = 0, $5_1 = 0, $106_1 = 0, $158_1 = 0, $158$hi = 0, $160$hi = 0, $161$hi = 0, $162_1 = 0;
  block1 : {
   $1_1 = HEAP32[6192 >> 2] | 0;
   $3_1 = ($0_1 + 7 | 0) & -8 | 0;
   $2_1 = $1_1 + $3_1 | 0;
   block : {
    if ($1_1 >>> 0 >= $2_1 >>> 0 ? $3_1 : 0) {
     break block
    }
    if ($2_1 >>> 0 > (__wasm_memory_size() << 16 | 0) >>> 0) {
     if (!(fimport$22($2_1 | 0) | 0)) {
      break block
     }
    }
    HEAP32[6192 >> 2] = $2_1;
    $27_1 = $1_1;
    break block1;
   }
   HEAP32[7676 >> 2] = 48;
   $27_1 = -1;
  }
  $2_1 = $27_1;
  if (($2_1 | 0) != (-1 | 0)) {
   $3_1 = $0_1 + $2_1 | 0;
   $1_1 = $3_1 - 16 | 0;
   HEAP32[($1_1 + 12 | 0) >> 2] = 16;
   HEAP32[$1_1 >> 2] = 16;
   block3 : {
    block2 : {
     $0_1 = HEAP32[7520 >> 2] | 0;
     if ($0_1) {
      $42_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0
     } else {
      $42_1 = 0
     }
     if (($42_1 | 0) == ($2_1 | 0)) {
      $4_1 = $2_1 - ((HEAP32[($2_1 - 4 | 0) >> 2] | 0) & -2 | 0) | 0;
      $5_1 = HEAP32[($4_1 - 4 | 0) >> 2] | 0;
      HEAP32[($0_1 + 8 | 0) >> 2] = $3_1;
      $0_1 = $4_1 - ($5_1 & -2 | 0) | 0;
      $69_1 = -16;
      if (!((HEAPU8[(($0_1 + (HEAP32[$0_1 >> 2] | 0) | 0) - 4 | 0) >> 0] | 0) & 1 | 0)) {
       break block2
      }
      $3_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
      HEAP32[($3_1 + 8 | 0) >> 2] = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
      HEAP32[((HEAP32[($0_1 + 8 | 0) >> 2] | 0) + 4 | 0) >> 2] = $3_1;
      $1_1 = $1_1 - $0_1 | 0;
      HEAP32[$0_1 >> 2] = $1_1;
      break block3;
     }
     HEAP32[($2_1 + 12 | 0) >> 2] = 16;
     HEAP32[$2_1 >> 2] = 16;
     HEAP32[($2_1 + 8 | 0) >> 2] = $3_1;
     HEAP32[($2_1 + 4 | 0) >> 2] = $0_1;
     HEAP32[7520 >> 2] = $2_1;
     $69_1 = 16;
    }
    $0_1 = $69_1 + $2_1 | 0;
    $1_1 = $1_1 - $0_1 | 0;
    HEAP32[$0_1 >> 2] = $1_1;
   }
   HEAP32[((($1_1 & -4 | 0) + $0_1 | 0) - 4 | 0) >> 2] = $1_1 | 1 | 0;
   $106_1 = $0_1;
   block4 : {
    $1_1 = (HEAP32[$0_1 >> 2] | 0) - 8 | 0;
    if ($1_1 >>> 0 <= 127 >>> 0) {
     $115_1 = ($1_1 >>> 3 | 0) - 1 | 0;
     break block4;
    }
    $3_1 = Math_clz32($1_1);
    $115_1 = ((($1_1 >>> (29 - $3_1 | 0) | 0) ^ 4 | 0) - ($3_1 << 2 | 0) | 0) + 110 | 0;
    if ($1_1 >>> 0 <= 4095 >>> 0) {
     break block4
    }
    $1_1 = ((($1_1 >>> (30 - $3_1 | 0) | 0) ^ 2 | 0) - ($3_1 << 1 | 0) | 0) + 71 | 0;
    $115_1 = $1_1 >>> 0 >= 63 >>> 0 ? 63 : $1_1;
   }
   $1_1 = $115_1;
   $3_1 = $1_1 << 4 | 0;
   HEAP32[($106_1 + 4 | 0) >> 2] = $3_1 + 6496 | 0;
   $3_1 = $3_1 + 6504 | 0;
   HEAP32[($0_1 + 8 | 0) >> 2] = HEAP32[$3_1 >> 2] | 0;
   HEAP32[$3_1 >> 2] = $0_1;
   HEAP32[((HEAP32[($0_1 + 8 | 0) >> 2] | 0) + 4 | 0) >> 2] = $0_1;
   i64toi32_i32$2 = 7528;
   i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
   i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
   $158_1 = i64toi32_i32$0;
   $158$hi = i64toi32_i32$1;
   i64toi32_i32$1 = 0;
   $160$hi = i64toi32_i32$1;
   i64toi32_i32$1 = 0;
   i64toi32_i32$2 = 1;
   i64toi32_i32$0 = $160$hi;
   i64toi32_i32$4 = $1_1 & 31 | 0;
   if (32 >>> 0 <= ($1_1 & 63 | 0) >>> 0) {
    i64toi32_i32$0 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
    $20_1 = 0;
   } else {
    i64toi32_i32$0 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
    $20_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   }
   $161$hi = i64toi32_i32$0;
   i64toi32_i32$0 = $158$hi;
   i64toi32_i32$1 = $158_1;
   i64toi32_i32$2 = $161$hi;
   i64toi32_i32$2 = i64toi32_i32$0 | i64toi32_i32$2 | 0;
   $162_1 = i64toi32_i32$1 | $20_1 | 0;
   i64toi32_i32$1 = 7528;
   HEAP32[i64toi32_i32$1 >> 2] = $162_1;
   HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$2;
  }
  return ($2_1 | 0) != (-1 | 0) | 0;
 }
 
 function $71($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $6_1 = Math_fround(0), $7_1 = Math_fround(0), $4_1 = 0, $5_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  $4_1 = 1;
  $5_1 = $0_1 + 124 | 0;
  $1_1 = ($0_1 + ($1_1 << 1 | 0) | 0) + 32 | 0;
  $1($3_1 + 8 | 0 | 0, $5_1 | 0, HEAPU16[$1_1 >> 1] | 0 | 0);
  block1 : {
   block : {
    $7_1 = Math_fround(HEAPF32[($3_1 + 8 | 0) >> 2]);
    $6_1 = Math_fround(HEAPF32[$2_1 >> 2]);
    if ($7_1 != $6_1) {
     if ($7_1 == $7_1) {
      $2_1 = HEAPU8[($2_1 + 4 | 0) >> 0] | 0;
      break block;
     }
     $4_1 = $6_1 != $6_1;
    }
    $2_1 = HEAPU8[($2_1 + 4 | 0) >> 0] | 0;
    if (!$4_1) {
     break block
    }
    if ((HEAPU8[($3_1 + 12 | 0) >> 0] | 0 | 0) == ($2_1 & 255 | 0 | 0)) {
     break block1
    }
   }
   $27($5_1 | 0, $1_1 | 0, Math_fround($6_1), $2_1 | 0);
   label : while (1) {
    $1_1 = HEAPU8[$0_1 >> 0] | 0;
    if ($1_1 & 4 | 0) {
     break block1
    }
    HEAP8[$0_1 >> 0] = $1_1 | 4 | 0;
    $1_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
    if ($1_1) {
     FUNCTION_TABLE[$1_1 | 0]($0_1)
    }
    HEAP32[($0_1 + 156 | 0) >> 2] = 2143289344;
    $0_1 = HEAP32[($0_1 + 484 | 0) >> 2] | 0;
    if ($0_1) {
     continue label
    }
    break label;
   };
  }
  global$0 = $3_1 + 16 | 0;
 }
 
 function $72($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  block : {
   if ((HEAPU8[7596 >> 0] | 0) & 1 | 0) {
    $2_1 = HEAP32[7592 >> 2] | 0;
    break block;
   }
   $2_1 = fimport$12(1 | 0, 4992 | 0) | 0;
   HEAP8[7596 >> 0] = 1;
   HEAP32[7592 >> 2] = $2_1;
  }
  fimport$19($2_1 | 0, $0_1 | 0, $1_1 | 0, 0 | 0);
 }
 
 function $73($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $6_1 = Math_fround(0), $7_1 = Math_fround(0), $4_1 = 0, $5_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  $4_1 = 1;
  $5_1 = $0_1 + 124 | 0;
  $1_1 = ($0_1 + ($1_1 << 1 | 0) | 0) + 50 | 0;
  $1($3_1 + 8 | 0 | 0, $5_1 | 0, HEAPU16[$1_1 >> 1] | 0 | 0);
  block1 : {
   block : {
    $7_1 = Math_fround(HEAPF32[($3_1 + 8 | 0) >> 2]);
    $6_1 = Math_fround(HEAPF32[$2_1 >> 2]);
    if ($7_1 != $6_1) {
     if ($7_1 == $7_1) {
      $2_1 = HEAPU8[($2_1 + 4 | 0) >> 0] | 0;
      break block;
     }
     $4_1 = $6_1 != $6_1;
    }
    $2_1 = HEAPU8[($2_1 + 4 | 0) >> 0] | 0;
    if (!$4_1) {
     break block
    }
    if ((HEAPU8[($3_1 + 12 | 0) >> 0] | 0 | 0) == ($2_1 & 255 | 0 | 0)) {
     break block1
    }
   }
   $27($5_1 | 0, $1_1 | 0, Math_fround($6_1), $2_1 | 0);
   label : while (1) {
    $1_1 = HEAPU8[$0_1 >> 0] | 0;
    if ($1_1 & 4 | 0) {
     break block1
    }
    HEAP8[$0_1 >> 0] = $1_1 | 4 | 0;
    $1_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
    if ($1_1) {
     FUNCTION_TABLE[$1_1 | 0]($0_1)
    }
    HEAP32[($0_1 + 156 | 0) >> 2] = 2143289344;
    $0_1 = HEAP32[($0_1 + 484 | 0) >> 2] | 0;
    if ($0_1) {
     continue label
    }
    break label;
   };
  }
  global$0 = $3_1 + 16 | 0;
 }
 
 function $74($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = +$2_1;
  HEAPF64[($1_1 + (HEAP32[$0_1 >> 2] | 0) | 0) >> 3] = $2_1;
 }
 
 function $75($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return +(+HEAPF64[($1_1 + (HEAP32[$0_1 >> 2] | 0) | 0) >> 3]);
 }
 
 function $76($0_1) {
  $0_1 = $0_1 | 0;
  if ($0_1) {
   $5($0_1 | 0)
  }
 }
 
 function $77($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $6_1 = Math_fround(0), $7_1 = Math_fround(0), $4_1 = 0, $5_1 = 0, $3_1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  $4_1 = $0_1 + 124 | 0;
  $5_1 = $0_1 + 30 | 0;
  $1($2_1 + 8 | 0 | 0, $4_1 | 0, HEAPU16[$5_1 >> 1] | 0 | 0);
  $3_1 = 1;
  block1 : {
   block : {
    $7_1 = Math_fround(HEAPF32[($2_1 + 8 | 0) >> 2]);
    $6_1 = Math_fround(HEAPF32[$1_1 >> 2]);
    if ($7_1 != $6_1) {
     if ($7_1 == $7_1) {
      $1_1 = HEAPU8[($1_1 + 4 | 0) >> 0] | 0;
      break block;
     }
     $3_1 = $6_1 != $6_1;
    }
    $1_1 = HEAPU8[($1_1 + 4 | 0) >> 0] | 0;
    if (!$3_1) {
     break block
    }
    if ((HEAPU8[($2_1 + 12 | 0) >> 0] | 0 | 0) == ($1_1 & 255 | 0 | 0)) {
     break block1
    }
   }
   $27($4_1 | 0, $5_1 | 0, Math_fround($6_1), $1_1 | 0);
   label : while (1) {
    $1_1 = HEAPU8[$0_1 >> 0] | 0;
    if ($1_1 & 4 | 0) {
     break block1
    }
    HEAP8[$0_1 >> 0] = $1_1 | 4 | 0;
    $1_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
    if ($1_1) {
     FUNCTION_TABLE[$1_1 | 0]($0_1)
    }
    HEAP32[($0_1 + 156 | 0) >> 2] = 2143289344;
    $0_1 = HEAP32[($0_1 + 484 | 0) >> 2] | 0;
    if ($0_1) {
     continue label
    }
    break label;
   };
  }
  global$0 = $2_1 + 16 | 0;
 }
 
 function $78($0_1) {
  $0_1 = +$0_1;
  var i64toi32_i32$3 = 0, i64toi32_i32$2 = 0, i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$5 = 0, $1_1 = 0, $4_1 = 0, $1$hi = 0, $2_1 = 0, $2$hi = 0, i64toi32_i32$6 = 0, $3_1 = 0, $3$hi = 0, $30_1 = 0, $31_1 = 0, $32_1 = 0, $33_1 = 0, $34_1 = 0, $35_1 = 0, $36_1 = 0, $37_1 = 0, $38_1 = 0, $39_1 = 0, $40_1 = 0, $46_1 = 0, $46$hi = 0, $41_1 = 0, $42_1 = 0, $43_1 = 0, $44_1 = 0, $45_1 = 0, $47_1 = 0, $48_1 = 0, $49_1 = 0, $50_1 = 0, $51_1 = 0, $44$hi = 0, $5_1 = 0, $87_1 = 0, $87$hi = 0, $89_1 = 0, $89$hi = 0, $92$hi = 0, $93_1 = 0, $93$hi = 0, $97$hi = 0, $98$hi = 0, $101_1 = 0, $101$hi = 0;
  wasm2js_scratch_store_f64(+$0_1);
  i64toi32_i32$0 = wasm2js_scratch_load_i32(1 | 0) | 0;
  $2_1 = wasm2js_scratch_load_i32(0 | 0) | 0;
  $2$hi = i64toi32_i32$0;
  i64toi32_i32$2 = $2_1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 52;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = 0;
   $30_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $30_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
  }
  $4_1 = $30_1 & 2047 | 0;
  if (($4_1 | 0) == (2047 | 0)) {
   $0_1 = $0_1 * 1.0;
   return +($0_1 / $0_1);
  }
  i64toi32_i32$1 = $2$hi;
  i64toi32_i32$0 = $2_1;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 1;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
   $31_1 = 0;
  } else {
   i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$0 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
   $31_1 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
  }
  $1_1 = $31_1;
  $1$hi = i64toi32_i32$2;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 2145386496;
  i64toi32_i32$3 = 0;
  if (i64toi32_i32$2 >>> 0 < i64toi32_i32$0 >>> 0 | ((i64toi32_i32$2 | 0) == (i64toi32_i32$0 | 0) & i64toi32_i32$1 >>> 0 <= i64toi32_i32$3 >>> 0 | 0) | 0) {
   i64toi32_i32$1 = i64toi32_i32$2;
   i64toi32_i32$1 = i64toi32_i32$2;
   i64toi32_i32$3 = $1_1;
   i64toi32_i32$2 = 2145386496;
   i64toi32_i32$0 = 0;
   return +((i64toi32_i32$3 | 0) == (i64toi32_i32$0 | 0) & (i64toi32_i32$1 | 0) == (i64toi32_i32$2 | 0) | 0 ? $0_1 * 0.0 : $0_1);
  }
  block : {
   if (!$4_1) {
    $4_1 = 0;
    i64toi32_i32$3 = $2$hi;
    i64toi32_i32$0 = $2_1;
    i64toi32_i32$1 = 0;
    i64toi32_i32$2 = 12;
    i64toi32_i32$4 = i64toi32_i32$2 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$2 & 63 | 0) >>> 0) {
     i64toi32_i32$1 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
     $32_1 = 0;
    } else {
     i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$0 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$4 | 0) | 0;
     $32_1 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
    }
    $1_1 = $32_1;
    $1$hi = i64toi32_i32$1;
    i64toi32_i32$3 = $1_1;
    i64toi32_i32$0 = 0;
    i64toi32_i32$2 = 0;
    if ((i64toi32_i32$1 | 0) > (i64toi32_i32$0 | 0)) {
     $33_1 = 1
    } else {
     if ((i64toi32_i32$1 | 0) >= (i64toi32_i32$0 | 0)) {
      if (i64toi32_i32$3 >>> 0 < i64toi32_i32$2 >>> 0) {
       $34_1 = 0
      } else {
       $34_1 = 1
      }
      $35_1 = $34_1;
     } else {
      $35_1 = 0
     }
     $33_1 = $35_1;
    }
    if ($33_1) {
     label : while (1) {
      $4_1 = $4_1 - 1 | 0;
      i64toi32_i32$3 = $1$hi;
      i64toi32_i32$2 = $1_1;
      i64toi32_i32$1 = 0;
      i64toi32_i32$0 = 1;
      i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
      if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
       i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
       $36_1 = 0;
      } else {
       i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$4 | 0) | 0;
       $36_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
      }
      $1_1 = $36_1;
      $1$hi = i64toi32_i32$1;
      i64toi32_i32$3 = $1_1;
      i64toi32_i32$2 = 0;
      i64toi32_i32$0 = 0;
      if ((i64toi32_i32$1 | 0) > (i64toi32_i32$2 | 0)) {
       $37_1 = 1
      } else {
       if ((i64toi32_i32$1 | 0) >= (i64toi32_i32$2 | 0)) {
        if (i64toi32_i32$3 >>> 0 < i64toi32_i32$0 >>> 0) {
         $38_1 = 0
        } else {
         $38_1 = 1
        }
        $39_1 = $38_1;
       } else {
        $39_1 = 0
       }
       $37_1 = $39_1;
      }
      if ($37_1) {
       continue label
      }
      break label;
     }
    }
    i64toi32_i32$3 = $2$hi;
    i64toi32_i32$3 = 0;
    $44$hi = i64toi32_i32$3;
    i64toi32_i32$3 = $2$hi;
    i64toi32_i32$0 = $2_1;
    i64toi32_i32$1 = $44$hi;
    i64toi32_i32$2 = 1 - $4_1 | 0;
    i64toi32_i32$4 = i64toi32_i32$2 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$2 & 63 | 0) >>> 0) {
     i64toi32_i32$1 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
     $40_1 = 0;
    } else {
     i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$0 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$4 | 0) | 0;
     $40_1 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
    }
    $46_1 = $40_1;
    $46$hi = i64toi32_i32$1;
    break block;
   }
   i64toi32_i32$1 = $2$hi;
   i64toi32_i32$3 = $2_1;
   i64toi32_i32$0 = 1048575;
   i64toi32_i32$2 = -1;
   i64toi32_i32$0 = i64toi32_i32$1 & i64toi32_i32$0 | 0;
   i64toi32_i32$1 = i64toi32_i32$3 & i64toi32_i32$2 | 0;
   i64toi32_i32$3 = 1048576;
   i64toi32_i32$2 = 0;
   i64toi32_i32$3 = i64toi32_i32$0 | i64toi32_i32$3 | 0;
   $46_1 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
   $46$hi = i64toi32_i32$3;
  }
  i64toi32_i32$3 = $46$hi;
  $1_1 = $46_1;
  $1$hi = i64toi32_i32$3;
  if (($4_1 | 0) > (1023 | 0)) {
   label1 : while (1) {
    block1 : {
     i64toi32_i32$3 = $1$hi;
     i64toi32_i32$0 = $1_1;
     i64toi32_i32$1 = 1048576;
     i64toi32_i32$2 = 0;
     i64toi32_i32$4 = i64toi32_i32$0 - i64toi32_i32$2 | 0;
     i64toi32_i32$6 = i64toi32_i32$0 >>> 0 < i64toi32_i32$2 >>> 0;
     i64toi32_i32$5 = i64toi32_i32$6 + i64toi32_i32$1 | 0;
     i64toi32_i32$5 = i64toi32_i32$3 - i64toi32_i32$5 | 0;
     $3_1 = i64toi32_i32$4;
     $3$hi = i64toi32_i32$5;
     i64toi32_i32$3 = i64toi32_i32$4;
     i64toi32_i32$0 = 0;
     i64toi32_i32$2 = 0;
     if ((i64toi32_i32$5 | 0) < (i64toi32_i32$0 | 0)) {
      $41_1 = 1
     } else {
      if ((i64toi32_i32$5 | 0) <= (i64toi32_i32$0 | 0)) {
       if (i64toi32_i32$3 >>> 0 >= i64toi32_i32$2 >>> 0) {
        $42_1 = 0
       } else {
        $42_1 = 1
       }
       $43_1 = $42_1;
      } else {
       $43_1 = 0
      }
      $41_1 = $43_1;
     }
     if ($41_1) {
      break block1
     }
     i64toi32_i32$3 = $3$hi;
     $1_1 = $3_1;
     $1$hi = i64toi32_i32$3;
     i64toi32_i32$2 = $1_1;
     i64toi32_i32$5 = 0;
     i64toi32_i32$0 = 0;
     if ((i64toi32_i32$2 | 0) != (i64toi32_i32$0 | 0) | (i64toi32_i32$3 | 0) != (i64toi32_i32$5 | 0) | 0) {
      break block1
     }
     return +($0_1 * 0.0);
    }
    i64toi32_i32$2 = $1$hi;
    i64toi32_i32$0 = $1_1;
    i64toi32_i32$3 = 0;
    i64toi32_i32$5 = 1;
    i64toi32_i32$1 = i64toi32_i32$5 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$5 & 63 | 0) >>> 0) {
     i64toi32_i32$3 = i64toi32_i32$0 << i64toi32_i32$1 | 0;
     $44_1 = 0;
    } else {
     i64toi32_i32$3 = ((1 << i64toi32_i32$1 | 0) - 1 | 0) & (i64toi32_i32$0 >>> (32 - i64toi32_i32$1 | 0) | 0) | 0 | (i64toi32_i32$2 << i64toi32_i32$1 | 0) | 0;
     $44_1 = i64toi32_i32$0 << i64toi32_i32$1 | 0;
    }
    $1_1 = $44_1;
    $1$hi = i64toi32_i32$3;
    $4_1 = $4_1 - 1 | 0;
    if (($4_1 | 0) > (1023 | 0)) {
     continue label1
    }
    break label1;
   };
   $4_1 = 1023;
  }
  block2 : {
   i64toi32_i32$3 = $1$hi;
   i64toi32_i32$2 = $1_1;
   i64toi32_i32$0 = 1048576;
   i64toi32_i32$5 = 0;
   i64toi32_i32$1 = i64toi32_i32$2 - i64toi32_i32$5 | 0;
   i64toi32_i32$6 = i64toi32_i32$2 >>> 0 < i64toi32_i32$5 >>> 0;
   i64toi32_i32$4 = i64toi32_i32$6 + i64toi32_i32$0 | 0;
   i64toi32_i32$4 = i64toi32_i32$3 - i64toi32_i32$4 | 0;
   $3_1 = i64toi32_i32$1;
   $3$hi = i64toi32_i32$4;
   i64toi32_i32$3 = i64toi32_i32$1;
   i64toi32_i32$2 = 0;
   i64toi32_i32$5 = 0;
   if ((i64toi32_i32$4 | 0) < (i64toi32_i32$2 | 0)) {
    $45_1 = 1
   } else {
    if ((i64toi32_i32$4 | 0) <= (i64toi32_i32$2 | 0)) {
     if (i64toi32_i32$3 >>> 0 >= i64toi32_i32$5 >>> 0) {
      $47_1 = 0
     } else {
      $47_1 = 1
     }
     $48_1 = $47_1;
    } else {
     $48_1 = 0
    }
    $45_1 = $48_1;
   }
   if ($45_1) {
    break block2
   }
   i64toi32_i32$3 = $3$hi;
   $1_1 = $3_1;
   $1$hi = i64toi32_i32$3;
   i64toi32_i32$5 = $1_1;
   i64toi32_i32$4 = 0;
   i64toi32_i32$2 = 0;
   if ((i64toi32_i32$5 | 0) != (i64toi32_i32$2 | 0) | (i64toi32_i32$3 | 0) != (i64toi32_i32$4 | 0) | 0) {
    break block2
   }
   return +($0_1 * 0.0);
  }
  i64toi32_i32$5 = $1$hi;
  i64toi32_i32$2 = $1_1;
  i64toi32_i32$3 = 1048575;
  i64toi32_i32$4 = -1;
  if (i64toi32_i32$5 >>> 0 < i64toi32_i32$3 >>> 0 | ((i64toi32_i32$5 | 0) == (i64toi32_i32$3 | 0) & i64toi32_i32$2 >>> 0 <= i64toi32_i32$4 >>> 0 | 0) | 0) {
   label2 : while (1) {
    $4_1 = $4_1 - 1 | 0;
    i64toi32_i32$2 = $1$hi;
    i64toi32_i32$4 = $1_1;
    i64toi32_i32$5 = 524288;
    i64toi32_i32$3 = 0;
    $5_1 = i64toi32_i32$2 >>> 0 < i64toi32_i32$5 >>> 0 | ((i64toi32_i32$2 | 0) == (i64toi32_i32$5 | 0) & i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0 | 0) | 0;
    i64toi32_i32$4 = i64toi32_i32$2;
    i64toi32_i32$3 = $1_1;
    i64toi32_i32$2 = 0;
    i64toi32_i32$5 = 1;
    i64toi32_i32$0 = i64toi32_i32$5 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$5 & 63 | 0) >>> 0) {
     i64toi32_i32$2 = i64toi32_i32$3 << i64toi32_i32$0 | 0;
     $49_1 = 0;
    } else {
     i64toi32_i32$2 = ((1 << i64toi32_i32$0 | 0) - 1 | 0) & (i64toi32_i32$3 >>> (32 - i64toi32_i32$0 | 0) | 0) | 0 | (i64toi32_i32$4 << i64toi32_i32$0 | 0) | 0;
     $49_1 = i64toi32_i32$3 << i64toi32_i32$0 | 0;
    }
    $1_1 = $49_1;
    $1$hi = i64toi32_i32$2;
    if ($5_1) {
     continue label2
    }
    break label2;
   }
  }
  i64toi32_i32$2 = $2$hi;
  i64toi32_i32$4 = $2_1;
  i64toi32_i32$3 = -2147483648;
  i64toi32_i32$5 = 0;
  i64toi32_i32$3 = i64toi32_i32$2 & i64toi32_i32$3 | 0;
  $87_1 = i64toi32_i32$4 & i64toi32_i32$5 | 0;
  $87$hi = i64toi32_i32$3;
  i64toi32_i32$3 = $1$hi;
  i64toi32_i32$2 = $1_1;
  i64toi32_i32$4 = 1048576;
  i64toi32_i32$5 = 0;
  i64toi32_i32$0 = i64toi32_i32$2 - i64toi32_i32$5 | 0;
  i64toi32_i32$6 = i64toi32_i32$2 >>> 0 < i64toi32_i32$5 >>> 0;
  i64toi32_i32$1 = i64toi32_i32$6 + i64toi32_i32$4 | 0;
  i64toi32_i32$1 = i64toi32_i32$3 - i64toi32_i32$1 | 0;
  $89_1 = i64toi32_i32$0;
  $89$hi = i64toi32_i32$1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = $4_1;
  i64toi32_i32$2 = 0;
  i64toi32_i32$5 = 52;
  i64toi32_i32$4 = i64toi32_i32$5 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$5 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = i64toi32_i32$3 << i64toi32_i32$4 | 0;
   $50_1 = 0;
  } else {
   i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$3 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
   $50_1 = i64toi32_i32$3 << i64toi32_i32$4 | 0;
  }
  $92$hi = i64toi32_i32$2;
  i64toi32_i32$2 = $89$hi;
  i64toi32_i32$1 = $89_1;
  i64toi32_i32$3 = $92$hi;
  i64toi32_i32$5 = $50_1;
  i64toi32_i32$3 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
  $93_1 = i64toi32_i32$1 | i64toi32_i32$5 | 0;
  $93$hi = i64toi32_i32$3;
  i64toi32_i32$3 = $1$hi;
  i64toi32_i32$3 = 0;
  $97$hi = i64toi32_i32$3;
  i64toi32_i32$3 = $1$hi;
  i64toi32_i32$2 = $1_1;
  i64toi32_i32$1 = $97$hi;
  i64toi32_i32$5 = 1 - $4_1 | 0;
  i64toi32_i32$4 = i64toi32_i32$5 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$5 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = 0;
   $51_1 = i64toi32_i32$3 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$1 = i64toi32_i32$3 >>> i64toi32_i32$4 | 0;
   $51_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$3 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
  }
  $98$hi = i64toi32_i32$1;
  i64toi32_i32$4 = ($4_1 | 0) > (0 | 0);
  i64toi32_i32$1 = $93$hi;
  i64toi32_i32$2 = $98$hi;
  i64toi32_i32$5 = i64toi32_i32$4 ? $93_1 : $51_1;
  i64toi32_i32$3 = i64toi32_i32$4 ? i64toi32_i32$1 : i64toi32_i32$2;
  $101_1 = i64toi32_i32$5;
  $101$hi = i64toi32_i32$3;
  i64toi32_i32$3 = $87$hi;
  i64toi32_i32$4 = $87_1;
  i64toi32_i32$5 = $101$hi;
  i64toi32_i32$2 = $101_1;
  i64toi32_i32$5 = i64toi32_i32$3 | i64toi32_i32$5 | 0;
  wasm2js_scratch_store_i32(0 | 0, i64toi32_i32$4 | i64toi32_i32$2 | 0 | 0);
  wasm2js_scratch_store_i32(1 | 0, i64toi32_i32$5 | 0);
  return +(+wasm2js_scratch_load_f64());
 }
 
 function $79() {
  var $0_1 = 0, $1_1 = 0, $2_1 = 0;
  label : while (1) {
   $1_1 = $0_1 << 4 | 0;
   $2_1 = $1_1 + 6496 | 0;
   HEAP32[($1_1 + 6500 | 0) >> 2] = $2_1;
   HEAP32[($1_1 + 6504 | 0) >> 2] = $2_1;
   $0_1 = $0_1 + 1 | 0;
   if (($0_1 | 0) != (64 | 0)) {
    continue label
   }
   break label;
  };
  $70(48 | 0) | 0;
  HEAP32[7576 >> 2] = 6;
  HEAP32[7580 >> 2] = 0;
  $126();
  HEAP32[7580 >> 2] = HEAP32[7624 >> 2] | 0;
  HEAP32[7624 >> 2] = 7576;
  HEAP32[7628 >> 2] = 195;
  HEAP32[7632 >> 2] = 0;
  $113();
  HEAP32[7632 >> 2] = HEAP32[7624 >> 2] | 0;
  HEAP32[7624 >> 2] = 7628;
 }
 
 function $80($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = Math_fround($3_1);
  var $4_1 = 0, $13_1 = Math_fround(0), $5_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  block : {
   $13_1 = Math_fround(0.0);
   if (!((HEAPU8[($0_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($0_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0) & 12288 | 0)) {
    break block
   }
   $0_1 = $0_1 + 20 | 0;
   $5_1 = ($1_1 & 254 | 0 | 0) != (2 | 0) ? 1 : (($2_1 | 0) == (2 | 0)) << 1 | 0;
   $24($4_1 + 8 | 0 | 0, $0_1 | 0, $5_1 | 0, $2_1 | 0);
   block1 : {
    if (!(HEAPU8[($4_1 + 12 | 0) >> 0] | 0)) {
     break block1
    }
    $24($4_1 + 8 | 0 | 0, $0_1 | 0, $5_1 | 0, $2_1 | 0);
    if ((HEAPU8[($4_1 + 12 | 0) >> 0] | 0 | 0) == (3 | 0)) {
     break block1
    }
    $13_1 = Math_fround($99($0_1 | 0, $1_1 | 0, $2_1 | 0, Math_fround($3_1)));
    break block;
   }
   $13_1 = Math_fround(-Math_fround($98($0_1 | 0, $1_1 | 0, $2_1 | 0, Math_fround($3_1))));
  }
  $3_1 = $13_1;
  global$0 = $4_1 + 16 | 0;
  return Math_fround($3_1);
 }
 
 function $81($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0;
  block1 : {
   block : {
    $2_1 = HEAP32[($0_1 + 488 | 0) >> 2] | 0;
    $3_1 = HEAP32[($0_1 + 492 | 0) >> 2] | 0;
    if (($2_1 | 0) == ($3_1 | 0)) {
     break block
    }
    label : while (1) {
     if ((HEAP32[$2_1 >> 2] | 0 | 0) == ($1_1 | 0)) {
      break block
     }
     $2_1 = $2_1 + 4 | 0;
     if (($2_1 | 0) != ($3_1 | 0)) {
      continue label
     }
     break label;
    };
    break block1;
   }
   if (($2_1 | 0) == ($3_1 | 0)) {
    break block1
   }
   if ((((HEAPU8[($1_1 + 23 | 0) >> 0] | 0) << 16 | 0) & 786432 | 0 | 0) == (524288 | 0)) {
    HEAP32[($0_1 + 480 | 0) >> 2] = (HEAP32[($0_1 + 480 | 0) >> 2] | 0) - 1 | 0
   }
   $1_1 = $2_1 + 4 | 0;
   $21($2_1 | 0, $1_1 | 0, $3_1 - $1_1 | 0 | 0) | 0;
   HEAP32[($0_1 + 492 | 0) >> 2] = $3_1 - 4 | 0;
   return 1 | 0;
  }
  return 0 | 0;
 }
 
 function $82($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $43(6344 | 0, $0_1 | 0, $1_1 | 0) | 0 | 0;
 }
 
 function $83($0_1, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  if (!$0_1) {
   if (!($2_1 ? ($2_1 | 0) != (5 | 0) : 0)) {
    $43(6200 | 0, $3_1 | 0, $4_1 | 0) | 0;
    return;
   }
   $82($3_1 | 0, $4_1 | 0) | 0;
   return;
  }
  FUNCTION_TABLE[HEAP32[($0_1 + 4 | 0) >> 2] | 0 | 0]($0_1, $1_1, $2_1, $3_1, $4_1) | 0;
 }
 
 function $84($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = global$0 - 16 | 0;
  global$0 = $1_1;
  HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
  $43(6200 | 0, 4824 | 0, $0_1 | 0) | 0;
  global$0 = $1_1 + 16 | 0;
 }
 
 function $85($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = +$1_1;
  $2_1 = +$2_1;
  var $3_1 = 0, $6_1 = 0.0, $4_1 = 0, $7_1 = 0.0, $8_1 = 0.0, $93_1 = 0, $11_1 = Math_fround(0), $9_1 = 0.0, $5_1 = 0, $12_1 = Math_fround(0), $10_1 = 0.0, wasm2js_i32$0 = 0, wasm2js_f32$0 = Math_fround(0);
  $6_1 = +Math_fround(HEAPF32[($0_1 + 416 | 0) >> 2]);
  $2_1 = $6_1 + $2_1;
  $7_1 = +Math_fround(HEAPF32[($0_1 + 412 | 0) >> 2]);
  $8_1 = $7_1 + $1_1;
  $11_1 = Math_fround(HEAPF32[((HEAP32[($0_1 + 500 | 0) >> 2] | 0) + 24 | 0) >> 2]);
  if ($11_1 != Math_fround(0.0)) {
   $9_1 = +Math_fround(HEAPF32[($0_1 + 400 | 0) >> 2]);
   $12_1 = Math_fround(HEAPF32[($0_1 + 396 | 0) >> 2]);
   $1_1 = +$11_1;
   $3_1 = (HEAPU8[$0_1 >> 0] | 0) & 16 | 0;
   $4_1 = $3_1 >>> 4 | 0;
   (wasm2js_i32$0 = $0_1, wasm2js_f32$0 = Math_fround($22(+$7_1, +$1_1, 0 | 0, $4_1 | 0))), HEAPF32[(wasm2js_i32$0 + 412 | 0) >> 2] = wasm2js_f32$0;
   (wasm2js_i32$0 = $0_1, wasm2js_f32$0 = Math_fround($22(+$6_1, +$1_1, 0 | 0, $4_1 | 0))), HEAPF32[(wasm2js_i32$0 + 416 | 0) >> 2] = wasm2js_f32$0;
   $7_1 = +$12_1;
   $6_1 = +$78(+($1_1 * $7_1));
   $4_1 = $6_1 != $6_1;
   if (!(!$4_1 & Math_abs($6_1) < .0001 | 0)) {
    $5_1 = $4_1 | !(Math_abs($6_1 + -1.0) < .0001) | 0
   }
   $10_1 = $2_1 + $9_1;
   $7_1 = $8_1 + $7_1;
   block : {
    $6_1 = +$78(+($1_1 * $9_1));
    $4_1 = $6_1 != $6_1;
    if (!$4_1) {
     $93_1 = 0;
     if (Math_abs($6_1) < .0001) {
      break block
     }
    }
    $93_1 = $4_1 | !(Math_abs($6_1 + -1.0) < .0001) | 0;
   }
   $4_1 = $93_1;
   $3_1 = ($3_1 | 0) != (0 | 0);
   (wasm2js_i32$0 = $0_1, wasm2js_f32$0 = Math_fround(Math_fround($22(+$7_1, +$1_1, $3_1 & $5_1 | 0 | 0, $3_1 & ($5_1 ^ 1 | 0) | 0 | 0)) - Math_fround($22(+$8_1, +$1_1, 0 | 0, $3_1 | 0)))), HEAPF32[(wasm2js_i32$0 + 396 | 0) >> 2] = wasm2js_f32$0;
   (wasm2js_i32$0 = $0_1, wasm2js_f32$0 = Math_fround(Math_fround($22(+$10_1, +$1_1, $3_1 & $4_1 | 0 | 0, $3_1 & ($4_1 ^ 1 | 0) | 0 | 0)) - Math_fround($22(+$2_1, +$1_1, 0 | 0, $3_1 | 0)))), HEAPF32[(wasm2js_i32$0 + 400 | 0) >> 2] = wasm2js_f32$0;
  }
  $3_1 = HEAP32[($0_1 + 488 | 0) >> 2] | 0;
  $0_1 = HEAP32[($0_1 + 492 | 0) >> 2] | 0;
  if (($3_1 | 0) != ($0_1 | 0)) {
   label : while (1) {
    $85(HEAP32[$3_1 >> 2] | 0 | 0, +$8_1, +$2_1);
    $3_1 = $3_1 + 4 | 0;
    if (($3_1 | 0) != ($0_1 | 0)) {
     continue label
    }
    break label;
   }
  }
 }
 
 function $86($0_1, $1_1, $2_1, $3_1, $4_1, $5_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = Math_fround($3_1);
  $4_1 = Math_fround($4_1);
  $5_1 = Math_fround($5_1);
  var $6_1 = Math_fround(0), $42_1 = Math_fround(0);
  $0_1 = $0_1 + 20 | 0;
  $2_1 = $2_1 >>> 0 < 2 >>> 0;
  $6_1 = Math_fround($23($0_1 | 0, $1_1 | 0, $2_1 | 0, Math_fround($4_1), Math_fround($5_1)));
  $5_1 = Math_fround($15($0_1 | 0, $1_1 | 0, $2_1 | 0, Math_fround($4_1), Math_fround($5_1)));
  if ($5_1 >= Math_fround(0.0) & $3_1 > $5_1 | 0) {
   $42_1 = $5_1
  } else {
   if (!($6_1 >= Math_fround(0.0))) {
    return Math_fround($3_1)
   }
   $42_1 = $3_1 < $6_1 ? $6_1 : $3_1;
  }
  return Math_fround($42_1);
 }
 
 function $87($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  block : {
   $2_1 = HEAP32[$0_1 >> 2] | 0;
   if ($2_1) {
    label : while (1) {
     if (!$1_1) {
      break block
     }
     HEAP32[($2_1 + 4 | 0) >> 2] = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
     HEAP32[($2_1 + 8 | 0) >> 2] = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
     $1_1 = HEAP32[$1_1 >> 2] | 0;
     $0_1 = HEAP32[$0_1 >> 2] | 0;
     $2_1 = HEAP32[$2_1 >> 2] | 0;
     if ($2_1) {
      continue label
     }
     break label;
    }
   }
   $30($0_1 | 0, $1_1 | 0);
   return;
  }
  block1 : {
   if (!$0_1) {
    break block1
   }
   $1_1 = HEAP32[$0_1 >> 2] | 0;
   if (!$1_1) {
    break block1
   }
   HEAP32[$0_1 >> 2] = 0;
   label1 : while (1) {
    $0_1 = HEAP32[$1_1 >> 2] | 0;
    $5($1_1 | 0);
    $1_1 = $0_1;
    if ($1_1) {
     continue label1
    }
    break label1;
   };
  }
 }
 
 function $88($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = Math_fround($2_1);
  $3_1 = Math_fround($3_1);
  var $4_1 = 0, $5_1 = 0, $8_1 = 0, $7_1 = 0, $6_1 = 0, $27_1 = 0, $10_1 = Math_fround(0), $9_1 = 0, wasm2js_i32$0 = 0, wasm2js_f32$0 = Math_fround(0);
  $7_1 = $0_1 + 20 | 0;
  $4_1 = 3;
  $5_1 = ((HEAPU8[($0_1 + 20 | 0) >> 0] | 0) >>> 2 | 0) & 3 | 0;
  block : {
   block3 : {
    block2 : {
     $8_1 = HEAP32[($0_1 + 484 | 0) >> 2] | 0 ? $1_1 : 1;
     if (($8_1 | 0) == (2 | 0)) {
      block1 : {
       switch ($5_1 - 2 | 0 | 0) {
       case 0:
        break block;
       case 1:
        break block1;
       default:
        break block2;
       };
      }
      $4_1 = 2;
      break block;
     }
     $4_1 = 2;
     $27_1 = 0;
     if ($5_1 >>> 0 > 1 >>> 0) {
      break block3
     }
    }
    $27_1 = $4_1;
   }
   $6_1 = $27_1;
   $4_1 = $5_1;
  }
  $5_1 = $4_1 >>> 0 < 2 >>> 0;
  $10_1 = Math_fround($80($0_1 | 0, $4_1 | 0, $8_1 | 0, Math_fround($5_1 ? $3_1 : $2_1)));
  $3_1 = Math_fround($80($0_1 | 0, $6_1 | 0, $8_1 | 0, Math_fround($5_1 ? $2_1 : $3_1)));
  $0_1 = $0_1 + 412 | 0;
  $8_1 = (($1_1 | 0) == (2 | 0)) << 1 | 0;
  (wasm2js_i32$0 = $0_1 + (($5_1 ? 1 : $8_1) << 2 | 0) | 0, wasm2js_f32$0 = Math_fround($10_1 + Math_fround($4($7_1 | 0, $4_1 | 0, $1_1 | 0, Math_fround($2_1))))), HEAPF32[wasm2js_i32$0 >> 2] = wasm2js_f32$0;
  $9_1 = (($1_1 | 0) != (2 | 0)) << 1 | 0;
  (wasm2js_i32$0 = $0_1 + (($5_1 ? 3 : $9_1) << 2 | 0) | 0, wasm2js_f32$0 = Math_fround($10_1 + Math_fround($3($7_1 | 0, $4_1 | 0, $1_1 | 0, Math_fround($2_1))))), HEAPF32[wasm2js_i32$0 >> 2] = wasm2js_f32$0;
  $4_1 = $6_1 >>> 1 | 0;
  (wasm2js_i32$0 = $0_1 + (($4_1 ? $8_1 : 1) << 2 | 0) | 0, wasm2js_f32$0 = Math_fround($3_1 + Math_fround($4($7_1 | 0, $6_1 | 0, $1_1 | 0, Math_fround($2_1))))), HEAPF32[wasm2js_i32$0 >> 2] = wasm2js_f32$0;
  (wasm2js_i32$0 = $0_1 + (($4_1 ? $9_1 : 3) << 2 | 0) | 0, wasm2js_f32$0 = Math_fround($3_1 + Math_fround($3($7_1 | 0, $6_1 | 0, $1_1 | 0, Math_fround($2_1))))), HEAPF32[wasm2js_i32$0 >> 2] = wasm2js_f32$0;
 }
 
 function $89($0_1) {
  $0_1 = $0_1 | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $2_1 = 0, $1_1 = 0, $3_1 = 0;
  $1_1 = global$0 - 336 | 0;
  global$0 = $1_1;
  $12($1_1 + 8 | 0 | 0, 0 | 0, 324 | 0) | 0;
  HEAP8[($1_1 + 24 | 0) >> 0] = 0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[(i64toi32_i32$1 + 16 | 0) >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 20 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = 2143289344;
  $12(i64toi32_i32$1 + 28 | 0 | 0, 0 | 0, 196 | 0) | 0;
  $3_1 = i64toi32_i32$1 + 224 | 0;
  $2_1 = i64toi32_i32$1 + 32 | 0;
  label : while (1) {
   i64toi32_i32$1 = $2_1;
   i64toi32_i32$0 = -1082130432;
   HEAP32[(i64toi32_i32$1 + 16 | 0) >> 2] = -1082130432;
   HEAP32[(i64toi32_i32$1 + 20 | 0) >> 2] = i64toi32_i32$0;
   i64toi32_i32$0 = 1;
   HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = 1;
   HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
   i64toi32_i32$0 = -1082130432;
   HEAP32[i64toi32_i32$1 >> 2] = -1082130432;
   HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
   $2_1 = i64toi32_i32$1 + 24 | 0;
   if (($2_1 | 0) != ($3_1 | 0)) {
    continue label
   }
   break label;
  };
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = -1082130432;
  HEAP32[(i64toi32_i32$1 + 240 | 0) >> 2] = -1082130432;
  HEAP32[(i64toi32_i32$1 + 244 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 1;
  HEAP32[(i64toi32_i32$1 + 232 | 0) >> 2] = 1;
  HEAP32[(i64toi32_i32$1 + 236 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = -1082130432;
  HEAP32[(i64toi32_i32$1 + 224 | 0) >> 2] = -1082130432;
  HEAP32[(i64toi32_i32$1 + 228 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 2143289344;
  HEAP32[(i64toi32_i32$1 + 260 | 0) >> 2] = 2143289344;
  HEAP32[(i64toi32_i32$1 + 264 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 2143289344;
  HEAP32[(i64toi32_i32$1 + 252 | 0) >> 2] = 2143289344;
  HEAP32[(i64toi32_i32$1 + 256 | 0) >> 2] = i64toi32_i32$0;
  HEAP8[(i64toi32_i32$1 + 248 | 0) >> 0] = (HEAPU8[(i64toi32_i32$1 + 248 | 0) >> 0] | 0) & 248 | 0;
  $12(i64toi32_i32$1 + 268 | 0 | 0, 0 | 0, 64 | 0) | 0;
  $13($0_1 + 152 | 0 | 0, i64toi32_i32$1 + 8 | 0 | 0, 324 | 0) | 0;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$0 = 0;
  HEAP32[(i64toi32_i32$1 + 396 | 0) >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 400 | 0) >> 2] = i64toi32_i32$0;
  HEAP8[i64toi32_i32$1 >> 0] = HEAPU8[i64toi32_i32$1 >> 0] | 0 | 1 | 0;
  $49(i64toi32_i32$1 | 0);
  $2_1 = HEAP32[(i64toi32_i32$1 + 488 | 0) >> 2] | 0;
  $0_1 = HEAP32[(i64toi32_i32$1 + 492 | 0) >> 2] | 0;
  if (($2_1 | 0) != ($0_1 | 0)) {
   label1 : while (1) {
    $89(HEAP32[$2_1 >> 2] | 0 | 0);
    $2_1 = $2_1 + 4 | 0;
    if (($2_1 | 0) != ($0_1 | 0)) {
     continue label1
    }
    break label1;
   }
  }
  global$0 = $1_1 + 336 | 0;
 }
 
 function $90($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, $3_1 = 0, $4_1 = 0, $11_1 = Math_fround(0), $6_1 = 0, $12_1 = Math_fround(0), $13_1 = 0, $10_1 = 0, $7_1 = 0, $5_1 = 0, $8_1 = 0, $9_1 = 0;
  $1_1 = global$0 - 32 | 0;
  global$0 = $1_1;
  $13_1 = 256;
  HEAP8[($1_1 + 30 | 0) >> 0] = $13_1;
  HEAP8[($1_1 + 31 | 0) >> 0] = $13_1 >>> 8 | 0;
  $7_1 = $0_1 + 110 | 0;
  $5_1 = $0_1 + 504 | 0;
  $8_1 = $0_1 + 114 | 0;
  $9_1 = $0_1 + 118 | 0;
  $3_1 = $0_1 + 124 | 0;
  $0_1 = 0;
  label : while (1) {
   $2_1 = HEAPU8[(($1_1 + 30 | 0) + $4_1 | 0) >> 0] | 0;
   $4_1 = $2_1 << 1 | 0;
   $6_1 = $9_1 + $4_1 | 0;
   $1($1_1 + 16 | 0 | 0, $3_1 | 0, HEAPU16[$6_1 >> 1] | 0 | 0);
   block2 : {
    block : {
     if (!(HEAPU8[($1_1 + 20 | 0) >> 0] | 0)) {
      break block
     }
     $1($1_1 + 8 | 0 | 0, $3_1 | 0, HEAPU16[$6_1 >> 1] | 0 | 0);
     $1($1_1 | 0, $3_1 | 0, HEAPU16[($4_1 + $8_1 | 0) >> 1] | 0 | 0);
     if ((HEAPU8[($1_1 + 12 | 0) >> 0] | 0 | 0) != (HEAPU8[($1_1 + 4 | 0) >> 0] | 0 | 0)) {
      break block
     }
     block1 : {
      $12_1 = Math_fround(HEAPF32[($1_1 + 8 | 0) >> 2]);
      $10_1 = $12_1 != $12_1;
      $11_1 = Math_fround(HEAPF32[$1_1 >> 2]);
      if (!($10_1 | $11_1 != $11_1 | 0)) {
       if (Math_fround(Math_abs(Math_fround($12_1 - $11_1))) < Math_fround(9.999999747378752e-05)) {
        break block1
       }
       break block;
      }
      if (!$10_1 | $11_1 == $11_1 | 0) {
       break block
      }
     }
     $1($1_1 + 16 | 0 | 0, $3_1 | 0, HEAPU16[$6_1 >> 1] | 0 | 0);
     break block2;
    }
    $1($1_1 + 16 | 0 | 0, $3_1 | 0, HEAPU16[($4_1 + $7_1 | 0) >> 1] | 0 | 0);
   }
   $2_1 = $5_1 + ($2_1 << 3 | 0) | 0;
   HEAP8[($2_1 + 4 | 0) >> 0] = HEAPU8[($1_1 + 20 | 0) >> 0] | 0;
   HEAP32[$2_1 >> 2] = HEAP32[($1_1 + 16 | 0) >> 2] | 0;
   $4_1 = 1;
   $2_1 = $0_1;
   $0_1 = 1;
   if (!$2_1) {
    continue label
   }
   break label;
  };
  global$0 = $1_1 + 32 | 0;
 }
 
 function $91($0_1) {
  $0_1 = $0_1 | 0;
  var $5_1 = 0;
  block : {
   $5_1 = 0;
   if (((HEAPU8[($0_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($0_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0) & 12288 | 0 | 0) == (8192 | 0)) {
    break block
   }
   $5_1 = 1;
   if (Math_fround($29($0_1 | 0)) != Math_fround(0.0)) {
    break block
   }
   $5_1 = Math_fround($34($0_1 | 0)) != Math_fround(0.0);
  }
  return $5_1 | 0;
 }
 
 function $92($0_1, $1_1, $2_1, $3_1, $4_1, $5_1, $6_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = Math_fround($3_1);
  $4_1 = Math_fround($4_1);
  $5_1 = Math_fround($5_1);
  $6_1 = Math_fround($6_1);
  var $7_1 = Math_fround(0), $69_1 = Math_fround(0);
  $3_1 = Math_fround($3_1 - $4_1);
  if ($3_1 == $3_1) {
   $0_1 = $0_1 + 20 | 0;
   $7_1 = Math_fround($23($0_1 | 0, $1_1 | 0, $2_1 | 0, Math_fround($5_1), Math_fround($6_1)));
   $7_1 = $7_1 != $7_1 ? Math_fround(0.0) : Math_fround($7_1 - $4_1);
   $5_1 = Math_fround($15($0_1 | 0, $1_1 | 0, $2_1 | 0, Math_fround($5_1), Math_fround($6_1)));
   $4_1 = $5_1 != $5_1 ? Math_fround(3402823466385288598117041.0e14) : Math_fround($5_1 - $4_1);
   $3_1 = $3_1 > $4_1 ? $4_1 : $3_1;
   $69_1 = $3_1 == $3_1 & $7_1 == $7_1 | 0 ? ($3_1 < $7_1 ? $7_1 : $3_1) : $3_1 != $3_1 ? $7_1 : $3_1;
  } else {
   $69_1 = $3_1
  }
  return Math_fround($69_1);
 }
 
 function $93($0_1, $1_1, $2_1, $3_1, $4_1, $5_1, $6_1, $7_1, $8_1, $9_1, $10_1, $11_1, $12_1) {
  $0_1 = $0_1 | 0;
  $1_1 = Math_fround($1_1);
  $2_1 = $2_1 | 0;
  $3_1 = Math_fround($3_1);
  $4_1 = $4_1 | 0;
  $5_1 = Math_fround($5_1);
  $6_1 = $6_1 | 0;
  $7_1 = Math_fround($7_1);
  $8_1 = Math_fround($8_1);
  $9_1 = Math_fround($9_1);
  $10_1 = Math_fround($10_1);
  $11_1 = Math_fround($11_1);
  $12_1 = $12_1 | 0;
  var $13_1 = 0, $18_1 = Math_fround(0), $17_1 = Math_fround(0), $58_1 = 0, $14_1 = 0, $20_1 = Math_fround(0), $19_1 = Math_fround(0), $22_1 = 0.0, $282_1 = 0, $21_1 = Math_fround(0), $15_1 = 0, $16_1 = 0;
  if ($9_1 < Math_fround(0.0) | $8_1 < Math_fround(0.0) | 0) {
   $282_1 = $13_1
  } else {
   $18_1 = $5_1;
   $19_1 = $1_1;
   $20_1 = $3_1;
   $17_1 = $7_1;
   $21_1 = Math_fround(HEAPF32[($12_1 + 24 | 0) >> 2]);
   if ($21_1 != Math_fround(0.0)) {
    $22_1 = +$21_1;
    $19_1 = Math_fround($22(+(+$1_1), +$22_1, 0 | 0, 0 | 0));
    $20_1 = Math_fround($22(+(+$20_1), +$22_1, 0 | 0, 0 | 0));
    $18_1 = Math_fround($22(+(+$18_1), +$22_1, 0 | 0, 0 | 0));
    $17_1 = Math_fround($22(+(+$17_1), +$22_1, 0 | 0, 0 | 0));
   }
   block : {
    $58_1 = 0;
    if (($0_1 | 0) != ($4_1 | 0)) {
     break block
    }
    $13_1 = $19_1 != $19_1;
    $58_1 = Math_fround(Math_abs(Math_fround($18_1 - $19_1))) < Math_fround(9.999999747378752e-05);
    if (!($13_1 | $18_1 != $18_1 | 0)) {
     break block
    }
    $58_1 = 0;
    if ($18_1 == $18_1) {
     break block
    }
    $58_1 = $13_1;
   }
   $12_1 = $58_1;
   block1 : {
    if (($2_1 | 0) != ($6_1 | 0)) {
     break block1
    }
    $13_1 = $20_1 != $20_1;
    if (!($13_1 | $17_1 != $17_1 | 0)) {
     $15_1 = Math_fround(Math_abs(Math_fround($17_1 - $20_1))) < Math_fround(9.999999747378752e-05);
     break block1;
    }
    if ($17_1 == $17_1) {
     break block1
    }
    $15_1 = $13_1;
   }
   $14_1 = 1;
   $13_1 = 1;
   block2 : {
    if ($12_1) {
     break block2
    }
    $1_1 = Math_fround($1_1 - $10_1);
    block3 : {
     if (!$0_1) {
      $0_1 = $1_1 != $1_1;
      if (!($0_1 | $8_1 != $8_1 | 0)) {
       $12_1 = 0;
       if (!(Math_fround(Math_abs(Math_fround($1_1 - $8_1))) < Math_fround(9.999999747378752e-05))) {
        break block3
       }
       break block2;
      }
      $12_1 = 0;
      if ($8_1 == $8_1) {
       break block3
      }
      if ($0_1) {
       break block2
      }
      break block3;
     }
     $12_1 = ($0_1 | 0) == (2 | 0);
     if (($0_1 | 0) != (2 | 0)) {
      break block3
     }
     if (($4_1 | 0) != (1 | 0)) {
      break block3
     }
     if ($1_1 >= $8_1) {
      break block2
     }
     block4 : {
      $0_1 = $8_1 != $8_1;
      if (!($0_1 | $1_1 != $1_1 | 0)) {
       if (!(Math_fround(Math_abs(Math_fround($1_1 - $8_1))) < Math_fround(9.999999747378752e-05))) {
        break block4
       }
       break block2;
      }
      $13_1 = 0;
      if ($1_1 == $1_1) {
       break block2
      }
      $13_1 = 1;
      if ($0_1) {
       break block2
      }
     }
     $13_1 = 0;
     break block2;
    }
    $13_1 = 0;
    $0_1 = $8_1 != $8_1;
    if ($0_1 | !($1_1 < $5_1) | 0) {
     break block2
    }
    $16_1 = $1_1 != $1_1;
    if (!$12_1 | ($16_1 | $5_1 != $5_1 | 0 | ($4_1 | 0) != (2 | 0) | 0) | 0) {
     break block2
    }
    $13_1 = 1;
    if ($1_1 >= $8_1) {
     break block2
    }
    $13_1 = 0;
    if ($0_1 | $16_1 | 0) {
     break block2
    }
    $13_1 = Math_fround(Math_abs(Math_fround($1_1 - $8_1))) < Math_fround(9.999999747378752e-05);
   }
   block5 : {
    if ($15_1) {
     break block5
    }
    $1_1 = Math_fround($3_1 - $11_1);
    block7 : {
     block6 : {
      if (!$2_1) {
       $2_1 = $1_1 != $1_1;
       if (!($2_1 | $9_1 != $9_1 | 0)) {
        $0_1 = 0;
        if (!(Math_fround(Math_abs(Math_fround($1_1 - $9_1))) < Math_fround(9.999999747378752e-05))) {
         break block6
        }
        break block5;
       }
       $0_1 = 0;
       if ($9_1 == $9_1) {
        break block6
       }
       if ($2_1) {
        break block5
       }
       break block6;
      }
      $0_1 = ($2_1 | 0) == (2 | 0);
      if (($2_1 | 0) != (2 | 0) | ($6_1 | 0) != (1 | 0) | 0) {
       break block6
      }
      if ($1_1 >= $9_1) {
       break block5
      }
      $0_1 = $9_1 != $9_1;
      if (!($0_1 | $1_1 != $1_1 | 0)) {
       if (!(Math_fround(Math_abs(Math_fround($1_1 - $9_1))) < Math_fround(9.999999747378752e-05))) {
        break block7
       }
       break block5;
      }
      $14_1 = 0;
      if ($1_1 == $1_1) {
       break block5
      }
      $14_1 = 1;
      if ($0_1) {
       break block5
      }
      break block7;
     }
     $2_1 = $9_1 != $9_1;
     if ($2_1 | !($1_1 < $7_1) | 0) {
      break block7
     }
     $4_1 = $1_1 != $1_1;
     if (!$0_1 | ($4_1 | $7_1 != $7_1 | 0 | ($6_1 | 0) != (2 | 0) | 0) | 0) {
      break block7
     }
     if ($1_1 >= $9_1) {
      break block5
     }
     $14_1 = 0;
     if ($2_1 | $4_1 | 0) {
      break block5
     }
     $14_1 = Math_fround(Math_abs(Math_fround($1_1 - $9_1))) < Math_fround(9.999999747378752e-05);
     break block5;
    }
    $14_1 = 0;
   }
   $282_1 = $13_1 & $14_1 | 0;
  }
  return $282_1 | 0;
 }
 
 function $94($0_1) {
  $0_1 = $0_1 | 0;
  var $2_1 = 0, $1_1 = 0, $3_1 = 0, $26_1 = 0, $73_1 = 0;
  $1_1 = global$0 - 16 | 0;
  global$0 = $1_1;
  block2 : {
   block : {
    if (!((HEAPU8[($0_1 + 20 | 0) >> 0] | 0) & 8 | 0)) {
     break block
    }
    $3_1 = 1;
    if (((HEAPU8[($0_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($0_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0) & 240 | 0 | 0) == (80 | 0)) {
     break block
    }
    $20($1_1 | 0, $0_1 | 0);
    $0_1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
    block1 : {
     $2_1 = HEAP32[$1_1 >> 2] | 0;
     if (!$2_1) {
      $3_1 = 0;
      if (!$0_1) {
       break block1
      }
     }
     label : while (1) {
      $26_1 = HEAP32[($2_1 + 492 | 0) >> 2] | 0;
      $2_1 = HEAP32[($2_1 + 488 | 0) >> 2] | 0;
      if ((($26_1 - $2_1 | 0) >> 2 | 0) >>> 0 <= $0_1 >>> 0) {
       break block2
      }
      $0_1 = HEAP32[($2_1 + ($0_1 << 2 | 0) | 0) >> 2] | 0;
      $0_1 = HEAPU8[($0_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($0_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($0_1 + 23 | 0) >> 0] | 0) << 16 | 0) | 0;
      $3_1 = ($0_1 & 12288 | 0 | 0) != (8192 | 0) & ($0_1 & 3840 | 0 | 0) == (1280 | 0) | 0;
      if ($3_1) {
       break block1
      }
      $16($1_1 | 0);
      $0_1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
      $2_1 = HEAP32[$1_1 >> 2] | 0;
      if ($0_1 | $2_1 | 0) {
       continue label
      }
      break label;
     };
    }
    $0_1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
    if (!$0_1) {
     break block
    }
    label1 : while (1) {
     $2_1 = HEAP32[$0_1 >> 2] | 0;
     $5($0_1 | 0);
     $0_1 = $2_1;
     if ($0_1) {
      continue label1
     }
     break label1;
    };
   }
   global$0 = $1_1 + 16 | 0;
   return $3_1 | 0;
  }
  fimport$2();
  wasm2js_trap();
 }
 
 function $95($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, $3_1 = 0, $4_1 = 0;
  block : {
   block1 : {
    $3_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
    $4_1 = HEAP32[$0_1 >> 2] | 0;
    $1_1 = HEAP32[($4_1 + 488 | 0) >> 2] | 0;
    if ($3_1 >>> 0 < (((HEAP32[($4_1 + 492 | 0) >> 2] | 0) - $1_1 | 0) >> 2 | 0) >>> 0) {
     $2_1 = $1_1 + ($3_1 << 2 | 0) | 0;
     label : while (1) {
      $1_1 = HEAP32[$2_1 >> 2] | 0;
      if ((((HEAPU8[($1_1 + 23 | 0) >> 0] | 0) << 16 | 0) & 786432 | 0 | 0) != (524288 | 0)) {
       break block
      }
      if ((HEAP32[($1_1 + 492 | 0) >> 2] | 0 | 0) == (HEAP32[($1_1 + 488 | 0) >> 2] | 0 | 0)) {
       break block1
      }
      $2_1 = $0(12 | 0) | 0;
      HEAP32[($2_1 + 4 | 0) >> 2] = $4_1;
      HEAP32[($2_1 + 8 | 0) >> 2] = $3_1;
      HEAP32[$2_1 >> 2] = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
      $3_1 = 0;
      HEAP32[($0_1 + 4 | 0) >> 2] = 0;
      HEAP32[$0_1 >> 2] = $1_1;
      HEAP32[($0_1 + 8 | 0) >> 2] = $2_1;
      $4_1 = $1_1;
      $2_1 = HEAP32[($1_1 + 488 | 0) >> 2] | 0;
      if (($2_1 | 0) != (HEAP32[($1_1 + 492 | 0) >> 2] | 0 | 0)) {
       continue label
      }
      break label;
     };
    }
    fimport$2();
    wasm2js_trap();
   }
   $16($0_1 | 0);
  }
 }
 
 function $96($0_1, $1_1, $2_1, $3_1, $4_1, $5_1, $6_1, $7_1, $8_1, $9_1, $10_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  $5_1 = $5_1 | 0;
  $6_1 = $6_1 | 0;
  $7_1 = Math_fround($7_1);
  $8_1 = Math_fround($8_1);
  $9_1 = Math_fround($9_1);
  $10_1 = Math_fround($10_1);
  var $11_1 = 0, $12_1 = 0, $14_1 = 0, $23_1 = Math_fround(0), $13_1 = 0, $16_1 = 0, $15_1 = 0, $24_1 = Math_fround(0), $25_1 = Math_fround(0), $18_1 = 0, $17_1 = 0, $26_1 = Math_fround(0), $19_1 = 0, $27_1 = Math_fround(0), $20_1 = 0, $28_1 = Math_fround(0), $113_1 = 0, $29_1 = Math_fround(0), $479 = 0, $519 = 0, $577 = 0, $387 = 0, $625 = Math_fround(0), $21_1 = 0, $22_1 = 0, $52_1 = 0;
  $13_1 = global$0 - 32 | 0;
  global$0 = $13_1;
  $20($13_1 + 8 | 0 | 0, $1_1 | 0);
  $14_1 = HEAP32[($13_1 + 8 | 0) >> 2] | 0;
  $12_1 = HEAP32[($13_1 + 12 | 0) >> 2] | 0;
  if ($14_1 | $12_1 | 0) {
   $21_1 = $3_1 ? $3_1 : 1;
   $20_1 = $0_1 + 20 | 0;
   $22_1 = $5_1 + 1 | 0;
   label : while (1) {
    block : {
     block20 : {
      block21 : {
       block16 : {
        block18 : {
         block19 : {
          block17 : {
           block14 : {
            $52_1 = HEAP32[($14_1 + 492 | 0) >> 2] | 0;
            $14_1 = HEAP32[($14_1 + 488 | 0) >> 2] | 0;
            if ($12_1 >>> 0 < (($52_1 - $14_1 | 0) >> 2 | 0) >>> 0) {
             $11_1 = HEAP32[($14_1 + ($12_1 << 2 | 0) | 0) >> 2] | 0;
             $12_1 = HEAPU8[($11_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($11_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($11_1 + 23 | 0) >> 0] | 0) << 16 | 0) | 0;
             if (($12_1 & 786432 | 0 | 0) == (262144 | 0)) {
              break block
             }
             block1 : {
              switch (($12_1 >>> 12 | 0) & 3 | 0 | 0) {
              case 2:
               $23_1 = $9_1;
               $26_1 = $10_1;
               if (!((HEAPU8[((HEAP32[($1_1 + 500 | 0) >> 2] | 0) + 20 | 0) >> 0] | 0) & 4 | 0)) {
                $23_1 = Math_fround(Math_fround(HEAPF32[($0_1 + 404 | 0) >> 2]) - Math_fround(Math_fround($18($20_1 | 0, 2 | 0, 1 | 0)) + Math_fround($17($20_1 | 0, 2 | 0, 1 | 0))));
                $26_1 = Math_fround(Math_fround(HEAPF32[($0_1 + 408 | 0) >> 2]) - Math_fround(Math_fround($18($20_1 | 0, 0 | 0, 1 | 0)) + Math_fround($17($20_1 | 0, 0 | 0, 1 | 0))));
               }
               $15_1 = $11_1 + 20 | 0;
               $16_1 = ((HEAPU8[($1_1 + 20 | 0) >> 0] | 0) >>> 2 | 0) & 3 | 0;
               block3 : {
                block6 : {
                 block5 : {
                  $19_1 = ($3_1 | 0) != (2 | 0);
                  if (!$19_1) {
                   $14_1 = 0;
                   $12_1 = 3;
                   block4 : {
                    switch ($16_1 - 2 | 0 | 0) {
                    case 0:
                     break block3;
                    case 1:
                     break block4;
                    default:
                     break block5;
                    };
                   }
                   $12_1 = 2;
                   break block3;
                  }
                  $12_1 = 2;
                  $113_1 = 0;
                  if ($16_1 >>> 0 > 1 >>> 0) {
                   break block6
                  }
                 }
                 $113_1 = $12_1;
                }
                $14_1 = $113_1;
                $12_1 = $16_1;
               }
               $29_1 = Math_fround(Math_fround($4($15_1 | 0, 2 | 0, 1 | 0, Math_fround($23_1))) + Math_fround($3($15_1 | 0, 2 | 0, 1 | 0, Math_fround($23_1))));
               $28_1 = Math_fround($4($15_1 | 0, 0 | 0, 1 | 0, Math_fround($23_1)));
               $27_1 = Math_fround($3($15_1 | 0, 0 | 0, 1 | 0, Math_fround($23_1)));
               $24_1 = Math_fround(HEAPF32[($11_1 + 504 | 0) >> 2]);
               block10 : {
                block9 : {
                 block7 : {
                  switch ((HEAPU8[($11_1 + 508 | 0) >> 0] | 0) - 1 | 0 | 0) {
                  case 1:
                   $24_1 = Math_fround(Math_fround($24_1 * $23_1) * Math_fround(.009999999776482582));
                   break;
                  case 0:
                   break block7;
                  default:
                   break block9;
                  };
                 }
                 if (!($24_1 >= Math_fround(0.0))) {
                  break block9
                 }
                 $24_1 = Math_fround($29_1 + Math_fround($19($11_1 | 0, $3_1 | 0, 0 | 0, Math_fround($23_1), Math_fround($23_1))));
                 break block10;
                }
                $16_1 = $11_1 + 50 | 0;
                $39($13_1 + 24 | 0 | 0, $15_1 | 0, $16_1 | 0, $3_1 | 0);
                $24_1 = Math_fround(NaN);
                if (!(HEAPU8[($13_1 + 28 | 0) >> 0] | 0)) {
                 break block10
                }
                $38($13_1 + 24 | 0 | 0, $15_1 | 0, $16_1 | 0, $3_1 | 0);
                if (!(HEAPU8[($13_1 + 28 | 0) >> 0] | 0)) {
                 break block10
                }
                $39($13_1 + 24 | 0 | 0, $15_1 | 0, $16_1 | 0, $3_1 | 0);
                if ((HEAPU8[($13_1 + 28 | 0) >> 0] | 0 | 0) == (3 | 0)) {
                 break block10
                }
                $38($13_1 + 24 | 0 | 0, $15_1 | 0, $16_1 | 0, $3_1 | 0);
                if ((HEAPU8[($13_1 + 28 | 0) >> 0] | 0 | 0) == (3 | 0)) {
                 break block10
                }
                $24_1 = Math_fround($7($11_1 | 0, 2 | 0, $3_1 | 0, Math_fround(Math_fround(Math_fround(Math_fround(HEAPF32[($0_1 + 404 | 0) >> 2]) - Math_fround(Math_fround($45($20_1 | 0, 2 | 0, $3_1 | 0)) + Math_fround($52($20_1 | 0, 2 | 0, $3_1 | 0)))) - Math_fround(Math_fround($51($15_1 | 0, 2 | 0, $3_1 | 0, Math_fround($23_1))) + Math_fround($101($15_1 | 0, 2 | 0, $3_1 | 0, Math_fround($23_1)))))), Math_fround($23_1), Math_fround($23_1)));
               }
               $28_1 = Math_fround($28_1 + $27_1);
               $25_1 = Math_fround(HEAPF32[($11_1 + 512 | 0) >> 2]);
               block13 : {
                block11 : {
                 switch ((HEAPU8[($11_1 + 516 | 0) >> 0] | 0) - 1 | 0 | 0) {
                 case 1:
                  $25_1 = Math_fround(Math_fround($25_1 * $26_1) * Math_fround(.009999999776482582));
                  break;
                 case 0:
                  break block11;
                 default:
                  break block13;
                 };
                }
                if (!($25_1 >= Math_fround(0.0))) {
                 break block13
                }
                $25_1 = Math_fround($28_1 + Math_fround($19($11_1 | 0, $3_1 | 0, 1 | 0, Math_fround($26_1), Math_fround($23_1))));
                break block14;
               }
               $16_1 = $11_1 + 50 | 0;
               $37($13_1 + 24 | 0 | 0, $15_1 | 0, $16_1 | 0);
               block15 : {
                if (!(HEAPU8[($13_1 + 28 | 0) >> 0] | 0)) {
                 break block15
                }
                $36($13_1 + 24 | 0 | 0, $15_1 | 0, $16_1 | 0);
                if (!(HEAPU8[($13_1 + 28 | 0) >> 0] | 0)) {
                 break block15
                }
                $37($13_1 + 24 | 0 | 0, $15_1 | 0, $16_1 | 0);
                if ((HEAPU8[($13_1 + 28 | 0) >> 0] | 0 | 0) == (3 | 0)) {
                 break block15
                }
                $36($13_1 + 24 | 0 | 0, $15_1 | 0, $16_1 | 0);
                if ((HEAPU8[($13_1 + 28 | 0) >> 0] | 0 | 0) == (3 | 0)) {
                 break block15
                }
                $25_1 = Math_fround($7($11_1 | 0, 0 | 0, $3_1 | 0, Math_fround(Math_fround(Math_fround(Math_fround(HEAPF32[($0_1 + 408 | 0) >> 2]) - Math_fround(Math_fround($45($20_1 | 0, 0 | 0, $3_1 | 0)) + Math_fround($52($20_1 | 0, 0 | 0, $3_1 | 0)))) - Math_fround(Math_fround($51($15_1 | 0, 0 | 0, $3_1 | 0, Math_fround($26_1))) + Math_fround($101($15_1 | 0, 0 | 0, $3_1 | 0, Math_fround($26_1)))))), Math_fround($26_1), Math_fround($23_1)));
                break block14;
               }
               $25_1 = Math_fround(NaN);
               if ($24_1 != $24_1) {
                break block16
               }
               $16_1 = $11_1 + 124 | 0;
               $18_1 = $11_1 + 122 | 0;
               $27_1 = Math_fround($2($16_1 | 0, HEAPU16[$18_1 >> 1] | 0 | 0));
               if ($27_1 == $27_1) {
                break block17
               }
               break block18;
              case 0:
               break block1;
              default:
               break block;
              };
             }
             if ((HEAPU8[$11_1 >> 0] | 0) & 8 | 0) {
              break block
             }
             $49($11_1 | 0);
             $12_1 = (HEAPU8[($11_1 + 20 | 0) >> 0] | 0) & 3 | 0;
             $12_1 = $96($0_1 | 0, $11_1 | 0, $2_1 | 0, ($12_1 ? $12_1 : $21_1) | 0, $4_1 | 0, $22_1 | 0, $6_1 | 0, Math_fround(Math_fround(Math_fround(HEAPF32[($11_1 + 412 | 0) >> 2]) + $7_1)), Math_fround(Math_fround(Math_fround(HEAPF32[($11_1 + 416 | 0) >> 2]) + $8_1)), Math_fround($9_1), Math_fround($10_1)) | 0 | $17_1 | 0;
             $17_1 = 0;
             if (!($12_1 & 1 | 0)) {
              break block
             }
             $17_1 = 1;
             HEAP8[$11_1 >> 0] = HEAPU8[$11_1 >> 0] | 0 | 1 | 0;
             break block;
            }
            fimport$2();
            wasm2js_trap();
           }
           if (($24_1 != $24_1 | 0) == ($25_1 != $25_1 | 0)) {
            break block19
           }
           $16_1 = $11_1 + 124 | 0;
           $18_1 = $11_1 + 122 | 0;
           $27_1 = Math_fround($2($16_1 | 0, HEAPU16[$18_1 >> 1] | 0 | 0));
           if ($27_1 != $27_1) {
            break block19
           }
           if ($24_1 != $24_1) {
            $24_1 = Math_fround(Math_fround(Math_fround($25_1 - $28_1) * Math_fround($2($16_1 | 0, HEAPU16[($11_1 + 122 | 0) >> 1] | 0 | 0))) + $29_1);
            break block19;
           }
           if ($25_1 == $25_1) {
            break block19
           }
          }
          $25_1 = Math_fround($28_1 + Math_fround(Math_fround($24_1 - $29_1) / Math_fround($2($16_1 | 0, HEAPU16[$18_1 >> 1] | 0 | 0))));
         }
         if ($24_1 != $24_1) {
          break block16
         }
         if ($25_1 == $25_1) {
          break block20
         }
        }
        $387 = 0;
        break block21;
       }
       $387 = 1;
      }
      $18_1 = $387;
      $16_1 = ((($2_1 | 0) != (1 | 0) & $12_1 >>> 0 < 2 >>> 0 | 0) & $23_1 > Math_fround(0.0) | 0) & $18_1 | 0;
      $31($11_1 | 0, Math_fround($16_1 ? $23_1 : $24_1), Math_fround($25_1), $3_1 | 0, ($16_1 ? 2 : $18_1) | 0, $25_1 != $25_1 | 0, Math_fround($23_1), Math_fround($26_1), 0 | 0, 6 | 0, $4_1 | 0, $5_1 | 0, $6_1 | 0) | 0;
      $24_1 = Math_fround(Math_fround(HEAPF32[($11_1 + 404 | 0) >> 2]) + Math_fround(Math_fround($4($15_1 | 0, 2 | 0, 1 | 0, Math_fround($23_1))) + Math_fround($3($15_1 | 0, 2 | 0, 1 | 0, Math_fround($23_1)))));
      $25_1 = Math_fround(Math_fround(HEAPF32[($11_1 + 408 | 0) >> 2]) + Math_fround(Math_fround($4($15_1 | 0, 0 | 0, 1 | 0, Math_fround($23_1))) + Math_fround($3($15_1 | 0, 0 | 0, 1 | 0, Math_fround($23_1)))));
     }
     $16_1 = 1;
     $31($11_1 | 0, Math_fround($24_1), Math_fround($25_1), $3_1 | 0, 0 | 0, 0 | 0, Math_fround($23_1), Math_fround($26_1), 1 | 0, 1 | 0, $4_1 | 0, $5_1 | 0, $6_1 | 0) | 0;
     $100($0_1 | 0, $1_1 | 0, $11_1 | 0, $3_1 | 0, $12_1 | 0, 1 | 0, Math_fround($23_1), Math_fround($26_1));
     $100($0_1 | 0, $1_1 | 0, $11_1 | 0, $3_1 | 0, $14_1 | 0, 0 | 0, Math_fround($23_1), Math_fround($26_1));
     if (!($17_1 & 1 | 0)) {
      $16_1 = (HEAPU8[$11_1 >> 0] | 0) & 1 | 0
     }
     $18_1 = HEAPU8[($1_1 + 20 | 0) >> 0] | 0;
     $12_1 = ($18_1 >>> 2 | 0) & 3 | 0;
     block23 : {
      block41 : {
       block40 : {
        block39 : {
         block38 : {
          block34 : {
           block26 : {
            block29 : {
             block28 : {
              block27 : {
               block22 : {
                block25 : {
                 block24 : {
                  if (!$19_1) {
                   $17_1 = 0;
                   $14_1 = 3;
                   switch ($12_1 - 2 | 0 | 0) {
                   case 0:
                    break block22;
                   case 1:
                    break block23;
                   default:
                    break block24;
                   };
                  }
                  $14_1 = 2;
                  $479 = 0;
                  if ($12_1 >>> 0 > 1 >>> 0) {
                   break block25
                  }
                 }
                 $479 = $14_1;
                }
                $17_1 = $479;
                if (!($18_1 & 4 | 0)) {
                 break block26
                }
                if (!($18_1 & 8 | 0)) {
                 break block27
                }
                $14_1 = $12_1;
               }
               $12_1 = $1_1;
               if ($65($15_1 | 0) | 0) {
                break block28
               }
               break block29;
              }
              block30 : {
               if ((HEAPU8[($11_1 + 52 | 0) >> 0] | 0) & 7 | 0) {
                break block30
               }
               if ((HEAPU8[($11_1 + 56 | 0) >> 0] | 0) & 7 | 0) {
                break block30
               }
               if ((HEAPU8[($11_1 + 66 | 0) >> 0] | 0) & 7 | 0) {
                break block30
               }
               $14_1 = $12_1;
               $12_1 = $1_1;
               if (!((HEAPU16[($11_1 - -64 | 0) >> 1] | 0) & 7 | 0)) {
                break block29
               }
               break block28;
              }
              $14_1 = $12_1;
             }
             $12_1 = $0_1;
            }
            block35 : {
             block33 : {
              switch ($14_1 - 1 | 0 | 0) {
              case 0:
               $14_1 = $11_1 + 408 | 0;
               $19_1 = $11_1 + 424 | 0;
               $18_1 = 1;
               $519 = $12_1 + 408 | 0;
               break block35;
              case 1:
               $14_1 = $11_1 + 404 | 0;
               $19_1 = $11_1 + 412 | 0;
               $18_1 = 2;
               $519 = $12_1 + 404 | 0;
               break block35;
              case 2:
               break block33;
              default:
               break block34;
              };
             }
             $14_1 = $11_1 + 404 | 0;
             $19_1 = $11_1 + 420 | 0;
             $18_1 = 0;
             $519 = $12_1 + 404 | 0;
            }
            $12_1 = $519;
            HEAPF32[(($11_1 + ($18_1 << 2 | 0) | 0) + 412 | 0) >> 2] = Math_fround(Math_fround(Math_fround(HEAPF32[$12_1 >> 2]) - Math_fround(HEAPF32[$14_1 >> 2])) - Math_fround(HEAPF32[$19_1 >> 2]));
           }
           if (!($17_1 & 1 | 0)) {
            break block23
           }
           block37 : {
            block36 : {
             if ($17_1 & 2 | 0) {
              $12_1 = $1_1;
              if ($65($15_1 | 0) | 0) {
               break block36
              }
              break block37;
             }
             if ((HEAPU8[($11_1 + 52 | 0) >> 0] | 0) & 7 | 0) {
              break block36
             }
             if ((HEAPU8[($11_1 + 56 | 0) >> 0] | 0) & 7 | 0) {
              break block36
             }
             if ((HEAPU8[($11_1 + 66 | 0) >> 0] | 0) & 7 | 0) {
              break block36
             }
             $12_1 = $1_1;
             if (!((HEAPU16[($11_1 - -64 | 0) >> 1] | 0) & 7 | 0)) {
              break block37
             }
            }
            $12_1 = $0_1;
           }
           switch ($17_1 - 1 | 0 | 0) {
           case 0:
            break block38;
           case 1:
            break block39;
           case 2:
            break block40;
           default:
            break block34;
           };
          }
          $6();
          wasm2js_trap();
         }
         $17_1 = $11_1 + 408 | 0;
         $14_1 = $11_1 + 424 | 0;
         $19_1 = 1;
         $577 = $12_1 + 408 | 0;
         break block41;
        }
        $17_1 = $11_1 + 404 | 0;
        $14_1 = $11_1 + 412 | 0;
        $19_1 = 2;
        $577 = $12_1 + 404 | 0;
        break block41;
       }
       $17_1 = $11_1 + 404 | 0;
       $14_1 = $11_1 + 420 | 0;
       $19_1 = 0;
       $577 = $12_1 + 404 | 0;
      }
      $12_1 = $577;
      HEAPF32[(($11_1 + ($19_1 << 2 | 0) | 0) + 412 | 0) >> 2] = Math_fround(Math_fround(Math_fround(HEAPF32[$12_1 >> 2]) - Math_fround(HEAPF32[$17_1 >> 2])) - Math_fround(HEAPF32[$14_1 >> 2]));
     }
     $27_1 = Math_fround(HEAPF32[($11_1 + 416 | 0) >> 2]);
     $23_1 = Math_fround(Math_fround(HEAPF32[($11_1 + 412 | 0) >> 2]) - ($65($15_1 | 0) | 0 ? $7_1 : Math_fround(0.0)));
     block43 : {
      block42 : {
       if ((HEAPU8[($11_1 + 52 | 0) >> 0] | 0) & 7 | 0) {
        break block42
       }
       if ((HEAPU8[($11_1 + 56 | 0) >> 0] | 0) & 7 | 0) {
        break block42
       }
       if ((HEAPU8[($11_1 + 66 | 0) >> 0] | 0) & 7 | 0) {
        break block42
       }
       if ((HEAPU16[($11_1 - -64 | 0) >> 1] | 0) & 7 | 0) {
        break block42
       }
       $625 = Math_fround(0.0);
       break block43;
      }
      $625 = $8_1;
     }
     $26_1 = $625;
     HEAPF32[($11_1 + 412 | 0) >> 2] = $23_1;
     HEAPF32[($11_1 + 416 | 0) >> 2] = Math_fround($27_1 - $26_1);
     $17_1 = $16_1;
    }
    $16($13_1 + 8 | 0 | 0);
    $12_1 = HEAP32[($13_1 + 12 | 0) >> 2] | 0;
    $14_1 = HEAP32[($13_1 + 8 | 0) >> 2] | 0;
    if ($12_1 | $14_1 | 0) {
     continue label
    }
    break label;
   };
  }
  $12_1 = HEAP32[($13_1 + 16 | 0) >> 2] | 0;
  if ($12_1) {
   label1 : while (1) {
    $0_1 = HEAP32[$12_1 >> 2] | 0;
    $5($12_1 | 0);
    $12_1 = $0_1;
    if ($12_1) {
     continue label1
    }
    break label1;
   }
  }
  global$0 = $13_1 + 32 | 0;
  return $17_1 & 1 | 0 | 0;
 }
 
 function $97($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = Math_fround($3_1);
  var $4_1 = 0, $5_1 = Math_fround(0);
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  $50($4_1 + 8 | 0 | 0, $0_1 | 0, HEAP32[(($1_1 << 2 | 0) + 4844 | 0) >> 2] | 0 | 0, $2_1 | 0);
  $5_1 = Math_fround(NaN);
  block2 : {
   block1 : {
    switch ((HEAPU8[($4_1 + 12 | 0) >> 0] | 0) - 1 | 0 | 0) {
    case 0:
     $5_1 = Math_fround(HEAPF32[($4_1 + 8 | 0) >> 2]);
     break block2;
    case 1:
     break block1;
    default:
     break block2;
    };
   }
   $5_1 = Math_fround(Math_fround(Math_fround(HEAPF32[($4_1 + 8 | 0) >> 2]) * $3_1) * Math_fround(.009999999776482582));
  }
  global$0 = $4_1 + 16 | 0;
  return Math_fround($5_1 == $5_1 ? Math_fround(Math_max($5_1, Math_fround(0.0))) : Math_fround(0.0));
 }
 
 function $98($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = Math_fround($3_1);
  var $4_1 = 0, $5_1 = Math_fround(0);
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  $24($4_1 + 8 | 0 | 0, $0_1 | 0, (($1_1 & 254 | 0 | 0) != (2 | 0) ? 3 : (($2_1 | 0) != (2 | 0)) << 1 | 0) | 0, $2_1 | 0);
  $5_1 = Math_fround(NaN);
  block2 : {
   block1 : {
    switch ((HEAPU8[($4_1 + 12 | 0) >> 0] | 0) - 1 | 0 | 0) {
    case 0:
     $5_1 = Math_fround(HEAPF32[($4_1 + 8 | 0) >> 2]);
     break block2;
    case 1:
     break block1;
    default:
     break block2;
    };
   }
   $5_1 = Math_fround(Math_fround(Math_fround(HEAPF32[($4_1 + 8 | 0) >> 2]) * $3_1) * Math_fround(.009999999776482582));
  }
  global$0 = $4_1 + 16 | 0;
  return Math_fround($5_1 == $5_1 ? $5_1 : Math_fround(0.0));
 }
 
 function $99($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = Math_fround($3_1);
  var $4_1 = 0, $5_1 = Math_fround(0);
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  $24($4_1 + 8 | 0 | 0, $0_1 | 0, (($1_1 & 254 | 0 | 0) != (2 | 0) ? 1 : (($2_1 | 0) == (2 | 0)) << 1 | 0) | 0, $2_1 | 0);
  $5_1 = Math_fround(NaN);
  block2 : {
   block1 : {
    switch ((HEAPU8[($4_1 + 12 | 0) >> 0] | 0) - 1 | 0 | 0) {
    case 0:
     $5_1 = Math_fround(HEAPF32[($4_1 + 8 | 0) >> 2]);
     break block2;
    case 1:
     break block1;
    default:
     break block2;
    };
   }
   $5_1 = Math_fround(Math_fround(Math_fround(HEAPF32[($4_1 + 8 | 0) >> 2]) * $3_1) * Math_fround(.009999999776482582));
  }
  global$0 = $4_1 + 16 | 0;
  return Math_fround($5_1 == $5_1 ? $5_1 : Math_fround(0.0));
 }
 
 function $100($0_1, $1_1, $2_1, $3_1, $4_1, $5_1, $6_1, $7_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  $5_1 = $5_1 | 0;
  $6_1 = Math_fround($6_1);
  $7_1 = Math_fround($7_1);
  var $8_1 = 0, $9_1 = 0, $10_1 = 0, $11_1 = 0, $306 = 0, $341 = 0, $69_1 = 0, $117_1 = 0, $158_1 = 0, $224_1 = Math_fround(0), $336 = Math_fround(0), $414 = Math_fround(0), $497 = Math_fround(0), $124_1 = Math_fround(0), $214_1 = 0, $382 = Math_fround(0), $401 = 0, $487 = 0;
  $9_1 = global$0 - 16 | 0;
  global$0 = $9_1;
  $8_1 = $2_1 + 20 | 0;
  $10_1 = ($4_1 & 254 | 0 | 0) == (2 | 0);
  $11_1 = $10_1 ? (($3_1 | 0) == (2 | 0)) << 1 | 0 : 1;
  $24($9_1 + 8 | 0 | 0, $8_1 | 0, $11_1 | 0, $3_1 | 0);
  $7_1 = $10_1 ? $6_1 : $7_1;
  block10 : {
   block31 : {
    block49 : {
     block47 : {
      block5 : {
       block : {
        if (!(HEAPU8[($9_1 + 12 | 0) >> 0] | 0)) {
         break block
        }
        $24($9_1 + 8 | 0 | 0, $8_1 | 0, $11_1 | 0, $3_1 | 0);
        if ((HEAPU8[($9_1 + 12 | 0) >> 0] | 0 | 0) == (3 | 0)) {
         break block
        }
        $6_1 = Math_fround(Math_fround(Math_fround($99($8_1 | 0, $4_1 | 0, $3_1 | 0, Math_fround($7_1))) + Math_fround($18($0_1 + 20 | 0 | 0, $4_1 | 0, $3_1 | 0))) + Math_fround($4($8_1 | 0, $4_1 | 0, $3_1 | 0, Math_fround($7_1))));
        $3_1 = 1;
        block6 : {
         block9 : {
          block2 : {
           block1 : {
            block3 : {
             switch ($4_1 | 0) {
             case 3:
              $3_1 = 2;
              break block1;
             case 0:
              break block1;
             case 1:
              break block2;
             case 2:
              break block3;
             default:
              break block5;
             };
            }
            $3_1 = 0;
           }
           if (($3_1 | 0) == ($11_1 | 0)) {
            break block6
           }
           block8 : {
            switch ($4_1 | 0) {
            case 2:
             $3_1 = $0_1 + 404 | 0;
             $69_1 = 0;
             break block9;
            case 0:
            case 1:
             break block2;
            case 3:
             break block8;
            default:
             break block5;
            };
           }
           $3_1 = $0_1 + 404 | 0;
           $69_1 = 0;
           break block9;
          }
          $3_1 = $0_1 + 408 | 0;
          $69_1 = 1;
         }
         $0_1 = $69_1;
         $6_1 = Math_fround(Math_fround(Math_fround(HEAPF32[$3_1 >> 2]) - Math_fround(HEAPF32[(($2_1 + ($0_1 << 2 | 0) | 0) + 404 | 0) >> 2])) - $6_1);
        }
        HEAPF32[(($2_1 + ((HEAP32[(($4_1 << 2 | 0) + 4828 | 0) >> 2] | 0) << 2 | 0) | 0) + 412 | 0) >> 2] = $6_1;
        break block10;
       }
       $10_1 = $10_1 ? (($3_1 | 0) != (2 | 0)) << 1 | 0 : 3;
       $24($9_1 + 8 | 0 | 0, $8_1 | 0, $10_1 | 0, $3_1 | 0);
       block11 : {
        if (!(HEAPU8[($9_1 + 12 | 0) >> 0] | 0)) {
         break block11
        }
        $24($9_1 + 8 | 0 | 0, $8_1 | 0, $10_1 | 0, $3_1 | 0);
        if ((HEAPU8[($9_1 + 12 | 0) >> 0] | 0 | 0) == (3 | 0)) {
         break block11
        }
        block15 : {
         block12 : {
          switch ($4_1 | 0) {
          case 2:
           $5_1 = $0_1 + 404 | 0;
           $117_1 = 0;
           break block15;
          case 3:
           $5_1 = $0_1 + 404 | 0;
           $117_1 = 0;
           break block15;
          case 0:
          case 1:
           break block12;
          default:
           break block5;
          };
         }
         $5_1 = $0_1 + 408 | 0;
         $117_1 = 1;
        }
        $1_1 = $117_1;
        $124_1 = Math_fround(HEAPF32[$5_1 >> 2]);
        $5_1 = $2_1 + 404 | 0;
        $6_1 = Math_fround(Math_fround(Math_fround(Math_fround($124_1 - Math_fround(HEAPF32[($5_1 + ($1_1 << 2 | 0) | 0) >> 2])) - Math_fround($17($0_1 + 20 | 0 | 0, $4_1 | 0, $3_1 | 0))) - Math_fround($3($8_1 | 0, $4_1 | 0, $3_1 | 0, Math_fround($7_1)))) - Math_fround($98($8_1 | 0, $4_1 | 0, $3_1 | 0, Math_fround($7_1))));
        $3_1 = 1;
        block20 : {
         block23 : {
          block17 : {
           block16 : {
            block18 : {
             switch ($4_1 | 0) {
             case 3:
              $3_1 = 2;
              break block16;
             case 0:
              break block16;
             case 1:
              break block17;
             case 2:
              break block18;
             default:
              break block5;
             };
            }
            $3_1 = 0;
           }
           if (($3_1 | 0) == ($11_1 | 0)) {
            break block20
           }
           block22 : {
            switch ($4_1 | 0) {
            case 2:
             $3_1 = $0_1 + 404 | 0;
             $158_1 = 0;
             break block23;
            case 0:
            case 1:
             break block17;
            case 3:
             break block22;
            default:
             break block5;
            };
           }
           $3_1 = $0_1 + 404 | 0;
           $158_1 = 0;
           break block23;
          }
          $3_1 = $0_1 + 408 | 0;
          $158_1 = 1;
         }
         $0_1 = $158_1;
         $6_1 = Math_fround(Math_fround(Math_fround(HEAPF32[$3_1 >> 2]) - Math_fround(HEAPF32[($5_1 + ($0_1 << 2 | 0) | 0) >> 2])) - $6_1);
        }
        HEAPF32[(($2_1 + ((HEAP32[(($4_1 << 2 | 0) + 4828 | 0) >> 2] | 0) << 2 | 0) | 0) + 412 | 0) >> 2] = $6_1;
        break block10;
       }
       block32 : {
        block30 : {
         block24 : {
          if ($5_1) {
           $0_1 = ((HEAPU8[($1_1 + 20 | 0) >> 0] | 0) >>> 4 | 0) & 7 | 0;
           if ($0_1 >>> 0 > 5 >>> 0) {
            break block10
           }
           $0_1 = 1 << $0_1 | 0;
           if ($0_1 & 50 | 0) {
            break block24
           }
           if ($0_1 & 9 | 0) {
            $0_1 = HEAP32[(($4_1 << 2 | 0) + 4828 | 0) >> 2] | 0;
            $0_1 = $0_1 << 2 | 0;
            $1_1 = $1_1 + $0_1 | 0;
            $6_1 = Math_fround(Math_fround($35($8_1 | 0, $4_1 | 0, $3_1 | 0, Math_fround($6_1))) + Math_fround(HEAPF32[($1_1 + 444 | 0) >> 2]));
            $214_1 = $0_1 + $2_1 | 0;
            if ((HEAPU8[((HEAP32[($2_1 + 500 | 0) >> 2] | 0) + 20 | 0) >> 0] | 0) & 2 | 0) {
             $224_1 = $6_1
            } else {
             $224_1 = Math_fround($6_1 + Math_fround(HEAPF32[($1_1 + 460 | 0) >> 2]))
            }
            HEAPF32[($214_1 + 412 | 0) >> 2] = $224_1;
            break block10;
           }
           $0_1 = $1_1 + ((HEAP32[(($4_1 << 2 | 0) + 4844 | 0) >> 2] | 0) << 2 | 0) | 0;
           $6_1 = Math_fround(Math_fround(HEAPF32[($0_1 + 444 | 0) >> 2]) + Math_fround($68($8_1 | 0, $4_1 | 0, $3_1 | 0, Math_fround($6_1))));
           if (!((HEAPU8[((HEAP32[($2_1 + 500 | 0) >> 2] | 0) + 20 | 0) >> 0] | 0) & 2 | 0)) {
            $6_1 = Math_fround($6_1 + Math_fround(HEAPF32[($0_1 + 460 | 0) >> 2]))
           }
           block28 : {
            block26 : {
             switch ($4_1 | 0) {
             case 3:
              $7_1 = Math_fround(Math_fround(HEAPF32[($1_1 + 404 | 0) >> 2]) - Math_fround(HEAPF32[($2_1 + 404 | 0) >> 2]));
              $3_1 = 2;
              break block28;
             case 0:
             case 1:
              $7_1 = Math_fround(Math_fround(HEAPF32[($1_1 + 408 | 0) >> 2]) - Math_fround(HEAPF32[($2_1 + 408 | 0) >> 2]));
              $3_1 = 1;
              block29 : {
               switch ($4_1 | 0) {
               case 0:
                break block28;
               case 1:
                break block29;
               default:
                break block5;
               };
              }
              $3_1 = 3;
              break block28;
             case 2:
              break block26;
             default:
              break block5;
             };
            }
            $7_1 = Math_fround(Math_fround(HEAPF32[($1_1 + 404 | 0) >> 2]) - Math_fround(HEAPF32[($2_1 + 404 | 0) >> 2]));
            $3_1 = 0;
           }
           HEAPF32[(($2_1 + ($3_1 << 2 | 0) | 0) + 412 | 0) >> 2] = Math_fround($7_1 - $6_1);
           break block10;
          }
          $5_1 = (HEAPU8[($2_1 + 22 | 0) >> 0] | 0 | ((HEAPU8[($2_1 + 23 | 0) >> 0] | 0) << 8 | 0) | 0) & 15 | 0;
          if (!$5_1) {
           $5_1 = (HEAPU8[($1_1 + 21 | 0) >> 0] | 0) >>> 4 | 0
          }
          if (($5_1 | 0) == (5 | 0)) {
           if (!((HEAPU8[($1_1 + 20 | 0) >> 0] | 0) & 8 | 0)) {
            break block30
           }
          }
          if (((HEAPU8[($1_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($1_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0) & 49152 | 0 | 0) == (32768 | 0)) {
           switch ($5_1 - 2 | 0 | 0) {
           case 0:
            break block24;
           case 1:
            break block31;
           default:
            break block32;
           }
          }
          if ($5_1 >>> 0 > 8 >>> 0) {
           break block10
          }
          if ((1 << $5_1 | 0) & 499 | 0) {
           break block31
          }
          if (($5_1 | 0) != (2 | 0)) {
           break block32
          }
         }
         $0_1 = 0;
         block40 : {
          block45 : {
           block44 : {
            block43 : {
             block42 : {
              block36 : {
               block37 : {
                block33 : {
                 switch ($4_1 | 0) {
                 case 2:
                  $7_1 = Math_fround(HEAPF32[($1_1 + 404 | 0) >> 2]);
                  $0_1 = 2;
                  $306 = $1_1 + 444 | 0;
                  break block37;
                 case 3:
                  $7_1 = Math_fround(HEAPF32[($1_1 + 404 | 0) >> 2]);
                  $306 = $1_1 + 452 | 0;
                  break block37;
                 case 0:
                 case 1:
                  break block33;
                 default:
                  break block36;
                 };
                }
                $7_1 = Math_fround(HEAPF32[($1_1 + 408 | 0) >> 2]);
                block39 : {
                 switch ($4_1 | 0) {
                 case 0:
                  $0_1 = 3;
                  $306 = $1_1 + 448 | 0;
                  break block37;
                 case 1:
                  break block39;
                 default:
                  break block36;
                 };
                }
                $0_1 = 1;
                $306 = $1_1 + 456 | 0;
               }
               $5_1 = $306;
               $8_1 = $1_1 + 444 | 0;
               $7_1 = Math_fround(Math_fround($7_1 - Math_fround(HEAPF32[$5_1 >> 2])) - Math_fround(HEAPF32[($8_1 + ($0_1 << 2 | 0) | 0) >> 2]));
               $336 = $7_1;
               if ((HEAPU8[((HEAP32[($2_1 + 500 | 0) >> 2] | 0) + 20 | 0) >> 0] | 0) & 2 | 0) {
                break block40
               }
               block41 : {
                switch ($4_1 | 0) {
                case 0:
                 break block41;
                case 1:
                 break block42;
                case 2:
                 break block43;
                case 3:
                 break block44;
                default:
                 break block36;
                };
               }
               $0_1 = 3;
               $341 = $1_1 + 464 | 0;
               break block45;
              }
              $6();
              wasm2js_trap();
             }
             $0_1 = 1;
             $341 = $1_1 + 472 | 0;
             break block45;
            }
            $0_1 = 2;
            $341 = $1_1 + 460 | 0;
            break block45;
           }
           $0_1 = 0;
           $341 = $1_1 + 468 | 0;
          }
          $5_1 = $341;
          $336 = Math_fround(Math_fround($7_1 - Math_fround(HEAPF32[$5_1 >> 2])) - Math_fround(HEAPF32[(($1_1 + ($0_1 << 2 | 0) | 0) + 460 | 0) >> 2]));
         }
         $5_1 = $4_1 << 2 | 0;
         $0_1 = $2_1 + 20 | 0;
         $382 = Math_fround(Math_fround($336 - Math_fround(Math_fround(HEAPF32[(($2_1 + ((HEAP32[($5_1 + 4860 | 0) >> 2] | 0) << 2 | 0) | 0) + 404 | 0) >> 2]) + Math_fround(Math_fround($4($0_1 | 0, $4_1 | 0, 1 | 0, Math_fround($6_1))) + Math_fround($3($0_1 | 0, $4_1 | 0, 1 | 0, Math_fround($6_1)))))) * Math_fround(.5));
         $5_1 = HEAP32[($5_1 + 4828 | 0) >> 2] | 0;
         $6_1 = Math_fround(Math_fround($382 + Math_fround(HEAPF32[($8_1 + ($5_1 << 2 | 0) | 0) >> 2])) + Math_fround($35($0_1 | 0, $4_1 | 0, $3_1 | 0, Math_fround($6_1))));
         $401 = $2_1 + ($5_1 << 2 | 0) | 0;
         if ((HEAPU8[((HEAP32[($2_1 + 500 | 0) >> 2] | 0) + 20 | 0) >> 0] | 0) & 2 | 0) {
          $414 = $6_1
         } else {
          $414 = Math_fround($6_1 + Math_fround(HEAPF32[(($1_1 + ($5_1 << 2 | 0) | 0) + 460 | 0) >> 2]))
         }
         HEAPF32[($401 + 412 | 0) >> 2] = $414;
         break block10;
        }
        if (((HEAPU8[($1_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($1_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0) & 49152 | 0 | 0) != (32768 | 0)) {
         break block31
        }
       }
       $0_1 = $1_1 + ((HEAP32[(($4_1 << 2 | 0) + 4844 | 0) >> 2] | 0) << 2 | 0) | 0;
       $6_1 = Math_fround(Math_fround(HEAPF32[($0_1 + 444 | 0) >> 2]) + Math_fround($68($8_1 | 0, $4_1 | 0, $3_1 | 0, Math_fround($6_1))));
       if (!((HEAPU8[((HEAP32[($2_1 + 500 | 0) >> 2] | 0) + 20 | 0) >> 0] | 0) & 2 | 0)) {
        $6_1 = Math_fround($6_1 + Math_fround(HEAPF32[($0_1 + 460 | 0) >> 2]))
       }
       block46 : {
        switch ($4_1 | 0) {
        case 3:
         $7_1 = Math_fround(Math_fround(HEAPF32[($1_1 + 404 | 0) >> 2]) - Math_fround(HEAPF32[($2_1 + 404 | 0) >> 2]));
         $3_1 = 2;
         break block49;
        case 0:
        case 1:
         break block46;
        case 2:
         break block47;
        default:
         break block5;
        };
       }
       $7_1 = Math_fround(Math_fround(HEAPF32[($1_1 + 408 | 0) >> 2]) - Math_fround(HEAPF32[($2_1 + 408 | 0) >> 2]));
       $3_1 = 1;
       block50 : {
        switch ($4_1 | 0) {
        case 0:
         break block49;
        case 1:
         break block50;
        default:
         break block5;
        };
       }
       $3_1 = 3;
       break block49;
      }
      $6();
      wasm2js_trap();
     }
     $7_1 = Math_fround(Math_fround(HEAPF32[($1_1 + 404 | 0) >> 2]) - Math_fround(HEAPF32[($2_1 + 404 | 0) >> 2]));
     $3_1 = 0;
    }
    HEAPF32[(($2_1 + ($3_1 << 2 | 0) | 0) + 412 | 0) >> 2] = Math_fround($7_1 - $6_1);
    break block10;
   }
   $0_1 = HEAP32[(($4_1 << 2 | 0) + 4828 | 0) >> 2] | 0;
   $0_1 = $0_1 << 2 | 0;
   $1_1 = $1_1 + $0_1 | 0;
   $6_1 = Math_fround(Math_fround($35($8_1 | 0, $4_1 | 0, $3_1 | 0, Math_fround($6_1))) + Math_fround(HEAPF32[($1_1 + 444 | 0) >> 2]));
   $487 = $0_1 + $2_1 | 0;
   if ((HEAPU8[((HEAP32[($2_1 + 500 | 0) >> 2] | 0) + 20 | 0) >> 0] | 0) & 2 | 0) {
    $497 = $6_1
   } else {
    $497 = Math_fround($6_1 + Math_fround(HEAPF32[($1_1 + 460 | 0) >> 2]))
   }
   HEAPF32[($487 + 412 | 0) >> 2] = $497;
  }
  global$0 = $9_1 + 16 | 0;
 }
 
 function $101($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = Math_fround($3_1);
  var $4_1 = 0, $5_1 = Math_fround(0);
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  $24($4_1 + 8 | 0 | 0, $0_1 | 0, HEAP32[(($1_1 << 2 | 0) + 4844 | 0) >> 2] | 0 | 0, $2_1 | 0);
  $5_1 = Math_fround(NaN);
  block2 : {
   block1 : {
    switch ((HEAPU8[($4_1 + 12 | 0) >> 0] | 0) - 1 | 0 | 0) {
    case 0:
     $5_1 = Math_fround(HEAPF32[($4_1 + 8 | 0) >> 2]);
     break block2;
    case 1:
     break block1;
    default:
     break block2;
    };
   }
   $5_1 = Math_fround(Math_fround(Math_fround(HEAPF32[($4_1 + 8 | 0) >> 2]) * $3_1) * Math_fround(.009999999776482582));
  }
  global$0 = $4_1 + 16 | 0;
  return Math_fround($5_1 == $5_1 ? $5_1 : Math_fround(0.0));
 }
 
 function $102($0_1, $1_1, $2_1, $2$hi, $3_1, $3$hi) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $2$hi = $2$hi | 0;
  $3_1 = $3_1 | 0;
  $3$hi = $3$hi | 0;
  var i64toi32_i32$4 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$3 = 0, i64toi32_i32$2 = 0, $16_1 = 0, $17_1 = 0, $4_1 = 0, $5_1 = 0, $7_1 = 0, $10_1 = 0, $12_1 = 0;
  $4_1 = $0_1;
  $5_1 = $1_1;
  i64toi32_i32$0 = $2$hi;
  $7_1 = $2_1;
  i64toi32_i32$2 = $2_1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = 0;
   $16_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $16_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
  }
  $10_1 = $16_1;
  i64toi32_i32$1 = $3$hi;
  $12_1 = $3_1;
  i64toi32_i32$0 = $3_1;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = 0;
   $17_1 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   $17_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
  }
  fimport$21($4_1 | 0, $5_1 | 0, 8 | 0, $7_1 | 0, $10_1 | 0, $12_1 | 0, $17_1 | 0);
 }
 
 function $103() {
  $58();
  wasm2js_trap();
 }
 
 function $104($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $11_1 = 0;
  if (!$0_1) {
   return 0 | 0
  }
  block : {
   if (!(($1_1 & -128 | 0 | 0) == (57216 | 0) | $1_1 >>> 0 <= 127 >>> 0 | 0)) {
    HEAP32[7676 >> 2] = 25;
    $11_1 = -1;
    break block;
   }
   HEAP8[$0_1 >> 0] = $1_1;
   $11_1 = 1;
  }
  return $11_1 | 0;
 }
 
 function $105($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $21_1 = 0, $29_1 = 0, $37_1 = 0, $45_1 = 0, $66_1 = 0, $74_1 = 0, $84_1 = 0;
  block3 : {
   block2 : {
    block1 : {
     block10 : {
      block9 : {
       block8 : {
        block7 : {
         block6 : {
          block5 : {
           block4 : {
            block : {
             switch ($1_1 - 9 | 0 | 0) {
             case 0:
              break block;
             case 1:
             case 4:
             case 14:
              break block1;
             case 2:
             case 5:
             case 11:
             case 15:
              break block2;
             case 3:
             case 10:
             case 12:
             case 13:
              break block3;
             case 6:
              break block4;
             case 7:
              break block5;
             case 8:
              break block6;
             case 9:
              break block7;
             case 16:
              break block8;
             case 17:
              break block9;
             default:
              break block10;
             };
            }
            $1_1 = HEAP32[$2_1 >> 2] | 0;
            HEAP32[$2_1 >> 2] = $1_1 + 4 | 0;
            HEAP32[$0_1 >> 2] = HEAP32[$1_1 >> 2] | 0;
            return;
           }
           $1_1 = HEAP32[$2_1 >> 2] | 0;
           HEAP32[$2_1 >> 2] = $1_1 + 4 | 0;
           i64toi32_i32$0 = HEAP16[$1_1 >> 1] | 0;
           i64toi32_i32$1 = i64toi32_i32$0 >> 31 | 0;
           $21_1 = i64toi32_i32$0;
           i64toi32_i32$0 = $0_1;
           HEAP32[i64toi32_i32$0 >> 2] = $21_1;
           HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
           return;
          }
          $1_1 = HEAP32[$2_1 >> 2] | 0;
          HEAP32[$2_1 >> 2] = $1_1 + 4 | 0;
          i64toi32_i32$1 = HEAPU16[$1_1 >> 1] | 0;
          i64toi32_i32$0 = 0;
          $29_1 = i64toi32_i32$1;
          i64toi32_i32$1 = $0_1;
          HEAP32[i64toi32_i32$1 >> 2] = $29_1;
          HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
          return;
         }
         $1_1 = HEAP32[$2_1 >> 2] | 0;
         HEAP32[$2_1 >> 2] = $1_1 + 4 | 0;
         i64toi32_i32$0 = HEAP8[$1_1 >> 0] | 0;
         i64toi32_i32$1 = i64toi32_i32$0 >> 31 | 0;
         $37_1 = i64toi32_i32$0;
         i64toi32_i32$0 = $0_1;
         HEAP32[i64toi32_i32$0 >> 2] = $37_1;
         HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
         return;
        }
        $1_1 = HEAP32[$2_1 >> 2] | 0;
        HEAP32[$2_1 >> 2] = $1_1 + 4 | 0;
        i64toi32_i32$1 = HEAPU8[$1_1 >> 0] | 0;
        i64toi32_i32$0 = 0;
        $45_1 = i64toi32_i32$1;
        i64toi32_i32$1 = $0_1;
        HEAP32[i64toi32_i32$1 >> 2] = $45_1;
        HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
        return;
       }
       $1_1 = ((HEAP32[$2_1 >> 2] | 0) + 7 | 0) & -8 | 0;
       HEAP32[$2_1 >> 2] = $1_1 + 8 | 0;
       HEAPF64[$0_1 >> 3] = +HEAPF64[$1_1 >> 3];
       return;
      }
      FUNCTION_TABLE[$3_1 | 0]($0_1, $2_1);
     }
     return;
    }
    $1_1 = HEAP32[$2_1 >> 2] | 0;
    HEAP32[$2_1 >> 2] = $1_1 + 4 | 0;
    i64toi32_i32$0 = HEAP32[$1_1 >> 2] | 0;
    i64toi32_i32$1 = i64toi32_i32$0 >> 31 | 0;
    $66_1 = i64toi32_i32$0;
    i64toi32_i32$0 = $0_1;
    HEAP32[i64toi32_i32$0 >> 2] = $66_1;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
    return;
   }
   $1_1 = HEAP32[$2_1 >> 2] | 0;
   HEAP32[$2_1 >> 2] = $1_1 + 4 | 0;
   i64toi32_i32$1 = HEAP32[$1_1 >> 2] | 0;
   i64toi32_i32$0 = 0;
   $74_1 = i64toi32_i32$1;
   i64toi32_i32$1 = $0_1;
   HEAP32[i64toi32_i32$1 >> 2] = $74_1;
   HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
   return;
  }
  $1_1 = ((HEAP32[$2_1 >> 2] | 0) + 7 | 0) & -8 | 0;
  HEAP32[$2_1 >> 2] = $1_1 + 8 | 0;
  i64toi32_i32$0 = HEAP32[$1_1 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
  $84_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $0_1;
  HEAP32[i64toi32_i32$0 >> 2] = $84_1;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
 }
 
 function $106($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $6_1 = Math_fround(0), $7_1 = Math_fround(0), $4_1 = 0, $5_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  $4_1 = 1;
  $5_1 = $0_1 + 124 | 0;
  $1_1 = ($0_1 + ($1_1 << 1 | 0) | 0) + 104 | 0;
  $1($3_1 + 8 | 0 | 0, $5_1 | 0, HEAPU16[$1_1 >> 1] | 0 | 0);
  block1 : {
   block : {
    $7_1 = Math_fround(HEAPF32[($3_1 + 8 | 0) >> 2]);
    $6_1 = Math_fround(HEAPF32[$2_1 >> 2]);
    if ($7_1 != $6_1) {
     if ($7_1 == $7_1) {
      $2_1 = HEAPU8[($2_1 + 4 | 0) >> 0] | 0;
      break block;
     }
     $4_1 = $6_1 != $6_1;
    }
    $2_1 = HEAPU8[($2_1 + 4 | 0) >> 0] | 0;
    if (!$4_1) {
     break block
    }
    if ((HEAPU8[($3_1 + 12 | 0) >> 0] | 0 | 0) == ($2_1 & 255 | 0 | 0)) {
     break block1
    }
   }
   $27($5_1 | 0, $1_1 | 0, Math_fround($6_1), $2_1 | 0);
   label : while (1) {
    $1_1 = HEAPU8[$0_1 >> 0] | 0;
    if ($1_1 & 4 | 0) {
     break block1
    }
    HEAP8[$0_1 >> 0] = $1_1 | 4 | 0;
    $1_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
    if ($1_1) {
     FUNCTION_TABLE[$1_1 | 0]($0_1)
    }
    HEAP32[($0_1 + 156 | 0) >> 2] = 2143289344;
    $0_1 = HEAP32[($0_1 + 484 | 0) >> 2] | 0;
    if ($0_1) {
     continue label
    }
    break label;
   };
  }
  global$0 = $3_1 + 16 | 0;
 }
 
 function $107($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $2_1 = 0, $4_1 = 0, $1_1 = 0, $30_1 = 0;
  $2_1 = HEAP32[$0_1 >> 2] | 0;
  label : while (1) {
   $3_1 = HEAP8[$2_1 >> 0] | 0;
   if ($57($3_1 | 0) | 0) {
    $4_1 = -1;
    $2_1 = $2_1 + 1 | 0;
    HEAP32[$0_1 >> 2] = $2_1;
    if ($1_1 >>> 0 <= 214748364 >>> 0) {
     $3_1 = $3_1 - 48 | 0;
     $4_1 = Math_imul($1_1, 10);
     $30_1 = ($3_1 | 0) > ($4_1 ^ 2147483647 | 0 | 0) ? -1 : $3_1 + $4_1 | 0;
    } else {
     $30_1 = $4_1
    }
    $1_1 = $30_1;
    continue label;
   }
   break label;
  };
  return $1_1 | 0;
 }
 
 function $108($0_1, $1_1, $2_1, $3_1, $4_1, $5_1, $6_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  $5_1 = $5_1 | 0;
  $6_1 = $6_1 | 0;
  var $7_1 = 0, $8_1 = 0, i64toi32_i32$1 = 0, $9_1 = 0, $10_1 = 0, $11_1 = 0, i64toi32_i32$2 = 0, $13_1 = 0, $12_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$3 = 0, $14_1 = 0, $15_1 = 0, $17_1 = 0, $25_1 = 0, $16_1 = 0, $18_1 = 0, $19_1 = 0, i64toi32_i32$4 = 0, $25$hi = 0, i64toi32_i32$5 = 0, $20_1 = 0, $21_1 = 0, $215_1 = 0, $320 = 0, $189_1 = 0, $22_1 = 0, $24_1 = 0, $154_1 = 0, $41_1 = 0, $42_1 = 0, $43_1 = 0, $44_1 = 0, $45_1 = 0, $522 = 0, $531 = 0, $560 = 0, $23_1 = 0, $280_1 = 0;
  $8_1 = global$0 - 80 | 0;
  global$0 = $8_1;
  HEAP32[($8_1 + 76 | 0) >> 2] = $1_1;
  $23_1 = $8_1 + 55 | 0;
  $20_1 = $8_1 + 56 | 0;
  block49 : {
   block48 : {
    block12 : {
     block : {
      label1 : while (1) {
       $13_1 = $1_1;
       if (($7_1 | 0) > ($14_1 ^ 2147483647 | 0 | 0)) {
        break block
       }
       $14_1 = $7_1 + $14_1 | 0;
       block14 : {
        block17 : {
         block7 : {
          $7_1 = $1_1;
          $9_1 = HEAPU8[$7_1 >> 0] | 0;
          if ($9_1) {
           label11 : while (1) {
            block2 : {
             block1 : {
              $1_1 = $9_1 & 255 | 0;
              if (!$1_1) {
               $1_1 = $7_1;
               break block1;
              }
              if (($1_1 | 0) != (37 | 0)) {
               break block2
              }
              $9_1 = $7_1;
              label : while (1) {
               if ((HEAPU8[($9_1 + 1 | 0) >> 0] | 0 | 0) != (37 | 0)) {
                $1_1 = $9_1;
                break block1;
               }
               $7_1 = $7_1 + 1 | 0;
               $10_1 = HEAPU8[($9_1 + 2 | 0) >> 0] | 0;
               $1_1 = $9_1 + 2 | 0;
               $9_1 = $1_1;
               if (($10_1 | 0) == (37 | 0)) {
                continue label
               }
               break label;
              };
             }
             $7_1 = $7_1 - $13_1 | 0;
             $24_1 = $14_1 ^ 2147483647 | 0;
             if (($7_1 | 0) > ($24_1 | 0)) {
              break block
             }
             if ($0_1) {
              $8($0_1 | 0, $13_1 | 0, $7_1 | 0)
             }
             if ($7_1) {
              continue label1
             }
             HEAP32[($8_1 + 76 | 0) >> 2] = $1_1;
             $7_1 = $1_1 + 1 | 0;
             $18_1 = -1;
             block3 : {
              $10_1 = HEAP8[($1_1 + 1 | 0) >> 0] | 0;
              if (!($57($10_1 | 0) | 0)) {
               break block3
              }
              if ((HEAPU8[($1_1 + 2 | 0) >> 0] | 0 | 0) != (36 | 0)) {
               break block3
              }
              $7_1 = $1_1 + 3 | 0;
              $18_1 = $10_1 - 48 | 0;
              $21_1 = 1;
             }
             HEAP32[($8_1 + 76 | 0) >> 2] = $7_1;
             $12_1 = 0;
             block4 : {
              $9_1 = HEAP8[$7_1 >> 0] | 0;
              $1_1 = $9_1 - 32 | 0;
              if ($1_1 >>> 0 > 31 >>> 0) {
               $10_1 = $7_1;
               break block4;
              }
              $10_1 = $7_1;
              $1_1 = 1 << $1_1 | 0;
              if (!($1_1 & 75913 | 0)) {
               break block4
              }
              label2 : while (1) {
               $10_1 = $7_1 + 1 | 0;
               HEAP32[($8_1 + 76 | 0) >> 2] = $10_1;
               $12_1 = $1_1 | $12_1 | 0;
               $9_1 = HEAP8[($7_1 + 1 | 0) >> 0] | 0;
               $1_1 = $9_1 - 32 | 0;
               if ($1_1 >>> 0 >= 32 >>> 0) {
                break block4
               }
               $7_1 = $10_1;
               $1_1 = 1 << $1_1 | 0;
               if ($1_1 & 75913 | 0) {
                continue label2
               }
               break label2;
              };
             }
             block8 : {
              if (($9_1 | 0) == (42 | 0)) {
               block6 : {
                block5 : {
                 $1_1 = HEAP8[($10_1 + 1 | 0) >> 0] | 0;
                 if (!($57($1_1 | 0) | 0)) {
                  break block5
                 }
                 if ((HEAPU8[($10_1 + 2 | 0) >> 0] | 0 | 0) != (36 | 0)) {
                  break block5
                 }
                 HEAP32[((($1_1 << 2 | 0) + $4_1 | 0) - 192 | 0) >> 2] = 10;
                 $9_1 = $10_1 + 3 | 0;
                 $21_1 = 1;
                 $154_1 = HEAP32[((((HEAP8[($10_1 + 1 | 0) >> 0] | 0) << 3 | 0) + $3_1 | 0) - 384 | 0) >> 2] | 0;
                 break block6;
                }
                if ($21_1) {
                 break block7
                }
                $9_1 = $10_1 + 1 | 0;
                if (!$0_1) {
                 HEAP32[($8_1 + 76 | 0) >> 2] = $9_1;
                 $21_1 = 0;
                 $19_1 = 0;
                 break block8;
                }
                $1_1 = HEAP32[$2_1 >> 2] | 0;
                HEAP32[$2_1 >> 2] = $1_1 + 4 | 0;
                $21_1 = 0;
                $154_1 = HEAP32[$1_1 >> 2] | 0;
               }
               $19_1 = $154_1;
               HEAP32[($8_1 + 76 | 0) >> 2] = $9_1;
               if (($19_1 | 0) >= (0 | 0)) {
                break block8
               }
               $19_1 = 0 - $19_1 | 0;
               $12_1 = $12_1 | 8192 | 0;
               break block8;
              }
              $19_1 = $107($8_1 + 76 | 0 | 0) | 0;
              if (($19_1 | 0) < (0 | 0)) {
               break block
              }
              $9_1 = HEAP32[($8_1 + 76 | 0) >> 2] | 0;
             }
             $7_1 = 0;
             $11_1 = -1;
             block9 : {
              if ((HEAPU8[$9_1 >> 0] | 0 | 0) != (46 | 0)) {
               $1_1 = $9_1;
               $189_1 = 0;
               break block9;
              }
              if ((HEAPU8[($9_1 + 1 | 0) >> 0] | 0 | 0) == (42 | 0)) {
               block11 : {
                block10 : {
                 $1_1 = HEAP8[($9_1 + 2 | 0) >> 0] | 0;
                 if (!($57($1_1 | 0) | 0)) {
                  break block10
                 }
                 if ((HEAPU8[($9_1 + 3 | 0) >> 0] | 0 | 0) != (36 | 0)) {
                  break block10
                 }
                 HEAP32[((($1_1 << 2 | 0) + $4_1 | 0) - 192 | 0) >> 2] = 10;
                 $1_1 = $9_1 + 4 | 0;
                 $215_1 = HEAP32[((((HEAP8[($9_1 + 2 | 0) >> 0] | 0) << 3 | 0) + $3_1 | 0) - 384 | 0) >> 2] | 0;
                 break block11;
                }
                if ($21_1) {
                 break block7
                }
                $1_1 = $9_1 + 2 | 0;
                $215_1 = 0;
                if (!$0_1) {
                 break block11
                }
                $10_1 = HEAP32[$2_1 >> 2] | 0;
                HEAP32[$2_1 >> 2] = $10_1 + 4 | 0;
                $215_1 = HEAP32[$10_1 >> 2] | 0;
               }
               $11_1 = $215_1;
               HEAP32[($8_1 + 76 | 0) >> 2] = $1_1;
               $189_1 = ($11_1 ^ -1 | 0) >>> 31 | 0;
               break block9;
              }
              HEAP32[($8_1 + 76 | 0) >> 2] = $9_1 + 1 | 0;
              $11_1 = $107($8_1 + 76 | 0 | 0) | 0;
              $1_1 = HEAP32[($8_1 + 76 | 0) >> 2] | 0;
              $189_1 = 1;
             }
             $15_1 = $189_1;
             label3 : while (1) {
              $17_1 = $7_1;
              $10_1 = 28;
              $16_1 = $1_1;
              $7_1 = HEAP8[$1_1 >> 0] | 0;
              if (($7_1 - 123 | 0) >>> 0 < -58 >>> 0) {
               break block12
              }
              $1_1 = $1_1 + 1 | 0;
              $7_1 = HEAPU8[(($7_1 + Math_imul($17_1, 58) | 0) + 5503 | 0) >> 0] | 0;
              if (($7_1 - 1 | 0) >>> 0 < 8 >>> 0) {
               continue label3
              }
              break label3;
             };
             HEAP32[($8_1 + 76 | 0) >> 2] = $1_1;
             block15 : {
              block13 : {
               if (($7_1 | 0) != (27 | 0)) {
                if (!$7_1) {
                 break block12
                }
                if (($18_1 | 0) >= (0 | 0)) {
                 HEAP32[($4_1 + ($18_1 << 2 | 0) | 0) >> 2] = $7_1;
                 i64toi32_i32$2 = $3_1 + ($18_1 << 3 | 0) | 0;
                 i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
                 i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
                 $280_1 = i64toi32_i32$0;
                 i64toi32_i32$0 = $8_1;
                 HEAP32[($8_1 + 64 | 0) >> 2] = $280_1;
                 HEAP32[($8_1 + 68 | 0) >> 2] = i64toi32_i32$1;
                 break block13;
                }
                if (!$0_1) {
                 break block14
                }
                $105($8_1 - -64 | 0 | 0, $7_1 | 0, $2_1 | 0, $6_1 | 0);
                break block15;
               }
               if (($18_1 | 0) >= (0 | 0)) {
                break block12
               }
              }
              $7_1 = 0;
              if (!$0_1) {
               continue label1
              }
             }
             $9_1 = $12_1 & -65537 | 0;
             $12_1 = $12_1 & 8192 | 0 ? $9_1 : $12_1;
             $18_1 = 0;
             $22_1 = 1167;
             $10_1 = $20_1;
             block19 : {
              block18 : {
               block46 : {
                block45 : {
                 block27 : {
                  block29 : {
                   block24 : {
                    block38 : {
                     block30 : {
                      block20 : {
                       block22 : {
                        block16 : {
                         block23 : {
                          block21 : {
                           block25 : {
                            block26 : {
                             $7_1 = HEAP8[$16_1 >> 0] | 0;
                             $7_1 = $17_1 ? (($7_1 & 15 | 0 | 0) == (3 | 0) ? $7_1 & -33 | 0 : $7_1) : $7_1;
                             switch ($7_1 - 88 | 0 | 0) {
                             case 0:
                             case 32:
                              break block16;
                             case 1:
                             case 2:
                             case 3:
                             case 4:
                             case 5:
                             case 6:
                             case 7:
                             case 8:
                             case 10:
                             case 16:
                             case 18:
                             case 19:
                             case 20:
                             case 21:
                             case 25:
                             case 26:
                             case 28:
                             case 30:
                             case 31:
                              break block17;
                             case 9:
                             case 13:
                             case 14:
                             case 15:
                              break block18;
                             case 11:
                              break block19;
                             case 12:
                             case 17:
                              break block20;
                             case 22:
                              break block21;
                             case 23:
                              break block22;
                             case 24:
                              break block23;
                             case 27:
                              break block24;
                             case 29:
                              break block25;
                             default:
                              break block26;
                             };
                            }
                            block28 : {
                             switch ($7_1 - 65 | 0 | 0) {
                             case 1:
                             case 3:
                              break block17;
                             case 0:
                             case 4:
                             case 5:
                             case 6:
                              break block18;
                             case 2:
                              break block27;
                             default:
                              break block28;
                             };
                            }
                            if (($7_1 | 0) == (83 | 0)) {
                             break block29
                            }
                            break block17;
                           }
                           i64toi32_i32$2 = $8_1;
                           i64toi32_i32$1 = HEAP32[($8_1 + 64 | 0) >> 2] | 0;
                           i64toi32_i32$0 = HEAP32[($8_1 + 68 | 0) >> 2] | 0;
                           $25_1 = i64toi32_i32$1;
                           $25$hi = i64toi32_i32$0;
                           $320 = 1167;
                           break block30;
                          }
                          $7_1 = 0;
                          block37 : {
                           switch ($17_1 & 255 | 0 | 0) {
                           case 0:
                            HEAP32[(HEAP32[($8_1 + 64 | 0) >> 2] | 0) >> 2] = $14_1;
                            continue label1;
                           case 1:
                            HEAP32[(HEAP32[($8_1 + 64 | 0) >> 2] | 0) >> 2] = $14_1;
                            continue label1;
                           case 2:
                            i64toi32_i32$1 = $14_1;
                            i64toi32_i32$0 = i64toi32_i32$1 >> 31 | 0;
                            i64toi32_i32$1 = HEAP32[($8_1 + 64 | 0) >> 2] | 0;
                            HEAP32[i64toi32_i32$1 >> 2] = $14_1;
                            HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
                            continue label1;
                           case 3:
                            HEAP16[(HEAP32[($8_1 + 64 | 0) >> 2] | 0) >> 1] = $14_1;
                            continue label1;
                           case 4:
                            HEAP8[(HEAP32[($8_1 + 64 | 0) >> 2] | 0) >> 0] = $14_1;
                            continue label1;
                           case 6:
                            HEAP32[(HEAP32[($8_1 + 64 | 0) >> 2] | 0) >> 2] = $14_1;
                            continue label1;
                           case 7:
                            break block37;
                           default:
                            continue label1;
                           };
                          }
                          i64toi32_i32$1 = $14_1;
                          i64toi32_i32$0 = i64toi32_i32$1 >> 31 | 0;
                          i64toi32_i32$1 = HEAP32[($8_1 + 64 | 0) >> 2] | 0;
                          HEAP32[i64toi32_i32$1 >> 2] = $14_1;
                          HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
                          continue label1;
                         }
                         $11_1 = $11_1 >>> 0 <= 8 >>> 0 ? 8 : $11_1;
                         $12_1 = $12_1 | 8 | 0;
                         $7_1 = 120;
                        }
                        $13_1 = $20_1;
                        i64toi32_i32$2 = $8_1;
                        i64toi32_i32$0 = HEAP32[($8_1 + 64 | 0) >> 2] | 0;
                        i64toi32_i32$1 = HEAP32[($8_1 + 68 | 0) >> 2] | 0;
                        $25_1 = i64toi32_i32$0;
                        $25$hi = i64toi32_i32$1;
                        if (!!(i64toi32_i32$0 | i64toi32_i32$1 | 0)) {
                         $16_1 = $7_1 & 32 | 0;
                         label4 : while (1) {
                          $13_1 = $13_1 - 1 | 0;
                          i64toi32_i32$1 = $25$hi;
                          HEAP8[$13_1 >> 0] = HEAPU8[(($25_1 & 15 | 0) + 6032 | 0) >> 0] | 0 | $16_1 | 0;
                          i64toi32_i32$2 = $25_1;
                          i64toi32_i32$0 = 0;
                          i64toi32_i32$3 = 15;
                          $9_1 = i64toi32_i32$1 >>> 0 > i64toi32_i32$0 >>> 0 | ((i64toi32_i32$1 | 0) == (i64toi32_i32$0 | 0) & i64toi32_i32$2 >>> 0 > i64toi32_i32$3 >>> 0 | 0) | 0;
                          i64toi32_i32$2 = i64toi32_i32$1;
                          i64toi32_i32$2 = i64toi32_i32$1;
                          i64toi32_i32$3 = $25_1;
                          i64toi32_i32$1 = 0;
                          i64toi32_i32$0 = 4;
                          i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
                          if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
                           i64toi32_i32$1 = 0;
                           $41_1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
                          } else {
                           i64toi32_i32$1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
                           $41_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$3 >>> i64toi32_i32$4 | 0) | 0;
                          }
                          $25_1 = $41_1;
                          $25$hi = i64toi32_i32$1;
                          if ($9_1) {
                           continue label4
                          }
                          break label4;
                         };
                        }
                        i64toi32_i32$2 = $8_1;
                        i64toi32_i32$1 = HEAP32[($8_1 + 64 | 0) >> 2] | 0;
                        i64toi32_i32$3 = HEAP32[($8_1 + 68 | 0) >> 2] | 0;
                        if (!($12_1 & 8 | 0) | !(i64toi32_i32$1 | i64toi32_i32$3 | 0) | 0) {
                         break block38
                        }
                        $22_1 = ($7_1 >>> 4 | 0) + 1167 | 0;
                        $18_1 = 2;
                        break block38;
                       }
                       $7_1 = $20_1;
                       i64toi32_i32$2 = $8_1;
                       i64toi32_i32$3 = HEAP32[($8_1 + 64 | 0) >> 2] | 0;
                       i64toi32_i32$1 = HEAP32[($8_1 + 68 | 0) >> 2] | 0;
                       $25_1 = i64toi32_i32$3;
                       $25$hi = i64toi32_i32$1;
                       if (!!(i64toi32_i32$3 | i64toi32_i32$1 | 0)) {
                        label5 : while (1) {
                         $7_1 = $7_1 - 1 | 0;
                         i64toi32_i32$1 = $25$hi;
                         HEAP8[$7_1 >> 0] = $25_1 & 7 | 0 | 48 | 0;
                         i64toi32_i32$2 = $25_1;
                         i64toi32_i32$3 = 0;
                         i64toi32_i32$0 = 7;
                         $13_1 = i64toi32_i32$1 >>> 0 > i64toi32_i32$3 >>> 0 | ((i64toi32_i32$1 | 0) == (i64toi32_i32$3 | 0) & i64toi32_i32$2 >>> 0 > i64toi32_i32$0 >>> 0 | 0) | 0;
                         i64toi32_i32$2 = i64toi32_i32$1;
                         i64toi32_i32$2 = i64toi32_i32$1;
                         i64toi32_i32$0 = $25_1;
                         i64toi32_i32$1 = 0;
                         i64toi32_i32$3 = 3;
                         i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
                         if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
                          i64toi32_i32$1 = 0;
                          $42_1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
                         } else {
                          i64toi32_i32$1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
                          $42_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
                         }
                         $25_1 = $42_1;
                         $25$hi = i64toi32_i32$1;
                         if ($13_1) {
                          continue label5
                         }
                         break label5;
                        }
                       }
                       $13_1 = $7_1;
                       if (!($12_1 & 8 | 0)) {
                        break block38
                       }
                       $7_1 = $20_1 - $7_1 | 0;
                       $11_1 = ($7_1 | 0) < ($11_1 | 0) ? $11_1 : $7_1 + 1 | 0;
                       break block38;
                      }
                      i64toi32_i32$2 = $8_1;
                      i64toi32_i32$1 = HEAP32[($8_1 + 64 | 0) >> 2] | 0;
                      i64toi32_i32$0 = HEAP32[($8_1 + 68 | 0) >> 2] | 0;
                      $25_1 = i64toi32_i32$1;
                      $25$hi = i64toi32_i32$0;
                      i64toi32_i32$2 = i64toi32_i32$1;
                      i64toi32_i32$1 = 0;
                      i64toi32_i32$3 = 0;
                      if ((i64toi32_i32$0 | 0) < (i64toi32_i32$1 | 0)) {
                       $43_1 = 1
                      } else {
                       if ((i64toi32_i32$0 | 0) <= (i64toi32_i32$1 | 0)) {
                        if (i64toi32_i32$2 >>> 0 >= i64toi32_i32$3 >>> 0) {
                         $44_1 = 0
                        } else {
                         $44_1 = 1
                        }
                        $45_1 = $44_1;
                       } else {
                        $45_1 = 0
                       }
                       $43_1 = $45_1;
                      }
                      if ($43_1) {
                       i64toi32_i32$2 = $25$hi;
                       i64toi32_i32$2 = 0;
                       i64toi32_i32$3 = 0;
                       i64toi32_i32$0 = $25$hi;
                       i64toi32_i32$1 = $25_1;
                       i64toi32_i32$4 = i64toi32_i32$3 - i64toi32_i32$1 | 0;
                       i64toi32_i32$5 = (i64toi32_i32$3 >>> 0 < i64toi32_i32$1 >>> 0) + i64toi32_i32$0 | 0;
                       i64toi32_i32$5 = i64toi32_i32$2 - i64toi32_i32$5 | 0;
                       $25_1 = i64toi32_i32$4;
                       $25$hi = i64toi32_i32$5;
                       i64toi32_i32$3 = $8_1;
                       HEAP32[($8_1 + 64 | 0) >> 2] = i64toi32_i32$4;
                       HEAP32[($8_1 + 68 | 0) >> 2] = i64toi32_i32$5;
                       $18_1 = 1;
                       $320 = 1167;
                       break block30;
                      }
                      if ($12_1 & 2048 | 0) {
                       $18_1 = 1;
                       $320 = 1168;
                       break block30;
                      }
                      $18_1 = $12_1 & 1 | 0;
                      $320 = $18_1 ? 1169 : 1167;
                     }
                     $22_1 = $320;
                     i64toi32_i32$5 = $25$hi;
                     $13_1 = $41($25_1 | 0, i64toi32_i32$5 | 0, $20_1 | 0) | 0;
                    }
                    if (($11_1 | 0) < (0 | 0) ? $15_1 : 0) {
                     break block
                    }
                    $12_1 = $15_1 ? $12_1 & -65537 | 0 : $12_1;
                    i64toi32_i32$2 = $8_1;
                    i64toi32_i32$5 = HEAP32[($8_1 + 64 | 0) >> 2] | 0;
                    i64toi32_i32$3 = HEAP32[($8_1 + 68 | 0) >> 2] | 0;
                    $25_1 = i64toi32_i32$5;
                    $25$hi = i64toi32_i32$3;
                    i64toi32_i32$2 = i64toi32_i32$5;
                    i64toi32_i32$5 = 0;
                    i64toi32_i32$1 = 0;
                    if (!((i64toi32_i32$2 | 0) != (i64toi32_i32$1 | 0) | (i64toi32_i32$3 | 0) != (i64toi32_i32$5 | 0) | 0 | $11_1 | 0)) {
                     $13_1 = $20_1;
                     $11_1 = 0;
                     break block17;
                    }
                    i64toi32_i32$2 = $25$hi;
                    $7_1 = !($25_1 | i64toi32_i32$2 | 0) + ($20_1 - $13_1 | 0) | 0;
                    $11_1 = ($7_1 | 0) < ($11_1 | 0) ? $11_1 : $7_1;
                    break block17;
                   }
                   $12_1 = 0;
                   block44 : {
                    $10_1 = $11_1 >>> 0 >= 2147483647 >>> 0 ? 2147483647 : $11_1;
                    $17_1 = $10_1;
                    $16_1 = ($10_1 | 0) != (0 | 0);
                    block41 : {
                     block43 : {
                      block40 : {
                       block39 : {
                        $7_1 = HEAP32[($8_1 + 64 | 0) >> 2] | 0;
                        $13_1 = $7_1 ? $7_1 : 4750;
                        $15_1 = $13_1;
                        if (!($13_1 & 3 | 0) | !$10_1 | 0) {
                         break block39
                        }
                        label6 : while (1) {
                         $12_1 = HEAPU8[$15_1 >> 0] | 0;
                         if (!$12_1) {
                          break block40
                         }
                         $17_1 = $17_1 - 1 | 0;
                         $16_1 = ($17_1 | 0) != (0 | 0);
                         $15_1 = $15_1 + 1 | 0;
                         if (!($15_1 & 3 | 0)) {
                          break block39
                         }
                         if ($17_1) {
                          continue label6
                         }
                         break label6;
                        };
                       }
                       if (!$16_1) {
                        break block41
                       }
                       block42 : {
                        if (!(!(HEAPU8[$15_1 >> 0] | 0) | $17_1 >>> 0 < 4 >>> 0 | 0)) {
                         label7 : while (1) {
                          $7_1 = HEAP32[$15_1 >> 2] | 0;
                          if ((($7_1 ^ -1 | 0) & ($7_1 - 16843009 | 0) | 0) & -2139062144 | 0) {
                           break block42
                          }
                          $15_1 = $15_1 + 4 | 0;
                          $17_1 = $17_1 - 4 | 0;
                          if ($17_1 >>> 0 > 3 >>> 0) {
                           continue label7
                          }
                          break label7;
                         }
                        }
                        if (!$17_1) {
                         break block41
                        }
                       }
                       $522 = 0;
                       break block43;
                      }
                      $522 = 1;
                     }
                     $16_1 = $522;
                     label8 : while (1) {
                      if (!$16_1) {
                       $12_1 = HEAPU8[$15_1 >> 0] | 0;
                       $16_1 = 1;
                       continue label8;
                      }
                      $531 = $15_1;
                      if (!$12_1) {
                       break block44
                      }
                      $15_1 = $15_1 + 1 | 0;
                      $17_1 = $17_1 - 1 | 0;
                      if (!$17_1) {
                       break block41
                      }
                      $16_1 = 0;
                      continue label8;
                     };
                    }
                    $531 = 0;
                   }
                   $7_1 = $531;
                   $7_1 = $7_1 ? $7_1 - $13_1 | 0 : $10_1;
                   $10_1 = $7_1 + $13_1 | 0;
                   if (($11_1 | 0) >= (0 | 0)) {
                    $12_1 = $9_1;
                    $11_1 = $7_1;
                    break block17;
                   }
                   $12_1 = $9_1;
                   $11_1 = $7_1;
                   if (HEAPU8[$10_1 >> 0] | 0) {
                    break block
                   }
                   break block17;
                  }
                  if ($11_1) {
                   $560 = HEAP32[($8_1 + 64 | 0) >> 2] | 0;
                   break block45;
                  }
                  $7_1 = 0;
                  $11($0_1 | 0, 32 | 0, $19_1 | 0, 0 | 0, $12_1 | 0);
                  break block46;
                 }
                 HEAP32[($8_1 + 12 | 0) >> 2] = 0;
                 i64toi32_i32$1 = $8_1;
                 i64toi32_i32$2 = HEAP32[($8_1 + 64 | 0) >> 2] | 0;
                 i64toi32_i32$3 = HEAP32[($8_1 + 68 | 0) >> 2] | 0;
                 HEAP32[($8_1 + 8 | 0) >> 2] = i64toi32_i32$2;
                 $7_1 = $8_1 + 8 | 0;
                 HEAP32[($8_1 + 64 | 0) >> 2] = $7_1;
                 $11_1 = -1;
                 $560 = $7_1;
                }
                $9_1 = $560;
                $7_1 = 0;
                block47 : {
                 label9 : while (1) {
                  $13_1 = HEAP32[$9_1 >> 2] | 0;
                  if (!$13_1) {
                   break block47
                  }
                  $10_1 = $104($8_1 + 4 | 0 | 0, $13_1 | 0) | 0;
                  $13_1 = ($10_1 | 0) < (0 | 0);
                  if (!($13_1 | $10_1 >>> 0 > ($11_1 - $7_1 | 0) >>> 0 | 0)) {
                   $9_1 = $9_1 + 4 | 0;
                   $7_1 = $7_1 + $10_1 | 0;
                   if ($11_1 >>> 0 > $7_1 >>> 0) {
                    continue label9
                   }
                   break block47;
                  }
                  break label9;
                 };
                 if ($13_1) {
                  break block48
                 }
                }
                $10_1 = 61;
                if (($7_1 | 0) < (0 | 0)) {
                 break block12
                }
                $11($0_1 | 0, 32 | 0, $19_1 | 0, $7_1 | 0, $12_1 | 0);
                if (!$7_1) {
                 $7_1 = 0;
                 break block46;
                }
                $10_1 = 0;
                $9_1 = HEAP32[($8_1 + 64 | 0) >> 2] | 0;
                label10 : while (1) {
                 $13_1 = HEAP32[$9_1 >> 2] | 0;
                 if (!$13_1) {
                  break block46
                 }
                 $13_1 = $104($8_1 + 4 | 0 | 0, $13_1 | 0) | 0;
                 $10_1 = $13_1 + $10_1 | 0;
                 if ($10_1 >>> 0 > $7_1 >>> 0) {
                  break block46
                 }
                 $8($0_1 | 0, $8_1 + 4 | 0 | 0, $13_1 | 0);
                 $9_1 = $9_1 + 4 | 0;
                 if ($7_1 >>> 0 > $10_1 >>> 0) {
                  continue label10
                 }
                 break label10;
                };
               }
               $11($0_1 | 0, 32 | 0, $19_1 | 0, $7_1 | 0, $12_1 ^ 8192 | 0 | 0);
               $7_1 = ($7_1 | 0) < ($19_1 | 0) ? $19_1 : $7_1;
               continue label1;
              }
              if (($11_1 | 0) < (0 | 0) ? $15_1 : 0) {
               break block
              }
              $10_1 = 61;
              $7_1 = FUNCTION_TABLE[$5_1 | 0]($0_1, +HEAPF64[($8_1 + 64 | 0) >> 3], $19_1, $11_1, $12_1, $7_1) | 0;
              if (($7_1 | 0) >= (0 | 0)) {
               continue label1
              }
              break block12;
             }
             i64toi32_i32$1 = $8_1;
             i64toi32_i32$3 = HEAP32[($8_1 + 64 | 0) >> 2] | 0;
             i64toi32_i32$2 = HEAP32[($8_1 + 68 | 0) >> 2] | 0;
             HEAP8[($8_1 + 55 | 0) >> 0] = i64toi32_i32$3;
             $11_1 = 1;
             $13_1 = $23_1;
             $12_1 = $9_1;
             break block17;
            }
            $9_1 = HEAPU8[($7_1 + 1 | 0) >> 0] | 0;
            $7_1 = $7_1 + 1 | 0;
            continue label11;
           }
          }
          if ($0_1) {
           break block49
          }
          if (!$21_1) {
           break block14
          }
          $7_1 = 1;
          label12 : while (1) {
           $0_1 = HEAP32[($4_1 + ($7_1 << 2 | 0) | 0) >> 2] | 0;
           if ($0_1) {
            $105($3_1 + ($7_1 << 3 | 0) | 0 | 0, $0_1 | 0, $2_1 | 0, $6_1 | 0);
            $14_1 = 1;
            $7_1 = $7_1 + 1 | 0;
            if (($7_1 | 0) != (10 | 0)) {
             continue label12
            }
            break block49;
           }
           break label12;
          };
          $14_1 = 1;
          if ($7_1 >>> 0 >= 10 >>> 0) {
           break block49
          }
          label13 : while (1) {
           if (HEAP32[($4_1 + ($7_1 << 2 | 0) | 0) >> 2] | 0) {
            break block7
           }
           $7_1 = $7_1 + 1 | 0;
           if (($7_1 | 0) != (10 | 0)) {
            continue label13
           }
           break label13;
          };
          break block49;
         }
         $10_1 = 28;
         break block12;
        }
        $16_1 = $10_1 - $13_1 | 0;
        $9_1 = ($11_1 | 0) > ($16_1 | 0) ? $11_1 : $16_1;
        if (($9_1 | 0) > ($18_1 ^ 2147483647 | 0 | 0)) {
         break block
        }
        $10_1 = 61;
        $11_1 = $9_1 + $18_1 | 0;
        $7_1 = ($11_1 | 0) < ($19_1 | 0) ? $19_1 : $11_1;
        if (($7_1 | 0) > ($24_1 | 0)) {
         break block12
        }
        $11($0_1 | 0, 32 | 0, $7_1 | 0, $11_1 | 0, $12_1 | 0);
        $8($0_1 | 0, $22_1 | 0, $18_1 | 0);
        $11($0_1 | 0, 48 | 0, $7_1 | 0, $11_1 | 0, $12_1 ^ 65536 | 0 | 0);
        $11($0_1 | 0, 48 | 0, $9_1 | 0, $16_1 | 0, 0 | 0);
        $8($0_1 | 0, $13_1 | 0, $16_1 | 0);
        $11($0_1 | 0, 32 | 0, $7_1 | 0, $11_1 | 0, $12_1 ^ 8192 | 0 | 0);
        continue label1;
       }
       break label1;
      };
      $14_1 = 0;
      break block49;
     }
     $10_1 = 61;
    }
    HEAP32[7676 >> 2] = $10_1;
   }
   $14_1 = -1;
  }
  global$0 = $8_1 + 80 | 0;
  return $14_1 | 0;
 }
 
 function $109($0_1, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  var $5_1 = 0, i64toi32_i32$0 = 0, $58_1 = 0, $6_1 = 0, $7_1 = 0, $8_1 = 0, $87_1 = 0;
  $5_1 = global$0 - 208 | 0;
  global$0 = $5_1;
  HEAP32[($5_1 + 204 | 0) >> 2] = $2_1;
  $2_1 = $5_1 + 160 | 0;
  $12($2_1 | 0, 0 | 0, 40 | 0) | 0;
  HEAP32[($5_1 + 200 | 0) >> 2] = HEAP32[($5_1 + 204 | 0) >> 2] | 0;
  block : {
   if (($108(0 | 0, $1_1 | 0, $5_1 + 200 | 0 | 0, $5_1 + 80 | 0 | 0, $2_1 | 0, $3_1 | 0, $4_1 | 0) | 0 | 0) < (0 | 0)) {
    $4_1 = -1;
    break block;
   }
   $6_1 = (HEAP32[($0_1 + 76 | 0) >> 2] | 0 | 0) >= (0 | 0) ? 1 : $6_1;
   $7_1 = HEAP32[$0_1 >> 2] | 0;
   if ((HEAP32[($0_1 + 72 | 0) >> 2] | 0 | 0) <= (0 | 0)) {
    HEAP32[$0_1 >> 2] = $7_1 & -33 | 0
   }
   block3 : {
    block2 : {
     block1 : {
      if (!(HEAP32[($0_1 + 48 | 0) >> 2] | 0)) {
       HEAP32[($0_1 + 48 | 0) >> 2] = 80;
       HEAP32[($0_1 + 28 | 0) >> 2] = 0;
       i64toi32_i32$0 = 0;
       HEAP32[($0_1 + 16 | 0) >> 2] = 0;
       HEAP32[($0_1 + 20 | 0) >> 2] = i64toi32_i32$0;
       $8_1 = HEAP32[($0_1 + 44 | 0) >> 2] | 0;
       HEAP32[($0_1 + 44 | 0) >> 2] = $5_1;
       break block1;
      }
      if (HEAP32[($0_1 + 16 | 0) >> 2] | 0) {
       break block2
      }
     }
     $58_1 = -1;
     if ($127($0_1 | 0) | 0) {
      break block3
     }
    }
    $58_1 = $108($0_1 | 0, $1_1 | 0, $5_1 + 200 | 0 | 0, $5_1 + 80 | 0 | 0, $5_1 + 160 | 0 | 0, $3_1 | 0, $4_1 | 0) | 0;
   }
   $2_1 = $58_1;
   if ($8_1) {
    FUNCTION_TABLE[HEAP32[($0_1 + 36 | 0) >> 2] | 0 | 0]($0_1, 0, 0) | 0;
    HEAP32[($0_1 + 48 | 0) >> 2] = 0;
    HEAP32[($0_1 + 44 | 0) >> 2] = $8_1;
    HEAP32[($0_1 + 28 | 0) >> 2] = 0;
    $1_1 = HEAP32[($0_1 + 20 | 0) >> 2] | 0;
    i64toi32_i32$0 = 0;
    HEAP32[($0_1 + 16 | 0) >> 2] = 0;
    HEAP32[($0_1 + 20 | 0) >> 2] = i64toi32_i32$0;
    $2_1 = $1_1 ? $2_1 : -1;
   }
   $87_1 = $0_1;
   $0_1 = HEAP32[$0_1 >> 2] | 0;
   HEAP32[$87_1 >> 2] = $0_1 | ($7_1 & 32 | 0) | 0;
   $4_1 = $0_1 & 32 | 0 ? -1 : $2_1;
   if (!$6_1) {
    break block
   }
  }
  global$0 = $5_1 + 208 | 0;
  return $4_1 | 0;
 }
 
 function $110($0_1, $1_1) {
  $0_1 = +$0_1;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, i64toi32_i32$2 = 0, i64toi32_i32$4 = 0, $2_1 = 0, $3_1 = 0, $13_1 = 0, $26_1 = 0, $39_1 = 0.0, $3$hi = 0, $14_1 = 0;
  wasm2js_scratch_store_f64(+$0_1);
  i64toi32_i32$0 = wasm2js_scratch_load_i32(1 | 0) | 0;
  $3_1 = wasm2js_scratch_load_i32(0 | 0) | 0;
  $3$hi = i64toi32_i32$0;
  i64toi32_i32$2 = $3_1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 52;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = 0;
   $13_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $13_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
  }
  $2_1 = $13_1 & 2047 | 0;
  if (($2_1 | 0) != (2047 | 0)) {
   if (!$2_1) {
    $14_1 = $1_1;
    if ($0_1 == 0.0) {
     $26_1 = 0
    } else {
     $0_1 = +$110(+($0_1 * 18446744073709551615.0), $1_1 | 0);
     $26_1 = (HEAP32[$1_1 >> 2] | 0) + -64 | 0;
    }
    HEAP32[$14_1 >> 2] = $26_1;
    return +$0_1;
   }
   HEAP32[$1_1 >> 2] = $2_1 - 1022 | 0;
   i64toi32_i32$1 = $3$hi;
   i64toi32_i32$0 = $3_1;
   i64toi32_i32$2 = -2146435073;
   i64toi32_i32$3 = -1;
   i64toi32_i32$2 = i64toi32_i32$1 & i64toi32_i32$2 | 0;
   i64toi32_i32$1 = i64toi32_i32$0 & i64toi32_i32$3 | 0;
   i64toi32_i32$0 = 1071644672;
   i64toi32_i32$3 = 0;
   i64toi32_i32$0 = i64toi32_i32$2 | i64toi32_i32$0 | 0;
   wasm2js_scratch_store_i32(0 | 0, i64toi32_i32$1 | i64toi32_i32$3 | 0 | 0);
   wasm2js_scratch_store_i32(1 | 0, i64toi32_i32$0 | 0);
   $39_1 = +wasm2js_scratch_load_f64();
  } else {
   $39_1 = $0_1
  }
  return +$39_1;
 }
 
 function $111($0_1) {
  $0_1 = $0_1 | 0;
  if (!$0_1) {
   return 0 | 0
  }
  HEAP32[7676 >> 2] = $0_1;
  return -1 | 0;
 }
 
 function $112($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $6_1 = Math_fround(0), $7_1 = Math_fround(0), $4_1 = 0, $5_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  $4_1 = 1;
  $5_1 = $0_1 + 124 | 0;
  $1_1 = ($0_1 + ($1_1 << 1 | 0) | 0) + 68 | 0;
  $1($3_1 + 8 | 0 | 0, $5_1 | 0, HEAPU16[$1_1 >> 1] | 0 | 0);
  block1 : {
   block : {
    $7_1 = Math_fround(HEAPF32[($3_1 + 8 | 0) >> 2]);
    $6_1 = Math_fround(HEAPF32[$2_1 >> 2]);
    if ($7_1 != $6_1) {
     if ($7_1 == $7_1) {
      $2_1 = HEAPU8[($2_1 + 4 | 0) >> 0] | 0;
      break block;
     }
     $4_1 = $6_1 != $6_1;
    }
    $2_1 = HEAPU8[($2_1 + 4 | 0) >> 0] | 0;
    if (!$4_1) {
     break block
    }
    if ((HEAPU8[($3_1 + 12 | 0) >> 0] | 0 | 0) == ($2_1 & 255 | 0 | 0)) {
     break block1
    }
   }
   $27($5_1 | 0, $1_1 | 0, Math_fround($6_1), $2_1 | 0);
   label : while (1) {
    $1_1 = HEAPU8[$0_1 >> 0] | 0;
    if ($1_1 & 4 | 0) {
     break block1
    }
    HEAP8[$0_1 >> 0] = $1_1 | 4 | 0;
    $1_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
    if ($1_1) {
     FUNCTION_TABLE[$1_1 | 0]($0_1)
    }
    HEAP32[($0_1 + 156 | 0) >> 2] = 2143289344;
    $0_1 = HEAP32[($0_1 + 484 | 0) >> 2] | 0;
    if ($0_1) {
     continue label
    }
    break label;
   };
  }
  global$0 = $3_1 + 16 | 0;
 }
 
 function $113() {
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  fimport$28(7636 | 0, 3624 | 0);
  fimport$27(7637 | 0, 2826 | 0, 1 | 0, 1 | 0, 0 | 0);
  fimport$4(7638 | 0, 2429 | 0, 1 | 0, -128 | 0, 127 | 0);
  fimport$4(7639 | 0, 2422 | 0, 1 | 0, -128 | 0, 127 | 0);
  fimport$4(7640 | 0, 2420 | 0, 1 | 0, 0 | 0, 255 | 0);
  fimport$4(7641 | 0, 1300 | 0, 2 | 0, -32768 | 0, 32767 | 0);
  fimport$4(7642 | 0, 1291 | 0, 2 | 0, 0 | 0, 65535 | 0);
  fimport$4(7643 | 0, 1329 | 0, 4 | 0, -2147483648 | 0, 2147483647 | 0);
  fimport$4(7644 | 0, 1320 | 0, 4 | 0, 0 | 0, -1 | 0);
  fimport$4(7645 | 0, 3192 | 0, 4 | 0, -2147483648 | 0, 2147483647 | 0);
  fimport$4(7646 | 0, 3183 | 0, 4 | 0, 0 | 0, -1 | 0);
  i64toi32_i32$0 = -2147483648;
  i64toi32_i32$1 = 2147483647;
  $102(7647 | 0, 2063 | 0, 0 | 0, i64toi32_i32$0 | 0, -1 | 0, i64toi32_i32$1 | 0);
  i64toi32_i32$1 = 0;
  i64toi32_i32$0 = -1;
  $102(7648 | 0, 2062 | 0, 0 | 0, i64toi32_i32$1 | 0, -1 | 0, i64toi32_i32$0 | 0);
  fimport$13(7649 | 0, 2056 | 0, 4 | 0);
  fimport$13(7650 | 0, 3572 | 0, 8 | 0);
  fimport$14(7651 | 0, 3236 | 0);
  fimport$14(7652 | 0, 4377 | 0);
  fimport$8(7653 | 0, 4 | 0, 3223 | 0);
  fimport$8(7654 | 0, 2 | 0, 3248 | 0);
  fimport$8(7655 | 0, 4 | 0, 3263 | 0);
  fimport$26(7656 | 0, 2831 | 0);
  fimport$1(7657 | 0, 0 | 0, 4308 | 0);
  fimport$1(7658 | 0, 0 | 0, 4410 | 0);
  fimport$1(7659 | 0, 1 | 0, 4338 | 0);
  fimport$1(7660 | 0, 2 | 0, 3940 | 0);
  fimport$1(7661 | 0, 3 | 0, 3971 | 0);
  fimport$1(7662 | 0, 4 | 0, 4011 | 0);
  fimport$1(7663 | 0, 5 | 0, 4040 | 0);
  fimport$1(7664 | 0, 4 | 0, 4447 | 0);
  fimport$1(7665 | 0, 5 | 0, 4477 | 0);
  fimport$1(7658 | 0, 0 | 0, 4142 | 0);
  fimport$1(7659 | 0, 1 | 0, 4109 | 0);
  fimport$1(7660 | 0, 2 | 0, 4208 | 0);
  fimport$1(7661 | 0, 3 | 0, 4174 | 0);
  fimport$1(7662 | 0, 4 | 0, 4275 | 0);
  fimport$1(7663 | 0, 5 | 0, 4241 | 0);
  fimport$1(7666 | 0, 6 | 0, 4078 | 0);
  fimport$1(7667 | 0, 7 | 0, 4516 | 0);
 }
 
 function $114($0_1) {
  $0_1 = $0_1 | 0;
  HEAP32[$0_1 >> 2] = 4980;
  if (HEAPU8[($0_1 + 4 | 0) >> 0] | 0) {
   $72(HEAP32[($0_1 + 8 | 0) >> 2] | 0 | 0, 2045 | 0)
  }
  fimport$6(HEAP32[($0_1 + 8 | 0) >> 2] | 0 | 0);
  return $0_1 | 0;
 }
 
 function $115($0_1) {
  $0_1 = $0_1 | 0;
  wasm2js_trap();
 }
 
 function $116($0_1) {
  $0_1 = $0_1 | 0;
  HEAP32[$0_1 >> 2] = 5100;
  if (HEAPU8[($0_1 + 4 | 0) >> 0] | 0) {
   $72(HEAP32[($0_1 + 8 | 0) >> 2] | 0 | 0, 2045 | 0)
  }
  fimport$6(HEAP32[($0_1 + 8 | 0) >> 2] | 0 | 0);
  return $0_1 | 0;
 }
 
 function $117($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0;
  $2_1 = $0(4 | 0) | 0;
  HEAP32[$2_1 >> 2] = $1_1;
  $3_1 = $0(4 | 0) | 0;
  HEAP32[$3_1 >> 2] = $1_1;
  fimport$7(7587 | 0, $0_1 | 0, 7650 | 0, 5242 | 0, 193 | 0, $2_1 | 0, 7650 | 0, 5246 | 0, 194 | 0, $3_1 | 0);
 }
 
 function $118($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $22_1 = 0, $12_1 = 0, $13_1 = 0;
  $3_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
  $1_1 = $1_1 + ($3_1 >> 1 | 0) | 0;
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  $12_1 = $1_1;
  $13_1 = $2_1;
  if ($3_1 & 1 | 0) {
   $22_1 = HEAP32[((HEAP32[$1_1 >> 2] | 0) + $0_1 | 0) >> 2] | 0
  } else {
   $22_1 = $0_1
  }
  return FUNCTION_TABLE[$22_1 | 0]($12_1, $13_1) | 0 | 0;
 }
 
 function $119($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var $4_1 = 0, $24_1 = 0, $13_1 = 0, $14_1 = 0, $15_1 = 0;
  $4_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
  $1_1 = $1_1 + ($4_1 >> 1 | 0) | 0;
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  $13_1 = $1_1;
  $14_1 = $2_1;
  $15_1 = $3_1;
  if ($4_1 & 1 | 0) {
   $24_1 = HEAP32[((HEAP32[$1_1 >> 2] | 0) + $0_1 | 0) >> 2] | 0
  } else {
   $24_1 = $0_1
  }
  FUNCTION_TABLE[$24_1 | 0]($13_1, $14_1, $15_1);
 }
 
 function $120($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  FUNCTION_TABLE[$0_1 | 0]($1_1);
 }
 
 function $121($0_1) {
  $0_1 = $0_1 | 0;
  return FUNCTION_TABLE[$0_1 | 0]() | 0 | 0;
 }
 
 function $122($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $20_1 = 0, $11_1 = 0;
  $2_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
  $1_1 = $1_1 + ($2_1 >> 1 | 0) | 0;
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  $11_1 = $1_1;
  if ($2_1 & 1 | 0) {
   $20_1 = HEAP32[((HEAP32[$1_1 >> 2] | 0) + $0_1 | 0) >> 2] | 0
  } else {
   $20_1 = $0_1
  }
  FUNCTION_TABLE[$20_1 | 0]($11_1);
 }
 
 function $123($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  HEAP32[($2_1 + 8 | 0) >> 2] = $1_1;
  $0_1 = FUNCTION_TABLE[$0_1 | 0]($2_1 + 8 | 0) | 0;
  fimport$6(HEAP32[($2_1 + 8 | 0) >> 2] | 0 | 0);
  global$0 = $2_1 + 16 | 0;
  return $0_1 | 0;
 }
 
 function $124($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  FUNCTION_TABLE[HEAP32[$0_1 >> 2] | 0 | 0]($1_1);
 }
 
 function $125($0_1) {
  $0_1 = $0_1 | 0;
  HEAP8[($0_1 + 4 | 0) >> 0] = 1;
 }
 
 function $126() {
  var $0_1 = 0, $1_1 = 0, i64toi32_i32$0 = 0;
  fimport$5(7584 | 0, 7585 | 0, 7586 | 0, 0 | 0, 4876 | 0, 7 | 0, 4879 | 0, 0 | 0, 4879 | 0, 0 | 0, 2905 | 0, 4881 | 0, 8 | 0);
  $0_1 = $0(8 | 0) | 0;
  i64toi32_i32$0 = 1;
  HEAP32[$0_1 >> 2] = 8;
  HEAP32[($0_1 + 4 | 0) >> 2] = i64toi32_i32$0;
  fimport$0(7584 | 0, 3479 | 0, 6 | 0, 4896 | 0, 4920 | 0, 9 | 0, $0_1 | 0, 1 | 0);
  fimport$5(7588 | 0, 7589 | 0, 7590 | 0, 7584 | 0, 4876 | 0, 10 | 0, 4876 | 0, 11 | 0, 4876 | 0, 12 | 0, 2232 | 0, 4881 | 0, 13 | 0);
  $0_1 = $0(4 | 0) | 0;
  HEAP32[$0_1 >> 2] = 14;
  fimport$0(7588 | 0, 2664 | 0, 2 | 0, 4928 | 0, 4936 | 0, 15 | 0, $0_1 | 0, 0 | 0);
  fimport$3(7584 | 0, 1571 | 0, 2 | 0, 4940 | 0, 4948 | 0, 16 | 0, 17 | 0);
  fimport$3(7584 | 0, 3584 | 0, 3 | 0, 5028 | 0, 5040 | 0, 18 | 0, 19 | 0);
  fimport$5(7608 | 0, 7609 | 0, 7610 | 0, 0 | 0, 4876 | 0, 20 | 0, 4879 | 0, 0 | 0, 4879 | 0, 0 | 0, 2921 | 0, 4881 | 0, 21 | 0);
  $0_1 = $0(8 | 0) | 0;
  i64toi32_i32$0 = 1;
  HEAP32[$0_1 >> 2] = 8;
  HEAP32[($0_1 + 4 | 0) >> 2] = i64toi32_i32$0;
  fimport$0(7608 | 0, 3688 | 0, 2 | 0, 5048 | 0, 4936 | 0, 22 | 0, $0_1 | 0, 1 | 0);
  fimport$5(7611 | 0, 7612 | 0, 7613 | 0, 7608 | 0, 4876 | 0, 23 | 0, 4876 | 0, 24 | 0, 4876 | 0, 25 | 0, 2255 | 0, 4881 | 0, 26 | 0);
  $0_1 = $0(4 | 0) | 0;
  HEAP32[$0_1 >> 2] = 27;
  fimport$0(7611 | 0, 2664 | 0, 2 | 0, 5056 | 0, 4936 | 0, 28 | 0, $0_1 | 0, 0 | 0);
  fimport$3(7608 | 0, 1571 | 0, 2 | 0, 5064 | 0, 4948 | 0, 29 | 0, 30 | 0);
  fimport$3(7608 | 0, 3584 | 0, 3 | 0, 5028 | 0, 5040 | 0, 18 | 0, 31 | 0);
  fimport$5(7614 | 0, 7615 | 0, 7616 | 0, 0 | 0, 4876 | 0, 32 | 0, 4879 | 0, 0 | 0, 4879 | 0, 0 | 0, 3418 | 0, 4881 | 0, 33 | 0);
  fimport$15(7614 | 0, 1 | 0, 5112 | 0, 4876 | 0, 34 | 0, 35 | 0);
  fimport$3(7614 | 0, 3472 | 0, 1 | 0, 5112 | 0, 4876 | 0, 34 | 0, 35 | 0);
  fimport$3(7614 | 0, 1129 | 0, 2 | 0, 5116 | 0, 4936 | 0, 36 | 0, 37 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 38;
  fimport$0(7614 | 0, 3629 | 0, 4 | 0, 5136 | 0, 5152 | 0, 39 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 40;
  fimport$0(7614 | 0, 2212 | 0, 3 | 0, 5160 | 0, 5172 | 0, 41 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 42;
  fimport$0(7614 | 0, 3784 | 0, 3 | 0, 5180 | 0, 5192 | 0, 43 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 44;
  fimport$0(7614 | 0, 2086 | 0, 3 | 0, 5200 | 0, 5192 | 0, 45 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 46;
  fimport$0(7614 | 0, 3659 | 0, 3 | 0, 5212 | 0, 5040 | 0, 47 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 48;
  fimport$0(7614 | 0, 3794 | 0, 2 | 0, 5224 | 0, 4948 | 0, 49 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 50;
  fimport$0(7614 | 0, 2071 | 0, 2 | 0, 5232 | 0, 4948 | 0, 51 | 0, $0_1 | 0, 0 | 0);
  fimport$10(7617 | 0, 1284 | 0, 5240 | 0, 52 | 0, 4881 | 0, 53 | 0);
  $42(2018 | 0, 0 | 0);
  $42(1898 | 0, 8 | 0);
  $42(2434 | 0, 16 | 0);
  $42(2801 | 0, 24 | 0);
  $42(2947 | 0, 32 | 0);
  $42(1904 | 0, 40 | 0);
  fimport$9(7617 | 0);
  fimport$10(7587 | 0, 3455 | 0, 5240 | 0, 54 | 0, 4881 | 0, 55 | 0);
  $117(2947 | 0, 0 | 0);
  $117(1904 | 0, 8 | 0);
  fimport$9(7587 | 0);
  fimport$10(7618 | 0, 3466 | 0, 5240 | 0, 56 | 0, 4881 | 0, 57 | 0);
  $0_1 = $0(4 | 0) | 0;
  HEAP32[$0_1 >> 2] = 8;
  $1_1 = $0(4 | 0) | 0;
  HEAP32[$1_1 >> 2] = 8;
  fimport$7(7618 | 0, 3460 | 0, 7650 | 0, 5242 | 0, 58 | 0, $0_1 | 0, 7650 | 0, 5246 | 0, 59 | 0, $1_1 | 0);
  $0_1 = $0(4 | 0) | 0;
  HEAP32[$0_1 >> 2] = 0;
  $1_1 = $0(4 | 0) | 0;
  HEAP32[$1_1 >> 2] = 0;
  fimport$7(7618 | 0, 1893 | 0, 7643 | 0, 4948 | 0, 60 | 0, $0_1 | 0, 7643 | 0, 5192 | 0, 61 | 0, $1_1 | 0);
  fimport$9(7618 | 0);
  fimport$5(7619 | 0, 7620 | 0, 7621 | 0, 0 | 0, 4876 | 0, 62 | 0, 4879 | 0, 0 | 0, 4879 | 0, 0 | 0, 3579 | 0, 4881 | 0, 63 | 0);
  fimport$15(7619 | 0, 1 | 0, 5252 | 0, 4876 | 0, 64 | 0, 65 | 0);
  fimport$3(7619 | 0, 1879 | 0, 1 | 0, 5252 | 0, 4876 | 0, 64 | 0, 65 | 0);
  fimport$3(7619 | 0, 3408 | 0, 2 | 0, 5256 | 0, 4948 | 0, 66 | 0, 67 | 0);
  fimport$3(7619 | 0, 1129 | 0, 2 | 0, 5264 | 0, 4936 | 0, 68 | 0, 69 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 70;
  fimport$0(7619 | 0, 2039 | 0, 2 | 0, 5264 | 0, 4936 | 0, 71 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 72;
  fimport$0(7619 | 0, 3562 | 0, 3 | 0, 5272 | 0, 5192 | 0, 73 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 74;
  fimport$0(7619 | 0, 3487 | 0, 3 | 0, 5284 | 0, 5192 | 0, 75 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 76;
  fimport$0(7619 | 0, 2640 | 0, 4 | 0, 5296 | 0, 5312 | 0, 77 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 78;
  fimport$0(7619 | 0, 1672 | 0, 4 | 0, 5296 | 0, 5312 | 0, 77 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 79;
  fimport$0(7619 | 0, 2525 | 0, 3 | 0, 5284 | 0, 5192 | 0, 75 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 80;
  fimport$0(7619 | 0, 1529 | 0, 3 | 0, 5284 | 0, 5192 | 0, 75 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 81;
  fimport$0(7619 | 0, 2104 | 0, 3 | 0, 5284 | 0, 5192 | 0, 75 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 82;
  fimport$0(7619 | 0, 3429 | 0, 3 | 0, 5284 | 0, 5192 | 0, 75 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 83;
  fimport$0(7619 | 0, 2684 | 0, 3 | 0, 5284 | 0, 5192 | 0, 75 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 84;
  fimport$0(7619 | 0, 2453 | 0, 3 | 0, 5284 | 0, 5192 | 0, 75 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 85;
  fimport$0(7619 | 0, 1333 | 0, 3 | 0, 5284 | 0, 5192 | 0, 75 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 86;
  fimport$0(7619 | 0, 2744 | 0, 4 | 0, 5296 | 0, 5312 | 0, 77 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 87;
  fimport$0(7619 | 0, 1691 | 0, 4 | 0, 5296 | 0, 5312 | 0, 77 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 88;
  fimport$0(7619 | 0, 2541 | 0, 3 | 0, 5284 | 0, 5192 | 0, 75 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 89;
  fimport$0(7619 | 0, 1220 | 0, 3 | 0, 5284 | 0, 5192 | 0, 75 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 90;
  fimport$0(7619 | 0, 1137 | 0, 3 | 0, 5284 | 0, 5192 | 0, 75 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 91;
  fimport$0(7619 | 0, 1159 | 0, 3 | 0, 5320 | 0, 5246 | 0, 92 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 93;
  fimport$0(7619 | 0, 2132 | 0, 3 | 0, 5320 | 0, 5246 | 0, 92 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 94;
  fimport$0(7619 | 0, 1638 | 0, 3 | 0, 5320 | 0, 5246 | 0, 92 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 95;
  fimport$0(7619 | 0, 2508 | 0, 2 | 0, 5264 | 0, 4936 | 0, 71 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 96;
  fimport$0(7619 | 0, 1196 | 0, 3 | 0, 5320 | 0, 5246 | 0, 92 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 97;
  fimport$0(7619 | 0, 2847 | 0, 3 | 0, 5320 | 0, 5246 | 0, 92 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 98;
  fimport$0(7619 | 0, 2977 | 0, 3 | 0, 5320 | 0, 5246 | 0, 92 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 99;
  fimport$0(7619 | 0, 1727 | 0, 3 | 0, 5320 | 0, 5246 | 0, 92 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 100;
  fimport$0(7619 | 0, 2555 | 0, 2 | 0, 5264 | 0, 4936 | 0, 71 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 101;
  fimport$0(7619 | 0, 1937 | 0, 3 | 0, 5320 | 0, 5246 | 0, 92 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 102;
  fimport$0(7619 | 0, 1601 | 0, 3 | 0, 5320 | 0, 5246 | 0, 92 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 103;
  fimport$0(7619 | 0, 2494 | 0, 2 | 0, 5264 | 0, 4936 | 0, 71 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 104;
  fimport$0(7619 | 0, 2995 | 0, 3 | 0, 5320 | 0, 5246 | 0, 92 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 105;
  fimport$0(7619 | 0, 1743 | 0, 3 | 0, 5320 | 0, 5246 | 0, 92 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 106;
  fimport$0(7619 | 0, 1957 | 0, 3 | 0, 5320 | 0, 5246 | 0, 92 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 107;
  fimport$0(7619 | 0, 1618 | 0, 3 | 0, 5320 | 0, 5246 | 0, 92 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 108;
  fimport$0(7619 | 0, 2953 | 0, 3 | 0, 5320 | 0, 5246 | 0, 92 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 109;
  fimport$0(7619 | 0, 1708 | 0, 3 | 0, 5320 | 0, 5246 | 0, 92 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 110;
  fimport$0(7619 | 0, 1911 | 0, 3 | 0, 5320 | 0, 5246 | 0, 92 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 111;
  fimport$0(7619 | 0, 1581 | 0, 3 | 0, 5320 | 0, 5246 | 0, 92 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 112;
  fimport$0(7619 | 0, 3197 | 0, 3 | 0, 5284 | 0, 5192 | 0, 75 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 113;
  fimport$0(7619 | 0, 2610 | 0, 3 | 0, 5320 | 0, 5246 | 0, 92 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 114;
  fimport$0(7619 | 0, 2324 | 0, 4 | 0, 5296 | 0, 5312 | 0, 77 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 115;
  fimport$0(7619 | 0, 3278 | 0, 4 | 0, 5296 | 0, 5312 | 0, 77 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 116;
  fimport$0(7619 | 0, 1762 | 0, 4 | 0, 5296 | 0, 5312 | 0, 77 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 117;
  fimport$0(7619 | 0, 2477 | 0, 4 | 0, 5296 | 0, 5312 | 0, 77 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 118;
  fimport$0(7619 | 0, 1658 | 0, 4 | 0, 5296 | 0, 5312 | 0, 77 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 119;
  fimport$0(7619 | 0, 2718 | 0, 3 | 0, 5284 | 0, 5192 | 0, 75 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 120;
  fimport$0(7619 | 0, 3503 | 0, 2 | 0, 5332 | 0, 4948 | 0, 121 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 122;
  fimport$0(7619 | 0, 2652 | 0, 3 | 0, 5340 | 0, 5040 | 0, 123 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 124;
  fimport$0(7619 | 0, 1545 | 0, 2 | 0, 5332 | 0, 4948 | 0, 121 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 125;
  fimport$0(7619 | 0, 2118 | 0, 2 | 0, 5332 | 0, 4948 | 0, 121 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 126;
  fimport$0(7619 | 0, 3442 | 0, 2 | 0, 5332 | 0, 4948 | 0, 121 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 127;
  fimport$0(7619 | 0, 2701 | 0, 2 | 0, 5332 | 0, 4948 | 0, 121 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 128;
  fimport$0(7619 | 0, 2465 | 0, 2 | 0, 5332 | 0, 4948 | 0, 121 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 129;
  fimport$0(7619 | 0, 1351 | 0, 2 | 0, 5332 | 0, 4948 | 0, 121 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 130;
  fimport$0(7619 | 0, 2754 | 0, 3 | 0, 5340 | 0, 5040 | 0, 123 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 131;
  fimport$0(7619 | 0, 2145 | 0, 2 | 0, 5352 | 0, 4948 | 0, 132 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 133;
  fimport$0(7619 | 0, 1208 | 0, 2 | 0, 5360 | 0, 5242 | 0, 134 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 135;
  fimport$0(7619 | 0, 2861 | 0, 2 | 0, 5360 | 0, 5242 | 0, 134 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 136;
  fimport$0(7619 | 0, 2986 | 0, 2 | 0, 5352 | 0, 4948 | 0, 132 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 137;
  fimport$0(7619 | 0, 1947 | 0, 2 | 0, 5352 | 0, 4948 | 0, 132 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 138;
  fimport$0(7619 | 0, 3007 | 0, 2 | 0, 5352 | 0, 4948 | 0, 132 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 139;
  fimport$0(7619 | 0, 1970 | 0, 2 | 0, 5352 | 0, 4948 | 0, 132 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 140;
  fimport$0(7619 | 0, 2965 | 0, 2 | 0, 5352 | 0, 4948 | 0, 132 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 141;
  fimport$0(7619 | 0, 1924 | 0, 2 | 0, 5352 | 0, 4948 | 0, 132 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 142;
  fimport$0(7619 | 0, 3210 | 0, 2 | 0, 5332 | 0, 4948 | 0, 121 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 143;
  fimport$0(7619 | 0, 2625 | 0, 2 | 0, 5360 | 0, 5242 | 0, 134 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 144;
  fimport$0(7619 | 0, 2334 | 0, 3 | 0, 5368 | 0, 5380 | 0, 145 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 146;
  fimport$0(7619 | 0, 1232 | 0, 2 | 0, 5332 | 0, 4948 | 0, 121 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 147;
  fimport$0(7619 | 0, 1148 | 0, 2 | 0, 5332 | 0, 4948 | 0, 121 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 148;
  fimport$0(7619 | 0, 3289 | 0, 3 | 0, 5340 | 0, 5040 | 0, 123 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 149;
  fimport$0(7619 | 0, 2484 | 0, 3 | 0, 5388 | 0, 5400 | 0, 150 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 151;
  fimport$0(7619 | 0, 3591 | 0, 4 | 0, 5408 | 0, 5152 | 0, 152 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 153;
  fimport$0(7619 | 0, 3612 | 0, 3 | 0, 5424 | 0, 5192 | 0, 154 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 155;
  fimport$0(7619 | 0, 1306 | 0, 2 | 0, 5436 | 0, 4948 | 0, 156 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 157;
  fimport$0(7619 | 0, 1561 | 0, 2 | 0, 5444 | 0, 4948 | 0, 158 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 159;
  fimport$0(7619 | 0, 3603 | 0, 3 | 0, 5452 | 0, 5040 | 0, 160 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 161;
  fimport$0(7619 | 0, 2875 | 0, 3 | 0, 5464 | 0, 5192 | 0, 162 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 163;
  fimport$0(7619 | 0, 3519 | 0, 2 | 0, 5476 | 0, 4948 | 0, 164 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 165;
  fimport$0(7619 | 0, 3539 | 0, 3 | 0, 5464 | 0, 5192 | 0, 162 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 166;
  fimport$0(7619 | 0, 3752 | 0, 3 | 0, 5484 | 0, 5192 | 0, 167 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 168;
  fimport$0(7619 | 0, 3750 | 0, 2 | 0, 5264 | 0, 4936 | 0, 71 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 169;
  fimport$0(7619 | 0, 3769 | 0, 3 | 0, 5496 | 0, 5192 | 0, 170 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 171;
  fimport$0(7619 | 0, 3767 | 0, 2 | 0, 5264 | 0, 4936 | 0, 71 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 172;
  fimport$0(7619 | 0, 1119 | 0, 2 | 0, 5264 | 0, 4936 | 0, 71 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 173;
  fimport$0(7619 | 0, 1111 | 0, 2 | 0, 5508 | 0, 4948 | 0, 174 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 175;
  fimport$0(7619 | 0, 2782 | 0, 2 | 0, 5264 | 0, 4936 | 0, 71 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 176;
  fimport$0(7619 | 0, 1244 | 0, 2 | 0, 5508 | 0, 4948 | 0, 174 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 177;
  fimport$0(7619 | 0, 1257 | 0, 5 | 0, 5520 | 0, 5540 | 0, 178 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 179;
  fimport$0(7619 | 0, 2023 | 0, 2 | 0, 5360 | 0, 5242 | 0, 134 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 180;
  fimport$0(7619 | 0, 2001 | 0, 2 | 0, 5360 | 0, 5242 | 0, 134 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 181;
  fimport$0(7619 | 0, 2438 | 0, 2 | 0, 5360 | 0, 5242 | 0, 134 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 182;
  fimport$0(7619 | 0, 2808 | 0, 2 | 0, 5360 | 0, 5242 | 0, 134 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 183;
  fimport$0(7619 | 0, 3019 | 0, 2 | 0, 5360 | 0, 5242 | 0, 134 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 184;
  fimport$0(7619 | 0, 1983 | 0, 2 | 0, 5360 | 0, 5242 | 0, 134 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 185;
  fimport$0(7619 | 0, 1273 | 0, 2 | 0, 5548 | 0, 4948 | 0, 186 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 187;
  fimport$0(7619 | 0, 2764 | 0, 3 | 0, 5368 | 0, 5380 | 0, 145 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 188;
  fimport$0(7619 | 0, 2344 | 0, 3 | 0, 5368 | 0, 5380 | 0, 145 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 189;
  fimport$0(7619 | 0, 3300 | 0, 3 | 0, 5368 | 0, 5380 | 0, 145 | 0, $0_1 | 0, 0 | 0);
  $0_1 = $0(8 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 190;
  fimport$0(7619 | 0, 2731 | 0, 2 | 0, 5332 | 0, 4948 | 0, 121 | 0, $0_1 | 0, 0 | 0);
 }
 
 function $127($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = HEAP32[($0_1 + 72 | 0) >> 2] | 0;
  HEAP32[($0_1 + 72 | 0) >> 2] = $1_1 - 1 | 0 | $1_1 | 0;
  $1_1 = HEAP32[$0_1 >> 2] | 0;
  if ($1_1 & 8 | 0) {
   HEAP32[$0_1 >> 2] = $1_1 | 32 | 0;
   return -1 | 0;
  }
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[($0_1 + 8 | 0) >> 2] = 0;
  $1_1 = HEAP32[($0_1 + 44 | 0) >> 2] | 0;
  HEAP32[($0_1 + 28 | 0) >> 2] = $1_1;
  HEAP32[($0_1 + 20 | 0) >> 2] = $1_1;
  HEAP32[($0_1 + 16 | 0) >> 2] = $1_1 + (HEAP32[($0_1 + 48 | 0) >> 2] | 0) | 0;
  return 0 | 0;
 }
 
 function $128($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $28_1 = 0, $15_1 = 0, $31_1 = 0;
  block : {
   if ($1_1 >>> 0 <= 3 >>> 0) {
    $28_1 = ($0_1 + ($1_1 << 2 | 0) | 0) + 4 | 0
   } else {
    $1_1 = $1_1 - 4 | 0;
    $0_1 = HEAP32[($0_1 + 24 | 0) >> 2] | 0;
    $15_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
    $0_1 = HEAP32[$0_1 >> 2] | 0;
    if ($1_1 >>> 0 >= (($15_1 - $0_1 | 0) >> 2 | 0) >>> 0) {
     break block
    }
    $28_1 = $0_1 + ($1_1 << 2 | 0) | 0;
   }
   return HEAP32[$28_1 >> 2] | 0 | 0;
  }
  fimport$2();
  wasm2js_trap();
 }
 
 function $129($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  if (($1_1 | 0) < (0 | 0)) {
   fimport$2();
   wasm2js_trap();
  }
  $1_1 = (($1_1 - 1 | 0) >>> 5 | 0) + 1 | 0;
  $2_1 = $0($1_1 << 2 | 0 | 0) | 0;
  HEAP32[($0_1 + 8 | 0) >> 2] = $1_1;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = $2_1;
 }
 
 function $130($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0, $5_1 = 0, $4_1 = 0, $6_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $7_1 = 0, $8_1 = 0, $16_1 = 0, $19_1 = 0, $146_1 = 0, $148_1 = 0, $9_1 = 0, $177_1 = 0, $10_1 = 0, $208_1 = 0;
  HEAP16[$0_1 >> 1] = HEAPU16[$1_1 >> 1] | 0;
  i64toi32_i32$0 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
  $16_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $0_1;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = $16_1;
  HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$1 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($1_1 + 16 | 0) >> 2] | 0;
  $19_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $0_1;
  HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = $19_1;
  HEAP32[(i64toi32_i32$1 + 16 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[(i64toi32_i32$1 + 20 | 0) >> 2] = HEAP32[($1_1 + 20 | 0) >> 2] | 0;
  block1 : {
   block : {
    $3_1 = HEAP32[($1_1 + 24 | 0) >> 2] | 0;
    if (!$3_1) {
     break block
    }
    $5_1 = $0(24 | 0) | 0;
    HEAP32[($5_1 + 8 | 0) >> 2] = 0;
    i64toi32_i32$1 = $5_1;
    i64toi32_i32$0 = 0;
    HEAP32[$5_1 >> 2] = 0;
    HEAP32[($5_1 + 4 | 0) >> 2] = i64toi32_i32$0;
    $1_1 = HEAP32[($3_1 + 4 | 0) >> 2] | 0;
    $2_1 = HEAP32[$3_1 >> 2] | 0;
    if (($1_1 | 0) != ($2_1 | 0)) {
     $2_1 = $1_1 - $2_1 | 0;
     if (($2_1 | 0) < (0 | 0)) {
      break block1
     }
     $1_1 = $0($2_1 | 0) | 0;
     HEAP32[$5_1 >> 2] = $1_1;
     HEAP32[($5_1 + 8 | 0) >> 2] = $1_1 + $2_1 | 0;
     $2_1 = HEAP32[$3_1 >> 2] | 0;
     $6_1 = HEAP32[($3_1 + 4 | 0) >> 2] | 0;
     if (($2_1 | 0) != ($6_1 | 0)) {
      label : while (1) {
       HEAP32[$1_1 >> 2] = HEAP32[$2_1 >> 2] | 0;
       $1_1 = $1_1 + 4 | 0;
       $2_1 = $2_1 + 4 | 0;
       if (($2_1 | 0) != ($6_1 | 0)) {
        continue label
       }
       break label;
      }
     }
     HEAP32[($5_1 + 4 | 0) >> 2] = $1_1;
    }
    i64toi32_i32$1 = $5_1;
    i64toi32_i32$0 = 0;
    HEAP32[($5_1 + 12 | 0) >> 2] = 0;
    HEAP32[($5_1 + 16 | 0) >> 2] = i64toi32_i32$0;
    HEAP32[($5_1 + 20 | 0) >> 2] = 0;
    $1_1 = HEAP32[($3_1 + 16 | 0) >> 2] | 0;
    if (!$1_1) {
     break block
    }
    $129($5_1 + 12 | 0 | 0, $1_1 | 0);
    $6_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
    $4_1 = HEAP32[($5_1 + 16 | 0) >> 2] | 0;
    $2_1 = HEAP32[($3_1 + 16 | 0) >> 2] | 0;
    $1_1 = ($4_1 + ($2_1 & 31 | 0) | 0) + ($2_1 & -32 | 0) | 0;
    HEAP32[($5_1 + 16 | 0) >> 2] = $1_1;
    block3 : {
     block2 : {
      if (!$4_1) {
       $3_1 = $1_1 - 1 | 0;
       break block2;
      }
      $3_1 = $1_1 - 1 | 0;
      if (($3_1 ^ ($4_1 - 1 | 0) | 0) >>> 0 < 32 >>> 0) {
       break block3
      }
     }
     HEAP32[((HEAP32[($5_1 + 12 | 0) >> 2] | 0) + (($1_1 >>> 0 >= 33 >>> 0 ? $3_1 >>> 5 | 0 : 0) << 2 | 0) | 0) >> 2] = 0;
    }
    $1_1 = (HEAP32[($5_1 + 12 | 0) >> 2] | 0) + (($4_1 >>> 3 | 0) & 536870908 | 0) | 0;
    $3_1 = $4_1 & 31 | 0;
    if (!$3_1) {
     if (($2_1 | 0) <= (0 | 0)) {
      break block
     }
     $3_1 = ($2_1 | 0) / (32 | 0) | 0;
     if (($2_1 + 31 | 0) >>> 0 >= 63 >>> 0) {
      $21($1_1 | 0, $6_1 | 0, $3_1 << 2 | 0 | 0) | 0
     }
     $2_1 = $2_1 - ($3_1 << 5 | 0) | 0;
     if (($2_1 | 0) <= (0 | 0)) {
      break block
     }
     $3_1 = $3_1 << 2 | 0;
     $1_1 = $1_1 + $3_1 | 0;
     $146_1 = $1_1;
     $148_1 = HEAP32[$1_1 >> 2] | 0;
     $1_1 = -1 >>> (32 - $2_1 | 0) | 0;
     HEAP32[$146_1 >> 2] = $148_1 & ($1_1 ^ -1 | 0) | 0 | ((HEAP32[($3_1 + $6_1 | 0) >> 2] | 0) & $1_1 | 0) | 0;
     break block;
    }
    if (($2_1 | 0) <= (0 | 0)) {
     break block
    }
    $8_1 = -1 << $3_1 | 0;
    $4_1 = 32 - $3_1 | 0;
    if (($2_1 | 0) >= (32 | 0)) {
     $9_1 = $8_1 ^ -1 | 0;
     $7_1 = HEAP32[$1_1 >> 2] | 0;
     label1 : while (1) {
      $177_1 = $7_1 & $9_1 | 0;
      $7_1 = HEAP32[$6_1 >> 2] | 0;
      HEAP32[$1_1 >> 2] = $177_1 | ($7_1 << $3_1 | 0) | 0;
      $7_1 = (HEAP32[($1_1 + 4 | 0) >> 2] | 0) & $8_1 | 0 | ($7_1 >>> $4_1 | 0) | 0;
      HEAP32[($1_1 + 4 | 0) >> 2] = $7_1;
      $6_1 = $6_1 + 4 | 0;
      $1_1 = $1_1 + 4 | 0;
      $10_1 = $2_1 >>> 0 > 63 >>> 0;
      $2_1 = $2_1 - 32 | 0;
      if ($10_1) {
       continue label1
      }
      break label1;
     };
     if (($2_1 | 0) <= (0 | 0)) {
      break block
     }
    }
    $208_1 = $4_1;
    $4_1 = ($2_1 | 0) > ($4_1 | 0) ? $4_1 : $2_1;
    $6_1 = (HEAP32[$6_1 >> 2] | 0) & (-1 >>> (32 - $2_1 | 0) | 0) | 0;
    HEAP32[$1_1 >> 2] = (HEAP32[$1_1 >> 2] | 0) & (((-1 >>> ($208_1 - $4_1 | 0) | 0) & $8_1 | 0) ^ -1 | 0) | 0 | ($6_1 << $3_1 | 0) | 0;
    $2_1 = $2_1 - $4_1 | 0;
    if (($2_1 | 0) <= (0 | 0)) {
     break block
    }
    $1_1 = $1_1 + ((($3_1 + $4_1 | 0) >>> 3 | 0) & 536870908 | 0) | 0;
    HEAP32[$1_1 >> 2] = (HEAP32[$1_1 >> 2] | 0) & ((-1 >>> (32 - $2_1 | 0) | 0) ^ -1 | 0) | 0 | ($6_1 >>> $4_1 | 0) | 0;
   }
   $1_1 = HEAP32[($0_1 + 24 | 0) >> 2] | 0;
   HEAP32[($0_1 + 24 | 0) >> 2] = $5_1;
   if ($1_1) {
    $61($1_1 | 0)
   }
   return;
  }
  fimport$2();
  wasm2js_trap();
 }
 
 function $131($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, $3_1 = 0, $4_1 = 0, $5_1 = 0, $6_1 = 0, $7_1 = 0;
  if ($0_1) {
   $6_1 = global$0 - 32 | 0;
   global$0 = $6_1;
   $1_1 = HEAP32[$0_1 >> 2] | 0;
   $3_1 = HEAP32[($1_1 + 484 | 0) >> 2] | 0;
   if ($3_1) {
    $81($3_1 | 0, $1_1 | 0) | 0;
    HEAP32[($1_1 + 484 | 0) >> 2] = 0;
   }
   $2_1 = HEAP32[($1_1 + 492 | 0) >> 2] | 0;
   $3_1 = HEAP32[($1_1 + 488 | 0) >> 2] | 0;
   if (($2_1 | 0) != ($3_1 | 0)) {
    $2_1 = ($2_1 - $3_1 | 0) >> 2 | 0;
    $4_1 = $2_1 >>> 0 <= 1 >>> 0 ? 1 : $2_1;
    $2_1 = 0;
    label : while (1) {
     HEAP32[((HEAP32[($3_1 + ($2_1 << 2 | 0) | 0) >> 2] | 0) + 484 | 0) >> 2] = 0;
     $2_1 = $2_1 + 1 | 0;
     if (($2_1 | 0) != ($4_1 | 0)) {
      continue label
     }
     break label;
    };
   }
   HEAP32[($1_1 + 492 | 0) >> 2] = $3_1;
   block : {
    $2_1 = $1_1 + 496 | 0;
    if (($3_1 | 0) == (HEAP32[$2_1 >> 2] | 0 | 0)) {
     break block
    }
    $2_1 = $44($6_1 + 8 | 0 | 0, 0 | 0, 0 | 0, $2_1 | 0) | 0;
    $4_1 = HEAP32[($1_1 + 488 | 0) >> 2] | 0;
    $5_1 = (HEAP32[($1_1 + 492 | 0) >> 2] | 0) - $4_1 | 0;
    $3_1 = (HEAP32[($2_1 + 4 | 0) >> 2] | 0) - $5_1 | 0;
    $5_1 = $21($3_1 | 0, $4_1 | 0, $5_1 | 0) | 0;
    $4_1 = HEAP32[($1_1 + 488 | 0) >> 2] | 0;
    HEAP32[($1_1 + 488 | 0) >> 2] = $5_1;
    HEAP32[($2_1 + 4 | 0) >> 2] = $4_1;
    $5_1 = HEAP32[($1_1 + 492 | 0) >> 2] | 0;
    HEAP32[($1_1 + 492 | 0) >> 2] = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
    HEAP32[($2_1 + 8 | 0) >> 2] = $5_1;
    $7_1 = HEAP32[($1_1 + 496 | 0) >> 2] | 0;
    HEAP32[($1_1 + 496 | 0) >> 2] = HEAP32[($2_1 + 12 | 0) >> 2] | 0;
    HEAP32[$2_1 >> 2] = $4_1;
    HEAP32[($2_1 + 12 | 0) >> 2] = $7_1;
    if (($4_1 | 0) != ($5_1 | 0)) {
     HEAP32[($2_1 + 8 | 0) >> 2] = $5_1 + ((($4_1 - $5_1 | 0) + 3 | 0) & -4 | 0) | 0
    }
    if (!$4_1) {
     break block
    }
    $9($4_1 | 0);
    $3_1 = HEAP32[($1_1 + 488 | 0) >> 2] | 0;
   }
   if ($3_1) {
    HEAP32[($1_1 + 492 | 0) >> 2] = $3_1;
    $9($3_1 | 0);
   }
   $3_1 = HEAP32[($1_1 + 148 | 0) >> 2] | 0;
   HEAP32[($1_1 + 148 | 0) >> 2] = 0;
   if ($3_1) {
    $61($3_1 | 0)
   }
   $9($1_1 | 0);
   $1_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
   HEAP32[($0_1 + 8 | 0) >> 2] = 0;
   if ($1_1) {
    FUNCTION_TABLE[HEAP32[((HEAP32[$1_1 >> 2] | 0) + 4 | 0) >> 2] | 0 | 0]($1_1)
   }
   $1_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
   HEAP32[($0_1 + 4 | 0) >> 2] = 0;
   if ($1_1) {
    FUNCTION_TABLE[HEAP32[((HEAP32[$1_1 >> 2] | 0) + 4 | 0) >> 2] | 0 | 0]($1_1)
   }
   global$0 = $6_1 + 32 | 0;
   $5($0_1 | 0);
  }
 }
 
 function $132($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $2_1 = 0, $13_1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  block : {
   if ($1_1) {
    $1_1 = HEAP32[$1_1 >> 2] | 0;
    $13_1 = $62($0(520 | 0) | 0 | 0, $1_1 | 0) | 0;
    if ($1_1) {
     break block
    }
    HEAP32[$2_1 >> 2] = 3319;
    $84($2_1 | 0);
    $6();
    wasm2js_trap();
   }
   if (!(HEAPU8[7572 >> 0] | 0)) {
    HEAP32[7544 >> 2] = 3;
    i64toi32_i32$1 = 7560;
    i64toi32_i32$0 = 1065353216;
    HEAP32[i64toi32_i32$1 >> 2] = 0;
    HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$1 = 7552;
    i64toi32_i32$0 = 0;
    HEAP32[i64toi32_i32$1 >> 2] = 0;
    HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
    HEAP8[7572 >> 0] = 1;
    HEAP8[7548 >> 0] = (HEAPU8[7548 >> 0] | 0) & 254 | 0;
    HEAP32[7540 >> 2] = 0;
    HEAP32[7568 >> 2] = 0;
   }
   $13_1 = $62($0(520 | 0) | 0 | 0, 7540 | 0) | 0;
  }
  $1_1 = $13_1;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$0 = 0;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[i64toi32_i32$1 >> 2] = $1_1;
  HEAP32[($1_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  global$0 = $2_1 + 16 | 0;
  return i64toi32_i32$1 | 0;
 }
 
 function $133($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  if ($0_1) {
   $1_1 = HEAP32[$0_1 >> 2] | 0;
   if ($1_1) {
    $5($1_1 | 0)
   }
   $5($0_1 | 0);
  }
 }
 
 function $134() {
  var $0_1 = 0, i64toi32_i32$0 = 0, $1_1 = 0;
  $1_1 = $0(4 | 0) | 0;
  $0_1 = $0(32 | 0) | 0;
  HEAP32[($0_1 + 28 | 0) >> 2] = 0;
  i64toi32_i32$0 = 1065353216;
  HEAP32[($0_1 + 20 | 0) >> 2] = 0;
  HEAP32[($0_1 + 24 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($0_1 + 12 | 0) >> 2] = 0;
  HEAP32[($0_1 + 16 | 0) >> 2] = i64toi32_i32$0;
  HEAP8[($0_1 + 8 | 0) >> 0] = 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 3;
  HEAP32[$0_1 >> 2] = 0;
  HEAP32[$1_1 >> 2] = $0_1;
  return $1_1 | 0;
 }
 
 function $135($0_1, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  if (!($2_1 ? ($2_1 | 0) != (5 | 0) : 0)) {
   return $43(6200 | 0, $3_1 | 0, $4_1 | 0) | 0 | 0
  }
  return $82($3_1 | 0, $4_1 | 0) | 0 | 0;
 }
 
 function $136($0_1, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $16_1 = 0, $17_1 = 0, $6_1 = 0, $8_1 = 0, $8$hi = 0, $11$hi = 0, $5_1 = 0, $5$hi = 0;
  $6_1 = $1_1;
  i64toi32_i32$0 = 0;
  $8_1 = $2_1;
  $8$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $3_1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   $16_1 = 0;
  } else {
   i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
   $16_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
  }
  $11$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $8$hi;
  i64toi32_i32$0 = $8_1;
  i64toi32_i32$2 = $11$hi;
  i64toi32_i32$3 = $16_1;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  i64toi32_i32$2 = FUNCTION_TABLE[$0_1 | 0]($6_1, i64toi32_i32$0 | i64toi32_i32$3 | 0, i64toi32_i32$2, $4_1) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $5_1 = i64toi32_i32$2;
  $5$hi = i64toi32_i32$0;
  i64toi32_i32$1 = i64toi32_i32$2;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = 0;
   $17_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$2 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $17_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$4 | 0) | 0;
  }
  global$1 = $17_1;
  i64toi32_i32$2 = $5$hi;
  return $5_1 | 0;
 }
 
 function $137($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $4_1 = 0, $3_1 = 0, $5_1 = 0, $6_1 = 0, $7_1 = 0;
  $3_1 = HEAP32[($0_1 + 84 | 0) >> 2] | 0;
  $5_1 = HEAP32[$3_1 >> 2] | 0;
  $4_1 = HEAP32[($3_1 + 4 | 0) >> 2] | 0;
  $7_1 = HEAP32[($0_1 + 28 | 0) >> 2] | 0;
  $6_1 = (HEAP32[($0_1 + 20 | 0) >> 2] | 0) - $7_1 | 0;
  $6_1 = $4_1 >>> 0 < $6_1 >>> 0 ? $4_1 : $6_1;
  if ($6_1) {
   $13($5_1 | 0, $7_1 | 0, $6_1 | 0) | 0;
   $5_1 = (HEAP32[$3_1 >> 2] | 0) + $6_1 | 0;
   HEAP32[$3_1 >> 2] = $5_1;
   $4_1 = (HEAP32[($3_1 + 4 | 0) >> 2] | 0) - $6_1 | 0;
   HEAP32[($3_1 + 4 | 0) >> 2] = $4_1;
  }
  $4_1 = $2_1 >>> 0 > $4_1 >>> 0 ? $4_1 : $2_1;
  if ($4_1) {
   $13($5_1 | 0, $1_1 | 0, $4_1 | 0) | 0;
   $5_1 = (HEAP32[$3_1 >> 2] | 0) + $4_1 | 0;
   HEAP32[$3_1 >> 2] = $5_1;
   HEAP32[($3_1 + 4 | 0) >> 2] = (HEAP32[($3_1 + 4 | 0) >> 2] | 0) - $4_1 | 0;
  }
  HEAP8[$5_1 >> 0] = 0;
  $1_1 = HEAP32[($0_1 + 44 | 0) >> 2] | 0;
  HEAP32[($0_1 + 28 | 0) >> 2] = $1_1;
  HEAP32[($0_1 + 20 | 0) >> 2] = $1_1;
  return $2_1 | 0;
 }
 
 function $138($0_1, $1_1, $1$hi, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $1$hi = $1$hi | 0;
  $2_1 = $2_1 | 0;
  i64toi32_i32$HIGH_BITS = 0;
  return 0 | 0;
 }
 
 function $139($0_1) {
  $0_1 = $0_1 | 0;
  return 0 | 0;
 }
 
 function $140($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$4 = 0, i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, i64toi32_i32$5 = 0, i64toi32_i32$1 = 0, $2$hi = 0, $2_1 = 0, $3_1 = 0, $3$hi = 0, $4_1 = 0, $4$hi = 0, $5$hi = 0, $5_1 = 0, $8_1 = 0, i64toi32_i32$6 = 0, $7$hi = 0, $6_1 = 0, $6$hi = 0, $7_1 = 0, $61_1 = 0, $62_1 = 0, $63_1 = 0, $64_1 = 0, $65_1 = 0, $66_1 = 0, $67_1 = 0, $68_1 = 0, $69_1 = 0, $70_1 = 0, $71_1 = 0, $72_1 = 0, $73_1 = 0, $74_1 = 0, $75_1 = 0, $10_1 = 0, $9_1 = 0, $28_1 = 0, $28$hi = 0, $30$hi = 0, $33_1 = 0, $33$hi = 0, $35$hi = 0, $49_1 = 0, $49$hi = 0, $52_1 = 0, $54_1 = 0, $60_1 = 0, $60$hi = 0, $62$hi = 0, $85$hi = 0, $93_1 = 0, $93$hi = 0, $97$hi = 0, $98$hi = 0, $114$hi = 0, $121$hi = 0, $122_1 = 0, $122$hi = 0, $127$hi = 0, $138_1 = 0, $138$hi = 0, $142$hi = 0, $145_1 = 0, $145$hi = 0, $147_1 = 0, $147$hi = 0, $149_1 = 0, $150$hi = 0, $152_1 = 0, $152$hi = 0, $161$hi = 0, $169_1 = 0, $169$hi = 0, wasm2js_i32$0 = 0, wasm2js_f64$0 = 0.0;
  $10_1 = $1_1;
  $1_1 = ((HEAP32[$1_1 >> 2] | 0) + 7 | 0) & -8 | 0;
  HEAP32[$10_1 >> 2] = $1_1 + 16 | 0;
  $9_1 = $0_1;
  i64toi32_i32$2 = $1_1;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $3_1 = i64toi32_i32$0;
  $3$hi = i64toi32_i32$1;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 8 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 12 | 0) >> 2] | 0;
  $6_1 = i64toi32_i32$1;
  $6$hi = i64toi32_i32$0;
  $8_1 = global$0 - 32 | 0;
  global$0 = $8_1;
  block : {
   i64toi32_i32$2 = i64toi32_i32$1;
   i64toi32_i32$1 = 2147483647;
   i64toi32_i32$3 = -1;
   i64toi32_i32$1 = i64toi32_i32$0 & i64toi32_i32$1 | 0;
   $4_1 = i64toi32_i32$2 & i64toi32_i32$3 | 0;
   $4$hi = i64toi32_i32$1;
   i64toi32_i32$0 = $4_1;
   i64toi32_i32$2 = 1006698496;
   i64toi32_i32$3 = 0;
   i64toi32_i32$4 = i64toi32_i32$0 - i64toi32_i32$3 | 0;
   i64toi32_i32$6 = i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0;
   i64toi32_i32$5 = i64toi32_i32$6 + i64toi32_i32$2 | 0;
   i64toi32_i32$5 = i64toi32_i32$1 - i64toi32_i32$5 | 0;
   $28_1 = i64toi32_i32$4;
   $28$hi = i64toi32_i32$5;
   i64toi32_i32$5 = i64toi32_i32$1;
   i64toi32_i32$1 = i64toi32_i32$0;
   i64toi32_i32$0 = 1140785152;
   i64toi32_i32$3 = 0;
   i64toi32_i32$2 = i64toi32_i32$1 - i64toi32_i32$3 | 0;
   i64toi32_i32$6 = i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0;
   i64toi32_i32$4 = i64toi32_i32$6 + i64toi32_i32$0 | 0;
   i64toi32_i32$4 = i64toi32_i32$5 - i64toi32_i32$4 | 0;
   $30$hi = i64toi32_i32$4;
   i64toi32_i32$4 = $28$hi;
   i64toi32_i32$5 = $28_1;
   i64toi32_i32$1 = $30$hi;
   i64toi32_i32$3 = i64toi32_i32$2;
   if (i64toi32_i32$4 >>> 0 < i64toi32_i32$1 >>> 0 | ((i64toi32_i32$4 | 0) == (i64toi32_i32$1 | 0) & i64toi32_i32$5 >>> 0 < i64toi32_i32$3 >>> 0 | 0) | 0) {
    i64toi32_i32$5 = $6$hi;
    i64toi32_i32$3 = $6_1;
    i64toi32_i32$4 = 0;
    i64toi32_i32$1 = 4;
    i64toi32_i32$0 = i64toi32_i32$1 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$1 & 63 | 0) >>> 0) {
     i64toi32_i32$4 = i64toi32_i32$3 << i64toi32_i32$0 | 0;
     $61_1 = 0;
    } else {
     i64toi32_i32$4 = ((1 << i64toi32_i32$0 | 0) - 1 | 0) & (i64toi32_i32$3 >>> (32 - i64toi32_i32$0 | 0) | 0) | 0 | (i64toi32_i32$5 << i64toi32_i32$0 | 0) | 0;
     $61_1 = i64toi32_i32$3 << i64toi32_i32$0 | 0;
    }
    $33_1 = $61_1;
    $33$hi = i64toi32_i32$4;
    i64toi32_i32$4 = $3$hi;
    i64toi32_i32$5 = $3_1;
    i64toi32_i32$3 = 0;
    i64toi32_i32$1 = 60;
    i64toi32_i32$0 = i64toi32_i32$1 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$1 & 63 | 0) >>> 0) {
     i64toi32_i32$3 = 0;
     $62_1 = i64toi32_i32$4 >>> i64toi32_i32$0 | 0;
    } else {
     i64toi32_i32$3 = i64toi32_i32$4 >>> i64toi32_i32$0 | 0;
     $62_1 = (((1 << i64toi32_i32$0 | 0) - 1 | 0) & i64toi32_i32$4 | 0) << (32 - i64toi32_i32$0 | 0) | 0 | (i64toi32_i32$5 >>> i64toi32_i32$0 | 0) | 0;
    }
    $35$hi = i64toi32_i32$3;
    i64toi32_i32$3 = $33$hi;
    i64toi32_i32$4 = $33_1;
    i64toi32_i32$5 = $35$hi;
    i64toi32_i32$1 = $62_1;
    i64toi32_i32$5 = i64toi32_i32$3 | i64toi32_i32$5 | 0;
    $4_1 = i64toi32_i32$4 | i64toi32_i32$1 | 0;
    $4$hi = i64toi32_i32$5;
    i64toi32_i32$5 = $3$hi;
    i64toi32_i32$3 = $3_1;
    i64toi32_i32$4 = 268435455;
    i64toi32_i32$1 = -1;
    i64toi32_i32$4 = i64toi32_i32$5 & i64toi32_i32$4 | 0;
    $3_1 = i64toi32_i32$3 & i64toi32_i32$1 | 0;
    $3$hi = i64toi32_i32$4;
    i64toi32_i32$5 = $3_1;
    i64toi32_i32$3 = 134217728;
    i64toi32_i32$1 = 1;
    if (i64toi32_i32$4 >>> 0 > i64toi32_i32$3 >>> 0 | ((i64toi32_i32$4 | 0) == (i64toi32_i32$3 | 0) & i64toi32_i32$5 >>> 0 >= i64toi32_i32$1 >>> 0 | 0) | 0) {
     i64toi32_i32$5 = $4$hi;
     i64toi32_i32$1 = $4_1;
     i64toi32_i32$4 = 1073741824;
     i64toi32_i32$3 = 1;
     i64toi32_i32$0 = i64toi32_i32$1 + i64toi32_i32$3 | 0;
     i64toi32_i32$2 = i64toi32_i32$5 + i64toi32_i32$4 | 0;
     if (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) {
      i64toi32_i32$2 = i64toi32_i32$2 + 1 | 0
     }
     $2_1 = i64toi32_i32$0;
     $2$hi = i64toi32_i32$2;
     break block;
    }
    i64toi32_i32$2 = $4$hi;
    i64toi32_i32$5 = $4_1;
    i64toi32_i32$1 = -1073741824;
    i64toi32_i32$3 = 0;
    i64toi32_i32$4 = i64toi32_i32$5 - i64toi32_i32$3 | 0;
    i64toi32_i32$6 = i64toi32_i32$5 >>> 0 < i64toi32_i32$3 >>> 0;
    i64toi32_i32$0 = i64toi32_i32$6 + i64toi32_i32$1 | 0;
    i64toi32_i32$0 = i64toi32_i32$2 - i64toi32_i32$0 | 0;
    $2_1 = i64toi32_i32$4;
    $2$hi = i64toi32_i32$0;
    i64toi32_i32$0 = $3$hi;
    i64toi32_i32$2 = $3_1;
    i64toi32_i32$5 = 134217728;
    i64toi32_i32$3 = 0;
    if ((i64toi32_i32$2 | 0) != (i64toi32_i32$3 | 0) | (i64toi32_i32$0 | 0) != (i64toi32_i32$5 | 0) | 0) {
     break block
    }
    i64toi32_i32$2 = $2$hi;
    i64toi32_i32$2 = $4$hi;
    i64toi32_i32$3 = $4_1;
    i64toi32_i32$0 = 0;
    i64toi32_i32$5 = 1;
    i64toi32_i32$0 = i64toi32_i32$2 & i64toi32_i32$0 | 0;
    $49_1 = i64toi32_i32$3 & i64toi32_i32$5 | 0;
    $49$hi = i64toi32_i32$0;
    i64toi32_i32$0 = $2$hi;
    i64toi32_i32$2 = i64toi32_i32$4;
    i64toi32_i32$3 = $49$hi;
    i64toi32_i32$5 = $49_1;
    i64toi32_i32$1 = i64toi32_i32$4 + i64toi32_i32$5 | 0;
    i64toi32_i32$4 = i64toi32_i32$0 + i64toi32_i32$3 | 0;
    if (i64toi32_i32$1 >>> 0 < i64toi32_i32$5 >>> 0) {
     i64toi32_i32$4 = i64toi32_i32$4 + 1 | 0
    }
    $2_1 = i64toi32_i32$1;
    $2$hi = i64toi32_i32$4;
    break block;
   }
   i64toi32_i32$4 = $3$hi;
   $52_1 = !($3_1 | i64toi32_i32$4 | 0);
   i64toi32_i32$4 = $4$hi;
   i64toi32_i32$0 = $4_1;
   i64toi32_i32$2 = 2147418112;
   i64toi32_i32$5 = 0;
   $54_1 = i64toi32_i32$4 >>> 0 < i64toi32_i32$2 >>> 0 | ((i64toi32_i32$4 | 0) == (i64toi32_i32$2 | 0) & i64toi32_i32$0 >>> 0 < i64toi32_i32$5 >>> 0 | 0) | 0;
   i64toi32_i32$0 = i64toi32_i32$4;
   i64toi32_i32$5 = $4_1;
   i64toi32_i32$4 = 2147418112;
   i64toi32_i32$2 = 0;
   if (!((i64toi32_i32$5 | 0) == (i64toi32_i32$2 | 0) & (i64toi32_i32$0 | 0) == (i64toi32_i32$4 | 0) | 0 ? $52_1 : $54_1)) {
    i64toi32_i32$5 = $6$hi;
    i64toi32_i32$2 = $6_1;
    i64toi32_i32$0 = 0;
    i64toi32_i32$4 = 4;
    i64toi32_i32$3 = i64toi32_i32$4 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$4 & 63 | 0) >>> 0) {
     i64toi32_i32$0 = i64toi32_i32$2 << i64toi32_i32$3 | 0;
     $63_1 = 0;
    } else {
     i64toi32_i32$0 = ((1 << i64toi32_i32$3 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$3 | 0) | 0) | 0 | (i64toi32_i32$5 << i64toi32_i32$3 | 0) | 0;
     $63_1 = i64toi32_i32$2 << i64toi32_i32$3 | 0;
    }
    $60_1 = $63_1;
    $60$hi = i64toi32_i32$0;
    i64toi32_i32$0 = $3$hi;
    i64toi32_i32$5 = $3_1;
    i64toi32_i32$2 = 0;
    i64toi32_i32$4 = 60;
    i64toi32_i32$3 = i64toi32_i32$4 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$4 & 63 | 0) >>> 0) {
     i64toi32_i32$2 = 0;
     $64_1 = i64toi32_i32$0 >>> i64toi32_i32$3 | 0;
    } else {
     i64toi32_i32$2 = i64toi32_i32$0 >>> i64toi32_i32$3 | 0;
     $64_1 = (((1 << i64toi32_i32$3 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$3 | 0) | 0 | (i64toi32_i32$5 >>> i64toi32_i32$3 | 0) | 0;
    }
    $62$hi = i64toi32_i32$2;
    i64toi32_i32$2 = $60$hi;
    i64toi32_i32$0 = $60_1;
    i64toi32_i32$5 = $62$hi;
    i64toi32_i32$4 = $64_1;
    i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
    i64toi32_i32$2 = i64toi32_i32$0 | i64toi32_i32$4 | 0;
    i64toi32_i32$0 = 524287;
    i64toi32_i32$4 = -1;
    i64toi32_i32$0 = i64toi32_i32$5 & i64toi32_i32$0 | 0;
    i64toi32_i32$5 = i64toi32_i32$2 & i64toi32_i32$4 | 0;
    i64toi32_i32$2 = 2146959360;
    i64toi32_i32$4 = 0;
    i64toi32_i32$2 = i64toi32_i32$0 | i64toi32_i32$2 | 0;
    $2_1 = i64toi32_i32$5 | i64toi32_i32$4 | 0;
    $2$hi = i64toi32_i32$2;
    break block;
   }
   i64toi32_i32$2 = 2146435072;
   $2_1 = 0;
   $2$hi = i64toi32_i32$2;
   i64toi32_i32$2 = $4$hi;
   i64toi32_i32$0 = $4_1;
   i64toi32_i32$5 = 1140785151;
   i64toi32_i32$4 = -1;
   if (i64toi32_i32$2 >>> 0 > i64toi32_i32$5 >>> 0 | ((i64toi32_i32$2 | 0) == (i64toi32_i32$5 | 0) & i64toi32_i32$0 >>> 0 > i64toi32_i32$4 >>> 0 | 0) | 0) {
    break block
   }
   i64toi32_i32$0 = 0;
   $2_1 = 0;
   $2$hi = i64toi32_i32$0;
   i64toi32_i32$0 = i64toi32_i32$2;
   i64toi32_i32$4 = $4_1;
   i64toi32_i32$2 = 0;
   i64toi32_i32$5 = 48;
   i64toi32_i32$3 = i64toi32_i32$5 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$5 & 63 | 0) >>> 0) {
    i64toi32_i32$2 = 0;
    $65_1 = i64toi32_i32$0 >>> i64toi32_i32$3 | 0;
   } else {
    i64toi32_i32$2 = i64toi32_i32$0 >>> i64toi32_i32$3 | 0;
    $65_1 = (((1 << i64toi32_i32$3 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$3 | 0) | 0 | (i64toi32_i32$4 >>> i64toi32_i32$3 | 0) | 0;
   }
   $0_1 = $65_1;
   if ($0_1 >>> 0 < 15249 >>> 0) {
    break block
   }
   i64toi32_i32$2 = $3$hi;
   $2_1 = $3_1;
   $2$hi = i64toi32_i32$2;
   i64toi32_i32$2 = $6$hi;
   i64toi32_i32$0 = $6_1;
   i64toi32_i32$4 = 65535;
   i64toi32_i32$5 = -1;
   i64toi32_i32$4 = i64toi32_i32$2 & i64toi32_i32$4 | 0;
   i64toi32_i32$2 = i64toi32_i32$0 & i64toi32_i32$5 | 0;
   i64toi32_i32$0 = 65536;
   i64toi32_i32$5 = 0;
   i64toi32_i32$0 = i64toi32_i32$4 | i64toi32_i32$0 | 0;
   $5_1 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
   $5$hi = i64toi32_i32$0;
   $7_1 = $5_1;
   $7$hi = i64toi32_i32$0;
   block1 : {
    $1_1 = $0_1 - 15233 | 0;
    if ($1_1 & 64 | 0) {
     i64toi32_i32$0 = $3$hi;
     i64toi32_i32$0 = 0;
     $85$hi = i64toi32_i32$0;
     i64toi32_i32$0 = $3$hi;
     i64toi32_i32$4 = $3_1;
     i64toi32_i32$2 = $85$hi;
     i64toi32_i32$5 = $1_1 + -64 | 0;
     i64toi32_i32$3 = i64toi32_i32$5 & 31 | 0;
     if (32 >>> 0 <= (i64toi32_i32$5 & 63 | 0) >>> 0) {
      i64toi32_i32$2 = i64toi32_i32$4 << i64toi32_i32$3 | 0;
      $66_1 = 0;
     } else {
      i64toi32_i32$2 = ((1 << i64toi32_i32$3 | 0) - 1 | 0) & (i64toi32_i32$4 >>> (32 - i64toi32_i32$3 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$3 | 0) | 0;
      $66_1 = i64toi32_i32$4 << i64toi32_i32$3 | 0;
     }
     $7_1 = $66_1;
     $7$hi = i64toi32_i32$2;
     i64toi32_i32$2 = 0;
     $2_1 = 0;
     $2$hi = i64toi32_i32$2;
     break block1;
    }
    if (!$1_1) {
     break block1
    }
    i64toi32_i32$2 = $7$hi;
    i64toi32_i32$2 = 0;
    $4_1 = $1_1;
    $4$hi = i64toi32_i32$2;
    i64toi32_i32$2 = $7$hi;
    i64toi32_i32$0 = $7_1;
    i64toi32_i32$4 = $4$hi;
    i64toi32_i32$5 = $4_1;
    i64toi32_i32$3 = i64toi32_i32$5 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$5 & 63 | 0) >>> 0) {
     i64toi32_i32$4 = i64toi32_i32$0 << i64toi32_i32$3 | 0;
     $67_1 = 0;
    } else {
     i64toi32_i32$4 = ((1 << i64toi32_i32$3 | 0) - 1 | 0) & (i64toi32_i32$0 >>> (32 - i64toi32_i32$3 | 0) | 0) | 0 | (i64toi32_i32$2 << i64toi32_i32$3 | 0) | 0;
     $67_1 = i64toi32_i32$0 << i64toi32_i32$3 | 0;
    }
    $93_1 = $67_1;
    $93$hi = i64toi32_i32$4;
    i64toi32_i32$4 = $2$hi;
    i64toi32_i32$4 = 0;
    $97$hi = i64toi32_i32$4;
    i64toi32_i32$4 = $2$hi;
    i64toi32_i32$2 = $2_1;
    i64toi32_i32$0 = $97$hi;
    i64toi32_i32$5 = 64 - $1_1 | 0;
    i64toi32_i32$3 = i64toi32_i32$5 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$5 & 63 | 0) >>> 0) {
     i64toi32_i32$0 = 0;
     $68_1 = i64toi32_i32$4 >>> i64toi32_i32$3 | 0;
    } else {
     i64toi32_i32$0 = i64toi32_i32$4 >>> i64toi32_i32$3 | 0;
     $68_1 = (((1 << i64toi32_i32$3 | 0) - 1 | 0) & i64toi32_i32$4 | 0) << (32 - i64toi32_i32$3 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$3 | 0) | 0;
    }
    $98$hi = i64toi32_i32$0;
    i64toi32_i32$0 = $93$hi;
    i64toi32_i32$4 = $93_1;
    i64toi32_i32$2 = $98$hi;
    i64toi32_i32$5 = $68_1;
    i64toi32_i32$2 = i64toi32_i32$0 | i64toi32_i32$2 | 0;
    $7_1 = i64toi32_i32$4 | i64toi32_i32$5 | 0;
    $7$hi = i64toi32_i32$2;
    i64toi32_i32$2 = $2$hi;
    i64toi32_i32$2 = $4$hi;
    i64toi32_i32$2 = $2$hi;
    i64toi32_i32$0 = $2_1;
    i64toi32_i32$4 = $4$hi;
    i64toi32_i32$5 = $4_1;
    i64toi32_i32$3 = i64toi32_i32$5 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$5 & 63 | 0) >>> 0) {
     i64toi32_i32$4 = i64toi32_i32$0 << i64toi32_i32$3 | 0;
     $69_1 = 0;
    } else {
     i64toi32_i32$4 = ((1 << i64toi32_i32$3 | 0) - 1 | 0) & (i64toi32_i32$0 >>> (32 - i64toi32_i32$3 | 0) | 0) | 0 | (i64toi32_i32$2 << i64toi32_i32$3 | 0) | 0;
     $69_1 = i64toi32_i32$0 << i64toi32_i32$3 | 0;
    }
    $2_1 = $69_1;
    $2$hi = i64toi32_i32$4;
   }
   i64toi32_i32$4 = $2$hi;
   i64toi32_i32$0 = $8_1;
   HEAP32[(i64toi32_i32$0 + 16 | 0) >> 2] = $2_1;
   HEAP32[(i64toi32_i32$0 + 20 | 0) >> 2] = i64toi32_i32$4;
   i64toi32_i32$4 = $7$hi;
   HEAP32[(i64toi32_i32$0 + 24 | 0) >> 2] = $7_1;
   HEAP32[(i64toi32_i32$0 + 28 | 0) >> 2] = i64toi32_i32$4;
   block2 : {
    $0_1 = 15361 - $0_1 | 0;
    if ($0_1 & 64 | 0) {
     i64toi32_i32$4 = $5$hi;
     i64toi32_i32$4 = 0;
     $114$hi = i64toi32_i32$4;
     i64toi32_i32$4 = $5$hi;
     i64toi32_i32$2 = $5_1;
     i64toi32_i32$0 = $114$hi;
     i64toi32_i32$5 = $0_1 + -64 | 0;
     i64toi32_i32$3 = i64toi32_i32$5 & 31 | 0;
     if (32 >>> 0 <= (i64toi32_i32$5 & 63 | 0) >>> 0) {
      i64toi32_i32$0 = 0;
      $70_1 = i64toi32_i32$4 >>> i64toi32_i32$3 | 0;
     } else {
      i64toi32_i32$0 = i64toi32_i32$4 >>> i64toi32_i32$3 | 0;
      $70_1 = (((1 << i64toi32_i32$3 | 0) - 1 | 0) & i64toi32_i32$4 | 0) << (32 - i64toi32_i32$3 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$3 | 0) | 0;
     }
     $3_1 = $70_1;
     $3$hi = i64toi32_i32$0;
     i64toi32_i32$0 = 0;
     $5_1 = 0;
     $5$hi = i64toi32_i32$0;
     break block2;
    }
    if (!$0_1) {
     break block2
    }
    i64toi32_i32$0 = $5$hi;
    i64toi32_i32$0 = 0;
    $121$hi = i64toi32_i32$0;
    i64toi32_i32$0 = $5$hi;
    i64toi32_i32$4 = $5_1;
    i64toi32_i32$2 = $121$hi;
    i64toi32_i32$5 = 64 - $0_1 | 0;
    i64toi32_i32$3 = i64toi32_i32$5 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$5 & 63 | 0) >>> 0) {
     i64toi32_i32$2 = i64toi32_i32$4 << i64toi32_i32$3 | 0;
     $71_1 = 0;
    } else {
     i64toi32_i32$2 = ((1 << i64toi32_i32$3 | 0) - 1 | 0) & (i64toi32_i32$4 >>> (32 - i64toi32_i32$3 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$3 | 0) | 0;
     $71_1 = i64toi32_i32$4 << i64toi32_i32$3 | 0;
    }
    $122_1 = $71_1;
    $122$hi = i64toi32_i32$2;
    i64toi32_i32$2 = $3$hi;
    i64toi32_i32$2 = 0;
    $2_1 = $0_1;
    $2$hi = i64toi32_i32$2;
    i64toi32_i32$2 = $3$hi;
    i64toi32_i32$0 = $3_1;
    i64toi32_i32$4 = $2$hi;
    i64toi32_i32$5 = $0_1;
    i64toi32_i32$3 = i64toi32_i32$5 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$5 & 63 | 0) >>> 0) {
     i64toi32_i32$4 = 0;
     $72_1 = i64toi32_i32$2 >>> i64toi32_i32$3 | 0;
    } else {
     i64toi32_i32$4 = i64toi32_i32$2 >>> i64toi32_i32$3 | 0;
     $72_1 = (((1 << i64toi32_i32$3 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$3 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$3 | 0) | 0;
    }
    $127$hi = i64toi32_i32$4;
    i64toi32_i32$4 = $122$hi;
    i64toi32_i32$2 = $122_1;
    i64toi32_i32$0 = $127$hi;
    i64toi32_i32$5 = $72_1;
    i64toi32_i32$0 = i64toi32_i32$4 | i64toi32_i32$0 | 0;
    $3_1 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
    $3$hi = i64toi32_i32$0;
    i64toi32_i32$0 = $5$hi;
    i64toi32_i32$0 = $2$hi;
    i64toi32_i32$0 = $5$hi;
    i64toi32_i32$4 = $5_1;
    i64toi32_i32$2 = $2$hi;
    i64toi32_i32$5 = $2_1;
    i64toi32_i32$3 = i64toi32_i32$5 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$5 & 63 | 0) >>> 0) {
     i64toi32_i32$2 = 0;
     $73_1 = i64toi32_i32$0 >>> i64toi32_i32$3 | 0;
    } else {
     i64toi32_i32$2 = i64toi32_i32$0 >>> i64toi32_i32$3 | 0;
     $73_1 = (((1 << i64toi32_i32$3 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$3 | 0) | 0 | (i64toi32_i32$4 >>> i64toi32_i32$3 | 0) | 0;
    }
    $5_1 = $73_1;
    $5$hi = i64toi32_i32$2;
   }
   i64toi32_i32$2 = $3$hi;
   i64toi32_i32$4 = $8_1;
   HEAP32[i64toi32_i32$4 >> 2] = $3_1;
   HEAP32[(i64toi32_i32$4 + 4 | 0) >> 2] = i64toi32_i32$2;
   i64toi32_i32$2 = $5$hi;
   HEAP32[(i64toi32_i32$4 + 8 | 0) >> 2] = $5_1;
   HEAP32[(i64toi32_i32$4 + 12 | 0) >> 2] = i64toi32_i32$2;
   i64toi32_i32$0 = i64toi32_i32$4;
   i64toi32_i32$2 = HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] | 0;
   i64toi32_i32$4 = HEAP32[(i64toi32_i32$0 + 12 | 0) >> 2] | 0;
   i64toi32_i32$0 = i64toi32_i32$2;
   i64toi32_i32$2 = 0;
   i64toi32_i32$5 = 4;
   i64toi32_i32$3 = i64toi32_i32$5 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$5 & 63 | 0) >>> 0) {
    i64toi32_i32$2 = i64toi32_i32$0 << i64toi32_i32$3 | 0;
    $74_1 = 0;
   } else {
    i64toi32_i32$2 = ((1 << i64toi32_i32$3 | 0) - 1 | 0) & (i64toi32_i32$0 >>> (32 - i64toi32_i32$3 | 0) | 0) | 0 | (i64toi32_i32$4 << i64toi32_i32$3 | 0) | 0;
    $74_1 = i64toi32_i32$0 << i64toi32_i32$3 | 0;
   }
   $138_1 = $74_1;
   $138$hi = i64toi32_i32$2;
   i64toi32_i32$4 = $8_1;
   i64toi32_i32$2 = HEAP32[i64toi32_i32$4 >> 2] | 0;
   i64toi32_i32$0 = HEAP32[(i64toi32_i32$4 + 4 | 0) >> 2] | 0;
   $3_1 = i64toi32_i32$2;
   $3$hi = i64toi32_i32$0;
   i64toi32_i32$4 = i64toi32_i32$2;
   i64toi32_i32$2 = 0;
   i64toi32_i32$5 = 60;
   i64toi32_i32$3 = i64toi32_i32$5 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$5 & 63 | 0) >>> 0) {
    i64toi32_i32$2 = 0;
    $75_1 = i64toi32_i32$0 >>> i64toi32_i32$3 | 0;
   } else {
    i64toi32_i32$2 = i64toi32_i32$0 >>> i64toi32_i32$3 | 0;
    $75_1 = (((1 << i64toi32_i32$3 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$3 | 0) | 0 | (i64toi32_i32$4 >>> i64toi32_i32$3 | 0) | 0;
   }
   $142$hi = i64toi32_i32$2;
   i64toi32_i32$2 = $138$hi;
   i64toi32_i32$0 = $138_1;
   i64toi32_i32$4 = $142$hi;
   i64toi32_i32$5 = $75_1;
   i64toi32_i32$4 = i64toi32_i32$2 | i64toi32_i32$4 | 0;
   $2_1 = i64toi32_i32$0 | i64toi32_i32$5 | 0;
   $2$hi = i64toi32_i32$4;
   i64toi32_i32$2 = $8_1;
   i64toi32_i32$4 = HEAP32[(i64toi32_i32$2 + 16 | 0) >> 2] | 0;
   i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 20 | 0) >> 2] | 0;
   $145_1 = i64toi32_i32$4;
   $145$hi = i64toi32_i32$0;
   i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 24 | 0) >> 2] | 0;
   i64toi32_i32$4 = HEAP32[(i64toi32_i32$2 + 28 | 0) >> 2] | 0;
   $147_1 = i64toi32_i32$0;
   $147$hi = i64toi32_i32$4;
   i64toi32_i32$4 = $145$hi;
   i64toi32_i32$2 = $145_1;
   i64toi32_i32$0 = $147$hi;
   i64toi32_i32$5 = $147_1;
   i64toi32_i32$0 = i64toi32_i32$4 | i64toi32_i32$0 | 0;
   i64toi32_i32$4 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
   i64toi32_i32$2 = 0;
   i64toi32_i32$5 = 0;
   $149_1 = (i64toi32_i32$4 | 0) != (i64toi32_i32$5 | 0) | (i64toi32_i32$0 | 0) != (i64toi32_i32$2 | 0) | 0;
   i64toi32_i32$4 = 0;
   $150$hi = i64toi32_i32$4;
   i64toi32_i32$4 = $3$hi;
   i64toi32_i32$5 = $3_1;
   i64toi32_i32$0 = 268435455;
   i64toi32_i32$2 = -1;
   i64toi32_i32$0 = i64toi32_i32$4 & i64toi32_i32$0 | 0;
   $152_1 = i64toi32_i32$5 & i64toi32_i32$2 | 0;
   $152$hi = i64toi32_i32$0;
   i64toi32_i32$0 = $150$hi;
   i64toi32_i32$4 = $149_1;
   i64toi32_i32$5 = $152$hi;
   i64toi32_i32$2 = $152_1;
   i64toi32_i32$5 = i64toi32_i32$0 | i64toi32_i32$5 | 0;
   $3_1 = i64toi32_i32$4 | i64toi32_i32$2 | 0;
   $3$hi = i64toi32_i32$5;
   i64toi32_i32$0 = $3_1;
   i64toi32_i32$4 = 134217728;
   i64toi32_i32$2 = 1;
   if (i64toi32_i32$5 >>> 0 > i64toi32_i32$4 >>> 0 | ((i64toi32_i32$5 | 0) == (i64toi32_i32$4 | 0) & i64toi32_i32$0 >>> 0 >= i64toi32_i32$2 >>> 0 | 0) | 0) {
    i64toi32_i32$0 = $2$hi;
    i64toi32_i32$2 = $2_1;
    i64toi32_i32$5 = 0;
    i64toi32_i32$4 = 1;
    i64toi32_i32$3 = i64toi32_i32$2 + i64toi32_i32$4 | 0;
    i64toi32_i32$1 = i64toi32_i32$0 + i64toi32_i32$5 | 0;
    if (i64toi32_i32$3 >>> 0 < i64toi32_i32$4 >>> 0) {
     i64toi32_i32$1 = i64toi32_i32$1 + 1 | 0
    }
    $2_1 = i64toi32_i32$3;
    $2$hi = i64toi32_i32$1;
    break block;
   }
   i64toi32_i32$1 = $3$hi;
   i64toi32_i32$0 = $3_1;
   i64toi32_i32$2 = 134217728;
   i64toi32_i32$4 = 0;
   if ((i64toi32_i32$0 | 0) != (i64toi32_i32$4 | 0) | (i64toi32_i32$1 | 0) != (i64toi32_i32$2 | 0) | 0) {
    break block
   }
   i64toi32_i32$0 = $2$hi;
   i64toi32_i32$4 = $2_1;
   i64toi32_i32$1 = 0;
   i64toi32_i32$2 = 1;
   i64toi32_i32$1 = i64toi32_i32$0 & i64toi32_i32$1 | 0;
   $161$hi = i64toi32_i32$1;
   i64toi32_i32$1 = i64toi32_i32$0;
   i64toi32_i32$1 = $161$hi;
   i64toi32_i32$0 = i64toi32_i32$4 & i64toi32_i32$2 | 0;
   i64toi32_i32$4 = $2$hi;
   i64toi32_i32$2 = $2_1;
   i64toi32_i32$5 = i64toi32_i32$0 + i64toi32_i32$2 | 0;
   i64toi32_i32$3 = i64toi32_i32$1 + i64toi32_i32$4 | 0;
   if (i64toi32_i32$5 >>> 0 < i64toi32_i32$2 >>> 0) {
    i64toi32_i32$3 = i64toi32_i32$3 + 1 | 0
   }
   $2_1 = i64toi32_i32$5;
   $2$hi = i64toi32_i32$3;
  }
  global$0 = $8_1 + 32 | 0;
  i64toi32_i32$3 = $2$hi;
  i64toi32_i32$3 = $6$hi;
  i64toi32_i32$1 = $6_1;
  i64toi32_i32$0 = -2147483648;
  i64toi32_i32$2 = 0;
  i64toi32_i32$0 = i64toi32_i32$3 & i64toi32_i32$0 | 0;
  $169_1 = i64toi32_i32$1 & i64toi32_i32$2 | 0;
  $169$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $2$hi;
  i64toi32_i32$3 = $2_1;
  i64toi32_i32$1 = $169$hi;
  i64toi32_i32$2 = $169_1;
  i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
  wasm2js_scratch_store_i32(0 | 0, i64toi32_i32$3 | i64toi32_i32$2 | 0 | 0);
  wasm2js_scratch_store_i32(1 | 0, i64toi32_i32$1 | 0);
  (wasm2js_i32$0 = $9_1, wasm2js_f64$0 = +wasm2js_scratch_load_f64()), HEAPF64[wasm2js_i32$0 >> 3] = wasm2js_f64$0;
 }
 
 function $141($0_1, $1_1, $2_1, $3_1, $4_1, $5_1) {
  $0_1 = $0_1 | 0;
  $1_1 = +$1_1;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  $5_1 = $5_1 | 0;
  var $6_1 = 0, $7_1 = 0, $8_1 = 0, $10_1 = 0, $9_1 = 0, $12_1 = 0, $11_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, i64toi32_i32$4 = 0, $13_1 = 0, i64toi32_i32$3 = 0, $14_1 = 0, i64toi32_i32$5 = 0, $15_1 = 0, $16_1 = 0, $17_1 = 0, $24_1 = 0.0, $25_1 = 0, $18_1 = 0, $20_1 = 0, $25$hi = 0, $19_1 = 0, $21_1 = 0, $53_1 = 0, $54_1 = 0, $55_1 = 0, $113_1 = 0, $140_1 = 0, $26$hi = 0, $56_1 = 0, $27$hi = 0, $23_1 = 0, $899 = 0, $958 = 0, $132_1 = 0, $26_1 = 0, $170_1 = 0, $172_1 = 0, $172$hi = 0, $174$hi = 0, $176$hi = 0, $181$hi = 0, $22_1 = 0, $396 = 0.0, $783 = 0, $893 = 0, $943 = 0, $944 = 0, $945 = 0;
  $12_1 = global$0 - 560 | 0;
  global$0 = $12_1;
  HEAP32[($12_1 + 44 | 0) >> 2] = 0;
  block : {
   wasm2js_scratch_store_f64(+$1_1);
   i64toi32_i32$0 = wasm2js_scratch_load_i32(1 | 0) | 0;
   $25_1 = wasm2js_scratch_load_i32(0 | 0) | 0;
   $25$hi = i64toi32_i32$0;
   i64toi32_i32$2 = $25_1;
   i64toi32_i32$1 = 0;
   i64toi32_i32$3 = 0;
   if ((i64toi32_i32$0 | 0) < (i64toi32_i32$1 | 0)) {
    $53_1 = 1
   } else {
    if ((i64toi32_i32$0 | 0) <= (i64toi32_i32$1 | 0)) {
     if (i64toi32_i32$2 >>> 0 >= i64toi32_i32$3 >>> 0) {
      $54_1 = 0
     } else {
      $54_1 = 1
     }
     $55_1 = $54_1;
    } else {
     $55_1 = 0
    }
    $53_1 = $55_1;
   }
   if ($53_1) {
    $17_1 = 1;
    $19_1 = 1177;
    $1_1 = -$1_1;
    wasm2js_scratch_store_f64(+$1_1);
    i64toi32_i32$2 = wasm2js_scratch_load_i32(1 | 0) | 0;
    $25_1 = wasm2js_scratch_load_i32(0 | 0) | 0;
    $25$hi = i64toi32_i32$2;
    break block;
   }
   if ($4_1 & 2048 | 0) {
    $17_1 = 1;
    $19_1 = 1180;
    break block;
   }
   $17_1 = $4_1 & 1 | 0;
   $19_1 = $17_1 ? 1183 : 1178;
   $21_1 = !$17_1;
  }
  block1 : {
   i64toi32_i32$2 = $25$hi;
   i64toi32_i32$3 = $25_1;
   i64toi32_i32$0 = 2146435072;
   i64toi32_i32$1 = 0;
   i64toi32_i32$0 = i64toi32_i32$2 & i64toi32_i32$0 | 0;
   i64toi32_i32$2 = i64toi32_i32$3 & i64toi32_i32$1 | 0;
   i64toi32_i32$3 = 2146435072;
   i64toi32_i32$1 = 0;
   if ((i64toi32_i32$2 | 0) == (i64toi32_i32$1 | 0) & (i64toi32_i32$0 | 0) == (i64toi32_i32$3 | 0) | 0) {
    $3_1 = $17_1 + 3 | 0;
    $11($0_1 | 0, 32 | 0, $2_1 | 0, $3_1 | 0, $4_1 & -65537 | 0 | 0);
    $8($0_1 | 0, $19_1 | 0, $17_1 | 0);
    $5_1 = $5_1 & 32 | 0;
    $8($0_1 | 0, ($1_1 != $1_1 ? ($5_1 ? 2797 : 3932) : $5_1 ? 3425 : 3936) | 0, 3 | 0);
    $11($0_1 | 0, 32 | 0, $2_1 | 0, $3_1 | 0, $4_1 ^ 8192 | 0 | 0);
    $10_1 = ($2_1 | 0) < ($3_1 | 0) ? $3_1 : $2_1;
    break block1;
   }
   $18_1 = $12_1 + 16 | 0;
   block3 : {
    block4 : {
     block2 : {
      $1_1 = +$110(+$1_1, $12_1 + 44 | 0 | 0);
      $1_1 = $1_1 + $1_1;
      if ($1_1 != 0.0) {
       $6_1 = HEAP32[($12_1 + 44 | 0) >> 2] | 0;
       HEAP32[($12_1 + 44 | 0) >> 2] = $6_1 - 1 | 0;
       $14_1 = $5_1 | 32 | 0;
       if (($14_1 | 0) != (97 | 0)) {
        break block2
       }
       break block3;
      }
      $14_1 = $5_1 | 32 | 0;
      if (($14_1 | 0) == (97 | 0)) {
       break block3
      }
      $9_1 = HEAP32[($12_1 + 44 | 0) >> 2] | 0;
      $113_1 = ($3_1 | 0) < (0 | 0) ? 6 : $3_1;
      break block4;
     }
     $9_1 = $6_1 - 29 | 0;
     HEAP32[($12_1 + 44 | 0) >> 2] = $9_1;
     $1_1 = $1_1 * 268435456.0;
     $113_1 = ($3_1 | 0) < (0 | 0) ? 6 : $3_1;
    }
    $11_1 = $113_1;
    $13_1 = ($12_1 + 48 | 0) + (($9_1 | 0) >= (0 | 0) ? 288 : 0) | 0;
    $7_1 = $13_1;
    label : while (1) {
     $132_1 = $7_1;
     block5 : {
      if ($1_1 < 4294967296.0 & $1_1 >= 0.0 | 0) {
       $140_1 = ~~$1_1 >>> 0;
       break block5;
      }
      $140_1 = 0;
     }
     $3_1 = $140_1;
     HEAP32[$132_1 >> 2] = $3_1;
     $7_1 = $7_1 + 4 | 0;
     $1_1 = ($1_1 - +($3_1 >>> 0)) * 1.0e9;
     if ($1_1 != 0.0) {
      continue label
     }
     break label;
    };
    block6 : {
     if (($9_1 | 0) <= (0 | 0)) {
      $3_1 = $9_1;
      $6_1 = $7_1;
      $8_1 = $13_1;
      break block6;
     }
     $8_1 = $13_1;
     $3_1 = $9_1;
     label3 : while (1) {
      $3_1 = ($3_1 | 0) >= (29 | 0) ? 29 : $3_1;
      block7 : {
       $6_1 = $7_1 - 4 | 0;
       if ($6_1 >>> 0 < $8_1 >>> 0) {
        break block7
       }
       i64toi32_i32$2 = 0;
       $26_1 = $3_1;
       $26$hi = i64toi32_i32$2;
       i64toi32_i32$2 = 0;
       $25_1 = 0;
       $25$hi = i64toi32_i32$2;
       label1 : while (1) {
        $170_1 = $6_1;
        i64toi32_i32$2 = $25$hi;
        i64toi32_i32$1 = $25_1;
        i64toi32_i32$0 = 0;
        i64toi32_i32$3 = -1;
        i64toi32_i32$0 = i64toi32_i32$2 & i64toi32_i32$0 | 0;
        $172_1 = i64toi32_i32$1 & i64toi32_i32$3 | 0;
        $172$hi = i64toi32_i32$0;
        i64toi32_i32$2 = $6_1;
        i64toi32_i32$0 = HEAP32[$6_1 >> 2] | 0;
        i64toi32_i32$1 = 0;
        $174$hi = i64toi32_i32$1;
        i64toi32_i32$1 = $26$hi;
        i64toi32_i32$1 = $174$hi;
        i64toi32_i32$2 = i64toi32_i32$0;
        i64toi32_i32$0 = $26$hi;
        i64toi32_i32$3 = $26_1;
        i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
         i64toi32_i32$0 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
         $56_1 = 0;
        } else {
         i64toi32_i32$0 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
         $56_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
        }
        $176$hi = i64toi32_i32$0;
        i64toi32_i32$0 = $172$hi;
        i64toi32_i32$1 = $172_1;
        i64toi32_i32$2 = $176$hi;
        i64toi32_i32$3 = $56_1;
        i64toi32_i32$4 = i64toi32_i32$1 + i64toi32_i32$3 | 0;
        i64toi32_i32$5 = i64toi32_i32$0 + i64toi32_i32$2 | 0;
        if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
         i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
        }
        $27$hi = i64toi32_i32$5;
        i64toi32_i32$1 = 0;
        i64toi32_i32$1 = __wasm_i64_udiv(i64toi32_i32$4 | 0, i64toi32_i32$5 | 0, 1e9 | 0, i64toi32_i32$1 | 0) | 0;
        i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
        $25_1 = i64toi32_i32$1;
        $25$hi = i64toi32_i32$5;
        i64toi32_i32$1 = 0;
        i64toi32_i32$1 = __wasm_i64_mul($25_1 | 0, i64toi32_i32$5 | 0, -1e9 | 0, i64toi32_i32$1 | 0) | 0;
        i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
        $181$hi = i64toi32_i32$5;
        i64toi32_i32$5 = $27$hi;
        i64toi32_i32$5 = $181$hi;
        i64toi32_i32$0 = i64toi32_i32$1;
        i64toi32_i32$1 = $27$hi;
        i64toi32_i32$3 = i64toi32_i32$4;
        i64toi32_i32$2 = i64toi32_i32$0 + i64toi32_i32$4 | 0;
        i64toi32_i32$4 = i64toi32_i32$5 + i64toi32_i32$1 | 0;
        if (i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0) {
         i64toi32_i32$4 = i64toi32_i32$4 + 1 | 0
        }
        HEAP32[$170_1 >> 2] = i64toi32_i32$2;
        $6_1 = $6_1 - 4 | 0;
        if ($6_1 >>> 0 >= $8_1 >>> 0) {
         continue label1
        }
        break label1;
       };
       i64toi32_i32$4 = $25$hi;
       $6_1 = $25_1;
       if (!$6_1) {
        break block7
       }
       $8_1 = $8_1 - 4 | 0;
       HEAP32[$8_1 >> 2] = $6_1;
      }
      label2 : while (1) {
       $6_1 = $7_1;
       if ($8_1 >>> 0 < $6_1 >>> 0) {
        $7_1 = $6_1 - 4 | 0;
        if (!(HEAP32[$7_1 >> 2] | 0)) {
         continue label2
        }
       }
       break label2;
      };
      $3_1 = (HEAP32[($12_1 + 44 | 0) >> 2] | 0) - $3_1 | 0;
      HEAP32[($12_1 + 44 | 0) >> 2] = $3_1;
      $7_1 = $6_1;
      if (($3_1 | 0) > (0 | 0)) {
       continue label3
      }
      break label3;
     };
    }
    if (($3_1 | 0) < (0 | 0)) {
     $15_1 = ((($11_1 + 25 | 0) >>> 0) / (9 >>> 0) | 0) + 1 | 0;
     $16_1 = ($14_1 | 0) == (102 | 0);
     label5 : while (1) {
      $3_1 = 0 - $3_1 | 0;
      $10_1 = ($3_1 | 0) >= (9 | 0) ? 9 : $3_1;
      block8 : {
       if ($6_1 >>> 0 <= $8_1 >>> 0) {
        $7_1 = HEAP32[$8_1 >> 2] | 0;
        break block8;
       }
       $20_1 = 1e9 >>> $10_1 | 0;
       $22_1 = (-1 << $10_1 | 0) ^ -1 | 0;
       $3_1 = 0;
       $7_1 = $8_1;
       label4 : while (1) {
        $23_1 = HEAP32[$7_1 >> 2] | 0;
        HEAP32[$7_1 >> 2] = $3_1 + ($23_1 >>> $10_1 | 0) | 0;
        $3_1 = Math_imul($22_1 & $23_1 | 0, $20_1);
        $7_1 = $7_1 + 4 | 0;
        if ($7_1 >>> 0 < $6_1 >>> 0) {
         continue label4
        }
        break label4;
       };
       $7_1 = HEAP32[$8_1 >> 2] | 0;
       if (!$3_1) {
        break block8
       }
       HEAP32[$6_1 >> 2] = $3_1;
       $6_1 = $6_1 + 4 | 0;
      }
      $3_1 = (HEAP32[($12_1 + 44 | 0) >> 2] | 0) + $10_1 | 0;
      HEAP32[($12_1 + 44 | 0) >> 2] = $3_1;
      $8_1 = $8_1 + (!$7_1 << 2 | 0) | 0;
      $7_1 = $16_1 ? $13_1 : $8_1;
      $6_1 = (($6_1 - $7_1 | 0) >> 2 | 0 | 0) > ($15_1 | 0) ? $7_1 + ($15_1 << 2 | 0) | 0 : $6_1;
      if (($3_1 | 0) < (0 | 0)) {
       continue label5
      }
      break label5;
     };
    }
    $3_1 = 0;
    block9 : {
     if ($6_1 >>> 0 <= $8_1 >>> 0) {
      break block9
     }
     $3_1 = Math_imul(($13_1 - $8_1 | 0) >> 2 | 0, 9);
     $7_1 = 10;
     $10_1 = HEAP32[$8_1 >> 2] | 0;
     if ($10_1 >>> 0 < 10 >>> 0) {
      break block9
     }
     label6 : while (1) {
      $3_1 = $3_1 + 1 | 0;
      $7_1 = Math_imul($7_1, 10);
      if ($10_1 >>> 0 >= $7_1 >>> 0) {
       continue label6
      }
      break label6;
     };
    }
    $7_1 = ($11_1 - (($14_1 | 0) != (102 | 0) ? $3_1 : 0) | 0) - (($14_1 | 0) == (103 | 0) & ($11_1 | 0) != (0 | 0) | 0) | 0;
    if (($7_1 | 0) < (Math_imul(($6_1 - $13_1 | 0) >> 2 | 0, 9) - 9 | 0 | 0)) {
     $10_1 = $7_1 + 9216 | 0;
     $15_1 = ($10_1 | 0) / (9 | 0) | 0;
     $9_1 = (((($9_1 | 0) < (0 | 0) ? 4 : 292) + $12_1 | 0) + ($15_1 << 2 | 0) | 0) - 4048 | 0;
     $7_1 = 10;
     $10_1 = Math_imul($15_1, -9) + $10_1 | 0;
     if (($10_1 | 0) <= (7 | 0)) {
      label7 : while (1) {
       $7_1 = Math_imul($7_1, 10);
       $10_1 = $10_1 + 1 | 0;
       if (($10_1 | 0) != (8 | 0)) {
        continue label7
       }
       break label7;
      }
     }
     block10 : {
      $16_1 = HEAP32[$9_1 >> 2] | 0;
      $15_1 = ($16_1 >>> 0) / ($7_1 >>> 0) | 0;
      $10_1 = Math_imul($15_1, $7_1);
      $20_1 = $9_1 + 4 | 0;
      if (($16_1 | 0) == ($10_1 | 0) & ($20_1 | 0) == ($6_1 | 0) | 0) {
       break block10
      }
      $16_1 = $16_1 - $10_1 | 0;
      block11 : {
       if (!($15_1 & 1 | 0)) {
        $1_1 = 9007199254740992.0;
        if (($7_1 | 0) != (1e9 | 0) | $8_1 >>> 0 >= $9_1 >>> 0 | 0) {
         break block11
        }
        if (!((HEAPU8[($9_1 - 4 | 0) >> 0] | 0) & 1 | 0)) {
         break block11
        }
       }
       $1_1 = 9007199254740994.0;
      }
      $396 = ($6_1 | 0) == ($20_1 | 0) ? 1.0 : 1.5;
      $20_1 = $7_1 >>> 1 | 0;
      $24_1 = $16_1 >>> 0 < $20_1 >>> 0 ? .5 : ($16_1 | 0) == ($20_1 | 0) ? $396 : 1.5;
      block12 : {
       if ($21_1) {
        break block12
       }
       if ((HEAPU8[$19_1 >> 0] | 0 | 0) != (45 | 0)) {
        break block12
       }
       $24_1 = -$24_1;
       $1_1 = -$1_1;
      }
      HEAP32[$9_1 >> 2] = $10_1;
      if ($1_1 + $24_1 == $1_1) {
       break block10
      }
      $3_1 = $7_1 + $10_1 | 0;
      HEAP32[$9_1 >> 2] = $3_1;
      if ($3_1 >>> 0 >= 1e9 >>> 0) {
       label8 : while (1) {
        HEAP32[$9_1 >> 2] = 0;
        $9_1 = $9_1 - 4 | 0;
        if ($8_1 >>> 0 > $9_1 >>> 0) {
         $8_1 = $8_1 - 4 | 0;
         HEAP32[$8_1 >> 2] = 0;
        }
        $3_1 = (HEAP32[$9_1 >> 2] | 0) + 1 | 0;
        HEAP32[$9_1 >> 2] = $3_1;
        if ($3_1 >>> 0 > 999999999 >>> 0) {
         continue label8
        }
        break label8;
       }
      }
      $3_1 = Math_imul(($13_1 - $8_1 | 0) >> 2 | 0, 9);
      $7_1 = 10;
      $10_1 = HEAP32[$8_1 >> 2] | 0;
      if ($10_1 >>> 0 < 10 >>> 0) {
       break block10
      }
      label9 : while (1) {
       $3_1 = $3_1 + 1 | 0;
       $7_1 = Math_imul($7_1, 10);
       if ($10_1 >>> 0 >= $7_1 >>> 0) {
        continue label9
       }
       break label9;
      };
     }
     $7_1 = $9_1 + 4 | 0;
     $6_1 = $6_1 >>> 0 > $7_1 >>> 0 ? $7_1 : $6_1;
    }
    label10 : while (1) {
     $7_1 = $6_1;
     $10_1 = $6_1 >>> 0 <= $8_1 >>> 0;
     if (!$10_1) {
      $6_1 = $6_1 - 4 | 0;
      if (!(HEAP32[$6_1 >> 2] | 0)) {
       continue label10
      }
     }
     break label10;
    };
    block13 : {
     if (($14_1 | 0) != (103 | 0)) {
      $9_1 = $4_1 & 8 | 0;
      break block13;
     }
     $6_1 = $11_1 ? $11_1 : 1;
     $9_1 = ($6_1 | 0) > ($3_1 | 0) & ($3_1 | 0) > (-5 | 0) | 0;
     $11_1 = ($9_1 ? $3_1 ^ -1 | 0 : -1) + $6_1 | 0;
     $5_1 = ($9_1 ? -1 : -2) + $5_1 | 0;
     $9_1 = $4_1 & 8 | 0;
     if ($9_1) {
      break block13
     }
     $6_1 = -9;
     block14 : {
      if ($10_1) {
       break block14
      }
      $14_1 = HEAP32[($7_1 - 4 | 0) >> 2] | 0;
      if (!$14_1) {
       break block14
      }
      $10_1 = 10;
      $6_1 = 0;
      if (($14_1 >>> 0) % (10 >>> 0) | 0) {
       break block14
      }
      label11 : while (1) {
       $9_1 = $6_1;
       $6_1 = $6_1 + 1 | 0;
       $10_1 = Math_imul($10_1, 10);
       if (!(($14_1 >>> 0) % ($10_1 >>> 0) | 0)) {
        continue label11
       }
       break label11;
      };
      $6_1 = $9_1 ^ -1 | 0;
     }
     $10_1 = Math_imul(($7_1 - $13_1 | 0) >> 2 | 0, 9);
     if (($5_1 & -33 | 0 | 0) == (70 | 0)) {
      $9_1 = 0;
      $6_1 = ($6_1 + $10_1 | 0) - 9 | 0;
      $6_1 = ($6_1 | 0) > (0 | 0) ? $6_1 : 0;
      $11_1 = ($6_1 | 0) > ($11_1 | 0) ? $11_1 : $6_1;
      break block13;
     }
     $9_1 = 0;
     $6_1 = (($3_1 + $10_1 | 0) + $6_1 | 0) - 9 | 0;
     $6_1 = ($6_1 | 0) > (0 | 0) ? $6_1 : 0;
     $11_1 = ($6_1 | 0) > ($11_1 | 0) ? $11_1 : $6_1;
    }
    $10_1 = -1;
    $16_1 = $9_1 | $11_1 | 0;
    if (($11_1 | 0) > (($16_1 ? 2147483645 : 2147483646) | 0)) {
     break block1
    }
    $14_1 = ($11_1 + (($16_1 | 0) != (0 | 0)) | 0) + 1 | 0;
    block15 : {
     $21_1 = $5_1 & -33 | 0;
     if (($21_1 | 0) == (70 | 0)) {
      if (($3_1 | 0) > ($14_1 ^ 2147483647 | 0 | 0)) {
       break block1
      }
      $6_1 = ($3_1 | 0) > (0 | 0) ? $3_1 : 0;
      break block15;
     }
     $6_1 = $3_1 >> 31 | 0;
     i64toi32_i32$4 = 0;
     $6_1 = $41(($3_1 ^ $6_1 | 0) - $6_1 | 0 | 0, i64toi32_i32$4 | 0, $18_1 | 0) | 0;
     if (($18_1 - $6_1 | 0 | 0) <= (1 | 0)) {
      label12 : while (1) {
       $6_1 = $6_1 - 1 | 0;
       HEAP8[$6_1 >> 0] = 48;
       if (($18_1 - $6_1 | 0 | 0) < (2 | 0)) {
        continue label12
       }
       break label12;
      }
     }
     $15_1 = $6_1 - 2 | 0;
     HEAP8[$15_1 >> 0] = $5_1;
     HEAP8[($6_1 - 1 | 0) >> 0] = ($3_1 | 0) < (0 | 0) ? 45 : 43;
     $6_1 = $18_1 - $15_1 | 0;
     if (($6_1 | 0) > ($14_1 ^ 2147483647 | 0 | 0)) {
      break block1
     }
    }
    $3_1 = $6_1 + $14_1 | 0;
    if (($3_1 | 0) > ($17_1 ^ 2147483647 | 0 | 0)) {
     break block1
    }
    $5_1 = $3_1 + $17_1 | 0;
    $11($0_1 | 0, 32 | 0, $2_1 | 0, $5_1 | 0, $4_1 | 0);
    $8($0_1 | 0, $19_1 | 0, $17_1 | 0);
    $11($0_1 | 0, 48 | 0, $2_1 | 0, $5_1 | 0, $4_1 ^ 65536 | 0 | 0);
    block21 : {
     block18 : {
      block17 : {
       if (($21_1 | 0) == (70 | 0)) {
        $6_1 = $12_1 + 16 | 0;
        $3_1 = $6_1 | 8 | 0;
        $9_1 = $6_1 | 9 | 0;
        $10_1 = $8_1 >>> 0 > $13_1 >>> 0 ? $13_1 : $8_1;
        $8_1 = $10_1;
        label14 : while (1) {
         i64toi32_i32$5 = $8_1;
         i64toi32_i32$4 = HEAP32[$8_1 >> 2] | 0;
         i64toi32_i32$0 = 0;
         $6_1 = $41(i64toi32_i32$4 | 0, i64toi32_i32$0 | 0, $9_1 | 0) | 0;
         block16 : {
          if (($8_1 | 0) != ($10_1 | 0)) {
           if ($6_1 >>> 0 <= ($12_1 + 16 | 0) >>> 0) {
            break block16
           }
           label13 : while (1) {
            $6_1 = $6_1 - 1 | 0;
            HEAP8[$6_1 >> 0] = 48;
            if ($6_1 >>> 0 > ($12_1 + 16 | 0) >>> 0) {
             continue label13
            }
            break label13;
           };
           break block16;
          }
          if (($6_1 | 0) != ($9_1 | 0)) {
           break block16
          }
          HEAP8[($12_1 + 24 | 0) >> 0] = 48;
          $6_1 = $3_1;
         }
         $8($0_1 | 0, $6_1 | 0, $9_1 - $6_1 | 0 | 0);
         $8_1 = $8_1 + 4 | 0;
         if ($8_1 >>> 0 <= $13_1 >>> 0) {
          continue label14
         }
         break label14;
        };
        if ($16_1) {
         $8($0_1 | 0, 4748 | 0, 1 | 0)
        }
        if (($11_1 | 0) <= (0 | 0) | $7_1 >>> 0 <= $8_1 >>> 0 | 0) {
         break block17
        }
        label16 : while (1) {
         i64toi32_i32$5 = $8_1;
         i64toi32_i32$0 = HEAP32[$8_1 >> 2] | 0;
         i64toi32_i32$4 = 0;
         $6_1 = $41(i64toi32_i32$0 | 0, i64toi32_i32$4 | 0, $9_1 | 0) | 0;
         if ($6_1 >>> 0 > ($12_1 + 16 | 0) >>> 0) {
          label15 : while (1) {
           $6_1 = $6_1 - 1 | 0;
           HEAP8[$6_1 >> 0] = 48;
           if ($6_1 >>> 0 > ($12_1 + 16 | 0) >>> 0) {
            continue label15
           }
           break label15;
          }
         }
         $8($0_1 | 0, $6_1 | 0, (($11_1 | 0) >= (9 | 0) ? 9 : $11_1) | 0);
         $6_1 = $11_1 - 9 | 0;
         $8_1 = $8_1 + 4 | 0;
         if ($8_1 >>> 0 >= $7_1 >>> 0) {
          break block18
         }
         $3_1 = ($11_1 | 0) > (9 | 0);
         $11_1 = $6_1;
         if ($3_1) {
          continue label16
         }
         break label16;
        };
        break block18;
       }
       block19 : {
        if (($11_1 | 0) < (0 | 0)) {
         break block19
        }
        $10_1 = $7_1 >>> 0 > $8_1 >>> 0 ? $7_1 : $8_1 + 4 | 0;
        $6_1 = $12_1 + 16 | 0;
        $3_1 = $6_1 | 8 | 0;
        $13_1 = $6_1 | 9 | 0;
        $7_1 = $8_1;
        label18 : while (1) {
         i64toi32_i32$5 = $7_1;
         i64toi32_i32$4 = HEAP32[$7_1 >> 2] | 0;
         i64toi32_i32$0 = 0;
         $6_1 = $41(i64toi32_i32$4 | 0, i64toi32_i32$0 | 0, $13_1 | 0) | 0;
         if (($13_1 | 0) == ($6_1 | 0)) {
          HEAP8[($12_1 + 24 | 0) >> 0] = 48;
          $6_1 = $3_1;
         }
         block20 : {
          if (($7_1 | 0) != ($8_1 | 0)) {
           if ($6_1 >>> 0 <= ($12_1 + 16 | 0) >>> 0) {
            break block20
           }
           label17 : while (1) {
            $6_1 = $6_1 - 1 | 0;
            HEAP8[$6_1 >> 0] = 48;
            if ($6_1 >>> 0 > ($12_1 + 16 | 0) >>> 0) {
             continue label17
            }
            break label17;
           };
           break block20;
          }
          $8($0_1 | 0, $6_1 | 0, 1 | 0);
          $6_1 = $6_1 + 1 | 0;
          if (!($9_1 | $11_1 | 0)) {
           break block20
          }
          $8($0_1 | 0, 4748 | 0, 1 | 0);
         }
         $783 = $6_1;
         $6_1 = $13_1 - $6_1 | 0;
         $8($0_1 | 0, $783 | 0, (($6_1 | 0) > ($11_1 | 0) ? $11_1 : $6_1) | 0);
         $11_1 = $11_1 - $6_1 | 0;
         $7_1 = $7_1 + 4 | 0;
         if ($7_1 >>> 0 >= $10_1 >>> 0) {
          break block19
         }
         if (($11_1 | 0) >= (0 | 0)) {
          continue label18
         }
         break label18;
        };
       }
       $11($0_1 | 0, 48 | 0, $11_1 + 18 | 0 | 0, 18 | 0, 0 | 0);
       $8($0_1 | 0, $15_1 | 0, $18_1 - $15_1 | 0 | 0);
       break block21;
      }
      $6_1 = $11_1;
     }
     $11($0_1 | 0, 48 | 0, $6_1 + 9 | 0 | 0, 9 | 0, 0 | 0);
    }
    $11($0_1 | 0, 32 | 0, $2_1 | 0, $5_1 | 0, $4_1 ^ 8192 | 0 | 0);
    $10_1 = ($2_1 | 0) < ($5_1 | 0) ? $5_1 : $2_1;
    break block1;
   }
   $11_1 = $19_1 + ((($5_1 << 26 | 0) >> 31 | 0) & 9 | 0) | 0;
   block22 : {
    if ($3_1 >>> 0 > 11 >>> 0) {
     break block22
    }
    $6_1 = 12 - $3_1 | 0;
    $24_1 = 16.0;
    label19 : while (1) {
     $24_1 = $24_1 * 16.0;
     $6_1 = $6_1 - 1 | 0;
     if ($6_1) {
      continue label19
     }
     break label19;
    };
    if ((HEAPU8[$11_1 >> 0] | 0 | 0) == (45 | 0)) {
     $1_1 = -($24_1 + (-$1_1 - $24_1));
     break block22;
    }
    $1_1 = $1_1 + $24_1 - $24_1;
   }
   $9_1 = $17_1 | 2 | 0;
   $8_1 = $5_1 & 32 | 0;
   $7_1 = HEAP32[($12_1 + 44 | 0) >> 2] | 0;
   $6_1 = $7_1 >> 31 | 0;
   i64toi32_i32$0 = 0;
   $6_1 = $41(($7_1 ^ $6_1 | 0) - $6_1 | 0 | 0, i64toi32_i32$0 | 0, $18_1 | 0) | 0;
   if (($18_1 | 0) == ($6_1 | 0)) {
    HEAP8[($12_1 + 15 | 0) >> 0] = 48;
    $6_1 = $12_1 + 15 | 0;
   }
   $13_1 = $6_1 - 2 | 0;
   HEAP8[$13_1 >> 0] = $5_1 + 15 | 0;
   HEAP8[($6_1 - 1 | 0) >> 0] = ($7_1 | 0) < (0 | 0) ? 45 : 43;
   $6_1 = $4_1 & 8 | 0;
   $7_1 = $12_1 + 16 | 0;
   label20 : while (1) {
    $5_1 = $7_1;
    $893 = $7_1;
    block23 : {
     if (Math_abs($1_1) < 2147483648.0) {
      $899 = ~~$1_1;
      break block23;
     }
     $899 = -2147483648;
    }
    $7_1 = $899;
    HEAP8[$893 >> 0] = HEAPU8[($7_1 + 6032 | 0) >> 0] | 0 | $8_1 | 0;
    $1_1 = ($1_1 - +($7_1 | 0)) * 16.0;
    $7_1 = $5_1 + 1 | 0;
    if (!(!($6_1 | ($3_1 | 0) > (0 | 0) | 0) & $1_1 == 0.0 | 0 | ($7_1 - ($12_1 + 16 | 0) | 0 | 0) != (1 | 0) | 0)) {
     HEAP8[($5_1 + 1 | 0) >> 0] = 46;
     $7_1 = $5_1 + 2 | 0;
    }
    if ($1_1 != 0.0) {
     continue label20
    }
    break label20;
   };
   $10_1 = -1;
   $5_1 = $18_1 - $13_1 | 0;
   $6_1 = $9_1 + $5_1 | 0;
   if ((2147483645 - $6_1 | 0 | 0) < ($3_1 | 0)) {
    break block1
   }
   $943 = $0_1;
   $944 = $2_1;
   $945 = $6_1;
   block25 : {
    block24 : {
     if (!$3_1) {
      break block24
     }
     $8_1 = $7_1 - ($12_1 + 16 | 0) | 0;
     if (($8_1 - 2 | 0 | 0) >= ($3_1 | 0)) {
      break block24
     }
     $958 = $3_1 + 2 | 0;
     break block25;
    }
    $8_1 = $7_1 - ($12_1 + 16 | 0) | 0;
    $958 = $8_1;
   }
   $7_1 = $958;
   $3_1 = $945 + $7_1 | 0;
   $11($943 | 0, 32 | 0, $944 | 0, $3_1 | 0, $4_1 | 0);
   $8($0_1 | 0, $11_1 | 0, $9_1 | 0);
   $11($0_1 | 0, 48 | 0, $2_1 | 0, $3_1 | 0, $4_1 ^ 65536 | 0 | 0);
   $8($0_1 | 0, $12_1 + 16 | 0 | 0, $8_1 | 0);
   $11($0_1 | 0, 48 | 0, $7_1 - $8_1 | 0 | 0, 0 | 0, 0 | 0);
   $8($0_1 | 0, $13_1 | 0, $5_1 | 0);
   $11($0_1 | 0, 32 | 0, $2_1 | 0, $3_1 | 0, $4_1 ^ 8192 | 0 | 0);
   $10_1 = ($2_1 | 0) < ($3_1 | 0) ? $3_1 : $2_1;
  }
  global$0 = $12_1 + 560 | 0;
  return $10_1 | 0;
 }
 
 function $142($0_1, $1_1, $1$hi, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $1$hi = $1$hi | 0;
  $2_1 = $2_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$4 = 0, i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, $12_1 = 0, $3_1 = 0, $9_1 = 0, $11_1 = 0;
  $3_1 = HEAP32[($0_1 + 60 | 0) >> 2] | 0;
  $0_1 = global$0 - 16 | 0;
  global$0 = $0_1;
  $9_1 = $3_1;
  i64toi32_i32$0 = $1$hi;
  $11_1 = $1_1;
  i64toi32_i32$2 = $1_1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = 0;
   $12_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $12_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
  }
  $2_1 = $111(fimport$20($9_1 | 0, $11_1 | 0, $12_1 | 0, $2_1 & 255 | 0 | 0, $0_1 + 8 | 0 | 0) | 0 | 0) | 0;
  i64toi32_i32$0 = $0_1;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] | 0;
  i64toi32_i32$2 = HEAP32[(i64toi32_i32$0 + 12 | 0) >> 2] | 0;
  $1_1 = i64toi32_i32$1;
  $1$hi = i64toi32_i32$2;
  global$0 = i64toi32_i32$0 + 16 | 0;
  i64toi32_i32$4 = $2_1;
  i64toi32_i32$2 = -1;
  i64toi32_i32$1 = $1$hi;
  i64toi32_i32$3 = i64toi32_i32$4 ? -1 : $1_1;
  i64toi32_i32$0 = i64toi32_i32$4 ? i64toi32_i32$2 : i64toi32_i32$1;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$3 | 0;
 }
 
 function $143($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0, $5_1 = 0, $7_1 = 0, $8_1 = 0, $6_1 = 0, $63_1 = 0, $9_1 = 0;
  $3_1 = global$0 - 32 | 0;
  global$0 = $3_1;
  $4_1 = HEAP32[($0_1 + 28 | 0) >> 2] | 0;
  HEAP32[($3_1 + 16 | 0) >> 2] = $4_1;
  $5_1 = HEAP32[($0_1 + 20 | 0) >> 2] | 0;
  HEAP32[($3_1 + 28 | 0) >> 2] = $2_1;
  HEAP32[($3_1 + 24 | 0) >> 2] = $1_1;
  $1_1 = $5_1 - $4_1 | 0;
  HEAP32[($3_1 + 20 | 0) >> 2] = $1_1;
  $5_1 = $1_1 + $2_1 | 0;
  $6_1 = 2;
  $1_1 = $3_1 + 16 | 0;
  block3 : {
   label : while (1) {
    block2 : {
     block1 : {
      block : {
       if (!($111(fimport$24(HEAP32[($0_1 + 60 | 0) >> 2] | 0 | 0, $1_1 | 0, $6_1 | 0, $3_1 + 12 | 0 | 0) | 0 | 0) | 0)) {
        $7_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
        if (($5_1 | 0) == ($7_1 | 0)) {
         break block
        }
        if (($7_1 | 0) >= (0 | 0)) {
         break block1
        }
        break block2;
       }
       if (($5_1 | 0) != (-1 | 0)) {
        break block2
       }
      }
      $1_1 = HEAP32[($0_1 + 44 | 0) >> 2] | 0;
      HEAP32[($0_1 + 28 | 0) >> 2] = $1_1;
      HEAP32[($0_1 + 20 | 0) >> 2] = $1_1;
      HEAP32[($0_1 + 16 | 0) >> 2] = $1_1 + (HEAP32[($0_1 + 48 | 0) >> 2] | 0) | 0;
      $63_1 = $2_1;
      break block3;
     }
     $8_1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
     $9_1 = $7_1 >>> 0 > $8_1 >>> 0;
     $4_1 = $1_1 + ($9_1 << 3 | 0) | 0;
     $8_1 = $7_1 - ($9_1 ? $8_1 : 0) | 0;
     HEAP32[$4_1 >> 2] = $8_1 + (HEAP32[$4_1 >> 2] | 0) | 0;
     $1_1 = $1_1 + ($9_1 ? 12 : 4) | 0;
     HEAP32[$1_1 >> 2] = (HEAP32[$1_1 >> 2] | 0) - $8_1 | 0;
     $5_1 = $5_1 - $7_1 | 0;
     $6_1 = $6_1 - $9_1 | 0;
     $1_1 = $4_1;
     continue label;
    }
    break label;
   };
   HEAP32[($0_1 + 28 | 0) >> 2] = 0;
   HEAP32[($0_1 + 16 | 0) >> 2] = 0;
   HEAP32[($0_1 + 20 | 0) >> 2] = 0;
   HEAP32[$0_1 >> 2] = HEAP32[$0_1 >> 2] | 0 | 32 | 0;
   $63_1 = 0;
   if (($6_1 | 0) == (2 | 0)) {
    break block3
   }
   $63_1 = $2_1 - (HEAP32[($1_1 + 4 | 0) >> 2] | 0) | 0;
  }
  $4_1 = $63_1;
  global$0 = $3_1 + 32 | 0;
  return $4_1 | 0;
 }
 
 function $144($0_1) {
  $0_1 = $0_1 | 0;
  return fimport$25(HEAP32[($0_1 + 60 | 0) >> 2] | 0 | 0) | 0 | 0;
 }
 
 function $145() {
  var $0_1 = 0;
  $0_1 = HEAP32[7624 >> 2] | 0;
  if ($0_1) {
   label : while (1) {
    FUNCTION_TABLE[HEAP32[$0_1 >> 2] | 0 | 0]();
    $0_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
    if ($0_1) {
     continue label
    }
    break label;
   }
  }
 }
 
 function $146($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, $3_1 = 0, $4_1 = 0, $5_1 = 0, $97_1 = 0;
  $2_1 = global$0 - 96 | 0;
  global$0 = $2_1;
  HEAP32[$2_1 >> 2] = $0_1;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $2_1;
  $0_1 = global$0 - 144 | 0;
  global$0 = $0_1;
  $0_1 = $13($0_1 | 0, 6048 | 0, 144 | 0) | 0;
  $5_1 = $2_1 + 16 | 0;
  $1_1 = $5_1;
  HEAP32[($0_1 + 44 | 0) >> 2] = $1_1;
  HEAP32[($0_1 + 20 | 0) >> 2] = $1_1;
  $4_1 = -2 - $1_1 | 0;
  $4_1 = $4_1 >>> 0 >= 2147483647 >>> 0 ? 2147483647 : $4_1;
  HEAP32[($0_1 + 48 | 0) >> 2] = $4_1;
  $1_1 = $1_1 + $4_1 | 0;
  HEAP32[($0_1 + 28 | 0) >> 2] = $1_1;
  HEAP32[($0_1 + 16 | 0) >> 2] = $1_1;
  $109($0_1 | 0, 2491 | 0, $2_1 | 0, 0 | 0, 0 | 0) | 0;
  if ($4_1) {
   $1_1 = HEAP32[($0_1 + 20 | 0) >> 2] | 0;
   HEAP8[($1_1 - (($1_1 | 0) == (HEAP32[($0_1 + 16 | 0) >> 2] | 0 | 0)) | 0) >> 0] = 0;
  }
  global$0 = $0_1 + 144 | 0;
  global$0 = $3_1 + 16 | 0;
  block : {
   $0_1 = $5_1;
   if ($0_1 & 3 | 0) {
    label : while (1) {
     if (!(HEAPU8[$0_1 >> 0] | 0)) {
      break block
     }
     $0_1 = $0_1 + 1 | 0;
     if ($0_1 & 3 | 0) {
      continue label
     }
     break label;
    }
   }
   label1 : while (1) {
    $1_1 = $0_1;
    $0_1 = $0_1 + 4 | 0;
    $3_1 = HEAP32[$1_1 >> 2] | 0;
    if (!((($3_1 ^ -1 | 0) & ($3_1 - 16843009 | 0) | 0) & -2139062144 | 0)) {
     continue label1
    }
    break label1;
   };
   label2 : while (1) {
    $0_1 = $1_1;
    $1_1 = $0_1 + 1 | 0;
    if (HEAPU8[$0_1 >> 0] | 0) {
     continue label2
    }
    break label2;
   };
  }
  $0_1 = ($0_1 - $5_1 | 0) + 1 | 0;
  $1_1 = $67($0_1 | 0) | 0;
  if ($1_1) {
   $97_1 = $13($1_1 | 0, $5_1 | 0, $0_1 | 0) | 0
  } else {
   $97_1 = 0
  }
  $0_1 = $97_1;
  global$0 = $2_1 + 96 | 0;
  return $0_1 | 0;
 }
 
 function $147($0_1, $1_1, $2_1, $3_1, $4_1, $5_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = Math_fround($2_1);
  $3_1 = $3_1 | 0;
  $4_1 = Math_fround($4_1);
  $5_1 = $5_1 | 0;
  var $6_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $8_1 = 0.0, $41_1 = 0, $7_1 = 0, $47_1 = 0, $50_1 = 0;
  $6_1 = global$0 - 48 | 0;
  global$0 = $6_1;
  $7_1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
  block : {
   if ((HEAPU8[7604 >> 0] | 0) & 1 | 0) {
    $1_1 = HEAP32[7600 >> 2] | 0;
    break block;
   }
   $1_1 = fimport$12(5 | 0, 5008 | 0) | 0;
   HEAP8[7604 >> 0] = 1;
   HEAP32[7600 >> 2] = $1_1;
  }
  HEAP32[($6_1 + 40 | 0) >> 2] = $5_1;
  HEAPF32[($6_1 + 32 | 0) >> 2] = $4_1;
  HEAP32[($6_1 + 24 | 0) >> 2] = $3_1;
  HEAPF32[($6_1 + 16 | 0) >> 2] = $2_1;
  block1 : {
   $8_1 = +fimport$18($1_1 | 0, $7_1 | 0, 3479 | 0, $6_1 + 12 | 0 | 0, $6_1 + 16 | 0 | 0);
   if ($8_1 < 4294967296.0 & $8_1 >= 0.0 | 0) {
    $41_1 = ~~$8_1 >>> 0;
    break block1;
   }
   $41_1 = 0;
  }
  $1_1 = $41_1;
  $3_1 = HEAP32[($6_1 + 12 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[$1_1 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
  $47_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $0_1;
  HEAP32[i64toi32_i32$0 >> 2] = $47_1;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
  $50_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $0_1;
  HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = $50_1;
  HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
  fimport$17($3_1 | 0);
  global$0 = $6_1 + 48 | 0;
 }
 
 function $148($0_1) {
  $0_1 = $0_1 | 0;
  $5($114($0_1 | 0) | 0 | 0);
 }
 
 function $149($0_1) {
  $0_1 = $0_1 | 0;
  $72(HEAP32[($0_1 + 8 | 0) >> 2] | 0 | 0, 3688 | 0);
 }
 
 function $150($0_1) {
  $0_1 = $0_1 | 0;
  $5($116($0_1 | 0) | 0 | 0);
 }
 
 function $151($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0, $25_1 = 0, $15_1 = 0, $16_1 = 0;
  $2_1 = global$0 - 48 | 0;
  global$0 = $2_1;
  $3_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
  $1_1 = $1_1 + ($3_1 >> 1 | 0) | 0;
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  $15_1 = $2_1;
  $16_1 = $1_1;
  if ($3_1 & 1 | 0) {
   $25_1 = HEAP32[((HEAP32[$1_1 >> 2] | 0) + $0_1 | 0) >> 2] | 0
  } else {
   $25_1 = $0_1
  }
  FUNCTION_TABLE[$25_1 | 0]($15_1, $16_1);
  $0_1 = $13($0(48 | 0) | 0 | 0, $2_1 | 0, 48 | 0) | 0;
  global$0 = $2_1 + 48 | 0;
  return $0_1 | 0;
 }
 
 function $152($0_1, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = +$2_1;
  $3_1 = +$3_1;
  $4_1 = $4_1 | 0;
  var $5_1 = 0, $26_1 = 0, $14_1 = 0, $15_1 = 0.0, $16_1 = 0.0, $17_1 = 0;
  $5_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
  $1_1 = $1_1 + ($5_1 >> 1 | 0) | 0;
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  $14_1 = $1_1;
  $15_1 = $2_1;
  $16_1 = $3_1;
  $17_1 = $4_1;
  if ($5_1 & 1 | 0) {
   $26_1 = HEAP32[((HEAP32[$1_1 >> 2] | 0) + $0_1 | 0) >> 2] | 0
  } else {
   $26_1 = $0_1
  }
  FUNCTION_TABLE[$26_1 | 0]($14_1, $15_1, $16_1, $17_1);
 }
 
 function $153($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $22_1 = 0, $12_1 = 0, $13_1 = 0;
  $3_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
  $1_1 = $1_1 + ($3_1 >> 1 | 0) | 0;
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  $12_1 = $1_1;
  $13_1 = $2_1;
  if ($3_1 & 1 | 0) {
   $22_1 = HEAP32[((HEAP32[$1_1 >> 2] | 0) + $0_1 | 0) >> 2] | 0
  } else {
   $22_1 = $0_1
  }
  return Math_fround(Math_fround(FUNCTION_TABLE[$22_1 | 0]($12_1, $13_1)));
 }
 
 function $154($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $22_1 = 0, $12_1 = 0, $13_1 = 0;
  $3_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
  $1_1 = $1_1 + ($3_1 >> 1 | 0) | 0;
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  $12_1 = $1_1;
  $13_1 = $2_1;
  if ($3_1 & 1 | 0) {
   $22_1 = HEAP32[((HEAP32[$1_1 >> 2] | 0) + $0_1 | 0) >> 2] | 0
  } else {
   $22_1 = $0_1
  }
  return +(+FUNCTION_TABLE[$22_1 | 0]($12_1, $13_1));
 }
 
 function $155($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $20_1 = 0, $11_1 = 0;
  $2_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
  $1_1 = $1_1 + ($2_1 >> 1 | 0) | 0;
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  $11_1 = $1_1;
  if ($2_1 & 1 | 0) {
   $20_1 = HEAP32[((HEAP32[$1_1 >> 2] | 0) + $0_1 | 0) >> 2] | 0
  } else {
   $20_1 = $0_1
  }
  return +(+FUNCTION_TABLE[$20_1 | 0]($11_1));
 }
 
 function $156($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $3_1 = 0, $25_1 = 0, $15_1 = 0, $16_1 = 0, $30_1 = 0, $33_1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  $3_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
  $1_1 = $1_1 + ($3_1 >> 1 | 0) | 0;
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  $15_1 = $2_1;
  $16_1 = $1_1;
  if ($3_1 & 1 | 0) {
   $25_1 = HEAP32[((HEAP32[$1_1 >> 2] | 0) + $0_1 | 0) >> 2] | 0
  } else {
   $25_1 = $0_1
  }
  FUNCTION_TABLE[$25_1 | 0]($15_1, $16_1);
  $0_1 = $0(16 | 0) | 0;
  i64toi32_i32$0 = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($2_1 + 12 | 0) >> 2] | 0;
  $30_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $0_1;
  HEAP32[($0_1 + 8 | 0) >> 2] = $30_1;
  HEAP32[($0_1 + 12 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$1 = HEAP32[$2_1 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($2_1 + 4 | 0) >> 2] | 0;
  $33_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $0_1;
  HEAP32[$0_1 >> 2] = $33_1;
  HEAP32[($0_1 + 4 | 0) >> 2] = i64toi32_i32$0;
  global$0 = $2_1 + 16 | 0;
  return $0_1 | 0;
 }
 
 function $157($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $4_1 = 0, $27_1 = 0, $16_1 = 0, $17_1 = 0, $18_1 = 0, $32_1 = 0, $35_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  $4_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
  $1_1 = $1_1 + ($4_1 >> 1 | 0) | 0;
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  $16_1 = $3_1;
  $17_1 = $1_1;
  $18_1 = $2_1;
  if ($4_1 & 1 | 0) {
   $27_1 = HEAP32[((HEAP32[$1_1 >> 2] | 0) + $0_1 | 0) >> 2] | 0
  } else {
   $27_1 = $0_1
  }
  FUNCTION_TABLE[$27_1 | 0]($16_1, $17_1, $18_1);
  $0_1 = $0(16 | 0) | 0;
  i64toi32_i32$0 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  $32_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $0_1;
  HEAP32[($0_1 + 8 | 0) >> 2] = $32_1;
  HEAP32[($0_1 + 12 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$1 = HEAP32[$3_1 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($3_1 + 4 | 0) >> 2] | 0;
  $35_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $0_1;
  HEAP32[$0_1 >> 2] = $35_1;
  HEAP32[($0_1 + 4 | 0) >> 2] = i64toi32_i32$0;
  global$0 = $3_1 + 16 | 0;
  return $0_1 | 0;
 }
 
 function $158($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = +$2_1;
  var $3_1 = 0, $22_1 = 0, $12_1 = 0, $13_1 = 0.0;
  $3_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
  $1_1 = $1_1 + ($3_1 >> 1 | 0) | 0;
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  $12_1 = $1_1;
  $13_1 = $2_1;
  if ($3_1 & 1 | 0) {
   $22_1 = HEAP32[((HEAP32[$1_1 >> 2] | 0) + $0_1 | 0) >> 2] | 0
  } else {
   $22_1 = $0_1
  }
  FUNCTION_TABLE[$22_1 | 0]($12_1, $13_1);
 }
 
 function $159($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = +$3_1;
  var $4_1 = 0, $24_1 = 0, $13_1 = 0, $14_1 = 0, $15_1 = 0.0;
  $4_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
  $1_1 = $1_1 + ($4_1 >> 1 | 0) | 0;
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  $13_1 = $1_1;
  $14_1 = $2_1;
  $15_1 = $3_1;
  if ($4_1 & 1 | 0) {
   $24_1 = HEAP32[((HEAP32[$1_1 >> 2] | 0) + $0_1 | 0) >> 2] | 0
  } else {
   $24_1 = $0_1
  }
  FUNCTION_TABLE[$24_1 | 0]($13_1, $14_1, $15_1);
 }
 
 function $160($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return FUNCTION_TABLE[$0_1 | 0]($1_1) | 0 | 0;
 }
 
 function $161($0_1) {
  $0_1 = $0_1 | 0;
  return 7619 | 0;
 }
 
 function $162($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  HEAP32[($1_1 + (HEAP32[$0_1 >> 2] | 0) | 0) >> 2] = $2_1;
 }
 
 function $163($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return HEAP32[($1_1 + (HEAP32[$0_1 >> 2] | 0) | 0) >> 2] | 0 | 0;
 }
 
 function $164() {
  var $0_1 = 0;
  $0_1 = $0(16 | 0) | 0;
  HEAP32[($0_1 + 8 | 0) >> 2] = 0;
  HEAP32[($0_1 + 12 | 0) >> 2] = 0;
  HEAP32[$0_1 >> 2] = 0;
  return $0_1 | 0;
 }
 
 function $165() {
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0;
  i64toi32_i32$1 = $0(16 | 0) | 0;
  i64toi32_i32$0 = 0;
  HEAP32[i64toi32_i32$1 >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function $166() {
  return $12($0(48 | 0) | 0 | 0, 0 | 0, 48 | 0) | 0 | 0;
 }
 
 function $167($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = Math_fround($2_1);
  var $3_1 = 0, $22_1 = 0, $12_1 = 0, $13_1 = Math_fround(0);
  $3_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
  $1_1 = $1_1 + ($3_1 >> 1 | 0) | 0;
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  $12_1 = $1_1;
  $13_1 = $2_1;
  if ($3_1 & 1 | 0) {
   $22_1 = HEAP32[((HEAP32[$1_1 >> 2] | 0) + $0_1 | 0) >> 2] | 0
  } else {
   $22_1 = $0_1
  }
  FUNCTION_TABLE[$22_1 | 0]($12_1, $13_1);
 }
 
 function $168($0_1) {
  $0_1 = $0_1 | 0;
  return 7614 | 0;
 }
 
 function $169($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var wasm2js_i32$0 = 0, wasm2js_i32$1 = 0, wasm2js_i32$2 = 0, wasm2js_i32$3 = 0, wasm2js_i32$4 = 0;
  (wasm2js_i32$0 = $0_1, wasm2js_i32$1 = fimport$16((wasm2js_i32$2 = HEAP32[$1_1 >> 2] | 0, wasm2js_i32$3 = $1_1, wasm2js_i32$4 = (HEAP8[($1_1 + 11 | 0) >> 0] | 0 | 0) < (0 | 0), wasm2js_i32$4 ? wasm2js_i32$2 : wasm2js_i32$3) | 0, 7611 | 0, HEAP32[$2_1 >> 2] | 0 | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
 }
 
 function $170($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = $0(12 | 0) | 0;
  HEAP8[($1_1 + 4 | 0) >> 0] = 0;
  HEAP32[($1_1 + 8 | 0) >> 2] = HEAP32[$0_1 >> 2] | 0;
  HEAP32[$0_1 >> 2] = 0;
  HEAP32[$1_1 >> 2] = 5080;
  return $1_1 | 0;
 }
 
 function $171($0_1) {
  $0_1 = $0_1 | 0;
  return 7611 | 0;
 }
 
 function $172($0_1) {
  $0_1 = $0_1 | 0;
  return 7608 | 0;
 }
 
 function $173($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var wasm2js_i32$0 = 0, wasm2js_i32$1 = 0, wasm2js_i32$2 = 0, wasm2js_i32$3 = 0, wasm2js_i32$4 = 0;
  (wasm2js_i32$0 = $0_1, wasm2js_i32$1 = fimport$16((wasm2js_i32$2 = HEAP32[$1_1 >> 2] | 0, wasm2js_i32$3 = $1_1, wasm2js_i32$4 = (HEAP8[($1_1 + 11 | 0) >> 0] | 0 | 0) < (0 | 0), wasm2js_i32$4 ? wasm2js_i32$2 : wasm2js_i32$3) | 0, 7588 | 0, HEAP32[$2_1 >> 2] | 0 | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
 }
 
 function $174($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0, $5_1 = 0, $6_1 = 0, $69_1 = 0;
  $3_1 = global$0 - 32 | 0;
  global$0 = $3_1;
  $4_1 = HEAP32[$1_1 >> 2] | 0;
  if ($4_1 >>> 0 < 2147483632 >>> 0) {
   block1 : {
    block : {
     if ($4_1 >>> 0 >= 11 >>> 0) {
      $5_1 = ($4_1 | 15 | 0) + 1 | 0;
      $6_1 = $0($5_1 | 0) | 0;
      HEAP32[($3_1 + 16 | 0) >> 2] = $5_1 | -2147483648 | 0;
      HEAP32[($3_1 + 8 | 0) >> 2] = $6_1;
      HEAP32[($3_1 + 12 | 0) >> 2] = $4_1;
      $5_1 = $4_1 + $6_1 | 0;
      break block;
     }
     HEAP8[($3_1 + 19 | 0) >> 0] = $4_1;
     $6_1 = $3_1 + 8 | 0;
     $5_1 = $6_1 + $4_1 | 0;
     if (!$4_1) {
      break block1
     }
    }
    $13($6_1 | 0, $1_1 + 4 | 0 | 0, $4_1 | 0) | 0;
   }
   HEAP8[$5_1 >> 0] = 0;
   HEAP32[$3_1 >> 2] = $2_1;
   FUNCTION_TABLE[$0_1 | 0]($3_1 + 24 | 0, $3_1 + 8 | 0, $3_1);
   fimport$29(HEAP32[($3_1 + 24 | 0) >> 2] | 0 | 0);
   $0_1 = HEAP32[($3_1 + 24 | 0) >> 2] | 0;
   fimport$6($0_1 | 0);
   fimport$6(HEAP32[$3_1 >> 2] | 0 | 0);
   if ((HEAP8[($3_1 + 19 | 0) >> 0] | 0 | 0) < (0 | 0)) {
    $5(HEAP32[($3_1 + 8 | 0) >> 2] | 0 | 0)
   }
   global$0 = $3_1 + 32 | 0;
   return $0_1 | 0;
  }
  fimport$2();
  wasm2js_trap();
 }
 
 function $175($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = $0(12 | 0) | 0;
  HEAP8[($1_1 + 4 | 0) >> 0] = 0;
  HEAP32[($1_1 + 8 | 0) >> 2] = HEAP32[$0_1 >> 2] | 0;
  HEAP32[$0_1 >> 2] = 0;
  HEAP32[$1_1 >> 2] = 4960;
  return $1_1 | 0;
 }
 
 function $176($0_1) {
  $0_1 = $0_1 | 0;
  return 7588 | 0;
 }
 
 function $177($0_1, $1_1, $2_1, $3_1, $4_1, $5_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = Math_fround($2_1);
  $3_1 = $3_1 | 0;
  $4_1 = Math_fround($4_1);
  $5_1 = $5_1 | 0;
  var $6_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $7_1 = 0, $33_1 = 0, $19_1 = 0, $20_1 = 0, $21_1 = Math_fround(0), $22_1 = 0, $23_1 = Math_fround(0), $24_1 = 0, $38_1 = 0, $41_1 = 0;
  $6_1 = global$0 - 16 | 0;
  global$0 = $6_1;
  $7_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
  $1_1 = $1_1 + ($7_1 >> 1 | 0) | 0;
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  $19_1 = $6_1;
  $20_1 = $1_1;
  $21_1 = $2_1;
  $22_1 = $3_1;
  $23_1 = $4_1;
  $24_1 = $5_1;
  if ($7_1 & 1 | 0) {
   $33_1 = HEAP32[((HEAP32[$1_1 >> 2] | 0) + $0_1 | 0) >> 2] | 0
  } else {
   $33_1 = $0_1
  }
  FUNCTION_TABLE[$33_1 | 0]($19_1, $20_1, $21_1, $22_1, $23_1, $24_1);
  $0_1 = $0(16 | 0) | 0;
  i64toi32_i32$0 = HEAP32[($6_1 + 8 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($6_1 + 12 | 0) >> 2] | 0;
  $38_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $0_1;
  HEAP32[($0_1 + 8 | 0) >> 2] = $38_1;
  HEAP32[($0_1 + 12 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$1 = HEAP32[$6_1 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($6_1 + 4 | 0) >> 2] | 0;
  $41_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $0_1;
  HEAP32[$0_1 >> 2] = $41_1;
  HEAP32[($0_1 + 4 | 0) >> 2] = i64toi32_i32$0;
  global$0 = $6_1 + 16 | 0;
  return $0_1 | 0;
 }
 
 function $178($0_1) {
  $0_1 = $0_1 | 0;
  return 7584 | 0;
 }
 
 function $179($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  HEAP8[$0_1 >> 0] = (HEAPU8[$0_1 >> 0] | 0) & 247 | 0 | ($1_1 ? 8 : 0) | 0;
 }
 
 function $180($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $22_1 = 0, $2_1 = 0, $3_1 = 0, $4_1 = Math_fround(0), $50_1 = 0.0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  $3_1 = $1_1 & 255 | 0;
  if ($3_1 >>> 0 < 6 >>> 0) {
   block3 : {
    block2 : {
     switch ($3_1 - 4 | 0 | 0) {
     case 0:
      $22_1 = $0_1 + 468 | 0;
      if (((HEAPU8[($0_1 + 392 | 0) >> 0] | 0) & 3 | 0 | 0) == (2 | 0)) {
       break block3
      }
      $22_1 = $0_1 + 460 | 0;
      break block3;
     case 1:
      $22_1 = $0_1 + 460 | 0;
      if (((HEAPU8[($0_1 + 392 | 0) >> 0] | 0) & 3 | 0 | 0) == (2 | 0)) {
       break block3
      }
      $22_1 = $0_1 + 468 | 0;
      break block3;
     default:
      break block2;
     };
    }
    $22_1 = ($0_1 + (($1_1 & 255 | 0) << 2 | 0) | 0) + 460 | 0;
   }
   $4_1 = Math_fround(HEAPF32[$22_1 >> 2]);
   global$0 = $2_1 + 16 | 0;
   return +(+$4_1);
  }
  HEAP32[$2_1 >> 2] = 2158;
  $14($0_1 | 0, 5 | 0, 4824 | 0, $2_1 | 0);
  $6();
  wasm2js_trap();
 }
 
 function $181($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $22_1 = 0, $2_1 = 0, $3_1 = 0, $4_1 = Math_fround(0), $50_1 = 0.0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  $3_1 = $1_1 & 255 | 0;
  if ($3_1 >>> 0 < 6 >>> 0) {
   block3 : {
    block2 : {
     switch ($3_1 - 4 | 0 | 0) {
     case 0:
      $22_1 = $0_1 + 452 | 0;
      if (((HEAPU8[($0_1 + 392 | 0) >> 0] | 0) & 3 | 0 | 0) == (2 | 0)) {
       break block3
      }
      $22_1 = $0_1 + 444 | 0;
      break block3;
     case 1:
      $22_1 = $0_1 + 444 | 0;
      if (((HEAPU8[($0_1 + 392 | 0) >> 0] | 0) & 3 | 0 | 0) == (2 | 0)) {
       break block3
      }
      $22_1 = $0_1 + 452 | 0;
      break block3;
     default:
      break block2;
     };
    }
    $22_1 = ($0_1 + (($1_1 & 255 | 0) << 2 | 0) | 0) + 444 | 0;
   }
   $4_1 = Math_fround(HEAPF32[$22_1 >> 2]);
   global$0 = $2_1 + 16 | 0;
   return +(+$4_1);
  }
  HEAP32[$2_1 >> 2] = 2158;
  $14($0_1 | 0, 5 | 0, 4824 | 0, $2_1 | 0);
  $6();
  wasm2js_trap();
 }
 
 function $182($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $22_1 = 0, $2_1 = 0, $3_1 = 0, $4_1 = Math_fround(0), $50_1 = 0.0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  $3_1 = $1_1 & 255 | 0;
  if ($3_1 >>> 0 < 6 >>> 0) {
   block3 : {
    block2 : {
     switch ($3_1 - 4 | 0 | 0) {
     case 0:
      $22_1 = $0_1 + 436 | 0;
      if (((HEAPU8[($0_1 + 392 | 0) >> 0] | 0) & 3 | 0 | 0) == (2 | 0)) {
       break block3
      }
      $22_1 = $0_1 + 428 | 0;
      break block3;
     case 1:
      $22_1 = $0_1 + 428 | 0;
      if (((HEAPU8[($0_1 + 392 | 0) >> 0] | 0) & 3 | 0 | 0) == (2 | 0)) {
       break block3
      }
      $22_1 = $0_1 + 436 | 0;
      break block3;
     default:
      break block2;
     };
    }
    $22_1 = ($0_1 + (($1_1 & 255 | 0) << 2 | 0) | 0) + 428 | 0;
   }
   $4_1 = Math_fround(HEAPF32[$22_1 >> 2]);
   global$0 = $2_1 + 16 | 0;
   return +(+$4_1);
  }
  HEAP32[$2_1 >> 2] = 2158;
  $14($0_1 | 0, 5 | 0, 4824 | 0, $2_1 | 0);
  $6();
  wasm2js_trap();
 }
 
 function $183($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $1_1 = HEAP32[$1_1 >> 2] | 0;
  HEAPF64[$0_1 >> 3] = +Math_fround(HEAPF32[($1_1 + 412 | 0) >> 2]);
  HEAPF64[($0_1 + 8 | 0) >> 3] = +Math_fround(HEAPF32[($1_1 + 420 | 0) >> 2]);
  HEAPF64[($0_1 + 16 | 0) >> 3] = +Math_fround(HEAPF32[($1_1 + 416 | 0) >> 2]);
  HEAPF64[($0_1 + 24 | 0) >> 3] = +Math_fround(HEAPF32[($1_1 + 424 | 0) >> 2]);
  HEAPF64[($0_1 + 32 | 0) >> 3] = +Math_fround(HEAPF32[($1_1 + 396 | 0) >> 2]);
  HEAPF64[($0_1 + 40 | 0) >> 3] = +Math_fround(HEAPF32[($1_1 + 400 | 0) >> 2]);
 }
 
 function $184($0_1) {
  $0_1 = $0_1 | 0;
  return +(+Math_fround(HEAPF32[((HEAP32[$0_1 >> 2] | 0) + 400 | 0) >> 2]));
 }
 
 function $185($0_1) {
  $0_1 = $0_1 | 0;
  return +(+Math_fround(HEAPF32[((HEAP32[$0_1 >> 2] | 0) + 396 | 0) >> 2]));
 }
 
 function $186($0_1) {
  $0_1 = $0_1 | 0;
  return +(+Math_fround(HEAPF32[((HEAP32[$0_1 >> 2] | 0) + 424 | 0) >> 2]));
 }
 
 function $187($0_1) {
  $0_1 = $0_1 | 0;
  return +(+Math_fround(HEAPF32[((HEAP32[$0_1 >> 2] | 0) + 416 | 0) >> 2]));
 }
 
 function $188($0_1) {
  $0_1 = $0_1 | 0;
  return +(+Math_fround(HEAPF32[((HEAP32[$0_1 >> 2] | 0) + 420 | 0) >> 2]));
 }
 
 function $189($0_1) {
  $0_1 = $0_1 | 0;
  return +(+Math_fround(HEAPF32[((HEAP32[$0_1 >> 2] | 0) + 412 | 0) >> 2]));
 }
 
 function $190($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = +$1_1;
  $2_1 = +$2_1;
  $3_1 = $3_1 | 0;
  var $4_1 = Math_fround(0), $5_1 = Math_fround(0), $8_1 = 0, $9_1 = 0, $6_1 = Math_fround(0), $10_1 = 0, $64_1 = Math_fround(0), $115_1 = Math_fround(0), $11_1 = 0, $12_1 = 0, $89_1 = 0, $90_1 = Math_fround(0);
  $10_1 = global$0 + -64 | 0;
  global$0 = $10_1;
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  $12($10_1 + 8 | 0 | 0, 0 | 0, 56 | 0) | 0;
  HEAP32[7536 >> 2] = (HEAP32[7536 >> 2] | 0) + 1 | 0;
  $90($0_1 | 0);
  $8_1 = (HEAPU8[($0_1 + 20 | 0) >> 0] | 0) & 3 | 0;
  $9_1 = $8_1 ? $8_1 : $3_1 & 255 | 0 ? $3_1 : 1;
  $8_1 = $0_1 + 20 | 0;
  $4_1 = Math_fround($1_1);
  $5_1 = Math_fround(HEAPF32[($0_1 + 504 | 0) >> 2]);
  block3 : {
   block2 : {
    block : {
     switch ((HEAPU8[($0_1 + 508 | 0) >> 0] | 0) - 1 | 0 | 0) {
     case 1:
      $5_1 = Math_fround(Math_fround($5_1 * $4_1) * Math_fround(.009999999776482582));
      break;
     case 0:
      break block;
     default:
      break block2;
     };
    }
    if (!($5_1 >= Math_fround(0.0))) {
     break block2
    }
    $64_1 = Math_fround(Math_fround($19($0_1 | 0, $9_1 & 255 | 0 | 0, 0 | 0, Math_fround($4_1), Math_fround($4_1))) + Math_fround(Math_fround($4($8_1 | 0, 2 | 0, 1 | 0, Math_fround($4_1))) + Math_fround($3($8_1 | 0, 2 | 0, 1 | 0, Math_fround($4_1)))));
    break block3;
   }
   $5_1 = Math_fround($15($8_1 | 0, $9_1 & 255 | 0 | 0, 0 | 0, Math_fround($4_1), Math_fround($4_1)));
   if ($5_1 == $5_1) {
    $11_1 = 2;
    $64_1 = Math_fround($15($8_1 | 0, $9_1 & 255 | 0 | 0, 0 | 0, Math_fround($4_1), Math_fround($4_1)));
    break block3;
   }
   $11_1 = $4_1 != $4_1;
   $64_1 = $4_1;
  }
  $5_1 = Math_fround($2_1);
  $6_1 = Math_fround(HEAPF32[($0_1 + 512 | 0) >> 2]);
  $89_1 = $0_1;
  $90_1 = $64_1;
  block7 : {
   block6 : {
    block4 : {
     switch ((HEAPU8[($0_1 + 516 | 0) >> 0] | 0) - 1 | 0 | 0) {
     case 1:
      $6_1 = Math_fround(Math_fround($6_1 * $5_1) * Math_fround(.009999999776482582));
      break;
     case 0:
      break block4;
     default:
      break block6;
     };
    }
    if (!($6_1 >= Math_fround(0.0))) {
     break block6
    }
    $115_1 = Math_fround(Math_fround($19($0_1 | 0, $9_1 & 255 | 0 | 0, 1 | 0, Math_fround($5_1), Math_fround($4_1))) + Math_fround(Math_fround($4($8_1 | 0, 0 | 0, 1 | 0, Math_fround($4_1))) + Math_fround($3($8_1 | 0, 0 | 0, 1 | 0, Math_fround($4_1)))));
    break block7;
   }
   $9_1 = $9_1 & 255 | 0;
   $6_1 = Math_fround($15($8_1 | 0, $9_1 | 0, 1 | 0, Math_fround($5_1), Math_fround($4_1)));
   if ($6_1 == $6_1) {
    $12_1 = 2;
    $115_1 = Math_fround($15($8_1 | 0, $9_1 | 0, 1 | 0, Math_fround($5_1), Math_fround($4_1)));
    break block7;
   }
   $12_1 = $5_1 != $5_1;
   $115_1 = $5_1;
  }
  if ($31($89_1 | 0, Math_fround($90_1), Math_fround($115_1), $3_1 & 255 | 0 | 0, $11_1 | 0, $12_1 | 0, Math_fround($4_1), Math_fround($5_1), 1 | 0, 0 | 0, $10_1 + 8 | 0 | 0, 0 | 0, HEAP32[7536 >> 2] | 0 | 0) | 0) {
   $88($0_1 | 0, (HEAPU8[($0_1 + 392 | 0) >> 0] | 0) & 3 | 0 | 0, Math_fround($4_1), Math_fround($5_1));
   $85($0_1 | 0, +(0.0), +(0.0));
  }
  global$0 = $10_1 - -64 | 0;
 }
 
 function $191($0_1) {
  $0_1 = $0_1 | 0;
  return (HEAPU8[(HEAP32[$0_1 >> 2] | 0) >> 0] | 0) & 1 | 0 | 0;
 }
 
 function $192($0_1) {
  $0_1 = $0_1 | 0;
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  HEAP8[$0_1 >> 0] = (HEAPU8[$0_1 >> 0] | 0) & 254 | 0;
 }
 
 function $193($0_1) {
  $0_1 = $0_1 | 0;
  return ((HEAPU8[(HEAP32[$0_1 >> 2] | 0) >> 0] | 0) & 4 | 0) >>> 2 | 0 | 0;
 }
 
 function $194($0_1) {
  $0_1 = $0_1 | 0;
  var $2_1 = 0, $1_1 = 0;
  $1_1 = global$0 - 16 | 0;
  global$0 = $1_1;
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  if (HEAP32[($0_1 + 8 | 0) >> 2] | 0) {
   label : while (1) {
    $2_1 = HEAPU8[$0_1 >> 0] | 0;
    if (!($2_1 & 4 | 0)) {
     HEAP8[$0_1 >> 0] = $2_1 | 4 | 0;
     $2_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
     if ($2_1) {
      FUNCTION_TABLE[$2_1 | 0]($0_1)
     }
     HEAP32[($0_1 + 156 | 0) >> 2] = 2143289344;
     $0_1 = HEAP32[($0_1 + 484 | 0) >> 2] | 0;
     if ($0_1) {
      continue label
     }
    }
    break label;
   };
   global$0 = $1_1 + 16 | 0;
   return;
  }
  HEAP32[$1_1 >> 2] = 1024;
  $14($0_1 | 0, 5 | 0, 4824 | 0, $1_1 | 0);
  $6();
  wasm2js_trap();
 }
 
 function $195($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
  HEAP32[($0_1 + 8 | 0) >> 2] = 0;
  if ($1_1) {
   FUNCTION_TABLE[HEAP32[((HEAP32[$1_1 >> 2] | 0) + 4 | 0) >> 2] | 0 | 0]($1_1)
  }
  HEAP32[((HEAP32[$0_1 >> 2] | 0) + 16 | 0) >> 2] = 0;
 }
 
 function $196($0_1) {
  $0_1 = $0_1 | 0;
  $0_1 = HEAP32[((HEAP32[($0_1 + 4 | 0) >> 2] | 0) + 8 | 0) >> 2] | 0;
  FUNCTION_TABLE[HEAP32[((HEAP32[$0_1 >> 2] | 0) + 8 | 0) >> 2] | 0 | 0]($0_1);
 }
 
 function $197($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
  HEAP32[($0_1 + 8 | 0) >> 2] = $1_1;
  if ($2_1) {
   FUNCTION_TABLE[HEAP32[((HEAP32[$2_1 >> 2] | 0) + 4 | 0) >> 2] | 0 | 0]($2_1)
  }
  HEAP32[((HEAP32[$0_1 >> 2] | 0) + 16 | 0) >> 2] = 5;
 }
 
 function $198($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  if ($1_1) {
   FUNCTION_TABLE[HEAP32[((HEAP32[$1_1 >> 2] | 0) + 4 | 0) >> 2] | 0 | 0]($1_1)
  }
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  HEAP32[($0_1 + 8 | 0) >> 2] = 0;
  HEAP8[$0_1 >> 0] = (HEAPU8[$0_1 >> 0] | 0) & 239 | 0;
 }
 
 function $199($0_1, $1_1, $2_1, $3_1, $4_1, $5_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = Math_fround($2_1);
  $3_1 = $3_1 | 0;
  $4_1 = Math_fround($4_1);
  $5_1 = $5_1 | 0;
  var $6_1 = 0;
  $6_1 = global$0 - 16 | 0;
  global$0 = $6_1;
  $1_1 = HEAP32[((HEAP32[($1_1 + 4 | 0) >> 2] | 0) + 4 | 0) >> 2] | 0;
  FUNCTION_TABLE[HEAP32[((HEAP32[$1_1 >> 2] | 0) + 8 | 0) >> 2] | 0 | 0]($6_1, $1_1, $2_1, $3_1, $4_1, $5_1);
  HEAPF32[$0_1 >> 2] = Math_fround(+HEAPF64[$6_1 >> 3]);
  HEAPF32[($0_1 + 4 | 0) >> 2] = Math_fround(+HEAPF64[($6_1 + 8 | 0) >> 3]);
  global$0 = $6_1 + 16 | 0;
 }
 
 function $200($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  $3_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = $1_1;
  if ($3_1) {
   FUNCTION_TABLE[HEAP32[((HEAP32[$3_1 >> 2] | 0) + 4 | 0) >> 2] | 0 | 0]($3_1)
  }
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  if ((HEAP32[($0_1 + 488 | 0) >> 2] | 0 | 0) != (HEAP32[($0_1 + 492 | 0) >> 2] | 0 | 0)) {
   HEAP32[$2_1 >> 2] = 4601;
   $14($0_1 | 0, 5 | 0, 4824 | 0, $2_1 | 0);
   $6();
   wasm2js_trap();
  }
  HEAP32[($0_1 + 8 | 0) >> 2] = 4;
  HEAP8[$0_1 >> 0] = HEAPU8[$0_1 >> 0] | 0 | 16 | 0;
  global$0 = $2_1 + 16 | 0;
 }
 
 function $201($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $6_1 = 0, $2_1 = 0;
  block : {
   $0_1 = HEAP32[$0_1 >> 2] | 0;
   $6_1 = HEAP32[($0_1 + 492 | 0) >> 2] | 0;
   $0_1 = HEAP32[($0_1 + 488 | 0) >> 2] | 0;
   if ((($6_1 - $0_1 | 0) >> 2 | 0) >>> 0 <= $1_1 >>> 0) {
    break block
   }
   $0_1 = HEAP32[($0_1 + ($1_1 << 2 | 0) | 0) >> 2] | 0;
   if (!$0_1) {
    break block
   }
   $2_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
  }
  return $2_1 | 0;
 }
 
 function $202($0_1) {
  $0_1 = $0_1 | 0;
  $0_1 = HEAP32[((HEAP32[$0_1 >> 2] | 0) + 484 | 0) >> 2] | 0;
  if (!$0_1) {
   return 0 | 0
  }
  return HEAP32[($0_1 + 4 | 0) >> 2] | 0 | 0;
 }
 
 function $203($0_1) {
  $0_1 = $0_1 | 0;
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  return ((HEAP32[($0_1 + 492 | 0) >> 2] | 0) - (HEAP32[($0_1 + 488 | 0) >> 2] | 0) | 0) >> 2 | 0 | 0;
 }
 
 function $204($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $3_1 = 0, $4_1 = 0;
  $2_1 = global$0 - 336 | 0;
  global$0 = $2_1;
  block : {
   $0_1 = HEAP32[$0_1 >> 2] | 0;
   if ((HEAP32[($0_1 + 492 | 0) >> 2] | 0 | 0) == (HEAP32[($0_1 + 488 | 0) >> 2] | 0 | 0)) {
    break block
   }
   $3_1 = HEAP32[$1_1 >> 2] | 0;
   $1_1 = HEAP32[($3_1 + 484 | 0) >> 2] | 0;
   if (!($81($0_1 | 0, $3_1 | 0) | 0)) {
    break block
   }
   if (($0_1 | 0) == ($1_1 | 0)) {
    $12($2_1 + 8 | 0 | 0, 0 | 0, 324 | 0) | 0;
    HEAP8[($2_1 + 24 | 0) >> 0] = 0;
    i64toi32_i32$1 = $2_1;
    i64toi32_i32$0 = 0;
    HEAP32[($2_1 + 16 | 0) >> 2] = 0;
    HEAP32[($2_1 + 20 | 0) >> 2] = i64toi32_i32$0;
    HEAP32[($2_1 + 12 | 0) >> 2] = 2143289344;
    $12($2_1 + 28 | 0 | 0, 0 | 0, 196 | 0) | 0;
    $4_1 = $2_1 + 224 | 0;
    $1_1 = $2_1 + 32 | 0;
    label : while (1) {
     i64toi32_i32$1 = $1_1;
     i64toi32_i32$0 = -1082130432;
     HEAP32[(i64toi32_i32$1 + 16 | 0) >> 2] = -1082130432;
     HEAP32[(i64toi32_i32$1 + 20 | 0) >> 2] = i64toi32_i32$0;
     i64toi32_i32$0 = 1;
     HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = 1;
     HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
     i64toi32_i32$0 = -1082130432;
     HEAP32[i64toi32_i32$1 >> 2] = -1082130432;
     HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
     $1_1 = i64toi32_i32$1 + 24 | 0;
     if (($1_1 | 0) != ($4_1 | 0)) {
      continue label
     }
     break label;
    };
    i64toi32_i32$1 = $2_1;
    i64toi32_i32$0 = -1082130432;
    HEAP32[($2_1 + 240 | 0) >> 2] = -1082130432;
    HEAP32[($2_1 + 244 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$1 = $2_1;
    i64toi32_i32$0 = 1;
    HEAP32[($2_1 + 232 | 0) >> 2] = 1;
    HEAP32[($2_1 + 236 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$1 = $2_1;
    i64toi32_i32$0 = -1082130432;
    HEAP32[($2_1 + 224 | 0) >> 2] = -1082130432;
    HEAP32[($2_1 + 228 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$1 = $2_1;
    i64toi32_i32$0 = 2143289344;
    HEAP32[($2_1 + 260 | 0) >> 2] = 2143289344;
    HEAP32[($2_1 + 264 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$1 = $2_1;
    i64toi32_i32$0 = 2143289344;
    HEAP32[($2_1 + 252 | 0) >> 2] = 2143289344;
    HEAP32[($2_1 + 256 | 0) >> 2] = i64toi32_i32$0;
    HEAP8[($2_1 + 248 | 0) >> 0] = (HEAPU8[($2_1 + 248 | 0) >> 0] | 0) & 248 | 0;
    $12($2_1 + 268 | 0 | 0, 0 | 0, 64 | 0) | 0;
    $13($3_1 + 152 | 0 | 0, $2_1 + 8 | 0 | 0, 324 | 0) | 0;
    HEAP32[($3_1 + 484 | 0) >> 2] = 0;
   }
   label1 : while (1) {
    $1_1 = HEAPU8[$0_1 >> 0] | 0;
    if ($1_1 & 4 | 0) {
     break block
    }
    HEAP8[$0_1 >> 0] = $1_1 | 4 | 0;
    $1_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
    if ($1_1) {
     FUNCTION_TABLE[$1_1 | 0]($0_1)
    }
    HEAP32[($0_1 + 156 | 0) >> 2] = 2143289344;
    $0_1 = HEAP32[($0_1 + 484 | 0) >> 2] | 0;
    if ($0_1) {
     continue label1
    }
    break label1;
   };
  }
  global$0 = $2_1 + 336 | 0;
 }
 
 function $205($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $4_1 = 0, $3_1 = 0, $5_1 = 0, $6_1 = 0, $7_1 = 0, $8_1 = 0, $9_1 = 0, $181_1 = 0, $139_1 = 0, $140_1 = 0, $10_1 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $7_1 = global$0 - 80 | 0;
  global$0 = $7_1;
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  block2 : {
   block : {
    $8_1 = HEAP32[$1_1 >> 2] | 0;
    if (!(HEAP32[($8_1 + 484 | 0) >> 2] | 0)) {
     if (HEAP32[($0_1 + 8 | 0) >> 2] | 0) {
      break block
     }
     if ((((HEAPU8[($8_1 + 23 | 0) >> 0] | 0) << 16 | 0) & 786432 | 0 | 0) == (524288 | 0)) {
      HEAP32[($0_1 + 480 | 0) >> 2] = (HEAP32[($0_1 + 480 | 0) >> 2] | 0) + 1 | 0
     }
     $1_1 = HEAP32[($0_1 + 488 | 0) >> 2] | 0;
     $6_1 = $1_1 + ($2_1 << 2 | 0) | 0;
     block1 : {
      $4_1 = HEAP32[($0_1 + 492 | 0) >> 2] | 0;
      $3_1 = $0_1 + 496 | 0;
      $5_1 = HEAP32[$3_1 >> 2] | 0;
      if ($4_1 >>> 0 < $5_1 >>> 0) {
       if (($4_1 | 0) == ($6_1 | 0)) {
        HEAP32[$6_1 >> 2] = $8_1;
        HEAP32[($0_1 + 492 | 0) >> 2] = $6_1 + 4 | 0;
        break block1;
       }
       $2_1 = $4_1;
       $1_1 = $4_1 - 4 | 0;
       if ($4_1 >>> 0 > $1_1 >>> 0) {
        label : while (1) {
         HEAP32[$2_1 >> 2] = HEAP32[$1_1 >> 2] | 0;
         $2_1 = $2_1 + 4 | 0;
         $1_1 = $1_1 + 4 | 0;
         if ($1_1 >>> 0 < $4_1 >>> 0) {
          continue label
         }
         break label;
        }
       }
       HEAP32[($0_1 + 492 | 0) >> 2] = $2_1;
       $1_1 = $6_1 + 4 | 0;
       if (($1_1 | 0) != ($4_1 | 0)) {
        $1_1 = $4_1 - $1_1 | 0;
        $21($4_1 - ($1_1 & -4 | 0) | 0 | 0, $6_1 | 0, $1_1 | 0) | 0;
       }
       HEAP32[$6_1 >> 2] = $8_1;
       break block1;
      }
      $4_1 = (($4_1 - $1_1 | 0) >> 2 | 0) + 1 | 0;
      if ($4_1 >>> 0 >= 1073741824 >>> 0) {
       break block2
      }
      block3 : {
       $1_1 = $5_1 - $1_1 | 0;
       $5_1 = $1_1 >> 1 | 0;
       $3_1 = $44($7_1 + 32 | 0 | 0, ($1_1 >>> 0 >= 2147483644 >>> 0 ? 1073741823 : $4_1 >>> 0 < $5_1 >>> 0 ? $5_1 : $4_1) | 0, $2_1 | 0, $3_1 | 0) | 0;
       $2_1 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
       if (($2_1 | 0) != (HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0)) {
        break block3
       }
       $1_1 = HEAP32[($3_1 + 4 | 0) >> 2] | 0;
       $4_1 = HEAP32[$3_1 >> 2] | 0;
       if ($1_1 >>> 0 > $4_1 >>> 0) {
        $4_1 = (((($1_1 - $4_1 | 0) >> 2 | 0) + 1 | 0 | 0) / (-2 | 0) | 0) << 2 | 0;
        $139_1 = $1_1 + $4_1 | 0;
        $140_1 = $1_1;
        $1_1 = $2_1 - $1_1 | 0;
        $2_1 = ($21($139_1 | 0, $140_1 | 0, $1_1 | 0) | 0) + $1_1 | 0;
        HEAP32[($3_1 + 8 | 0) >> 2] = $2_1;
        HEAP32[($3_1 + 4 | 0) >> 2] = (HEAP32[($3_1 + 4 | 0) >> 2] | 0) + $4_1 | 0;
        break block3;
       }
       $1_1 = ($2_1 | 0) == ($4_1 | 0) ? 1 : ($2_1 - $4_1 | 0) >> 1 | 0;
       $5_1 = $44($7_1 + 56 | 0 | 0, $1_1 | 0, $1_1 >>> 2 | 0 | 0, HEAP32[($3_1 + 16 | 0) >> 2] | 0 | 0) | 0;
       $4_1 = HEAP32[($5_1 + 8 | 0) >> 2] | 0;
       block4 : {
        $2_1 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
        $1_1 = HEAP32[($3_1 + 4 | 0) >> 2] | 0;
        if (($2_1 | 0) == ($1_1 | 0)) {
         $2_1 = $4_1;
         $181_1 = $1_1;
         break block4;
        }
        $2_1 = $4_1 + ($2_1 - $1_1 | 0) | 0;
        label1 : while (1) {
         HEAP32[$4_1 >> 2] = HEAP32[$1_1 >> 2] | 0;
         $1_1 = $1_1 + 4 | 0;
         $4_1 = $4_1 + 4 | 0;
         if (($4_1 | 0) != ($2_1 | 0)) {
          continue label1
         }
         break label1;
        };
        $1_1 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
        $181_1 = HEAP32[($3_1 + 4 | 0) >> 2] | 0;
       }
       $4_1 = $181_1;
       $9_1 = HEAP32[$3_1 >> 2] | 0;
       HEAP32[$3_1 >> 2] = HEAP32[$5_1 >> 2] | 0;
       HEAP32[$5_1 >> 2] = $9_1;
       HEAP32[($3_1 + 4 | 0) >> 2] = HEAP32[($5_1 + 4 | 0) >> 2] | 0;
       HEAP32[($5_1 + 4 | 0) >> 2] = $4_1;
       HEAP32[($3_1 + 8 | 0) >> 2] = $2_1;
       HEAP32[($5_1 + 8 | 0) >> 2] = $1_1;
       $10_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
       HEAP32[($3_1 + 12 | 0) >> 2] = HEAP32[($5_1 + 12 | 0) >> 2] | 0;
       HEAP32[($5_1 + 12 | 0) >> 2] = $10_1;
       if (($1_1 | 0) != ($4_1 | 0)) {
        HEAP32[($5_1 + 8 | 0) >> 2] = $1_1 + ((($4_1 - $1_1 | 0) + 3 | 0) & -4 | 0) | 0
       }
       if (!$9_1) {
        break block3
       }
       $5($9_1 | 0);
       $2_1 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
      }
      HEAP32[$2_1 >> 2] = $8_1;
      HEAP32[($3_1 + 8 | 0) >> 2] = (HEAP32[($3_1 + 8 | 0) >> 2] | 0) + 4 | 0;
      $1_1 = HEAP32[($0_1 + 488 | 0) >> 2] | 0;
      $2_1 = $6_1 - $1_1 | 0;
      (wasm2js_i32$0 = $3_1, wasm2js_i32$1 = $21((HEAP32[($3_1 + 4 | 0) >> 2] | 0) - $2_1 | 0 | 0, $1_1 | 0, $2_1 | 0) | 0), HEAP32[(wasm2js_i32$0 + 4 | 0) >> 2] = wasm2js_i32$1;
      $4_1 = (HEAP32[($0_1 + 492 | 0) >> 2] | 0) - $6_1 | 0;
      $6_1 = $21(HEAP32[($3_1 + 8 | 0) >> 2] | 0 | 0, $6_1 | 0, $4_1 | 0) | 0;
      $1_1 = HEAP32[($0_1 + 488 | 0) >> 2] | 0;
      HEAP32[($0_1 + 488 | 0) >> 2] = HEAP32[($3_1 + 4 | 0) >> 2] | 0;
      HEAP32[($3_1 + 4 | 0) >> 2] = $1_1;
      $2_1 = HEAP32[($0_1 + 492 | 0) >> 2] | 0;
      HEAP32[($0_1 + 492 | 0) >> 2] = $4_1 + $6_1 | 0;
      HEAP32[($3_1 + 8 | 0) >> 2] = $2_1;
      $4_1 = HEAP32[($0_1 + 496 | 0) >> 2] | 0;
      HEAP32[($0_1 + 496 | 0) >> 2] = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
      HEAP32[$3_1 >> 2] = $1_1;
      HEAP32[($3_1 + 12 | 0) >> 2] = $4_1;
      if (($1_1 | 0) != ($2_1 | 0)) {
       HEAP32[($3_1 + 8 | 0) >> 2] = $2_1 + ((($1_1 - $2_1 | 0) + 3 | 0) & -4 | 0) | 0
      }
      if (!$1_1) {
       break block1
      }
      $5($1_1 | 0);
     }
     HEAP32[($8_1 + 484 | 0) >> 2] = $0_1;
     label2 : while (1) {
      $1_1 = HEAPU8[$0_1 >> 0] | 0;
      if (!($1_1 & 4 | 0)) {
       HEAP8[$0_1 >> 0] = $1_1 | 4 | 0;
       $1_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
       if ($1_1) {
        FUNCTION_TABLE[$1_1 | 0]($0_1)
       }
       HEAP32[($0_1 + 156 | 0) >> 2] = 2143289344;
       $0_1 = HEAP32[($0_1 + 484 | 0) >> 2] | 0;
       if ($0_1) {
        continue label2
       }
      }
      break label2;
     };
     global$0 = $7_1 + 80 | 0;
     return;
    }
    HEAP32[($7_1 + 16 | 0) >> 2] = 4548;
    $14($0_1 | 0, 5 | 0, 4824 | 0, $7_1 + 16 | 0 | 0);
    $6();
    wasm2js_trap();
   }
   HEAP32[$7_1 >> 2] = 4681;
   $14($0_1 | 0, 5 | 0, 4824 | 0, $7_1 | 0);
   $6();
   wasm2js_trap();
  }
  fimport$2();
  wasm2js_trap();
 }
 
 function $206($0_1) {
  $0_1 = $0_1 | 0;
  return ((HEAPU8[(HEAP32[$0_1 >> 2] | 0) >> 0] | 0) & 2 | 0) >>> 1 | 0 | 0;
 }
 
 function $207($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = Math_fround(0);
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  $1($2_1 + 8 | 0 | 0, $0_1 + 124 | 0 | 0, HEAPU16[(($0_1 + (($1_1 & 255 | 0) << 1 | 0) | 0) + 104 | 0) >> 1] | 0 | 0);
  $3_1 = Math_fround(NaN);
  block : {
   switch (HEAPU8[($2_1 + 12 | 0) >> 0] | 0 | 0) {
   default:
    $3_1 = Math_fround(HEAPF32[($2_1 + 8 | 0) >> 2]);
    break;
   case 0:
   case 3:
    break block;
   };
  }
  global$0 = $2_1 + 16 | 0;
  return Math_fround($3_1);
 }
 
 function $208($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  $1_1 = HEAP32[$1_1 >> 2] | 0;
  $1($3_1 + 8 | 0 | 0, $1_1 + 124 | 0 | 0, HEAPU16[(($1_1 + (($2_1 & 255 | 0) << 1 | 0) | 0) + 68 | 0) >> 1] | 0 | 0);
  $1_1 = HEAPU8[($3_1 + 12 | 0) >> 0] | 0;
  HEAPF64[($0_1 + 8 | 0) >> 3] = +Math_fround(HEAPF32[($3_1 + 8 | 0) >> 2]);
  HEAP32[$0_1 >> 2] = $1_1;
  global$0 = $3_1 + 16 | 0;
 }
 
 function $209($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0.0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  $1($2_1 + 8 | 0 | 0, $0_1 + 124 | 0 | 0, HEAPU16[(($0_1 + (($1_1 & 255 | 0) << 1 | 0) | 0) + 86 | 0) >> 1] | 0 | 0);
  $3_1 = NaN;
  block : {
   switch (HEAPU8[($2_1 + 12 | 0) >> 0] | 0 | 0) {
   default:
    $3_1 = +Math_fround(HEAPF32[($2_1 + 8 | 0) >> 2]);
    break;
   case 0:
   case 3:
    break block;
   };
  }
  global$0 = $2_1 + 16 | 0;
  return +$3_1;
 }
 
 function $210($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = Math_fround(0);
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  $1_1 = Math_fround($2($0_1 + 124 | 0 | 0, HEAPU16[($0_1 + 122 | 0) >> 1] | 0 | 0));
  return +(+($1_1 != $1_1 ? Math_fround(NaN) : $1_1));
 }
 
 function $211($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  $1_1 = HEAP32[$1_1 >> 2] | 0;
  $1($2_1 + 8 | 0 | 0, $1_1 + 124 | 0 | 0, HEAPU16[($1_1 + 120 | 0) >> 1] | 0 | 0);
  $1_1 = HEAPU8[($2_1 + 12 | 0) >> 0] | 0;
  HEAPF64[($0_1 + 8 | 0) >> 3] = +Math_fround(HEAPF32[($2_1 + 8 | 0) >> 2]);
  HEAP32[$0_1 >> 2] = $1_1;
  global$0 = $2_1 + 16 | 0;
 }
 
 function $212($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  $1_1 = HEAP32[$1_1 >> 2] | 0;
  $1($2_1 + 8 | 0 | 0, $1_1 + 124 | 0 | 0, HEAPU16[($1_1 + 118 | 0) >> 1] | 0 | 0);
  $1_1 = HEAPU8[($2_1 + 12 | 0) >> 0] | 0;
  HEAPF64[($0_1 + 8 | 0) >> 3] = +Math_fround(HEAPF32[($2_1 + 8 | 0) >> 2]);
  HEAP32[$0_1 >> 2] = $1_1;
  global$0 = $2_1 + 16 | 0;
 }
 
 function $213($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  $1_1 = HEAP32[$1_1 >> 2] | 0;
  $1($2_1 + 8 | 0 | 0, $1_1 + 124 | 0 | 0, HEAPU16[($1_1 + 116 | 0) >> 1] | 0 | 0);
  $1_1 = HEAPU8[($2_1 + 12 | 0) >> 0] | 0;
  HEAPF64[($0_1 + 8 | 0) >> 3] = +Math_fround(HEAPF32[($2_1 + 8 | 0) >> 2]);
  HEAP32[$0_1 >> 2] = $1_1;
  global$0 = $2_1 + 16 | 0;
 }
 
 function $214($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  $1_1 = HEAP32[$1_1 >> 2] | 0;
  $1($2_1 + 8 | 0 | 0, $1_1 + 124 | 0 | 0, HEAPU16[($1_1 + 114 | 0) >> 1] | 0 | 0);
  $1_1 = HEAPU8[($2_1 + 12 | 0) >> 0] | 0;
  HEAPF64[($0_1 + 8 | 0) >> 3] = +Math_fround(HEAPF32[($2_1 + 8 | 0) >> 2]);
  HEAP32[$0_1 >> 2] = $1_1;
  global$0 = $2_1 + 16 | 0;
 }
 
 function $215($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  $1_1 = HEAP32[$1_1 >> 2] | 0;
  $1($2_1 + 8 | 0 | 0, $1_1 + 124 | 0 | 0, HEAPU16[($1_1 + 112 | 0) >> 1] | 0 | 0);
  $1_1 = HEAPU8[($2_1 + 12 | 0) >> 0] | 0;
  HEAPF64[($0_1 + 8 | 0) >> 3] = +Math_fround(HEAPF32[($2_1 + 8 | 0) >> 2]);
  HEAP32[$0_1 >> 2] = $1_1;
  global$0 = $2_1 + 16 | 0;
 }
 
 function $216($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  $1_1 = HEAP32[$1_1 >> 2] | 0;
  $1($2_1 + 8 | 0 | 0, $1_1 + 124 | 0 | 0, HEAPU16[($1_1 + 110 | 0) >> 1] | 0 | 0);
  $1_1 = HEAPU8[($2_1 + 12 | 0) >> 0] | 0;
  HEAPF64[($0_1 + 8 | 0) >> 3] = +Math_fround(HEAPF32[($2_1 + 8 | 0) >> 2]);
  HEAP32[$0_1 >> 2] = $1_1;
  global$0 = $2_1 + 16 | 0;
 }
 
 function $217($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = Math_fround(0), $19_1 = Math_fround(0);
  block : {
   $0_1 = HEAP32[$0_1 >> 2] | 0;
   $1_1 = $0_1 + 124 | 0;
   $2_1 = Math_fround($2($1_1 | 0, HEAPU16[($0_1 + 28 | 0) >> 1] | 0 | 0));
   if ($2_1 != $2_1) {
    $19_1 = (HEAPU8[((HEAP32[($0_1 + 500 | 0) >> 2] | 0) + 8 | 0) >> 0] | 0) & 1 | 0 ? Math_fround(1.0) : Math_fround(0.0);
    break block;
   }
   $19_1 = Math_fround($2($1_1 | 0, HEAPU16[($0_1 + 28 | 0) >> 1] | 0 | 0));
  }
  return +(+$19_1);
 }
 
 function $218($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = Math_fround(0);
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  $1_1 = $0_1 + 124 | 0;
  $2_1 = Math_fround($2($1_1 | 0, HEAPU16[($0_1 + 26 | 0) >> 1] | 0 | 0));
  if ($2_1 != $2_1) {
   return +(0.0)
  }
  return +(+Math_fround($2($1_1 | 0, HEAPU16[($0_1 + 26 | 0) >> 1] | 0 | 0)));
 }
 
 function $219($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  $1_1 = HEAP32[$1_1 >> 2] | 0;
  $1($2_1 + 8 | 0 | 0, $1_1 + 124 | 0 | 0, HEAPU16[($1_1 + 30 | 0) >> 1] | 0 | 0);
  $1_1 = HEAPU8[($2_1 + 12 | 0) >> 0] | 0;
  HEAPF64[($0_1 + 8 | 0) >> 3] = +Math_fround(HEAPF32[($2_1 + 8 | 0) >> 2]);
  HEAP32[$0_1 >> 2] = $1_1;
  global$0 = $2_1 + 16 | 0;
 }
 
 function $220($0_1) {
  $0_1 = $0_1 | 0;
  return ((HEAPU8[((HEAP32[$0_1 >> 2] | 0) + 23 | 0) >> 0] | 0) >>> 2 | 0) & 3 | 0 | 0;
 }
 
 function $221($0_1) {
  $0_1 = $0_1 | 0;
  return (HEAPU8[((HEAP32[$0_1 >> 2] | 0) + 23 | 0) >> 0] | 0) & 3 | 0 | 0;
 }
 
 function $222($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  $1_1 = HEAP32[$1_1 >> 2] | 0;
  $1($3_1 + 8 | 0 | 0, $1_1 + 124 | 0 | 0, HEAPU16[(($1_1 + (($2_1 & 255 | 0) << 1 | 0) | 0) + 32 | 0) >> 1] | 0 | 0);
  $1_1 = HEAPU8[($3_1 + 12 | 0) >> 0] | 0;
  HEAPF64[($0_1 + 8 | 0) >> 3] = +Math_fround(HEAPF32[($3_1 + 8 | 0) >> 2]);
  HEAP32[$0_1 >> 2] = $1_1;
  global$0 = $3_1 + 16 | 0;
 }
 
 function $223($0_1) {
  $0_1 = $0_1 | 0;
  return ((HEAPU8[((HEAP32[$0_1 >> 2] | 0) + 20 | 0) >> 0] | 0) >>> 4 | 0) & 7 | 0 | 0;
 }
 
 function $224($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = HEAP32[$0_1 >> 2] | 0;
  return (HEAPU8[($1_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($1_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0) >>> 14 | 0 | 0;
 }
 
 function $225($0_1) {
  $0_1 = $0_1 | 0;
  return (HEAPU8[((HEAP32[$0_1 >> 2] | 0) + 20 | 0) >> 0] | 0) & 3 | 0 | 0;
 }
 
 function $226($0_1) {
  $0_1 = $0_1 | 0;
  return ((HEAPU8[((HEAP32[$0_1 >> 2] | 0) + 20 | 0) >> 0] | 0) >>> 2 | 0) & 3 | 0 | 0;
 }
 
 function $227($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = HEAP32[$0_1 >> 2] | 0;
  return (HEAPU8[($1_1 + 22 | 0) >> 0] | 0 | ((HEAPU8[($1_1 + 23 | 0) >> 0] | 0) << 8 | 0) | 0) & 15 | 0 | 0;
 }
 
 function $228($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = HEAP32[$0_1 >> 2] | 0;
  return ((HEAPU8[($1_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($1_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0) >>> 4 | 0) & 15 | 0 | 0;
 }
 
 function $229($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = HEAP32[$0_1 >> 2] | 0;
  return (HEAPU8[($1_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($1_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0) & 15 | 0 | 0;
 }
 
 function $230($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  $1_1 = HEAP32[$1_1 >> 2] | 0;
  $1($3_1 + 8 | 0 | 0, $1_1 + 124 | 0 | 0, HEAPU16[(($1_1 + (($2_1 & 255 | 0) << 1 | 0) | 0) + 50 | 0) >> 1] | 0 | 0);
  $1_1 = HEAPU8[($3_1 + 12 | 0) >> 0] | 0;
  HEAPF64[($0_1 + 8 | 0) >> 3] = +Math_fround(HEAPF32[($3_1 + 8 | 0) >> 2]);
  HEAP32[$0_1 >> 2] = $1_1;
  global$0 = $3_1 + 16 | 0;
 }
 
 function $231($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = HEAP32[$0_1 >> 2] | 0;
  return ((HEAPU8[($1_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($1_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0) >>> 12 | 0) & 3 | 0 | 0;
 }
 
 function $232($0_1) {
  $0_1 = $0_1 | 0;
  return ((HEAPU8[((HEAP32[$0_1 >> 2] | 0) + 23 | 0) >> 0] | 0) >>> 4 | 0) & 1 | 0 | 0;
 }
 
 function $233($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = +$2_1;
  var $3_1 = 0, $6_1 = Math_fround(0), $17_1 = Math_fround(0), $5_1 = 0, $4_1 = 0, i64toi32_i32$1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  $4_1 = HEAP32[$0_1 >> 2] | 0;
  block : {
   $6_1 = Math_fround($2_1);
   if ($6_1 != $6_1) {
    $0_1 = 0;
    $17_1 = Math_fround(NaN);
    break block;
   }
   $5_1 = $6_1 == Math_fround(Infinity) | $6_1 == Math_fround(-Infinity) | 0;
   $0_1 = $5_1 ? 0 : 2;
   $17_1 = $5_1 ? Math_fround(NaN) : $6_1;
  }
  $6_1 = $17_1;
  HEAP8[($3_1 + 12 | 0) >> 0] = $0_1;
  HEAPF32[($3_1 + 8 | 0) >> 2] = $6_1;
  i64toi32_i32$1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  HEAP32[$3_1 >> 2] = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
  HEAP32[($3_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  $106($4_1 | 0, $1_1 & 255 | 0 | 0, $3_1 | 0);
  global$0 = $3_1 + 16 | 0;
 }
 
 function $234($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = +$2_1;
  var $4_1 = 0, $3_1 = Math_fround(0), $17_1 = 0, $5_1 = 0, $11_1 = 0, i64toi32_i32$1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  $5_1 = HEAP32[$0_1 >> 2] | 0;
  $11_1 = $4_1;
  block : {
   $3_1 = Math_fround($2_1);
   if ($3_1 != $3_1) {
    $3_1 = Math_fround(NaN);
    $17_1 = 0;
    break block;
   }
   $0_1 = $3_1 == Math_fround(Infinity) | $3_1 == Math_fround(-Infinity) | 0;
   $3_1 = $0_1 ? Math_fround(NaN) : $3_1;
   $17_1 = !$0_1;
  }
  HEAP8[($11_1 + 12 | 0) >> 0] = $17_1;
  HEAPF32[($4_1 + 8 | 0) >> 2] = $3_1;
  i64toi32_i32$1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  HEAP32[$4_1 >> 2] = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
  HEAP32[($4_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  $106($5_1 | 0, $1_1 & 255 | 0 | 0, $4_1 | 0);
  global$0 = $4_1 + 16 | 0;
 }
 
 function $235($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  block : {
   $0_1 = HEAP32[$0_1 >> 2] | 0;
   $2_1 = HEAPU8[$0_1 >> 0] | 0;
   if ((($2_1 & 2 | 0) >>> 1 | 0 | 0) == ($1_1 | 0)) {
    break block
   }
   HEAP8[$0_1 >> 0] = $2_1 & 253 | 0 | ($1_1 ? 2 : 0) | 0;
   label : while (1) {
    $1_1 = HEAPU8[$0_1 >> 0] | 0;
    if ($1_1 & 4 | 0) {
     break block
    }
    HEAP8[$0_1 >> 0] = $1_1 | 4 | 0;
    $1_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
    if ($1_1) {
     FUNCTION_TABLE[$1_1 | 0]($0_1)
    }
    HEAP32[($0_1 + 156 | 0) >> 2] = 2143289344;
    $0_1 = HEAP32[($0_1 + 484 | 0) >> 2] | 0;
    if ($0_1) {
     continue label
    }
    break label;
   };
  }
 }
 
 function $236($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = +$2_1;
  var $3_1 = 0, $6_1 = Math_fround(0), $17_1 = Math_fround(0), $5_1 = 0, $4_1 = 0, i64toi32_i32$1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  $4_1 = HEAP32[$0_1 >> 2] | 0;
  block : {
   $6_1 = Math_fround($2_1);
   if ($6_1 != $6_1) {
    $0_1 = 0;
    $17_1 = Math_fround(NaN);
    break block;
   }
   $5_1 = $6_1 == Math_fround(Infinity) | $6_1 == Math_fround(-Infinity) | 0;
   $0_1 = $5_1 ? 0 : 2;
   $17_1 = $5_1 ? Math_fround(NaN) : $6_1;
  }
  $6_1 = $17_1;
  HEAP8[($3_1 + 12 | 0) >> 0] = $0_1;
  HEAPF32[($3_1 + 8 | 0) >> 2] = $6_1;
  i64toi32_i32$1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  HEAP32[$3_1 >> 2] = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
  HEAP32[($3_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  $112($4_1 | 0, $1_1 & 255 | 0 | 0, $3_1 | 0);
  global$0 = $3_1 + 16 | 0;
 }
 
 function $237($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = +$2_1;
  var $4_1 = 0, $3_1 = Math_fround(0), $17_1 = 0, $5_1 = 0, $11_1 = 0, i64toi32_i32$1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  $5_1 = HEAP32[$0_1 >> 2] | 0;
  $11_1 = $4_1;
  block : {
   $3_1 = Math_fround($2_1);
   if ($3_1 != $3_1) {
    $3_1 = Math_fround(NaN);
    $17_1 = 0;
    break block;
   }
   $0_1 = $3_1 == Math_fround(Infinity) | $3_1 == Math_fround(-Infinity) | 0;
   $3_1 = $0_1 ? Math_fround(NaN) : $3_1;
   $17_1 = !$0_1;
  }
  HEAP8[($11_1 + 12 | 0) >> 0] = $17_1;
  HEAPF32[($4_1 + 8 | 0) >> 2] = $3_1;
  i64toi32_i32$1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  HEAP32[$4_1 >> 2] = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
  HEAP32[($4_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  $112($5_1 | 0, $1_1 & 255 | 0 | 0, $4_1 | 0);
  global$0 = $4_1 + 16 | 0;
 }
 
 function $238($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = +$2_1;
  var $3_1 = Math_fround(0), $5_1 = 0, $6_1 = 0, $4_1 = Math_fround(0), $19_1 = 0, $8_1 = 0, $58_1 = 0, $7_1 = 0;
  $5_1 = global$0 - 16 | 0;
  global$0 = $5_1;
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  block : {
   $3_1 = Math_fround($2_1);
   if ($3_1 != $3_1) {
    $3_1 = Math_fround(NaN);
    $19_1 = 0;
    break block;
   }
   $6_1 = $3_1 == Math_fround(Infinity) | $3_1 == Math_fround(-Infinity) | 0;
   $3_1 = $6_1 ? Math_fround(NaN) : $3_1;
   $19_1 = !$6_1;
  }
  $6_1 = $19_1;
  $7_1 = 1;
  $8_1 = $0_1 + 124 | 0;
  $1_1 = ($0_1 + (($1_1 & 255 | 0) << 1 | 0) | 0) + 86 | 0;
  $1($5_1 + 8 | 0 | 0, $8_1 | 0, HEAPU16[$1_1 >> 1] | 0 | 0);
  block2 : {
   block1 : {
    $4_1 = Math_fround(HEAPF32[($5_1 + 8 | 0) >> 2]);
    if ($3_1 != $4_1) {
     if ($4_1 == $4_1) {
      break block1
     }
     $58_1 = $3_1 != $3_1;
    } else {
     $58_1 = $7_1
    }
    if (!$58_1) {
     break block1
    }
    if ((HEAPU8[($5_1 + 12 | 0) >> 0] | 0 | 0) == ($6_1 | 0)) {
     break block2
    }
   }
   $27($8_1 | 0, $1_1 | 0, Math_fround($3_1), $6_1 | 0);
   label : while (1) {
    $1_1 = HEAPU8[$0_1 >> 0] | 0;
    if ($1_1 & 4 | 0) {
     break block2
    }
    HEAP8[$0_1 >> 0] = $1_1 | 4 | 0;
    $1_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
    if ($1_1) {
     FUNCTION_TABLE[$1_1 | 0]($0_1)
    }
    HEAP32[($0_1 + 156 | 0) >> 2] = 2143289344;
    $0_1 = HEAP32[($0_1 + 484 | 0) >> 2] | 0;
    if ($0_1) {
     continue label
    }
    break label;
   };
  }
  global$0 = $5_1 + 16 | 0;
 }
 
 function $239($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = +$1_1;
  var $2_1 = 0, $5_1 = Math_fround(0), $6_1 = Math_fround(0), $3_1 = 0, $4_1 = 0;
  block : {
   $0_1 = HEAP32[$0_1 >> 2] | 0;
   $3_1 = $0_1 + 124 | 0;
   $2_1 = $0_1 + 122 | 0;
   $6_1 = Math_fround($2($3_1 | 0, HEAPU16[$2_1 >> 1] | 0 | 0));
   $5_1 = Math_fround($1_1);
   if ($6_1 == $5_1) {
    break block
   }
   $4_1 = $5_1 == $5_1;
   if (!$4_1 & $6_1 != $6_1 | 0) {
    break block
   }
   block1 : {
    if (!($4_1 & !($5_1 == Math_fround(0.0) | Math_fround(Math_abs($5_1)) == Math_fround(Infinity) | 0) | 0)) {
     HEAP16[$2_1 >> 1] = (HEAPU16[$2_1 >> 1] | 0) & 65528 | 0;
     break block1;
    }
    $46($3_1 | 0, $2_1 | 0, Math_fround($5_1), 3 | 0);
   }
   label : while (1) {
    $2_1 = HEAPU8[$0_1 >> 0] | 0;
    if ($2_1 & 4 | 0) {
     break block
    }
    HEAP8[$0_1 >> 0] = $2_1 | 4 | 0;
    $2_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
    if ($2_1) {
     FUNCTION_TABLE[$2_1 | 0]($0_1)
    }
    HEAP32[($0_1 + 156 | 0) >> 2] = 2143289344;
    $0_1 = HEAP32[($0_1 + 484 | 0) >> 2] | 0;
    if ($0_1) {
     continue label
    }
    break label;
   };
  }
 }
 
 function $240($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = +$1_1;
  var $2_1 = 0, $5_1 = Math_fround(0), $16_1 = Math_fround(0), $4_1 = 0, $3_1 = 0, i64toi32_i32$1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  $3_1 = HEAP32[$0_1 >> 2] | 0;
  block : {
   $5_1 = Math_fround($1_1);
   if ($5_1 != $5_1) {
    $0_1 = 0;
    $16_1 = Math_fround(NaN);
    break block;
   }
   $4_1 = $5_1 == Math_fround(Infinity) | $5_1 == Math_fround(-Infinity) | 0;
   $0_1 = $4_1 ? 0 : 2;
   $16_1 = $4_1 ? Math_fround(NaN) : $5_1;
  }
  $5_1 = $16_1;
  HEAP8[($2_1 + 12 | 0) >> 0] = $0_1;
  HEAPF32[($2_1 + 8 | 0) >> 2] = $5_1;
  i64toi32_i32$1 = HEAP32[($2_1 + 12 | 0) >> 2] | 0;
  HEAP32[$2_1 >> 2] = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
  HEAP32[($2_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  $55($3_1 | 0, 1 | 0, $2_1 | 0);
  global$0 = $2_1 + 16 | 0;
 }
 
 function $241($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = +$1_1;
  var $3_1 = 0, $2_1 = Math_fround(0), $16_1 = 0, $4_1 = 0, $10_1 = 0, i64toi32_i32$1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  $4_1 = HEAP32[$0_1 >> 2] | 0;
  $10_1 = $3_1;
  block : {
   $2_1 = Math_fround($1_1);
   if ($2_1 != $2_1) {
    $2_1 = Math_fround(NaN);
    $16_1 = 0;
    break block;
   }
   $0_1 = $2_1 == Math_fround(Infinity) | $2_1 == Math_fround(-Infinity) | 0;
   $2_1 = $0_1 ? Math_fround(NaN) : $2_1;
   $16_1 = !$0_1;
  }
  HEAP8[($10_1 + 12 | 0) >> 0] = $16_1;
  HEAPF32[($3_1 + 8 | 0) >> 2] = $2_1;
  i64toi32_i32$1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  HEAP32[$3_1 >> 2] = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
  HEAP32[($3_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  $55($4_1 | 0, 1 | 0, $3_1 | 0);
  global$0 = $3_1 + 16 | 0;
 }
 
 function $242($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = +$1_1;
  var $2_1 = 0, $5_1 = Math_fround(0), $16_1 = Math_fround(0), $4_1 = 0, $3_1 = 0, i64toi32_i32$1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  $3_1 = HEAP32[$0_1 >> 2] | 0;
  block : {
   $5_1 = Math_fround($1_1);
   if ($5_1 != $5_1) {
    $0_1 = 0;
    $16_1 = Math_fround(NaN);
    break block;
   }
   $4_1 = $5_1 == Math_fround(Infinity) | $5_1 == Math_fround(-Infinity) | 0;
   $0_1 = $4_1 ? 0 : 2;
   $16_1 = $4_1 ? Math_fround(NaN) : $5_1;
  }
  $5_1 = $16_1;
  HEAP8[($2_1 + 12 | 0) >> 0] = $0_1;
  HEAPF32[($2_1 + 8 | 0) >> 2] = $5_1;
  i64toi32_i32$1 = HEAP32[($2_1 + 12 | 0) >> 2] | 0;
  HEAP32[$2_1 >> 2] = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
  HEAP32[($2_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  $55($3_1 | 0, 0 | 0, $2_1 | 0);
  global$0 = $2_1 + 16 | 0;
 }
 
 function $243($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = +$1_1;
  var $3_1 = 0, $2_1 = Math_fround(0), $16_1 = 0, $4_1 = 0, $10_1 = 0, i64toi32_i32$1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  $4_1 = HEAP32[$0_1 >> 2] | 0;
  $10_1 = $3_1;
  block : {
   $2_1 = Math_fround($1_1);
   if ($2_1 != $2_1) {
    $2_1 = Math_fround(NaN);
    $16_1 = 0;
    break block;
   }
   $0_1 = $2_1 == Math_fround(Infinity) | $2_1 == Math_fround(-Infinity) | 0;
   $2_1 = $0_1 ? Math_fround(NaN) : $2_1;
   $16_1 = !$0_1;
  }
  HEAP8[($10_1 + 12 | 0) >> 0] = $16_1;
  HEAPF32[($3_1 + 8 | 0) >> 2] = $2_1;
  i64toi32_i32$1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  HEAP32[$3_1 >> 2] = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
  HEAP32[($3_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  $55($4_1 | 0, 0 | 0, $3_1 | 0);
  global$0 = $3_1 + 16 | 0;
 }
 
 function $244($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = +$1_1;
  var $2_1 = 0, $5_1 = Math_fround(0), $16_1 = Math_fround(0), $4_1 = 0, $3_1 = 0, i64toi32_i32$1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  $3_1 = HEAP32[$0_1 >> 2] | 0;
  block : {
   $5_1 = Math_fround($1_1);
   if ($5_1 != $5_1) {
    $0_1 = 0;
    $16_1 = Math_fround(NaN);
    break block;
   }
   $4_1 = $5_1 == Math_fround(Infinity) | $5_1 == Math_fround(-Infinity) | 0;
   $0_1 = $4_1 ? 0 : 2;
   $16_1 = $4_1 ? Math_fround(NaN) : $5_1;
  }
  $5_1 = $16_1;
  HEAP8[($2_1 + 12 | 0) >> 0] = $0_1;
  HEAPF32[($2_1 + 8 | 0) >> 2] = $5_1;
  i64toi32_i32$1 = HEAP32[($2_1 + 12 | 0) >> 2] | 0;
  HEAP32[$2_1 >> 2] = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
  HEAP32[($2_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  $56($3_1 | 0, 1 | 0, $2_1 | 0);
  global$0 = $2_1 + 16 | 0;
 }
 
 function $245($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = +$1_1;
  var $3_1 = 0, $2_1 = Math_fround(0), $16_1 = 0, $4_1 = 0, $10_1 = 0, i64toi32_i32$1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  $4_1 = HEAP32[$0_1 >> 2] | 0;
  $10_1 = $3_1;
  block : {
   $2_1 = Math_fround($1_1);
   if ($2_1 != $2_1) {
    $2_1 = Math_fround(NaN);
    $16_1 = 0;
    break block;
   }
   $0_1 = $2_1 == Math_fround(Infinity) | $2_1 == Math_fround(-Infinity) | 0;
   $2_1 = $0_1 ? Math_fround(NaN) : $2_1;
   $16_1 = !$0_1;
  }
  HEAP8[($10_1 + 12 | 0) >> 0] = $16_1;
  HEAPF32[($3_1 + 8 | 0) >> 2] = $2_1;
  i64toi32_i32$1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  HEAP32[$3_1 >> 2] = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
  HEAP32[($3_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  $56($4_1 | 0, 1 | 0, $3_1 | 0);
  global$0 = $3_1 + 16 | 0;
 }
 
 function $246($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = +$1_1;
  var $2_1 = 0, $5_1 = Math_fround(0), $16_1 = Math_fround(0), $4_1 = 0, $3_1 = 0, i64toi32_i32$1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  $3_1 = HEAP32[$0_1 >> 2] | 0;
  block : {
   $5_1 = Math_fround($1_1);
   if ($5_1 != $5_1) {
    $0_1 = 0;
    $16_1 = Math_fround(NaN);
    break block;
   }
   $4_1 = $5_1 == Math_fround(Infinity) | $5_1 == Math_fround(-Infinity) | 0;
   $0_1 = $4_1 ? 0 : 2;
   $16_1 = $4_1 ? Math_fround(NaN) : $5_1;
  }
  $5_1 = $16_1;
  HEAP8[($2_1 + 12 | 0) >> 0] = $0_1;
  HEAPF32[($2_1 + 8 | 0) >> 2] = $5_1;
  i64toi32_i32$1 = HEAP32[($2_1 + 12 | 0) >> 2] | 0;
  HEAP32[$2_1 >> 2] = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
  HEAP32[($2_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  $56($3_1 | 0, 0 | 0, $2_1 | 0);
  global$0 = $2_1 + 16 | 0;
 }
 
 function $247($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = +$1_1;
  var $3_1 = 0, $2_1 = Math_fround(0), $16_1 = 0, $4_1 = 0, $10_1 = 0, i64toi32_i32$1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  $4_1 = HEAP32[$0_1 >> 2] | 0;
  $10_1 = $3_1;
  block : {
   $2_1 = Math_fround($1_1);
   if ($2_1 != $2_1) {
    $2_1 = Math_fround(NaN);
    $16_1 = 0;
    break block;
   }
   $0_1 = $2_1 == Math_fround(Infinity) | $2_1 == Math_fround(-Infinity) | 0;
   $2_1 = $0_1 ? Math_fround(NaN) : $2_1;
   $16_1 = !$0_1;
  }
  HEAP8[($10_1 + 12 | 0) >> 0] = $16_1;
  HEAPF32[($3_1 + 8 | 0) >> 2] = $2_1;
  i64toi32_i32$1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  HEAP32[$3_1 >> 2] = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
  HEAP32[($3_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  $56($4_1 | 0, 0 | 0, $3_1 | 0);
  global$0 = $3_1 + 16 | 0;
 }
 
 function $248($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, i64toi32_i32$1 = 0;
  $1_1 = global$0 - 16 | 0;
  global$0 = $1_1;
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  HEAP8[($1_1 + 12 | 0) >> 0] = 3;
  HEAP32[($1_1 + 8 | 0) >> 2] = 2143289344;
  i64toi32_i32$1 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
  HEAP32[$1_1 >> 2] = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
  HEAP32[($1_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  $40($0_1 | 0, 1 | 0, $1_1 | 0);
  global$0 = $1_1 + 16 | 0;
 }
 
 function $249($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = +$1_1;
  var $2_1 = 0, $5_1 = Math_fround(0), $16_1 = Math_fround(0), $4_1 = 0, $3_1 = 0, i64toi32_i32$1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  $3_1 = HEAP32[$0_1 >> 2] | 0;
  block : {
   $5_1 = Math_fround($1_1);
   if ($5_1 != $5_1) {
    $0_1 = 0;
    $16_1 = Math_fround(NaN);
    break block;
   }
   $4_1 = $5_1 == Math_fround(Infinity) | $5_1 == Math_fround(-Infinity) | 0;
   $0_1 = $4_1 ? 0 : 2;
   $16_1 = $4_1 ? Math_fround(NaN) : $5_1;
  }
  $5_1 = $16_1;
  HEAP8[($2_1 + 12 | 0) >> 0] = $0_1;
  HEAPF32[($2_1 + 8 | 0) >> 2] = $5_1;
  i64toi32_i32$1 = HEAP32[($2_1 + 12 | 0) >> 2] | 0;
  HEAP32[$2_1 >> 2] = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
  HEAP32[($2_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  $40($3_1 | 0, 1 | 0, $2_1 | 0);
  global$0 = $2_1 + 16 | 0;
 }
 
 function $250($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = +$1_1;
  var $3_1 = 0, $2_1 = Math_fround(0), $16_1 = 0, $4_1 = 0, $10_1 = 0, i64toi32_i32$1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  $4_1 = HEAP32[$0_1 >> 2] | 0;
  $10_1 = $3_1;
  block : {
   $2_1 = Math_fround($1_1);
   if ($2_1 != $2_1) {
    $2_1 = Math_fround(NaN);
    $16_1 = 0;
    break block;
   }
   $0_1 = $2_1 == Math_fround(Infinity) | $2_1 == Math_fround(-Infinity) | 0;
   $2_1 = $0_1 ? Math_fround(NaN) : $2_1;
   $16_1 = !$0_1;
  }
  HEAP8[($10_1 + 12 | 0) >> 0] = $16_1;
  HEAPF32[($3_1 + 8 | 0) >> 2] = $2_1;
  i64toi32_i32$1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  HEAP32[$3_1 >> 2] = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
  HEAP32[($3_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  $40($4_1 | 0, 1 | 0, $3_1 | 0);
  global$0 = $3_1 + 16 | 0;
 }
 
 function $251($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, i64toi32_i32$1 = 0;
  $1_1 = global$0 - 16 | 0;
  global$0 = $1_1;
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  HEAP8[($1_1 + 12 | 0) >> 0] = 3;
  HEAP32[($1_1 + 8 | 0) >> 2] = 2143289344;
  i64toi32_i32$1 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
  HEAP32[$1_1 >> 2] = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
  HEAP32[($1_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  $40($0_1 | 0, 0 | 0, $1_1 | 0);
  global$0 = $1_1 + 16 | 0;
 }
 
 function $252($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = +$1_1;
  var $2_1 = 0, $5_1 = Math_fround(0), $16_1 = Math_fround(0), $4_1 = 0, $3_1 = 0, i64toi32_i32$1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  $3_1 = HEAP32[$0_1 >> 2] | 0;
  block : {
   $5_1 = Math_fround($1_1);
   if ($5_1 != $5_1) {
    $0_1 = 0;
    $16_1 = Math_fround(NaN);
    break block;
   }
   $4_1 = $5_1 == Math_fround(Infinity) | $5_1 == Math_fround(-Infinity) | 0;
   $0_1 = $4_1 ? 0 : 2;
   $16_1 = $4_1 ? Math_fround(NaN) : $5_1;
  }
  $5_1 = $16_1;
  HEAP8[($2_1 + 12 | 0) >> 0] = $0_1;
  HEAPF32[($2_1 + 8 | 0) >> 2] = $5_1;
  i64toi32_i32$1 = HEAP32[($2_1 + 12 | 0) >> 2] | 0;
  HEAP32[$2_1 >> 2] = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
  HEAP32[($2_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  $40($3_1 | 0, 0 | 0, $2_1 | 0);
  global$0 = $2_1 + 16 | 0;
 }
 
 function $253($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = +$1_1;
  var $3_1 = 0, $2_1 = Math_fround(0), $16_1 = 0, $4_1 = 0, $10_1 = 0, i64toi32_i32$1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  $4_1 = HEAP32[$0_1 >> 2] | 0;
  $10_1 = $3_1;
  block : {
   $2_1 = Math_fround($1_1);
   if ($2_1 != $2_1) {
    $2_1 = Math_fround(NaN);
    $16_1 = 0;
    break block;
   }
   $0_1 = $2_1 == Math_fround(Infinity) | $2_1 == Math_fround(-Infinity) | 0;
   $2_1 = $0_1 ? Math_fround(NaN) : $2_1;
   $16_1 = !$0_1;
  }
  HEAP8[($10_1 + 12 | 0) >> 0] = $16_1;
  HEAPF32[($3_1 + 8 | 0) >> 2] = $2_1;
  i64toi32_i32$1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  HEAP32[$3_1 >> 2] = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
  HEAP32[($3_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  $40($4_1 | 0, 0 | 0, $3_1 | 0);
  global$0 = $3_1 + 16 | 0;
 }
 
 function $254($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = +$1_1;
  var $2_1 = 0, $5_1 = Math_fround(0), $6_1 = Math_fround(0), $3_1 = 0, $4_1 = 0;
  block : {
   $0_1 = HEAP32[$0_1 >> 2] | 0;
   $3_1 = $0_1 + 124 | 0;
   $2_1 = $0_1 + 28 | 0;
   $6_1 = Math_fround($2($3_1 | 0, HEAPU16[$2_1 >> 1] | 0 | 0));
   $5_1 = Math_fround($1_1);
   if ($6_1 == $5_1) {
    break block
   }
   $4_1 = $5_1 == $5_1;
   if (!$4_1 & $6_1 != $6_1 | 0) {
    break block
   }
   block1 : {
    if (!$4_1) {
     HEAP16[$2_1 >> 1] = (HEAPU16[$2_1 >> 1] | 0) & 65528 | 0;
     break block1;
    }
    $46($3_1 | 0, $2_1 | 0, Math_fround($5_1), 3 | 0);
   }
   label : while (1) {
    $2_1 = HEAPU8[$0_1 >> 0] | 0;
    if ($2_1 & 4 | 0) {
     break block
    }
    HEAP8[$0_1 >> 0] = $2_1 | 4 | 0;
    $2_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
    if ($2_1) {
     FUNCTION_TABLE[$2_1 | 0]($0_1)
    }
    HEAP32[($0_1 + 156 | 0) >> 2] = 2143289344;
    $0_1 = HEAP32[($0_1 + 484 | 0) >> 2] | 0;
    if ($0_1) {
     continue label
    }
    break label;
   };
  }
 }
 
 function $255($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = +$1_1;
  var $2_1 = 0, $5_1 = Math_fround(0), $6_1 = Math_fround(0), $3_1 = 0, $4_1 = 0;
  block : {
   $0_1 = HEAP32[$0_1 >> 2] | 0;
   $3_1 = $0_1 + 124 | 0;
   $2_1 = $0_1 + 26 | 0;
   $6_1 = Math_fround($2($3_1 | 0, HEAPU16[$2_1 >> 1] | 0 | 0));
   $5_1 = Math_fround($1_1);
   if ($6_1 == $5_1) {
    break block
   }
   $4_1 = $5_1 == $5_1;
   if (!$4_1 & $6_1 != $6_1 | 0) {
    break block
   }
   block1 : {
    if (!$4_1) {
     HEAP16[$2_1 >> 1] = (HEAPU16[$2_1 >> 1] | 0) & 65528 | 0;
     break block1;
    }
    $46($3_1 | 0, $2_1 | 0, Math_fround($5_1), 3 | 0);
   }
   label : while (1) {
    $2_1 = HEAPU8[$0_1 >> 0] | 0;
    if ($2_1 & 4 | 0) {
     break block
    }
    HEAP8[$0_1 >> 0] = $2_1 | 4 | 0;
    $2_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
    if ($2_1) {
     FUNCTION_TABLE[$2_1 | 0]($0_1)
    }
    HEAP32[($0_1 + 156 | 0) >> 2] = 2143289344;
    $0_1 = HEAP32[($0_1 + 484 | 0) >> 2] | 0;
    if ($0_1) {
     continue label
    }
    break label;
   };
  }
 }
 
 function $256($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, i64toi32_i32$1 = 0;
  $1_1 = global$0 - 16 | 0;
  global$0 = $1_1;
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  HEAP8[($1_1 + 12 | 0) >> 0] = 3;
  HEAP32[($1_1 + 8 | 0) >> 2] = 2143289344;
  i64toi32_i32$1 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
  HEAP32[$1_1 >> 2] = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
  HEAP32[($1_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  $77($0_1 | 0, $1_1 | 0);
  global$0 = $1_1 + 16 | 0;
 }
 
 function $257($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = +$1_1;
  var $2_1 = 0, $5_1 = Math_fround(0), $16_1 = Math_fround(0), $4_1 = 0, $3_1 = 0, i64toi32_i32$1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  $3_1 = HEAP32[$0_1 >> 2] | 0;
  block : {
   $5_1 = Math_fround($1_1);
   if ($5_1 != $5_1) {
    $0_1 = 0;
    $16_1 = Math_fround(NaN);
    break block;
   }
   $4_1 = $5_1 == Math_fround(Infinity) | $5_1 == Math_fround(-Infinity) | 0;
   $0_1 = $4_1 ? 0 : 2;
   $16_1 = $4_1 ? Math_fround(NaN) : $5_1;
  }
  $5_1 = $16_1;
  HEAP8[($2_1 + 12 | 0) >> 0] = $0_1;
  HEAPF32[($2_1 + 8 | 0) >> 2] = $5_1;
  i64toi32_i32$1 = HEAP32[($2_1 + 12 | 0) >> 2] | 0;
  HEAP32[$2_1 >> 2] = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
  HEAP32[($2_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  $77($3_1 | 0, $2_1 | 0);
  global$0 = $2_1 + 16 | 0;
 }
 
 function $258($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = +$1_1;
  var $3_1 = 0, $2_1 = Math_fround(0), $16_1 = 0, $4_1 = 0, $10_1 = 0, i64toi32_i32$1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  $4_1 = HEAP32[$0_1 >> 2] | 0;
  $10_1 = $3_1;
  block : {
   $2_1 = Math_fround($1_1);
   if ($2_1 != $2_1) {
    $2_1 = Math_fround(NaN);
    $16_1 = 0;
    break block;
   }
   $0_1 = $2_1 == Math_fround(Infinity) | $2_1 == Math_fround(-Infinity) | 0;
   $2_1 = $0_1 ? Math_fround(NaN) : $2_1;
   $16_1 = !$0_1;
  }
  HEAP8[($10_1 + 12 | 0) >> 0] = $16_1;
  HEAPF32[($3_1 + 8 | 0) >> 2] = $2_1;
  i64toi32_i32$1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  HEAP32[$3_1 >> 2] = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
  HEAP32[($3_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  $77($4_1 | 0, $3_1 | 0);
  global$0 = $3_1 + 16 | 0;
 }
 
 function $259($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = +$1_1;
  var $2_1 = 0, $5_1 = Math_fround(0), $6_1 = Math_fround(0), $3_1 = 0, $4_1 = 0;
  block : {
   $0_1 = HEAP32[$0_1 >> 2] | 0;
   $3_1 = $0_1 + 124 | 0;
   $2_1 = $0_1 + 24 | 0;
   $6_1 = Math_fround($2($3_1 | 0, HEAPU16[$2_1 >> 1] | 0 | 0));
   $5_1 = Math_fround($1_1);
   if ($6_1 == $5_1) {
    break block
   }
   $4_1 = $5_1 == $5_1;
   if (!$4_1 & $6_1 != $6_1 | 0) {
    break block
   }
   block1 : {
    if (!$4_1) {
     HEAP16[$2_1 >> 1] = (HEAPU16[$2_1 >> 1] | 0) & 65528 | 0;
     break block1;
    }
    $46($3_1 | 0, $2_1 | 0, Math_fround($5_1), 3 | 0);
   }
   label : while (1) {
    $2_1 = HEAPU8[$0_1 >> 0] | 0;
    if ($2_1 & 4 | 0) {
     break block
    }
    HEAP8[$0_1 >> 0] = $2_1 | 4 | 0;
    $2_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
    if ($2_1) {
     FUNCTION_TABLE[$2_1 | 0]($0_1)
    }
    HEAP32[($0_1 + 156 | 0) >> 2] = 2143289344;
    $0_1 = HEAP32[($0_1 + 484 | 0) >> 2] | 0;
    if ($0_1) {
     continue label
    }
    break label;
   };
  }
 }
 
 function $260($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  block : {
   $0_1 = HEAP32[$0_1 >> 2] | 0;
   $2_1 = HEAPU8[($0_1 + 23 | 0) >> 0] | 0;
   if ((($2_1 >>> 2 | 0) & 3 | 0 | 0) == ($1_1 & 255 | 0 | 0)) {
    break block
   }
   $2_1 = HEAPU8[($0_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($0_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0 | ($2_1 << 16 | 0) | 0;
   HEAP8[($0_1 + 21 | 0) >> 0] = $2_1;
   HEAP8[($0_1 + 22 | 0) >> 0] = $2_1 >>> 8 | 0;
   HEAP8[($0_1 + 23 | 0) >> 0] = ($2_1 & 15990783 | 0 | (($1_1 & 3 | 0) << 18 | 0) | 0) >>> 16 | 0;
   label : while (1) {
    $1_1 = HEAPU8[$0_1 >> 0] | 0;
    if ($1_1 & 4 | 0) {
     break block
    }
    HEAP8[$0_1 >> 0] = $1_1 | 4 | 0;
    $1_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
    if ($1_1) {
     FUNCTION_TABLE[$1_1 | 0]($0_1)
    }
    HEAP32[($0_1 + 156 | 0) >> 2] = 2143289344;
    $0_1 = HEAP32[($0_1 + 484 | 0) >> 2] | 0;
    if ($0_1) {
     continue label
    }
    break label;
   };
  }
 }
 
 function $261($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  block : {
   $0_1 = HEAP32[$0_1 >> 2] | 0;
   $2_1 = HEAPU8[($0_1 + 23 | 0) >> 0] | 0;
   if (($2_1 & 3 | 0 | 0) == ($1_1 & 255 | 0 | 0)) {
    break block
   }
   $2_1 = HEAPU8[($0_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($0_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0 | ($2_1 << 16 | 0) | 0;
   HEAP8[($0_1 + 21 | 0) >> 0] = $2_1;
   HEAP8[($0_1 + 22 | 0) >> 0] = $2_1 >>> 8 | 0;
   HEAP8[($0_1 + 23 | 0) >> 0] = ($2_1 & 16580607 | 0 | (($1_1 & 3 | 0) << 16 | 0) | 0) >>> 16 | 0;
   label : while (1) {
    $1_1 = HEAPU8[$0_1 >> 0] | 0;
    if ($1_1 & 4 | 0) {
     break block
    }
    HEAP8[$0_1 >> 0] = $1_1 | 4 | 0;
    $1_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
    if ($1_1) {
     FUNCTION_TABLE[$1_1 | 0]($0_1)
    }
    HEAP32[($0_1 + 156 | 0) >> 2] = 2143289344;
    $0_1 = HEAP32[($0_1 + 484 | 0) >> 2] | 0;
    if ($0_1) {
     continue label
    }
    break label;
   };
  }
 }
 
 function $262($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, i64toi32_i32$1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  HEAP8[($2_1 + 12 | 0) >> 0] = 3;
  HEAP32[($2_1 + 8 | 0) >> 2] = 2143289344;
  i64toi32_i32$1 = HEAP32[($2_1 + 12 | 0) >> 2] | 0;
  HEAP32[$2_1 >> 2] = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
  HEAP32[($2_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  $71($0_1 | 0, $1_1 & 255 | 0 | 0, $2_1 | 0);
  global$0 = $2_1 + 16 | 0;
 }
 
 function $263($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = +$2_1;
  var $3_1 = 0, $6_1 = Math_fround(0), $17_1 = Math_fround(0), $5_1 = 0, $4_1 = 0, i64toi32_i32$1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  $4_1 = HEAP32[$0_1 >> 2] | 0;
  block : {
   $6_1 = Math_fround($2_1);
   if ($6_1 != $6_1) {
    $0_1 = 0;
    $17_1 = Math_fround(NaN);
    break block;
   }
   $5_1 = $6_1 == Math_fround(Infinity) | $6_1 == Math_fround(-Infinity) | 0;
   $0_1 = $5_1 ? 0 : 2;
   $17_1 = $5_1 ? Math_fround(NaN) : $6_1;
  }
  $6_1 = $17_1;
  HEAP8[($3_1 + 12 | 0) >> 0] = $0_1;
  HEAPF32[($3_1 + 8 | 0) >> 2] = $6_1;
  i64toi32_i32$1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  HEAP32[$3_1 >> 2] = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
  HEAP32[($3_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  $71($4_1 | 0, $1_1 & 255 | 0 | 0, $3_1 | 0);
  global$0 = $3_1 + 16 | 0;
 }
 
 function $264($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = +$2_1;
  var $4_1 = 0, $3_1 = Math_fround(0), $17_1 = 0, $5_1 = 0, $11_1 = 0, i64toi32_i32$1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  $5_1 = HEAP32[$0_1 >> 2] | 0;
  $11_1 = $4_1;
  block : {
   $3_1 = Math_fround($2_1);
   if ($3_1 != $3_1) {
    $3_1 = Math_fround(NaN);
    $17_1 = 0;
    break block;
   }
   $0_1 = $3_1 == Math_fround(Infinity) | $3_1 == Math_fround(-Infinity) | 0;
   $3_1 = $0_1 ? Math_fround(NaN) : $3_1;
   $17_1 = !$0_1;
  }
  HEAP8[($11_1 + 12 | 0) >> 0] = $17_1;
  HEAPF32[($4_1 + 8 | 0) >> 2] = $3_1;
  i64toi32_i32$1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  HEAP32[$4_1 >> 2] = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
  HEAP32[($4_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  $71($5_1 | 0, $1_1 & 255 | 0 | 0, $4_1 | 0);
  global$0 = $4_1 + 16 | 0;
 }
 
 function $265($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  block : {
   $0_1 = HEAP32[$0_1 >> 2] | 0;
   $2_1 = HEAPU8[($0_1 + 20 | 0) >> 0] | 0;
   if ((($2_1 >>> 4 | 0) & 7 | 0 | 0) == ($1_1 & 255 | 0 | 0)) {
    break block
   }
   HEAP8[($0_1 + 20 | 0) >> 0] = $2_1 & 143 | 0 | (($1_1 << 4 | 0) & 112 | 0) | 0;
   label : while (1) {
    $1_1 = HEAPU8[$0_1 >> 0] | 0;
    if ($1_1 & 4 | 0) {
     break block
    }
    HEAP8[$0_1 >> 0] = $1_1 | 4 | 0;
    $1_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
    if ($1_1) {
     FUNCTION_TABLE[$1_1 | 0]($0_1)
    }
    HEAP32[($0_1 + 156 | 0) >> 2] = 2143289344;
    $0_1 = HEAP32[($0_1 + 484 | 0) >> 2] | 0;
    if ($0_1) {
     continue label
    }
    break label;
   };
  }
 }
 
 function $266($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0;
  block : {
   $0_1 = HEAP32[$0_1 >> 2] | 0;
   $2_1 = HEAPU8[($0_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($0_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0;
   if (($1_1 & 255 | 0 | 0) == ($2_1 >>> 14 | 0 | 0)) {
    break block
   }
   $2_1 = $2_1 | ((HEAPU8[($0_1 + 23 | 0) >> 0] | 0) << 16 | 0) | 0;
   HEAP8[($0_1 + 23 | 0) >> 0] = $2_1 >>> 16 | 0;
   $3_1 = $2_1 & 16383 | 0 | ($1_1 << 14 | 0) | 0;
   HEAP8[($0_1 + 21 | 0) >> 0] = $3_1;
   HEAP8[($0_1 + 22 | 0) >> 0] = $3_1 >>> 8 | 0;
   label : while (1) {
    $1_1 = HEAPU8[$0_1 >> 0] | 0;
    if ($1_1 & 4 | 0) {
     break block
    }
    HEAP8[$0_1 >> 0] = $1_1 | 4 | 0;
    $1_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
    if ($1_1) {
     FUNCTION_TABLE[$1_1 | 0]($0_1)
    }
    HEAP32[($0_1 + 156 | 0) >> 2] = 2143289344;
    $0_1 = HEAP32[($0_1 + 484 | 0) >> 2] | 0;
    if ($0_1) {
     continue label
    }
    break label;
   };
  }
 }
 
 function $267($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  block : {
   $0_1 = HEAP32[$0_1 >> 2] | 0;
   $2_1 = HEAPU8[($0_1 + 20 | 0) >> 0] | 0;
   if (($2_1 & 3 | 0 | 0) == ($1_1 & 255 | 0 | 0)) {
    break block
   }
   HEAP8[($0_1 + 20 | 0) >> 0] = $2_1 & 252 | 0 | ($1_1 & 3 | 0) | 0;
   label : while (1) {
    $1_1 = HEAPU8[$0_1 >> 0] | 0;
    if ($1_1 & 4 | 0) {
     break block
    }
    HEAP8[$0_1 >> 0] = $1_1 | 4 | 0;
    $1_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
    if ($1_1) {
     FUNCTION_TABLE[$1_1 | 0]($0_1)
    }
    HEAP32[($0_1 + 156 | 0) >> 2] = 2143289344;
    $0_1 = HEAP32[($0_1 + 484 | 0) >> 2] | 0;
    if ($0_1) {
     continue label
    }
    break label;
   };
  }
 }
 
 function $268($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  block : {
   $0_1 = HEAP32[$0_1 >> 2] | 0;
   $2_1 = HEAPU8[($0_1 + 20 | 0) >> 0] | 0;
   if ((($2_1 >>> 2 | 0) & 3 | 0 | 0) == ($1_1 & 255 | 0 | 0)) {
    break block
   }
   HEAP8[($0_1 + 20 | 0) >> 0] = $2_1 & 243 | 0 | (($1_1 << 2 | 0) & 12 | 0) | 0;
   label : while (1) {
    $1_1 = HEAPU8[$0_1 >> 0] | 0;
    if ($1_1 & 4 | 0) {
     break block
    }
    HEAP8[$0_1 >> 0] = $1_1 | 4 | 0;
    $1_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
    if ($1_1) {
     FUNCTION_TABLE[$1_1 | 0]($0_1)
    }
    HEAP32[($0_1 + 156 | 0) >> 2] = 2143289344;
    $0_1 = HEAP32[($0_1 + 484 | 0) >> 2] | 0;
    if ($0_1) {
     continue label
    }
    break label;
   };
  }
 }
 
 function $269($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0;
  block : {
   $0_1 = HEAP32[$0_1 >> 2] | 0;
   $2_1 = HEAPU8[($0_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($0_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0;
   if ((($2_1 >>> 8 | 0) & 15 | 0 | 0) == ($1_1 & 255 | 0 | 0)) {
    break block
   }
   $2_1 = $2_1 | ((HEAPU8[($0_1 + 23 | 0) >> 0] | 0) << 16 | 0) | 0;
   HEAP8[($0_1 + 23 | 0) >> 0] = $2_1 >>> 16 | 0;
   $3_1 = $2_1 & 61695 | 0 | (($1_1 & 15 | 0) << 8 | 0) | 0;
   HEAP8[($0_1 + 21 | 0) >> 0] = $3_1;
   HEAP8[($0_1 + 22 | 0) >> 0] = $3_1 >>> 8 | 0;
   label : while (1) {
    $1_1 = HEAPU8[$0_1 >> 0] | 0;
    if ($1_1 & 4 | 0) {
     break block
    }
    HEAP8[$0_1 >> 0] = $1_1 | 4 | 0;
    $1_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
    if ($1_1) {
     FUNCTION_TABLE[$1_1 | 0]($0_1)
    }
    HEAP32[($0_1 + 156 | 0) >> 2] = 2143289344;
    $0_1 = HEAP32[($0_1 + 484 | 0) >> 2] | 0;
    if ($0_1) {
     continue label
    }
    break label;
   };
  }
 }
 
 function $270($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0;
  block : {
   $0_1 = HEAP32[$0_1 >> 2] | 0;
   $2_1 = HEAPU8[($0_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($0_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($0_1 + 23 | 0) >> 0] | 0) << 16 | 0) | 0;
   if (($1_1 & 255 | 0 | 0) == (($2_1 & 240 | 0) >>> 4 | 0 | 0)) {
    break block
   }
   HEAP8[($0_1 + 23 | 0) >> 0] = $2_1 >>> 16 | 0;
   $3_1 = $2_1 & 65295 | 0 | (($1_1 << 4 | 0) & 240 | 0) | 0;
   HEAP8[($0_1 + 21 | 0) >> 0] = $3_1;
   HEAP8[($0_1 + 22 | 0) >> 0] = $3_1 >>> 8 | 0;
   label : while (1) {
    $1_1 = HEAPU8[$0_1 >> 0] | 0;
    if ($1_1 & 4 | 0) {
     break block
    }
    HEAP8[$0_1 >> 0] = $1_1 | 4 | 0;
    $1_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
    if ($1_1) {
     FUNCTION_TABLE[$1_1 | 0]($0_1)
    }
    HEAP32[($0_1 + 156 | 0) >> 2] = 2143289344;
    $0_1 = HEAP32[($0_1 + 484 | 0) >> 2] | 0;
    if ($0_1) {
     continue label
    }
    break label;
   };
  }
 }
 
 function $271($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0;
  block : {
   $0_1 = HEAP32[$0_1 >> 2] | 0;
   $2_1 = HEAPU8[($0_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($0_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($0_1 + 23 | 0) >> 0] | 0) << 16 | 0) | 0;
   if (($2_1 & 15 | 0 | 0) == ($1_1 & 255 | 0 | 0)) {
    break block
   }
   HEAP8[($0_1 + 23 | 0) >> 0] = $2_1 >>> 16 | 0;
   $3_1 = $2_1 & 65520 | 0 | ($1_1 & 15 | 0) | 0;
   HEAP8[($0_1 + 21 | 0) >> 0] = $3_1;
   HEAP8[($0_1 + 22 | 0) >> 0] = $3_1 >>> 8 | 0;
   label : while (1) {
    $1_1 = HEAPU8[$0_1 >> 0] | 0;
    if ($1_1 & 4 | 0) {
     break block
    }
    HEAP8[$0_1 >> 0] = $1_1 | 4 | 0;
    $1_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
    if ($1_1) {
     FUNCTION_TABLE[$1_1 | 0]($0_1)
    }
    HEAP32[($0_1 + 156 | 0) >> 2] = 2143289344;
    $0_1 = HEAP32[($0_1 + 484 | 0) >> 2] | 0;
    if ($0_1) {
     continue label
    }
    break label;
   };
  }
 }
 
 function $272($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, i64toi32_i32$1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  HEAP8[($2_1 + 12 | 0) >> 0] = 3;
  HEAP32[($2_1 + 8 | 0) >> 2] = 2143289344;
  i64toi32_i32$1 = HEAP32[($2_1 + 12 | 0) >> 2] | 0;
  HEAP32[$2_1 >> 2] = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
  HEAP32[($2_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  $73($0_1 | 0, $1_1 & 255 | 0 | 0, $2_1 | 0);
  global$0 = $2_1 + 16 | 0;
 }
 
 function $273($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = +$2_1;
  var $3_1 = 0, $6_1 = Math_fround(0), $17_1 = Math_fround(0), $5_1 = 0, $4_1 = 0, i64toi32_i32$1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  $4_1 = HEAP32[$0_1 >> 2] | 0;
  block : {
   $6_1 = Math_fround($2_1);
   if ($6_1 != $6_1) {
    $0_1 = 0;
    $17_1 = Math_fround(NaN);
    break block;
   }
   $5_1 = $6_1 == Math_fround(Infinity) | $6_1 == Math_fround(-Infinity) | 0;
   $0_1 = $5_1 ? 0 : 2;
   $17_1 = $5_1 ? Math_fround(NaN) : $6_1;
  }
  $6_1 = $17_1;
  HEAP8[($3_1 + 12 | 0) >> 0] = $0_1;
  HEAPF32[($3_1 + 8 | 0) >> 2] = $6_1;
  i64toi32_i32$1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  HEAP32[$3_1 >> 2] = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
  HEAP32[($3_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  $73($4_1 | 0, $1_1 & 255 | 0 | 0, $3_1 | 0);
  global$0 = $3_1 + 16 | 0;
 }
 
 function $274($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = +$2_1;
  var $4_1 = 0, $3_1 = Math_fround(0), $17_1 = 0, $5_1 = 0, $11_1 = 0, i64toi32_i32$1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  $5_1 = HEAP32[$0_1 >> 2] | 0;
  $11_1 = $4_1;
  block : {
   $3_1 = Math_fround($2_1);
   if ($3_1 != $3_1) {
    $3_1 = Math_fround(NaN);
    $17_1 = 0;
    break block;
   }
   $0_1 = $3_1 == Math_fround(Infinity) | $3_1 == Math_fround(-Infinity) | 0;
   $3_1 = $0_1 ? Math_fround(NaN) : $3_1;
   $17_1 = !$0_1;
  }
  HEAP8[($11_1 + 12 | 0) >> 0] = $17_1;
  HEAPF32[($4_1 + 8 | 0) >> 2] = $3_1;
  i64toi32_i32$1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  HEAP32[$4_1 >> 2] = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
  HEAP32[($4_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  $73($5_1 | 0, $1_1 & 255 | 0 | 0, $4_1 | 0);
  global$0 = $4_1 + 16 | 0;
 }
 
 function $275($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0;
  block : {
   $0_1 = HEAP32[$0_1 >> 2] | 0;
   $2_1 = HEAPU8[($0_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($0_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0;
   if ((($2_1 >>> 12 | 0) & 3 | 0 | 0) == ($1_1 & 255 | 0 | 0)) {
    break block
   }
   $2_1 = $2_1 | ((HEAPU8[($0_1 + 23 | 0) >> 0] | 0) << 16 | 0) | 0;
   HEAP8[($0_1 + 23 | 0) >> 0] = $2_1 >>> 16 | 0;
   $3_1 = $2_1 & 53247 | 0 | (($1_1 & 3 | 0) << 12 | 0) | 0;
   HEAP8[($0_1 + 21 | 0) >> 0] = $3_1;
   HEAP8[($0_1 + 22 | 0) >> 0] = $3_1 >>> 8 | 0;
   label : while (1) {
    $1_1 = HEAPU8[$0_1 >> 0] | 0;
    if ($1_1 & 4 | 0) {
     break block
    }
    HEAP8[$0_1 >> 0] = $1_1 | 4 | 0;
    $1_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
    if ($1_1) {
     FUNCTION_TABLE[$1_1 | 0]($0_1)
    }
    HEAP32[($0_1 + 156 | 0) >> 2] = 2143289344;
    $0_1 = HEAP32[($0_1 + 484 | 0) >> 2] | 0;
    if ($0_1) {
     continue label
    }
    break label;
   };
  }
 }
 
 function $276($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  block : {
   $0_1 = HEAP32[$0_1 >> 2] | 0;
   $2_1 = HEAPU8[($0_1 + 23 | 0) >> 0] | 0;
   if ((($2_1 >>> 4 | 0) & 1 | 0 | 0) == ($1_1 & 255 | 0 | 0)) {
    break block
   }
   $2_1 = HEAPU8[($0_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($0_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0 | ($2_1 << 16 | 0) | 0;
   HEAP8[($0_1 + 21 | 0) >> 0] = $2_1;
   HEAP8[($0_1 + 22 | 0) >> 0] = $2_1 >>> 8 | 0;
   HEAP8[($0_1 + 23 | 0) >> 0] = ($2_1 & 15728639 | 0 | (($1_1 & 1 | 0) << 20 | 0) | 0) >>> 16 | 0;
   label : while (1) {
    $1_1 = HEAPU8[$0_1 >> 0] | 0;
    if ($1_1 & 4 | 0) {
     break block
    }
    HEAP8[$0_1 >> 0] = $1_1 | 4 | 0;
    $1_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
    if ($1_1) {
     FUNCTION_TABLE[$1_1 | 0]($0_1)
    }
    HEAP32[($0_1 + 156 | 0) >> 2] = 2143289344;
    $0_1 = HEAP32[($0_1 + 484 | 0) >> 2] | 0;
    if ($0_1) {
     continue label
    }
    break label;
   };
  }
 }
 
 function $277($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $10_1 = Math_fround(0), $11_1 = Math_fround(0), $3_1 = 0, $4_1 = 0, $5_1 = 0, $6_1 = 0, $7_1 = 0, $8_1 = 0, $9_1 = 0, $154_1 = 0, $21_1 = 0, $202_1 = 0, $22_1 = 0, $256_1 = 0, $23_1 = 0, $310 = 0, $24_1 = 0, $364 = 0, $25_1 = 0, $418 = 0, $26_1 = 0, $472 = 0, $27_1 = 0, $525 = 0, $28_1 = 0, $578 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  block13 : {
   block : {
    $5_1 = HEAP32[$1_1 >> 2] | 0;
    $1_1 = HEAP32[$0_1 >> 2] | 0;
    if (((HEAPU8[($5_1 + 20 | 0) >> 0] | 0) ^ (HEAPU8[($1_1 + 20 | 0) >> 0] | 0) | 0) & 127 | 0) {
     break block
    }
    if (((HEAPU8[($5_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($5_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($5_1 + 23 | 0) >> 0] | 0) << 16 | 0) | 0) ^ (HEAPU8[($1_1 + 21 | 0) >> 0] | 0 | ((HEAPU8[($1_1 + 22 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($1_1 + 23 | 0) >> 0] | 0) << 16 | 0) | 0) | 0) & 1048575 | 0) {
     break block
    }
    $7_1 = $5_1 + 124 | 0;
    $8_1 = $1_1 + 124 | 0;
    block1 : {
     $0_1 = HEAPU8[($1_1 + 24 | 0) >> 0] | 0 | ((HEAPU8[($1_1 + 25 | 0) >> 0] | 0) << 8 | 0) | 0;
     if (!($0_1 & 7 | 0)) {
      if (!((HEAPU8[($5_1 + 24 | 0) >> 0] | 0) & 7 | 0)) {
       break block1
      }
     }
     $10_1 = Math_fround($2($8_1 | 0, $0_1 | 0));
     $11_1 = Math_fround($2($7_1 | 0, HEAPU8[($5_1 + 24 | 0) >> 0] | 0 | ((HEAPU8[($5_1 + 25 | 0) >> 0] | 0) << 8 | 0) | 0 | 0));
     if ($10_1 == $11_1) {
      break block1
     }
     if ($10_1 == $10_1 | $11_1 == $11_1 | 0) {
      break block
     }
    }
    block2 : {
     $0_1 = HEAPU8[($1_1 + 26 | 0) >> 0] | 0 | ((HEAPU8[($1_1 + 27 | 0) >> 0] | 0) << 8 | 0) | 0;
     if (!($0_1 & 7 | 0)) {
      if (!((HEAPU8[($5_1 + 26 | 0) >> 0] | 0) & 7 | 0)) {
       break block2
      }
     }
     $10_1 = Math_fround($2($8_1 | 0, $0_1 | 0));
     $11_1 = Math_fround($2($7_1 | 0, HEAPU8[($5_1 + 26 | 0) >> 0] | 0 | ((HEAPU8[($5_1 + 27 | 0) >> 0] | 0) << 8 | 0) | 0 | 0));
     if ($10_1 == $11_1) {
      break block2
     }
     if ($10_1 == $10_1 | $11_1 == $11_1 | 0) {
      break block
     }
    }
    block3 : {
     $0_1 = HEAPU8[($1_1 + 28 | 0) >> 0] | 0 | ((HEAPU8[($1_1 + 29 | 0) >> 0] | 0) << 8 | 0) | 0;
     if (!($0_1 & 7 | 0)) {
      if (!((HEAPU8[($5_1 + 28 | 0) >> 0] | 0) & 7 | 0)) {
       break block3
      }
     }
     $10_1 = Math_fround($2($8_1 | 0, $0_1 | 0));
     $11_1 = Math_fround($2($7_1 | 0, HEAPU8[($5_1 + 28 | 0) >> 0] | 0 | ((HEAPU8[($5_1 + 29 | 0) >> 0] | 0) << 8 | 0) | 0 | 0));
     if ($10_1 == $11_1) {
      break block3
     }
     if ($10_1 == $10_1 | $11_1 == $11_1 | 0) {
      break block
     }
    }
    block4 : {
     $0_1 = HEAPU8[($1_1 + 30 | 0) >> 0] | 0 | ((HEAPU8[($1_1 + 31 | 0) >> 0] | 0) << 8 | 0) | 0;
     if (!($0_1 & 7 | 0)) {
      if (!((HEAPU8[($5_1 + 30 | 0) >> 0] | 0) & 7 | 0)) {
       break block4
      }
     }
     $1($2_1 + 8 | 0 | 0, $8_1 | 0, $0_1 | 0);
     $1($2_1 | 0, $7_1 | 0, HEAPU8[($5_1 + 30 | 0) >> 0] | 0 | ((HEAPU8[($5_1 + 31 | 0) >> 0] | 0) << 8 | 0) | 0 | 0);
     $0_1 = 1;
     $10_1 = Math_fround(HEAPF32[($2_1 + 8 | 0) >> 2]);
     $11_1 = Math_fround(HEAPF32[$2_1 >> 2]);
     if ($10_1 != $11_1) {
      if ($10_1 == $10_1) {
       break block
      }
      $154_1 = $11_1 != $11_1;
     } else {
      $154_1 = $0_1
     }
     if (!$154_1) {
      break block
     }
     if ((HEAPU8[($2_1 + 12 | 0) >> 0] | 0 | 0) != (HEAPU8[($2_1 + 4 | 0) >> 0] | 0 | 0)) {
      break block
     }
    }
    $0_1 = $5_1 + 32 | 0;
    $6_1 = $1_1 + 32 | 0;
    label : while (1) {
     block5 : {
      $21_1 = $6_1 + ($3_1 << 1 | 0) | 0;
      $4_1 = HEAPU8[$21_1 >> 0] | 0 | ((HEAPU8[($21_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0;
      if (!($4_1 & 7 | 0)) {
       if (!((HEAPU8[$0_1 >> 0] | 0) & 7 | 0)) {
        break block5
       }
      }
      $1($2_1 + 8 | 0 | 0, $8_1 | 0, $4_1 | 0);
      $1($2_1 | 0, $7_1 | 0, HEAPU8[$0_1 >> 0] | 0 | ((HEAPU8[($0_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | 0);
      $4_1 = 1;
      $10_1 = Math_fround(HEAPF32[($2_1 + 8 | 0) >> 2]);
      $11_1 = Math_fround(HEAPF32[$2_1 >> 2]);
      if ($10_1 != $11_1) {
       if ($10_1 == $10_1) {
        break block
       }
       $202_1 = $11_1 != $11_1;
      } else {
       $202_1 = $4_1
      }
      if (!$202_1) {
       break block
      }
      if ((HEAPU8[($2_1 + 12 | 0) >> 0] | 0 | 0) != (HEAPU8[($2_1 + 4 | 0) >> 0] | 0 | 0)) {
       break block
      }
     }
     $0_1 = $0_1 + 2 | 0;
     $3_1 = $3_1 + 1 | 0;
     if (($3_1 | 0) != (9 | 0)) {
      continue label
     }
     break label;
    };
    $0_1 = $5_1 + 50 | 0;
    $6_1 = $1_1 + 50 | 0;
    $3_1 = 0;
    label1 : while (1) {
     block6 : {
      $22_1 = $6_1 + ($3_1 << 1 | 0) | 0;
      $4_1 = HEAPU8[$22_1 >> 0] | 0 | ((HEAPU8[($22_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0;
      if (!($4_1 & 7 | 0)) {
       if (!((HEAPU8[$0_1 >> 0] | 0) & 7 | 0)) {
        break block6
       }
      }
      $1($2_1 + 8 | 0 | 0, $8_1 | 0, $4_1 | 0);
      $1($2_1 | 0, $7_1 | 0, HEAPU8[$0_1 >> 0] | 0 | ((HEAPU8[($0_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | 0);
      $4_1 = 1;
      $10_1 = Math_fround(HEAPF32[($2_1 + 8 | 0) >> 2]);
      $11_1 = Math_fround(HEAPF32[$2_1 >> 2]);
      if ($10_1 != $11_1) {
       if ($10_1 == $10_1) {
        break block
       }
       $256_1 = $11_1 != $11_1;
      } else {
       $256_1 = $4_1
      }
      if (!$256_1) {
       break block
      }
      if ((HEAPU8[($2_1 + 12 | 0) >> 0] | 0 | 0) != (HEAPU8[($2_1 + 4 | 0) >> 0] | 0 | 0)) {
       break block
      }
     }
     $0_1 = $0_1 + 2 | 0;
     $3_1 = $3_1 + 1 | 0;
     if (($3_1 | 0) != (9 | 0)) {
      continue label1
     }
     break label1;
    };
    $0_1 = $5_1 + 68 | 0;
    $6_1 = $1_1 + 68 | 0;
    $3_1 = 0;
    label2 : while (1) {
     block7 : {
      $23_1 = $6_1 + ($3_1 << 1 | 0) | 0;
      $4_1 = HEAPU8[$23_1 >> 0] | 0 | ((HEAPU8[($23_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0;
      if (!($4_1 & 7 | 0)) {
       if (!((HEAPU8[$0_1 >> 0] | 0) & 7 | 0)) {
        break block7
       }
      }
      $1($2_1 + 8 | 0 | 0, $8_1 | 0, $4_1 | 0);
      $1($2_1 | 0, $7_1 | 0, HEAPU8[$0_1 >> 0] | 0 | ((HEAPU8[($0_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | 0);
      $4_1 = 1;
      $10_1 = Math_fround(HEAPF32[($2_1 + 8 | 0) >> 2]);
      $11_1 = Math_fround(HEAPF32[$2_1 >> 2]);
      if ($10_1 != $11_1) {
       if ($10_1 == $10_1) {
        break block
       }
       $310 = $11_1 != $11_1;
      } else {
       $310 = $4_1
      }
      if (!$310) {
       break block
      }
      if ((HEAPU8[($2_1 + 12 | 0) >> 0] | 0 | 0) != (HEAPU8[($2_1 + 4 | 0) >> 0] | 0 | 0)) {
       break block
      }
     }
     $0_1 = $0_1 + 2 | 0;
     $3_1 = $3_1 + 1 | 0;
     if (($3_1 | 0) != (9 | 0)) {
      continue label2
     }
     break label2;
    };
    $0_1 = $5_1 + 86 | 0;
    $6_1 = $1_1 + 86 | 0;
    $3_1 = 0;
    label3 : while (1) {
     block8 : {
      $24_1 = $6_1 + ($3_1 << 1 | 0) | 0;
      $4_1 = HEAPU8[$24_1 >> 0] | 0 | ((HEAPU8[($24_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0;
      if (!($4_1 & 7 | 0)) {
       if (!((HEAPU8[$0_1 >> 0] | 0) & 7 | 0)) {
        break block8
       }
      }
      $1($2_1 + 8 | 0 | 0, $8_1 | 0, $4_1 | 0);
      $1($2_1 | 0, $7_1 | 0, HEAPU8[$0_1 >> 0] | 0 | ((HEAPU8[($0_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | 0);
      $4_1 = 1;
      $10_1 = Math_fround(HEAPF32[($2_1 + 8 | 0) >> 2]);
      $11_1 = Math_fround(HEAPF32[$2_1 >> 2]);
      if ($10_1 != $11_1) {
       if ($10_1 == $10_1) {
        break block
       }
       $364 = $11_1 != $11_1;
      } else {
       $364 = $4_1
      }
      if (!$364) {
       break block
      }
      if ((HEAPU8[($2_1 + 12 | 0) >> 0] | 0 | 0) != (HEAPU8[($2_1 + 4 | 0) >> 0] | 0 | 0)) {
       break block
      }
     }
     $0_1 = $0_1 + 2 | 0;
     $3_1 = $3_1 + 1 | 0;
     if (($3_1 | 0) != (9 | 0)) {
      continue label3
     }
     break label3;
    };
    $0_1 = $5_1 + 104 | 0;
    $6_1 = $1_1 + 104 | 0;
    $3_1 = 0;
    label4 : while (1) {
     block9 : {
      $25_1 = $6_1 + ($3_1 << 1 | 0) | 0;
      $4_1 = HEAPU8[$25_1 >> 0] | 0 | ((HEAPU8[($25_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0;
      if (!($4_1 & 7 | 0)) {
       if (!((HEAPU8[$0_1 >> 0] | 0) & 7 | 0)) {
        break block9
       }
      }
      $1($2_1 + 8 | 0 | 0, $8_1 | 0, $4_1 | 0);
      $1($2_1 | 0, $7_1 | 0, HEAPU8[$0_1 >> 0] | 0 | ((HEAPU8[($0_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | 0);
      $4_1 = 1;
      $10_1 = Math_fround(HEAPF32[($2_1 + 8 | 0) >> 2]);
      $11_1 = Math_fround(HEAPF32[$2_1 >> 2]);
      if ($10_1 != $11_1) {
       if ($10_1 == $10_1) {
        break block
       }
       $418 = $11_1 != $11_1;
      } else {
       $418 = $4_1
      }
      if (!$418) {
       break block
      }
      if ((HEAPU8[($2_1 + 12 | 0) >> 0] | 0 | 0) != (HEAPU8[($2_1 + 4 | 0) >> 0] | 0 | 0)) {
       break block
      }
     }
     $0_1 = $0_1 + 2 | 0;
     $3_1 = $3_1 + 1 | 0;
     if (($3_1 | 0) != (3 | 0)) {
      continue label4
     }
     break label4;
    };
    $0_1 = $5_1 + 110 | 0;
    $9_1 = $1_1 + 110 | 0;
    $4_1 = 0;
    $3_1 = 0;
    label5 : while (1) {
     block10 : {
      $26_1 = $9_1 + ($3_1 << 1 | 0) | 0;
      $6_1 = HEAPU8[$26_1 >> 0] | 0 | ((HEAPU8[($26_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0;
      if (!($6_1 & 7 | 0)) {
       if (!((HEAPU8[$0_1 >> 0] | 0) & 7 | 0)) {
        break block10
       }
      }
      $1($2_1 + 8 | 0 | 0, $8_1 | 0, $6_1 | 0);
      $1($2_1 | 0, $7_1 | 0, HEAPU8[$0_1 >> 0] | 0 | ((HEAPU8[($0_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | 0);
      $3_1 = 1;
      $10_1 = Math_fround(HEAPF32[($2_1 + 8 | 0) >> 2]);
      $11_1 = Math_fround(HEAPF32[$2_1 >> 2]);
      if ($10_1 != $11_1) {
       if ($10_1 == $10_1) {
        break block
       }
       $472 = $11_1 != $11_1;
      } else {
       $472 = $3_1
      }
      if (!$472) {
       break block
      }
      if ((HEAPU8[($2_1 + 12 | 0) >> 0] | 0 | 0) != (HEAPU8[($2_1 + 4 | 0) >> 0] | 0 | 0)) {
       break block
      }
     }
     $0_1 = $0_1 + 2 | 0;
     $3_1 = 1;
     $6_1 = $4_1;
     $4_1 = 1;
     if (!$6_1) {
      continue label5
     }
     break label5;
    };
    $0_1 = $5_1 + 114 | 0;
    $9_1 = $1_1 + 114 | 0;
    $4_1 = 0;
    $3_1 = 0;
    label6 : while (1) {
     block11 : {
      $27_1 = $9_1 + ($3_1 << 1 | 0) | 0;
      $6_1 = HEAPU8[$27_1 >> 0] | 0 | ((HEAPU8[($27_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0;
      if (!($6_1 & 7 | 0)) {
       if (!((HEAPU8[$0_1 >> 0] | 0) & 7 | 0)) {
        break block11
       }
      }
      $1($2_1 + 8 | 0 | 0, $8_1 | 0, $6_1 | 0);
      $1($2_1 | 0, $7_1 | 0, HEAPU8[$0_1 >> 0] | 0 | ((HEAPU8[($0_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | 0);
      $3_1 = 1;
      $10_1 = Math_fround(HEAPF32[($2_1 + 8 | 0) >> 2]);
      $11_1 = Math_fround(HEAPF32[$2_1 >> 2]);
      if ($10_1 != $11_1) {
       if ($10_1 == $10_1) {
        break block
       }
       $525 = $11_1 != $11_1;
      } else {
       $525 = $3_1
      }
      if (!$525) {
       break block
      }
      if ((HEAPU8[($2_1 + 12 | 0) >> 0] | 0 | 0) != (HEAPU8[($2_1 + 4 | 0) >> 0] | 0 | 0)) {
       break block
      }
     }
     $0_1 = $0_1 + 2 | 0;
     $3_1 = 1;
     $6_1 = $4_1;
     $4_1 = 1;
     if (!$6_1) {
      continue label6
     }
     break label6;
    };
    $0_1 = $5_1 + 118 | 0;
    $9_1 = $1_1 + 118 | 0;
    $4_1 = 0;
    $3_1 = 0;
    label7 : while (1) {
     block12 : {
      $28_1 = $9_1 + ($3_1 << 1 | 0) | 0;
      $6_1 = HEAPU8[$28_1 >> 0] | 0 | ((HEAPU8[($28_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0;
      if (!($6_1 & 7 | 0)) {
       if (!((HEAPU8[$0_1 >> 0] | 0) & 7 | 0)) {
        break block12
       }
      }
      $1($2_1 + 8 | 0 | 0, $8_1 | 0, $6_1 | 0);
      $1($2_1 | 0, $7_1 | 0, HEAPU8[$0_1 >> 0] | 0 | ((HEAPU8[($0_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | 0);
      $3_1 = 1;
      $10_1 = Math_fround(HEAPF32[($2_1 + 8 | 0) >> 2]);
      $11_1 = Math_fround(HEAPF32[$2_1 >> 2]);
      if ($10_1 != $11_1) {
       if ($10_1 == $10_1) {
        break block
       }
       $578 = $11_1 != $11_1;
      } else {
       $578 = $3_1
      }
      if (!$578) {
       break block
      }
      if ((HEAPU8[($2_1 + 12 | 0) >> 0] | 0 | 0) != (HEAPU8[($2_1 + 4 | 0) >> 0] | 0 | 0)) {
       break block
      }
     }
     $0_1 = $0_1 + 2 | 0;
     $3_1 = 1;
     $6_1 = $4_1;
     $4_1 = 1;
     if (!$6_1) {
      continue label7
     }
     break label7;
    };
    $0_1 = HEAPU8[($1_1 + 122 | 0) >> 0] | 0 | ((HEAPU8[($1_1 + 123 | 0) >> 0] | 0) << 8 | 0) | 0;
    if (!($0_1 & 7 | 0)) {
     if (!((HEAPU8[($5_1 + 122 | 0) >> 0] | 0) & 7 | 0)) {
      break block13
     }
    }
    $10_1 = Math_fround($2($8_1 | 0, $0_1 | 0));
    $11_1 = Math_fround($2($7_1 | 0, HEAPU8[($5_1 + 122 | 0) >> 0] | 0 | ((HEAPU8[($5_1 + 123 | 0) >> 0] | 0) << 8 | 0) | 0 | 0));
    if ($10_1 == $11_1) {
     break block13
    }
    if ($10_1 == $10_1) {
     break block
    }
    if ($11_1 != $11_1) {
     break block13
    }
   }
   $13($1_1 + 20 | 0 | 0, $5_1 + 20 | 0 | 0, 104 | 0) | 0;
   $130($1_1 + 124 | 0 | 0, $5_1 + 124 | 0 | 0);
   label8 : while (1) {
    $0_1 = HEAPU8[$1_1 >> 0] | 0;
    if ($0_1 & 4 | 0) {
     break block13
    }
    HEAP8[$1_1 >> 0] = $0_1 | 4 | 0;
    $0_1 = HEAP32[($1_1 + 16 | 0) >> 2] | 0;
    if ($0_1) {
     FUNCTION_TABLE[$0_1 | 0]($1_1)
    }
    HEAP32[($1_1 + 156 | 0) >> 2] = 2143289344;
    $1_1 = HEAP32[($1_1 + 484 | 0) >> 2] | 0;
    if ($1_1) {
     continue label8
    }
    break label8;
   };
  }
  global$0 = $2_1 + 16 | 0;
 }
 
 function $278($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $2_1 = 0, $3_1 = 0, $40_1 = 0, $46_1 = 0, $54_1 = 0, $57_1 = 0, $60_1 = 0, $4_1 = 0, $94_1 = 0, $97_1 = 0;
  $2_1 = global$0 - 544 | 0;
  global$0 = $2_1;
  $1_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  if ($1_1) {
   FUNCTION_TABLE[HEAP32[((HEAP32[$1_1 >> 2] | 0) + 4 | 0) >> 2] | 0 | 0]($1_1)
  }
  $1_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
  HEAP32[($0_1 + 8 | 0) >> 2] = 0;
  if ($1_1) {
   FUNCTION_TABLE[HEAP32[((HEAP32[$1_1 >> 2] | 0) + 4 | 0) >> 2] | 0 | 0]($1_1)
  }
  block : {
   $0_1 = HEAP32[$0_1 >> 2] | 0;
   if ((HEAP32[($0_1 + 488 | 0) >> 2] | 0 | 0) == (HEAP32[($0_1 + 492 | 0) >> 2] | 0 | 0)) {
    if (HEAP32[($0_1 + 484 | 0) >> 2] | 0) {
     break block
    }
    $1_1 = $62($2_1 + 24 | 0 | 0, HEAP32[($0_1 + 500 | 0) >> 2] | 0 | 0) | 0;
    i64toi32_i32$0 = HEAP32[$1_1 >> 2] | 0;
    i64toi32_i32$1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
    $40_1 = i64toi32_i32$0;
    i64toi32_i32$0 = $0_1;
    HEAP32[$0_1 >> 2] = $40_1;
    HEAP32[($0_1 + 4 | 0) >> 2] = i64toi32_i32$1;
    HEAP32[($0_1 + 16 | 0) >> 2] = HEAP32[($1_1 + 16 | 0) >> 2] | 0;
    i64toi32_i32$1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
    i64toi32_i32$0 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
    $46_1 = i64toi32_i32$1;
    i64toi32_i32$1 = $0_1;
    HEAP32[($0_1 + 8 | 0) >> 2] = $46_1;
    HEAP32[($0_1 + 12 | 0) >> 2] = i64toi32_i32$0;
    $13($0_1 + 20 | 0 | 0, $1_1 + 20 | 0 | 0, 104 | 0) | 0;
    i64toi32_i32$0 = HEAP32[($1_1 + 140 | 0) >> 2] | 0;
    i64toi32_i32$1 = HEAP32[($1_1 + 144 | 0) >> 2] | 0;
    $54_1 = i64toi32_i32$0;
    i64toi32_i32$0 = $0_1;
    HEAP32[($0_1 + 140 | 0) >> 2] = $54_1;
    HEAP32[($0_1 + 144 | 0) >> 2] = i64toi32_i32$1;
    i64toi32_i32$1 = HEAP32[($1_1 + 132 | 0) >> 2] | 0;
    i64toi32_i32$0 = HEAP32[($1_1 + 136 | 0) >> 2] | 0;
    $57_1 = i64toi32_i32$1;
    i64toi32_i32$1 = $0_1;
    HEAP32[($0_1 + 132 | 0) >> 2] = $57_1;
    HEAP32[($0_1 + 136 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$0 = HEAP32[($1_1 + 124 | 0) >> 2] | 0;
    i64toi32_i32$1 = HEAP32[($1_1 + 128 | 0) >> 2] | 0;
    $60_1 = i64toi32_i32$0;
    i64toi32_i32$0 = $0_1;
    HEAP32[($0_1 + 124 | 0) >> 2] = $60_1;
    HEAP32[($0_1 + 128 | 0) >> 2] = i64toi32_i32$1;
    $4_1 = HEAP32[($1_1 + 148 | 0) >> 2] | 0;
    HEAP32[($1_1 + 148 | 0) >> 2] = 0;
    $3_1 = HEAP32[($0_1 + 148 | 0) >> 2] | 0;
    HEAP32[($0_1 + 148 | 0) >> 2] = $4_1;
    if ($3_1) {
     $61($3_1 | 0)
    }
    $13($0_1 + 152 | 0 | 0, $1_1 + 152 | 0 | 0, 336 | 0) | 0;
    $3_1 = HEAP32[($0_1 + 488 | 0) >> 2] | 0;
    if ($3_1) {
     HEAP32[($0_1 + 492 | 0) >> 2] = $3_1;
     $5($3_1 | 0);
    }
    HEAP32[($0_1 + 488 | 0) >> 2] = HEAP32[($1_1 + 488 | 0) >> 2] | 0;
    HEAP32[($0_1 + 492 | 0) >> 2] = HEAP32[($1_1 + 492 | 0) >> 2] | 0;
    HEAP32[($0_1 + 496 | 0) >> 2] = HEAP32[($1_1 + 496 | 0) >> 2] | 0;
    HEAP32[($1_1 + 496 | 0) >> 2] = 0;
    i64toi32_i32$0 = $1_1;
    i64toi32_i32$1 = 0;
    HEAP32[($1_1 + 488 | 0) >> 2] = 0;
    HEAP32[($1_1 + 492 | 0) >> 2] = i64toi32_i32$1;
    i64toi32_i32$1 = HEAP32[($1_1 + 508 | 0) >> 2] | 0;
    i64toi32_i32$0 = HEAP32[($1_1 + 512 | 0) >> 2] | 0;
    $94_1 = i64toi32_i32$1;
    i64toi32_i32$1 = $0_1;
    HEAP32[($0_1 + 508 | 0) >> 2] = $94_1;
    HEAP32[($0_1 + 512 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$0 = HEAP32[($1_1 + 500 | 0) >> 2] | 0;
    i64toi32_i32$1 = HEAP32[($1_1 + 504 | 0) >> 2] | 0;
    $97_1 = i64toi32_i32$0;
    i64toi32_i32$0 = $0_1;
    HEAP32[($0_1 + 500 | 0) >> 2] = $97_1;
    HEAP32[($0_1 + 504 | 0) >> 2] = i64toi32_i32$1;
    HEAP32[($0_1 + 516 | 0) >> 2] = HEAP32[($1_1 + 516 | 0) >> 2] | 0;
    $0_1 = HEAP32[($1_1 + 148 | 0) >> 2] | 0;
    HEAP32[($1_1 + 148 | 0) >> 2] = 0;
    if ($0_1) {
     $61($0_1 | 0)
    }
    global$0 = $2_1 + 544 | 0;
    return;
   }
   HEAP32[($2_1 + 16 | 0) >> 2] = 3696;
   $14($0_1 | 0, 5 | 0, 4824 | 0, $2_1 + 16 | 0 | 0);
   $6();
   wasm2js_trap();
  }
  HEAP32[$2_1 >> 2] = 2278;
  $14($0_1 | 0, 5 | 0, 4824 | 0, $2_1 | 0);
  $6();
  wasm2js_trap();
 }
 
 function $279($0_1) {
  $0_1 = $0_1 | 0;
  return $132($0(12 | 0) | 0 | 0, $0_1 | 0) | 0 | 0;
 }
 
 function $280() {
  return $132($0(12 | 0) | 0 | 0, 0 | 0) | 0 | 0;
 }
 
 function $281($0_1) {
  $0_1 = $0_1 | 0;
  return (HEAPU8[((HEAP32[$0_1 >> 2] | 0) + 8 | 0) >> 0] | 0) & 1 | 0 | 0;
 }
 
 function $282($0_1) {
  $0_1 = $0_1 | 0;
  return HEAP32[((HEAP32[$0_1 >> 2] | 0) + 20 | 0) >> 2] | 0 | 0;
 }
 
 function $283($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  if ($1_1 & 255 | 0) {
   fimport$2();
   wasm2js_trap();
  }
  return (HEAP32[((HEAP32[$0_1 >> 2] | 0) + 16 | 0) >> 2] | 0) & 1 | 0 | 0;
 }
 
 function $284($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  HEAP8[($0_1 + 8 | 0) >> 0] = (HEAPU8[($0_1 + 8 | 0) >> 0] | 0) & 254 | 0 | $1_1 | 0;
 }
 
 function $285($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  if (($1_1 | 0) != (HEAP32[($0_1 + 20 | 0) >> 2] | 0 | 0)) {
   HEAP32[($0_1 + 20 | 0) >> 2] = $1_1;
   HEAP32[($0_1 + 12 | 0) >> 2] = (HEAP32[($0_1 + 12 | 0) >> 2] | 0) + 1 | 0;
  }
 }
 
 function $286($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = Math_fround($1_1);
  var $2_1 = 0, $3_1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  $0_1 = HEAP32[$0_1 >> 2] | 0;
  if ($1_1 >= Math_fround(0.0)) {
   if ($1_1 != Math_fround(HEAPF32[($0_1 + 24 | 0) >> 2])) {
    HEAPF32[($0_1 + 24 | 0) >> 2] = $1_1;
    HEAP32[($0_1 + 12 | 0) >> 2] = (HEAP32[($0_1 + 12 | 0) >> 2] | 0) + 1 | 0;
   }
   global$0 = $2_1 + 16 | 0;
   return;
  }
  HEAP32[$2_1 >> 2] = 2568;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $2_1;
  block : {
   if (!$0_1) {
    $43(6200 | 0, 4824 | 0, $2_1 | 0) | 0;
    break block;
   }
   FUNCTION_TABLE[HEAP32[($0_1 + 4 | 0) >> 2] | 0 | 0]($0_1, 0, 5, 4824, $2_1) | 0;
  }
  global$0 = $3_1 + 16 | 0;
  $6();
  wasm2js_trap();
 }
 
 function $287($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  if (!($1_1 & 255 | 0)) {
   $0_1 = HEAP32[$0_1 >> 2] | 0;
   $1_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
   if (($2_1 | 0) != ($1_1 & 1 | 0 | 0)) {
    HEAP32[($0_1 + 16 | 0) >> 2] = $1_1 & -2 | 0 | $2_1 | 0;
    HEAP32[($0_1 + 12 | 0) >> 2] = (HEAP32[($0_1 + 12 | 0) >> 2] | 0) + 1 | 0;
   }
   return;
  }
  fimport$2();
  wasm2js_trap();
 }
 
 function _ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, var$2 = 0, i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, var$3 = 0, var$4 = 0, var$5 = 0, $21_1 = 0, $22_1 = 0, var$6 = 0, $24_1 = 0, $17_1 = 0, $18_1 = 0, $23_1 = 0, $29_1 = 0, $45_1 = 0, $56$hi = 0, $62$hi = 0;
  i64toi32_i32$0 = var$1$hi;
  var$2 = var$1;
  var$4 = var$2 >>> 16 | 0;
  i64toi32_i32$0 = var$0$hi;
  var$3 = var$0;
  var$5 = var$3 >>> 16 | 0;
  $17_1 = Math_imul(var$4, var$5);
  $18_1 = var$2;
  i64toi32_i32$2 = var$3;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = 0;
   $21_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $21_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
  }
  $23_1 = $17_1 + Math_imul($18_1, $21_1) | 0;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$0 = var$1;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = 0;
   $22_1 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   $22_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
  }
  $29_1 = $23_1 + Math_imul($22_1, var$3) | 0;
  var$2 = var$2 & 65535 | 0;
  var$3 = var$3 & 65535 | 0;
  var$6 = Math_imul(var$2, var$3);
  var$2 = (var$6 >>> 16 | 0) + Math_imul(var$2, var$5) | 0;
  $45_1 = $29_1 + (var$2 >>> 16 | 0) | 0;
  var$2 = (var$2 & 65535 | 0) + Math_imul(var$4, var$3) | 0;
  i64toi32_i32$2 = 0;
  i64toi32_i32$1 = $45_1 + (var$2 >>> 16 | 0) | 0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$0 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
   $24_1 = 0;
  } else {
   i64toi32_i32$0 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$1 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$2 << i64toi32_i32$4 | 0) | 0;
   $24_1 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
  }
  $56$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  $62$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $56$hi;
  i64toi32_i32$2 = $24_1;
  i64toi32_i32$1 = $62$hi;
  i64toi32_i32$3 = var$2 << 16 | 0 | (var$6 & 65535 | 0) | 0;
  i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
  i64toi32_i32$2 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$2 | 0;
 }
 
 function _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, i64toi32_i32$4 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$5 = 0, var$2 = 0, var$3 = 0, var$4 = 0, var$5 = 0, var$5$hi = 0, var$6 = 0, var$6$hi = 0, i64toi32_i32$6 = 0, $37_1 = 0, $38_1 = 0, $39_1 = 0, $40_1 = 0, $41_1 = 0, $42_1 = 0, $43_1 = 0, $44_1 = 0, var$8$hi = 0, $45_1 = 0, $46_1 = 0, $47_1 = 0, $48_1 = 0, var$7$hi = 0, $49_1 = 0, $63$hi = 0, $65_1 = 0, $65$hi = 0, $120$hi = 0, $129$hi = 0, $134$hi = 0, var$8 = 0, $140_1 = 0, $140$hi = 0, $142$hi = 0, $144_1 = 0, $144$hi = 0, $151_1 = 0, $151$hi = 0, $154$hi = 0, var$7 = 0, $165$hi = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         label$8 : {
          label$9 : {
           label$10 : {
            label$11 : {
             i64toi32_i32$0 = var$0$hi;
             i64toi32_i32$2 = var$0;
             i64toi32_i32$1 = 0;
             i64toi32_i32$3 = 32;
             i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
             if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
              i64toi32_i32$1 = 0;
              $37_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
             } else {
              i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
              $37_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
             }
             var$2 = $37_1;
             if (var$2) {
              i64toi32_i32$1 = var$1$hi;
              var$3 = var$1;
              if (!var$3) {
               break label$11
              }
              i64toi32_i32$0 = var$3;
              i64toi32_i32$2 = 0;
              i64toi32_i32$3 = 32;
              i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
              if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
               i64toi32_i32$2 = 0;
               $38_1 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
              } else {
               i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
               $38_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
              }
              var$4 = $38_1;
              if (!var$4) {
               break label$9
              }
              var$2 = Math_clz32(var$4) - Math_clz32(var$2) | 0;
              if (var$2 >>> 0 <= 31 >>> 0) {
               break label$8
              }
              break label$2;
             }
             i64toi32_i32$2 = var$1$hi;
             i64toi32_i32$1 = var$1;
             i64toi32_i32$0 = 1;
             i64toi32_i32$3 = 0;
             if (i64toi32_i32$2 >>> 0 > i64toi32_i32$0 >>> 0 | ((i64toi32_i32$2 | 0) == (i64toi32_i32$0 | 0) & i64toi32_i32$1 >>> 0 >= i64toi32_i32$3 >>> 0 | 0) | 0) {
              break label$2
             }
             i64toi32_i32$1 = var$0$hi;
             var$2 = var$0;
             i64toi32_i32$1 = i64toi32_i32$2;
             i64toi32_i32$1 = i64toi32_i32$2;
             var$3 = var$1;
             var$2 = (var$2 >>> 0) / (var$3 >>> 0) | 0;
             i64toi32_i32$1 = 0;
             __wasm_intrinsics_temp_i64 = var$0 - Math_imul(var$2, var$3) | 0;
             __wasm_intrinsics_temp_i64$hi = i64toi32_i32$1;
             i64toi32_i32$1 = 0;
             i64toi32_i32$2 = var$2;
             i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
             return i64toi32_i32$2 | 0;
            }
            i64toi32_i32$2 = var$1$hi;
            i64toi32_i32$3 = var$1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$0 = 32;
            i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
            if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
             i64toi32_i32$1 = 0;
             $39_1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
            } else {
             i64toi32_i32$1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
             $39_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$3 >>> i64toi32_i32$4 | 0) | 0;
            }
            var$3 = $39_1;
            i64toi32_i32$1 = var$0$hi;
            if (!var$0) {
             break label$7
            }
            if (!var$3) {
             break label$6
            }
            var$4 = var$3 + -1 | 0;
            if (var$4 & var$3 | 0) {
             break label$6
            }
            i64toi32_i32$1 = 0;
            i64toi32_i32$2 = var$4 & var$2 | 0;
            i64toi32_i32$3 = 0;
            i64toi32_i32$0 = 32;
            i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
            if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
             i64toi32_i32$3 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
             $40_1 = 0;
            } else {
             i64toi32_i32$3 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
             $40_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
            }
            $63$hi = i64toi32_i32$3;
            i64toi32_i32$3 = var$0$hi;
            i64toi32_i32$1 = var$0;
            i64toi32_i32$2 = 0;
            i64toi32_i32$0 = -1;
            i64toi32_i32$2 = i64toi32_i32$3 & i64toi32_i32$2 | 0;
            $65_1 = i64toi32_i32$1 & i64toi32_i32$0 | 0;
            $65$hi = i64toi32_i32$2;
            i64toi32_i32$2 = $63$hi;
            i64toi32_i32$3 = $40_1;
            i64toi32_i32$1 = $65$hi;
            i64toi32_i32$0 = $65_1;
            i64toi32_i32$1 = i64toi32_i32$2 | i64toi32_i32$1 | 0;
            __wasm_intrinsics_temp_i64 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
            __wasm_intrinsics_temp_i64$hi = i64toi32_i32$1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$3 = var$2 >>> ((__wasm_ctz_i32(var$3 | 0) | 0) & 31 | 0) | 0;
            i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
            return i64toi32_i32$3 | 0;
           }
          }
          var$4 = var$3 + -1 | 0;
          if (!(var$4 & var$3 | 0)) {
           break label$5
          }
          var$2 = (Math_clz32(var$3) + 33 | 0) - Math_clz32(var$2) | 0;
          var$3 = 0 - var$2 | 0;
          break label$3;
         }
         var$3 = 63 - var$2 | 0;
         var$2 = var$2 + 1 | 0;
         break label$3;
        }
        var$4 = (var$2 >>> 0) / (var$3 >>> 0) | 0;
        i64toi32_i32$3 = 0;
        i64toi32_i32$2 = var$2 - Math_imul(var$4, var$3) | 0;
        i64toi32_i32$1 = 0;
        i64toi32_i32$0 = 32;
        i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
         i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
         $41_1 = 0;
        } else {
         i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$4 | 0) | 0;
         $41_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
        }
        __wasm_intrinsics_temp_i64 = $41_1;
        __wasm_intrinsics_temp_i64$hi = i64toi32_i32$1;
        i64toi32_i32$1 = 0;
        i64toi32_i32$2 = var$4;
        i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
        return i64toi32_i32$2 | 0;
       }
       var$2 = Math_clz32(var$3) - Math_clz32(var$2) | 0;
       if (var$2 >>> 0 < 31 >>> 0) {
        break label$4
       }
       break label$2;
      }
      i64toi32_i32$2 = var$0$hi;
      i64toi32_i32$2 = 0;
      __wasm_intrinsics_temp_i64 = var$4 & var$0 | 0;
      __wasm_intrinsics_temp_i64$hi = i64toi32_i32$2;
      if ((var$3 | 0) == (1 | 0)) {
       break label$1
      }
      i64toi32_i32$2 = var$0$hi;
      i64toi32_i32$2 = 0;
      $120$hi = i64toi32_i32$2;
      i64toi32_i32$2 = var$0$hi;
      i64toi32_i32$3 = var$0;
      i64toi32_i32$1 = $120$hi;
      i64toi32_i32$0 = __wasm_ctz_i32(var$3 | 0) | 0;
      i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
      if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
       i64toi32_i32$1 = 0;
       $42_1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
      } else {
       i64toi32_i32$1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
       $42_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$3 >>> i64toi32_i32$4 | 0) | 0;
      }
      i64toi32_i32$3 = $42_1;
      i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
      return i64toi32_i32$3 | 0;
     }
     var$3 = 63 - var$2 | 0;
     var$2 = var$2 + 1 | 0;
    }
    i64toi32_i32$3 = var$0$hi;
    i64toi32_i32$3 = 0;
    $129$hi = i64toi32_i32$3;
    i64toi32_i32$3 = var$0$hi;
    i64toi32_i32$2 = var$0;
    i64toi32_i32$1 = $129$hi;
    i64toi32_i32$0 = var$2 & 63 | 0;
    i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$1 = 0;
     $43_1 = i64toi32_i32$3 >>> i64toi32_i32$4 | 0;
    } else {
     i64toi32_i32$1 = i64toi32_i32$3 >>> i64toi32_i32$4 | 0;
     $43_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$3 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
    }
    var$5 = $43_1;
    var$5$hi = i64toi32_i32$1;
    i64toi32_i32$1 = var$0$hi;
    i64toi32_i32$1 = 0;
    $134$hi = i64toi32_i32$1;
    i64toi32_i32$1 = var$0$hi;
    i64toi32_i32$3 = var$0;
    i64toi32_i32$2 = $134$hi;
    i64toi32_i32$0 = var$3 & 63 | 0;
    i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$2 = i64toi32_i32$3 << i64toi32_i32$4 | 0;
     $44_1 = 0;
    } else {
     i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$3 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
     $44_1 = i64toi32_i32$3 << i64toi32_i32$4 | 0;
    }
    var$0 = $44_1;
    var$0$hi = i64toi32_i32$2;
    label$13 : {
     if (var$2) {
      i64toi32_i32$2 = var$1$hi;
      i64toi32_i32$1 = var$1;
      i64toi32_i32$3 = -1;
      i64toi32_i32$0 = -1;
      i64toi32_i32$4 = i64toi32_i32$1 + i64toi32_i32$0 | 0;
      i64toi32_i32$5 = i64toi32_i32$2 + i64toi32_i32$3 | 0;
      if (i64toi32_i32$4 >>> 0 < i64toi32_i32$0 >>> 0) {
       i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
      }
      var$8 = i64toi32_i32$4;
      var$8$hi = i64toi32_i32$5;
      label$15 : while (1) {
       i64toi32_i32$5 = var$5$hi;
       i64toi32_i32$2 = var$5;
       i64toi32_i32$1 = 0;
       i64toi32_i32$0 = 1;
       i64toi32_i32$3 = i64toi32_i32$0 & 31 | 0;
       if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
        i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$3 | 0;
        $45_1 = 0;
       } else {
        i64toi32_i32$1 = ((1 << i64toi32_i32$3 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$3 | 0) | 0) | 0 | (i64toi32_i32$5 << i64toi32_i32$3 | 0) | 0;
        $45_1 = i64toi32_i32$2 << i64toi32_i32$3 | 0;
       }
       $140_1 = $45_1;
       $140$hi = i64toi32_i32$1;
       i64toi32_i32$1 = var$0$hi;
       i64toi32_i32$5 = var$0;
       i64toi32_i32$2 = 0;
       i64toi32_i32$0 = 63;
       i64toi32_i32$3 = i64toi32_i32$0 & 31 | 0;
       if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
        i64toi32_i32$2 = 0;
        $46_1 = i64toi32_i32$1 >>> i64toi32_i32$3 | 0;
       } else {
        i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$3 | 0;
        $46_1 = (((1 << i64toi32_i32$3 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$3 | 0) | 0 | (i64toi32_i32$5 >>> i64toi32_i32$3 | 0) | 0;
       }
       $142$hi = i64toi32_i32$2;
       i64toi32_i32$2 = $140$hi;
       i64toi32_i32$1 = $140_1;
       i64toi32_i32$5 = $142$hi;
       i64toi32_i32$0 = $46_1;
       i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
       var$5 = i64toi32_i32$1 | i64toi32_i32$0 | 0;
       var$5$hi = i64toi32_i32$5;
       $144_1 = var$5;
       $144$hi = i64toi32_i32$5;
       i64toi32_i32$5 = var$8$hi;
       i64toi32_i32$5 = var$5$hi;
       i64toi32_i32$5 = var$8$hi;
       i64toi32_i32$2 = var$8;
       i64toi32_i32$1 = var$5$hi;
       i64toi32_i32$0 = var$5;
       i64toi32_i32$3 = i64toi32_i32$2 - i64toi32_i32$0 | 0;
       i64toi32_i32$6 = i64toi32_i32$2 >>> 0 < i64toi32_i32$0 >>> 0;
       i64toi32_i32$4 = i64toi32_i32$6 + i64toi32_i32$1 | 0;
       i64toi32_i32$4 = i64toi32_i32$5 - i64toi32_i32$4 | 0;
       i64toi32_i32$5 = i64toi32_i32$3;
       i64toi32_i32$2 = 0;
       i64toi32_i32$0 = 63;
       i64toi32_i32$1 = i64toi32_i32$0 & 31 | 0;
       if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
        i64toi32_i32$2 = i64toi32_i32$4 >> 31 | 0;
        $47_1 = i64toi32_i32$4 >> i64toi32_i32$1 | 0;
       } else {
        i64toi32_i32$2 = i64toi32_i32$4 >> i64toi32_i32$1 | 0;
        $47_1 = (((1 << i64toi32_i32$1 | 0) - 1 | 0) & i64toi32_i32$4 | 0) << (32 - i64toi32_i32$1 | 0) | 0 | (i64toi32_i32$5 >>> i64toi32_i32$1 | 0) | 0;
       }
       var$6 = $47_1;
       var$6$hi = i64toi32_i32$2;
       i64toi32_i32$2 = var$1$hi;
       i64toi32_i32$2 = var$6$hi;
       i64toi32_i32$4 = var$6;
       i64toi32_i32$5 = var$1$hi;
       i64toi32_i32$0 = var$1;
       i64toi32_i32$5 = i64toi32_i32$2 & i64toi32_i32$5 | 0;
       $151_1 = i64toi32_i32$4 & i64toi32_i32$0 | 0;
       $151$hi = i64toi32_i32$5;
       i64toi32_i32$5 = $144$hi;
       i64toi32_i32$2 = $144_1;
       i64toi32_i32$4 = $151$hi;
       i64toi32_i32$0 = $151_1;
       i64toi32_i32$1 = i64toi32_i32$2 - i64toi32_i32$0 | 0;
       i64toi32_i32$6 = i64toi32_i32$2 >>> 0 < i64toi32_i32$0 >>> 0;
       i64toi32_i32$3 = i64toi32_i32$6 + i64toi32_i32$4 | 0;
       i64toi32_i32$3 = i64toi32_i32$5 - i64toi32_i32$3 | 0;
       var$5 = i64toi32_i32$1;
       var$5$hi = i64toi32_i32$3;
       i64toi32_i32$3 = var$0$hi;
       i64toi32_i32$5 = var$0;
       i64toi32_i32$2 = 0;
       i64toi32_i32$0 = 1;
       i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
       if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
        i64toi32_i32$2 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
        $48_1 = 0;
       } else {
        i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$5 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$4 | 0) | 0;
        $48_1 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
       }
       $154$hi = i64toi32_i32$2;
       i64toi32_i32$2 = var$7$hi;
       i64toi32_i32$2 = $154$hi;
       i64toi32_i32$3 = $48_1;
       i64toi32_i32$5 = var$7$hi;
       i64toi32_i32$0 = var$7;
       i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
       var$0 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
       var$0$hi = i64toi32_i32$5;
       i64toi32_i32$5 = var$6$hi;
       i64toi32_i32$2 = var$6;
       i64toi32_i32$3 = 0;
       i64toi32_i32$0 = 1;
       i64toi32_i32$3 = i64toi32_i32$5 & i64toi32_i32$3 | 0;
       var$6 = i64toi32_i32$2 & i64toi32_i32$0 | 0;
       var$6$hi = i64toi32_i32$3;
       var$7 = var$6;
       var$7$hi = i64toi32_i32$3;
       var$2 = var$2 + -1 | 0;
       if (var$2) {
        continue label$15
       }
       break label$15;
      };
      break label$13;
     }
    }
    i64toi32_i32$3 = var$5$hi;
    __wasm_intrinsics_temp_i64 = var$5;
    __wasm_intrinsics_temp_i64$hi = i64toi32_i32$3;
    i64toi32_i32$3 = var$0$hi;
    i64toi32_i32$5 = var$0;
    i64toi32_i32$2 = 0;
    i64toi32_i32$0 = 1;
    i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$2 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
     $49_1 = 0;
    } else {
     i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$5 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$4 | 0) | 0;
     $49_1 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
    }
    $165$hi = i64toi32_i32$2;
    i64toi32_i32$2 = var$6$hi;
    i64toi32_i32$2 = $165$hi;
    i64toi32_i32$3 = $49_1;
    i64toi32_i32$5 = var$6$hi;
    i64toi32_i32$0 = var$6;
    i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
    i64toi32_i32$3 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
    i64toi32_i32$HIGH_BITS = i64toi32_i32$5;
    return i64toi32_i32$3 | 0;
   }
   i64toi32_i32$3 = var$0$hi;
   __wasm_intrinsics_temp_i64 = var$0;
   __wasm_intrinsics_temp_i64$hi = i64toi32_i32$3;
   i64toi32_i32$3 = 0;
   var$0 = 0;
   var$0$hi = i64toi32_i32$3;
  }
  i64toi32_i32$3 = var$0$hi;
  i64toi32_i32$5 = var$0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$3;
  return i64toi32_i32$5 | 0;
 }
 
 function __wasm_ctz_i64(var$0, var$0$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$3 = 0, i64toi32_i32$5 = 0, i64toi32_i32$4 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, $10_1 = 0, $5$hi = 0, $8$hi = 0;
  i64toi32_i32$0 = var$0$hi;
  if (!!(var$0 | i64toi32_i32$0 | 0)) {
   i64toi32_i32$2 = var$0;
   i64toi32_i32$1 = -1;
   i64toi32_i32$3 = -1;
   i64toi32_i32$4 = i64toi32_i32$2 + i64toi32_i32$3 | 0;
   i64toi32_i32$5 = i64toi32_i32$0 + i64toi32_i32$1 | 0;
   if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
    i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
   }
   $5$hi = i64toi32_i32$5;
   i64toi32_i32$5 = var$0$hi;
   i64toi32_i32$5 = $5$hi;
   i64toi32_i32$0 = i64toi32_i32$4;
   i64toi32_i32$2 = var$0$hi;
   i64toi32_i32$3 = var$0;
   i64toi32_i32$2 = i64toi32_i32$5 ^ i64toi32_i32$2 | 0;
   i64toi32_i32$0 = i64toi32_i32$0 ^ i64toi32_i32$3 | 0;
   i64toi32_i32$3 = Math_clz32(i64toi32_i32$2);
   i64toi32_i32$5 = 0;
   if ((i64toi32_i32$3 | 0) == (32 | 0)) {
    $10_1 = Math_clz32(i64toi32_i32$0) + 32 | 0
   } else {
    $10_1 = i64toi32_i32$3
   }
   $8$hi = i64toi32_i32$5;
   i64toi32_i32$5 = 0;
   i64toi32_i32$0 = 63;
   i64toi32_i32$2 = $8$hi;
   i64toi32_i32$3 = $10_1;
   i64toi32_i32$1 = i64toi32_i32$0 - i64toi32_i32$3 | 0;
   i64toi32_i32$4 = (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) + i64toi32_i32$2 | 0;
   i64toi32_i32$4 = i64toi32_i32$5 - i64toi32_i32$4 | 0;
   i64toi32_i32$0 = i64toi32_i32$1;
   i64toi32_i32$HIGH_BITS = i64toi32_i32$4;
   return i64toi32_i32$0 | 0;
  }
  i64toi32_i32$0 = 0;
  i64toi32_i32$4 = 64;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$4 | 0;
 }
 
 function __wasm_i64_mul(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$0 = var$1$hi;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$1 = _ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE(var$0 | 0, i64toi32_i32$0 | 0, var$1 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function __wasm_i64_udiv(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$0 = var$1$hi;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$1 = _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E(var$0 | 0, i64toi32_i32$0 | 0, var$1 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function __wasm_rotl_i32(var$0, var$1) {
  var$0 = var$0 | 0;
  var$1 = var$1 | 0;
  var var$2 = 0;
  var$2 = var$1 & 31 | 0;
  var$1 = (0 - var$1 | 0) & 31 | 0;
  return ((-1 >>> var$2 | 0) & var$0 | 0) << var$2 | 0 | (((-1 << var$1 | 0) & var$0 | 0) >>> var$1 | 0) | 0 | 0;
 }
 
 function __wasm_rotl_i64(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, i64toi32_i32$5 = 0, i64toi32_i32$4 = 0, var$2$hi = 0, var$2 = 0, $19_1 = 0, $20_1 = 0, $21_1 = 0, $22_1 = 0, $6$hi = 0, $8$hi = 0, $10_1 = 0, $10$hi = 0, $15$hi = 0, $17$hi = 0, $19$hi = 0;
  i64toi32_i32$0 = var$1$hi;
  i64toi32_i32$2 = var$1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 63;
  i64toi32_i32$1 = i64toi32_i32$0 & i64toi32_i32$1 | 0;
  var$2 = i64toi32_i32$2 & i64toi32_i32$3 | 0;
  var$2$hi = i64toi32_i32$1;
  i64toi32_i32$1 = -1;
  i64toi32_i32$0 = -1;
  i64toi32_i32$2 = var$2$hi;
  i64toi32_i32$3 = var$2;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = 0;
   $19_1 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   $19_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
  }
  $6$hi = i64toi32_i32$2;
  i64toi32_i32$2 = var$0$hi;
  i64toi32_i32$2 = $6$hi;
  i64toi32_i32$1 = $19_1;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$3 = var$0;
  i64toi32_i32$0 = i64toi32_i32$2 & i64toi32_i32$0 | 0;
  $8$hi = i64toi32_i32$0;
  i64toi32_i32$0 = var$2$hi;
  i64toi32_i32$0 = $8$hi;
  i64toi32_i32$2 = i64toi32_i32$1 & i64toi32_i32$3 | 0;
  i64toi32_i32$1 = var$2$hi;
  i64toi32_i32$3 = var$2;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   $20_1 = 0;
  } else {
   i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
   $20_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
  }
  $10_1 = $20_1;
  $10$hi = i64toi32_i32$1;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$1 = 0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = var$1$hi;
  i64toi32_i32$3 = var$1;
  i64toi32_i32$4 = i64toi32_i32$0 - i64toi32_i32$3 | 0;
  i64toi32_i32$5 = (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) + i64toi32_i32$2 | 0;
  i64toi32_i32$5 = i64toi32_i32$1 - i64toi32_i32$5 | 0;
  i64toi32_i32$1 = i64toi32_i32$4;
  i64toi32_i32$0 = 0;
  i64toi32_i32$3 = 63;
  i64toi32_i32$0 = i64toi32_i32$5 & i64toi32_i32$0 | 0;
  var$1 = i64toi32_i32$1 & i64toi32_i32$3 | 0;
  var$1$hi = i64toi32_i32$0;
  i64toi32_i32$0 = -1;
  i64toi32_i32$5 = -1;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$3 = var$1;
  i64toi32_i32$2 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$5 << i64toi32_i32$2 | 0;
   $21_1 = 0;
  } else {
   i64toi32_i32$1 = ((1 << i64toi32_i32$2 | 0) - 1 | 0) & (i64toi32_i32$5 >>> (32 - i64toi32_i32$2 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$2 | 0) | 0;
   $21_1 = i64toi32_i32$5 << i64toi32_i32$2 | 0;
  }
  $15$hi = i64toi32_i32$1;
  i64toi32_i32$1 = var$0$hi;
  i64toi32_i32$1 = $15$hi;
  i64toi32_i32$0 = $21_1;
  i64toi32_i32$5 = var$0$hi;
  i64toi32_i32$3 = var$0;
  i64toi32_i32$5 = i64toi32_i32$1 & i64toi32_i32$5 | 0;
  $17$hi = i64toi32_i32$5;
  i64toi32_i32$5 = var$1$hi;
  i64toi32_i32$5 = $17$hi;
  i64toi32_i32$1 = i64toi32_i32$0 & i64toi32_i32$3 | 0;
  i64toi32_i32$0 = var$1$hi;
  i64toi32_i32$3 = var$1;
  i64toi32_i32$2 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$0 = 0;
   $22_1 = i64toi32_i32$5 >>> i64toi32_i32$2 | 0;
  } else {
   i64toi32_i32$0 = i64toi32_i32$5 >>> i64toi32_i32$2 | 0;
   $22_1 = (((1 << i64toi32_i32$2 | 0) - 1 | 0) & i64toi32_i32$5 | 0) << (32 - i64toi32_i32$2 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$2 | 0) | 0;
  }
  $19$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $10$hi;
  i64toi32_i32$5 = $10_1;
  i64toi32_i32$1 = $19$hi;
  i64toi32_i32$3 = $22_1;
  i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
  i64toi32_i32$5 = i64toi32_i32$5 | i64toi32_i32$3 | 0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$5 | 0;
 }
 
 function __wasm_ctz_i32(var$0) {
  var$0 = var$0 | 0;
  if (var$0) {
   return 31 - Math_clz32((var$0 + -1 | 0) ^ var$0 | 0) | 0 | 0
  }
  return 32 | 0;
 }
 
 // EMSCRIPTEN_END_FUNCS
;
 bufferView = HEAPU8;
 initActiveSegments(imports);
 var FUNCTION_TABLE = Table([null, $141, $140, $135, $199, $196, $126, $178, $60, $177, $176, $59, $59, $60, $125, $124, $123, $175, $174, $173, $172, $60, $122, $171, $59, $59, $60, $125, $124, $123, $170, $169, $168, $133, $121, $134, $120, $133, $287, $119, $286, $167, $285, $28, $284, $28, $283, $118, $282, $32, $281, $32, $166, $76, $165, $76, $164, $76, $75, $74, $163, $162, $161, $131, $121, $280, $160, $279, $120, $131, $278, $122, $277, $28, $275, $28, $274, $159, $273, $272, $271, $270, $269, $268, $266, $265, $264, $263, $262, $261, $260, $259, $158, $258, $257, $256, $255, $254, $253, $252, $251, $250, $249, $248, $247, $246, $245, $244, $243, $242, $241, $240, $276, $239, $238, $237, $236, $234, $233, $267, $231, $32, $230, $157, $229, $228, $227, $226, $224, $223, $222, $219, $156, $218, $155, $217, $216, $215, $214, $213, $212, $211, $232, $210, $209, $154, $221, $220, $208, $207, $153, $205, $119, $204, $28, $203, $32, $202, $32, $201, $118, $179, $28, $206, $32, $235, $200, $28, $198, $197, $28, $195, $194, $193, $32, $192, $191, $190, $152, $189, $188, $187, $186, $185, $184, $183, $151, $182, $181, $180, $225, $75, $74, $75, $74, $113, $114, $148, $147, $115, $103, $116, $150, $149, $115, $144, $143, $142, $139, $138, $137, $103]);
 function __wasm_memory_size() {
  return buffer.byteLength / 65536 | 0;
 }
 
 function __wasm_memory_grow(pagesToAdd) {
  pagesToAdd = pagesToAdd | 0;
  var oldPages = __wasm_memory_size() | 0;
  var newPages = oldPages + pagesToAdd | 0;
  if ((oldPages < newPages) && (newPages < 65536)) {
   var newBuffer = new ArrayBuffer(Math_imul(newPages, 65536));
   var newHEAP8 = new Int8Array(newBuffer);
   newHEAP8.set(HEAP8);
   HEAP8 = new Int8Array(newBuffer);
   HEAP16 = new Int16Array(newBuffer);
   HEAP32 = new Int32Array(newBuffer);
   HEAPU8 = new Uint8Array(newBuffer);
   HEAPU16 = new Uint16Array(newBuffer);
   HEAPU32 = new Uint32Array(newBuffer);
   HEAPF32 = new Float32Array(newBuffer);
   HEAPF64 = new Float64Array(newBuffer);
   buffer = newBuffer;
   bufferView = HEAPU8;
  }
  return oldPages;
 }
 
 return {
  "E": Object.create(Object.prototype, {
   "grow": {
    "value": __wasm_memory_grow
   }, 
   "buffer": {
    "get": function () {
     return buffer;
    }
    
   }
  }), 
  "F": $79, 
  "G": $146, 
  "H": $145, 
  "I": $67, 
  "J": FUNCTION_TABLE, 
  "K": $5, 
  "L": $136
 };
}

  return asmFunc(info);
}
