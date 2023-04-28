import '../styles/searchbar.css';

export function SearchBar () {
  return (
    <div className='searchBarCont'>
      <form>
        <input type="text" placeholder="search" name="search" className="searchBar" />
      </form>
    </div>
  );
}
