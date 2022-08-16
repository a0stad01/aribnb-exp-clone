
function Card({items}) {
    let badgeText 
    if (items.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (items.location === "Online") {
        badgeText = "ONLINE"
    }

  return  items.map(i=>{
return (
    <div className="card">
        <div className="card-img">
            {i.coverImg}
        </div>
            <h2 className="title">{i.title}</h2>
         <section className="stats">
            <p className="stats-rating">{i.stats.rating}</p>
        <div>
            <p>({i.stats.reviewCount})</p>
            <p>{i.location}</p>
        </div>
        </section>
            <p>{i.description}</p>
            <p>{i.price}</p>
            <p>{i.openSpots}</p>
            <p className="badge">{badgeText}</p>
    </div>
   
            )
        }
    )
}

export default Card; 