import Image from "next/image";
import { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";

export default function Home() {
  const [movieData, setMovieData] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch("/movies")).json();
      /*
      The fetch URL is hidden for API KEY security by the server.
      This was done by adding a rewrite function inside "next.config.js".
      */
      setMovieData(results);
    })();
  }, []);

  return (
    <div className="container">
      <PageTitle title="Home" />
      {!movieData && <h4>Loading...</h4>}
      {movieData?.map((movie) => (
        <div key={movie.id} className="movie">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="poster"
            width={400}
            height={600}
          />
          <h4>{movie.original_title}</h4>
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
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 16px;
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
