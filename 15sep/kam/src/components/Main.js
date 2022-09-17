import {useState, useEffect} from'react'
import EmojyList from "../EmojyList";
import Emojycon from './Emojycon';
export default function Main(){
    const[list,setList]=useState(EmojyList)
    const[keyword,setKeyword]=useState(" ");
    const typed =(e)=>{
        const value=e.target.value;
        setKeyword(value)
    }
useEffect (_=>{
    //filter based on description, category, and alasess
    const filterList =EmojyList.filter(singleEmojy =>{


        
        if(singleEmojy.description.startsWith(keyword)){
            return true;
        }
        if(singleEmojy.category.startsWith(keyword)){
            return true;
        }
        if(singleEmojy.aliases.some(e=>e.startsWith(keyword))){
            return true;
        }
        return false;
    })
    setList(filterList)
},[keyword]);


    console.log(list);
    return(
        <main>
<div className='h2'>
<h2 className='ab' >Main section <spam className="spam">of the emojy*</spam></h2>
<input type="text" placeholder="Filter 

💛" onKeyUp={typed}/>
<h3> Result for-{keyword}</h3>
</div>
<hr/>
{list.length=== 0 ?(
    <h1>No emojy found</h1>
):(
<Emojycon list={list} />
)}
</main>
)
}