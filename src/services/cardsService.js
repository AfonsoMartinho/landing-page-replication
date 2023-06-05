import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseCardsUrl = 'https://cms.talkdesk.com/wp-json/web-api/v1/content'

export const cardsService = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: baseCardsUrl }),
  endpoints: builder => ({
    getCards: builder.query({
      query: (params) => ({
        url: '/cards',
        method: 'POST',
        body: {
          category: [],
          industry: params.industry,
          integration: params.integration,
          limit: params.pageSize || 20,
          order: params.order || 'ASC',
          order_by: params.orderBy || 'title',
          page: params.page || 1,
          post_type: params.postType || ['customers'],
          region: params.region,
          search: params.search,
        },
      }),
      transformResponse: (response) => {
        return {
          list: response.data.list,
          size: response.data.count_per.query,
        }
      }
    })
  }),
  overrideExisting: false,
})

export const { useGetCardsQuery } = cardsService