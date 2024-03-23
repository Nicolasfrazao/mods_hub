import React from 'react';
import Image from 'next/image';

const Loading = () =>
{
  return (
    <div>
      <Image
      src="/images/loading.gif"
      alt="Loading..."
      height={100}
      width={100}
      ></Image>
      <p>{}</p>
    </div>
  )
}

export default Loading
