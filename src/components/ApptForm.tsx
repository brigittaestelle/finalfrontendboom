export default function ApptForm() {
  return (
    <form>
      <label>
        Date?
        <input type="text" name="date" />
      </label>
      <label>
        Time?
        <input type="text" name="time" />
      </label>
      <label>
        Who are you meeting with?
        <input type="text" name="doctor" />
      </label>
      <label>
        Reason For Visit?
        <input type="text" name="reason" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
