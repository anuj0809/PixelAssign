import React,{useEffect,useState} from 'react'
import "./style/ImageGallery.css";
const ImageGallery = () => {
  const [activeTab,setActiveTab]=useState('S3');
  const [S3images, setS3Images] = useState([]);
  const [driveImages, setDriveImages] = useState([]);
  const fetchS3Images=()=>{
    const importAllImages = (r) => r.keys().map(r);
  
	// Import all images from the drive directory dynamically
	const s3Images = importAllImages(require.context('../gallery/amazon', false, /\.(png|jpe?g|svg|JPG)$/));
	console.log(s3Images);
    setS3Images(s3Images);
    setActiveTab('S3');
  }
  const fetchGoogleDriveImage=()=>{
    const importAllImages = (r) => r.keys().map(r);
  
	// Import all images from the drive directory dynamically
	const driveImages = importAllImages(require.context('../gallery/drive', false, /\.(png|jpe?g|svg|JPG)$/));
	console.log(driveImages);
    setDriveImages(driveImages);
    setActiveTab('google-drive');
  }
  useEffect(()=>{
    fetchS3Images();
  },[])
    return (
        <div style={{marginRight:'5px'}} className="justify-content-center">
        <div>
        <ul className="nav nav-tabs justify-content-center" style={{ borderBottom: 'none' }}>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'S3' ? 'active' : ''}`}
              onClick={() => fetchS3Images()}
              style={{color:activeTab=='S3'?'#1B1B1B':'white' }}
              
           
            >
              S3
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'google-drive' ? 'active' : ''}`}
              onClick={() => fetchGoogleDriveImage()}
              style={{ color:activeTab=='google-drive'?'#1B1B1B':'white' }}
              id={activeTab==='google-drive'?'activeTab':'unactive'}
              
            >
              Google Drive Images
            </button>
          </li>
        </ul>
        </div>
        <div id="image_container" >
        <div className="container mt-3">
          <div className="row">
            {activeTab=='S3'&& S3images.map((image, index) => (
              <div id="image" key={index} className="col-lg-4 col-md-6 col-sm-12 mb-3">
                <img src={image} alt={`Image ${index}`} className="img-fluid" />
              </div>
            ))}
            {activeTab=='google-drive'&& driveImages.map((image, index) => (
                <div id="image" key={index} className="col-lg-4 col-md-6 col-sm-12 mb-3">
                  <img src={image} alt={`Image ${index}`} className="img-fluid" />
                </div>
              ))}
          </div>
        </div>
        </div>
      </div>
  )
}

export default ImageGallery
