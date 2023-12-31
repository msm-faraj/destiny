import { Box, Center, Stack } from "@chakra-ui/react";
import React from "react";

const Dashboard = () => {
  return (
    <Stack display={"flex"} alignItems={"space between"} gap={5}>
      <Box bg={"primary"} color={"danger"}>
        primary
      </Box>
      <Box bg={"secondary"} color={"warning"}>
        secondary
      </Box>
      <Box bg={"darkgry"} color={"lightgry"}>
        darkgry
      </Box>
      <Box bg={"highlight"} color={"primary"}>
        highlight
      </Box>
      <Box bg={"lightgry"} color={"darkgry"}>
        lightgry
      </Box>
      <Box bg={"warning"} color={"secondary"}>
        warning
      </Box>
      <Box bg={"danger"} color={"primary"}>
        danger
      </Box>
    </Stack>
  );
};

export default Dashboard;
