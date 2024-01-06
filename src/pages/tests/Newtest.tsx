import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Form } from "react-router-dom";

const submitForm = (event: any) => {
  console.log(event);
};

const Newtest = () => {
  return (
    <>
      <Box maxWidth={"400px"}>
        <Form onSubmit={submitForm} method="POST">
          <FormControl>
            <FormLabel>Test Name:</FormLabel>
            <Input type="text" name="testName" />
          </FormControl>
        </Form>
      </Box>
    </>
  );
};

export default Newtest;
