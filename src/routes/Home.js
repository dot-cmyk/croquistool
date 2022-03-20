import CCsubmit from "components/Csubmit";
import { v4 as uuidv4 } from 'uuid';
import { dbService ,storageService} from "fbase";
import React, { useEffect, useRef, useState } from "react";
import CanvasDraw from "../../src/canvasDrawIndex";
import   firebase from "firebase/compat/app";
 const Home=({userObj}) => {
    const [Csubmit,setCsubmit]= useState("");
    const [Csubmits,setCsubmits]= useState([]);
    const [Line,setLine]= useState([]);
    const canvasRef = useRef();
    const [pinNum,setPinNum]=useState("");
    const [randomPinNum,setRandomPinNum]=useState([]);
    const [pinReload,setPinreload]=useState(0);
    const [pinID,setPinID]=useState(0);
    const [croquisTime,setCroquisTime]=useState(60);

        const [min,setMin]=useState(0);
        const [sec,setSec]=useState(0);
        const time=useRef(croquisTime);
        const timeId=useRef(null);

    const refreshAndSubmit =()=>{
        setPinreload(pinReload+1);
            
            setPinID(pinID+1);
            console.log("timeout",randomPinNum[pinID])
            time.current=croquisTime;
            
            const data = canvasRef.current.getSaveData();
            canvasRef.current.clear();
        
            
            dbService.collection("Csubmit").add({
                text:data,
                createdAt: Date.now(),
                creatorId: userObj.uid,
                heart:(0),
               //  refPhoto:{refPhoto},
                //pinNumber:randomPinNum,
            });
            setCsubmit(""); 

            //clearInterval(timeId.current);
    }
    useEffect(()=> {
        timeId.current= setInterval(()=>{
            setMin(parseInt(time.current/60));
            setSec(time.current % 60);
            time.current -= 1;
        },1000);
        return()=> clearInterval(timeId.current);
    },[]);

    useEffect(()=> {
        if(time.current<=-1){
            refreshAndSubmit();
            
            
        }
    },[sec]);

    useEffect(()=> {
      
             
     
       
             dbService.doc(`RefDB/refStrings`).get().then((doc) => {
            if (doc.exists) {
                //console.log("Document data:", doc.data().refUrl);
                //setRandomPinNum(doc.data().refUrl);
                //console.log("doc",doc.data().refUrl)
                const random=doc.data().refUrl.sort(() => Math.random() - 0.5);
                
                
                setRandomPinNum(random);
               
                
                
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
             
        });


       
        dbService.collection("Csubmit").onSnapshot((snapshot) =>{
            const CsubmitArray = snapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data(),
            }));
            
            setCsubmits(CsubmitArray);
            //console.log(Csubmits);
        });

       

    },[]);
     const onSubmit= async(event) => {
         event.preventDefault();
        //  const data = canvasRef.current.getSaveData();
        //  canvasRef.current.clear();
     
         
        //  await dbService.collection("Csubmit").add({
        //      text:data,
        //      createdAt: Date.now(),
        //      creatorId: userObj.uid,
        //      heart:(0),
        //     //  refPhoto:{refPhoto},
        //      //pinNumber:randomPinNum,
        //  });
        //  setCsubmit(""); 
        refreshAndSubmit();
     };
     const onSubmitPinNum= async(event) => {
        event.preventDefault();
        const pinDocRef= dbService.doc(`RefDB/refStrings`);
        pinDocRef.update({
            refUrl:firebase.firestore.FieldValue.arrayUnion(pinNum)
        });
           
        setPinNum("")

     }
     const onChange = (event)=> {
         const {
             target:{value},
         }=event;
         setPinNum(value);
     }
     const onChangeTime = (event)=> {
         const {
             target:{value},
         }=event;
         setCroquisTime(value);
     }

     const onSubmitTime= async(event) => {
        event.preventDefault();
        //setCroquisTime(0)
     }
    //  const onChange = (event)=> {
    //      const {
    //          target:{value},
    //      }=event;
    //      setCsubmit(value);
    //  }

    //  const onSubmitImage= async(event) => {
    //     event.preventDefault();
    //     const fileRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
    //     const response = await fileRef.putString(imageString,"data_url");
    //     const imageUrl =await response.ref.getDownloadURL();
    //     setImageString("");
    //  }
    //  const onFileChange= (event)=>{
    //     const {
    //         target:{files}
    //     }= event;
    //     const theFile = files[0];
    //     const reader= new FileReader();
    //     reader.onloadend = (finishedEvent)=>{
    //         const {
    //             currentTarget:{result},
    //         }=finishedEvent;
            
    //         setImageString(result);
    //     }
    //     reader.readAsDataURL(theFile);
    //  }

  return(
      
  <div>
       <form onSubmit={onSubmitTime}>
          <input value={croquisTime} onChange= {onChangeTime} type={"number"}  placeholder="Input Croquis Time"  />
          <input type={"submit"} value="Set Time"/>
          
      </form>
      <div>
          {min} 분 {sec} 초
      </div>
      <form onSubmit={onSubmitPinNum}>
          <input value={pinNum} onChange= {onChange} type={"text"}  placeholder="You Can Upload Pinterst Pin By Url Number"  />
          <input type={"submit"} value="Upload Pin"/>
          
      </form>
      
            <div>https://assets.pinterest.com/ext/embed.html?id={randomPinNum[pinID]}    {pinID}</div>
      <iframe key={pinReload} src={"https://assets.pinterest.com/ext/embed.html?id="+randomPinNum[pinID]} height="998" width="600" frameBorder={0} scrolling="no" ></iframe>

      <form onSubmit={onSubmit}>
      <div><CanvasDraw 
        canvasWidth={1268}
        canvasHeight={1668}
        ref={canvasRef}
      /></div>
          {/* <input value={Csubmit} onChange= {onChange} type={"text"} placeholder="what'on your mind?" maxLength={120} /> */}
          <input type={"submit"} value="Upload Your Drawing"/>
          
      </form>
      
      {/* <form onSubmit={onSubmitImage}>
            <input type={"file"} accept="image/*" onChange={onFileChange}/>
            <input type={"submit"} value="Upload Croquis Images"/>        
      </form> */}
        

        

      
      {/* <div>
          {Csubmits.map((Csubmit)=>(
              <CCsubmit key={Csubmit.id} CsubmitObj={Csubmit} isOwner={Csubmit.creatorId=== userObj.uid} />
          ))}
      </div> */}
  </div>
  )
 };
 export default Home;