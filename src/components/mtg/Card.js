import React, { forwardRef } from "react";
import "react-material-symbols/rounded";

const MtgCard = forwardRef(
  ({ inputValues, templateImage, cardImage }, ref) => {
    return (
      <div ref={ref} className="w-[750px] h-auto aspect-[7/10] relative">
        <div
          style={{ backgroundImage: `url(${inputValues.artwork})` }}
          className="object-fit bg-center bg-cover select-none absolute rounded-[2px] top-[189px] left-[85px] w-[580px] h-[570px] object-cover0"
        ></div>

        <img
          src={"./mtg/cards/" + inputValues.mtgTemplate + ".png"}
          className="select-none absolute top-0 left-0 right-0 bottom-0 h-full w-full object-fit"
          alt={"TCG Card Builder by John Uberbacher"}
        />

        <div
          style={{ lineHeight: "85px" }}
          className="select-none absolute top-[36px] left-[58px] font-ygo-matrix-sc-2 text-[84px]"
        >
          {inputValues.name}
        </div>

        <div className="absolute flex flex-col items-center justify-center w-20 h-20 text-center text-white font-memo text-[48px] top-[42px] left-[38px]">
          {inputValues.mtgManaCost}
        </div>

        <div className="absolute left-[82px] bottom-[270px] text-[30px] font-ygo-matrix-sc-2 text-left">
          {inputValues.mtgEdition}
        </div>

        <div className="absolute right-[82px] bottom-[270px] text-[30px] font-ygo-matrix-sc-2 text-right">
          {inputValues.mtgCardNumber}
        </div>

        <div
          className={
            "absolute left-[58px] right-[56px] text-[22.25px] leading-[22.25px] font-ygo-matrix-book " + "top-[845px]"
          }
        >
          {inputValues.mtgRulesText}
        </div>
      
        <div>
          <div
            className="absolute bottom-[62px] right-[212px] text-[26px] font-ygo-stone-serif-sc-bold"
            style={{ textAlign: "right" }}
          >
            {inputValues.mtgPower}/
          </div>
          <div
            className="absolute bottom-[62px] right-[57px] text-[26px] font-ygo-stone-serif-sc-bold"
            style={{ textAlign: "right" }}
          >
            {inputValues.mtgToughness}
          </div>
        </div>

        <div className="select-none absolute bottom-[17px] right-[60px] left-[315px] font-ygo-matrix-sc-2 text-[32px] text-right overflow-hidden whitespace-nowrap flex flex-row gap-1.5 items-center justify-end">
          <span className="text-[24px] font-serif">©</span>
          {inputValues.mtgCopyright}
        </div>
      </div>
    );
  }
);

export default MtgCard;
