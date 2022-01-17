import { Route, Redirect } from "react-router";
import StoreContext from "../Store/Context";
import { useContext } from "react";
const RoutesPrivate = ({ component: Component, ...rest }) => {
  const { token } = useContext(StoreContext);
  return (
    <Route
      {...rest}
      render={() => (token ? <Component {...rest} /> : <Redirect to="/" />)}
    />
  );
};
export default RoutesPrivate;
