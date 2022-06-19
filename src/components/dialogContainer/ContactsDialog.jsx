import { useEffect } from "react";

import { Box, Typography } from "@mui/material";

import DialogTemplate from "components/dialogContainer/DialogTemplate";
import ContactListItem from "components/dialogContainer/ContactListItem";

import { getContactsCrl } from "controllers/cellphoneController/getContactsCrl";

import { useMyContext } from "hooks/useMyContext";

import { dialogAction } from "actions/globalActions/globalActions";
import { contactClickAction } from "actions/tempActions/tempActions";
import CustomButton from "components/generals/inputs/CustomButton";

const ContactsDialog = ({ onClose }) => {
  const {
    state: {
      globalState: { dialogState },
      userState,
    },
    hooksOutput: { dispatch },
  } = useMyContext();

  useEffect(() => {
    if (dialogState.contacts.open) {
      handleGetContacts();
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dialogState.contacts.open]);

  const handleAddContactClick = () => {
    dispatch(
      dialogAction({
        dialogState: {
          ...dialogState,
          addContact: { ...dialogState.addContact, open: true },
        },
      })
    );
  };

  const handleGetContacts = () => {
    dispatch(getContactsCrl());
  };

  //TODO ???
  const handleContactClick = (contact) => {
    dispatch(contactClickAction({ selectedContact: contact }));

    handleClose();
  };

  const handleClose = () => {
    onClose("contacts");
  };

  const titleContent = (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography>Contacts</Typography>
        </Box>
        <Box></Box>
      </Box>
    </>
  );

  const dialogContent = userState.contacts?.map((contact, index) => (
    <ContactListItem
      key={index}
      name={`${contact.firstName} ${contact.lastName}`}
      onContactClick={() => handleContactClick(contact)}
    />
  ));

  const actionContent = (
    <>
      <Box
        sx={{ width: "100%" }}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <CustomButton onClick={handleAddContactClick}>
            Add Contact
          </CustomButton>
        </Box>
        <Box>
          <CustomButton onClick={() => onClose("contacts")}>Close</CustomButton>
        </Box>
      </Box>
    </>
  );

  return (
    <DialogTemplate
      titleContent={titleContent}
      actionContent={actionContent}
      dialogContent={dialogContent}
      open={dialogState.contacts.open}
      paperStyle={{ height: "90vh" }}
      onClose={handleClose}
    />
  );
};

export default ContactsDialog;
