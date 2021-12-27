import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";

export default function Home({ results }) {
  /*
  Case 1. Fetching data in the client-side

  const [movieData, setMovieData] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch("/movies")).json();
      
      // The fetch URL is hidden for API KEY security by the server.
      // This was done by adding a rewrite function inside "next.config.js".
      
      setMovieData(results);
    })();
  }, []);
  */

  const router = useRouter();
  const handleClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };
  return (
    <div className="container">
      <PageTitle title="Home" />
      {/* {!movieData && <h4>Loading...</h4>} */}
      {results?.map((movie) => (
        <div
          className="movie"
          key={movie.id}
          onClick={() => handleClick(movie.id, movie.original_title)}
        >
          <div className="poster">
            <Image
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="poster"
              width={400}
              height={600}
            />
          </div>
          <Link href={`/movies/${movie.original_title}/${movie.id}`}>
            <a>
              <h4>{movie.original_title}</h4>
            </a>
          </Link>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
        .movie .poster {
          height: 345px;
          border-radius: 10px;
          overflow: hidden;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover .poster {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 14px;
          font-weight: 300;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

/*
Routes

NextJS will render the components inside of the "pages" folder as a respective route.
The "index.js" is considered the home route, which has the path "/".

What affects the route name is the name of the file. (not the name of the component)
ex) "about.js" will be rendered in the route "/about".
*/

// Case 2. Fetching data in the server-side.
export async function getServerSideProps() {
  const { results } = await (
    await fetch("http://localhost:3000/api/movies")
  ).json();
  // the URL here should be absolute URLs, because relative URLs work in the client-side only.
  return {
    props: {
      results,
    },
  };
}

/*
getServerSideProps function
(Do not change the name)

This function is needed when you want a certain page to be server-side-rendered only.
The function will only run in the server, never in the client-side.

As the name implies, this function will do some action in the server, and return an 
object that contains a key named "props". This "props" will contain any sort of data
that you would like to send. (the data would be movie data fetched from the API in this case)

Eventually, this props can be given to the page function. (the "Home" function in this case)

By applying this method, you can let the page to be rendered after the server completely
fetches the data. (= no loading state needed in the client side)
*/
