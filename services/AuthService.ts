import { METHOD_MODE } from "~~/utils/config";

export default class AuthService {
  constructor(protected baseUrl: string = useRuntimeConfig().baseURL) {}

  forgotPassword<G>(
    payload: Partial<G> | FormData,
    {
      visibleFields = [],
      prefixPath = "",
    }: { visibleFields?: string[]; prefixPath?: string } = {}
  ): Promise<ApiResponse<G>> {
    return new Promise((resolve, reject) => {
      useFetch(`${prefixPath}/reset_password`, {
        body: payload,
        method: METHOD_MODE.POST,
        baseURL: this.baseUrl,
      })
        .then(() => resolve)
        .catch((error) => reject(error));
    });
  }
}
