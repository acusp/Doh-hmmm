declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.gif';
declare module '*.mp4';

declare module '*.scss';
// for style loader
declare module '*.css' {
  const styles: any;
  export = styles;
}