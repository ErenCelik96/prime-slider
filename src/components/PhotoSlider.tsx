import { useState } from "react";
import { Box, Typography, useTheme, Skeleton } from "@mui/material";
import { usePhotos } from "../hooks/useGetPhotos";
import NavigationControls from "./NavigationControls";

const PhotoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const { data: photos, isLoading, isError, refetch } = usePhotos();

  if (isLoading) {
    return (
      <Box sx={{ width: "100%", maxWidth: 800, margin: "0 auto", p: 4 }}>
        <Skeleton
          variant="rounded"
          width="100%"
          height={400}
          animation="wave"
          sx={{
            borderRadius: 2,
            bgcolor: "grey.200",
          }}
        />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box sx={{ textAlign: "center", p: 4 }}>
        <Typography color="error">Error loading photos</Typography>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Please try again later or{" "}
          <span
            style={{ cursor: "pointer", color: theme.palette.primary.main }}
            onClick={() => refetch()}
          >
            retry
          </span>
        </Typography>
      </Box>
    );
  }

  if (!photos?.length) {
    return (
      <Box sx={{ textAlign: "center", p: 4 }}>
        <Typography>No photos available</Typography>
      </Box>
    );
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 800,
        height: 400,
        margin: "0 auto",
        position: "relative",
      }}
    >
      {[currentIndex - 1, currentIndex, currentIndex + 1]?.map((i) => {
        const photo = photos[(i + photos.length) % photos.length];
        const isVisible = i === currentIndex;
        return (
          <Box
            key={photo.id}
            component="img"
            src={photo.download_url}
            alt={`Photo by ${photo.author}`}
            sx={{
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: isVisible ? 1 : 0,
              position: isVisible ? "relative" : "absolute",
              transition: "opacity 0.3s ease-in-out",
              display: isVisible ? "block" : "none",
              borderRadius: 2,
              boxShadow: theme.shadows[4],
            }}
          />
        );
      })}
      <Typography
        variant="body2"
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          color: "white",
          backgroundColor:
            theme.customComponents.photoSlider.overlay.background,
          padding: "4px 8px",
          borderRadius: theme.customComponents.photoSlider.overlay.borderRadius,
          textShadow: theme.customComponents.photoSlider.overlay.textShadow,
        }}
      >
        By {photos[currentIndex].author}
      </Typography>
      <NavigationControls onPrevious={handlePrevious} onNext={handleNext} />
      <Typography
        variant="caption"
        sx={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          color: "white",
          textShadow: theme.customComponents.photoSlider.overlay.textShadow,
        }}
      >
        {currentIndex + 1} / {photos.length}
      </Typography>
    </Box>
  );
};

export default PhotoSlider;
