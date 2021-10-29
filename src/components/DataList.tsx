import MedicalData from "../models/MedicalData";

interface Props {
  shoutouts: ShoutOut[];
}

export default function ShoutoutList({ shoutouts }: Props) {
  return (
    <div>
      <ul>
        {shoutouts.map((shoutout, index) => {
          return (
            <li key={index}>
              <p>Shoutout To:{shoutout.to}</p>
              <p>Shoutout From:{shoutout.from}</p>
              <p>Shoutout:{shoutout.shoutout}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
