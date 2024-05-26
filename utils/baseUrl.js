const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://innovations-kraft.octansidn.com"
    : "http://localhost:3000";

export default baseUrl;
