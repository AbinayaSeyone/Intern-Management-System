function Institutecard1(props){
    return (
        <div className="card mt-5" style={{ backgroundColor: " rgba(80, 226, 204, 0.07)" ,borderColor:"#CCCCCC"}}>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-4 mt-3">
                        <img src={props.img} alt="companyImage" className="rounded-circle" style={{ "width": "140px" }}></img>
                    </div>
                    <div className="col-md-8 mt-3" >
                        <h4 className="card-title">{props.data.name}</h4>
                        <h5 className="card-title">{props.data.institution}</h5>
                        <p className="card-title" style={{ color: "#1DD3B8" }}>{props.data.field}</p>
                        <p className="card-title" >{props.data.faculty}</p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Institutecard1;