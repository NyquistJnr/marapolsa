import React from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import ProfileLikes from "./Likes";
import ProfileComment from "./Comment";
import ProfileSaved from "./Saved";

const ProfileTabs = () => {
  return (
    <Tabs isFitted variant="unstyled">
      <TabList mb="1em">
        <Tab _selected={{ borderTop: "3px solid #e86c44", color: "#e86c44" }}>
          Likes
        </Tab>
        <Tab _selected={{ borderTop: "3px solid #e86c44", color: "#e86c44" }}>
          Comments
        </Tab>
        <Tab _selected={{ borderTop: "3px solid #e86c44", color: "#e86c44" }}>
          Saves
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <ProfileLikes />
        </TabPanel>
        <TabPanel>
          <ProfileComment />
        </TabPanel>
        <TabPanel>
          <ProfileSaved />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default ProfileTabs;
