import EditIcon from "@mui/icons-material/Edit";
import { Box, IconButton } from "@mui/material";
import EditDialog from "./EditDialog";
import { useState } from "react";

export default function EditAction({ todo, onTodoEdit }) {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }

  return (
    <Box>
      <IconButton onClick={handleOpen}>
        <EditIcon />
      </IconButton>
      <EditDialog
        todo={todo}
        onTodoEdit={onTodoEdit}
        onClose={handleClose}
        open={open}
      />
    </Box>
  );
}
