import React, { createContext, useContext, useMemo } from "react";
import { SnackbarProvider, useSnackbar } from "notistack";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type NotificationContextType = {
  showNotification: (
    message: string,
    severity?: "success" | "info" | "warning" | "error"
  ) => void;
};

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export const useNotification = (): NotificationContextType => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};

const NotificationContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const showNotification = (
    message: string,
    severity: "success" | "info" | "warning" | "error" = "info"
  ) => {
    enqueueSnackbar(message, {
      variant: severity,
      autoHideDuration: 3000,
      anchorOrigin: { vertical: "bottom", horizontal: "center" },
      action: (key) => (
        <IconButton color="inherit" onClick={() => closeSnackbar(key)}>
          <CloseIcon fontSize="small" />
        </IconButton>
      ),
    });
  };

  const value = useMemo<NotificationContextType>(
    () => ({
      showNotification: showNotification,
    }),
    [showNotification]
  );

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <SnackbarProvider
    maxSnack={5}
    anchorOrigin={{ vertical: "top", horizontal: "center" }}
    autoHideDuration={3000}
    dense
    preventDuplicate
  >
    <NotificationContextProvider>{children}</NotificationContextProvider>
  </SnackbarProvider>
);
