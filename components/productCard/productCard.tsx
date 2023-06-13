import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Box,
  Rating,
} from "@mui/material";
import { FavoriteBorder, Favorite, StarRate } from "@mui/icons-material";
import { Product } from "@/types/types";
import {
  openCardListModal,
  addToCardList,
  removeAmountFromCardList,
  removeFromCardList,
  selectCardList,
} from "../cardList/cardListSlice";
import {
  addToFavorite,
  removeFromFavorite,
  selectFavoriteList,
} from "../favoriteList/favoriteListSlice";
import { IncrementDecrement } from "../incrementDecrement/incrementDecrement";

export const ProductCard = ({
  product,
  isFavorite = false,
}: {
  product: Product;
  isFavorite?: boolean;
}) => {
  const dispatch = useDispatch();
  const cardList = useSelector(selectCardList);
  const favoriteList = useSelector(selectFavoriteList);
  const favorite = favoriteList.includes(product);
  // const [favorite, setFavorite] = useState(isFavorite);

  const ProductInCard = cardList.filter((item) => item.product === product);
  const productAmount = ProductInCard.length > 0 ? ProductInCard[0].amount : 0;
  const addToFavourite = () => {
    if (favorite) {
      dispatch(removeFromFavorite(product));
    } else {
      dispatch(addToFavorite(product));
    }
  };

  return (
    <Card key={product.title} sx={{ width: 345, margin: "8px" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={`https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/ui/assets/images/${product.filename}`}
        title={product.title}
      />
      <CardContent
        sx={{
          height: "218px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" flexGrow="2">
          {product.description}
        </Typography>
        <Typography variant="body2" color="text.secondary" flexShrink="0">
          {product.type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Rating name="read-only" value={product.rating} readOnly />
        </Typography>
        <Typography variant="body1">${product.price}</Typography>
      </CardContent>
      <CardActions>
        <Box>
          {productAmount ? (
            <IncrementDecrement
              amount={productAmount}
              inc={() => dispatch(addToCardList(product))}
              dec={() => dispatch(removeAmountFromCardList(product))}
              del={() => dispatch(removeFromCardList(product))}
            />
          ) : (
            <>
              <Button
                size="small"
                variant="contained"
                onClick={() => {
                  dispatch(addToCardList(product));
                }}
              >
                Add to Card
              </Button>
              <Button
                size="small"
                variant="contained"
                color="success"
                sx={{ marginLeft: "8px" }}
                onClick={() => {
                  dispatch(addToCardList(product));
                  dispatch(openCardListModal());
                }}
              >
                Buy Now
              </Button>
            </>
          )}
        </Box>

        <IconButton
          size="large"
          aria-label="show 4 new mails"
          color="inherit"
          sx={{ marginLeft: "auto" }}
          onClick={() => addToFavourite()}
        >
          {!favorite ? <FavoriteBorder /> : <Favorite />}
        </IconButton>
      </CardActions>
    </Card>
  );
};
