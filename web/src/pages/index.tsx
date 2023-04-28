import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


const Home: NextPage = () => {

  let router = useRouter();

  useEffect(() => {
    if(router.isReady) {
      router.push("/Sport", undefined);
    }
  }, []);


  return (
    <></>
  )
}

export default Home;
