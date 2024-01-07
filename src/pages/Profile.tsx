import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import authenticatedApi from "../services/authenticatedApi";

const Profile = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    authenticatedApi
      .get("http://192.168.1.201:3000/urldata.json")
      .then((response) => {
        // Handle the response
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error in request:", error);
      });
  }, []);
  return (
    <Box w="100%" height={200}>
      <ResponsiveContainer width="95%" height="100%">
        <LineChart height={100} data={data} key={Math.random()}>
          <XAxis dataKey="time" tickCount={2} />
          <YAxis />
          <Line
            animationDuration={750}
            isAnimationActive={true}
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default Profile;
