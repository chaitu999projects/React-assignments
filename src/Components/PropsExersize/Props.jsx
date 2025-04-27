import React, { useState } from "react";

const Props = () => {
  const [status, setStatus] = useState("success"); // default status

  const getStatusStyle = () => {
    switch (status) {
      case "success":
        return { color: "green", fontWeight: "bold"};
      case "error":
        return { color: "red", fontWeight: "bold" };
      case "warning":
        return { color: "orange", fontWeight: "bold" };
      default:
        return { color: "black" };
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-[100vh] my-10">
      <div style={{ padding: "20px" }}>
        <h2>Status Message</h2>
        <div style={getStatusStyle()}>
          {status === "success" && "Operation Successful!"}
          {status === "error" && "An Error Occurred!"}
          {status === "warning" && "Warning: Check Details!"}
          {!["success", "error", "warning"].includes(status) &&
            "Unknown Status"}
        </div>

        {/* Buttons to change status */}
        <div style={{ marginTop: "20px" }}>
          <button className="p-2 border rounded-b-sm cursor-pointer bg-green-600"
            onClick={() => setStatus("success")}
            style={{ marginRight: "10px" }}
          >
            Success
          </button>
          <button className="p-2 border rounded-b-sm cursor-pointer bg-red-500"
            onClick={() => setStatus("error")}
            style={{ marginRight: "10px" }}
          >
            Error
          </button>
          <button className="p-2 border rounded-b-sm cursor-pointer bg-orange-400"
            onClick={() => setStatus("warning")}
            style={{ marginRight: "10px" }}
          >
            Warning
          </button>
          <button className="p-2 border rounded-b-sm cursor-pointer bg-rose-300" onClick={() => setStatus("other")}>Other</button>
        </div>
      </div>
    </div>
  );
};

export default Props;
