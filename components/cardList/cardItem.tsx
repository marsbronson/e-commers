import {
  ListItem,
  Box,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import { IncrementDecrement } from "../incrementDecrement/incrementDecrement";
import {
  addToCardList,
  removeAmountFromCardList,
  removeFromCardList,
} from "./cardListSlice";
import { Product } from "@/types/types";
import { useDispatch } from "react-redux";

interface CardItemProps {
  item: {
    product: Product;
    amount: number;
  };
}

export const CardItem = ({ item }: CardItemProps) => {
  const dispatch = useDispatch();
  return (
    <ListItem
      alignItems="center"
      sx={{
        display: { xs: "block", sm: "flex" },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "50%" },
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <ListItemAvatar>
          <Avatar
            alt={item.product.title}
            src={`https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/ui/assets/images/${item.product.filename}`}
          />
        </ListItemAvatar>
        <ListItemText
          primary={item.product.title}
          secondary={`$${item.product.price}`}
          sx={{ marginRight: "auto" }}
        />
      </Box>
      <Box
        sx={{
          width: { xs: "100%", sm: "50%" },
          height: "100%",
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-end" },
          alignItems: "center",
        }}
      >
        <IncrementDecrement
          amount={item.amount}
          inc={() => dispatch(addToCardList(item.product))}
          dec={() => dispatch(removeAmountFromCardList(item.product))}
          del={() => dispatch(removeFromCardList(item.product))}
        />
        <ListItemText
          sx={{ flex: "0 1 auto", width: "64px", textAlign: "right" }}
          primary={`$${(item.product.price * item.amount).toFixed(2)}`}
        />
      </Box>
    </ListItem>
  );
};
