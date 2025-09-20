import { useState } from "react";


export default function ProfileImage() {

  const [hover, setHover] = useState(false);

  return(

/*
    border-1
  border-white
  dark:border-black
  hover:border-black
*/

    <div 
      className="z-10 h-full
                  relative
                  justify-self-center
                  "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <picture
          style={{
            opacity: hover ? 1 : 0
          }}
      >
        <source
          type="image/webp"
          srcSet="/images/dominikhaasartho_p_smile.webp"
        />

        <img
          className="h-full
                    absolute
                    rounded-[105px]
                    transition-all
                    p-0
                    aspect-square
                    object-cover object-top"
          src="/images/dominikhaasartho_p_smile.jpg"
          alt="Portrait of Dominik Haas Artho smiling"
        />

      </picture>

      <picture
          style={{
            opacity: hover ? 0 : 1
          }}
      >
        <source
          type="image/webp"
          srcSet="/images/dominikhaasartho_p.webp"
        />

        <img
          className="h-full
                    rounded-[105px]
                    transition-all
                    p-0
                    aspect-square
                    object-cover object-top"
          src="/images/dominikhaasartho_p.jpg"
          alt="Portrait of Dominik Haas Artho"
        />

      </picture>

    </div>
  )
}
