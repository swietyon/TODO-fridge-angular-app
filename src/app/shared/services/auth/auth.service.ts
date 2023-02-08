import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Todo } from '../todo/todo.types';
import { map, Observable } from 'rxjs';
import { getUserUid } from '../todo/todo.repository';


const data = {
  id: "fdafadfad",
  title: '',
  todoText: '',
  date: new Date(),
  priority: "low",
  userId: ''
}
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: any;
  snapshotChangesSubscription: any;
  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    private firestore: AngularFirestore,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    // Setting logged in user in localstorage else null
    this.setUserData();
  }
  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user != null ? true : false;
  }

  // Sign in with Google
  async GoogleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }
  // Sign in with Facebook
  async FacebookAuth() {
    const provider = new firebase.auth.FacebookAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }
  // Sign in with Github
  async GithubAuth() {
    const provider = new firebase.auth.GithubAuthProvider()
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }
  // Sign in with Twitter
  async TwitterAuth() {
    const provider = new firebase.auth.TwitterAuthProvider()
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }
  private updateUserData(user: firebase.User | null): void {
    this.userData = user;
    localStorage.setItem('user', JSON.stringify(this.userData));
    JSON.parse(localStorage.getItem('user')!);
    this.router.navigate(['/dashboard']);
  }
  private setUserData() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
        this.router.navigate(['/dashboard']);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
        this.router.navigate(['/login']);
      }
    });
  }

  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result: any) => {
        this.ngZone.run(() => {
          this.router.navigate(['/dashboard']);
        });
      })
      .catch((error: any) => {
        window.alert(error);
      });
  }
  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    });
  }

  addTodoToFirestore(data: Todo) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("todos")
        .add(data)
        .then(res => { console.log(res) }, err => reject(err));
    });
  }

  deleteTodoFromFirestore(id: string) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("todos")
        .doc(id)
        .delete()
        .then(res => { console.log(res) }, err => reject(err));
    });
  }

  editTodoInFirestore(id: string, data: Todo) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("todos")
        .doc(id)
        .update(data)
        .then(res => { console.log(res) }, err => reject(err));
    });
  }

  getTodosFromFirestore(): Observable<Todo[]> {
    // const currentUserUid = getUserUid();
    return this.firestore
      .collection('todos', ref => ref.where('userId', '==', 'currentUserUid'))
      .get()
      .pipe(
        map((querySnapshot: { docs: any[]; }) => {
          return querySnapshot.docs.map((doc: { data: () => any; id: any; }) => {
            const data = doc.data();
            return { id: doc.id, ...data } as Todo;
          });
        })
      );
  }

  getTasks(){
    return new Promise<any>((resolve, reject) => {
      this.afAuth.user.subscribe(currentUser => {
        if(currentUser){
          this.snapshotChangesSubscription = this.firestore.collection('todos').doc(currentUser.uid).collection('tasks').snapshotChanges();
          resolve(this.snapshotChangesSubscription);
        }
      })
    });
  }
}