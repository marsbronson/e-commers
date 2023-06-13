import {
  AppBar,
  Box,
  IconButton,
  Badge,
  Typography,
  Toolbar,
} from "@mui/material";
import { ShoppingBasket, Favorite } from "@mui/icons-material";
import { openCardListModal, selectCardList } from "../cardList/cardListSlice";
import {
  openFavoriteListModal,
  selectFavoriteList,
} from "../favoriteList/favoriteListSlice";
import { useDispatch, useSelector } from "react-redux";

export const Header = () => {
  const dispatch = useDispatch();
  const FavoriteListAmount = useSelector(selectFavoriteList).length;
  const CardListAmount = useSelector(selectCardList).length;
  return (
    <AppBar position="fixed" sx={{ padding: "8px" }}>
      <Toolbar sx={{ alignItems: "center", minHeight: "36px" }}>
        <Typography variant="h4" component="span">
          Grocery
        </Typography>
        <Typography component="span" sx={{ flexGrow: 1, marginLeft: "8px" }}>
          by Y.ihnatenko
        </Typography>
        <Box sx={{ display: "flex", marginLeft: "auto" }}>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
            onClick={() => dispatch(openFavoriteListModal())}
            disabled={FavoriteListAmount === 0}
          >
            <Badge badgeContent={FavoriteListAmount} color="error">
              <Favorite />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
            onClick={() => dispatch(openCardListModal())}
            disabled={CardListAmount === 0}
          >
            <Badge badgeContent={CardListAmount} color="error">
              <ShoppingBasket />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
