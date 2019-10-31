import {
  getAllUsers,
  getSpecificUser,
  getSpecificOpportunity,
  postAUser,
  postAnOpportunity,
  deleteAUser,
  deleteAnOpportunity,
  patchAUser,
  patchAnOpportunity
} from "./apiCalls";

describe("getAllUsers", () => {
  let mockResponse;

  beforeEach(() => {
    mockResponse = [
      {
        email: "whateverrrrr@example.com",
        first_name: "Taylor",
        id: 1,
        last_name: "Jimenez",
        password: null,
        phone_number: 1234567890
      },
      {
        email: "whateverr@example.com",
        first_name: "Tay",
        id: 2,
        last_name: "D",
        password: null,
        phone_number: 1234567890
      }
    ];
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it("should call fetch with the correct Url", () => {
    getAllUsers();

    expect(window.fetch).toHaveBeenCalled();
  });

  it("should return all users (HAPPY)", async () => {
    const result = await getAllUsers();

    expect(result).toEqual(mockResponse);
  });

  it("should return an error when the response is not ok (SAD)", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(getAllUsers()).rejects.toEqual(
      Error("There was an error fetching your users")
    );
  });

  it("should return an error when the promise rejects, ex. the server is down (SAD)", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error("fetch error message"));
    });

    expect(getAllUsers()).rejects.toEqual(Error("fetch error message"));
  });
});

describe("getSpecificUser", () => {
  let mockResponse;
  let mockId;

  beforeEach(() => {
    mockResponse = {
      email: "whateverrrrr@example.com",
      first_name: "Taylor",
      id: 1,
      last_name: "Jimenez",
      password: null,
      phone_number: 1234567890
    };

    mockId = 1;

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it("should call fetch with the correct Url", () => {
    getSpecificUser(mockId);

    expect(window.fetch).toHaveBeenCalledWith(
      'http://localhost:5000/login', {"body": "{\"email\":1}", "headers": {"Content-Type": "application/json"}, "method": "POST"}
    );
  });

  it("should return a specific user (HAPPY)", async () => {
    const result = await getSpecificUser(mockId);

    expect(result).toEqual(mockResponse);
  });

  it("should return an error when the promise is not ok (SAD)", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(getSpecificUser(mockId)).rejects.toEqual(
      Error("There was an error accessing this user")
    );
  });

  it("should return an error when the promise rejects, ex. the server is down (SAD)", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error("fetch error message"));
    });

    expect(getSpecificUser(mockId)).rejects.toEqual(
      Error("fetch error message")
    );
  });
});


describe("getSpecificOpportunity", () => {
  let mockResponse;
  let mockUserId;
  let mockOppId;

  beforeEach(() => {
    mockResponse = {
      description:
        "I cannot rake my yard- I need someone to come in and get the front and back yard.",
      estimated_time: "1 hr",
      id: 2,
      location: "2848 Roslyn St., Denver CO 80238",
      title: "Rake Leaves",
      type: "Physical Labor",
      user_id: 1
    };

    mockUserId = 2;
    mockOppId = 2;

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it("should call fetch with the correct Url", () => {
    getSpecificOpportunity(mockUserId, mockOppId);

    expect(window.fetch).toHaveBeenCalledWith(
      `http://localhost:5000/users/${mockUserId}/opportunity/${mockOppId}`
    );
  });

  it("should return a specific opportunity (HAPPY)", async () => {
    const result = await getSpecificOpportunity(mockUserId, mockOppId);

    expect(result).toEqual(mockResponse);
  });

  it("should return an error if the response is not ok (SAD)", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(getSpecificOpportunity(mockUserId, mockOppId)).rejects.toEqual(
      Error("There was an error accessing this opportunity")
    );
  });

  it("should return an error when the promise rejects, ex. the server is down (SAD)", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error("fetch error message"));
    });

    expect(getSpecificOpportunity(mockUserId, mockOppId)).rejects.toEqual(
      Error("fetch error message")
    );
  });
});

