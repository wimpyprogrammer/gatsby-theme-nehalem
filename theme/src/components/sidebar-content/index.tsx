import React, {FunctionComponent} from "react";
import Bio from "../bio";
import {StickySidebarContent} from "./style";

/**
 * Placeholder for the front page sidebar content.
 */
const SidebarContent: FunctionComponent = () => {
  return (
    <StickySidebarContent>
      <Bio textAlign={`justify`} avatarStyle={{float: `left`, margin: `0 20px 5px 0`}}/>
    </StickySidebarContent>
  );
};

export default SidebarContent;
