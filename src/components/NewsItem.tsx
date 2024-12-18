import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

// Define the type for the news object
interface News {
  id: number;
  title: string;
  description: string;
  image: string;
}

// Define the props for the NewsItem component
interface NewsItemProps {
  news: News;
}

const NewsItem: React.FC<NewsItemProps> = ({ news }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={news.title}
        height="200"
        image={news.image}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {news.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {news.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsItem;