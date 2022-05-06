export const userRow =[
    {
        id: 1,
        username: "Snow",
        img:"https://pyxis.nymag.com/v1/imgs/bae/9eb/664ad57e704e648661d28a4590b0b176a4-12-jon-snow.2x.rsquare.w536.jpg",
        status: "active",
        email: "isnow@gmail.com",
        age: 35, 
    },
    {
        id: 2,
        username: "Look",
        img:"https://pyxis.nymag.com/v1/imgs/bae/9eb/664ad57e704e648661d28a4590b0b176a4-12-jon-snow.2x.rsquare.w536.jpg",
        status: "pending",
        email: "isbookw@gmail.com",
        age: 25, 
    },
    {
        id: 3,
        username: "book",
        img:"https://pyxis.nymag.com/v1/imgs/bae/9eb/664ad57e704e648661d28a4590b0b176a4-12-jon-snow.2x.rsquare.w536.jpg",
        status: "passive",
        email: "isbook@gmail.com",
        age: 95, 
    },
    {
        id: 4,
        username: "Arrow",
        img:"https://pyxis.nymag.com/v1/imgs/bae/9eb/664ad57e704e648661d28a4590b0b176a4-12-jon-snow.2x.rsquare.w536.jpg",
        status: "active",
        email: "israw@gmail.com",
        age: 33, 
    },
    {
        id: 5,
        username: "Ayah",
        img:"https://pyxis.nymag.com/v1/imgs/bae/9eb/664ad57e704e648661d28a4590b0b176a4-12-jon-snow.2x.rsquare.w536.jpg",
        status: "pending",
        email: "isayah@gmail.com",
        age: 20, 
    },
    {
        id: 6,
        username: "Finehead",
        img:"https://pyxis.nymag.com/v1/imgs/bae/9eb/664ad57e704e648661d28a4590b0b176a4-12-jon-snow.2x.rsquare.w536.jpg",
        status: "pending",
        email: "isfine@gmail.com",
        age: 45, 
    },
    {
        id: 7,
        username: "tariq",
        img:"https://pyxis.nymag.com/v1/imgs/bae/9eb/664ad57e704e648661d28a4590b0b176a4-12-jon-snow.2x.rsquare.w536.jpg",
        status: "passive",
        email: "istariq@gmail.com",
        age: 22, 
    },
    {
        id: 8,
        username: "Bella",
        img:"https://pyxis.nymag.com/v1/imgs/bae/9eb/664ad57e704e648661d28a4590b0b176a4-12-jon-snow.2x.rsquare.w536.jpg",
        status: "pending",
        email: "isbella@gmail.com",
        age: 15, 
    },
]

export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user', headerName: 'User', width: 230,
    renderCell: (params) =>{
        return(
            <div className="cellWithImg">
                <img src={params.row.img} alt="avatar" className="cellImg" />
                {params.row.username}
            </div>
        )
    }
},
{ field: 'email', headerName: 'Email', width: 230 },
{ field: 'age', headerName: 'Age', width: 100 },
{ field: 'status', headerName: 'Status', width: 100,
renderCell: (params) =>{
    return(
        <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
        </div>
    )
}
},   
  ];