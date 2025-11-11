// // redux/api/storyApi.ts

// import baseApi from "./baseApi";

// // ============= Request Types =============

// export interface StoryElement {
//   question: string;
//   answer: string;
// }

// export interface CreateStoryRequest {
//   storyElements: StoryElement[];
// }

// export interface UpdateStoryRequest {
//   storyElements: StoryElement[];
// }

// export interface UploadCoverRequest {
//   coverImage: File;
// }

// export interface DownloadStoryRequest {
//   format?: 'pdf' | 'docx';
// }

// export interface RegenerateStoryRequest {
//   storyId: string;
// }

// // ============= Response Types =============

// export interface CreateStoryResponse {
//   success: boolean;
//   message: string;
//   data: {
//     storyId: string;
//     status: 'pending' | 'processing' | 'completed' | 'failed';
//     generatedStory?: string;
//   };
// }

// // export interface StoryResponse {
// //   success: boolean;
// //   message: string;
// //   data: {
// //     generateCount: ReactNode;
// //     price: ReactNode;
// //     wordLimit: ReactNode;
// //     id: string;
// //     title?: string;
// //     author: string;
// //     coverImage: string | null;
// //     coverType?: 'top' | 'center' | 'bottom';
// //     content: string[];
// //     isRegenerated: boolean;
// //     remainingRegenerations: number;
// //     createdAt: string;
// //     updatedAt: string;
// //     planId: string;
// //     userId: string;
// //     status: 'pending' | 'processing' | 'completed' | 'failed';
// //   };
// // }







// interface Story {
//   id: string;
//   title: string;
//   wordLimit: number;
//   price: number;
//   generateCount: number;
//   status: 'COMPLETE' | 'PENDING' | 'FAIL'; // match your backend
//   createdAt: string;
//   updatedAt: string;
//   userId: string;
//   guestId: string | null;
//   isPaid: boolean;
// }

// export interface UploadCoverResponse {
//   success: boolean;
//   message: string;
//   data: {
//     storyId: string;
//     coverImage: string;
//   };
// }

// export interface DownloadStoryResponse {
//   success: boolean;
//   message: string;
//   data: {
//     downloadUrl: string;
//     fileName: string;
//   };
// }

// export interface RegenerateStoryResponse {
//   success: boolean;
//   message: string;
//   data: {
//     storyId: string;
//     status: string;
//     remainingRegenerations: number;
//   };
// }

// export interface GetAllStoriesResponse {
//   success: boolean;
//   message: string;
//   data: {
//     stories: StoryResponse['data'][];
//     total: number;
//     page: number;
//     limit: number;
//   };
// }

// // ============= API Endpoints =============

// export const storyApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     // Create/Generate Story
//     createStory: builder.mutation<
//       CreateStoryResponse,
//       { storyId: string; body: CreateStoryRequest }
//     >({
//       query: ({ storyId, body }) => ({
//         url: `/stories/${storyId}/generate`,
//         method: "POST",
//         body,
//       }),
//       invalidatesTags: (result, error, { storyId }) => [
//         { type: "Story", id: storyId },
//         { type: "Story", id: "LIST" },
//       ],
//     }),

//     // Get Story by ID
//     getStory: builder.query<StoryResponse, string>({
//       query: (storyId) => `/stories/${storyId}`,
//       providesTags: (result, error, storyId) => [
//         { type: "Story", id: storyId },
//       ],
//     }),

//     // Get All User Stories
//     getAllStories: builder.query<GetAllStoriesResponse, { page?: number; limit?: number }>({
//       query: ({ page = 1, limit = 10 }) => `/stories?page=${page}&limit=${limit}`,
//       providesTags: (result) =>
//         result?.data?.stories
//           ? [
//               ...result.data.stories.map(({ id }) => ({ 
//                 type: "Story" as const, 
//                 id 
//               })),
//               { type: "Story", id: "LIST" },
//             ]
//           : [{ type: "Story", id: "LIST" }],
//     }),

