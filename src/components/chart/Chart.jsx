import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const data = [
    {
      name: "January",
      Total: 2000
    },
    {
      name: "February",
      Total: 3100
    },
    {
      name: "March",
      Total: 800
    },
    {
      name: "April",
      Total: 1000
    },
    {
      name: "May",
      Total: 4000
    },
    {
      name: "June",
      Total: 3300
    },
   
  ];

  return (
    <div className="charts">
      <div className="title">Last 6 Months Revenue</div>
      <ResponsiveContainer width="100%" aspect={2/1}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="Total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
           
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#Total)"
          />
          
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
