type Method = 'get'|'post'|'put'|'delete'
type Headers = Record<string, string>
export type ParsedArg = {
  url: string,
  method: Method,
  headers: Headers,
}

export const parseArg = (argv: string[]): [null|ParsedArg, string] => {
  const [_nodebin, _filename, ...args] = argv

  if (args.length === 0) {
    return [null, 'Please pass command.']
  }
  if (! ['get', 'post', 'put', 'delete'].includes(args[0])) {
    return [null, 'Available commands are "get", "post", "put", or "delete"']
  }
  if (args.length === 1) {
    return [null, 'Please pass url.']
  }

  const method = args[0] as Method
  const headers: Headers = {};
  let nextIsHeader = false;
  let url = null;
  for (const arg of args.slice(1)) {
    if (nextIsHeader) {
      const splitted = arg.split(':')
      if (splitted.length !== 2) {
        return [null, 'Invalid header found.']
      }
      headers[splitted[0]] = splitted[1]
      nextIsHeader = false
    } else if (arg === '--header') {
      nextIsHeader = true
    } else {
      url = arg
    }
  }

  if (url === null) {
    return [null, 'Please pass url.']
  }

  const parsedArg: ParsedArg = {
    url,
    method,
    headers,
  }
  return [parsedArg, '']
}
