import { Button } from '@radix-ui/themes';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <Button>
        <Link href="/issues/new">Create Issue</Link>
      </Button>
      <h1>Hello World</h1>
    </div>
  );
};

export default Home;
