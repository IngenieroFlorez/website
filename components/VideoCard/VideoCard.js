import React, { useState } from "react";
import Image from "next/image";
import { Modal, Button, Embed } from "semantic-ui-react";
export default function VideoCard() {
  const [open, setOpen] = useState(false);
  return (
    <div className="VideoCard">
      <Image src="/images/Portada1.jpg" width={1280} height={720} alt="" />
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Play</Button>}
      >
        <Embed
          id="O6Xo21L0ybE"
          placeholder="/images/Portada1.jpg"
          source="youtube"
        />
      </Modal>
    </div>
  );
}
