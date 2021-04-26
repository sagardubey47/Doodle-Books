import React,{useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {getPopularVolumes} from "../../redux/action/data.action"
import "./_list.scss"
import BookContainer from "../bookContainer/BookContainer"
import {Link} from "react-router-dom"
import { getModel } from '../../redux/action/modelData.action';

const List = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopularVolumes())
    },[dispatch])
  
    const { volumes } = useSelector(state => state.homeVolumes);

    return (
        <div className="list-container">
          <h3>List of some top trending books</h3>
          <main>
              {volumes.map((volume) => {
                 
                  const handleClick = () => {
                          
                           dispatch(getModel(volume.id));
                         } 

                  return <Link to="/detail" onClick={handleClick} key={volume.id} className="link_style">
                            <BookContainer key={volume.id} volume={volume} />   
                         </Link>
                  
              })}
          </main> 
        </div>
    )
}

export default List
