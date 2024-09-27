import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "../apiSlice";



export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<any, { userName: string; password: string, rememberMe: boolean }>({
      query: (body) => ({
        method: "POST",
        url: "/login",
        body,
      }),
      invalidatesTags: ["product"],
    }),
    allProduct: builder.query<any,any>({
      query: (body) => ({
        method: "GET",
        url: "/getAllProducts",
      }),
      providesTags: ["product"],
    }),

    listAllCategory: builder.query<any,any>({
      query: (body) => ({
        method: "GET",
        url: "/getAllProductsGroup",
      }),
      providesTags: ["product"],
    }),
    addCategory:builder.mutation<any,  any>({
      query: (body) => ({
        method: "POST",
        url: "/addProductGroup",
        body,
      }),
      invalidatesTags: ["product"],
    }),
    getallCustomer:builder.query<any,  any>({
      query: (body) => ({
        method: "GET",
        url: "/getAllUsersList",
      }),
      providesTags: ["product"],
    }),
    registerCustomer:builder.mutation<any,  any>({
      query: (body) => ({
        method: "POST",
        url: "/register",
        body,
      }),
      invalidatesTags: ["product"],
    }),
    getProductByCustomerName: builder.query<any, any>({
      query: (body) => {
        console.log(body,"aaaaaa")
        return {
          method: "GET",
          url: `/getProductFromGroup/?groupId=${body.customerId}`,
        };
      },
      providesTags: ["product"],
    }),
  }),
});

export const { useGetProductByCustomerNameQuery,useLoginMutation, useAllProductQuery ,useListAllCategoryQuery ,useAddCategoryMutation ,useGetallCustomerQuery,useRegisterCustomerMutation} = authApi;