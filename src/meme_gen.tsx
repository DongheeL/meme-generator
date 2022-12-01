import { TextField } from '@mui/material';
import axios,{AxiosResponse} from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { setTextRange } from 'typescript';
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
  const [text,setText] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);


  function getImage(img: meme){
    console.log(img);
    setImage(img);
  }

  useEffect(()=>{
    //canvas에 이미지 추가 
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if(canvas!=null){
      ctx?.clearRect(0,0, canvas?.width, canvas?.height);
      const image = imageRef.current;
      if(image!=null){
        ctx?.drawImage(image,0,0,canvas?.width,canvas?.height)
      }
    }
  }, [image])

  useEffect(()=>{
    console.log(text);
    //canvas에 이미지 추가 
    // const canvas = canvasRef.current;
    // const ctx = canvas?.getContext("2d");
    // // ctx.tex
    // if(ctx!=null){
    //   // ctx?.clearRect(0,0, canvas?.width, canvas?.height);
    //   ctx.font="bold 60px sans-serif";
    //   ctx?.fillText(text,10,60);
    // }
  }, [text])

  function showText(){
    //canvas에 이미지 추가 
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    // ctx.tex
    if(ctx!=null){
      // ctx?.clearRect(0,0, canvas?.width, canvas?.height);
      ctx.font="bold 60px sans-serif";
      ctx?.fillText(text,10,60);
    }
  }




  return (
    <>
    <div className='flex'>
      <div className='meme_gen_box'>
        <canvas className='canvas' ref={canvasRef} width={2000} height={2000} ></canvas>
        { image != null && 
          <img className='meme' ref={imageRef} src={image.url+''} hidden={true} ></img>
        }
      </div>
      <div >
        <Meme_list setImage={getImage}/>
        <div>
          <input onKeyDown={(event)=>{if(event.key=='Enter'){showText()}}} onChange={(event)=>{setText(event?.target.value)}} ></input>
          {/* <TextField onKeyPress={()=>{}} onChange={(event)=>{setText(event?.target.value)}} ></TextField> */}
        </div>
      </div>
    </div>
    </>
  );
}

export default Meme_gen;
