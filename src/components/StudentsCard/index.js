import "./styles.css"

export const StudentsCards = ({students: {name, image, house, gender}}) => {
    return(
        <>  
        
        <div className="students-card">
            <label>{name}</label>
            <img className="picture" src={image} alt={name}></img>
            <hr></hr>
            <label>from {house}</label>
            <p>{gender}</p>
        </div>


        </>
    )
}