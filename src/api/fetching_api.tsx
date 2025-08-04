//---------------------------------------------------------------------------fetch user
export async function Get_user() {
  const response = await fetch("http://localhost:9000/users");
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log("not user");
  }
}
//---------------------------------------------------------------------------edit user
export async function Edit_user(obj: {
  id?: string;
  username?: string;
  password?: string;
  phone?: string;
  email?: string;
  wishes?: string[];
  car?: string[];
}) {
  const response = await fetch(`http://localhost:9000/users/${obj.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
}
