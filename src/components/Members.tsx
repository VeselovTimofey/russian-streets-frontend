import membersJson from "../utils/json/members.json";
import MemberCard from "./elements/MemberCard";

function Members() {
  const member = JSON.parse(JSON.stringify(membersJson));

  return (
    <section className="members section section_grid-column">
      <h1 className="members__title title-font title-font_regular title-font_size_medium">Наши участники</h1>
      {Object.keys(member).map((keyName, i) => (
        <MemberCard
          key={i}
          imageurl={member[keyName].imageurl}
          profession={member[keyName].profession}
          name={member[keyName].name}
          description={member[keyName].description}
        />
      ))}
    </section>
  );
}

export default Members;