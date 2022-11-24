import axios,{AxiosResponse} from 'axios';
import React, { useEffect, useState } from 'react';
import './Meme.css';
import Meme_list from './meme_list';

type meme = {
  box_count: number
  height: number
  id: String
  name: String
  url: String
  width: number
};

function Meme_gen() {

  const [image,setImage] = useState<meme|null>(null);

  function getImage(img: meme){
    console.log(img);
    setImage(img);
  }

  return (
    <>
    <div className='flex'>
      <div className='meme_gen_box'>
        { image != null && 
          <img className='meme' src={image.url+''} ></img>
        }
      </div>
      <div className='flex'>
        <Meme_list setImage={getImage}/>
      </div>
    </div>
    </>
  );
}

export default Meme_gen;
