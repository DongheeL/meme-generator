import axios,{AxiosResponse} from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import './Meme.css';

type meme = {
  box_count: number
  height: number
  id: String
  name: String
  url: String
  width: number
};
type ITestInterface = {success:boolean, data:{memes:meme[]}} | undefined;

function Meme_list() {
  
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
    console.log(left);
  },[left])

  const testAPI = async (): Promise<any> => {
      return axios({
        url:`https://api.imgflip.com/get_memes`,
      })
      
  };


  return (
    <div className='scroll_box'>

    <div className='meme_list' style={{left:`${left}px`}}>
        {memes.map((val)=>{
          return (
            <div className='sm_meme_box'>
              <img className='sm_meme' src={val.url+''} ></img>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Meme_list;
