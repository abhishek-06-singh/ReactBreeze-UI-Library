import React from "react";

const UsersIndicator2 = () => {
  const users = [
    {
      name: "John Doe",
      email: "john.doe@oyelabs.com",
      status: "Online",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      statusColor: "green",
    },
    {
      name: "Conor Smith",
      email: "conor.smith@oyelabs.com",
      status: "Offline",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      statusColor: "red",
    },
    {
      name: "Bonnie Green",
      email: "bonnie.green@oyelabs.com",
      status: "Offline",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      statusColor: "red",
    },
    {
      name: "Jane Doe",
      email: "jane.doe@oyelabs.com",
      status: "Online",
      image:
        "https://images.unsplash.com/photo-1614204424926-196a80bf0be8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      statusColor: "green",
    },
    {
      name: "Emma Johnson",
      email: "emma.johnson@oyelabs.com",
      status: "Online",
      image:
        "https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      statusColor: "green",
    },
    {
      name: "Sophia Miller",
      email: "sophia.miller@oyelabs.com",
      status: "Online",
      image:
        "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      statusColor: "green",
    },
    {
      name: "Charles Taylor",
      email: "charles.taylor@oyelabs.com",
      status: "Online",
      image:
        "https://images.unsplash.com/photo-1587397845856-e6cf49176c70?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      statusColor: "green",
    },

    {
      name: "Gorge White",
      email: "gorge.white@oyelabs.com",
      status: "Offline",
      image:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      statusColor: "red",
    },
    {
      name: "John Doe",
      email: "john.doe@oyelabs.com",
      status: "Online",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      statusColor: "green",
    },
    {
      name: "Conor Smith",
      email: "conor.smith@oyelabs.com",
      status: "Offline",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      statusColor: "red",
    },
    {
      name: "Bonnie Green",
      email: "bonnie.green@oyelabs.com",
      status: "Offline",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      statusColor: "red",
    },
    {
      name: "Jane Doe",
      email: "jane.doe@oyelabs.com",
      status: "Online",
      image:
        "https://images.unsplash.com/photo-1614204424926-196a80bf0be8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      statusColor: "green",
    },
    {
      name: "Emma Johnson",
      email: "emma.johnson@oyelabs.com",
      status: "Online",
      image:
        "https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      statusColor: "green",
    },
  ];

  return (
    <div className="flex items-center justify-center h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-indigo-300 to-pink-300">
      <div className="flex items-center justify-center bg-gray-800 p-6 rounded-2xl h-5/6 max-h-screen overflow-y-auto scrollbar-hide">
        <ul className=" divide-y divide-gray-700 h-5/6">
          {users.map((user, index) => (
            <li key={index} className="py-4 sm:py-6">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user.image}
                    alt={`${user.name} image`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-200 truncate">
                    {user.name}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {user.email}
                  </p>
                </div>
                <span
                  className={`inline-flex items-center ${
                    user.status === "Online"
                      ? "bg-green-800 text-green-200 dark:bg-green-900 dark:text-green-300"
                      : "bg-red-800 text-red-200 dark:bg-red-900 dark:text-red-300"
                  } text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full`}
                >
                  <span
                    className={`w-2 h-2 mr-1 ${
                      user.status === "Online" ? "bg-green-500" : "bg-red-500"
                    } rounded-full`}
                  ></span>
                  {user.status}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UsersIndicator2;
