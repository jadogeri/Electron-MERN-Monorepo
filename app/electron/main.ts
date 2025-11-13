import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import installExtension, { REACT_DEVELOPER_TOOLS } from "electron-devtools-installer";
//import installExtension, { REACT_DEVELOPER_TOOLS } from "@daltonmenezes/electron-devtools-installer";
import {app as expressServer } from "../src/server/index"
import { connectDB } from "../src/database/connectDB"
import { EXPRESS_APP_PORT } from '../src/server/index';

function createWindow() {

    connectDB().then(()=>{

      
    
      expressServer.listen(EXPRESS_APP_PORT, () => {
      console.log(`Express server running on port ${EXPRESS_APP_PORT}`);
  });


  })


  const win = new BrowserWindow({
//  frame: false,
    width: 1000,
    height: 700,
    // useContentSize: true,
    center : true,
    // backgroundColor: '#000000',
    // transparent: true,
     resizable: true,
    // x: 20,
    // y: 500 - 450,
    // zoomToPageWidth : true,
    webPreferences: {
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js'),
      webSecurity: false// by pass cors - dev only  
       }
  })

  if (app.isPackaged) {
    // 'build/index.html'
    win.loadURL(`file://${__dirname}/../index.html`);
  } else {
    win.loadURL('http://localhost:3000/index.html');
     win.center(); // Center the window
     

    win.webContents.openDevTools();

win.webContents.session.webRequest.onBeforeSendHeaders(
    (details, callback) => {
        const { requestHeaders } = details;
        UpsertKeyValue(requestHeaders, 'Origin', '*');
        UpsertKeyValue(requestHeaders, 'Sec-Fetch-Mode', 'no-cors');
        UpsertKeyValue(requestHeaders, 'Sec-Fetch-Site', 'none');
        UpsertKeyValue(requestHeaders, 'Sec-Fetch-Dest', 'document');
        callback({
          requestHeaders,
        });
    },
);

win.webContents.session.webRequest.onBeforeSendHeaders(
  (details, callback) => {
    const { requestHeaders } = details;
    UpsertKeyValue(requestHeaders, 'Access-Control-Allow-Origin', ['*']);
    callback({ requestHeaders });
  },
);

win.webContents.session.webRequest.onHeadersReceived((details, callback) => {
  const { responseHeaders } = details;
  UpsertKeyValue(responseHeaders as Record<string, string[]>, 'Access-Control-Allow-Origin', ['*']);
  UpsertKeyValue(responseHeaders as Record<string, string[]>, 'Access-Control-Allow-Headers', ['*']);
  callback({
    responseHeaders,
  });
});

   // Hot Reloading on 'node_modules/.bin/electronPath'
    require('electron-reload')(__dirname, {
      electron: path.join(__dirname,
        '..',
        '..',
        'node_modules',
        '.bin',
        'electron' + (process.platform === "win32" ? ".cmd" : "")),
      forceHardReset: true,
      hardResetMethod: 'exit'
    });
  }
}

app.whenReady().then(() => {
  // DevTools
  installExtension(REACT_DEVELOPER_TOOLS, {
      forceDownload: false,
      //sessionId: 'persist:my-app', // custom session partition
      loadExtensionOptions: {
        allowFileAccess: true,
      },
    })
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
});

function UpsertKeyValue(obj: { [x: string]: any; }, keyToChange: string, value: any) {
  const keyToChangeLower = keyToChange.toLowerCase();
  for (const key of Object.keys(obj)) {
    if (key.toLowerCase() === keyToChangeLower) {
      // Reassign old key
      obj[key] = value;
      // Done
      return;
    }
  }
  // Insert at end instead
  obj[keyToChange] = value;
}