import MedicalData from "../models/MedicalData";

interface Props {
  medicalData: MedicalData[];
}

export default function ShoutoutList({ medicalData }: Props) {
  return (
    <div>
      <ul>
        {medicalData.map((shoutout, index) => {
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
