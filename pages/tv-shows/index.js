export default function Movies() {
  return <h1>Route: /tv-shows</h1>;
}

/*
Nested Routes

To create nested routes, all you have to do is to create directories inside the pages folder.
The routes follow the directory tree.

The name of the folder will become the name of the route, and the components of this page
will be rendered from index.js.

ex)
pages > tv-shows > index.js
= http://localhost:3000/tv-shows

pages > tv-shows > popular.js
= http://localhost:3000/tv-shows/popular
*/
