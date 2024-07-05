
import studentimg from '../images/sa.jpg';
import sasiimg from '../images/stude.jpg';

function Cardm(props) {
    return (
        <div class="card" >

            <div class="card-body">
                <div className="row">
                    <div className="col-md-5 "><img src={studentimg} style={{ "width": "150px", "height": "100px" }} class="card-img-top" alt="..." /></div>
                    <div className="col-md-6 "><p class="card-text"></p>
                        <h5> {props.data.firstname} </h5>
                        <h5> {props.data.id} </h5>
                        <h5> {props.data.universityname} </h5>
                        <h5> {props.data.coursename} </h5></div>
                    <button type="button" class="btn btn-success">verify</button>
                </div>


            </div>
        </div>
    );
}

export default Cardm;