import { baseApi } from "@/redux/baseApi/baseApi";

export const platformApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchPlatforms: builder.query({
      query: () => "/platforms",
    }),
  }),
});

export const { useFetchPlatformsQuery } = platformApi;
