import { CharacterStructure } from "../App/types";

interface CharacterProps {
  character: CharacterStructure;
}

const Character = ({
  character: { id, name, height, weight, creationDate, photo },
}: CharacterProps): JSX.Element => {
  return (
    <>
      <article className="character__card " id={`"${id}"`}>
        <ul>
          <li className="character__name">{name}</li>
          <li className="character__height">{height}</li>
          <li className="character__mass">{weight}</li>
          <li className="character__created">{creationDate}</li>
        </ul>
        <img src={`"${photo}"`} alt={`"${name}"`} />
      </article>
    </>
  );
};

export default Character;
