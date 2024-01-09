## Base 10 JS
Just a little background:
- I tend to try coding *experiments* over creating viable products when coding for fun. I know this may be easily discounted on various levels, but know that this is in fact a learning experiment; I do and will always consider myself a n00b.
- I do not know anything about how computer hardware *works*, even though I can put together a bad-ass desktop. I get what each component is used for, I get that they have different speeds, etc. But I am a web developer and have never created firmware.
- I do know that there's no current mainstream way around binary, and that pretty much everything else is experimental or expensive. Bite me. But based on a tiny bit of research on a confusing internet I am led to believe that the *least* experimental technology would be either trinary or quantum.
- I know that Node.js is a binary, that Unicode is a character set, and that this is not how it *works*. I get that. Please. Please don't.
- I do know that there is a lot I don't know about this.
- Base 10 code is 10 times slower than binary without the concepts in this repo... because each digit would require a binary on/off signaler (?) or timer or something. Base 10 / Base 2 = 5, 5 * Binary = 10. I can't think about this too much or I get confused. 50% chance I have that math wrong. It's either 5, 10, or 20 times slower - without this repo.
- This is a prototype to explain a hypothesis, I just happened to code it up in Node.
- I know binary doesn't have spaces. Purely cosmetic.

## Run
`git clone git@github.com:dharkflower/base-10.git`

`node index.js`

## Streams, Bro?
Couldn't figure it out.

## What be the point of this?
The hypothesis is that there's some sort of beauty in a base 10 processor. Honestly, that's it. I know that doesn't necessarily translate to an appropriate use of scientific theory, but it is what it is. I don't know if that beauty is because I'm looking at a UTF-8 file of Unicode numbers that emulate HTML tags, or if there is some sort of simplification to be had in computer hardware that could result in blazing fast computations.

## Basic Rundown
There is an idea I've been pondering that's some sort of GUI that kicks out hardware description language and some sort of computer chip blueprint. It would be a software-to-hardware transpiler, essentially. It is a separate experiment but it's relevant. I won't dive too deep into that right now.

## Theory
20 years from now when there is a software-to-hardware transpiler (ha) you could transpile this Node script to some sort of hardware component.

## What does this repo do?
It compiles hypothetical example base 10 code to base 2 (binary) code. It's a some sort of hypothetical middleware or something, written in software, that would be transpiled to hardware. I don't even get it yet. I think I'm going to make something that transpiles binary to base 10 after this, but whatever. I wanted to kick this out.

## Files
`binary`: this is where you put the base 10 code.

`index.js`: this pulls in the base 10 code and kicks out hybrid binary/trinary code

## What about trinary?
I don't know. I implemented it.

## What would run this?
I don't know.

## Flag System
There are certain digits that trigger certain flags, so that this hypothetical hardware component would switch what it's doing while it's doing it. I'll explain.

## Digits Rundown
- `0`: binary/trinary
- `1`: binary/trinary
- `2`: trinary when in trinary, *repeat* when in binary
- `3`: trinary flag
- `4`: cache flag
- `5`: cache print
- `6`: cache flush
- `7`: palindrome flag
- `8`: palindrome print
- `9`: palindrome flush

## Variables
`z`: cache

`y`: palindrome ("spelled" the same forwards and backwards, ie. racecar or taco cat)

`s`: base 10 code (pulls in from `binary` file)

`i`: what position in the base 10 code it's at

`f`: object of flags

`d`: current digit

`n`: digit 1 digit forward

`c`: digit 2 digits forward

`l`: for loop iterator


## `index.js` Breakdown
The idea is that each digit does something, whether that's a "function" (that might be transpiled to an instruction set... hmm), binary output, or trinary output.

The default output is 0's and 1's: full binary code support. Once it hits a 3, it switches to the trinary processor and the output becomes 0's, 1's, and 2's. Example: `0101 3 012012 3 0101`

If it hits a 4, it turns on the cache flag. It still runs the following binary digits, but also adds them to `z` (because cache sleeps) until it hits another 4. Example `00 4 1111 4 00`

If it hits a 5, it just prints `z`. Example `00 4 1111 4 01 5`. This binary code that would get run from this example is `00 1111 01 1111`.

If it hits a 6, it resets `z`.

If it hits a 7, it turns on the palindrome flag. It is similar to 4/5/6: it is a cache system. It still runs the following binary digits, but also adds them to `y` until it hits another 7. Example: `00 7 1011 7 00`.

If it hits an 8, it begins the palindrome printing process (also known as P3). It captures the next digit (`n`) and runs the palindrome `c` number of times. Example: `00 7 1011 7 00 82`. The binary code that would get run from this example is `00 1011 00 1011 1101`: 00, the palindrome (1011), 00, the palindrome 2... times. or something. It's hard for me to explain because it's a literary concept, but the idea is that patterns could be identified in binary code that could be sort of "folded up" into a base 10 palindrome expression: `1011 1101` is spelled the same forwards and backwards. If these sorts of patterns were able to be folded up and P3'd it could potentially result in some sort of benefit. Here's a longer example: `00 7 1011 7 00 89`. It would output: `00 1011 00 1011 1101 1011 1101 1011 1101 1011 1101 1011`. It's sort of like a compression algorithm.

If it hits a 9, it resets `y`.

## `binary` Breakdown
It shows an example of each digit being used. It contains: `01 291 00 3 012 012 3 01 4 1111 4 00 5 01 6 01 7 11001 7 00 82 01`. The binary output, as you'll see if you run it, is: `01 111111111 00 012 012 01 1111 00 1111 01 01 11001 00 11001 10011 01`.

## Other Digit Function Ideas
- I am typing out this code in base 10, in an IDE. I can't type base 20 code (or something). But hypothetically you could have base 20 output and have 10 more digit functions. All of these layers, character sets, the nature of binary, and translation are clouding my understanding of what base 20 could do. Interesting, though.
- Oscillation. This is confusing me even more, but is another example of pattern analysis using the concept of oscillation from the production of digital music. Example, assuming the taking over of 7/8/9: `00 7 1011 7 00 82`, output: `00 1011101`. It's very similar to palindromic pattern recognition (P3), but could potentially identify long patterns that could be cached and recreated.

## Summary
There are a lot of reasons that this does not make sense. But can you imagine the kind of pattern analysis you could get if you ran some sort of ML algorithm against it? The cap is a maximum of 9 P3/oscillation re-creations due to the nature of Unicode, and just the way I coded this up, but a combination of potentially smarter digit functions and a higher number base could result in some sort of strange blueprint that rocks - 20 years from now. :) Haha.

Take this code for example: `00 4 1111 1111 1111 1111 4 00 5 5 5 5 5 5 5 00`. It's pretty short, but if you check the string lengths it's kind of awe-inspiring: `00 1111 1111 1111 1111 00 1111 1111 1111 1111 1111 1111 1111 1111 1111 1111 1111 1111 1111 1111 1111 1111 1111 1111 1111 1111... I lost my place... 00`.

## Resulting Hypotheses
- Hardware that is built with Node and base 10 in mind could natively support this repo.
- There are other digit function ideas out there that identify patterns and could result in, at the very least, compression.
- A simpler approach with base 4 (only supporting 0, 1, 2, and 3 from this repo) could align better with the nature of binary, while also supporting trinary

Thank you! Again, to run:

`git clone git@github.com:dharkflower/base-10.git`

`node index.js` or

`node index.js {{ base 10 }}`.
