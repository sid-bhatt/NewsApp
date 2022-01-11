import React from 'react'
import './Cards.css'
function NewsItem({ title, description, imageUrl, newUrl, source }) {
    return (
        <div>
            <div className="card" >
                <span class="position-absolute top-0 translate-middle badge rounded-pill bg-warning" style={{left: '90%', zIndex: '1'}}>
                    {source}
                </span>
                <img className="image img-thumbnail" src={!imageUrl ? 'https://images.indianexpress.com/2022/01/COMET-COLORS.jpg' : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{!description ? 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. El' : description}...</p>
                    <a href={newUrl} target="_blank" className="btn btn-sm btn-dark" rel="noreferrer">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
