export const getAllUsers = async () => {
  const url = " https://agency-flask.herokuapp.com/user";
  let response = await fetch(url);
  if (!response.ok) {
    throw new Error("There was an error fetching your users");
  } else {
    let data = await response.json();
    return data;
  }
};
export const getReservedOpps = async (volId) => {
  const url = `https://agency-flask.herokuapp.com/users/${volId}/opportunities`;
  let response = await fetch(url);
  if (!response.ok) {
    throw new Error("There was an error fetching your users");
  } else {
    let data = await response.json();
    return data;
  }
};

export const getSpecificUser = async (userEmail, userPassword) => {
  const url = `https://agency-flask.herokuapp.com/login`;
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
  const url = "https://agency-flask.herokuapp.com/opportunities";
  let response = await fetch(url);
  if (!response.ok) {
    throw new Error("There was an error fetching the opportunities");
  } else {
    let data = await response.json();
    return data;
  }
};

export const getAllOpportunitiesForSpecificUser = async (id) => {
  const url = `https://agency-flask.herokuapp.com/users/${id}/opportunity`;
  let response = await fetch(url);
  if (!response.ok) {
    throw new Error("There was an error fetching the opportunities");
  } else {
    let data = await response.json();
    return data;
  }
};

export const getSpecificOpportunity = async (userId, oppId) => {
  const url = `https://agency-flask.herokuapp.com/users/${userId}/opportunity/${oppId}`;
  let response = await fetch(url);
  if (!response.ok) {
    throw new Error("There was an error accessing this opportunity");
  } else {
    let data = await response.json();
    return data;
  }
};

export const postAUser = async userValues => {
  const url = "https://agency-flask.herokuapp.com/user";
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
  const url = `https://agency-flask.herokuapp.com/users/${id}/opportunity`;
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
  const url = `https://agency-flask.herokuapp.com/users/${userId}`;
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
  const url = `https://agency-flask.herokuapp.com/users/${userId}/opportunity/${oppId}`;
  const options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Cannot delete opportunity!");
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const patchAUser = async (userId, userValues) => {
  console.log('1', userValues)
  const url = `https://agency-flask.herokuapp.com/users/${userId}`;
  const body = {
    first_name: userValues.firstName,
    last_name: userValues.lastName,
    email: userValues.email,
    phone_number: userValues.phone,
    password: userValues.password
  };
  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  };
  console.log('2', options)
  try {
    const res = await fetch(url, options);
    console.log('3', res)
    if (!res.ok) {
      throw new Error("There was an error accessing this opportunity");
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const patchAnOpportunity = async (userId, oppId, values) => {
  const url = `https://agency-flask.herokuapp.com/users/${userId}/opportunity/${oppId}`;
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

export const postVolToClient = async(volId, oppId) => {
  const url = `https://agency-flask.herokuapp.com/users/${volId}/opportunities/${oppId}`
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" }
  };
  let response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("There was an error linking you up!");
  } else {
    let data = await response.json();
    return data;
  }
}