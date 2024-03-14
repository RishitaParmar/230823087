function User(props){
    return(
        <>
            <div style={{"height":"50px","width":"50px","marginTop":"10px","padding":"10px"}}>
                <img 
                    src="assets/shahid1.jpg"
                    alt="Avtar"
                    style={{
                        
                        "height": "80px",
                        "width": "80px",
                        "borderRadius":"50%",
                        "marginTop": "10px"
                    }}
                    // borderRadius="50%"
                    // height="30px"
                    // width="30px"
                />
            </div>
            <div style={{"height":"50px","width":"300px"}}>
                <h2 style={{"color":"black","marginLeft":"110px","marginTop":"-30px","height":"50px"}}>{props.username} </h2>
            </div>
        </>
    )
}
export default User;