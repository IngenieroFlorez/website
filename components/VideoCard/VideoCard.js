import React, { useState } from "react";
import Image from "next/image";
import { Modal, Button, Embed } from "semantic-ui-react";
export default function VideoCard({video}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="VideoCard">
      <Image src={video.portada.url} width={1280} height={720} alt=""  placeholder="blur"
                blurDataURL="/images/blur.png"  />
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Play</Button>}
      >
        <Embed
        
          placeholder={video.portada.url}
          url={video.video}
        />
      </Modal>
    </div>
  );
}
