import express from "express";
import passport from "passport";
import recipeRouter from "./routes/recipe.js";
import authRouter from "./routes/auth.js";
import setupJWTStrategy from "./auth/index.js";

export default function createServer() {
  const app = express();

  app.use(express.json());

  setupJWTStrategy(passport);

  app.use("/auth", authRouter);

  app.use("/recipe", recipeRouter(passport));

  return app;
}
