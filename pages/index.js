export default function Home() {
  return (
    <div>
      <h1 className="home">Home</h1>
      <style jsx>{`
        .home {
          color: blue;
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
