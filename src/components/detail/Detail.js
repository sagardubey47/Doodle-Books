import React from 'react'
import defaultImg from "../../image/defaultImg.jpg";
import {useSelector} from "react-redux"
import "./_detail.scss"


const Detail = ({handleBack}) => {

  const model = useSelector(state => state.modelData.model)  
  const {volumeInfo} = model;
  const regex = /(<([^>]+)>)/ig;

  const authors = volumeInfo ? volumeInfo.authors : ["Mr anonymous"];
  const canonicalVolumeLink = volumeInfo ? volumeInfo.canonicalVolumeLink : null;
  const categories = volumeInfo ? volumeInfo.categories : ["unknown"];
  const description = volumeInfo ? volumeInfo.description?.replace(regex, '') : "Not Available";
  const thumbnailLg = volumeInfo ? (volumeInfo.imageLinks ? volumeInfo.imageLinks.large: defaultImg) : defaultImg;  
  const previewLink = volumeInfo ? volumeInfo.previewLink : null;
  const publishedDate = volumeInfo ? volumeInfo.publishedDate : "2020";
  const publisher = volumeInfo ? volumeInfo.publisher : "Mr anonymous";
  const ratingsCount = volumeInfo ? volumeInfo.ratingsCount : 0;
  const title = volumeInfo ? volumeInfo.title : "unknown: mystry";

     return(
            <div className="detail_container">
              
              <div className="detail_container_top">
                 <img src={thumbnailLg} alt="thumbnail" /> 
                 <div className="detail_container_top_note" >
                     <p ><span>Title:</span> {title}</p>
                     <p ><span>Author: </span> {authors ? authors[0] : "Mr anonymous"}</p>
                     <p ><span>Published Date: </span> {publishedDate} </p>
                     <p ><span>Categories: </span> {categories} </p>
                     <p ><span>Publisher: </span> {publisher} </p>
                     <p ><span>Ratings Count: </span> {ratingsCount} </p>
                     <button >
                       <a href={previewLink} target="blank">Preview</a>
                     </button> 
                     <button>
                        <a href={canonicalVolumeLink} target="blank">Canonical View</a>
                     </button> 
                     <button onClick={handleBack}>go back</button>
                 </div>
              </div>
              <div className="detail_container_bottom">
                  <p ><span style={{fontWeight:"700"}}>Description: </span> {description} </p>
              </div> 
            </div>
          )
}

export default Detail
