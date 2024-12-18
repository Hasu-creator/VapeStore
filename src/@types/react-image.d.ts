declare module 'react-image' {
    import React from 'react';
  
    interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
      src: string;
      alt?: string;
      onLoad?: () => void;
      onError?: () => void;
    }
  
    export class Image extends React.Component<ImageProps> {}
    export default Image;
  }