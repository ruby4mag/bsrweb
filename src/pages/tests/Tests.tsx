import {
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Newtest from "./Newtest";
import Alltests from "./Alltests";
import { useState } from "react";

const Tests = () => {
  const [reload, setReload] = useState(false);
  const onAdd = () => {
    setReload(!reload);
  };

  return (
    <>
      <Flex justifyContent={"left"}>
        <Heading ml="20px" mt="10px">
          Web Tests
        </Heading>
      </Flex>
      <Tabs p="20px" colorScheme="purple">
        <TabList>
          <Tab>All Tests</Tab>
          <Tab>New Test</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Alltests reload={reload} />
          </TabPanel>
          <TabPanel>
            <Newtest reload={reload} onTestAdd={onAdd} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Tests;
