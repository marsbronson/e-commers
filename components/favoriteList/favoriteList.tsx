import { Modal, Typography, Paper, Box, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  closeFavoriteListModal,
  selectFavoriteListModalOpen,
  selectFavoriteList,
  clearFavoriteList,
} from "./favoriteListSlice";
import { Product } from "@/types/types";
import { ProductCard } from "../productCard/productCard";

export const FavoriteList = () => {
  const dispatch = useDispatch();
  const open = useSelector(selectFavoriteListModalOpen);
  const favoriteList = useSelector(selectFavoriteList);

  return (
    <Modal
      open={open}
      onClose={() => {
        dispatch(closeFavoriteListModal());
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Paper
        sx={{
          padding: "16px",
          maxWidth: { lg: "1460px", md: "740px", sm: "100%" },
          width: "100%",
        }}
      >
        <Typography id="modal-modal-title" variant="h4" component="h4">
          Favorite List
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "16px 0",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              flexFlow: "wrap",
              margin: "16px 0",
              maxHeight: "calc(100vh - 210px)",
              overflowY: "auto",
              width: "100%",
            }}
          >
            {favoriteList.map((product: Product) => (
              <ProductCard product={product} key={product.title} isFavorite />
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            position: "sticky",
            bottom: "16px",
          }}
        >
          <Button
            variant="contained"
            color="error"
            sx={{ marginRight: "8px" }}
            onClick={() => {
              dispatch(clearFavoriteList());
            }}
          >
            Clear
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              dispatch(closeFavoriteListModal());
            }}
          >
            Close
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
};
