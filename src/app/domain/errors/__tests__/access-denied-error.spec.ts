import { AccessDeniedError } from "../access-denied-error";

describe("Access Deneid Error", () => {
  it("should access deneid error", () => {
    const error = new AccessDeniedError();

    expect(error.name).toEqual("AccessDeniedError");
  });
});
