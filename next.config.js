const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"],
  },
  /*
  images config

  This option is required when you are fetching images from external sources.
  NextJS explains this option as a way of protecting your app from malicious users.
  
  The "domains" option takes an array of domains where you are fetching images from.
  */
  async redirects() {
    return [
      {
        source: "/some-old-route/:path*",
        destination: "/new-route/:path*",
        permanent: false,
      },
    ];
  },
  /*
  redirects function

  By configuring this function, you are able to redirect the user from the "source" URL
  to the "destination" URL.

  By putting the "/:path*" in the end, any sub-path following the path you've written
  in front of will be in effect.

  The "permanent" option is for instructing the client(browser) or the search engine to
  cache this redirect settings forever.
  true = forever, false = temporary(not-cached)
  */
  async rewrites() {
    return [
      {
        source: "/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
  /*
  rewrites function

  By configuring this function, you are able to rewrite the requested URL from the "source" URL
  to the "destination" URL.

  This acts as an URL proxy, which the user cannot notice.
  Unlike the redirects function, this function is for hiding(=masking) certain URL, which in this
  case, would be for hiding the data fetch URL that contains a secret API_KEY.

  By putting the "/:path*" in the end, any sub-path following the path you've written
  in front of will be in effect.
  */
};
