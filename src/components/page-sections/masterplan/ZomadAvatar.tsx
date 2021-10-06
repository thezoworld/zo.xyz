import React from "react";
import { Container } from "../../ui";

interface ZomadAvatarProps {}

const ZomadAvatar: React.FC<ZomadAvatarProps> = () => {
  return (
    <Container className="md:text-2xl md:pt-40 pt-24 pb-24 text-lg md:text-left text-center md:px-0 px-3">
      <p className="pb-12">
        Post the launch of our Genesis set. After that, we’ll finish our work
        with the OG Zomads avatar set. We have exciting things planned with
        animations, custom stickers, Display Pictures, Cover images, and all
        things cool to flex your Zo identity anywhere in the world.
      </p>
      <p>
        In parallel, we’re taking the challenge of even more prolonged and
        broader trips with the launch of complete India trips, the way we love
        it, with the locals, serendipitous and following the heart.
      </p>
    </Container>
  );
};

export default ZomadAvatar;
