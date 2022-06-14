import "./new.scss";
import { Navbar, Sidebar } from "../../components";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtkqvIEIUmRnqURQ__ruETeyRLsxpghoPQXg&usqp=CAU"
              }
              alt=""
              className="newImg"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image <DriveFolderUploadOutlinedIcon className="icon" />{" "}
                </label>
                <input
                  onChange={(e) => setFile(e.target.files[0])}
                  id="file"
                  type="file"
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) => {
                return (
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input
                      type={input.type}
                      placeholder={input.placeholder ? input.placeholder : ""}
                    />
                  </div>
                );
              })}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
