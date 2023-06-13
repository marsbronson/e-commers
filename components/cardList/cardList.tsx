import { Modal, Typography, Paper, List, Box, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  closeCardListModal,
  selectCardListModalOpen,
  selectCardList,
  clearCardList,
} from "./cardListSlice";
import React from "react";
import { CardItem } from "./cardItem";
import { openCheckoutModal } from "../checkoutModal/checkoutModalSlice";

export const CardList = () => {
  const dispatch = useDispatch();
  const open = useSelector(selectCardListModalOpen);
  const cardList = useSelector(selectCardList);

  return (
    <Modal
      open={open}
      onClose={() => {
        dispatch(closeCardListModal());
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Paper
        sx={{
          maxWidth: "720px",
          width: "100%",
          padding: "16px",
        }}
      >
        <Typography
          id="modal-modal-title"
          variant="h4"
          component="h4"
          sx={{ padding: "8px" }}
        >
          Card List
        </Typography>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h6"
          sx={{ padding: "8px" }}
        >
          {cardList.length} items
        </Typography>

        <List
          sx={{
            margin: "16px 0",
            maxHeight: "calc(100vh - 424px)",
            overflowY: "auto",
          }}
        >
          {cardList.map((item) => (
            <CardItem item={item} key={item.product.title} />
          ))}
        </List>
        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", sm: "column", xs: "column" },
            justifyContent: { md: "space-between", sm: "center", xs: "center" },
            position: "sticky",
            bottom: "16px",
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h4"
            sx={{
              padding: "8px",
              marginRight: {
                md: "auto",
                sm: "0",
                textAlign: "center",
              },
            }}
          >
            Total: $
            {cardList
              .reduce((acc, item) => {
                return acc + item.product.price * item.amount;
              }, 0)
              .toFixed(2)}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: { md: "flex-end", sm: "center", xs: "center" },
            }}
          >
            <Button
              variant="contained"
              color="error"
              sx={{ margin: "8px" }}
              onClick={() => {
                dispatch(clearCardList());
              }}
            >
              Clear
            </Button>
            <Button
              variant="contained"
              sx={{ margin: "8px" }}
              onClick={() => {
                dispatch(closeCardListModal());
              }}
            >
              Close
            </Button>
            <Button
              variant="contained"
              color="success"
              sx={{ margin: "8px" }}
              onClick={() => {
                dispatch(closeCardListModal());
                dispatch(openCheckoutModal());
                dispatch(clearCardList());
              }}
            >
              Checkout
            </Button>
          </Box>
        </Box>
      </Paper>
    </Modal>
  );
};