//     // Update Story
//     updateStory: builder.mutation<
//       StoryResponse,
//       { storyId: string; body: UpdateStoryRequest }
//     >({
//       query: ({ storyId, body }) => ({
//         url: `/stories/${storyId}/regenerate`,
//         method: "PUT",
//         body,
//       }),
//       invalidatesTags: (result, error, { storyId }) => [
//         { type: "Story", id: storyId },
//         { type: "Story", id: "LIST" },
//       ],
//     }),

//     // Upload Cover Image
//     uploadCover: builder.mutation<
//       UploadCoverResponse,
//       { storyId: string; coverImage: File }
//     >({
//       query: ({ storyId, coverImage }) => {
//         const formData = new FormData();
//         formData.append("cover", coverImage);

//         return {
//           url: `/stories/${storyId}/cover`,
//           method: "POST",
//           body: formData,
//         };
//       },
//       invalidatesTags: (result, error, { storyId }) => [
//         { type: "Story", id: storyId },
//       ],
//     }),

//     // Download Story
//     downloadStory: builder.mutation<
//       Blob,
//       { storyId: string; format?: 'pdf' | 'docx' }
//     >({
//       query: ({ storyId, format = 'pdf' }) => ({
//         url: `/stories/${storyId}/download`,
//         method: "POST",
//         body: { format },
//         responseHandler: (response) => response.blob(),
//       }),
//     }),

//     // Regenerate Story
//     regenerateStory: builder.mutation<RegenerateStoryResponse, string>({
//       query: (storyId) => ({
//         url: `/stories/${storyId}/regenerate`,
//         method: "POST",
//       }),
//       invalidatesTags: (result, error, storyId) => [
//         { type: "Story", id: storyId },
//       ],
//     }),

//     // Delete Story
//     deleteStory: builder.mutation<
//       { success: boolean; message: string },
//       string
//     >({
//       query: (storyId) => ({
//         url: `/stories/${storyId}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: (result, error, storyId) => [
//         { type: "Story", id: storyId },
//         { type: "Story", id: "LIST" },
//       ],
//     }),
//   }),
// });

// // ============= Export Hooks =============

// export const {
//   useCreateStoryMutation,
//   useGetStoryQuery,
//   useGetAllStoriesQuery,
//   useUpdateStoryMutation,
//   useUploadCoverMutation,
//   useDownloadStoryMutation,
//   useRegenerateStoryMutation,
//   useDeleteStoryMutation,
// } = storyApi;

















// redux/api/storyApi.ts

import baseApi from "./baseApi";

// ============= Request Types =============
export interface StoryElement {
  question: string;
  answer: string;
}

export interface CreateStoryRequest {
  storyElements: StoryElement[];
}

export interface UpdateStoryRequest {
  storyElements: StoryElement[];
}

export interface UploadCoverRequest {
  coverImage: File;
}

export interface RegenerateStoryRequest {
  storyId: string;
}

// ============= Story Model (matches your backend) =============
// ============= Story Model (matches your backend) =============
export interface Story {
  id: string;
  title: string;
  wordLimit: number;
  price: number;
  generateCount: number;
  status: 'COMPLETE' | 'PENDING' | 'FAIL';
  createdAt: string;
  updatedAt: string;
  userId: string;
  guestId: string | null;
  isPaid: boolean;
  // NEW – the fields you actually receive from /stories/:id
  chapters: { chapterNo: number; title: string; content: string }[];
  answers?: StoryElement[];
  payments?: never[];
}

// ============= Response Types =============
export interface CreateStoryResponse {
  success: boolean;
  message: string;
  data: {
    storyId: string;
    status: 'pending' | 'processing' | 'completed' | 'failed';
    generatedStory?: string;
  };
}

/* NEW – wrapper for a single story */
export interface GetStoryResponse {
  success: boolean;
  message: string;
  data: Story;
}
export interface GetAllStoriesResponse {
  success: boolean;
  message: string;
  data: Story[]; // array, not { stories: [...] }
}

