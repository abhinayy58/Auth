import { apiSlice } from "./apiSlice";

const USER_URL = 'http://localhost:8000/api/users'


export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login:builder.mutation({query: (data) => ({
            url: `${USER_URL}/auth`,
            method: "post",
            body: data
        })
        }),
        logout:builder.mutation({query: (data) => ({
            url: `${USER_URL}/logout`,
            method: "post",
        })
        }),
        register:builder.mutation({query: (data) => ({
            url: `${USER_URL}`,
            method: "post",
            body: data
        })
        }),
        updateUser: builder.mutation({
            query: (data) => ({
              url: `${USER_URL}/profile`,
              method: 'PUT',
              body: data,
            }),
          }),
    })
})


 export const {useLoginMutation, useLogoutMutation, useUpdateUserMutation, useRegisterMutation} = usersApiSlice