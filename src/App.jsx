import { RouterProvider } from "react-router-dom";
import router from "./Routes/Route";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto ">
      <RouterProvider router={router}></RouterProvider>
     <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;
