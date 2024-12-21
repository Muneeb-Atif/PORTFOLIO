  import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Muneeb Atif ",
    location: "Islamabad, Pakistan",
    email: "munib.aatif786@gmail.com",
    availability: "Open for work",
    // brand:
      // "With 1.5 years of React.js experience, I've crafted dynamic and responsive user interfaces, mastered state management, and optimized performance."
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
