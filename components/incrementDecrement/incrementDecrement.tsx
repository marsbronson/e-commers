import React, { useState } from "react";
import { Box, Button, ButtonGroup, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

interface IncrementDecrementProps {
  amount: number;
  inc: () => void;
  dec: () => void;
  del: () => void;
}

export const IncrementDecrement = ({
  amount,
  inc,
  dec,
  del,
}: IncrementDecrementProps) => {
  return (
    <Box>
      <IconButton
        size="small"
        aria-label="show 4 new mails"
        color="warning"
        sx={{ marginRight: "8px" }}
        onClick={() => del()}
      >
        <Delete />
      </IconButton>
      <ButtonGroup
        size="small"
        aria-label="small outlined button group"
        sx={{ marginRight: "8px" }}
      >
        <Button onClick={() => dec()} disabled={amount === 0}>
          -
        </Button>
        <Button>{amount}</Button>
        <Button onClick={() => inc()}>+</Button>
      </ButtonGroup>
    </Box>
  );
};
