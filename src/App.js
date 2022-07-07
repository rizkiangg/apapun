import logo from "./images/logo.png";
function App() {
  return (
    <div className=" text-white bg-black ">
      <div className=" flex gap-11 mx-56 py-16">
        <div className="w-2/3">
          <img src={logo} className="mb-6" alt="logo" />
          <h1 className="text-5xl font-semibold">Easy, fast and reliable</h1>
          <div className="my-7">
            <p>
              Go shopping for merchandise, just go to dumb merch shopping. the
              biggest merchandise in Indonesia
            </p>
            <button color="#ffffff" className="border-4 border-red-500 border-solid rounded
            bg-red-500 w-48 my-32 ">Login</button>
            <button color="#ffffff" className="w-48 my-32 ">Register</button>
          </div>
        </div>
        <div className="w-1/3">
          <div className=" bg-zinc-800 w-full p-9 rounded">
          <p className="font-bold text-4xl  my-8">Login</p>
            <form>
            
                  <label htmlFor="email" className="mb-1 text-white"></label>
                <input placeholder="email" type="email" id="email" className=" p-2 text-black h-9 w-full rounded-sm"></input>
                
                <label htmlFor="password" className="mx-14"></label>
                <input placeholder="password" type="password" id="password" className="p-2 text-black h-9 w-full rounded-sm my-6"/>
                  
                    <button color="#ffffff" className="border-4 border-red-500 border-solid rounded
                   bg-red-500 w-full my-9">Login</button>
                  
                
            </form>
        </div>
          </div>

      </div>
    </div>
  );
}

export default App;
