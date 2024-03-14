function Faculty(props){
    return(
        <>
            <div style={{"height": "30px","width": "300px","padding": "30px","marginTop":"30px","marginBottom":"20px"}}>
                <img src={props.image}
                style={{
                    "height": "150px",
                    "width": "150px",
                    "borderRadius":"50%",
                    "marginTop": "10px"
                }}
                alt = "avtar"
                />
            </div>
            <div style={{"height": "30px","marginTop": "30px","marginLeft": "200px"}}>
                <h1 style={{"color": "blue","marginTop":"3px"}}>{props.name}</h1>
                <h3 style={{"color": "black","marginTop": "3px"}}>{props.description}</h3>
            </div>
           
        </>
    )
}
export default Faculty;