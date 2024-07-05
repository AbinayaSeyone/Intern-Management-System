


function Cardcom(props) {
    return (
        <div class="card" >

            <div class="card-body">
                <div className="row">
                    <div className="col-md-6 "><img src={props.img} style={{ "width": "150px", "height": "100px" }} class="card-img-top" alt="..." /></div>
                    <div className="col-md-4 "><div className="col-md-4 ">
                       </div>


                        <p class="card-text"></p>



                        <h5> {props.Companyname} </h5>
                        <h5> {props.Position} </h5>
                        <h5> {props.Date} </h5></div>
                    <button type="button" class="btn btn-success">verify</button>
                </div>


            </div>
        </div>
    );
}

export default Cardcom;