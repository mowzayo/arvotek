const Video = () => {
  return (
    <div
      className="video-content-bg"
      style={{
        backgroundImage: "url(assets/images/backgrounds/about-2.jpg)",
      }}
    >
      <div className="bg-overlay" />
      <a
        href="assets/images/projects/arvotekmp4.mp4"  // replace with your new video file path
        className="video-play-button popup-youtube pointer-large"
      >
        <span />
      </a>
    </div>
  );
};


export default Video;
