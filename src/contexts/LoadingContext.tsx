import { Box, CircularProgress } from "@mui/material";
import React, { useState, createContext, useContext, useMemo } from "react";
import type { SetStateAction } from "react";

interface LoadingContextType {
  loading: boolean;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

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

  const Loader: React.FC = () => {
    return (
      <Box
        sx={{
          position: "fixed", // cover entire viewport
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.4)", // dark overlay
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999, // higher than most elements (matches MUI modal z-index)
        }}
      >
        <CircularProgress sx={{ color: "white" }} />
      </Box>
    );
  };

  return (
    <LoadingContext.Provider value={value}>
      <>
        {loading && <Loader />}
        {children}
      </>
    </LoadingContext.Provider>
  );
};
