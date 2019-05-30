import { Injectable } from '@angular/core';
import * as flogin from 'firebase/app';
import { resolve } from 'url';
import { reject } from 'q';




@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  registerUser(user){
    return new Promise<any>( (resolve, reject) => {
      flogin.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(
          res => resolve(res),
          err => reject(err)
        )

    }); 
  }

  loginUser(user){
    return new Promise<any> ( (resolve, reject) => {
      flogin.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }




}
