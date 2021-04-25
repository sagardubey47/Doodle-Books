import React from 'react'
import "./_bookContainer.scss"
import defaultImg from "../../image/defaultImg.jpg";


const BookContainer = ({volume}) => {

    const { volumeInfo} = volume;
    
    // to handle fallbacks
    const thumbnail = volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : defaultImg;
    const categories = volumeInfo.categories ? volumeInfo.categories : ["unknown"];
    const language = volumeInfo.language ? volumeInfo.language : "default:en";
    const publishedDate = volumeInfo.publishedDate ? volumeInfo.publishedDate : "2020";
    const title = volumeInfo.title ? volumeInfo.title : "unknown: mystry"
    const authors = volumeInfo.authors ? volumeInfo.authors : ["Mr anonymous"];
 
    return (
        
       
            <div className="book_container" >
                <img height="200" width="200" src={thumbnail} alt="thumbnail" />
                <div className="book_container_note">
                    <p><span>Title:</span> {title}</p>
                    <p><span>Author:</span> {authors[0]}</p>
                    <p><span>Published Date: </span> {publishedDate} </p>
                    <p><span>Categories: </span> {categories} </p>
                    <p><span>Language: </span> {language} </p>
                </div>
            </div>
        
    )
}

export default BookContainer
