const create = async (user) => {
  try {
    const response = await fetch("http://localhost:8080/api/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const list = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/users");
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
const read = async (params, credentials, signal) => {
  try {
    console.log("sending req");
    const response = await fetch(
      `http://localhost:8080/api/users/${params.userId}`,
      {
        method: "GET",
        signal: signal,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + credentials.t,
        },
      }
    );
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
const update = async (params, credentials, user) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/users/${params.userId}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + credentials.t,
        },
        body: JSON.stringify(user),
      }
    );
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const remove = async (params, credentials) => {
  try {
    let response = await fetch(
      `http://localhost:8080/api/users/${params.userId}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + credentials.t,
        },
      }
    );
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export { create, list, read, update, remove };
