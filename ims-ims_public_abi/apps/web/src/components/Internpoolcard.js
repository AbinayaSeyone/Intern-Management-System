function Internpoolcard(props) {
    return (

        <div className="card mt-4" style={{backgroundColor:"rgba(80, 226, 204, 0.17)"}}>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-10">
                        <h4>{props.iname}</h4>
                        <h4>{props.skills}</h4>
                        <h5>link</h5>
                    </div>
                    <div className="col-md-2">
                        <img src={props.img} alt="UserImage" className="rounded-circle" style={{ "width": "120px" }}></img>
                    </div>
                </div>
            </div>
        </div>


    );
}
export default Internpoolcard;
