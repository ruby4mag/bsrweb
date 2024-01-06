import { Box } from "@chakra-ui/react";
import { LineChart, Line } from "recharts";
const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 1400, pv: 400, amt: 2400 },
  { name: "Page C", uv: 400, pv: 2400, amt: 2400 },
];

const Profile = () => {
  return (
    <Box>
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
    </Box>
  );
};

export default Profile;