// (Keep other response types you need)
export interface UploadCoverResponse {
  success: boolean;
  message: string;
  data: {
    storyId: string;
    coverImage: string;
  };
}

// ============= API Endpoints =============
export const storyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Create/Generate Story
    createStory: builder.mutation<
      CreateStoryResponse,
      { storyId: string; body: CreateStoryRequest }
    >({
      query: ({ storyId, body }) => ({
        url: `/stories/${storyId}/generate`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, { storyId }) => [
        { type: "Story", id: storyId },
        { type: "Story", id: "LIST" },
      ],
    }),

    // Get All User Stories
    getMyStories: builder.query<GetAllStoriesResponse, { page?: number; limit?: number }>({
      query: ({ page = 1, limit = 10 }) => `/stories?page=${page}&limit=${limit}`,
      providesTags: (result) =>
        result?.data
          ? [
              ...result.data.map(({ id }) => ({ type: "Story" as const, id })),
              { type: "Story", id: "LIST" },
            ]
          : [{ type: "Story", id: "LIST" }],
    }),
    // getAdminStories: builder.query<GetAllStoriesResponse, { page?: number; limit?: number }>({
    //   query: ({ page = 1, limit = 10 }) => `/stories?page=${page}&limit=${limit}`,
    //   providesTags: (result) =>
    //     result?.data
    //       ? [
    //           ...result.data.map(({ id }) => ({ type: "Story" as const, id })),
    //           { type: "Story", id: "LIST" },
    //         ]
    //       : [{ type: "Story", id: "LIST" }],
    // }),

    // Get Story by ID (optional – keep if needed)
    getStoryById: builder.query<GetStoryResponse, string>({
      query: (storyId) => (`/stories/${storyId}`),
      providesTags: (result, error, storyId) => [{ type: "Story", id: storyId }],
    }),

    // Update Story
    updateStory: builder.mutation<
      Story,
      { storyId: string; body: UpdateStoryRequest }
    >({
      query: ({ storyId, body }) => ({
        url: `/stories/${storyId}/regenerate`,
        method: "PUT",
        body,
      }),
      invalidatesTags: (result, error, { storyId }) => [
        { type: "Story", id: storyId },
        { type: "Story", id: "LIST" },
      ],
    }),

    // Upload Cover Image
    uploadCover: builder.mutation<
      UploadCoverResponse,
      { storyId: string; coverImage: File }
    >({
      query: ({ storyId, coverImage }) => {
        const formData = new FormData();
        formData.append("cover", coverImage);
        return {
          url: `/stories/${storyId}/cover`,
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: (result, error, { storyId }) => [
        { type: "Story", id: storyId },
      ],
    }),

    // Download Story
    downloadStory: builder.mutation<
      Blob,
      { storyId: string; format?: 'pdf' | 'docx' }
    >({
      query: ({ storyId, format = 'pdf' }) => ({
        url: `/stories/${storyId}/download`,
        method: "POST",
        body: { format },
        responseHandler: (response) => response.blob(),
      }),
    }),

    // Regenerate Story
    regenerateStory: builder.mutation<Story, string>({
      query: (storyId) => ({
        url: `/stories/${storyId}/regenerate`,
        method: "POST",
      }),
      invalidatesTags: (result, error, storyId) => [
        { type: "Story", id: storyId },
      ],
    }),

    // Delete Story
    deleteStory: builder.mutation<
      { success: boolean; message: string },
      string
    >({
      query: (storyId) => ({
        url: `/stories/${storyId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, storyId) => [
        { type: "Story", id: storyId },
        { type: "Story", id: "LIST" },
      ],
    }),
  }),
});

// ============= Export Hooks =============
export const {
  useCreateStoryMutation,
 useGetMyStoriesQuery,
 useGetStoryByIdQuery,
  useUpdateStoryMutation,
  useUploadCoverMutation,
  useDownloadStoryMutation,
  useRegenerateStoryMutation,
  useDeleteStoryMutation,
} = storyApi;