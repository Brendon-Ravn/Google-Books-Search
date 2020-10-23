import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar.js";
import Jumbotron from "../Jumbotron.js";
import Container from "../Container.js"
import SavedCard from "../Savedcard.js";
import API from "../../utils/API";

function Saved() {
  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks() {
    API.getBooks()
      .then((response) => {
        setSavedBooks(response.data);
      }).catch(err => console.log(err));
  }

  return (
    <div className="Saved">
      <Navbar />
      <Container>
        <Jumbotron />
        {savedBooks.map(book => {
          return (
            <SavedCard data={book} key={book._id} />
          )
        })}
      </Container>
    </div>
  );
}

export default Saved;