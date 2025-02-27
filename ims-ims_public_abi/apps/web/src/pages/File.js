
import { useState, useEffect } from "react";
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
} from "firebase/storage";
import { storage } from "../FireBase config/firebase";
import { v4 } from "uuid";

function App() {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);
    const imagesListRef = ref(storage, "images/");
    const uploadFile = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrls((prev) => [...prev, url]);
            });
        });
    };

    useEffect(() => {
        listAll(imagesListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageUrls((prev) => [...prev, url]);
                });
            });
        });
    }, []);

    return (
        <div className="App">
            <input
                type="file"
                onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                }}
            />
            <button onClick={uploadFile}> Upload Image</button>
            {imageUrls.map((url) => {
                return <img src={url} />;
            })}
        </div>
    );
}

export default App;

// Given below code only for the Upload Image

// import {useState} from "react";
// import {storage} from "../FireBase config/firebase";
// import {ref,uploadBytes} from "firebase/storage";
// import {v4} from "uuid";
// function File(){
//     const [imageUpload,setImageUpload]= useState(null)
//     const uploadImage=()=>{
//         if(imageUpload===null)return;
//         const imageRef = ref(storage,`images/${imageUpload.name + v4}`)
//         uploadBytes(imageRef,imageUpload).then(()=>{
//             alert("image Uploaded");
//         })
//     };
//    return(
//        <div >
//
//            <input type='file'
//                   onChange={(event)=>{
//                setImageUpload(event.target.files[0]);
//            }}
//            />
//            <button onClick={uploadImage} >Upload Image</button>
//        </div>
//    );
// }
// export default File;