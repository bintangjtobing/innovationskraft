const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://innovationskraft.octansidn.com"
    : "http://localhost:3000";

export default baseUrl;
