import { useEffect, useState } from "react";
import authenticatedApi from "../../services/authenticatedApi";
import DataTable from "react-data-table-component";

import { customStyles } from "../../styles/tablestyles";
import Testdetail from "./Testdetail";

interface Test {
  id: string | undefined;
  testName: string;
  targetUrl: string;
}
interface Props {
  reload: boolean;
}

function Alltests({ reload }: Props) {
  const columns = [
    {
      name: "Test Name",
      selector: (row: { testName: any }) => row.testName,
      sortable: true,
    },
    {
      name: "URL",
      selector: (row: { targetUrl: any }) => row.targetUrl,
      sortable: true,
    },
    {
      name: "URL",

      sortable: true,
      cell: (row: { id: string | undefined }) => (
        <button onClick={(e) => clickHandler(e, row.id)}>Action</button>
      ),
    },
  ];

  const clickHandler = (state: any, id: string | undefined) => {
    state.preventDefault();
    setTestid(id);
    console.log("Row Id", id);
  };
  const [testid, setTestid] = useState("");

  const [tests, setTests] = useState<Test[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authenticatedApi
      .get("http://192.168.1.201:3000/urltests.json")
      .then((response) => {
        // Handle the response
        setTests(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error in request:", error);
      });
  }, [reload]);

  return (
    <>
      <DataTable
        customStyles={customStyles}
        theme="dark"
        columns={columns}
        progressPending={loading}
        data={tests}
        pagination
      />
      <Testdetail testid={testid} />
    </>
  );
}

export default Alltests;
