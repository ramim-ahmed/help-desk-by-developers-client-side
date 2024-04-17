import { baseApi } from "@/redux/baseApi/baseApi";

export const likeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addLike: builder.mutation({
      query: (data) => ({
        url: "likes/create-like",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["POST"],
    }),
  }),
});

export const { useAddLikeMutation } = likeApi;
