import { IconButton, Stack, useTheme } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

interface NavigationControlsProps {
  onPrevious: () => void;
  onNext: () => void;
}

const NavigationControls = ({
  onPrevious,
  onNext,
}: NavigationControlsProps) => {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        position: "absolute",
        bottom: 20,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1,
      }}
    >
      <IconButton
        onClick={onPrevious}
        sx={{
          bgcolor: theme.customComponents.photoSlider.controls.background,
          "&:hover": {
            bgcolor:
              theme.customComponents.photoSlider.controls.hoverBackground,
          },
        }}
      >
        <NavigateBeforeIcon />
      </IconButton>
      <IconButton
        onClick={onNext}
        sx={{
          bgcolor: theme.customComponents.photoSlider.controls.background,
          "&:hover": {
            bgcolor:
              theme.customComponents.photoSlider.controls.hoverBackground,
          },
        }}
      >
        <NavigateNextIcon />
      </IconButton>
    </Stack>
  );
};

export default NavigationControls;
