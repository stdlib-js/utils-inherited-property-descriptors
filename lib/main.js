/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var MAX_SAFE_INTEGER = require( '@stdlib/constants-float64-max-safe-integer' );
var isPositiveInteger = require( '@stdlib/assert-is-positive-integer' ).isPrimitive;
var getOwnPropertyDescriptors = require( '@stdlib/utils-property-descriptors' );
var getOwnPropertySymbols = require( '@stdlib/utils-property-symbols' );
var getPrototypeOf = require( '@stdlib/utils-get-prototype-of' );
var objectKeys = require( '@stdlib/utils-keys' );
var defineProperty = require( '@stdlib/utils-define-property' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Returns an object's inherited property descriptors.
*
* ## Notes
*
* -   In contrast to the built-in `Object.getOwnPropertyDescriptors()`, this function returns an empty object if provided `undefined` or `null`, rather than throwing an error.
*
* @param {*} value - input object
* @param {PositiveInteger} [level] - inheritance level
* @throws {TypeError} second argument must be a positive integer
* @returns {Object} inherited property descriptors
*
* @example
* var desc = inheritedPropertyDescriptors( [] );
* // returns {...}
*/
function inheritedPropertyDescriptors( value, level ) { // eslint-disable-line id-length
	var desc;
	var keys;
	var obj;
	var tmp;
	var N;
	var n;
	var i;

	if ( arguments.length > 1 ) {
		if ( !isPositiveInteger( level ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must be a positive integer. Value: `%s`.', level ) );
		}
		N = level;
	} else {
		N = MAX_SAFE_INTEGER;
	}
	if ( value === null || value === void 0 ) {
		return {};
	}
	// Get the value's prototype:
	obj = getPrototypeOf( value );

	// Walk the prototype chain collecting all property descriptors...
	desc = {};
	n = 1;
	while ( obj && n <= N ) {
		tmp = getOwnPropertyDescriptors( obj );
		keys = objectKeys( tmp );
		for ( i = 0; i < keys.length; i++ ) {
			// The first encountered property descriptor for a property name always takes precedence...
			if ( !hasOwnProp( desc, keys[ i ] ) ) {
				// The following is equivalent to `desc[ keys[i] ] = {...}`, but accounts for the possibility of a "poisoned" `Object` prototype (i.e., an `Object.prototype` having a property with a setter which throws).
				defineProperty( desc, keys[ i ], {
					'configurable': true,
					'enumerable': true,
					'writable': true,
					'value': tmp[ keys[ i ] ]
				});
			}
		}
		keys = getOwnPropertySymbols( tmp );
		for ( i = 0; i < keys.length; i++ ) {
			// The first encountered property descriptor for a symbol property always takes precedence...
			if ( !hasOwnProp( desc, keys[ i ] ) ) {
				// The following is equivalent to `desc[ keys[i] ] = {...}`, but accounts for the possibility of a "poisoned" `Object` prototype (i.e., an `Object.prototype` having a property with a setter which throws).
				defineProperty( desc, keys[ i ], {
					'configurable': true,
					'enumerable': true,
					'writable': true,
					'value': tmp[ keys[ i ] ]
				});
			}
		}
		obj = getPrototypeOf( obj );
		n += 1;
	}
	return desc;
}


// EXPORTS //

module.exports = inheritedPropertyDescriptors;
