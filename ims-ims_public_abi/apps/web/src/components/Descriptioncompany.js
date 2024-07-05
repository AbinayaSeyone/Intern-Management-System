function Descriptioncompany(props) {
    return (
        <div className="card mt-5"  style={{ backgroundColor: " rgba(80, 226, 204, 0.07)", borderColor: "#CCCCCC" }}>
            <img class="card-img" src={props.img1} alt="Card image" style={{ opacity: "20%" }}></img>
            <div class="card-img-overlay">
                <div class="card-body">
                    <h4 className="card-title">Description</h4>
                    <p className="card-text" >{props.Description}</p>
                    <h4 className="card-text">Skills</h4>
                    <ul className="card-text" style={{ listStyleType: "disc" }}>
                        <li>{props.skill1}</li>
                        <li>{props.skill1}</li>
                        <li>{props.skill1}</li>
                        <li>{props.skill1}</li>
                    </ul>
                </div>
            </div >
        </div >

    );
}
export default Descriptioncompany;