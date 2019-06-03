import { Injectable } from '@angular/core';
import {Physicus} from '../model/physicus';
import { Observable } from 'rxjs';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/firestore';

import {map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  avaliados: Observable<Physicus[]>;
  avaliado: AngularFirestoreDocument<Physicus>;
  avaliadoCollection: AngularFirestoreCollection<Physicus>;

  constructor(private afs: AngularFirestore) {
    this.avaliadoCollection = this.afs.collection<Physicus>('dadoscadastrais');

    this.avaliados = this.avaliadoCollection.snapshotChanges()
    .pipe(
      map( actions =>{
        return actions.map( a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        })
      })
    )
   }

  getCadastros(): Observable<Physicus[]> {
    return this.avaliados
  }

  add( avaliado: Physicus): Promise<DocumentReference>{
    return this.avaliadoCollection.add(avaliado)
  }

}
