# Radix Converter

This small tool converts numbers (integers or fractions) in radix 2 to 36 with arbitrary precision.

Well...we actually only accept radix from 2-36. This design matches the specs of Javascript's `numObj.toString([radix])` or `parseInt(string, radix)`. Intuitively we have `a` mapped to `10`, `b` mapped to `11`, and all the way down `z` mapped to `35`. But what's cooler is that we are not only handling `Number` type inputs, which are limited to 64 bits, but also allowing arbitrarily big numbers including fractions.

[JSBI](https://github.com/GoogleChromeLabs/jsbi) is used to ensure cross browser compatibility.

The algorithm is in the `src/algo.js` file. It's a straightforward algorithm if you use a specific number as an example and go through the code. Currently results are recomputed for all radixes every time the user changes the precision or the value in any radix. We can also put current results in a buffer and only recompute the added / deleted digits. I imagine there would be many ways to implement it which all seem a bit messy to me. If you have ideas to improve this project, feel free to fork it😊

## To Do

- [ ] Testing
- [x] Prevent numbers from overflowing
- [x] Some buggy behaviors for saving/storing caret
- [x] Display other radixes
- [x] Allow to set precision

## References

- [Big integer benchmarks](https://peterolson.github.io/BigInteger.js/benchmark/)
- [The simple math behind decimal-binary conversion algorithms](https://indepth.dev/the-simple-math-behind-decimal-binary-conversion-algorithms/)
- [Exploring Binary](https://www.exploringbinary.com/)
