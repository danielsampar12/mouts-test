import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { UseFavoritePokemonsProvider } from "../hooks/favoritePokemons";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UseFavoritePokemonsProvider>
      <Component {...pageProps} />
    </UseFavoritePokemonsProvider>
  );
}

export default MyApp;
