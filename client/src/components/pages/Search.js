import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar.js";
import Jumbotron from "../Jumbotron.js";
import Container from "../Container.js"
import Card from "../Card"
import API from "../../utils/API";

const Search = () => {
  const [books, setBooks] = useState([]);
  const [searchObject, setSearchObject] = useState({});

  useEffect(() => {
    loadBooks("Cosmere");
  }, []);

  function loadBooks(search) {
    API.getGoogle(search)
      .then((response) => {
        setBooks(response.data.items);
      }).catch(err => console.log(err));
  }

  const handleSubmit = function (e) {
    e.preventDefault();
    loadBooks(searchObject);
    setSearchObject("");
  }

  return (
    <div className="search">
      <Navbar />
      <Container>
        <Jumbotron />
      </Container>
      <Container>
        <form className="col-lg-8" onSubmit={handleSubmit}>
          <input className="form-control form-control-lg" type="search" placeholder="Search For Books Here" onChange={(e) => setSearchObject(e.target.value)} />
        </form>
      </Container>
      <br />
      <Container>
        {books.map(book => {
          return (
            <Card data={book.volumeInfo} key={book.id} />
          )
        })}
      </Container>
    </div>
  );
}

export default Search;