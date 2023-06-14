import {NgModule} from "@angular/core";
import {ListComponent} from "./components/list/list.component";
import {HeroComponent} from "./components/hero/hero.component";
import {AppComponent} from "../app.component";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    ListComponent,
    HeroComponent
  ],
  exports: [
    ListComponent,
    HeroComponent
  ],
  providers: [],
  imports: [
    // NgIf,
    // NgForOf
    CommonModule
  ],
  bootstrap: [AppComponent]
})

export class HeroeModule { }
