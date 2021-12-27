import React, { useState, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import { DogeWrapper, Loading, DogePage } from "./dogeGameStyledElements";

const unityContext = new UnityContext({
  loaderUrl: "Build/Builds.loader.js",
  dataUrl: "Build/Builds.data",
  frameworkUrl: "Build/Builds.framework.js",
  codeUrl: "Build/Builds.wasm",
});

const DogeGame = () => {
  const [progression, setProgression] = useState(0);

  useEffect(function () {
    unityContext.on("progress", function (progression) {
      setProgression(progression);
    });
  }, []);

  return (
    <DogePage>
      <DogeWrapper>
        <Loading prog={progression / 0.9} />
        <Unity
          unityContext={unityContext}
          style={{
            width: "100%",
            "box-shadow": "7.07px 7.07px 10px 0px rgba(39, 36, 67, 0.4)",
          }}
        />
        {/* <iframe
          src="https://stormy-shore-09509.herokuapp.com/"
          title="dogeruntoken"
          width="1920px"
          height="1080px"
        ></iframe> */}
      </DogeWrapper>
    </DogePage>
  );
};

export default DogeGame;
