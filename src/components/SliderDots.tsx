import { Box } from "@mui/material";
import type { Photo } from "../types";

const SliderDots = ({
  photos,
  currentIndex,
  setCurrentIndex,
}: {
  photos: Photo[] | undefined;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      gap={1}
      mt={2}
    >
      {photos?.map((_, index) => (
        <Box
          key={index}
          sx={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor:
              index === currentIndex ? "primary.main" : "grey.400",
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
          onClick={() => setCurrentIndex(index)}
        />
      ))}
    </Box>
  );
};

export default SliderDots;
