import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

@Component({
  selector: "app-nuestros-viniedos",
  templateUrl: "./nuestros-viniedos.component.html",
  styleUrls: ["./nuestros-viniedos.component.scss"],
  animations: [
    trigger("fadeAnimation", [
      state("in", style({ opacity: 1 })),

      transition(":enter", [style({ opacity: 0 }), animate(600)]),

      transition(":leave", animate(600, style({ opacity: 0 })))
    ])
  ]
})
export class NuestrosViniedosComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
