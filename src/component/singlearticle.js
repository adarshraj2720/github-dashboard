import React from "react";

import data from "../data";



function Singlearticle(event) {
    var id = event.match.params.id

    console.log(id)
    var idfilter = data.filter((e) => {
        return e.id == id
    })
    console.log(idfilter)

    return (
        <>
            <h1>singlearticle</h1>
            {
            idfilter.map((a)=>{
                return(
                    
                    <p>{a.slug}</p>
                    
                )
            })
        }
        </>
    )

}
export default Singlearticle