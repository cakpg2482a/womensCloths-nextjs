import Image from "next/image"
import "bootstrap/dist/css/bootstrap.min.css";
import "./gallery.css";
import first from "./images/1.png";
import second from "./images/2.png";
import third from "./images/3.png";
import fourth from "./images/4.png";

export default function Gallery() {
    return (<>
        <div style={{ height: "100%", width: "99%", backgroundColor: "#31343C" }}>
            <div className="a">
                <div className="gg1" >
                    <p className="gallery-1"align="center" >Gallery</p>
                </div>
            </div>

            <div className="container-fluid_1">
                <div className="row">
                    <div className="col">
                         <Image class="rectangle-5" src={first}alt=""/>
                    </div>
                    <div className="col">
                         <Image class="rectangle-6" src={second}alt=""/> 
                    </div>
                    <div className="col">
                         <Image class="rectangle-7" src={third}alt=""/>  
                    </div>
                    <div className="col">
                         <Image class="rectangle-30" src={fourth}alt=""/>
                    </div>

                </div>
            </div>
            <div class="sg">
        <div class="rectangle-1">
            <svg class="fluen" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.7268 3.687C15.8171 3.59153 15.8876 3.47923 15.9344 3.3565C15.9812 3.23377 16.0034 3.10302 15.9997 2.97172C15.996 2.84042 15.9664 2.71113 15.9128 2.59125C15.8591 2.47136 15.7823 2.36322 15.6868 2.273C15.5914 2.18279 15.4791 2.11226 15.3563 2.06544C15.2336 2.01863 15.1029 1.99644 14.9716 2.00016C14.8403 2.00387 14.711 2.03341 14.5911 2.08709C14.4712 2.14077 14.3631 2.21753 14.2728 2.313L5.77285 11.313C5.59731 11.4987 5.4995 11.7445 5.4995 12C5.4995 12.2555 5.59731 12.5013 5.77285 12.687L14.2728 21.688C14.3625 21.7856 14.4706 21.8643 14.5909 21.9198C14.7112 21.9752 14.8414 22.0062 14.9738 22.0109C15.1062 22.0156 15.2382 21.9939 15.3621 21.9472C15.4861 21.9004 15.5995 21.8295 15.6958 21.7386C15.7922 21.6476 15.8695 21.5384 15.9232 21.4173C15.977 21.2963 16.0062 21.1657 16.009 21.0333C16.0119 20.9008 15.9885 20.7691 15.94 20.6458C15.8916 20.5225 15.8191 20.4101 15.7268 20.315L7.87484 12L15.7268 3.687Z" fill="#9EFFF8" />
            </svg>
        </div>
        <div class="rectangle-2">
            <svg class="fluent" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.27315 3.687C8.18294 3.59153 8.11241 3.47923 8.06559 3.3565C8.01878 3.23377 7.99659 3.10302 8.00031 2.97172C8.00402 2.84042 8.03356 2.71113 8.08724 2.59125C8.14092 2.47136 8.21768 2.36322 8.31315 2.273C8.40863 2.18279 8.52093 2.11226 8.64366 2.06544C8.76639 2.01863 8.89714 1.99644 9.02844 2.00016C9.15974 2.00387 9.28903 2.03341 9.40891 2.08709C9.5288 2.14077 9.63694 2.21753 9.72716 2.313L18.2272 11.313C18.4027 11.4987 18.5005 11.7445 18.5005 12C18.5005 12.2555 18.4027 12.5013 18.2272 12.687L9.72716 21.688C9.63753 21.7856 9.52942 21.8643 9.40909 21.9198C9.28876 21.9752 9.15862 22.0062 9.02623 22.0109C8.89384 22.0156 8.76183 21.9939 8.63787 21.9472C8.51391 21.9004 8.40048 21.8295 8.30416 21.7386C8.20784 21.6476 8.13055 21.5384 8.07678 21.4173C8.02302 21.2963 7.99384 21.1657 7.99096 21.0333C7.98808 20.9008 8.01154 20.7691 8.05998 20.6458C8.10842 20.5225 8.18089 20.4101 8.27315 20.315L16.1252 12L8.27315 3.687Z" fill="#9EFFF8" />
            </svg>
        </div>
    </div>


        </div>
    </>)
}