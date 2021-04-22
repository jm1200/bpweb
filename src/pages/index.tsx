import { Layout } from "../components/Layout";
import { withApollo } from "../utils/withApollo";

const Index = () => {
  return <Layout></Layout>;
};

export default withApollo({ ssr: true })(Index);
