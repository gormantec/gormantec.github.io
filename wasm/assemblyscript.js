import { abort } from 'env';
import { consoleLog } from 'wasmdom';
import { createElement } from 'wasmdom';
import { getHead } from 'wasmdom';
import { getBody } from 'wasmdom';
import { getDocument } from 'wasmdom';
import { nodeName } from 'wasmdom';
import { getWindow } from 'wasmdom';

function asmFunc(global, env, buffer) {
 var HEAP8 = new global.Int8Array(buffer);
 var HEAP16 = new global.Int16Array(buffer);
 var HEAP32 = new global.Int32Array(buffer);
 var HEAPU8 = new global.Uint8Array(buffer);
 var HEAPU16 = new global.Uint16Array(buffer);
 var HEAPU32 = new global.Uint32Array(buffer);
 var HEAPF32 = new global.Float32Array(buffer);
 var HEAPF64 = new global.Float64Array(buffer);
 var Math_imul = global.Math.imul;
 var Math_fround = global.Math.fround;
 var Math_abs = global.Math.abs;
 var Math_clz32 = global.Math.clz32;
 var Math_min = global.Math.min;
 var Math_max = global.Math.max;
 var Math_floor = global.Math.floor;
 var Math_ceil = global.Math.ceil;
 var Math_sqrt = global.Math.sqrt;
 var abort = env.abort;
 var nan = global.NaN;
 var infinity = global.Infinity;
 var $lib_builtins_abort = env.abort;
 var assembly_wasmdom_consoleLog = env.consoleLog;
 var assembly_wasmdom_createElement = env.createElement;
 var assembly_wasmdom_getHead = env.getHead;
 var assembly_wasmdom_getBody = env.getBody;
 var assembly_wasmdom_getDocument = env.getDocument;
 var assembly_wasmdom_nodeName = env.nodeName;
 var assembly_wasmdom_getWindow = env.getWindow;
 var $lib_rt_tlsf_ROOT = 0;
 var $lib_rt_tlsf_collectLock = 0;
 var assembly_index_window = 0;
 var $lib_rt_pure_ROOTS = 0;
 var $lib_rt_pure_CUR = 0;
 var $lib_rt_pure_END = 0;
 var $lib_rt___rtti_base = 1920;
 function $lib_rt_tlsf_removeBlock($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  $2 = HEAP32[$1 >> 2];
  if (!($2 & 1 | 0)) {
   $lib_builtins_abort(0 | 0, 1040 | 0, 277 | 0, 14 | 0);
   abort();
  }
  $2 = $2 & -4 | 0;
  if (!($2 >>> 0 >= 16 >>> 0 ? $2 >>> 0 < 1073741808 >>> 0 : 0)) {
   $lib_builtins_abort(0 | 0, 1040 | 0, 279 | 0, 14 | 0);
   abort();
  }
  if ($2 >>> 0 < 256 >>> 0) {
   $2 = $2 >>> 4 | 0
  } else {
   $3 = 31 - Math_clz32($2) | 0;
   $2 = ($2 >>> ($3 - 4 | 0) | 0) ^ 16 | 0;
   $3 = $3 - 7 | 0;
  }
  if (!($3 >>> 0 < 23 >>> 0 ? $2 >>> 0 < 16 >>> 0 : 0)) {
   $lib_builtins_abort(0 | 0, 1040 | 0, 292 | 0, 14 | 0);
   abort();
  }
  $4 = HEAP32[($1 + 20 | 0) >> 2];
  $5 = HEAP32[($1 + 16 | 0) >> 2];
  if ($5) {
   HEAP32[($5 + 20 | 0) >> 2] = $4
  }
  if ($4) {
   HEAP32[($4 + 16 | 0) >> 2] = $5
  }
  if ((HEAP32[((((($3 << 4 | 0) + $2 | 0) << 2 | 0) + $0 | 0) + 96 | 0) >> 2] | 0) == ($1 | 0)) {
   HEAP32[((((($3 << 4 | 0) + $2 | 0) << 2 | 0) + $0 | 0) + 96 | 0) >> 2] = $4;
   if (!$4) {
    $4 = ($3 << 2 | 0) + $0 | 0;
    $1 = HEAP32[($4 + 4 | 0) >> 2] & ((1 << $2 | 0) ^ -1 | 0) | 0;
    HEAP32[($4 + 4 | 0) >> 2] = $1;
    if (!$1) {
     HEAP32[$0 >> 2] = HEAP32[$0 >> 2] & ((1 << $3 | 0) ^ -1 | 0) | 0
    }
   }
  }
 }
 
 function $lib_rt_tlsf_insertBlock($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
  if (!$1) {
   $lib_builtins_abort(0 | 0, 1040 | 0, 205 | 0, 14 | 0);
   abort();
  }
  $3 = HEAP32[$1 >> 2];
  if (!($3 & 1 | 0)) {
   $lib_builtins_abort(0 | 0, 1040 | 0, 207 | 0, 14 | 0);
   abort();
  }
  $4 = ($1 + 16 | 0) + (HEAP32[$1 >> 2] & -4 | 0) | 0;
  $6 = HEAP32[$4 >> 2];
  if ($6 & 1 | 0) {
   $2 = (($3 & -4 | 0) + 16 | 0) + ($6 & -4 | 0) | 0;
   if ($2 >>> 0 < 1073741808 >>> 0) {
    $lib_rt_tlsf_removeBlock($0, $4);
    $3 = $2 | ($3 & 3 | 0) | 0;
    HEAP32[$1 >> 2] = $3;
    $4 = ($1 + 16 | 0) + (HEAP32[$1 >> 2] & -4 | 0) | 0;
    $6 = HEAP32[$4 >> 2];
   }
  }
  if ($3 & 2 | 0) {
   $2 = HEAP32[($1 - 4 | 0) >> 2];
   $7 = HEAP32[$2 >> 2];
   if (!($7 & 1 | 0)) {
    $lib_builtins_abort(0 | 0, 1040 | 0, 228 | 0, 16 | 0);
    abort();
   }
   $8 = (($7 & -4 | 0) + 16 | 0) + ($3 & -4 | 0) | 0;
   if ($8 >>> 0 < 1073741808 >>> 0) {
    $lib_rt_tlsf_removeBlock($0, $2);
    $3 = $7 & 3 | 0 | $8 | 0;
    HEAP32[$2 >> 2] = $3;
    $1 = $2;
   }
  }
  HEAP32[$4 >> 2] = $6 | 2 | 0;
  $2 = $3 & -4 | 0;
  if (!($2 >>> 0 >= 16 >>> 0 ? $2 >>> 0 < 1073741808 >>> 0 : 0)) {
   $lib_builtins_abort(0 | 0, 1040 | 0, 243 | 0, 14 | 0);
   abort();
  }
  if (($2 + ($1 + 16 | 0) | 0 | 0) != ($4 | 0)) {
   $lib_builtins_abort(0 | 0, 1040 | 0, 244 | 0, 14 | 0);
   abort();
  }
  HEAP32[($4 - 4 | 0) >> 2] = $1;
  if ($2 >>> 0 < 256 >>> 0) {
   $2 = $2 >>> 4 | 0
  } else {
   $3 = 31 - Math_clz32($2) | 0;
   $2 = ($2 >>> ($3 - 4 | 0) | 0) ^ 16 | 0;
   $5 = $3 - 7 | 0;
  }
  if (!($5 >>> 0 < 23 >>> 0 ? $2 >>> 0 < 16 >>> 0 : 0)) {
   $lib_builtins_abort(0 | 0, 1040 | 0, 260 | 0, 14 | 0);
   abort();
  }
  $3 = HEAP32[((((($5 << 4 | 0) + $2 | 0) << 2 | 0) + $0 | 0) + 96 | 0) >> 2];
  HEAP32[($1 + 16 | 0) >> 2] = 0;
  HEAP32[($1 + 20 | 0) >> 2] = $3;
  if ($3) {
   HEAP32[($3 + 16 | 0) >> 2] = $1
  }
  HEAP32[((((($5 << 4 | 0) + $2 | 0) << 2 | 0) + $0 | 0) + 96 | 0) >> 2] = $1;
  HEAP32[$0 >> 2] = HEAP32[$0 >> 2] | (1 << $5 | 0) | 0;
  $0 = ($5 << 2 | 0) + $0 | 0;
  $1 = HEAP32[($0 + 4 | 0) >> 2] | (1 << $2 | 0) | 0;
  HEAP32[($0 + 4 | 0) >> 2] = $1;
 }
 
 function $lib_rt_tlsf_addMemory($0, $1, $2) {
  var $3 = 0, $4 = 0;
  if (!(($1 >>> 0 <= $2 >>> 0 ? !($1 & 15 | 0) : 0) ? !($2 & 15 | 0) : 0)) {
   $lib_builtins_abort(0 | 0, 1040 | 0, 386 | 0, 5 | 0);
   abort();
  }
  $3 = HEAP32[($0 + 1568 | 0) >> 2];
  if ($3) {
   if ($1 >>> 0 < ($3 + 16 | 0) >>> 0) {
    $lib_builtins_abort(0 | 0, 1040 | 0, 396 | 0, 16 | 0);
    abort();
   }
   if (($1 - 16 | 0 | 0) == ($3 | 0)) {
    $4 = HEAP32[$3 >> 2];
    $1 = $1 - 16 | 0;
   }
  } else {
   if ($1 >>> 0 < ($0 + 1572 | 0) >>> 0) {
    $lib_builtins_abort(0 | 0, 1040 | 0, 408 | 0, 5 | 0);
    abort();
   }
  }
  $2 = $2 - $1 | 0;
  if ($2 >>> 0 < 48 >>> 0) {
   return
  }
  HEAP32[$1 >> 2] = $4 & 2 | 0 | ($2 - 32 | 0 | 1 | 0) | 0;
  HEAP32[($1 + 16 | 0) >> 2] = 0;
  HEAP32[($1 + 20 | 0) >> 2] = 0;
  $2 = ($1 + $2 | 0) - 16 | 0;
  HEAP32[$2 >> 2] = 2;
  HEAP32[($0 + 1568 | 0) >> 2] = $2;
  $lib_rt_tlsf_insertBlock($0, $1);
 }
 
 function $lib_rt_tlsf_maybeInitialize() {
  var $0 = 0, $1 = 0, $2 = 0;
  $2 = $lib_rt_tlsf_ROOT;
  if (!$2) {
   $0 = __wasm_memory_size();
   if ((1 | 0) > ($0 | 0)) {
    $0 = (__wasm_memory_grow(1 - $0 | 0 | 0) | 0) < (0 | 0)
   } else {
    $0 = 0
   }
   if ($0) {
    abort()
   }
   $2 = 2080;
   HEAP32[2080 >> 2] = 0;
   HEAP32[3648 >> 2] = 0;
   for_loop_0 : while (1) {
    if ($1 >>> 0 < 23 >>> 0) {
     HEAP32[((($1 << 2 | 0) + 2080 | 0) + 4 | 0) >> 2] = 0;
     $0 = 0;
     for_loop_1 : while (1) {
      if ($0 >>> 0 < 16 >>> 0) {
       HEAP32[((((($1 << 4 | 0) + $0 | 0) << 2 | 0) + 2080 | 0) + 96 | 0) >> 2] = 0;
       $0 = $0 + 1 | 0;
       continue for_loop_1;
      }
      break for_loop_1;
     };
     $1 = $1 + 1 | 0;
     continue for_loop_0;
    }
    break for_loop_0;
   };
   $lib_rt_tlsf_addMemory(2080, 3664, __wasm_memory_size() << 16 | 0);
   $lib_rt_tlsf_ROOT = 2080;
  }
  return $2;
 }
 
 function $lib_rt_tlsf_prepareSize($0) {
  if ($0 >>> 0 >= 1073741808 >>> 0) {
   $lib_builtins_abort(1088 | 0, 1040 | 0, 461 | 0, 30 | 0);
   abort();
  }
  $0 = ($0 + 15 | 0) & -16 | 0;
  return $0 >>> 0 > 16 >>> 0 ? $0 : 16;
 }
 
 function $lib_rt_tlsf_searchBlock($0, $1) {
  var $2 = 0, $3 = 0;
  if ($1 >>> 0 < 256 >>> 0) {
   $1 = $1 >>> 4 | 0
  } else {
   $1 = $1 >>> 0 < 536870904 >>> 0 ? ((1 << (27 - Math_clz32($1) | 0) | 0) + $1 | 0) - 1 | 0 : $1;
   $2 = 31 - Math_clz32($1) | 0;
   $3 = $2 - 4 | 0;
   $2 = $2 - 7 | 0;
   $1 = ($1 >>> $3 | 0) ^ 16 | 0;
  }
  if (!($2 >>> 0 < 23 >>> 0 ? $1 >>> 0 < 16 >>> 0 : 0)) {
   $lib_builtins_abort(0 | 0, 1040 | 0, 338 | 0, 14 | 0);
   abort();
  }
  $1 = HEAP32[((($2 << 2 | 0) + $0 | 0) + 4 | 0) >> 2] & (-1 << $1 | 0) | 0;
  if ($1) {
   $0 = HEAP32[((((__wasm_ctz_i32($1) + ($2 << 4 | 0) | 0) << 2 | 0) + $0 | 0) + 96 | 0) >> 2]
  } else {
   $1 = HEAP32[$0 >> 2] & (-1 << ($2 + 1 | 0) | 0) | 0;
   if ($1) {
    $1 = __wasm_ctz_i32($1);
    $2 = HEAP32[((($1 << 2 | 0) + $0 | 0) + 4 | 0) >> 2];
    if (!$2) {
     $lib_builtins_abort(0 | 0, 1040 | 0, 351 | 0, 18 | 0);
     abort();
    }
    $0 = HEAP32[((((__wasm_ctz_i32($2) + ($1 << 4 | 0) | 0) << 2 | 0) + $0 | 0) + 96 | 0) >> 2];
   } else {
    $0 = 0
   }
  }
  return $0;
 }
 
 function $lib_rt_tlsf_prepareBlock($0, $1, $2) {
  var $3 = 0, $4 = 0;
  $3 = HEAP32[$1 >> 2];
  if ($2 & 15 | 0) {
   $lib_builtins_abort(0 | 0, 1040 | 0, 365 | 0, 14 | 0);
   abort();
  }
  $4 = ($3 & -4 | 0) - $2 | 0;
  if ($4 >>> 0 >= 32 >>> 0) {
   HEAP32[$1 >> 2] = $3 & 2 | 0 | $2 | 0;
   $1 = ($1 + 16 | 0) + $2 | 0;
   HEAP32[$1 >> 2] = $4 - 16 | 0 | 1 | 0;
   $lib_rt_tlsf_insertBlock($0, $1);
  } else {
   HEAP32[$1 >> 2] = $3 & -2 | 0;
   $0 = $1 + 16 | 0;
   $2 = HEAP32[($0 + (HEAP32[$1 >> 2] & -4 | 0) | 0) >> 2];
   HEAP32[($0 + (HEAP32[$1 >> 2] & -4 | 0) | 0) >> 2] = $2 & -3 | 0;
  }
 }
 
 function $lib_rt_tlsf_allocateBlock($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0;
  if ($lib_rt_tlsf_collectLock) {
   $lib_builtins_abort(0 | 0, 1040 | 0, 500 | 0, 14 | 0);
   abort();
  }
  $4 = $lib_rt_tlsf_prepareSize($1);
  $3 = $lib_rt_tlsf_searchBlock($0, $4);
  if (!$3) {
   $lib_rt_tlsf_collectLock = 1;
   $lib_rt_pure___collect();
   $lib_rt_tlsf_collectLock = 0;
   $3 = $lib_rt_tlsf_searchBlock($0, $4);
   if (!$3) {
    $3 = __wasm_memory_size();
    $5 = ($3 << 16 | 0) - 16 | 0;
    $5 = ((((16 << ((HEAP32[($0 + 1568 | 0) >> 2] | 0) != ($5 | 0)) | 0) + ($4 >>> 0 < 536870904 >>> 0 ? ((1 << (27 - Math_clz32($4) | 0) | 0) - 1 | 0) + $4 | 0 : $4) | 0) + 65535 | 0) & -65536 | 0) >>> 16 | 0;
    if ((__wasm_memory_grow((($3 | 0) > ($5 | 0) ? $3 : $5) | 0) | 0) < (0 | 0)) {
     if ((__wasm_memory_grow($5 | 0) | 0) < (0 | 0)) {
      abort()
     }
    }
    $lib_rt_tlsf_addMemory($0, $3 << 16 | 0, __wasm_memory_size() << 16 | 0);
    $3 = $lib_rt_tlsf_searchBlock($0, $4);
    if (!$3) {
     $lib_builtins_abort(0 | 0, 1040 | 0, 512 | 0, 20 | 0);
     abort();
    }
   }
  }
  if ((HEAP32[$3 >> 2] & -4 | 0) >>> 0 < $4 >>> 0) {
   $lib_builtins_abort(0 | 0, 1040 | 0, 520 | 0, 14 | 0);
   abort();
  }
  HEAP32[($3 + 4 | 0) >> 2] = 0;
  HEAP32[($3 + 8 | 0) >> 2] = $2;
  HEAP32[($3 + 12 | 0) >> 2] = $1;
  $lib_rt_tlsf_removeBlock($0, $3);
  $lib_rt_tlsf_prepareBlock($0, $3, $4);
  return $3;
 }
 
 function $lib_rt_tlsf___alloc($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return $lib_rt_tlsf_allocateBlock($lib_rt_tlsf_maybeInitialize(), $0, $1) + 16 | 0 | 0;
 }
 
 function $lib_rt_pure___retain($0) {
  $0 = $0 | 0;
  var $1 = 0, $2 = 0;
  if ($0 >>> 0 > 2076 >>> 0) {
   $1 = $0 - 16 | 0;
   $2 = HEAP32[($1 + 4 | 0) >> 2];
   if (($2 & -268435456 | 0 | 0) != (($2 + 1 | 0) & -268435456 | 0 | 0)) {
    $lib_builtins_abort(0 | 0, 1152 | 0, 109 | 0, 3 | 0);
    abort();
   }
   HEAP32[($1 + 4 | 0) >> 2] = $2 + 1 | 0;
   if (HEAP32[$1 >> 2] & 1 | 0) {
    $lib_builtins_abort(0 | 0, 1152 | 0, 112 | 0, 14 | 0);
    abort();
   }
  }
  return $0 | 0;
 }
 
 function $lib_rt_pure___release($0) {
  $0 = $0 | 0;
  if ($0 >>> 0 > 2076 >>> 0) {
   $lib_rt_pure_decrement($0 - 16 | 0)
  }
 }
 
 function assembly_lib_debug_Debug_log($0, $1) {
  $0 = $lib_rt_pure___retain($1);
  assembly_wasmdom_consoleLog($0 | 0);
  $lib_rt_pure___release($0);
 }
 
 function $lib_memory_memory_copy($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0;
  $lib_util_memory_memmove_inlined_0 : {
   $3 = $2;
   if (($0 | 0) == ($1 | 0)) {
    break $lib_util_memory_memmove_inlined_0
   }
   if ($0 >>> 0 < $1 >>> 0) {
    if (($1 & 7 | 0 | 0) == ($0 & 7 | 0 | 0)) {
     while_continue_0 : while (1) {
      if ($0 & 7 | 0) {
       if (!$3) {
        break $lib_util_memory_memmove_inlined_0
       }
       $3 = $3 - 1 | 0;
       $2 = $0;
       $0 = $0 + 1 | 0;
       $4 = $1;
       $1 = $1 + 1 | 0;
       HEAP8[$2 >> 0] = HEAPU8[$4 >> 0];
       continue while_continue_0;
      }
      break while_continue_0;
     };
     while_continue_1 : while (1) {
      if ($3 >>> 0 >= 8 >>> 0) {
       $2 = HEAP32[($1 + 4 | 0) >> 2];
       HEAP32[$0 >> 2] = HEAP32[$1 >> 2];
       HEAP32[($0 + 4 | 0) >> 2] = $2;
       $3 = $3 - 8 | 0;
       $0 = $0 + 8 | 0;
       $1 = $1 + 8 | 0;
       continue while_continue_1;
      }
      break while_continue_1;
     };
    }
    while_continue_2 : while (1) {
     if ($3) {
      $2 = $0;
      $0 = $0 + 1 | 0;
      $4 = $1;
      $1 = $1 + 1 | 0;
      HEAP8[$2 >> 0] = HEAPU8[$4 >> 0];
      $3 = $3 - 1 | 0;
      continue while_continue_2;
     }
     break while_continue_2;
    };
   } else {
    if (($1 & 7 | 0 | 0) == ($0 & 7 | 0 | 0)) {
     while_continue_3 : while (1) {
      if (($0 + $3 | 0) & 7 | 0) {
       if (!$3) {
        break $lib_util_memory_memmove_inlined_0
       }
       $3 = $3 - 1 | 0;
       $2 = $3 + $1 | 0;
       HEAP8[($0 + $3 | 0) >> 0] = HEAPU8[$2 >> 0];
       continue while_continue_3;
      }
      break while_continue_3;
     };
     while_continue_4 : while (1) {
      if ($3 >>> 0 >= 8 >>> 0) {
       $3 = $3 - 8 | 0;
       $2 = $3 + $1 | 0;
       $4 = HEAP32[($2 + 4 | 0) >> 2];
       $5 = $0 + $3 | 0;
       HEAP32[$5 >> 2] = HEAP32[$2 >> 2];
       HEAP32[($5 + 4 | 0) >> 2] = $4;
       continue while_continue_4;
      }
      break while_continue_4;
     };
    }
    while_continue_5 : while (1) {
     if ($3) {
      $3 = $3 - 1 | 0;
      $2 = $3 + $1 | 0;
      HEAP8[($0 + $3 | 0) >> 0] = HEAPU8[$2 >> 0];
      continue while_continue_5;
     }
     break while_continue_5;
    };
   }
  }
 }
 
 function $lib_rt___allocArray($0, $1) {
  var $2 = 0, $3 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $0 = $lib_rt_tlsf___alloc(16, $0);
  $3 = $0;
  $2 = $lib_rt_tlsf___alloc(0, 0);
  if ($1) {
   $lib_memory_memory_copy($2, $1, 0)
  }
  (wasm2js_i32$0 = $3, wasm2js_i32$1 = $lib_rt_pure___retain($2)), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
  HEAP32[($0 + 4 | 0) >> 2] = $2;
  HEAP32[($0 + 8 | 0) >> 2] = 0;
  HEAP32[($0 + 12 | 0) >> 2] = 0;
  return $0;
 }
 
 function $lib_rt_tlsf_checkUsedBlock($0) {
  var $1 = 0;
  $1 = $0 - 16 | 0;
  if (!((($0 ? !($0 & 15 | 0) : 0) ? !(HEAP32[$1 >> 2] & 1 | 0) : 0) ? !(HEAP32[($1 + 4 | 0) >> 2] & -268435456 | 0) : 0)) {
   $lib_builtins_abort(0 | 0, 1040 | 0, 580 | 0, 3 | 0);
   abort();
  }
  return $1;
 }
 
 function $lib_rt_tlsf_freeBlock($0, $1) {
  HEAP32[$1 >> 2] = HEAP32[$1 >> 2] | 1 | 0;
  $lib_rt_tlsf_insertBlock($0, $1);
 }
 
 function $lib_rt_tlsf_reallocateBlock($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  $3 = $lib_rt_tlsf_prepareSize($2);
  $5 = HEAP32[$1 >> 2];
  if ($3 >>> 0 <= ($5 & -4 | 0) >>> 0) {
   $lib_rt_tlsf_prepareBlock($0, $1, $3);
   HEAP32[($1 + 12 | 0) >> 2] = $2;
   return $1;
  }
  $6 = ($1 + 16 | 0) + (HEAP32[$1 >> 2] & -4 | 0) | 0;
  $4 = HEAP32[$6 >> 2];
  if ($4 & 1 | 0) {
   $4 = (($5 & -4 | 0) + 16 | 0) + ($4 & -4 | 0) | 0;
   if ($4 >>> 0 >= $3 >>> 0) {
    $lib_rt_tlsf_removeBlock($0, $6);
    HEAP32[$1 >> 2] = $4 | ($5 & 3 | 0) | 0;
    HEAP32[($1 + 12 | 0) >> 2] = $2;
    $lib_rt_tlsf_prepareBlock($0, $1, $3);
    return $1;
   }
  }
  $3 = $lib_rt_tlsf_allocateBlock($0, $2, HEAP32[($1 + 8 | 0) >> 2]);
  HEAP32[($3 + 4 | 0) >> 2] = HEAP32[($1 + 4 | 0) >> 2];
  $lib_memory_memory_copy($3 + 16 | 0, $1 + 16 | 0, $2);
  if ($1 >>> 0 >= 2076 >>> 0) {
   $lib_rt_tlsf_freeBlock($0, $1)
  }
  return $3;
 }
 
 function $lib_memory_memory_fill($0, $1) {
  var $2 = 0;
  $lib_util_memory_memset_inlined_0 : {
   if (!$1) {
    break $lib_util_memory_memset_inlined_0
   }
   HEAP8[$0 >> 0] = 0;
   $2 = ($0 + $1 | 0) - 4 | 0;
   HEAP8[($2 + 3 | 0) >> 0] = 0;
   if ($1 >>> 0 <= 2 >>> 0) {
    break $lib_util_memory_memset_inlined_0
   }
   HEAP8[($0 + 1 | 0) >> 0] = 0;
   HEAP8[($0 + 2 | 0) >> 0] = 0;
   HEAP8[($2 + 2 | 0) >> 0] = 0;
   HEAP8[($2 + 1 | 0) >> 0] = 0;
   if ($1 >>> 0 <= 6 >>> 0) {
    break $lib_util_memory_memset_inlined_0
   }
   HEAP8[($0 + 3 | 0) >> 0] = 0;
   HEAP8[$2 >> 0] = 0;
   if ($1 >>> 0 <= 8 >>> 0) {
    break $lib_util_memory_memset_inlined_0
   }
   $2 = (0 - $0 | 0) & 3 | 0;
   $0 = $2 + $0 | 0;
   HEAP32[$0 >> 2] = 0;
   $2 = ($1 - $2 | 0) & -4 | 0;
   $1 = ($2 + $0 | 0) - 28 | 0;
   HEAP32[($1 + 24 | 0) >> 2] = 0;
   if ($2 >>> 0 <= 8 >>> 0) {
    break $lib_util_memory_memset_inlined_0
   }
   HEAP32[($0 + 4 | 0) >> 2] = 0;
   HEAP32[($0 + 8 | 0) >> 2] = 0;
   HEAP32[($1 + 16 | 0) >> 2] = 0;
   HEAP32[($1 + 20 | 0) >> 2] = 0;
   if ($2 >>> 0 <= 24 >>> 0) {
    break $lib_util_memory_memset_inlined_0
   }
   HEAP32[($0 + 12 | 0) >> 2] = 0;
   HEAP32[($0 + 16 | 0) >> 2] = 0;
   HEAP32[($0 + 20 | 0) >> 2] = 0;
   HEAP32[($0 + 24 | 0) >> 2] = 0;
   HEAP32[$1 >> 2] = 0;
   HEAP32[($1 + 4 | 0) >> 2] = 0;
   HEAP32[($1 + 8 | 0) >> 2] = 0;
   HEAP32[($1 + 12 | 0) >> 2] = 0;
   $1 = ($0 & 4 | 0) + 24 | 0;
   $0 = $1 + $0 | 0;
   $1 = $2 - $1 | 0;
   while_continue_0 : while (1) {
    if ($1 >>> 0 >= 32 >>> 0) {
     HEAP32[$0 >> 2] = 0;
     HEAP32[($0 + 4 | 0) >> 2] = 0;
     HEAP32[($0 + 8 | 0) >> 2] = 0;
     HEAP32[($0 + 12 | 0) >> 2] = 0;
     HEAP32[($0 + 16 | 0) >> 2] = 0;
     HEAP32[($0 + 20 | 0) >> 2] = 0;
     HEAP32[($0 + 24 | 0) >> 2] = 0;
     HEAP32[($0 + 28 | 0) >> 2] = 0;
     $1 = $1 - 32 | 0;
     $0 = $0 + 32 | 0;
     continue while_continue_0;
    }
    break while_continue_0;
   };
  }
 }
 
 function $lib_array_Array_assembly_lib_element_Element__push($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $3 = $lib_rt_pure___retain($0);
  $4 = HEAP32[1228 >> 2];
  $5 = $4 + 1 | 0;
  $0 = $5;
  $1 = HEAP32[1224 >> 2];
  if ($0 >>> 0 > ($1 >>> 2 | 0) >>> 0) {
   if ($0 >>> 0 > 268435452 >>> 0) {
    $lib_builtins_abort(1504 | 0, 1552 | 0, 14 | 0, 48 | 0);
    abort();
   }
   $6 = HEAP32[1216 >> 2];
   $2 = $0 << 2 | 0;
   $0 = $lib_rt_tlsf_reallocateBlock($lib_rt_tlsf_maybeInitialize(), $lib_rt_tlsf_checkUsedBlock($6), $2) + 16 | 0;
   $lib_memory_memory_fill($0 + $1 | 0, $2 - $1 | 0);
   if (($0 | 0) != ($6 | 0)) {
    HEAP32[1216 >> 2] = $0;
    HEAP32[1220 >> 2] = $0;
   }
   HEAP32[1224 >> 2] = $2;
  }
  (wasm2js_i32$0 = HEAP32[1220 >> 2] + ($4 << 2 | 0) | 0, wasm2js_i32$1 = $lib_rt_pure___retain($3)), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
  HEAP32[1228 >> 2] = $5;
  $lib_rt_pure___release($3);
 }
 
 function assembly_lib_element_Element_constructor($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, wasm2js_i32$0 = 0, wasm2js_f64$0 = 0.0;
  if (!$0) {
   $0 = $lib_rt_pure___retain($lib_rt_tlsf___alloc(24, 4))
  }
  HEAP32[$0 >> 2] = 0;
  HEAP32[($0 + 4 | 0) >> 2] = 0;
  HEAPF64[($0 + 8 | 0) >> 3] = 0.0;
  HEAP32[($0 + 16 | 0) >> 2] = 0;
  HEAP32[($0 + 20 | 0) >> 2] = 0;
  $4 = $lib_rt_pure___retain($1);
  $1 = $4;
  $3 = HEAP32[$0 >> 2];
  if (($1 | 0) != ($3 | 0)) {
   $1 = $lib_rt_pure___retain($1);
   $lib_rt_pure___release($3);
  }
  HEAP32[$0 >> 2] = $1;
  $1 = $lib_rt_pure___retain($lib_rt_tlsf___alloc(0, 3));
  $lib_rt_pure___release(HEAP32[($0 + 4 | 0) >> 2]);
  HEAP32[($0 + 4 | 0) >> 2] = $1;
  assembly_lib_debug_Debug_log(HEAP32[($0 + 4 | 0) >> 2], 1296);
  $1 = $lib_rt_pure___retain($lib_rt___allocArray(6, 1360));
  $lib_rt_pure___release(HEAP32[($0 + 16 | 0) >> 2]);
  HEAP32[($0 + 16 | 0) >> 2] = $1;
  assembly_lib_debug_Debug_log(HEAP32[($0 + 4 | 0) >> 2], 1376);
  if ($2 >= 0.0) {
   HEAPF64[($0 + 8 | 0) >> 3] = $2
  } else {
   (wasm2js_i32$0 = $0, wasm2js_f64$0 = +assembly_wasmdom_createElement($4 | 0)), HEAPF64[(wasm2js_i32$0 + 8 | 0) >> 3] = wasm2js_f64$0
  }
  assembly_lib_debug_Debug_log(HEAP32[($0 + 4 | 0) >> 2], 1440);
  $1 = $lib_rt_pure___retain($lib_rt_tlsf___alloc(4, 7));
  HEAP32[$1 >> 2] = 0;
  $3 = 0;
  $5 = HEAP32[$1 >> 2];
  if ($5) {
   $3 = $lib_rt_pure___retain(0);
   $lib_rt_pure___release($5);
  }
  HEAP32[$1 >> 2] = $3;
  $lib_rt_pure___release(0);
  $lib_rt_pure___release(HEAP32[($0 + 20 | 0) >> 2]);
  HEAP32[($0 + 20 | 0) >> 2] = $1;
  $lib_array_Array_assembly_lib_element_Element__push($0);
  $lib_rt_pure___release($4);
  return $0;
 }
 
 function assembly_lib_document_Document_constructor() {
  var $0 = 0, $1 = 0, $2 = 0.0, $3 = 0, wasm2js_i32$0 = 0, wasm2js_f64$0 = 0.0;
  $0 = $lib_rt_pure___retain($lib_rt_tlsf___alloc(24, 10));
  HEAP32[$0 >> 2] = 0;
  HEAP32[($0 + 4 | 0) >> 2] = 0;
  HEAPF64[($0 + 8 | 0) >> 3] = 0.0;
  HEAP32[($0 + 16 | 0) >> 2] = 0;
  HEAP32[($0 + 20 | 0) >> 2] = 0;
  $1 = $lib_rt_pure___retain($lib_rt_tlsf___alloc(0, 3));
  $lib_rt_pure___release(HEAP32[($0 + 20 | 0) >> 2]);
  HEAP32[($0 + 20 | 0) >> 2] = $1;
  assembly_lib_debug_Debug_log(HEAP32[($0 + 20 | 0) >> 2], 1248);
  $1 = assembly_lib_element_Element_constructor($lib_rt_pure___retain($lib_rt_tlsf___alloc(24, 11)), 1600, +assembly_wasmdom_getHead());
  $lib_rt_pure___release(HEAP32[$0 >> 2]);
  HEAP32[$0 >> 2] = $1;
  assembly_lib_debug_Debug_log(HEAP32[($0 + 20 | 0) >> 2], 1632);
  $1 = assembly_lib_element_Element_constructor($lib_rt_pure___retain($lib_rt_tlsf___alloc(24, 12)), 1680, +assembly_wasmdom_getBody());
  $lib_rt_pure___release(HEAP32[($0 + 4 | 0) >> 2]);
  HEAP32[($0 + 4 | 0) >> 2] = $1;
  assembly_lib_debug_Debug_log(HEAP32[($0 + 20 | 0) >> 2], 1712);
  (wasm2js_i32$0 = $0, wasm2js_f64$0 = +assembly_wasmdom_getDocument()), HEAPF64[(wasm2js_i32$0 + 8 | 0) >> 3] = wasm2js_f64$0;
  assembly_lib_debug_Debug_log(HEAP32[($0 + 20 | 0) >> 2], 1760);
  $2 = HEAPF64[($0 + 8 | 0) >> 3];
  $1 = assembly_wasmdom_nodeName(+$2) | 0;
  $3 = assembly_lib_element_Element_constructor(0, $1, $2);
  $lib_rt_pure___release($1);
  $lib_rt_pure___release(HEAP32[($0 + 16 | 0) >> 2]);
  HEAP32[($0 + 16 | 0) >> 2] = $3;
  return $0;
 }
 
 function assembly_lib_document_Window_constructor() {
  var $0 = 0, $1 = 0, $2 = 0, $3 = 0, wasm2js_i32$0 = 0, wasm2js_f64$0 = 0.0;
  $0 = $lib_rt_pure___retain($lib_rt_tlsf___alloc(28, 9));
  HEAP32[$0 >> 2] = 0;
  HEAPF64[($0 + 8 | 0) >> 3] = 0.0;
  HEAP32[($0 + 16 | 0) >> 2] = 0;
  HEAP32[($0 + 20 | 0) >> 2] = 0;
  HEAP32[($0 + 24 | 0) >> 2] = 0;
  $3 = $lib_rt_pure___retain($lib_rt_tlsf___alloc(0, 3));
  assembly_lib_debug_Debug_log($3, 1248);
  $1 = assembly_lib_document_Document_constructor();
  $lib_rt_pure___release(HEAP32[$0 >> 2]);
  HEAP32[$0 >> 2] = $1;
  (wasm2js_i32$0 = $0, wasm2js_f64$0 = +assembly_wasmdom_getWindow()), HEAPF64[(wasm2js_i32$0 + 8 | 0) >> 3] = wasm2js_f64$0;
  $1 = $lib_rt_pure___retain($lib_rt___allocArray(14, 1808));
  $lib_rt_pure___release(HEAP32[($0 + 16 | 0) >> 2]);
  HEAP32[($0 + 16 | 0) >> 2] = $1;
  $1 = $lib_rt_pure___retain($lib_rt_tlsf___alloc(4, 15));
  HEAP32[$1 >> 2] = 0;
  $lib_rt_pure___release(HEAP32[($0 + 20 | 0) >> 2]);
  HEAP32[($0 + 20 | 0) >> 2] = $1;
  $1 = $lib_rt_pure___retain($lib_rt_tlsf___alloc(4, 16));
  HEAP32[$1 >> 2] = 0;
  $2 = $lib_rt_pure___retain($lib_rt_tlsf___alloc(12, 17));
  HEAP32[$2 >> 2] = 0;
  HEAP32[($2 + 4 | 0) >> 2] = 0;
  HEAP32[($2 + 8 | 0) >> 2] = 0;
  $lib_rt_pure___release(HEAP32[$1 >> 2]);
  HEAP32[$1 >> 2] = $2;
  $lib_rt_pure___release(HEAP32[($0 + 24 | 0) >> 2]);
  HEAP32[($0 + 24 | 0) >> 2] = $1;
  $lib_rt_pure___release($3);
  return $0;
 }
 
 function assembly_index__init() {
  var $0 = 0;
  $0 = assembly_lib_document_Window_constructor();
  $lib_rt_pure___release(assembly_index_window);
  assembly_index_window = $0;
  return +(0.0);
 }
 
 function assembly_index_show() {
  assembly_index__init();
  return +(0.0);
 }
 
 function assembly_index___alertEventListener($0, $1) {
  $0 = +$0;
  $1 = $1 | 0;
  return +(0.0);
 }
 
 function assembly_index___alertTimeout($0) {
  $0 = +$0;
  return +(0.0);
 }
 
 function $lib_rt_pure_markGray($0) {
  var $1 = 0;
  $1 = HEAP32[($0 + 4 | 0) >> 2];
  if (($1 & 1879048192 | 0 | 0) != (268435456 | 0)) {
   HEAP32[($0 + 4 | 0) >> 2] = $1 & -1879048193 | 0 | 268435456 | 0;
   $lib_rt___visit_members($0 + 16 | 0, 2);
  }
 }
 
 function $lib_rt_pure_scanBlack($0) {
  HEAP32[($0 + 4 | 0) >> 2] = HEAP32[($0 + 4 | 0) >> 2] & -1879048193 | 0;
  $lib_rt___visit_members($0 + 16 | 0, 4);
 }
 
 function $lib_rt_pure_scan($0) {
  var $1 = 0;
  $1 = HEAP32[($0 + 4 | 0) >> 2];
  if (($1 & 1879048192 | 0 | 0) == (268435456 | 0)) {
   if (($1 & 268435455 | 0) >>> 0 > 0 >>> 0) {
    $lib_rt_pure_scanBlack($0)
   } else {
    HEAP32[($0 + 4 | 0) >> 2] = $1 & -1879048193 | 0 | 536870912 | 0;
    $lib_rt___visit_members($0 + 16 | 0, 3);
   }
  }
 }
 
 function $lib_rt_pure_collectWhite($0) {
  var $1 = 0;
  $1 = HEAP32[($0 + 4 | 0) >> 2];
  if (($1 & 1879048192 | 0 | 0) == (536870912 | 0) ? !($1 & -2147483648 | 0) : 0) {
   HEAP32[($0 + 4 | 0) >> 2] = $1 & -1879048193 | 0;
   $lib_rt___visit_members($0 + 16 | 0, 5);
   $lib_rt_tlsf_freeBlock($lib_rt_tlsf_ROOT, $0);
  }
 }
 
 function $lib_rt_pure___collect() {
  var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  $4 = $lib_rt_pure_ROOTS;
  $2 = $4;
  $5 = $2;
  $0 = $lib_rt_pure_CUR;
  for_loop_0 : while (1) {
   if ($5 >>> 0 < $0 >>> 0) {
    $1 = HEAP32[$5 >> 2];
    $3 = HEAP32[($1 + 4 | 0) >> 2];
    if (($3 & 1879048192 | 0 | 0) == (805306368 | 0) ? ($3 & 268435455 | 0) >>> 0 > 0 >>> 0 : 0) {
     $lib_rt_pure_markGray($1);
     HEAP32[$2 >> 2] = $1;
     $2 = $2 + 4 | 0;
    } else {
     if ($3 & 1879048192 | 0 ? 0 : !($3 & 268435455 | 0)) {
      $lib_rt_tlsf_freeBlock($lib_rt_tlsf_ROOT, $1)
     } else {
      HEAP32[($1 + 4 | 0) >> 2] = $3 & 2147483647 | 0
     }
    }
    $5 = $5 + 4 | 0;
    continue for_loop_0;
   }
   break for_loop_0;
  };
  $lib_rt_pure_CUR = $2;
  $0 = $4;
  for_loop_1 : while (1) {
   if ($0 >>> 0 < $2 >>> 0) {
    $lib_rt_pure_scan(HEAP32[$0 >> 2]);
    $0 = $0 + 4 | 0;
    continue for_loop_1;
   }
   break for_loop_1;
  };
  $0 = $4;
  for_loop_2 : while (1) {
   if ($0 >>> 0 < $2 >>> 0) {
    $1 = HEAP32[$0 >> 2];
    $3 = HEAP32[($1 + 4 | 0) >> 2] & 2147483647 | 0;
    HEAP32[($1 + 4 | 0) >> 2] = $3;
    $lib_rt_pure_collectWhite($1);
    $0 = $0 + 4 | 0;
    continue for_loop_2;
   }
   break for_loop_2;
  };
  $lib_rt_pure_CUR = $4;
 }
 
 function $lib_rt_pure_decrement($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0;
  $2 = HEAP32[($0 + 4 | 0) >> 2];
  $1 = $2 & 268435455 | 0;
  if (HEAP32[$0 >> 2] & 1 | 0) {
   $lib_builtins_abort(0 | 0, 1152 | 0, 122 | 0, 14 | 0);
   abort();
  }
  if (($1 | 0) == (1 | 0)) {
   $lib_rt___visit_members($0 + 16 | 0, 1);
   if ($2 & -2147483648 | 0) {
    HEAP32[($0 + 4 | 0) >> 2] = -2147483648
   } else {
    $lib_rt_tlsf_freeBlock($lib_rt_tlsf_ROOT, $0)
   }
  } else {
   if ($1 >>> 0 <= 0 >>> 0) {
    $lib_builtins_abort(0 | 0, 1152 | 0, 136 | 0, 16 | 0);
    abort();
   }
   $3 = HEAP32[($0 + 8 | 0) >> 2];
   if ($3 >>> 0 > HEAP32[1920 >> 2] >>> 0) {
    $lib_builtins_abort(1824 | 0, 1888 | 0, 22 | 0, 28 | 0);
    abort();
   }
   if (HEAP32[(($3 << 3 | 0) + 1924 | 0) >> 2] & 32 | 0) {
    HEAP32[($0 + 4 | 0) >> 2] = $1 - 1 | 0 | ($2 & -268435456 | 0) | 0
   } else {
    HEAP32[($0 + 4 | 0) >> 2] = $1 - 1 | 0 | -1342177280 | 0;
    if (!($2 & -2147483648 | 0)) {
     $1 = $lib_rt_pure_CUR;
     if ($1 >>> 0 >= $lib_rt_pure_END >>> 0) {
      $1 = $lib_rt_pure_ROOTS;
      $3 = $lib_rt_pure_CUR - $1 | 0;
      $2 = $3 << 1 | 0;
      $4 = $2 >>> 0 > 256 >>> 0;
      $4 = $4 ? $2 : 256;
      $2 = $lib_rt_tlsf___alloc($4, 0);
      $lib_memory_memory_copy($2, $1, $3);
      if ($1) {
       $lib_rt_tlsf_freeBlock($lib_rt_tlsf_maybeInitialize(), $lib_rt_tlsf_checkUsedBlock($1))
      }
      $lib_rt_pure_ROOTS = $2;
      $lib_rt_pure_CUR = $2 + $3 | 0;
      $lib_rt_pure_END = $2 + $4 | 0;
      $1 = $lib_rt_pure_CUR;
     }
     HEAP32[$1 >> 2] = $0;
     $lib_rt_pure_CUR = $1 + 4 | 0;
    }
   }
  }
 }
 
 function $lib_rt_pure___visit($0, $1) {
  if ($0 >>> 0 < 2076 >>> 0) {
   return
  }
  $0 = $0 - 16 | 0;
  break_0 : {
   case5_0 : {
    switch ($1 - 1 | 0 | 0) {
    case 0:
     $lib_rt_pure_decrement($0);
     break break_0;
    case 1:
     if ((HEAP32[($0 + 4 | 0) >> 2] & 268435455 | 0) >>> 0 <= 0 >>> 0) {
      $lib_builtins_abort(0 | 0, 1152 | 0, 79 | 0, 20 | 0);
      abort();
     }
     HEAP32[($0 + 4 | 0) >> 2] = HEAP32[($0 + 4 | 0) >> 2] - 1 | 0;
     $lib_rt_pure_markGray($0);
     break break_0;
    case 2:
     $lib_rt_pure_scan($0);
     break break_0;
    case 3:
     $1 = HEAP32[($0 + 4 | 0) >> 2];
     if (($1 & -268435456 | 0 | 0) != (($1 + 1 | 0) & -268435456 | 0 | 0)) {
      $lib_builtins_abort(0 | 0, 1152 | 0, 90 | 0, 9 | 0);
      abort();
     }
     HEAP32[($0 + 4 | 0) >> 2] = $1 + 1 | 0;
     if ($1 & 1879048192 | 0) {
      $lib_rt_pure_scanBlack($0)
     }
     break break_0;
    case 4:
     $lib_rt_pure_collectWhite($0);
     break break_0;
    default:
     break case5_0;
    };
   }
   $lib_builtins_abort(0 | 0, 1152 | 0, 101 | 0, 27 | 0);
   abort();
  }
 }
 
 function $lib_rt___visit_members($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0;
  folding_inner1 : {
   folding_inner0 : {
    switch (HEAP32[($0 - 8 | 0) >> 2] | 0) {
    case 0:
    case 1:
    case 3:
     return;
    case 2:
    case 7:
    case 15:
    case 16:
     $0 = HEAP32[$0 >> 2];
     if ($0) {
      $lib_rt_pure___visit($0, $1)
     }
     return;
    case 4:
    case 10:
    case 11:
    case 12:
     $2 = HEAP32[$0 >> 2];
     if ($2) {
      $lib_rt_pure___visit($2, $1)
     }
     $2 = HEAP32[($0 + 4 | 0) >> 2];
     if ($2) {
      $lib_rt_pure___visit($2, $1)
     }
     $2 = HEAP32[($0 + 16 | 0) >> 2];
     if ($2) {
      $lib_rt_pure___visit($2, $1)
     }
     $0 = HEAP32[($0 + 20 | 0) >> 2];
     if ($0) {
      $lib_rt_pure___visit($0, $1)
     }
     return;
    case 5:
     $2 = HEAP32[$0 >> 2];
     if ($2) {
      $lib_rt_pure___visit($2, $1)
     }
     $0 = HEAP32[($0 + 4 | 0) >> 2];
     if ($0) {
      $lib_rt_pure___visit($0, $1)
     }
     return;
    case 9:
     $2 = HEAP32[$0 >> 2];
     if ($2) {
      $lib_rt_pure___visit($2, $1)
     }
     $2 = HEAP32[($0 + 16 | 0) >> 2];
     if ($2) {
      $lib_rt_pure___visit($2, $1)
     }
     $2 = HEAP32[($0 + 20 | 0) >> 2];
     if ($2) {
      $lib_rt_pure___visit($2, $1)
     }
     $0 = HEAP32[($0 + 24 | 0) >> 2];
     if ($0) {
      $lib_rt_pure___visit($0, $1)
     }
     return;
    case 17:
     $2 = HEAP32[$0 >> 2];
     if ($2) {
      $lib_rt_pure___visit($2, $1)
     }
     $2 = HEAP32[($0 + 4 | 0) >> 2];
     if ($2) {
      $lib_rt_pure___visit($2, $1)
     }
     break folding_inner1;
    case 18:
     $lib_rt_pure___visit(HEAP32[$0 >> 2], $1);
     return;
    default:
     abort();
    case 6:
    case 8:
    case 14:
     break folding_inner0;
    case 13:
     break folding_inner1;
    };
   }
   $2 = HEAP32[($0 + 4 | 0) >> 2];
   $4 = $2 + (HEAP32[($0 + 12 | 0) >> 2] << 2 | 0) | 0;
   while_continue_0 : while (1) {
    if ($2 >>> 0 < $4 >>> 0) {
     $3 = HEAP32[$2 >> 2];
     if ($3) {
      $lib_rt_pure___visit($3, $1)
     }
     $2 = $2 + 4 | 0;
     continue while_continue_0;
    }
    break while_continue_0;
   };
   $lib_rt_pure___visit(HEAP32[$0 >> 2], $1);
   return;
  }
  $0 = HEAP32[($0 + 8 | 0) >> 2];
  if ($0) {
   $lib_rt_pure___visit($0, $1)
  }
 }
 
 function __wasm_ctz_i32($0) {
  if ($0) {
   return 31 - Math_clz32(($0 + -1 | 0) ^ $0 | 0) | 0
  }
  return 32;
 }
 
 var FUNCTION_TABLE = [];
 function __wasm_memory_size() {
  return buffer.byteLength / 65536 | 0;
 }
 
 function __wasm_memory_grow(pagesToAdd) {
  pagesToAdd = pagesToAdd | 0;
  var oldPages = __wasm_memory_size() | 0;
  var newPages = oldPages + pagesToAdd | 0;
  if ((oldPages < newPages) && (newPages < 65536)) {
   var newBuffer = new ArrayBuffer(Math_imul(newPages, 65536));
   var newHEAP8 = new global.Int8Array(newBuffer);
   newHEAP8.set(HEAP8);
   HEAP8 = newHEAP8;
   HEAP8 = new global.Int8Array(newBuffer);
   HEAP16 = new global.Int16Array(newBuffer);
   HEAP32 = new global.Int32Array(newBuffer);
   HEAPU8 = new global.Uint8Array(newBuffer);
   HEAPU16 = new global.Uint16Array(newBuffer);
   HEAPU32 = new global.Uint32Array(newBuffer);
   HEAPF32 = new global.Float32Array(newBuffer);
   HEAPF64 = new global.Float64Array(newBuffer);
   buffer = newBuffer;
  }
  return oldPages;
 }
 
 return {
  "memory": Object.create(Object.prototype, {
   "grow": {
    "value": __wasm_memory_grow
   }, 
   "buffer": {
    "get": function () {
     return buffer;
    }
    
   }
  }), 
  "__alloc": $lib_rt_tlsf___alloc, 
  "__retain": $lib_rt_pure___retain, 
  "__release": $lib_rt_pure___release, 
  "__collect": $lib_rt_pure___collect, 
  "show": assembly_index_show, 
  "_init": assembly_index__init, 
  "__alertEventListener": assembly_index___alertEventListener, 
  "__alertTimeout": assembly_index___alertTimeout
 };
}

