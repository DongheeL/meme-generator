import { TextField } from '@mui/material';
import axios,{AxiosResponse} from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Draggable, {DraggableCore, DraggableData, DraggableEvent} from 'react-draggable';
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

  function eventHandler_onDrag(e:DraggableEvent, data:DraggableData){
    console.log('Event Type', e.type);
    console.log({e, data});
  }
  function eventHandler_onStart(e:DraggableEvent, data:DraggableData){
    console.log('Event Type', e.type);
    console.log({e, data});
  }
  function eventHandler_onStop(e:DraggableEvent, data:DraggableData){
    console.log('Event Type', e.type);
    console.log({e, data});
  }
  function onMouseDown(e:MouseEvent){
    console.log('Event Type', e.type);
    console.log({e});
  }




  return (
    <>
    <div className='flex'>
      <div className='meme_gen_box'>
        {/* <canvas className='canvas' ref={canvasRef} width={2000} height={2000} ></canvas> */}
        { image != null && 
        <>
          <img className='meme' ref={imageRef} src={image.url+''}  ></img>
          <Draggable
            onStart={(e:DraggableEvent, data:DraggableData)=>eventHandler_onStart(e, data)}
            onDrag={(e:DraggableEvent, data:DraggableData)=>eventHandler_onDrag(e, data)}
            onStop={(e:DraggableEvent, data:DraggableData)=>eventHandler_onStop(e, data)}
            onMouseDown={(e:MouseEvent)=>onMouseDown(e)}
            defaultPosition={{x: 0, y: 0}}
          >
            <div>
              draggable div
            </div>
          </Draggable>
        </>
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
