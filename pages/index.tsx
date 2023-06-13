import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Paper, Container } from "@mui/material";
import { ProductCard } from "@/components/productCard/productCard";
import { Product } from "@/types/types";
import { Header } from "@/components/header/header";
import { CardList } from "@/components/cardList/cardList";
import { FavoriteList } from "@/components/favoriteList/favoriteList";
import { CheckoutModal } from "@/components/checkoutModal/checkoutModal";

export default function Home() {
  const query = useQuery({
    queryKey: ["products"],
    queryFn: () => {
      return axios("http://localhost:3001/products");
    },
  });
  return (
    <>
      <Header />

      <Container maxWidth="xl">
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexFlow: "wrap",
            marginTop: "96px",
            maxWidth: { lg: "1444px", md: "740px", sm: "100%" },
          }}
        >
          {query.data?.data.map((product: Product) => (
            <ProductCard product={product} key={product.title} />
          ))}
        </Paper>
      </Container>
      <CardList />
      <FavoriteList />
      <CheckoutModal />
    </>
  );
}
