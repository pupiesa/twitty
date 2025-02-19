"use client";
import React, { createContext, ReactNode } from "react";
import axios from "axios";
import useSWR from "swr";

interface DataContextProps {
  post: object;
}

export const DataContext = createContext<DataContextProps | undefined>(
  undefined
);

interface DataProviderProps {
  children: ReactNode;
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const { data: post, error: error1 } = useSWR(
    "http://localhost:3000/api/v1/posts",
    fetcher
  );
  if (error1) return <div>Error loading data</div>;
  // if (!post) return <div>Loading...</div>;

  return (
    <DataContext.Provider value={{ post }}>{children}</DataContext.Provider>
  );
};
