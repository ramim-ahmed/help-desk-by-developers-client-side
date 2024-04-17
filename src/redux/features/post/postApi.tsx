import { baseApi } from "@/redux/baseApi/baseApi";

export const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchPosts: builder.query({
      query: () => "/posts",
    }),
  }),
});

export const { useFetchPostsQuery } = postApi;
