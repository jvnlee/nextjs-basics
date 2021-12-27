import { useRouter } from "next/router";

export default function TVShowDetail() {
  const router = useRouter();
  const { tvShowId } = router.query;
  /*
  useRouter()

  You cannot use "useParams" like in React, but instead, NextJS  provides "useRouter".
  To get the params of the pathname, you should approach to the "query" property of
  the "useRouter" as above.
  */
  return <h1>Route: /tv-shows/{tvShowId}</h1>;
}

/*
Dynamic Routes

If you are creating a route that has a variable pathname, make sure to put that name inside
the "[]" brackets.

ex)
pages > tv-shows > [tvShowId].js
= http://localhost:3000/tv-shows/:tvShowId (in a React Router way)
*/
