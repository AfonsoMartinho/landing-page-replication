import React from "react";
import 'whatwg-fetch'
import { renderHook, act } from '@testing-library/react'
import { cardsService, useGetCardsQuery } from "./cardsService";
import { Provider } from "react-redux";
import { setupApiStore } from "./RtkStoreTestUtils";
import mockCardsList from "../mockData/CardsList.data.json";

require('jest-fetch-mock').enableMocks()

beforeEach(() => {
    fetch.resetMocks();
});

const wrapper = ({ children }) => {
  const storeRef = setupApiStore(cardsService);
  return <Provider store={storeRef.store}>{children}</Provider>;
};

describe("useGetCardsQuery", () => {
  it("Should Return Success repsponse with a data object containing the cards list", async () => {
    fetch.mockResponse(JSON.stringify({
    data: {
        list: mockCardsList, 
        "empty": false,
        "count_per": {
            "query": 51
        }
    }}));

    const { result } = renderHook(
      () => useGetCardsQuery({ industry: ''}),
      { wrapper }
    );

    const initialResponse = result.current;

    expect(initialResponse.data).toBeUndefined();
    expect(initialResponse.isLoading).toBe(true);

    await act(async () => {
        await result.current.refetch()
    });

    const nextResponse = result.current;

    expect(nextResponse.data).not.toBeUndefined();
    expect(nextResponse.isLoading).toBe(false);
    expect(nextResponse.isSuccess).toBe(true);
  });

  it("Should return an Internal Server Error", async () => {
    fetch.mockReject(new Error("Internal Server Error"));
    const { result } = renderHook(
      () => useGetCardsQuery({ industry: ''}),
      { wrapper }
    );

    const initialResponse = result.current;
    expect(initialResponse.data).toBeUndefined();
    expect(initialResponse.isLoading).toBe(true);

    await act(async () => {
        await result.current.refetch()
    });
    
    const nextResponse = result.current;
    expect(nextResponse.data).toBeUndefined();    
    expect(nextResponse.isLoading).toBe(false);    
    expect(nextResponse.isError).toBe(true);
  });
});