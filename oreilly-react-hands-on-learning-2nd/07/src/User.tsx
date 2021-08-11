import { useReducer, useState } from "react";

const firstUser = {
  id: "0391-3233-3201",
  firstName: "Bill",
  lastName: "Wilson",
  city: "Missoula",
  state: "Montgana",
  email: "bwilson@mtnwilsons.com",
  admin: false,
};

type UserType = typeof firstUser;
type DetailsType = Partial<UserType>;

export const User = () => {
  const [user, setUser] = useReducer(
    (user: UserType, newDetails: DetailsType) => ({ ...user, ...newDetails }),
    firstUser
  );

  return (
    <div>
      <h1>
        {user.firstName} {user.lastName} - {user.admin ? "Admin" : "User"}
      </h1>
      <p>Email: {user.email}</p>
      <p>
        Location: {user.city}, {user.state}
      </p>
      <button onClick={() => setUser({ admin: true })}>Make Admin</button>
    </div>
  );
};
