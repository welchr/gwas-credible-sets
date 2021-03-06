(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["credibleSets"] = factory();
	else
		root["credibleSets"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/** @module stats */

/**
 * The inverse of the CDF. May be used to determine the z-score for the desired quantile
 *
 * This is an implementation of algorithm AS241
 *     https://www.jstor.org/stable/2347330
 * @param {number} p The desired quantile of the normal distribution
 * @returns {number}
 */
function ninv(p) {
    var SPLIT1 = 0.425;
    var SPLIT2 = 5.0;
    var CONST1 = 0.180625;
    var CONST2 = 1.6;
    var a = [3.3871328727963666080E0, 1.3314166789178437745E2, 1.9715909503065514427E3, 1.3731693765509461125E4, 4.5921953931549871457E4, 6.7265770927008700853E4, 3.3430575583588128105E4, 2.5090809287301226727E3];

    var b = [4.2313330701600911252E1, 6.8718700749205790830E2, 5.3941960214247511077E3, 2.1213794301586595867E4, 3.9307895800092710610E4, 2.8729085735721942674E4, 5.2264952788528545610E3];

    var c = [1.42343711074968357734E0, 4.63033784615654529590E0, 5.76949722146069140550E0, 3.64784832476320460504E0, 1.27045825245236838258E0, 2.41780725177450611770E-1, 2.27238449892691845833E-2, 7.74545014278341407640E-4];

    var d = [2.05319162663775882187E0, 1.67638483018380384940E0, 6.89767334985100004550E-1, 1.48103976427480074590E-1, 1.51986665636164571966E-2, 5.47593808499534494600E-4, 1.05075007164441684324E-9];

    var e = [6.65790464350110377720E0, 5.46378491116411436990E0, 1.78482653991729133580E0, 2.96560571828504891230E-1, 2.65321895265761230930E-2, 1.24266094738807843860E-3, 2.71155556874348757815E-5, 2.01033439929228813265E-7];

    var f = [5.99832206555887937690E-1, 1.36929880922735805310E-1, 1.48753612908506148525E-2, 7.86869131145613259100E-4, 1.84631831751005468180E-5, 1.42151175831644588870E-7, 2.04426310338993978564E-15];

    var q = p - 0.5;
    var r = void 0,
        x = void 0;

    if (Math.abs(q) < SPLIT1) {
        r = CONST1 - q * q;
        return q * (((((((a[7] * r + a[6]) * r + a[5]) * r + a[4]) * r + a[3]) * r + a[2]) * r + a[1]) * r + a[0]) / (((((((b[6] * r + b[5]) * r + b[4]) * r + b[3]) * r + b[2]) * r + b[1]) * r + b[0]) * r + 1.0);
    } else {
        if (q < 0) {
            r = p;
        } else {
            r = 1.0 - p;
        }

        if (r > 0) {
            r = Math.sqrt(-Math.log(r));
            if (r <= SPLIT2) {
                r -= CONST2;
                x = (((((((c[7] * r + c[6]) * r + c[5]) * r + c[4]) * r + c[3]) * r + c[2]) * r + c[1]) * r + c[0]) / (((((((d[6] * r + d[5]) * r + d[4]) * r + d[3]) * r + d[2]) * r + d[1]) * r + d[0]) * r + 1.0);
            } else {
                r -= SPLIT2;
                x = (((((((e[7] * r + e[6]) * r + e[5]) * r + e[4]) * r + e[3]) * r + e[2]) * r + e[1]) * r + e[0]) / (((((((f[6] * r + f[5]) * r + f[4]) * r + f[3]) * r + f[2]) * r + f[1]) * r + f[0]) * r + 1.0);
            }
        } else {
            throw 'Not implemented';
        }

        if (q < 0) {
            x = -x;
        }

        return x;
    }
}

// Hack: A single global object representing the contents of the module
var rollup = { ninv: ninv };

exports.ninv = ninv;
exports.default = rollup;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.marking = exports.stats = exports.scoring = undefined;

var _stats = __webpack_require__(0);

var _stats2 = _interopRequireDefault(_stats);

var _scoring = __webpack_require__(2);

var _scoring2 = _interopRequireDefault(_scoring);

var _marking = __webpack_require__(3);

var _marking2 = _interopRequireDefault(_marking);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// HACK: Because a primary audience is targets that do not have any module system, we will expose submodules from the
//  top-level module. (by representing each sub-module as a "rollup object" that exposes its internal methods)
// Then, submodules may be accessed as `window.credibleSets.stats`, etc

// If you are using a real module system, please import from sub-modules directly- these global helpers are a bit of
//  a hack and may go away in the future
// TODO: Revisit, because exporting an aggregate this way might lose some of the benefits of real modules down the line
exports.scoring = _scoring2.default;
exports.stats = _stats2.default;
exports.marking = _marking2.default; /** @module credible-sets */

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports._nlogp_to_z2 = exports.minKodos = undefined;

var _stats = __webpack_require__(0);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /** @module scoring */

/**
 * Convert a -logp value to Z^2
 *
 * Very large -logp (very small p values) cannot be converted to z by a direct method. These values
 *  are handled using an approximation: for small p-values, Z_i^2 has a linear relationship with -log10 p-value.
 *
 *  The cutoff on pvalues is ~ 10^-325
 *
 * @param nlogp
 * @return {number}
 * @private
 */
function _nlogp_to_z2(nlogp) {
    var p = Math.pow(10, -nlogp);
    if (nlogp < 300) {
        // Use exact method when within the range of 64-bit floats (approx 10^-325)
        return Math.pow((0, _stats.ninv)(p / 2), 2);
    } else {
        // For very small p-values, -log10(pval) and z^2 have a linear relationship
        // This avoids issues with needing higher precision floats when doing the calculation
        // with ninv
        return 4.59884133027944 * nlogp - 5.88085867031722;
    }
}

/**
 * Calculate a probability statistic exp(Z^2) based on pvalues
 * @param {Number[]} nlogpvals An array of -log(pvalue) entries
 * @return {Number[]} An array of exp(Z^2) statistics
 */
function minKodos(nlogpvals) {
    if (!Array.isArray(nlogpvals) || !nlogpvals.length) {
        // TODO: Custom exception types?
        throw 'Must provide a non-empty array of pvalues';
    }

    // 1. Convert the pvalues to Z^2 values
    var z2 = nlogpvals.map(function (item) {
        return _nlogp_to_z2(item);
    });

    // 2. Calculate exp(Z^2), using a truncation approach that prevents exp(Z^2) from overrunning the max float64 value
    //   (when Z^2 > 709 or so). As safeguard, we could (but currently don't) check that exp(Z^2) is not larger
    //   than infinity.
    var cap = Math.max.apply(Math, _toConsumableArray(z2)) - 708; // The real cap is ~709; this should prevent any value from exceeding it
    if (cap > 0) {
        z2 = z2.map(function (item) {
            return item - cap;
        });
    }
    return z2.map(function (item) {
        return Math.exp(item);
    });
}

var rollup = { minKodos: minKodos };
exports.default = rollup;
exports.minKodos = minKodos;

// Export additional symbols for unit testing only (not part of public interface for the module)

exports._nlogp_to_z2 = _nlogp_to_z2;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/** @module marking */

/**
 * Given a set of probabilities, determine which contribute most to a sum, and are thus members of the credible set.
 *   Return an array similar to `statistics`, but with non-set-member scores set to 0.
  * @param {Number[]} statistics Calculated statistics used to rank the credible set
 * @param {Number} [cutoff=0.95] Keep taking items until we have accounted for >= this fraction of the total probability
 * @return {Number[]} An array of numbers representing scores for items in the set (and zero for non-members)
 *  This array should be the same length as the provided statistic array
 */
function findCredibleSet(statistics) {
    var cutoff = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.95;

    // Type checking
    if (!Array.isArray(statistics) || !statistics.length) {
        throw 'Statistics must be a non-empty array';
    }
    if (!(typeof cutoff === 'number') || cutoff < 0 || cutoff > 1.0 || Number.isNaN(cutoff)) {
        throw 'Cutoff must be a number between 0 and 1';
    }

    var statsTotal = statistics.reduce(function (a, b) {
        return a + b;
    }, 0);
    if (statsTotal <= 0) {
        throw 'Sum of provided statistics must be > 0';
    }

    // Sort the statistics by largest first, while preserving a map to original item order
    var sortedStatsMap = statistics.map(function (item, index) {
        return [item, index];
    }).sort(function (a, b) {
        return b[0] - a[0];
    });

    var runningTotal = 0;
    var result = new Array(sortedStatsMap.length).fill(0);
    for (var i = 0; i < sortedStatsMap.length; i++) {
        var _sortedStatsMap$i = _slicedToArray(sortedStatsMap[i], 2),
            value = _sortedStatsMap$i[0],
            index = _sortedStatsMap$i[1];

        if (runningTotal < cutoff) {
            var score = value / statsTotal;
            result[index] = score;
            runningTotal += score;
        } else {
            break;
        }
    }
    return result;
}

/**
 * Analyze a set of probabilities and return booleans indicating which items contribute to the credible set
 *
 * This is a helper method for, eg, visualizing the members of the credible set by raw membership
 *
 * @param {Number[]} statistics Calculated statistics used to rank the credible set
 * @param {Number} [cutoff=0.95] Keep taking items until we have accounted for >= this fraction of the total probability
 * @return {Number[]} An array of booleans identifying whether or not each item is in the credible set
 *  This array should be the same length as the provided statistic array
 */
function markCredibleSetBoolean(statistics) {
    var cutoff = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.95;

    var setMembers = findCredibleSet(statistics, cutoff);
    return setMembers.map(function (item) {
        return !!item;
    });
}

/**
 * Analyze a set of probabilities and return a fraction saying how much each item contributes to the credible set.
 *   For example, if a single item accounts for 96% of total probabilities, then for the 95% credible set,
 *   that item would be scaled to "1.0" (because it alone represents the entire credible set and then some)
 *
 * This is a helper method for, eg, visualizing the most relative significance of contributions to the credible set
 *
 * @param {Number[]} statistics Calculated statistics used to rank the credible set
 * @param {Number} [cutoff=0.95] Keep taking items until we have accounted for >= this fraction of the total probability
 * @return {Number[]} An array of numbers representing the fraction of credible set probabilities this item accounts for
 *  This array should be the same length as the provided statistic array
 */
function markCredibleSetScaled(statistics) {
    var cutoff = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.95;

    var setMemberScores = findCredibleSet(statistics, cutoff);
    var sumMarkers = setMemberScores.reduce(function (a, b) {
        return a + b;
    }, 0);
    return setMemberScores.map(function (item) {
        return item / sumMarkers;
    });
}

var rollup = { findCredibleSet: findCredibleSet, markCredibleSetBoolean: markCredibleSetBoolean, markCredibleSetScaled: markCredibleSetScaled };
exports.default = rollup;
exports.findCredibleSet = findCredibleSet;
exports.markCredibleSetBoolean = markCredibleSetBoolean;
exports.markCredibleSetScaled = markCredibleSetScaled;

/***/ })
/******/ ]);
});
//# sourceMappingURL=credible-sets.js.map