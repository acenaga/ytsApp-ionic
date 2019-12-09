import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
    declarations: [
        MoviesComponent,
        MovieComponent
    ],
    exports: [
        MoviesComponent,
        MovieComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ]

})
export class ComponentsModule {  }
