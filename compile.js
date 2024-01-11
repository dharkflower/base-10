const pro = process, 
			std = pro . stdout,
			out = m => { std . write(m)},
			sp = () => { std . write("\n")} ; sp()
			
const str = {
				0: 'substring',
				1: 'split',
				2: 'reverse',
				3: 'join',
				4: 'replaceAll',
				5: 'hasOwnProperty',
				6: 'toString'
			}

let l, i, j, c, n, r, f, x, p, s, z, ps = {}, st = {}

if ( pro . argv [ str[5]] ( 2 )) s = pro . argv[ 2 ] [ str[6]] ()
else s = ( require('fs')) . readFileSync('./base2') [ str[6]] () [str[4]] (' ', '')

out ( s ) ; sp() ; sp()

i = 1
k = 5
l = 6

do {

	c = s . charAt( i )
	j = l

	do {

		n = s [ str[0]] ( i - j, i )
		r = s [ str[0]] ( i - 1, i + j - 1 )
		f = r [ str[1]] ('') [ str[2]] () [ str[3]] ('')
		x = r [ str[1]] ('')

		x . shift()

		x = x [ str[2]] () [ str[3]] ('')

		if( n === f ) {

			p = n + x

			if ( !ps [ str[5]] (p)) ps[ p ] = 0
			ps[ p ]++

		}

	} while ( j-- >= k )

} while ( i++ < s . length )

console . log (ps) ; sp() // (ps) ; )ps( = oscillation bro . . .

for ( let pal of Object . keys( ps)) {

	z = pal [ str[0]] ( 0, l )
	s = s [ str[4]] ( pal, ' 7 ' + z + ' 7 ' )

}

out ( s ) ; sp()