import {Box, Grid, Typography} from "@mui/material";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Favorites = () => {
    const {list, favorites} = useSelector((state) => state.products);
    const favoriteProducts = list.filter(p => favorites.includes(p.id));
    return (
        <Box  p={3}>
            <Typography variant="h4" mb={3} align="center">Favorites</Typography>
            <Grid container spacing={3} justifyContent="center">
                {favoriteProducts.length > 0 ? (favoriteProducts.map(p => (
                    <Grid key={p.id}>
                        <ProductCard product={p} />
                    </Grid>
                )))  : (<Typography variant="body1" align="center" sx={{width: "100%"}}> No hay productos favoritos</Typography>)} 
             </Grid>   
        </Box>
    );
};
export default Favorites;