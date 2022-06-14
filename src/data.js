export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => (
      <div className="cellWithImg">
        <img className="cellImg" src={params.row.img} alt="avatar" />
        {params.row.username}
      </div>
    ),
  },
  { field: "email", headerName: "EMAIL", width: 230 },
  { field: "age", headerName: "AGE", width: 100 },
  {
    field: "status",
    headerName: "STATUS",
    width: 160,
    renderCell: (params) => (
      <div className={`cellWithStatus ${params.row.status}`}>
        {params.row.status}{" "}
      </div>
    ),
  },
];

export const userRows = [
  {
    id: 1,
    username: "Pawan",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ66RT_qSdG3EOEP_Nb6l3XcuOFu5qUnKt27xoH4kidXQ&s",
    status: "active",
    email: "pawanbhatta00@gmail.com",
    age: 23,
  },
  {
    id: 2,
    username: "Kamal",
    img: "https://images.newindianexpress.com/uploads/user/imagelibrary/2021/4/4/w1200X800/KAMAL_eps789.jpg",
    status: "active",
    email: "kamal@gmail.com",
    age: 25,
  },
  {
    id: 3,
    username: "Ashish",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGTk4HpglMhsbe98RZ9TfLWMrq8gjC9qU6rQ&usqp=CAU",
    status: "passive",
    email: "ashish@gmail.com",
    age: 23,
  },
  {
    id: 4,
    username: "Kushal",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2qqZy23HDI3RcWqXP9DIZ4jyPvJ7XspAQmY-ujz3GZoGHYi91gadQI1nohdHuu4I5OhI&usqp=CAU",
    status: "pending",
    email: "kushal@gmail.com",
    age: 23,
  },
  {
    id: 5,
    username: "Bijaya",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAU4T2vFkqGXsgVeJRDL8U6rIhcGlHSiDxew&usqp=CAU",
    status: "active",
    email: "bjayaa@gmail.com",
    age: 23,
  },
  {
    id: 6,
    username: "Gunjan",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwM5T40YEBEnWQvgQb8tGAMb1FrECSLdcRSQ&usqp=CAU",
    status: "pending",
    email: "gbhatta@gmail.com",
    age: 24,
  },
  {
    id: 7,
    username: "Newuser",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQakPbjmWvkEoKx-hwhR2o-dlSZogs3afw4jg&usqp=CAU",
    status: "passive",
    email: "user@gmail.com",
    age: 21,
  },
  {
    id: 8,
    username: "Will Smith",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLrTioNIogq880iCNtTYOkdJmqfmlclVylgA&usqp=CAU",
    status: "passive",
    email: "user@gmail.com",
    age: 21,
  },
  {
    id: 9,
    username: "Chris",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf1S5LtJ4d0DtgjsZhAbpczFduKudCU3jBAA&usqp=CAU",
    status: "passive",
    email: "user@gmail.com",
    age: 21,
  },
  {
    id: 10,
    username: "Robert",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx5Oec2kllByD0Br2abXfsZc5LfKPrTHcubw&usqp=CAU",
    status: "passive",
    email: "user@gmail.com",
    age: 21,
  },
  {
    id: 11,
    username: "Dr. Strange",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo9QL3gGNX0niv8L9j-BI5j6uOabLCszbIfQ&usqp=CAU",
    status: "passive",
    email: "user@gmail.com",
    age: 21,
  },
  {
    id: 12,
    username: "Tom Cruise",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZb48WBxs-pup0ejrmrZjsK1HlT2_TfZvT8A&usqp=CAU",
    status: "passive",
    email: "user@gmail.com",
    age: 21,
  },
];
