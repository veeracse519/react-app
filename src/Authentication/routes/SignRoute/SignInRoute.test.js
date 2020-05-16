import React from "react";
import { render, fireEvent,waitFor } from "@testing-library/react";
import SignInRoute from "./SignInRoute";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import authStore from "../../stores";
import AuthServices from "../../services/AuthService";
import AuthStore from "../../stores/AuthStore/authStore";
// import { render, fireEvent, waitFor } from "@testing-library/react";
import { Router, Route, withRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import { createMemoryHistory } from "history";
import getUsersResponse from "../../fixtures/getUsersResoponse.json"

const LocationDisplay = withRouter(({ location }) => (
  <div data-testid="location-display">{location.pathname}</div>
));
describe("SignInRoute tests:",()=>{
    let authAPI;
  let authStore;
  let signInPath="/sign-in"
  let productPath="/products-page"
  beforeEach(() => {
    authAPI = new AuthServices();
    authStore = new AuthStore(authAPI);
  });
  afterEach(()=>{
    jest.resetAllMocks();
  })
  it("should render username empty error message", () => {
    const { getByText, getByRole } = render(
      <Router history={createMemoryHistory()}>
        <SignInRoute authStore={authStore} />
      </Router>
    );
    const signInButton = getByRole("button", { name: "Sign in" });

    fireEvent.click(signInButton);

    getByText(/Please enter username/i);
  });

  it("should render password empty error message", () => {
    const { getByText, getByPlaceholderText, getByRole } = render(
      <Router history={createMemoryHistory()}>
        <SignInRoute authStore={authStore} />
      </Router>
    );
    const username = "test-user";
    const usernameField = getByPlaceholderText("UserName");
    const signInButton = getByRole("button", { name: "Sign in" });

    fireEvent.change(usernameField, { target: { value: username } });
    fireEvent.click(signInButton);

    getByText(/Please enter password/i);
  });

  it("should render signInRoute failure state", async() => {
    const { getByText, getByPlaceholderText, getByRole,debug } = render(
      <Router history={createMemoryHistory()}>
        <SignInRoute authStore={authStore} />
      </Router>
    );
    const username = "test-user";
    const password = "test-password";

    const usernameField=getByPlaceholderText("UserName")
    const passwordField = getByPlaceholderText("Password");
    const signInButton = getByRole("button", { name: "Sign in" });

    const mockFailurePromise = new Promise(function(resolve, reject) {
      reject(new Error("error"));
    }).catch(() => {});
    const mockSignInAPI = jest.fn();
    mockSignInAPI.mockReturnValue(mockFailurePromise);
    authAPI.signInAPI = mockSignInAPI;
    
    //  authStore.userSignIn()

    fireEvent.change(usernameField, { target: { value: username } });
    fireEvent.change(passwordField, { target: { value: password } });
    fireEvent.click(signInButton);
    waitFor(() => {
      getByText(/NetworkError/i);
    });
    
  });

  it("should render signInRoute success state", async () => {
    const history = createMemoryHistory();
    const route = signInPath;
    history.push(route);

    const {
      getByPlaceholderText,
      getByRole,
      queryByRole,
      queryByLabelText,
      getByTestId,
      debug
    } = render(
      <Provider authStore={authStore}>
        <Router history={history}>
          <Route path={signInPath}>
            <SignInRoute />
          </Route>
          <Route path={productPath}>
            <LocationDisplay />
          </Route>
        </Router>
      </Provider>
    );
    //debug()
    const username = "test-user";
    const password = "test-password";

    const usernameField = getByPlaceholderText("UserName");
    const passwordField = getByPlaceholderText("Password");
    const signInButton = getByRole("button", { name: "Sign in" });
    const mockSuccessPromise = new Promise(function(resolve, reject) {
      resolve(getUsersResponse);
    });
    const mockSignInAPI = jest.fn();
    mockSignInAPI.mockReturnValue(mockSuccessPromise);
    authAPI.getSignInAPI = mockSignInAPI;
    // await authStore.userSignIn()
    
    fireEvent.change (usernameField, { target: { value: username } });
    fireEvent.change(passwordField, { target: { value: password } });
    fireEvent.click(signInButton);
    
   await waitFor(() => {
      // expect(
      //   queryByRole("button", { name: "Sign in" })
      // ).not.toBeInTheDocument();
      expect(getByTestId("location-display")).toHaveTextContent(productPath);
    });
   }); 
})