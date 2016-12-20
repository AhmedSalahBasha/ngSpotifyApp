import { Injectable } from '@angular/core';
import {Projects} from "../../projects";

@Injectable()
export class ProjectsService {
  private _projects: Projects[] = [
    new Projects("Recipe-Book", "Angular 2.0", "https://avatars0.githubusercontent.com/u/139426?v=3&s=400","https://ahmedsalahbasha.github.io"),
    new Projects("Expert-Chat","NodeJS & SocketIO","https://openfin.co/wp-content/uploads/2015/05/nodejs_logo.png","http://expert-chat.herokuapp.com/"),
    new Projects("Egy-Housing","MEAN Stack","http://mean.jediupc.com/img/logo-mean.png","https://lit-escarpment-21150.herokuapp.com/"),
    new Projects("A.Salah-Blog","PHP & MySQL","http://www.foxinfosoft.com/images/php-mysql-development.png","http://ahmedsalah.byethost14.com/"),
    new Projects("Colors-Game","JavaScript","https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png","https://ahmedsalahbasha.github.io/colors-game/"),
    new Projects("Live-Search","JQuery & AJAX","http://odutta.me/img/icons/ajax.png","https://ahmedsalahbasha.github.io/ajax-livesearch/")
  ];

  constructor() { }

  getProjects(){
    return this._projects;
  }



}
