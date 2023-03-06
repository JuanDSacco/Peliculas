

const Card = ({data}) => {

    return(
        <>
            <h1>{data.titulo}</h1>
            <br/>
            <img src={data.imagen} alt='foto-portada' className="imgItem"/>
            <br/>
        </>
    )
}

export default Card;