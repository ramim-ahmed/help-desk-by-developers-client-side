import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://help-desk-by-developers-server-side.vercel.app/api/v1",
  }),
  tagTypes: ["POST"],
  endpoints: () => ({}),
});
