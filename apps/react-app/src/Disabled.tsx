import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from './Button';

interface IProps {}

export const Disabled: React.FC<IProps> = ({}) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState<any>();
  const [likeLoading, setLikeLoading] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:4000/likes').then((res) => setLikes(res.data));
  }, []);

  const handleClick = async () => {
    setLikeLoading(true);
    const res = await axios.post('http://localhost:4000/likes', {
      action: liked ? 'unlike' : 'like',
    });
    setLikeLoading(false);
    setLikes(res.data);
    setLiked((prev) => !prev);
  };

  return (
    <>
      <Button
        loading={likeLoading}
        liked={liked}
        value={likes}
        onClick={handleClick}
      />
    </>
  );
};
