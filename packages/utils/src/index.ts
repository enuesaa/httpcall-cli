import fetch from 'node-fetch'

export type FetcherRequest = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  headers: Record<string, string>;
  body: string
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
