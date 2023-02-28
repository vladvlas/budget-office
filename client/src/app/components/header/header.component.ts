import { Component, OnInit} from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})

export class HeaderComponent implements OnInit{

  ngOnInit() {
  }

  scroll() {
    const form = document.getElementById("#registration") as HTMLElement;
    scrollTo({
      top: form.offsetTop,
      behavior: "smooth"
    })
  }
}
