export const getAllUsers = async () => {
  const url = "http://localhost:5000/user";
  let response = await fetch(url);
  if (!response.ok) {
    throw new Error("There was an error fetching your users");
  } else {
    let data = await response.json();
    return data;
  }
};

export const getSpecificUser = async (userEmail, userPassword) => {
  const url = `http://localhost:5000/login`;
  let body = {
    email: userEmail,
    password: userPassword
  }
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  };
  let response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("There was an error accessing this user");
  } else {
    let data = await response.json();
    return data;
  }
};

export const getAllOpportunities = async () => {
  const url = "http://localhost:5000/opportunities";
  let response = await fetch(url);
  if (!response.ok) {
    throw new Error("There was an error fetching the opportunities");
  } else {
    let data = await response.json();
    console.log('data', data)
    return data;
  }
};

export const getAllOpportunitiesForSpecificUser = async (id) => {
  const url = `http://localhost:5000/users/${id}/opportunity`;
  let response = await fetch(url);
  if (!response.ok) {
    throw new Error("There was an error fetching the opportunities");
  } else {
    let data = await response.json();
    return data;
  }
};

export const getSpecificOpportunity = async (userId, oppId) => {
  const url = `http://localhost:5000/users/${userId}/opportunity/${oppId}`;
  let response = await fetch(url);
  if (!response.ok) {
    throw new Error("There was an error accessing this opportunity");
  } else {
    let data = await response.json();
    return data;
  }
};

export const postAUser = async userValues => {
  const url = "http://localhost:5000/user";
  const body = {
    first_name: userValues.firstname,
    last_name: userValues.lastname,
    email: userValues.email,
    password: userValues.password,
    phone_number: userValues.phone,
    role: userValues.role
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  };
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error("There was an error posting this User!");
    }
    const newUser = await res.json();
    return newUser;
  } catch (error) {
    throw new Error(error);
  }
};

export const postAnOpportunity = async (id, values) => {
  const url = `http://localhost:5000/users/${id}/opportunity`;
  const body = {
    title: values.title,
    type: values.type,
    location: values.address,
    estimated_time: values.time,
    description: values.description
  };
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  };
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error("There was an error posting this opportunity");
    }
    const newUser = await res.json();
    return newUser;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteAUser = async userId => {
  const url = `http://localhost:5000/users/${userId}`;
  const options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("There was an error deleting this user");
    }
    const deletedUser = await response.json();
    return deletedUser;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteAnOpportunity = async (userId, oppId) => {
  const url = `http://localhost:5000/users/${userId}/opportunity/${oppId}`;
  const options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Cannot delete opportunity!");
    }
    const deletedOpportunity = await response.json();
  } catch (error) {
    throw new Error(error);
  }
};

export const patchAUser = async (userId, userValues) => {
  const url = `http://localhost:5000/users/${userId}`;
  const body = {
    first_name: userValues.firstname,
    last_name: userValues.lastname,
    email: userValues.email,
    phone_number: userValues.phone
  };
  const options = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  };

  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error("There was an error accessing this opportunity");
    }
    const patchedUser = await res.json();
    return patchedUser;
  } catch (error) {
    throw new Error(error);
  }
};

export const patchAnOpportunity = async (userId, oppId, values) => {
  const url = `http://localhost:5000/users/${userId}/opportunity/${oppId}`;
  const body = {
    title: values.title,
    type: values.type,
    location: values.address,
    estimated_time: values.time,
    description: values.description
  };
  const options = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  };

  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error("There was an issue editing your opportunity");
    }
    const patchedUser = await res.json();
    return patchedUser;
  } catch (error) {
    throw new Error(error);
  }
};
