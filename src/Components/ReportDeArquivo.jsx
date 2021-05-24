import React from 'react'

import PostData from './teste.json'

export function ReportDeArquivo()
{
    return(
        <div>
            {PostData.map((postDetail,index) =>{
                return <div>
                            <h1>{postDetail.errorsHeader}</h1>
                            <h1>{postDetail.errorsDetalhe}</h1>
                       </div> 
            })}
        </div>
    )
}

export default ReportDeArquivo