var memasmFunc = new ArrayBuffer(65536);
var bufferView = new Uint8Array(memasmFunc);
for (var base64ReverseLookup = new Uint8Array(123/*'z'+1*/), i = 25; i >= 0; --i) {
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
  base64DecodeToExistingUint8Array(bufferView, 1024, "HgAAAAEAAAABAAAAHgAAAH4AbABpAGIALwByAHQALwB0AGwAcwBmAC4AdABz");
base64DecodeToExistingUint8Array(bufferView, 1072, "KAAAAAEAAAABAAAAKAAAAGEAbABsAG8AYwBhAHQAaQBvAG4AIAB0AG8AbwAgAGwAYQByAGcAZQ==");
base64DecodeToExistingUint8Array(bufferView, 1136, "HgAAAAEAAAABAAAAHgAAAH4AbABpAGIALwByAHQALwBwAHUAcgBlAC4AdABz");
base64DecodeToExistingUint8Array(bufferView, 1188, "AQ==");
base64DecodeToExistingUint8Array(bufferView, 1200, "EAAAAAEAAAAIAAAAEAAAALAEAACwBA==");
base64DecodeToExistingUint8Array(bufferView, 1232, "HAAAAAEAAAABAAAAHAAAAGMAbwBuAHMAdAByAHUAYwB0AG8AcgAgADEAMQ==");
base64DecodeToExistingUint8Array(bufferView, 1280, "LAAAAAEAAAABAAAALAAAAGUAbABlAG0AZQBuAHQAcwAgAGMAbwBuAHMAdAByAHUAYwB0AG8AcgAgADE=");
base64DecodeToExistingUint8Array(bufferView, 1348, "AQ==");
base64DecodeToExistingUint8Array(bufferView, 1360, "LAAAAAEAAAABAAAALAAAAGUAbABlAG0AZQBuAHQAcwAgAGMAbwBuAHMAdAByAHUAYwB0AG8AcgAgADI=");
base64DecodeToExistingUint8Array(bufferView, 1424, "LAAAAAEAAAABAAAALAAAAGUAbABlAG0AZQBuAHQAcwAgAGMAbwBuAHMAdAByAHUAYwB0AG8AcgAgADM=");
base64DecodeToExistingUint8Array(bufferView, 1488, "HAAAAAEAAAABAAAAHAAAAEkAbgB2AGEAbABpAGQAIABsAGUAbgBnAHQAaA==");
base64DecodeToExistingUint8Array(bufferView, 1536, "GgAAAAEAAAABAAAAGgAAAH4AbABpAGIALwBhAHIAcgBhAHkALgB0AHM=");
base64DecodeToExistingUint8Array(bufferView, 1584, "CAAAAAEAAAABAAAACAAAAGgAZQBhAGQ=");
base64DecodeToExistingUint8Array(bufferView, 1616, "HAAAAAEAAAABAAAAHAAAAGMAbwBuAHMAdAByAHUAYwB0AG8AcgAgADIAMg==");
base64DecodeToExistingUint8Array(bufferView, 1664, "CAAAAAEAAAABAAAACAAAAGIAbwBkAHk=");
base64DecodeToExistingUint8Array(bufferView, 1696, "HAAAAAEAAAABAAAAHAAAAGMAbwBuAHMAdAByAHUAYwB0AG8AcgAgADMAMw==");
base64DecodeToExistingUint8Array(bufferView, 1744, "HAAAAAEAAAABAAAAHAAAAGMAbwBuAHMAdAByAHUAYwB0AG8AcgAgADQANA==");
base64DecodeToExistingUint8Array(bufferView, 1796, "AQ==");
base64DecodeToExistingUint8Array(bufferView, 1808, "JAAAAAEAAAABAAAAJAAAAEkAbgBkAGUAeAAgAG8AdQB0ACAAbwBmACAAcgBhAG4AZwBl");
base64DecodeToExistingUint8Array(bufferView, 1872, "FAAAAAEAAAABAAAAFAAAAH4AbABpAGIALwByAHQALgB0AHM=");
base64DecodeToExistingUint8Array(bufferView, 1920, "EwAAACAAAAAAAAAAIAAAAAAAAAAgAAAAAAAAACA=");
base64DecodeToExistingUint8Array(bufferView, 1964, "IAAAAAAAAAAiQQ==");
base64DecodeToExistingUint8Array(bufferView, 1988, "IkEAAAAAAAAgAAAAAAAAACAAAAAAAAAAIAAAAAQAAAAgAAAABAAAACAAAAAAAAAAIkEAAAAAAAAgAAAAAAAAACAAAAAAAAAAIAAAAAAAAAAiCQ==");
var retasmFunc = asmFunc({Math,Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,NaN,Infinity}, {abort:function() { throw new Error('abort'); },abort,consoleLog,createElement,getHead,getBody,getDocument,nodeName,getWindow},memasmFunc);
export var memory = retasmFunc.memory;
export var __alloc = retasmFunc.__alloc;
export var __retain = retasmFunc.__retain;
export var __release = retasmFunc.__release;
export var __collect = retasmFunc.__collect;
export var show = retasmFunc.show;
export var _init = retasmFunc._init;
export var __alertEventListener = retasmFunc.__alertEventListener;
export var __alertTimeout = retasmFunc.__alertTimeout;
