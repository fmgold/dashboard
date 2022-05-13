import './new.scss'
import NavBar from '../../components/navbar/NavBar'
import SideBar from '../../components/sidebar/SideBar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState} from 'react'

const New = ({inputs, title}) => {
  const [file, setFile] = useState("")
  console.log(file)
  return (
    <div className='new'>
      <SideBar/>
      <div className="newContainer">
        <NavBar/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src= {file ? file :"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" className='img' />
          </div>
          <div className="right">
            <form action="">
              <div className="formInput">
                <label htmlFor='file'>Image: <DriveFolderUploadIcon  className="icon"/></label>
                <input type="file" id='file' onChange={(e)=>setFile(e.target.files[0])} style={{display: "none"}} />      
              </div>
              {inputs.map((input)=>(
                 <div className="formInput" key={input.id}>
                 <label> {input.label} </label>
                 <input type={input.type} placeholder={input.placeholder} />
               </div> 
              ))}
              <button className="btn">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New