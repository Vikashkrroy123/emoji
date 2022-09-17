
const Emojycon =({list})=>{
    return(
        <div className="container">
        {list.map((singleEmojy,idx)=>{
            return(
                <div className="container">
                  <div className='list'>
         <p>{singleEmojy.emoji}-{singleEmojy.description}</p>
         </div>  
                </div>
               )
        })}
      </div>      
    )
}
export default Emojycon