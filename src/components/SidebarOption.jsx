import React, { useState } from "react";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { db } from "../firebase";

const SidebarOption = ({ Icon, title, addChannelOption, id }) => {
  const [open, setOpen] = useState(false);
  const [channelName, setChannelName] = useState("");
  const handleClose = () => {
    setOpen(false);
    setChannelName("");
  };
  const addChannel = () => {
    setOpen(true);
  };

  const handleClick = () => {
    if (channelName.length > 0) {
      db.collection("rooms").add({ name: channelName });
    }
    handleClose();
  };

  const selectChannel = () => {};
  return (
    <>
      <SidebarOptionContainer
        onClick={addChannelOption ? addChannel : selectChannel}
      >
        {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
        {Icon ? (
          <h3>{title}</h3>
        ) : (
          <SidebarOptionChannel>
            <span>#</span> {title}
          </SidebarOptionChannel>
        )}
      </SidebarOptionContainer>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogTitle id="alert-dialog-slide-title">
          Make a New Channel
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <TextField
              value={channelName}
              onChange={(e) => setChannelName(e.target.value)}
              label="Channel Name"
              variant="outlined"
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Box width="100%" display="flex" justifyContent="space-evenly">
            <Button onClick={handleClick}>Submit</Button>
            <Button onClick={handleClose}>Close</Button>
          </Box>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;

  :hover {
    background-color: #340e36;
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`;

const SidebarOptionChannel = styled.h3`
  padding: 10px 0;
`;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});
