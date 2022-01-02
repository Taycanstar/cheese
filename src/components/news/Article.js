import React, {useState} from 'react'
import "../../styles/news.css"

const Article = ({title, name, summary, text}) => {


    return (
        <div className='article-content'>
            <div className="article-main">
                <h1 className='article-title'>{title}</h1>
                <h3 className='article-summary'> Brief summary of article</h3>
                <hr />
                <p className='article-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ab iure vitae, recusandae vel magnam facere voluptatum blanditiis assumenda quis. Eius perspiciatis incidunt distinctio repellendus nulla, temporibus est neque, delectus, quibusdam consequatur sit earum? Aperiam mollitia recusandae, quas eaque earum dicta nulla molestiae beatae necessitatibus accusamus ipsum delectus magni repudiandae quis eum modi soluta qui velit quibusdam dolore officia amet, minima facere. Eligendi adipisci dolor consectetur hic exercitationem minima vel reprehenderit at error neque odit ad incidunt dolorum odio autem, atque illo magnam a. Pariatur distinctio voluptas aliquam soluta temporibus voluptates numquam harum culpa, laudantium, recusandae hic nobis, unde consectetur!</p>

                <h6 className='article-author'>By Ryan Reynolds</h6>
            </div>
            
        </div>
    )
}

export default Article
