import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FilmCardComponent} from './film-card.component';

import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../../../environments/environment";
import {AngularFireAnalyticsModule} from "@angular/fire/analytics";
import {AppRoutingModule} from "../../app-routing.module";

describe('FilmCardComponent', () => {
  let component: FilmCardComponent;
  let fixture: ComponentFixture<FilmCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilmCardComponent],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAnalyticsModule,
        AngularFirestoreModule,
        AppRoutingModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmCardComponent);
    component = fixture.componentInstance;
    component.film = {
      id: "string",
      title: "string",
      image: "string",
      genre: "string",
      year: "string",
      count: 1,
      desc: "string",
      director: "string",
      actor: "string",
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as Film '${JSON.stringify({
    id: "string",
    title: "string",
    image: "string",
    genre: "string",
    year: "string",
    count: 1,
    desc: "string",
    director: "string",
    actor: "string",
  })}'`, () => {
    expect(JSON.stringify(component.film)).toEqual(JSON.stringify({
      id: "string",
      title: "string",
      image: "string",
      genre: "string",
      year: "string",
      count: 1,
      desc: "string",
      director: "string",
      actor: "string",
    }));
  });
});
