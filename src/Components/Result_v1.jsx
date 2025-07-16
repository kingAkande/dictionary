import React from "react";
import playbutton from "../assets/PlayButton.png"

const Result_v1 = ({wordApi , phoneticText , audioLink}) => {

  // function play(){
  //   const textWithAudio =[]
  //   const getaudio =audioLink.map((x)=> x?.audio && x?.text ? textWithAudio.push(x?.audio) : null )
  //   const audio = new Audio(textWithAudio)
  //   audio.play().catch(console.error);
  // }

  function play() {
  const firstAudioWithText = audioLink.find(x => x?.audio && x?.text);
  const onlyAudio = audioLink.find((x)=>x.audio);

  if (firstAudioWithText) {
    const audio = new Audio(firstAudioWithText.audio);
    audio.play().catch(console.error);
  } else if(onlyAudio) {
       const audio2 = new Audio(onlyAudio.audio);
    audio2.play().catch(console.error);
  }else alert("doesn't have a sound") 
}


  return (
    <div className="w-[737px] h-[144px] flex items-center justify-between mb-6">
        <div>

      <h1 className="font-bold text-7xl w-[293px] h-[77px]  ">{wordApi}</h1>
      <p className="mt-2 text-3xl text-[#A445ED] font-sans ">{phoneticText}</p>
        </div>
      <div onClick={play} className="w-[73.47px] h-[75px] rounded-full bg-[#ead7f8] relative ">
        <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  " src={playbutton} alt="play button" />
      </div>
    </div>
  );
};

export default Result_v1;
