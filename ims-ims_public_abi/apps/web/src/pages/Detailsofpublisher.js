import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import NaviBar from '../components/NaviBar';

function Detailsofpublisher() {
    const { internPoolId } = useParams();
    console.log(internPoolId);

    const detailsOfPublisher = gql`
    mutation patchInternPoolOpening(
      $id: String!
      $publisherMail: ObjectScalar
      $publisherMobile: ObjectScalar
      $publisherName: ObjectScalar
    ) {
      patchInternPoolOpening(
        id: $id
        patch: [
          {
            from: "null"
            path: "/publisherMail"
            value: $publisherMail
          }
          {
            from: "null"
            path: "/publisherName"
            value: $publisherName
          }
          {
            from: "null"
            path: "/publisherMobile"
            value: $publisherMobile
          }
        ]
      ) {
        id
        publisherName
        publisherMail
        publisherMobile
      }
    }
  `;

    const [publisherMail, setPublisherMail] = useState('');
    const [publisherMobile, setPublisherMobile] = useState('');
    const [publisherName,setPublisherName] = useState('');
    const [data, setData] = useState(null);
    const [patchInternPoolOpening] = useMutation(detailsOfPublisher, {
        onCompleted: (data) => {
            console.log('Resource created successfully:', data.patchInternPoolOpening);
            setData(data?.patchInternPoolOpening);
        },
    });
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault()
        swal({
            title: 'Are you sure?',
            text: 'Do you want to post this intern pool opening?',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                const pid = internPoolId;
                const patches = [
                    {
                        op: 'replace',
                        path: '/publisherMail',
                        value: publisherMail,
                    },
                    {
                        op: 'replace',
                        path: '/publisherMobile',
                        value: publisherMobile,
                    },
                    {
                        op: 'replace',
                        path: '/publisherName',
                        value: publisherName,
                    },
                ];
                patchInternPoolOpening({
                    variables: {
                        id: pid,
                        patches: patches,
                        publisherMobile,
                        publisherMail,
                        publisherName
                    },
                });
                swal('Details of the publisher Saved Successfully!', {
                    icon: 'success',
                });
                // window.location.href = `/otp/${data.id}`;
                window.location.href = `/otp/${internPoolId}`;
            } else {
                swal("Details didn't save");
            }

        });
    };

    return (
        <React.Fragment>
            <NaviBar />
            <div className="card " style={{ backgroundColor: 'rgba(39, 207, 190, 0.47)', borderBlock: '2px solid #CCCCCC', boxSizing: 'border-box' }}>
                <div className="card-body">
                    <h1 className="text-center">Details of the Publisher</h1>
                </div>
            </div>
            <div className="container">
                <form className="row g-3" onSubmit={handleClick}>
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-2">
                            <label htmlFor="inputEmail4" className="form-label">
                                Full Name
                            </label>
                        </div>
                        <div className="col-md-4">
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e) => {
                                    setPublisherName(e.target.value);
                                }}
                                style={{ borderColor: 'rgba(39, 207, 190, 0.47)' }}
                                id="inputEmail4"
                            />
                        </div>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-2">
                            <label htmlFor="inputEmail4" className="form-label">
                                Phone Number
                            </label>
                        </div>
                        <div className="col-md-4">
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e)=> {
                                    setPublisherMobile(e.target.value);
                                }}
                                style={{ borderColor: 'rgba(39, 207, 190, 0.47)' }}
                                id="inputEmail4"
                            />
                        </div>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-2">
                            <label htmlFor="inputEmail4" className="form-label">
                                Email
                            </label>
                        </div>
                        <div className="col-md-4">
                            <input
                                type="Email"
                                className="form-control"
                                onChange={(e) => {
                                    setPublisherMail(e.target.value);
                                }}
                                style={{ borderColor: 'rgba(39, 207, 190, 0.47)' }}
                                id="inputEmail4"
                            />
                        </div>
                    </div>
                    <div className="col-md-9 mt-5"></div>
                    <div className="col-3">
                        <button
                            variant="success"
                            type="submit"
                            className="btn btn-primary"
                            style={{ backgroundColor: 'rgba(39, 207, 190, 0.47)', borderColor: '#CCCCCC' }}
                        >
                            Submit
                        </button>
                        {/* <Link to="/otp" className="btn btn-primary" style={{ backgroundColor: " rgba(80, 226, 204, 0.92)", borderColor: "#CCCCCC" }}>Generate OTP</Link> */}
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}

export default Detailsofpublisher;