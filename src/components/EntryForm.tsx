export default function EntryForm() {
    return (
      <form>
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <label>
          Entry:
          <input type="textbox" name="entry" />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }