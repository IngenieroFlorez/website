import React, { useState } from "react";
import Image from "next/image";
import { Modal, Button, Embed } from "semantic-ui-react";
export default function VideoCard() {
  const [open, setOpen] = useState(false);
  return (
    <div className="VideoCard">
      <Image src="/images/SWR.png" width={1280} height={720} alt="" />
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Play</Button>}
      >
        <Embed
          id="8Qs46XlwKXs"
          placeholder="/images/SWR.png"
          source="youtube"
        />
      </Modal>
    </div>
  );
}
