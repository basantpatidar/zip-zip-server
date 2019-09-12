import React from "react";

function App() {
  return (
    <div className="App">
      <a href="/auth/google">Sign In Google</a> <br></br>
      <a href="/api/current_user">Current User</a>
      <br></br>
      <a href="/api/logout">logout</a>
    </div>
  );
}

export default App;
