const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 8080,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUrl:
    process.env.MONGODB_URL ||
    process.env.MONGO_HOST ||
    "mongodb://" +
      (process.env.IP || "127.0.0.1") +
      ":" +
      (process.env.MONGO_PORT || "27017") +
      "/mern-project",
};
export default config;
