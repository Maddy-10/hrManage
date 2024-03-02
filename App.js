import Navigation from "./Navigation";
import { LoginStateProvider } from "./context/LoginState";
import Dashboard from "./screens/Dashboard";
import Login from "./screens/Login";

export default function App() {
  return (
    <>
      <LoginStateProvider>
        <Navigation />
      </LoginStateProvider>
    </>
  );
}
