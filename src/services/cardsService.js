import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseCardsUrl = 'https://cms.talkdesk.com/wp-json/web-api/v1/content'

export const cardsService = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: baseCardsUrl }),
  endpoints: builder => ({
    getCards: builder.query({
      query: () => '/cards',
      transformResponse: (response) => response.data.list,
    })
  })
})

export const { useGetCardsQuery } = cardsService