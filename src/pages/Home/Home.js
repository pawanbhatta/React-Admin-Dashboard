import {
  Chart,
  FeaturedChart,
  Navbar,
  Sidebar,
  Widget,
  Table,
} from "../../components";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="product" />
          <Widget type="order" />
          <Widget type="earning" />
        </div>
        <div className="charts">
          <FeaturedChart />
          <Chart title="Last 1 Year (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
