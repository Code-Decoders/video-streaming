import { useRouter } from "next/router";
import video from "../../public/images/demo_image.png";
import Image from "next/image";
import VideoPlayer from "../../components/VideoPlayer/videoPlayer";
import { useContext, useEffect, useState } from "react/cjs/react.development";
import { AppState } from "../_app";

const Live = () => {
  const router = useRouter();

  const name = router.query.name;
  const [state] = useContext(AppState);
  const [stream, setStream] = useState(null);
  useEffect(() => {
    if (state.contracts) {
      var getData = async () => {
        var myStream = await state.contracts.storage
          .get(router.query.user)
          .call();
        setStream(myStream);
      };
      getData();
    }
  }, [state]);

  if (!stream) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ marginLeft: "40px" }}>
      <div>
        <VideoPlayer
          link={stream.stream.url}
          image={stream.avatar}
          name={name}
          title={stream.stream.title}
          game={stream.stream.category}
        />
      </div>
    </div>
  );
};
export default Live;
