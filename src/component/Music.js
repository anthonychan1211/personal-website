import React from "react";

const Music = ({ forwardedRef }) => {
  return (
    <div ref={forwardedRef} className="music-container">
      <h1>As a Musician</h1>
      <p>
        Anthony started to learn piano and violin since young. Having chances to
        perform on various occasions provided joy and passion on music. Anthony
        took part in a summer festival in Cremona, Italy where he performed
        chamber music in the Musco del Violino with musicians such as Russian
        cellist Vladimir Panteleyev.
      </p>
      <br />
      <br />
      <iframe
        id="youtube-video"
        src="https://www.youtube.com/embed/Iwwrt72Qqrw"
        title="Piano Quartet in G minor, No. 1 op. 25 (J. Brahms)"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <br />
      <br />
      <figure id="masterclass-figure">
        <img
          id="master-class"
          src={`${process.env.PUBLIC_URL}/assets/Rafał.jpg`}
          alt="Rafał"
        />
        <figcaption>Taken after masterclass with Rafał Blechacz</figcaption>
      </figure>
      <p>
        He pursued his Master’s Degree at the Longy School of Music under the
        direction of Former Dean Wayman Chin and attended masterclass held by
        Rafał Blechacz, winner of International Chopin piano competition 2005.
      </p>

      <br />
      <br />
      <p>
        After graduation, Anthony was invited to perform in multiple events
        ,including 4 piano recitals for charity in ShanTou, China, and playing
        as guest performer in Hong Kong.
      </p>
      <br />
      <br />

      <figure id="violin-figure">
        <img
          id="violin-photo"
          src={`${process.env.PUBLIC_URL}/assets/violin.jpg`}
          alt="playing violin"
        />
        <figcaption>
          Performing for the the 25th Anniversary of Suzhou Foreign Language
          School
        </figcaption>
      </figure>

      <br />
      <p>
        Later in 2018, Anthony started to work as music teacher in Suzhou
        Foreign Language School located in Suzhou, China. He involved into large
        amount of performance by organizing and performing piano, violin and
        conducting. Except school work, he also took private piano and violin
        lessons. His students received remarkable results in ABRSM Grade Exam.
        Over 65% received Distinction, 97% received Merit or above. In addition,
        he was invited to give a public talk for promoting classical music in
        Suzhou.
      </p>
    </div>
  );
};

export default Music;
