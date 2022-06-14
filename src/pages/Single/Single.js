import "./single.scss";
import { Chart, Navbar, Sidebar } from "../../components";
import Tabble from "../../components/Table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.newindianexpress.com/uploads/user/imagelibrary/2021/4/4/w1200X800/KAMAL_eps789.jpg"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Pawan Bhatta</h1>
                <div className="detailItem">
                  <span className="itemKey">Email : </span>
                  <span className="itemValue">pawanbhatta00@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone : </span>
                  <span className="itemValue">+977 9865 606 XXX</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address : </span>
                  <span className="itemValue">
                    New Baneswor | Kathmandu | Bagmati
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country : </span>
                  <span className="itemValue">Nepal </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (last 1 year)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <Tabble />
        </div>
      </div>
    </div>
  );
};

export default Single;
