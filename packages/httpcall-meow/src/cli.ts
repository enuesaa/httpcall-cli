import meow from 'meow';

/**
 * meow does not subcommand officially.
 * So, we handle the cli arguments here.
 */
const cli = meow(`
	Usage
	  $ httpcall-meow <method> <url>

	Examples
	  $ httpcall-meow get https://example.com
	  🌈 unicorns 🌈
`, {
	importMeta: import.meta, // what is this ?
	flags: {
		rainbow: {
			type: 'boolean',
			shortFlag: 'r'
		}
	},
  // version: '', // By default, value of package.json version field.
  autoHelp: true,
  autoVersion: true,
  argv: process.argv,
  inferType: false,
  allowUnknownFlags: false,

})

console.log(cli)
