import baseApi from "./baseApi";

type Plan = {
  id: string;
  name: string;
  words: number;
  amount: number;
  isActive: boolean;
  createdAt: string;
  updateAt: string;
};

type PlanResponse = {
  success: boolean;
  message: string;
  data: Plan;
};

type PlansListResponse = {
  success: boolean;
  message?: string;
  data: Plan[];
};

type CreatePlanRequest = {
  name: string;
  words: number;
  amount: number;
};

type UpdatePlanRequest = {
  id: string;
  data: {
    name: string;
    words: number;
    amount: number;
  };
};

type DeletePlanResponse = {
  success: boolean;
  message: string;
};

export const planApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get all plans
    getAllPlans: builder.query<PlansListResponse, void>({
      query: () => ({
        url: "/plans",
        method: "GET",
      }),
      providesTags: ["Plan"],
    }),

    // Get single plan by ID
    getPlanById: builder.query<PlanResponse, string>({
      query: (id) => ({
        url: `/plans/${id}`,
        method: "GET",
      }),
      providesTags: ["Plan"],
    }),

    // Create new plan
    createPlan: builder.mutation<PlanResponse, CreatePlanRequest>({
      query: (body) => ({
        url: "/plans",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Plan"],
    }),

    // Update plan by ID
    updatePlan: builder.mutation<PlanResponse, UpdatePlanRequest>({
      query: ({ id, data }) => ({
        url: `/plans/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Plan"],
    }),

    // Delete plan by ID
    deletePlan: builder.mutation<DeletePlanResponse, string>({
      query: (id) => ({
        url: `/plans/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Plan"],
    }),
  }),
});

export const {
  useGetAllPlansQuery,
  useGetPlanByIdQuery,
  useCreatePlanMutation,
  useUpdatePlanMutation,
  useDeletePlanMutation,
} = planApi;