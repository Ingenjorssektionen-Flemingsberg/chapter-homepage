import React, { useState, createContext, useContext, useMemo } from "react";
import type { SetStateAction } from "react";

interface LoadingContextType {
  loading: boolean;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};

export const LoadingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const value = useMemo<LoadingContextType>(
    () => ({
      loading: loading,
      setLoading: setLoading,
    }),
    [loading, setLoading]
  );

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};
