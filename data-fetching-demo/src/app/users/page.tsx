type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function UsersPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Failed to fetch users!");
    }
    const users = await response.json();
    return (
      <ul className="grid grid-cols-2 gap-2 p-4">
        {users.map((user: User) => (
          <li
            key={user.id}
            className="flex items-center justify-between p-4 bg-white shadow rounded-lg text-gray-600"
          >
            <div className="flex flex-col space-y-1">
              <h2 className="text-lg font-semibold">{user.name}</h2>
              <p className="text-sm ">{user.username}</p>
            </div>
            <div className="flex flex-col space-y-1 items-end">
              <div className="text-md">{user.email}</div>
              <div className="text-md">{user.phone}</div>
            </div>
          </li>
        ))}
      </ul>
    );
  } catch (error: any) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl text-red-500">{error.message}</div>
      </div>
    );
  }
}
