import { Box, Divider, Skeleton } from "@mui/material";

export default function NewsPostSkeleton() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 860,
        minWidth: 860,
        mb: 4,
        borderRadius: 3,
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <Box sx={{ px: { xs: 2.5, sm: 4 }, pt: { xs: 2.5, sm: 3 }, pb: 2.25 }}>
        <Skeleton variant="text" height={36} width="70%" />
        <Skeleton variant="text" height={20} width="30%" />
      </Box>

      <Divider />

      {/* Content */}
      <Box sx={{ px: { xs: 2.5, sm: 4 }, py: { xs: 2.5, sm: 3 } }}>
        <Skeleton variant="text" height={22} />
        <Skeleton variant="text" height={22} width="95%" />
        <Skeleton variant="text" height={22} width="90%" />

        <Skeleton
          variant="rectangular"
          height={280}
          sx={{ my: 2.5, borderRadius: 2 }}
        />

        <Skeleton variant="text" height={22} width="85%" />
        <Skeleton variant="text" height={22} width="60%" />
      </Box>
    </Box>
  );
}
