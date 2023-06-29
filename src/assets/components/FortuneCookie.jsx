const FortuneCookie = ({ data }) => {  
    return (
      < >
      <h1 className="title">GALLETAS DE LA FORTUNA</h1>
        <article className="container">        
            <div className="card">
              <p> {data.phrase}</p> 
            <div className="author">
              <p > « {data.author} »</p>  
            </div>            
            </div>                                                                  
        </article>                   
      </>
    )
  }
  export default FortuneCookie