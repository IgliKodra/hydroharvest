// React Peer Dependencies
import { useDebugValue, useEffect, useState } from "react";
// Axios Peer Dependencies
import axios from "axios";

/**
 *
 * This function utilises axios to make fetch requests.
 * @template T
 * @param {FetchParams<T>} params - The parameters for the function.
 * @param {string} params.url - The endpoint where the fetch is going to be requested from.
 * @param {"GET" | "POST"} params.type - The method of the request.
 * @param {Object} [params.body] - Optional, the body of the request, works with POST only.
 * @param {Object} [params.headers] - Optional, the headers of the fetch such as origin policy, authentications, bearers, etc...
 * @param {Record<string, string>} [params.queryParams] - Optional, the query params that get added after the endpoint (?).
 * @param {(data: T) => void} [params.onSuccess] - Optional, the success callback function.
 * @param {boolean} [params.preventFetch] - Optional, a boolean to stop the fetch if the request isn't needed yet but to load the necessary hooks such as we get no errors!
 *
 * @returns {FetchResult<T>} results - The Fetch Result
 * @property {T} results.data - The fetched data
 * @property {unknown} results.error - Returns an error if any, undefined if no error happened,
 * @property {boolean} results.loading - If the fetch is loading or not
 */

type FetchParams<T> = {
  url: string;
  type: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: object;
  headers?: object;
  queryParams?: Record<string, string>;
  onSuccess?: (data: T) => void;
  preventFetch?: boolean;
};

type FetchResult<T> = {
  data: T | null;
  error: string | null;
  loading: boolean;
};

type Cache = {
  [key: string]: any;
};

const cache: Cache = {};

const useFetch = <T>({
  url: requestUrl,
  type,
  body,
  headers,
  queryParams,
  onSuccess,
  preventFetch,
}: FetchParams<T>): FetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Use the useDebugValue hook to display custom debug information
  useDebugValue(
    `URL: ${requestUrl}, Loading: ${loading}, URLParams: ${queryParams}`
  );

  useEffect(() => {
    const buildUrl = () => {
      if (!queryParams) return requestUrl;

      const params = new URLSearchParams(queryParams);
      return `${requestUrl}?${params}`;
    };

    const getCacheKey = (url: string) => {
      return body ? `${url}${JSON.stringify(body)}` : url;
    };

    // Create a CancelToken source
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      try {
        setLoading(true);

        const url = buildUrl();
        const cacheKey = getCacheKey(url);
        const cachedData = cache[cacheKey];

        if (cachedData) {
          setData(cachedData);
          onSuccess?.(cachedData); //if (onSuccess) onSuccess(cachedData);
          return;
        }

        const response = await axios<T>({
          method: type,
          url,
          data: body,
          headers, // Pass the cancel token to the request
          cancelToken: source.token,
        });

        cache[cacheKey] = response.data;

        setData(response.data);
        onSuccess?.(response.data);
      } catch (error: unknown) {
        console.error("Faced the following error whilst fetching: ", error);
        // Check if the error was caused by a cancelled request
        if (!axios.isCancel(error) && typeof error === "string") {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    if (!preventFetch) fetchData();
    else setLoading(false);

    // Cancel the request when the component is unmounted
    return () => {
      source.cancel();
    };
  }, [queryParams, body]);

  return { data, error, loading };
};

export default useFetch;
export type { FetchParams, FetchResult, Cache };
