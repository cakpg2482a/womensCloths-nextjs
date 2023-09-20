// import "bootstrap/dist/css/bootstrap.min.css";
// import "./contact.css"
// export default function Contact() {

//     return (<>
//         <div className="container">
//             <div className="row">

//                 <div className="col">
//                     <div className="detail ">

//                         <input type="text" className="r1 " placeholder="Enter Your Name" /><br />

//                         <input type="email" className="r2 " placeholder="Enter Your Email" /><br />

//                         <input type="text" className="r3 " placeholder="Enter Your WhatsApp NO" />

//                     </div>
//                 </div>
//                 <div className="col">
//                     <div className="butn ">
//                         <input type="textarea" className="asdf " placeholder="Type a message here" /><br />

//                         <button className="btn1">Submit</button>
//                     </div>
//                 </div>
//             </div>
//         </div>








//     </>)
// }


import "bootstrap/dist/css/bootstrap.min.css";
import "./contact.css";

export default function Contact() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="detail">
              <input type="text" className="form-control mb-3 r1 " placeholder="Enter Your Name" />
              <input type="email" className="form-control mb-3 r2" placeholder="Enter Your Email" />
              <input type="text" className="form-control r3" placeholder="Enter Your WhatsApp NO" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="butn">
              <textarea className="form-control mb-3 asdf" placeholder="Type a message here"></textarea>
              <button className="btn1">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <br/><br/><br/><br/><br/>
      <p style={{textAlign:"center",color:"white"}}> Copyright © 2023, All Right Reserved at Quintus Tech Private Limited </p>
    </>
  );
}
