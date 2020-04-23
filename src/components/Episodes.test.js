import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import Episodes from './Episodes';
import { fetchShow as mockFetchShow } from '../api/fetchShow';


//mock and async test

jest.mock("../api/fetchShow")
const data = mockFetchShow();
test("gets data from api", async () => {
    mockFetchShow.mockResolvedValueOnce({
        data
    })
    expect(mockFetchShow).toHaveBeenCalledTimes(1);
});