import React, { useState } from 'react';
import { Button } from './Button';

interface IProps {}

export const Pure: React.FC<IProps> = ({}) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(5);

  const handleClick = async () => {
    setLiked((prev) => !prev);
    setLikes((prev) => (liked ? --prev : ++prev));
  };

  return (
    <Button liked={liked} loading={false} onClick={handleClick} value={likes} />
  );
};
