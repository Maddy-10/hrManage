import Navigation from "./Navigation";
import { DataProvider } from "./context/Data";
import { LoginStateProvider } from "./context/LoginState";
import Dashboard from "./screens/Dashboard";
import Login from "./screens/Login";

export default function App() {
  return (
    <>
      <DataProvider>
      <LoginStateProvider>
        <Navigation />
      </LoginStateProvider>
      </DataProvider>
    </>
  );
}
