import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import  {fetchUsers}  from "../action-creators/user";

import { useTypedSelector } from "../hooks/useTypedSelector";

const UserList: React.FC = () => {
  const { error, loading, users } = useTypedSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      {users.map((item: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; })=> (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default UserList;
