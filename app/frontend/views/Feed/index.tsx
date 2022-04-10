import React, { useEffect, useState } from 'react';
import { api } from '@app/services/axios';

// Components
import { Container, Grid } from '@app/components/Containers';
import { Post } from '@app/components/Post';

// Layouts
import Page from '@app/views/_layouts/Page';

interface IPosts {
  title: string;
  id: string;
  raw_photo: string;
}

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<IPosts[]>([]);

  const fetchAllPosts = async () => {
    const response = await api.get('api/v1/posts');
    const data = await response.data;

    setPosts(data);
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <Page>
      <Container css={{ marginTop: 67 }}>
        <Grid
          css={{
            gridTemplateColumns: 'repeat(3,1fr)',
            gridTemplateRows: 'repeat(8, 1fr)',
          }}
        >
          {posts.map((post) => (
            <Post key={post.id} title={post.title} raw_photo={post.raw_photo} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
};

export default Feed;
