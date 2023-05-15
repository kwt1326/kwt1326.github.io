interface FetchClientConfig {
  method?: string,
  headers?: any,
  params?: any,
  body?: any,
}

const {
  NODE_ENV,
  NEXT_PUBLIC_STRAPI_REST_API_HOST,
  NEXT_PUBLIC_STRAPI_REST_API_IMAGE_HOST,
  NEXT_PUBLIC_STRAPI_REST_API_TOKEN
} = process.env;

const clientHost = NODE_ENV === 'development' ? "http://localhost:3000" : "https://kwt1326.github.io";
const host = NEXT_PUBLIC_STRAPI_REST_API_HOST ?? 'http://localhost:3000';
const imageHost = NEXT_PUBLIC_STRAPI_REST_API_IMAGE_HOST ?? 'http://localhost:3000';

const fetchClient = async (basePath: string, config?: FetchClientConfig) => {
  const { method, headers, params, body } = (config ?? {});
  let path = `${host}${basePath}`;

  // query string
  if (typeof params === 'object') {
    const urlSearchParams = new URLSearchParams(params);
    path = `${basePath}?${urlSearchParams.toString()}`;
  }

  const response = await fetch(path, {
    method: method ?? 'GET',
    mode: 'cors', // no-cors, *cors, same-origin
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${NEXT_PUBLIC_STRAPI_REST_API_TOKEN ?? ''}`,
      ...(headers ?? {})
    },
    body: body ?? JSON.stringify(body),
  });

  return response.json();
}

fetchClient.clientHost = clientHost;
fetchClient.host = host;
fetchClient.imageHost = imageHost;

export const combine = (base: string, postFix: string) => `${base}${postFix}`;

export default fetchClient;
