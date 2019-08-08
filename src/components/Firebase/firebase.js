import React from 'react';

import app from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

import firebaseConfig from './config';

export class Firebase extends React.Component {
  constructor(props) {
    super(props);

    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.firestore = app.firestore();
  }
}