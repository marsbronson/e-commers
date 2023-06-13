import { Modal, Typography, Paper, IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  closeCheckoutModal,
  selectCheckoutModalOpen,
} from "./checkoutModalSlice";
import { CheckCircle } from "@mui/icons-material";

export const CheckoutModal = () => {
  const dispatch = useDispatch();
  const open = useSelector(selectCheckoutModalOpen);

  return (
    <Modal
      open={open}
      onClose={() => {
        dispatch(closeCheckoutModal());
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Paper
        sx={{
          padding: "36px",
          maxWidth: "456px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography id="modal-modal-title" variant="h4" component="h4">
          Congratulation!
        </Typography>
        <Typography id="modal-modal-title" variant="h6" component="h6">
          You have successfully purchased the products.
        </Typography>
        <IconButton color="success">
          <CheckCircle sx={{ fontSize: "108px" }} />
        </IconButton>
      </Paper>
    </Modal>
  );
};
