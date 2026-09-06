function AppImage({ src, alt = "", ...props }) {
  return <img src={src} alt={alt} {...props} />;
}

export default AppImage;
