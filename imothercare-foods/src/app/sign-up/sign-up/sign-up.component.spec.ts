import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SignUpComponent } from "./sign-up.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("SignUpComponent", () => {

  let fixture: ComponentFixture<SignUpComponent>;
  let component: SignUpComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [SignUpComponent]
    });

    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
