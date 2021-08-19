import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Anime } from 'src/app/entidades/anime';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  anime:Anime = {} as Anime;
  animes:any;

  constructor(
    private http: HttpClient, 
    private activatedRoiuter:ActivatedRoute
  ) {
    http.get('https://api.aniapi.com/v1/anime/')
    .subscribe(response=>{this.animes=response});

    console.log(this.animes);
  }

  ngOnInit(): void {
  }

}