describe("postAUser", () => {
  let postedUser;
  let mockValues;
  let mockRequest;
  let mockResponse;

  beforeEach(() => {
    postedUser = {
      email: "whateverrrrr@example.com",
      first_name: "Taylor",
      id: 1,
      last_name: "Jimenez",
      password: null,
      phone_number: 1234567890
    };

    mockValues = {
      email: "yo@gmail.com",
      password: "secret"
    };

    mockRequest = {
      method: "POST",
      body: JSON.stringify(mockValues),
      headers: {
        "Content-Type": "application/json"
      }
    };

    mockResponse = {
      "email": "whateverrrrr@example.com",
      "first_name": "Taylor",
      "id": 1,
      "last_name": "Jimenez",
      "password": null,
      "phone_number": 1234567890
    };

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(postedUser)
      });
    });
  });

  it("should call fetch with the correct Url", () => {
    postAUser(mockValues);

    expect(window.fetch).toHaveBeenCalledWith(
      "http://localhost:5000/user",
      mockRequest
    );
  });

  it("should return a poseted user (HAPPY)", async () => {
    const result = await postAUser(mockValues);

    expect(result).toEqual(mockResponse);
  });

  it("should return an error (SAD)", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(postAUser(mockValues)).rejects.toEqual(
      Error(Error("There was an error posting this User!"))
    );
  });

  it("should return an error when the promise rejects, ex. the server is down (SAD)", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error("fetch error message"));
    });

    expect(postAUser(mockValues)).rejects.toEqual(Error(Error("fetch error message")));
  });
});

describe("postAnOpportunity", () => {
  let mockResponse;
  let mockId;
  let mockRequest;
  let mockOpportunity;

  beforeEach(() => {
    mockOpportunity = {
      title: "Rake Leaves",
      type: "Physical Labor",
      description:
        "I cannot rake my yard- I need someone to come in and get the front and back yard."
    };

    mockRequest = {
      method: "POST",
      body: JSON.stringify(mockOpportunity),
      headers: {
        "Content-Type": "application/json"
      }
    };

    mockId = 2;

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it("should call fetch with the correct Url", () => {
    postAnOpportunity(mockId, mockOpportunity);

    expect(window.fetch).toHaveBeenCalledWith(
      `http://localhost:5000/users/${mockId}/opportunity`,
      mockRequest
    );
  });

  it("should return all folders (HAPPY)", async () => {
    const result = await postAnOpportunity(mockId, mockOpportunity);

    expect(result).toEqual(mockResponse);
  });

  it("should return an error (SAD)", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(postAnOpportunity(mockId, mockOpportunity)).rejects.toEqual(
      Error(Error("There was an error posting this opportunity"))
    );
  });

  it("should return an error when the promise rejects, ex. the server is down (SAD)", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error("fetch error message"));
    });

    expect(postAnOpportunity(mockId, mockOpportunity)).rejects.toEqual(
      Error(Error("fetch error message"))
    );
  });
});

describe("deleteAUser", () => {
  let mockResponse;
  let mockId;
  let mockRequest;

  beforeEach(() => {
    mockResponse = {
      description:
        "I cannot rake my yard- I need someone to come in and get the front and back yard.",
      estimated_time: "1 hr",
      id: 2,
      location: "2848 Roslyn St., Denver CO 80238",
      title: "Rake Leaves",
      type: "Physical Labor",
      user_id: 1
    };

    mockRequest = {
      method: "DELETE",
      body: undefined,
      headers: {
        "Content-Type": "application/json"
      }
    };

    mockId = 2;

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it("should call fetch with the correct Url", () => {
    deleteAUser(mockId);

    expect(window.fetch).toHaveBeenCalledWith(
      `http://localhost:5000/users/${mockId}`,
      mockRequest
    );
  });

  it("should delete a user (HAPPY)", async () => {
    const result = await deleteAUser(mockId);

    expect(result).toEqual(mockResponse);
  });

  it("should return an error (SAD)", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(deleteAUser(mockId)).rejects.toEqual(
      Error(Error("There was an error deleting this user"))
    );
  });

  it("should return an error when the promise rejects, ex. the server is down (SAD)", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error("fetch error message"));
    });

    expect(deleteAUser(mockId)).rejects.toEqual(Error(Error("fetch error message")));
  });
});

