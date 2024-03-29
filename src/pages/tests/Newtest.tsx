import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { ActionFunctionArgs, Form, redirect } from "react-router-dom";
import authenticatedApi from "../../services/authenticatedApi";
interface Props {
  reload: boolean;
  onTestAdd: () => void;
}
const Newtest = ({ onTestAdd }: Props) => {
  let [error, setError] = useState<String>("");
  const testName = useRef<HTMLInputElement>(null);
  const targetUrl = useRef<HTMLInputElement>(null);
  const handleSubmit = () => {
    const testDetails = {
      testName: testName.current?.value,
      targetUrl: targetUrl.current?.value,
    };

    setError("Submitted something");
    console.log(error);

    authenticatedApi
      .post(
        "http://192.168.1.201:3000/urltests.json",
        {
          urltest: testDetails,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);

        console.log("Navigating to Home");
        onTestAdd();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        //navigate("/home");
      });
    console.log(testDetails);
  };

  return (
    <>
      <Box maxWidth={"400px"}>
        <Form method="post" onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Test Name:</FormLabel>
            <Input ref={testName} type="text" name="testName" />
          </FormControl>
          <FormControl>
            <FormLabel>Target Url:</FormLabel>
            <Input ref={targetUrl} type="text" name="targetUrl" />
          </FormControl>
          <Button type="submit">Submit</Button>
        </Form>
      </Box>
    </>
  );
};

export const createAction = async ({}: ActionFunctionArgs) => {
  return redirect("/tests");
};

export default Newtest;
