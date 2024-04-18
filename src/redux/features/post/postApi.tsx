import { baseApi } from "@/redux/baseApi/baseApi";

export const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchPosts: builder.query({
      query: () => "/posts",
      providesTags: ["POST"],
    }),
    addNewPost: builder.mutation({
      query: (data) => ({
        url: "posts/create-post",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["POST"],
    }),
  }),
});

export const { useFetchPostsQuery, useAddNewPostMutation } = postApi;
