import { UnexpectedError } from "../unexpected-error";

describe("Unexpected Error", () => {
  it("should access deneid error", () => {
    const error = new UnexpectedError();

    expect(error.name).toEqual("UnexpectedError");
  });
});
