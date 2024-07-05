import ADL from "../images/adl.jpg"

function Cardcom2() {
    return (
        <div className='container mt-5' >
            <div className="row border rounded border-success p-2 mb-5">
                <div className='col-md-3  '>
                      <div className="card" style={{ "width": "250px", "height": "150px" }}>
                      <img className="card-img" src={ADL} alt="Card image cap"/></div>
                </div>
                <div className='col-md-3 '>
                    <p>ADL</p>
                    <p>Senior software enginner</p>
                    <p>23/3/2022</p>
                    <button type="button" className="btn form-control  btn-success">verify the account</button>

                </div>
                <div className='col-md-5 '>
                    <div className='row'>
                        <div className='col-md-4'>
                        <a href="#" className="btn form-control btn-primary stretched-link" >Linked-in</a>
                        </div>
                        <div className='col-md-4'>
                            <a href="#" className="btn form-control  btn-primary stretched-link">Facebook</a>
                        </div>
                        <div className='col-md-4'>
                            <a href="#" className="btn form-control btn-success stretched-link">Github</a>
                        </div>


                    </div>

                </div>



            </div>





        </div>
);
}
export default Cardcom2