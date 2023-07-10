import timeslot from '../time_slots.json'
let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
//Setting Time
function freestartHours(value) {
    //for single digit
    if(value[1] === " ") {
      var first;
      if((value.length>4 && value[5]=== "P") || value[2] === "P"){
        var parse = parseInt(value[0])
        parse = 12 + parse;
        first = parse.toString();
        return first
      }
      else{
        return "0"+ value[0];
      }
    }
    //for two digit
    if(value[2] === " ") {
      var second;
      if((value.length>6 && value[6] === "P") || value[3] === "P") {
        var twodigit = value.substring(0, 2);
        var parsed = parseInt(twodigit)
        parsed = 12 + parsed;
        second = parsed.toString();
        return second
      }
      else{
        if(value.substring(0,2) === "12") {
          return "24"
        }
        return value.substring(0,2)
      }
    }
}

function freestartMinute(value) {
    if(value[1] === " " && (value[2] !== "A") && (value[2] !== "P")) {
        var text = value;
        return text.substring(2, 4);
    }
    else if(value[2] === " " && (value[3] !== "A") && (value[3] !== "P")) {
      return value.substring(3,5)
    }
    else{
        var texts = "00"
        return texts;
    }
}

function firstBusySlotHours(value) {
  if(value[1] === " ") {
    var parse = parseInt(value[0])
    parse = (parse - 7) + 7;
    var first = parse.toString();
    return "0"+ first;
  }
  else{
    var parse = parseInt(value.substring(0,2));
    parse = (parse - 7) + 7;
    var first = parse.toString();
    return first
  }
}

function firstBusySlotMinute(value){
  if(value[2] === " ") {
    var parse  = parseInt(value.substring(3, 5))
    return parse;
  }
  else if(value[2] !== "A"){
    var parse = parseInt(value.substring(2, 4))
    return parse;
  }
  else{
    return "00";
  }
}

// function otherBusySlotHours(value) {

//   if(value[1] === " ") {
//     if((value.length>4 && value[5] === "A") || (value[2] === "A")) {
//       return "0" + value[0];
//     }
//     else{
//       var parse = parseInt(value[0]);
//       parse = parse + 12;
//       var slotInString = parse.toString();
//       return slotInString;
//     }
//   }
//   else{
//     if((value.length > 5 && value[6] === "A") || value[3] === "A") {
//       return value.substring(0, 2);
//     }
//     else{
//       var parse = parseInt(value.substring(0, 2));
//       parse = parse + 12;
//       var slotInString = parse.toString();
//       return slotInString;
//     }
//   }
// }

// function otherBusySlotMinute(value) {
//   if(value[1] === " " && (value[2] !== "A") && (value[2] !== "P")) {
//     var text = value;
//     return text.substring(2, 4);
//   }
//   else if(value[2] === " " && (value[3] !== "A") && (value[3] !== "P")) {
//     return value.substring(3,5)
//   }
//   else{
//       var texts = "00"
//       return texts;
//   }
// }




function BusySlotCalendar() {

  const events = [];

  // First Busy Slot from 7 AM 
  const initialEvent = {
    id:createEventId(),
    title: "Busy",
    start : todayStr + `T07:00:00`,
    end : todayStr + `T${firstBusySlotHours(timeslot.startTime)}:${firstBusySlotMinute(timeslot.startTime)}:00`,
    color : "#ff9a9a"
  }
  events.push(initialEvent);

  // Second Busy Slot 
  var BusySlots = timeslot.otherAvailableSlots.substring(1, timeslot.otherAvailableSlots.length-1);
  BusySlots = BusySlots.split(", ")

  var SecondSlot = BusySlots[0].split(" till ")
  const secondEvent = {
    id:createEventId(),
    title: "Busy",
    start: todayStr + `T${firstBusySlotHours(timeslot.endTime)}:${firstBusySlotMinute(timeslot.endTime)}:00`,
    end: todayStr + `T${freestartHours(SecondSlot[0])}:${freestartMinute(SecondSlot[0])}:00`,
    color: "#ff9a9a"
  }
  events.push(secondEvent);

  //Other Busy Slot
  for(var slot = 0; slot < BusySlots.length-1; slot++) {
    var busyslotarray = BusySlots[slot].split(" till ")
    var nextBusySlotArray = BusySlots[slot+1].split(" till ");
    const busyEvent = {
      id: createEventId(),
      title: "Busy",
      start : todayStr + `T${freestartHours(busyslotarray[1])}:${freestartMinute(busyslotarray[1])}:00`,
      end : todayStr + `T${freestartHours(nextBusySlotArray[0])}:${freestartMinute(nextBusySlotArray[0])}:00`,
      color : "#ff9a9a"
    }
    events.push(busyEvent);
  }

  
  //Last Busy Slot
  var temp = BusySlots[(BusySlots.length-1)].split(" till ");
  var lastSlot = temp[1]
  console.log("Last Slot : "+lastSlot)
  const lastBusyEvent = {
    id : createEventId(),
    title: "Busy",
    start: todayStr + `T${freestartHours(lastSlot)}:${freestartMinute(lastSlot)}:00`,
    end: todayStr + `T24:00:00`,
    color: "#ff9a9a"
  }
  events.push(lastBusyEvent)

  return events;

 }

function FreeSlotCalendar() {
  const events = [];
  var givenSlots = timeslot.otherAvailableSlots.substring(1, timeslot.otherAvailableSlots.length-1)
  givenSlots = givenSlots.split(", ")
  const colors = ["rgb(130 255 148)"];
  // Use a for loop to create events
  for (let timeslots =0; timeslots<givenSlots.length; timeslots++) {
    var slotarray = givenSlots[timeslots].split(" till ")
    const event = {
      id: createEventId(),
      title: "Free time",
      start: todayStr + `T${freestartHours(slotarray[0])}:${freestartMinute(slotarray[0])}:00`,
      end: todayStr + `T${freestartHours(slotarray[1])}:${freestartMinute(slotarray[1])}:00`,
      color: colors[0]
    }
    events.push(event);
  }
  return events
}


const freeslotevents = FreeSlotCalendar()
const busyslotevents = BusySlotCalendar()

export const INITIAL_EVENTS = [

  {
    id: createEventId(),
    title: 'Free Time',
    start: todayStr + `T${freestartHours(timeslot.startTime)}:${freestartMinute(timeslot.startTime)}:00`,
    end: todayStr + `T${freestartHours(timeslot.endTime)}:${freestartMinute(timeslot.endTime)}:00`,
    color: "rgb(130 255 148)",

  },
  {
    id: createEventId(),
    title: 'Non-working Hours',
    start: todayStr + 'T00:00:00',
    end: todayStr + 'T07:00:00',
    color: "#aeaeae",
    extendedProps: {
      description: "This is Free Time"
    }
  },

  //Spread Operator to display or fetch an array of events
  ...freeslotevents,
  ...busyslotevents


];


export function createEventId() {
  return String(eventGuid++);
}
