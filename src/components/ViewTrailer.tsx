/* eslint-disable react/jsx-no-undef */
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ReactPlayer from "react-player";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  marginTop: "12px",
  borderRadius: "12px",
};
interface Props {
  linkTrailer: string;
}
export default function ViewTrailer({ linkTrailer }: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="div-load-more group mt-4 items-start">
        <button className="btn-load-more" onClick={handleOpen}>
          Xem Trailer
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ReactPlayer
            controls
            url={linkTrailer}
            style={{ textAlign: "center" }}
          />
        </Box>
      </Modal>
    </div>
  );
}
