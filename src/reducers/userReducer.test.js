import { userReducer, roleReducer } from "./userReducer";

describe("userReducer", () => {
  it("should return the default state", () => {
    let expected = {};

    let result = userReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it("should return action.user", () => {
    let user = [
      {
        firstName: "Greg",
        lastName: "Anderson",
        email: "vrev@cewc.cew",
        password: "ybrvec",
        confirmation: "brvefc"
      }
    ];

    let expected = [
      {
        firstName: "Greg",
        lastName: "Anderson",
        email: "vrev@cewc.cew",
        password: "ybrvec",
        confirmation: "brvefc"
      }
    ];

    let mockAction = {
      type: "SET_USER",
      user
    };

    let result = userReducer({}, mockAction);

    expect(result).toEqual(expected);
  });
});

describe("roleReducer", () => {
  it("should return the default state", () => {
    let expected = "";

    let result = roleReducer(undefined, "");

    expect(result).toEqual(expected);
  });

  it("should return action.role", () => {
    let role = 'client';

    let expected = 'client';

    let mockAction = {
      type: "SET_ROLE",
      role
    };

    let result = roleReducer("", mockAction);

    expect(result).toEqual(expected);
  });
});

