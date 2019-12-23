import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersCollection: AngularFirestoreCollection<User>;
  userDoc: AngularFirestoreDocument<User>;
  users: Observable<User[]>;
  user: Observable<User>;

  constructor(private afs: AngularFirestore) {
    this.usersCollection = this.afs.collection('User', ref => ref.orderBy('last_name', 'asc'));
  }

  getUsers(): Observable<User[]> {
    //Get users with the id
    this.users = this.usersCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as User;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
    return this.users;
  }

  newUser(user: User) {
    this.usersCollection.add(user);
  }

  getUser(id: string): Observable<User> {
    this.userDoc = this.afs.doc<User>(`user/${id}`);
    this.user = this.userDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as User;
        data.id = action.payload.id;
        return data;
      }
    }));
    return this.user;
  }

  updateUser(client: User) {
    this.userDoc = this.afs.doc(`user/${client.id}`);
    this.userDoc.update(client);
  }

  deleteUser(client: User) {
    this.userDoc = this.afs.doc(`user/${client.id}`);
    this.userDoc.delete();
  }

}