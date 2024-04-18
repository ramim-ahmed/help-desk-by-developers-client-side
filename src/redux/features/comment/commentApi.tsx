import { baseApi } from "@/redux/baseApi/baseApi";

export const commentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createComment: builder.mutation({
      query: (data) => ({
        url: "comments/create-comment",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["POST"],
    }),
  }),
});

export const { useCreateCommentMutation } = commentApi;
