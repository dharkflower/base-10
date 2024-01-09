process . stdout . write("\n")

let s
let z = ''
let y = ''
let i = 0
let f = {

	2: false,
	3: false,
	4: false,
	7: false,

}

if( process.argv.hasOwnProperty(2) ) s = process . argv[2] . toString()
else s = ( require('fs') ) . readFileSync('./binary') . toString()
console . log('string:', s)
process . stdout . write("output: ")

do {

	let d = s . charAt(i)
	let n
	let c

	switch(parseInt(d)) {

		case 2:
			if(f[3]) {

				// ternary
				process . stdout . write('2')
			}

			else {
				n = s . charAt(i + 1)
				c = s . charAt(i + 2)

				for( let l = 0; l < n; l++ ) {
					process . stdout . write(c)
				}

				i++
				i++
			}

			break;
		case 3:
		case 4:
			f[d] = !f[d]
			break;
		case 5:
			process . stdout . write(z)
			break;
		case 6:
			z = ''
			break;
		case 7:

			f[d] = !f[d]
			continue

			break;
		case 8:

			n = s . charAt(i + 1)

			for( let l = 0; l < n; l++ ) {
				process . stdout . write(y)
				y = y . split('') . reverse() . join('')
			}

			i++
			i++

			break;
		case 9:
			y = ''
			break;

		// 0, 1
		default:

			if(f[4]) {
				z += d
			}

			if(f[7]) {
				y += d
			}

			process . stdout . write(d)
			f[d] = !f[d]
			break;
	}


} while(i++ < s . length)

process . stdout . write("\n\n")