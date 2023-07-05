import { render } from "@testing-library/react";
import Header from "../Header.js";
import { Provider } from "react-redux";
import store from "../../utils/Store.js";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on render", () => {
  const header = render(
    //Jest don't understand Link component bcz in react 
    //it's importing from react-router-dom, so just has a inbuilt function called staticRouter
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const logo = header.getAllByTestId('logo');

  console.log(logo);
  expect(logo[0].src).toBe("https://i.pinimg.com/736x/9a/fa/a4/9afaa4a58b2c5e73cdbd7d66c0b2c220.jpg")
});
