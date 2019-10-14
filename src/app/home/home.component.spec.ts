import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HomeComponent } from "./home.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("HomeComponent", () => {

  let fixture: ComponentFixture<HomeComponent>;
  let component: HomeComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [HomeComponent]
    });

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
