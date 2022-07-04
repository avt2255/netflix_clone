import React, {  useEffect, useState } from 'react'
import axios from '../../axios'
import './RowPost.css'
import {imageUrl, API_KEY} from '../../Constants/Constants'
import YouTube from 'react-youtube'

function RowPost(props) {
  const [movies,setMovies] = useState([])
  const [urlid,setUrlid] = useState('')
  useEffect(()=>{
        axios.get(props.url).then(response=>{
          console.log(response.data)
          setMovies(response.data.results.sort(function(a,b){return 0.5-Math.random()}))
        }).catch(err=>{
          alert('Network error')
        })
  },[])
 
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  const handleMovie = (id)=>{
      console.log(id)
      axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
         if(response.data.results.length!==0){
           setUrlid(response.data.results[0])
         }
      })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
       <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? "smallPoster":"poster"} alt='poster' src={`${imageUrl+obj.backdrop_path}`}/>
          )
        }
            
        </div>
      {urlid && <YouTube className='video' videoId={urlid.key} opts={opts} />}  
      
    </div>
  )
}

export default RowPost
