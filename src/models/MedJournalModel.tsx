export interface NotesModel{
  _id?: string,
  title: string,
  notes: string  
}

export interface ApptModel{
    _id?: string,
    date: string,
    time: string,
    doctor: string,
    reason: string,
    questions: string
}