describe("deleteAnOpportunity", () => {
  let mockResponse;
  let mockUserId;
  let mockOppId;
  let mockRequest;

  beforeEach(() => {
    mockResponse = {
      description:
        "I cannot rake my yard- I need someone to come in and get the front and back yard.",
      estimated_time: "1 hr",
      id: 2,
      location: "2848 Roslyn St., Denver CO 80238",
      title: "Rake Leaves",
      type: "Physical Labor",
      user_id: 1
    };

    mockRequest = {
      method: "DELETE",
      body: undefined,
      headers: {
        "Content-Type": "application/json"
      }
    };

    mockUserId = 2;
    mockOppId = 2;

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it("should call fetch with the correct Url", () => {
    deleteAnOpportunity(mockUserId, mockOppId);

    expect(window.fetch).toHaveBeenCalledWith(
      `http://localhost:5000/users/${mockUserId}/opportunity/${mockOppId}`,
      mockRequest
    );
  });

  it("should DELETE the opportunity (HAPPY))", async () => {
    const result = await deleteAnOpportunity(mockUserId, mockOppId);

    expect(result).toEqual(mockResponse);
  });

  it("should return an error (SAD)", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(deleteAnOpportunity(mockUserId, mockOppId)).rejects.toEqual(
      Error(Error("Cannot delete opportunity!"))
    );
  });

  it("should return an error when the promise rejects, ex. the server is down (SAD)", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error("fetch error message"));
    });

    expect(deleteAnOpportunity(mockUserId, mockOppId)).rejects.toEqual(
      Error(Error("fetch error message"))
    );
  });
});

describe("patchAUser", () => {
  let mockValues;
  let mockId;
  let mockResponse;
  let mockRequest;

  beforeEach(() => {
    mockValues = {
      email: "yo@gmnhgbfail.com"
    };

    mockRequest = {
      method: "PATCH",
      body: JSON.stringify(mockValues),
      headers: {
        "Content-Type": "application/json"
      }
    };

    mockResponse = {
      firstname: "Greg",
      lastname: "Anderson",
      email: "yo@gmnhgbfail.com",
      password: "secret"
    };

    mockId = 3;

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it("should call fetch with the correct Url", () => {
    patchAUser(mockId, mockValues);

    expect(window.fetch).toHaveBeenCalledWith(
      `http://localhost:5000/users/${mockId}`,
      mockRequest
    );
  });

  it("should return all a patched user (HAPPY)", async () => {
    const result = await patchAUser(mockId, mockValues);

    expect(result).toEqual(mockResponse);
  });

  it("should return an error (SAD)", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(patchAUser(mockId, mockValues)).rejects.toEqual(
      Error(Error("There was an error accessing this opportunity"))
    );
  });

  it("should return an error when the promise rejects, ex. the server is down (SAD)", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error("fetch error message"));
    });

    expect(patchAUser(mockId, mockValues)).rejects.toEqual(
      Error(Error("fetch error message"))
    );
  });
});

describe("patchAnOpportunity", () => {
  let mockResponse;
  let mockUserId;
  let mockOppId;
  let mockValues;
  let mockRequest;

  beforeEach(() => {
    mockValues = {
      title: "Rake Leaves",
      type: "Physical Labor",
      description:
        "I cannot rake my yard- I need someone to come in and get the front and back yard."
    };
    mockUserId = 2;
    mockOppId = 2;
    mockResponse = {
      id: 22
    };
    mockRequest = {
      method: "PATCH",
      body: JSON.stringify(mockValues),
      headers: {
        "Content-Type": "application/json"
      }
    };
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it("should call fetch with the correct url (HAPPY) :)", () => {
    patchAnOpportunity(mockUserId, mockOppId, mockValues);

    expect(window.fetch).toHaveBeenCalledWith(
      `http://localhost:5000/users/${mockUserId}/opportunity/${mockOppId}`,
      mockRequest
    );
  });

  it("should return a patched opportunity (HAPPY)", async () => {
    const result = await patchAnOpportunity(mockUserId, mockOppId, mockValues);

    expect(result).toEqual(mockResponse);
  });

  it("should throw an error if the response.ok is false (SAD) :(", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(
      patchAnOpportunity(mockUserId, mockOppId, mockValues)
    ).rejects.toEqual(
      Error(Error("There was an issue editing your opportunity"))
    );
  });

  it("should throw an error if the Promise rejects (SAD) :(", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(
      "Error updating your opportunity."
  );
    });

    expect(
      patchAnOpportunity(mockUserId, mockOppId, mockValues)
    ).rejects.toEqual(
      Error("Error updating your opportunity.")
    );
  });

});

