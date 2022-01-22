import { VFC, useMemo } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { baseLength, CharStatus, CHAR_STATUSES } from "../constants";

export const pickColor = (status: CharStatus) => {
  if (status === CHAR_STATUSES.IN_THE_WORD_AND_COLLECT_SPOT) {
    return "success";
  }
  if (status === CHAR_STATUSES.IN_THE_WORD_AND_WRONG_SPOT) {
    return "error";
  }
  return "primary";
};

interface CharButtonProps {
  char: string;
  handleClick: () => void;
  status: CharStatus;
}

const CharButton: VFC<CharButtonProps> = ({ char, handleClick, status }) => {
  const color = useMemo(() => pickColor(status), [status]);

  return (
    <Button
      color={color}
      variant="contained"
      sx={{
        width: baseLength,
        height: "100%",
        marginLeft: 1,
        marginRight: 1,
      }}
      onClick={handleClick}
    >
      <Typography fontWeight="bold" fontSize={32} sx={{ color: "#FFFFFF" }}>
        {char}
      </Typography>
    </Button>
  );
};

export default CharButton;
