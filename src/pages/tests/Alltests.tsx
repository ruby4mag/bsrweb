import { useEffect, useState } from "react";
import authenticatedApi from "../../services/authenticatedApi";

interface Test {
  id: string;
  testName: string;
  targetUrl: string;
}
interface Props {
  reload: boolean;
}

function Alltests({ reload }: Props) {
  const [tests, setTests] = useState<Test[]>([]);

  useEffect(() => {
    authenticatedApi
      .get("http://192.168.1.201:3000/urltests.json")
      .then((response) => {
        // Handle the response
        setTests(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error in request:", error);
      });
  }, [reload]);

  //     axios
  //       .get("http://192.168.1.201:3000/urltests.json")
  //       .then(function (response) {
  //         setTests(response.data);
  //         // handle success
  //         console.log(response);
  //       })
  //       .catch(function (error) {
  //         // handle error
  //         console.log(error);
  //       })
  //       .finally(function () {
  //         // always executed
  //       });
  //   }, [reload]);

  return (
    <>
      {tests.map((test) => (
        <li key={test.id}>
          {test.testName} {test.targetUrl}
        </li>
      ))}
    </>
  );
}

export default Alltests;
