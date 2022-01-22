import { VFC } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

interface DeleteButtonProps {
  handleClick: () => void;
}

const DeleteButton: VFC<DeleteButtonProps> = ({ handleClick }) => (
  <IconButton aria-label="delete" onClick={handleClick}>
    <DeleteIcon />
  </IconButton>
);

export default DeleteButton;
