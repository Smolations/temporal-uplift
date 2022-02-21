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


/*********************************
 * https://medium.com/folkdevelopers/the-ultimate-guide-to-electron-with-react-8df8d73f4c97
 *********************************/

// If a parent property is defined on a BrowserWindow, then that
// BrowserWindow becomes a child window to the BrowserWindow
// that has been assigned as its parent window. A child window always
// stays on top of the parent window.
function createWindow() {
  let heyparent = new BrowserWindow();
  let heychild = new BrowserWindow({ parent: heyparent });
  heychild.show();
  heyparent.show();
}


// How to disable a parent window when a child window pops up?
// That’s exactly what a modal window does. To create a modal window,
// you need to set both the parent and modal properties.
// Electron loads the child with a slight delay. So, the recommended way
// is to set the `show` property to false.
// Now as soon as the child window gets rendered, show it by running
// the show function. But, how to detect when a page finishes getting
// rendered? As soon as a webpage renders, the ready-to-show event is
// fired.
const parent = new BrowserWindow();

// recommended
const child = new BrowserWindow({
  parent: parent,
  modal: true,
  show: false
});

child.loadURL('https://github.com');

//show as soon as the file is rendered
child.once('ready-to-show', () => { child.show(); });



//// FIRE UP A WINDOW ON CLICK ////
import React from 'react';
const electron = window.require('electron');
const remote = electron.remote;
const { BrowserWindow } = remote;


export default function App() {
  return (
    <button onClick={() => {
      const win = new BrowserWindow();
      win.loadURL('https://www.electronjs.org/docs/api/remote');
    }}>
      Open BrowserWindow
    </button>
  );

}



//// SHOW OPEN FILE DIALOG ////

import React from 'react';
const electron = window.require('electron');
const { shell } = window.require('electron');
const remote = electron.remote;
const { dialog } = remote;

export default function App() {
  return (
    <button onClick={() => {
      dialog.showOpenDialog(
        {
          title: 'Open Dialogue',
          message: 'First Dialog',
          //pass 'openDirectory' to strictly open directories
          properties: ['openFile'],
          filters: [
            { name: 'Images', extensions: ['jpg', 'png', 'gif'] },
            { name: 'Movies', extensions: ['mkv', 'avi', 'mp4'] },
            { name: 'Custom File Type', extensions: ['as'] },
            { name: 'All Files', extensions: ['*'] }
          ],
        }
      ).then(result => {
        shell.openPath(result.filePaths[0]); // e.g. open file natively
        console.log(result.filePaths[0]);
      });
    }}>
      Open Dialog to Select a file
    </button>
  );
};


// ipcMain/ipcRenderer act using a channel/listener setup, similar (perhaps)
// to how a parent page would communicate to an iframe. not sure in
// what situations this would be of use...yet.
