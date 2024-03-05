const Card = (props) => {
    return(
        <>
            <div className="nameSection">{props.name}</div><br/>
            <div className="rollnoSection"></div>{props.rollno}<br/>
            <div className="dateOfBirthSection">{props.dateOfBirth}</div><br/>
        </>
    )
}

export default Card;