/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import { useCallback } from "react";
import { GapHorizontal } from "./GapHorizontal";
import { GapVertical } from "./GapVertical";

export function IdentifyLessonCorrect({
  correct,
  handleNextQuestion,
  setRevealItem,
}) {
  const handleContinueLesson = useCallback(() => {
    handleNextQuestion();
    setRevealItem(false);
  });

  var correctData = {};
  if (correct.shape) {
    correctData = correct.shape;
  } else if (correct.colour) {
    correctData = correct.colour;
  }
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        css={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <img
          src={`/shapes/${correctData.src}.png`}
          css={{
            filter: `hue-rotate(${correctData.hue}deg)`,
            width: 250,
            cursor: "pointer",
          }}
          draggable={false}
        />
        <GapHorizontal times={12} />
        <div css={{ display: "flex", flexDirection: "column" }}>
          <div css={{ fontFamily: "Poppins", fontSize: 48, fontWeight: 600 }}>
            {correct.commentTitle} 🎉
          </div>
          <div
            css={{
              display: "flex",
              flexDirection: "row",
              position: "relative",
            }}
          >
            <img
              src={"/playAudio.png"}
              css={{
                width: 16,
                height: 16,
                position: "absolute",
                left: -24,
                top: "50%",
                transform: "translate(0%, -50%)",
                cursor: "pointer",
              }}
            />
            <div css={{ fontFamily: "Poppins", fontSize: 20, fontWeight: 300 }}>
              {correct.subTitle}{" "}
              <strong
                css={{ fontFamily: "Poppins", fontSize: 20, fontWeight: 700 }}
              >
                {correctData.title + "!"}
              </strong>
            </div>
          </div>
          <GapVertical times={2} />
          <div
            css={{ fontFamily: "Poppins", fontSize: 16, cursor: "pointer" }}
            onClick={() => handleContinueLesson()}
          >
            {"CONTINUE >"}
          </div>
        </div>
      </div>
    </div>
  );
}