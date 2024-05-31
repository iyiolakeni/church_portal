const Sermon = () => {
  return (
    <div className="sermonBody">
      {/* A card for Youtube Player */}
      <div className="youTube">
        <h2>Watch A Message</h2>
        <iframe
          width="720"
          height="500"
          src="https://www.youtube.com/embed/anPXJiXKWPg?si=252SkUqoFfF10RXU&amp;controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};
export default Sermon;
