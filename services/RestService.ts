import { METHOD_MODE } from "~~/utils/config";
export default class RestService<T> {
  constructor(
    protected resource: string,
    protected baseUrl: string = useRuntimeConfig().baseURL
  ) {}

  index(
    params?: ApiRequestParams,
    { prefixPath = "" }: { prefixPath?: string } = {}
  ) {
    return useFetch<T>(`${prefixPath}/${this.resource}`, {
      params,
      method: METHOD_MODE.GET,
      baseURL: this.baseUrl,
    });
  }

  show<G = T>(
    id: string,
    params: ApiRequestParams = {},
    { prefixPath = "" }: { prefixPath?: string } = {}
  ) {
    return useFetch<G>(`${prefixPath}/${this.resource}/${id}`, {
      params,
      method: METHOD_MODE.GET,
      baseURL: this.baseUrl,
    });
  }

  create<G = T>(
    payload: Partial<T> | FormData,
    {
      visibleFields = [],
      prefixPath = "",
    }: { visibleFields?: string[]; prefixPath?: string } = {}
  ): Promise<ApiResponse<G>> {
    return new Promise((resolve, reject) => {
      useFetch(`${prefixPath}/${this.resource}`, {
        body: JSON.stringify(payload),
        method: METHOD_MODE.POST,
        baseURL: this.baseUrl,
      })
        .then(() => resolve)
        .catch((error) => reject(error));
    });
  }

  update<G = T>(
    id: string,
    payload: Partial<T> | FormData,
    {
      visibleFields = [],
      prefixPath = "",
    }: { visibleFields?: string[]; prefixPath?: string } = {}
  ): Promise<ApiResponse<G>> {
    return new Promise((resolve, reject) => {
      useFetch(`${prefixPath}/${this.resource}/${id}`, {
        body: JSON.stringify(payload),
        method: METHOD_MODE.PUT,
        baseURL: this.baseUrl,
      })
        .then(() => resolve)
        .catch((error) => reject(error));
    });
  }

  destroy(
    id: string | number,
    { prefixPath = "" }: { prefixPath?: string } = {}
  ): Promise<ApiResponse> {
    return new Promise((resolve, reject) => {
      useFetch(`${prefixPath}/${this.resource}/${id}`, {
        method: METHOD_MODE.DELETE,
      })
        .then(() => resolve)
        .catch((error) => reject(error));
    });
  }
}
