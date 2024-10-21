import { type IMember } from '../utils/interface/aboutUsInterface';
import MemberCard from './elements/MemberCard.tsx';

type InputProps = {
  ourMember: IMember[],
};

function Members(props: InputProps) {

  return (
    <section className="members section section_grid-column">
      <h1 className="members__title title-font title-font_regular title-font_size_medium">Наши участники</h1>
      {props.ourMember.map((member) => {
        return (
          <MemberCard
            key={member.id}
            imageurl={member.imageUrl}
            profession={member.role}
            name={member.name}
            description={member.description}
          />
        );
      })}
    </section>
  );
}

export default Members;