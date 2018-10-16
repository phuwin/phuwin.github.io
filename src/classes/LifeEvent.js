class LifeEvent {
  constructor (title, text, time, place, endTime) {
    this.title = title
    this.text = text
    this.time = time
    this.endTime = endTime
    this.place = place
  }

  get information () {
    return {
      title: this.title,
      text: this.text,
      time: this.time,
      place: this.place,
      endTime: this.endTime
    }
  }
}
export default LifeEvent
