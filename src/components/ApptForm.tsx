export default function ApptForm() {
  return (
    <div>
      <h2>Record your appointment details here</h2>
      <form>
        <label className="EntryForm">
          Date?
          <input className="box" type="text" name="date" />
        </label>
        <label className="EntryForm">
          Time?
          <input className="box" type="text" name="time" />
        </label>
        <label className="EntryForm">
          Who are you meeting with?
          <input className="box" type="text" name="doctor" />
        </label>
        <label className="EntryForm">
          Reason For Visit?
          <input className="box" type="text" name="reason" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
