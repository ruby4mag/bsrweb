import {
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Newtest from "./Newtest";

const Tests = () => {
  return (
    <>
      <Heading m="20px">Tests</Heading>
      <Tabs m="40px" p="20px" colorScheme="purple">
        <TabList>
          <Tab>All Tests</Tab>
          <Tab>New Test</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>All tests here</TabPanel>
          <TabPanel>
            <Newtest />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Tests;
