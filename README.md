<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# inheritedPropertyDescriptors

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return an object's inherited [property descriptors][@stdlib/utils/property-descriptors].

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-inherited-property-descriptors
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var inheritedPropertyDescriptors = require( '@stdlib/utils-inherited-property-descriptors' );
```

#### inheritedPropertyDescriptors( obj\[, level] )

Returns an object's inherited [property descriptors][@stdlib/utils/property-descriptors].

<!-- eslint-disable id-length -->

```javascript
function Foo() {
    this.a = 'b';
    return this;
}

Foo.prototype.beep = 'boop';

var f = new Foo();
var desc = inheritedPropertyDescriptors( f );
// returns { 'beep': {...}, ... }
```

By default, the function walks an object's entire prototype chain. To limit the inheritance level, provide a `level` argument.

<!-- eslint-disable id-length -->

```javascript
var inherit = require( '@stdlib/utils-inherit' );

function Bar() {
    return this;
}

Bar.prototype.boop = 'beep';

function Foo() {
    Bar.call( this );
    this.a = 'b';
    return this;
}

inherit( Foo, Bar );
Foo.prototype.beep = 'boop';

var f = new Foo();
var desc = inheritedPropertyDescriptors( f, 1 );
// returns { 'beep': {...}, ... }
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In contrast to the built-in `Object.getOwnPropertyDescriptors()`, if provided `null` or `undefined`, the function returns an empty `object`, rather than throwing an error.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```javascript
var defineProperty = require( '@stdlib/utils-define-property' );
var inheritedPropertyDescriptors = require( '@stdlib/utils-inherited-property-descriptors' );

function Foo() {
    this.beep = 'boop';
    this.a = {
        'b': 'c'
    };
    defineProperty( this, 'baz', {
        'value': 'qux',
        'configurable': true,
        'writable': true,
        'enumerable': false
    });
    return this;
}

Foo.prototype.foo = [ 'bar' ];

var obj = new Foo();
var desc = inheritedPropertyDescriptors( obj );

console.log( desc );
// => { 'foo': {...}, ... }
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-property-descriptors`][@stdlib/utils/property-descriptors]</span><span class="delimiter">: </span><span class="description">return an object's own property descriptors.</span>
-   <span class="package-name">[`@stdlib/utils-property-descriptors-in`][@stdlib/utils/property-descriptors-in]</span><span class="delimiter">: </span><span class="description">return an object's own and inherited property descriptors.</span>
-   <span class="package-name">[`@stdlib/utils-inherited-keys`][@stdlib/utils/inherited-keys]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils-inherited-property-names`][@stdlib/utils/inherited-property-names]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited enumerable and non-enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils-inherited-property-symbols`][@stdlib/utils/inherited-property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited symbol properties.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-inherited-property-descriptors.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-inherited-property-descriptors

[test-image]: https://github.com/stdlib-js/utils-inherited-property-descriptors/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-inherited-property-descriptors/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-inherited-property-descriptors/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-inherited-property-descriptors?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-inherited-property-descriptors.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-inherited-property-descriptors/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-inherited-property-descriptors/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-inherited-property-descriptors/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-inherited-property-descriptors/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-inherited-property-descriptors/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-inherited-property-descriptors/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-inherited-property-descriptors/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-inherited-property-descriptors/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-inherited-property-descriptors/main/LICENSE

[@stdlib/utils/property-descriptors]: https://github.com/stdlib-js/utils-property-descriptors

<!-- <related-links> -->

[@stdlib/utils/property-descriptors-in]: https://github.com/stdlib-js/utils-property-descriptors-in

[@stdlib/utils/inherited-keys]: https://github.com/stdlib-js/utils-inherited-keys

[@stdlib/utils/inherited-property-names]: https://github.com/stdlib-js/utils-inherited-property-names

[@stdlib/utils/inherited-property-symbols]: https://github.com/stdlib-js/utils-inherited-property-symbols

<!-- </related-links> -->

</section>

<!-- /.links -->
