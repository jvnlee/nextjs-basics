import PageTitle from "../../components/PageTitle";

export default function MovieDetail({ movieParams }) {
  const [title, id] = movieParams || [];
  return (
    <div>
      <PageTitle title={title} />
      <h1>{title}</h1>
    </div>
  );
}

export function getServerSideProps({ params: { movieParams } }) {
  return {
    props: { movieParams },
  };
}

/*
Got movie title and id info from the URL params, in server-side.
Then sent them to the props of the client side page function.

This way, the client-side will be already holding the data before
even rendering components on the page.
*/
