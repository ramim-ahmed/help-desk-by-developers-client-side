import { baseApi } from "@/redux/baseApi/baseApi";

export const postTypeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchPostTypes: builder.query({
      query: () => "/postTypes",
    }),
  }),
});

export const { useFetchPostTypesQuery } = postTypeApi;
