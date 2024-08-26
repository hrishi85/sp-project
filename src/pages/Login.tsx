import Pill from "../components/atom/Pill";
import Alert from "../components/atom/Alert";
import DonutChart from "../components/DonutChart"

const Login = () => {
  
  return (
    <div>
      <h1>Login</h1>
      <Pill color="red" text="75" withAlert={true} />
      <Alert color="red" text="E10 Error" />
      <Alert color="yellow" text="E10 Error" />
      <Alert color="blue" text="E10 Error" />
      <Alert color="green" text="E10 Error" />
      <DonutChart num={90} />
    </div>
  );
}

export default Login;