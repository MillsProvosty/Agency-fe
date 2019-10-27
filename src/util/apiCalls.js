export const getAllUsers = async () => {
  const url = 'http://localhost:5000/user'
  let response = await fetch(url)
  if(!response.ok){
      throw new Error('There was an error fetching your users')
  } else {
      let data = await response.json();
      return data
  }
}

export const getSpecificUser = async (id) => {
  const url = `http://localhost:5000/users/8`
  let response = await fetch(url)
  if(!response.ok){
      throw new Error('There was an error accessing this user')
  } else {
      let data = await response.json();
      return data
  }
}

export const getAllOpportunities = async () => {
  const url = 'http://localhost:5000/users/8/opportunity/2'
  let response = await fetch(url)
  if(!response.ok){
      throw new Error('There was an error fetching your opportunities')
  } else {
      let data = await response.json();
      console.log(data)
      return data
  }
}

export const getSpecificOpportunity = async (userId, oppId)  => {
  const url = `http://localhost:5000/user/${userId}/opportunity/${oppId}`
  let response = await fetch(url)
  if(!response.ok){
      throw new Error('There was an error accessing this user')
  } else {
      let data = await response.json();
      return data
  }
}

export const postAUser = async userValues => {
  const url = "http://localhost:5000/user";
  const body = {
    first_name: userValues.firstname,
    last_name: userValues.lastname,
    email: userValues.email,
    password: userValues.password,
    phone_number: userValues.phone
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error("There was an error posting this User!");
    }
    const newFolder = await res.json();
    return newFolder;
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
      body: JSON.stringify(body),
    };
    try {
      const res = await fetch(url, options);
      if (!res.ok) {
        throw new Error("There was an error posting this User!");
      }
      const newFolder = await res.json();
      return newFolder;
    } catch (error) {
      throw new Error(error);
    }
  };

export const deleteAUser = async () => {
  const url = 'sup'
  const options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Cannot delete folder!");
    }
    const deletedFolder = await response.json();
    return deletedFolder;
  } catch (error) {
    throw new Error(error);
  }
}

export const deleteAnOpportunity = async (userId, oppId) => {
  const url = `http://localhost:5000/users/${userId}/opportunity/${oppId}`
  const options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Cannot delete folder!");
    }
    const deletedFolder = await response.json();
    return deletedFolder;
  } catch (error) {
    throw new Error(error);
  }
}

export const patchAUser = async (userId, userValues) => {
      const url = `http://localhost:5000/users/${userId}`
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
          const error = await res.json();
          throw new Error(error);
        }
        const patchedFolder = await res.json();
        return patchedFolder;
      } catch (error) {
        throw new Error(error);
    };
}

export const patchAnOpportunity = async (userId, oppId, oppValues) => {
  const url = `http://localhost:5000/users/${userId}/opportunity/${oppId}`
  const body = {
    first_name: oppValues.firstname,
    last_name: oppValues.lastname,
    email: oppValues.email,
    phone_number: oppValues.phone
  };
  const options = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  };

  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error);
    }
    const patchedFolder = await res.json();
    return patchedFolder;
  } catch (error) {
    throw new Error(error);
};
}


