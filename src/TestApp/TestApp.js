import Routable, { Link, Route } from "@enact/ui/Routable";
import { useCallback, useState } from "react";

const Views = Routable({ navigate: "onNavigate" }, ({ children }) => (
  <div>{children}</div>
));

const Main = () => (
  <div>
    <Link path="./about">About</Link>
    <Link path="./faq">FAQ</Link>
  </div>
);

const About = () => <div>Greetings! We are Enact team.</div>;

const Faq = () => <div>List of FAQ</div>;

const TestApp = (props) => {
  // use 'main' for the default path
  const [path, nav] = useState("main");
  // if onNavigate is called with a new path, update the state
  const handleNavigate = useCallback(
    (ev) => {
      console.log("ev", ev);
      return nav(ev.path);
    },
    [nav]
  );

  return (
    <>
      {/* the path is: {path}
       <Main />
       <Views {...props} path={path} onNavigate={handleNavigate}>
         <Route path="about" component={About} />
         <Route path="faq" component={Faq} />
       </Views> */}
      {path}
      <Views {...props} path={path} onNavigate={handleNavigate}>
        <Route path="main" component={Main}>
          <Route path="about" component={About} />
          <Route path="faq" component={Faq} />
        </Route>
        <Route path="myroute" component={<div>my route path</div>}>
          <Route path="about" component={About} />
          <Route path="faq" component={Faq} />
        </Route>
      </Views>
    </>
  );
};

export default TestApp;
export { TestApp };
