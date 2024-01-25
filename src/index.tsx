import { Provider } from "react-redux";
import store from "../store";
import { createRoot } from 'react-dom/client';
import TodoList from "./components/TodoList";
import React from "react";

export function App() {
  return (
    <Provider store={store}>
       <TodoList />
    </Provider>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
