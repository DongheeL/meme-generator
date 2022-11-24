import axios,{AxiosResponse} from 'axios';
import React, { useEffect, useState } from 'react';
import './Meme.css';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

type meme = {
  box_count: number
  height: number
  id: String
  name: String
  url: String
  width: number
};
type ITestInterface = {success:boolean, data:{memes:meme[]}} | undefined;

interface IProps{
  setImage:(img:meme)=>void
}

function Meme_list({setImage}:IProps){
  
  const [memes,setMemes] = useState<meme[]>([]);
  const [left,setLeft] = useState<number>(0);

  useEffect(() => {
    if(memes.length==0){
      testAPI()
      .then((result)=>{
        let meme_data: ITestInterface = result.data;
        if(meme_data?.data != undefined){
          setMemes(meme_data.data.memes);
        }
      })
    }
  },[]);

  useEffect(()=>{
    
  },[left])

  const testAPI = async (): Promise<any> => {
      return axios({
        url:`https://api.imgflip.com/get_memes`,
      })
      
  };

  function decrease_left(){
    if(left>-9500){
      setLeft(left-500);
    }
  }

  function increase_left(){
    if(left<0){
      if(left>-500){
        setLeft(0);
      }
      setLeft(left+500);
    }
  }


  return (
    <>
      <div className='btn_box'>
        {left<0 && 
          <ArrowLeftIcon sx={{ fontSize: 90 }} onClick={increase_left} ></ArrowLeftIcon>
        }
      </div>
      <div className='scroll_box' id='scroll_box'>
        <div className='meme_list' style={{left:`${left}px`}}>
            {memes.map((val)=>{
              return (
                <div className='sm_meme_box'>
                  <img className='sm_meme' src={val.url+''} onClick={()=>setImage(val)} ></img>
                </div>
              )
            })}
        </div>
      </div>
      <div className='btn_box'>
        { left>-9500 &&
          <ArrowRightIcon sx={{ fontSize: 90 }} onClick={decrease_left} ></ArrowRightIcon>
        }
      </div>
    </>
  );
}

export default Meme_list;
