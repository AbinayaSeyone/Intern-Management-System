


function Scard(props) {
    return (
        <div class="card" >

            <div class="card-body">
                <div className="row">
                    <div className="col-md-6 "><img src={props.img} style={{ "width": "150px", "height": "100px" }} class="card-img-top" alt="..." /></div>
                    <div className="col-md-4 "><div className="col-md-4 ">
                        <button type="button" class="btn btn-primary">linkedIn</button></div>
                    
                   
                    <p class="card-text"></p>
                   
                    
                    
                    <h5> {props.Name} </h5>
                    <h5> {props.Address} </h5>
                    <h5> {props.phoneno} </h5></div>
                    <button type="button" class="btn btn-success">verify the account</button>
                </div>


            </div>
        </div>
    );
}

export default Scard;