import React from "react";
import API from "../utils/API";
import Book150 from "../images/book150.png"

function Card(prop) {
  let props = prop.data;
  let image;

  if (props.imageLinks) {
    image = props.imageLinks.thumbnail
  }
  else {
    image = Book150
  }

  let card = {
    title: props.title,
    authors: props.authors,
    description: props.description,
    image: image,
    link: props.previewLink,
    publishedDate: props.publishedDate,
    rating: props.averageRating,
    categories: props.categories,
    pageCount: props.pageCount
  }

  function addCard() {
    API.saveBook(card)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  return (
    <div className="card col-lg-8">
      <div className="card-body">
        <h2 className="card-title row">{props.title}</h2>
        <h4 className="card-text row">Authors: {props.authors}</h4>
        <div className="container">
          <div className="row">
            <div className="col-lg-auto">
              <img src={image} className="card-img-left" alt={props.title} />
              <br />
              <a type="button" href={props.previewLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View</a>
              <button className="btn btn-success" onClick={() => addCard()}>Add</button>
            </div>
            <br />
            <div className="col-lg-auto">
              <p className="card-text">Description: {props.description}</p>
              <br />
              <p className="card-text">Pages: {props.pageCount}</p>
              <br />
              <p className="card-text">Published: {props.publishedDate}</p>
              <br />
              <p className="card-text">Category: {props.categories}</p>
              <br />
              <p className="card-text">Rating: {props.averageRating}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;