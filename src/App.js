import "./App.css";

function App() {
  return (
    <div className="bg-gradient-radial-blue sm:bg-gradient-radial-black text-white">
      <div className="contnr">
        <nav className="flex justify-between items-center">
          <div className="text-center flex-shrink-0">
            <span className="font-bold text-2xl font-Inter">UNX</span>
          </div>
          <div className="sm:flex space-x-10 justify-between font-Inter hidden">
            <div>
              <a href="/">Products</a>
            </div>
            <div>
              <a href="/">Products</a>
            </div>
            <div>
              <a href="/">Products</a>
            </div>
            <div>
              <a href="/">Products</a>
            </div>
          </div>
          <div className="sm:flex hidden bg-cust-black font-Inter rounded-lg px-8 py-2.5 font-bold">
            Dashboard
          </div>
          <img className="sm:hidden visible" src="/Group.svg" alt="hamburger" />
        </nav>

        <section className="flex justify-center text-center sm:text-6xl text-4xl font-bold font-Inter mt-24 mb-16">
          <div>
            <span>The Best Way to</span>
            <br />
            <span className="text-grad">Track your Daily Progress</span>
          </div>
        </section>

        <section className="flex justify-center text-center text-sm sm:text-base font-Poppins mx-auto sm:w-1/2 w-11/12  mb-16">
          <p className="text-cust-grayy">
            UNX Allows you to track all your daily task progress using
            gamification methods and earn rewards for specific coupons
          </p>
        </section>

        <section className="flex justify-center">
          <div className="bg-cust-blue px-12 py-4 rounded-lg font-Inter font-bold text-white">
            Try this app
          </div>
        </section>
      </div>
      <section className="flex justify-center px-3">
        <img className="sm:w-3/4" src="/Frame.png" alt="img" />
      </section>
    </div>
  );
}

export default App;
