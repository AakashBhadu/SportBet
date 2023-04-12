import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';


const Home: NextPage = () => {

  let router = useRouter();

  useEffect(() => {
    if(router.isReady) {
      router.push("/Sport", undefined, {shallow: true});
    }
  }, []);


  return (
    <>
    </>
  )
}

export default Home;
