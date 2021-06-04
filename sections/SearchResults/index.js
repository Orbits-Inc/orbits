import People from "./people.section";

function SearchResults({ query }) {
  return (
    <div>
      <People query={query} />
    </div>
  );
}

export default SearchResults;
