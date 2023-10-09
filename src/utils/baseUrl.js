const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://unchartedpeak.co.za"
    : "http://localhost:3000";

export default baseUrl;