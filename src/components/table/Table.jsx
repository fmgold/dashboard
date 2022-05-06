import './Table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Tables = () => {
    const rows = [
        {
            id: 121213,
            product: "Acer Nitro 5",
            date: "1 March",
            customer: "Oni benjo",
            img: "https://helios-i.mashable.com/imagery/reviews/01VF7MfWsdzSTpxBsup7lCb/hero-image.fill.size_1248x702.v1623391656.jpg",
            amount: 554,
            method: "Transfer",
            status: "approved",
        },
        {
            id: 121443,
            product: "MAC Pro 2017",
            date: "4 March",
            customer: "Ayans Daba",
            img: "https://www.zdnet.com/a/img/resize/ee751a0011802c17a7f6b05a415476009437e148/2017/06/15/01748d48-6a7b-40c6-ace6-26c13e96f4b2/macbook-13-2017-header.jpg?auto=webp&width=768",
            amount: 355,
            method: "Cash on Delivery",
            status: "approved",
        },
        {
            id: 1214542,
            product: "MAC Pro 2019",
            date: "20 March",
            customer: "Asah KollyP",
            img: "https://helios-i.mashable.com/imagery/reviews/01VF7MfWsdzSTpxBsup7lCb/hero-image.fill.size_1248x702.v1623391656.jpg",
            amount: 650,
            method: "Transfer",
            status: "pending",
        },
        {
            id: 121333,
            product: "Allien",
            date: "18 March",
            customer: "Harrison Abraham",
            img: "https://cdn.pocket-lint.com/r/s/1200x/assets/images/158660-laptops-review-alienware-x17-r1-review-image5-lthk7v9vpp.jpg",
            amount: 540,
            method: "Transfer",
            status: "pending",
        },
        {
            id: 121342,
            product: "iPhone 11",
            date: "30 April",
            customer: "Sam Olayemi",
            img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11.jpg",
            amount: 754,
            method: "Transfer",
            status: "approved",
        },
    ];
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" className='table'>
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell className='tableCell'>
                  <div className="cellWrapper">
                      <img src={row.img} alt="" className='image' />
                      {row.product}
                  </div>
                  </TableCell>
              <TableCell className='tableCell'>{row.customer}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className='tableCell'>
                  <span className={`status ${row.status}`}>{row.status}</span>
                  </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Tables