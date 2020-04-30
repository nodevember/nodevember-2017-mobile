import { findNextTalksAfterDate, talkToDateTime, Talks } from "../index";
import { find } from "lodash";

const firstTalk = find(
  Talks,
  talk => talk.title === "Keynote - What is Community Engineering?"
);

describe("findNextTalksAfterDate", () => {
  it("finds the ", () => {
    expect(findNextTalksAfterDate(new Date(), Talks.sort())).toEqual([
      firstTalk
    ]);
  });
});

describe("talkToDateTime", () => {
  it("creates date object from talk", () => {
    console.log(talkToDateTime(firstTalk));
  });
});
