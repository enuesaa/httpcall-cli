import fetch from 'node-fetch'

export type FetcherRequest = {
  method: 'get' | 'post' | 'put' | 'delete';
  url: string;
  headers: Record<string, string>;
  body: null | string
}
export type FetcherResponse = {
  status: number;
  headers: Record<string, string[]>; // todo check
  body: string;
}

export const fetcher = async (request: FetcherRequest): Promise<FetcherResponse> => {
  const res = await fetch(request.url, {
    method: request.method,
    headers: request.headers,
    body: request.body,
  })
  const body: any = await res.text()

  return {
    status: res.status,
    headers: res.headers.raw(),
    body,
  }
}

/**
 * JSON はどこで定義されているか. v8らしい
 * https://github.com/nodejs/node/blob/2dd6d76c898c930d0f7d9386bde4b6dec37b7a49/deps/v8/src/builtins/builtins-json.cc#L32
 * https://github.com/search?q=repo%3Av8%2Fv8+JsonStringify&type=code
 */
