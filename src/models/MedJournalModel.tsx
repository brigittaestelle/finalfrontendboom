export interface NotesModel{
  _id?: string,
  title: string,
  entry: string  
}

export interface ApptModel{
    _id?: string,
    date: string,
    time: string,
    doctor: string,
    reason: string,
    questions: string
}