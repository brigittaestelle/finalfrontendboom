export default function EntryForm() {
  return (
    <div>
      <h2>Take notes here to prepare for your upcoming appointment</h2>
      <form>
        <label className="EntryForm">
          Title:
          <input className="box" type="text" name="title" />
        </label>
        <label className="EntryForm">
          Entry:
          <input className="box" type="textbox" name="entry" />
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
