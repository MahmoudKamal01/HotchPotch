module.exports = {
  env: {
    BASE_URL: "https://hotchpotch-store.herokuapp.com",
    MONGODB_URL:
      "mongodb+srv://drogo:1234@cluster0.g7ulmmn.mongodb.net/?retryWrites=true&w=majority",
    ACCESS_TOKEN_SECRET: "0q%nmK@ZLyYBitw5myizzl@B$!dXPZ9n@X%QM^&Hnumh^YcBm1",
    REFRESH_TOKEN_SECRET: "66nd!6C6gu*nE7BgR7HqY8@XqPv@xj$&IAdE9A28r^zVv0cVmG",
    PAYPAL_CLIENT_ID:
      "AYTRW2CZtuvepq1OV73qhysgP60zG52PpL-b0GEVnKTtbJEvuwbnrbrft9lXoJHLZE-9uYRlaAk0g-wQ",
    CLOUD_UPDATE_PRESET: "nextjs_store",
    CLOUD_NAME: "depaw8t53",
    CLOUD_API: "https://api.cloudinary.com/v1_1/depaw8t53/image/upload",
  },

  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
};
