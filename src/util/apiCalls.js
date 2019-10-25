export const getAllUsers = async () => {
  const url = "http://localhost:5000/users";
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    // body: JSON.stringify(body),
    mode: "cors"
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("There was an error getting all users User!");
    }
    const allUsers = await response.json();
    console.log(allUsers)
    return allUsers;
  } catch (error) {
    throw new Error(error);
  }
};

export const getSpecificUser = async (id) => {
  console.log(id)
  let url = `http://localhost:5000/users/${id}`
  let response = await fetch(url)
  if(!response.ok){
      throw new Error('There was an error accessing this user')
  } else {
      let data = await response.json();
      console.log(data)
      return data
  }
}

// // export const getAllOpportunities = () => {

// // }

// // export const getSpecificOpportunity = ()  => {

// // }

export const postAUser = async userValues => {
  console.log(userValues);
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
    mode: "cors"
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

// // export const postAnOpportunity = () => {

// // }

export const deleteAUser = async (id) => {
  console.log(id)
  let url = `http://localhost:5000/users/${id}`
  let options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Cannot delete folder!");
    }
    const deletedFolder = await response.json();
    console.log(deletedFolder)
    return deletedFolder;
  } catch (error) {
    throw new Error(error);
  }
}

// // export const deleteAnOpportunity = () => {

// // }

// export const patchAUser = () => {
//       const url;
//       const body = {
//         name: folderName
//       };
//       const options = {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(body)
//       };

//       try {
//         const res = await fetch(url, options);
//         if (!res.ok) {
//           const error = await res.json();
//           throw new Error(error);
//         }
//         const patchedFolder = await res.json();
//         return patchedFolder;
//       } catch (error) {
//         throw new Error(error);
//     };
// }

// // export const patchAnOpportunity = () => {

// // }
