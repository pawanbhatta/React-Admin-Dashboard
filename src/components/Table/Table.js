import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Tabble = () => {
  const data = [
    {
      id: 1,
      product: "Dell Inspiron 5570",
      img: "https://i.dell.com/sites/imagecontent/products/PublishingImages/inspiron-5000-series/15-5570-laptop/1523_PDP_Inspiron_15_5000_Laptops_Intel_mod7_EMEA.jpg",
      customer: "Pawan Bhatta",
      date: "13th June",
      amount: 355,
      method: "Cash On Delivery",
      status: "Approved",
    },
    {
      id: 2,
      product: "Acer Nitro 5",
      img: "https://itti.com.np/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/a/c/acer-nitro-5_an515-55_rgb-kb_modelpreview_7.png",
      customer: "Will Smith",
      date: "11th June",
      amount: 465,
      method: "Online Payment",
      status: "Approved",
    },
    {
      id: 3,
      product: "HP predator",
      img: "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/512201-Product-3-I-637590304292588062_8a70cb28-4d34-4d09-855c-51b6e8f27f04_800x800.jpg?v=1649905778",
      customer: "Tom Cruise",
      date: "7th June",
      amount: 857,
      method: "Cash On Delivery",
      status: "Pending",
    },
    {
      id: 4,
      product: "ASUS ROG Strix",
      img: "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/512201-Product-3-I-637590304292588062_8a70cb28-4d34-4d09-855c-51b6e8f27f04_800x800.jpg?v=1649905778",
      customer: "Diesel Washington",
      date: "1st June",
      amount: 999,
      method: "Online Payment",
      status: "Pending",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tabble;
