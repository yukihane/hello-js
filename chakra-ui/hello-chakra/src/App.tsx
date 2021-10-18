import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { MyPane } from "./MyPane";

export const App = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={1}>
      <GridItem bg="silver">
        <div>Left</div>
      </GridItem>
      <GridItem bg="skyblue">
        <div>Right</div>
      </GridItem>
      <GridItem colSpan={2} bg="tomato">
        <div>Footer</div>
      </GridItem>
    </Grid>
  );
};
