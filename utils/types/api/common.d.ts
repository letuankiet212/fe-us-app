type ApiPagination = {
  total_pages: number;
  total_count: number;
  current_page: number;
};

type ApiResponse<T = any> = {
  status: string;
  message: string;
  data?: T;
  meta?: ApiPagination;
};

type ApiErrorDetail = {
  error_code: string;
  field: string;
  message: string;
};

type ApiError = {
  error: {
    code: string;
    error_code: string;
    errors: ApiErrorDetail[];
    message?: string;
    status_code: number;
  };
};

type ServiceError = ApiError & {
  formErrors?: Record<string, string[]>;
};

type ApiRequestParams = {
  page?: number;
  per_page?: number;
  order?: string;
  sort?: "desc" | "asc";
  [key: string]: any;
};
