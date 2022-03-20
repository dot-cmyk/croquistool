import { dbService } from "fbase";
import React, { useEffect, useRef,useState } from "react";
import CanvasDraw from "../../src/canvasDrawIndex";

const CCsubmit =({CsubmitObj, isOwner})=>{
    const [editing,setEditing]= useState(false);
    const [newCsubmit,setnewCsubmit]=useState(CsubmitObj.text);
    // const [givedHeart,setGivedHeart]=useState(false)
    // const [yourheart,setYourHeart]=useState(CsubmitObj.heart);
    const canvasRef2 = useRef();
    // // canvasRef2.current.loadSaveData(CsubmitObj.text);
    useEffect(() => {
        canvasRef2.current.loadSaveData(CsubmitObj.text);
        
    },[]);
    const onDeleteClick= () => {
        const ok = window.confirm("wanna delete this?")
        if(ok){
            dbService.doc(`Csubmit/${CsubmitObj.id}`).delete();
        }
    };
    const toggleEditing=()=> setEditing(prev => !prev);
    const onSubmit = (event)=> {
        event.preventDefault();
        dbService.doc(`Csubmit/${CsubmitObj.id}`).update({
            text:newCsubmit,
        });
        setEditing(false);

    }
    const onChange = (event)=> {
        const {target:{value},
        }=event;
        setnewCsubmit(value);
    }
    //const toggleheart=()=> setYourHeart(prev => !prev);
    const onHeartClick= async() =>{
        
        await dbService.doc(`Csubmit/${CsubmitObj.id}`).update({
           heart:(1+(CsubmitObj.heart)),
        })
        console.log(CsubmitObj.heart)

    }
    return(
        <div>
            
        {
            editing ? (
            <><form onSubmit={onSubmit}><input value={newCsubmit} required onChange={onChange}/>
            <input type={"submit"} value="Update croquis"/>
            </form>
            <button onClick={toggleEditing}>cancel</button>
            </>
            ):(
            <>
            <div><CanvasDraw 
            ref={canvasRef2}
            disabled
            hideInterface
             /></div>
            
        {isOwner ? (
            <>

            <button disabled>❤ {CsubmitObj.heart}</button>
            <button onClick={onDeleteClick}>Delete</button>
            <button onClick={toggleEditing}>Redraw</button>
            </>
        ):(
            <>
            <button onClick={onHeartClick}>❤ {CsubmitObj.heart}</button>
            
            </>
        )}</>
            )}
        
    </div>
)
};
    

export default CCsubmit;