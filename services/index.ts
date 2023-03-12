import AuthService from "./AuthService";
import RestService from "./RestService";

export type ServiceFactory = {
  users: RestService<{
    businessTypes: number;
    userName: string;
    email: string;
    password: string;
  }>;
  pokemon: RestService<PokemonList>;
  auth: AuthService;
};

export const initApiServices = () => ({
  users: new RestService("users"),
  pokemon: new RestService("pokemon", useRuntimeConfig().pokemonURL),
  auth: new AuthService(),
});

export default initApiServices;
