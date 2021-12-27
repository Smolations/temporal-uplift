// notes

// API
Temporal.Now
Temporal.Instant
  // A Temporal.Instant represents a fixed point in time(called "exact time"),
  // without regard to calendar or location, e.g.July 20, 1969, at 20: 17 UTC.
Temporal.ZonedDateTime
  // A Temporal.ZonedDateTime is a timezone - aware, calendar - aware date / time
  // object that represents a real event that has happened(or will happen) at a
  // particular exact time from the perspective of a particular region on Earth,
  // e.g.December 7th, 1995 at 3: 24 AM in US Pacific time(in Gregorian calendar).
Temporal.PlainDate
  // A Temporal.PlainDate object represents a calendar date that is not
  // associated with a particular time or time zone, e.g.August 24th, 2006.
Temporal.PlainTime
  // A Temporal.PlainTime object represents a wall - clock time that is not
  // associated with a particular date or time zone, e.g. 7: 39 PM.
Temporal.PlainDateTime
  // A Temporal.PlainDateTime represents a calendar date and wall - clock time
  // that does not carry time zone information,
  // e.g.December 7th, 1995 at 3: 00 PM(in the Gregorian calendar).
Temporal.PlainYearMonth
  // A date without a day component.This is useful to express things
  // like "the October 2020 meeting".
Temporal.PlainMonthDay
  // A date without a year component.This is useful to express things
  // like "Bastille Day is on the 14th of July".
Temporal.Duration
  // A Temporal.Duration expresses a length of time, e.g. 5 minutes and 30
  // seconds. This is used for date / time arithmetic and for measuring
  // differences between Temporal objects.
Temporal.TimeZone
  // A Temporal.TimeZone represents an IANA time zone, a specific UTC offset, or
  // UTC itself. Time zones translate from a date / time in UTC to a local
  // date / time. Because of this Temporal.TimeZone can be used to convert
  // between Temporal.Instant and Temporal.PlainDateTime as well as finding out
  // the offset at a specific Temporal.Instant.
Temporal.Calendar
  // A Temporal.Calendar represents a calendar system. Most code will use the
  // ISO 8601 calendar, but other calendar systems are available.



// some objects use plural property names, others use singular
const newPlainTime = Temporal.PlainTime.from({
  hour: 1,
  minute: 2,
  second: 3,
});
newPlainTime.hour  // 1
newPlainTime.minute  // 2
newPlainTime.second  // 3

// SINGULAR
// Plain*
// ZonedDateTime

// PLURAL
// Duration
// Instant* (though only up to epochSeconds)
