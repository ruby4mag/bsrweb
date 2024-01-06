import {
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
      <Heading m="20px">Tests</Heading>
      <Tabs m="40px" p="20px" colorScheme="purple">
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
